import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  HelpCircle,
  Play,
  RotateCcw,
  Shuffle,
  SkipForward,
  Sparkles,
  Square,
  StepForward,
  XCircle,
} from 'lucide-react';
import type {
  BinaryConfig,
  CipherConfig,
  CodeBugConfig,
  GameItem,
  GraphConfig,
  LogicConfig,
  MatchConfig,
  QuizConfig,
  RobotConfig,
  SequenceConfig,
  SortConfig,
} from '../data/curriculum';

interface EngineProps {
  game: GameItem;
  alreadySolved: boolean;
  onWin: (gameId: string, points: number) => void;
  onNextGame: () => void;
  hasNextGame: boolean;
}

function StatusFooter({
  solved,
  message,
  isWarn,
  alreadySolved,
  hasNextGame,
  onNextGame,
}: {
  solved: boolean;
  message: string;
  isWarn?: boolean;
  alreadySolved: boolean;
  hasNextGame: boolean;
  onNextGame: () => void;
}) {
  return (
    <div
      className={`mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm font-mono-jb transition-colors ${
        solved
          ? 'border-emerald-500/45 bg-emerald-500/12 text-emerald-800 dark:text-emerald-200'
          : isWarn
          ? 'border-amber-500/45 bg-amber-500/12 text-amber-900 dark:text-amber-200'
          : 'border-slate-900/10 bg-slate-900/[0.03] text-slate-700 dark:border-white/12 dark:bg-white/[0.04] dark:text-slate-300'
      }`}
    >
      <div className="flex items-center gap-2.5">
        {solved ? (
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
        ) : isWarn ? (
          <XCircle className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
        ) : null}
        <span>{message}</span>
        {solved && alreadySolved ? (
          <span className="text-xs opacity-75">(Bajarilgan)</span>
        ) : null}
      </div>

      {solved && hasNextGame ? (
        <button
          type="button"
          onClick={onNextGame}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#c81b1c] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#b01617] cursor-pointer"
        >
          <span>Keyingi o‘yin</span>
          <SkipForward className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}

/* =========================================================
   1. SEQUENCE ENGINE
   ========================================================= */
function SequenceGame({
  game,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: {
  game: GameItem;
  config: SequenceConfig;
  alreadySolved: boolean;
  onWin: (id: string, pts: number) => void;
  onNextGame: () => void;
  hasNextGame: boolean;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const solved = selected === config.answer;
  const wrong = selected !== null && !solved;

  function pick(opt: string) {
    setSelected(opt);
    if (opt === config.answer) {
      onWin(game.id, 100);
    }
  }

  return (
    <div>
      <p className="mb-5 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="lg-well mb-6 flex flex-wrap items-center justify-center gap-3 p-6">
        {config.items.map((item, idx) => {
          const isMissing = idx === config.missingIndex;
          return (
            <div
              key={idx}
              className={`flex min-w-[68px] items-center justify-center rounded-xl border px-4 py-4 text-xl font-bold font-mono-jb transition-all ${
                isMissing
                  ? solved
                    ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                    : 'border-[#c81b1c]/60 bg-[#c81b1c]/12 text-[#c81b1c] dark:text-red-300'
                  : 'border-slate-900/12 bg-white/70 text-slate-900 dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
              }`}
            >
              {isMissing ? (selected ?? '?') : item}
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {config.options.map((opt) => {
          const isCur = selected === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => pick(opt)}
              className={`min-h-[52px] rounded-xl border px-4 py-3.5 text-base font-bold font-mono-jb transition-all cursor-pointer ${
                isCur && solved
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-800 dark:text-emerald-200'
                  : isCur && wrong
                  ? 'border-amber-500 bg-amber-500/20 text-amber-900 dark:text-amber-200'
                  : 'border-slate-900/12 bg-white/60 text-slate-900 hover:border-slate-900/35 dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:hover:border-white/40'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <StatusFooter
        solved={solved}
        isWarn={wrong}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? `To‘g‘ri! ${config.explanation}`
            : wrong
            ? 'Mos kelmadi — qonuniyatni yana bir bor tekshirib ko‘ring.'
            : 'Bo‘sh katakka mos variantni tanlang.'
        }
      />
    </div>
  );
}

/* =========================================================
   2. ROBOT GRID ENGINE
   ========================================================= */
type Dir = 'U' | 'D' | 'L' | 'R';

function RobotGame({
  game,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: {
  game: GameItem;
  config: RobotConfig;
  alreadySolved: boolean;
  onWin: (id: string, pts: number) => void;
  onNextGame: () => void;
  hasNextGame: boolean;
}) {
  const [queue, setQueue] = useState<Dir[]>([]);
  const [pos, setPos] = useState<[number, number]>(config.start);
  const [running, setRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [solved, setSolved] = useState(false);
  const [crashed, setCrashed] = useState(false);
  const [missed, setMissed] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  function isWall(x: number, y: number) {
    return config.walls.some(([wx, wy]) => wx === x && wy === y);
  }

  function resetRun() {
    if (timerRef.current) window.clearInterval(timerRef.current);
    setRunning(false);
    setActiveStep(null);
    setPos(config.start);
    setCrashed(false);
    setMissed(false);
  }

  function addDir(d: Dir) {
    if (running || solved || queue.length >= config.maxSteps) return;
    setCrashed(false);
    setMissed(false);
    setQueue((prev) => [...prev, d]);
  }

  function runProgram() {
    if (running || queue.length === 0) return;
    resetRun();
    setRunning(true);
    let step = 0;
    let cx = config.start[0];
    let cy = config.start[1];

    timerRef.current = window.setInterval(() => {
      if (step >= queue.length) {
        if (timerRef.current) window.clearInterval(timerRef.current);
        setRunning(false);
        setActiveStep(null);
        setMissed(true);
        return;
      }
      setActiveStep(step);
      const d = queue[step];
      step++;
      const nx = cx + (d === 'R' ? 1 : d === 'L' ? -1 : 0);
      const ny = cy + (d === 'D' ? 1 : d === 'U' ? -1 : 0);

      if (nx < 0 || ny < 0 || nx >= config.size || ny >= config.size || isWall(nx, ny)) {
        if (timerRef.current) window.clearInterval(timerRef.current);
        setRunning(false);
        setActiveStep(null);
        setCrashed(true);
        return;
      }

      cx = nx;
      cy = ny;
      setPos([cx, cy]);

      if (cx === config.goal[0] && cy === config.goal[1]) {
        if (timerRef.current) window.clearInterval(timerRef.current);
        setRunning(false);
        setActiveStep(null);
        setSolved(true);
        onWin(game.id, 120);
      }
    }, 230);
  }

  const dirLabels: Record<Dir, React.ReactNode> = {
    U: <ArrowUp className="h-4 w-4" />,
    D: <ArrowDown className="h-4 w-4" />,
    L: <ArrowLeft className="h-4 w-4" />,
    R: <ArrowRight className="h-4 w-4" />,
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <div className="lg-well flex flex-col items-center justify-center p-5">
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: `repeat(${config.size}, minmax(0, 1fr))`,
            width: '100%',
            maxWidth: '340px',
          }}
        >
          {Array.from({ length: config.size * config.size }).map((_, i) => {
            const x = i % config.size;
            const y = Math.floor(i / config.size);
            const wall = isWall(x, y);
            const isBot = pos[0] === x && pos[1] === y;
            const isGoal = config.goal[0] === x && config.goal[1] === y;

            return (
              <div
                key={`${x}-${y}`}
                className={`aspect-square flex items-center justify-center rounded-lg border text-xs font-bold font-mono-jb transition-all ${
                  wall
                    ? 'border-slate-900/20 bg-slate-900/25 text-slate-600 dark:border-white/10 dark:bg-white/[0.12] dark:text-white/50'
                    : isBot
                    ? 'border-[#c81b1c] bg-[#c81b1c] text-white shadow-md'
                    : isGoal
                    ? 'border-emerald-500/60 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                    : 'border-slate-900/10 bg-white/50 dark:border-white/10 dark:bg-white/[0.03]'
                }`}
              >
                {isBot ? 'BOT' : isGoal ? '★' : wall ? '■' : ''}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div>
          <p className="mb-3 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>
          <div className="mb-3 flex items-center justify-between text-xs font-mono-jb text-slate-600 dark:text-slate-400">
            <span>
              Buyruqlar: <strong>{queue.length}</strong> / {config.maxSteps}
            </span>
            <button
              type="button"
              onClick={() => setShowHint((v) => !v)}
              className="inline-flex items-center gap-1 underline-offset-2 hover:underline cursor-pointer"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Maslahat</span>
            </button>
          </div>

          {showHint ? (
            <p className="mb-3 rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-xs text-sky-900 dark:text-sky-200">
              {config.hint}
            </p>
          ) : null}

          <div className="mb-4 grid grid-cols-4 gap-2.5">
            {(['U', 'D', 'L', 'R'] as Dir[]).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => addDir(d)}
                className="flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl border border-slate-900/15 bg-white/70 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900/40 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:border-white/40 cursor-pointer"
                aria-label={d}
              >
                {dirLabels[d]}
              </button>
            ))}
          </div>

          <div className="lg-well min-h-[76px] p-3">
            {queue.length === 0 ? (
              <span className="text-xs font-mono-jb text-slate-500 dark:text-slate-400">
                Yuqoridagi yo‘nalish tugmalarini bosib buyruqlar ketma-ketligini yig‘ing...
              </span>
            ) : (
              <div className="flex flex-wrap gap-2">
                {queue.map((d, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => !running && !solved && setQueue((q) => q.filter((_, k) => k !== idx))}
                    title="O‘chirish"
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition cursor-pointer ${
                      activeStep === idx
                        ? 'border-[#c81b1c] bg-[#c81b1c] text-white scale-105'
                        : 'border-slate-900/15 bg-white/80 text-slate-900 dark:border-white/20 dark:bg-white/10 dark:text-white'
                    }`}
                  >
                    {dirLabels[d]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={runProgram}
            disabled={running || queue.length === 0}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#c81b1c] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#b01617] disabled:opacity-50 cursor-pointer"
          >
            <Play className="h-4 w-4" />
            <span>Ishga tushirish</span>
          </button>
          <button
            type="button"
            onClick={() => {
              resetRun();
              setQueue([]);
              setSolved(false);
            }}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-slate-900/15 bg-white/60 px-5 py-2.5 text-xs font-semibold text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Tozalash</span>
          </button>
        </div>

        <StatusFooter
          solved={solved}
          isWarn={crashed || missed}
          alreadySolved={alreadySolved}
          hasNextGame={hasNextGame}
          onNextGame={onNextGame}
          message={
            solved
              ? `Ajoyib! Robot ${queue.length} qadamda manzilga yetdi (+120 ball).`
              : crashed
              ? 'Robot to‘siqqa urildi yoki maydondan chiqdi. Yo‘lni o‘zgartiring!'
              : missed
              ? 'Buyruqlar tugadi, lekin robot yulduzchaga (★) yetib bormadi — qo‘shimcha qadam qo‘shing!'
              : 'Buyruqlar yig‘ing va "Ishga tushirish" tugmasini bosing.'
          }
        />
      </div>
    </div>
  );
}

/* =========================================================
   3. CONCEPT MATCH ENGINE
   ========================================================= */
function MatchGame({
  game,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: {
  game: GameItem;
  config: MatchConfig;
  alreadySolved: boolean;
  onWin: (id: string, pts: number) => void;
  onNextGame: () => void;
  hasNextGame: boolean;
}) {
  const shuffledRight = useMemo(() => {
    const copy = config.pairs.map((p, idx) => ({ text: p.right, idx }));
    for (let i = copy.length - 1; i > 0; i--) {
      const j = (i * 7 + game.id.length) % (i + 1);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, [config.pairs, game.id]);

  const [selLeft, setSelLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [errPair, setErrPair] = useState(false);
  const [wrongRightIdx, setWrongRightIdx] = useState<number | null>(null);

  const solved = matched.length === config.pairs.length;

  function chooseRight(originalIdx: number) {
    if (selLeft === null || matched.includes(originalIdx)) return;
    if (selLeft === originalIdx) {
      const next = [...matched, originalIdx];
      setMatched(next);
      setSelLeft(null);
      setErrPair(false);
      setWrongRightIdx(null);
      if (next.length === config.pairs.length) {
        onWin(game.id, 100);
      }
    } else {
      setErrPair(true);
      setWrongRightIdx(originalIdx);
    }
  }

  return (
    <div>
      <p className="mb-5 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2.5">
          {config.pairs.map((p, idx) => {
            const done = matched.includes(idx);
            const active = selLeft === idx;
            return (
              <button
                key={p.left}
                type="button"
                disabled={done}
                onClick={() => {
                  setSelLeft(idx);
                  setErrPair(false);
                  setWrongRightIdx(null);
                }}
                className={`min-h-[48px] w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold font-mono-jb transition cursor-pointer ${
                  done
                    ? 'border-emerald-500/45 bg-emerald-500/15 text-emerald-800 dark:text-emerald-200'
                    : active
                    ? 'border-[#c81b1c] bg-[#c81b1c]/15 text-[#c81b1c] dark:text-red-200'
                    : 'border-slate-900/12 bg-white/70 text-slate-900 hover:border-slate-900/35 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:border-white/40'
                }`}
              >
                {p.left}
              </button>
            );
          })}
        </div>

        <div className="space-y-2.5">
          {shuffledRight.map((item) => {
            const done = matched.includes(item.idx);
            const isWrong = wrongRightIdx === item.idx;
            return (
              <button
                key={`${item.idx}-${item.text}`}
                type="button"
                disabled={done || selLeft === null}
                onClick={() => chooseRight(item.idx)}
                className={`min-h-[48px] w-full rounded-xl border px-4 py-3 text-left text-sm transition cursor-pointer ${
                  done
                    ? 'border-emerald-500/45 bg-emerald-500/15 text-emerald-800 dark:text-emerald-200'
                    : isWrong
                    ? 'border-amber-500 bg-amber-500/20 text-amber-900 dark:text-amber-200'
                    : selLeft !== null
                    ? 'border-slate-900/20 bg-white/80 text-slate-900 hover:border-[#c81b1c] dark:border-white/25 dark:bg-white/[0.08] dark:text-white'
                    : 'border-slate-900/10 bg-white/45 text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300'
                }`}
              >
                {item.text}
              </button>
            );
          })}
        </div>
      </div>

      <StatusFooter
        solved={solved}
        isWarn={errPair}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? 'Barcha tushunchalar to‘g‘ri juftlandi! (+100 ball)'
            : errPair
            ? 'Bu juftlik mos kelmadi. Chapdan tushunchani tanlab, o‘ngdan to‘g‘ri ta’rifini bosing.'
            : `Juftlandi: ${matched.length} / ${config.pairs.length}`
        }
      />
    </div>
  );
}

/* =========================================================
   4. BINARY / HEX SWITCHBOARD ENGINE
   ========================================================= */
function BinaryGame({
  game,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: {
  game: GameItem;
  config: BinaryConfig;
  alreadySolved: boolean;
  onWin: (id: string, pts: number) => void;
  onNextGame: () => void;
  hasNextGame: boolean;
}) {
  const [bits, setBits] = useState<number[]>(() => new Array(config.bits).fill(0));
  const [hintIdx, setHintIdx] = useState<number | null>(null);
  const wonRef = useRef(false);

  const sum = bits.reduce((acc, b, i) => {
    const pow = config.bits - 1 - i;
    return acc + (b ? 1 << pow : 0);
  }, 0);

  const solved = sum === config.target;

  useEffect(() => {
    if (solved && !wonRef.current) {
      wonRef.current = true;
      onWin(game.id, config.bits >= 8 ? 120 : 90);
    }
  }, [solved, game.id, config.bits, onWin]);

  function toggleBit(i: number) {
    setHintIdx(null);
    setBits((prev) => prev.map((v, idx) => (idx === i ? (v ? 0 : 1) : v)));
  }

  function showHint() {
    for (let i = 0; i < config.bits; i++) {
      const pow = config.bits - 1 - i;
      const need = (config.target >> pow) & 1;
      if (bits[i] !== need) {
        setHintIdx(i);
        return;
      }
    }
  }

  const targetText =
    config.displayBase === 'hex'
      ? '0x' + config.target.toString(16).toUpperCase().padStart(2, '0')
      : String(config.target);

  const currentText =
    config.displayBase === 'hex'
      ? '0x' + sum.toString(16).toUpperCase().padStart(2, '0') + ` (${sum})`
      : String(sum);

  const activeWeights = bits
    .map((b, i) => (b ? 1 << (config.bits - 1 - i) : null))
    .filter((x): x is number => x !== null);

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="lg-well p-3.5">
          <div className="text-[11px] font-mono-jb uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Maqsad
          </div>
          <div className="mt-1 text-xl font-bold font-mono-jb text-slate-900 dark:text-white sm:text-2xl">
            {targetText}
          </div>
        </div>
        <div className="lg-well p-3.5">
          <div className="text-[11px] font-mono-jb uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Sizning yig‘indi
          </div>
          <div className="mt-1 text-xl font-bold font-mono-jb text-slate-900 dark:text-white sm:text-2xl">
            {currentText}
          </div>
        </div>
        <div className="lg-well col-span-2 p-3.5 sm:col-span-1">
          <div className="text-[11px] font-mono-jb uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Ikkilik (BIN)
          </div>
          <div className="mt-1.5 text-base font-bold font-mono-jb text-slate-900 dark:text-white">
            {bits.join('')}
          </div>
        </div>
      </div>

      <div
        className={`mb-4 grid gap-2.5 ${
          config.bits > 4 ? 'grid-cols-4 sm:grid-cols-8' : 'grid-cols-4'
        }`}
      >
        {bits.map((b, i) => {
          const pow = config.bits - 1 - i;
          const weight = 1 << pow;
          const isHint = hintIdx === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggleBit(i)}
              className={`flex min-h-[96px] flex-col items-center justify-between rounded-xl border px-2 py-3 font-mono-jb transition cursor-pointer sm:min-h-[108px] ${
                b
                  ? 'border-[#c81b1c] bg-[#c81b1c] text-white shadow-lg shadow-red-600/25'
                  : isHint
                  ? 'border-sky-500 bg-sky-500/15 text-slate-900 dark:text-white'
                  : 'border-slate-900/12 bg-white/70 text-slate-900 hover:border-slate-900/35 dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:hover:border-white/40'
              }`}
            >
              <span className="text-[11px] opacity-75">
                2<sup>{pow}</sup>
              </span>
              <span className="text-2xl font-bold">{b}</span>
              <span className="text-xs font-medium opacity-90">{weight}</span>
            </button>
          );
        })}
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="lg-well px-3.5 py-2.5 text-xs font-mono-jb text-slate-700 dark:text-slate-300">
          {(activeWeights.length ? activeWeights.join(' + ') : '0') + ' = ' + sum}
        </div>
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={showHint}
            className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-slate-900/15 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
          >
            <HelpCircle className="h-4 w-4" />
            <span>Yordam</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setBits(new Array(config.bits).fill(0));
              setHintIdx(null);
            }}
            className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-slate-900/15 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Nollash</span>
          </button>
        </div>
      </div>

      <StatusFooter
        solved={solved}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? `Aniq kodlandi! ${targetText} = ${bits.join('')}₂.`
            : config.hint
        }
      />
    </div>
  );
}

/* =========================================================
   5. LOGIC CIRCUIT ENGINE
   ========================================================= */
function evalGateOp(type: string, x: number, y: number): number {
  if (type === 'AND') return x & y;
  if (type === 'OR') return x | y;
  if (type === 'XOR') return x ^ y;
  if (type === 'NAND') return x & y ? 0 : 1;
  return 0;
}

function LogicGame({
  game,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: {
  game: GameItem;
  config: LogicConfig;
  alreadySolved: boolean;
  onWin: (id: string, pts: number) => void;
  onNextGame: () => void;
  hasNextGame: boolean;
}) {
  const [gates, setGates] = useState<string[]>(() => config.slots.slice());
  const [previewIdx, setPreviewIdx] = useState(config.rows.length - 1);
  const wonRef = useRef(false);

  const evaluations = config.rows.map(([a, b, c, need]) => {
    const g1 = evalGateOp(gates[0], a, b);
    const out = config.choices.length > 1 ? evalGateOp(gates[1], g1, c) : g1;
    return { a, b, c, need, out, ok: out === need };
  });

  const solved = evaluations.every((r) => r.ok);

  useEffect(() => {
    if (solved && !wonRef.current) {
      wonRef.current = true;
      onWin(game.id, 120);
    }
  }, [solved, game.id, onWin]);

  const pr = evaluations[previewIdx] || evaluations[0];
  const g1Out = evalGateOp(gates[0], pr.a, pr.b);
  const labels = config.labels ?? ['A', 'B', 'C'];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
      <div>
        <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

        <div className="lg-well p-4">
          <svg viewBox="0 0 600 200" className="w-full h-auto block" fill="none">
            {config.choices.length === 1 ? (
              <>
                <path d="M74 62 H210" stroke={pr.a ? '#ef2b2d' : 'currentColor'} strokeOpacity={pr.a ? 1 : 0.25} strokeWidth="3" />
                <path d="M74 138 H210" stroke={pr.b ? '#ef2b2d' : 'currentColor'} strokeOpacity={pr.b ? 1 : 0.25} strokeWidth="3" />
                <path d="M350 100 H515" stroke={pr.out ? '#ef2b2d' : 'currentColor'} strokeOpacity={pr.out ? 1 : 0.25} strokeWidth="3.5" />
                <circle cx="56" cy="62" r="22" className="fill-slate-900/10 dark:fill-white/10" stroke={pr.a ? '#ef2b2d' : 'currentColor'} strokeWidth="2" />
                <text x="56" y="67" textAnchor="middle" className="fill-slate-900 dark:fill-white font-mono-jb text-xs font-bold">
                  {labels[0]}={pr.a}
                </text>
                <circle cx="56" cy="138" r="22" className="fill-slate-900/10 dark:fill-white/10" stroke={pr.b ? '#ef2b2d' : 'currentColor'} strokeWidth="2" />
                <text x="56" y="143" textAnchor="middle" className="fill-slate-900 dark:fill-white font-mono-jb text-xs font-bold">
                  {labels[1]}={pr.b}
                </text>
                <rect x="210" y="45" width="140" height="110" rx="14" className="fill-slate-900/85 dark:fill-slate-900/90" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
                <text x="280" y="106" textAnchor="middle" fill="#fff" className="font-bold text-xl">
                  {gates[0]}
                </text>
                <circle cx="540" cy="100" r="25" fill={pr.out ? 'rgba(200,27,28,0.35)' : 'rgba(148,163,184,0.18)'} stroke={pr.out ? '#ef2b2d' : 'currentColor'} strokeWidth="2.5" />
                <text x="540" y="105" textAnchor="middle" className="fill-slate-900 dark:fill-white font-mono-jb text-xs font-bold">
                  OUT={pr.out}
                </text>
              </>
            ) : (
              <>
                <path d="M70 46 H165" stroke={pr.a ? '#ef2b2d' : 'currentColor'} strokeOpacity={pr.a ? 1 : 0.25} strokeWidth="3" />
                <path d="M70 108 H165" stroke={pr.b ? '#ef2b2d' : 'currentColor'} strokeOpacity={pr.b ? 1 : 0.25} strokeWidth="3" />
                <path d="M280 77 H345" stroke={g1Out ? '#ef2b2d' : 'currentColor'} strokeOpacity={g1Out ? 1 : 0.25} strokeWidth="3" />
                <path d="M70 166 H295 V125 H345" stroke={pr.c ? '#ef2b2d' : 'currentColor'} strokeOpacity={pr.c ? 1 : 0.25} strokeWidth="3" />
                <path d="M460 100 H525" stroke={pr.out ? '#ef2b2d' : 'currentColor'} strokeOpacity={pr.out ? 1 : 0.25} strokeWidth="3.5" />
                <circle cx="50" cy="46" r="19" className="fill-slate-900/10 dark:fill-white/10" stroke={pr.a ? '#ef2b2d' : 'currentColor'} strokeWidth="2" />
                <text x="50" y="51" textAnchor="middle" className="fill-slate-900 dark:fill-white font-mono-jb text-xs font-bold">A={pr.a}</text>
                <circle cx="50" cy="108" r="19" className="fill-slate-900/10 dark:fill-white/10" stroke={pr.b ? '#ef2b2d' : 'currentColor'} strokeWidth="2" />
                <text x="50" y="113" textAnchor="middle" className="fill-slate-900 dark:fill-white font-mono-jb text-xs font-bold">B={pr.b}</text>
                <circle cx="50" cy="166" r="19" className="fill-slate-900/10 dark:fill-white/10" stroke={pr.c ? '#ef2b2d' : 'currentColor'} strokeWidth="2" />
                <text x="50" y="171" textAnchor="middle" className="fill-slate-900 dark:fill-white font-mono-jb text-xs font-bold">C={pr.c}</text>
                <rect x="165" y="36" width="115" height="82" rx="12" className="fill-slate-900/85" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
                <text x="222" y="83" textAnchor="middle" fill="#fff" className="font-bold text-lg">{gates[0]}</text>
                <rect x="345" y="60" width="115" height="82" rx="12" className="fill-slate-900/85" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
                <text x="402" y="107" textAnchor="middle" fill="#fff" className="font-bold text-lg">{gates[1]}</text>
                <circle cx="550" cy="100" r="24" fill={pr.out ? 'rgba(200,27,28,0.35)' : 'rgba(148,163,184,0.18)'} stroke={pr.out ? '#ef2b2d' : 'currentColor'} strokeWidth="2.5" />
                <text x="550" y="105" textAnchor="middle" className="fill-slate-900 dark:fill-white font-mono-jb text-xs font-bold">OUT={pr.out}</text>
              </>
            )}
          </svg>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {config.choices.map((opts, sIdx) => (
            <div key={sIdx} className="lg-well p-3">
              <div className="mb-2 text-[11px] font-mono-jb uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Element {sIdx + 1}
              </div>
              <div className="flex flex-wrap gap-2">
                {opts.map((op) => (
                  <button
                    key={op}
                    type="button"
                    onClick={() => setGates((g) => g.map((v, i) => (i === sIdx ? op : v)))}
                    className={`min-h-[40px] rounded-xl border px-3.5 py-2 text-xs font-semibold font-mono-jb transition cursor-pointer ${
                      gates[sIdx] === op
                        ? 'border-[#c81b1c] bg-[#c81b1c] text-white'
                        : 'border-slate-900/15 bg-white/70 text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
                    }`}
                  >
                    {op}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="lg-well overflow-x-auto p-3.5">
          <div className="mb-2 text-xs font-mono-jb text-slate-500 dark:text-slate-400">
            Haqiqat jadvali (Qatorni bosib kuzating)
          </div>
          <table className="w-full text-left text-xs font-mono-jb">
            <thead>
              <tr className="border-b border-slate-900/10 text-slate-500 dark:border-white/10 dark:text-slate-400">
                <th className="py-2 px-2">A</th>
                <th className="py-2 px-2">B</th>
                {config.choices.length > 1 ? <th className="py-2 px-2">C</th> : null}
                <th className="py-2 px-2">Kerak</th>
                <th className="py-2 px-2">Chiqish</th>
                <th className="py-2 px-2">Holat</th>
              </tr>
            </thead>
            <tbody>
              {evaluations.map((r, idx) => (
                <tr
                  key={idx}
                  onClick={() => setPreviewIdx(idx)}
                  className={`cursor-pointer border-b border-slate-900/5 dark:border-white/5 ${
                    previewIdx === idx ? 'bg-slate-900/5 dark:bg-white/10' : ''
                  }`}
                >
                  <td className="py-2 px-2">{r.a}</td>
                  <td className="py-2 px-2">{r.b}</td>
                  {config.choices.length > 1 ? <td className="py-2 px-2">{r.c}</td> : null}
                  <td className="py-2 px-2">{r.need}</td>
                  <td className="py-2 px-2 font-bold">{r.out}</td>
                  <td className={`py-2 px-2 font-semibold ${r.ok ? 'text-emerald-600 dark:text-emerald-400' : 'text-[#c81b1c] dark:text-red-400'}`}>
                    {r.ok ? 'TO‘G‘RI' : 'XATO'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <StatusFooter
          solved={solved}
          alreadySolved={alreadySolved}
          hasNextGame={hasNextGame}
          onNextGame={onNextGame}
          message={
            solved
              ? 'Mantiqiy sxema barcha test qatorlaridan muvaffaqiyatli o‘tdi! (+120 ball)'
              : 'Barcha qatorlar TO‘G‘RI chiqishi uchun elementlarni tanlang.'
          }
        />
      </div>
    </div>
  );
}

/* =========================================================
   6. SORTING ARENA ENGINE
   ========================================================= */
function computeMinSwaps(arr: { value: number }[]) {
  const indexed = arr.map((v, i) => ({ v: v.value, i })).sort((a, b) => a.v - b.v);
  const vis = new Array(arr.length).fill(false);
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vis[i] || indexed[i].i === i) continue;
    let cycle = 0;
    let j = i;
    while (!vis[j]) {
      vis[j] = true;
      j = indexed[j].i;
      cycle++;
    }
    if (cycle > 1) swaps += cycle - 1;
  }
  return swaps;
}

type SortAlgo = 'bubble' | 'selection' | 'insertion' | 'quick';

function buildAlgoSteps(items: { label: string; value: number }[], algo: SortAlgo) {
  const a = items.map((x) => ({ ...x }));
  const steps: { type: 'comp' | 'swap' | 'mark'; i?: number; j?: number; arr: typeof a }[] = [];
  const n = a.length;

  if (algo === 'bubble') {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        steps.push({ type: 'comp', i: j, j: j + 1, arr: a.map((x) => ({ ...x })) });
        if (a[j].value > a[j + 1].value) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          steps.push({ type: 'swap', i: j, j: j + 1, arr: a.map((x) => ({ ...x })) });
        }
      }
      steps.push({ type: 'mark', i: n - i - 1, arr: a.map((x) => ({ ...x })) });
    }
  } else if (algo === 'selection') {
    for (let i = 0; i < n; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        steps.push({ type: 'comp', i: minIdx, j, arr: a.map((x) => ({ ...x })) });
        if (a[j].value < a[minIdx].value) minIdx = j;
      }
      if (minIdx !== i) {
        [a[i], a[minIdx]] = [a[minIdx], a[i]];
        steps.push({ type: 'swap', i, j: minIdx, arr: a.map((x) => ({ ...x })) });
      }
      steps.push({ type: 'mark', i, arr: a.map((x) => ({ ...x })) });
    }
  } else if (algo === 'insertion') {
    steps.push({ type: 'mark', i: 0, arr: a.map((x) => ({ ...x })) });
    for (let i = 1; i < n; i++) {
      let j = i;
      while (j > 0) {
        steps.push({ type: 'comp', i: j - 1, j, arr: a.map((x) => ({ ...x })) });
        if (a[j - 1].value > a[j].value) {
          [a[j - 1], a[j]] = [a[j], a[j - 1]];
          steps.push({ type: 'swap', i: j - 1, j, arr: a.map((x) => ({ ...x })) });
          j--;
        } else break;
      }
      steps.push({ type: 'mark', i, arr: a.map((x) => ({ ...x })) });
    }
  } else {
    const qs = (lo: number, hi: number) => {
      if (lo > hi) return;
      if (lo === hi) {
        steps.push({ type: 'mark', i: lo, arr: a.map((x) => ({ ...x })) });
        return;
      }
      const pivot = a[hi].value;
      let p = lo;
      for (let k = lo; k < hi; k++) {
        steps.push({ type: 'comp', i: k, j: hi, arr: a.map((x) => ({ ...x })) });
        if (a[k].value < pivot) {
          if (p !== k) {
            [a[p], a[k]] = [a[k], a[p]];
            steps.push({ type: 'swap', i: p, j: k, arr: a.map((x) => ({ ...x })) });
          }
          p++;
        }
      }
      if (p !== hi) {
        [a[p], a[hi]] = [a[hi], a[p]];
        steps.push({ type: 'swap', i: p, j: hi, arr: a.map((x) => ({ ...x })) });
      }
      steps.push({ type: 'mark', i: p, arr: a.map((x) => ({ ...x })) });
      qs(lo, p - 1);
      qs(p + 1, hi);
    };
    qs(0, n - 1);
  }
  return steps;
}

function SortGame({
  game,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: {
  game: GameItem;
  config: SortConfig;
  alreadySolved: boolean;
  onWin: (id: string, pts: number) => void;
  onNextGame: () => void;
  hasNextGame: boolean;
}) {
  const [arr, setArr] = useState(() => config.items.map((x) => ({ ...x })));
  const [selected, setSelected] = useState<number | null>(null);
  const [swaps, setSwaps] = useState(0);
  const [comps, setComps] = useState(0);
  const [algo, setAlgo] = useState<SortAlgo>('bubble');
  const [comparing, setComparing] = useState<number[]>([]);
  const [running, setRunning] = useState(false);
  const stepsRef = useRef<ReturnType<typeof buildAlgoSteps>>([]);
  const timerRef = useRef<number | null>(null);
  const wonRef = useRef(false);

  const optimal = useMemo(() => computeMinSwaps(config.items), [config.items]);
  const maxVal = useMemo(() => Math.max(...config.items.map((x) => x.value)), [config.items]);
  const sorted = arr.every((v, i) => i === 0 || arr[i - 1].value <= v.value);

  useEffect(() => {
    if (sorted && !wonRef.current) {
      wonRef.current = true;
      onWin(game.id, swaps <= optimal ? 140 : 90);
    }
  }, [sorted, game.id, swaps, optimal, onWin]);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  function stopViz() {
    if (timerRef.current) window.clearInterval(timerRef.current);
    setRunning(false);
  }

  function resetArr() {
    stopViz();
    setArr(config.items.map((x) => ({ ...x })));
    setSelected(null);
    setSwaps(0);
    setComps(0);
    setComparing([]);
    stepsRef.current = [];
  }

  function advanceStep() {
    const st = stepsRef.current.shift();
    if (!st) {
      stopViz();
      return;
    }
    setArr(st.arr);
    if (st.type === 'comp') {
      setComps((c) => c + 1);
      setComparing([st.i ?? -1, st.j ?? -1]);
    } else if (st.type === 'swap') {
      setSwaps((s) => s + 1);
      setComparing([st.i ?? -1, st.j ?? -1]);
    } else {
      setComparing([]);
    }
    if (stepsRef.current.length === 0) {
      setComparing([]);
      stopViz();
    }
  }

  function stepOnce() {
    if (stepsRef.current.length === 0) {
      if (sorted) {
        stopViz();
        return;
      }
      stepsRef.current = buildAlgoSteps(arr, algo);
    }
    advanceStep();
  }

  function togglePlay() {
    if (running) {
      stopViz();
      return;
    }
    let source = arr;
    if (sorted) {
      source = config.items.map((x) => ({ ...x }));
      setArr(source);
      setSelected(null);
      setSwaps(0);
      setComps(0);
      setComparing([]);
      stepsRef.current = [];
    }
    if (stepsRef.current.length === 0) {
      stepsRef.current = buildAlgoSteps(source, algo);
    }
    setRunning(true);
    timerRef.current = window.setInterval(advanceStep, 250);
  }

  function handleBarClick(idx: number) {
    if (running || sorted) return;
    if (selected === null) {
      setSelected(idx);
    } else if (selected === idx) {
      setSelected(null);
    } else {
      setArr((prev) => {
        const next = prev.slice();
        [next[selected], next[idx]] = [next[idx], next[selected]];
        return next;
      });
      setSelected(null);
      setSwaps((s) => s + 1);
      stepsRef.current = [];
    }
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>
        <div className="text-xs font-mono-jb text-slate-600 dark:text-slate-300">
          Almashuv: <strong>{swaps}</strong> · Minimal: <strong>{optimal}</strong>
          {config.enableVisualizer ? (
            <>
              {' '}
              · Taqqoslash: <strong>{comps}</strong>
            </>
          ) : null}
        </div>
      </div>

      <div className="lg-well mb-4 flex h-56 items-end justify-between gap-2.5 px-4 pb-3 pt-5">
        {arr.map((item, idx) => {
          const pct = Math.max(18, Math.round((item.value / maxVal) * 100));
          const isSel = selected === idx;
          const isComp = comparing.includes(idx);
          return (
            <button
              key={`${item.label}-${idx}`}
              type="button"
              onClick={() => handleBarClick(idx)}
              className="flex h-full flex-1 flex-col items-center justify-end gap-2 bg-transparent p-0 cursor-pointer"
            >
              <div
                className={`w-full rounded-t-lg border transition-all duration-200 ${
                  isSel
                    ? '-translate-y-1 border-[#c81b1c] bg-[#c81b1c] shadow-md'
                    : isComp
                    ? 'border-amber-500 bg-amber-500/80'
                    : sorted
                    ? 'border-emerald-500/60 bg-emerald-500/65'
                    : 'border-slate-900/15 bg-slate-900/15 dark:border-white/25 dark:bg-white/20'
                }`}
                style={{ height: `${pct}%` }}
              />
              <span className="text-xs font-bold font-mono-jb text-slate-800 dark:text-slate-200">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        {config.enableVisualizer ? (
          <div className="flex flex-wrap gap-2">
            {(['bubble', 'selection', 'insertion', 'quick'] as SortAlgo[]).map((al) => (
              <button
                key={al}
                type="button"
                onClick={() => {
                  setAlgo(al);
                  stepsRef.current = [];
                }}
                className={`min-h-[40px] rounded-xl border px-3.5 py-2 text-xs font-mono-jb transition cursor-pointer ${
                  algo === al
                    ? 'border-[#c81b1c] bg-[#c81b1c] text-white'
                    : 'border-slate-900/15 bg-white/70 text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
                }`}
              >
                {al === 'bubble' ? 'Bubble' : al === 'selection' ? 'Selection' : al === 'insertion' ? 'Insertion' : 'QuickSort'}
              </button>
            ))}
          </div>
        ) : (
          <span className="text-xs font-mono-jb text-slate-500 dark:text-slate-400">{config.hint}</span>
        )}

        <div className="flex flex-wrap gap-2.5">
          {config.enableVisualizer ? (
            <>
              <button
                type="button"
                onClick={togglePlay}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#c81b1c] px-4 py-2 text-xs font-semibold text-white cursor-pointer"
              >
                {running ? <Square className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>{running ? 'To‘xtatish' : 'Vizualizator'}</span>
              </button>
              <button
                type="button"
                onClick={stepOnce}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-slate-900/15 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
              >
                <StepForward className="h-4 w-4" />
                <span>1 Qadam</span>
              </button>
            </>
          ) : null}
          <button
            type="button"
            onClick={resetArr}
            className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-slate-900/15 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
          >
            <Shuffle className="h-4 w-4" />
            <span>Qayta boshlash</span>
          </button>
        </div>
      </div>

      <StatusFooter
        solved={sorted}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          sorted
            ? swaps <= optimal
              ? `Ideal tartiblash! Minimal ${optimal} almashuvda bajarildi.`
              : `Tartiblandi! (${swaps} almashuv, minimali ${optimal}).`
            : 'Ikkita ustunni ketma-ket bosib o‘rnini almashtiring.'
        }
      />
    </div>
  );
}

/* =========================================================
   7. DIJKSTRA / GRAPH ROUTER ENGINE
   ========================================================= */
function solveDijkstra(config: GraphConfig) {
  const dist: Record<string, number> = {};
  const prev: Record<string, string | null> = {};
  const unvisited = new Set(config.nodes.map((n) => n.id));

  config.nodes.forEach((n) => {
    dist[n.id] = Infinity;
    prev[n.id] = null;
  });
  dist[config.start] = 0;

  while (unvisited.size > 0) {
    let u: string | null = null;
    let best = Infinity;
    unvisited.forEach((id) => {
      if (dist[id] < best) {
        best = dist[id];
        u = id;
      }
    });
    if (!u || u === config.end) break;
    unvisited.delete(u);

    config.edges.forEach((e) => {
      if (e.blocked) return;
      const v = e.u === u ? e.v : e.v === u ? e.u : null;
      if (v && unvisited.has(v)) {
        const alt = dist[u!] + e.w;
        if (alt < dist[v]) {
          dist[v] = alt;
          prev[v] = u;
        }
      }
    });
  }

  const path: string[] = [];
  let cur: string | null = config.end;
  while (cur) {
    path.unshift(cur);
    cur = prev[cur];
  }
  return { cost: dist[config.end], path };
}

function GraphGame({
  game,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: {
  game: GameItem;
  config: GraphConfig;
  alreadySolved: boolean;
  onWin: (id: string, pts: number) => void;
  onNextGame: () => void;
  hasNextGame: boolean;
}) {
  const [path, setPath] = useState<string[]>([config.start]);
  const [showOpt, setShowOpt] = useState(false);
  const wonRef = useRef(false);

  const optimal = useMemo(() => solveDijkstra(config), [config]);

  function findEdge(u: string, v: string) {
    return config.edges.find((e) => (e.u === u && e.v === v) || (e.u === v && e.v === u));
  }

  const cost = path.reduce((sum, id, idx) => {
    if (idx === 0) return 0;
    const e = findEdge(path[idx - 1], id);
    return sum + (e ? e.w : 0);
  }, 0);

  const last = path[path.length - 1];
  const reached = last === config.end;
  const solved = reached && cost === optimal.cost;

  useEffect(() => {
    if (solved && !wonRef.current) {
      wonRef.current = true;
      onWin(game.id, 130);
    }
  }, [solved, game.id, onWin]);

  function edgeInArr(u: string, v: string, arr: string[]) {
    for (let i = 0; i < arr.length - 1; i++) {
      if ((arr[i] === u && arr[i + 1] === v) || (arr[i] === v && arr[i + 1] === u)) return true;
    }
    return false;
  }

  const nodeMap = useMemo(() => {
    const m: Record<string, { id: string; x: number; y: number }> = {};
    config.nodes.forEach((n) => (m[n.id] = n));
    return m;
  }, [config.nodes]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>
        <div className="text-xs font-mono-jb text-slate-700 dark:text-slate-300">
          Yo‘l: <strong>{path.join(' → ')}</strong> · Summa: <strong>{cost}</strong>
        </div>
      </div>

      <div className="lg-well mb-4 p-3">
        <svg viewBox="0 0 640 280" className="w-full h-auto block select-none" fill="none">
          {config.edges.map((e, i) => {
            const n1 = nodeMap[e.u];
            const n2 = nodeMap[e.v];
            const inUser = edgeInArr(e.u, e.v, path);
            const inOpt = showOpt && edgeInArr(e.u, e.v, optimal.path);
            const mx = (n1.x + n2.x) / 2;
            const my = (n1.y + n2.y) / 2;

            return (
              <g key={i}>
                <line
                  x1={n1.x}
                  y1={n1.y}
                  x2={n2.x}
                  y2={n2.y}
                  stroke={e.blocked ? '#ef2b2d' : inOpt && !inUser ? '#10b981' : inUser ? '#c81b1c' : 'currentColor'}
                  strokeOpacity={e.blocked ? 0.45 : inUser || inOpt ? 1 : 0.25}
                  strokeWidth={inUser || inOpt ? 3.5 : 2}
                  strokeDasharray={e.blocked ? '6 5' : undefined}
                />
                <rect
                  x={mx - 17}
                  y={my - 11}
                  width="34"
                  height="22"
                  rx="6"
                  className="fill-slate-900 dark:fill-[#090b10]"
                  stroke={e.blocked ? '#ef2b2d' : 'rgba(255,255,255,0.22)'}
                />
                <text x={mx} y={my + 4} textAnchor="middle" fill={e.blocked ? '#fca5a5' : '#fff'} className="font-mono-jb text-[11px]">
                  {e.blocked ? '✕' : e.w}
                </text>
              </g>
            );
          })}

          {config.nodes.map((n) => {
            const isVisited = path.includes(n.id);
            const isCurrent = n.id === last;
            const adj = findEdge(last, n.id);
            const canStep = !isVisited && !!adj && !adj.blocked && !reached;
            const isOptNode = showOpt && optimal.path.includes(n.id);

            return (
              <g
                key={n.id}
                className="cursor-pointer"
                onClick={() => {
                  if (isCurrent && path.length > 1) {
                    setPath((p) => p.slice(0, -1));
                  } else if (canStep) {
                    setPath((p) => [...p, n.id]);
                  }
                }}
              >
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={isCurrent ? 24 : 21}
                  fill={isCurrent ? '#c81b1c' : isVisited ? 'rgba(200,27,28,0.3)' : 'rgba(15,23,42,0.85)'}
                  stroke={isOptNode ? '#10b981' : canStep ? '#fff' : isVisited ? '#ef2b2d' : 'rgba(255,255,255,0.35)'}
                  strokeWidth={canStep || isCurrent ? 2.5 : 1.5}
                />
                <text x={n.x} y={n.y + 5} textAnchor="middle" fill="#fff" className="font-bold text-sm">
                  {n.id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {config.allowVisualizer ? (
          <button
            type="button"
            onClick={() => setShowOpt((v) => !v)}
            className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-slate-900/15 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
          >
            <Sparkles className="h-4 w-4" />
            <span>{showOpt ? 'Optimal yo‘lni yashirish' : 'Optimal Dijkstra yo‘li'}</span>
          </button>
        ) : null}
        <button
          type="button"
          onClick={() => setPath([config.start])}
          className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-slate-900/15 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Qayta boshlash</span>
        </button>
      </div>

      <StatusFooter
        solved={solved}
        isWarn={reached && !solved}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? `Ideal yo‘l! Minimal masofa ${optimal.cost} topildi (+130 ball).`
            : reached
            ? `Manzilga yetdingiz (${cost}), lekin eng qisqa yo‘l ${optimal.cost}. Oxirgi tugunni bosib orqaga qayting!`
            : `Keyingi bog‘langan tugunni bosing (${config.start} → ${config.end}).`
        }
      />
    </div>
  );
}

/* =========================================================
   8. CODE BUG FIXER ENGINE
   ========================================================= */
function CodeBugGame({
  game,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: {
  game: GameItem;
  config: CodeBugConfig;
  alreadySolved: boolean;
  onWin: (id: string, pts: number) => void;
  onNextGame: () => void;
  hasNextGame: boolean;
}) {
  const [pickedLine, setPickedLine] = useState<number | null>(null);
  const [patch, setPatch] = useState<string | null>(null);

  const solved = pickedLine === config.buggyLine && patch === config.answer;
  const wrongPatch = patch !== null && !solved;

  function choosePatch(opt: string) {
    setPatch(opt);
    if (pickedLine === config.buggyLine && opt === config.answer) {
      onWin(game.id, 110);
    }
  }

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="lg-well mb-4 overflow-hidden p-3 font-mono-jb text-xs sm:text-sm">
        {config.lines.map((ln, idx) => {
          const isPicked = pickedLine === idx;
          const displayLine = isPicked && solved && patch ? patch : ln;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setPickedLine(idx);
                setPatch(null);
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition cursor-pointer ${
                isPicked
                  ? solved
                    ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-200'
                    : idx === config.buggyLine
                    ? 'bg-[#c81b1c]/20 text-[#c81b1c] dark:text-red-200'
                    : 'bg-amber-500/20 text-amber-900 dark:text-amber-200'
                  : 'text-slate-800 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/[0.06]'
              }`}
            >
              <span className="w-5 shrink-0 opacity-50">{idx + 1}</span>
              <span className="whitespace-pre-wrap">{displayLine}</span>
            </button>
          );
        })}
      </div>

      {pickedLine === config.buggyLine ? (
        <div className="mb-3 space-y-2">
          <div className="text-xs font-mono-jb text-slate-600 dark:text-slate-400">
            To‘g‘ri variantni tanlang:
          </div>
          {config.options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => choosePatch(opt)}
              className={`block w-full rounded-xl border px-4 py-2.5 text-left font-mono-jb text-xs sm:text-sm transition cursor-pointer ${
                patch === opt && solved
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-800 dark:text-emerald-200'
                  : patch === opt
                  ? 'border-amber-500 bg-amber-500/20 text-amber-900 dark:text-amber-200'
                  : 'border-slate-900/12 bg-white/70 text-slate-900 hover:border-[#c81b1c] dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      ) : null}

      <StatusFooter
        solved={solved}
        isWarn={wrongPatch || (pickedLine !== null && pickedLine !== config.buggyLine)}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? `Xato tuzatildi! ${config.explanation}`
            : pickedLine === null
            ? 'Avval koddagi xato qatorni bosing.'
            : pickedLine !== config.buggyLine
            ? 'Bu qator to‘g‘ri yozilgan — boshqa qatorni tekshiring.'
            : wrongPatch
            ? 'Bu tuzatish muammoni hal qilmadi — boshqasini tanlang.'
            : 'Xato qator topildi! Endi to‘g‘ri tuzatishni tanlang.'
        }
      />
    </div>
  );
}

/* =========================================================
   9. CIPHER & ENCODING ENGINE
   ========================================================= */
function decodeLetter(ch: string, shift: number, mode: CipherConfig['mode']) {
  const code = ch.charCodeAt(0);
  if (code < 65 || code > 90) return ch;
  if (mode === 'atbash') {
    return String.fromCharCode(90 - (code - 65));
  }
  return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
}

function CipherGame({
  game,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: {
  game: GameItem;
  config: CipherConfig;
  alreadySolved: boolean;
  onWin: (id: string, pts: number) => void;
  onNextGame: () => void;
  hasNextGame: boolean;
}) {
  const [shift, setShift] = useState(config.mode === 'caesar' ? 0 : config.shift);
  const [input, setInput] = useState('');
  const [showHint, setShowHint] = useState(false);

  const preview =
    config.mode === 'caesar'
      ? config.ciphertext
          .split('')
          .map((c) => decodeLetter(c, shift, 'caesar'))
          .join('')
      : config.mode === 'atbash'
      ? config.ciphertext
          .split('')
          .map((c) => decodeLetter(c, 0, 'atbash'))
          .join('')
      : config.ciphertext
          .split('-')
          .map((n) => String.fromCharCode(64 + parseInt(n, 10)))
          .join('');

  const cleanInput = input.trim().toUpperCase();
  const solved = cleanInput === config.answer;

  function handleChange(val: string) {
    setInput(val);
    if (val.trim().toUpperCase() === config.answer) {
      onWin(game.id, 110);
    }
  }

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="lg-well mb-4 p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-mono-jb uppercase text-slate-500 dark:text-slate-400">
              Shifrlangan matn
            </div>
            <div className="text-3xl font-bold tracking-[0.2em] font-mono-jb text-slate-900 dark:text-white">
              {config.ciphertext}
            </div>
          </div>

          {config.mode === 'caesar' ? (
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-jb text-slate-600 dark:text-slate-300">
                Siljish kaliti: <strong>{shift}</strong>
              </span>
              <button
                type="button"
                onClick={() => setShift((s) => (s + 25) % 26)}
                className="min-h-[42px] min-w-[46px] rounded-xl border border-slate-900/15 bg-white/70 px-3.5 py-2 text-xs font-semibold font-mono-jb dark:border-white/20 dark:bg-white/10 cursor-pointer"
              >
                -1
              </button>
              <button
                type="button"
                onClick={() => setShift((s) => (s + 1) % 26)}
                className="min-h-[42px] min-w-[46px] rounded-xl border border-slate-900/15 bg-white/70 px-3.5 py-2 text-xs font-semibold font-mono-jb dark:border-white/20 dark:bg-white/10 cursor-pointer"
              >
                +1
              </button>
            </div>
          ) : null}
        </div>

        {config.mode === 'caesar' ? (
          <div className="text-sm font-mono-jb text-slate-600 dark:text-slate-300">
            Kalit = {shift} bo‘yicha natija: <strong className="text-[#c81b1c] dark:text-red-400">{preview}</strong>
          </div>
        ) : (
          <div className="text-xs font-mono-jb text-slate-500 dark:text-slate-400">
            {config.mode === 'a1z26' ? 'Alifbo jadvali: A=1, B=2, C=3, D=4 ... K=11 ... O=15 ...' : 'Atbash oynasi: A↔Z, B↔Y, C↔X, ...'}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Ochilgan so‘zni yozing..."
          className="min-h-[46px] flex-1 min-w-[200px] rounded-xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm font-bold uppercase font-mono-jb text-slate-900 outline-none focus:border-[#c81b1c] dark:border-white/20 dark:bg-black/40 dark:text-white"
        />
        <button
          type="button"
          onClick={() => setShowHint((v) => !v)}
          className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-slate-900/15 bg-white/70 px-4 py-3 text-xs font-semibold text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
        >
          <HelpCircle className="h-4 w-4" />
          <span>Maslahat</span>
        </button>
      </div>

      {showHint ? (
        <p className="mt-3 rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-xs text-sky-900 dark:text-sky-200">
          {config.hint}
        </p>
      ) : null}

      <StatusFooter
        solved={solved}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? `Shifr yechildi! Asl so‘z: ${config.answer} (+110 ball).`
            : 'Deshifrlangan so‘zni kiriting (katta/kichik harf farqsiz).'
        }
      />
    </div>
  );
}

/* =========================================================
   10. QUIZ SPEED CHALLENGE ENGINE
   ========================================================= */
function QuizGame({
  game,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: {
  game: GameItem;
  config: QuizConfig;
  alreadySolved: boolean;
  onWin: (id: string, pts: number) => void;
  onNextGame: () => void;
  hasNextGame: boolean;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const solved = picked === config.answer;
  const wrong = picked !== null && !solved;

  function choose(idx: number) {
    setPicked(idx);
    if (idx === config.answer) {
      onWin(game.id, 100);
    }
  }

  return (
    <div>
      <p className="mb-5 text-base font-medium text-slate-900 dark:text-white">{config.prompt}</p>

      <div className="grid gap-3 sm:grid-cols-2">
        {config.options.map((opt, idx) => {
          const isCur = picked === idx;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => choose(idx)}
              className={`min-h-[52px] rounded-xl border px-4 py-3.5 text-left text-sm font-semibold transition cursor-pointer ${
                isCur && solved
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-800 dark:text-emerald-200'
                  : isCur && wrong
                  ? 'border-amber-500 bg-amber-500/20 text-amber-900 dark:text-amber-200'
                  : 'border-slate-900/12 bg-white/70 text-slate-900 hover:border-[#c81b1c] dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
              }`}
            >
              <span className="mr-2 font-mono-jb opacity-60">{String.fromCharCode(65 + idx)}.</span>
              {opt}
            </button>
          );
        })}
      </div>

      <StatusFooter
        solved={solved}
        isWarn={wrong}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? `To‘g‘ri! ${config.explanation}`
            : wrong
            ? 'Noto‘g‘ri javob — boshqa variantni sinab ko‘ring.'
            : 'To‘g‘ri javob variantini tanlang.'
        }
      />
    </div>
  );
}

/* =========================================================
   UNIFIED GAME ENGINE DISPATCHER
   ========================================================= */
export function GameEngineHost(props: EngineProps) {
  const { game } = props;
  switch (game.engine) {
    case 'sequence':
      return <SequenceGame {...props} config={game.config} />;
    case 'robot':
      return <RobotGame {...props} config={game.config} />;
    case 'match':
      return <MatchGame {...props} config={game.config} />;
    case 'binary':
      return <BinaryGame {...props} config={game.config} />;
    case 'logic':
      return <LogicGame {...props} config={game.config} />;
    case 'sort':
      return <SortGame {...props} config={game.config} />;
    case 'graph':
      return <GraphGame {...props} config={game.config} />;
    case 'codebug':
      return <CodeBugGame {...props} config={game.config} />;
    case 'cipher':
      return <CipherGame {...props} config={game.config} />;
    case 'quiz':
      return <QuizGame {...props} config={game.config} />;
  }
}
