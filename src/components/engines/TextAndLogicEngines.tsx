import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowDown, ArrowUp, Check, Clock, Eye, RotateCw, ShieldAlert } from 'lucide-react';
import type {
  CaseStudyConfig,
  CrosswordConfig,
  FillBlankConfig,
  FlashcardsConfig,
  OrderConfig,
  TrueFalseConfig,
} from '../../data/plan/types';
import { EngineActionRow, EngineStatusFooter, type BaseEngineProps } from './EngineShared';

/* =========================================================
   1. ORDER ENGINE (DRAG & DROP + TOUCH REORDER)
   ========================================================= */
export function OrderGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<OrderConfig>) {
  const initialShuffled = useMemo(() => {
    const arr = config.items.map((text, idx) => ({ text, origIdx: idx }));
    for (let i = arr.length - 1; i > 0; i--) {
      const j = (i * 5 + 1) % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    if (arr.every((x, i) => x.origIdx === i) && arr.length > 1) {
      [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    return arr;
  }, [config.items]);

  const [items, setItems] = useState(initialShuffled);
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const wonRef = useRef(false);

  const solved = checked && items.every((x, idx) => x.origIdx === idx);

  function moveItem(from: number, to: number) {
    if (to < 0 || to >= items.length || from === to) return;
    setChecked(false);
    setItems((prev) => {
      const copy = prev.slice();
      const [moved] = copy.splice(from, 1);
      copy.splice(to, 0, moved);
      return copy;
    });
  }

  function checkOrder() {
    setChecked(true);
    const ok = items.every((x, idx) => x.origIdx === idx);
    if (ok && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }

  function reset() {
    setItems(initialShuffled);
    setChecked(false);
    setShowHint(false);
  }

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="space-y-2.5">
        {items.map((item, idx) => {
          const isRightPos = checked && item.origIdx === idx;
          const isWrongPos = checked && item.origIdx !== idx;
          return (
            <div
              key={item.origIdx}
              draggable
              onDragStart={() => setDragIdx(idx)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => {
                if (dragIdx !== null) moveItem(dragIdx, idx);
                setDragIdx(null);
              }}
              className={`lg-well flex items-center justify-between gap-3 px-4 py-3 transition ${
                isRightPos
                  ? 'border-emerald-500/60 bg-emerald-500/15'
                  : isWrongPos
                  ? 'border-amber-500/60 bg-amber-500/15'
                  : ''
              }`}
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="font-mono-jb flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#c81b1c]/15 text-xs font-bold text-[#c81b1c] dark:text-red-300">
                  {idx + 1}
                </span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  {item.text}
                </span>
              </div>

              <div className="flex shrink-0 items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => moveItem(idx, idx - 1)}
                  disabled={idx === 0}
                  aria-label="Yuqoriga surish"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-900/12 bg-white/70 text-slate-800 disabled:opacity-35 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => moveItem(idx, idx + 1)}
                  disabled={idx === items.length - 1}
                  aria-label="Pastga surish"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-900/12 bg-white/70 text-slate-800 disabled:opacity-35 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
                >
                  <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={reset}
        hintText={config.hint}
        extraControls={
          <button
            type="button"
            onClick={checkOrder}
            className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white cursor-pointer"
          >
            <Check className="h-4 w-4" />
            <span>Tekshirish</span>
          </button>
        }
      />

      <EngineStatusFooter
        solved={solved}
        isWarn={checked && !solved}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? config.explanation || 'Barcha bosqichlar to‘g‘ri tartibda joylandi! (+100 ball)'
            : checked
            ? 'Ba’zi bosqichlar o‘rni almashgan — yuqoriga/pastga tugmalari yoki sudrab to‘g‘rilang.'
            : 'Bosqichlarni sudrab yoki o‘q tugmalari bilan tartiblang, so‘ng Tekshirishni bosing.'
        }
      />
    </div>
  );
}

/* =========================================================
   2. FILL-IN-THE-BLANK ENGINE
   ========================================================= */
export function FillBlankGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<FillBlankConfig>) {
  const [answers, setAnswers] = useState<(string | null)[]>(() =>
    new Array(config.blanks.length).fill(null),
  );
  const [activeBlank, setActiveBlank] = useState(0);
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const wonRef = useRef(false);

  const parts = useMemo(() => config.template.split(/(\{\{\d+\}\})/g), [config.template]);
  const allFilled = answers.every((a) => a !== null);
  const solved =
    checked && config.blanks.every((b, idx) => answers[idx] === b.answer);

  function pickOption(opt: string) {
    setChecked(false);
    setAnswers((prev) => prev.map((v, i) => (i === activeBlank ? opt : v)));
    if (activeBlank < config.blanks.length - 1) {
      setActiveBlank((b) => b + 1);
    }
  }

  function check() {
    setChecked(true);
    const ok = config.blanks.every((b, idx) => answers[idx] === b.answer);
    if (ok && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }

  function reset() {
    setAnswers(new Array(config.blanks.length).fill(null));
    setActiveBlank(0);
    setChecked(false);
    setShowHint(false);
  }

  const activeChoices = config.blanks[activeBlank]?.options ?? [];

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="lg-well mb-5 p-5 text-base leading-loose text-slate-900 dark:text-white">
        {parts.map((part, i) => {
          const match = part.match(/^\{\{(\d+)\}\}$/);
          if (!match) return <span key={i}>{part}</span>;
          const idx = Number(match[1]);
          const val = answers[idx];
          const isCur = idx === activeBlank;
          const isOk = checked && val === config.blanks[idx]?.answer;
          const isBad = checked && val !== config.blanks[idx]?.answer;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActiveBlank(idx)}
              className={`mx-1.5 inline-flex min-h-[38px] min-w-[96px] items-center justify-center rounded-xl border px-3 py-1 font-mono-jb text-sm font-bold transition cursor-pointer ${
                isOk
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-700 dark:text-emerald-200'
                  : isBad
                  ? 'border-amber-500 bg-amber-500/20 text-amber-800 dark:text-amber-200'
                  : isCur
                  ? 'border-[#c81b1c] bg-[#c81b1c]/20 text-[#c81b1c] dark:text-red-200'
                  : 'border-slate-900/20 bg-white/75 text-slate-800 dark:border-white/20 dark:bg-white/10 dark:text-white'
              }`}
            >
              {val ?? `___ (${idx + 1})`}
            </button>
          );
        })}
      </div>

      <div className="mb-2 text-xs font-mono-jb text-slate-500 dark:text-slate-400">
        {activeBlank + 1}-bo‘sh joy uchun variant tanlang:
      </div>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {activeChoices.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => pickOption(opt)}
            className={`min-h-[46px] rounded-xl border px-4 py-2.5 text-sm font-semibold font-mono-jb transition cursor-pointer ${
              answers[activeBlank] === opt
                ? 'border-[#c81b1c] bg-[#c81b1c] text-white'
                : 'border-slate-900/12 bg-white/70 text-slate-900 hover:border-[#c81b1c] dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
            }`}
          >
            {opt}
          </button>
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
            disabled={!allFilled}
            onClick={check}
            className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white disabled:opacity-45 cursor-pointer"
          >
            <Check className="h-4 w-4" />
            <span>Tekshirish</span>
          </button>
        }
      />

      <EngineStatusFooter
        solved={solved}
        isWarn={checked && !solved}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? `To‘g‘ri! ${config.explanation}`
            : checked
            ? 'Noto‘g‘ri to‘ldirilgan bo‘sh joyni bosing va boshqa variant tanlang.'
            : 'Barcha bo‘sh joylarni to‘ldiring va Tekshirish tugmasini bosing.'
        }
      />
    </div>
  );
}

