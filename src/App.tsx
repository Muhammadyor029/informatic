import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Eye,
  EyeOff,
  Gamepad2,
  GraduationCap,
  KeyRound,
  Layers,
  Lock,
  Menu,
  Moon,
  Play,
  RotateCcw,
  Search,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  Unlock,
  X,
} from 'lucide-react';
import { GameEngineHost } from './components/GameEngines';
import { GradePlanView } from './components/GradePlanView';
import { LessonPageView, type WrongQuestionRecord } from './components/LessonPageView';
import { GlobalSearchModal, ProgressView } from './components/SearchAndProgressViews';
import { GRADES_CURRICULUM } from './data/curriculum';
import { GRADE_PLANS_META, loadGradePlan, NEW_ENGINES_DEMO_ITEMS } from './data/plan';
import type { AnyGameEngineType, GradePlan, Lesson } from './data/plan/types';

const STORAGE_SOLVED_KEY = 'informatika_solved_ids_v1';
const STORAGE_SCORE_KEY = 'informatika_score_v1';
const STORAGE_GRADE_KEY = 'informatika_active_grade_v1';
const STORAGE_COMPLETED_LESSONS_KEY = 'informatika_completed_lessons_v1';
const STORAGE_COMPLETED_PRACTICE_KEY = 'informatika_completed_practice_v1';
const STORAGE_QUIZ_SCORES_KEY = 'informatika_quiz_scores_v1';
const STORAGE_WRONG_QUESTIONS_KEY = 'informatika_wrong_questions_v1';
const STORAGE_LAST_LESSON_KEY = 'informatika_last_lesson_v1';
const STORAGE_TEACHER_MODE_KEY = 'informatika_teacher_mode_v1';
const SESSION_TOPICS_UNLOCKED_KEY = 'vesna_topics_unlocked_v1';
const TOPICS_ACCESS_PASSWORD = 'samandar123';

const BG_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_132544_b6ef0174-ed95-45ad-9a2f-ccb8acfbdce8.mp4';

type AppView =
  | 'dashboard'
  | 'grades'
  | 'topics'
  | 'games'
  | 'grade_plan'
  | 'lesson'
  | 'progress';

interface LastLessonMeta {
  grade: number;
  lessonId: string;
  title: string;
  no: number;
}

const ENGINE_LABELS: Record<AnyGameEngineType, string> = {
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
  order: 'Tartiblash',
  fillblank: 'Bo‘sh joyni to‘ldir',
  truefalse: 'To‘g‘ri / Noto‘g‘ri',
  flashcards: 'Kartochkalar',
  hotspot: 'Dastur oynasi',
  typing: 'Klaviatura tezligi',
  sheetlab: 'Excel jadval',
  chartlab: 'Diagramma',
  blocks: 'Scratch bloklar',
  htmlplay: 'HTML/CSS Sandbox',
  dblab: 'Ma’lumotlar bazasi',
  netbuilder: 'Tarmoq ulash',
  calc: 'Hisob-kitob',
  imagelab: 'Tasvir tahriri',
  audiolab: 'Audio tahrirlash',
  timeline: 'Video montaj',
  crossword: 'Krossvord',
  casestudy: 'Vaziyat tahlili',
};

const STAGE_GROUPS = [
  { label: 'Boshlang‘ich (1–4-sinflar)', grades: [1, 2, 3, 4] },
  { label: 'O‘rta bosqich (5–7-sinflar)', grades: [5, 6, 7] },
  { label: 'Yuqori bosqich (8–9-sinflar)', grades: [8, 9] },
  { label: 'Akademik bosqich (10–11-sinflar)', grades: [10, 11] },
];

function BrandEmblem() {
  const uid = useId();
  const bgId = `vesna-bg-${uid}`;
  const glowId = `vesna-glow-${uid}`;
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="shrink-0 drop-shadow-[0_2px_8px_rgba(200,27,28,0.28)]"
    >
      <defs>
        <linearGradient id={bgId} x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#19090c" />
          <stop offset="55%" stopColor="#0b0c12" />
          <stop offset="100%" stopColor="#050608" />
        </linearGradient>
        <radialGradient id={glowId} cx="0.3" cy="0.2" r="0.85">
          <stop offset="0%" stopColor="#ef2b2d" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#ef2b2d" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="3" y="3" width="58" height="58" rx="15" fill={`url(#${bgId})`} />
      <rect x="3" y="3" width="58" height="58" rx="15" fill={`url(#${glowId})`} />
      <rect
        x="3"
        y="3"
        width="58"
        height="58"
        rx="15"
        stroke="rgba(255,89,90,0.65)"
        strokeWidth="2.4"
      />
      <path d="M4.5 18 H59.5" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="1.6" />
      <circle cx="13.5" cy="11" r="2.4" fill="#ef2b2d" />
      <circle cx="21" cy="11" r="2.4" fill="#f59e0b" />
      <circle cx="28.5" cy="11" r="2.4" fill="#10b981" />
      <path
        d="M14.5 27.5 L25.5 48.5 L36.5 27.5"
        stroke="#ffffff"
        strokeWidth="5.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 27.5 L25.5 48.5"
        stroke="#ff3b3e"
        strokeWidth="5.6"
        strokeLinecap="round"
      />
      <rect x="38.5" y="43.5" width="12.5" height="5.5" rx="2.75" fill="#ff3b3e" />
    </svg>
  );
}

