import { GRADE_5_PART_1 } from './grade5_part1';
import { GRADE_5_PART_2 } from './grade5_part2';
import type { GradePlan } from './types';

export const GRADE_5_PLAN: GradePlan = {
  grade: 5,
  label: '5-sinf',
  stage: 'O‘rta bosqich',
  hoursPerWeek: 1,
  totalLessons: 34,
  parts: ['1-yarim yillik', '2-yarim yillik'],
  description:
    'Matn muharriri, Paint grafik muharriri, Excel diagrammalari, algoritmik blok-sxemalar, qidiruv tizimlari va elektron pochta.',
  lessons: [...GRADE_5_PART_1, ...GRADE_5_PART_2],
};
