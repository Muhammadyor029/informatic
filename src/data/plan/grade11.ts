import type { GradePlan } from './types';
import { GRADE_11_Q1A } from './grade11_q1a';
import { GRADE_11_Q1B } from './grade11_q1b';
import { GRADE_11_Q2A } from './grade11_q2a';
import { GRADE_11_Q2B } from './grade11_q2b';
import { GRADE_11_Q3A } from './grade11_q3a';
import { GRADE_11_Q3B } from './grade11_q3b';
import { GRADE_11_Q4A } from './grade11_q4a';
import { GRADE_11_Q4B } from './grade11_q4b';

export const GRADE_11_PLAN: GradePlan = {
  grade: 11,
  label: '11-sinf',
  stage: 'Akademik bosqich',
  hoursPerWeek: 2,
  totalLessons: 68,
  parts: ['1-chorak', '2-chorak', '3-chorak', '4-chorak'],
  description:
    'Video va audio montaj, yangi texnologiyalar (AI/AR/VR/3D), tarmoq protokollari va kommutatsiya, loyiha boshqaruvi (SDLC), vektor/rastr grafika va JavaScript dasturlash.',
  lessons: [
    ...GRADE_11_Q1A,
    ...GRADE_11_Q1B,
    ...GRADE_11_Q2A,
    ...GRADE_11_Q2B,
    ...GRADE_11_Q3A,
    ...GRADE_11_Q3B,
    ...GRADE_11_Q4A,
    ...GRADE_11_Q4B,
  ],
};
