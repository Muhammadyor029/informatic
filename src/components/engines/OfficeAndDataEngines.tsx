import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlignCenter,
  BarChart3,
  Bold,
  Calculator,
  Check,
  Database,
  FileSpreadsheet,
  Globe,
  Italic,
  Keyboard,
  MousePointerClick,
  Palette,
  Play,
  Printer,
  Save,
  Scissors,
  Search,
  Volume2,
} from 'lucide-react';
import type {
  CalcConfig,
  ChartLabConfig,
  DbLabConfig,
  HotspotConfig,
  SheetLabConfig,
  TypingConfig,
} from '../../data/plan/types';
import { EngineActionRow, EngineStatusFooter, type BaseEngineProps } from './EngineShared';

/* =========================================================
   7. HOTSPOT ENGINE (MOCK SOFTWARE TOOLBARS & INTERACTION)
   ========================================================= */
function ZoneIcon({ id }: { id: string }) {
  const k = id.toLowerCase();
  if (k.includes('save')) return <Save className="h-4 w-4" />;
  if (k.includes('bold')) return <Bold className="h-4 w-4" />;
  if (k.includes('italic')) return <Italic className="h-4 w-4" />;
  if (k.includes('align')) return <AlignCenter className="h-4 w-4" />;
  if (k.includes('print')) return <Printer className="h-4 w-4" />;
  if (k.includes('cut') || k.includes('trim')) return <Scissors className="h-4 w-4" />;
  if (k.includes('play')) return <Play className="h-4 w-4" />;
  if (k.includes('vol') || k.includes('audio')) return <Volume2 className="h-4 w-4" />;
  if (k.includes('brush') || k.includes('fill') || k.includes('color')) return <Palette className="h-4 w-4" />;
  if (k.includes('url') || k.includes('link')) return <Globe className="h-4 w-4" />;
  if (k.includes('sum') || k.includes('formula')) return <FileSpreadsheet className="h-4 w-4" />;
  return <MousePointerClick className="h-4 w-4" />;
}

export function HotspotGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<HotspotConfig>) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const wonRef = useRef(false);

  const solved = selectedId === config.targetZoneId;
  const wrong = selectedId !== null && !solved;

  function clickZone(id: string) {
    setSelectedId(id);
    if (id === config.targetZoneId && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }

  function reset() {
    setSelectedId(null);
    setShowHint(false);
  }

  const layoutTitleMap: Record<HotspotConfig['layout'], string> = {
    word: 'Matn muharriri oynasi',
    paint: 'Grafik muharrir (Paint)',
    excel: 'Elektron jadval (Excel)',
    scratch: 'Scratch muhiti',
    browser: 'Veb-brauzer',
    audacity: 'Audio muharrir (Audacity)',
  };

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="lg-well overflow-hidden border border-slate-900/15 dark:border-white/15">
        {/* Simulated App Window Title Bar */}
        <div className="flex items-center justify-between border-b border-slate-900/10 bg-slate-900/[0.04] px-4 py-2.5 dark:border-white/10 dark:bg-white/[0.04]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#c81b1c]" />
            <span className="h-2.5 w-2.5 rounded-sm bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500" />
            <span className="ml-2 text-xs font-semibold text-slate-800 dark:text-slate-100">
              {config.appTitle}
            </span>
          </div>
          <span className="font-mono-jb text-[11px] text-slate-500 dark:text-slate-400">
            {layoutTitleMap[config.layout]}
          </span>
        </div>

        {/* Simulated Interactive Toolbar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-900/10 bg-white/60 p-3 dark:border-white/10 dark:bg-black/30">
          {config.zones.map((zone) => {
            const isPicked = selectedId === zone.id;
            const isRight = isPicked && solved;
            const isBad = isPicked && wrong;
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => clickZone(zone.id)}
                className={`inline-flex min-h-[44px] items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition cursor-pointer ${
                  isRight
                    ? 'border-emerald-500 bg-emerald-500/20 text-emerald-800 dark:text-emerald-200'
                    : isBad
                    ? 'border-amber-500 bg-amber-500/20 text-amber-900 dark:text-amber-200'
                    : 'border-slate-900/12 bg-white/80 text-slate-800 hover:border-[#c81b1c] dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
                }`}
              >
                <ZoneIcon id={zone.icon || zone.id} />
                <span>{zone.label}</span>
                {zone.group ? (
                  <span className="font-mono-jb text-[10px] opacity-60">[{zone.group}]</span>
                ) : null}
              </button>
            );
          })}
        </div>

        {/* Mock Document Canvas */}
        <div className="p-4 text-xs text-slate-500 dark:text-slate-400">
          {config.layout === 'excel' ? (
            <div className="grid grid-cols-4 gap-1 font-mono-jb">
              {['A1: 12', 'B1: 18', 'C1: =SUM(...)', 'D1: 30'].map((cell) => (
                <div
                  key={cell}
                  className="rounded-lg border border-slate-900/10 bg-white/50 px-2.5 py-2 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  {cell}
                </div>
              ))}
            </div>
          ) : config.layout === 'browser' ? (
            <div className="rounded-lg border border-slate-900/10 bg-white/50 px-3 py-2 font-mono-jb dark:border-white/10 dark:bg-white/[0.03]">
              https://maktab.uz/informatika
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-900/15 px-3 py-4 text-center dark:border-white/15">
              Yuqoridagi asboblar panelidan vazifada so‘ralgan tugmani bosing
            </div>
          )}
        </div>
      </div>

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={reset}
        hintText="Har bir tugmaning nomi va guruhiga e’tibor bering."
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
            ? 'Bu boshqa buyruq tugmasi — vazifa shartiga mos tugmani bosing.'
            : 'Dastur panelidagi to‘g‘ri tugmani tanlang.'
        }
      />
    </div>
  );
}

