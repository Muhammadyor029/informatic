import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Gamepad2,
  GraduationCap,
  HelpCircle,
  Presentation,
  Printer,
  RotateCcw,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { GameEngineHost } from './GameEngines';
import { PresentationDeck } from './PresentationDeck';
import { LESSON_KIND_LABELS } from '../data/plan';
import type { AnyGameItem, GradePlan, Lesson } from '../data/plan/types';
import type { QuizConfig } from '../data/curriculum';

export type WrongQuestionRecord = {
  key: string;
  lessonTitle: string;
  quiz: QuizConfig;
};

interface LessonPageViewProps {
  plan: GradePlan;
  lesson: Lesson;
  completedLessons: Set<string>;
  completedPractice: Set<string>;
  solvedGames: Set<string>;
  quizScores: Record<string, number>;
  wrongQuestions: WrongQuestionRecord[];
  teacherMode: boolean;
  onToggleTeacherMode: () => void;
  onBackToPlan: () => void;
  onNavigateLesson: (lesson: Lesson) => void;
  onToggleLessonComplete: (lessonId: string) => void;
  onTogglePracticeStep: (practiceKey: string) => void;
  onWinGame: (gameId: string, points: number) => void;
  onSaveQuizScore: (lessonId: string, pct: number) => void;
  onRecordWrongQuestion: (record: WrongQuestionRecord) => void;
  onClearWrongQuestion: (key: string) => void;
}

type LessonTab = 'theory' | 'presentation' | 'practice' | 'games' | 'quiz' | 'teacher';

