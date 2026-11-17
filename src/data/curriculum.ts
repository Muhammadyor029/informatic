export type GameEngineType =
  | 'sequence'
  | 'robot'
  | 'match'
  | 'binary'
  | 'logic'
  | 'sort'
  | 'graph'
  | 'codebug'
  | 'cipher'
  | 'quiz';

export interface SequenceConfig {
  prompt: string;
  items: string[];
  missingIndex: number;
  options: string[];
  answer: string;
  explanation: string;
}

export interface RobotConfig {
  prompt: string;
  size: number;
  start: [number, number];
  goal: [number, number];
  walls: [number, number][];
  maxSteps: number;
  hint: string;
}

export interface MatchConfig {
  prompt: string;
  pairs: { left: string; right: string }[];
}

export interface BinaryConfig {
  prompt: string;
  bits: number;
  target: number;
  displayBase: 'dec' | 'hex' | 'oct';
  hint: string;
}

export interface LogicConfig {
  prompt: string;
  slots: string[];
  choices: string[][];
  rows: [number, number, number, number][];
  labels?: [string, string, string];
}

export interface SortConfig {
  prompt: string;
  items: { label: string; value: number }[];
  enableVisualizer: boolean;
  hint: string;
}

export interface GraphConfig {
  prompt: string;
  nodes: { id: string; x: number; y: number }[];
  edges: { u: string; v: string; w: number; blocked?: boolean }[];
  start: string;
  end: string;
  allowVisualizer: boolean;
}

export interface CodeBugConfig {
  prompt: string;
  lines: string[];
  buggyLine: number;
  options: string[];
  answer: string;
  explanation: string;
}

export interface CipherConfig {
  prompt: string;
  ciphertext: string;
  answer: string;
  shift: number;
  mode: 'caesar' | 'a1z26' | 'atbash';
  hint: string;
}

export interface QuizConfig {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
}

export type GameItem =
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'sequence'; config: SequenceConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'robot'; config: RobotConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'match'; config: MatchConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'binary'; config: BinaryConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'logic'; config: LogicConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'sort'; config: SortConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'graph'; config: GraphConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'codebug'; config: CodeBugConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'cipher'; config: CipherConfig }
  | { id: string; num: string; title: string; topic: string; difficulty: string; engine: 'quiz'; config: QuizConfig };

export interface TopicCard {
  title: string;
  summary: string;
  formula: string;
}

export interface GradeCurriculum {
  grade: number;
  label: string;
  stage: string;
  headline: string;
  overview: string;
  topics: TopicCard[];
  games: GameItem[];
}

