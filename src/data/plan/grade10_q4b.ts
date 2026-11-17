import type { Lesson } from './types';

export const GRADE_10_Q4B: Lesson[] = [
  {
    id: 'g10-l62',
    grade: 10,
    no: 62,
    part: '4-chorak',
    title: 'Ma’lumotlarni saralash. Ma’lumot kiritish formalari.',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'Forms', 'Sort'],
    objectives: [
      'O‘quvchi bazada maʼlumotlarni saralash (`ORDER BY` / Ascending / Descending) va qulay **Maʼlumot kiritish formalari (Forms)** yaratish maqsadini biladi.',
      'O‘quvchi formadagi boshqaruv elementlari (Text Box, Combo Box, Check Box, Navigation Buttons, Subform) hamda foydalanuvchi xavfsizligi rolini tushunadi.',
    ],
    intro:
      'Oddiy xodim jadvalning xom panjarasiga (Datasheet View) kirsa, bexosdan ustunlarni o‘chirishi yoki 100 ta qator orasida adashib ketishi mumkin. Buning o‘rniga chiroyli va himoyalangan **Forma (Form)** yaratiladi!',
    sections: [
      {
        heading: 'Maʼlumotlarni saralash va Formalar (Forms)',
        body: '**Saralash (Sorting)** jadval va Query natijalarini alifbo (`A→Z`) yoki son kattaligi (`ASC`/`DESC`) bo‘yicha tartiblaydi. **Forma (Form)** esa foydalanuvchi jadvalning ichki tuzilmasini ko‘rmasdan, faqat bitta yozuvni qulay ekranda ko‘rishi, tahrirlashi va yangi yozuv qo‘shishi uchun mo‘ljallangan grafik interfeysdir.',
        example: 'Klinikada ro‘yxatga oluvchi xodim bazaning barcha jadvallarini emas, faqat "Yangi bemor qo‘shish" formasini ko‘radi.',
      },
      {
        heading: 'Yaxshi Forma elementlari va Subform',
        body: '• **Combo Box / Option Group**: xato yozishning oldini olish uchun ochiluvchi ro‘yxat yoki radio-tugma.\n• **Check Box**: `Boolean` (Ha/Yo‘q) maydonlar uchun.\n• **Navigatsiya tugmalari**: Oldingi, Keyingi, Yangi yozuv, Saqlash, O‘chirish.\n• **Subform (Ichki forma)**: `1:∞` bog‘langan jadvallarni bir ekranda ko‘rsatish (masalan, tepada `Mijoz`, pastdagi Subform da esa uning barcha `Buyurtmalari`!).',
        tip: 'Formada aniq shrift, mantiqiy Tab-tartibi (Tab Order) va yorliqlar (Labels) bo‘lishi operator tezligini 2 barobar oshiradi!',
      },
    ],
    keyTerms: [
      { term: 'Form (Forma)', definition: 'Foydalanuvchiga bazaga qulay va xavfsiz maʼlumot kiritish/tahrirlash uchun yaratilgan ekran shakli.' },
      { term: 'Combo Box', definition: 'Tayyor ro‘yxatdan tanlash imkonini beruvchi boshqaruv elementi (xatolarni kamaytiradi).' },
      { term: 'Subform (Ichki forma)', definition: 'Asosiy forma ichida 1:∞ bog‘langan bola jadval yozuvlarini ko‘rsatuvchi forma.' },
      { term: 'Tab Order', definition: 'Tab tugmasi bosilganda kursorning maydonlar bo‘ylab sakrash ketma-ketligi.' },
    ],
    steps: [
      '1. Jadvalga to‘g‘ridan-to‘g‘ri kiritishdan ko‘ra Forma afzalliklarini sanang.',
      '2. `Combo Box`, `Check Box` va `Subform` vazifalarini bog‘lang.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Formada `Viloyat` maydoni uchun oddiy matn maydoni (`Text Box`) o‘rniga nima uchun `Combo Box` qo‘yish afzal?',
        expected: 'Operator "Toshkent" ni "Toshket" deb xato yozib qo‘ymaydi; faqat ro‘yxatdagi to‘g‘ri nomlardan birini tez tanlaydi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l62-g1',
        num: '01',
        title: 'Forma boshqaruv elementlari',
        topic: 'Access Forms dizayni',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Formadagi elementlarni ularning vazifasiga moslashtiring:',
          pairs: [
            { left: 'Combo Box', right: 'Ro‘yxatdan tayyor qiymat tanlab xato yozishni oldini olish' },
            { left: 'Check Box', right: 'Ha/Yo‘q (Boolean) maydonini belgilash katakchasi' },
            { left: 'Subform', right: 'Bitta mijoz oynasi ichida uning barcha buyurtmalarini ko‘rsatish' },
            { left: 'Command Button', right: '"Saqlash", "Yangi yozuv" kabi amallarni bajaruvchi tugma' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Maʼlumotlar bazasida xodimlarga jadvallarga to‘g‘ridan-to‘g‘ri kirish o‘rniga Forma (Form) berilishining asosiy sababi nima?',
        options: [
          'Kiritishni soddalashtirish, validatsiyani qulaylashtirish va jadval tuzilmasini tasodifiy buzishdan himoyalash',
          'Fayl hajmini oshirish',
          'Faqat chop etish uchun',
          'Internet tezligini oshirish',
        ],
        answer: 0,
        explanation: 'Forma xavfsiz, tushunarli va xatosiz kiritish interfeysini taqdim etadi.',
      },
      {
        prompt: 'Birga-ko‘p (`1:∞`) bog‘langan jadvallarni (masalan, `Sinf` va uning ichida `O‘quvchilar`) bitta formada ko‘rsatish uchun nima ishlatiladi?',
        options: ['Subform (Ichki forma)', 'Input Mask', 'Flat-File', 'CSV Eksport'],
        answer: 0,
        explanation: 'Subform ota yozuvga tegishli bola yozuvlarni o‘sha ekranning o‘zida ko‘rsatadi.',
      },
      {
        prompt: 'Formada `Boolean` (Grantdami: Ha/Yo‘q) maydoni uchun eng mos boshqaruv elementi qaysi?',
        options: ['Check Box', 'Katta rasm maydoni', 'Sana tanlagich', 'Matn muharriri'],
        answer: 0,
        explanation: 'Check Box ikki holatli (belgilangan/belgilanmagan) qiymat uchun eng qulay.',
      },
      {
        prompt: 'Qaysi element foydalanuvchiga shahar nomini qo‘lda terib xato qilish o‘rniga ro‘yxatdan tanlash imkonini beradi?',
        options: ['Label', 'Combo Box', 'Page Break', 'Gridline'],
        answer: 1,
        explanation: 'Combo Box ochiluvchi ro‘yxat taqdim etadi.',
      },
      {
        prompt: 'SQL yoki Access da maʼlumotlarni kattadan kichikka (kamayish tartibida) saralash qanday belgilanadi?',
        options: ['ASC (Ascending)', 'DESC (Descending)', 'GROUP BY', 'LIKE'],
        answer: 1,
        explanation: 'DESC (Descending) — kamayish (Z→A, 9→0) tartibida saralaydi.',
      },
    ],
    teacherNotes: {
      method: 'Access Form Wizard va Design View da Combo Box + Command Button qo‘shib ko‘rsatish.',
      timing: 'Kirish 5 daq, Saralash & Forms 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: 'Forma elementlarini vazifasiga ko‘ra to‘g‘ri tanlash.',
      homework: '"Yangi o‘quvchi kiritish" formasi eskizini 5 ta mos boshqaruv elementi bilan chizing.',
    },
  },
  {
    id: 'g10-l63',
    grade: 10,
    no: 63,
    part: '4-chorak',
    title: 'Hisobotlar. Ma’lumotlarni eksport qilish.',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'Reports', 'PDF / RTF / XLSX'],
    objectives: [
      'O‘quvchi bazadan chiroyli bosma va elektron natija chiqaruvchi **Hisobot (Report)** bilan Forma farqini tushunadi.',
      'O‘quvchi hisobot bo‘limlari (Report Header, Page Header, Detail, Page Footer, Report Footer) va hisobotda guruhlash/jamlash hamda eksport formatlarini (`.pdf`, `.xlsx`, `.rtf`, `.csv`) biladi.',
    ],
    intro:
      '**Forma** maʼlumot *kiritish* uchun bo‘lsa, **Hisobot (Report)** maʼlumotlarni chiroyli saralab, guruhlab va jami summalarini hisoblab *chop etish hamda rahbariyatga yuborish* uchun yaratiladi!',
    sections: [
      {
        heading: 'Hisobot (Report) tuzilishi va bo‘limlari',
        body: 'Hisobot odatda Query yoki jadval asosida quriladi va faqat o‘qish (Read-only) ko‘rinishida tayyorlanadi. 5 asosiy bo‘lim:\n• **Report Header**: butun hisobotning boshida 1 marta chiqadigan sarlavha va logotip.\n• **Page Header**: har bir sahifa tepasida takrorlanadigan ustun nomlari.\n• **Detail**: har bir yozuv (qator) maʼlumotlari chiqadigan asosiy qism.\n• **Group Footer / Report Footer**: guruh yoki butun hisobot oxiridagi yakuniy `=Sum(...)`, `=Count(...)`, `=Avg(...)` hisoblari.\n• **Page Footer**: har sahifa pastidagi sahifa raqami (`="Bet " & [Page] & "/" & [Pages]`) va sana.',
        example: 'Oylik savdo hisoboti har bir filial bo‘yicha guruhlanib (`Group Header`), pastida har filialning jami tushumi (`Group Footer`) chiqariladi.',
      },
      {
        heading: 'Maʼlumotlarni eksport qilish formatlari',
        body: 'Tayyor hisobot yoki query natijasini boshqa dasturlarga uzatish (`External Data → Export`):\n• **`.pdf`**: o‘zgarmas rasmiy ko‘rinish, hamma qurilmada bir xil ochiladi (chop etish va email uchun eng yaxshi).\n• **`.xlsx`**: Excel da qo‘shimcha grafik va PivotTable yasash uchun.\n• **`.rtf` / `.docx`**: Word da matnli hujjatga qo‘shish uchun.\n• **`.csv` / `.txt`**: boshqa dasturiy tizimlarga xom jadval ko‘chirish uchun.',
        tip: 'Hisobot tayyorlashda sahifa chetidan chiqib ketmaslik uchun `Print Preview` da tekshirish shart!',
      },
    ],
    keyTerms: [
      { term: 'Report (Hisobot)', definition: 'Baza maʼlumotlarini guruhlab, jamlab va bosmaga tayyorlab ko‘rsatuvchi obyekt.' },
      { term: 'Report Footer', definition: 'Hisobotning eng oxirida umumiy yig‘indi (=Sum, =Count) chiqadigan bo‘lim.' },
      { term: 'Page Header', definition: 'Har bir chop etiladigan sahifa yuqorisida takrorlanuvchi ustun sarlavhalari.' },
      { term: 'Eksport (Export)', definition: 'Baza jadvali, query yoki hisobotini PDF, Excel, RTF yoki CSV formatiga chiqarish.' },
    ],
    steps: [
      '1. Forma va Hisobotning maqsad farqini ajrating.',
      '2. Hisobotning 5 bo‘limini tartiblang.',
      '3. Quyidagi bo‘shliq to‘ldirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Direktorga chorak yakuni hisobotini hech kim raqamlarni o‘zgartira olmaydigan va formati buzilmaydigan shaklda yuborish uchun qaysi eksport formati tanlanadi?',
        expected: '`.pdf` formati (Portable Document Format).',
        difficulty: 'oson',
      },
      {
        task: 'Hisobotda barcha 10 sahifaning tepasida ustun nomlari chiqishi uchun ular `Report Header` ga qo‘yiladimi yoki `Page Header` ga?',
        expected: '`Page Header` ga (chunki `Report Header` faqat 1-sahifada bir marta chiqadi).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l63-g1',
        num: '01',
        title: 'Hisobot bo‘limlari va Eksport',
        topic: 'Access Reports',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Hisobot tuzilishi va eksportiga oid jumlalarni to‘ldiring:',
          template: 'Maʼlumot kiritish uchun Forma ishlatilsa, chop etish va tahlil natijasini chiqarish uchun {{0}} yaratiladi. Har sahifa tepasida ustun nomlari chiqishi uchun ular {{1}} bo‘limiga qo‘yiladi. Rasmiy o‘zgarmas hujjat sifatida eksport qilish uchun {{2}} formati tanlanadi.',
          blanks: [
            { options: ['Hisobot (Report)', 'Birlamchi kalit', 'Input Mask'], answer: 'Hisobot (Report)' },
            { options: ['Page Header', 'Detail', 'Report Footer'], answer: 'Page Header' },
            { options: ['PDF', 'CSV', 'RAW'], answer: 'PDF' },
          ],
          hint: 'Report — chop etish; Page Header — har sahifa tepasi; PDF — o‘zgarmas hujjat.',
          explanation: 'Page Header har sahifada takrorlanadi, PDF esa dizaynni o‘zgartirmay saqlaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Maʼlumotlar bazasida `Forma` va `Hisobot (Report)` o‘rtasidagi asosiy farq nima?',
        options: [
          'Forma maʼlumot kiritish/tahrirlash uchun, Hisobot esa guruhlab chop etish/ko‘rsatish uchun',
          'Ikkalasi bir xil vazifani bajaradi',
          'Hisobot faqat rasm saqlaydi',
          'Forma faqat PDF ga saqlanadi',
        ],
        answer: 0,
        explanation: 'Form — interaktiv kiritish ekrani; Report — Read-only bosma/eksport natija.',
      },
      {
        prompt: 'Butun hisobotning eng oxirida barcha savdolarning umumiy yig‘indisini (`=Sum([Summa])`) chiqarish uchun formula qayerga yoziladi?',
        options: ['Page Header', 'Detail', 'Report Footer', 'Input Mask'],
        answer: 2,
        explanation: 'Report Footer hisobot yakunida bir marta chiqadi va umumiy jamini ko‘rsatadi.',
      },
      {
        prompt: 'Hisobotni Word muharririda matn sifatida tahrirlab davom ettirish uchun qaysi formatga eksport qilish qulay?',
        options: ['.rtf', '.exe', '.mp4', '.png'],
        answer: 0,
        explanation: 'RTF (Rich Text Format) Word va barcha matn protsessorlarida oson ochiladi va tahrirlanadi.',
      },
      {
        prompt: 'Hisobotning qaysi bo‘limi jadvaldagi har bir alohida yozuv (qator) uchun takrorlanib maʼlumotlarni chiqaradi?',
        options: ['Report Header', 'Detail', 'Page Footer', 'Title'],
        answer: 1,
        explanation: 'Detail bo‘limi manba query/jadvaldagi har bir qatorni ekranga chiqaradi.',
      },
      {
        prompt: 'Moliya bo‘limiga bazadan olingan raqamlarni keyinroq Excel formulalarida qayta hisoblash uchun qaysi formatda eksport qilinadi?',
        options: ['.pdf', '.xlsx', '.jpg', '.mp3'],
        answer: 1,
        explanation: '`.xlsx` Excel formati sonlar va jadvallarni keyingi tahlil uchun tayyor holda beradi.',
      },
    ],
    teacherNotes: {
      method: 'Report Wizard orqali guruhlangan hisobot yasab, `Report Header` vs `Page Header` farqini Print Preview da ko‘rsatish.',
      timing: 'Kirish 5 daq, Report bo‘limlari 18 daq, Eksport & FillBlank 12 daq, Quiz 10 daq.',
      assessment: 'Hisobot bo‘limlari va eksport formatlarini to‘g‘ri tanlash.',
      homework: 'Sinf baholar hisobotining 5 bo‘limini daftarga chizib belgilang.',
    },
  },
  {
    id: 'g10-l64',
    grade: 10,
    no: 64,
    part: '4-chorak',
    title: 'Formni normallashtirish. Maʼlumotlar bazasini 3NFga normallashtirish.',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'Normalizatsiya', '1NF / 2NF / 3NF'],
    objectives: [
      'O‘quvchi maʼlumotlar bazasini normallashtirish (**Normalization**) maqsadini (takrorlanish va anomaliyalarni yo‘qotish) biladi.',
      'O‘quvchi tartiblanmagan jadvalni (0NF/UNF) ketma-ket **1NF (Birinchi normal shakl)**, **2NF (Ikkinchi)** va **3NF (Uchinchi normal shakl)** ga keltirish qoidalarini amalda qo‘llaydi.',
    ],
    intro:
      'Hamma maʼlumot bir varaqqa tiqilgan qo‘pol buyurtma blankasini (UNF) qanday qilib toza, tezkor va xatosiz relyatsion bazaga (**3NF**) aylantiramiz? Bu informatikaning eng muhim arxitektura qoidasi — **Normallashtirish** dir!',
    sections: [
      {
        heading: 'UNF → 1NF → 2NF → 3NF bosqichlari',
        body: '• **UNF (0NF — Normallashtirilmagan)**: bitta katakda vergul bilan bir nechta qiymat bor (masalan, `Fanlar: "Matematika, Fizika"`) va takrorlanuvchi guruhlar mavjud.\n• **1NF (Birinchi normal shakl)**: 1) Har bir katakda **faqat bitta atomar qiymat** (bo‘linmas) bo‘lishi shart; 2) Takrorlanuvchi guruhlar alohida qatorlarga yoyiladi; 3) **Primary Key** belgilanadi.\n• **2NF (Ikkinchi normal shakl)**: 1NF shartlari bajarilgan + **Qisman bog‘liqlik (Partial Dependency) yo‘q**! Yaʼni tarkibiy (Composite) kalitning *faqat bir qismiga* bog‘liq ustunlar alohida jadvalga ajratiladi (masalan, `(BuyurtmaID, TovarID)` jadvalidagi `TovarNomi` faqat `TovarID` ga bog‘liq bo‘lgani uchun `Tovarlar` jadvaliga chiqariladi).\n• **3NF (Uchinchi normal shakl)**: 2NF shartlari bajarilgan + **Tranzitiv bog‘liqlik (Transitive Dependency) yo‘q**! Kalit bo‘lmagan ustun boshqa kalit bo‘lmagan ustunga bog‘liq bo‘lmasligi shart (masalan, `O‘quvchi` jadvalida `SinfID` → `SinfRahbari` bo‘lsa, `SinfRahbari` alohida `Sinflar` jadvaliga ko‘chiriladi!).',
        example: 'Esda saqlashning mashhur qoidasi: Har bir ustun **"Kalitga, butun kalitga va faqat kalitga"** bog‘liq bo‘lishi kerak — bu **3NF** dir!',
      },
    ],
    keyTerms: [
      { term: '1NF (First Normal Form)', definition: 'Har bir katak atomar (yagona qiymatli) bo‘lishi va takroriy guruhlar bo‘lmasligi.' },
      { term: '2NF (Second Normal Form)', definition: '1NF bajarilgan hamda Composite Key ning faqat bir qismiga bog‘liqlik (qisman bog‘liqlik) olib tashlangan shakl.' },
      { term: '3NF (Third Normal Form)', definition: '2NF bajarilgan hamda kalit bo‘lmagan ustunlar orasidagi bog‘liqlik (tranzitiv bog‘liqlik) bartaraf etilgan shakl.' },
      { term: 'Atomar qiymat', definition: 'Bitta katakda vergul bilan ro‘yxat emas, faqat bitta bo‘linmas qiymat turishi.' },
    ],
    steps: [
      '1. 1NF (atomarlik), 2NF (qisman bog‘liqlik yo‘q) va 3NF (tranzitiv bog‘liqlik yo‘q) qoidalarini yodlang.',
      '2. Tartiblash o‘yinida UNF dan 3NF gacha bo‘lgan qadamlarni joylang.',
    ],
    practice: [
      {
        task: '`Talaba(TalabaID, Ism, MaktabNomi, MaktabManzili)` jadvali nega 3NF da emas va uni 3NF ga keltiring.',
        expected: 'Chunki `MaktabManzili` kalitga (`TalabaID`) emas, kalit bo‘lmagan `MaktabNomi` ga bog‘liq (tranzitiv bog‘liqlik!). Yechim: 2 ta jadvalga ajratish — `Talaba(TalabaID, Ism, MaktabID)` va `Maktab(MaktabID, MaktabNomi, MaktabManzili)`.',
        difficulty: 'qiyin',
      },
    ],
    games: [
      {
        id: 'g10-l64-g1',
        num: '01',
        title: 'Normallashtirish zinapoyasi: UNF → 3NF',
        topic: 'Bazani normallashtirish',
        difficulty: 'Qiyin',
        engine: 'order',
        config: {
          prompt: 'Xom jadvalni 3NF darajasiga normallashtirish bosqichlarini to‘g‘ri ketma-ketlikda joylashtiring:',
          items: [
            'UNF: Takroriy qiymatlar va bir katakdagi vergulli ro‘yxatlarni aniqlash',
            '1NF: Barcha kataklarni atomar (yagona qiymatli) qilish va Primary Key qo‘yish',
            '2NF: Murakkab kalitning faqat bir qismiga bog‘liq (qisman bog‘liqlik) ustunlarni alohida jadvalga ajratish',
            '3NF: Kalit bo‘lmagan ustunga bog‘liq (tranzitiv bog‘liqlik) ustunlarni alohida jadvalga chiqarish',
          ],
          hint: 'UNF → 1NF (atomar) → 2NF (qisman bog‘liqlik) → 3NF (tranzitiv bog‘liqlik).',
          explanation: 'Normallashtirish qatʼiy ketma-ketlikda UNF → 1NF → 2NF → 3NF tartibida amalga oshiriladi!',
        },
      },
    ],
    quiz: [
      {
        prompt: '`Fanlar` katagida `"Fizika, Kimyo, Biologiya"` deb yozilgan jadval qaysi eng birinchi normal shaklni buzmoqda?',
        options: ['1NF (Atomar qiymat talabi)', '2NF', '3NF', 'Hech birini'],
        answer: 0,
        explanation: '1NF da har bir katakda faqat bitta atomar qiymat bo‘lishi shart.',
      },
      {
        prompt: '2NF (Ikkinchi normal shakl) nimani bartaraf etadi?',
        options: [
          'Barcha rasmlarni',
          'Murakkab (Composite) kalitning faqat bir qismiga bog‘liqlikni (Partial Dependency)',
          'Birlamchi kalitni',
          'Maʼlumot turlarini',
        ],
        answer: 1,
        explanation: '2NF da kalit bo‘lmagan har bir maydon butun murakkab kalitga bog‘liq bo‘lishi kerak.',
      },
      {
        prompt: '3NF (Uchinchi normal shakl) nimani yo‘qotadi?',
        options: [
          'Tashqi kalitlarni',
          'Kalit bo‘lmagan ustunlarning boshqa kalit bo‘lmagan ustunga bog‘liqligini (Transitive Dependency)',
          'Jadvallar nomini',
          'Formadagi tugmalarni',
        ],
        answer: 1,
        explanation: 'Masalan, `XodimID → BolimNomi → BolimTelefon` zanjiri tranzitiv bog‘liqlik bo‘lib, 3NF da `Bolimlar` jadvaliga ajratiladi.',
      },
      {
        prompt: 'Maʼlumotlar bazasini 3NF gacha normallashtirishning asosiy foydasi qaysi?',
        options: [
          'Maʼlumotlar takrorlanishini (Redundancy) va yangilash/o‘chirish anomaliyalarini bartaraf etish',
          'Baza hajmini 10 barobar oshirish',
          'Bitta katakda ko‘p qiymat saqlash',
          'Kalitlarni olib tashlash',
        ],
        answer: 0,
        explanation: '3NF baza yaxlitligini taʼminlab, takrorlanishni minimal darajaga tushiradi.',
      },
      {
        prompt: 'Jadval 2NF da bo‘lishi uchun avvalo qaysi shart bajarilgan bo‘lishi shart?',
        options: ['3NF', '1NF', 'Flat-File', 'Eksport'],
        answer: 1,
        explanation: 'Normal shakllar iyerarxik: 3NF ga o‘tish uchun 2NF, 2NF uchun esa albatta 1NF bajarilishi shart.',
      },
    ],
    teacherNotes: {
      method: 'Bitta qo‘pol "Buyurtma kvitansiyasi" (UNF) ni doskada 1NF → 2NF → 3NF ga bo‘lib chiqish.',
      timing: 'Kirish 5 daq, UNF→3NF misoli 22 daq, Order o‘yini 8 daq, Quiz 10 daq.',
      assessment: 'Tranzitiv bog‘liqlikni aniqlay olish.',
      homework: 'Kutubxona ijara kvitansiyasini (`IjaraID, Oquvchi, Sinf, SinfRahbari, Kitoblar`) 3NF jadvallariga ajrating.',
    },
  },
  {
    id: 'g10-l65',
    grade: 10,
    no: 65,
    part: '4-chorak',
    title: 'Ma’lumotlar lugʻati. Maʼlumot turlari. Fayl va ma’lumotlarni boshqarish.',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'Data Dictionary', 'DBMS'],
    objectives: [
      'O‘quvchi **Maʼlumotlar lug‘ati (Data Dictionary)** tushunchasini (jadval va maydonlar haqidagi metamaʼlumotlar) hamda uning tarkibini biladi.',
      'O‘quvchi **Faylga asoslangan tizim** va **DBMS (Maʼlumotlar bazasini boshqarish tizimi)** o‘rtasidagi boshqaruv, xavfsizlik va zaxiralash farqlarini tahlil qiladi.',
    ],
    intro:
      'Yuzlab jadvalli ulkan bazada qaysi ustun qanday nomlanishini, necha bayt joy olishini va qaysi validatsiya qoidasi qo‘yilganini jamoa qayerdan biladi? Albatta — bazaning "pasporti" bo‘lgan **Maʼlumotlar lug‘ati (Data Dictionary)** dan!',
    sections: [
      {
        heading: 'Maʼlumotlar lug‘ati (Data Dictionary)',
        body: '**Maʼlumotlar lug‘ati** — maʼlumotlar bazasi strukturasini tasvirlaydigan **metamaʼlumotlar (maʼlumot haqidagi maʼlumot)** hujjati. Unda quyidagilar saqlanadi: 1) Jadval nomi; 2) Maydon (Field) nomi; 3) Maʼlumot turi (Data Type); 4) Maydon hajmi (Field Size); 5) Kalit turi (PK / FK); 6) Validatsiya qoidasi va formati; 7) Tavsifi va namuna qiymat.',
        example: '`TalabaID` | `AutoNumber` | `4 bayt` | `PK` | `Majburiy` | `1001` — bu lug‘atdagi bitta qator tavsifidir.',
      },
      {
        heading: 'Fayl tizimi vs Maʼlumotlarni boshqarish tizimi (DBMS)',
        body: 'Eski **Faylga asoslangan tizimlarda** har bir bo‘lim (buxgalteriya, kadrlar) o‘z alohida fayllarini yuritgan — natijada fayl formati bog‘liqligi, takrorlanish va xavfsizlik muammolari kelib chiqqan. **DBMS (Access, PostgreSQL, MySQL, Oracle)** esa markazlashgan boshqaruv beradi: bir vaqtda ko‘p foydalanuvchi ishlashi (Concurrency), kirish huquqlarini ajratish (RBAC), tranzaksiyalarni nazorat qilish va avtomatik Backup.',
        tip: 'Data Dictionary dasturchilar va baza administratorlari o‘rtasida yagona standartni saqlaydi!',
      },
    ],
    keyTerms: [
      { term: 'Data Dictionary', definition: 'Baza jadvallari, maydonlari, turlari, hajmlari va cheklovlari haqidagi metamaʼlumotlar lug‘ati.' },
      { term: 'Metamaʼlumot', definition: 'Haqiqiy maʼlumotlarning tuzilishi va xususiyatini tasvirlaydigan maʼlumot.' },
      { term: 'DBMS', definition: 'Maʼlumotlar bazasini yaratish, saqlash, himoyalash va boshqarish dasturiy taʼminoti.' },
      { term: 'Concurrency Control', definition: 'Bir nechta foydalanuvchi bir vaqtda bitta bazada xatosiz ishlashini boshqarish.' },
    ],
    steps: [
      '1. Data Dictionary dagi 6 ta ustunni eslab qoling.',
      '2. Fayl tizimidan DBMS ga o‘tish sabablarini sanang.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Nima uchun bir necha dasturchi ishlayotgan loyihada Data Dictionary tuzish majburiy?',
        expected: 'Hamma dasturchilar bir maydonning nomini, turini (`Short Text`mi yoki `Integer`mi) va uzunligini bir xil tushunishi uchun.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l65-g1',
        num: '01',
        title: 'Maʼlumotlar lug‘ati elementlari',
        topic: 'Data Dictionary & DBMS',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Data Dictionary va DBMS atamalarini ularning vazifasiga bog‘lang:',
          pairs: [
            { left: 'Data Dictionary', right: 'Maydon nomi, turi, hajmi va validatsiyasi yozilgan metamaʼlumotlar jadvali' },
            { left: 'DBMS', right: 'Bazani markazlashgan holda yaratish, himoyalash va boshqarish dasturi' },
            { left: 'Field Size', right: 'Ustunda saqlanadigan belgilar yoki sonlar maksimal hajmi' },
            { left: 'Concurrency Control', right: 'Ko‘p foydalanuvchilar bir vaqtda yozishdagi ziddiyatni oldini olish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Maʼlumotlar bazasidagi har bir maydonning nomi, turi, hajmi va kalit holatini aks ettiruvchi hujjat nima?',
        options: ['User Manual', 'Maʼlumotlar lug‘ati (Data Dictionary)', 'PivotTable', 'Firewall'],
        answer: 1,
        explanation: 'Data Dictionary bazaning texnik tuzilishini tavsiflovchi metamaʼlumotlar to‘plamidir.',
      },
      {
        prompt: '"Metamaʼlumot" (Metadata) deganda nima tushuniladi?',
        options: [
          'O‘chirilgan fayl',
          'Maʼlumotlarning o‘zi emas, balki ularning tuzilishi va xususiyatlari haqidagi maʼlumot',
          'Faqat video fayllar',
          'Zaxira nusxa paroli',
        ],
        answer: 1,
        explanation: 'Masalan, maydonning turi `Short Text (30)` ekani — metamaʼlumot.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri DBMS (Database Management System) ga misol bo‘ladi?',
        options: ['Microsoft Access / PostgreSQL', 'Adobe Photoshop', 'VLC Media Player', 'WinRAR'],
        answer: 0,
        explanation: 'Access, LibreOffice Base, MySQL, PostgreSQL — maʼlumotlar bazasini boshqarish tizimlaridir.',
      },
      {
        prompt: 'Oddiy fayl tizimiga (File-based system) nisbatan DBMS ning eng katta afzalligi qaysi?',
        options: [
          'Maʼlumot takrorlanishini kamaytirish, xavfsizlik huquqlarini ajratish va ko‘p foydalanuvchili boshqaruv',
          'Internetga ulanmaslik',
          'Faqat bitta jadval bilan cheklanish',
          'Validatsiyani o‘chirish',
        ],
        answer: 0,
        explanation: 'DBMS markaziy nazorat, yaxlitlik va ko‘p foydalanuvchili xavfsiz kirishni taʼminlaydi.',
      },
      {
        prompt: 'Data Dictionary tarkibiga odatda qaysi band KIRMAYDI?',
        options: ['Field Name (Maydon nomi)', 'Data Type (Maʼlumot turi)', 'Validation Rule', 'Monitor ekrani yorqinligi'],
        answer: 3,
        explanation: 'Ekran yorqinligi apparat sozlamasi bo‘lib, baza lug‘atiga aloqasi yo‘q.',
      },
    ],
    teacherNotes: {
      method: 'O‘quvchilarga Access Design View dagi maydon xususiyatlari jadvali aslida Data Dictionary ekanini ko‘rsating.',
      timing: 'Kirish 5 daq, Data Dictionary & DBMS 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: 'Berilgan jadval uchun 4 qatorli Data Dictionary tuza olish.',
      homework: '`Kitoblar(KitobID, Nomi, Narxi, NashrYili)` jadvali uchun Data Dictionary jadvalini chizing.',
    },
  },
  {
    id: 'g10-l66',
    grade: 10,
    no: 66,
    part: '4-chorak',
    title: 'Bevosita fayldan foydalanish. Boshqaruv axborot tizimlari.',
    kind: 'dars',
    hours: 1,
    tools: ['Axborot tizimi', 'MIS', 'Direct Access'],
    objectives: [
      'O‘quvchi fayllarga murojaat qilish usullarini (**Ketma-ket / Sequential** va **Bevosita / Direct / Random Access**) hamda **Indeksli** qidiruvni farqlaydi.',
      'O‘quvchi **Boshqaruv axborot tizimi (MIS — Management Information System)** ning tashkilot rahbarlariga qaror qabul qilishdagi rolini tushunadi.',
    ],
    intro:
      'Kassetada 5-qo‘shiqni tinglash uchun avval 1–4-qo‘shiqlarni o‘tkazib yuborish kerak edi (**Ketma-ket kirish**), SSD/HDD da esa 5-faylga darhol sakrab kiriladi (**Bevosita kirish**)! Bundan tashqari, bazadagi millionlab yozuvlar rahbarlarga **Boshqaruv axborot tizimi (MIS)** orqali qanday hisobotga aylanadi?',
    sections: [
      {
        heading: 'Faylga kirish usullari: Ketma-ket vs Bevosita',
        body: '• **Ketma-ket kirish (Serial / Sequential Access)**: yozuvlar birinchi yozuvdan boshlab ketma-ket o‘qiladi (masalan, magnit lenta / arxiv zaxira lentalari). Qidirish sekin, lekin barcha yozuvlarni birdaniga qayta ishlashda (Batch Payroll) juda samarali!\n• **Bevosita / Tasodifiy kirish (Direct / Random Access)**: xesh-funksiya yoki indeks yordamida kerakli yozuv manzili hisoblanib, boshidan o‘qimasdan **darhol** o‘sha sektor/manzilga murojaat qilinadi (HDD, SSD, Online bankomat va chipta tizimlari!).',
        example: 'Kundalik kitobda mundarija (Indeks) orqali 184-betni birdan ochish — **Bevosita kirish**; 1-betdan 184-betgacha varaqma-varaq o‘qish — **Ketma-ket kirish**.',
      },
      {
        heading: 'Boshqaruv axborot tizimlari (MIS)',
        body: '**MIS (Management Information System)** — korxonaning kundalik operatsion maʼlumotlarini (sotuvlar, ombor, xodimlar davomati) yig‘ib, tahlil qilib, o‘rta va yuqori bo‘g‘in rahbarlariga **qisqa hisobotlar, grafiklar va trendlar** ko‘rinishida taqdim etuvchi tizim.',
        example: 'Do‘kon tarmog‘i direktori har dushanba ertalab MIS dan "O‘tgan haftada qaysi mahsulot kam sotildi va qaysi filial reja bajarmadi?" hisobotini oladi.',
      },
    ],
    keyTerms: [
      { term: 'Sequential Access', definition: 'Yozuvlarni boshidan oxirigacha tartib bilan ketma-ket o‘qish usuli.' },
      { term: 'Direct (Random) Access', definition: 'Manzil yoki indeks orqali istalgan yozuvga darhol sakrab murojaat qilish usuli.' },
      { term: 'MIS', definition: 'Tashkilot rahbariyatiga strategik qarorlar qabul qilish uchun jamlanma hisobot beruvchi axborot tizimi.' },
      { term: 'Indeks (Index)', definition: 'Bazadagi qidiruvni keskin tezlashtiruvchi saralangan ko‘rsatkich jadvali.' },
    ],
    steps: [
      '1. Magnit lenta (Sequential) va SSD (Direct) misollarini taqqoslang.',
      '2. MIS qaysi bo‘g‘in xodimlari uchun ishlashini tushuning.',
      '3. Quyidagi CaseStudy vaziyatini yeching.',
    ],
    practice: [
      {
        task: 'Bankomatda karta balansini 1 soniyada tekshirish uchun qaysi faylga kirish usuli zarur: Sequential mi yoki Direct Access?',
        expected: '**Direct Access** — chunki millionlab mijozlar orasidan aynan bitta hisob raqamini kutmasdan millisekundda topish kerak.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l66-g1',
        num: '01',
        title: 'Keys: Faylga kirish va MIS',
        topic: 'Direct Access & MIS',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Supermarket direktori o‘tgan oyda qaysi toifadagi mahsulotlardan ko‘proq foyda kelganini ko‘rib, keyingi oyga buyurtma rejasini tuzmoqchi. Qaysi tizim unga bu maʼlumotni beradi?',
          scenario: 'Kassadagi POS terminallar kuniga 10 000 ta chekni tezkor bazaga (Direct Access) yozadi. Endi direktorga kunlik xom cheklar emas, umumlashtirilgan boshqaruv tahlili kerak.',
          options: [
            {
              text: 'MIS (Management Information System) — jamlanma hisobot va trendlar',
              isCorrect: true,
              feedback: 'To‘g‘ri! MIS operatsion bazadan olingan xom maʼlumotlarni rahbar qaror qabul qilishi uchun qulay tahliliy hisobotlarga aylantiradi.',
            },
            {
              text: 'Magnit lenta (Sequential Access) arxivi',
              isCorrect: false,
              feedback: 'Noto‘g‘ri — magnit lenta faqat uzoq muddatli zaxira nusxa saqlash uchun, tahlil uchun juda sekin.',
            },
            {
              text: 'Oddiy kalkulyator va qog‘oz cheklar',
              isCorrect: false,
              feedback: 'Noto‘g‘ri — oyiga 300 000 ta chekni qo‘lda hisoblash imkonsiz.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Kerakli yozuv manzilini hisoblab, oldingi yozuvlarni o‘qimasdan darhol murojaat qilish usuli qaysi?',
        options: ['Serial Access', 'Sequential Access', 'Bevosita / Direct (Random) Access', 'Batch Access'],
        answer: 2,
        explanation: 'Direct Access indekslar yoki xeshlash orqali kerakli yozuvga darhol yetib boradi.',
      },
      {
        prompt: 'Magnit lentalarda (Magnetic Tape) qo‘llaniladigan va barcha yozuvlarni tartib bilan o‘qiydigan usul qaysi?',
        options: ['Direct Access', 'Ketma-ket (Sequential) Access', 'Cloud Sync', 'Index Jump'],
        answer: 1,
        explanation: 'Lenta fizik jihatdan ketma-ket o‘ralgani uchun faqat Sequential kirishni qo‘llaydi.',
      },
      {
        prompt: 'MIS (Management Information System) ning asosiy foydalanuvchilari kimlar?',
        options: [
          'Tashkilot menejerlari va rahbarlari (qaror qabul qilish uchun)',
          'Faqat kompyuter o‘yinlari ishlab chiqaruvchilari',
          'Faqat uy foydalanuvchilari',
          'Faqat grafik dizaynerlar',
        ],
        answer: 0,
        explanation: 'MIS rahbarlarga tashkilot samaradorligini baholash va qaror chiqarish uchun hisobotlar beradi.',
      },
      {
        prompt: 'Qaysi jarayonda Ketma-ket (Sequential) faylga kirish hamon samarali hisoblanadi?',
        options: [
          'Bankomatdan pul yechishda',
          'Oylik ish haqi hisoblashda (barcha xodimlar yozuvi 100% qayta ishlanadigan Batch tizimda)',
          'Aviachipta izlashda',
          'Onlayn qidiruv tizimida',
        ],
        answer: 1,
        explanation: 'Agar fayldagi barcha yozuvlar boshidan oxirigacha ishlanadigan bo‘lsa, Sequential Access juda tez ishlaydi.',
      },
      {
        prompt: 'Maʼlumotlar bazasida qidiruv tezligini oshirish uchun maxsus tuziladigan ko‘rsatkich jadvali nima deyiladi?',
        options: ['Indeks (Index)', 'Input Mask', 'Flat-File', 'Label'],
        answer: 0,
        explanation: 'Indeks kitob mundarijasi kabi kerakli yozuvning manzilini tez topib beradi.',
      },
    ],
    teacherNotes: {
      method: 'Kitob mundarijasi (Direct Access) vs o‘ram (Sequential) analogiyasi bilan tushuntirish.',
      timing: 'Kirish 5 daq, Direct/Sequential & MIS 20 daq, CaseStudy 10 daq, Quiz 10 daq.',
      assessment: 'Direct vs Sequential tanlovi va MIS vazifasi.',
      homework: 'Maktab direktori uchun MIS qanday 3 ta haftalik hisobot chiqarishi kerakligini yozing.',
    },
  },
  {
    id: 'g10-l67',
    grade: 10,
    no: 67,
    part: '4-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Access', 'Normalizatsiya', 'MIS'],
    objectives: [
      'O‘quvchi 4-chorak yakuniy mavzulari: Formalar, Hisobotlar, Eksport, 1NF–3NF normallashtirish, Data Dictionary, Direct Access va MIS bo‘yicha bilimlarini sinaydi.',
    ],
    intro:
      '4-chorak yakuniy nazorat ishi! Formalar, Hisobot bo‘limlari, 3NF normallashtirish, Maʼlumotlar lug‘ati va Boshqaruv axborot tizimlari bo‘yicha bilimlaringizni sinang.',
    sections: [
      {
        heading: 'Nazorat savollari qamrovi',
        body: '• **Formalar**: `Combo Box`, `Check Box`, `Subform`, maʼlumot kiritish xavfsizligi.\n• **Hisobotlar**: `Report Header` vs `Page Header`, `Detail`, `Report Footer`, `.pdf`/`.xlsx`/`.rtf` eksport.\n• **Normallashtirish**: `1NF` (atomar), `2NF` (qisman bog‘liqliksiz), `3NF` (tranzitiv bog‘liqliksiz).\n• **Lug‘at va MIS**: `Data Dictionary`, `Direct Access` vs `Sequential`, `MIS`.',
        example: 'Krossvord va yakuniy testni diqqat bilan ishlang.',
      },
    ],
    keyTerms: [
      { term: '3NF', definition: 'Takrorlanish va tranzitiv bog‘liqliklardan tozalangan uchinchi normal shakl.' },
      { term: 'Report Footer', definition: 'Hisobot oxirida jami natijalarni chiqaruvchi bo‘lim.' },
      { term: 'Data Dictionary', definition: 'Baza strukturasining metamaʼlumotlar lug‘ati.' },
      { term: 'MIS', definition: 'Rahbarlarga tahliliy hisobot beruvchi boshqaruv axborot tizimi.' },
    ],
    steps: [
      '1. Krossvordda 4-chorak terminlarini toping.',
      '2. 5 ta yakuniy nazorat testini ishlang.',
    ],
    practice: [
      {
        task: '1NF, 2NF va 3NF ning har biriga bittadan asosiy qoida yozing.',
        expected: '1NF — atomar qiymatlar; 2NF — qisman bog‘liqlik yo‘q; 3NF — tranzitiv bog‘liqlik yo‘q.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l67-g1',
        num: '01',
        title: '4-chorak yakuniy krossvordi',
        topic: 'Maʼlumotlar bazasi terminlari',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '4-chorak maʼlumotlar bazasi terminlarini bosh harflarda kiriting:',
          clues: [
            { id: '1', clue: 'Boshqaruv axborot tizimlari qisqartmasi (3 harf)', answer: 'MIS' },
            { id: '2', clue: 'Maʼlumot kiritish uchun qulay foydalanuvchi ekrani', answer: 'FORM' },
            { id: '3', clue: 'Chop etish uchun o‘zgarmas eksport formati (3 harf)', answer: 'PDF' },
            { id: '4', clue: 'Baza maʼlumotlarini chop etishga tayyorlovchi hisobot', answer: 'REPORT' },
          ],
          hint: 'MIS, FORM, PDF, REPORT so‘zlarini kiriting.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Hisobotning har bir sahifasi yuqorisida ustun nomlari chiqishi uchun qaysi bo‘limdan foydalaniladi?',
        options: ['Report Header', 'Page Header', 'Report Footer', 'Detail'],
        answer: 1,
        explanation: 'Page Header har bir chop etiladigan sahifaning tepasida takrorlanadi.',
      },
      {
        prompt: 'Kalit bo‘lmagan ustunning boshqa kalit bo‘lmagan ustunga bog‘liqligi (Tranzitiv bog‘liqlik) qaysi bosqichda bartaraf etiladi?',
        options: ['1NF', '2NF', '3NF', 'UNF'],
        answer: 2,
        explanation: 'Tranzitiv bog‘liqlikni yo‘qotish 3NF (Uchinchi normal shakl) shartidir.',
      },
      {
        prompt: 'Jadval maydonlarining nomi, maʼlumot turi va hajmlari tavsiflangan hujjat nima deb ataladi?',
        options: ['Maʼlumotlar lug‘ati (Data Dictionary)', 'PivotChart', 'Subform', 'Firewall'],
        answer: 0,
        explanation: 'Data Dictionary bazaning barcha metamaʼlumotlarini saqlaydi.',
      },
      {
        prompt: 'Bankomat so‘roviga javoban mijoz yozuviga darhol sakrab murojaat qilish usuli qaysi?',
        options: ['Sequential Access', 'Bevosita / Direct Access', 'Magnetic Tape', 'Batch File'],
        answer: 1,
        explanation: 'Direct Access qolgan yozuvlarni o‘qimasdan darhol kerakli manzilga kiradi.',
      },
      {
        prompt: 'Formada `1:∞` bog‘langan bola jadval yozuvlarini bir vaqtda ko‘rsatish uchun nima qo‘shiladi?',
        options: ['Subform', 'Input Mask', 'Text Box', 'Page Break'],
        answer: 0,
        explanation: 'Subform asosiy forma ichida bog‘langan yozuvlarni ko‘rsatadi.',
      },
    ],
    teacherNotes: {
      method: 'Yillik yakuniy nazorat ishi; natijalar bo‘yicha 10-sinf yakuniy xulosasini chiqarish.',
      timing: 'Kirish 5 daq, Krossvord 15 daq, Nazorat testi 20 daq, Tahlil 5 daq.',
      assessment: 'Krossvord va nazorat testi natijalari.',
      homework: 'Keyingi darsda 10-sinfning barcha 4 choragi bo‘yicha yakuniy takrorlashga tayyorlaning.',
    },
  },
  {
    id: 'g10-l68',
    grade: 10,
    no: 68,
    part: '4-chorak',
    title: 'Takrorlash',
    kind: 'takrorlash',
    hours: 1,
    tools: ['Kriptografiya', 'Tarmoq', 'Excel', 'Access'],
    objectives: [
      'O‘quvchi 10-sinfning 4 ta choragi: Axborot nazariyasi va Shifrlash (1-chorak), Tarmoqlar va Ekspert tizimlar (2-chorak), Murakkab Excel (3-chorak) va Relyatsion maʼlumotlar bazasi (4-chorak) bilimlarini yagona tizimga umumlashtiradi.',
    ],
    intro:
      '10-sinf kursining yakuniy takrorlash darsi! Bir yil davomida shifrlashdan tortib kiberxavfsizlik, tarmoqlar, ekspert tizimlar, murakkab Excel formulalari hamda 3NF maʼlumotlar bazasigacha katta yo‘l bosib o‘tdingiz!',
    sections: [
      {
        heading: '10-sinfning 4 ta tayanch ustuni',
        body: '• **1-chorak (Axborot va Xavfsizlik)**: Bevosita/bilvosita manba, Simmetrik/Asimmetrik shifrlash, Validatsiya/Verifikatsiya, Sensorlar, Kiber-tahdidlar (Phishing, Ransomware, Rootkit), Raqamli tengsizlik.\n• **2-chorak (Tarmoq va Intellektual tizimlar)**: LAN/WAN, Client-Server/P2P, VPN, Intranet/Extranet, Ekspert tizim (Forward/Backward Chaining), Batch vs Online vs Real-Time.\n• **3-chorak (Elektron jadvallar)**: `$A$1` absolyut murojaat, `ROUND`, `VLOOKUP`, `INDEX+MATCH`, `COUNTIF/SUMIF`, `Data Validation`, `PivotTable`, `Chart`.\n• **4-chorak (Maʼlumotlar bazasi)**: `1:1`/`1:∞`/`∞:∞` (Junction Table), PK/Composite/FK, `Referential Integrity`, `Query` va `[Parametr]`, Formalar/Hisobotlar, `3NF`, `Data Dictionary` va `MIS`.',
        example: 'Ushbu 4 ustun 11-sinfda multimedia, loyiha boshqaruvi, SDLC va JavaScript dasturlashga mustahkam asos bo‘ladi!',
      },
    ],
    keyTerms: [
      { term: 'Asimmetrik shifrlash', definition: 'Ochiq (Public) va yopiq (Private) kalit juftligi bilan shifrlash.' },
      { term: 'Real-Time vs Batch', definition: 'Millisekundli darhol boshqaruv vs tunda guruhlab qayta ishlash.' },
      { term: 'INDEX + MATCH', definition: 'Istalgan ustundan chapga va o‘ngga qidiruvchi moslashuvchan Excel usuli.' },
      { term: '3NF Normalizatsiya', definition: 'Takrorlanish va tranzitiv bog‘liqliklardan xoli toza relyatsion baza.' },
    ],
    steps: [
      '1. 4 ta chorak kartochkalarini ko‘rib chiqing.',
      '2. Yakuniy 5 ta umumlashtiruvchi savolga javob bering.',
    ],
    practice: [
      {
        task: '10-sinfda o‘rgangan mavzularingiz ichidan kelajak kasbingizda eng ko‘p asqotadigan 2 tasini tanlang va nima uchunligini izohlang.',
        expected: 'Masalan: 1) Excel `INDEX+MATCH` va `PivotTable` — har qanday iqtisodiy/tahliliy ishda maʼlumotlarni tez tahlil qilish uchun; 2) Kiberxavfsizlik va 3NF baza — zamonaviy IT tizimlar yaratish va himoyalash uchun.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l68-g1',
        num: '01',
        title: '10-sinf Yillik Blitz Kartochkalari',
        topic: 'Yillik umumlashtirish',
        difficulty: 'O‘rta',
        engine: 'flashcards',
        config: {
          prompt: '10-sinfning eng muhim 4 chorak tushunchalarini takrorlang:',
          cards: [
            { term: 'Asimmetrik shifrlash', definition: 'Shifrlash uchun Public Key, deshifrlash uchun esa maxfiy Private Key ishlatiladi.', example: 'HTTPS / TLS sertifikatlari' },
            { term: 'VPN va Extranet', definition: 'VPN shifrlangan tunnel yaratadi; Extranet tashqi hamkorlarga cheklangan ichki tarmoq beradi.', example: 'Uzoqdan ishxona tarmog‘iga ulanish' },
            { term: 'PivotTable + VLOOKUP', definition: 'Katta jadvallarni birlashtirish va bir necha soniyada guruhlangan hisobot tuzish.', example: 'Viloyatlar bo‘yicha yillik savdo' },
            { term: '3NF va Referential Integrity', definition: 'Jadvallarni tranzitiv bog‘liqlikdan tozalash va yetim yozuvlarni taqiqlash.', example: 'Ota jadval PK ↔ Bola jadval FK' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '1-chorak: Ommaviy (Public) kalit bilan shifrlab, faqat maxfiy (Private) kalit bilan ochiladigan shifrlash usuli qaysi?',
        options: ['Sezar shifri', 'Simmetrik shifrlash', 'Asimmetrik shifrlash', 'Hashing'],
        answer: 2,
        explanation: 'Asimmetrik kriptografiya 2 xil kalit (Public va Private) dan foydalanadi.',
      },
      {
        prompt: '2-chorak: Samolyot avtopiloti va avtomobil ABS tormozlari qaysi qayta ishlash tizimiga kiradi?',
        options: ['Batch Processing', 'Real-Time Processing', 'Flat-File', 'Mail Merge'],
        answer: 1,
        explanation: 'Millisekundlik kechikishsiz jismoniy javob talab qiluvchi tizimlar — Real-Time.',
      },
      {
        prompt: '3-chorak: Qidiruv kaliti o‘ng ustunda, natija esa chap ustunda bo‘lganda Excelda qaysi usul qo‘llanadi?',
        options: ['VLOOKUP', 'INDEX + MATCH', 'ROUND', 'TODAY()'],
        answer: 1,
        explanation: 'INDEX + MATCH chapga ham qidira oladi.',
      },
      {
        prompt: '4-chorak: `∞:∞` (Ko‘pga-ko‘p) bog‘lanishni relyatsion bazada qurish uchun nima yaratiladi?',
        options: ['Yagona Flat-File', 'Oraliq Junction Table va ikkita 1:∞ bog‘lanish', 'Combo Box', 'CSV fayl'],
        answer: 1,
        explanation: 'Junction Table ko‘pga-ko‘p munosabatni ikkita birga-ko‘p aloqaga ajratadi.',
      },
      {
        prompt: '4-chorak: Korxona rahbarlariga strategik qarorlar uchun jamlanma hisobot taqdim etuvchi tizim qaysi?',
        options: ['MIS (Management Information System)', 'DNS', 'Switch', 'Compiler'],
        answer: 0,
        explanation: 'MIS boshqaruv qarorlari uchun tahliliy axborot yetkazib beradi.',
      },
    ],
    teacherNotes: {
      method: 'Yil davomidagi barcha 4 chorakni bog‘lab, o‘quvchilarni 11-sinf dasturiga (Multimedia, SDLC, JavaScript) ruhlantirish.',
      timing: 'Umumiy sharh 15 daq, Flashcards 15 daq, Yakuniy quiz va yil sarhisobi 15 daq.',
      assessment: 'Yillik bilimlarni umumlashtirish.',
      homework: 'Yozgi taʼtilda Excel va Access bo‘yicha 1 ta mini loyiha (shaxsiy xarajatlar yoki kitob katalogi) tuzib ko‘ring.',
    },
  },
];
