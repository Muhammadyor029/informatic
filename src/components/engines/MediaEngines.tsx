import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Film,
  FlipHorizontal,
  Play,
  RotateCw,
  Scissors,
  Sliders,
  Volume2,
} from 'lucide-react';
import type { AudioLabConfig, ImageLabConfig, TimelineConfig } from '../../data/plan/types';
import { EngineActionRow, EngineStatusFooter, type BaseEngineProps } from './EngineShared';

/* =========================================================
   14. IMAGELAB ENGINE (BRIGHTNESS / CONTRAST / ROTATE / FLIP)
   ========================================================= */
export function ImageLabGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<ImageLabConfig>) {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [rotate, setRotate] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const wonRef = useRef(false);

  const tol = config.tolerance ?? 6;
  const isCorrect =
    Math.abs(brightness - config.target.brightness) <= tol &&
    Math.abs(contrast - config.target.contrast) <= tol &&
    rotate % 360 === config.target.rotate % 360 &&
    flipH === config.target.flipH;

  const solved = checked && isCorrect;
  const wrong = checked && !isCorrect;

  function checkImage() {
    setChecked(true);
    if (isCorrect && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }

  function reset() {
    setBrightness(100);
    setContrast(100);
    setRotate(0);
    setFlipH(false);
    setChecked(false);
    setShowHint(false);
  }

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      <div className="grid gap-5 lg:grid-cols-12">
        {/* Live SVG Graphic Preview */}
        <div className="lg-well flex items-center justify-center overflow-hidden p-6 lg:col-span-6">
          <div
            className="transition-all duration-200"
            style={{
              filter: `brightness(${brightness}%) contrast(${contrast}%)`,
              transform: `rotate(${rotate}deg) scaleX(${flipH ? -1 : 1})`,
            }}
          >
            {config.subject === 'landscape' ? (
              <svg viewBox="0 0 200 140" className="h-44 w-60 rounded-xl shadow">
                <rect width="200" height="140" fill="#1e293b" />
                <circle cx="150" cy="36" r="18" fill="#f59e0b" />
                <polygon points="0,140 65,55 130,140" fill="#c81b1c" />
                <polygon points="75,140 135,68 200,140" fill="#ef4444" opacity="0.85" />
                <rect y="122" width="200" height="18" fill="#0f172a" />
              </svg>
            ) : config.subject === 'portrait' ? (
              <svg viewBox="0 0 180 180" className="h-44 w-44 rounded-xl shadow">
                <rect width="180" height="180" fill="#0f172a" />
                <circle cx="90" cy="64" r="28" fill="#f1f5f9" />
                <path d="M38 158 C38 112 142 112 142 158 Z" fill="#c81b1c" />
              </svg>
            ) : (
              <svg viewBox="0 0 180 140" className="h-44 w-56 rounded-xl shadow">
                <rect width="180" height="140" fill="#111827" />
                <polygon points="90,22 148,118 32,118" fill="#c81b1c" />
                <circle cx="90" cy="84" r="16" fill="#ffffff" />
              </svg>
            )}
          </div>
        </div>

        {/* Sliders & Transforms */}
        <div className="space-y-4 lg:col-span-6">
          <div className="lg-well p-4">
            <div className="mb-1.5 flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-200">
                <Sliders className="h-3.5 w-3.5 text-[#b91c1c] dark:text-[#ff8589]" />
                Yorqinlik (Brightness)
              </span>
              <span className="font-mono-jb">{brightness}%</span>
            </div>
            <input
              type="range"
              min={50}
              max={150}
              step={5}
              value={brightness}
              onChange={(e) => {
                setChecked(false);
                setBrightness(Number(e.target.value));
              }}
              className="w-full accent-[#c81b1c]"
            />
          </div>

          <div className="lg-well p-4">
            <div className="mb-1.5 flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-700 dark:text-slate-200">Kontrast (Contrast)</span>
              <span className="font-mono-jb">{contrast}%</span>
            </div>
            <input
              type="range"
              min={50}
              max={150}
              step={5}
              value={contrast}
              onChange={(e) => {
                setChecked(false);
                setContrast(Number(e.target.value));
              }}
              className="w-full accent-[#c81b1c]"
            />
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => {
                setChecked(false);
                setRotate((r) => (r + 90) % 360);
              }}
              className="lg-btn-glass inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-slate-800 dark:text-white cursor-pointer"
            >
              <RotateCw className="h-4 w-4 text-[#b91c1c] dark:text-[#ff8589]" />
              <span>90° Aylantirish ({rotate}°)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setChecked(false);
                setFlipH((f) => !f);
              }}
              className={`inline-flex min-h-[44px] items-center gap-2 rounded-xl border px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                flipH
                  ? 'border-[#c81b1c] bg-[#c81b1c] text-white'
                  : 'border-slate-900/15 bg-white/70 text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
              }`}
            >
              <FlipHorizontal className="h-4 w-4" />
              <span>Gorizontal aks ({flipH ? 'Ha' : 'Yo‘q'})</span>
            </button>
          </div>
        </div>
      </div>

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={reset}
        hintText={config.hint}
        extraControls={
          <button
            type="button"
            onClick={checkImage}
            className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white cursor-pointer"
          >
            <Check className="h-4 w-4" />
            <span>Natijani tekshirish</span>
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
            ? 'Ajoyib! Tasvir kerakli yorqinlik, kontrast va burchakka moslandi.'
            : wrong
            ? 'Tasvir parametrlari shartdagi qiymatlarga hali to‘liq mos emas.'
            : 'Slayderlar va burish tugmalari yordamida rasmni sozlang.'
        }
      />
    </div>
  );
}

