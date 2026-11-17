import React from 'react';
import { CheckCircle2, HelpCircle, RotateCcw, SkipForward, XCircle } from 'lucide-react';

export interface BaseEngineProps<T = unknown> {
  gameId: string;
  config: T;
  alreadySolved: boolean;
  onWin: (gameId: string, points: number) => void;
  onNextGame: () => void;
  hasNextGame: boolean;
}

export function EngineStatusFooter({
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
          className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-white cursor-pointer"
        >
          <span>Keyingi o‘yin</span>
          <SkipForward className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}

export function EngineActionRow({
  showHint,
  onToggleHint,
  onReset,
  hintText,
  extraControls,
}: {
  showHint?: boolean;
  onToggleHint?: () => void;
  onReset: () => void;
  hintText?: string;
  extraControls?: React.ReactNode;
}) {
  return (
    <div className="mt-4 space-y-3">
      <div className="flex flex-wrap items-center gap-2.5">
        {extraControls}
        {onToggleHint && hintText ? (
          <button
            type="button"
            onClick={onToggleHint}
            className="lg-btn-glass inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-slate-800 dark:text-white cursor-pointer"
          >
            <HelpCircle className="h-4 w-4" />
            <span>{showHint ? 'Maslahatni yopish' : 'Maslahat'}</span>
          </button>
        ) : null}
        <button
          type="button"
          onClick={onReset}
          className="lg-btn-glass inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-slate-800 dark:text-white cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Boshidan boshlash</span>
        </button>
      </div>

      {showHint && hintText ? (
        <p className="rounded-xl border border-sky-500/30 bg-sky-500/10 px-4 py-2.5 text-xs text-sky-900 dark:text-sky-200">
          {hintText}
        </p>
      ) : null}
    </div>
  );
}