/* =========================================================
   3. TRUE / FALSE TIMED CHALLENGE ENGINE
   ========================================================= */
export function TrueFalseGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<TrueFalseConfig>) {
  const limit = config.timeLimitSec ?? 45;
  const [idx, setIdx] = useState(0);
  const [scoreCount, setScoreCount] = useState(0);
  const [lastFeedback, setLastFeedback] = useState<{ ok: boolean; text: string } | null>(null);
  const [timeLeft, setTimeLeft] = useState(limit);
  const [finished, setFinished] = useState(false);
  const wonRef = useRef(false);

  useEffect(() => {
    if (finished) return;
    const t = window.setInterval(() => {
      setTimeLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => window.clearInterval(t);
  }, [finished]);

  useEffect(() => {
    if (!finished && timeLeft === 0) {
      setFinished(true);
    }
  }, [timeLeft, finished]);

  const cur = config.statements[idx];
  const passed = finished && scoreCount >= Math.ceil(config.statements.length * 0.65);

  useEffect(() => {
    if (passed && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }, [passed, gameId, onWin]);

  function answer(val: boolean) {
    if (finished || !cur) return;
    const ok = cur.isTrue === val;
    const nextScore = ok ? scoreCount + 1 : scoreCount;
    setScoreCount(nextScore);
    setLastFeedback({ ok, text: cur.explanation });

    if (idx + 1 >= config.statements.length) {
      setFinished(true);
    } else {
      setIdx((i) => i + 1);
    }
  }

  function reset() {
    setIdx(0);
    setScoreCount(0);
    setLastFeedback(null);
    setTimeLeft(limit);
    setFinished(false);
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>
        <div className="flex items-center gap-3 font-mono-jb text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-900/12 bg-white/60 px-3 py-1.5 dark:border-white/15 dark:bg-white/[0.06]">
            <Clock className="h-3.5 w-3.5 text-[#b91c1c] dark:text-[#ff8589]" />
            <span>{timeLeft}s</span>
          </span>
          <span>
            To‘g‘ri: <strong>{scoreCount}</strong>/{config.statements.length}
          </span>
        </div>
      </div>

      {!finished && cur ? (
        <div className="lg-well p-6">
          <div className="font-mono-jb text-xs text-slate-500 dark:text-slate-400">
            Fikr {idx + 1} / {config.statements.length}
          </div>
          <p className="mt-2 text-lg font-bold text-slate-950 dark:text-white">{cur.text}</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => answer(true)}
              className="min-h-[52px] rounded-xl border border-emerald-500/45 bg-emerald-500/15 px-5 py-3 text-sm font-bold text-emerald-800 transition hover:bg-emerald-500/25 dark:text-emerald-200 cursor-pointer"
            >
              To‘g‘ri
            </button>
            <button
              type="button"
              onClick={() => answer(false)}
              className="min-h-[52px] rounded-xl border border-[#c81b1c]/45 bg-[#c81b1c]/15 px-5 py-3 text-sm font-bold text-[#c81b1c] transition hover:bg-[#c81b1c]/25 dark:text-red-200 cursor-pointer"
            >
              Noto‘g‘ri
            </button>
          </div>
        </div>
      ) : (
        <div className="lg-well p-6 text-center">
          <div className="font-mono-jb text-3xl font-bold text-slate-950 dark:text-white">
            {scoreCount} / {config.statements.length}
          </div>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {passed ? 'Ajoyib tezkorlik va aniqlik!' : 'Yana bir bor urinib ko‘ring.'}
          </p>
        </div>
      )}

      {lastFeedback ? (
        <div
          className={`mt-3 rounded-xl border px-4 py-2.5 text-xs ${
            lastFeedback.ok
              ? 'border-emerald-500/35 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200'
              : 'border-amber-500/35 bg-amber-500/10 text-amber-900 dark:text-amber-200'
          }`}
        >
          <strong>{lastFeedback.ok ? 'To‘g‘ri: ' : 'Izoh: '}</strong>
          {lastFeedback.text}
        </div>
      ) : null}

      <EngineActionRow onReset={reset} />

      <EngineStatusFooter
        solved={passed}
        isWarn={finished && !passed}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          passed
            ? `Barakalla! ${scoreCount}/${config.statements.length} to‘g‘ri topildi (+100 ball).`
            : finished
            ? 'Vaqt tugadi yoki ball yetarli emas — Qayta boshlash tugmasini bosing.'
            : 'Har bir fikrni tezda baholang.'
        }
      />
    </div>
  );
}

/* =========================================================
   4. FLASHCARDS ENGINE
   ========================================================= */
export function FlashcardsGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<FlashcardsConfig>) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<number[]>([]);
  const wonRef = useRef(false);

  const cur = config.cards[idx];
  const solved = known.length === config.cards.length;

  function markKnown() {
    const next = known.includes(idx) ? known : [...known, idx];
    setKnown(next);
    setFlipped(false);
    if (next.length === config.cards.length && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    } else if (idx + 1 < config.cards.length) {
      setIdx((i) => i + 1);
    } else {
      const nextUnlearned = config.cards.findIndex((_, k) => !next.includes(k));
      if (nextUnlearned >= 0) setIdx(nextUnlearned);
    }
  }

  function markRepeat() {
    setFlipped(false);
    setIdx((i) => (i + 1) % config.cards.length);
  }

  function reset() {
    setIdx(0);
    setFlipped(false);
    setKnown([]);
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>
        <span className="font-mono-jb text-xs text-slate-600 dark:text-slate-300">
          O‘zlashtirildi: <strong>{known.length}</strong> / {config.cards.length}
        </span>
      </div>

      {cur ? (
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          className="lg-well flex min-h-[190px] w-full flex-col items-center justify-center p-6 text-center transition hover:border-[#c81b1c]/60 cursor-pointer"
        >
          <span className="font-mono-jb text-[11px] uppercase tracking-[0.16em] text-[#b91c1c] dark:text-[#ff8589]">
            {flipped ? 'Ta’rif' : `Atama ${idx + 1} / ${config.cards.length} · Aylantirish uchun bosing`}
          </span>
          <div className="mt-3 text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">
            {flipped ? cur.definition : cur.term}
          </div>
          {flipped && cur.example ? (
            <p className="mt-3 max-w-xl text-xs text-slate-600 dark:text-slate-300">
              Misol: {cur.example}
            </p>
          ) : null}
          <span className="mt-4 inline-flex items-center gap-1.5 font-mono-jb text-xs text-slate-600 dark:text-slate-300">
            <RotateCw className="h-3.5 w-3.5" />
            <span>{flipped ? 'Atamani ko‘rish' : 'Ta’rifni ochish'}</span>
          </span>
        </button>
      ) : null}

      <EngineActionRow
        onReset={reset}
        extraControls={
          <>
            <button
              type="button"
              onClick={markKnown}
              className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white cursor-pointer"
            >
              <Check className="h-4 w-4" />
              <span>Bildim</span>
            </button>
            <button
              type="button"
              onClick={markRepeat}
              className="lg-btn-glass inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-slate-800 dark:text-white cursor-pointer"
            >
              <Eye className="h-4 w-4" />
              <span>Keyin takrorlayman</span>
            </button>
          </>
        }
      />

      <EngineStatusFooter
        solved={solved}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? 'Barcha atamalar muvaffaqiyatli takrorlandi! (+100 ball)'
            : 'Kartochkani ochib ko‘ring va "Bildim" tugmasi bilan belgilang.'
        }
      />
    </div>
  );
}

