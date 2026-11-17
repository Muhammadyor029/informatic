import type { Lesson } from './types';

export const GRADE_10_Q3A: Lesson[] = [
  {
    id: 'g10-l33',
    grade: 10,
    no: 33,
    part: '3-chorak',
    title: 'Elektron jadval yaratish. Qatorlar va ustunlarni boshqarish',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'LibreOffice Calc', 'Google Sheets'],
    objectives: [
      'O‘quvchi elektron jadval (Workbook, Worksheet, Cell, Range) tuzilishini mustahkamlaydi.',
      'O‘quvchi qator va ustunlarni qo‘shish, o‘chirish, eni/bo‘yini moslash, yashirish (Hide/Unhide) va kataklarni birlashtirish (Merge) amallarini bajaradi.',
    ],
    intro:
      '3-chorakda elektron jadvallarni (Microsoft Excel / LibreOffice Calc / Google Sheets) professional darajada o‘zlashtiramiz. Bugun jadval strukturasini yaratish va qator-ustunlarni tartibli boshqarishdan boshlaymiz.',
    sections: [
      {
        heading: 'Ish kitobi, varaq va kataklar manzili',
        body: 'Elektron jadval fayli **Ish kitobi (Workbook, `.xlsx`)** deyiladi, uning ichida bir nechta **Varaq (Worksheet)** joylashadi. Har bir katak **ustun harfi + qator raqami** ko‘rinishida manzilga ega (masalan, `C5`). Bir nechta qo‘shni kataklar to‘plami **Diapazon (Range)** deyiladi (`A1:D10`).',
        example: '`B2:B15` — B ustundagi 2-qatordan 15-qatorgacha bo‘lgan kataklar diapazoni.',
      },
      {
        heading: 'Qator va ustunlarni boshqarish amallari',
        body: '• **Eni va bo‘yini sozlash**: chegara ustida ikki marta bosish (`AutoFit`) matn sig‘ishiga moslab avtomatik kengaytiradi; `###` belgisi ustun torligini anglatadi!\n• **Qo‘shish / O‘chirish (Insert / Delete)**: yangi qator ustiga qo‘shilsa, ostidagi formulalar manzili avtomatik siljiydi.\n• **Yashirish (Hide / Unhide)**: maxfiy yoki yordamchi ustunlarni o‘chirmasdan ko‘zdan yashiradi.\n• **Birlashtirish (Merge & Center)**: sarlavha uchun bir nechta katakni bitta qiladi (lekin maʼlumotlar jadvali ichida saralashga xalaqit bermasligi uchun ehtiyotkorlik bilan ishlatiladi).',
        example: 'Sana yoki summa o‘rnida `#####` ko‘rinsa, ustun chegarasini ikki marta bosib kengaytirish kifoya — maʼlumot yo‘qolmagan!',
        tip: 'Tezkor klaviatura: Yangi qator/ustun qo‘shish — `Ctrl + Shift + "+"`, o‘chirish — `Ctrl + "-"`.',
      },
    ],
    keyTerms: [
      { term: 'Workbook (Ish kitobi)', definition: 'Bir yoki bir nechta elektron varaqni o‘z ichiga olgan jadval fayli (.xlsx).' },
      { term: 'Range (Diapazon)', definition: 'Ikki nuqta orqali belgilangan qo‘shni kataklar bloki (masalan, A1:C5).' },
      { term: 'AutoFit', definition: 'Ustun eni yoki qator balandligini katakdagi eng uzun matnga avtomatik moslash.' },
      { term: 'Hide / Unhide', definition: 'Qator yoki ustunni maʼlumotini o‘chirmagan holda ekranda vaqtincha yashirish/ko‘rsatish.' },
    ],
    steps: [
      '1. Excel/Calc da jadval yaratib, ustunlarga sarlavha bering.',
      '2. `AutoFit` va `Hide/Unhide` amallarini sinab ko‘ring.',
      '3. Quyidagi moslashtirish o‘yinida Excel terminlarini bog‘lang.',
    ],
    practice: [
      {
        task: 'Katakda son o‘rniga `######` belgisi paydo bo‘ldi. Buning sababi nima va qanday tuzatiladi?',
        expected: 'Ustun eni sonni to‘liq ko‘rsatish uchun torlik qilmoqda. Ustun sarlavhasi o‘ng chegarasini surish yoki ikki marta bosish (AutoFit) orqali tuzatiladi.',
        difficulty: 'oson',
      },
      {
        task: 'Jadval ichidagi oddiy maʼlumot qatorlarida `Merge Cells` (kataklarni birlashtirish) ni ko‘p ishlatish nima uchun tavsiya etilmaydi?',
        expected: 'Birlashtirilgan kataklar saralash (Sort), filtrlash (Filter) va formulalar diapazonini tanlashda xatolik keltirib chiqaradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l33-g1',
        num: '01',
        title: 'Jadval strukturasini bilasanmi?',
        topic: 'Elektron jadval asoslari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Elektron jadval tushunchasini to‘g‘ri taʼrifi bilan bog‘lang:',
          pairs: [
            { left: 'A1:D10', right: 'Bir nechta qo‘shni kataklardan iborat diapazon' },
            { left: '#####', right: 'Ustun eni sonni sig‘dirish uchun torlik belgisi' },
            { left: 'AutoFit', right: 'Ustun kengligini matn uzunligiga avtomatik moslash' },
            { left: 'Merge & Center', right: 'Tanlangan kataklarni bitta sarlavha katagiga birlashtirish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Katakda son o‘rniga `#####` ko‘rinishi nimani anglatadi?',
        options: ['Formula xato yozilgan', 'Ustun kengligi qiymatni sig‘dirish uchun yetarli emas', 'Fayl virusga chalingan', 'Nolga bo‘lish xatosi'],
        answer: 1,
        explanation: '`#####` xato emas, shunchaki ustun eni son yoki sana uzunligidan kichikligini bildiradi.',
      },
      {
        prompt: 'B2 katagidan D8 katagigacha bo‘lgan to‘rtburchak diapazon qanday yoziladi?',
        options: ['B2-D8', 'B2;D8', 'B2:D8', 'B2+D8'],
        answer: 2,
        explanation: 'Elektron jadvallarda uzluksiz diapazon ikki nuqta (`:`) belgisi bilan yoziladi.',
      },
      {
        prompt: 'Ustunni o‘chirmasdan (formulalariga zarar yetkazmay) vaqtincha ko‘rinmas qilish amali qaysi?',
        options: ['Delete', 'Hide', 'Clear All', 'Merge'],
        answer: 1,
        explanation: 'Hide ustunni ko‘zdan yashiradi, lekin undagi maʼlumot va formulalar ishlashda davom etadi.',
      },
      {
        prompt: 'Bir nechta varaqni (Sheet1, Sheet2) o‘z ichiga olgan asosiy fayl qanday ataladi?',
        options: ['Cell', 'Column', 'Workbook (Ish kitobi)', 'Row'],
        answer: 2,
        explanation: 'Workbook butun fayl, Worksheet esa uning ichidagi alohida varaqdir.',
      },
      {
        prompt: 'Jadval ustunini ichidagi eng uzun matnga avtomatik moslash usuli qaysi?',
        options: [
          'Ustun chegarasi o‘ng tomonida sichqonchani ikki marta bosish (AutoFit)',
          'Varaqni o‘chirib qayta yaratish',
          'Matn rangini oq qilish',
          'Faylni PDF ga saqlash',
        ],
        answer: 0,
        explanation: 'Ustunlar chegarasiga ikki marta bosish AutoFit Column Width amalini bajaradi.',
      },
    ],
    teacherNotes: {
      method: 'Excel / LibreOffice Calc da qator-ustunlarni jonli boshqarib `#####` va `AutoFit` ni ko‘rsatish.',
      timing: 'Kirish 5 daq, Amaliy ko‘rsatuv 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: 'Jadval tuzish va o‘yin natijalari.',
      homework: 'Dars jadvalini elektron jadvalda yaratib, AutoFit va Merge & Center qo‘llang.',
    },
  },
  {
    id: 'g10-l34',
    grade: 10,
    no: 34,
    part: '3-chorak',
    title: 'Elektron jadval xavfsizligi',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'Xavfsizlik'],
    objectives: [
      'O‘quvchi elektron jadvalda fayl darajasida (Encrypt with Password), varaq darajasida (Protect Sheet) va alohida katak darajasida (Locked/Unlocked Cells) himoyalashni farqlaydi.',
      'O‘quvchi muhim formulalar o‘chib ketishining oldini olish uchun himoya sozlash tartibini bajaradi.',
    ],
    intro:
      'Katta maktab yoki kompaniya jadvalida formulalar yozilgan ustunni tasodifan o‘chirib yuborish butun hisobotni buzadi! Excel da nafaqat faylga parol qo‘yish, balki faqat maʼlum kataklarga yozishga ruxsat berish ham mumkin.',
    sections: [
      {
        heading: 'Jadvalni himoyalashning 3 darajasi',
        body: '1) **Ish kitobini shifrlash (`Encrypt with Password`)**: faylni ochish uchun parol so‘raydi (maxfiy moliyaviy maʼlumotlar uchun).\n2) **Ish kitobi strukturasini himoyalash (`Protect Workbook`)**: varaqlarni qo‘shish, o‘chirish yoki nomini o‘zgartirishni taqiqlaydi.\n3) **Varaqni himoyalash (`Protect Sheet`)**: varaqdagi barcha **Qulflangan (`Locked`)** kataklarni tahrirlashdan to‘sadi.',
        example: 'O‘qituvchi baholar jadvalida "O‘rtacha ball" formulasini qulflab, faqat "Chorak baholari" kataklarini ochiq qoldirishi mumkin.',
      },
      {
        heading: 'Nima uchun avval kataklarni "Unlock" qilish kerak?',
        body: 'Sukut bo‘yicha Excel dagi **barcha kataklar `Locked` (qulflangan)** holatda bo‘ladi, lekin bu himoya faqat **Protect Sheet** yoqilganda kuchga kiradi! Shuning uchun foydalanuvchi kiritishi kerak bo‘lgan kataklarni tanlab → `Format Cells → Protection → Locked` belgisini **olib tashlash**, so‘ng `Protect Sheet` ni yoqish kerak.',
        example: 'Kassa jadvalida miqdor kiritiladigan `B2:B10` kataklaridan `Locked` olib tashlanadi, `C2:C10` (Summa formulasi) esa qulflanganicha qoladi.',
        tip: 'Shuningdek, `Hidden` katak belgisi yoqilsa, Formula Bar da murakkab formulaning o‘zi ham ko‘rinmaydi!',
      },
    ],
    keyTerms: [
      { term: 'Encrypt with Password', definition: 'Faylni ochishdan oldin parol talab qilib shifrlash.' },
      { term: 'Protect Sheet', definition: 'Varaqdagi qulflangan kataklar va formulalarni tahrirlashdan himoyalash.' },
      { term: 'Locked (Qulflangan)', definition: 'Protect Sheet yoqilganda o‘zgartirib bo‘lmaydigan katak holati (sukut bo‘yicha yoqilgan).' },
      { term: 'Protect Workbook', definition: 'Varaqlarni o‘chirish, ko‘chirish yoki nomini o‘zgartirishni cheklash.' },
    ],
    steps: [
      '1. Tahrirlanadigan kataklarni tanlab, `Locked` belgisini oling.',
      '2. `Review → Protect Sheet` orqali parol bilan himoya qo‘ying.',
      '3. Quyidagi tartiblash o‘yinida himoyalash bosqichlarini to‘g‘ri qo‘ying.',
    ],
    practice: [
      {
        task: 'O‘quvchi barcha kataklarni ochiq qoldirmasdan to‘g‘ridan-to‘g‘ri `Protect Sheet` bosdi. Natijada nima bo‘ladi?',
        expected: 'Sukut bo‘yicha hamma kataklar `Locked` bo‘lgani uchun varaqdagi birorta katakka ham maʼlumot kiritib bo‘lmay qoladi.',
        difficulty: 'oson',
      },
      {
        task: 'Formula yozilgan katakdagi natija ko‘rinsin, lekin foydalanuvchi Formula Bar da formulaning kodini ko‘ra olmasin. Qaysi belgi yoqiladi?',
        expected: 'Format Cells → Protection bo‘limida `Hidden` belgisi yoqiladi va `Protect Sheet` faollashtiriladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l34-g1',
        num: '01',
        title: 'Faqat formulalarni himoyala!',
        topic: 'Katak himoyasi ketma-ketligi',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Jadvalda formulalarni qulflab, faqat maʼlumot kiritiladigan kataklarni ochiq qoldirish bosqichlarini tartiblang:',
          items: [
            'Maʼlumot kiritilishi kerak bo‘lgan kataklarni belgilash',
            'Format Cells → Protection oynasida Locked belgisini olib tashlash',
            'Review menyusidan Protect Sheet tugmasini bosish',
            'Himoya parolini kiritib tasdiqlash',
          ],
          hint: 'Avval foydalanuvchi yozadigan kataklarni qulfdan chiqarish (Unlock) kerak!',
          explanation: 'Avval ruxsat beriladigan kataklar qulfdan chiqariladi (Unlock), keyin esa Protect Sheet yoqiladi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Sukut bo‘yicha yangi Excel varag‘idagi kataklar qanday himoya holatida bo‘ladi?',
        options: ['Unlocked', 'Locked (lekin Protect Sheet yoqilmaguncha ishlamaydi)', 'Shifrlangan', 'Yashirilgan'],
        answer: 1,
        explanation: 'Barcha kataklar sukut bo‘yicha Locked holatida bo‘ladi, u Protect Sheet yoqilganda faollashadi.',
      },
      {
        prompt: 'Butun faylni ochish uchun parol qo‘yish qaysi funksiya orqali bajariladi?',
        options: ['AutoFit', 'Encrypt with Password', 'Freeze Panes', 'Conditional Formatting'],
        answer: 1,
        explanation: 'Encrypt with Password fayl darajasida ochish parolini o‘rnatadi.',
      },
      {
        prompt: 'Varaqlarni o‘chirish yoki yangi varaq qo‘shishni taqiqlash uchun nima ishlatiladi?',
        options: ['Protect Workbook', 'Hide Column', 'Merge Cells', 'Sort A-Z'],
        answer: 0,
        explanation: 'Protect Workbook ish kitobi strukturasini (varaqlarni o‘zgartirishni) himoyalaydi.',
      },
      {
        prompt: 'Formula satrida (Formula Bar) formulaning ko‘rinishini yashirish uchun Protect Sheet dan oldin qaysi bayroqcha yoqiladi?',
        options: ['Wrap Text', 'Hidden', 'Bold', 'Currency'],
        answer: 1,
        explanation: 'Protection oynasidagi Hidden opsiyasi formulani yashiradi.',
      },
      {
        prompt: 'Jadvaldan nusxa olib tahrirlamasdan, faqat xatolik bilan o‘zgartirishni cheklash uchun eng qulay himoya qaysi?',
        options: ['Read-only / Protect Sheet', 'Fayl kengaytmasini .txt qilish', 'Ekranni o‘chirish', 'Klaviatura uzish'],
        answer: 0,
        explanation: 'Read-only yoki Protect Sheet maʼlumotlarni tasodifiy o‘zgarishdan saqlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Katakni Unlock qilmasdan Protect Sheet bosish xatosini amalda ko‘rsatish.',
      timing: 'Kirish 5 daq, Himoya darajalari 20 daq, Order o‘yini 10 daq, Quiz 10 daq.',
      assessment: 'Amaliy himoyalash ketma-ketligini to‘g‘ri bajarish.',
      homework: '3 xil himoya darajasini (Encrypt, Protect Workbook, Protect Sheet) qisqacha jadvalda taqqoslang.',
    },
  },
  {
    id: 'g10-l35',
    grade: 10,
    no: 35,
    part: '3-chorak',
    title: 'Panel va oynalarni interfeysga mahkamlash',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'Freeze Panes', 'Split'],
    objectives: [
      'O‘quvchi katta jadvallar bilan ishlashda sarlavha qatorlari va ustunlarini ekranda muzlatish (`Freeze Panes`) amallarini qo‘llaydi.',
      'O‘quvchi oynani bo‘lish (`Split`) va bir nechta oynada ko‘rish (`New Window`, `Arrange All`) imkoniyatlarini tushunadi.',
    ],
    intro:
      '500 qatorli o‘quvchilar ro‘yxatini pastga aylantirganingizda jadvalning eng yuqorisidagi ustun nomlari ko‘zdan yo‘qoladimi? Bu muammoni bir klik bilan **Freeze Panes (Oynalarni mahkamlash)** hal qiladi!',
    sections: [
      {
        heading: 'Freeze Panes (Sohalarni muzlatish)',
        body: '`View → Freeze Panes` menyusida 3 ta asosiy imkoniyat bor:\n• **Freeze Top Row**: faqat 1-qatorni (sarlavhani) joyida qotiradi.\n• **Freeze First Column**: faqat A ustunni (masalan, F.I.Sh.) chapda qotiradi.\n• **Freeze Panes**: faol katakdan **yuqoridagi barcha qatorlar** va **chapdagi barcha ustunlarni** bir vaqtda mahkamlaydi!',
        example: '1-qator (Sarlavha) ham, A ustun (Ism) ham ko‘rinib turishi uchun `B2` katagini tanlab `Freeze Panes` bosiladi.',
        tip: 'Muzlatishni bekor qilish uchun yana `View → Freeze Panes → Unfreeze Panes` bosiladi.',
      },
      {
        heading: 'Split (Bo‘lish) va Bir nechta oyna',
        body: '**Split** — jadval oynasini 2 yoki 4 ta mustaqil aylanadigan bo‘lakka ajratadi; har bir bo‘lakda jadvalning turli joyini bir vaqtda ko‘rish mumkin. **New Window + View Side by Side** esa bitta faylning ikkita varag‘ini (masalan, Sheet1 va Sheet2 ni) yonma-yon qo‘yib solishtirish uchun ishlatiladi.',
        example: '1-chorak va 4-chorak maʼlumotlarini solishtirish uchun `New Window` ochib `Arrange All` qilinadi.',
      },
    ],
    keyTerms: [
      { term: 'Freeze Panes', definition: 'Jadval aylantirilganda tanlangan qator va ustunlarni ekranda ko‘rinadigan qilib mahkamlash.' },
      { term: 'Freeze Top Row', definition: 'Faqat 1-qatorni yuqorida doimiy qoldirish.' },
      { term: 'Split Window', definition: 'Jadval ekranini bir nechta mustaqil aylantiriladigan qismlarga bo‘lish.' },
      { term: 'Unfreeze Panes', definition: 'Mahkamlangan qator va ustunlarni bo‘shatish.' },
    ],
    steps: [
      '1. `B2` katagini belgilang va `Freeze Panes` qiling.',
      '2. Pastga va o‘ngga aylantirib, 1-qator hamda A ustun qolganini tekshiring.',
      '3. Quyidagi o‘yinda kerakli katak tanlovini toping.',
    ],
    practice: [
      {
        task: 'Jadvalning dastlabki 3 ta qatori va A, B ustunlari doimiy ko‘rinib turishi uchun qaysi katakni tanlab `Freeze Panes` bosish kerak?',
        expected: '`C4` katagini (chunki `C4` dan yuqorida 1–3 qatorlar, chapda esa A–B ustunlar joylashgan).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l35-g1',
        num: '01',
        title: 'Mahkamlash nuqtasini top',
        topic: 'Freeze Panes va Split',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Oynalarni mahkamlash qoidalariga oid jumlalarni to‘ldiring:',
          template: 'Faqat 1-qatorni joyida qotirish buyrug‘i {{0}} deyiladi. 1-qator va A ustunni birga qotirish uchun {{1}} katagi tanlanib Freeze Panes bosiladi. Ekranni mustaqil aylanadigan bo‘laklarga bo‘lish funksiyasi {{2}} deb ataladi.',
          blanks: [
            { options: ['Freeze Top Row', 'Unfreeze Panes', 'Merge Cells'], answer: 'Freeze Top Row' },
            { options: ['A1', 'B2', 'C3'], answer: 'B2' },
            { options: ['Split', 'Hide', 'Wrap Text'], answer: 'Split' },
          ],
          hint: 'Freeze Panes faol katakning tepasi va chapini muzlatadi!',
          explanation: 'B2 tanlansa 1-qator va A ustun muzlaydi; Split esa oynani bo‘ladi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Katta jadvalni pastga aylantirganda 1-qator sarlavhasi ko‘rinib turishi uchun qaysi buyruq ishlatiladi?',
        options: ['Wrap Text', 'Freeze Top Row', 'Sort A-Z', 'Hide'],
        answer: 1,
        explanation: 'Freeze Top Row faqat birinchi qatorni ekranda mahkamlaydi.',
      },
      {
        prompt: '`C3` katagini tanlab `Freeze Panes` bosilsa, qaysi qator va ustunlar mahkamlanadi?',
        options: [
          'Faqat 3-qator va C ustun',
          '1–2-qatorlar va A–B ustunlar',
          '4–5-qatorlar',
          'Butun varaq muzlaydi',
        ],
        answer: 1,
        explanation: 'Freeze Panes tanlangan katakdan yuqoridagi qatorlarni (1–2) va chapdagi ustunlarni (A–B) muzlatadi.',
      },
      {
        prompt: 'Freeze Panes, Split va Zoom buyruqlari Excelning qaysi menyusida (Ribbon tab) joylashgan?',
        options: ['Insert', 'Formulas', 'View', 'Data'],
        answer: 2,
        explanation: 'Ko‘rish va oyna boshqaruvi buyruqlari View tabida joylashadi.',
      },
      {
        prompt: 'Jadvalning tepasidagi 1-qator bilan 500-qatorini bir ekranda mustaqil aylantirib ko‘rish uchun qaysi amal qulay?',
        options: ['Split', 'Merge', 'Delete', 'AutoSum'],
        answer: 0,
        explanation: 'Split oynani mustaqil aylanadigan panellarga ajratadi.',
      },
      {
        prompt: 'Bitta workbook ichidagi ikkita varaqni yonma-yon solishtirish uchun avval qaysi buyruq beriladi?',
        options: ['New Window', 'Protect Sheet', 'Clear Formats', 'Print Area'],
        answer: 0,
        explanation: 'View → New Window bir fayl uchun ikkinchi oyna ochib beradi, so‘ng Arrange All bilan yonma-yon qo‘yiladi.',
      },
    ],
    teacherNotes: {
      method: '100 qatorli jadvalda `B2` va `C4` kataklaridan Freeze Panes qilish farqini proyektorda ko‘rsatish.',
      timing: 'Kirish 5 daq, Amaliyot 20 daq, FillBlank 10 daq, Quiz 10 daq.',
      assessment: 'To‘g‘ri katak koordinatasini aniqlash bo‘yicha.',
      homework: 'Kataklar muzlatilgan jadvalda `Split` va `Freeze Panes` farqini 3 ta gapda yozing.',
    },
  },
  {
    id: 'g10-l36',
    grade: 10,
    no: 36,
    part: '3-chorak',
    title: 'Elektron jadvalni formatlash. Shartli formatlash',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'Conditional Formatting'],
    objectives: [
      'O‘quvchi sonli formatlar (Currency, Percentage, Date, Custom) va matn tekislashni to‘g‘ri qo‘llaydi.',
      'O‘quvchi maʼlumot qiymatiga qarab katak rangini avtomatik o‘zgartiruvchi **Shartli formatlash (Conditional Formatting)** qoidalarini yaratadi.',
    ],
    intro:
      '1000 ta talabaning baholari ichidan "55 balldan past" olganlarni ko‘z bilan izlash o‘rniga Excel o‘zi ularni qizil rangga bo‘yab qo‘ysa-chi? Bu **Shartli formatlash (Conditional Formatting)** mo‘jizasidir!',
    sections: [
      {
        heading: 'Maʼlumot turlari va son formatlari',
        body: 'Katakdagi sonni chiroyli ko‘rsatish uchun **Number Format** ishlatiladi: `Currency` (so‘m/dollar belgisi), `Percentage` (0.75 → `75%`), `Date` (`14.03.2026`), `Text` (oldida noli bor telefon raqam yoki pochta indeksi yo‘qolmasligi uchun!). Muhimi: formatlash katakning haqiqiy qiymatini emas, faqat *ko‘rinishini* o‘zgartiradi.',
        example: '`0.85` soniga Percentage formati berilsa `85%` ko‘rinadi; agar qo‘lda `85` yozib `%` bersangiz, `8500%` bo‘lib qoladi!',
      },
      {
        heading: 'Shartli formatlash (Conditional Formatting)',
        body: '`Home → Conditional Formatting` qiymatga qarab avtomatik dizayn beradi:\n• **Highlight Cells Rules**: `Greater Than` (>), `Less Than` (<), `Between`, `Duplicate Values` (takroriy yozuvlarni topish).\n• **Top/Bottom Rules**: eng yuqori 10 ta qiymat.\n• **Data Bars / Color Scales / Icon Sets**: katak ichida kichik ustuncha, rangli gradient (yashil→sariq→qizil) yoki svetofor belgilarini chiqaradi.',
        example: 'Ombor jadvalida `Qoldiq < 10` bo‘lsa qizil, `10–50` sariq, `> 50` yashil rangga avtomatik bo‘yaladi — qiymat o‘zgarsa rang ham darhol yangilanadi!',
      },
    ],
    keyTerms: [
      { term: 'Conditional Formatting', definition: 'Katak qiymati belgilangan shartni qanoatlantirganda rang, shrift yoki belgini avtomatik o‘zgartirish.' },
      { term: 'Data Bars', definition: 'Katak ichida qiymat kattaligiga mutanosib gorizontal ustuncha chizuvchi shartli format.' },
      { term: 'Duplicate Values', definition: 'Diapazonda ikki yoki undan ko‘p takrorlangan qiymatlarni rang bilan ajratish.' },
      { term: 'Number Format', definition: 'Sonning ko‘rinish shaklini (valyuta, foiz, sana, kasr xonasi) belgilash.' },
    ],
    steps: [
      '1. Baholar ustuniga `< 60` uchun qizil, `>= 86` uchun yashil shartli format qo‘ying.',
      '2. `Duplicate Values` bilan takroriy ID larni tekshiring.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Katakdagi `0.25` qiymatiga `Percentage` formati berilsa ekranda nima ko‘rinadi?',
        expected: '`25%` (chunki foiz formati sonni 100 ga ko‘paytirib `%` belgisini qo‘shadi).',
        difficulty: 'oson',
      },
      {
        task: 'Mijozlar telefon raqami `0991234567` kiritilganda oldidagi `0` tushib qolmasligi uchun qaysi format tanlanadi?',
        expected: '`Text` formati (yoki raqam oldidan apostrof `\'` qo‘yish).',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l36-g1',
        num: '01',
        title: 'Formatlash usulini tanla',
        topic: 'Son formatlari va Conditional Formatting',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Vazifaga eng mos formatlash vositasini bog‘lang:',
          pairs: [
            { left: 'Takrorlangan ID larni qizil qilish', right: 'Duplicate Values qoidasi' },
            { left: 'Katak ichida mini ustunchalar chizish', right: 'Data Bars' },
            { left: 'Boshidagi 0 yo‘qolmasligi (00124)', right: 'Text formati' },
            { left: '0.5 ni 50% ko‘rinishiga keltirish', right: 'Percentage formati' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Katak qiymati o‘zgarganda rangi ham avtomatik yangilanadigan vosita qaysi?',
        options: ['Fill Color', 'Conditional Formatting', 'Merge & Center', 'Format Painter'],
        answer: 1,
        explanation: 'Oddiy Fill Color rangi o‘zgarmas bo‘ladi, Conditional Formatting esa qiymatga qarab dinamik yangilanadi.',
      },
      {
        prompt: 'Jadvaldagi takroriy (dublikat) qiymatlarni tez topish uchun Conditional Formatting ning qaysi bo‘limi ishlatiladi?',
        options: ['Color Scales', 'Duplicate Values', 'Text Wrap', 'Border'],
        answer: 1,
        explanation: 'Highlight Cells Rules → Duplicate Values takrorlangan qiymatlarni darhol ajratadi.',
      },
      {
        prompt: 'Katakka `45` yozib, so‘ng Percentage (`%`) formatini bossangiz nima ko‘rinadi?',
        options: ['45%', '4500%', '0.45%', '4.5%'],
        answer: 1,
        explanation: 'Foiz formati mavjud sonni 100 ga ko‘paytiradi: 45 × 100 = 4500%.',
      },
      {
        prompt: 'Formatlash katakdagi haqiqiy hisoblanadigan son qiymatini o‘zgartiradimi?',
        options: [
          'Ha, sonni butunlay o‘chiradi',
          'Yo‘q, faqat ekrandagi tashqi ko‘rinishini o‘zgartiradi',
          'Faqat juft sonlarni o‘zgartiradi',
          'Formulani matnga aylantiradi',
        ],
        answer: 1,
        explanation: 'Masalan, `12.3456` ga 2 kasr xonali format bersangiz `12.35` ko‘rinadi, lekin hisobda `12.3456` ishlatiladi.',
      },
      {
        prompt: 'Katak qiymatiga qarab yashil, sariq, qizil uchburchak yoki doira belgilarini qo‘yuvchi vosita qaysi?',
        options: ['Icon Sets', 'AutoSum', 'Freeze Panes', 'Page Break'],
        answer: 0,
        explanation: 'Icon Sets shartli formatlashda vizual belgilar (strelka, svetofor, yulduzcha) chiqaradi.',
      },
    ],
    teacherNotes: {
      method: '0.75 ga Percentage berish bilan 75 ga Percentage berish o‘rtasidagi farqni amalda ko‘rsatish.',
      timing: 'Kirish 5 daq, Number Formats 12 daq, Conditional Formatting 15 daq, Match va Quiz 13 daq.',
      assessment: 'Baholar jadvaliga 3 ta shartli format qo‘yish natijasi.',
      homework: 'Oila xarajatlari jadvalida `> 500 000` bo‘lgan kataklarni avtomatik ajratuvchi qoida tuzing.',
    },
  },
  {
    id: 'g10-l37',
    grade: 10,
    no: 37,
    part: '3-chorak',
    title: 'Formula va funksiyalarni yaratish. Katakka absolyut va nisbiy murojaat',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'Formulalar'],
    objectives: [
      'O‘quvchi formula (`=`) bilan tayyor funksiya (`SUM`, `AVERAGE`, `MIN`, `MAX`) farqini hamda amallar ustuvorligini biladi.',
      'O‘quvchi **Nisbiy (`A1`)**, **Absolyut (`$A$1`)** va **Aralash (`$A1`, `A$1`)** katak murojaatlarini nusxalashda qanday o‘zgarishini aniq hisoblaydi.',
    ],
    intro:
      'Formulani pastga tortganingizda bitta soliq foizi yoki dollar kursi katagi ham pastga siljib ketib `#VALUE!` yoki `0` chiqarganmi? Buning yagona sababi — `$` belgisi (Absolyut murojaat) qo‘yilmaganidadir!',
    sections: [
      {
        heading: 'Nisbiy (Relative) vs Absolyut (Absolute) murojaat',
        body: '• **Nisbiy murojaat (`A2`)**: formula pastga yoki o‘ngga nusxalanganda katak manzili siljishga qarab avtomatik o‘zgaradi (`A2 → A3 → A4`).\n• **Absolyut murojaat (`$A$2`)**: `$` belgisi ustun (`$A`) va qatorni (`$2`) muzlatadi — formula qayerga nusxalanmasin, doim `$A$2` ga qaraydi!\n• **Aralash murojaat (`$A2` yoki `A$2`)**: faqat ustun yoki faqat qator qotiriladi (masalan, ko‘paytirish jadvalida). Klaviatura: **`F4`** tugmasi `$` belgilarini tez aylantiradi.',
        example: 'Dollar kursi `E1` katakda turibdi. `B2` dagi narxni so‘mga o‘girish uchun `=B2*$E$1` yoziladi. Pastga tortilganda `B2` → `B3` bo‘ladi, `$E$1` esa o‘zgarmaydi!',
      },
      {
        heading: 'SheetLab amaliyoti',
        body: 'Quyidagi `SheetLab` laboratoriyasida `B2` dagi narxni `$D$1` dagi kursga ko‘paytirib, to‘g‘ri absolyut murojaatli formulani yozib ko‘ring.',
        example: '`=B2*$D$1` formulasida `$D$1` absolyut murojaatdir.',
        tip: 'Har bir formula `=` belgisi bilan boshlanadi; `F4` bosilsa `D1` → `$D$1` → `D$1` → `$D1` aylanadi.',
      },
    ],
    keyTerms: [
      { term: 'Nisbiy murojaat (A1)', definition: 'Formula nusxalanganda yangi joylashuvga qarab manzili o‘zgaradigan murojaat.' },
      { term: 'Absolyut murojaat ($A$1)', definition: 'Formula nusxalanganda ham ustuni, ham qatori o‘zgarmay qoladigan qotirilgan murojaat.' },
      { term: 'Aralash murojaat ($A1 / A$1)', definition: 'Faqat ustun yoki faqat qatori `$` bilan qotirilgan murojaat.' },
      { term: 'F4 tugmasi', definition: 'Formula yozishda katak manziliga `$` belgilarini tezkor qo‘shish tugmasi.' },
    ],
    steps: [
      '1. `=B2*$D$1` va `=B2*D1` farqini pastga nusxalash misolida tekshiring.',
      '2. `SheetLab` oynasida `C2` katakka absolyut murojaatli formula yozing.',
    ],
    practice: [
      {
        task: '`C2` katakdagi `=B2*$A$1` formulasi `C5` katakka nusxalansa, formula qanday ko‘rinishga keladi?',
        expected: '`=B5*$A$1` (`B2` nisbiy bo‘lgani uchun 3 qator pastga tushib `B5` bo‘ladi, `$A$1` esa absolyut bo‘lgani uchun o‘zgarmaydi).',
        difficulty: 'o‘rta',
      },
      {
        task: 'Ko‘paytirish jadvali (1..9 ustun va qatorlari) bitta formula bilan to‘ldirilishi uchun `B2` katakda qaysi aralash murojaat yoziladi?',
        expected: '`=$A2*B$1` (A ustun qotiriladi, 1-qator qotiriladi).',
        difficulty: 'qiyin',
      },
    ],
    games: [
      {
        id: 'g10-l37-g1',
        num: '01',
        title: 'SheetLab: Absolyut murojaat ($D$1)',
        topic: 'Absolyut va nisbiy murojaatlar',
        difficulty: 'O‘rta',
        engine: 'sheetlab',
        config: {
          prompt: 'D1 katakda valyuta kursi (12500) turibdi. C2 katakka B2 dagi dollarni so‘mga aylantiruvchi absolyut murojaatli formulani yozing (`$D$1` ishlating):',
          rows: 3,
          cols: 4,
          initialCells: {
            A1: 'Mahsulot', B1: 'Narx ($)', C1: 'So‘mda', D1: '12500',
            A2: 'Sichqoncha', B2: '10', C2: '', D2: '',
            A3: 'Klaviatura', B3: '20', C3: '=B3*$D$1', D3: '',
          },
          targetCell: 'C2',
          expectedValue: 125000,
          requiredFormulaTokens: ['B2', '$D$1'],
          hint: 'C2 katakka `=B2*$D$1` formulani kiriting.',
          explanation: '`=B2*$D$1` da `B2` nisbiy, `$D$1` esa absolyut murojaat bo‘lib, kursni qotirib turadi!',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Qaysi murojaat formula boshqa katakka nusxalanganda umuman o‘zgarmaydi?',
        options: ['B2', '$B$2', '$B2', 'B$2'],
        answer: 1,
        explanation: 'Ham ustun (`$B`), ham qator (`$2`) oldida `$` bo‘lsa, bu to‘liq absolyut murojaatdir.',
      },
      {
        prompt: 'E2 katakda `=A2*$D$1` formulasi bor. Uni E4 katakka ko‘chirsak formula qanday bo‘ladi?',
        options: ['=A4*$D$3', '=A4*$D$1', '=A2*$D$1', '=C4*$D$1'],
        answer: 1,
        explanation: '2 qator pastga siljiganda `A2` → `A4` ga o‘zgaradi, `$D$1` esa o‘zgarmay qoladi.',
      },
      {
        prompt: 'Formula yozayotganda katak manzilini absolyut (`$`) ga aylantirish uchun qaysi klavish bosiladi?',
        options: ['F1', 'F4', 'F5', 'F12'],
        answer: 1,
        explanation: 'F4 tugmasi murojaat turlari (nisbiy → absolyut → aralash) orasida almashtiradi.',
      },
      {
        prompt: '`C$5` murojaati qanday murojaat turiga kiradi?',
        options: ['Nisbiy', 'Absolyut', 'Aralash (Mixed) — qator qotirilgan', 'Xato murojaat'],
        answer: 2,
        explanation: 'Faqat 5-qator oldida `$` turibdi, C ustun esa nisbiy — bu aralash murojaat.',
      },
      {
        prompt: 'Excelda barcha formulalar qaysi belgi bilan boshlanishi shart?',
        options: ['#', '=', '@', '$'],
        answer: 1,
        explanation: 'Tenglik (`=`) belgisi katakdagi matn emas, hisoblanadigan formula ekanini bildiradi.',
      },
    ],
    teacherNotes: {
      method: 'SheetLab da `$D$1` siz va `$D$1` bilan yozish farqini `C3` ga nusxalash misolida ko‘rsatish.',
      timing: 'Kirish 5 daq, Absolyut murojaat 18 daq, SheetLab 12 daq, Quiz 10 daq.',
      assessment: 'SheetLab topshirig‘i va nusxalash masalalari.',
      homework: 'Aralash murojaat (`=$A2*B$1`) bilan 5×5 ko‘paytirish jadvali tuzing.',
    },
  },
  {
    id: 'g10-l38',
    grade: 10,
    no: 38,
    part: '3-chorak',
    title: 'Nomlangan katak va diapazon',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'Name Box', 'Name Manager'],
    objectives: [
      'O‘quvchi katak yoki diapazonga mantiqiy nom (**Named Range**) berish va uni formulalarda ishlatishni o‘rganadi.',
      'O‘quvchi nomlangan diapazonning xatoni kamaytirish va formulani o‘qishni osonlashtirishdagi afzalliklarini tushunadi.',
    ],
    intro:
      '`=SUM(C2:C145)*$H$1` formulasini o‘qish qiyinmi? Endi tasavvur qiling: `=SUM(Sotuvlar)*QQS_Foiz`! Kataklarga nom berish formulalarni inson tiliga yaqinlashtiradi.',
    sections: [
      {
        heading: 'Nomlangan diapazon (Named Range) yaratish',
        body: 'Katak yoki diapazonni tanlab, chap yuqoridagi **Name Box** (Manzil maydoni) ga nom yozib `Enter` bossangiz, u nomlanadi. Yoki `Formulas → Name Manager` orqali barcha nomlarni ko‘rish, tahrirlash va o‘chirish mumkin.',
        example: '`D1` katakka `Kurs` deb nom bersangiz, istalgan varaqda `=B2*Kurs` deb yozishingiz mumkin — bu avtomatik absolyut murojaat kabi ishlaydi!',
      },
      {
        heading: 'Nom berish qoidalari',
        body: '• Nom **harf** yoki `_` bilan boshlanishi kerak (raqam bilan boshlanmaydi: `1_chorak` xato, `Chorak_1` to‘g‘ri).\n• Nom ichida **bo‘sh joy (probel)** bo‘lishi mumkin emas — o‘rniga `_` ishlating (`Ish_Haqi`).\n• Katak manzili bilan bir xil nom berish taqiqlanadi (masalan, `A1` yoki `C2026`).',
        example: 'To‘g‘ri nomlar: `QQS`, `Oylik_Maosh`, `Baholar_8A`. Noto‘g‘ri nomlar: `Oylik Maosh` (probel bor), `2026_Yil` (raqamdan boshlangan).',
        tip: 'Nomlangan katak boshqa varaqdan (Sheet2 dan Sheet1 ga) murojaat qilganda ham oson ishlaydi!',
      },
    ],
    keyTerms: [
      { term: 'Named Range', definition: 'Katak yoki diapazonga formula ichida ishlatish uchun berilgan mantiqiy nom.' },
      { term: 'Name Box', definition: 'Formula satrining chap tomonida joylashgan, katak manzili yoki nomini kiritish maydoni.' },
      { term: 'Name Manager', definition: 'Barcha nomlangan diapazonlarni yaratish, tahrirlash va o‘chirish oynasi.' },
      { term: 'Scope (Amal doirasi)', definition: 'Berilgan nomning butun Workbook da yoki faqat bitta varaqda ko‘rinishi.' },
    ],
    steps: [
      '1. Nom berishning 3 ta taqiqlangan holatini yodlang.',
      '2. `Name Box` va `Name Manager` farqini ayting.',
      '3. Quyidagi To‘g‘ri/Noto‘g‘ri o‘yinida nom qoidalarini tekshiring.',
    ],
    practice: [
      {
        task: 'Nima uchun `1chorak` va `Katta narx` nomlarini Excel qabul qilmaydi?',
        expected: '`1chorak` raqam bilan boshlangan, `Katta narx` ichida esa probel bor. To‘g‘ri shakli: `Chorak_1` va `Katta_narx`.',
        difficulty: 'oson',
      },
      {
        task: 'Nomlangan katak (`Kurs`) formula nusxalanganda nisbiy bo‘ladimi yoki absolyut?',
        expected: 'Absolyut! Nomlangan katak yoki diapazon qayerga nusxalanmasin, aynan o‘sha belgilangan joyga murojaat qiladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l38-g1',
        num: '01',
        title: 'Nomlangan diapazon qoidalari',
        topic: 'To‘g‘ri va noto‘g‘ri nomlar',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Nomlangan katak va diapazon qoidalarini tekshiring:',
          statements: [
            { text: '`QQS_Foiz` nomidan Excelda bemalol foydalanish mumkin.', isTrue: true, explanation: 'Harf bilan boshlangan va bo‘sh joysiz (`_`) nom to‘liq ruxsat etiladi.' },
            { text: '`Oylik Maosh` (o‘rtasida bo‘sh joy bilan) ruxsat etilgan diapazon nomi hisoblanadi.', isTrue: false, explanation: 'Diapazon nomida bo‘sh joy (probel) ishlatish taqiqlanadi; `_` qo‘yilishi shart.' },
            { text: '`3_Chorak` raqam bilan boshlangani uchun Excel uni qabul qilmaydi.', isTrue: true, explanation: 'Nom harf yoki `_` bilan boshlanishi shart.' },
            { text: '`B12` nomi katak manzili bilan bir xil bo‘lgani uchun uni nom sifatida berib bo‘lmaydi.', isTrue: true, explanation: 'Haqiqiy katak manzili (A1, B12, C2025) nom sifatida taqiqlanadi.' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Qaysi nomlangan diapazon nomi Excel qoidalariga TO‘G‘RI keladi?',
        options: ['2026_Sotuv', 'Oylik Daromad', 'Sotuv_2026', 'C10'],
        answer: 2,
        explanation: '`Sotuv_2026` harf bilan boshlangan va probelsiz (`_`) yozilgan.',
      },
      {
        prompt: 'Yaratilgan barcha nomlangan diapazonlarni o‘zgartirish yoki o‘chirish oynasi qayerda joylashgan?',
        options: ['Home → Paste', 'Formulas → Name Manager', 'View → Freeze Panes', 'Insert → Chart'],
        answer: 1,
        explanation: 'Name Manager barcha nomlar ro‘yxati va ularning diapazonlarini boshqaradi.',
      },
      {
        prompt: 'Katakka tezkor nom berish uchun manzil yoziladigan chap yuqori maydon qanday ataladi?',
        options: ['Status Bar', 'Name Box', 'Scroll Bar', 'Ribbon'],
        answer: 1,
        explanation: 'Name Box faol katak manzilini ko‘rsatadi va unga yangi nom yozib Enter bosish mumkin.',
      },
      {
        prompt: 'Nomlangan katakni formulada ishlatishning asosiy afzalligi nima?',
        options: [
          'Formula o‘qilishi osonlashadi va avtomatik absolyut murojaat kabi ishlaydi',
          'Fayl hajmi 100 barobar kattalashadi',
          'Faqat matnli kataklarda ishlaydi',
          'Internet tezligini oshiradi',
        ],
        answer: 0,
        explanation: '`=B2*QQS` kabi formula o‘qishga juda tushunarli bo‘ladi va nusxalashda siljib ketmaydi.',
      },
      {
        prompt: 'Quyidagi nomlardan qaysi biri katak manzili bilan to‘qnashgani uchun taqiqlanadi?',
        options: ['Narxlar', 'Jami_Summa', 'A25', '_Budjet'],
        answer: 2,
        explanation: '`A25` haqiqiy katak manzili bo‘lgani uchun uni nom sifatida qo‘yib bo‘lmaydi.',
      },
    ],
    teacherNotes: {
      method: 'Name Box da nom yozgandan so‘ng albatta Enter bosish shartligini amalda ko‘rsatish.',
      timing: 'Kirish 5 daq, Qoidalar 18 daq, TrueFalse o‘yini 12 daq, Quiz 10 daq.',
      assessment: 'To‘g‘ri nom tuzish va `Name Manager` dan foydalanish.',
      homework: 'Oldingi darsdagi valyuta kursi katagini `Kurs` deb nomlab, `=B2*Kurs` formulasini yozing.',
    },
  },
  {
    id: 'g10-l39',
    grade: 10,
    no: 39,
    part: '3-chorak',
    title: 'Yaxlitlash funksiyalari',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'ROUND', 'ROUNDUP / ROUNDDOWN'],
    objectives: [
      'O‘quvchi `ROUND`, `ROUNDUP`, `ROUNDDOWN` va `INT` funksiyalarining matematik farqini tushunadi.',
      'O‘quvchi yaxlitlash funksiyasi bilan oddiy "Decrease Decimal" (kasr xonasini kamaytirish) formatlash o‘rtasidagi muhim farqni ajratadi.',
    ],
    intro:
      'Agar katakda `4.54` turgan bo‘lsa-yu, faqat butun son ko‘rsatish formati berilsa `5` ko‘rinadi, lekin hisobda baribir `4.54` ishlatiladi! Haqiqiy qiymatni o‘zgartirish uchun **`ROUND`** oilasi funksiyalari kerak.',
    sections: [
      {
        heading: 'ROUND, ROUNDUP, ROUNDDOWN va INT',
        body: '• **`=ROUND(son, xona)`**: matematik qoida bo‘yicha yaxlitlaydi (`>= 5` yuqoriga, `< 5` pastga). Masalan, `=ROUND(3.456, 2)` → `3.46`; `=ROUND(3.456, 0)` → `3`.\n• **`=ROUNDUP(son, xona)`**: nol dan uzoqqa (doim yuqoriga) yaxlitlaydi (`=ROUNDUP(3.12, 0)` → `4`).\n• **`=ROUNDDOWN(son, xona)`**: nol ga yaqin (doim pastga/kesib) yaxlitlaydi (`=ROUNDDOWN(3.99, 0)` → `3`).\n• **`=INT(son)`**: eng yaqin kichik butun songa tushiradi (`INT(4.9)` → `4`, `INT(-4.2)` → `-5`).',
        example: '10 ta odamga 4 o‘rinli taksi kerak: `10/4 = 2.5`. Yarimta taksi chaqirib bo‘lmaydi, shuning uchun `=ROUNDUP(10/4, 0)` → `3` ta taksi!',
      },
      {
        heading: 'Manfiy xona soni (-1, -2)',
        body: 'Ikkinchi argument manfiy bo‘lsa, butun qismni o‘nliklar (`-1`), yuzliklar (`-2`) ga yaxlitlaydi: `=ROUND(1248, -2)` → `1200`.',
        tip: 'Quyidagi `SheetLab` mashqida `ROUND` funksiyasidan foydalanib o‘rtacha qiymatni 1 kasr xonagacha yaxlitlang.',
      },
    ],
    keyTerms: [
      { term: 'ROUND(son, xona)', definition: 'Matematik qoida bo‘yicha belgilangan o‘nli xonagacha yaxlitlovchi funksiya.' },
      { term: 'ROUNDUP', definition: 'Qoldiq qanchalik kichik bo‘lmasin, doim yuqori razryadga yaxlitlovchi funksiya.' },
      { term: 'ROUNDDOWN', definition: 'Qoldiqni tashlab, doim pastga yaxlitlovchi funksiya.' },
      { term: 'INT', definition: 'Sondan kichik yoki teng eng katta butun sonni qaytaruvchi funksiya.' },
    ],
    steps: [
      '1. `ROUND`, `ROUNDUP`, `ROUNDDOWN` natijalarini solishtiring.',
      '2. `SheetLab` da `ROUND` funksiyasini qo‘llang.',
    ],
    practice: [
      {
        task: '`=ROUND(15.674, 1)` va `=ROUNDDOWN(15.674, 1)` natijalari nima chiqadi?',
        expected: '`ROUND(15.674, 1)` → `15.7`; `ROUNDDOWN(15.674, 1)` → `15.6`.',
        difficulty: 'oson',
      },
      {
        task: 'Bir qutiga 12 ta ruchka sig‘adi. 50 ta ruchkani joylash uchun nechta quti kerakligini qaysi funksiya bilan hisoblaymiz?',
        expected: '`=ROUNDUP(50/12, 0)` — natija `5` quti (chunki 4 qutiga 48 ta sig‘adi, qolgan 2 tasi uchun 5-quti shart).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l39-g1',
        num: '01',
        title: 'SheetLab: ROUND funksiyasi',
        topic: 'Yaxlitlash funksiyalari',
        difficulty: 'O‘rta',
        engine: 'sheetlab',
        config: {
          prompt: 'A2 katakda 14.378 soni bor. B2 katakka uni ROUND funksiyasi yordamida 1 ta o‘nli xonagacha yaxlitlab yozing:',
          rows: 2,
          cols: 2,
          initialCells: {
            A1: 'Asl son', B1: 'Yaxlitlangan',
            A2: '14.378', B2: '',
          },
          targetCell: 'B2',
          expectedValue: 14.4,
          requiredFormulaTokens: ['ROUND', 'A2', '1'],
          hint: 'B2 katakka `=ROUND(A2, 1)` deb yozing.',
          explanation: '`=ROUND(14.378, 1)` yuzdan 7 qismini yuqoriga yaxlitlab aniq `14.4` qiymatini beradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: '`=ROUND(7.49, 0)` formulasi qanday natija qaytaradi?',
        options: ['8', '7', '7.5', '7.4'],
        answer: 1,
        explanation: 'O‘ndan bir xonadagi raqam `4` (< 5) bo‘lgani uchun `7` ga yaxlitlanadi.',
      },
      {
        prompt: '`=ROUNDUP(4.01, 0)` natijasi nima?',
        options: ['4', '4.1', '5', '0'],
        answer: 2,
        explanation: 'ROUNDUP har qanday noldan katta qoldiqda yuqoriga (`5` ga) yaxlitlaydi.',
      },
      {
        prompt: '`=ROUNDDOWN(9.99, 1)` formulasi nimani qaytaradi?',
        options: ['10', '9.9', '9', '10.0'],
        answer: 1,
        explanation: '1 ta o‘nli xonadan keyingi raqam kesib tashlanadi: `9.9`.',
      },
      {
        prompt: '`=ROUND(2360, -2)` natijasi qaysi?',
        options: ['2300', '2400', '2360', '2000'],
        answer: 1,
        explanation: '`-2` yuzliklar xonasigacha yaxlitlaydi: 60 >= 50 bo‘lgani uchun `2400`.',
      },
      {
        prompt: 'Kasr xonasini toolbar tugmasi bilan yashirish (`Decrease Decimal`) va `ROUND` orasidagi farq nima?',
        options: [
          'Toolbar faqat ko‘rinishni o‘zgartiradi, `ROUND` esa haqiqiy qiymatni o‘zgartiradi',
          'Hech qanday farqi yo‘q',
          '`ROUND` faqat matn uchun',
          'Toolbar butun faylni o‘chiradi',
        ],
        answer: 0,
        explanation: 'Keyingi ko‘paytirish va yig‘indilarda `ROUND` yaxlitlangan haqiqiy sondan foydalanadi.',
      },
    ],
    teacherNotes: {
      method: 'Formatlash vs `ROUND` farqini `=1.4 + 1.4` misolida ko‘rsatish.',
      timing: 'Kirish 5 daq, Yaxlitlash funksiyalari 18 daq, SheetLab 12 daq, Quiz 10 daq.',
      assessment: 'SheetLab va manfiy razryad (`-1`, `-2`) misollarini yechish.',
      homework: '`ROUND`, `ROUNDUP`, `ROUNDDOWN` uchun 3 tadan misol yozib natijasini hisoblang.',
    },
  },
  {
    id: 'g10-l40',
    grade: 10,
    no: 40,
    part: '3-chorak',
    title: 'Sana va vaqtga oid funksiyalar. Shartli funksiyalar. Qidirish funksiyalari',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'IF', 'VLOOKUP', 'TODAY'],
    objectives: [
      'O‘quvchi sana-vaqt funksiyalari (`TODAY`, `NOW`, `YEAR`, `MONTH`, `DAY`) va shartli (`IF`, `AND`, `OR`) funksiyalarni qo‘llaydi.',
      'O‘quvchi vertikal qidiruv **`VLOOKUP`** hamda gorizontal qidiruv **`HLOOKUP`** parametrlarini tushunadi.',
    ],
    intro:
      'Mahsulot kodini yozganingizda uning nomi va narxi boshqa jadvaldan avtomatik topilib chiqishi yoki talaba balliga qarab "O‘tdi/Yiqildi" yozuvi chiqishi Excelning eng kuchli funksiyalari — **`IF`** va **`VLOOKUP`** yordamida amalga oshadi!',
    sections: [
      {
        heading: 'Sana va shartli funksiyalar',
        body: '• **`TODAY()`** — bugungi sanani, **`NOW()`** — sana va joriy vaqtni qaytaradi. `YEAR(A1)`, `MONTH(A1)`, `DAY(A1)` sana qismlarini ajratadi.\n• **`IF(shart, rost_qiymat, yolg‘on_qiymat)`**: masalan, `=IF(B2>=56, "O‘tdi", "Qayta topshirish")`. Murakkab holatlarda ichma-ich (`Nested IF`) yoki `AND`/`OR` bilan birga yoziladi.',
        example: '`=IF(AND(B2>=86, C2>=86), "Aʼlochi", "Oddiy")`.',
      },
      {
        heading: 'Qidirish funksiyalari: VLOOKUP va HLOOKUP',
        body: '`=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`:\n1) **`lookup_value`**: nimani qidiramiz (masalan, `A2` dagi kod).\n2) **`table_array`**: qaysi maʼlumotnoma jadvalidan qidiramiz (odatda `$F$2:$H$50` absolyut!).\n3) **`col_index_num`**: topilgach jadvalning nechanchi ustunidan qiymat olinsin (masalan, 2-ustun).\n4) **`FALSE` (yoki `0`)**: **aniq moslik** (Exact match); `TRUE` (yoki `1`) — taqribiy oraliq moslik (jadval o‘sish tartibida saralangan bo‘lishi shart!).\n**HLOOKUP** xuddi shunday ishlaydi, faqat ustun bo‘ylab emas, qator (Horizontal) bo‘ylab qidiradi.',
        example: '`=VLOOKUP(A2, $E$2:$G$10, 3, FALSE)` — `A2` dagi mahsulot kodini `$E$2:$G$10` jadvalining 1-ustunidan aniq izlab, 3-ustundagi narxini qaytaradi.',
        tip: '`VLOOKUP` ning muhim cheklovi: qidiriladigan kalit qiymat har doim `table_array` ning **eng chap (1-chi) ustunida** bo‘lishi kerak!',
      },
    ],
    keyTerms: [
      { term: 'TODAY() / NOW()', definition: 'Joriy sana (TODAY) yoki joriy sana va vaqtni (NOW) qaytaruvchi argumentsiz funksiyalar.' },
      { term: 'IF(shart, rost, yolg‘on)', definition: 'Mantiqiy shart rost yoki yolg‘onligiga qarab ikki xil natija beruvchi funksiya.' },
      { term: 'VLOOKUP', definition: 'Jadvalning chap ustunidan qiymat izlab, o‘ngdagi belgilangan ustundan maʼlumot oluvchi funksiya.' },
      { term: 'FALSE (Exact Match)', definition: 'VLOOKUP da aynan o‘xshash (aniq) qiymatni topish rejimi.' },
    ],
    steps: [
      '1. `VLOOKUP` ning 4 ta argumentini ketma-ket eslab qoling.',
      '2. Quyidagi bo‘shliqni to‘ldirish o‘yinida `IF`, `TODAY` va `VLOOKUP` ni joylashtiring.',
    ],
    practice: [
      {
        task: '`=VLOOKUP(D2, $A$2:$C$20, 2, FALSE)` formulasida `2` va `FALSE` nimani anglatadi?',
        expected: '`2` — natija `$A$2:$C$20` diapazonining 2-ustunidan (B ustundan) olinishini; `FALSE` — aynan aniq moslik (Exact match) izlanishini bildiradi.',
        difficulty: 'oson',
      },
      {
        task: 'Agar qidirilayotgan "Ism" 3-ustunda, olinishi kerak bo‘lgan "ID" esa 1-ustunda joylashgan bo‘lsa, oddiy `VLOOKUP` ishlaydimi?',
        expected: 'Yo‘q, `VLOOKUP` chapga qarab qidira olmaydi! Buning uchun ustunlar o‘rnini almashtirish yoki `INDEX + MATCH` ishlatish kerak (keyingi dars!).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l40-g1',
        num: '01',
        title: 'Funksiya laboratoriyasi',
        topic: 'TODAY, IF va VLOOKUP',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Vazifaga mos Excel funksiyasini bo‘sh joyga qo‘ying:',
          template: 'Katakda faqat bugungi sanani avtomatik chiqarish uchun ={{0}}() yoziladi. Ball 60 dan katta bo‘lsa "O‘tdi", aks holda "Yiqildi" chiqarish uchun ={{1}}(...) ishlatiladi. Jadvalning birinchi ustunidan kodni izlab, 3-ustundan narxni olish uchun ={{2}}(...) kerak.',
          blanks: [
            { options: ['TODAY', 'ROUND', 'SUM'], answer: 'TODAY' },
            { options: ['COUNT', 'IF', 'MAX'], answer: 'IF' },
            { options: ['VLOOKUP', 'AVERAGE', 'MIN'], answer: 'VLOOKUP' },
          ],
          hint: 'TODAY — sana; IF — shart; VLOOKUP — vertikal jadvaldan qidiruv.',
          explanation: 'TODAY() joriy sanani beradi, IF shart tekshiradi, VLOOKUP esa vertikal jadvaldan izlaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: '`VLOOKUP(A2, $E$2:$G$15, 3, FALSE)` formulasida qaysi ustundan javob olinadi?',
        options: ['A ustundan', 'E ustundan (1-ustun)', 'G ustundan (3-ustun)', 'F ustundan'],
        answer: 2,
        explanation: 'Diapazon E:G (3 ta ustun: 1=E, 2=F, 3=G). `3` bo‘lgani uchun G ustunidan qiymat olinadi.',
      },
      {
        prompt: 'Qatorlar bo‘ylab gorizontal qidiruvni qaysi funksiya bajaradi?',
        options: ['VLOOKUP', 'HLOOKUP', 'COUNTIF', 'TODAY'],
        answer: 1,
        explanation: 'HLOOKUP (Horizontal Lookup) jadvalning yuqori qatoridan izlab, pastki qatorlardan qiymat oladi.',
      },
      {
        prompt: 'VLOOKUP formulasining 4-argumenti `FALSE` (yoki `0`) bo‘lishi nimani bildiradi?',
        options: [
          'Taqribiy moslikni',
          'Aynan aniq moslik (Exact match) ni izlashni',
          'Formula ishlamasligini',
          'Faqat musbat sonlarni olishni',
        ],
        answer: 1,
        explanation: 'Kodlar, ID lar va ismlarni izlaganda doim `FALSE` (aniq moslik) qo‘yiladi.',
      },
      {
        prompt: '`=IF(B2>=56, "O‘tdi", "Qoldi")` formulasi `B2=56` bo‘lganda nimani chiqaradi?',
        options: ['Qoldi', 'O‘tdi', 'TRUE', '#VALUE!'],
        answer: 1,
        explanation: '`56 >= 56` sharti rost (TRUE), shuning uchun birinchi qiymat `"O‘tdi"` chiqadi.',
      },
      {
        prompt: 'Ham bugungi sanani, ham joriy soat-daqiqani qaytaruvchi funksiya qaysi?',
        options: ['TODAY()', 'NOW()', 'DATE()', 'TIME()'],
        answer: 1,
        explanation: 'TODAY() faqat sanani, NOW() esa sana va vaqtni birga ko‘rsatadi.',
      },
    ],
    teacherNotes: {
      method: 'VLOOKUP da `$F$2:$H$20` diapazonini absolyut qilishni unutsak formula pastga tortilganda siljishini ko‘rsatish.',
      timing: 'Kirish 5 daq, Sana & IF 12 daq, VLOOKUP/HLOOKUP 15 daq, FillBlank va Quiz 13 daq.',
      assessment: 'VLOOKUP ning 4 ta argumentini to‘g‘ri izohlash.',
      homework: '5 ta mahsulot kodlari jadvalidan narxni VLOOKUP bilan chiqaruvchi formula tuzing.',
    },
  },
  {
    id: 'g10-l41',
    grade: 10,
    no: 41,
    part: '3-chorak',
    title: 'INDEX va MATCH funksiyalari',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'INDEX', 'MATCH'],
    objectives: [
      'O‘quvchi **`MATCH`** funksiyasi elementning ro‘yxatdagi *tartib o‘rnini (raqamini)*, **`INDEX`** esa berilgan *qator/ustun raqami* bo‘yicha katak qiymatini qaytarishini biladi.',
      'O‘quvchi `INDEX + MATCH` juftligi nima uchun `VLOOKUP` dan ustunroq ekanini (chapga ham qidirish, ustun qo‘shilganda buzilmaslik) tushunadi.',
    ],
    intro:
      '`VLOOKUP` chapga qaray olmaydi va jadval o‘rtasiga yangi ustun qo‘shsangiz formulasi buziladi! Professional tahlilchilar shu muammolarni hal qilish uchun **`INDEX + MATCH`** juftligidan foydalanadilar.',
    sections: [
      {
        heading: 'MATCH va INDEX alohida qanday ishlaydi?',
        body: '1) **`=MATCH(qiymat, diapazon, 0)`** — qidirilgan qiymat diapazonning nechanchi katagida turganini (tartib raqamini) qaytaradi (`0` — aniq moslik).\n   Misol: `A2:A5` da `[Olma, Anor, Nok, Uzum]` bo‘lsa, `=MATCH("Nok", A2:A5, 0)` → **`3`**.\n2) **`=INDEX(diapazon, qator_raqami)`** — diapazondan aynan shu tartib raqamidagi qiymatni oladi.\n   Misol: `B2:B5` narxlar `[5000, 12000, 8000, 10000]` bo‘lsa, `=INDEX(B2:B5, 3)` → **`8000`**.',
        example: 'Ikki funksiyani birlashtirsak: `=INDEX(B2:B5, MATCH("Nok", A2:A5, 0))` → `8000`!',
      },
      {
        heading: 'Nima uchun INDEX + MATCH VLOOKUP dan kuchli?',
        body: '• **Istalgan tomonga qidiradi**: qidiruv ustuni natija ustunidan o‘ngda bo‘lsa ham (chapga qidirish) muammosiz ishlaydi!\n• **Barqarorlik**: o‘rtaga yangi ustun qo‘shsangiz ham `INDEX` diapazoni avtomatik siljiydi (`VLOOKUP` dagi qotirilgan `3` raqami kabi buzilmaydi).\n• **Tezkorlik**: katta 100 000 qatorli jadvallarda faqat 2 ta ustunni tekshirgani uchun tezroq ishlaydi.',
        tip: 'Esda saqlash usuli: `MATCH` — "Nechanchi qatorda?" degan savolga raqam qaytaradi; `INDEX` — "O‘sha qatordagi qiymatni olib ber" deydi!',
      },
    ],
    keyTerms: [
      { term: 'MATCH(qiymat, diapazon, 0)', definition: 'Qiymatning diapazon ichidagi tartib o‘rnini (butun son) qaytaruvchi funksiya.' },
      { term: 'INDEX(diapazon, raqam)', definition: 'Diapazon ichidagi ko‘rsatilgan tartib raqamdagi katak qiymatini oluvchi funksiya.' },
      { term: 'Chapga qidirish (Left Lookup)', definition: 'Qidiruv kaliti o‘ng ustunda, natija esa chap ustunda bo‘lganda izlash imkoniyati.' },
      { term: 'Ikki o‘lchovli INDEX', definition: 'INDEX(jadval, qator_raqami, ustun_raqami) orqali matritsadan qiymat olish.' },
    ],
    steps: [
      '1. `MATCH` qanday son qaytarishini misolda hisoblang.',
      '2. `INDEX` ga `MATCH` natijasini uzating.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: '`C2:C5` da `["Toshkent", "Samarqand", "Buxoro", "Xiva"]` joylashgan. `=MATCH("Buxoro", C2:C5, 0)` nechchi qaytaradi?',
        expected: '`3` (chunki "Buxoro" ushbu diapazonda 3-o‘rinda turibdi).',
        difficulty: 'oson',
      },
      {
        task: 'Mijoz ismi `D` ustunda, uning ID raqami esa `A` ustunda. Ism bo‘yicha ID ni topuvchi `INDEX + MATCH` formulasini yozing.',
        expected: '`=INDEX($A$2:$A$50, MATCH(F2, $D$2:$D$50, 0))` — chapga qidirishni muammosiz bajaradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l41-g1',
        num: '01',
        title: 'INDEX va MATCH mantiqi',
        topic: 'Qidiruv funksiyalarini taqqoslash',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir funksiya yoki xususiyatni to‘g‘ri tavsifiga bog‘lang:',
          pairs: [
            { left: 'MATCH("Olma", A2:A5, 0)', right: 'Elementning diapazondagi tartib o‘rnini (raqamini) qaytaradi' },
            { left: 'INDEX(B2:B5, 3)', right: 'Ko‘rsatilgan 3-qatordagi katak qiymatini olib beradi' },
            { left: 'INDEX + MATCH afzalligi', right: 'Natija kalit ustunning chap tomonida bo‘lsa ham ishlaydi' },
            { left: 'MATCH da 0 parametri', right: 'Aynan aniq moslikni (Exact match) talab qiladi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '`MATCH` funksiyasi natija sifatida nimani qaytaradi?',
        options: [
          'Katakdagi matnni',
          'Topilgan elementning diapazon ichidagi tartib raqamini (masalan, 4)',
          'Joriy sanani',
          'Barcha qiymatlar yig‘indisini',
        ],
        answer: 1,
        explanation: 'MATCH qiymatning o‘zini emas, uning ro‘yxatdagi o‘rnini (pozitsiyasini) qaytaradi.',
      },
      {
        prompt: '`A1:A4` da `[100, 200, 300, 400]` bor. `=INDEX(A1:A4, 2)` nimani chiqaradi?',
        options: ['100', '200', '2', '300'],
        answer: 1,
        explanation: '2-o‘rinda turgan qiymat — `200`.',
      },
      {
        prompt: '`INDEX + MATCH` juftligining `VLOOKUP` ga nisbatan eng katta ustunligi qaysi?',
        options: [
          'Chap ustundagi qiymatlarni ham izlab topa oladi va ustun qo‘shilganda buzilmaydi',
          'Faqat 10 ta qator bilan ishlaydi',
          'Tenglik belgisisiz yoziladi',
          'Faqat sanani yaxlitlaydi',
        ],
        answer: 0,
        explanation: 'VLOOKUP faqat o‘ngga qaraydi, INDEX+MATCH esa istalgan ustunga bog‘lana oladi.',
      },
      {
        prompt: '`=MATCH("Ali", B2:B6, 0)` formulasidagi `0` nimani bildiradi?',
        options: ['Nolga bo‘lish', 'Aniq moslikni (Exact match)', 'O‘sish tartibini', 'Bo‘sh katakni'],
        answer: 1,
        explanation: 'MATCH da `0` (VLOOKUP dagi FALSE kabi) aniq moslikni anglatadi.',
      },
      {
        prompt: 'Ikkita ustundan qiymat olishda avval qaysi funksiya bajarilib, qator raqamini topib beradi?',
        options: ['ROUND', 'MATCH', 'TODAY', 'MAX'],
        answer: 1,
        explanation: 'Ichkarida yozilgan `MATCH(...)` avval bajarilib INDEX ga qator raqamini uzatadi.',
      },
    ],
    teacherNotes: {
      method: 'VLOOKUP da ustun qo‘shganda natija buzilishini, INDEX+MATCH da esa saqlanib qolishini jonli ko‘rsatish.',
      timing: 'Kirish 5 daq, MATCH & INDEX 20 daq, Match o‘yini 10 daq, Quiz 10 daq.',
      assessment: 'Chapga qidirish formulasini mustaqil tuza olish.',
      homework: 'Ism bo‘yichaID ni chap ustundan oluvchi `INDEX + MATCH` formulasini yozib keling.',
    },
  },
  {
    id: 'g10-l42',
    grade: 10,
    no: 42,
    part: '3-chorak',
    title: 'Shartli statistik funksiyalar',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'COUNTIF', 'SUMIF', 'AVERAGEIF'],
    objectives: [
      'O‘quvchi **`COUNT`**, **`COUNTA`**, **`COUNTIF`**, **`SUMIF`** va **`AVERAGEIF`** funksiyalarini farqlaydi.',
      'O‘quvchi berilgan mezon (masalan, `">=80"`, `"Toshkent"`) bo‘yicha shartli hisob-kitob formulalarini yozadi.',
    ],
    intro:
      'Sinfda 30 ta o‘quvchi bor — ulardan nechtasi `"Aʼlo"` baho olganini yoki faqat `"Kitob"` toifasidan tushgan jami daromadni bir zumda hisoblash uchun **`COUNTIF`** va **`SUMIF`** funksiyalari xizmat qiladi!',
    sections: [
      {
        heading: 'Sanash funksiyalari: COUNT, COUNTA, COUNTIF',
        body: '• **`COUNT(diapazon)`**: faqat **sonli** kataklarni sanaydi.\n• **`COUNTA(diapazon)`**: **bo‘sh bo‘lmagan** barcha kataklarni (matn + son) sanaydi.\n• **`COUNTIF(diapazon, mezon)`**: faqat **shartga mos** kataklarni sanaydi! Masalan: `=COUNTIF(B2:B30, "Aʼlo")` yoki `=COUNTIF(C2:C30, ">=86")`.',
        example: 'Eʼtibor bering: matnli va taqqoslash (`">50"`) mezonlari doimo qo‘shtirnoq `""` ichiga olinadi!',
      },
      {
        heading: 'SUMIF va AVERAGEIF (Shartli yig‘indi va o‘rtacha)',
        body: '• **`=SUMIF(shart_diapazoni, mezon, yig‘indi_diapazoni)`**: avval 1-diapazondan mezonga mos qatorlarni topadi, so‘ng 3-diapazondagi mos sonlarni qo‘shadi.\n• **`=AVERAGEIF(shart_diapazoni, mezon, o‘rtacha_diapazoni)`**: shartga moslarning o‘rtacha arifmetik qiymatini chiqaradi.\nKo‘p shartli holatlarda **`COUNTIFS`** va **`SUMIFS`** qo‘llaniladi.',
        example: '`=SUMIF(A2:A10, "Meva", C2:C10)` — faqat A ustunida `"Meva"` yozilgan qatorlarning C ustunidagi narxlarini qo‘shadi.',
        tip: 'Quyidagi `SheetLab` da `COUNTIF` funksiyasini amalda sinab ko‘ring!',
      },
    ],
    keyTerms: [
      { term: 'COUNTIF(diapazon, shart)', definition: 'Diapazondagi ko‘rsatilgan shartni qanoatlantiruvchi kataklar sonini sanash.' },
      { term: 'SUMIF(shart_range, mezon, sum_range)', definition: 'Shartga mos keladigan qatorlar bo‘yicha qiymatlar yig‘indisini hisoblash.' },
      { term: 'COUNTA', definition: 'Bo‘sh bo‘lmagan (ham matn, ham son) kataklar sonini sanash.' },
      { term: 'AVERAGEIF', definition: 'Faqat belgilangan shartga mos qiymatlarning o‘rtachasini hisoblash.' },
    ],
    steps: [
      '1. `COUNT` va `COUNTA` farqini eslab qoling.',
      '2. `SheetLab` da `COUNTIF` yordamida "5" baholar sonini hisoblang.',
    ],
    practice: [
      {
        task: '`A1:A4` kataklarda `[10, "Salom", "", 25]` turibdi. `COUNT(A1:A4)` va `COUNTA(A1:A4)` nechchi chiqadi?',
        expected: '`COUNT` faqat sonlarni (`10`, `25`) sanagani uchun **`2`**; `COUNTA` matnni ham qo‘shib sanagani uchun **`3`** chiqadi.',
        difficulty: 'oson',
      },
      {
        task: '`B2:B20` da sotuvchi ismi, `C2:C20` da savdo summasi bor. Faqat `"Aziz"` ning jami savdosini topuvchi formulani yozing.',
        expected: '`=SUMIF(B2:B20, "Aziz", C2:C20)`.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l42-g1',
        num: '01',
        title: 'SheetLab: COUNTIF bilan sana',
        topic: 'Shartli statistik funksiyalar',
        difficulty: 'O‘rta',
        engine: 'sheetlab',
        config: {
          prompt: 'B2:B6 kataklarda o‘quvchilarning baholari yozilgan. C2 katakka COUNTIF yordamida nechta "5" baho borligini hisoblovchi formulani yozing:',
          rows: 6,
          cols: 3,
          initialCells: {
            A1: 'O‘quvchi', B1: 'Baho', C1: '5 baholar soni',
            A2: 'Ali', B2: '5', C2: '',
            A3: 'Vali', B3: '4', C3: '',
            A4: 'Guli', B4: '5', C4: '',
            A5: 'Sardor', B5: '3', C5: '',
            A6: 'Malika', B6: '5', C6: '',
          },
          targetCell: 'C2',
          expectedValue: 3,
          requiredFormulaTokens: ['COUNTIF', 'B2:B6', '5'],
          hint: 'C2 katakka `=COUNTIF(B2:B6, 5)` deb yozing.',
          explanation: '`=COUNTIF(B2:B6, 5)` B2:B6 diapazonida nechta 5 borligini sanab, `3` natijasini chiqaradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ham sonli, ham matnli (barcha to‘ldirilgan) kataklarni sanaydigan funksiya qaysi?',
        options: ['COUNT', 'COUNTA', 'COUNTBLANK', 'SUM'],
        answer: 1,
        explanation: 'COUNT faqat sonlarni, COUNTA esa bo‘sh bo‘lmagan hamma kataklarni sanaydi.',
      },
      {
        prompt: '`=COUNTIF(B2:B20, ">=80")` formulasi nimani hisoblaydi?',
        options: [
          '80 dan katta yoki teng sonlar yig‘indisini',
          '80 dan katta yoki teng sonlar sonini (nechta ekanini)',
          'O‘rtacha qiymatni',
          'Eng katta sonni',
        ],
        answer: 1,
        explanation: 'COUNTIF shartga mos kataklar sonini (miqdorini) sanaydi.',
      },
      {
        prompt: 'Faqat "Toshkent" filialining umumiy savdo summasini hisoblash uchun qaysi funksiya mos?',
        options: ['SUM', 'SUMIF', 'COUNTIF', 'ROUND'],
        answer: 1,
        explanation: 'SUMIF berilgan shartga ("Toshkent") mos keluvchi yozuvlar summasini qo‘shadi.',
      },
      {
        prompt: 'COUNTIF formulasida `">50"` kabi taqqoslash shartini qanday yozish shart?',
        options: ['Qo‘shtirnoqsiz >50', 'Qo‘shtirnoq ichida ">50"', 'Qavs ichida (>50)', 'Yulduzcha bilan *50'],
        answer: 1,
        explanation: 'Taqqoslash operatorlari (`>`, `<`, `>=`, `<>`) matnli mezon sifatida qo‘shtirnoq ichida yoziladi.',
      },
      {
        prompt: 'Bir nechta shart (masalan, "Toshkent" VA "2026-yil") bo‘yicha yig‘indini qaysi funksiya topadi?',
        options: ['SUM', 'SUMIF', 'SUMIFS', 'COUNT'],
        answer: 2,
        explanation: 'SUMIFS ko‘plik shartlarni (2 ta va undan ortiq mezonni) qo‘llab-quvvatlaydi.',
      },
    ],
    teacherNotes: {
      method: 'SheetLab da `SUMIF` va `COUNTIF` sintaksisi farqini (2 argument vs 3 argument) doskada taqqoslash.',
      timing: 'Kirish 5 daq, Funksiyalar tahlili 18 daq, SheetLab 12 daq, Quiz 10 daq.',
      assessment: 'SheetLab `COUNTIF` va `SUMIF` topshiriqlari.',
      homework: 'Sinf baholar jadvalida 4 va 5 baholar sonini `COUNTIF` bilan hisoblang.',
    },
  },
  {
    id: 'g10-l43',
    grade: 10,
    no: 43,
    part: '3-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Excel'],
    objectives: [
      'O‘quvchi 3-chorakning birinchi yarmi: jadval himoyasi, Freeze Panes, shartli formatlash, `$` absolyut murojaat, `ROUND`, `IF`, `VLOOKUP`, `INDEX/MATCH`, `COUNTIF/SUMIF` bo‘yicha bilimlarini sinaydi.',
    ],
    intro:
      '3-chorak oralig‘idagi nazorat ishi! Elektron jadvalning himoya usullari, absolyut murojaatlar, qidiruv (`VLOOKUP`, `INDEX+MATCH`) va shartli statistik funksiyalar bo‘yicha bilimlaringizni tekshiring.',
    sections: [
      {
        heading: 'Asosiy formulalar eslatmasi',
        body: '• Absolyut murojaat: `$A$1` (nusxalanganda o‘zgarmaydi).\n• Yaxlitlash: `ROUND`, `ROUNDUP`, `ROUNDDOWN`.\n• Qidiruv: `VLOOKUP(kalit, jadval, ustun, FALSE)` va `INDEX + MATCH` (chapga ham qidiradi).\n• Statistika: `COUNTIF`, `SUMIF`, `AVERAGEIF`.',
        example: '`=SUMIF(A2:A10, "Kitob", B2:B10)` — faqat kitoblar summasini hisoblaydi.',
      },
    ],
    keyTerms: [
      { term: '$A$1', definition: 'Nusxalanganda o‘zgarmaydigan absolyut katak manzili.' },
      { term: 'VLOOKUP', definition: 'Jadval chap ustunidan izlab o‘ngdan qiymat olish funksiyasi.' },
      { term: 'INDEX + MATCH', definition: 'Istalgan tomonga qidiradigan moslashuvchan qidiruv juftligi.' },
      { term: 'SUMIF', definition: 'Berilgan shartni qanoatlantiruvchi qatorlar yig‘indisi.' },
    ],
    steps: [
      '1. `SheetLab` amaliy topshirig‘ida `SUMIF` formulasini yozing.',
      '2. 5 ta nazorat testini bajaring.',
    ],
    practice: [
      {
        task: 'Jadvalda ham 1-qator, ham A-ustun muzlatilishi uchun qaysi katak tanlanib `Freeze Panes` bosiladi?',
        expected: '`B2` katagi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l43-g1',
        num: '01',
        title: 'Nazorat amaliyoti: SUMIF hisob-kitobi',
        topic: 'Shartli yig‘indi',
        difficulty: 'O‘rta',
        engine: 'sheetlab',
        config: {
          prompt: 'D2 katakka SUMIF yordamida faqat "IT" bo‘limi xodimlarining jami mukofotini hisoblovchi formula yozing:',
          rows: 4,
          cols: 4,
          initialCells: {
            A1: 'Bo‘lim', B1: 'Xodim', C1: 'Mukofot', D1: 'IT jami',
            A2: 'IT', B2: 'Aziz', C2: '400', D2: '',
            A3: 'Moliya', B3: 'Dilnoza', C3: '300', D3: '',
            A4: 'IT', B4: 'Bobur', C4: '600', D4: '',
          },
          targetCell: 'D2',
          expectedValue: 1000,
          requiredFormulaTokens: ['SUMIF', 'A2:A4', 'C2:C4'],
          hint: 'D2 katakka `=SUMIF(A2:A4, "IT", C2:C4)` deb yozing.',
          explanation: 'IT bo‘limida Aziz (400) va Bobur (600) bor: jami `1000`.',
        },
      },
    ],
    quiz: [
      {
        prompt: '`=ROUNDUP(7.05, 0)` natijasi nechchi chiqadi?',
        options: ['7', '8', '7.1', '7.0'],
        answer: 1,
        explanation: 'ROUNDUP kichik qoldiqni ham doim yuqoriga (`8` ga) yaxlitlaydi.',
      },
      {
        prompt: 'Qidirilayotgan ustun natija ustunidan O‘NGDA joylashgan bo‘lsa (chapga qidirish), qaysi usul ishlaydi?',
        options: ['VLOOKUP', 'INDEX + MATCH', 'HLOOKUP', 'COUNT'],
        answer: 1,
        explanation: 'VLOOKUP chapga qaray olmaydi; `INDEX + MATCH` buni bemalol bajaradi.',
      },
      {
        prompt: '`D2` katakda `=B2*$A$1` yozilgan. `D6` ga nusxalansa qanday o‘zgaradi?',
        options: ['=B6*$A$5', '=B6*$A$1', '=B2*$A$1', '=F6*$A$1'],
        answer: 1,
        explanation: '`B2` nisbiy (`B6` bo‘ladi), `$A$1` esa absolyut bo‘lib o‘zgarmaydi.',
      },
      {
        prompt: 'Maʼlumot kiritiladigan kataklarni qulfdan chiqarmasdan `Protect Sheet` bosilsa nima bo‘ladi?',
        options: [
          'Barcha kataklar tahrirlash uchun yopilib qoladi',
          'Fayl o‘chib ketadi',
          'Matnlar qizilga bo‘yaladi',
          'Hech narsa himoyalanmaydi',
        ],
        answer: 0,
        explanation: 'Sukut bo‘yicha hamma kataklar `Locked` bo‘lgani uchun avval ruxsatli kataklarni Unlock qilish shart.',
      },
      {
        prompt: 'Bo‘sh bo‘lmagan (matn va sonli) kataklarni sanaydigan funksiya qaysi?',
        options: ['COUNT', 'COUNTA', 'SUMIF', 'INT'],
        answer: 1,
        explanation: 'COUNTA barcha to‘ldirilgan kataklarni sanaydi.',
      },
    ],
    teacherNotes: {
      method: 'SheetLab dagi `SUMIF` topshirig‘ini sinfda mustaqil bajartirish va test natijalarini tahlil qilish.',
      timing: 'Takrorlash 5 daq, Amaliy SheetLab 20 daq, Nazorat testi 20 daq.',
      assessment: 'SheetLab va test natijalari asosida.',
      homework: '3-chorakning ikkinchi yarmi (Validatsiya va Diagrammalar) mavzusiga tayyorlaning.',
    },
  },
];
