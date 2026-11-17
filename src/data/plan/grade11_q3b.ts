import type { Lesson } from './types';

export const GRADE_11_Q3B: Lesson[] = [
  {
    id: 'g11-l44',
    grade: 11,
    no: 44,
    part: '3-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Nazorat', '3-chorak 1-qism'],
    objectives: [
      'O‘quvchi 3-chorakning birinchi yarmidagi **Tarmoq (Bandwidth, BitTorrent, Xavfsizlik, Sunʼiy yo‘ldosh)** va **Loyiha boshqaruvi (SMART, Gantt, CPA, DRP, Prototiplash, CAD/CAM)** bilimlarini tizimli tekshiradi.',
      'O‘quvchi hisob-kitob (yuklash vaqti, Kritik yo‘l, Float) va vaziyatli tahlil topshirig‘ini mustaqil bajaradi.',
    ],
    intro:
      'Ushbu nazorat ishida siz **polosa kengligi hisob-kitoblari**, **kiberxavfsizlik**, **maʼlumotlar huquqi**, **kritik yo‘l (CPA)** va **tiklanish strategiyalari** bo‘yicha olgan bilimlaringizni sinovdan o‘tkazasiz!',
    sections: [
      {
        heading: 'Nazorat ishi tarkibi va Baholash mezonlari',
        body: '• **1-qism (Hisob-kitob)**: Fayl yuklash vaqti (`MB × 8 / Mbps`) va PERT/Gantt grafikda Kritik yo‘l hamda zaxira vaqt (Float) ni topish.\n• **2-qism (Amaliy tahlil)**: Tarmoq tahdidiga himoya tanlash, Maʼlumotlar qonuni tamoyilini aniqlash va DRP (RTO/RPO) mezonini belgilash.\n• **3-qism (Test va Takrorlash o‘yinlari)**: 5 ta yakuniy nazorat savoli.',
        tip: 'Hisob-kitoblarda birliklarga diqqat qiling: Bayt → bit (`×8`), Kritik yo‘l — eng uzun zanjir!',
      },
    ],
    keyTerms: [
      { term: 'Bandwidth & Bit Rate', definition: 'Kanal o‘tkazuvchanligi va amaldagi soniyalik bit uzatish tezligi.' },
      { term: 'CPA (Kritik yo‘l)', definition: 'Loyihaning minimal umumiy davomiyligini belgilovchi nol zaxirali (Float=0) vazifalar zanjiri.' },
      { term: 'RTO & RPO', definition: 'Avariyadan keyingi maksimal tiklanish vaqti va ruxsat etilgan maʼlumot yo‘qotish nuqtasi.' },
    ],
    steps: [
      '1. Amaliy hisob-kitob masalalarini qoralamada yeching.',
      '2. Nazorat o‘yinlari va yakuniy test savollarini bajaring.',
    ],
    practice: [
      {
        task: 'Nazorat masalasi: 300 MB faylni 48 Mbps kanalda yuklash necha soniya oladi? Shuningdek, A(3)→B(7)→D(2) va A(3)→C(4)→D(2) loyihasida Float nechaga teng?',
        expected: 'Yuklash: (300×8)/48 = 50 soniya. Kritik yo‘l: 3+7+2 = 12 kun; ikkinchi yo‘l: 3+4+2 = 9 kun; Float = 12 - 9 = 3 kun.',
        difficulty: 'orta',
      },
    ],
    games: [
      {
        id: 'g11-l44-g1',
        num: '01',
        title: 'Nazorat: Tarmoq va DRP mosligi',
        topic: 'Kompleks tekshiruv',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: '3-chorakning asosiy atamalarini to‘g‘ri taʼrifi bilan moslang:',
          pairs: [
            { left: 'BitTorrent Seeder', right: 'Faylning 100% qismiga ega va tarmoqqa ulashayotgan tugun' },
            { left: 'GEO sunʼiy yo‘ldosh', right: '35 786 km balandlikda joylashgan, yuqori kechikishli orbita' },
            { left: 'RPO', right: 'Avariyada yo‘qolishi mumkin bo‘lgan maksimal maʼlumot vaqti' },
            { left: 'CAD / CAM', right: 'Kompyuterda loyihalash va CNC/3D printerda ishlab chiqarish' },
          ],
        },
      },
      {
        id: 'g11-l44-g2',
        num: '02',
        title: 'Nazorat masalasi: Tezlik va Kritik yo‘l',
        topic: 'Amaliy hisob',
        difficulty: 'Qiyin',
        engine: 'calc',
        config: {
          prompt: 'Nazorat hisobi: 180 MB hajmli CAD chizmani 30 Mbps internet tezligida yuklash uchun necha soniya vaqt ketadi?',
          unit: 'soniya',
          correctAnswer: 48,
          tolerance: 0,
          steps: [
            '1-qadam: 180 MB × 8 = 1440 Mbit',
            '2-qadam: 1440 Mbit / 30 Mbps = 48 soniya',
          ],
          hint: 'MB ni 8 ga ko‘paytirib, Mbps ga bo‘ling.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Phishing hujumidan himoyalanish uchun eng muhim ikki chora qaysi?',
        options: [
          'Domen manzilini sinchiklab tekshirish va 2FA (ikki faktorli tasdiq) yoqish',
          'Monitorni changdan artish',
          'Hub sotib olish',
          'Rastrli rasmni kattalashtirish',
        ],
        answer: 0,
        explanation: 'URL ni tekshirish soxta saytni fosh qiladi, 2FA esa parol kiritilgan taqdirda ham akkauntni himoyalaydi.',
      },
      {
        prompt: 'Ilova ishlashi uchun umuman kerak bo‘lmagan tug‘ilgan sana va pasport maʼlumotini so‘rash qaysi qonun tamoyilini buzadi?',
        options: ['Maʼlumotlarni minimallashtirish', 'Trilateratsiya', 'Kanban', 'Parametrik modellashtirish'],
        answer: 0,
        explanation: 'Data Minimization faqat maqsadga xizmat qiladigan minimal maʼlumotni olishni talab qiladi.',
      },
      {
        prompt: 'Loyihadagi A(4)→B(5)→D(3) va A(4)→C(2)→D(3) yo‘llaridan Kritik yo‘l necha kun?',
        options: ['9 kun', '12 kun', '21 kun', '7 kun'],
        answer: 1,
        explanation: '1-yo‘l: 4+5+3 = 12 kun (eng uzun = Kritik yo‘l), 2-yo‘l: 4+2+3 = 9 kun.',
      },
      {
        prompt: 'Mijoz bilan talablarni aniqlashtirib olish uchun tez yasalib, keyin tashlab yuboriladigan model nima deb ataladi?',
        options: ['Throwaway prototip', 'Hot Site', 'Full Backup', 'G-code'],
        answer: 0,
        explanation: 'Throwaway prototip faqat fikr olish uchun yaratiladi va keyin o‘chiriladi.',
      },
      {
        prompt: '3-2-1 zaxiralash qoidasiga ko‘ra nechta nusxa boshqa geografik manzilda (Off-site) saqlanishi shart?',
        options: ['Kamida 1 tasi', 'Hech qaysisi', 'Faqat 0 tasi', '10 tasi'],
        answer: 0,
        explanation: '3 ta nusxa, 2 xil muhit, 1 tasi ofis/uydan tashqarida (bulut yoki boshqa bino).',
      },
    ],
    teacherNotes: {
      method: 'Yozma nazorat ishini 2 variantda o‘tkazing: hisob masalalari + qisqa tahliliy savollar.',
      timing: 'Tashkiliy 5 daqiqa, mustaqil nazorat ishi 35 daqiqa, yig‘ish 5 daqiqa.',
      assessment: 'Har bir to‘g‘ri yechim qadamlari (formula va izoh) bilan baholanadi.',
      homework: 'Xato qilingan mavzular bo‘yicha konspektni takrorlash.',
    },
  },
  {
    id: 'g11-l45',
    grade: 11,
    no: 45,
    part: '3-chorak',
    title: 'Tahlil. Hujjatlar tahlili usuli',
    kind: 'dars',
    hours: 1,
    tools: ['SDLC', 'Tahlil usullari / Hujjatlar'],
    objectives: [
      'O‘quvchi tizim yaratish hayot siklining (SDLC) **Tahlil (Analysis)** bosqichida axborot yig‘ishning 4 ta usulini (**Kuzatuv, Intervyu, So‘rovnoma, Hujjatlar tahlili**) solishtiradi.',
      'O‘quvchi **Hujjatlar tahlili (Document Analysis)** orqali mavjud hisob-fakturalar, jurnallar, formalar va maʼlumot hajmlarini o‘rganishni amalda qo‘llaydi.',
    ],
    intro:
      'Yangi maktab kutubxonasi yoki poliklinika dasturini yasashdan oldin dasturchi “Ular hozir qanday ishlamoqda?” degan savolga javob topishi shart. Buning eng ishonchli usullaridan biri — ularning **qog‘oz va elektron hujjatlarini tahlil qilish**dir!',
    sections: [
      {
        heading: 'SDLC Tahlil bosqichidagi 4 ta maʼlumot yig‘ish usuli',
        body: '• **Kuzatuv (Observation)**: tizim tahlilchisi xodimning ish jarayonini jim kuzatib turadi (ishonchli, lekin odamlar kuzatilayotganini bilib o‘zini boshqacha tutishi mumkin — *Hawthorne effekti*).\n• **Intervyu (Interview)**: rahbar va xodimlar bilan yuzma-yuz suhbat (chuqur fikr beradi, lekin ko‘p vaqt oladi).\n• **So‘rovnoma (Questionnaire)**: ko‘plab foydalanuvchilarga tez tarqatiladigan forma (arzon va tezkor, lekin savollar noto‘g‘ri tushunilishi mumkin).\n• **Hujjatlar tahlili (Document Analysis)**: mavjud ariza blankalari, hisobotlar, cheklar, qonun-qoidalar va maʼlumotlar bazasi jadvallarini tekshirish.',
      },
      {
        heading: 'Hujjatlar tahlili bizga nima beradi?',
        body: 'Hujjatlarni o‘rganish orqali tahlilchi quyidagilarni aniqlaydi:\n1. **Kirish va chiqish maydonlari**: yangi bazada qaysi ustunlar (`F.I.Sh.`, `Sana`, `Jami summa`, `Shtrix-kod`) bo‘lishi shart?\n2. **Maʼlumot turlari va o‘lchami**: kuniga nechta hujjat to‘ldiriladi? Qanday xatolar ko‘p uchraydi?\n3. **Hisob-kitob formulalari**: soliq, chegirma yoki baholar qanday formula bilan hisoblanmoqda?\n• **Afzalligi**: xodimlarni ishdan chalg‘itmaydi va raqamli aniq dalillarga tayanadi.\n• **Kamchiligi**: hujjatlar eskirgan bo‘lishi yoki haqiqiy norasmiy ish jarayonini to‘liq aks ettirmasligi mumkin.',
        tip: 'Eng yaxshi tahlil — bir nechta usulni birga qo‘llashdir (masalan, Hujjatlar tahlili + Intervyu)!',
      },
    ],
    keyTerms: [
      { term: 'SDLC Tahlil bosqichi', definition: 'Mavjud tizim muammolarini o‘rganib, yangi tizimga qo‘yiladigan talablarni (Requirements) aniqlash.' },
      { term: 'Hujjatlar tahlili', definition: 'Tashkilotdagi mavjud blankalar, hisobotlar, fayllar va yo‘riqnomalarni tekshirish usuli.' },
      { term: 'Kuzatuv (Observation)', definition: 'Xodimlarning amaldagi ishini bevosita ko‘rib, vaqt va bosqichlarni yozib olish.' },
      { term: 'Hawthorne effekti', definition: 'Xodim o‘zini kuzatishayotganini bilgach, odatdagidan ehtiyotkorroq yoki tezroq ishlashi.' },
    ],
    steps: [
      '1. To‘rtta tadqiqot usulining kuchli va zaif tomonlarini solishtiring.',
      '2. Qog‘oz chek yoki jurnal misolida maʼlumot bazasi maydonlarini ajratib oling.',
      '3. Quyidagi moslashtirish va Case Study mashqini bajaring.',
    ],
    practice: [
      {
        task: 'Maktab oshxonasi uchun avtomat kassa tizimi yaratilmoqda. 500 ta o‘quvchi va 3 ta oshpaz fikrini olish uchun qaysi usullarni tanlaysiz?',
        expected: '500 ta o‘quvchi uchun tezkor onlayn So‘rovnoma; 3 ta oshpaz bilan Intervyu va tanaffusda Kuzatuv; menyu va xarajat daftari uchun Hujjatlar tahlili.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l45-g1',
        num: '01',
        title: 'Qaysi tahlil usulini tanlaymiz?',
        topic: 'Fact-Finding usullari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Vaziyatga eng mos tizim tahlili usulini bog‘lang:',
          pairs: [
            { left: '500 nafar mijozdan bir kunda qisqa fikr yig‘ish', right: 'So‘rovnoma (Questionnaire)' },
            { left: 'Mavjud qog‘oz hisob-fakturalardagi maydon va formulalarni o‘rganish', right: 'Hujjatlar tahlili (Document Analysis)' },
            { left: 'Direktor bilan strategik talablarni chuqur muhokama qilish', right: 'Intervyu (Interview)' },
            { left: 'Omborchining tovar qabul qilishdagi haqiqiy harakatlarini ko‘rish', right: 'Kuzatuv (Observation)' },
          ],
        },
      },
      {
        id: 'g11-l45-g2',
        num: '02',
        title: 'Hujjatdan maʼlumotlar modelini ajratish',
        topic: 'Amaliy tahlil',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Tizim tahlilchisi kutubxonadagi qog‘oz “Kitob berish varaqasi”ni o‘rganmoqda. Varaqada: O‘quvchi ID, F.I.Sh., Sinfi, Kitob kodi, Berilgan sana, Qaytarish muddati va Kutubxonachi imzosi bor.',
          scenario: 'Tahlilchi har bir kitob topshirilganda baʼzan o‘quvchi familiyasi xato yozilishini va muddat o‘tganini qo‘lda tekshirish qiyinligini payqadi.',
          questions: [
            {
              prompt: 'Tahlilchi ushbu varaqani ko‘rib chiqishda qaysi usuldan foydalandi?',
              options: ['Hujjatlar tahlili', 'DDoS sinovi', 'Beta test', 'Defragmentatsiya'],
              answer: 0,
              explanation: 'Mavjud qog‘oz blanka va yozuvlarni o‘rganish — Hujjatlar tahlili usulidir.',
            },
            {
              prompt: 'Qaysi maʼlumot turi “Berilgan sana” va “Qaytarish muddati” maydonlari uchun eng to‘g‘ri?',
              options: ['Boolean', 'Date (Sana)', 'Audio MP3', 'Vektor SVG'],
              answer: 1,
              explanation: 'Sanalar orasidagi farqni (kechikish kunlarini) avtomatik hisoblash uchun Date turi shart.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Mavjud tashkilotdagi arizalar, hisobotlar, qoidalar va cheklarni o‘rganish orqali talablarni aniqlash usuli qaysi?',
        options: ['Hujjatlar tahlili', 'Alfa sinov', 'Kuzatuv', 'So‘rovnoma'],
        answer: 0,
        explanation: 'Hujjatlar tahlili tizimdan o‘tayotgan real maʼlumotlar tarkibini aniqlaydi.',
      },
      {
        prompt: 'Kuzatuv (Observation) usulining asosiy psixologik kamchiligi nima?',
        options: [
          'Xodimlar kuzatilayotganini bilib odatdagidan boshqacha (sunʼiy) ishlashi mumkin',
          'Hech qanday kamchiligi yo‘q',
          'Faqat internet kerak',
          'Qog‘oz sarflanadi',
        ],
        answer: 0,
        explanation: 'Bu holat Hawthorne effekti deb ataladi.',
      },
      {
        prompt: 'Katta guruh (masalan, 1000 ta talaba) dan tez va arzon statistik maʼlumot olish uchun eng qulay usul qaysi?',
        options: ['Barchasi bilan 1 soatlik intervyu', 'Onlayn so‘rovnoma (Questionnaire)', 'Har birini bir kun kuzatish', 'Kod yozish'],
        answer: 1,
        explanation: 'So‘rovnoma yuzlab/minglab odamni bir vaqtda qamrab oladi.',
      },
      {
        prompt: 'Hujjatlar tahlili natijasida tizim tahlilchisi qaysi muhim xulosani oladi?',
        options: [
          'Baza jadvallarida qanday maydonlar, maʼlumot turlari va hajm bo‘lishi kerakligini',
          'Serverning qaysi rangda bo‘lishini',
          'Monitor chastotasini',
          'Wi-Fi parolini',
        ],
        answer: 0,
        explanation: 'Hujjatlardagi har bir katak bo‘lajak maʼlumotlar bazasi va ekran formasiga asos bo‘ladi.',
      },
      {
        prompt: 'Tahlil (Analysis) bosqichi SDLC da qaysi bosqichdan keyin keladi va undan keyin nima boshlanadi?',
        options: [
          'Rejalashtirish/Boshlashdan keyin keladi, undan keyin Dizayn (Design) boshlanadi',
          'Yakunlashdan keyin keladi',
          'Ishlab chiqishdan keyin keladi',
          'Texnik xizmatdan keyin keladi',
        ],
        answer: 0,
        explanation: 'Talablar tahlil qilib aniqlangandan keyingina tizim dizayni (DFD, ER, UI) chiziladi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfga oddiy supermarket cheki yoki maktab tabelini ko‘rsatib, undan bo‘lajak DB maydonlarini ajrattiring.',
      timing: '4 ta usul taqqoslash 15 daqiqa, hujjatlar tahlili amaliyoti 15 daqiqa, o‘yinlar va test 15 daqiqa.',
      assessment: 'O‘quvchi real hujjatdan aniq maʼlumot maydonlari va turlarini chiqara olishi.',
      homework: 'Biror do‘kon cheki yoki kommunal to‘lov kvitansiyasini tahlil qilib, undagi barcha maʼlumot maydonlari ro‘yxatini tuzing.',
    },
  },
  {
    id: 'g11-l46',
    grade: 11,
    no: 46,
    part: '3-chorak',
    title: 'Dizayn. Ma’lumotlar oqimi diagrammasi. Tizim blok-sxemasi. Ekran formasi',
    kind: 'dars',
    hours: 1,
    tools: ['SDLC', 'DFD / System Flowchart / UI Form'],
    objectives: [
      'O‘quvchi SDLC ning **Dizayn (Design)** bosqichida **DFD (Maʼlumotlar oqimi diagrammasi)** ning 4 ta elementini (**External Entity, Process, Data Store, Data Flow**) farqlaydi.',
      'O‘quvchi **Tizim blok-sxemasi (System Flowchart)** belgilari va foydalanuvchi uchun qulay **Ekran formasi (Screen/Input Form)** hamda **Validation (tekshiruv)** qoidalarini loyihalaydi.',
    ],
    intro:
      'Tahlil bosqichida “Nima kerak?” ni aniqladik. Endi **Dizayn** bosqichida dasturchiga aniq chizma — **Maʼlumotlar qayerdan oqadi (DFD)**, **Qaysi qurilma va fayllar ishlaydi (System Flowchart)** va **Foydalanuvchi ekranda nimani ko‘radi (Ekran formasi)** shuni loyihalaymiz!',
    sections: [
      {
        heading: 'DFD (Data Flow Diagram) va Tizim blok-sxemasi farqi',
        body: '• **DFD (Maʼlumotlar oqimi diagrammasi)** — tizimda maʼlumot *qayerdan kelib, qanday qayta ishlanib, qayerga saqlanishini* ko‘rsatadi (4 element):\n  1. **Tashqi subyekt (External Entity)** — to‘rtburchak (Mijoz, Bank — maʼlumot manbai/oluvchisi);\n  2. **Jarayon (Process)** — yumaloq burchakli to‘rtburchak/doira (maʼlumotni o‘zgartiradi, masalan, “Chegirmani hisoblash”);\n  3. **Maʼlumot ombori (Data Store)** — ochiq to‘g‘ri to‘rtburchak (jadval/fayl, masalan, `D1: Buyurtmalar`);\n  4. **Maʼlumot oqimi (Data Flow)** — yo‘naltirilgan strelka.\n• **Tizim blok-sxemasi (System Flowchart)**: DFD dan farqli o‘laroq, maʼlumot oqimini emas, *jismoniy apparatlar, dastur bosqichlari, qarorlar (romb) va fayl turlarini* (ekran, printer, disk, magnit/bulut ombor) ko‘rsatadi!',
      },
      {
        heading: 'Ekran formasi (Screen/Input Form) dizayni qoidalari',
        body: 'Yaxshi ekran formasi kiritish xatolarini minimallashtiradi:\n• **Aniq sarlavha va maydon nomlari**, mantiqiy guruhlash va yetarli bo‘sh joy;\n• **Tezkor kiritish boshqaruvlari**: ochiladigan ro‘yxat (**Drop-down**), sana tanlagich (**Date Picker**), **Radio Button** (bitta tanlov) va **Check Box** (ko‘p tanlov);\n• **Avtomatik tekshiruv (Validation)**: Format check, Range check, Length check va aniq xato xabari (`“Yosh 0–120 oralig‘ida bo‘lishi kerak”`).',
        tip: 'Kiritish joyida odam yozishi shart bo‘lmagan variantlar (masalan, Viloyat nomi) uchun matn katagi emas, **Drop-down ro‘yxat** qo‘ying — bu imlo xatolarini 100% yo‘qotadi!',
      },
    ],
    keyTerms: [
      { term: 'DFD (Data Flow Diagram)', definition: 'Maʼlumotlarning tashqi subyekt, jarayon va maʼlumot omborlari orasidagi harakatini ko‘rsatuvchi chizma.' },
      { term: 'Data Store', definition: 'DFD da maʼlumotlar vaqtincha yoki doimiy saqlanadigan ombor (fayl yoki jadval).' },
      { term: 'System Flowchart', definition: 'Tizimdagi apparatlar, fayllar va qaror qabul qilish ketma-ketligini standart shakllarda tasvirlash.' },
      { term: 'Radio Button vs Checkbox', definition: 'Radio — faqat bitta variant tanlash; Checkbox — bir nechta variantni tanlash elementi.' },
    ],
    steps: [
      '1. DFD ning 4 ta komponenti rolini aniq ajrating (Entity bilan Entity to‘g‘ridan-to‘g‘ri bog‘lanmaydi, o‘rtada Process bo‘lishi shart!).',
      '2. System Flowchart dagi standart geometrik shakllarni (Romb = shart, Parallelepiped/Silindr = ombor) eslang.',
      '3. Quyidagi moslashtirish va kod xatosi/formalar mashqini bajaring.',
    ],
    practice: [
      {
        task: 'Ro‘yxatdan o‘tish ekran formasida: a) Jinsi (Erkak/Ayol); b) Qiziqishlari (Sport, Musiqa, IT); c) Tug‘ilgan yili maydonlari uchun qaysi boshqaruv elementlarini qo‘yasiz?',
        expected: 'a) Radio Button (faqat 1 tanlov); b) Checkboxes (bir nechta tanlov); c) Date Picker yoki Range Validation li raqamli maydon.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l46-g1',
        num: '01',
        title: 'DFD va Ekran formasi elementlari',
        topic: 'Tizim dizayni',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Dizayn elementlarini ularning vazifasi bilan bog‘lang:',
          pairs: [
            { left: 'DFD Process (Jarayon)', right: 'Kiruvchi maʼlumotni qayta ishlab natijaga aylantiradi' },
            { left: 'DFD Data Store', right: 'Maʼlumotlar saqlanadigan jadval yoki fayl ombori' },
            { left: 'Radio Button', right: 'Bir nechta o‘zaro istisno variantdan faqat BITTAsini tanlash' },
            { left: 'Drop-down list', right: 'Ro‘yxatdan tayyor qiymat tanlash orqali imlo xatolarini bartaraf etadi' },
          ],
        },
      },
      {
        id: 'g11-l46-g2',
        num: '02',
        title: 'DFD qoidalarini tekshiring',
        topic: 'DFD qonuniyatlari',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Maʼlumotlar oqimi diagrammasi (DFD) va System Flowchart haqidagi fikrlarni baholang:',
          statements: [
            {
              text: 'DFD da ikkita Tashqi subyekt (External Entity) o‘rtada Process bo‘lmasdan to‘g‘ridan-to‘g‘ri strelka bilan bog‘lanishi mumkin emas.',
              isTrue: true,
              explanation: 'To‘g‘ri! DFD tizim ichidagi jarayonlarni ko‘rsatadi, shuning uchun oqim albatta jarayondan (Process) o‘tishi shart.',
            },
            {
              text: 'System Flowchart faqat foydalanuvchi interfeysining ranglarini belgilaydi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! System Flowchart apparat, fayl, kiritish/chiqarish va boshqaruv qarorlari ketma-ketligini ko‘rsatadi.',
            },
            {
              text: 'Ekran formasida Validation qo‘yish maʼlumotlar bazasiga noto‘g‘ri formatdagi yozuvlar tushishini oldini oladi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Masalan, telefon yoki email formati bazaga saqlanmasdan oldin tekshiriladi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'DFD (Maʼlumotlar oqimi diagrammasi) nechta asosiy grafik komponentdan tashkil topadi?',
        options: [
          '4 ta: Tashqi subyekt (Entity), Jarayon (Process), Maʼlumot ombori (Data Store), Oqim (Data Flow)',
          '2 ta: Monitor va Klaviatura',
          '3 ta: RGB ranglar',
          '5 ta: HTTP usullari',
        ],
        answer: 0,
        explanation: 'Ushbu 4 ta element tizimdagi istalgan axborot harakatini modellashtirish uchun yetarli.',
      },
      {
        prompt: 'System Flowchart da shartli tarmoqlanish (Ha / Yo‘q qarori) qaysi geometrik shakl bilan chiziladi?',
        options: ['Romb (Diamond)', 'Doira', 'Uchburchak', 'To‘lqinli chiziq'],
        answer: 0,
        explanation: 'Romb shakli “Parol to‘g‘rimi? Ha/Yo‘q” kabi qaror nuqtasini bildiradi.',
      },
      {
        prompt: 'Foydalanuvchidan “To‘lov turi: Naqd, Karta yoki O‘tkazma” dan FAQAT bittasini tanlashni so‘rashda qaysi element eng to‘g‘ri?',
        options: ['Radio Button', 'Checkbox', 'Katta matn maydoni (Textarea)', 'Slider'],
        answer: 0,
        explanation: 'Radio Button bir guruhdan faqat bitta qiymat tanlashni kafolatlaydi.',
      },
      {
        prompt: 'DFD bilan System Flowchart o‘rtasidagi asosiy farq nimada?',
        options: [
          'DFD faqat maʼlumotlar oqimini (mantiqiy), System Flowchart esa apparatlar, fayllar va qaror boshqaruvini (fizik) ko‘rsatadi',
          'Ular mutlaqo bir xil',
          'DFD faqat o‘yinlarda ishlatiladi',
          'System Flowchart da strelka bo‘lmaydi',
        ],
        answer: 0,
        explanation: 'DFD maʼlumot qayerdan qayerga oqishiga, System Flowchart esa tizim qanday texnik boshqarilishiga urg‘u beradi.',
      },
      {
        prompt: 'Ekran formasida tug‘ilgan yil maydoniga “salom” deb yozib yubormaslik uchun nima o‘rnatiladi?',
        options: ['Maʼlumotlarni tekshirish (Data Type / Range Validation)', 'DDoS himoya', 'Rastrlash', 'Defragmentatsiya'],
        answer: 0,
        explanation: 'Validation kiritilayotgan qiymatning turi va oralig‘ini saqlashdan oldin tekshiradi.',
      },
    ],
    teacherNotes: {
      method: '“Onlayn do‘kon buyurtmasi” misolida doskada 4 elementli sodda DFD chizib ko‘rsating.',
      timing: 'DFD 15 daqiqa, System Flowchart 10 daqiqa, Ekran formasi 10 daqiqa, test 10 daqiqa.',
      assessment: 'O‘quvchi DFD da Process va Data Store ni adashtirmasligi va formaga to‘g‘ri boshqaruv elementini tanlashi.',
      homework: 'Maktab kutubxonasiga aʼzo bo‘lish uchun qulay Ekran formasini daftarga chizib, 3 ta Validation qoidasi yozing.',
    },
  },
  {
    id: 'g11-l47',
    grade: 11,
    no: 47,
    part: '3-chorak',
    title: 'Yangi tizim uchun texnik va dasturiy ta’minot',
    kind: 'dars',
    hours: 1,
    tools: ['SDLC', 'Hardware / Bespoke vs Off-the-Shelf'],
    objectives: [
      'O‘quvchi yangi axborot tizimi uchun **texnik taʼminot (Hardware)** talablarini (protsessor, RAM, disk sig‘imi, tarmoq tezligi, kiritish/chiqarish qurilmalari) asoslab tanlaydi.',
      'O‘quvchi dasturiy taʼminot tanlovida **Tayyor (Off-the-Shelf)** vs **Buyurtma asosida (Bespoke / Custom)** hamda **Ochiq kodli (Open-Source)** vs **Litsenziyali (Proprietary)** yechimlarni taqqoslaydi.',
    ],
    intro:
      'Dizayn tayyor! Endi uni qaysi kompyuterlarda ishlatamiz va dasturni noldan yozamizmi yoki tayyorini sotib olamizmi? Noto‘g‘ri tanlangan server yoki dastur loyiha byudjetini behudaga sarflab yuborishi mumkin.',
    sections: [
      {
        heading: 'Texnik taʼminot (Hardware) talablarini aniqlash',
        body: '• **Foydalanuvchilar soni va yuklama**: 5 ta kassir uchun oddiy kompyuter yetarli; 10 000 ta bir vaqtli talaba uchun kuchli ko‘p yadroli server, tezkor **NVMe SSD** va katta **RAM** kerak.\n• **Saqlash hajmi (Storage)**: kunlik/yillik maʼlumot o‘sishi + zaxira (RAID, Backup) hisoblanadi.\n• **Maxsus kiritish/chiqarish qurilmalari**: do‘konda *shtrix-kod skaneri va chek printeri*; kutubxonada *RFID o‘quvchi*; bankda *biometrik skaner*.\n• **Tarmoq va uzluksiz quvvat**: `UPS` (elektr o‘chganda saqlab qolish) va Gigabit Ethernet / optik kanal.',
      },
      {
        heading: 'Dasturiy taʼminot: Off-the-Shelf vs Bespoke (Custom)',
        body: '• **Tayyor dastur (Off-the-Shelf)**: darhol sotib olib yoki bepul (*Open-Source*, masalan, Moodle, LibreOffice) o‘rnatib ishlatiladi. **Afzalligi**: arzon, tez ishga tushadi, ko‘p odamda sinalgan. **Kamchiligi**: ortiqcha funksiyalar ko‘p, tashkilotning noyob talabiga 100% mos kelmasligi mumkin.\n• **Buyurtma dastur (Bespoke / Custom-written)**: faqat shu tashkilot uchun noldan yoziladi. **Afzalligi**: barcha ish jarayoniga 100% mos, raqobat ustunligi beradi, kod egasi o‘zimiz. **Kamchiligi**: juda qimmat, yaratish oylab vaqt oladi, dastlabki xatolar (bug) ehtimoli bor.',
        tip: 'Umumiy vazifalar (matn yozish, elektron pochta, maktab LMS) uchun **Off-the-Shelf**; noyob biznes logikasi (masalan, bank ilovasi) uchun esa **Bespoke** tanlanadi!',
      },
    ],
    keyTerms: [
      { term: 'Off-the-Shelf dastur', definition: 'Bozorda tayyor sotiladigan yoki ochiq kodli ommaviy dasturiy mahsulot.' },
      { term: 'Bespoke (Custom) dastur', definition: 'Muayyan tashkilotning maxsus talablari asosida buyurtma bilan noldan yaratilgan dastur.' },
      { term: 'UPS (Uninterruptible Power Supply)', definition: 'Elektr tokining to‘satdan uzilishida serverni vaqtincha quvvat bilan taʼminlovchi batareya bloki.' },
      { term: 'Scalability (Masshtablanish)', definition: 'Foydalanuvchilar soni oshganda tizimning unumdorlikni yo‘qotmay kengaya olish qobiliyati.' },
    ],
    steps: [
      '1. Tizim ko‘lamiga qarab server/mijoz kompyuterlarining minimal texnik ko‘rsatkichlarini belgilang.',
      '2. Tayyor va Buyurtma dasturlarning xarajat/vaqt jadvalini solishtiring.',
      '3. Quyidagi moslashtirish va To‘g‘ri/Noto‘g‘ri mashqlarini bajaring.',
    ],
    practice: [
      {
        task: 'Yangi ochilgan 15 o‘quvchilik o‘quv markazi uchun noldan maxsus LMS tizimi yozdirish to‘g‘rimi yoki tayyor Moodle / Google Classroom olishmi? Nima uchun?',
        expected: 'Tayyor Off-the-Shelf (Moodle/Classroom) tanlash maʼqul, chunki 15 o‘quvchi uchun noldan dastur yozdirish juda qimmat va ko‘p vaqt oladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l47-g1',
        num: '01',
        title: 'Off-the-Shelf vs Bespoke tanlovi',
        topic: 'Dastur tanlash',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir holat yoki xususiyatni to‘g‘ri dastur turiga bog‘lang:',
          pairs: [
            { left: 'Darhol o‘rnatish, arzon narx va tayyor qo‘llab-quvvatlash', right: 'Off-the-Shelf (Tayyor dastur)' },
            { left: 'Tashkilotning noyob ish tartibiga 100% moslashgan maxsus yechim', right: 'Bespoke (Buyurtma dastur)' },
            { left: 'Kod ochiq, litsenziya to‘lovi yo‘q, hamjamiyat tomonidan rivojlantiriladi', right: 'Open-Source (Ochiq kodli)' },
            { left: 'Elektr o‘chganda server maʼlumotlarini saqlab qoluvchi qurilma', right: 'UPS (Uzluksiz quvvat manbai)' },
          ],
        },
      },
      {
        id: 'g11-l47-g2',
        num: '02',
        title: 'Texnik tanlov qarorlari',
        topic: 'Hardware & Software',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Yangi tizim uchun apparat va dastur tanlash haqidagi fikrlarni tekshiring:',
          statements: [
            {
              text: 'Bespoke (buyurtma) dasturiy taʼminot har doim tayyor (Off-the-Shelf) dasturdan arzon va tez bitadi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Noldan dasturlash ko‘p oylik dasturchi mehnati talab qilgani uchun ancha qimmat va uzoq davom etadi.',
            },
            {
              text: 'Supermarket kassasi uchun oddiy klaviaturadan tashqari shtrix-kod skaneri va chek printeri kabi maxsus kiritish/chiqarish qurilmalari tanlanadi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Kiritish tezligi va xatolarni kamaytirish uchun shtrix-kod skaneri juda muhim.',
            },
            {
              text: 'Agar tayyor dasturda bizga umuman kerak bo‘lmagan 80% ortiqcha funksiya bo‘lsa, u Off-the-Shelf dasturlarning odatiy kamchiligi hisoblanadi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Tayyor dasturlar keng omma uchun yasalgani sababli ortiqcha funksiyalar (bloat) bo‘lishi tabiiy.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Muayyan kompaniyaning maxsus biznes jarayonlari uchun noldan dasturchilar tomonidan yozib beriladigan dastur nima deb ataladi?',
        options: ['Off-the-Shelf', 'Bespoke (Custom-written)', 'Shareware', 'Firmware'],
        answer: 1,
        explanation: 'Bespoke — aynan bitta buyurtmachi talabiga tikilgan maxsus dasturiy taʼminot.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri Off-the-Shelf (tayyor) dasturning asosiy ustunligi?',
        options: [
          'Arzonroq narx, tez o‘rnatish va ko‘plab foydalanuvchilarda sinalganligi',
          'Manba kodi faqat sizga tegishli bo‘lishi',
          'Raqobatchilarda bunday dastur mutlaqo bo‘lmasligi',
          'Hardware talab qilmasligi',
        ],
        answer: 0,
        explanation: 'Ishlab chiqish xarajati minglab xaridorlar o‘rtasida bo‘lingani uchun narxi past va darhol tayyor.',
      },
      {
        prompt: 'Katta video-montaj yoki 3D CAD ish stansiyasi uchun eng muhim texnik komponentlar qaysi?',
        options: [
          'Kuchli GPU (videokarta), ko‘p RAM (32+ GB), tezkor SSD va ko‘p yadroli CPU',
          'Faqat CD-ROM diskovod',
          'Matrix printer',
          'Dial-up modem',
        ],
        answer: 0,
        explanation: 'Video va 3D grafika yuqori hisoblash va xotira o‘tkazuvchanligini talab qiladi.',
      },
      {
        prompt: 'Elektr tarmog‘idagi qisqa uzilishda server to‘satdan o‘chib maʼlumotlar bazasi buzilmasligi uchun nima o‘rnatiladi?',
        options: ['UPS (Uzluksiz quvvat manbai)', 'Hub', 'Skaner', 'Plotter'],
        answer: 0,
        explanation: 'UPS elektr uzilganda batareya orqali serverni xavfsiz o‘chirish yoki generatorgacha ushlab turish imkonini beradi.',
      },
      {
        prompt: 'Tizim tahlilchisi hardware tanlashda nimaga asoslanishi shart?',
        options: [
          'Bir vaqtda ishlaydigan foydalanuvchilar soni, maʼlumot hajmi va dasturiy talablarga',
          'Monitor ramkasining rangiga',
          'Stolning balandligiga',
          'Internet provayder logosiga',
        ],
        answer: 0,
        explanation: 'Texnik spetsifikatsiya aynan yuklama va saqlash hajmidan kelib chiqib hisoblanadi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfni 2 guruhga bo‘lib, “Bespoke yozamiz” vs “Off-the-Shelf olamiz” debatini o‘tkazing (Masalan: maktab oshxonasi tizimi).',
      timing: 'Hardware talablari 15 daqiqa, Bespoke vs Off-the-Shelf 15 daqiqa, debat va test 15 daqiqa.',
      assessment: 'O‘quvchi xarajat, vaqt va funksionallik mezonlari asosida asosli qaror bera olishi.',
      homework: 'Kelajakdagi kasbingiz uchun kerak bo‘ladigan kompyuterning minimal Hardware/Software spetsifikatsiyasini tuzing.',
    },
  },
  {
    id: 'g11-l48',
    grade: 11,
    no: 48,
    part: '3-chorak',
    title: 'Ishlab chiqish va sinovdan oʻtkazish. Qora quti va oq quti strategiyasi sinovlari',
    kind: 'dars',
    hours: 1,
    tools: ['Testing', 'Black Box / White Box / Test Data'],
    objectives: [
      'O‘quvchi dastur kodini sinashning **Qora quti (Black Box)** va **Oq quti (White Box)** strategiyalarini hamda **Unit, Integration, System** sinov bosqichlarini farqlaydi.',
      'O‘quvchi sinov jadvali (**Test Plan**) uchun uch xil test maʼlumotlarini (**Normal, Abnormal/Erroneous, Extreme/Boundary**) aniq tuzadi.',
    ],
    intro:
      'Kod yozilib bo‘ldi — lekin uni sinamasdan foydalanuvchiga berish falokatga olib kelishi mumkin! Dasturiy taʼminot muhandisligida xatolarni topish uchun **Qora quti**, **Oq quti** va **Chegaraviy qiymatlar** bilan sinash strategiyalari qo‘llaniladi.',
    sections: [
      {
        heading: 'Qora quti (Black Box) vs Oq quti (White Box) sinovi',
        body: '• **Black Box Testing (Qora quti)**: sinovchi (QA muhandis) dasturning *ichki kodini ko‘rmaydi*! U faqat kiritish (**Input**) berib, kutilgan natija (**Expected Output**) bilan haqiqiy natijani (**Actual Output**) solishtiradi.\n• **White Box Testing (Oq quti)**: sinovchi *dasturning manba kodini (kod tuzilishini) biladi* va har bir `if/else` tarmog‘i, sikl hamda ichki mantiqiy yo‘llar to‘liq ishlashini tekshiradi (odatda dasturchining o‘zi **Unit Test** sifatida yozadi).',
      },
      {
        heading: 'Test maʼlumotlari turlari: Normal, Abnormal va Extreme (Boundary)',
        body: 'Masalan, dastur **1 dan 100 gacha** bo‘lgan imtihon balini qabul qilsin:\n• **Normal (Odatiy) maʼlumot**: ruxsat etilgan o‘rtadagi qiymat (`50`, `75`) — dastur qabul qilishi kerak.\n• **Extreme / Boundary (Chegaraviy) maʼlumot**: ruxsat etilgan eng chekka qiymatlar va ulardan bir qadam tashqarisi (`0`, `1`, `100`, `101`) — xatolarning ko‘pi aynan `<` vs `<=` kabi chegara shartlarida chiqadi!\n• **Abnormal / Erroneous (Noto‘g‘ri) maʼlumot**: mutlaqo yaroqsiz qiymat yoki tur (`-10`, `150`, `"salom"`) — dastur qulamasdan aniq xato xabarini ko‘rsatib rad etishi shart!',
        tip: 'Sinov bosqichlari: **Unit Testing** (bitta funksiya) → **Integration Testing** (modullar ulanishi) → **System Testing** (butun tizim).',
      },
    ],
    keyTerms: [
      { term: 'Black Box Testing', definition: 'Ichki kodni bilmasdan faqat kirish va chiqish natijalari asosida dasturni sinash.' },
      { term: 'White Box Testing', definition: 'Dasturning ichki kodi, shartlari va barcha mantiqiy yo‘llarini tekshirib sinash.' },
      { term: 'Extreme (Boundary) Data', definition: 'Ruxsat etilgan oraliqning eng minimal va eng maksimal chegaralaridagi sinov qiymatlari.' },
      { term: 'Abnormal Data', definition: 'Tizim rad etishi kerak bo‘lgan noto‘g‘ri turdagi yoki oraliqdan tashqaridagi maʼlumot.' },
    ],
    steps: [
      '1. Black Box va White Box ni kimga va qachon ishlatilishiga ko‘ra ajrating.',
      '2. Berilgan oraliq uchun Normal, Extreme va Abnormal test qiymatlarini tanlang.',
      '3. Quyidagi moslashtirish va koddagi xatoni topish (`codebug`) o‘yinlarini bajaring.',
    ],
    practice: [
      {
        task: 'Parol uzunligi 8 dan 16 belgigacha bo‘lishi shart. Normal, Extreme (Boundary) va Abnormal test qiymatlariga misollar yozing.',
        expected: 'Normal: 10 yoki 12 belgi; Extreme: 8 va 16 belgi (hamda 7 va 17 chegara tekshiruvi); Abnormal: 3 belgi, 25 belgi yoki bo‘sh satr.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l48-g1',
        num: '01',
        title: 'Test turlarini moslang (1..100 oraliq)',
        topic: 'Test maʼlumotlari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Dastur 1 dan 100 gacha (ikkisi ham kiradi) baho qabul qiladi. Sinov qiymatlarini toifalarga bog‘lang:',
          pairs: [
            { left: '55', right: 'Normal maʼlumot (ruxsat etilgan o‘rta qiymat)' },
            { left: '1 va 100', right: 'Extreme / Boundary (chegaraviy ruxsat etilgan qiymatlar)' },
            { left: '"aʼlo" yoki -5', right: 'Abnormal / Erroneous (rad etilishi kerak bo‘lgan noto‘g‘ri qiymat)' },
            { left: 'Black Box', right: 'Kodga qaramasdan faqat Input va Output ni tekshirish' },
          ],
        },
      },
      {
        id: 'g11-l48-g2',
        num: '02',
        title: 'Oq quti (White Box) chegara xatosini toping!',
        topic: 'Boundary Bug',
        difficulty: 'O‘rta',
        engine: 'codebug',
        config: {
          prompt: 'Dastur 1 dan 100 gacha (100 ham kiradi!) ballarni qabul qilishi kerak. Oq quti sinovida `100` kiritilganda xato berayotgan qatorni toping:',
          lines: [
            'function tekshirBall(ball) {',
            '  if (ball >= 1 && ball < 100) {',
            '    return "Qabul qilindi";',
            '  }',
            '  return "Xato: oraliqdan tashqari";',
            '}',
          ],
          buggyLine: 1,
          options: [
            '2-qator: `ball < 100` o‘rniga `ball <= 100` bo‘lishi kerak',
            '1-qator: funksiya nomi xato',
            '3-qator: return ishlamaydi',
            '5-qator: matn inglizcha bo‘lishi shart',
          ],
          answer: '2-qator: `ball < 100` o‘rniga `ball <= 100` bo‘lishi kerak',
          explanation: 'Extreme/Boundary test (`ball = 100`) aynan `<` va `<=` orasidagi chegara xatosini darhol fosh qiladi!',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Sinovchi dasturning ichki manba kodini ko‘rmasdan, faqat kiritish va chiqish natijasini tekshiradigan usul qaysi?',
        options: ['Black Box Testing (Qora quti)', 'White Box Testing (Oq quti)', 'Unit Code Review', 'Dry Run'],
        answer: 0,
        explanation: 'Qora quti sinovida dastur ichi yopiq quti deb qaraladi.',
      },
      {
        prompt: 'Yosh 18 dan 65 gacha bo‘lishi talab qilinsa, qaysi sonlar Extreme (Boundary) test maʼlumoti hisoblanadi?',
        options: ['18 va 65', '35 va 40', '-20 va "yigirma"', '1000'],
        answer: 0,
        explanation: 'Oraliqning eng quyi va eng yuqori chegaralari Extreme/Boundary test bo‘ladi.',
      },
      {
        prompt: 'Dasturdagi har bir `if / else` sharti va sikl yo‘llarini kodni ko‘rgan holda sinovdan o‘tkazish qaysi strategiya?',
        options: ['White Box Testing (Oq quti)', 'Beta Testing', 'Phishing', 'Direct Changeover'],
        answer: 0,
        explanation: 'White Box sinovi kodning ichki tuzilishi va shoxlanish qamrovini tekshiradi.',
      },
      {
        prompt: 'Agar dasturga son o‘rniga `"abc"` matni kiritilganda dastur o‘chib qolmasdan “Faqat raqam kiriting” desa, u qaysi testdan o‘tgan bo‘ladi?',
        options: ['Abnormal (Erroneous) Data testi', 'Extreme testi', 'Performance testi', 'Hardware testi'],
        answer: 0,
        explanation: 'Abnormal maʼlumotlar dasturning xatolarga chidamliligini tekshiradi.',
      },
      {
        prompt: 'Alohida yozilgan login moduli va to‘lov modulini bir-biriga ulab tekshirish qaysi test bosqichi?',
        options: ['Integration Testing (Integratsion sinov)', 'Unit Testing', 'Cold Site', 'Prototiplash'],
        answer: 0,
        explanation: 'Unit — yakka modul; Integration — modullarning o‘zaro birgalikda ishlashini sinash.',
      },
    ],
    teacherNotes: {
      method: 'Doskaga 4 ustunli Test Plan jadvalini chizing: Test ID | Maʼlumot turi | Kiritish | Kutilgan natija | Haqiqiy natija.',
      timing: 'Black vs White Box 15 daqiqa, Normal/Abnormal/Extreme jadvali 15 daqiqa, codebug va test 15 daqiqa.',
      assessment: 'O‘quvchi istalgan shart uchun Normal, Extreme va Abnormal test qiymatlarini to‘g‘ri yoza olishi.',
      homework: '1 dan 12 gacha oy raqamini qabul qiladigan dastur uchun 6 qatorli Test Plan jadvali tuzing.',
    },
  },
  {
    id: 'g11-l49',
    grade: 11,
    no: 49,
    part: '3-chorak',
    title: 'Alfa sinov va beta sinov',
    kind: 'dars',
    hours: 1,
    tools: ['Testing', 'Alpha / Beta / UAT'],
    objectives: [
      'O‘quvchi **Alfa sinov (Alpha Testing)** va **Beta sinov (Beta Testing)** ning maqsadi, ishtirokchilari va muhiti bo‘yicha farqlarini chuqur tushunadi.',
      'O‘quvchi **Foydalanuvchi qabul sinovi (UAT — User Acceptance Testing)** va dasturni ommaviy chiqarishdan oldingi sifat darvozalarini baholaydi.',
    ],
    intro:
      'Dasturchilar o‘z kodi to‘g‘ri ishlashiga ishonadi, lekin haqiqiy foydalanuvchilar tugmalarni boshqacha bosadi! Shuning uchun dastur ommaga chiqishidan oldin ikki muhim bosqichdan — **Alfa** va **Beta** sinovlardan o‘tadi.',
    sections: [
      {
        heading: 'Alfa sinov (Alpha Testing) nima?',
        body: '• **Qayerda va kim o‘tkazadi?** Ishlab chiqaruvchi kompaniyaning **o‘z ichki jamoasi** (QA sinovchilar, dasturchilar, baʼzan taklif qilingan tanlangan vakillar) kompaniya ichidagi nazorat qilinadigan muhitda o‘tkazadi.\n• **Maqsadi**: Dasturni tashqi dunyoga chiqarishdan oldin jiddiy funksional xatolarni (Crash, mantiqiy buglar) topish va tuzatish.\n• **Usul**: Ham **Black Box**, ham **White Box** usullari ishlatilishi mumkin; sinov sikllari uzoq va tez tuzatiladi.',
      },
      {
        heading: 'Beta sinov (Beta Testing) va UAT',
        body: '• **Qayerda va kim o‘tkazadi?** Dasturning deyarli tayyor versiyasi (**Beta version**) **haqiqiy tashqi foydalanuvchilarga** ularning o‘z kompyuteri/telefonida (real muhitda) tarqatiladi (*Open Beta* — hamma uchun; *Closed Beta* — cheklangan guruhga).\n• **Maqsadi**: Turli xil qurilmalar, ekran o‘lchamlari, sekin internet va haqiqiy hayotiy ssenariylarda yashirin xatolar, qulaylik (UX) kamchiliklari va fikr-mulohazalarni yig‘ish.\n• **UAT (User Acceptance Testing)**: Buyurtmachi vakili tizim barcha shartnoma talablariga javob berishini tekshirib, **“Qabul qilindi”** imzosini qo‘yadigan yakuniy sinov!',
        tip: 'Eslab qolish oson: **A**lfa = kompaniya ichida (**A**vvallo o‘zimizda); **B**eta = **B**egona / haqiqiy foydalanuvchilarda!',
      },
    ],
    keyTerms: [
      { term: 'Alfa sinov (Alpha Testing)', definition: 'Dastur chiqarilishidan oldin kompaniya ichidagi QA mutaxassislar tomonidan o‘tkaziladigan sinov.' },
      { term: 'Beta sinov (Beta Testing)', definition: 'Dasturning sinov versiyasini haqiqiy tashqi foydalanuvchilarga real muhitda sinab ko‘rish uchun berish.' },
      { term: 'UAT (Acceptance Testing)', definition: 'Buyurtmachi tizimni shartnomadagi barcha talablarga mosligini tekshirib qabul qilish bosqichi.' },
      { term: 'Open vs Closed Beta', definition: 'Open — istalgan odam qo‘shilishi mumkin; Closed — faqat taklif etilgan cheklangan sinovchilar.' },
    ],
    steps: [
      '1. Alfa va Beta sinovlarni joyi, ishtirokchilari va xavfsizlik darajasiga ko‘ra solishtiring.',
      '2. Qaysi bosqichdan keyin qaysi biri kelishini tartiblang.',
      '3. Quyidagi moslashtirish va Case Study mashqlarini bajaring.',
    ],
    practice: [
      {
        task: 'Yangi mobil o‘yin studiyasi Alfa sinovni muvaffaqiyatli tugatdi. Nima uchun darhol sotuvga chiqarmasdan oldin 1000 ta o‘yinchiga Beta sinov ochishi foydali?',
        expected: 'Alfa sinov studiyadagi 5–10 ta bir xil telefonda o‘tgan; Beta sinovda esa o‘nlab turli telefon modellari, sekin 3G internet va kutilmagan o‘yin harakatlaridagi xatolar hamda server yuklamasi tekshiriladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l49-g1',
        num: '01',
        title: 'Alfa sinovmi yoki Beta sinov?',
        topic: 'Sinov strategiyalari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Xususiyatlarni mos sinov bosqichi bilan bog‘lang:',
          pairs: [
            { left: 'Kompaniya ichida nazorat qilinadigan laboratoriyada o‘tkaziladi', right: 'Alfa sinov (Alpha)' },
            { left: 'Haqiqiy foydalanuvchilar o‘z uylaridagi qurilmalarda sinaydi', right: 'Beta sinov (Beta)' },
            { left: 'Buyurtmachi barcha talablar bajarilganini tekshirib imzo qo‘yadi', right: 'Qabul sinovi (UAT)' },
            { left: 'Faqat maxsus taklifnoma olgan 200 nafar foydalanuvchi qatnashadi', right: 'Closed Beta (Yopiq beta)' },
          ],
        },
      },
      {
        id: 'g11-l49-g2',
        num: '02',
        title: 'Reliz zanjirini tartiblang',
        topic: 'Sinovdan relizgacha',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Dasturiy mahsulotni sinovdan o‘tkazib chiqarish bosqichlarini to‘g‘ri tartibda joylashtiring:',
          items: [
            '1. Dasturchi funksiyalarni tekshiradi (Unit / White Box)',
            '2. Kompaniya ichidagi QA jamoasi to‘liq tizimni sinaydi (Alfa sinov)',
            '3. Tashqi ko‘ngilli foydalanuvchilar real sharoitda sinaydi (Beta sinov)',
            '4. Buyurtmachi yakuniy qabul tekshiruvini tasdiqlaydi (UAT)',
            '5. Barqaror tayyor versiya (Production Release) eʼlon qilinadi',
          ],
          hint: 'Unit → Alfa (ichki) → Beta (tashqi) → UAT (qabul) → Production.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Alfa sinovni odatda kimlar va qayerda o‘tkazadi?',
        options: [
          'Kompaniya ichidagi QA sinovchilar va dasturchilar ishlab chiqish muhitida',
          'Barcha internet foydalanuvchilari uylarida',
          'Faqat apparat ishlab chiqaruvchi zavod',
          'Maktab o‘quvchilari nazorat ishida',
        ],
        answer: 0,
        explanation: 'Alfa sinov — tashqi dunyoga chiqishdan oldingi ichki kompleks sinovdir.',
      },
      {
        prompt: 'Beta sinov qaysi turdagi sinov usuliga tayanadi?',
        options: ['Black Box (Qora quti — foydalanuvchi kodni ko‘rmaydi)', 'White Box (kod tahlili)', 'CAD simulyatsiya', 'G-code'],
        answer: 0,
        explanation: 'Beta sinovchilar oddiy foydalanuvchilar bo‘lgani uchun ular faqat dasturdan foydalanadi (Black Box).',
      },
      {
        prompt: 'Nima uchun Alfa sinovdan o‘tgan dasturda ham Beta sinovda yangi xatolar topiladi?',
        options: [
          'Chunki tashqi foydalanuvchilarda minglab turli qurilmalar, OS versiyalari va kutilmagan harakatlar bo‘ladi',
          'Chunki Alfa sinov umuman o‘tkazilmaydi',
          'Chunki internet kechasi o‘chadi',
          'Chunki Beta sinovda kod o‘chiriladi',
        ],
        answer: 0,
        explanation: 'Kompaniya laboratoriyasida dunyodagi barcha qurilmalar va real foydalanuvchi xatti-harakatini to‘liq modellashtirish imkonsiz.',
      },
      {
        prompt: 'Buyurtmachi tizimni “Ha, hamma talablarim bajarildi” deb rasman qabul qilishi qaysi bosqich?',
        options: ['UAT (User Acceptance Testing)', 'Unit Testing', 'Prototiplash', 'BitTorrent'],
        answer: 0,
        explanation: 'UAT — shartnoma yopilishidan oldingi yakuniy mijoz tasdig‘i.',
      },
      {
        prompt: 'Dastur sirlarini (masalan, hali eʼlon qilinmagan yangi o‘yin syujetini) saqlash uchun qaysi Beta shakli tanlanadi?',
        options: ['Closed Beta (Yopiq beta + NDA kelishuvi)', 'Open Beta', 'Public Torrent', 'Cold Site'],
        answer: 0,
        explanation: 'Closed Beta da faqat ishonchli va sir saqlash majburiyatini olgan cheklangan sinovchilar qatnashadi.',
      },
    ],
    teacherNotes: {
      method: 'Mashhur o‘yinlar yoki ilovalardagi “Beta versiya” yozuvi nimani anglatishini muhokama qiling.',
      timing: 'Alfa 15 daqiqa, Beta va UAT 15 daqiqa, o‘yinlar va test 15 daqiqa.',
      assessment: 'O‘quvchi Alfa vs Beta ning 4 ta asosiy mezon (kim, qayerda, usul, maqsad) bo‘yicha farqini ayta olishi.',
      homework: 'Telefoningizdagi biror ilovaning “Beta tester” dasturi qanday ishlashini o‘rganib, qisqa izoh yozib keling.',
    },
  },
  {
    id: 'g11-l50',
    grade: 11,
    no: 50,
    part: '3-chorak',
    title: 'Installyatsiya va hujjatlashtirish. Tahlil va texnik xizmat koʻrsatish',
    kind: 'dars',
    hours: 1,
    tools: ['SDLC', 'Changeover / Docs / Maintenance'],
    objectives: [
      'O‘quvchi eski tizimdan yangi tizimga o‘tish (Installyatsiya / Implementation) ning 4 ta usulini (**Direct, Parallel, Pilot, Phased**) solishtiradi.',
      'O‘quvchi **Foydalanuvchi (User)** va **Texnik (Technical)** hujjatlar tarkibini hamda **Texnik xizmat ko‘rsatish (Maintenance)** ning 3 turini (**Corrective, Adaptive, Perfective**) ajratadi.',
    ],
    intro:
      'Yangi dastur sinovdan muvaffaqiyatli o‘tdi! Endi eng nozik jarayon — **eski tizimni to‘xtatib yangisiga o‘tish**, **hujjatlarni topshirish** va tizim ishga tushgach uni yillar davomida **qo‘llab-quvvatlash (Maintenance)** boshlanadi.',
    sections: [
      {
        heading: 'O‘tish usullari (4 Changeover Methods)',
        body: '• **Direct Changeover (To‘g‘ridan-to‘g‘ri)**: eski tizim juma kuni o‘chiriladi, dushanbadan hamma faqat yangisida ishlaydi. *Eng arzon va tez, lekin eng xavfli* (xato chiqsa orqaga yo‘l yo‘q!).\n• **Parallel Running (Parallel yuritish)**: bir muddat eski va yangi tizim BIR VAQTDA ishlaydi va natijalar solishtiriladi. *Eng xavfsiz, lekin ikki baravar ko‘p ish va xarajat*.\n• **Pilot Implementation (Tajriba/Sinov)**: yangi tizim avval faqat *bitta filialda/bo‘limda* sinab ko‘riladi, keyin boshqalarga tarqatiladi.\n• **Phased Implementation (Bosqichma-bosqich)**: yangi tizim barcha bo‘limlarga *modulma-modul* (masalan, bu oy kadrlar, keyingi oy buxgalteriya) o‘rnatiladi.',
      },
      {
        heading: 'Hujjatlashtirish va Texnik xizmat ko‘rsatish (Maintenance)',
        body: '• **Foydalanuvchi hujjati (User Documentation)**: oddiy tilda yozilgan qo‘llanma (o‘rnatish, ekran rasmlari, tez-tez so‘raladigan savollar FAQ, xato kodlari izohi).\n• **Texnik hujjat (Technical Documentation)**: dasturchilar uchun (DFD, ER sxema, manba kodi izohlari, o‘zgaruvchilar ro‘yxati, o‘rnatish skriptlari).\n• **Texnik xizmat ko‘rsatish turlari**:\n  - **Corrective (Tuzatuvchi)**: foydalanishda chiqqan xato (bug) larni tuzatish.\n  - **Adaptive (Moslashtiruvchi)**: yangi qonun, soliq stavkasi yoki yangi OS versiyasiga moslash.\n  - **Perfective (Takomillashtiruvchi)**: yangi foydali tugma qo‘shish yoki tizimni tezlashtirish.',
      },
    ],
    keyTerms: [
      { term: 'Parallel Running', definition: 'Xavfsizlik uchun eski va yangi tizimni bir vaqtda yuritib, natijalarni taqqoslab o‘tish.' },
      { term: 'Pilot Implementation', definition: 'Yangi tizimni avval faqat bitta kichik bo‘lim yoki filialda ishga tushirish usuli.' },
      { term: 'Technical Documentation', definition: 'Tizimni kelajakda tushunish va yangilash uchun dasturchilarga mo‘ljallangan arxitektura va kod hujjatlari.' },
      { term: 'Adaptive Maintenance', definition: 'Tashqi muhit (yangi OS, qonun, valyuta) o‘zgarganda dasturni shunga moslab yangilash.' },
    ],
    steps: [
      '1. To‘rtta o‘tish usulini xavf, xarajat va tezlik mezonida solishtiring.',
      '2. Foydalanuvchi vs Texnik hujjatga nimalar kirishini ajrating.',
      '3. Quyidagi moslashtirish va bo‘sh joyni to‘ldirish mashqlarini bajaring.',
    ],
    practice: [
      {
        task: 'Bank tizimida yangi dasturga o‘tishda Direct Changeover nima uchun tavsiya etilmaydi? Qaysi usul yaxshiroq?',
        expected: 'Direct da xato chiqsa millionlab mijozlar tranzaksiyalari to‘xtab qoladi. Bank uchun Parallel Running (yoki Filial Pilot) xavfsizroq.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l50-g1',
        num: '01',
        title: 'Tizimga o‘tish (Changeover) usullari',
        topic: 'Installyatsiya',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir o‘tish usulini uning aniq taʼrifi bilan moslang:',
          pairs: [
            { left: 'Direct Changeover', right: 'Eski tizim birdan to‘xtatilib, darhol faqat yangisiga o‘tish (tezkor, lekin xavfli)' },
            { left: 'Parallel Running', right: 'Eski va yangi tizim bir muddat birga ishlaydi (eng xavfsiz, lekin qimmat)' },
            { left: 'Pilot Implementation', right: 'Yangi tizim avval faqat bitta filialda sinovdan o‘tkaziladi' },
            { left: 'Phased Implementation', right: 'Yangi tizim bo‘lak-bo‘lak (modulma-modul) joriy qilinadi' },
          ],
        },
      },
      {
        id: 'g11-l50-g2',
        num: '02',
        title: 'Hujjatlar va Texnik xizmat turlari',
        topic: 'Maintenance',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Bo‘sh o‘rinlarni texnik xizmat turlari bilan to‘ldiring:',
          template: 'Dasturda topilgan xatoni tuzatish {{0}} xizmat deyiladi. Yangi soliq qonuniga moslab yangilash esa {{1}} xizmatdir.',
          blanks: [
            { options: ['Corrective', 'Perfective', 'Direct'], answer: 'Corrective' },
            { options: ['Adaptive', 'Pilot', 'Parallel'], answer: 'Adaptive' },
          ],
          hint: 'Correct = tuzatish; Adapt = tashqi sharoitga moslashish.',
          explanation: 'Dastur ishga tushgach, u yillar davomida Corrective, Adaptive va Perfective xizmat ko‘rsatish siklida bo‘ladi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Qaysi o‘tish usulida bir xil maʼlumotlar ikki marta (ham eski, ham yangi tizimga) kiritilib natijalar solishtiriladi?',
        options: ['Parallel Running', 'Direct Changeover', 'Phased Implementation', 'Cold Site'],
        answer: 0,
        explanation: 'Parallel Running ikki baravar mehnat talab qilsa-da, yangi tizim to‘g‘ri ishlashini 100% tasdiqlash imkonini beradi.',
      },
      {
        prompt: '50 ta maktabga mo‘ljallangan elektron jurnalni avval faqat 1 ta tajriba maktabida ishga tushirish qaysi usul?',
        options: ['Pilot Implementation', 'Direct Changeover', 'Parallel', 'Adaptive'],
        answer: 0,
        explanation: 'Pilot usuli bitta kichik hududda xatolarni aniqlab, qolgan 49 ta maktabni xavfdan saqlaydi.',
      },
      {
        prompt: 'Dasturning ER-diagrammasi, DFD chizmalari va kod izohlari qaysi hujjat tarkibiga kiradi?',
        options: [
          'Texnik hujjatlar (Technical Documentation)',
          'Foydalanuvchi qo‘llanmasi (User Guide)',
          'Reklama bukleti',
          'Kassa cheki',
        ],
        answer: 0,
        explanation: 'Texnik hujjatlar tizimni kelajakda boshqa dasturchilar tuzatishi va rivojlantirishi uchun kerak.',
      },
      {
        prompt: 'Foydalanuvchilar iltimosiga ko‘ra dasturga yangi “PDF ga eksport qilish” tugmasini qo‘shib berish qaysi texnik xizmat turi?',
        options: ['Perfective Maintenance (Takomillashtiruvchi)', 'Corrective Maintenance', 'Pilot Implementation', 'Direct'],
        answer: 0,
        explanation: 'Ishlab turgan tizimga yangi foydali imkoniyat qo‘shish yoki tezlashtirish — Perfective.',
      },
      {
        prompt: 'SDLC ning yakuniy “Evaluation” (Tahlil/Baholash) bosqichida nima tekshiriladi?',
        options: [
          'Yaratilgan tizim haqiqatdan ham mijoz muammosini hal qildimi, foydalanish qulaymi va byudjetga sig‘dimi?',
          'Kompyuterning og‘irligi',
          'Klaviatura shrifti',
          'Kabel uzunligi',
        ],
        answer: 0,
        explanation: 'Evaluation bosqichi dastlabki talablar bilan yakuniy natija samaradorligini solishtiradi.',
      },
    ],
    teacherNotes: {
      method: 'Maktab jurnalini qog‘ozdan elektronga o‘tkazish misolida 4 ta o‘tish usulini rollarga bo‘lib muhokama qiling.',
      timing: '4 o‘tish usuli 15 daqiqa, Hujjatlar va Maintenance 15 daqiqa, o‘yinlar va test 15 daqiqa.',
      assessment: 'O‘quvchi biznes xavfiga qarab to‘g‘ri o‘tish usulini tanlay olishi va Maintenance turlarini misol bilan farqlashi.',
      homework: 'O‘zingiz foydalanadigan dasturning oxirgi yangilanishini (Release Notes) Corrective, Adaptive yoki Perfective ga ajratib yozing.',
    },
  },
  {
    id: 'g11-l51',
    grade: 11,
    no: 51,
    part: '3-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Nazorat', '3-chorak yakuniy (SDLC)'],
    objectives: [
      'O‘quvchi 3-chorakning ikkinchi yarmidagi **SDLC** bosqichlari (**Tahlil, Dizayn, Dastur/Apparat tanlash, Testlash, O‘rnatish, Hujjatlashtirish va Texnik xizmat**) bo‘yicha bilimlarini mustaqil nazoratda namoyish etadi.',
      'O‘quvchi DFD, Test Plan, Alfa/Beta va Changeover bo‘yicha amaliy topshiriqlarni bajaradi.',
    ],
    intro:
      '3-chorak yakuniy nazorat ishida siz **Tizim hayot sikli (SDLC)** ning barcha bosqichlarini — hujjat tahlilidan tortib, sinov va installyatsiyagacha bo‘lgan bilimlaringizni sinab ko‘rasiz!',
    sections: [
      {
        heading: 'Nazorat topshiriqlari yo‘nalishi',
        body: '• **1-yo‘nalish (Tahlil & Dizayn)**: Fact-finding usullari, DFD belgilari, Ekran formasi va Validation.\n• **2-yo‘nalish (Sinov)**: Black Box vs White Box, Normal/Extreme/Abnormal maʼlumotlar, Alfa vs Beta.\n• **3-yo‘nalish (Joriy etish)**: Direct/Parallel/Pilot/Phased, Hujjatlar va Texnik xizmat.',
      },
    ],
    keyTerms: [
      { term: 'DFD', definition: 'Maʼlumotlar oqimini Entity, Process va Data Store orqali chizish.' },
      { term: 'Boundary Test', definition: 'Minimal va maksimal ruxsat etilgan chegara qiymatlarini sinash.' },
      { term: 'Changeover', definition: 'Eski tizimdan yangisiga o‘tishning 4 xil strategiyasi.' },
    ],
    steps: [
      '1. SDLC bosqichlarining ketma-ketligini yodingizda tiklang.',
      '2. Nazorat mashqlari va 5 ta test savolini mustaqil yeching.',
    ],
    practice: [
      {
        task: 'Maktab uchun yaratilgan elektron imtihon tizimi: 1) Avval 1 ta 11-sinfda ishga tushirildi; 2) Test balli 0–100 oralig‘ida tekshirildi. Bular qaysi usullar?',
        expected: '1) Pilot Implementation (bitta bo‘limda sinash); 2) Range / Extreme Validation (`0` va `100` chegaralari).',
        difficulty: 'orta',
      },
    ],
    games: [
      {
        id: 'g11-l51-g1',
        num: '01',
        title: 'Nazorat: SDLC bosqichlarini tartiblang',
        topic: 'To‘liq hayot sikli',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Axborot tizimini yaratishning (SDLC) asosiy bosqichlarini to‘g‘ri tartibda joylashtiring:',
          items: [
            '1. Tahlil (Analysis — hujjatlar, intervyu, talablar)',
            '2. Dizayn (Design — DFD, ekran formalari, apparat/dastur tanlash)',
            '3. Ishlab chiqish va Sinov (Development & Testing — Black/White Box, Alfa/Beta)',
            '4. Installyatsiya va Hujjatlashtirish (Implementation — Changeover)',
            '5. Baholash va Texnik xizmat (Evaluation & Maintenance)',
          ],
          hint: 'Tahlil → Dizayn → Kod/Test → Joriy etish → Xizmat ko‘rsatish.',
        },
      },
      {
        id: 'g11-l51-g2',
        num: '02',
        title: 'Nazorat: Tizim sinovi va xizmati',
        topic: 'Yakuniy moslashtirish',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'SDLC atamalarini to‘g‘ri izohi bilan moslang:',
          pairs: [
            { left: 'Hujjatlar tahlili', right: 'Mavjud blankalar va hisobotlardan maʼlumot maydonlarini aniqlash' },
            { left: 'Alfa sinov', right: 'Kompaniya ichida QA mutaxassislar tomonidan o‘tkaziladigan sinov' },
            { left: 'Parallel Running', right: 'Eski va yangi tizimni bir muddat birga ishlatib solishtirish' },
            { left: 'Corrective Maintenance', right: 'Ishlab turgan dasturdagi xatolarni (bug) tuzatish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Foydalanuvchi parolini tekshiradigan kodni ochib ko‘rib, barcha `if/else` shartlarini sinash qaysi usul?',
        options: ['White Box Testing', 'Black Box Testing', 'Parallel Running', 'So‘rovnoma'],
        answer: 0,
        explanation: 'White Box sinovi kodning ichki mantiqiy yo‘llarini tekshiradi.',
      },
      {
        prompt: '1 dan 50 gacha son kiritish maydoni uchun Abnormal (noto‘g‘ri) test maʼlumoti qaysi?',
        options: ['-3 yoki "besh"', '1', '50', '25'],
        answer: 0,
        explanation: '1 va 50 — Extreme; 25 — Normal; -3 yoki matn — Abnormal.',
      },
      {
        prompt: 'Dasturni butun shahar tarmog‘iga chiqarishdan oldin faqat bitta maktabda ishlatib ko‘rish qaysi o‘tish usuli?',
        options: ['Pilot Implementation', 'Direct Changeover', 'Parallel', 'Waterfall'],
        answer: 0,
        explanation: 'Pilot Implementation kichik tajriba maydonchasida tizimni tekshiradi.',
      },
      {
        prompt: 'Kompyuter operatsion tizimi yangilanganidan keyin dasturni unga moslab qayta chiqarish qaysi texnik xizmat turi?',
        options: ['Adaptive Maintenance', 'Corrective', 'Perfective', 'Extreme'],
        answer: 0,
        explanation: 'Tashqi muhit (OS, qonun) o‘zgarishiga moslash — Adaptive Maintenance.',
      },
      {
        prompt: 'Nima uchun Texnik hujjat (Technical Documentation) oddiy foydalanuvchiga emas, dasturchilarga beriladi?',
        options: [
          'Unda kod tuzilishi, DFD va maʼlumotlar bazasi sxemasi bo‘lib, kelajakdagi texnik xizmat uchun zarur',
          'Chunki u faqat yapon tilida yoziladi',
          'Chunki unda tugma bosish yo‘riqnomasi bor',
          'Chunki u hech qanday foydasiz',
        ],
        answer: 0,
        explanation: 'Texnik hujjatlar tizimni qo‘llab-quvvatlovchi muhandislar uchun yo‘l xaritasidir.',
      },
    ],
    teacherNotes: {
      method: 'Individual yozma nazorat va amaliy test tarzida o‘tkazing.',
      timing: 'Kirish 5 daqiqa, nazorat topshirig‘i 35 daqiqa, yakun 5 daqiqa.',
      assessment: 'O‘quvchining tahlil, sinov va joriy etish bosqichlarini aniq ajrata olishi.',
      homework: '3-chorak bo‘yicha qiyin tuyulgan atamalarni takrorlash.',
    },
  },
  {
    id: 'g11-l52',
    grade: 11,
    no: 52,
    part: '3-chorak',
    title: 'Takrorlash darsi',
    kind: 'takrorlash',
    hours: 1,
    tools: ['Takrorlash', '3-chorak yakuni'],
    objectives: [
      'O‘quvchi 3-chorak davomida o‘tilgan barcha mavzularni (**Tarmoq va xavfsizlik, Maʼlumotlar huquqi, Loyiha boshqaruvi va Gantt/CPA, SDLC tahlil-dizayn-test-joriy etish**) yaxlit tizimga birlashtiradi.',
      'O‘quvchi tezkor krossvord va kartochkalar orqali asosiy atamalarni mustahkamlaydi.',
    ],
    intro:
      '3-chorakni muvaffaqiyatli yakunlayapmiz! Ushbu takrorlash darsida **tarmoq texnologiyalari**, **loyiha boshqaruvi** va **SDLC muhandisligi** bo‘yicha eng muhim tushunchalarni blits-o‘yinlar bilan mustahkamlab olamiz.',
    sections: [
      {
        heading: '3-chorakning 3 ta asosiy ustuni',
        body: '• **1. Tarmoqlar & Xavfsizlik**: `Bandwidth vs Bit Rate`, `BitTorrent (Seeder/Leecher/Tracker)`, `Firewall / 2FA / TLS`, `O‘zR Shaxsga doir maʼlumotlar qonuni`, `GEO / MEO / LEO` sunʼiy yo‘ldoshlar.\n• **2. Loyiha boshqaruvi**: `SMART`, `Project Charter`, `Kanban vs Gantt`, `Kritik yo‘l (CPA) & Float`, `DRP (RTO / RPO / 3-2-1)`, `Prototiplash` va `CAD/CAM`.\n• **3. SDLC (Tizim yaratish sikli)**: `Hujjatlar tahlili`, `DFD vs System Flowchart`, `Off-the-Shelf vs Bespoke`, `Black/White Box & Alfa/Beta`, `Changeover & Maintenance`.',
      },
    ],
    keyTerms: [
      { term: 'BitTorrent Swarm', definition: 'Bitta faylni bo‘laklab o‘zaro almashayotgan Seeder va Leecher lar guruhi.' },
      { term: 'Critical Path (CPA)', definition: 'Loyiha minimal muddatini belgilovchi nol zaxirali (Float=0) eng uzun yo‘l.' },
      { term: 'Changeover & Maintenance', definition: 'Tizimni ishga tushirish (Direct/Parallel/Pilot/Phased) va keyingi texnik xizmat.' },
    ],
    steps: [
      '1. Kartochkalarni aylantirib 3-chorak atamalarini tezkor eslang.',
      '2. Yakuniy krossvord va blits-testni ishlang.',
    ],
    practice: [
      {
        task: 'O‘tilgan 3 ta bo‘limni o‘zaro bog‘lang: Yangi “Sunʼiy yo‘ldosh monitoringi” loyihasini boshlashdan ishga tushirishgacha qaysi 3 ta muhim vositani qo‘llaysiz?',
        expected: '1) Project Charter va Gantt/CPA bilan muddatni rejalash; 2) DFD va Low-Fidelity prototip bilan tizim dizaynini kelishish; 3) Pilot Implementation va 3-2-1 Backup bilan ishga tushirish.',
        difficulty: 'orta',
      },
    ],
    games: [
      {
        id: 'g11-l52-g1',
        num: '01',
        title: '3-chorak atamalari kartochkalari',
        topic: 'Tezkor takrorlash',
        difficulty: 'O‘rta',
        engine: 'flashcards',
        config: {
          prompt: 'Har bir kartochkani bosib, 3-chorakning oltin qoidalarini takrorlang:',
          cards: [
            { front: 'Yuklash vaqti formulasi?', back: '(Fayl hajmi MB × 8) / Tezlik (Mbps) = soniya', tag: 'Tarmoq' },
            { front: 'LEO vs GEO farqi?', back: 'LEO (~550 km, ~30ms past ping); GEO (~35 786 km, ~600ms, TV uchun qulay)', tag: 'Kosmos' },
            { front: 'Kritik yo‘l va Float?', back: 'Kritik yo‘l — eng uzun yo‘l (Float = 0); kechiksa butun loyiha kechikadi', tag: 'Loyiha' },
            { front: 'RTO vs RPO?', back: 'RTO — tiklanish vaqti; RPO — yo‘qolishi mumkin bo‘lgan maʼlumot vaqti', tag: 'DRP' },
            { front: 'Alfa vs Beta sinov?', back: 'Alfa — kompaniya ichida QA; Beta — tashqi haqiqiy foydalanuvchilar', tag: 'SDLC' },
            { front: 'Maintenance 3 turi?', back: 'Corrective (tuzatish), Adaptive (moslash), Perfective (yaxshilash)', tag: 'SDLC' },
          ],
        },
      },
      {
        id: 'g11-l52-g2',
        num: '02',
        title: '3-chorak yakuniy krossvordi',
        topic: 'Umumiy atamalar',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '3-chorak mavzularidan olingan asosiy kalit so‘zlarni toping:',
          clues: [
            { id: '1', clue: 'BitTorrent da faylni 100% yuklab olib tarqatayotgan tugun', answer: 'SEEDER' },
            { id: '2', clue: 'Kritik bo‘lmagan vazifadagi zaxira vaqt', answer: 'FLOAT' },
            { id: '3', clue: 'Maʼlumotlar oqimi diagrammasi qisqartmasi', answer: 'DFD' },
            { id: '4', clue: 'Eski tizimni saqlab, yangisini faqat 1 ta filialda sinash usuli', answer: 'PILOT' },
          ],
          hint: 'SEEDER, FLOAT, DFD, PILOT.',
        },
      },
    ],
    quiz: [
      {
        prompt: '400 MB faylni 32 Mbps internetda yuklab olish uchun necha soniya ketadi?',
        options: ['12.5 soniya', '100 soniya', '50 soniya', '32 soniya'],
        answer: 1,
        explanation: '(400 × 8) / 32 = 3200 / 32 = 100 soniya.',
      },
      {
        prompt: 'Foydalanuvchidan keragidan ortiq shaxsiy maʼlumot so‘ramaslik tamoyili qaysi?',
        options: ['Data Minimization', 'Trilateratsiya', 'Prototyping', 'Phishing'],
        answer: 0,
        explanation: 'Maʼlumotlarni minimallashtirish — faqat zarur hajmda maʼlumot olish.',
      },
      {
        prompt: 'Kritik yo‘l 20 kun, parallel ikkinchi yo‘l esa 14 kun bo‘lsa, qisqa yo‘lda Float necha kun?',
        options: ['6 kun', '34 kun', '20 kun', '0 kun'],
        answer: 0,
        explanation: '20 - 14 = 6 kun zaxira vaqt.',
      },
      {
        prompt: 'Qaysi dastur turi tayyor sotib olinmaydi, balki buyurtmachining noyob talabiga moslab noldan yoziladi?',
        options: ['Bespoke (Custom)', 'Off-the-Shelf', 'Open-Source umumiy', 'Browser'],
        answer: 0,
        explanation: 'Bespoke maxsus buyurtma asosida yoziladi.',
      },
      {
        prompt: 'Parol kiritiladigan maydon uzunligi 6–12 belgi bo‘lsa, `6` va `12` qiymatlari qaysi test toifasiga kiradi?',
        options: ['Extreme / Boundary', 'Abnormal', 'Alpha', 'Parallel'],
        answer: 0,
        explanation: 'Chegaraviy qiymatlar Extreme/Boundary test maʼlumoti hisoblanadi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfni ikki jamoaga bo‘lib, flash-kartochkalar bo‘yicha blits-viktorina o‘tkazing.',
      timing: 'Asosiy sxemalar takrori 15 daqiqa, o‘yinlar 15 daqiqa, yakuniy blits-test 15 daqiqa.',
      assessment: 'O‘quvchilarning 3-chorak atamalarini erkin qo‘llay olishi.',
      homework: '4-chorakdagi Grafika va JavaScript mavzulariga tayyorgarlik ko‘rish.',
    },
  },
];
