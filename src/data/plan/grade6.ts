import type { GradePlan } from './types';
import { GRADE_6_P1A } from './grade6_p1a';
import { GRADE_6_P1B } from './grade6_p1b';
import { GRADE_6_P2A } from './grade6_p2a';
import { GRADE_6_P2B } from './grade6_p2b';

export const GRADE_6_PLAN: GradePlan = {
  grade: 6,
  label: '6-sinf',
  stage: 'O‘rta bosqich',
  hoursPerWeek: 1,
  totalLessons: 34,
  parts: ['1-yarim yillik', '2-yarim yillik'],
  description: 'Hujjat dizayni, tasvir importi, elektron jadvallarda formulalar, ma’lumotlar bazasi querylari, Scratch takrorlash va taqdimot.',
  lessons: [
    ...GRADE_6_P1A,
    ...GRADE_6_P1B,
    ...GRADE_6_P2A,
    ...GRADE_6_P2B,
  ],
};
