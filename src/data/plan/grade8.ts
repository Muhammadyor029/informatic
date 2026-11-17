import type { GradePlan } from './types';
import { GRADE_8_P1A } from './grade8_p1a';
import { GRADE_8_P1B } from './grade8_p1b';
import { GRADE_8_P2A } from './grade8_p2a';
import { GRADE_8_P2B } from './grade8_p2b';

export const GRADE_8_PLAN: GradePlan = {
  grade: 8,
  label: '8-sinf',
  stage: 'Yuqori bosqich',
  hoursPerWeek: 1,
  totalLessons: 34,
  parts: ['1-yarim yillik', '2-yarim yillik'],
  description: 'Scratch o‘zgaruvchilar va o‘yin dasturlash, HTML/CSS veb-sahifalar, kompyuter tarmoqlari, Pencil2D animatsiya, Adobe Spark video va Audacity audio.',
  lessons: [
    ...GRADE_8_P1A,
    ...GRADE_8_P1B,
    ...GRADE_8_P2A,
    ...GRADE_8_P2B,
  ],
};