export const GRADES_CURRICULUM: GradeCurriculum[] = [
  // =========================================================
  // 1-SINF
  // =========================================================
  {
    grade: 1,
    label: '1-sinf',
    stage: 'Boshlang‘ich · 1-daraja',
    headline: 'Kompyuter bilan ilk tanishuv va mantiqiy qadamlar',
    overview: 'Asosiy qurilmalar, shakl va rang naqshlari, oddiy ketma-ketlik hamda sichqoncha-klaviatura ko‘nikmalari.',
    topics: [
      { title: 'Kompyuter qismlari', summary: 'Monitor tasvir ko‘rsatadi, klaviatura harf teradi, sichqoncha esa kursor yordamida boshqaradi.', formula: 'Kiritish -> Qayta ishlash -> Chiqarish' },
      { title: 'Naqsh va ketma-ketlik', summary: 'Takrorlanuvchi shakllar va sonlar qatorini topish algoritmik fikrlashning ilk qadamidir.', formula: '○ △ ○ △ ○ -> ?' },
      { title: 'Oddiy ko‘rsatmalar', summary: 'Robotga aniq qadamlar (o‘ngga, pastga) berib manzilga yetkazish.', formula: 'Qadam 1 -> Qadam 2 -> Natija' },
    ],
    games: [
      {
        id: 'g1-1', num: '01', title: 'Shakl va naqsh zanjiri', topic: 'Ketma-ketlik', difficulty: 'Oson', engine: 'sequence',
        config: {
          prompt: 'Qaysi shakl savol belgisi o‘rniga mos keladi?',
          items: ['●', '▲', '●', '▲', '●', '?'],
          missingIndex: 5,
          options: ['●', '▲', '■', '◆'],
          answer: '▲',
          explanation: 'Naqsh ● va ▲ shakllarining navbatma-navbat almashishidan iborat.'
        }
      },
      {
        id: 'g1-2', num: '02', title: 'Robotni yulduzga elt', topic: 'Ilk algoritm', difficulty: 'Oson', engine: 'robot',
        config: {
          prompt: 'Robotni (0,0) nuqtadan yulduzchaga (2,2) olib boring.',
          size: 4, start: [0, 0], goal: [2, 2], walls: [[1, 0], [1, 1]], maxSteps: 6,
          hint: 'Avval pastga tushib to‘siqni aylanib o‘ting, keyin o‘ngga yuring.'
        }
      },
      {
        id: 'g1-3', num: '03', title: 'Qurilmani vazifasiga bog‘la', topic: 'Kompyuter qismlari', difficulty: 'Oson', engine: 'match',
        config: {
          prompt: 'Kompyuter qismini uning asosiy vazifasi bilan juftlang.',
          pairs: [
            { left: 'Monitor', right: 'Tasvir va matnni ekranda ko‘rsatadi' },
            { left: 'Klaviatura', right: 'Harf va raqamlarni kiritadi' },
            { left: 'Sichqoncha', right: 'Ekrandagi kursorni boshqaradi' },
            { left: 'Printer', right: 'Hujjatni qog‘ozga chop etadi' }
          ]
        }
      },
      {
        id: 'g1-4', num: '04', title: '3-bitli chiroqlar sanoqi', topic: 'Bit asoslari', difficulty: 'Oson', engine: 'binary',
        config: {
          prompt: '3 ta chiroq yordamida 5 sonini yoqing (4 + 1 = 5).',
          bits: 3, target: 5, displayBase: 'dec',
          hint: '4 va 1 qiymatli chiroqlarni yoqing, 2 ni o‘chiq qoldiring.'
        }
      },
      {
        id: 'g1-5', num: '05', title: 'Ha yoki Yo‘q sharti', topic: 'Mantiq asoslari', difficulty: 'Oson', engine: 'logic',
        config: {
          prompt: 'Ikki tugma ham yoqilganda chiroq yonishi uchun AND elementini tanlang.',
          slots: ['OR'],
          choices: [['AND', 'OR']],
          rows: [[0,0,0,0],[0,1,0,0],[1,0,0,0],[1,1,0,1]],
          labels: ['Tugma A', 'Tugma B', 'Zaxira']
        }
      },
      {
        id: 'g1-6', num: '06', title: 'Sonlarni kichikdan kattaga', topic: 'Tartiblash', difficulty: 'Oson', engine: 'sort',
        config: {
          prompt: 'Sonlarni o‘sish tartibida joylashtiring.',
          items: [
            { label: '9', value: 9 }, { label: '2', value: 2 }, { label: '7', value: 7 }, { label: '4', value: 4 }
          ],
          enableVisualizer: false,
          hint: 'Eng kichik son 2 ni chap boshiga olib keling.'
        }
      },
      {
        id: 'g1-7', num: '07', title: 'Eng yaqin uy yo‘li', topic: 'Yo‘nalish topish', difficulty: 'Oson', engine: 'graph',
        config: {
          prompt: 'A nuqtadan D nuqtaga eng qisqa masofada boring.',
          nodes: [{ id: 'A', x: 90, y: 140 }, { id: 'B', x: 300, y: 65 }, { id: 'C', x: 300, y: 215 }, { id: 'D', x: 520, y: 140 }],
          edges: [{ u: 'A', v: 'B', w: 3 }, { u: 'A', v: 'C', w: 6 }, { u: 'B', v: 'D', w: 4 }, { u: 'C', v: 'D', w: 5 }],
          start: 'A', end: 'D', allowVisualizer: false
        }
      },
      {
        id: 'g1-8', num: '08', title: 'Kundalik tartibdagi xato', topic: 'Algoritm tartibi', difficulty: 'Oson', engine: 'codebug',
        config: {
          prompt: 'Maktabga tayyorlanish algoritmidagi noto‘g‘ri qadamni tuzating.',
          lines: [
            '1. Uyg‘onish va yuvinish',
            '2. Kiyinish',
            '3. Chiroqni o‘chirib uxlash',
            '4. Sumkani olib maktabga chiqish'
          ],
          buggyLine: 2,
          options: ['3. Nonushta qilish', '3. Chiroqni o‘chirib uxlash', '3. Yana uxlash'],
          answer: '3. Nonushta qilish',
          explanation: 'Maktabga ketishdan oldin uxlash emas, nonushta qilish kerak.'
        }
      },
      {
        id: 'g1-9', num: '09', title: 'Raqamli maxfiy so‘z', topic: 'Ilk kodlash', difficulty: 'Oson', engine: 'cipher',
        config: {
          prompt: 'Harf tartibi bo‘yicha (A=1, B=2, C=3...) 11-15-4 raqamli so‘zni toping.',
          ciphertext: '11-15-4', answer: 'KOD', shift: 0, mode: 'a1z26',
          hint: '11 = K, 15 = O, 4 = D.'
        }
      },
      {
        id: 'g1-10', num: '10', title: '1-sinf bilimlari sinovi', topic: 'Umumiy test', difficulty: 'Oson', engine: 'quiz',
        config: {
          prompt: 'Ekranda matn va rasmlarni ko‘rish uchun qaysi qurilma kerak?',
          options: ['Monitor', 'Printer', 'Kolonka', 'Skaner'],
          answer: 0,
          explanation: 'Monitor kompyuterdagi barcha tasvir va matnlarni ko‘rsatib beruvchi asosiy qurilmadir.'
        }
      }
    ]
  },

  // =========================================================
  // 2-SINF
  // =========================================================
  {
    grade: 2,
    label: '2-sinf',
    stage: 'Boshlang‘ich · 2-daraja',
    headline: 'Axborot turlari va boshlang‘ich blok-sxemalar',
    overview: 'Matn, son, tovush va grafik axborot, kiritish/chiqarish qurilmalari hamda ikki bosqichli algoritmlar.',
    topics: [
      { title: 'Axborot turlari', summary: 'Inson axborotni ko‘rish, eshitish, hid bilish va sezish orqali oladi; kompyuter esa matn, son, rasm va tovush ko‘rinishida saqlaydi.', formula: 'Matn · Son · Rasm · Tovush' },
      { title: 'Kiritish va chiqarish', summary: 'Mikrofon tovush kiritadi, karnay esa chiqaradi. Skaner rasmni kompyuterga kiritadi.', formula: 'Input (Kiritish) -> Output (Chiqarish)' },
      { title: 'Sonli ketma-ketlik', summary: 'Har bir keyingi son ma’lum qoida asosida ortadi yoki kamayadi.', formula: '+2, +3, +5 qonuniyatlari' },
    ],
    games: [
      {
        id: 'g2-1', num: '01', title: 'Ikki qadamli son qatori', topic: 'Qonuniyat', difficulty: 'Oson', engine: 'sequence',
        config: {
          prompt: 'Bo‘sh katakdagi sonni toping (+3 qonuniyati).',
          items: ['3', '6', '9', '?', '15'],
          missingIndex: 3, options: ['11', '12', '13', '14'], answer: '12',
          explanation: 'Har bir keyingi son oldingisidan 3 taga katta: 9 + 3 = 12.'
        }
      },
      {
        id: 'g2-2', num: '02', title: 'To‘siqli robot marshruti', topic: 'Harakat algoritmi', difficulty: 'Oson', engine: 'robot',
        config: {
          prompt: 'Robotni (0,3) dan (3,0) dagi nishonga olib chiqing.',
          size: 4, start: [0, 3], goal: [3, 0], walls: [[1, 2], [2, 2], [2, 1]], maxSteps: 8,
          hint: 'Chap chetdan yuqoriga ko‘tariling va yuqori qatordan o‘ngga yuring.'
        }
      },
      {
        id: 'g2-3', num: '03', title: 'Axborot turlari va sezgilar', topic: 'Axborot turlari', difficulty: 'Oson', engine: 'match',
        config: {
          prompt: 'Axborot turini unga mos misol bilan bog‘lang.',
          pairs: [
            { left: 'Matnli axborot', right: 'Kitobdagi ertak matni' },
            { left: 'Grafik axborot', right: 'Tabiat manzarasi rasmi' },
            { left: 'Tovushli axborot', right: 'Musiqa va qushlar sayrashi' },
            { left: 'Sonli axborot', right: 'Sinfdagi o‘quvchilar soni' }
          ]
        }
      },
      {
        id: 'g2-4', num: '04', title: '4-bitli sanoq taxtasi', topic: 'Ikkilik kirish', difficulty: 'Oson', engine: 'binary',
        config: {
          prompt: '4 ta bit yordamida 11 sonini hosil qiling.',
          bits: 4, target: 11, displayBase: 'dec',
          hint: '8 + 2 + 1 = 11.'
        }
      },
      {
        id: 'g2-5', num: '05', title: 'YOKI (OR) eshikchasi', topic: 'Mantiq', difficulty: 'Oson', engine: 'logic',
        config: {
          prompt: 'Kamida bitta kalit bosilsa chiroq yonishi uchun OR elementini tanlang.',
          slots: ['AND'],
          choices: [['AND', 'OR']],
          rows: [[0,0,0,0],[0,1,0,1],[1,0,0,1],[1,1,0,1]],
          labels: ['Kalit 1', 'Kalit 2', 'Zaxira']
        }
      },
      {
        id: 'g2-6', num: '06', title: 'O‘lcham bo‘yicha tartiblash', topic: 'Taqqoslash', difficulty: 'Oson', engine: 'sort',
        config: {
          prompt: 'Sonlarni eng kichigidan eng kattasiga tartiblang.',
          items: [
            { label: '25', value: 25 }, { label: '10', value: 10 }, { label: '40', value: 40 }, { label: '15', value: 15 }, { label: '5', value: 5 }
          ],
          enableVisualizer: false,
          hint: 'Eng kichik 5 ni birinchi o‘ringa qo‘ying.'
        }
      },
      {
        id: 'g2-7', num: '07', title: 'Maktabga qisqa yo‘l', topic: 'Tarmoq yo‘li', difficulty: 'Oson', engine: 'graph',
        config: {
          prompt: 'A dan E gacha eng kam daqiqada yetib boring.',
          nodes: [
            { id: 'A', x: 80, y: 140 }, { id: 'B', x: 240, y: 65 }, { id: 'C', x: 240, y: 215 },
            { id: 'D', x: 400, y: 140 }, { id: 'E', x: 550, y: 140 }
          ],
          edges: [
            { u: 'A', v: 'B', w: 4 }, { u: 'A', v: 'C', w: 2 },
            { u: 'B', v: 'D', w: 5 }, { u: 'C', v: 'D', w: 3 }, { u: 'D', v: 'E', w: 4 }
          ],
          start: 'A', end: 'E', allowVisualizer: false
        }
      },
      {
        id: 'g2-8', num: '08', title: 'Choy damlash algoritmi', topic: 'Xatoni topish', difficulty: 'Oson', engine: 'codebug',
        config: {
          prompt: 'Algoritmdagi mantiqan noto‘g‘ri qadamni almashtiring.',
          lines: [
            '1. Choynakka suv quyish',
            '2. Quruq choyni muzlatkichga qo‘yish',
            '3. Suv qaynagach choy damlash',
            '4. Piyolaga quyish'
          ],
          buggyLine: 1,
          options: ['2. Suvni qaynatish uchun gazga qo‘yish', '2. Quruq choyni muzlatkichga qo‘yish', '2. Choynakni yuvmaslik'],
          answer: '2. Suvni qaynatish uchun gazga qo‘yish',
          explanation: 'Choy damlash uchun suvni avval qaynatish lozim.'
        }
      },
      {
        id: 'g2-9', num: '09', title: 'Sezar siljishi (+1)', topic: 'Shifr', difficulty: 'Oson', engine: 'cipher',
        config: {
          prompt: 'Har bir harfni alifboda 1 ta orqaga surib asl so‘zni toping: L-P-E -> ?',
          ciphertext: 'LPE', answer: 'KOD', shift: 1, mode: 'caesar',
          hint: 'Siljish kalitini 1 ga sozlang: L->K, P->O, E->D.'
        }
      },
      {
        id: 'g2-10', num: '10', title: '2-sinf bilimlari sinovi', topic: 'Viktorina', difficulty: 'Oson', engine: 'quiz',
        config: {
          prompt: 'Qaysi qurilma axborotni kompyuterga KIRITISH vazifasini bajaradi?',
          options: ['Mikrofon', 'Monitor', 'Printer', 'Kolonka'],
          answer: 0,
          explanation: 'Mikrofon tashqi tovush axborotini kompyuterga kiritadi; qolganlari chiqarish qurilmalaridir.'
        }
      }
    ]
  },

  // =========================================================
  // 3-SINF
  // =========================================================
  {
    grade: 3,
    label: '3-sinf',
    stage: 'Boshlang‘ich · 3-daraja',
    headline: 'Algoritm turlari, fayl va papkalar, matn muharriri',
    overview: 'Chiziqli, tarmoqlanuvchi va takrorlanuvchi algoritmlar, fayl-papka iyerarxiyasi hamda klaviatura tezkor tugmalari.',
    topics: [
      { title: 'Algoritm ijrochisi', summary: 'Har bir ijrochi faqat o‘zining buyruqlar tizimidagi aniq ko‘rsatmalarni bajaradi.', formula: 'Boshlanish -> Buyruqlar -> Tugallanish' },
      { title: 'Fayl va papkalar', summary: 'Fayllar tartib bilan papkalarda saqlanadi. Har bir faylning nomi va kengaytmasi bo‘ladi.', formula: 'Hujjat.docx · Rasm.png' },
      { title: 'Tarmoqlanish (Agar)', summary: 'Shart bajarilsa bir yo‘ldan, aks holda boshqa yo‘ldan borish.', formula: 'AGAR shart BO‘LSA A AKS HOLDA B' },
    ],
    games: [
      {
        id: 'g3-1', num: '01', title: 'Ko‘payuvchi sonlar zanjiri', topic: 'Sikl qonuniyati', difficulty: 'Oson', engine: 'sequence',
        config: {
          prompt: 'Har safar 2 ga ko‘payayotgan ketma-ketlikni davom ettiring.',
          items: ['2', '4', '8', '16', '?'],
          missingIndex: 4, options: ['24', '30', '32', '64'], answer: '32',
          explanation: 'Har bir element oldingisidan 2 marta katta: 16 × 2 = 32.'
        }
      },
      {
        id: 'g3-2', num: '02', title: 'Sikl bilan labirint', topic: 'Algoritm ijrochisi', difficulty: 'Oson', engine: 'robot',
        config: {
          prompt: '5×5 maydonda to‘siqlardan o‘tib bayroqchaga yeting.',
          size: 5, start: [0, 0], goal: [4, 4], walls: [[1,0],[1,1],[1,2],[3,4],[3,3],[3,2]], maxSteps: 12,
          hint: 'Pastga tushib o‘rtadan o‘ting, keyin yuqoriga va o‘ngga harakatlaning.'
        }
      },
      {
        id: 'g3-3', num: '03', title: 'Fayl kengaytmalarini top', topic: 'Fayl tizimi', difficulty: 'Oson', engine: 'match',
        config: {
          prompt: 'Fayl kengaytmasini uning turiga moslashtiring.',
          pairs: [
            { left: '.txt', right: 'Oddiy matnli fayl' },
            { left: '.png', right: 'Rastrli rasm fayli' },
            { left: '.mp3', right: 'Ovozli audio fayl' },
            { left: '.mp4', right: 'Video tasvir fayli' }
          ]
        }
      },
      {
        id: 'g3-4', num: '04', title: '4-bit bilan kodlash', topic: 'Sanoq sistemasi', difficulty: 'Oson', engine: 'binary',
        config: {
          prompt: '4 ta bit kaliti bilan 14 sonini yig‘ing.',
          bits: 4, target: 14, displayBase: 'dec',
          hint: '8 + 4 + 2 = 14 (faqat 1-bit o‘chiq).'
        }
      },
      {
        id: 'g3-5', num: '05', title: 'Shartli darvoza (AND / OR)', topic: 'Tarmoqlanish', difficulty: 'Oson', engine: 'logic',
        config: {
          prompt: 'Har ikkala shart ham bajarilganda chiqish 1 bo‘lsin.',
          slots: ['OR'],
          choices: [['AND', 'OR', 'XOR']],
          rows: [[0,0,0,0],[0,1,0,0],[1,0,0,0],[1,1,0,1]],
          labels: ['Shart A', 'Shart B', 'Zaxira']
        }
      },
      {
        id: 'g3-6', num: '06', title: 'Alifbo va hajm tartibi', topic: 'Tartiblash', difficulty: 'Oson', engine: 'sort',
        config: {
          prompt: 'Fayl hajmlarini kichikdan kattaga tartiblang.',
          items: [
            { label: '120', value: 120 }, { label: '18', value: 18 }, { label: '64', value: 64 }, { label: '32', value: 32 }, { label: '90', value: 90 }
          ],
          enableVisualizer: false,
          hint: '18 -> 32 -> 64 -> 90 -> 120 tartibini quring.'
        }
      },
      {
        id: 'g3-7', num: '07', title: 'Papkadan papkaga yo‘l', topic: 'Graf asoslari', difficulty: 'Oson', engine: 'graph',
        config: {
          prompt: 'A papkadan F faylga eng qisqa yo‘lni toping.',
          nodes: [
            { id: 'A', x: 75, y: 140 }, { id: 'B', x: 230, y: 60 }, { id: 'C', x: 230, y: 220 },
            { id: 'D', x: 390, y: 60 }, { id: 'E', x: 390, y: 220 }, { id: 'F', x: 550, y: 140 }
          ],
          edges: [
            { u: 'A', v: 'B', w: 5 }, { u: 'A', v: 'C', w: 3 },
            { u: 'B', v: 'D', w: 2 }, { u: 'C', v: 'E', w: 4 },
            { u: 'D', v: 'F', w: 6 }, { u: 'E', v: 'F', w: 2 }, { u: 'C', v: 'D', w: 5 }
          ],
          start: 'A', end: 'F', allowVisualizer: false
        }
      },
      {
        id: 'g3-8', num: '08', title: 'Sikl chegarasidagi xato', topic: 'Debugging', difficulty: 'Oson', engine: 'codebug',
        config: {
          prompt: 'Kvadrat chizish uchun nechta marta takrorlash kerak?',
          lines: [
            'Boshlash',
            'Takrorla 3 marta:',
            '  Oldinga 50 qadam yur',
            '  O‘ngga 90° buril'
          ],
          buggyLine: 1,
          options: ['Takrorla 4 marta:', 'Takrorla 3 marta:', 'Takrorla 2 marta:'],
          answer: 'Takrorla 4 marta:',
          explanation: 'Kvadratning 4 ta tomoni bor, shuning uchun sikl 4 marta bajarilishi shart.'
        }
      },
      {
        id: 'g3-9', num: '09', title: 'Alifbo shifri (+2)', topic: 'Kodlash', difficulty: 'Oson', engine: 'cipher',
        config: {
          prompt: 'Kalit = 2 bilan shifrlangan F-C-N-O so‘zini oching.',
          ciphertext: 'FCNO', answer: 'DALM', shift: 2, mode: 'caesar',
          hint: 'Siljish = 2: F->D, C->A, N->L, O->M.'
        }
      },
      {
        id: 'g3-10', num: '10', title: '3-sinf tezkor viktorina', topic: 'Tezkor tugmalar', difficulty: 'Oson', engine: 'quiz',
        config: {
          prompt: 'Matn muharririda nusxa olish (Copy) uchun qaysi tugmalar bosiladi?',
          options: ['Ctrl + C', 'Ctrl + V', 'Ctrl + Z', 'Ctrl + X'],
          answer: 0,
          explanation: 'Ctrl + C nusxa oladi, Ctrl + V esa nusxani joylaydi.'
        }
      }
    ]
  },

  // =========================================================
  // 4-SINF
  // =========================================================
  {
    grade: 4,
    label: '4-sinf',
    stage: 'Boshlang‘ich · 4-daraja',
    headline: 'Scratch blokli dasturlash, koordinatalar va xato izlash',
    overview: 'Blokli kodlash, X/Y koordinata tekisligi, takrorlanish sikllari, xotira o‘lchov birliklari va birinchi dasturlar.',
    topics: [
      { title: 'Koordinata tekisligi', summary: 'Sahnadagi har bir obyekt o‘rni (X, Y) koordinatalari bilan belgilanadi: X gorizontal, Y vertikal.', formula: 'Markaz: (0, 0) · O‘ngga: +X' },
      { title: 'Blokli algoritm (Scratch)', summary: 'Voqea, harakat, shart va sikl bloklarini ketma-ket ulab interaktiv o‘yinlar yaratiladi.', formula: 'Bayroq bosilganda -> Har doim -> Agar' },
      { title: 'Xotira birliklari', summary: 'Eng kichik birlik bit, 8 bit esa 1 baytni tashkil qiladi.', formula: '1 Bayt = 8 bit · 1 KB = 1024 Bayt' },
    ],
    games: [
      {
        id: 'g4-1', num: '01', title: 'Koordinata sakrashi', topic: 'Koordinatalar', difficulty: 'O‘rta', engine: 'sequence',
        config: {
          prompt: 'Robot har qadamda X ga +15, Y ga +10 qo‘shadi. 4-nuqtani toping.',
          items: ['(0,0)', '(15,10)', '(30,20)', '?', '(60,40)'],
          missingIndex: 3, options: ['(40,30)', '(45,30)', '(45,25)', '(50,30)'], answer: '(45,30)',
          explanation: '30 + 15 = 45 (X), 20 + 10 = 30 (Y).'
        }
      },
      {
        id: 'g4-2', num: '02', title: 'Scratch sahna marshruti', topic: 'Blokli harakat', difficulty: 'O‘rta', engine: 'robot',
        config: {
          prompt: 'Qahramonni (0,4) dan (4,0) ga minimal qadamda olib boring.',
          size: 5, start: [0, 4], goal: [4, 0], walls: [[1,3],[2,3],[2,2],[3,1]], maxSteps: 10,
          hint: 'Chap qirg‘oqdan yuqoriga ko‘tariling va yuqoridan o‘ngga o‘ting.'
        }
      },
      {
        id: 'g4-3', num: '03', title: 'Tezkor tugmalar juftligi', topic: 'Klaviatura mahorati', difficulty: 'Oson', engine: 'match',
        config: {
          prompt: 'Klaviatura kombinatsiyalarini vazifasi bilan bog‘lang.',
          pairs: [
            { left: 'Ctrl + S', right: 'Hujjatni saqlash' },
            { left: 'Ctrl + Z', right: 'Oxirgi amalni bekor qilish' },
            { left: 'Ctrl + V', right: 'Nusxalangan matnni joylash' },
            { left: 'Ctrl + A', right: 'Barchasini belgilash' }
          ]
        }
      },
      {
        id: 'g4-4', num: '04', title: '5-bitli sirli kod', topic: 'Ikkilik sanoq', difficulty: 'O‘rta', engine: 'binary',
        config: {
          prompt: '5 ta bit (16, 8, 4, 2, 1) yordamida 21 sonini yig‘ing.',
          bits: 5, target: 21, displayBase: 'dec',
          hint: '16 + 4 + 1 = 21.'
        }
      },
      {
        id: 'g4-5', num: '05', title: 'XOR — bir xil emas', topic: 'Mantiqiy elementlar', difficulty: 'O‘rta', engine: 'logic',
        config: {
          prompt: 'Kirishlar turlicha bo‘lganda 1 chiqaruvchi XOR elementini tanlang.',
          slots: ['AND'],
          choices: [['AND', 'OR', 'XOR', 'NAND']],
          rows: [[0,0,0,0],[0,1,0,1],[1,0,0,1],[1,1,0,0]],
          labels: ['Pin A', 'Pin B', 'Zaxira']
        }
      },
      {
        id: 'g4-6', num: '06', title: 'Xotira birliklarini tartibla', topic: 'Axborot o‘lchovi', difficulty: 'O‘rta', engine: 'sort',
        config: {
          prompt: 'Xotira birliklarini eng kichigidan eng kattasiga tartiblang.',
          items: [
            { label: 'MB', value: 40 }, { label: 'bit', value: 1 }, { label: 'GB', value: 80 }, { label: 'Bayt', value: 8 }, { label: 'KB', value: 20 }
          ],
          enableVisualizer: false,
          hint: 'Tartib: bit < Bayt < KB < MB < GB.'
        }
      },
      {
        id: 'g4-7', num: '07', title: 'Blokli yo‘l xaritasi', topic: 'Eng qisqa yo‘l', difficulty: 'O‘rta', engine: 'graph',
        config: {
          prompt: 'A dan F gacha eng arzon yo‘lni toping.',
          nodes: [
            { id: 'A', x: 75, y: 140 }, { id: 'B', x: 230, y: 58 }, { id: 'C', x: 230, y: 222 },
            { id: 'D', x: 400, y: 58 }, { id: 'E', x: 400, y: 222 }, { id: 'F', x: 560, y: 140 }
          ],
          edges: [
            { u: 'A', v: 'B', w: 2 }, { u: 'A', v: 'C', w: 7 },
            { u: 'B', v: 'D', w: 6 }, { u: 'B', v: 'E', w: 3 },
            { u: 'C', v: 'E', w: 2 }, { u: 'D', v: 'F', w: 3 }, { u: 'E', v: 'F', w: 4 }
          ],
          start: 'A', end: 'F', allowVisualizer: false
        }
      },
      {
        id: 'g4-8', num: '08', title: 'Scratch o‘yin xatosi', topic: 'Debugging', difficulty: 'O‘rta', engine: 'codebug',
        config: {
          prompt: 'O‘yinchi tangaga tekkanda ball kamayib ketmoqda. Xato qatorni tuzating.',
          lines: [
            'Agar <tangaga tegsa> bo‘lsa:',
            '  ballni -1 ga o‘zgartir',
            '  tangani yashir',
            '  tovush chal'
          ],
          buggyLine: 1,
          options: ['  ballni +1 ga o‘zgartir', '  ballni -1 ga o‘zgartir', '  ballni 0 qil'],
          answer: '  ballni +1 ga o‘zgartir',
          explanation: 'Tanga yig‘ilganda ball kamayishi emas, +1 ga ortishi kerak.'
        }
      },
      {
        id: 'g4-9', num: '09', title: 'Sezar shifri (+3)', topic: 'Kriptografiya kirish', difficulty: 'O‘rta', engine: 'cipher',
        config: {
          prompt: 'Kalit = 3 yordamida E-L-W shifrlangan so‘zini oching.',
          ciphertext: 'ELW', answer: 'BIT', shift: 3, mode: 'caesar',
          hint: 'Siljish = 3: E->B, L->I, W->T.'
        }
      },
      {
        id: 'g4-10', num: '10', title: '4-sinf viktorina', topic: 'Asosiy bilimlar', difficulty: 'O‘rta', engine: 'quiz',
        config: {
          prompt: '1 Bayt nechta bitga teng?',
          options: ['8 bit', '4 bit', '16 bit', '1024 bit'],
          answer: 0,
          explanation: 'Standart bo‘yicha 1 Bayt = 8 bit (masalan, 1 ta belgini kodlash uchun yetarli).'
        }
      }
    ]
  },

  // =========================================================
  // 5-SINF
  // =========================================================
  {
    grade: 5,
    label: '5-sinf',
    stage: 'O‘rta · 5-daraja',
    headline: 'Axborot o‘lchovi, jadvallar va ikkilik sanoq sistemasi',
    overview: 'Axborot hajmini hisoblash, elektron jadvallar (kataklar va formulalar), 6-bitli sanoq hamda mantiqiy mulohazalar.',
    topics: [
      { title: 'Axborot hajmi formulasi', summary: 'Har bir belgi ASCII da 1 bayt (8 bit) joy egallaydi. Matn hajmi belgilar soniga teng.', formula: 'Hajm (bit) = Belgilar × 8' },
      { title: 'Elektron jadval kataklari', summary: 'Ustunlar harf (A, B, C), qatorlar raqam (1, 2, 3) bilan belgilanadi; formulalar = bilan boshlanadi.', formula: '=SUM(A1:A5) · =AVERAGE(B1:B4)' },
      { title: '2-lik sanoq sistemasi', summary: 'Faqat 0 va 1 raqamlari ishlatiladi. Har bir xona 2 ning darajasini bildiradi.', formula: '1010₂ = 8 + 2 = 10₁₀' },
    ],
    games: [
      {
        id: 'g5-1', num: '01', title: 'Fibonachchi qonuniyati', topic: 'Sonli algoritmlar', difficulty: 'O‘rta', engine: 'sequence',
        config: {
          prompt: 'Har bir son oldingi ikkita sonning yig‘indisiga teng. Keyingisini toping.',
          items: ['1', '1', '2', '3', '5', '8', '?'],
          missingIndex: 6, options: ['11', '12', '13', '15'], answer: '13',
          explanation: '5 + 8 = 13 (Mashhur Fibonachchi ketma-ketligi).'
        }
      },
      {
        id: 'g5-2', num: '02', title: 'Qopqonli labirint', topic: 'Optimallashtirish', difficulty: 'O‘rta', engine: 'robot',
        config: {
          prompt: 'Robotni maksimal 9 qadam ichida (0,0) dan (4,3) ga olib boring.',
          size: 5, start: [0, 0], goal: [4, 3], walls: [[1,0],[1,1],[2,3],[3,1],[3,2]], maxSteps: 9,
          hint: 'Pastga 2 qadam, keyin o‘ngga harakatlanib o‘rta yo‘lakdan o‘ting.'
        }
      },
      {
        id: 'g5-3', num: '03', title: 'Elektron jadval formulalari', topic: 'Jadvallar', difficulty: 'O‘rta', engine: 'match',
        config: {
          prompt: 'Jadval formulasini uning vazifasi bilan bog‘lang.',
          pairs: [
            { left: '=SUM(A1:A5)', right: 'Kataklar yig‘indisini hisoblaydi' },
            { left: '=MAX(A1:A5)', right: 'Eng katta qiymatni topadi' },
            { left: '=MIN(A1:A5)', right: 'Eng kichik qiymatni topadi' },
            { left: '=AVERAGE(A1:A5)', right: 'O‘rtacha qiymatni topadi' }
          ]
        }
      },
      {
        id: 'g5-4', num: '04', title: '6-bitli ikkilik dekoder', topic: '2-lik sistema', difficulty: 'O‘rta', engine: 'binary',
        config: {
          prompt: '6 ta bit yordamida 45 sonini hosil qiling.',
          bits: 6, target: 45, displayBase: 'dec',
          hint: '32 + 8 + 4 + 1 = 45.'
        }
      },
      {
        id: 'g5-5', num: '05', title: 'NAND — teskari VA', topic: 'Mantiqiy sxema', difficulty: 'O‘rta', engine: 'logic',
        config: {
          prompt: 'Faqat A=1 va B=1 bo‘lganda 0 chiqaradigan NAND elementini tanlang.',
          slots: ['AND'],
          choices: [['AND', 'OR', 'XOR', 'NAND']],
          rows: [[0,0,0,1],[0,1,0,1],[1,0,0,1],[1,1,0,0]],
          labels: ['A', 'B', 'C']
        }
      },
      {
        id: 'g5-6', num: '06', title: 'Minimal almashuv saralashi', topic: 'Saralash', difficulty: 'O‘rta', engine: 'sort',
        config: {
          prompt: '6 ta sonni eng kam almashuvda tartiblang.',
          items: [
            { label: '50', value: 50 }, { label: '12', value: 12 }, { label: '88', value: 88 },
            { label: '34', value: 34 }, { label: '21', value: 21 }, { label: '65', value: 65 }
          ],
          enableVisualizer: true,
          hint: 'Ikkita ustunni ketma-ket bosib o‘rnini almashtiring yoki vizualizatorni ishga tushiring.'
        }
      },
      {
        id: 'g5-7', num: '07', title: 'Tarmoq tugunlari marshruti', topic: 'Graf yo‘li', difficulty: 'O‘rta', engine: 'graph',
        config: {
          prompt: 'Bloklangan kanalni chetlab A dan F gacha eng qisqa yo‘lni toping.',
          nodes: [
            { id: 'A', x: 75, y: 140 }, { id: 'B', x: 225, y: 58 }, { id: 'C', x: 225, y: 222 },
            { id: 'D', x: 400, y: 58 }, { id: 'E', x: 400, y: 222 }, { id: 'F', x: 560, y: 140 }
          ],
          edges: [
            { u: 'A', v: 'B', w: 4 }, { u: 'A', v: 'C', w: 6 },
            { u: 'B', v: 'D', w: 3, blocked: true }, { u: 'B', v: 'E', w: 5 },
            { u: 'C', v: 'E', w: 2 }, { u: 'D', v: 'F', w: 4 }, { u: 'E', v: 'F', w: 4 }, { u: 'B', v: 'C', w: 2 }
          ],
          start: 'A', end: 'F', allowVisualizer: true
        }
      },
      {
        id: 'g5-8', num: '08', title: 'Jadval formulasi xatosi', topic: 'Formula tuzatish', difficulty: 'O‘rta', engine: 'codebug',
        config: {
          prompt: 'Jadval katagida formula matn sifatida chiqib qoldi. Nima yetishmayapti?',
          lines: [
            'Katak A1: 15',
            'Katak A2: 25',
            'Katak A3: SUM(A1:A2)',
            'Kutilgan natija: 40'
          ],
          buggyLine: 2,
          options: ['Katak A3: =SUM(A1:A2)', 'Katak A3: SUM(A1:A2)', 'Katak A3: +SUM(A1+A2)'],
          answer: 'Katak A3: =SUM(A1:A2)',
          explanation: 'Elektron jadvallarda har qanday formula = (tenglik) belgisi bilan boshlanishi shart.'
        }
      },
      {
        id: 'g5-9', num: '09', title: 'Atbash ko‘zgu shifri', topic: 'Shifrlash', difficulty: 'O‘rta', engine: 'cipher',
        config: {
          prompt: 'Teskari alifbo (A↔Z, B↔Y...) usulida kodlangan YRG so‘zini oching.',
          ciphertext: 'YRG', answer: 'BIT', shift: 0, mode: 'atbash',
          hint: 'Y=B (25↔2), R=I (18↔9), G=T (7↔20).'
        }
      },
      {
        id: 'g5-10', num: '10', title: '5-sinf bilimlari sinovi', topic: 'Axborot hajmi', difficulty: 'O‘rta', engine: 'quiz',
        config: {
          prompt: '"INFORMATIKA" so‘zi (11 ta belgi) ASCII kodlashda necha bayt joy egallaydi?',
          options: ['11 bayt', '88 bayt', '22 bayt', '11 kilobayt'],
          answer: 0,
          explanation: 'ASCII jadvalida 1 ta belgi 1 bayt (8 bit) joy oladi, demak 11 ta belgi = 11 bayt.'
        }
      }
    ]
  },

  // =========================================================
  // 6-SINF
  // =========================================================
  {
    grade: 6,
    label: '6-sinf',
    stage: 'O‘rta · 6-daraja',
    headline: 'Python kirish, o‘zgaruvchilar, sikllar va sanoq sistemalari',
    overview: 'Pythonda ilk dasturlar, print/input, o‘zgaruvchilar, 8-lik va 2-lik sanoq sistemalari hamda murakkab shartlar.',
    topics: [
      { title: 'Pythonda o‘zgaruvchi', summary: 'O‘zgaruvchi qiymat saqlaydigan nomlangan xotira katagidir: son, matn (str) yoki mantiqiy (bool).', formula: 'x = 12 · nom = "Ali"' },
      { title: 'for va while sikllari', summary: 'Takrorlanuvchi amallarni qisqa kodda yozish uchun range() va for siklidan foydalaniladi.', formula: 'for i in range(5): print(i)' },
      { title: '8-lik va 2-lik aloqasi', summary: '8-lik sanoq sistemasida 0..7 raqamlari ishlatiladi, har bir xonasi 8 darajasi bilan ko‘payadi.', formula: '25₈ = 2×8 + 5 = 21₁₀' },
    ],
    games: [
      {
        id: 'g6-1', num: '01', title: 'Python range() natijasi', topic: 'Sikllar', difficulty: 'O‘rta', engine: 'sequence',
        config: {
          prompt: 'for i in range(2, 11, 2): kodining chiqaradigan ketma-ketligini to‘ldiring.',
          items: ['2', '4', '6', '?', '10'],
          missingIndex: 3, options: ['7', '8', '9', '12'], answer: '8',
          explanation: 'range(2, 11, 2) 2 dan boshlab 2 qadam bilan 11 gacha (11 kirmaydi) sonlarni beradi.'
        }
      },
      {
        id: 'g6-2', num: '02', title: '6×6 Python roboti', topic: 'Algoritm', difficulty: 'O‘rta', engine: 'robot',
        config: {
          prompt: '6×6 maydondagi to‘siqlar orasidan o‘tib nishonga yeting.',
          size: 6, start: [0, 5], goal: [5, 0], walls: [[1,5],[1,4],[1,3],[3,0],[3,1],[3,2],[4,4]], maxSteps: 13,
          hint: 'O‘ngga 2, tepaga 3, keyin o‘ngga va tepaga burilib yo‘l toping.'
        }
      },
      {
        id: 'g6-3', num: '03', title: 'Python ma’lumot turlari', topic: 'Dasturlash asoslari', difficulty: 'O‘rta', engine: 'match',
        config: {
          prompt: 'Qiymatni Python ma’lumot turiga moslashtiring.',
          pairs: [
            { left: '42', right: 'int (Butun son)' },
            { left: '3.14', right: 'float (Haqiqiy son)' },
            { left: '"Salom"', right: 'str (Matn satri)' },
            { left: 'True', right: 'bool (Mantiqiy qiymat)' }
          ]
        }
      },
      {
        id: 'g6-4', num: '04', title: '7-bitli ASCII harf kodi', topic: 'Ikkilik & ASCII', difficulty: 'O‘rta', engine: 'binary',
        config: {
          prompt: 'ASCII jadvalida "A" harfi 65 ga teng. 7 ta bit bilan 65 ni tering.',
          bits: 7, target: 65, displayBase: 'dec',
          hint: '64 + 1 = 65 (eng chap va eng o‘ng bitlar).'
        }
      },
      {
        id: 'g6-5', num: '05', title: 'Ikki bosqichli mantiqiy qulf', topic: 'Murakkab shart', difficulty: 'O‘rta', engine: 'logic',
        config: {
          prompt: '(A [E1] B) [E2] C = 1 bo‘lsin: C=1 va (A yoki B)=1 bo‘lganda ruxsat bersin.',
          slots: ['AND', 'OR'],
          choices: [['AND', 'OR', 'XOR'], ['AND', 'OR', 'NAND']],
          rows: [[0,0,1,0],[0,1,1,1],[1,0,0,0],[1,1,1,1]],
          labels: ['A', 'B', 'C']
        }
      },
      {
        id: 'g6-6', num: '06', title: 'Bubble Sort bilan tanishuv', topic: 'Saralash', difficulty: 'O‘rta', engine: 'sort',
        config: {
          prompt: 'Massivni minimal almashuvda tartiblang yoki Bubble Sort ni tomosha qiling.',
          items: [
            { label: '72', value: 72 }, { label: '19', value: 19 }, { label: '45', value: 45 },
            { label: '91', value: 91 }, { label: '28', value: 28 }, { label: '55', value: 55 }
          ],
          enableVisualizer: true,
          hint: 'Juft-juft solishtirish qanday ishlashini ko‘rish uchun "Ishga tushirish"ni bosing.'
        }
      },
      {
        id: 'g6-7', num: '07', title: 'Ma’lumot paketi marshruti', topic: 'Graf marshruti', difficulty: 'O‘rta', engine: 'graph',
        config: {
          prompt: 'A dan G tugungacha eng kam kechikish (ms) yo‘lini toping.',
          nodes: [
            { id: 'A', x: 70, y: 140 }, { id: 'B', x: 205, y: 58 }, { id: 'C', x: 205, y: 222 },
            { id: 'D', x: 350, y: 140 }, { id: 'E', x: 465, y: 58 }, { id: 'F', x: 465, y: 222 }, { id: 'G', x: 575, y: 140 }
          ],
          edges: [
            { u: 'A', v: 'B', w: 4 }, { u: 'A', v: 'C', w: 7 }, { u: 'B', v: 'D', w: 3 },
            { u: 'C', v: 'D', w: 2 }, { u: 'B', v: 'E', w: 9 }, { u: 'D', v: 'E', w: 5 },
            { u: 'D', v: 'F', w: 4 }, { u: 'E', v: 'G', w: 2 }, { u: 'F', v: 'G', w: 6 }
          ],
          start: 'A', end: 'G', allowVisualizer: true
        }
      },
      {
        id: 'g6-8', num: '08', title: 'Pythonda sintaksis xatosi', topic: 'Python Debug', difficulty: 'O‘rta', engine: 'codebug',
        config: {
          prompt: 'Pythonda if sharti ishlamayapti. Xato qatorni topib tuzating.',
          lines: [
            'yosh = 12',
            'if yosh = 12:',
            '    print("6-sinf o‘quvchisi")',
            'print("Tugadi")'
          ],
          buggyLine: 1,
          options: ['if yosh == 12:', 'if yosh = 12:', 'if yosh := 12'],
          answer: 'if yosh == 12:',
          explanation: 'Pythonda tenglikni tekshirish uchun = emas, ikkita tenglik belgisi == ishlatiladi.'
        }
      },
      {
        id: 'g6-9', num: '09', title: 'Sezar shifri (+4)', topic: 'Shifrlash', difficulty: 'O‘rta', engine: 'cipher',
        config: {
          prompt: 'Kalit = 4 bilan kodlangan H-E-X-E so‘zini oching.',
          ciphertext: 'HEXE', answer: 'DATA', shift: 4, mode: 'caesar',
          hint: 'Siljish = 4: H->D, E->A, X->T, E->A.'
        }
      },
      {
        id: 'g6-10', num: '10', title: '6-sinf Python testi', topic: 'O‘zgaruvchilar', difficulty: 'O‘rta', engine: 'quiz',
        config: {
          prompt: 'a = "5" + "3" kodidan keyin a ning qiymati nima bo‘ladi?',
          options: ['"53"', '8', '15', 'Xatolik'],
          answer: 0,
          explanation: 'Qo‘shtirnoq ichidagi "5" va "3" matn (str) hisoblanadi, + operatori ularni yonma-yon birlashtiradi.'
        }
      }
    ]
  },

  // =========================================================
  // 7-SINF
  // =========================================================
  {
    grade: 7,
    label: '7-sinf',
    stage: 'O‘rta · 7-daraja',
    headline: 'Veb texnologiyalar (HTML), tarmoq asoslari va sanoq sistemalari',
    overview: 'HTML hujjat tuzilmasi, IP manzil va domenlar, Python funksiyalar, 8-lik/2-lik o‘tishlar hamda mantiqiy zanjirlar.',
    topics: [
      { title: 'HTML teglari tuzilmasi', summary: 'Har bir veb-sahifa HTML teglaridan quriladi: <h1> sarlavha, <p> paragraf, <a> havola.', formula: '<a href="...">Matn</a>' },
      { title: 'Tarmoq va IP manzil', summary: 'Internetdagi har bir qurilma IP manzilga ega; DNS esa domen nomini IP ga o‘giradi.', formula: 'DNS: site.uz -> 192.0.2.1' },
      { title: 'Python funksiyalari', summary: 'def kalit so‘zi yordamida qayta ishlatiladigan kod bloklari — funksiyalar yaratiladi.', formula: 'def kvadrat(x): return x * x' },
    ],
    games: [
      {
        id: 'g7-1', num: '01', title: '2 ning darajalari matritsasi', topic: 'Sanoq darajalari', difficulty: 'O‘rta', engine: 'sequence',
        config: {
          prompt: '2⁰ dan 2⁷ gacha bo‘lgan qatordagi yetishmayotgan qiymatni toping.',
          items: ['16', '32', '64', '?', '256'],
          missingIndex: 3, options: ['96', '128', '144', '192'], answer: '128',
          explanation: '2⁶ = 64, 2⁷ = 128, 2⁸ = 256.'
        }
      },
      {
        id: 'g7-2', num: '02', title: 'Optimal tarmoq roboti', topic: 'Samarali yo‘l', difficulty: 'O‘rta', engine: 'robot',
        config: {
          prompt: '6×6 maydonda server tuguniga (5,5) minimal qadamda yeting.',
          size: 6, start: [0, 0], goal: [5, 5], walls: [[1,0],[1,1],[1,2],[2,4],[3,4],[3,2],[4,2]], maxSteps: 12,
          hint: 'Avval pastga tushib chap tomondan aylanib o‘ting.'
        }
      },
      {
        id: 'g7-3', num: '03', title: 'HTML teglari va vazifasi', topic: 'Veb dasturlash', difficulty: 'O‘rta', engine: 'match',
        config: {
          prompt: 'HTML teglarini ularning vazifasiga moslashtiring.',
          pairs: [
            { left: '<h1>', right: 'Eng katta sahifa sarlavhasi' },
            { left: '<a href>', right: 'Boshqa sahifaga havola' },
            { left: '<img>', right: 'Sahifaga rasm joylashtirish' },
            { left: '<ul>', right: 'Belgili (nuqtali) ro‘yxat' }
          ]
        }
      },
      {
        id: 'g7-4', num: '04', title: '8-bitli to‘liq bayt (0–255)', topic: '1 bayt kodlash', difficulty: 'O‘rta', engine: 'binary',
        config: {
          prompt: '1 bayt (8 bit) yordamida 173 sonini hosil qiling.',
          bits: 8, target: 173, displayBase: 'dec',
          hint: '128 + 32 + 8 + 4 + 1 = 173.'
        }
      },
      {
        id: 'g7-5', num: '05', title: 'Konsensus mantiqiy zanjiri', topic: 'Mantiq sxemalari', difficulty: 'O‘rta', engine: 'logic',
        config: {
          prompt: 'A ≠ B bo‘lganda hamda C = 1 bo‘lganda chiqish 1 bo‘lsin.',
          slots: ['OR', 'OR'],
          choices: [['AND', 'OR', 'XOR'], ['AND', 'OR', 'XOR']],
          rows: [[0,0,1,0],[0,1,1,1],[1,0,1,1],[1,1,1,0]],
          labels: ['A', 'B', 'C']
        }
      },
      {
        id: 'g7-6', num: '06', title: 'Selection Sort arenasi', topic: 'Saralash', difficulty: 'O‘rta', engine: 'sort',
        config: {
          prompt: '7 ta sonni eng kam almashuvda tartiblang.',
          items: [
            { label: '64', value: 64 }, { label: '25', value: 25 }, { label: '12', value: 12 },
            { label: '22', value: 22 }, { label: '11', value: 11 }, { label: '90', value: 90 }, { label: '48', value: 48 }
          ],
          enableVisualizer: true,
          hint: 'Selection Sort har safar eng kichik elementni tanlab oldinga qo‘yadi.'
        }
      },
      {
        id: 'g7-7', num: '07', title: 'DNS va marshrutlash grafi', topic: 'Kompyuter tarmoqlari', difficulty: 'O‘rta', engine: 'graph',
        config: {
          prompt: 'Uzilgan server aloqasini chetlab A dan G gacha eng tez yo‘lni toping.',
          nodes: [
            { id: 'A', x: 70, y: 140 }, { id: 'B', x: 205, y: 58 }, { id: 'C', x: 205, y: 222 },
            { id: 'D', x: 350, y: 140 }, { id: 'E', x: 465, y: 58 }, { id: 'F', x: 465, y: 222 }, { id: 'G', x: 575, y: 140 }
          ],
          edges: [
            { u: 'A', v: 'B', w: 6 }, { u: 'A', v: 'C', w: 3 }, { u: 'B', v: 'D', w: 2 },
            { u: 'C', v: 'D', w: 5, blocked: true }, { u: 'C', v: 'F', w: 8 }, { u: 'D', v: 'E', w: 3 },
            { u: 'D', v: 'F', w: 4 }, { u: 'E', v: 'G', w: 2 }, { u: 'F', v: 'G', w: 3 }
          ],
          start: 'A', end: 'G', allowVisualizer: true
        }
      },
      {
        id: 'g7-8', num: '08', title: 'HTML yopilmagan teg', topic: 'Veb Debug', difficulty: 'O‘rta', engine: 'codebug',
        config: {
          prompt: 'HTML ro‘yxatida xatolik bor. Qaysi qator noto‘g‘ri yopilgan?',
          lines: [
            '<ul>',
            '  <li>Informatika</li>',
            '  <li>Algoritmlar<li>',
            '</ul>'
          ],
          buggyLine: 2,
          options: ['  <li>Algoritmlar</li>', '  <li>Algoritmlar<li>', '  <ul>Algoritmlar</ul>'],
          answer: '  <li>Algoritmlar</li>',
          explanation: 'Yopiluvchi tegda qiya chiziq bo‘lishi shart: </li>.'
        }
      },
      {
        id: 'g7-9', num: '09', title: 'Sezar shifri (+5)', topic: 'Kodlash', difficulty: 'O‘rta', engine: 'cipher',
        config: {
          prompt: 'Kalit = 5 bilan shifrlangan M-Y-R-Q so‘zini oching.',
          ciphertext: 'MYRQ', answer: 'HTML', shift: 5, mode: 'caesar',
          hint: 'Siljish = 5: M->H, Y->T, R->M, Q->L.'
        }
      },
      {
        id: 'g7-10', num: '10', title: '7-sinf tarmoq testi', topic: 'Tarmoq protokollari', difficulty: 'O‘rta', engine: 'quiz',
        config: {
          prompt: 'Saytning domen nomini (masalan, ziyonet.uz) IP manzilga aylantiruvchi xizmat nima?',
          options: ['DNS', 'HTML', 'USB', 'BIOS'],
          answer: 0,
          explanation: 'DNS (Domain Name System) domen nomlarini kompyuter tushunadigan IP manzillarga tarjima qiladi.'
        }
      }
    ]
  },

  // =========================================================
  // 8-SINF
  // =========================================================
  {
    grade: 8,
    label: '8-sinf',
    stage: 'O‘rta · 8-daraja',
    headline: '16-lik (Hex) sanoq, mantiqiy elementlar va massivda qidiruv',
    overview: 'O‘n oltilik sanoq sistemasi va RGB ranglar, ikkilik qidiruv (Binary Search), ro‘yxatlar (arrays) va CSS uslublar.',
    topics: [
      { title: '16-lik (Hexadecimal) sistema', summary: '0–9 raqamlari va A–F (10–15) harflaridan iborat. 1 ta Hex raqam 4 ta bitga teng.', formula: '0xAF = 10×16 + 15 = 175' },
      { title: 'Chiziqli vs Ikkilik qidiruv', summary: 'Tartiblangan massivda Binary Search har qadamda qidiruv maydonini 2 baravar kamaytiradi.', formula: '1024 element -> maksimal 10 qadam' },
      { title: 'CSS selektorlar', summary: 'HTML elementlariga rang, o‘lcham va joylashuv berish uchun CSS ishlatiladi.', formula: '.box { color: #ef2b2d; }' },
    ],
    games: [
      {
        id: 'g8-1', num: '01', title: 'Ikkilik qidiruv qadamlari', topic: 'Binary Search', difficulty: 'O‘rta', engine: 'sequence',
        config: {
          prompt: '1..100 orasidan sonni ikkilik qidiruv bilan topishda yarimlash qatorini to‘ldiring.',
          items: ['100', '50', '25', '12', '?'],
          missingIndex: 4, options: ['8', '6', '4', '10'], answer: '6',
          explanation: 'Har safar butun qismi olinib 2 ga bo‘linadi: 12 // 2 = 6.'
        }
      },
      {
        id: 'g8-2', num: '02', title: 'Labirintda eng qisqa yo‘l', topic: 'BFS g‘oyasi', difficulty: 'O‘rta', engine: 'robot',
        config: {
          prompt: 'Robotni (0,2) dan (5,2) ga to‘siqlar orasidan olib o‘ting.',
          size: 6, start: [0, 2], goal: [5, 2], walls: [[2,0],[2,1],[2,2],[2,3],[4,2],[4,3],[4,4]], maxSteps: 13,
          hint: 'Pastdan (2,4) orqali o‘tib, keyin yuqoridan (4,1) orqali (5,2) ga tushing.'
        }
      },
      {
        id: 'g8-3', num: '03', title: 'Tarmoq va veb tushunchalari', topic: 'Protokollar', difficulty: 'O‘rta', engine: 'match',
        config: {
          prompt: 'Tarmoq texnologiyalarini vazifasiga moslang.',
          pairs: [
            { left: 'HTTP / HTTPS', right: 'Veb-sahifalarni uzatish protokoli' },
            { left: 'CSS', right: 'Veb-sahifa dizayni va uslubi' },
            { left: 'IPv4', right: '32-bitli tarmoq manzili' },
            { left: 'Router', right: 'Tarmoqlararo paket yo‘naltiruvchi' }
          ]
        }
      },
      {
        id: 'g8-4', num: '04', title: 'Hex (0x00–0xFF) kodlash', topic: '16-lik sanoq', difficulty: 'Qiyin', engine: 'binary',
        config: {
          prompt: '0xAD (16-lik) qiymatini 8 ta bit yordamida tering (A=10, D=13).',
          bits: 8, target: 0xAD, displayBase: 'hex',
          hint: 'Yuqori 4 bit = A (1010 = 160), quyi 4 bit = D (1101 = 13).'
        }
      },
      {
        id: 'g8-5', num: '05', title: 'Yarim qo‘shuvchi (Half Adder) tashuvchisi', topic: 'Raqamli mantiq', difficulty: 'Qiyin', engine: 'logic',
        config: {
          prompt: 'Yarim qo‘shuvchi S (yig‘indi) = A XOR B, lekin C=1 bo‘lganda chiqish XOR va AND kombinatsiyasi bo‘lsin.',
          slots: ['AND', 'OR'],
          choices: [['AND', 'OR', 'XOR'], ['AND', 'OR', 'NAND']],
          rows: [[0,0,1,0],[0,1,1,1],[1,0,1,1],[1,1,1,0]],
          labels: ['Bit A', 'Bit B', 'Yoqish']
        }
      },
      {
        id: 'g8-6', num: '06', title: 'Insertion Sort vizualizatsiyasi', topic: 'Saralash algoritmi', difficulty: 'O‘rta', engine: 'sort',
        config: {
          prompt: '8 ta elementli massivni eng kam almashuvda saralang yoki algoritmlarni solishtiring.',
          items: [
            { label: '84', value: 84 }, { label: '22', value: 22 }, { label: '51', value: 51 }, { label: '14', value: 14 },
            { label: '68', value: 68 }, { label: '35', value: 35 }, { label: '92', value: 92 }, { label: '41', value: 41 }
          ],
          enableVisualizer: true,
          hint: 'Insertion Sort karta tartiblash kabi har elementni kerakli joyga qo‘yadi.'
        }
      },
      {
        id: 'g8-7', num: '07', title: 'Keng tarmoqli marshrut', topic: 'Graf', difficulty: 'Qiyin', engine: 'graph',
        config: {
          prompt: 'A dan G gacha eng qisqa yo‘lni toping.',
          nodes: [
            { id: 'A', x: 70, y: 140 }, { id: 'B', x: 205, y: 58 }, { id: 'C', x: 205, y: 222 },
            { id: 'D', x: 350, y: 140 }, { id: 'E', x: 465, y: 58 }, { id: 'F', x: 465, y: 222 }, { id: 'G', x: 575, y: 140 }
          ],
          edges: [
            { u: 'A', v: 'B', w: 8 }, { u: 'A', v: 'C', w: 4 }, { u: 'B', v: 'D', w: 2 },
            { u: 'C', v: 'D', w: 3 }, { u: 'B', v: 'E', w: 5 }, { u: 'D', v: 'E', w: 6, blocked: true },
            { u: 'D', v: 'F', w: 2 }, { u: 'E', v: 'G', w: 3 }, { u: 'F', v: 'G', w: 4 }
          ],
          start: 'A', end: 'G', allowVisualizer: true
        }
      },
      {
        id: 'g8-8', num: '08', title: 'Massiv indeksi xatosi', topic: 'Python List Debug', difficulty: 'O‘rta', engine: 'codebug',
        config: {
          prompt: 'Massivning oxirgi elementini olishda IndexError chiqmoqda. Tuzating.',
          lines: [
            'sonlar = [10, 20, 30, 40]',
            'uzunlik = len(sonlar)',
            'oxirgi = sonlar[uzunlik]',
            'print(oxirgi)'
          ],
          buggyLine: 2,
          options: ['oxirgi = sonlar[uzunlik - 1]', 'oxirgi = sonlar[uzunlik]', 'oxirgi = sonlar[4]'],
          answer: 'oxirgi = sonlar[uzunlik - 1]',
          explanation: 'Indekslash 0 dan boshlanadi (0, 1, 2, 3), shuning uchun oxirgi indeks len - 1 ga teng.'
        }
      },
      {
        id: 'g8-9', num: '09', title: 'Hex rang kodi shifri', topic: 'Kodlash', difficulty: 'O‘rta', engine: 'cipher',
        config: {
          prompt: 'Kalit = 3 bilan kodlangan K-H-A so‘zini oching.',
          ciphertext: 'KHA', answer: 'HEX', shift: 3, mode: 'caesar',
          hint: 'Siljish = 3: K->H, H->E, A->X.'
        }
      },
      {
        id: 'g8-10', num: '10', title: '8-sinf Binary Search testi', topic: 'Qidiruv murakkabligi', difficulty: 'O‘rta', engine: 'quiz',
        config: {
          prompt: '1024 ta tartiblangan son ichidan Ikkilik qidiruv (Binary Search) eng ko‘pi bilan nechta taqqoslashda topadi?',
          options: ['10 ta', '512 ta', '1024 ta', '100 ta'],
          answer: 0,
          explanation: 'log₂(1024) = 10, ya’ni har qadamda yarmini tashlab atigi 10 qadamda topiladi.'
        }
      }
    ]
  },

  // =========================================================
  // 9-SINF
  // =========================================================
  {
    grade: 9,
    label: '9-sinf',
    stage: 'Yuqori · 9-daraja',
    headline: 'Ma’lumotlar bazasi (SQL), rekursiya va saralash algoritmlari',
    overview: 'Relyatsion ma’lumotlar bazasi (SQL SELECT/WHERE), rekursiv funksiyalar, ASCII/Unicode hamda saralash algoritmlarini solishtirish.',
    topics: [
      { title: 'SQL so‘rovlari', summary: 'Jadvallardan ma’lumot olish, filtrlash va saralash uchun SELECT, FROM, WHERE va ORDER BY ishlatiladi.', formula: 'SELECT ism FROM talaba WHERE ball >= 80;' },
      { title: 'Rekursiya', summary: 'Funksiya o‘z-o‘zini kichikroq masala uchun chaqiradi; to‘xtash sharti (base case) bo‘lishi shart.', formula: 'fact(n) = n * fact(n - 1)' },
      { title: 'QuickSort g‘oyasi', summary: 'Bo‘lib tashla va hukmronlik qil: tayanch (pivot) tanlanib, kichiklar chapga, kattalar o‘ngga ajratiladi.', formula: 'O‘rtacha vaqt: O(n log n)' },
    ],
    games: [
      {
        id: 'g9-1', num: '01', title: 'Faktorial rekursiyasi', topic: 'Rekursiya', difficulty: 'Qiyin', engine: 'sequence',
        config: {
          prompt: 'f(n) = n * f(n - 1), f(1) = 1. Ketma-ketlikdagi 5! qiymatini toping.',
          items: ['1', '2', '6', '24', '?'],
          missingIndex: 4, options: ['96', '100', '120', '144'], answer: '120',
          explanation: '5! = 5 × 24 = 120.'
        }
      },
      {
        id: 'g9-2', num: '02', title: 'Qat’iy qadamli labirint', topic: 'Algoritm', difficulty: 'Qiyin', engine: 'robot',
        config: {
          prompt: '6×6 maydonda (0,5) dan (5,1) ga minimal qadamda boring.',
          size: 6, start: [0, 5], goal: [5, 1], walls: [[1,5],[1,4],[2,2],[3,2],[4,2],[4,3],[4,4]], maxSteps: 13,
          hint: 'Tepadan o‘ngga o‘tib to‘siq ustidan (5,1) ga tushing.'
        }
      },
      {
        id: 'g9-3', num: '03', title: 'SQL kalit so‘zlari', topic: 'Ma’lumotlar bazasi', difficulty: 'O‘rta', engine: 'match',
        config: {
          prompt: 'SQL buyruqlarini ularning vazifasi bilan bog‘lang.',
          pairs: [
            { left: 'SELECT', right: 'Kerakli ustunlarni tanlab olish' },
            { left: 'WHERE', right: 'Qatorlarni shart bo‘yicha filtrlash' },
            { left: 'ORDER BY', right: 'Natijani tartiblash (ASC/DESC)' },
            { left: 'INSERT INTO', right: 'Jadvalga yangi qator qo‘shish' }
          ]
        }
      },
      {
        id: 'g9-4', num: '04', title: 'Hex bayt dekodlash (0xC9)', topic: '16-lik & 2-lik', difficulty: 'Qiyin', engine: 'binary',
        config: {
          prompt: '0xC9 qiymatini 8-bitli registrga yuklang (C=12, 9=9).',
          bits: 8, target: 0xC9, displayBase: 'hex',
          hint: 'C = 1100 (192), 9 = 1001 (9) -> 201.'
        }
      },
      {
        id: 'g9-5', num: '05', title: 'Ikki bosqichli dekoder', topic: 'Mantiqiy sxemalar', difficulty: 'Qiyin', engine: 'logic',
        config: {
          prompt: 'A = B bo‘lmaganda va C = 1 bo‘lganda ruxsat beruvchi zanjir tuzing.',
          slots: ['AND', 'OR'],
          choices: [['AND', 'OR', 'XOR'], ['AND', 'OR', 'XOR']],
          rows: [[0,0,1,0],[0,1,1,1],[1,0,1,1],[1,1,1,0]],
          labels: ['A', 'B', 'Enable']
        }
      },
      {
        id: 'g9-6', num: '06', title: 'QuickSort vs BubbleSort', topic: 'Saralash samaradorligi', difficulty: 'Qiyin', engine: 'sort',
        config: {
          prompt: 'QuickSort va BubbleSort taqqoslashlar sonini vizualizatorda solishtiring.',
          items: [
            { label: '95', value: 95 }, { label: '16', value: 16 }, { label: '73', value: 73 }, { label: '31', value: 31 },
            { label: '58', value: 58 }, { label: '24', value: 24 }, { label: '82', value: 82 }, { label: '43', value: 43 }
          ],
          enableVisualizer: true,
          hint: 'Quick O(n log n) tugmasini tanlab qadamlar sonini kuzating.'
        }
      },
      {
        id: 'g9-7', num: '07', title: 'Ikki to‘siqli tarmoq', topic: 'Dijkstra', difficulty: 'Qiyin', engine: 'graph',
        config: {
          prompt: 'A dan G gacha eng arzon yo‘lni toping (bloklangan kanallardan saqlaning).',
          nodes: [
            { id: 'A', x: 70, y: 140 }, { id: 'B', x: 205, y: 58 }, { id: 'C', x: 205, y: 222 },
            { id: 'D', x: 350, y: 140 }, { id: 'E', x: 465, y: 58 }, { id: 'F', x: 465, y: 222 }, { id: 'G', x: 575, y: 140 }
          ],
          edges: [
            { u: 'A', v: 'B', w: 5 }, { u: 'A', v: 'C', w: 2 }, { u: 'B', v: 'D', w: 4 },
            { u: 'C', v: 'D', w: 6 }, { u: 'B', v: 'E', w: 7 }, { u: 'C', v: 'F', w: 9, blocked: true },
            { u: 'D', v: 'E', w: 2 }, { u: 'D', v: 'F', w: 5 }, { u: 'E', v: 'G', w: 3 }, { u: 'F', v: 'G', w: 2 }
          ],
          start: 'A', end: 'G', allowVisualizer: true
        }
      },
      {
        id: 'g9-8', num: '08', title: 'Cheksiz rekursiya tuzog‘i', topic: 'Rekursiya Debug', difficulty: 'Qiyin', engine: 'codebug',
        config: {
          prompt: 'Ushbu rekursiv funksiya RecursionError beradi. To‘xtash shartini qo‘shing.',
          lines: [
            'def yigindi(n):',
            '    # to‘xtash sharti yo‘q!',
            '    return n + yigindi(n - 1)',
            'print(yigindi(5))'
          ],
          buggyLine: 1,
          options: ['    if n <= 0: return 0', '    # to‘xtash sharti yo‘q!', '    return n * 2'],
          answer: '    if n <= 0: return 0',
          explanation: 'Rekursiya cheksiz davom etmasligi uchun asosiy (base) to‘xtash sharti zarur.'
        }
      },
      {
        id: 'g9-9', num: '09', title: 'SQL so‘zini deshifrlash (+6)', topic: 'Shifr', difficulty: 'Qiyin', engine: 'cipher',
        config: {
          prompt: 'Kalit = 6 bilan kodlangan Y-W-R so‘zini oching.',
          ciphertext: 'YWR', answer: 'SQL', shift: 6, mode: 'caesar',
          hint: 'Siljish = 6: Y->S, W->Q, R->L.'
        }
      },
      {
        id: 'g9-10', num: '10', title: '9-sinf ma’lumotlar bazasi', topic: 'SQL', difficulty: 'O‘rta', engine: 'quiz',
        config: {
          prompt: 'Relyatsion jadvalda har bir qatorni yagona (takrorlanmas) identifikatsiya qiluvchi ustun nima deyiladi?',
          options: ['Primary Key (Asosiy kalit)', 'Foreign Key', 'String', 'IndexError'],
          answer: 0,
          explanation: 'Primary Key jadvaldagi har bir yozuvni noyob tarzda belgilaydi (masalan, ID).'
        }
      }
    ]
  },

  // =========================================================
  // 10-SINF
  // =========================================================
  {
    grade: 10,
    label: '10-sinf',
    stage: 'Yuqori · 10-daraja',
    headline: 'Ma’lumotlar tuzilmalari, Big-O va graflar nazariyasi',
    overview: 'Stek (Stack), Navbat (Queue), Bog‘langan ro‘yxat, Ikkilik daraxt, Big-O asimptotik murakkablik va BFS/DFS qidiruv.',
    topics: [
      { title: 'Stack (LIFO) vs Queue (FIFO)', summary: 'Stekda oxirgi kirgan birinchi chiqadi (LIFO); navbatda esa birinchi kirgan birinchi chiqadi (FIFO).', formula: 'Stack: push/pop · Queue: enqueue/dequeue' },
      { title: 'Big-O murakkablik', summary: 'Algoritmning kirish hajmi n ga nisbatan o‘sish tezligi.', formula: 'O(1) < O(log n) < O(n) < O(n log n) < O(n²)' },
      { title: 'Ikkilik daraxt (BST)', summary: 'Har tugunda chap bola kichik, o‘ng bola esa katta qiymatlarni saqlaydi.', formula: 'Balanslangan qidiruv: O(log n)' },
    ],
    games: [
      {
        id: 'g10-1', num: '01', title: 'Big-O o‘sish tartibi', topic: 'Asimptotika', difficulty: 'Qiyin', engine: 'sequence',
        config: {
          prompt: 'Eng tezdan eng sekingacha Big-O qatorini to‘ldiring.',
          items: ['O(1)', 'O(log n)', 'O(n)', '?', 'O(n²)'],
          missingIndex: 3, options: ['O(n log n)', 'O(2ⁿ)', 'O(1)', 'O(n³)'], answer: 'O(n log n)',
          explanation: 'Chiziqli O(n) dan keyin chiziqli-logarifmik O(n log n), so‘ngra kvadratik O(n²) keladi.'
        }
      },
      {
        id: 'g10-2', num: '02', title: 'Labirintda minimal qadam', topic: 'Graf qidiruvi', difficulty: 'Qiyin', engine: 'robot',
        config: {
          prompt: '6×6 maydonda (0,0) dan (5,5) ga eng kam qadamda (10 qadam) yeting.',
          size: 6, start: [0, 0], goal: [5, 5], walls: [[1,0],[1,1],[1,3],[1,4],[3,1],[3,2],[3,4],[3,5]], maxSteps: 12,
          hint: 'O‘rtadagi ochiq koridorlar (1,2) va (3,3) orqali o‘ting.'
        }
      },
      {
        id: 'g10-3', num: '03', title: 'Ma’lumotlar tuzilmalari', topic: 'Data Structures', difficulty: 'Qiyin', engine: 'match',
        config: {
          prompt: 'Ma’lumotlar tuzilmasini uning asosiy xossasiga bog‘lang.',
          pairs: [
            { left: 'Stack (Stek)', right: 'LIFO — oxirgi kirgan birinchi chiqadi' },
            { left: 'Queue (Navbat)', right: 'FIFO — birinchi kirgan birinchi chiqadi' },
            { left: 'Hash Table', right: 'O(1) o‘rtacha vaqtda kalit bo‘yicha qidiruv' },
            { left: 'Binary Search Tree', right: 'Chap < Ildiz < O‘ng tartiblangan daraxt' }
          ]
        }
      },
      {
        id: 'g10-4', num: '04', title: 'Bitwise niqob (0xE7)', topic: 'Bit amallari', difficulty: 'Qiyin', engine: 'binary',
        config: {
          prompt: '0xE7 baytini (231) ikkilik registrda hosil qiling.',
          bits: 8, target: 0xE7, displayBase: 'hex',
          hint: 'E = 1110 (224), 7 = 0111 (7) -> 11100111.'
        }
      },
      {
        id: 'g10-5', num: '05', title: '3-kirishli paritet tekshiruvi', topic: 'Mantiqiy sintez', difficulty: 'Qiyin', engine: 'logic',
        config: {
          prompt: 'Toq sonli 1 lar bo‘lganda 1 chiqadigan (A XOR B) XOR C sxemasini quring.',
          slots: ['AND', 'AND'],
          choices: [['AND', 'OR', 'XOR'], ['AND', 'OR', 'XOR']],
          rows: [[0,0,1,1],[0,1,1,0],[1,0,1,0],[1,1,1,1]],
          labels: ['Bit 1', 'Bit 2', 'Paritet']
        }
      },
      {
        id: 'g10-6', num: '06', title: '8 elementli algoritmlar poygasi', topic: 'Big-O & Sort', difficulty: 'Qiyin', engine: 'sort',
        config: {
          prompt: 'Minimal sikl almashuvlari bilan saralang va QuickSort bilan solishtiring.',
          items: [
            { label: '88', value: 88 }, { label: '14', value: 14 }, { label: '62', value: 62 }, { label: '27', value: 27 },
            { label: '96', value: 96 }, { label: '41', value: 41 }, { label: '75', value: 75 }, { label: '19', value: 19 }
          ],
          enableVisualizer: true,
          hint: 'QuickSort o‘rtacha O(n log n) da ishlaydi.'
        }
      },
      {
        id: 'g10-7', num: '07', title: 'Dijkstra algoritmi amalda', topic: 'Shortest Path', difficulty: 'Qiyin', engine: 'graph',
        config: {
          prompt: 'A dan G gacha optimal Dijkstra marshrutini toping.',
          nodes: [
            { id: 'A', x: 70, y: 140 }, { id: 'B', x: 205, y: 58 }, { id: 'C', x: 205, y: 222 },
            { id: 'D', x: 350, y: 140 }, { id: 'E', x: 465, y: 58 }, { id: 'F', x: 465, y: 222 }, { id: 'G', x: 575, y: 140 }
          ],
          edges: [
            { u: 'A', v: 'B', w: 3 }, { u: 'A', v: 'C', w: 5 }, { u: 'B', v: 'D', w: 6 },
            { u: 'C', v: 'D', w: 2 }, { u: 'B', v: 'E', w: 8 }, { u: 'D', v: 'E', w: 2 },
            { u: 'D', v: 'F', w: 3, blocked: true }, { u: 'C', v: 'F', w: 4 }, { u: 'E', v: 'G', w: 4 }, { u: 'F', v: 'G', w: 3 }
          ],
          start: 'A', end: 'G', allowVisualizer: true
        }
      },
      {
        id: 'g10-8', num: '08', title: 'Binary Search cheksiz sikli', topic: 'Algoritm Debug', difficulty: 'Qiyin', engine: 'codebug',
        config: {
          prompt: 'mid topilgach chap/o‘ng chegaralar yangilanmay qolgan. Tuzating.',
          lines: [
            'while l <= r:',
            '    mid = (l + r) // 2',
            '    if a[mid] == x: return mid',
            '    elif a[mid] < x: l = mid',
            '    else: r = mid - 1'
          ],
          buggyLine: 3,
          options: ['    elif a[mid] < x: l = mid + 1', '    elif a[mid] < x: l = mid', '    elif a[mid] < x: l = mid - 1'],
          answer: '    elif a[mid] < x: l = mid + 1',
          explanation: 'mid tekshirildi va kichik chiqdi, shuning uchun l = mid + 1 qilinmasa 1 elementda cheksiz aylanib qoladi.'
        }
      },
      {
        id: 'g10-9', num: '09', title: 'Atbash tahlili (KOD)', topic: 'Kriptografiya', difficulty: 'Qiyin', engine: 'cipher',
        config: {
          prompt: 'Atbash (A↔Z) usulida shifrlangan H-G-Z-X-P so‘zini oching.',
          ciphertext: 'HGZXP', answer: 'STACK', shift: 0, mode: 'atbash',
          hint: 'H↔S, G↔T, Z↔A, X↔C, P↔K.'
        }
      },
      {
        id: 'g10-10', num: '10', title: '10-sinf Tuzilmalar testi', topic: 'Stack va Queue', difficulty: 'Qiyin', engine: 'quiz',
        config: {
          prompt: 'Brauzerda "Orqaga qaytish" (Back) va Undo tugmalari qaysi ma’lumot tuzilmasida ishlaydi?',
          options: ['Stack (LIFO)', 'Queue (FIFO)', 'Min-Heap', 'AdjMatrix'],
          answer: 0,
          explanation: 'Oxirgi bajarilgan amal birinchi bo‘lib bekor qilinishi uchun Stack (LIFO) ishlatiladi.'
        }
      }
    ]
  },

  // =========================================================
  // 11-SINF
  // =========================================================
  {
    grade: 11,
    label: '11-sinf',
    stage: 'Olimpiada · 11-daraja',
    headline: 'Dinamik dasturlash, kriptografiya, avtomatlar va graf algoritmlari',
    overview: 'Dinamik dasturlash (DP), Dijkstra va Bellman-Ford g‘oyalari, shifrlash kalitlari, xesh funksiyalar va tizim arxitekturasi.',
    topics: [
      { title: 'Dinamik dasturlash (DP)', summary: 'Katta masalani kichik ost-masalalarga bo‘lib, ularning natijalarini jadvalda saqlash (memoization).', formula: 'dp[i] = min(dp[i-1], dp[i-2]) + cost[i]' },
      { title: 'Simmetrik vs Asimmetrik shifr', summary: 'AES bir xil kalitdan foydalanadi; RSA esa ochiq (public) va maxfiy (private) kalit juftligiga tayanadi.', formula: 'Encrypt(Public) -> Decrypt(Private)' },
      { title: 'Turing mashinasi va avtomatlar', summary: 'Holatlar grafi va o‘tish qoidalari har qanday hisoblanuvchi algoritmning nazariy asosidir.', formula: 'M = (Q, Σ, δ, q₀, F)' },
    ],
    games: [
      {
        id: 'g11-1', num: '01', title: 'Zinapoya DP jadvali', topic: 'Dinamik dasturlash', difficulty: 'Olimpiada', engine: 'sequence',
        config: {
          prompt: '1 yoki 2 pog‘ona sakrab n-pog‘onaga chiqish usullari soni: dp[n] = dp[n-1] + dp[n-2]. dp[6] ni toping.',
          items: ['dp[2]=2', 'dp[3]=3', 'dp[4]=5', 'dp[5]=8', '?'],
          missingIndex: 4, options: ['11', '12', '13', '16'], answer: '13',
          explanation: 'dp[6] = dp[5] + dp[4] = 8 + 5 = 13 ta usul.'
        }
      },
      {
        id: 'g11-2', num: '02', title: 'Olimpiada labirinti (A*)', topic: 'Optimal qidiruv', difficulty: 'Olimpiada', engine: 'robot',
        config: {
          prompt: 'Murakkab 6×6 maydonda (0,5) dan (5,0) ga minimal 10 qadamda yeting.',
          size: 6, start: [0, 5], goal: [5, 0], walls: [[1,5],[1,4],[1,2],[2,2],[3,2],[3,3],[4,1],[4,4]], maxSteps: 10,
          hint: 'Chap chetdan eng yuqoriga (5 marta ↑) ko‘tarilib, keyin o‘ngga (5 marta →) yuring.'
        }
      },
      {
        id: 'g11-3', num: '03', title: 'Nazariy informatika & Kripto', topic: 'Algoritm nazariyasi', difficulty: 'Olimpiada', engine: 'match',
        config: {
          prompt: 'Fundamental tushunchalarni aniq ta’rifiga bog‘lang.',
          pairs: [
            { left: 'SHA-256 Hash', right: 'Bir tomonlama qat’iy uzunlikdagi barmoq izi' },
            { left: 'Dynamic Programming', right: 'Takroriy ost-masalalarni jadvalda keshlash' },
            { left: 'RSA Shifrlash', right: 'Ochiq va yopiq kalitli asimmetrik usul' },
            { left: 'NP-Complete', right: 'Javobi tez tekshiriladigan murakkab sinf' }
          ]
        }
      },
      {
        id: 'g11-4', num: '04', title: 'Bitwise Mask 0xB9', topic: 'Past darajali kod', difficulty: 'Olimpiada', engine: 'binary',
        config: {
          prompt: '0xB9 baytini (185) 8-bit registrda aniq tering.',
          bits: 8, target: 0xB9, displayBase: 'hex',
          hint: 'B = 1011 (176), 9 = 1001 (9) -> 10111001.'
        }
      },
      {
        id: 'g11-5', num: '05', title: 'To‘liq paritet va NAND zanjiri', topic: 'Mantiqiy sintez', difficulty: 'Olimpiada', engine: 'logic',
        config: {
          prompt: 'Faqat uchala bit ham 1 bo‘lganda 0 chiqaradigan emas, (A XOR B) XOR C paritetini quring.',
          slots: ['AND', 'OR'],
          choices: [['AND', 'OR', 'XOR'], ['AND', 'OR', 'XOR']],
          rows: [[0,0,1,1],[0,1,1,0],[1,0,1,0],[1,1,1,1]],
          labels: ['X', 'Y', 'Z']
        }
      },
      {
        id: 'g11-6', num: '06', title: 'Olimpiada QuickSort poygasi', topic: 'Murakkablik O(n log n)', difficulty: 'Olimpiada', engine: 'sort',
        config: {
          prompt: '8 ta sonni minimal sikl almashuvida tartiblang va barcha 4 algoritmni tekshiring.',
          items: [
            { label: '99', value: 99 }, { label: '11', value: 11 }, { label: '77', value: 77 }, { label: '22', value: 22 },
            { label: '66', value: 66 }, { label: '33', value: 33 }, { label: '88', value: 88 }, { label: '44', value: 44 }
          ],
          enableVisualizer: true,
          hint: 'Har bir elementni o‘z joyiga qo‘yib eng kam almashuv rekordini yangilang.'
        }
      },
      {
        id: 'g11-7', num: '07', title: 'Murakkab Dijkstra marshrutizatori', topic: 'Graf optimizatsiyasi', difficulty: 'Olimpiada', engine: 'graph',
        config: {
          prompt: 'Bloklangan magistralni aylanib A dan G gacha minimal kechikishni toping.',
          nodes: [
            { id: 'A', x: 70, y: 140 }, { id: 'B', x: 205, y: 58 }, { id: 'C', x: 205, y: 222 },
            { id: 'D', x: 350, y: 140 }, { id: 'E', x: 465, y: 58 }, { id: 'F', x: 465, y: 222 }, { id: 'G', x: 575, y: 140 }
          ],
          edges: [
            { u: 'A', v: 'B', w: 9 }, { u: 'A', v: 'C', w: 3 }, { u: 'B', v: 'D', w: 2 },
            { u: 'C', v: 'D', w: 4 }, { u: 'B', v: 'E', w: 5 }, { u: 'C', v: 'F', w: 12 },
            { u: 'D', v: 'E', w: 3 }, { u: 'D', v: 'F', w: 2, blocked: true }, { u: 'E', v: 'G', w: 4 }, { u: 'F', v: 'G', w: 2 }
          ],
          start: 'A', end: 'G', allowVisualizer: true
        }
      },
      {
        id: 'g11-8', num: '08', title: 'DP Memoization xatosi', topic: 'Dinamik Dasturlash Debug', difficulty: 'Olimpiada', engine: 'codebug',
        config: {
          prompt: 'Fibonachchi kesh (memo) funksiyasi natijani saqlamayapti va sekin ishlamoqda. Tuzating.',
          lines: [
            'def fib(n, memo={}):',
            '    if n <= 1: return n',
            '    if n in memo: return memo[n]',
            '    return fib(n-1, memo) + fib(n-2, memo)'
          ],
          buggyLine: 3,
          options: [
            '    memo[n] = fib(n-1, memo) + fib(n-2, memo); return memo[n]',
            '    return fib(n-1, memo) + fib(n-2, memo)',
            '    memo.clear(); return n'
          ],
          answer: '    memo[n] = fib(n-1, memo) + fib(n-2, memo); return memo[n]',
          explanation: 'Hisoblangan qiymat memo[n] ga saqlanmasa, memoization ishlamaydi va vaqt O(2ⁿ) bo‘lib qoladi.'
        }
      },
      {
        id: 'g11-9', num: '09', title: 'Sezar shifri (+7)', topic: 'Kriptotahlil', difficulty: 'Olimpiada', engine: 'cipher',
        config: {
          prompt: 'Kalit = 7 bilan kodlangan N-Y-H-W-O so‘zini oching.',
          ciphertext: 'NYHWO', answer: 'GRAPH', shift: 7, mode: 'caesar',
          hint: 'Siljish = 7: N->G, Y->R, H->A, W->P, O->H.'
        }
      },
      {
        id: 'g11-10', num: '10', title: '11-sinf Olimpiada testi', topic: 'Graflar va murakkablik', difficulty: 'Olimpiada', engine: 'quiz',
        config: {
          prompt: 'Manfiy vaznli qirralari BO‘LMAGAN grafda bitta manbadan eng qisqa yo‘lni topuvchi klassik algoritm qaysi?',
          options: ['Dijkstra algoritmi', 'Bubble Sort', 'Binary Search', 'Caesar Cipher'],
          answer: 0,
          explanation: 'Dijkstra algoritmi manfiy qirralar bo‘lmaganda har doim optimal eng qisqa yo‘lni kafolatlaydi.'
        }
      }
    ]
  }
];
