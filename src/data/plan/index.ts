import type { AnyGameItem, GradePlan, GradePlanSummary, LessonKind } from './types';

export const GRADE_PLANS_META: GradePlanSummary[] = [
  {
    grade: 5,
    label: '5-sinf',
    stage: 'O‘rta bosqich',
    hoursPerWeek: 1,
    totalLessons: 34,
    parts: ['1-yarim yillik', '2-yarim yillik'],
    description: 'Matn muharriri, Paint, Excel diagrammalari, blok-sxema, Scratch va elektron pochta.',
  },
  {
    grade: 6,
    label: '6-sinf',
    stage: 'O‘rta bosqich',
    hoursPerWeek: 1,
    totalLessons: 34,
    parts: ['1-yarim yillik', '2-yarim yillik'],
    description: 'Hujjat dizayni, formulalar, query yaratish, Scratch PEN/protseduralar va taqdimotlar.',
  },
  {
    grade: 7,
    label: '7-sinf',
    stage: 'O‘rta bosqich',
    hoursPerWeek: 1,
    totalLessons: 34,
    parts: ['1-yarim yillik', '2-yarim yillik'],
    description: 'Matn stillari, PowerPoint animatsiyasi, Excel modellashtirish va Access ma’lumotlar bazasi.',
  },
  {
    grade: 8,
    label: '8-sinf',
    stage: 'Yuqori bosqich',
    hoursPerWeek: 1,
    totalLessons: 34,
    parts: ['1-yarim yillik', '2-yarim yillik'],
    description: 'Scratch o‘yin dasturlash, HTML/CSS veb-sahifalar, kompyuter tarmoqlari, Pencil2D va Audacity.',
  },
  {
    grade: 9,
    label: '9-sinf',
    stage: 'Yuqori bosqich',
    hoursPerWeek: 2,
    totalLessons: 68,
    parts: ['1-chorak', '2-chorak', '3-chorak', '4-chorak'],
    description: 'Arxitektura, xotira masalalari, kiberxavfsizlik, mualliflik huquqi, tasvir tahriri va 3 qatlamli veb.',
  },
  {
    grade: 10,
    label: '10-sinf',
    stage: 'Akademik bosqich',
    hoursPerWeek: 2,
    totalLessons: 68,
    parts: ['1-chorak', '2-chorak', '3-chorak', '4-chorak'],
    description: 'Kodlash va shifrlash, sensorlar, ekspert tizimlar, murakkab Excel (INDEX/MATCH) va 3NF bazalar.',
  },
  {
    grade: 11,
    label: '11-sinf',
    stage: 'Akademik bosqich',
    hoursPerWeek: 2,
    totalLessons: 68,
    parts: ['1-chorak', '2-chorak', '3-chorak', '4-chorak'],
    description: 'Video/audio montaj, AI/AR/VR, paketli kommutatsiya, SDLC, Gantt va JavaScript dasturlash.',
  },
];

const planCache = new Map<number, GradePlan>();

export async function loadGradePlan(grade: number): Promise<GradePlan | null> {
  if (planCache.has(grade)) {
    return planCache.get(grade)!;
  }
  let plan: GradePlan | null = null;
  switch (grade) {
    case 5:
      plan = (await import('./grade5')).GRADE_5_PLAN;
      break;
    case 6:
      plan = (await import('./grade6')).GRADE_6_PLAN;
      break;
    case 7:
      plan = (await import('./grade7')).GRADE_7_PLAN;
      break;
    case 8:
      plan = (await import('./grade8')).GRADE_8_PLAN;
      break;
    case 9:
      plan = (await import('./grade9')).GRADE_9_PLAN;
      break;
    case 10:
      plan = (await import('./grade10')).GRADE_10_PLAN;
      break;
    case 11:
      plan = (await import('./grade11')).GRADE_11_PLAN;
      break;
    default:
      return null;
  }
  planCache.set(grade, plan);
  return plan;
}

export async function loadAllGradePlans(): Promise<GradePlan[]> {
  const results = await Promise.all([5, 6, 7, 8, 9, 10, 11].map((g) => loadGradePlan(g)));
  return results.filter((p): p is GradePlan => p !== null);
}

export const LESSON_KIND_LABELS: Record<LessonKind, string> = {
  dars: 'Nazariy dars',
  amaliy: 'Amaliy',
  loyiha: 'Loyiha',
  nazorat: 'Nazorat',
  takrorlash: 'Takrorlash',
};

/**
 * Stage 1 Showcase configs — lets the user & teacher test all 18 new engines immediately
 * before Grade 5–11 lesson content is filled in Stages 2–3.
 */