/* =========================================================
   8. TYPING ENGINE (WPM + LIVE ACCURACY TRACKER)
   ========================================================= */
export function TypingGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<TypingConfig>) {
  const [typed, setTyped] = useState('');
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [finishedAt, setFinishedAt] = useState<number | null>(null);
  const [nowMs, setNowMs] = useState<number>(0);
  const [showHint, setShowHint] = useState(false);
  const wonRef = useRef(false);

  useEffect(() => {
    if (startedAt === null || finishedAt !== null) return;
    const id = window.setInterval(() => setNowMs(Date.now()), 400);
    return () => window.clearInterval(id);
  }, [startedAt, finishedAt]);

  const minAccuracy = config.minAccuracy ?? 85;
  const target = config.targetText;

  let correctChars = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === target[i]) correctChars++;
  }
  const accuracy =
    typed.length === 0 ? 100 : Math.round((correctChars / Math.max(typed.length, 1)) * 100);

  const endMs = finishedAt ?? (nowMs || startedAt || 0);
  const elapsedSec =
    startedAt === null ? 0 : Math.max(1, Math.round((endMs - startedAt) / 1000));
  const wpm =
    startedAt === null
      ? 0
      : Math.round((correctChars / 5) / Math.max(elapsedSec / 60, 0.08));

  const reachedEnd = typed.length >= target.length;
  const solved = reachedEnd && accuracy >= minAccuracy;
  const failedEnd = reachedEnd && accuracy < minAccuracy;

  function handleChange(val: string) {
    const now = Date.now();
    if (startedAt === null && val.length > 0) {
      setStartedAt(now);
      setNowMs(now);
    }
    const clamped = val.slice(0, target.length);
    setTyped(clamped);

    if (clamped.length >= target.length) {
      setFinishedAt(now);
      setNowMs(now);
      let okCount = 0;
      for (let i = 0; i < clamped.length; i++) {
        if (clamped[i] === target[i]) okCount++;
      }
      const acc = Math.round((okCount / Math.max(clamped.length, 1)) * 100);
      if (acc >= minAccuracy && !wonRef.current) {
        wonRef.current = true;
        onWin(gameId, 100);
      }
    } else {
      setFinishedAt(null);
    }
  }

  function reset() {
    setTyped('');
    setStartedAt(null);
    setFinishedAt(null);
    setNowMs(0);
    setShowHint(false);
  }

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="mb-4 grid grid-cols-3 gap-3">
        <div className="lg-well px-3.5 py-2.5">
          <div className="text-[11px] text-slate-500 dark:text-slate-400">Aniqlik</div>
          <div className="font-mono-jb text-lg font-bold text-slate-950 dark:text-white">
            {accuracy}%
          </div>
        </div>
        <div className="lg-well px-3.5 py-2.5">
          <div className="text-[11px] text-slate-500 dark:text-slate-400">Tezlik</div>
          <div className="font-mono-jb text-lg font-bold text-slate-950 dark:text-white">
            {wpm} <span className="text-xs font-normal">so‘z/daq</span>
          </div>
        </div>
        <div className="lg-well px-3.5 py-2.5">
          <div className="text-[11px] text-slate-500 dark:text-slate-400">Minimal talab</div>
          <div className="font-mono-jb text-lg font-bold text-[#b91c1c] dark:text-[#ff8589]">
            {minAccuracy}%
          </div>
        </div>
      </div>

      {/* Character-by-character live highlight */}
      <div className="lg-well mb-3 select-none p-4 font-mono-jb text-base leading-relaxed">
        {target.split('').map((ch, i) => {
          const isTyped = i < typed.length;
          const isMatch = isTyped && typed[i] === ch;
          const isCurrent = i === typed.length;
          return (
            <span
              key={i}
              className={
                isTyped
                  ? isMatch
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'bg-red-500/25 text-red-700 dark:text-red-300'
                  : isCurrent
                  ? 'border-b-2 border-[#c81b1c] text-slate-950 dark:text-white'
                  : 'text-slate-500 dark:text-slate-400'
              }
            >
              {ch}
            </span>
          );
        })}
      </div>

      <label className="block">
        <span className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <Keyboard className="h-4 w-4 text-[#b91c1c] dark:text-[#ff8589]" />
          <span>Matnni shu yerga tering:</span>
        </span>
        <input
          type="text"
          value={typed}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Matn terishni boshlang..."
          autoComplete="off"
          spellCheck={false}
          className="min-h-[48px] w-full rounded-xl border border-slate-900/15 bg-white/85 px-4 py-3 font-mono-jb text-sm text-slate-950 focus:border-[#c81b1c] focus:outline-none dark:border-white/15 dark:bg-black/45 dark:text-white"
        />
      </label>

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={reset}
        hintText={config.hint}
      />

      <EngineStatusFooter
        solved={solved}
        isWarn={failedEnd}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? `A’lo! Matnni ${accuracy}% aniqlik va ${wpm} so‘z/daq tezlikda terdingiz.`
            : failedEnd
            ? `Aniqlik ${accuracy}% bo‘ldi (talab: ${minAccuracy}%). Qaytadan terib ko‘ring.`
            : 'Katta-kichik harflar va tinish belgilariga e’tibor berib tering.'
        }
      />
    </div>
  );
}

