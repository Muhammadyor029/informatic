import type {
  BinaryConfig,
  CipherConfig,
  CodeBugConfig,
  GraphConfig,
  LogicConfig,
  MatchConfig,
  QuizConfig,
  RobotConfig,
  SequenceConfig,
  SortConfig,
} from '../curriculum';

export type LessonKind = 'dars' | 'amaliy' | 'loyiha' | 'nazorat' | 'takrorlash';

/* =========================================================
   NEW 18 INTERACTIVE GAME ENGINE CONFIG INTERFACES
   ========================================================= */

export interface OrderConfig {
  prompt: string;
  items: string[]; // correct order is index 0..n-1
  hint: string;
  explanation?: string;
}

export interface FillBlankConfig {
  prompt: string;
  template: string; // Use {{0}}, {{1}} placeholders
  blanks: {
    options: string[];
    answer: string;
  }[];
  hint: string;
  explanation: string;
}

export interface TrueFalseConfig {
  prompt: string;
  timeLimitSec?: number;
  statements: {
    text: string;
    isTrue: boolean;
    explanation: string;
  }[];
}

export interface FlashcardsConfig {
  prompt: string;
  cards: {
    term: string;
    definition: string;
    example?: string;
  }[];
}

export interface HotspotConfig {
  prompt: string;
  appTitle: string;
  layout: 'word' | 'paint' | 'excel' | 'scratch' | 'browser' | 'audacity';
  targetZoneId: string;
  zones: {
    id: string;
    label: string;
    icon?: string;
    group?: string;
    hintText?: string;
  }[];
  explanation: string;
}

export interface TypingConfig {
  prompt: string;
  targetText: string;
  minAccuracy?: number;
  hint: string;
}

export interface SheetLabConfig {
  prompt: string;
  rows: number;
  cols: number;
  initialCells: Record<string, string>; // e.g. { A1: '12', A2: '18', B1: '5' }
  targetCell: string; // e.g. 'A3'
  expectedValue: number | string;
  requiredFormulaTokens?: string[]; // e.g. ['SUM', 'A1:A2'] or ['=']
  hint: string;
  explanation: string;
}

export interface ChartLabConfig {
  prompt: string;
  datasetTitle: string;
  data: { label: string; value: number }[];
  correctType: 'bar' | 'line' | 'pie';
  xAxisOptions: string[];
  correctXAxis: string;
  yAxisOptions: string[];
  correctYAxis: string;
  titleOptions: string[];
  correctTitle: string;
  explanation: string;
}

export interface BlocksConfig {
  prompt: string;
  gridSize: number;
  start: [number, number];
  startDir: 'R' | 'L' | 'U' | 'D';
  goal: [number, number];
  collectibles?: [number, number][];
  availableBlocks: ('move' | 'turnRight' | 'turnLeft' | 'repeat2' | 'repeat3' | 'repeat4' | 'penDown')[];
  requirePen?: boolean;
  hint: string;
}

export interface HtmlPlayConfig {
  prompt: string;
  starterCode: string;
  checks: {
    label: string;
    pattern: string; // regex source tested against code
    flags?: string;
  }[];
  hint: string;
}

export interface DbLabConfig {
  prompt: string;
  tableName: string;
  columns: { name: string; type: string }[];
  rows: Record<string, string | number>[];
  mode: 'query' | 'relation';
  // For query mode:
  targetField?: string;
  targetOp?: '=' | '>' | '<' | 'contains';
  targetValue?: string;
  expectedRowCount?: number;
  // For relation mode:
  relationPairs?: {
    pairLabel: string;
    answer: '1:1' | '1:∞' | '∞:∞';
  }[];
  hint: string;
  explanation: string;
}

export interface NetBuilderConfig {
  prompt: string;
  devices: { id: string; label: string; type: 'pc' | 'switch' | 'router' | 'modem' | 'server' | 'ap' }[];
  requiredLinks: [string, string][]; // unordered pairs of device IDs
  hint: string;
  explanation: string;
}

export interface CalcConfig {
  prompt: string;
  unit: string;
  correctAnswer: number;
  tolerance?: number;
  steps: string[];
  hint: string;
}