/* =========================================================
   5. CROSSWORD / TERM DECODER ENGINE
   ========================================================= */
export function CrosswordGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<CrosswordConfig>) {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [showHint, setShowHint] = useState(false);
  const wonRef = useRef(false);

  const solved = config.clues.every(
    (c) => (inputs[c.id] ?? '').trim().toUpperCase() === c.answer.toUpperCase(),
  );

  function updateClue(id: string, val: string) {
    const next = { ...inputs, [id]: val };
    setInputs(next);
    const ok = config.clues.every(
      (c) => (next[c.id] ?? '').trim().toUpperCase() === c.answer.toUpperCase(),
    );
    if (ok && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 110);
    }
  }

  function reset() {
    setInputs({});
    setShowHint(false);
  }

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="space-y-3">
        {config.clues.map((c, idx) => {
          const val = inputs[c.id] ?? '';
          const ok = val.trim().toUpperCase() === c.answer.toUpperCase();
          return (
            <div key={c.id} className="lg-well flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-mono-jb text-xs text-[#b91c1c] dark:text-[#ff8589]">
                  Savol #{idx + 1} · {c.answer.length} harf
                </div>
                <div className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                  {c.clue}
                </div>
              </div>
              <input
                type="text"
                value={val}
                maxLength={c.answer.length + 2}
                onChange={(e) => updateClue(c.id, e.target.value)}
                placeholder={`${c.answer.length} harf...`}
                className={`min-h-[44px] w-full rounded-xl border px-3.5 py-2 font-mono-jb text-sm font-bold uppercase outline-none sm:w-48 ${
                  ok
                    ? 'border-emerald-500 bg-emerald-500/15 text-emerald-800 dark:text-emerald-200'
                    : 'border-slate-900/15 bg-white/80 text-slate-900 focus:border-[#c81b1c] dark:border-white/20 dark:bg-black/40 dark:text-white'
                }`}
              />
            </div>
          );
        })}
      </div>

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={reset}
        hintText={config.hint}
      />

      <EngineStatusFooter
        solved={solved}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          solved
            ? 'Barcha krossvord atamalari topildi! (+110 ball)'
            : 'Har bir ta’rifga mos atamani kiriting.'
        }
      />
    </div>
  );
}