export function LessonPageView({
  plan,
  lesson,
  completedLessons,
  completedPractice,
  solvedGames,
  quizScores,
  wrongQuestions,
  teacherMode,
  onToggleTeacherMode,
  onBackToPlan,
  onNavigateLesson,
  onToggleLessonComplete,
  onTogglePracticeStep,
  onWinGame,
  onSaveQuizScore,
  onRecordWrongQuestion,
  onClearWrongQuestion,
}: LessonPageViewProps) {
  const [activeTab, setActiveTab] = useState<LessonTab>('theory');
  const [activeGameIdx, setActiveGameIdx] = useState(0);

  // Interactive Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizWarning, setQuizWarning] = useState<string>('');

  const lessonIdx = plan.lessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = lessonIdx > 0 ? plan.lessons[lessonIdx - 1] : null;
  const nextLesson =
    lessonIdx >= 0 && lessonIdx < plan.lessons.length - 1 ? plan.lessons[lessonIdx + 1] : null;

  // Reset tab & quiz answers when switching lessons
  useEffect(() => {
    setActiveTab('theory');
    setActiveGameIdx(0);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizWarning('');
  }, [lesson.id]);

  // Prevent blank content if teacherMode is turned off while viewing the teacher tab
  useEffect(() => {
    if (!teacherMode && activeTab === 'teacher') {
      setActiveTab('theory');
    }
  }, [teacherMode, activeTab]);

  // Keyboard navigation between lessons (skip if inside input/textarea/select)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === 'ArrowLeft' && prevLesson) {
        onNavigateLesson(prevLesson);
      } else if (e.key === 'ArrowRight' && nextLesson) {
        onNavigateLesson(nextLesson);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [prevLesson, nextLesson, onNavigateLesson]);

  // Auto-aggregate part content for 'nazorat' and 'takrorlash'
  const partLessons = useMemo(
    () =>
      plan.lessons.filter(
        (l) => l.part === lesson.part && l.no <= lesson.no && l.id !== lesson.id,
      ),
    [plan.lessons, lesson.part, lesson.no, lesson.id],
  );

  const effectiveQuiz = useMemo(() => {
    if (lesson.quiz.length > 0) return lesson.quiz;
    if (lesson.kind === 'nazorat') {
      const pool: QuizConfig[] = [];
      for (const l of partLessons) {
        for (const q of l.quiz) pool.push(q);
      }
      return pool.slice(0, 10);
    }
    return [];
  }, [lesson.quiz, lesson.kind, partLessons]);

  const effectiveGames = useMemo<AnyGameItem[]>(() => {
    if (lesson.games.length > 0) return lesson.games;
    if (lesson.kind === 'takrorlash') {
      const terms: { term: string; definition: string }[] = [];
      for (const l of partLessons) {
        for (const kt of l.keyTerms) terms.push(kt);
      }
      if (terms.length > 0) {
        return [
          {
            id: `${lesson.id}-auto-flash`,
            num: '01',
            title: `${lesson.part} atamalarini takrorlash`,
            topic: lesson.part,
            difficulty: 'O‘rta',
            engine: 'flashcards',
            config: {
              prompt: `${lesson.part} bo‘limidagi asosiy atamalarni kartochkalar yordamida takrorlang.`,
              cards: terms.slice(0, 12),
            },
          },
        ];
      }
    }
    if (lesson.kind === 'nazorat') {
      const collected: AnyGameItem[] = [];
      for (const l of partLessons) {
        if (l.games[0]) collected.push(l.games[0]);
      }
      return collected.slice(0, 3);
    }
    return [];
  }, [lesson.games, lesson.kind, lesson.id, lesson.part, partLessons]);

  const isSkeleton =
    lesson.sections.length === 0 &&
    lesson.practice.length === 0 &&
    effectiveGames.length === 0 &&
    effectiveQuiz.length === 0;

  const isDone = completedLessons.has(lesson.id);
  const currentGame = effectiveGames[activeGameIdx] ?? effectiveGames[0];

  function submitQuiz() {
    if (effectiveQuiz.length === 0) return;
    const answeredCount = effectiveQuiz.filter((_, idx) => quizAnswers[idx] !== undefined).length;
    if (answeredCount < effectiveQuiz.length) {
      setQuizWarning(
        `Iltimos, barcha savollarga javob belgilang (${answeredCount} / ${effectiveQuiz.length} belgilandi).`,
      );
      return;
    }
    setQuizWarning('');
    setQuizSubmitted(true);
    let okCount = 0;
    effectiveQuiz.forEach((q, idx) => {
      const key = `${lesson.id}-q-${idx}`;
      if (quizAnswers[idx] === q.answer) {
        okCount++;
        onClearWrongQuestion(key);
      } else {
        onRecordWrongQuestion({ key, lessonTitle: `${plan.label} #${lesson.no}: ${lesson.title}`, quiz: q });
      }
    });
    const pct = Math.round((okCount / effectiveQuiz.length) * 100);
    onSaveQuizScore(lesson.id, pct);
  }

  const savedPct = quizScores[lesson.id];
  const answeredQuizCount = effectiveQuiz.filter((_, idx) => quizAnswers[idx] !== undefined).length;
  const hasPresentation = lesson.grade >= 5 && !isSkeleton;

  const tabs: { id: LessonTab; label: string; icon: React.ReactNode }[] = [
    { id: 'theory', label: 'Tushuntirish', icon: <BookOpen className="h-4 w-4" /> },
  ];
  if (lesson.grade >= 5) {
    tabs.push({
      id: 'presentation',
      label: 'Prezentatsiya',
      icon: <Presentation className="h-4 w-4" />,
    });
  }
  tabs.push(
    { id: 'practice', label: 'Amaliyot', icon: <Wrench className="h-4 w-4" /> },
    { id: 'games', label: `O‘yin (${effectiveGames.length})`, icon: <Gamepad2 className="h-4 w-4" /> },
    { id: 'quiz', label: `Test (${effectiveQuiz.length})`, icon: <ClipboardList className="h-4 w-4" /> },
  );
  if (teacherMode) {
    tabs.push({
      id: 'teacher',
      label: 'O‘qituvchi',
      icon: <GraduationCap className="h-4 w-4" />,
    });
  }

  return (
    <section className="anim-rise space-y-5 py-2">
      {/* Top Breadcrumb & Controls */}
      <div className="no-print lg-glass flex flex-wrap items-center justify-between gap-3 p-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-2.5 text-xs">
          <button
            type="button"
            onClick={onBackToPlan}
            className="lg-btn-glass inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-4 py-2 font-semibold cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{plan.label} rejasiga qaytish</span>
          </button>
          <span className="font-mono-jb text-slate-700 dark:text-slate-300">
            {lesson.part} / Dars #{lesson.no}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={onToggleTeacherMode}
            className={`inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer ${
              teacherMode
                ? 'lg-btn-primary text-white'
                : 'lg-btn-glass'
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            <span>O‘qituvchi rejimi</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="lg-btn-glass inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
          >
            <Printer className="h-4 w-4" />
            <span className="hidden sm:inline">Chop etish</span>
          </button>

          <button
            type="button"
            onClick={() => onToggleLessonComplete(lesson.id)}
            className={`lg-btn-pill inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer ${
              isDone
                ? 'border border-emerald-500/50 bg-emerald-500/20 text-emerald-900 hover:bg-emerald-500/30 dark:text-emerald-200'
                : 'lg-btn-primary text-white'
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>{isDone ? 'Dars tugatilgan ✓' : 'Darsni tugatish'}</span>
          </button>
        </div>
      </div>

      {/* Main Lesson Card */}
      <div className="lg-glass lg-refract p-6 sm:p-8">
        <div className="border-b border-slate-900/12 pb-5 dark:border-white/15">
          <div className="font-mono-jb flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#b91c1c] dark:text-[#ff8589]">
            <span>{plan.label}</span>
            <span>·</span>
            <span>{lesson.part}</span>
            <span>·</span>
            <span>{LESSON_KIND_LABELS[lesson.kind]}</span>
            <span>·</span>
            <span>{lesson.hours} soat</span>
            {savedPct !== undefined ? (
              <>
                <span>·</span>
                <span className="text-emerald-700 dark:text-emerald-300">Test: {savedPct}%</span>
              </>
            ) : null}
          </div>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
            #{lesson.no}. {lesson.title}
          </h1>

          {lesson.tools.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {lesson.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-slate-900/14 bg-white/75 px-2.5 py-1 font-mono-jb text-[11px] font-medium text-slate-800 dark:border-white/16 dark:bg-white/[0.08] dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {/* 5 Tabs */}
        <div className="no-print mt-5 flex flex-wrap gap-2.5 border-b border-slate-900/12 pb-4 dark:border-white/15">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex min-h-[42px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer ${
                  active
                    ? 'lg-btn-primary text-white'
                    : 'lg-btn-glass'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: THEORY */}
        {activeTab === 'theory' && (
          <div className="mt-6 space-y-6">
            {isSkeleton ? (
              <div className="lg-well p-6 text-center">
                <Sparkles className="mx-auto h-7 w-7 text-[#dc2626] dark:text-[#ff8589]" />
                <h2 className="mt-3 text-lg font-bold text-slate-950 dark:text-white">
                  Bu dars tez orada to‘ldiriladi
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-sm text-slate-700 dark:text-slate-200">
                  Hozircha 1-bosqich infratuzilmasida barcha 340 ta darsning rasmiy mavzu tuzilmasi
                  yaratilgan. To‘liq nazariya, amaliy topshiriqlar, o‘yinlar va testlar keyingi
                  bosqichda qo‘shiladi. Ungacha «Metodik o‘yinlar» va 1–4-sinf
                  o‘yinlaridan foydalanishingiz mumkin.
                </p>
              </div>
            ) : (
              <>
                {lesson.objectives.length > 0 ? (
                  <div className="lg-well flex flex-wrap items-start justify-between gap-4 p-5">
                    <div className="min-w-0 flex-1">
                      <h2 className="text-sm font-bold uppercase tracking-wider text-[#b91c1c] dark:text-[#ff8589]">
                        Dars maqsadlari
                      </h2>
                      <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-sm text-slate-800 dark:text-slate-200">
                        {lesson.objectives.map((obj, i) => (
                          <li key={i}>{obj}</li>
                        ))}
                      </ul>
                    </div>

                    {hasPresentation ? (
                      <button
                        type="button"
                        onClick={() => setActiveTab('presentation')}
                        className="no-print lg-btn-primary inline-flex min-h-[42px] shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-white cursor-pointer"
                      >
                        <Presentation className="h-4 w-4" />
                        <span>Rasmli prezentatsiya</span>
                      </button>
                    ) : null}
                  </div>
                ) : null}

                {lesson.intro ? (
                  <p className="text-base leading-relaxed text-slate-800 dark:text-slate-200">
                    {lesson.intro}
                  </p>
                ) : null}

                {lesson.sections.map((sec, idx) => (
                  <article key={idx} className="lg-well space-y-2.5 p-5">
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                      {sec.heading}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                      {sec.body}
                    </p>
                    {sec.example ? (
                      <div className="rounded-xl border border-slate-900/12 bg-white/85 p-3 font-mono-jb text-xs text-slate-900 dark:border-white/15 dark:bg-black/45 dark:text-slate-100">
                        <strong className="text-[#b91c1c] dark:text-[#ff8589]">Misol: </strong>
                        {sec.example}
                      </div>
                    ) : null}
                    {sec.tip ? (
                      <div className="rounded-xl border border-sky-500/35 bg-sky-500/12 p-3 text-xs text-sky-950 dark:text-sky-100">
                        <strong>Eslatma: </strong>
                        {sec.tip}
                      </div>
                    ) : null}
                  </article>
                ))}

                {lesson.keyTerms.length > 0 ? (
                  <div>
                    <h3 className="mb-3 text-base font-bold text-slate-950 dark:text-white">
                      Asosiy atamalar
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {lesson.keyTerms.map((kt) => (
                        <div key={kt.term} className="lg-well p-4">
                          <div className="font-mono-jb text-sm font-bold text-[#b91c1c] dark:text-[#ff8589]">
                            {kt.term}
                          </div>
                          <div className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-200">
                            {kt.definition}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </>
            )}
          </div>
        )}

        {/* TAB 1B: ILLUSTRATED PRESENTATION (GRADES 5-11) */}
        {activeTab === 'presentation' && lesson.grade >= 5 && (
          <div className="mt-6">
            {isSkeleton ? (
              <div className="lg-well p-6 text-center text-sm text-slate-700 dark:text-slate-300">
                Ushbu dars uchun rasmli prezentatsiya tez orada tayyorlanadi.
              </div>
            ) : (
              <PresentationDeck
                plan={plan}
                lesson={lesson}
                onGoToGames={() => setActiveTab('games')}
                onGoToQuiz={() => setActiveTab('quiz')}
              />
            )}
          </div>
        )}

        {/* TAB 2: PRACTICE */}
        {activeTab === 'practice' && (
          <div className="mt-6 space-y-5">
            {lesson.steps && lesson.steps.length > 0 ? (
              <div className="lg-well p-5">
                <h2 className="mb-3 text-base font-bold text-slate-950 dark:text-white">
                  Qadamma-qadam yo‘riqnoma
                </h2>
                <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-800 dark:text-slate-200">
                  {lesson.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>
            ) : null}

            {lesson.practice.length === 0 ? (
              <div className="lg-well p-6 text-center text-sm text-slate-700 dark:text-slate-300">
                Bu darsning amaliy topshiriqlari keyingi bosqichda qo‘shiladi.
              </div>
            ) : (
              <div className="space-y-3">
                {lesson.practice.map((p, idx) => {
                  const pKey = `${lesson.id}-pr-${idx}`;
                  const checked = completedPractice.has(pKey);
                  return (
                    <div
                      key={pKey}
                      className={`lg-well flex flex-wrap items-start justify-between gap-4 p-4 ${
                        checked ? 'border-emerald-500/50 bg-emerald-500/12' : ''
                      }`}
                    >
                      <div className="flex-1 space-y-1">
                        <div className="font-mono-jb text-xs font-bold uppercase text-[#b91c1c] dark:text-[#ff8589]">
                          Topshiriq #{idx + 1} · {p.difficulty}
                        </div>
                        <div className="text-sm font-semibold text-slate-950 dark:text-white">
                          {p.task}
                        </div>
                        <div className="text-xs text-slate-700 dark:text-slate-200">
                          <strong>Kutilgan natija:</strong> {p.expected}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onTogglePracticeStep(pKey)}
                        className={`lg-btn-pill inline-flex min-h-[42px] items-center gap-2 rounded-xl border px-4 py-2 text-xs font-semibold cursor-pointer ${
                          checked
                            ? 'border-emerald-500 bg-emerald-600 text-white hover:bg-emerald-500'
                            : 'lg-btn-glass'
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{checked ? 'Bajardim' : 'Bajarildi deb belgilash'}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: INTERACTIVE GAME */}
        {activeTab === 'games' && (
          <div className="mt-6">
            {effectiveGames.length === 0 ? (
              <div className="lg-well p-6 text-center text-sm text-slate-700 dark:text-slate-300">
                Bu dars uchun interaktiv o‘yinlar keyingi bosqichda qo‘shiladi.
              </div>
            ) : (
              <div className="space-y-4">
                {effectiveGames.length > 1 ? (
                  <div className="flex flex-wrap gap-2">
                    {effectiveGames.map((g, i) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setActiveGameIdx(i)}
                        className={`min-h-[40px] rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer ${
                          activeGameIdx === i
                            ? 'lg-btn-primary text-white'
                            : 'lg-btn-glass'
                        }`}
                      >
                        {i + 1}. {g.title} {solvedGames.has(g.id) ? '✓' : ''}
                      </button>
                    ))}
                  </div>
                ) : null}

                {currentGame ? (
                  <div className="lg-well p-5">
                    <h3 className="mb-3 text-lg font-bold text-slate-950 dark:text-white">
                      {currentGame.title}
                    </h3>
                    <GameEngineHost
                      key={currentGame.id}
                      game={currentGame}
                      alreadySolved={solvedGames.has(currentGame.id)}
                      onWin={onWinGame}
                      onNextGame={() =>
                        setActiveGameIdx((i) => Math.min(effectiveGames.length - 1, i + 1))
                      }
                      hasNextGame={activeGameIdx < effectiveGames.length - 1}
                    />
                  </div>
                ) : null}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: QUIZ + WRONG QUESTION RETRY */}
        {activeTab === 'quiz' && (
          <div className="mt-6 space-y-5">
            {effectiveQuiz.length === 0 ? (
              <div className="lg-well p-6 text-center text-sm text-slate-700 dark:text-slate-300">
                Bu dars uchun test savollari keyingi bosqichda qo‘shiladi.
              </div>
            ) : (
              <>
                {effectiveQuiz.map((q, qIdx) => {
                  const chosen = quizAnswers[qIdx];
                  return (
                    <div key={qIdx} className="lg-well space-y-3 p-5">
                      <div className="text-sm font-bold text-slate-950 dark:text-white">
                        {qIdx + 1}. {q.prompt}
                      </div>
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {q.options.map((opt, oIdx) => {
                          const isSelected = chosen === oIdx;
                          const isCorrectOpt = oIdx === q.answer;
                          let cls =
                            'lg-btn-glass text-left';
                          if (quizSubmitted) {
                            if (isCorrectOpt) {
                              cls =
                                'border border-emerald-500 bg-emerald-500/22 text-emerald-950 dark:text-emerald-100';
                            } else if (isSelected && !isCorrectOpt) {
                              cls =
                                'border border-amber-500 bg-amber-500/22 text-amber-950 dark:text-amber-100';
                            }
                          } else if (isSelected) {
                            cls =
                              'border-2 border-[#dc2626] bg-rose-500/18 text-[#991b1b] dark:border-[#ff8589] dark:text-[#ffd1d3]';
                          }
                          return (
                            <button
                              key={oIdx}
                              type="button"
                              disabled={quizSubmitted}
                              onClick={() => {
                                setQuizWarning('');
                                setQuizAnswers((prev) => ({ ...prev, [qIdx]: oIdx }));
                              }}
                              className={`min-h-[44px] rounded-xl px-4 py-2.5 text-left text-xs font-semibold cursor-pointer ${cls}`}
                            >
                              <span className="mr-2 font-mono-jb opacity-75">
                                {String.fromCharCode(65 + oIdx)}.
                              </span>
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                      {quizSubmitted ? (
                        <div className="text-xs text-slate-700 dark:text-slate-200">
                          <strong>Izoh:</strong> {q.explanation}
                        </div>
                      ) : null}
                    </div>
                  );
                })}

                {quizWarning ? (
                  <div className="rounded-xl border border-amber-500/45 bg-amber-500/15 px-4 py-3 text-xs font-semibold text-amber-950 dark:text-amber-100">
                    {quizWarning}
                  </div>
                ) : null}

                <div className="flex flex-wrap items-center gap-3">
                  {!quizSubmitted ? (
                    <>
                      <button
                        type="button"
                        onClick={submitQuiz}
                        className="lg-btn-primary inline-flex min-h-[46px] items-center gap-2 rounded-xl px-6 py-2.5 text-xs font-semibold cursor-pointer"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Testni yakunlash va tekshirish</span>
                      </button>
                      <span className="font-mono-jb text-xs text-slate-600 dark:text-slate-300">
                        Belgilandi: {answeredQuizCount} / {effectiveQuiz.length}
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="font-mono-jb rounded-xl border border-emerald-500/45 bg-emerald-500/18 px-4 py-2.5 text-sm font-bold text-emerald-900 dark:text-emerald-200">
                        Natija: {savedPct ?? 0}%
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setQuizAnswers({});
                          setQuizSubmitted(false);
                          setQuizWarning('');
                        }}
                        className="lg-btn-glass inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
                      >
                        <RotateCcw className="h-4 w-4" />
                        <span>Qayta yechish</span>
                      </button>
                    </>
                  )}
                </div>
              </>
            )}

            {/* Wrong questions retry block on revision lessons */}
            {lesson.kind === 'takrorlash' && wrongQuestions.length > 0 ? (
              <div className="lg-well space-y-3 border-amber-500/45 p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-amber-900 dark:text-amber-200">
                  <HelpCircle className="h-4 w-4" />
                  <span>Oldin xato qilingan savollar ({wrongQuestions.length} ta)</span>
                </div>
                {wrongQuestions.slice(0, 5).map((wq) => (
                  <div
                    key={wq.key}
                    className="rounded-xl border border-slate-900/12 bg-white/75 p-3 text-xs dark:border-white/14 dark:bg-black/35"
                  >
                    <div className="font-mono-jb text-[10px] text-slate-600 dark:text-slate-300">
                      {wq.lessonTitle}
                    </div>
                    <div className="mt-1 font-semibold text-slate-950 dark:text-white">
                      {wq.quiz.prompt}
                    </div>
                    <div className="mt-1 text-emerald-800 dark:text-emerald-300">
                      To‘g‘ri javob: {wq.quiz.options[wq.quiz.answer]}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        )}

        {/* TAB 5: TEACHER NOTES */}
        {activeTab === 'teacher' && teacherMode && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="lg-well p-4">
              <div className="font-mono-jb text-xs font-bold uppercase text-[#b91c1c] dark:text-[#ff8589]">
                Metodik tavsiya
              </div>
              <p className="mt-1.5 text-sm text-slate-800 dark:text-slate-200">
                {lesson.teacherNotes.method || 'Keyingi bosqichda to‘ldiriladi.'}
              </p>
            </div>
            <div className="lg-well p-4">
              <div className="font-mono-jb text-xs font-bold uppercase text-[#b91c1c] dark:text-[#ff8589]">
                Vaqt taqsimoti
              </div>
              <p className="mt-1.5 text-sm text-slate-800 dark:text-slate-200">
                {lesson.teacherNotes.timing || 'Keyingi bosqichda to‘ldiriladi.'}
              </p>
            </div>
            <div className="lg-well p-4">
              <div className="font-mono-jb text-xs font-bold uppercase text-[#b91c1c] dark:text-[#ff8589]">
                Baholash mezoni
              </div>
              <p className="mt-1.5 text-sm text-slate-800 dark:text-slate-200">
                {lesson.teacherNotes.assessment || 'Keyingi bosqichda to‘ldiriladi.'}
              </p>
            </div>
            <div className="lg-well p-4">
              <div className="font-mono-jb text-xs font-bold uppercase text-[#b91c1c] dark:text-[#ff8589]">
                Uyga vazifa
              </div>
              <p className="mt-1.5 text-sm text-slate-800 dark:text-slate-200">
                {lesson.teacherNotes.homework || 'Keyingi bosqichda to‘ldiriladi.'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Prev / Next Lesson Bar */}
      <div className="no-print lg-glass flex flex-wrap items-center justify-between gap-3 p-4 sm:px-6">
        <button
          type="button"
          disabled={!prevLesson}
          onClick={() => prevLesson && onNavigateLesson(prevLesson)}
          className="lg-btn-glass inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold disabled:opacity-40 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="max-w-[220px] truncate">
            {prevLesson ? `Oldingi: #${prevLesson.no} ${prevLesson.title}` : 'Birinchi dars'}
          </span>
        </button>

        <button
          type="button"
          disabled={!nextLesson}
          onClick={() => nextLesson && onNavigateLesson(nextLesson)}
          className="lg-btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold disabled:opacity-40 cursor-pointer"
        >
          <span className="max-w-[220px] truncate">
            {nextLesson ? `Keyingi: #${nextLesson.no} ${nextLesson.title}` : 'Oxirgi dars'}
          </span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
