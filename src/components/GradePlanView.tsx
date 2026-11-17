import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  Filter,
  Gamepad2,
  Search,
} from 'lucide-react';
import { LESSON_KIND_LABELS } from '../data/plan';
import type { GradePlan, Lesson, LessonKind } from '../data/plan/types';

interface GradePlanViewProps {
  plan: GradePlan | null;
  loading: boolean;
  completedLessons: Set<string>;
  solvedGames: Set<string>;
  onBackToGrades: () => void;
  onSelectGrade: (grade: number) => void;
  onOpenLesson: (lesson: Lesson) => void;
  onOpenLegacyGames: (grade: number) => void;
}

const KIND_FILTERS: { id: 'all' | LessonKind; label: string }[] = [
  { id: 'all', label: 'Barchasi' },
  { id: 'dars', label: 'Nazariy' },
  { id: 'amaliy', label: 'Amaliy' },
  { id: 'loyiha', label: 'Loyiha' },
  { id: 'nazorat', label: 'Nazorat' },
  { id: 'takrorlash', label: 'Takrorlash' },
];

export function GradePlanView({
  plan,
  loading,
  completedLessons,
  solvedGames,
  onBackToGrades,
  onSelectGrade,
  onOpenLesson,
  onOpenLegacyGames,
}: GradePlanViewProps) {
  const [query, setQuery] = useState('');
  const [kindFilter, setKindFilter] = useState<'all' | LessonKind>('all');
  const [onlyRemaining, setOnlyRemaining] = useState(false);

  const groupedByPart = useMemo(() => {
    if (!plan) return [];
    const q = query.trim().toLowerCase();
    return plan.parts
      .map((partName) => {
        const items = plan.lessons.filter((l) => {
          if (l.part !== partName) return false;
          if (kindFilter !== 'all' && l.kind !== kindFilter) return false;
          if (onlyRemaining && completedLessons.has(l.id)) return false;
          if (q && !l.title.toLowerCase().includes(q) && !String(l.no).includes(q)) return false;
          return true;
        });
        return { partName, items };
      })
      .filter((g) => g.items.length > 0);
  }, [plan, query, kindFilter, onlyRemaining, completedLessons]);

  const completedInGrade = useMemo(() => {
    if (!plan) return 0;
    return plan.lessons.filter((l) => completedLessons.has(l.id)).length;
  }, [plan, completedLessons]);

  return (
    <section className="anim-rise space-y-5 py-2">
      {/* Top Grade Switcher */}
      <div className="lg-glass flex flex-wrap items-center justify-between gap-3 p-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={onBackToGrades}
            className="lg-btn-glass inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Barcha sinflar</span>
          </button>

          <div className="flex flex-wrap gap-1.5">
            {[5, 6, 7, 8, 9, 10, 11].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => onSelectGrade(g)}
                className={`min-h-[38px] min-w-[40px] rounded-xl px-2.5 font-mono-jb text-xs font-bold cursor-pointer ${
                  plan?.grade === g
                    ? 'lg-btn-primary text-white'
                    : 'lg-btn-glass'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {plan ? (
          <button
            type="button"
            onClick={() => onOpenLegacyGames(plan.grade)}
            className="lg-btn-glass inline-flex min-h-[42px] items-center gap-2 rounded-xl border-[#dc2626]/45 px-4 py-2 text-xs font-semibold text-[#b91c1c] dark:border-[#ff8589]/45 dark:text-[#ff999c] cursor-pointer"
          >
            <Gamepad2 className="h-4 w-4" />
            <span>{plan.label} tezkor 10 o‘yin</span>
          </button>
        ) : null}
      </div>

      {loading || !plan ? (
        <div className="lg-glass p-10 text-center text-sm text-slate-700 dark:text-slate-200">
          O‘quv reja yuklanmoqda...
        </div>
      ) : (
        <>
          {/* Grade Summary & Filters */}
          <div className="lg-glass lg-refract p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-900/12 pb-5 dark:border-white/15">
              <div className="max-w-3xl">
                <div className="font-mono-jb flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#b91c1c] dark:text-[#ff8589]">
                  <BookOpen className="h-4 w-4" />
                  <span>{plan.label}</span>
                  <span>·</span>
                  <span>{plan.stage}</span>
                  <span>·</span>
                  <span>Haftasiga {plan.hoursPerWeek} soat</span>
                </div>
                <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  {plan.label} — Taqvimi-mavzu reja ({plan.totalLessons} ta dars)
                </h1>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                  {plan.description}
                </p>
              </div>

              <div className="lg-well px-4 py-3">
                <div className="text-[11px] font-medium text-slate-700 dark:text-slate-300">
                  O‘zlashtirish
                </div>
                <div className="font-mono-jb text-lg font-bold text-slate-950 dark:text-white">
                  {completedInGrade} / {plan.totalLessons} dars
                </div>
              </div>
            </div>

            {/* Search & Filters */}
            <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative flex-1 lg:max-w-md">
                <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-500 dark:text-slate-300" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Dars nomi yoki raqami bo‘yicha qidirish..."
                  className="min-h-[44px] w-full rounded-xl border border-slate-900/18 bg-white/90 pr-4 pl-10 text-xs font-medium text-slate-950 transition focus:border-[#dc2626] focus:outline-none dark:border-white/20 dark:bg-slate-950/60 dark:text-white dark:focus:border-[#ff8589]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Filter className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                {KIND_FILTERS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setKindFilter(f.id)}
                    className={`min-h-[38px] rounded-xl px-3.5 py-1.5 text-xs font-semibold cursor-pointer ${
                      kindFilter === f.id
                        ? 'lg-btn-primary text-white'
                        : 'lg-btn-glass'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setOnlyRemaining((v) => !v)}
                  className={`lg-btn-pill min-h-[38px] rounded-xl border px-3.5 py-1.5 text-xs font-semibold cursor-pointer ${
                    onlyRemaining
                      ? 'border-amber-500 bg-amber-500/24 text-amber-950 dark:text-amber-100'
                      : 'lg-btn-glass'
                  }`}
                >
                  Tugallanmaganlar
                </button>
              </div>
            </div>
          </div>

          {/* Grouped Lesson Lists */}
          {groupedByPart.length === 0 ? (
            <div className="lg-glass p-8 text-center text-sm text-slate-700 dark:text-slate-300">
              Tanlangan filtr bo‘yicha darslar topilmadi.
            </div>
          ) : (
            groupedByPart.map((group) => (
              <div key={group.partName} className="lg-glass p-5 sm:p-7">
                <div className="mb-4 flex items-center justify-between border-b border-slate-900/12 pb-3 dark:border-white/15">
                  <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                    {group.partName}
                  </h2>
                  <span className="font-mono-jb text-xs font-medium text-slate-700 dark:text-slate-300">
                    {group.items.length} ta dars
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((lesson) => {
                    const isDone = completedLessons.has(lesson.id);
                    const hasContent = lesson.sections.length > 0;
                    const solvedCount = lesson.games.filter((g) => solvedGames.has(g.id)).length;
                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        onClick={() => onOpenLesson(lesson)}
                        className="lg-well group flex min-h-[78px] items-center justify-between gap-3 px-4 py-3 text-left cursor-pointer"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2 font-mono-jb text-[11px] text-slate-700 dark:text-slate-300">
                            <span className="font-bold text-[#b91c1c] dark:text-[#ff8589]">
                              #{lesson.no}
                            </span>
                            <span>·</span>
                            <span>{LESSON_KIND_LABELS[lesson.kind]}</span>
                            <span>·</span>
                            <span className="inline-flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {lesson.hours} soat
                            </span>
                            {lesson.games.length > 0 ? (
                              <>
                                <span>·</span>
                                <span>
                                  {solvedCount}/{lesson.games.length} o‘yin
                                </span>
                              </>
                            ) : null}
                            {!hasContent ? (
                              <span className="opacity-80">· Tayyorlanmoqda</span>
                            ) : null}
                          </div>
                          <div className="mt-1 line-clamp-2 text-sm font-bold text-slate-950 dark:text-white">
                            {lesson.title}
                          </div>
                        </div>

                        <div className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                          {isDone ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </>
      )}
    </section>
  );
}