/* =========================================================
   15. AUDIOLAB ENGINE (WEB AUDIO SYNTH + TRIM / VOLUME / SPEED)
   ========================================================= */
export function AudioLabGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<AudioLabConfig>) {
  const [trimStart, setTrimStart] = useState(0);
  const [trimEnd, setTrimEnd] = useState(config.clipDurationSec);
  const [volume, setVolume] = useState(100);
  const [speed, setSpeed] = useState<number>(1);
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [playing, setPlaying] = useState(false);
  const wonRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
    };
  }, []);

  const isCorrect =
    trimStart === config.targetTrimStart &&
    trimEnd === config.targetTrimEnd &&
    Math.abs(volume - config.targetVolume) <= 5 &&
    speed === config.targetSpeed;

  const solved = checked && isCorrect;
  const wrong = checked && !isCorrect;

  function playPreviewTone() {
    if (playing) return;
    setPlaying(true);
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;
      const gain = ctx.createGain();
      gain.gain.value = Math.min(0.45, (volume / 100) * 0.25);
      gain.connect(ctx.destination);

      const notes = [261.63, 329.63, 392.0, 523.25];
      const stepDur = 0.22 / speed;
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;
        osc.connect(gain);
        const startT = ctx.currentTime + i * stepDur;
        osc.start(startT);
        osc.stop(startT + stepDur * 0.9);
      });
      timeoutRef.current = window.setTimeout(() => {
        ctx.close().catch(() => {});
        if (audioCtxRef.current === ctx) audioCtxRef.current = null;
        timeoutRef.current = null;
        setPlaying(false);
      }, Math.round(notes.length * stepDur * 1000) + 120);
    } catch {
      setPlaying(false);
    }
  }

  function checkAudio() {
    setChecked(true);
    if (isCorrect && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }

  function reset() {
    setTrimStart(0);
    setTrimEnd(config.clipDurationSec);
    setVolume(100);
    setSpeed(1);
    setChecked(false);
    setShowHint(false);
  }

  const bars = [26, 48, 72, 40, 88, 64, 52, 90, 44, 70, 58, 82, 36, 62, 74, 48, 66, 38, 54, 30];

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      {/* Waveform Visualizer */}
      <div className="lg-well mb-4 p-4">
        <div className="mb-2 flex items-center justify-between font-mono-jb text-xs text-slate-500 dark:text-slate-400">
          <span>
            Kesilgan diapazon: {trimStart}s – {trimEnd}s ({Math.max(0, trimEnd - trimStart)}s)
          </span>
          <span>Ovoz: {volume}% · Tezlik: {speed}x</span>
        </div>

        <div className="flex h-20 items-center justify-between gap-1 rounded-xl bg-slate-950/85 px-3 py-2">
          {bars.map((h, i) => {
            const sec = (i / bars.length) * config.clipDurationSec;
            const inRange = sec >= trimStart && sec < trimEnd;
            return (
              <div
                key={i}
                className={`w-full rounded-sm transition-all ${
                  inRange ? 'bg-[#c81b1c]' : 'bg-slate-600/40'
                }`}
                style={{ height: `${Math.min(100, Math.round((h * volume) / 110))}%` }}
              />
            );
          })}
        </div>
      </div>

      {/* Audio Parameters */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="lg-well p-3.5">
          <div className="mb-1 flex justify-between text-xs font-semibold">
            <span>Boshlanish nuqtasi (Trim Start)</span>
            <span className="font-mono-jb">{trimStart} s</span>
          </div>
          <input
            type="range"
            min={0}
            max={Math.max(0, trimEnd - 1)}
            step={1}
            value={trimStart}
            onChange={(e) => {
              setChecked(false);
              setTrimStart(Number(e.target.value));
            }}
            className="w-full accent-[#c81b1c]"
          />
        </div>

        <div className="lg-well p-3.5">
          <div className="mb-1 flex justify-between text-xs font-semibold">
            <span>Tugash nuqtasi (Trim End)</span>
            <span className="font-mono-jb">{trimEnd} s</span>
          </div>
          <input
            type="range"
            min={Math.min(config.clipDurationSec, trimStart + 1)}
            max={config.clipDurationSec}
            step={1}
            value={trimEnd}
            onChange={(e) => {
              setChecked(false);
              setTrimEnd(Number(e.target.value));
            }}
            className="w-full accent-[#c81b1c]"
          />
        </div>

        <div className="lg-well p-3.5">
          <div className="mb-1 flex justify-between text-xs font-semibold">
            <span className="flex items-center gap-1.5">
              <Volume2 className="h-3.5 w-3.5 text-[#b91c1c] dark:text-[#ff8589]" />
              Ovoz balandligi
            </span>
            <span className="font-mono-jb">{volume}%</span>
          </div>
          <input
            type="range"
            min={20}
            max={150}
            step={5}
            value={volume}
            onChange={(e) => {
              setChecked(false);
              setVolume(Number(e.target.value));
            }}
            className="w-full accent-[#c81b1c]"
          />
        </div>

        <div className="lg-well flex flex-col justify-between p-3.5">
          <div className="mb-1.5 text-xs font-semibold">Ijro tezligi</div>
          <div className="flex gap-2">
            {[0.5, 1, 1.5, 2].map((sp) => (
              <button
                key={sp}
                type="button"
                onClick={() => {
                  setChecked(false);
                  setSpeed(sp);
                }}
                className={`min-h-[38px] flex-1 rounded-lg border font-mono-jb text-xs font-bold transition cursor-pointer ${
                  speed === sp
                    ? 'border-[#c81b1c] bg-[#c81b1c] text-white'
                    : 'border-slate-900/15 bg-white/70 text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
                }`}
              >
                {sp}x
              </button>
            ))}
          </div>
        </div>
      </div>

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={reset}
        hintText={config.hint}
        extraControls={
          <>
            <button
              type="button"
              onClick={playPreviewTone}
              className="lg-btn-glass inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-slate-800 dark:text-white cursor-pointer"
            >
              <Play className="h-4 w-4 text-[#b91c1c] dark:text-[#ff8589]" />
              <span>{playing ? 'Yangramoqda...' : 'Eshitib ko‘rish'}</span>
            </button>
            <button
              type="button"
              onClick={checkAudio}
              className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white cursor-pointer"
            >
              <Check className="h-4 w-4" />
              <span>Saqlash va tekshirish</span>
            </button>
          </>
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
            ? 'Barakalla! Audio kesimi, ovoz darajasi va tezligi aniq sozlandi.'
            : wrong
            ? 'Boshlanish, tugash yoki ovoz/tezlik parametrlaridan biri shartga mos emas.'
            : 'Audio slayderlarini sozlang va "Saqlash va tekshirish" ni bosing.'
        }
      />
    </div>
  );
}