/* =========================================================
   9. SHEETLAB ENGINE (SAFE EXCEL FORMULA SANDBOX)
   ========================================================= */
function colLetter(idx: number): string {
  return String.fromCharCode(65 + idx);
}

function parseCellRef(ref: string): [number, number] | null {
  const m = /^([A-Z]+)(\d+)$/i.exec(ref.trim());
  if (!m) return null;
  const col = m[1].toUpperCase().charCodeAt(0) - 65;
  const row = parseInt(m[2], 10) - 1;
  return [col, row];
}

function expandRange(rangeStr: string): string[] {
  const parts = rangeStr.split(':');
  if (parts.length !== 2) return [rangeStr.trim().toUpperCase()];
  const start = parseCellRef(parts[0]);
  const end = parseCellRef(parts[1]);
  if (!start || !end) return [];
  const refs: string[] = [];
  const c1 = Math.min(start[0], end[0]);
  const c2 = Math.max(start[0], end[0]);
  const r1 = Math.min(start[1], end[1]);
  const r2 = Math.max(start[1], end[1]);
  for (let r = r1; r <= r2; r++) {
    for (let c = c1; c <= c2; c++) {
      refs.push(`${colLetter(c)}${r + 1}`);
    }
  }
  return refs;
}

function safeEvalArithmetic(expr: string): number | null {
  // Tokenize numbers and + - * / ( )
  const cleaned = expr.replace(/\s+/g, '');
  if (!/^[0-9.+\-*/()]+$/.test(cleaned)) return null;
  try {
    let pos = 0;
    const parseExpr = (): number => {
      let val = parseTerm();
      while (pos < cleaned.length && (cleaned[pos] === '+' || cleaned[pos] === '-')) {
        const op = cleaned[pos++];
        const rhs = parseTerm();
        val = op === '+' ? val + rhs : val - rhs;
      }
      return val;
    };
    const parseTerm = (): number => {
      let val = parseFactor();
      while (pos < cleaned.length && (cleaned[pos] === '*' || cleaned[pos] === '/')) {
        const op = cleaned[pos++];
        const rhs = parseFactor();
        val = op === '*' ? val * rhs : rhs === 0 ? NaN : val / rhs;
      }
      return val;
    };
    const parseFactor = (): number => {
      if (cleaned[pos] === '(') {
        pos++;
        const v = parseExpr();
        if (cleaned[pos] === ')') pos++;
        return v;
      }
      if (cleaned[pos] === '-') {
        pos++;
        return -parseFactor();
      }
      const start = pos;
      while (pos < cleaned.length && /[0-9.]/.test(cleaned[pos])) pos++;
      if (start === pos) return NaN;
      return parseFloat(cleaned.slice(start, pos));
    };
    const res = parseExpr();
    if (pos !== cleaned.length || !Number.isFinite(res)) return null;
    return res;
  } catch {
    return null;
  }
}

