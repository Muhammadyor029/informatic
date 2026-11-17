import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Check,
  Code2,
  Cpu,
  Laptop,
  Network,
  PenTool,
  Play,
  Plus,
  Router,
  Server,
  StepForward,
  Trash2,
  Wifi,
} from 'lucide-react';
import type { BlocksConfig, HtmlPlayConfig, NetBuilderConfig } from '../../data/plan/types';
import { EngineActionRow, EngineStatusFooter, type BaseEngineProps } from './EngineShared';

/* =========================================================
   9. BLOCKS ENGINE (SCRATCH-STYLE VISUAL BLOCKS + STAGE)
   ========================================================= */
type BlockType = BlocksConfig['availableBlocks'][number];

const BLOCK_META: Record<BlockType, { label: string; color: string }> = {
  move: { label: 'Oldinga yur (1 katak)', color: 'bg-blue-600' },
  turnRight: { label: 'O‘ngga buril ↻ 90°', color: 'bg-indigo-600' },
  turnLeft: { label: 'Chapga buril ↺ 90°', color: 'bg-violet-600' },
  repeat2: { label: 'Takrorla 2x: Oldinga', color: 'bg-amber-600' },
  repeat3: { label: 'Takrorla 3x: Oldinga', color: 'bg-amber-600' },
  repeat4: { label: 'Takrorla 4x: Oldinga', color: 'bg-amber-600' },
  penDown: { label: 'Qalamni tushir (Pen)', color: 'bg-emerald-600' },
};

const DIR_DELTA: Record<'R' | 'L' | 'U' | 'D', [number, number]> = {
  R: [1, 0],
  D: [0, 1],
  L: [-1, 0],
  U: [0, -1],
};

const DIR_RIGHT: Record<'R' | 'L' | 'U' | 'D', 'R' | 'L' | 'U' | 'D'> = {
  R: 'D',
  D: 'L',
  L: 'U',
  U: 'R',
};

const DIR_LEFT: Record<'R' | 'L' | 'U' | 'D', 'R' | 'L' | 'U' | 'D'> = {
  R: 'U',
  U: 'L',
  L: 'D',
  D: 'R',
};

function expandProgram(blocks: BlockType[]): ('move' | 'turnRight' | 'turnLeft' | 'penDown')[] {
  const out: ('move' | 'turnRight' | 'turnLeft' | 'penDown')[] = [];
  for (const b of blocks) {
    if (b === 'repeat2') out.push('move', 'move');
    else if (b === 'repeat3') out.push('move', 'move', 'move');
    else if (b === 'repeat4') out.push('move', 'move', 'move', 'move');
    else out.push(b);
  }
  return out;
}