export interface ImageLabConfig {
  prompt: string;
  subject: 'landscape' | 'portrait' | 'logo';
  target: {
    brightness: number; // 50..150
    contrast: number; // 50..150
    rotate: number; // 0, 90, 180, 270
    flipH: boolean;
  };
  tolerance?: number;
  hint: string;
}

export interface AudioLabConfig {
  prompt: string;
  clipDurationSec: number;
  targetTrimStart: number;
  targetTrimEnd: number;
  targetVolume: number; // 20..150
  targetSpeed: number; // 0.5 | 1 | 1.5 | 2
  hint: string;
}

export interface TimelineConfig {
  prompt: string;
  clips: { id: string; label: string; duration: number; color: string }[];
  expectedOrder: string[];
  requireTitleTrack?: boolean;
  requireTrim?: boolean;
  hint: string;
}

export interface CrosswordConfig {
  prompt: string;
  clues: {
    id: string;
    clue: string;
    answer: string; // uppercase word
  }[];
  hint: string;
}

export interface CaseStudyConfig {
  prompt: string;
  scenario: string;
  options: {
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
}

export type NewGameEngineType =
  | 'order'
  | 'fillblank'
  | 'truefalse'
  | 'flashcards'
  | 'hotspot'
  | 'typing'
  | 'sheetlab'
  | 'chartlab'
  | 'blocks'
  | 'htmlplay'
  | 'dblab'
  | 'netbuilder'
  | 'calc'
  | 'imagelab'
  | 'audiolab'
  | 'timeline'
  | 'crossword'
  | 'casestudy';

export type AnyGameEngineType =
  | 'sequence'
  | 'robot'
  | 'match'
  | 'binary'
  | 'logic'
  | 'sort'
  | 'graph'
  | 'codebug'
  | 'cipher'
  | 'quiz'
  | NewGameEngineType;

export type AnyGameItem =
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'sequence'; config: SequenceConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'robot'; config: RobotConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'match'; config: MatchConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'binary'; config: BinaryConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'logic'; config: LogicConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'sort'; config: SortConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'graph'; config: GraphConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'codebug'; config: CodeBugConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'cipher'; config: CipherConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'quiz'; config: QuizConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'order'; config: OrderConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'fillblank'; config: FillBlankConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'truefalse'; config: TrueFalseConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'flashcards'; config: FlashcardsConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'hotspot'; config: HotspotConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'typing'; config: TypingConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'sheetlab'; config: SheetLabConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'chartlab'; config: ChartLabConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'blocks'; config: BlocksConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'htmlplay'; config: HtmlPlayConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'dblab'; config: DbLabConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'netbuilder'; config: NetBuilderConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: 'oson' | 'o‘rta' | 'qiyin' | string; engine: 'calc'; config: CalcConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'imagelab'; config: ImageLabConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'audiolab'; config: AudioLabConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'timeline'; config: TimelineConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'crossword'; config: CrosswordConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'casestudy'; config: CaseStudyConfig };

export interface LessonSection {
  heading: string;
  body: string;
  example?: string;
  tip?: string;
}

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface PracticeItem {
  task: string;
  expected: string;
  difficulty: 'oson' | 'o‘rta' | 'qiyin';
}

export interface TeacherNotes {
  method: string;
  timing: string;
  assessment: string;
  homework: string;
}

export interface SlideItem {
  title: string;
  subtitle?: string;
  bullets: string[];
  highlight?: string;
  note?: string;
  diagram?: 'office' | 'data' | 'code' | 'hardware' | 'network' | 'security' | 'media' | 'database' | 'web' | 'project';
}

export interface Lesson {
  id: string;
  grade: number;
  no: number;
  part: string;
  title: string;
  kind: LessonKind;
  hours: number;
  tools: string[];
  objectives: string[];
  intro: string;
  sections: LessonSection[];
  keyTerms: KeyTerm[];
  steps?: string[];
  practice: PracticeItem[];
  games: AnyGameItem[];
  quiz: QuizConfig[];
  teacherNotes: TeacherNotes;
  slides?: SlideItem[];
}

export interface GradePlanSummary {
  grade: number;
  label: string;
  stage: string;
  hoursPerWeek: number;
  totalLessons: number;
  parts: string[];
  description: string;
}

export interface GradePlan extends GradePlanSummary {
  lessons: Lesson[];
}