function evalSheetCell(
  ref: string,
  cells: Record<string, string>,
  visited: Set<string> = new Set(),
): string | number {
  const key = ref.toUpperCase();
  if (visited.has(key)) return '#CYCLE!';
  const raw = (cells[key] ?? '').trim();
  if (!raw) return '';
  if (!raw.startsWith('=')) {
    const n = Number(raw);
    return raw !== '' && !Number.isNaN(n) ? n : raw;
  }

  const nextVisited = new Set(visited);
  nextVisited.add(key);

  const getNum = (r: string): number => {
    const v = evalSheetCell(r, cells, nextVisited);
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  };

  let body = raw.slice(1).trim();

  // Handle IF(cond, a, b)
  const ifMatch = /^IF\(\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^)]+)\s*\)$/i.exec(body);
  if (ifMatch) {
    const [, condRaw, trueBranch, falseBranch] = ifMatch;
    const condParts = /^(.*?)(>=|<=|<>|!=|=|>|<)(.*)$/.exec(condRaw);
    if (condParts) {
      const lhsVal = evalToken(condParts[1].trim(), getNum);
      const rhsVal = evalToken(condParts[3].trim(), getNum);
      const op = condParts[2];
      let ok = false;
      if (op === '>') ok = Number(lhsVal) > Number(rhsVal);
      else if (op === '<') ok = Number(lhsVal) < Number(rhsVal);
      else if (op === '>=') ok = Number(lhsVal) >= Number(rhsVal);
      else if (op === '<=') ok = Number(lhsVal) <= Number(rhsVal);
      else if (op === '=') ok = String(lhsVal) === String(rhsVal);
      else if (op === '<>' || op === '!=') ok = String(lhsVal) !== String(rhsVal);
      const chosen = (ok ? trueBranch : falseBranch).trim();
      return chosen.replace(/^["']|["']$/g, '');
    }
  }

  // Handle ROUND(expr, digits)
  body = body.replace(/ROUND\(\s*([^,;]+)\s*[,;]\s*([^)]+)\s*\)/gi, (_, valExpr: string, digitsExpr: string) => {
    const inner = valExpr.replace(/\b([A-Z]+\d+)\b/gi, (__, r: string) => String(getNum(r)));
    const val = safeEvalArithmetic(inner);
    const digits = Math.max(0, Math.round(Number(digitsExpr.trim()) || 0));
    if (val === null) return '0';
    const factor = 10 ** digits;
    return String(Math.round(val * factor) / factor);
  });

  // Handle COUNTIF(range, criteria) & SUMIF(range, criteria)
  body = body.replace(/(COUNTIF|SUMIF)\(\s*([^,;]+)\s*[,;]\s*([^)]+)\s*\)/gi, (_, fn: string, rangeStr: string, critRaw: string) => {
    const refs = rangeStr.includes(':') ? expandRange(rangeStr) : [rangeStr.trim().toUpperCase()];
    const crit = critRaw.trim().replace(/^["']|["']$/g, '');
    const cmpMatch = /^(>=|<=|<>|!=|=|>|<)(.+)$/.exec(crit);
    let count = 0;
    let sum = 0;
    for (const r of refs) {
      const rawCell = (cells[r] ?? '').trim();
      if (!rawCell) continue;
      const cellVal = evalSheetCell(r, cells, nextVisited);
      let matched = false;
      if (cmpMatch) {
        const op = cmpMatch[1];
        const rhs = cmpMatch[2].trim();
        const lhsNum = Number(cellVal);
        const rhsNum = Number(rhs);
        if (op === '>') matched = lhsNum > rhsNum;
        else if (op === '<') matched = lhsNum < rhsNum;
        else if (op === '>=') matched = lhsNum >= rhsNum;
        else if (op === '<=') matched = lhsNum <= rhsNum;
        else if (op === '=') matched = String(cellVal).toLowerCase() === rhs.toLowerCase();
        else if (op === '<>' || op === '!=') matched = String(cellVal).toLowerCase() !== rhs.toLowerCase();
      } else {
        matched = String(cellVal).toLowerCase() === crit.toLowerCase();
      }
      if (matched) {
        count++;
        const numVal = Number(cellVal);
        if (Number.isFinite(numVal)) sum += numVal;
      }
    }
    return fn.toUpperCase() === 'COUNTIF' ? String(count) : String(sum);
  });

  // Replace SUM(...), AVERAGE(...), MIN(...), MAX(...), COUNT(...), COUNTA(...)
  body = body.replace(/(SUM|AVERAGE|AVG|MIN|MAX|COUNTA|COUNT)\(([^)]+)\)/gi, (_, fn: string, args: string) => {
    const tokens = args.split(/[;,]/).map((s) => s.trim()).filter(Boolean);
    const nums: number[] = [];
    let nonEmptyCount = 0;
    for (const tok of tokens) {
      if (tok.includes(':')) {
        for (const r of expandRange(tok)) {
          const rawVal = (cells[r.toUpperCase()] ?? '').trim();
          if (rawVal !== '') {
            nonEmptyCount++;
            const val = evalSheetCell(r, cells, nextVisited);
            const n = Number(val);
            if (Number.isFinite(n)) nums.push(n);
          }
        }
      } else if (/^[A-Z]+\d+$/i.test(tok)) {
        const rawVal = (cells[tok.toUpperCase()] ?? '').trim();
        if (rawVal !== '') {
          nonEmptyCount++;
          const val = evalSheetCell(tok, cells, nextVisited);
          const n = Number(val);
          if (Number.isFinite(n)) nums.push(n);
        }
      } else {
        const n = Number(tok);
        if (Number.isFinite(n)) {
          nums.push(n);
          nonEmptyCount++;
        }
      }
    }
    const fnUpper = fn.toUpperCase();
    if (fnUpper === 'COUNTA') return String(nonEmptyCount);
    if (fnUpper === 'COUNT') return String(nums.length);
    if (nums.length === 0) return '0';
    if (fnUpper === 'SUM') return String(nums.reduce((a, b) => a + b, 0));
    if (fnUpper === 'AVERAGE' || fnUpper === 'AVG') {
      return String(nums.reduce((a, b) => a + b, 0) / nums.length);
    }
    if (fnUpper === 'MIN') return String(Math.min(...nums));
    if (fnUpper === 'MAX') return String(Math.max(...nums));
    return '0';
  });

  // Replace remaining cell references like A1, B2
  body = body.replace(/\b([A-Z]+\d+)\b/gi, (_, r: string) => String(getNum(r)));

  const numRes = safeEvalArithmetic(body);
  if (numRes === null) return '#XATO';
  return Math.round(numRes * 1000) / 1000;
}