/* =========================================================
   6. CASE STUDY / DIGITAL ETHICS ENGINE
   ========================================================= */
export function CaseStudyGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<CaseStudyConfig>) {
  const [picked, setPicked] = useState<number | null>(null);
  const wonRef = useRef(false);

  const chosen = picked !== null ? config.options[picked] : null;
  const solved = !!chosen?.isCorrect;

  function choose(idx: number) {
    setPicked(idx);
    if (config.options[idx]?.isCorrect && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }

  return (
    <div>
      <p className="mb-3 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="lg-well mb-5 flex items-start gap-3 p-4">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#b91c1c] dark:text-[#ff8589]" />
        <p className="text-sm font-medium leading-relaxed text-slate-900 dark:text-white">
          {config.scenario}
        </p>
      </div>

      <div className="space-y-2.5">
        {config.options.map((opt, idx) => {
          const isCur = picked === idx;
          return (
            <button
              key={opt.text}
              type="button"
              onClick={() => choose(idx)}
              className={`min-h-[50px] w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold transition cursor-pointer ${
                isCur && opt.isCorrect
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-800 dark:text-emerald-200'
                  : isCur && !opt.isCorrect
                  ? 'border-amber-500 bg-amber-500/20 text-amber-900 dark:text-amber-200'
                  : 'border-slate-900/12 bg-white/70 text-slate-900 hover:border-[#c81b1c] dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
              }`}
            >
              {opt.text}
            </button>
          );
        })}
      </div>

      <EngineActionRow onReset={() => setPicked(null)} />

      <EngineStatusFooter
        solved={solved}
        isWarn={chosen !== null && !chosen.isCorrect}
        alreadySolved={alreadySolved}
        hasNextGame={hasNextGame}
        onNextGame={onNextGame}
        message={
          chosen
            ? chosen.feedback
            : 'Vaziyatga mos eng to‘g‘ri va xavfsiz qarorni tanlang.'
        }
      />
    </div>
  );
}
