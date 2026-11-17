import type { GradePlan } from './types';
import { GRADE_10_Q1A } from './grade10_q1a';
import { GRADE_10_Q1B } from './grade10_q1b';
import { GRADE_10_Q2A } from './grade10_q2a';
import { GRADE_10_Q2B } from './grade10_q2b';
import { GRADE_10_Q3A } from './grade10_q3a';
import { GRADE_10_Q3B } from './grade10_q3b';
import { GRADE_10_Q4A } from './grade10_q4a';
import { GRADE_10_Q4B } from './grade10_q4b';

export const GRADE_10_PLAN: GradePlan = {
  grade: 10,
  label: '10-sinf',
  stage: 'Akademik bosqich',
  hoursPerWeek: 2,
  totalLessons: 68,
  parts: ['1-chorak', '2-chorak', '3-chorak', '4-chorak'],
  description:
    'Ma’lumotlar nazariyasi va shifrlash, sensorlar va kiberxavfsizlik, tarmoqlar va ekspert tizimlar, murakkab Excel funksiyalari hamda relyatsion ma’lumotlar bazalari.',
  lessons: [
    ...GRADE_10_Q1A,
    ...GRADE_10_Q1B,
    ...GRADE_10_Q2A,
    ...GRADE_10_Q2B,
    ...GRADE_10_Q3A,
    ...GRADE_10_Q3B,
    ...GRADE_10_Q4A,
    ...GRADE_10_Q4B,
  ],
};