function evalToken(tok: string, getNum: (r: string) => number): string | number {
  const cleaned = tok.replace(/^["']|["']$/g, '');
  if (/^[A-Z]+\d+$/i.test(cleaned)) return getNum(cleaned);
  const n = Number(cleaned);
  return Number.isFinite(n) && cleaned !== '' ? n : cleaned;
}

export function SheetLabGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<SheetLabConfig>) {
  const [cells, setCells] = useState<Record<string, string>>(() => ({ ...config.initialCells }));
  const [selectedCell, setSelectedCell] = useState<string>(config.targetCell);
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const wonRef = useRef(false);

  const computedTarget = evalSheetCell(config.targetCell, cells);
  const rawFormula = (cells[config.targetCell] ?? '').trim();

  const matchesValue =
    typeof config.expectedValue === 'number'
      ? Math.abs(Number(computedTarget) - config.expectedValue) < 0.05
      : String(computedTarget).trim().toLowerCase() === String(config.expectedValue).trim().toLowerCase();

  const matchesTokens = (config.requiredFormulaTokens ?? []).every((tok) =>
    rawFormula.toUpperCase().includes(tok.toUpperCase()),
  );

  const solved = checked && matchesValue && matchesTokens;
  const wrong = checked && !solved;

  function checkSheet() {
    setChecked(true);
    if (matchesValue && matchesTokens && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }

  function reset() {
    setCells({ ...config.initialCells });
    setSelectedCell(config.targetCell);
    setChecked(false);
    setShowHint(false);
  }

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      {/* Formula Bar */}
      <div className="mb-3 flex flex-wrap items-center gap-2 rounded-xl border border-slate-900/12 bg-white/75 p-2.5 dark:border-white/15 dark:bg-white/[0.05]">
        <span className="font-mono-jb rounded-lg bg-[#c81b1c] px-2.5 py-1 text-xs font-bold text-white">
          {selectedCell}
        </span>
        <span className="font-mono-jb text-xs text-slate-400">fx</span>
        <input
          type="text"
          value={cells[selectedCell] ?? ''}
          onChange={(e) => {
            setChecked(false);
            const v = e.target.value;
            setCells((prev) => ({ ...prev, [selectedCell]: v }));
          }}
          placeholder="Qiymat yoki =SUM(...) formula kiriting"
          className="min-h-[40px] flex-1 bg-transparent px-2 font-mono-jb text-sm text-slate-950 focus:outline-none dark:text-white"
        />
      </div>

      {/* Spreadsheet Grid */}
      <div className="overflow-x-auto rounded-xl border border-slate-900/12 dark:border-white/15">
        <table className="w-full border-collapse font-mono-jb text-xs">
          <thead>
            <tr className="bg-slate-900/[0.05] dark:bg-white/[0.05]">
              <th className="w-10 border border-slate-900/10 p-2 text-slate-500 dark:border-white/10" />
              {Array.from({ length: config.cols }).map((_, c) => (
                <th
                  key={c}
                  className="border border-slate-900/10 p-2 font-bold text-slate-700 dark:border-white/10 dark:text-slate-300"
                >
                  {colLetter(c)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: config.rows }).map((_, r) => (
              <tr key={r}>
                <td className="border border-slate-900/10 bg-slate-900/[0.04] p-2 text-center font-bold text-slate-500 dark:border-white/10 dark:bg-white/[0.04]">
                  {r + 1}
                </td>
                {Array.from({ length: config.cols }).map((__, c) => {
                  const ref = `${colLetter(c)}${r + 1}`;
                  const isTarget = ref === config.targetCell;
                  const isSelected = ref === selectedCell;
                  const displayVal = evalSheetCell(ref, cells);
                  return (
                    <td
                      key={ref}
                      onClick={() => setSelectedCell(ref)}
                      className={`min-w-[84px] cursor-pointer border p-2.5 transition ${
                        isSelected
                          ? 'border-[#c81b1c] bg-[#c81b1c]/12 ring-1 ring-[#c81b1c]'
                          : isTarget
                          ? 'border-amber-500/50 bg-amber-500/10'
                          : 'border-slate-900/10 bg-white/50 dark:border-white/10 dark:bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-slate-900 dark:text-white">
                          {displayVal !== '' ? String(displayVal) : '—'}
                        </span>
                        {isTarget ? (
                          <span className="text-[10px] font-bold text-[#b91c1c] dark:text-[#ff8589]">
                            ★
                          </span>
                        ) : null}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={reset}
        hintText={config.hint}
        extraControls={
          <button
            type="button"
            onClick={checkSheet}
            className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white cursor-pointer"
          >
            <Check className="h-4 w-4" />
            <span>Formulani tekshirish</span>
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
            ? `Ajoyib! ${config.explanation}`
            : wrong
            ? !matchesTokens && (config.requiredFormulaTokens ?? []).length > 0
              ? `Natija to‘g‘ri, lekin formula (${config.requiredFormulaTokens!.join(', ')}) ko‘rinishida yozilishi kerak.`
              : `${config.targetCell} natijasi "${computedTarget}". Formula "=" bilan boshlanishi va ${config.expectedValue} chiqishi kerak.`
            : `${config.targetCell} katakni tanlab formula yozing, so‘ng "Formulani tekshirish" ni bosing.`
        }
      />
    </div>
  );
}

/* =========================================================
   10. CHARTLAB ENGINE (CHART BUILDER + LIVE SVG PREVIEW)
   ========================================================= */
export function ChartLabGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<ChartLabConfig>) {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('pie');
  const [xAxis, setXAxis] = useState(config.xAxisOptions[0] ?? '');
  const [yAxis, setYAxis] = useState(config.yAxisOptions[0] ?? '');
  const [title, setTitle] = useState(config.titleOptions[0] ?? '');
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const wonRef = useRef(false);

  const isCorrect =
    chartType === config.correctType &&
    xAxis === config.correctXAxis &&
    yAxis === config.correctYAxis &&
    title === config.correctTitle;

  const solved = checked && isCorrect;
  const wrong = checked && !isCorrect;

  const maxVal = Math.max(...config.data.map((d) => d.value), 1);
  const sumVal = config.data.reduce((a, b) => a + b.value, 0) || 1;
  const pieColors = ['#c81b1c', '#2563eb', '#10b981', '#f59e0b', '#6366f1'];

  function checkChart() {
    setChecked(true);
    if (isCorrect && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }

  function reset() {
    setChartType('pie');
    setXAxis(config.xAxisOptions[0] ?? '');
    setYAxis(config.yAxisOptions[0] ?? '');
    setTitle(config.titleOptions[0] ?? '');
    setChecked(false);
    setShowHint(false);
  }

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="grid gap-5 lg:grid-cols-12">
        {/* Controls */}
        <div className="space-y-3 lg:col-span-5">
          <div>
            <div className="mb-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
              1. Diagramma turi
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'bar', label: 'Ustunli' },
                { id: 'line', label: 'Chiziqli' },
                { id: 'pie', label: 'Doiraviy' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setChecked(false);
                    setChartType(t.id as 'bar' | 'line' | 'pie');
                  }}
                  className={`min-h-[42px] rounded-xl border px-3 py-2 text-xs font-semibold transition cursor-pointer ${
                    chartType === t.id
                      ? 'border-[#c81b1c] bg-[#c81b1c] text-white'
                      : 'border-slate-900/12 bg-white/70 text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-600 dark:text-slate-300">
              2. Diagramma sarlavhasi
            </label>
            <select
              value={title}
              onChange={(e) => {
                setChecked(false);
                setTitle(e.target.value);
              }}
              className="min-h-[44px] w-full rounded-xl border border-slate-900/15 bg-white/85 px-3 text-xs font-semibold text-slate-900 dark:border-white/15 dark:bg-slate-900 dark:text-white"
            >
              {config.titleOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-600 dark:text-slate-300">
              3. X o‘qi (gorizontal)
            </label>
            <select
              value={xAxis}
              onChange={(e) => {
                setChecked(false);
                setXAxis(e.target.value);
              }}
              className="min-h-[44px] w-full rounded-xl border border-slate-900/15 bg-white/85 px-3 text-xs font-semibold text-slate-900 dark:border-white/15 dark:bg-slate-900 dark:text-white"
            >
              {config.xAxisOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-600 dark:text-slate-300">
              4. Y o‘qi (vertikal)
            </label>
            <select
              value={yAxis}
              onChange={(e) => {
                setChecked(false);
                setYAxis(e.target.value);
              }}
              className="min-h-[44px] w-full rounded-xl border border-slate-900/15 bg-white/85 px-3 text-xs font-semibold text-slate-900 dark:border-white/15 dark:bg-slate-900 dark:text-white"
            >
              {config.yAxisOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Live SVG Chart Preview */}
        <div className="lg-well flex flex-col justify-between p-4 lg:col-span-7">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-bold text-slate-900 dark:text-white">{title}</span>
            <BarChart3 className="h-4 w-4 text-[#b91c1c] dark:text-[#ff8589]" />
          </div>

          <div className="flex flex-1 items-center justify-center py-2">
            {chartType === 'bar' && (
              <svg viewBox="0 0 320 170" className="w-full max-w-[360px]">
                <line x1="36" y1="140" x2="305" y2="140" stroke="currentColor" strokeOpacity="0.25" />
                <line x1="36" y1="15" x2="36" y2="140" stroke="currentColor" strokeOpacity="0.25" />
                {config.data.map((d, i) => {
                  const bw = 38;
                  const gap = 24;
                  const x = 52 + i * (bw + gap);
                  const h = (d.value / maxVal) * 108;
                  const y = 140 - h;
                  return (
                    <g key={d.label}>
                      <rect x={x} y={y} width={bw} height={h} rx="6" fill="#c81b1c" opacity="0.88" />
                      <text x={x + bw / 2} y={y - 5} textAnchor="middle" fontSize="10" fill="currentColor">
                        {d.value}
                      </text>
                      <text x={x + bw / 2} y="156" textAnchor="middle" fontSize="10" fill="currentColor">
                        {d.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            )}

            {chartType === 'line' && (
              <svg viewBox="0 0 320 170" className="w-full max-w-[360px]">
                <line x1="36" y1="140" x2="305" y2="140" stroke="currentColor" strokeOpacity="0.25" />
                <line x1="36" y1="15" x2="36" y2="140" stroke="currentColor" strokeOpacity="0.25" />
                <polyline
                  fill="none"
                  stroke="#c81b1c"
                  strokeWidth="3"
                  points={config.data
                    .map((d, i) => {
                      const x = 60 + i * (210 / Math.max(config.data.length - 1, 1));
                      const y = 140 - (d.value / maxVal) * 108;
                      return `${x},${y}`;
                    })
                    .join(' ')}
                />
                {config.data.map((d, i) => {
                  const x = 60 + i * (210 / Math.max(config.data.length - 1, 1));
                  const y = 140 - (d.value / maxVal) * 108;
                  return (
                    <g key={d.label}>
                      <circle cx={x} cy={y} r="5" fill="#c81b1c" />
                      <text x={x} y={y - 9} textAnchor="middle" fontSize="10" fill="currentColor">
                        {d.value}
                      </text>
                      <text x={x} y="156" textAnchor="middle" fontSize="10" fill="currentColor">
                        {d.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            )}

            {chartType === 'pie' && (
              <div className="flex flex-wrap items-center justify-center gap-4">
                <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90">
                  {
                    config.data.reduce(
                      (acc, d, i) => {
                        const frac = d.value / sumVal;
                        const circ = 2 * Math.PI * 38;
                        const dash = frac * circ;
                        const el = (
                          <circle
                            key={d.label}
                            cx="60"
                            cy="60"
                            r="38"
                            fill="transparent"
                            stroke={pieColors[i % pieColors.length]}
                            strokeWidth="22"
                            strokeDasharray={`${dash} ${circ}`}
                            strokeDashoffset={-acc.offset}
                          />
                        );
                        acc.els.push(el);
                        acc.offset += dash;
                        return acc;
                      },
                      { els: [] as React.ReactNode[], offset: 0 },
                    ).els
                  }
                </svg>
                <div className="space-y-1 text-xs font-mono-jb">
                  {config.data.map((d, i) => (
                    <div key={d.label} className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-sm"
                        style={{ backgroundColor: pieColors[i % pieColors.length] }}
                      />
                      <span>
                        {d.label}: {d.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-2 flex items-center justify-between border-t border-slate-900/10 pt-2 font-mono-jb text-[11px] text-slate-500 dark:border-white/10 dark:text-slate-400">
            <span>X: {xAxis}</span>
            <span>Y: {yAxis}</span>
          </div>
        </div>
      </div>

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={reset}
        hintText="Ma’lumot turiga qarab eng qulay diagramma va o‘q nomlarini tanlang."
        extraControls={
          <button
            type="button"
            onClick={checkChart}
            className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white cursor-pointer"
          >
            <Check className="h-4 w-4" />
            <span>Diagrammani tekshirish</span>
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
            ? 'Diagramma turi, o‘qlari yoki sarlavhada moslik yetarli emas.'
            : 'Sozlamalarni tanlang va "Diagrammani tekshirish" tugmasini bosing.'
        }
      />
    </div>
  );
}

/* =========================================================
   11. DBLAB ENGINE (QUERY FILTER BUILDER & TABLE RELATIONS)
   ========================================================= */
export function DbLabGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<DbLabConfig>) {
  const [field, setField] = useState(config.columns[0]?.name ?? '');
  const [op, setOp] = useState<'=' | '>' | '<' | 'contains'>('=');
  const [val, setVal] = useState('');
  const [relations, setRelations] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const wonRef = useRef(false);

  const filteredRows = useMemo(() => {
    if (config.mode !== 'query') return config.rows;
    if (!val.trim()) return config.rows;
    return config.rows.filter((row) => {
      const cellVal = row[field];
      if (cellVal === undefined) return false;
      const cmp = val.trim();
      if (op === '=') return String(cellVal).toLowerCase() === cmp.toLowerCase();
      if (op === '>') return Number(cellVal) > Number(cmp);
      if (op === '<') return Number(cellVal) < Number(cmp);
      return String(cellVal).toLowerCase().includes(cmp.toLowerCase());
    });
  }, [config.mode, config.rows, field, op, val]);

  const queryMatches =
    config.mode === 'query' &&
    field === config.targetField &&
    op === config.targetOp &&
    val.trim().toLowerCase() === (config.targetValue ?? '').trim().toLowerCase() &&
    (config.expectedRowCount === undefined || filteredRows.length === config.expectedRowCount);

  const relationMatches =
    config.mode === 'relation' &&
    (config.relationPairs ?? []).length > 0 &&
    (config.relationPairs ?? []).every((pair, idx) => relations[idx] === pair.answer);

  const solved = checked && (queryMatches || relationMatches);
  const wrong = checked && !solved;

  function checkDb() {
    setChecked(true);
    if ((queryMatches || relationMatches) && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }

  function reset() {
    setField(config.columns[0]?.name ?? '');
    setOp('=');
    setVal('');
    setRelations({});
    setChecked(false);
    setShowHint(false);
  }

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      {/* Table Header & Data Preview */}
      <div className="mb-4 overflow-x-auto rounded-xl border border-slate-900/12 dark:border-white/15">
        <div className="flex items-center justify-between border-b border-slate-900/10 bg-slate-900/[0.04] px-3.5 py-2 dark:border-white/10 dark:bg-white/[0.04]">
          <span className="flex items-center gap-2 font-mono-jb text-xs font-bold text-slate-900 dark:text-white">
            <Database className="h-3.5 w-3.5 text-[#b91c1c] dark:text-[#ff8589]" />
            Jadval: {config.tableName}
          </span>
          <span className="font-mono-jb text-[11px] text-slate-500 dark:text-slate-400">
            Yozuvlar: {filteredRows.length} / {config.rows.length}
          </span>
        </div>

        <table className="w-full border-collapse text-left font-mono-jb text-xs">
          <thead>
            <tr className="border-b border-slate-900/10 bg-white/50 dark:border-white/10 dark:bg-white/[0.02]">
              {config.columns.map((c) => (
                <th key={c.name} className="px-3 py-2 font-bold text-slate-800 dark:text-slate-200">
                  {c.name}{' '}
                  <span className="text-[10px] font-normal opacity-60">({c.type})</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, idx) => (
              <tr
                key={idx}
                className="border-t border-slate-900/10 dark:border-white/10"
              >
                {config.columns.map((c) => (
                  <td key={c.name} className="px-3 py-2 text-slate-700 dark:text-slate-300">
                    {String(row[c.name] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {config.mode === 'query' ? (
        <div className="lg-well flex flex-wrap items-center gap-2.5 p-3.5">
          <span className="flex items-center gap-1.5 font-mono-jb text-xs font-bold text-[#b91c1c] dark:text-[#ff8589]">
            <Search className="h-3.5 w-3.5" />
            WHERE
          </span>
          <select
            value={field}
            onChange={(e) => {
              setChecked(false);
              setField(e.target.value);
            }}
            className="min-h-[42px] rounded-xl border border-slate-900/15 bg-white/85 px-3 font-mono-jb text-xs font-semibold text-slate-900 dark:border-white/15 dark:bg-slate-900 dark:text-white"
          >
            {config.columns.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={op}
            onChange={(e) => {
              setChecked(false);
              setOp(e.target.value as '=' | '>' | '<' | 'contains');
            }}
            className="min-h-[42px] rounded-xl border border-slate-900/15 bg-white/85 px-3 font-mono-jb text-xs font-semibold text-slate-900 dark:border-white/15 dark:bg-slate-900 dark:text-white"
          >
            <option value="=">=</option>
            <option value=">">&gt;</option>
            <option value="<">&lt;</option>
            <option value="contains">o‘z ichiga oladi</option>
          </select>

          <input
            type="text"
            value={val}
            onChange={(e) => {
              setChecked(false);
              setVal(e.target.value);
            }}
            placeholder="Qiymat..."
            className="min-h-[42px] min-w-[140px] flex-1 rounded-xl border border-slate-900/15 bg-white/85 px-3 font-mono-jb text-xs text-slate-900 focus:border-[#c81b1c] focus:outline-none dark:border-white/15 dark:bg-black/45 dark:text-white"
          />
        </div>
      ) : (
        <div className="space-y-2.5">
          {(config.relationPairs ?? []).map((pair, idx) => (
            <div
              key={pair.pairLabel}
              className="lg-well flex flex-wrap items-center justify-between gap-3 px-4 py-3"
            >
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                {pair.pairLabel}
              </span>
              <div className="flex gap-2">
                {(['1:1', '1:∞', '∞:∞'] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setChecked(false);
                      setRelations((prev) => ({ ...prev, [idx]: opt }));
                    }}
                    className={`min-h-[40px] rounded-xl border px-3.5 py-1.5 font-mono-jb text-xs font-bold transition cursor-pointer ${
                      relations[idx] === opt
                        ? 'border-[#c81b1c] bg-[#c81b1c] text-white'
                        : 'border-slate-900/15 bg-white/70 text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={reset}
        hintText={config.hint}
        extraControls={
          <button
            type="button"
            onClick={checkDb}
            className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white cursor-pointer"
          >
            <Check className="h-4 w-4" />
            <span>So‘rovni bajarish</span>
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
            ? `Ajoyib! ${config.explanation}`
            : wrong
            ? 'Shart yoki bog‘lanish turi mos emas — jadval ma’lumotlarini qayta ko‘ring.'
            : 'So‘rov parametrlarini kiriting va "So‘rovni bajarish" ni bosing.'
        }
      />
    </div>
  );
}

/* =========================================================
   13. CALC ENGINE (MEMORY / SPEED / PIXEL MATH SOLVER)
   ========================================================= */
export function CalcGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<CalcConfig>) {
  const [answer, setAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const wonRef = useRef(false);

  const tol = config.tolerance ?? 0.01;
  const parsed = Number(answer.replace(',', '.').trim());
  const isValid = answer.trim() !== '' && Number.isFinite(parsed);
  const isCorrect = isValid && Math.abs(parsed - config.correctAnswer) <= tol;

  const solved = checked && isCorrect;
  const wrong = checked && !isCorrect;

  function checkCalc(e?: React.FormEvent) {
    e?.preventDefault();
    setChecked(true);
    if (isCorrect && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }

  function reset() {
    setAnswer('');
    setChecked(false);
    setShowHint(false);
  }

  return (
    <div>
      <p className="mb-4 text-sm font-medium text-slate-800 dark:text-slate-200">{config.prompt}</p>

      <form onSubmit={checkCalc} className="lg-well flex flex-wrap items-center gap-3 p-4">
        <Calculator className="h-5 w-5 text-[#b91c1c] dark:text-[#ff8589]" />
        <input
          type="text"
          inputMode="decimal"
          value={answer}
          onChange={(e) => {
            setChecked(false);
            setAnswer(e.target.value);
          }}
          placeholder="Javobni kiriting (masalan: 0.5)"
          className="min-h-[44px] min-w-[180px] flex-1 rounded-xl border border-slate-900/15 bg-white/85 px-4 font-mono-jb text-sm text-slate-950 focus:border-[#c81b1c] focus:outline-none dark:border-white/15 dark:bg-black/45 dark:text-white"
        />
        <span className="font-mono-jb rounded-xl border border-slate-900/10 bg-slate-900/[0.04] px-3.5 py-2.5 text-xs font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200">
          {config.unit}
        </span>
        <button
          type="submit"
          className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white cursor-pointer"
        >
          <Check className="h-4 w-4" />
          <span>Tekshirish</span>
        </button>
      </form>

      {(solved || showHint) && config.steps.length > 0 && (
        <div className="mt-4 space-y-1.5 rounded-xl border border-slate-900/12 bg-white/60 p-4 font-mono-jb text-xs text-slate-800 dark:border-white/12 dark:bg-white/[0.04] dark:text-slate-200">
          <div className="font-bold text-[#b91c1c] dark:text-[#ff8589]">Yechim bosqichlari:</div>
          {config.steps.map((step, i) => (
            <div key={i}>{step}</div>
          ))}
        </div>
      )}

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={reset}
        hintText={config.hint}
      />

      <EngineStatusFooter
        solved={solved}
        isWarn={wrong}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? `To‘g‘ri javob! ${config.correctAnswer} ${config.unit}.`
            : wrong
            ? 'Hisob-kitobda xatolik bor — birliklarga (1024 yoki 8 bit = 1 bayt) e’tibor bering.'
            : 'Hisoblab chiqqan qiymatingizni kiriting.'
        }
      />
    </div>
  );
}
