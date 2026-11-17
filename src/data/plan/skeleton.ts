import type { Lesson, LessonKind } from './types';

export interface SkeletonTuple {
  no: number;
  part: string;
  title: string;
  kind?: LessonKind;
  hours?: number;
  tools?: string[];
}

export function buildLessonSkeletons(grade: number, items: SkeletonTuple[]): Lesson[] {
  return items.map((item) => ({
    id: `g${grade}-l${String(item.no).padStart(2, '0')}`,
    grade,
    no: item.no,
    part: item.part,
    title: item.title,
    kind: item.kind ?? 'dars',
    hours: item.hours ?? 1,
    tools: item.tools ?? [],
    objectives: [],
    intro: '',
    sections: [],
    keyTerms: [],
    steps: [],
    practice: [],
    games: [],
    quiz: [],
    teacherNotes: {
      method: '',
      timing: '',
      assessment: '',
      homework: '',
    },
  }));
}