export const NEW_ENGINES_DEMO_ITEMS: AnyGameItem[] = [
  {
    id: 'demo-order',
    num: '01',
    title: 'Hujjatni saqlash bosqichlari',
    topic: 'Word / Fayl saqlash',
    difficulty: 'Oson',
    engine: 'order',
    config: {
      prompt: 'Yangi matnli hujjatni kompyuterga saqlash bosqichlarini to‘g‘ri tartibga qo‘ying.',
      items: [
        'Fayl (File) menyusini ochish',
        'Saqlash (Save As) buyrug‘ini tanlash',
        'Kerakli papkani ko‘rsatish',
        'Hujjatga tushunarli nom yozish',
        'Save tugmasini bosib tasdiqlash',
      ],
      hint: 'Avval menyu ochiladi, so‘ng joy va nom tanlanib oxirida Save bosiladi.',
      explanation: 'Hujjatni saqlashda avval File → Save As orqali papka va fayl nomi tanlanadi.',
    },
  },
  {
    id: 'demo-fillblank',
    num: '02',
    title: 'URL va veb-brauzer atamalari',
    topic: 'Veb-texnologiya',
    difficulty: 'Oson',
    engine: 'fillblank',
    config: {
      prompt: 'Bo‘sh joylarni mos atamalar bilan to‘ldiring.',
      template: 'Veb-sahifaning internetdagi manzili {{0}} deb ataladi, saytlarni ko‘rish dasturi esa {{1}} hisoblanadi.',
      blanks: [
        { options: ['URL', 'CPU', 'RAM', 'PNG'], answer: 'URL' },
        { options: ['Brauzer', 'Printer', 'Skaner', 'Paint'], answer: 'Brauzer' },
      ],
      hint: 'Manzil satrida http/https bilan boshlanadigan yozuv — URL.',
      explanation: 'URL (Uniform Resource Locator) sahifa manzilini bildiradi, brauzer esa uni ochib ko‘rsatadi.',
    },
  },
  {
    id: 'demo-truefalse',
    num: '03',
    title: 'Tezkor kiber-savodxonlik',
    topic: 'Elektron xavfsizlik',
    difficulty: 'Oson',
    engine: 'truefalse',
    config: {
      prompt: 'Har bir fikrning To‘g‘ri yoki Noto‘g‘ri ekanini vaqt tugamasidan belgilang.',
      timeLimitSec: 45,
      statements: [
        {
          text: 'Noma’lum xatdagi shubhali havolaga darhol kirish xavfsiz.',
          isTrue: false,
          explanation: 'Shubhali havolalar phishing hujumi bo‘lishi mumkin — ularni ochmaslik kerak.',
        },
        {
          text: 'Ctrl + S tugmalari hujjatni tezkor saqlash uchun ishlatiladi.',
          isTrue: true,
          explanation: 'Ko‘pchilik dasturlarda Ctrl + S tezkor saqlash (Save) buyrug‘ini bajaradi.',
        },
        {
          text: '1 bayt 8 bitdan tashkil topadi.',
          isTrue: true,
          explanation: 'Axborot o‘lchov birligida 1 Bayt = 8 Bit.',
        },
      ],
    },
  },
  {
    id: 'demo-flashcards',
    num: '04',
    title: 'Asosiy informatika atamalari',
    topic: 'Takrorlash',
    difficulty: 'Oson',
    engine: 'flashcards',
    config: {
      prompt: 'Kartochkani bosing, ta’rifini o‘qing va "Bildim" tugmasi bilan belgilang.',
      cards: [
        {
          term: 'Algoritm',
          definition: 'Maqsadga erishish uchun bajariladigan aniq va tartibli buyruqlar ketma-ketligi.',
          example: 'Choy damlash retsepti yoki labirintdan chiqish yo‘li.',
        },
        {
          term: 'Phishing',
          definition: 'Soxta xat yoki sayt orqali foydalanuvchining parol va karta ma’lumotlarini aldash yo‘li bilan olish.',
          example: 'Bank nomidan kelgan soxta SMS havola.',
        },
        {
          term: 'URL',
          definition: 'Internetdagi resursning noyob veb-manzili.',
          example: 'https://maktab.uz/informatika',
        },
      ],
    },
  },
  {
    id: 'demo-hotspot',
    num: '05',
    title: 'Word oynasida tugmani toping',
    topic: 'Matn muharriri',
    difficulty: 'Oson',
    engine: 'hotspot',
    config: {
      prompt: 'Matn muharriri oynasida hujjatni kompyuterga saqlaydigan "Saqlash (Save)" tugmasini bosing.',
      appTitle: 'Matn muharriri — Hujjat1',
      layout: 'word',
      targetZoneId: 'save',
      zones: [
        { id: 'save', label: 'Save', group: 'Fayl' },
        { id: 'bold', label: 'B (Qalin)', group: 'Shrift' },
        { id: 'italic', label: 'I (Kursiv)', group: 'Shrift' },
        { id: 'align', label: 'Markazga', group: 'Tekislash' },
        { id: 'print', label: 'Chop etish (Print)', group: 'Fayl' },
      ],
      explanation: 'Saqlash (Save) tugmasi yoki Ctrl+S kiritilgan o‘zgarishlarni diskka yozadi.',
    },
  },
  {
    id: 'demo-typing',
    num: '06',
    title: 'Klaviatura tezligi mashqi',
    topic: '5-sinf · Klaviatura',
    difficulty: 'Oson',
    engine: 'typing',
    config: {
      prompt: 'Quyidagi matnni imkon qadar aniq va tez tering:',
      targetText: 'Algoritm aniq qadamlar ketma-ketligidir.',
      minAccuracy: 85,
      hint: 'Ikkala qo‘l barmoqlaridan foydalaning va nuqtani ham qo‘ying.',
    },
  },
  {
    id: 'demo-sheetlab',
    num: '07',
    title: 'Excel: Yig‘indi formulasi',
    topic: 'Elektron jadval',
    difficulty: 'O‘rta',
    engine: 'sheetlab',
    config: {
      prompt: 'B3 katakka A1 dan B2 gacha barcha sonlarning yig‘indisini hisoblovchi formula (=SUM(A1:B2)) kiriting.',
      rows: 3,
      cols: 3,
      initialCells: {
        A1: '15',
        B1: '25',
        A2: '10',
        B2: '30',
        C1: 'Jami',
      },
      targetCell: 'B3',
      expectedValue: 80,
      requiredFormulaTokens: ['='],
      hint: 'B3 katakni tanlang va =SUM(A1:B2) yoki =A1+B1+A2+B2 deb yozing.',
      explanation: 'SUM funksiyasi ko‘rsatilgan diapazondagi barcha sonlarni qo‘shadi: 15+25+10+30 = 80.',
    },
  },
  {
    id: 'demo-chartlab',
    num: '08',
    title: 'Diagramma turini sozlash',
    topic: '5–6 sinf · Excel diagramma',
    difficulty: 'O‘rta',
    engine: 'chartlab',
    config: {
      prompt: 'Sinflar bo‘yicha o‘quvchilar sonini solishtirish uchun mos diagramma turi, o‘qlari va sarlavhani tanlang.',
      datasetTitle: 'Sinflar bo‘yicha o‘quvchilar',
      data: [
        { label: '5-A', value: 28 },
        { label: '5-B', value: 31 },
        { label: '6-A', value: 26 },
        { label: '6-B', value: 30 },
      ],
      correctType: 'bar',
      xAxisOptions: ['Sinflar', 'Ballar', 'Vaqt (soat)'],
      correctXAxis: 'Sinflar',
      yAxisOptions: ['O‘quvchilar soni', 'Harorat', 'Fayl hajmi'],
      correctYAxis: 'O‘quvchilar soni',
      titleOptions: ['Sinflar kesimida o‘quvchilar soni', 'Yillik havo harorati', 'Tarmoq tezligi'],
      correctTitle: 'Sinflar kesimida o‘quvchilar soni',
      explanation: 'Kategoriyalarni taqqoslashda Ustunli diagramma (Bar), X o‘qida sinflar va Y o‘qida son ko‘rsatiladi.',
    },
  },
  {
    id: 'demo-blocks',
    num: '09',
    title: 'Scratch blok-dasturlash',
    topic: 'Scratch · Sikl',
    difficulty: 'O‘rta',
    engine: 'blocks',
    config: {
      prompt: 'Bloklarni yig‘ib, spraytni ★ nishoniga yetkazing (masofa: 3 katak o‘ngga).',
      gridSize: 5,
      start: [1, 2],
      startDir: 'R',
      goal: [4, 2],
      availableBlocks: ['move', 'turnRight', 'turnLeft', 'repeat2', 'repeat3', 'penDown'],
      hint: '3 marta "Oldinga yurish" yoki "Takrorla 3x" blokidan foydalaning.',
    },
  },
  {
    id: 'demo-htmlplay',
    num: '10',
    title: 'HTML5 sarlavha va havola yaratish',
    topic: '8–9 sinf · Veb dasturlash',
    difficulty: 'O‘rta',
    engine: 'htmlplay',
    config: {
      prompt: 'Chapdagi kod ichiga <h1> sarlavha va <a href="..."> havola qo‘shing, natijani o‘ngda ko‘ring.',
      starterCode: `<!doctype html>
<html>
<body style="font-family:sans-serif;padding:16px">
  <!-- Shu yerga <h1> va <a> yozing -->
  <p>Mening birinchi veb-sahifam</p>
</body>
</html>`,
      checks: [
        { label: '<h1> tegi qo‘shildi', pattern: '<h1[^>]*>.*<\\/h1>', flags: 'is' },
        { label: '<a href="..."> havola qo‘shildi', pattern: '<a\\s+[^>]*href\\s*=\\s*["\'][^"\']+["\']', flags: 'i' },
      ],
      hint: '<h1>Salom Dunyo</h1> va <a href="https://example.com">Saytga o‘tish</a> yozing.',
    },
  },
  {
    id: 'demo-dblab',
    num: '11',
    title: 'Ma’lumotlar bazasidan qidiruv (Query)',
    topic: '6–10 sinf · Ma’lumotlar bazasi',
    difficulty: 'O‘rta',
    engine: 'dblab',
    config: {
      prompt: '"Informatika" fanidan bahosi 5 ga teng o‘quvchilarni filtr (Query) yordamida ajratib oling.',
      tableName: 'Oquvchilar',
      columns: [
        { name: 'Ism', type: 'Matn' },
        { name: 'Sinf', type: 'Son' },
        { name: 'Baho', type: 'Son' },
      ],
      rows: [
        { Ism: 'Aziza', Sinf: 7, Baho: 5 },
        { Ism: 'Bobur', Sinf: 7, Baho: 4 },
        { Ism: 'Dilnoza', Sinf: 8, Baho: 5 },
        { Ism: 'Javohir', Sinf: 8, Baho: 3 },
      ],
      mode: 'query',
      targetField: 'Baho',
      targetOp: '=',
      targetValue: '5',
      expectedRowCount: 2,
      hint: 'Maydon = Baho, Shart = "=", Qiymat = 5 qilib belgilang.',
      explanation: 'Shartli query (WHERE Baho = 5) faqat 5 baho olgan 2 ta yozuvni chiqaradi.',
    },
  },
  {
    id: 'demo-netbuilder',
    num: '12',
    title: 'Maktab kompyuter tarmog‘ini ulash',
    topic: '8–11 sinf · Tarmoq',
    difficulty: 'O‘rta',
    engine: 'netbuilder',
    config: {
      prompt: 'Modemni Routerga, Routerni Switchga va Kompyuter-1 hamda Kompyuter-2 ni Switchga ulang.',
      devices: [
        { id: 'modem', label: 'Modem', type: 'modem' },
        { id: 'router', label: 'Router', type: 'router' },
        { id: 'sw', label: 'Switch', type: 'switch' },
        { id: 'pc1', label: 'Kompyuter 1', type: 'pc' },
        { id: 'pc2', label: 'Kompyuter 2', type: 'pc' },
      ],
      requiredLinks: [
        ['modem', 'router'],
        ['router', 'sw'],
        ['sw', 'pc1'],
        ['sw', 'pc2'],
      ],
      hint: 'Modem → Router → Switch → (Kompyuter 1 va Kompyuter 2) zanjirini ulang.',
      explanation: 'Router internet signalini Switchga uzatadi, Switch esa lokal kompyuterlarni bog‘laydi.',
    },
  },
  {
    id: 'demo-calc',
    num: '13',
    title: 'Xotira hajmi masalasi',
    topic: '9–11 sinf · Hisob-kitob',
    difficulty: 'O‘rta',
    engine: 'calc',
    config: {
      prompt: 'Har biri 4 MB bo‘lgan 128 ta rasm jami necha Gigabayt (GB) joy egallaydi? (1 GB = 1024 MB)',
      unit: 'GB',
      correctAnswer: 0.5,
      tolerance: 0.01,
      steps: [
        '1-qadam: Jami MB = 128 × 4 MB = 512 MB',
        '2-qadam: GB ga o‘tkazish = 512 / 1024 = 0.5 GB',
      ],
      hint: 'Avval umumiy megabaytni toping, keyin 1024 ga bo‘ling.',
    },
  },
  {
    id: 'demo-imagelab',
    num: '14',
    title: 'Rasm yorqinligi va aylantirish',
    topic: '5–9 sinf · Tasvir tahriri',
    difficulty: 'Oson',
    engine: 'imagelab',
    config: {
      prompt: 'Tasvirni Yorqinlik = 120%, Kontrast = 110% va 90° burilgan holatga keltiring.',
      subject: 'landscape',
      target: {
        brightness: 120,
        contrast: 110,
        rotate: 90,
        flipH: false,
      },
      tolerance: 5,
      hint: 'Slayderlarni mos qiymatga surib, "90° Aylantirish" tugmasini bir marta bosing.',
    },
  },
  {
    id: 'demo-audiolab',
    num: '15',
    title: 'Audacity audio tahrirlash',
    topic: '8 & 11 sinf · Audio',
    difficulty: 'O‘rta',
    engine: 'audiolab',
    config: {
      prompt: '10 soniyali audio klipni 2-soniyadan 7-soniyagacha qirqib (trim), ovoz balandligini 120% ga qo‘ying.',
      clipDurationSec: 10,
      targetTrimStart: 2,
      targetTrimEnd: 7,
      targetVolume: 120,
      targetSpeed: 1,
      hint: 'Boshlanish = 2s, Tugash = 7s, Ovoz = 120%, Tezlik = 1x.',
    },
  },
  {
    id: 'demo-timeline',
    num: '16',
    title: 'Video montaj vaqt chizig‘i',
    topic: '8 & 11 sinf · Video montaj',
    difficulty: 'O‘rta',
    engine: 'timeline',
    config: {
      prompt: 'Video kliplarni mantiqiy tartibda (Kirish → Asosiy qism → Xulosa) joylashtiring va Titr qatlamini yoqing.',
      clips: [
        { id: 'outro', label: 'Xulosa', duration: 4, color: '#ef4444' },
        { id: 'intro', label: 'Kirish', duration: 3, color: '#3b82f6' },
        { id: 'main', label: 'Asosiy kadr', duration: 8, color: '#10b981' },
      ],
      expectedOrder: ['intro', 'main', 'outro'],
      requireTitleTrack: true,
      hint: 'Avval Kirish, keyin Asosiy kadr, oxirida Xulosa klipi va "Matnli titr" tugmasini yoqing.',
    },
  },
  {
    id: 'demo-crossword',
    num: '17',
    title: 'Informatika atamalari krossvordi',
    topic: 'Takrorlash',
    difficulty: 'O‘rta',
    engine: 'crossword',
    config: {
      prompt: 'Savollar bo‘yicha yashiringan informatika atamalarini topib yozing.',
      clues: [
        { id: 'c1', clue: 'Veb-sahifa yaratish tili (4 harf)', answer: 'HTML' },
        { id: 'c2', clue: 'Lokal tarmoqdagi markaziy kommutator qurilmasi (6 harf)', answer: 'SWITCH' },
        { id: 'c3', clue: 'Ma’lumot o‘lchov birligi: 8 bit = 1 ... (4 harf)', answer: 'BAYT' },
      ],
      hint: 'Har bir atamani lotin alifbosida yozing (masalan: HTML).',
    },
  },
  {
    id: 'demo-casestudy',
    num: '18',
    title: 'Shubhali xat vaziyati',
    topic: 'Xavfsizlik va internet odobi',
    difficulty: 'Oson',
    engine: 'casestudy',
    config: {
      prompt: 'Vaziyatni o‘qing va eng xavfsiz, to‘g‘ri qarorni tanlang.',
      scenario: 'Sizga "Siz sovg‘a yutib oldingiz, 5 daqiqa ichida parol va karta raqamingizni kiriting!" mazmunida notanish manzildan elektron xat keldi.',
      options: [
        {
          text: 'Havolani ochib, tezda parolni kiritaman.',
          isCorrect: false,
          feedback: 'Bu xavfli! Bu klassik phishing hujumi bo‘lib, akkauntingiz o‘g‘irlanishi mumkin.',
        },
        {
          text: 'Havolaga kirmayman, xatni Spam deb belgilab o‘chiraman va kattalarga xabar beraman.',
          isCorrect: true,
          feedback: 'Barakalla! Shubhali xatlarga kirmaslik va shaxsiy ma’lumot bermaslik eng to‘g‘ri himoya.',
        },
        {
          text: 'Xatni barcha sinfdoshlarimga ham yuboraman.',
          isCorrect: false,
          feedback: 'Zararli havolani tarqatish boshqalarni ham xavf ostiga qo‘yadi.',
        },
      ],
    },
  },
];
