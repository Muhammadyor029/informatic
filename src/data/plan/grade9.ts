import type { GradePlan } from './types';
import { GRADE_9_Q1A } from './grade9_q1a';
import { GRADE_9_Q1B } from './grade9_q1b';
import { GRADE_9_Q2A } from './grade9_q2a';
import { GRADE_9_Q2B } from './grade9_q2b';
import { GRADE_9_Q3A } from './grade9_q3a';
import { GRADE_9_Q3B } from './grade9_q3b';
import { GRADE_9_Q4A } from './grade9_q4a';
import { GRADE_9_Q4B } from './grade9_q4b';

export const GRADE_9_PLAN: GradePlan = {
  grade: 9,
  label: '9-sinf',
  stage: 'Yuqori bosqich',
  hoursPerWeek: 2,
  totalLessons: 68,
  parts: ['1-chorak', '2-chorak', '3-chorak', '4-chorak'],
  description: 'Kompyuter arxitekturasi, xotira masalalari, tarmoq va xavfsizlik, mualliflik huquqi, tasvir tahrirlash, ma’lumotlar modeli va HTML/CSS veb dasturlash.',
  lessons: [
    ...GRADE_9_Q1A,
    ...GRADE_9_Q1B,
    ...GRADE_9_Q2A,
    ...GRADE_9_Q2B,
    ...GRADE_9_Q3A,
    ...GRADE_9_Q3B,
    ...GRADE_9_Q4A,
    ...GRADE_9_Q4B,
  ],
};
