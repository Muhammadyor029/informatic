import type { GradePlan } from './types';
import { GRADE_7_P1A } from './grade7_p1a';
import { GRADE_7_P1B } from './grade7_p1b';
import { GRADE_7_P2A } from './grade7_p2a';
import { GRADE_7_P2B } from './grade7_p2b';

export const GRADE_7_PLAN: GradePlan = {
  grade: 7,
  label: '7-sinf',
  stage: 'O‘rta bosqich',
  hoursPerWeek: 1,
  totalLessons: 34,
  parts: ['1-yarim yillik', '2-yarim yillik'],
  description: 'Matn stillari va maket, PowerPoint animatsiyasi, elektron jadvallarda modellashtirish va shartli formatlash, ma’lumotlar bazasi jadvallari va formalari.',
  lessons: [
    ...GRADE_7_P1A,
    ...GRADE_7_P1B,
    ...GRADE_7_P2A,
    ...GRADE_7_P2B,
  ],
};
