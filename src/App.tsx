import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Gamepad2,
  Layers,
  Menu,
  Moon,
  RotateCcw,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  X,
} from 'lucide-react';
import { GameEngineHost } from './components/GameEngines';
import { GRADES_CURRICULUM, type GameEngineType } from './data/curriculum';

const STORAGE_SOLVED_KEY = 'informatika_solved_ids_v1';
const STORAGE_SCORE_KEY = 'informatika_score_v1';
const STORAGE_GRADE_KEY = 'informatika_active_grade_v1';
const BG_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_132544_b6ef0174-ed95-45ad-9a2f-ccb8acfbdce8.mp4';

type AppView = 'dashboard' | 'grades' | 'topics' | 'games';

const ENGINE_LABELS: Record<GameEngineType, string> = {
  sequence: 'Ketma-ketlik',
  robot: 'Robot yo‘li',
  match: 'Juftlash',
  binary: 'Ikkilik sanoq',
  logic: 'Mantiq sxemasi',
  sort: 'Saralash',
  graph: 'Graf yo‘li',
  codebug: 'Kod tahlili',
  cipher: 'Kriptografiya',
  quiz: 'Tezkor test',
};

function BrandEmblem() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="1.5"
        y="1.5"
        width="25"
        height="25"
        rx="7"
        className="stroke-slate-900/25 dark:stroke-white/25"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 9.5L13 14L8.5 18.5"
        stroke="#c81b1c"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 18.5H19.5"
        className="stroke-slate-900 dark:stroke-white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="20.5" cy="8.5" r="2" fill="#c81b1c" />
    </svg>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document === 'undefined') return true;
    return document.documentElement.classList.contains('dark');
  });

  const [activeView, setActiveView] = useState<AppView>('dashboard');

  const [activeGradeNum, setActiveGradeNum] = useState<number>(() => {
    try {
      const saved = Number(localStorage.getItem(STORAGE_GRADE_KEY));
      if (saved >= 1 && saved <= 11) return saved;
    } catch {
      // ignore
    }
    return 1;
  });

  const [activeGameIdx, setActiveGameIdx] = useState<number>(0);

  const [solvedIds, setSolvedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_SOLVED_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed.filter((x) => typeof x === 'string');
      }
    } catch {
      // ignore
    }
    return [];
  });

  const [score, setScore] = useState<number>(() => {
    try {
      const raw = Number(localStorage.getItem(STORAGE_SCORE_KEY));
      return Number.isFinite(raw) && raw >= 0 ? raw : 0;
    } catch {
      return 0;
    }
  });

  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(min-width: 768px)').matches;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  const gameStageRef = useRef<HTMLDivElement | null>(null);
  const masterVideoRef = useRef<HTMLVideoElement | null>(null);
  const liftVideoRef = useRef<HTMLVideoElement | null>(null);

  // Track viewport size so low-end phones never decode a second video element
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Sync secondary background video with master and honor prefers-reduced-motion
  useEffect(() => {
    const master = masterVideoRef.current;
    const lift = liftVideoRef.current;
    if (!master) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const applyMotionPref = () => {
      if (mq.matches) {
        master.pause();
        lift?.pause();
      } else {
        master.play().catch(() => {});
        lift?.play().catch(() => {});
      }
    };
    applyMotionPref();

    const syncVideos = () => {
      if (lift && Math.abs(lift.currentTime - master.currentTime) > 0.12) {
        lift.currentTime = master.currentTime;
      }
    };

    master.addEventListener('timeupdate', syncVideos);
    mq.addEventListener('change', applyMotionPref);
    return () => {
      master.removeEventListener('timeupdate', syncVideos);
      mq.removeEventListener('change', applyMotionPref);
    };
  }, [isDesktop]);

  // Sync theme with <html> and localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('info_theme', isDark ? 'dark' : 'light');
    } catch {
      // ignore
    }
  }, [isDark]);

  // Persist progress
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SOLVED_KEY, JSON.stringify(solvedIds));
      localStorage.setItem(STORAGE_SCORE_KEY, String(score));
      localStorage.setItem(STORAGE_GRADE_KEY, String(activeGradeNum));
    } catch {
      // ignore
    }
  }, [solvedIds, score, activeGradeNum]);

  // Cursor-tracked optical caustic highlights (desktop fine pointer only — zero overhead on mobile)
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduceMotion || !finePointer) return;

    let rafId = 0;
    const handlePointerMove = (e: PointerEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const panels = document.querySelectorAll<HTMLElement>('.lg-glass');
        for (let i = 0; i < panels.length; i++) {
          const panel = panels[i];
          const rect = panel.getBoundingClientRect();
          if (
            e.clientX >= rect.left - 80 &&
            e.clientX <= rect.right + 80 &&
            e.clientY >= rect.top - 80 &&
            e.clientY <= rect.bottom + 80
          ) {
            const x = ((e.clientX - rect.left) / Math.max(rect.width, 1)) * 100;
            const y = ((e.clientY - rect.top) / Math.max(rect.height, 1)) * 100;
            panel.style.setProperty('--mx', `${x.toFixed(1)}%`);
            panel.style.setProperty('--my', `${y.toFixed(1)}%`);
          }
        }
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [activeView, activeGradeNum, activeGameIdx, isDark]);

  const activeGrade = useMemo(
    () => GRADES_CURRICULUM.find((g) => g.grade === activeGradeNum) ?? GRADES_CURRICULUM[0],
    [activeGradeNum],
  );

  const activeGame = activeGrade.games[activeGameIdx] ?? activeGrade.games[0];
  const solvedSet = useMemo(() => new Set(solvedIds), [solvedIds]);

  const totalGamesCount = useMemo(
    () => GRADES_CURRICULUM.reduce((acc, g) => acc + g.games.length, 0),
    [],
  );

  const activeGradeSolvedCount = useMemo(
    () => activeGrade.games.filter((g) => solvedSet.has(g.id)).length,
    [activeGrade, solvedSet],
  );

  const navigateView = useCallback((view: AppView) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    setConfirmReset(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleEnterGrade = useCallback((gradeNum: number, targetView: AppView = 'topics') => {
    setActiveGradeNum(gradeNum);
    setActiveGameIdx(0);
    setConfirmReset(false);
    setActiveView(targetView);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleWin = useCallback((gameId: string, points: number) => {
    setSolvedIds((prev) => {
      if (prev.includes(gameId)) return prev;
      setScore((s) => s + points);
      return [...prev, gameId];
    });
  }, []);

  const handleNextGame = useCallback(() => {
    if (activeGameIdx < activeGrade.games.length - 1) {
      setActiveGameIdx((idx) => idx + 1);
      gameStageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else if (activeGradeNum < 11) {
      setActiveGradeNum((g) => g + 1);
      setActiveGameIdx(0);
      gameStageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeGameIdx, activeGrade.games.length, activeGradeNum]);

  const resetProgress = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    setSolvedIds([]);
    setScore(0);
    setConfirmReset(false);
  };

  const navItems: { id: AppView; label: string }[] = [
    { id: 'dashboard', label: 'Bosh sahifa' },
    { id: 'grades', label: 'Sinflar 1–11' },
    { id: 'topics', label: `${activeGrade.label} mavzulari` },
    { id: 'games', label: 'O‘yinlar' },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip text-slate-900 dark:text-slate-100">
      {/* SVG color-grade filters (desktop dark mode) */}
      <svg width="0" height="0" className="pointer-events-none fixed" aria-hidden="true">
        <defs>
          <filter id="video-grade-night" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="
                1.14  0.04  0.00  0  -0.03
                0.02  0.96  0.02  0  -0.02
                0.00  0.04  1.02  0  -0.02
                0     0     0     1   0"
            />
          </filter>
          <filter id="video-grade-lift" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="
                1.28  0.08  0.02  0  0.02
                0.02  0.92  0.04  0  0.00
                0.00  0.04  1.05  0  0.01
                0     0     0     1  0"
            />
          </filter>
        </defs>
      </svg>

      {/* =========================================================
          AMBIENT VIDEO + CRIMSON-BLACK OPTICAL BACKDROP
          ========================================================= */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#eef4fc] transition-colors duration-500 dark:bg-black"
        aria-hidden="true"
      >
        <div className="bg-video-primary">
          <video
            ref={masterVideoRef}
            src={BG_VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>

        {/* Mount secondary video stream only on desktop (>=768px) to keep weak phones fast */}
        {isDesktop && (
          <div className="bg-video-lift">
            <video
              ref={liftVideoRef}
              src={BG_VIDEO_URL}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        )}

        <div className="bg-video-scrim" />

        {/* Subtle structural grid */}
        <div
          className="absolute inset-0 opacity-[0.22] dark:opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.16) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Desktop ambient caustic orbs */}
        <div className="orb-a absolute -top-28 -left-24 h-[460px] w-[460px] rounded-full bg-rose-400/20 blur-[110px] dark:bg-[#c81b1c]/22" />
        <div className="orb-b absolute top-[24%] -right-24 h-[500px] w-[500px] rounded-full bg-sky-400/18 blur-[120px] dark:bg-[#991b1b]/16" />
      </div>

      {/* =========================================================
          WIDE STICKY LIQUID GLASS NAVBAR
          ========================================================= */}
      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 lg:px-10">
        <div className="lg-glass mx-auto flex max-w-[1520px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
          {/* Left: Brand */}
          <button
            type="button"
            onClick={() => navigateView('dashboard')}
            className="flex min-h-[44px] items-center gap-3 text-left focus:outline-none cursor-pointer"
          >
            <BrandEmblem />
            <div className="leading-tight">
              <span className="block text-base font-bold tracking-tight text-slate-950 dark:text-white sm:text-lg">
                Informatika
              </span>
              <span className="font-mono-jb block text-[11px] uppercase tracking-[0.14em] text-[#c81b1c] dark:text-[#ff595a]">
                1–11 sinflar
              </span>
            </div>
          </button>

          {/* Center: View Navigation */}
          <nav
            aria-label="Asosiy navigatsiya"
            className="hidden items-center gap-2 text-sm font-semibold lg:flex"
          >
            {navItems.map((item) => {
              const active = activeView === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateView(item.id)}
                  className={`min-h-[42px] rounded-xl px-4 py-2 transition cursor-pointer ${
                    active
                      ? 'bg-[#c81b1c] text-white shadow-sm shadow-red-600/30'
                      : 'text-slate-700 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.08] dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Day/Night Toggle + Quick Play + Mobile Burger */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              aria-label={isDark ? 'Kungi rejimga o‘tish' : 'Tungi rejimga o‘tish'}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-slate-900/12 bg-white/65 px-3.5 py-2 text-xs font-semibold text-slate-800 transition hover:bg-white/90 dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:bg-white/[0.12] cursor-pointer"
            >
              {isDark ? (
                <>
                  <Sun className="h-4 w-4 text-amber-400" />
                  <span className="hidden sm:inline">Kungi</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-slate-700" />
                  <span className="hidden sm:inline">Tungi</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => navigateView('games')}
              className="hidden min-h-[44px] items-center gap-2 rounded-xl bg-[#c81b1c] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#b01617] sm:inline-flex cursor-pointer"
            >
              <Gamepad2 className="h-4 w-4" />
              <span>O‘ynash</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Menyuni ochish"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-slate-900/12 bg-white/65 text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-100 lg:hidden cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg-glass anim-rise mx-auto mt-2.5 max-w-[1520px] p-4 lg:hidden">
            <div className="flex flex-col gap-2 text-sm font-semibold">
              {navItems.map((item) => {
                const active = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigateView(item.id)}
                    className={`min-h-[46px] rounded-xl px-4 py-3 text-left transition cursor-pointer ${
                      active
                        ? 'bg-[#c81b1c] text-white'
                        : 'text-slate-800 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/[0.08]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          MAIN CONTENT ROUTER (CLEAN FOCUSED VIEWS)
          ========================================================= */}
      <main className="mx-auto flex w-full max-w-[1520px] flex-1 flex-col px-3 pb-10 pt-6 sm:px-6 lg:px-10">
        {/* ---------------------------------------------------------
            VIEW 1: CLEAN DASHBOARD (NO CLUTTER BELOW)
            --------------------------------------------------------- */}
        {activeView === 'dashboard' && (
          <section
            key="view-dashboard"
            className="flex flex-1 flex-col justify-between gap-6 py-2 lg:py-4"
          >
            <div className="grid flex-1 items-center gap-6 lg:grid-cols-12">
              {/* Left Crimson-Black Liquid Glass Dashboard Stage */}
              <div className="lg-glass anim-rise anim-d1 flex flex-col justify-between p-6 sm:p-10 lg:col-span-7">
                <div>
                  <p className="font-mono-jb text-xs uppercase tracking-[0.18em] text-[#c81b1c] dark:text-[#ff595a]">
                    Maktab dasturi · 1–11 sinf · Qizil-Qora Liquid Glass
                  </p>

                  <h1 className="anim-rise anim-d2 mt-4 text-3xl font-bold leading-[1.06] tracking-tight text-slate-950 dark:text-white sm:text-5xl xl:text-6xl">
                    Informatika fanini{' '}
                    <span className="text-[#c81b1c] dark:text-[#ff4748]">interaktiv</span>{' '}
                    o‘yinlar bilan o‘rganing
                  </h1>

                  <p className="anim-rise anim-d3 mt-5 max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base lg:text-lg">
                    1-sinfdan 11-sinfgacha barcha asosiy informatika yo‘nalishlari bitta
                    laboratoriyada: mantiqiy ketma-ketliklar, algoritmik robotlar, ikkilik
                    sanoq tizimi, mantiq sxemalari, saralash, Python kod tahlili, graflar va
                    kriptografiya.
                  </p>
                </div>

                {/* Large Touch-Friendly Primary Actions */}
                <div className="anim-rise anim-d4 mt-8 flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => navigateView('grades')}
                    className="inline-flex min-h-[50px] items-center gap-2.5 rounded-xl bg-[#c81b1c] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition hover:bg-[#b01617] cursor-pointer"
                  >
                    <Layers className="h-4 w-4" />
                    <span>Sinflarni tanlash (1–11)</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigateView('games')}
                    className="inline-flex min-h-[50px] items-center gap-2.5 rounded-xl border border-slate-900/15 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white dark:border-white/18 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.12] cursor-pointer"
                  >
                    <Gamepad2 className="h-4 w-4 text-[#c81b1c] dark:text-[#ff595a]" />
                    <span>{activeGrade.label} o‘yinlari</span>
                  </button>
                </div>

                {/* Key Metrics */}
                <div className="anim-rise anim-d4 mt-8 grid grid-cols-3 gap-4 border-t border-slate-900/10 pt-6 dark:border-white/10">
                  <div>
                    <div className="font-mono-jb text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
                      11
                    </div>
                    <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                      Maktab sinfi
                    </div>
                  </div>
                  <div>
                    <div className="font-mono-jb text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
                      {totalGamesCount}
                    </div>
                    <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                      Amaliy o‘yin
                    </div>
                  </div>
                  <div>
                    <div className="font-mono-jb text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
                      10
                    </div>
                    <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                      O‘yin mexanikasi
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Telemetry Panel (lets video shine around it) */}
              <div className="lg-glass anim-rise anim-d2 flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 dark:text-slate-300">
                      <Trophy className="h-4 w-4 text-[#c81b1c] dark:text-[#ff595a]" />
                      <span>Shaxsiy natija</span>
                    </div>
                    <span className="font-mono-jb text-xs text-slate-500 dark:text-slate-400">
                      {activeGrade.label} · {activeGrade.stage}
                    </span>
                  </div>

                  <div className="lg-well mt-5 grid grid-cols-2 gap-4 p-4 sm:p-5">
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Umumiy ball</div>
                      <div className="font-mono-jb mt-1 text-3xl font-bold text-slate-950 dark:text-white">
                        {score}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Yechilgan</div>
                      <div className="font-mono-jb mt-1 text-3xl font-bold text-slate-950 dark:text-white">
                        {solvedIds.length}
                        <span className="text-base font-normal text-slate-500 dark:text-slate-400">
                          /{totalGamesCount}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {activeGrade.label} o‘zlashtirish darajasi
                      </span>
                      <span className="font-mono-jb font-bold text-slate-950 dark:text-white">
                        {activeGradeSolvedCount} / {activeGrade.games.length}
                      </span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#c81b1c] transition-all duration-300"
                        style={{
                          width: `${Math.round(
                            (activeGradeSolvedCount / Math.max(activeGrade.games.length, 1)) * 100,
                          )}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="lg-well mt-5 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono-jb text-xs font-semibold text-[#c81b1c] dark:text-[#ff595a]">
                        Hozirgi sinf: {activeGrade.label}
                      </span>
                      <span className="font-mono-jb text-[11px] text-slate-500 dark:text-slate-400">
                        {ENGINE_LABELS[activeGame.engine]}
                      </span>
                    </div>
                    <div className="mt-1.5 text-base font-bold text-slate-950 dark:text-white">
                      {activeGrade.headline}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {activeGrade.overview}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      <button
                        type="button"
                        onClick={() => navigateView('topics')}
                        className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-slate-900/12 bg-white/70 px-3.5 py-2 text-xs font-semibold text-slate-800 transition hover:bg-white dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>Mavzular (3)</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => navigateView('games')}
                        className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl bg-[#c81b1c] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#b01617] cursor-pointer"
                      >
                        <Gamepad2 className="h-3.5 w-3.5" />
                        <span>O‘yinlarga kirish (10)</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-900/10 pt-4 text-xs dark:border-white/10">
                  <span className="text-slate-500 dark:text-slate-400">
                    Yuqoridagi menyudan istalgan bo‘limga kiring
                  </span>
                  {solvedIds.length > 0 && (
                    <button
                      type="button"
                      onClick={resetProgress}
                      onBlur={() => setConfirmReset(false)}
                      className="inline-flex min-h-[36px] items-center gap-1.5 font-mono-jb text-xs text-slate-600 transition hover:text-[#c81b1c] dark:text-slate-400 dark:hover:text-[#ff595a] cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>{confirmReset ? 'Tasdiqlash?' : 'Tozalash'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Clean Informative Informatics Strip at Bottom of Dashboard */}
            <div className="lg-glass anim-rise anim-d4 flex flex-col justify-between gap-4 px-5 py-4 sm:flex-row sm:items-center sm:px-7">
              <div className="flex items-start gap-3 sm:items-center">
                <Terminal className="mt-0.5 h-5 w-5 shrink-0 text-[#c81b1c] dark:text-[#ff595a] sm:mt-0" />
                <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 sm:text-sm">
                  <strong className="text-slate-950 dark:text-white">Informatika</strong> —
                  ma’lumotlarni qayta ishlash, algoritmlarni loyihalash va raqamli tizimlarni
                  boshqarish ilmi. Barcha 1–11-sinf mavzulari amaliy mashqlar bilan mustahkamlanadi.
                </p>
              </div>
              <div className="font-mono-jb shrink-0 text-[11px] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                Algoritm · Mantiq · Kod · Tizim
              </div>
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------
            VIEW 2: GRADES 1–11 SELECTOR (ENTERS SELECTED GRADE)
            --------------------------------------------------------- */}
        {activeView === 'grades' && (
          <section key="view-grades" className="anim-rise space-y-6 py-2">
            <div className="lg-glass flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8">
              <div>
                <p className="font-mono-jb text-xs uppercase tracking-[0.16em] text-[#c81b1c] dark:text-[#ff595a]">
                  O‘quv yo‘nalishi · 1-sinfdan 11-sinfgacha
                </p>
                <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  Sinfni tanlang va bo‘limga kiring
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                  Har bir sinf o‘z nazariy mavzulari va qiyinligi o‘sib boradigan 10 ta maxsus
                  informatika o‘yiniga ega. Sinf kartasini bosing — darhol o‘sha sinf bo‘limiga
                  o‘tasiz.
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigateView('dashboard')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-slate-900/15 bg-white/70 px-4 py-2.5 text-xs font-semibold text-slate-800 transition hover:bg-white dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Bosh sahifaga qaytish</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {GRADES_CURRICULUM.map((g, idx) => {
                const selected = g.grade === activeGradeNum;
                const solvedInGrade = g.games.filter((item) => solvedSet.has(item.id)).length;
                return (
                  <div
                    key={g.grade}
                    style={{ animationDelay: `${Math.min(idx * 35, 320)}ms` }}
                    className={`lg-glass anim-rise flex flex-col justify-between p-5 transition ${
                      selected ? 'ring-2 ring-[#c81b1c] dark:ring-[#ff595a]' : 'hover:-translate-y-0.5'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono-jb text-3xl font-bold text-[#c81b1c] dark:text-[#ff595a]">
                          {g.grade < 10 ? `0${g.grade}` : g.grade}
                        </span>
                        <span className="font-mono-jb text-xs text-slate-600 dark:text-slate-400">
                          {solvedInGrade}/10 yechilgan
                        </span>
                      </div>

                      <h2 className="mt-2 text-lg font-bold text-slate-950 dark:text-white">
                        {g.label} · {g.stage}
                      </h2>
                      <p className="mt-1 text-xs font-semibold text-slate-700 dark:text-slate-200">
                        {g.headline}
                      </p>
                      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {g.overview}
                      </p>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => handleEnterGrade(g.grade, 'topics')}
                        className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-slate-900/15 bg-white/70 px-3 py-2 text-xs font-semibold text-slate-900 transition hover:bg-white dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.12] cursor-pointer"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>Mavzular</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleEnterGrade(g.grade, 'games')}
                        className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#c81b1c] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#b01617] cursor-pointer"
                      >
                        <Gamepad2 className="h-3.5 w-3.5" />
                        <span>O‘yinlar</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------
            VIEW 3: SELECTED GRADE TOPIC BRIEFINGS + QUICK GAME LAUNCH
            --------------------------------------------------------- */}
        {activeView === 'topics' && (
          <section key={`view-topics-${activeGrade.grade}`} className="anim-rise space-y-6 py-2">
            {/* Grade switcher strip */}
            <div className="lg-glass flex flex-wrap items-center justify-between gap-3 p-4 sm:px-6">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigateView('grades')}
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-slate-900/12 bg-white/70 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Barcha sinflar</span>
                </button>
                <span className="font-mono-jb text-xs text-slate-500 dark:text-slate-400">
                  Tez o‘tish:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {GRADES_CURRICULUM.map((g) => (
                    <button
                      key={g.grade}
                      type="button"
                      onClick={() => handleEnterGrade(g.grade, 'topics')}
                      className={`min-h-[38px] min-w-[38px] rounded-xl px-2.5 font-mono-jb text-xs font-bold transition cursor-pointer ${
                        g.grade === activeGradeNum
                          ? 'bg-[#c81b1c] text-white'
                          : 'border border-slate-900/10 bg-white/60 text-slate-700 hover:bg-white dark:border-white/12 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-white/[0.1]'
                      }`}
                    >
                      {g.grade}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigateView('games')}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#c81b1c] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#b01617] cursor-pointer"
              >
                <Gamepad2 className="h-4 w-4" />
                <span>{activeGrade.label} o‘yinlarini ochish</span>
              </button>
            </div>

            {/* Grade Theory Overview & 3 Topic Cards */}
            <div className="lg-glass p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-900/10 pb-6 dark:border-white/10">
                <div className="max-w-3xl">
                  <div className="font-mono-jb flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#c81b1c] dark:text-[#ff595a]">
                    <Layers className="h-4 w-4" />
                    <span>{activeGrade.label}</span>
                    <span className="text-slate-400">·</span>
                    <span>{activeGrade.stage}</span>
                  </div>
                  <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                    {activeGrade.headline}
                  </h1>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                    {activeGrade.overview}
                  </p>
                </div>

                <div className="lg-well flex items-center gap-3 px-4 py-3">
                  <Cpu className="h-5 w-5 text-[#c81b1c] dark:text-[#ff595a]" />
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Sinf natijasi
                    </div>
                    <div className="font-mono-jb text-sm font-bold text-slate-950 dark:text-white">
                      {activeGradeSolvedCount} / {activeGrade.games.length} o‘yin
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {activeGrade.topics.map((topic, i) => (
                  <article
                    key={`${activeGrade.grade}-topic-${i}`}
                    className="lg-well flex flex-col justify-between p-5 sm:p-6"
                  >
                    <div>
                      <div className="font-mono-jb text-[11px] uppercase tracking-[0.14em] text-[#c81b1c] dark:text-[#ff595a]">
                        Mavzu 0{i + 1}
                      </div>
                      <h2 className="mt-1.5 text-lg font-bold text-slate-950 dark:text-white">
                        {topic.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {topic.summary}
                      </p>
                    </div>

                    <div className="mt-5 rounded-xl border border-slate-900/10 bg-white/75 px-4 py-3 font-mono-jb text-xs text-slate-900 dark:border-white/10 dark:bg-black/45 dark:text-slate-200">
                      {topic.formula}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Direct Launchpad to This Grade's 10 Games */}
            <div className="lg-glass p-6 sm:p-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                    {activeGrade.label} uchun 10 ta interaktiv o‘yin
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
                    Istalgan o‘yinni tanlab darhol amaliy mashg‘ulotni boshlang
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => navigateView('games')}
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#c81b1c] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#b01617] cursor-pointer"
                >
                  <span>O‘yin maydonini ochish</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {activeGrade.games.map((g, idx) => {
                  const isSolved = solvedSet.has(g.id);
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => {
                        setActiveGameIdx(idx);
                        navigateView('games');
                      }}
                      className="lg-well flex min-h-[92px] flex-col justify-between p-4 text-left transition hover:border-[#c81b1c]/60 cursor-pointer"
                    >
                      <div className="flex w-full items-center justify-between font-mono-jb text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-bold text-[#c81b1c] dark:text-[#ff595a]">
                          #{g.num}
                        </span>
                        {isSolved ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <span>{g.difficulty}</span>
                        )}
                      </div>
                      <div className="mt-2 text-sm font-bold text-slate-950 dark:text-white">
                        {g.title}
                      </div>
                      <div className="mt-1 font-mono-jb text-[11px] text-slate-500 dark:text-slate-400">
                        {ENGINE_LABELS[g.engine]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------
            VIEW 4: ACTIVE GRADE 10-GAME ARENA
            --------------------------------------------------------- */}
        {activeView === 'games' && (
          <section key={`view-games-${activeGrade.grade}`} className="anim-rise space-y-5 py-2">
            {/* Compact Top Grade & Mode Bar */}
            <div className="lg-glass flex flex-wrap items-center justify-between gap-3 p-4 sm:px-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => navigateView('grades')}
                  className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-slate-900/12 bg-white/70 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Sinflar</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigateView('topics')}
                  className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-slate-900/12 bg-white/70 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-white cursor-pointer"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>{activeGrade.label} mavzulari</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {GRADES_CURRICULUM.map((g) => (
                  <button
                    key={g.grade}
                    type="button"
                    onClick={() => handleEnterGrade(g.grade, 'games')}
                    className={`min-h-[38px] min-w-[38px] rounded-xl px-2.5 font-mono-jb text-xs font-bold transition cursor-pointer ${
                      g.grade === activeGradeNum
                        ? 'bg-[#c81b1c] text-white'
                        : 'border border-slate-900/10 bg-white/60 text-slate-700 hover:bg-white dark:border-white/12 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-white/[0.1]'
                    }`}
                  >
                    {g.grade}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-12">
              {/* Left: 10-Game Selector */}
              <div className="grid gap-2.5 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
                {activeGrade.games.map((game, idx) => {
                  const isActive = idx === activeGameIdx;
                  const isSolved = solvedSet.has(game.id);
                  return (
                    <button
                      key={game.id}
                      type="button"
                      onClick={() => {
                        setActiveGameIdx(idx);
                        if (window.innerWidth < 1024) {
                          gameStageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className={`lg-glass flex min-h-[68px] items-center justify-between gap-3 px-4 py-3 text-left transition cursor-pointer ${
                        isActive
                          ? 'ring-2 ring-[#c81b1c] dark:ring-[#ff595a]'
                          : 'hover:-translate-y-0.5'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 font-mono-jb text-[11px] text-slate-500 dark:text-slate-400">
                          <span
                            className={
                              isActive ? 'font-bold text-[#c81b1c] dark:text-[#ff595a]' : ''
                            }
                          >
                            {game.num}
                          </span>
                          <span>·</span>
                          <span className="truncate">{ENGINE_LABELS[game.engine]}</span>
                          <span>·</span>
                          <span>{game.difficulty}</span>
                        </div>
                        <div className="mt-0.5 truncate text-sm font-bold text-slate-900 dark:text-white">
                          {game.title}
                        </div>
                      </div>

                      <div className="shrink-0">
                        {isSolved ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <ChevronRight
                            className={`h-4 w-4 ${
                              isActive
                                ? 'text-[#c81b1c] dark:text-[#ff595a]'
                                : 'text-slate-400 dark:text-slate-500'
                            }`}
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right: Active Liquid Glass Interactive Game Stage */}
              <div ref={gameStageRef} className="lg-glass p-5 sm:p-8 lg:col-span-8">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-900/10 pb-5 dark:border-white/10">
                  <div>
                    <div className="font-mono-jb flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-bold text-[#c81b1c] dark:text-[#ff595a]">
                        {activeGrade.label}
                      </span>
                      <span>/</span>
                      <span>O‘yin #{activeGame.num}</span>
                      <span>·</span>
                      <span>{activeGame.topic}</span>
                      <span>·</span>
                      <span>{activeGame.difficulty}</span>
                    </div>
                    <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                      {activeGame.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    {solvedSet.has(activeGame.id) ? (
                      <span className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-emerald-500/35 bg-emerald-500/12 px-3.5 py-1.5 font-mono-jb text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                        <Award className="h-4 w-4" />
                        <span>Yechilgan (+100)</span>
                      </span>
                    ) : (
                      <span className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-slate-900/10 bg-white/50 px-3.5 py-1.5 font-mono-jb text-xs text-slate-600 dark:border-white/12 dark:bg-white/[0.05] dark:text-slate-300">
                        <Sparkles className="h-3.5 w-3.5 text-[#c81b1c] dark:text-[#ff595a]" />
                        <span>+100 ball</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <GameEngineHost
                    key={activeGame.id}
                    game={activeGame}
                    alreadySolved={solvedSet.has(activeGame.id)}
                    onWin={handleWin}
                    onNextGame={handleNextGame}
                    hasNextGame={
                      activeGameIdx < activeGrade.games.length - 1 || activeGradeNum < 11
                    }
                  />
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* =========================================================
          QUIET LIQUID GLASS FOOTER (NON-DASHBOARD VIEWS)
          ========================================================= */}
      {activeView !== 'dashboard' && (
        <footer className="px-3 pb-6 sm:px-6 lg:px-10">
          <div className="lg-glass mx-auto flex max-w-[1520px] flex-col items-start justify-between gap-4 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
            <div className="flex items-center gap-3">
              <BrandEmblem />
              <div className="text-xs text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">
                  Informatika 1–11
                </span>{' '}
                — algoritmlar, mantiq va amaliy dasturlash bo‘yicha interaktiv o‘yinlar platformasi.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 font-mono-jb text-xs text-slate-600 dark:text-slate-400">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateView(item.id)}
                  className="min-h-[36px] transition hover:text-[#c81b1c] dark:hover:text-white cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