export function BlocksGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<BlocksConfig>) {
  const [program, setProgram] = useState<BlockType[]>([]);
  const [pos, setPos] = useState<[number, number]>(config.start);
  const [dir, setDir] = useState<'R' | 'L' | 'U' | 'D'>(config.startDir);
  const [penPath, setPenPath] = useState<[number, number][]>([]);
  const [collected, setCollected] = useState<string[]>([]);
  const [running, setRunning] = useState(false);
  const [statusMsg, setStatusMsg] = useState('Chapdagi bloklardan tanlab dastur yig‘ing.');
  const [solved, setSolved] = useState(false);
  const [warn, setWarn] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const timerRef = useRef<number | null>(null);
  const wonRef = useRef(false);

  function clearTimer() {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  useEffect(() => () => clearTimer(), []);

  function resetStage(keepProgram = false) {
    clearTimer();
    setRunning(false);
    setPos(config.start);
    setDir(config.startDir);
    setPenPath([]);
    setCollected([]);
    setWarn(false);
    setSolved(false);
    if (!keepProgram) {
      setProgram([]);
      setStatusMsg('Chapdagi bloklardan tanlab dastur yig‘ing.');
    }
  }

  function runProgram() {
    if (program.length === 0 || running) return;
    resetStage(true);
    setRunning(true);
    setStatusMsg('Bloklar bajarilmoqda...');

    const ops = expandProgram(program);
    let curX = config.start[0];
    let curY = config.start[1];
    let curDir = config.startDir;
    let penActive = false;
    const trail: [number, number][] = [];
    const picked = new Set<string>();
    let stepIdx = 0;

    const tick = () => {
      if (stepIdx >= ops.length) {
        setRunning(false);
        const atGoal = curX === config.goal[0] && curY === config.goal[1];
        const allCollectibles =
          !config.collectibles ||
          config.collectibles.every(([cx, cy]) => picked.has(`${cx},${cy}`));
        const penOk = !config.requirePen || penActive;

        if (atGoal && allCollectibles && penOk) {
          setSolved(true);
          setWarn(false);
          setStatusMsg('Barakalla! Sprayt barcha shartlarni bajarib nishonga yetdi.');
          if (!wonRef.current) {
            wonRef.current = true;
            onWin(gameId, 100);
          }
        } else {
          setWarn(true);
          if (!penOk) {
            setStatusMsg('Qalam (Pen Down) blokini ham qo‘shishni unutmang.');
          } else if (!allCollectibles) {
            setStatusMsg('Yo‘ldagi barcha nishonlarni yig‘ib olish kerak.');
          } else {
            setStatusMsg('Sprayt ★ nishoniga yetib bormadi — bloklarni to‘g‘rilang.');
          }
        }
        return;
      }

      const op = ops[stepIdx++];
      if (op === 'penDown') {
        penActive = true;
        trail.push([curX, curY]);
        setPenPath([...trail]);
      } else if (op === 'turnRight') {
        curDir = DIR_RIGHT[curDir];
        setDir(curDir);
      } else if (op === 'turnLeft') {
        curDir = DIR_LEFT[curDir];
        setDir(curDir);
      } else if (op === 'move') {
        const [dx, dy] = DIR_DELTA[curDir];
        const nx = curX + dx;
        const ny = curY + dy;
        if (nx < 0 || ny < 0 || nx >= config.gridSize || ny >= config.gridSize) {
          setRunning(false);
          setWarn(true);
          setStatusMsg('Chegaradan chiqib ketdi! Qadamlarni tekshiring.');
          return;
        }
        curX = nx;
        curY = ny;
        setPos([curX, curY]);
        if (penActive) {
          trail.push([curX, curY]);
          setPenPath([...trail]);
        }
        if (config.collectibles?.some(([cx, cy]) => cx === curX && cy === curY)) {
          picked.add(`${curX},${curY}`);
          setCollected(Array.from(picked));
        }
      }

      timerRef.current = window.setTimeout(tick, 260);
    };

    timerRef.current = window.setTimeout(tick, 180);
  }

  const arrowChar = dir === 'R' ? '▶' : dir === 'L' ? '◀' : dir === 'U' ? '▲' : '▼';

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="grid gap-5 lg:grid-cols-12">
        {/* Palette + Script */}
        <div className="space-y-4 lg:col-span-6">
          <div>
            <div className="mb-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
              Bloklar palitrasi (bosib qo‘shing)
            </div>
            <div className="flex flex-wrap gap-2">
              {config.availableBlocks.map((b) => (
                <button
                  key={b}
                  type="button"
                  disabled={running}
                  onClick={() => setProgram((p) => [...p, b])}
                  className={`inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 disabled:opacity-50 cursor-pointer ${BLOCK_META[b].color}`}
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>{BLOCK_META[b].label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg-well p-3.5">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span>Dastur ketma-ketligi ({program.length})</span>
              {program.length > 0 ? (
                <button
                  type="button"
                  onClick={() => resetStage(false)}
                  className="inline-flex items-center gap-1 text-[#b91c1c] transition hover:underline dark:text-[#ff8589] cursor-pointer"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Tozalash
                </button>
              ) : null}
            </div>

            {program.length === 0 ? (
              <div className="rounded-lg border border-dashed border-slate-900/15 p-4 text-center text-xs text-slate-500 dark:border-white/15">
                Hozircha blok qo‘shilmagan
              </div>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {program.map((b, idx) => (
                  <button
                    key={`${b}-${idx}`}
                    type="button"
                    disabled={running}
                    onClick={() => setProgram((prev) => prev.filter((_, i) => i !== idx))}
                    title="Olib tashlash"
                    className={`inline-flex min-h-[36px] items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold text-white cursor-pointer ${BLOCK_META[b].color}`}
                  >
                    <span className="opacity-70">{idx + 1}.</span>
                    <span>{BLOCK_META[b].label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Grid Stage */}
        <div className="lg-well flex flex-col items-center justify-center p-4 lg:col-span-6">
          <div
            className="grid w-full max-w-[340px] gap-1.5"
            style={{
              gridTemplateColumns: `repeat(${config.gridSize}, minmax(0, 48px))`,
            }}
          >
            {Array.from({ length: config.gridSize * config.gridSize }).map((_, idx) => {
              const x = idx % config.gridSize;
              const y = Math.floor(idx / config.gridSize);
              const isSprite = pos[0] === x && pos[1] === y;
              const isGoal = config.goal[0] === x && config.goal[1] === y;
              const hasPen = penPath.some(([px, py]) => px === x && py === y);
              const isCoin =
                config.collectibles?.some(([cx, cy]) => cx === x && cy === y) &&
                !collected.includes(`${x},${y}`);

              return (
                <div
                  key={`${x}-${y}`}
                  className={`flex aspect-square items-center justify-center rounded-xl border text-base font-bold transition ${
                    isSprite
                      ? 'border-[#c81b1c] bg-[#c81b1c] text-white shadow'
                      : isGoal
                      ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-600 dark:text-emerald-300'
                      : hasPen
                      ? 'border-sky-500/50 bg-sky-500/20 text-sky-600'
                      : 'border-slate-900/12 bg-white/60 dark:border-white/12 dark:bg-white/[0.04]'
                  }`}
                >
                  {isSprite ? arrowChar : isGoal ? '★' : isCoin ? '◆' : hasPen ? <PenTool className="h-3.5 w-3.5" /> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={() => resetStage(false)}
        hintText={config.hint}
        extraControls={
          <button
            type="button"
            disabled={running || program.length === 0}
            onClick={runProgram}
            className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white disabled:opacity-50 cursor-pointer"
          >
            {running ? <StepForward className="h-4 w-4 animate-pulse" /> : <Play className="h-4 w-4" />}
            <span>{running ? 'Bajarilmoqda...' : 'Ishga tushirish'}</span>
          </button>
        }
      />

      <EngineStatusFooter
        solved={solved}
        isWarn={warn}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={statusMsg}
      />
    </div>
  );
}

/* =========================================================
   10. HTMLPLAY ENGINE (SANDBOXED HTML5/CSS/JS LIVE PREVIEW)
   ========================================================= */
export function HtmlPlayGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<HtmlPlayConfig>) {
  const [code, setCode] = useState(config.starterCode);
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const wonRef = useRef(false);

  const checkResults = useMemo(
    () =>
      config.checks.map((chk) => {
        try {
          const re = new RegExp(chk.pattern, chk.flags ?? 'i');
          return { label: chk.label, ok: re.test(code) };
        } catch {
          return { label: chk.label, ok: false };
        }
      }),
    [code, config.checks],
  );

  const allPassed = checkResults.every((r) => r.ok);
  const solved = checked && allPassed;
  const wrong = checked && !allPassed;

  function verifyCode() {
    setChecked(true);
    if (allPassed && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }

  function reset() {
    setCode(config.starterCode);
    setChecked(false);
    setShowHint(false);
  }

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Code Editor */}
        <div className="flex flex-col">
          <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <Code2 className="h-4 w-4 text-[#b91c1c] dark:text-[#ff8589]" />
            <span>HTML / CSS / JS kodi</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => {
              setChecked(false);
              setCode(e.target.value);
            }}
            spellCheck={false}
            rows={10}
            className="w-full flex-1 rounded-xl border border-slate-900/15 bg-slate-950 p-3.5 font-mono-jb text-xs leading-relaxed text-emerald-300 focus:border-[#c81b1c] focus:outline-none dark:border-white/15"
          />
        </div>

        {/* Sandboxed Iframe Preview */}
        <div className="flex flex-col">
          <div className="mb-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
            Jonli brauzer ko‘rinishi (Sandbox)
          </div>
          <iframe
            title="HTML Preview"
            sandbox="allow-scripts"
            srcDoc={code}
            className="min-h-[220px] w-full flex-1 rounded-xl border border-slate-900/15 bg-white dark:border-white/15"
          />
        </div>
      </div>

      {/* Requirement checklist */}
      <div className="mt-3 flex flex-wrap gap-2">
        {checkResults.map((r) => (
          <span
            key={r.label}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono-jb text-xs ${
              r.ok
                ? 'border-emerald-500/40 bg-emerald-500/12 text-emerald-700 dark:text-emerald-300'
                : 'border-slate-900/12 bg-white/60 text-slate-600 dark:border-white/12 dark:bg-white/[0.04] dark:text-slate-300'
            }`}
          >
            <span>{r.ok ? '✓' : '○'}</span>
            <span>{r.label}</span>
          </span>
        ))}
      </div>

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={reset}
        hintText={config.hint}
        extraControls={
          <button
            type="button"
            onClick={verifyCode}
            className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white cursor-pointer"
          >
            <Check className="h-4 w-4" />
            <span>Kodni tekshirish</span>
          </button>
        }
      />

      <EngineStatusFooter
        solved={solved}
        isWarn={wrong}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? 'A’lo! Barcha HTML/CSS talablari bajarildi.'
            : wrong
            ? 'Yuqoridagi shartlardan kamida bittasi hali bajarilmagan.'
            : 'Kodni tahrirlab natijani o‘ng oynada kuzating va tekshiring.'
        }
      />
    </div>
  );
}

/* =========================================================
   12. NETBUILDER ENGINE (TOPOLOGY DEVICE CABLE CONNECTOR)
   ========================================================= */
function DeviceIcon({ type }: { type: NetBuilderConfig['devices'][number]['type'] }) {
  switch (type) {
    case 'modem':
      return <Cpu className="h-5 w-5" />;
    case 'router':
      return <Router className="h-5 w-5" />;
    case 'switch':
      return <Network className="h-5 w-5" />;
    case 'server':
      return <Server className="h-5 w-5" />;
    case 'ap':
      return <Wifi className="h-5 w-5" />;
    default:
      return <Laptop className="h-5 w-5" />;
  }
}

function linkKey(a: string, b: string): string {
  return [a, b].sort().join('--');
}

export function NetBuilderGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<NetBuilderConfig>) {
  const [selectedDev, setSelectedDev] = useState<string | null>(null);
  const [links, setLinks] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const wonRef = useRef(false);

  const requiredSet = useMemo(
    () => new Set(config.requiredLinks.map(([a, b]) => linkKey(a, b))),
    [config.requiredLinks],
  );

  const isCorrect =
    links.length === requiredSet.size && links.every((lk) => requiredSet.has(lk));

  const solved = checked && isCorrect;
  const wrong = checked && !isCorrect;

  function clickDevice(id: string) {
    setChecked(false);
    if (selectedDev === null) {
      setSelectedDev(id);
      return;
    }
    if (selectedDev === id) {
      setSelectedDev(null);
      return;
    }
    const key = linkKey(selectedDev, id);
    setLinks((prev) => (prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]));
    setSelectedDev(null);
  }

  function verifyNetwork() {
    setChecked(true);
    if (isCorrect && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }

  function reset() {
    setSelectedDev(null);
    setLinks([]);
    setChecked(false);
    setShowHint(false);
  }

  const labelById = useMemo(() => {
    const m: Record<string, string> = {};
    for (const d of config.devices) m[d.id] = d.label;
    return m;
  }, [config.devices]);

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      {/* Click-to-connect Devices Grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {config.devices.map((dev) => {
          const isPicked = selectedDev === dev.id;
          const connectedCount = links.filter((lk) => lk.split('--').includes(dev.id)).length;
          return (
            <button
              key={dev.id}
              type="button"
              onClick={() => clickDevice(dev.id)}
              className={`lg-well flex min-h-[70px] items-center justify-between gap-3 px-4 py-3 text-left transition cursor-pointer ${
                isPicked
                  ? 'border-[#c81b1c] bg-[#c81b1c]/15 ring-2 ring-[#c81b1c]'
                  : 'hover:border-[#c81b1c]/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dc2626]/15 text-[#b91c1c] dark:text-[#ff8589]">
                  <DeviceIcon type={dev.type} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-950 dark:text-white">
                    {dev.label}
                  </div>
                  <div className="font-mono-jb text-[11px] text-slate-500 dark:text-slate-400">
                    Ulanish: {connectedCount} ta
                  </div>
                </div>
              </div>
              <span className="font-mono-jb text-xs text-slate-400">
                {isPicked ? 'Tanlandi' : 'Ulash'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Cables List */}
      <div className="mt-4 lg-well p-3.5">
        <div className="mb-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
          O‘rnatilgan tarmoq kabellari ({links.length})
        </div>
        {links.length === 0 ? (
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Ikki qurilmani ketma-ket bosib kabel ulang (qayta bossangiz uziladi).
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {links.map((lk) => {
              const [a, b] = lk.split('--');
              return (
                <button
                  key={lk}
                  type="button"
                  onClick={() => {
                    setChecked(false);
                    setLinks((prev) => prev.filter((x) => x !== lk));
                  }}
                  className="inline-flex min-h-[36px] items-center gap-2 rounded-lg border border-slate-900/15 bg-white/75 px-3 py-1 font-mono-jb text-xs text-slate-900 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
                >
                  <span>
                    {labelById[a] ?? a} ⇄ {labelById[b] ?? b}
                  </span>
                  <span className="text-[#c81b1c]">×</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={reset}
        hintText={config.hint}
        extraControls={
          <button
            type="button"
            onClick={verifyNetwork}
            className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white cursor-pointer"
          >
            <Check className="h-4 w-4" />
            <span>Tarmoqni tekshirish</span>
          </button>
        }
      />

      <EngineStatusFooter
        solved={solved}
        isWarn={wrong}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? `Barakalla! ${config.explanation}`
            : wrong
            ? 'Tarmoq ulanishi to‘liq yoki to‘g‘ri emas — maslahatga qarang.'
            : 'Qurilmalarni ketma-ket bosib kerakli kabellarni ulang.'
        }
      />
    </div>
  );
}