/* =========================================================
   16. TIMELINE ENGINE (VIDEO/AUDIO TRACK SEQUENCER)
   ========================================================= */
export function TimelineGame({
  gameId,
  config,
  alreadySolved,
  onWin,
  onNextGame,
  hasNextGame,
}: BaseEngineProps<TimelineConfig>) {
  const [clips, setClips] = useState(() => config.clips.slice());
  const [titleEnabled, setTitleEnabled] = useState(false);
  const [trimApplied, setTrimApplied] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const wonRef = useRef(false);

  const orderOk =
    clips.length === config.expectedOrder.length &&
    clips.every((c, idx) => c.id === config.expectedOrder[idx]);
  const titleOk = !config.requireTitleTrack || titleEnabled;
  const trimOk = !config.requireTrim || trimApplied;

  const solved = checked && orderOk && titleOk && trimOk;
  const wrong = checked && !solved;

  function moveClip(idx: number, dir: -1 | 1) {
    const next = idx + dir;
    if (next < 0 || next >= clips.length) return;
    setChecked(false);
    setClips((prev) => {
      const copy = prev.slice();
      [copy[idx], copy[next]] = [copy[next], copy[idx]];
      return copy;
    });
  }

  function checkTimeline() {
    setChecked(true);
    if (orderOk && titleOk && trimOk && !wonRef.current) {
      wonRef.current = true;
      onWin(gameId, 100);
    }
  }

  function reset() {
    setClips(config.clips.slice());
    setTitleEnabled(false);
    setTrimApplied(false);
    setChecked(false);
    setShowHint(false);
  }

  return (
    <div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">{config.prompt}</p>

      {/* Visual Multi-Track Timeline */}
      <div className="lg-well mb-4 space-y-3 p-4">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
          <span className="flex items-center gap-1.5">
            <Film className="h-4 w-4 text-[#b91c1c] dark:text-[#ff8589]" />
            V1 — Video yo‘lagi (o‘ng/chap tugmalar bilan siljiting)
          </span>
          <span className="font-mono-jb">
            Jami: {clips.reduce((a, c) => a + c.duration, 0)}s
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {clips.map((clip, idx) => (
            <div
              key={clip.id}
              className="flex min-w-[160px] flex-1 items-center justify-between gap-2 rounded-xl border border-white/25 px-3 py-3 text-white shadow-sm"
              style={{ backgroundColor: clip.color }}
            >
              <button
                type="button"
                disabled={idx === 0}
                onClick={() => moveClip(idx, -1)}
                aria-label="Chapga siljitish"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/25 disabled:opacity-35 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div className="text-center">
                <div className="text-xs font-bold">{clip.label}</div>
                <div className="font-mono-jb text-[10px] opacity-85">{clip.duration}s</div>
              </div>
              <button
                type="button"
                disabled={idx === clips.length - 1}
                onClick={() => moveClip(idx, 1)}
                aria-label="O‘ngga siljitish"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/25 disabled:opacity-35 cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Title & Trim options */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {config.requireTitleTrack ? (
            <button
              type="button"
              onClick={() => {
                setChecked(false);
                setTitleEnabled((v) => !v);
              }}
              className={`inline-flex min-h-[42px] items-center gap-2 rounded-xl border px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                titleEnabled
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-800 dark:text-emerald-200'
                  : 'border-slate-900/15 bg-white/70 text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
              }`}
            >
              <span>{titleEnabled ? '✓ Matnli titr yoqilgan' : '+ Matnli titr qatlamini yoqish'}</span>
            </button>
          ) : null}

          {config.requireTrim ? (
            <button
              type="button"
              onClick={() => {
                setChecked(false);
                setTrimApplied((v) => !v);
              }}
              className={`inline-flex min-h-[42px] items-center gap-2 rounded-xl border px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                trimApplied
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-800 dark:text-emerald-200'
                  : 'border-slate-900/15 bg-white/70 text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white'
              }`}
            >
              <Scissors className="h-3.5 w-3.5" />
              <span>{trimApplied ? '✓ Ortiqcha kadr kesilgan' : 'Ortiqcha kadrni kesish (Trim)'}</span>
            </button>
          ) : null}
        </div>
      </div>

      <EngineActionRow
        showHint={showHint}
        onToggleHint={() => setShowHint((v) => !v)}
        onReset={reset}
        hintText={config.hint}
        extraControls={
          <button
            type="button"
            onClick={checkTimeline}
            className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white cursor-pointer"
          >
            <Check className="h-4 w-4" />
            <span>Montajni tekshirish</span>
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
            ? 'Ajoyib! Video kliplar tartibi va qo‘shimcha qatlamlar to‘g‘ri yig‘ildi.'
            : wrong
            ? 'Kliplar ketma-ketligi yoki titr/kesish talabini qayta tekshiring.'
            : 'Kliplarni tartiblang va "Montajni tekshirish" ni bosing.'
        }
      />
    </div>
  );
}
