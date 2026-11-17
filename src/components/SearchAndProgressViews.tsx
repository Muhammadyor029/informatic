import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  Award,
  BookOpen,
  Gamepad2,
  Lock,
  RotateCcw,
  Search,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react';
import { GRADES_CURRICULUM } from '../data/curriculum';
import { GRADE_PLANS_META, LESSON_KIND_LABELS, loadAllGradePlans } from '../data/plan';
import type { GradePlan, Lesson } from '../data/plan/types';

interface GlobalSearchModalProps {
  open: boolean;
  topicsUnlocked: boolean;
  onClose: () => void;
  onSelectLesson: (grade: number, lessonId: string) => void;
  onSelectLegacyGrade: (grade: number, gameIdx?: number) => void;
}

export function GlobalSearchModal({
  open,
  topicsUnlocked,
  onClose,
  onSelectLesson,
  onSelectLegacyGrade,
}: GlobalSearchModalProps) {
  const [query, setQuery] = useState('');
  const [plans, setPlans] = useState<GradePlan[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open || plans.length > 0) return;
    setLoading(true);
    loadAllGradePlans()
      .then((res) => setPlans(res))
      .finally(() => setLoading(false));
  }, [open, plans.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { lessons: [] as Lesson[], games: [] as { grade: number; idx: number; title: string; topic: string }[] };

    const lessons: Lesson[] = [];
    for (const p of plans) {
      for (const l of p.lessons) {
        const hit =
          l.title.toLowerCase().includes(q) ||
          l.part.toLowerCase().includes(q) ||
          l.keyTerms.some((k) => k.term.toLowerCase().includes(q));
        if (hit) lessons.push(l);
        if (lessons.length >= 24) break;
      }
      if (lessons.length >= 24) break;
    }

    const games: { grade: number; idx: number; title: string; topic: string }[] = [];
    for (const g of GRADES_CURRICULUM) {
      g.games.forEach((gm, idx) => {
        if (gm.title.toLowerCase().includes(q) || gm.topic.toLowerCase().includes(q)) {
          games.push({ grade: g.grade, idx, title: gm.title, topic: gm.topic });
        }
      });
    }
    return { lessons, games: games.slice(0, 10) };
  }, [query, plans]);

  if (!open) return null;

  return (
    <div
      className="no-print fixed inset-0 z-50 flex items-start justify-center bg-black/65 p-4 pt-16 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="lg-glass lg-refract anim-rise w-full max-w-2xl p-5 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-slate-900/12 pb-3 dark:border-white/15">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-950 dark:text-white">
            <Search className="h-4 w-4 text-[#dc2626] dark:text-[#ff8589]" />
            <span>Global qidiruv (1–11 sinflar va 340+ dars)</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Yopish"
            className="lg-btn-glass flex h-9 w-9 items-center justify-center rounded-xl cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <input
          type="text"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Masalan: Scratch, Excel, HTML, IP-manzil, AI, Algoritm..."
          className="mt-4 min-h-[48px] w-full rounded-xl border border-slate-900/18 bg-white/90 px-4 text-sm text-slate-950 transition focus:border-[#dc2626] focus:outline-none dark:border-white/20 dark:bg-slate-950/60 dark:text-white dark:focus:border-[#ff8589]"
        />

        <div className="mt-4 max-h-[55vh] space-y-2.5 overflow-y-auto pr-1">
          {loading ? (
            <div className="py-6 text-center text-xs text-slate-700 dark:text-slate-300">
              Barcha 5–11-sinf darslari yuklanmoqda...
            </div>
          ) : query.trim() === '' ? (
            <div className="py-6 text-center text-xs text-slate-700 dark:text-slate-300">
              Qidiruv so‘zini kiriting — 1–4-sinf o‘yinlari va 5–11-sinfning 340 ta darsi ichidan topiladi.
            </div>
          ) : results.lessons.length === 0 && results.games.length === 0 ? (
            <div className="py-6 text-center text-xs text-slate-700 dark:text-slate-300">
              Hech narsa topilmadi.
            </div>
          ) : (
            <>
              {results.lessons.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => {
                    onSelectLesson(l.grade, l.id);
                    onClose();
                  }}
                  className="lg-well flex w-full items-center justify-between gap-3 px-4 py-3 text-left cursor-pointer"
                >
                  <div className="min-w-0">
                    <div className="font-mono-jb text-[11px] font-semibold text-[#b91c1c] dark:text-[#ff8589]">
                      {l.grade}-sinf · #{l.no} · {l.part} · {LESSON_KIND_LABELS[l.kind]}
                    </div>
                    <div className="truncate text-sm font-bold text-slate-950 dark:text-white">
                      {l.title}
                    </div>
                  </div>
                  {topicsUnlocked ? (
                    <BookOpen className="h-4 w-4 shrink-0 text-slate-600 dark:text-slate-300" />
                  ) : (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-amber-500/45 bg-amber-500/18 px-2.5 py-1 font-mono-jb text-[10px] font-semibold text-amber-950 dark:text-amber-200">
                      <Lock className="h-3 w-3" />
                      <span>Parol</span>
                    </span>
                  )}
                </button>
              ))}

              {results.games.map((gm) => (
                <button
                  key={`${gm.grade}-${gm.idx}`}
                  type="button"
                  onClick={() => {
                    onSelectLegacyGrade(gm.grade, gm.idx);
                    onClose();
                  }}
                  className="lg-well flex w-full items-center justify-between gap-3 px-4 py-3 text-left cursor-pointer"
                >
                  <div className="min-w-0">
                    <div className="font-mono-jb text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                      {gm.grade}-sinf o‘yini · {gm.topic}
                    </div>
                    <div className="truncate text-sm font-bold text-slate-950 dark:text-white">
                      {gm.title}
                    </div>
                  </div>
                  <Gamepad2 className="h-4 w-4 shrink-0 text-slate-600 dark:text-slate-300" />
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

interface ProgressViewProps {
  score: number;
  solvedGames: Set<string>;
  completedLessons: Set<string>;
  quizScores: Record<string, number>;
  confirmReset: boolean;
  onResetProgress: () => void;
  onBlurReset: () => void;
  onBackDashboard: () => void;
}

export function ProgressView({
  score,
  solvedGames,
  completedLessons,
  quizScores,
  confirmReset,
  onResetProgress,
  onBlurReset,
  onBackDashboard,
}: ProgressViewProps) {
  const quizValues = Object.values(quizScores);
  const avgQuiz =
    quizValues.length === 0
      ? 0
      : Math.round(quizValues.reduce((a, b) => a + b, 0) / quizValues.length);

  const badges = [
    {
      title: 'Ilk qadam',
      desc: 'Kamida 1 ta interaktiv o‘yinni yeching',
      unlocked: solvedGames.size >= 1,
    },
    {
      title: 'Faol o‘quvchi',
      desc: 'Kamida 10 ta o‘yinni muvaffaqiyatli bajaring',
      unlocked: solvedGames.size >= 10,
    },
    {
      title: 'Algoritm ustasi',
      desc: '1000+ umumiy ball to‘plang',
      unlocked: score >= 1000,
    },
    {
      title: 'Dars bilimdoni',
      desc: 'Kamida 5 ta darsni tugallangan deb belgilang',
      unlocked: completedLessons.size >= 5,
    },
    {
      title: 'Test g‘olibi',
      desc: 'Istalgan dars testida 80% dan yuqori natija oling',
      unlocked: quizValues.some((v) => v >= 80),
    },
    {
      title: 'Informatika marafoni',
      desc: '50+ interaktiv mashqni yeching',
      unlocked: solvedGames.size >= 50,
    },
  ];

  return (
    <section className="anim-rise space-y-6 py-2">
      <div className="lg-glass lg-refract flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8">
        <div>
          <p className="font-mono-jb text-xs font-semibold uppercase tracking-[0.16em] text-[#b91c1c] dark:text-[#ff8589]">
            Shaxsiy natijalar · Yutuqlar tizimi
          </p>
          <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            O‘zlashtirish va Yutuqlar
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={onResetProgress}
            onBlur={onBlurReset}
            className="lg-btn-pill inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-amber-500/50 bg-amber-500/18 px-4 py-2 text-xs font-semibold text-amber-950 hover:bg-amber-500/28 dark:border-amber-400/45 dark:bg-amber-500/20 dark:text-amber-200 dark:hover:bg-amber-500/30 cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" />
            <span>{confirmReset ? 'Haqiqatan tozalash?' : 'Progressni tozalash'}</span>
          </button>

          <button
            type="button"
            onClick={onBackDashboard}
            className="lg-btn-glass inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Bosh sahifa</span>
          </button>
        </div>
      </div>

      {/* Summary metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg-glass p-5">
          <div className="text-xs font-medium text-slate-700 dark:text-slate-300">Umumiy ball</div>
          <div className="font-mono-jb mt-1 text-3xl font-bold text-[#dc2626] dark:text-[#ff8589]">
            {score}
          </div>
        </div>
        <div className="lg-glass p-5">
          <div className="text-xs font-medium text-slate-700 dark:text-slate-300">Yechilgan o‘yinlar</div>
          <div className="font-mono-jb mt-1 text-3xl font-bold text-slate-950 dark:text-white">
            {solvedGames.size}
          </div>
        </div>
        <div className="lg-glass p-5">
          <div className="text-xs font-medium text-slate-700 dark:text-slate-300">Tugallangan darslar</div>
          <div className="font-mono-jb mt-1 text-3xl font-bold text-slate-950 dark:text-white">
            {completedLessons.size}{' '}
            <span className="text-sm font-normal text-slate-600 dark:text-slate-300">/ 340</span>
          </div>
        </div>
        <div className="lg-glass p-5">
          <div className="text-xs font-medium text-slate-700 dark:text-slate-300">Testlar o‘rtacha bali</div>
          <div className="font-mono-jb mt-1 text-3xl font-bold text-slate-950 dark:text-white">
            {avgQuiz}%
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="lg-glass p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-950 dark:text-white">
          <Trophy className="h-5 w-5 text-[#dc2626] dark:text-[#ff8589]" />
          <span>Nishonlar va yutuqlar</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((b) => (
            <div
              key={b.title}
              className={`lg-well flex items-start gap-3 p-4 ${
                b.unlocked ? 'border-emerald-500/50 bg-emerald-500/14' : 'opacity-75'
              }`}
            >
              {b.unlocked ? (
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-300" />
              ) : (
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-slate-500 dark:text-slate-300" />
              )}
              <div>
                <div className="text-sm font-bold text-slate-950 dark:text-white">{b.title}</div>
                <div className="mt-0.5 text-xs text-slate-700 dark:text-slate-200">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Per-grade Progress */}
      <div className="lg-glass p-6 sm:p-8">
        <h2 className="mb-4 text-lg font-bold text-slate-950 dark:text-white">
          Sinflar kesimida o‘zlashtirish (1–11)
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GRADES_CURRICULUM.map((g) => {
            const solvedInGames = g.games.filter((gm) => solvedGames.has(gm.id)).length;
            const planMeta = GRADE_PLANS_META.find((m) => m.grade === g.grade);
            let doneLessons = 0;
            if (planMeta) {
              completedLessons.forEach((id) => {
                if (id.startsWith(`g${g.grade}-`)) doneLessons++;
              });
            }
            return (
              <div key={g.grade} className="lg-well p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-950 dark:text-white">{g.label}</span>
                  <span className="font-mono-jb text-xs font-medium text-slate-700 dark:text-slate-300">
                    {solvedInGames}/10 o‘yin
                    {planMeta ? ` · ${doneLessons}/${planMeta.totalLessons} dars` : ''}
                  </span>
                </div>
                <div className="mt-3 lg-progress-track">
                  <div
                    className="lg-progress-fill"
                    style={{
                      width: `${Math.min(
                        100,
                        planMeta
                          ? Math.round(
                              ((solvedInGames + doneLessons) /
                                (10 + planMeta.totalLessons)) *
                                100,
                            )
                          : solvedInGames * 10,
                      )}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