function readJsonArray(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.filter((x) => typeof x === 'string');
    }
  } catch {
    // ignore
  }
  return [];
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
  const [gamesMode, setGamesMode] = useState<'grade' | 'lab28'>('grade');
  const [activeDemoIdx, setActiveDemoIdx] = useState<number>(0);

  // Persistent progress states
  const [solvedIds, setSolvedIds] = useState<string[]>(() => readJsonArray(STORAGE_SOLVED_KEY));
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(() =>
    readJsonArray(STORAGE_COMPLETED_LESSONS_KEY),
  );
  const [completedPracticeIds, setCompletedPracticeIds] = useState<string[]>(() =>
    readJsonArray(STORAGE_COMPLETED_PRACTICE_KEY),
  );

  const [quizScores, setQuizScores] = useState<Record<string, number>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_QUIZ_SCORES_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') return parsed;
      }
    } catch {
      // ignore
    }
    return {};
  });

  const [wrongQuestions, setWrongQuestions] = useState<WrongQuestionRecord[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_WRONG_QUESTIONS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore
    }
    return [];
  });

  const [lastLesson, setLastLesson] = useState<LastLessonMeta | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_LAST_LESSON_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed.grade === 'number' && typeof parsed.lessonId === 'string') {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return null;
  });

  const [teacherMode, setTeacherMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_TEACHER_MODE_KEY) === '1';
    } catch {
      return false;
    }
  });

  const [score, setScore] = useState<number>(() => {
    try {
      const raw = Number(localStorage.getItem(STORAGE_SCORE_KEY));
      return Number.isFinite(raw) && raw >= 0 ? raw : 0;
    } catch {
      return 0;
    }
  });

  // Grade 5-11 lazy plan & lesson state
  const [loadedPlan, setLoadedPlan] = useState<GradePlan | null>(null);
  const [loadingPlan, setLoadingPlan] = useState(false);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(min-width: 768px)').matches;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  // Topics & methods lock (students freely access games; topics/methods require password)
  const [topicsUnlocked, setTopicsUnlocked] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(SESSION_TOPICS_UNLOCKED_KEY) === '1';
    } catch {
      return false;
    }
  });
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const pendingUnlockActionRef = useRef<(() => void) | null>(null);

  const effectiveTeacherMode = topicsUnlocked && teacherMode;

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

  // Sync runtime SEO canonical, og:url, absolute og:image, and lang="uz"
  useEffect(() => {
    document.documentElement.lang = 'uz';
    const currentUrl = `${window.location.origin}${window.location.pathname}`;
    const absoluteOgImage = `${window.location.origin}/og-image.png`;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;

    const upsertMeta = (attr: 'property' | 'name', key: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.content = value;
    };

    upsertMeta('property', 'og:url', currentUrl);
    upsertMeta('property', 'og:image', absoluteOgImage);
    upsertMeta('name', 'twitter:image', absoluteOgImage);
  }, []);

  // Persist progress & preferences
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SOLVED_KEY, JSON.stringify(solvedIds));
      localStorage.setItem(STORAGE_SCORE_KEY, String(score));
      localStorage.setItem(STORAGE_GRADE_KEY, String(activeGradeNum));
      localStorage.setItem(STORAGE_COMPLETED_LESSONS_KEY, JSON.stringify(completedLessonIds));
      localStorage.setItem(STORAGE_COMPLETED_PRACTICE_KEY, JSON.stringify(completedPracticeIds));
      localStorage.setItem(STORAGE_QUIZ_SCORES_KEY, JSON.stringify(quizScores));
      localStorage.setItem(STORAGE_WRONG_QUESTIONS_KEY, JSON.stringify(wrongQuestions));
      localStorage.setItem(STORAGE_TEACHER_MODE_KEY, teacherMode ? '1' : '0');
      if (lastLesson) {
        localStorage.setItem(STORAGE_LAST_LESSON_KEY, JSON.stringify(lastLesson));
      } else {
        localStorage.removeItem(STORAGE_LAST_LESSON_KEY);
      }
    } catch {
      // ignore
    }
  }, [
    solvedIds,
    score,
    activeGradeNum,
    completedLessonIds,
    completedPracticeIds,
    quizScores,
    wrongQuestions,
    teacherMode,
    lastLesson,
  ]);

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
  }, [activeView, activeGradeNum, activeGameIdx, activeLessonId, isDark]);

  const requireTopicsUnlock = useCallback(
    (action: () => void) => {
      if (topicsUnlocked) {
        action();
        return;
      }
      pendingUnlockActionRef.current = action;
      setPasswordInput('');
      setPasswordVisible(false);
      setPasswordError('');
      setMobileMenuOpen(false);
      setPasswordModalOpen(true);
    },
    [topicsUnlocked],
  );

  const closePasswordModal = useCallback(() => {
    setPasswordModalOpen(false);
    setPasswordInput('');
    setPasswordError('');
    pendingUnlockActionRef.current = null;
  }, []);

  const handlePasswordSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault();
      if (passwordInput.trim() === TOPICS_ACCESS_PASSWORD) {
        setTopicsUnlocked(true);
        try {
          sessionStorage.setItem(SESSION_TOPICS_UNLOCKED_KEY, '1');
        } catch {
          // ignore
        }
        setPasswordModalOpen(false);
        setPasswordInput('');
        setPasswordError('');
        const nextAction = pendingUnlockActionRef.current;
        pendingUnlockActionRef.current = null;
        nextAction?.();
      } else {
        setPasswordError('Parol noto‘g‘ri. Mavzu va metodlarni ochish uchun to‘g‘ri parolni kiriting.');
      }
    },
    [passwordInput],
  );

  const lockTopics = useCallback(() => {
    setTopicsUnlocked(false);
    setTeacherMode(false);
    try {
      sessionStorage.removeItem(SESSION_TOPICS_UNLOCKED_KEY);
    } catch {
      // ignore
    }
    setActiveView((cur) =>
      cur === 'topics' || cur === 'grade_plan' || cur === 'lesson' ? 'dashboard' : cur,
    );
    setMobileMenuOpen(false);
  }, []);

  const handleToggleTeacherMode = useCallback(() => {
    if (!topicsUnlocked) {
      requireTopicsUnlock(() => setTeacherMode(true));
      return;
    }
    setTeacherMode((v) => !v);
  }, [topicsUnlocked, requireTopicsUnlock]);

  useEffect(() => {
    if (!passwordModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePasswordModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [passwordModalOpen, closePasswordModal]);

  // Lazy load Grade 5-11 plan when entering grade_plan or lesson
  const performOpenGradePlan = useCallback(async (grade: number, targetLessonId?: string) => {
    setActiveGradeNum(grade);
    setLoadedPlan(null);
    setActiveLessonId(targetLessonId ?? null);
    setLoadingPlan(true);
    setMobileMenuOpen(false);
    setActiveView(targetLessonId ? 'lesson' : 'grade_plan');
    const plan = await loadGradePlan(grade);
    setLoadedPlan(plan);
    setLoadingPlan(false);
    if (plan && targetLessonId) {
      const found = plan.lessons.find((l) => l.id === targetLessonId) ?? plan.lessons[0];
      if (found) {
        setActiveLessonId(found.id);
        setLastLesson({
          grade: plan.grade,
          lessonId: found.id,
          title: found.title,
          no: found.no,
        });
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openGradePlan = useCallback(
    (grade: number, targetLessonId?: string) => {
      requireTopicsUnlock(() => {
        void performOpenGradePlan(grade, targetLessonId);
      });
    },
    [requireTopicsUnlock, performOpenGradePlan],
  );

  const handleOpenLesson = useCallback(
    (lesson: Lesson) => {
      requireTopicsUnlock(() => {
        setActiveLessonId(lesson.id);
        setLastLesson({
          grade: lesson.grade,
          lessonId: lesson.id,
          title: lesson.title,
          no: lesson.no,
        });
        setActiveView('lesson');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    },
    [requireTopicsUnlock],
  );

  const activeGrade = useMemo(
    () => GRADES_CURRICULUM.find((g) => g.grade === activeGradeNum) ?? GRADES_CURRICULUM[0],
    [activeGradeNum],
  );

  const activeGame =
    gamesMode === 'lab28'
      ? (NEW_ENGINES_DEMO_ITEMS[activeDemoIdx] ?? NEW_ENGINES_DEMO_ITEMS[0])
      : (activeGrade.games[activeGameIdx] ?? activeGrade.games[0]);

  const solvedSet = useMemo(() => new Set(solvedIds), [solvedIds]);
  const completedLessonsSet = useMemo(() => new Set(completedLessonIds), [completedLessonIds]);
  const completedPracticeSet = useMemo(() => new Set(completedPracticeIds), [completedPracticeIds]);

  const totalGamesCount = useMemo(
    () => GRADES_CURRICULUM.reduce((acc, g) => acc + g.games.length, 0),
    [],
  );

  const activeGradeSolvedCount = useMemo(
    () => activeGrade.games.filter((g) => solvedSet.has(g.id)).length,
    [activeGrade, solvedSet],
  );

  const activeLesson = useMemo(() => {
    if (!loadedPlan || !activeLessonId) return null;
    return loadedPlan.lessons.find((l) => l.id === activeLessonId) ?? loadedPlan.lessons[0] ?? null;
  }, [loadedPlan, activeLessonId]);

  const navigateView = useCallback(
    (view: AppView) => {
      const go = () => {
        setActiveView(view);
        setMobileMenuOpen(false);
        setConfirmReset(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      if (view === 'topics' || view === 'grade_plan' || view === 'lesson') {
        requireTopicsUnlock(go);
      } else {
        go();
      }
    },
    [requireTopicsUnlock],
  );

  const handleEnterGrade = useCallback(
    (gradeNum: number, targetView: AppView = 'topics', gameIdx = 0) => {
      const enter = () => {
        setActiveGradeNum(gradeNum);
        setActiveGameIdx(gameIdx);
        setGamesMode('grade');
        setConfirmReset(false);
        setActiveView(targetView);
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      if (targetView === 'topics' || targetView === 'grade_plan' || targetView === 'lesson') {
        requireTopicsUnlock(enter);
      } else {
        enter();
      }
    },
    [requireTopicsUnlock],
  );

  const handleWin = useCallback((gameId: string, points: number) => {
    setSolvedIds((prev) => {
      if (prev.includes(gameId)) return prev;
      setScore((s) => s + points);
      return [...prev, gameId];
    });
  }, []);

  const handleNextGame = useCallback(() => {
    if (gamesMode === 'lab28') {
      if (activeDemoIdx < NEW_ENGINES_DEMO_ITEMS.length - 1) {
        setActiveDemoIdx((i) => i + 1);
      }
      return;
    }
    if (activeGameIdx < activeGrade.games.length - 1) {
      setActiveGameIdx((idx) => idx + 1);
      gameStageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else if (activeGradeNum < 11) {
      setActiveGradeNum((g) => g + 1);
      setActiveGameIdx(0);
      gameStageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [gamesMode, activeDemoIdx, activeGameIdx, activeGrade.games.length, activeGradeNum]);

  const toggleLessonComplete = useCallback((lessonId: string) => {
    setCompletedLessonIds((prev) =>
      prev.includes(lessonId) ? prev.filter((x) => x !== lessonId) : [...prev, lessonId],
    );
  }, []);

  const togglePracticeStep = useCallback((practiceKey: string) => {
    setCompletedPracticeIds((prev) =>
      prev.includes(practiceKey) ? prev.filter((x) => x !== practiceKey) : [...prev, practiceKey],
    );
  }, []);

  const saveQuizScore = useCallback((lessonId: string, pct: number) => {
    setQuizScores((prev) => ({
      ...prev,
      [lessonId]: Math.max(prev[lessonId] ?? 0, pct),
    }));
  }, []);

  const recordWrongQuestion = useCallback((rec: WrongQuestionRecord) => {
    setWrongQuestions((prev) => {
      if (prev.some((x) => x.key === rec.key)) return prev;
      return [rec, ...prev].slice(0, 30);
    });
  }, []);

  const clearWrongQuestion = useCallback((key: string) => {
    setWrongQuestions((prev) => prev.filter((x) => x.key !== key));
  }, []);

  const resetProgress = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    setSolvedIds([]);
    setCompletedLessonIds([]);
    setCompletedPracticeIds([]);
    setQuizScores({});
    setWrongQuestions([]);
    setLastLesson(null);
    setScore(0);
    setConfirmReset(false);
  };

  const navItems: { id: AppView; label: string }[] = [
    { id: 'dashboard', label: 'Bosh sahifa' },
    { id: 'grades', label: 'Sinflar 1–11' },
    { id: 'games', label: 'O‘yinlar' },
    { id: 'progress', label: 'Yutuqlar' },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip text-slate-900 dark:text-slate-100">
      {/* SVG optical displacement + color-grade filters */}
      <svg width="0" height="0" className="no-print pointer-events-none fixed" aria-hidden="true">
        <defs>
          <filter
            id="liquid-glass"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.012"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="softNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="softNoise"
              scale="34"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
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
          VIBRANT FLUID BLOBS + AMBIENT RIGHT-SIDE VIDEO BACKDROP
          ========================================================= */}
      <div
        className="no-print pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#d3e4ff] via-[#e6defe] to-[#fde8db] transition-colors duration-500 dark:from-[#0b1020] dark:via-[#12162e] dark:to-[#1d0b16]"
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

        {/* Colorful fluid gradient blobs (refract vividly through Liquid Glass on desktop) */}
        <div className="orb-a absolute -top-28 -left-24 h-[520px] w-[520px] rounded-full bg-sky-400/55 blur-[110px] dark:bg-[#e11d48]/32" />
        <div className="orb-b absolute top-[18%] left-[32%] h-[460px] w-[460px] rounded-full bg-violet-400/45 blur-[120px] dark:bg-indigo-500/30" />
        <div className="orb-c absolute -bottom-24 left-[12%] h-[440px] w-[440px] rounded-full bg-amber-300/45 blur-[120px] dark:bg-purple-600/26" />
        <div className="orb-d absolute top-[26%] -right-24 h-[520px] w-[520px] rounded-full bg-cyan-400/45 blur-[120px] dark:bg-rose-500/28" />
      </div>

      {/* =========================================================
          WIDE STICKY LIQUID GLASS NAVBAR (BRAND: VESNA + SIGNATURE)
          ========================================================= */}
      <header className="no-print sticky top-0 z-40 px-3 pt-3 sm:px-6 lg:px-10">
        <div className="lg-glass lg-refract mx-auto max-w-[1520px] overflow-hidden">
          {/* Top-right Navbar Corner Author Signature */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-900/10 bg-white/40 px-5 py-2.5 sm:px-8 dark:border-white/12 dark:bg-white/[0.04]">
            <span className="font-mono-jb text-[11px] font-medium uppercase tracking-[0.14em] text-slate-700 dark:text-slate-200">
              {topicsUnlocked ? '🔓 Mavzular va metodlar ochiq' : '🎮 O‘quvchi rejimi · O‘yinlar ochiq'}
            </span>
            <span className="text-right font-mono-jb text-[11px] font-semibold tracking-wide text-slate-800 dark:text-slate-100">
              Rakhmanaliyev tomonidan tayyorlangan
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 px-5 py-3.5 sm:px-8 sm:py-4 lg:gap-8">
            {/* Left: Brand (Vesna) */}
            <button
              type="button"
              onClick={() => navigateView('dashboard')}
              className="lg-nav-link flex min-h-[44px] shrink-0 items-center gap-3.5 text-left focus:outline-none cursor-pointer"
            >
              <BrandEmblem />
              <div className="leading-tight">
                <span className="block text-base font-bold tracking-tight text-slate-950 dark:text-white sm:text-lg">
                  Vesna
                </span>
                <span className="font-mono-jb block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b91c1c] dark:text-[#ff8589]">
                  1–11 sinflar
                </span>
              </div>
            </button>

            {/* Center: View Navigation */}
            <nav
              aria-label="Asosiy navigatsiya"
              className="hidden items-center gap-2 text-sm font-semibold lg:flex xl:gap-3.5"
            >
              {navItems.map((item) => {
                const active =
                  activeView === item.id ||
                  (item.id === 'grades' &&
                    (activeView === 'grade_plan' || activeView === 'lesson' || activeView === 'topics'));
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigateView(item.id)}
                    className={`lg-nav-link min-h-[44px] shrink-0 rounded-xl px-4 py-2.5 cursor-pointer ${
                      active
                        ? 'lg-btn-primary text-white'
                        : 'text-slate-800 hover:bg-white/85 hover:text-slate-950 hover:shadow-sm dark:text-slate-100 dark:hover:bg-white/[0.14] dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right: Search + Topics Lock + Teacher + Day/Night Toggle + Quick Play + Mobile Burger */}
            <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Global qidiruv"
                className="lg-btn-glass inline-flex min-h-[44px] items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-semibold cursor-pointer sm:px-4"
              >
                <Search className="h-4 w-4 text-[#b91c1c] dark:text-[#ff8589]" />
                <span className="hidden xl:inline">Qidiruv</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (topicsUnlocked) lockTopics();
                  else requireTopicsUnlock(() => navigateView('grades'));
                }}
                aria-label={topicsUnlocked ? 'Mavzularni qulflash' : 'Mavzularni parol bilan ochish'}
                title={topicsUnlocked ? 'Mavzularni qulflash' : 'Mavzular parol bilan bloklangan'}
                className={`lg-btn-pill hidden min-h-[44px] items-center gap-2 rounded-xl border px-3.5 py-2.5 text-xs font-semibold sm:inline-flex cursor-pointer sm:px-4 ${
                  topicsUnlocked
                    ? 'border-emerald-500/55 bg-emerald-500/18 text-emerald-900 hover:bg-emerald-500/28 dark:border-emerald-400/50 dark:bg-emerald-500/20 dark:text-emerald-200 dark:hover:bg-emerald-500/30'
                    : 'border-amber-500/55 bg-amber-500/18 text-amber-950 hover:bg-amber-500/28 dark:border-amber-400/50 dark:bg-amber-500/20 dark:text-amber-200 dark:hover:bg-amber-500/30'
                }`}
              >
                {topicsUnlocked ? <Unlock className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                <span className="hidden xl:inline">
                  {topicsUnlocked ? 'Qulflash' : 'Mavzular'}
                </span>
              </button>

              <button
                type="button"
                onClick={handleToggleTeacherMode}
                aria-label="O‘qituvchi rejimi"
                title="O‘qituvchi rejimi"
                className={`hidden min-h-[44px] items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-semibold sm:inline-flex cursor-pointer sm:px-4 ${
                  effectiveTeacherMode
                    ? 'lg-btn-primary text-white'
                    : 'lg-btn-glass'
                }`}
              >
                <GraduationCap className="h-4 w-4" />
                {!topicsUnlocked ? <Lock className="h-3.5 w-3.5 opacity-80" /> : null}
                <span className="hidden xl:inline">Metodlar</span>
              </button>

              <button
                type="button"
                onClick={() => setIsDark((prev) => !prev)}
                aria-label={isDark ? 'Kungi rejimga o‘tish' : 'Tungi rejimga o‘tish'}
                className="lg-btn-glass inline-flex min-h-[44px] items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-semibold cursor-pointer sm:px-4"
              >
                {isDark ? (
                  <>
                    <Sun className="h-4 w-4 text-amber-300" />
                    <span className="hidden sm:inline">Kungi</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 text-slate-800" />
                    <span className="hidden sm:inline">Tungi</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setGamesMode('lab28');
                  navigateView('games');
                }}
                className="lg-btn-primary lg-btn-pill hidden min-h-[44px] items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold sm:inline-flex cursor-pointer"
              >
                <Gamepad2 className="h-4 w-4" />
                <span>Metodik o‘yinlar</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label="Menyuni ochish"
                className="lg-btn-glass inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl lg:hidden cursor-pointer"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg-glass anim-rise mx-auto mt-3 max-w-[1520px] p-5 lg:hidden">
            <div className="flex flex-col gap-2.5 text-sm font-semibold">
              {navItems.map((item) => {
                const active = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigateView(item.id)}
                    className={`min-h-[46px] rounded-xl px-4 py-3 text-left cursor-pointer ${
                      active
                        ? 'lg-btn-primary text-white'
                        : 'lg-btn-glass'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => {
                  if (topicsUnlocked) lockTopics();
                  else requireTopicsUnlock(() => navigateView('grades'));
                }}
                className="lg-btn-glass flex min-h-[46px] items-center justify-between rounded-xl px-4 py-3 text-left cursor-pointer"
              >
                <span>
                  Mavzular va darslar: {topicsUnlocked ? 'Ochiq (Qulflash)' : '🔒 Parol bilan qulflangan'}
                </span>
                {topicsUnlocked ? (
                  <Unlock className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                ) : (
                  <Lock className="h-4 w-4 text-amber-600 dark:text-amber-300" />
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  handleToggleTeacherMode();
                  setMobileMenuOpen(false);
                }}
                className="lg-btn-glass flex min-h-[46px] items-center justify-between rounded-xl px-4 py-3 text-left cursor-pointer"
              >
                <span>
                  Metodlar / O‘qituvchi rejimi: {effectiveTeacherMode ? 'Yoqilgan ✓' : topicsUnlocked ? 'O‘chirilgan' : '🔒 Qulflangan'}
                </span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          MAIN CONTENT ROUTER
          ========================================================= */}
      <main className="mx-auto flex w-full max-w-[1520px] flex-1 flex-col px-3 pb-10 pt-6 sm:px-6 lg:px-10">
        {/* ---------------------------------------------------------
            VIEW 1: CLEAN DASHBOARD
            --------------------------------------------------------- */}
        {activeView === 'dashboard' && (
          <section
            key="view-dashboard"
            className="flex flex-1 flex-col justify-between gap-6 py-2 lg:py-4"
          >
            <div className="grid flex-1 items-center gap-6 lg:grid-cols-12">
              {/* Left Crimson-Black Liquid Glass Dashboard Stage */}
              <div className="lg-glass lg-refract anim-rise anim-d1 flex flex-col justify-between p-6 sm:p-10 lg:col-span-7">
                <div>
                  <p className="font-mono-jb text-xs font-semibold uppercase tracking-[0.16em] text-[#b91c1c] dark:text-[#ff8589]">
                    Maktab dasturi · 1–11 sinf · 340 ta dars · Metodik o‘yinlar
                  </p>

                  <h1 className="anim-rise anim-d2 mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl xl:text-6xl">
                    Informatika fanini{' '}
                    <span className="text-[#dc2626] dark:text-[#ff757a]">interaktiv</span>{' '}
                    o‘yinlar bilan o‘rganing
                  </h1>

                  <p className="anim-rise anim-d3 mt-5 max-w-2xl text-sm leading-relaxed text-slate-800 dark:text-slate-200 sm:text-base lg:text-lg">
                    1-sinfdan 11-sinfgacha rasmiy taqvimi-mavzu reja asosida tuzilgan raqamli
                    laboratoriya: matn va jadval muharrirlari, Scratch bloklari, HTML5/CSS, tarmoq
                    arxitekturasi, audio/video montaj va kiberxavfsizlik.
                  </p>
                </div>

                {/* Large Touch-Friendly Primary Actions */}
                <div className="anim-rise anim-d4 mt-8 flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => navigateView('grades')}
                    className="lg-btn-primary lg-btn-pill inline-flex min-h-[50px] items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold cursor-pointer"
                  >
                    <Layers className="h-4 w-4" />
                    <span>Sinflarni tanlash (1–11)</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {lastLesson ? (
                    <button
                      type="button"
                      onClick={() => openGradePlan(lastLesson.grade, lastLesson.lessonId)}
                      className="lg-btn-glass lg-btn-pill inline-flex min-h-[50px] items-center gap-2 rounded-full border-[#dc2626]/45 px-5 py-3 text-sm font-semibold text-[#b91c1c] dark:border-[#ff8589]/45 dark:text-[#ff999c] cursor-pointer"
                    >
                      {topicsUnlocked ? <Play className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                      <span className="max-w-[210px] truncate">
                        Davom etish: {lastLesson.grade}-sinf #{lastLesson.no}
                      </span>
                    </button>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => {
                      setGamesMode('lab28');
                      navigateView('games');
                    }}
                    className="lg-btn-glass lg-btn-pill inline-flex min-h-[50px] items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold cursor-pointer"
                  >
                    <Gamepad2 className="h-4 w-4 text-[#dc2626] dark:text-[#ff8589]" />
                    <span>Metodik o‘yinlar</span>
                  </button>
                </div>

                {/* Key Metrics */}
                <div className="anim-rise anim-d4 mt-8 grid grid-cols-3 gap-4 border-t border-slate-900/12 pt-6 dark:border-white/15">
                  <div>
                    <div className="font-mono-jb text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
                      340
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                      5–11-sinf dars rejasi
                    </div>
                  </div>
                  <div>
                    <div className="font-mono-jb text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
                      {totalGamesCount}
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                      Tezkor 1–11 o‘yin
                    </div>
                  </div>
                  <div>
                    <div className="font-mono-jb text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
                      28
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                      Metodik o‘yinlar
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Telemetry Panel (lets video shine around it) */}
              <div className="lg-glass lg-refract anim-rise anim-d2 flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 dark:text-slate-200">
                      <Trophy className="h-4 w-4 text-[#dc2626] dark:text-[#ff8589]" />
                      <span>Shaxsiy natija</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigateView('progress')}
                      className="lg-nav-link font-mono-jb rounded-lg px-2 py-1 text-xs font-semibold text-[#b91c1c] underline-offset-4 hover:bg-rose-500/10 hover:underline dark:text-[#ff8589] dark:hover:bg-white/10 cursor-pointer"
                    >
                      Batafsil →
                    </button>
                  </div>

                  <div className="lg-well mt-5 grid grid-cols-2 gap-4 p-4 sm:p-5">
                    <div>
                      <div className="text-xs font-medium text-slate-700 dark:text-slate-300">Umumiy ball</div>
                      <div className="font-mono-jb mt-1 text-3xl font-bold text-slate-950 dark:text-white">
                        {score}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-700 dark:text-slate-300">Yechilgan</div>
                      <div className="font-mono-jb mt-1 text-3xl font-bold text-slate-950 dark:text-white">
                        {solvedIds.length}
                        <span className="text-base font-normal text-slate-600 dark:text-slate-300">
                          /{totalGamesCount}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {activeGrade.label} tezkor o‘yinlar
                      </span>
                      <span className="font-mono-jb font-bold text-slate-950 dark:text-white">
                        {activeGradeSolvedCount} / {activeGrade.games.length}
                      </span>
                    </div>
                    <div className="lg-progress-track">
                      <div
                        className="lg-progress-fill"
                        style={{
                          width: `${Math.round(
                            (activeGradeSolvedCount / Math.max(activeGrade.games.length, 1)) * 100,
                          )}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="lg-well mt-5 p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono-jb text-xs font-bold text-[#b91c1c] dark:text-[#ff8589]">
                        Hozirgi sinf: {activeGrade.label}
                      </span>
                      <span className="font-mono-jb text-[11px] font-medium text-slate-700 dark:text-slate-300">
                        {completedLessonIds.length}/340 dars
                      </span>
                    </div>
                    <div className="mt-1.5 text-base font-bold text-slate-950 dark:text-white">
                      {activeGrade.headline}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                      {activeGrade.overview}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      <button
                        type="button"
                        onClick={() => {
                          setGamesMode('grade');
                          navigateView('games');
                        }}
                        className="lg-btn-primary inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
                      >
                        <Gamepad2 className="h-3.5 w-3.5" />
                        <span>O‘yinlar (10)</span>
                      </button>

                      {activeGradeNum >= 5 ? (
                        <button
                          type="button"
                          onClick={() => openGradePlan(activeGradeNum)}
                          className="lg-btn-glass inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
                        >
                          {topicsUnlocked ? <BookOpen className="h-3.5 w-3.5" /> : <Lock className="h-3.5 w-3.5 text-amber-600 dark:text-amber-300" />}
                          <span>Dars rejasiga kirish</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => navigateView('topics')}
                          className="lg-btn-glass inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
                        >
                          {topicsUnlocked ? <BookOpen className="h-3.5 w-3.5" /> : <Lock className="h-3.5 w-3.5 text-amber-600 dark:text-amber-300" />}
                          <span>Mavzular (3)</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-900/12 pt-4 text-xs dark:border-white/15">
                  <span className="text-slate-700 dark:text-slate-300">
                    Yuqoridagi qidiruv orqali istalgan mavzuni toping
                  </span>
                  {(solvedIds.length > 0 || completedLessonIds.length > 0) && (
                    <button
                      type="button"
                      onClick={resetProgress}
                      onBlur={() => setConfirmReset(false)}
                      className="lg-nav-link inline-flex min-h-[36px] items-center gap-1.5 rounded-lg px-2.5 font-mono-jb text-xs font-semibold text-slate-700 hover:bg-rose-500/12 hover:text-[#b91c1c] dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-[#ff8589] cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>{confirmReset ? 'Tasdiqlash?' : 'Tozalash'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Clean Informative Vesna Strip at Bottom of Dashboard */}
            <div className="lg-glass lg-refract anim-rise anim-d4 flex flex-col justify-between gap-4 px-5 py-4 sm:flex-row sm:items-center sm:px-7">
              <div className="flex items-start gap-3 sm:items-center">
                <Terminal className="mt-0.5 h-5 w-5 shrink-0 text-[#dc2626] dark:text-[#ff8589] sm:mt-0" />
                <p className="text-xs leading-relaxed text-slate-800 dark:text-slate-200 sm:text-sm">
                  <strong className="text-slate-950 dark:text-white">Vesna</strong> — 1–11-sinf
                  o‘quvchilari uchun barcha interaktiv o‘yinlar ochiq platforma. Mavzular va o‘qituvchi
                  metodlari ruxsat kodi bilan himoyalangan.
                </p>
              </div>
              <div className="font-mono-jb shrink-0 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-700 dark:text-slate-300">
                Algoritm · Jadval · Kod · Tarmoq
              </div>
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------
            VIEW 2: GRADES 1–11 SELECTOR (GROUPED BY STAGE)
            --------------------------------------------------------- */}
        {activeView === 'grades' && (
          <section key="view-grades" className="anim-rise space-y-6 py-2">
            <div className="lg-glass lg-refract flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8">
              <div>
                <p className="font-mono-jb text-xs font-semibold uppercase tracking-[0.16em] text-[#b91c1c] dark:text-[#ff8589]">
                  O‘quv yo‘nalishi · 1-sinfdan 11-sinfgacha
                </p>
                <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  Sinfni tanlang va bo‘limga kiring
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-slate-700 dark:text-slate-200">
                  Oddiy rejimda barcha o‘quvchilar uchun 1–11-sinf <strong>O‘yinlar</strong> bo‘limi
                  ochiq. Mavzular, dars rejalari va metodlar esa maxsus ruxsat paroli bilan ochiladi.
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigateView('dashboard')}
                className="lg-btn-glass inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Bosh sahifaga qaytish</span>
              </button>
            </div>

            {STAGE_GROUPS.map((group) => (
              <div key={group.label} className="space-y-3">
                <h2 className="font-mono-jb px-1 text-xs font-bold uppercase tracking-[0.16em] text-[#b91c1c] dark:text-[#ff8589]">
                  {group.label}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.grades.map((gNum) => {
                    const g = GRADES_CURRICULUM.find((item) => item.grade === gNum)!;
                    const planMeta = GRADE_PLANS_META.find((m) => m.grade === gNum);
                    const selected = g.grade === activeGradeNum;
                    const solvedInGrade = g.games.filter((item) => solvedSet.has(item.id)).length;
                    return (
                      <div
                        key={g.grade}
                        className={`lg-glass lg-card-interactive flex flex-col justify-between p-5 ${
                          selected
                            ? 'ring-2 ring-[#dc2626] dark:ring-[#ff8589]'
                            : ''
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono-jb text-3xl font-bold text-[#dc2626] dark:text-[#ff8589]">
                              {g.grade < 10 ? `0${g.grade}` : g.grade}
                            </span>
                            <span className="font-mono-jb text-xs font-medium text-slate-700 dark:text-slate-300">
                              {planMeta ? `${planMeta.totalLessons} dars · ` : ''}
                              {solvedInGrade}/10 o‘yin
                            </span>
                          </div>

                          <h3 className="mt-2 text-lg font-bold text-slate-950 dark:text-white">
                            {g.label}
                          </h3>
                          <p className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-200">
                            {g.headline}
                          </p>
                          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                            {planMeta ? planMeta.description : g.overview}
                          </p>
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-2.5">
                          <button
                            type="button"
                            onClick={() => handleEnterGrade(g.grade, 'games')}
                            className="lg-btn-primary inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold cursor-pointer"
                          >
                            <Gamepad2 className="h-3.5 w-3.5" />
                            <span>O‘yinlar</span>
                          </button>

                          {planMeta ? (
                            <button
                              type="button"
                              onClick={() => openGradePlan(g.grade)}
                              className="lg-btn-glass inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold cursor-pointer"
                            >
                              {topicsUnlocked ? (
                                <BookOpen className="h-3.5 w-3.5" />
                              ) : (
                                <Lock className="h-3.5 w-3.5 text-amber-600 dark:text-amber-300" />
                              )}
                              <span>Darslar ({planMeta.totalLessons})</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleEnterGrade(g.grade, 'topics')}
                              className="lg-btn-glass inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold cursor-pointer"
                            >
                              {topicsUnlocked ? (
                                <BookOpen className="h-3.5 w-3.5" />
                              ) : (
                                <Lock className="h-3.5 w-3.5 text-amber-600 dark:text-amber-300" />
                              )}
                              <span>Mavzular</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* ---------------------------------------------------------
            VIEW 3: SELECTED GRADE TOPIC BRIEFINGS
            --------------------------------------------------------- */}
        {topicsUnlocked && activeView === 'topics' && (
          <section key={`view-topics-${activeGrade.grade}`} className="anim-rise space-y-6 py-2">
            <div className="lg-glass flex flex-wrap items-center justify-between gap-3 p-4 sm:px-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => navigateView('grades')}
                  className="lg-btn-glass inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Barcha sinflar</span>
                </button>
                <div className="flex flex-wrap gap-1.5">
                  {GRADES_CURRICULUM.map((g) => (
                    <button
                      key={g.grade}
                      type="button"
                      onClick={() => handleEnterGrade(g.grade, 'topics')}
                      className={`min-h-[38px] min-w-[38px] rounded-xl px-2.5 font-mono-jb text-xs font-bold cursor-pointer ${
                        g.grade === activeGradeNum
                          ? 'lg-btn-primary text-white'
                          : 'lg-btn-glass'
                      }`}
                    >
                      {g.grade}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {activeGradeNum >= 5 ? (
                  <button
                    type="button"
                    onClick={() => openGradePlan(activeGradeNum)}
                    className="lg-btn-glass inline-flex min-h-[42px] items-center gap-2 rounded-xl border-[#dc2626]/45 px-4 py-2 text-xs font-semibold text-[#b91c1c] dark:border-[#ff8589]/45 dark:text-[#ff999c] cursor-pointer"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>34/68 Dars rejasiga o‘tish</span>
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => {
                    setGamesMode('grade');
                    navigateView('games');
                  }}
                  className="lg-btn-primary inline-flex min-h-[42px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
                >
                  <Gamepad2 className="h-4 w-4" />
                  <span>{activeGrade.label} o‘yinlari</span>
                </button>
              </div>
            </div>

            <div className="lg-glass p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-900/12 pb-6 dark:border-white/15">
                <div className="max-w-3xl">
                  <div className="font-mono-jb flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#b91c1c] dark:text-[#ff8589]">
                    <Layers className="h-4 w-4" />
                    <span>{activeGrade.label}</span>
                    <span>·</span>
                    <span>{activeGrade.stage}</span>
                  </div>
                  <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                    {activeGrade.headline}
                  </h1>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
                    {activeGrade.overview}
                  </p>
                </div>

                <div className="lg-well flex items-center gap-3 px-4 py-3">
                  <Cpu className="h-5 w-5 text-[#dc2626] dark:text-[#ff8589]" />
                  <div>
                    <div className="text-[11px] font-medium text-slate-700 dark:text-slate-300">
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
                      <div className="font-mono-jb text-[11px] font-bold uppercase tracking-[0.14em] text-[#b91c1c] dark:text-[#ff8589]">
                        Mavzu 0{i + 1}
                      </div>
                      <h2 className="mt-1.5 text-lg font-bold text-slate-950 dark:text-white">
                        {topic.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                        {topic.summary}
                      </p>
                    </div>

                    <div className="mt-5 rounded-xl border border-slate-900/12 bg-white/80 px-4 py-3 font-mono-jb text-xs text-slate-900 dark:border-white/15 dark:bg-black/45 dark:text-slate-100">
                      {topic.formula}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="lg-glass p-6 sm:p-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                    {activeGrade.label} uchun 10 ta interaktiv o‘yin
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-700 dark:text-slate-300">
                    Istalgan o‘yinni tanlab darhol amaliy mashg‘ulotni boshlang
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setGamesMode('grade');
                    navigateView('games');
                  }}
                  className="lg-btn-primary inline-flex min-h-[42px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
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
                      onClick={() => handleEnterGrade(activeGrade.grade, 'games', idx)}
                      className="lg-well flex min-h-[96px] flex-col justify-between p-4 text-left cursor-pointer"
                    >
                      <div className="flex w-full items-center justify-between font-mono-jb text-xs text-slate-700 dark:text-slate-300">
                        <span className="font-bold text-[#b91c1c] dark:text-[#ff8589]">
                          #{g.num}
                        </span>
                        {isSolved ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                        ) : (
                          <span>{g.difficulty}</span>
                        )}
                      </div>
                      <div className="mt-2 text-sm font-bold text-slate-950 dark:text-white">
                        {g.title}
                      </div>
                      <div className="mt-1 font-mono-jb text-[11px] text-slate-600 dark:text-slate-300">
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
            VIEW 4: ACTIVE GAME ARENA (1–11 GRADES + 18 NEW ENGINES LAB)
            --------------------------------------------------------- */}
        {activeView === 'games' && (
          <section
            key={`view-games-${gamesMode}-${activeGrade.grade}`}
            className="anim-rise space-y-5 py-2"
          >
            <div className="lg-glass flex flex-wrap items-center justify-between gap-3 p-4 sm:px-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => navigateView('grades')}
                  className="lg-btn-glass inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Sinflar</span>
                </button>

                <button
                  type="button"
                  onClick={() => setGamesMode('grade')}
                  className={`min-h-[42px] rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer ${
                    gamesMode === 'grade'
                      ? 'lg-btn-primary text-white'
                      : 'lg-btn-glass'
                  }`}
                >
                  {activeGrade.label} (10 o‘yin)
                </button>

                <button
                  type="button"
                  onClick={() => setGamesMode('lab28')}
                  className={`lg-btn-pill min-h-[42px] rounded-full px-4.5 py-2 text-xs font-semibold cursor-pointer ${
                    gamesMode === 'lab28'
                      ? 'lg-btn-primary text-white'
                      : 'lg-btn-glass'
                  }`}
                >
                  Metodik o‘yinlar
                </button>
              </div>

              {gamesMode === 'grade' ? (
                <div className="flex flex-wrap items-center gap-1.5">
                  {GRADES_CURRICULUM.map((g) => (
                    <button
                      key={g.grade}
                      type="button"
                      onClick={() => handleEnterGrade(g.grade, 'games')}
                      className={`min-h-[38px] min-w-[38px] rounded-xl px-2.5 font-mono-jb text-xs font-bold cursor-pointer ${
                        g.grade === activeGradeNum
                          ? 'lg-btn-primary text-white'
                          : 'lg-btn-glass'
                      }`}
                    >
                      {g.grade}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-12">
              <div className="grid gap-2.5 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
                {(gamesMode === 'lab28' ? NEW_ENGINES_DEMO_ITEMS : activeGrade.games).map(
                  (game, idx) => {
                    const isActive =
                      gamesMode === 'lab28' ? idx === activeDemoIdx : idx === activeGameIdx;
                    const isSolved = solvedSet.has(game.id);
                    return (
                      <button
                        key={game.id}
                        type="button"
                        onClick={() => {
                          if (gamesMode === 'lab28') setActiveDemoIdx(idx);
                          else setActiveGameIdx(idx);
                          if (window.innerWidth < 1024) {
                            gameStageRef.current?.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                            });
                          }
                        }}
                        className={`lg-glass lg-card-interactive group flex min-h-[70px] items-center justify-between gap-3 px-4 py-3.5 text-left cursor-pointer ${
                          isActive
                            ? 'ring-2 ring-[#dc2626] dark:ring-[#ff8589]'
                            : ''
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 font-mono-jb text-[11px] text-slate-700 dark:text-slate-300">
                            <span
                              className={
                                isActive ? 'font-bold text-[#b91c1c] dark:text-[#ff8589]' : 'font-semibold'
                              }
                            >
                              {game.num}
                            </span>
                            <span>·</span>
                            <span className="truncate">{ENGINE_LABELS[game.engine]}</span>
                            <span>·</span>
                            <span>{game.difficulty}</span>
                          </div>
                          <div className="mt-0.5 truncate text-sm font-bold text-slate-950 dark:text-white">
                            {game.title}
                          </div>
                        </div>

                        <div className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                          {isSolved ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                          ) : (
                            <ChevronRight
                              className={`h-4 w-4 ${
                                isActive
                                  ? 'text-[#dc2626] dark:text-[#ff8589]'
                                  : 'text-slate-500 dark:text-slate-300'
                              }`}
                            />
                          )}
                        </div>
                      </button>
                    );
                  },
                )}
              </div>

              <div ref={gameStageRef} className="lg-glass lg-refract p-5 sm:p-8 lg:col-span-8">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-900/12 pb-5 dark:border-white/15">
                  <div>
                    <div className="font-mono-jb flex flex-wrap items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="font-bold text-[#b91c1c] dark:text-[#ff8589]">
                        {gamesMode === 'lab28' ? 'Laboratoriya' : activeGrade.label}
                      </span>
                      <span>/</span>
                      <span>O‘yin #{activeGame.num}</span>
                      <span>·</span>
                      <span>{ENGINE_LABELS[activeGame.engine]}</span>
                      <span>·</span>
                      <span>{activeGame.difficulty}</span>
                    </div>
                    <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                      {activeGame.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    {solvedSet.has(activeGame.id) ? (
                      <span className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-emerald-500/45 bg-emerald-500/16 px-3.5 py-1.5 font-mono-jb text-xs font-semibold text-emerald-800 dark:text-emerald-200">
                        <Award className="h-4 w-4" />
                        <span>Yechilgan (+100)</span>
                      </span>
                    ) : (
                      <span className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-slate-900/12 bg-white/70 px-3.5 py-1.5 font-mono-jb text-xs font-semibold text-slate-800 dark:border-white/18 dark:bg-white/[0.08] dark:text-slate-200">
                        <Sparkles className="h-3.5 w-3.5 text-[#dc2626] dark:text-[#ff8589]" />
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
                      gamesMode === 'lab28'
                        ? activeDemoIdx < NEW_ENGINES_DEMO_ITEMS.length - 1
                        : activeGameIdx < activeGrade.games.length - 1 || activeGradeNum < 11
                    }
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ---------------------------------------------------------
            VIEW 5: GRADE 5–11 OFFICIAL PLAN LIST (UNLOCKED ONLY)
            --------------------------------------------------------- */}
        {topicsUnlocked && activeView === 'grade_plan' && (
          <GradePlanView
            plan={loadedPlan}
            loading={loadingPlan}
            completedLessons={completedLessonsSet}
            solvedGames={solvedSet}
            onBackToGrades={() => navigateView('grades')}
            onSelectGrade={(g) => openGradePlan(g)}
            onOpenLesson={handleOpenLesson}
            onOpenLegacyGames={(g) => handleEnterGrade(g, 'games')}
          />
        )}

        {/* ---------------------------------------------------------
            VIEW 6: INDIVIDUAL LESSON PAGE (UNLOCKED ONLY)
            --------------------------------------------------------- */}
        {topicsUnlocked && activeView === 'lesson' && (
          loadedPlan && activeLesson && !loadingPlan ? (
            <LessonPageView
              plan={loadedPlan}
              lesson={activeLesson}
              completedLessons={completedLessonsSet}
              completedPractice={completedPracticeSet}
              solvedGames={solvedSet}
              quizScores={quizScores}
              wrongQuestions={wrongQuestions}
              teacherMode={effectiveTeacherMode}
              onToggleTeacherMode={handleToggleTeacherMode}
              onBackToPlan={() => setActiveView('grade_plan')}
              onNavigateLesson={handleOpenLesson}
              onToggleLessonComplete={toggleLessonComplete}
              onTogglePracticeStep={togglePracticeStep}
              onWinGame={handleWin}
              onSaveQuizScore={saveQuizScore}
              onRecordWrongQuestion={recordWrongQuestion}
              onClearWrongQuestion={clearWrongQuestion}
            />
          ) : (
            <section className="lg-glass anim-rise p-10 text-center">
              <div className="font-mono-jb text-xs font-bold uppercase tracking-widest text-[#b91c1c] dark:text-[#ff8589]">
                Yuklanmoqda...
              </div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                {activeGradeNum}-sinf dars materiallari va rasmli prezentatsiya tayyorlanmoqda.
              </p>
            </section>
          )
        )}

        {/* ---------------------------------------------------------
            VIEW 7: PROGRESS & ACHIEVEMENTS
            --------------------------------------------------------- */}
        {activeView === 'progress' && (
          <ProgressView
            score={score}
            solvedGames={solvedSet}
            completedLessons={completedLessonsSet}
            quizScores={quizScores}
            confirmReset={confirmReset}
            onResetProgress={resetProgress}
            onBlurReset={() => setConfirmReset(false)}
            onBackDashboard={() => navigateView('dashboard')}
          />
        )}
      </main>

      {/* Global Search Modal */}
      <GlobalSearchModal
        open={searchOpen}
        topicsUnlocked={topicsUnlocked}
        onClose={() => setSearchOpen(false)}
        onSelectLesson={(grade, lessonId) => openGradePlan(grade, lessonId)}
        onSelectLegacyGrade={(grade, gameIdx) => handleEnterGrade(grade, 'games', gameIdx ?? 0)}
      />

      {/* Topics & Teacher Methods Password Modal */}
      {passwordModalOpen && (
        <div
          className="no-print fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={closePasswordModal}
        >
          <div
            className="lg-glass lg-refract anim-rise w-full max-w-md p-6 sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-500/18 text-[#dc2626] dark:bg-rose-500/22 dark:text-[#ff8589]">
                  <KeyRound className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono-jb text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b91c1c] dark:text-[#ff8589]">
                    Ruxsat talab etiladi
                  </div>
                  <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                    Mavzular va metodlarni ochish
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={closePasswordModal}
                aria-label="Yopish"
                className="lg-btn-glass flex h-9 w-9 items-center justify-center rounded-xl cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-700 dark:text-slate-200">
              Oddiy rejimda barcha o‘quvchilar faqat <strong>O‘yinlar</strong> bo‘limidan erkin
              foydalanishi mumkin. Mavzular, dars rejalari va o‘qituvchi metodlarini ochish uchun
              ruxsat parolini kiriting.
            </p>

            <form onSubmit={handlePasswordSubmit} className="mt-4 space-y-3">
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  autoFocus
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (passwordError) setPasswordError('');
                  }}
                  placeholder="Ruxsat parolini kiriting..."
                  autoComplete="off"
                  className="min-h-[48px] w-full rounded-xl border border-slate-900/18 bg-white/90 py-3 pr-11 pl-4 font-mono-jb text-sm text-slate-950 transition focus:border-[#dc2626] focus:outline-none dark:border-white/20 dark:bg-slate-950/60 dark:text-white dark:focus:border-[#ff8589]"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible((v) => !v)}
                  aria-label={passwordVisible ? 'Parolni yashirish' : 'Parolni ko‘rsatish'}
                  className="absolute top-1/2 right-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-900/8 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/12 dark:hover:text-white cursor-pointer"
                >
                  {passwordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {passwordError ? (
                <div className="rounded-xl border border-amber-500/45 bg-amber-500/15 px-3.5 py-2.5 text-xs font-medium text-amber-950 dark:text-amber-200">
                  {passwordError}
                </div>
              ) : null}

              <div className="flex items-center justify-end gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={closePasswordModal}
                  className="lg-btn-glass inline-flex min-h-[44px] items-center justify-center rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold cursor-pointer"
                >
                  <Unlock className="h-4 w-4" />
                  <span>Ochish</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================
          QUIET LIQUID GLASS FOOTER (NON-DASHBOARD VIEWS)
          ========================================================= */}
      {activeView !== 'dashboard' && (
        <footer className="no-print px-3 pb-6 sm:px-6 lg:px-10">
          <div className="lg-glass mx-auto flex max-w-[1520px] flex-col items-start justify-between gap-4 px-5 py-4 sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-center gap-3">
              <BrandEmblem />
              <div className="text-xs text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-950 dark:text-white">
                  Vesna · 1–11
                </span>{' '}
                — informatika o‘yinlari va interaktiv ta’lim platformasi · Rakhmanaliyev tomonidan
                tayyorlangan.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono-jb text-xs text-slate-700 dark:text-slate-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateView(item.id)}
                  className="lg-nav-link min-h-[38px] rounded-lg px-3 py-1.5 hover:bg-white/80 hover:text-[#b91c1c] dark:hover:bg-white/12 dark:hover:text-white cursor-pointer"
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
