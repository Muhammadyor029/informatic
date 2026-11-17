import type { Lesson } from './types';

export const GRADE_11_Q2A: Lesson[] = [
  {
    id: 'g11-l19',
    grade: 11,
    no: 19,
    part: '2-chorak',
    title: 'Elektron tijorat va internet banking nima?',
    kind: 'dars',
    hours: 1,
    tools: ['AT va jamiyat', 'E-tijorat', 'Internet Banking'],
    objectives: [
      'O‘quvchi **Elektron tijorat (E-commerce)** tushunchasi, modellari (**B2C**, **B2B**, **C2C**) va mijozlar hamda do‘konlar uchun afzallik/kamchiliklarini tahlil qiladi.',
      'O‘quvchi **Internet banking** va mobil banking xizmatlarining afzalliklari hamda xavfsizlik talablarini (2FA, SSL/HTTPS, fishingdan himoya) biladi.',
    ],
    intro:
      'Uydan chiqmay Uzum/Amazon dan buyurtma berish (**E-tijorat**) va bir soniyada karta orqali kommunal to‘lov o‘tkazish (**Internet banking**) zamonaviy iqtisodiyotning qon tomiriga aylandi!',
    sections: [
      {
        heading: 'Elektron tijorat (E-commerce) va modellari',
        body: '**E-commerce** — tovar va xizmatlarni internet orqali sotib olish va sotish. 3 asosiy modeli bor:\n• **B2C (Business-to-Consumer)**: kompaniya bevosita xaridorga sotadi (masalan, Uzum Market, Asaxiy).\n• **B2B (Business-to-Business)**: bir korxona boshqa korxonaga ulgurji tovar yoki dasturiy xizmat sotadi.\n• **C2C (Consumer-to-Consumer)**: oddiy fuqarolar bir-biriga sotadi (masalan, OLX).\n**Afzalliklari**: 24/7 ishlaydi, geografik chegara yo‘q, ijara xarajati kam, narxlarni oson solishtirish. **Kamchiliklari**: tovarni qo‘lda ushlab ko‘rib bo‘lmaydi, yetkazib berish kutish vaqti, firibgarlik va karta maʼlumotlari o‘g‘irlanishi xavfi.',
        example: 'Anʼanaviy do‘konda ijara va sotuvchi maoshi katta bo‘lsa, onlayn do‘konda markaziy ombor xarajatlarni keskin kamaytiradi.',
      },
      {
        heading: 'Internet Banking va Xavfsizlik',
        body: '**Internet banking** — bank bo‘limiga bormasdan veb-sayt yoki mobil ilova orqali hisoblarni boshqarish: balans tekshirish, P2P o‘tkazma, kredit to‘lash, valyuta ayirboshlash, omonat ochish. Xavfsizlik qoidalari: **HTTPS** (qulfcha), **2FA (SMS/biometrik tasdiq)**, hech kimga CVV/SMS-kod bermaslik, umumiy Wi-Fi da bank amallarini bajarmaslik.',
        tip: 'Rasmiy bank ilovasi xodimi hech qachon qo‘ng‘iroq qilib SMS-kod yoki PIN-kod so‘ramaydi!',
      },
    ],
    keyTerms: [
      { term: 'E-commerce (E-tijorat)', definition: 'Internet tarmog‘i orqali tovar va xizmatlarning oldi-sotdisi.' },
      { term: 'B2C / B2B / C2C', definition: 'Biznes-mijoz, Biznes-biznes va Mijoz-mijoz elektron savdo modellari.' },
      { term: 'Internet Banking', definition: 'Bank hisoblarini masofadan turib veb yoki mobil ilova orqali boshqarish xizmati.' },
      { term: '2FA (Ikki bosqichli tasdiq)', definition: 'Paroldan tashqari telefonga keladigan bir martalik SMS yoki biometrik tasdiq.' },
    ],
    steps: [
      '1. B2C, B2B va C2C modellariga bittadan hayotiy misol toping.',
      '2. E-tijoratning xaridor va biznes uchun 3 afzallik va 2 kamchiligini sanang.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Nima uchun internet-do‘konlarda narxlar ko‘pincha shahar markazidagi oddiy do‘konlardan arzonroq bo‘ladi?',
        expected: 'Qimmat savdo zali ijarasi, ko‘plab sotuvchilar maoshi va kommunal xarajatlar yo‘qligi (yoki juda kamligi) sababli.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l19-g1',
        num: '01',
        title: 'E-tijorat modellari va Xavfsizlik',
        topic: 'B2C, B2B, C2C va Banking',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir tushunchani to‘g‘ri taʼrif yoki misol bilan bog‘lang:',
          pairs: [
            { left: 'B2C (Business to Consumer)', right: 'Kompaniya yakuniy xaridorga tovar sotishi (masalan, internet-do‘kon)' },
            { left: 'C2C (Consumer to Consumer)', right: 'Foydalanuvchi o‘z eski velosipedini eʼlon sayti orqali boshqaga sotishi' },
            { left: 'B2B (Business to Business)', right: 'Zavod boshqa korxonalarga ulgurji xomashyo yetkazib berishi' },
            { left: '2FA autentifikatsiya', right: 'Bank o‘tkazmasini tasdiqlash uchun keladigan bir martalik SMS/kod' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Oddiy fuqaro o‘zining ishlatilgan noutbugini onlayn eʼlonlar taxtasi orqali boshqa fuqaroga sotishi qaysi E-tijorat modelidir?',
        options: ['B2B', 'B2C', 'C2C', 'G2C'],
        answer: 2,
        explanation: 'Ikkala tomon ham oddiy isteʼmolchi (Consumer) bo‘lgani uchun C2C (Consumer-to-Consumer) deyiladi.',
      },
      {
        prompt: 'Internet banking dan foydalanishda qaysi harakat XAVFSIZLIKNI BUZADI?',
        options: [
          'Sayt manzilida HTTPS qulfchasini tekshirish',
          'Bank xodimi sifatida qo‘ng‘iroq qilgan notanish shaxsga SMS tasdiq kodini aytish',
          '2FA (ikki bosqichli tasdiq) ni yoqish',
          'Ish tugagach ilovadan chiqish (Log out)',
        ],
        answer: 1,
        explanation: 'Bir martalik SMS kod maxfiy bo‘lib, uni hech kimga berib bo‘lmaydi.',
      },
      {
        prompt: 'Elektron tijoratning ANʼANAVIY do‘konga nisbatan kamchiligi qaysi?',
        options: [
          '24/7 ishlay olishi',
          'Tovarni xarid qilishdan oldin jismonan ushlab/kiyib ko‘rib bo‘lmasligi',
          'Narxlarni taqqoslash osonligi',
          'Do‘konga borishga vaqt ketmasligi',
        ],
        answer: 1,
        explanation: 'Masofadan xaridda tovar sifatini qo‘lda tekshirib ko‘rish imkoni bo‘lmaydi va yetkazib berish kutiladi.',
      },
      {
        prompt: 'B2B (Business-to-Business) modeliga misol qaysi?',
        options: [
          'O‘quvchi do‘kondan daftar sotib olishi',
          'Nonvoyxona un zavodidan onlayn 10 tonna un buyurtma berishi',
          'Do‘stlar bir-biriga telefon sotishi',
          'Maktabga kirish uchun chipta',
        ],
        answer: 1,
        explanation: 'Ikki yuridik korxona o‘rtasidagi savdo B2B hisoblanadi.',
      },
      {
        prompt: 'Internet banking ilovasi foydalanuvchiga qaysi imkoniyatni BERMAYDI?',
        options: [
          'Balansni ko‘rish va ko‘chirma olish',
          'Kommunal va mobil to‘lovlarni amalga oshirish',
          'Bankomatdan qog‘oz naqd pulni to‘g‘ridan-to‘g‘ri telefon ekrani orqali chiqarish',
          'Hisoblararo pul o‘tkazish',
        ],
        answer: 2,
        explanation: 'Naqd pul yechish uchun jismoniy bankomat yoki bank kassasi kerak.',
      },
    ],
    teacherNotes: {
      method: 'B2B, B2C, C2C misollarini O‘zbekiston raqamli platformalari asosida muhokama qilish.',
      timing: 'Kirish 5 daq, E-tijorat & Banking 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: 'Savdo modellarini farqlash va kiberxavfsizlik qoidalari.',
      homework: 'Onlayn do‘konning anʼanaviy do‘konga nisbatan 3 ta foyda va 3 ta xavfini jadvalga yozing.',
    },
  },
  {
    id: 'g11-l20',
    grade: 11,
    no: 20,
    part: '2-chorak',
    title: 'Elektron pul oʻtkazmalari. Zaxiralarni avtomatik boshqarish',
    kind: 'dars',
    hours: 1,
    tools: ['AT va jamiyat', 'EFTPOS', 'Stock Control / Barcode'],
    objectives: [
      'O‘quvchi **EFT (Electronic Funds Transfer)** va **EFTPOS (Savdo nuqtasida elektron pul o‘tkazmasi)** — bank kartasi/NFC orqali to‘lovning texnik bosqichlarini tushunadi.',
      'O‘quvchi **Zaxiralarni avtomatik boshqarish (Automatic Stock Control)**: Shtrix-kod/RFID skaneri → Markaziy baza → Minimal chegara (**Re-order Level**) → Avtomatik buyurtma zanjirini biladi.',
    ],
    intro:
      'Supermarket kassasida shtrix-kodni "pi-ip" deb skanerlab, kartani terminalga tekkizganingizda bir vaqtning o‘zida 2 ta mo‘jiza ro‘y beradi: bank hisobingizdan pul yechiladi (**EFTPOS**) va ombordagi sut soni 1 taga kamayadi (**Avtomatik zaxira boshqaruvi**)!',
    sections: [
      {
        heading: 'EFT va EFTPOS (Elektron pul o‘tkazmalari)',
        body: '**EFT (Electronic Funds Transfer)** — jismoniy qog‘oz pul ishlatmasdan, kompyuter tarmog‘i orqali bir bank hisobidan boshqasiga pul o‘tkazish (masalan, oylik maosh tushishi, karta-to-karta). **EFTPOS (EFT at Point of Sale)** — do‘kon kassasida terminalga karta yoki NFC telefon tekkizilganda: 1) Terminal shifrlangan so‘rovni bankka yuboradi; 2) PIN/limit va balans tekshiriladi (`Online Processing`); 3) Yetarli bo‘lsa summa xaridor hisobidan yechilib do‘kon hisobiga o‘tadi va chek chiqadi.',
        example: 'NFC kontaktsiz to‘lov (Humo/Uzcard/Visa) sekundning bir qismida EFTPOS tranzaksiyasini bajaradi.',
      },
      {
        heading: 'Zaxiralarni avtomatik boshqarish (Automatic Stock Control)',
        body: 'Katta supermarket va omborlarda **POS terminal** bevosita markaziy zaxira bazasi bilan bog‘langan:\n1) Kassada tovarning **Shtrix-kodi (Barcode)** yoki **RFID** tegi o‘qiladi.\n2) Bazadan narxi va nomi olinadi hamda ombor qoldig‘i **`-1`** ga kamaytiriladi.\n3) Agar qoldiq belgilangan minimal chegaradan (**Re-order Level**, masalan `20` dona) pastga tushsa, tizim **avtomatik ravishda** yetkazib beruvchiga yangi partiya uchun buyurtma yuboradi! Natija: peshtaxtalar hech qachon bo‘shab qolmaydi va ortiqcha tovar buzilib ketmaydi.',
        tip: 'RFID teglari shtrix-koddan farqli ravishda ko‘rinish chizig‘isiz bir zumda o‘nlab qutilarni uzoqdan o‘qiy oladi!',
      },
    ],
    keyTerms: [
      { term: 'EFT / EFTPOS', definition: 'Savdo nuqtasida bank kartasi yoki NFC orqali hisobdan hisobga elektron pul o‘tkazish.' },
      { term: 'POS Terminal', definition: 'Kassada shtrix-kod skaneri va to‘lov kartasi o‘quvchini birlashtiruvchi savdo nuqtasi.' },
      { term: 'Re-order Level', definition: 'Ombor qoldig‘i ushbu sondan pastga tushganda avtomatik yangi buyurtma yuboriladigan minimal chegara.' },
      { term: 'RFID Tag', definition: 'Radioto‘lqinlar orqali tovarlarni kontaktsiz va tezkor hisobga oluvchi mikrosxemali yorliq.' },
    ],
    steps: [
      '1. Kassada EFTPOS to‘lovi bosqichlarini tartiblang.',
      '2. Re-order Level tizimi nima uchun foydali ekanini tushuning.',
      '3. Quyidagi tartiblash o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Do‘konda 1 kunda o‘rtacha 15 ta non sotiladi, yetkazib beruvchidan yangi non kelishi esa 2 kun oladi. Minimal Re-order Level taxminan necha dona qo‘yilishi kerak?',
        expected: 'Kamida `15 × 2 = 30` dona (+ ehtiyot zaxira sifatida `35–40` dona) — shunda yangi non yetib kelguncha do‘kon nonsiz qolmaydi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g11-l20-g1',
        num: '01',
        title: 'Avtomatik zaxira boshqaruvi zanjiri',
        topic: 'POS va Re-order Level jarayoni',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Do‘konda tovar sotilganda zaxirani avtomatik boshqarish bosqichlarini ketma-ketlikda joylang:',
          items: [
            'Kassir tovarning shtrix-kodini POS skaner bilan o‘qiydi',
            'Tizim bazadan tovar narxini topib, chekda chiqaradi va ombor sonini 1 taga kamaytiradi',
            'Qolgan miqdor belgilangan Re-order Level chegarasi bilan solishtiriladi',
            'Qoldiq chegaradan past bo‘lsa, yetkazib beruvchiga avtomatik yangi buyurtma yuboriladi',
          ],
          hint: 'Skanerlash → Bazani kamaytirish → Re-order Level tekshiruvi → Avtomatik buyurtma.',
          explanation: 'POS skanerlashi zaxira bazasini darhol yangilaydi va chegara pasayganda yangi buyurtmani ishga tushiradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Do‘kon kassasida plastik karta bilan to‘lash texnologiyasi qanday qisqartma bilan ataladi?',
        options: ['HTML', 'EFTPOS', 'MP3', 'VLAN'],
        answer: 1,
        explanation: 'EFTPOS — Electronic Funds Transfer at Point of Sale.',
      },
      {
        prompt: 'Omborda tovar soni qaysi ko‘rsatkichdan pastga tushganda avtomatik tizim yangi partiyaga buyurtma jo‘natadi?',
        options: ['Aspect Ratio', 'Re-order Level (Qayta buyurtma darajasi)', 'Bitrate', 'Clipping Level'],
        answer: 1,
        explanation: 'Re-order Level — ombor qoldig‘i tugamasidan oldin signal beruvchi minimal chegara.',
      },
      {
        prompt: 'EFTPOS to‘lovi paytida bank serveri xaridor kartasida pul yetarli yoki yo‘qligini qaysi qayta ishlash rejimida tekshiradi?',
        options: ['Batch Processing (kechqurun)', 'Online Processing (darhol)', 'Manual Processing', 'Offline CSV'],
        answer: 1,
        explanation: 'Kassa oldida mijoz kutib turgani uchun bank balansi darhol (Online Processing) tekshiriladi.',
      },
      {
        prompt: 'Shtrix-kod (Barcode) o‘rniga ombor qutilarini bir nechta metrdan ko‘rinish chizig‘isiz birdaniga o‘qishda qaysi texnologiya ustun?',
        options: ['RFID (Radio Frequency Identification)', 'Floppy Disk', 'Fax', 'Dot Matrix'],
        answer: 0,
        explanation: 'RFID radioto‘lqinlar yordamida bir zumda o‘nlab yorliqlarni o‘qiy oladi.',
      },
      {
        prompt: 'Zaxiralarni avtomatik boshqarish tizimining biznesga eng katta foydasi nima?',
        options: [
          'Tovarlar tugab qolishini ham, omborda ortiqcha chirib qolishini ham oldini oladi',
          'Kassirlarni ko‘paytiradi',
          'Shtrix-kodni o‘chiradi',
          'Elektr sarfini 10 baravar oshiradi',
        ],
        answer: 0,
        explanation: 'Aniq avtomatik hisob-kitob omborni optimal balansda ushlaydi (Just-In-Time).',
      },
    ],
    teacherNotes: {
      method: 'POS cheki va Re-order Level formulasi (`O‘rtacha kunlik sotuv × Yetkazish kuni + Ehtiyot`) ni ko‘rsating.',
      timing: 'Kirish 5 daq, EFTPOS & Stock Control 20 daq, Order 10 daq, Quiz 10 daq.',
      assessment: 'Order zanjiri va Re-order Level masalasi.',
      homework: 'Kichik dorixona uchun avtomatik zaxira tizimi qanday ishlashini 4 bandda yozing.',
    },
  },
  {
    id: 'g11-l21',
    grade: 11,
    no: 21,
    part: '2-chorak',
    title: 'Ma’lumotlarni intellektual tahlillash',
    kind: 'dars',
    hours: 1,
    tools: ['Data Mining', 'Big Data', 'Analytics'],
    objectives: [
      'O‘quvchi **Maʼlumotlarni intellektual tahlillash (Data Mining)** tushunchasini — ulkan maʼlumotlar omboridan yashirin qonuniyatlar, bog‘liqliklar va tendensiyalarni topish jarayoni sifatida tushunadi.',
      'O‘quvchi Data Mining ning asosiy usullarini (**Assotsiatsiya qoidalari**, **Klasterlash**, **Klassifikatsiya**, **Anomaliyalarni aniqlash**) real hayotiy misollar bilan bog‘laydi.',
    ],
    intro:
      'Nima uchun internet-do‘konda telefon g‘ilofi ko‘rsangiz, darhol himoya oynasi tavsiya qilinadi? Yoki bank kartangizdan tunda boshqa davlatda xarid qilinsa, bank darhol bloklaydi? Bu **Data Mining (Maʼlumotlarni intellektual tahlillash)** ishidir!',
    sections: [
      {
        heading: 'Data Mining nima?',
        body: '**Data Mining** — millionlab qator xom maʼlumotlar (Data Warehouse) ichidan statistik va sunʼiy intellekt algoritmlari yordamida ilgari ko‘rinmagan **foydali qonuniyatlar (patterns)**, bashoratlar va bog‘liqliklarni kashf etish jarayoni. Oddiy qidiruv (`SELECT WHERE`) siz bilgan savolga javob bersa, Data Mining siz *hatto xayolingizga keltirmagan* yashirin bog‘liqlikni topadi!',
        example: 'Supermarket maʼlumotlarini Data Mining qilib, juma oqshomlari bolalar tagligini olgan xaridorlar ko‘pincha sharbat va non ham olishini aniqlash (Market Basket Analysis).',
      },
      {
        heading: 'Data Mining ning 4 asosiy usuli',
        body: '1) **Assotsiatsiya (Association)**: "A ni olgan odam 80% hollarda B ni ham oladi" (Netflix/YouTube tavsiyalari).\n2) **Klasterlash (Clustering)**: o‘xshash mijozlarni oldindan belgisiz tabiiy guruhlarga ajratish (masalan, xarid odatiga ko‘ra 4 ta segment).\n3) **Klassifikatsiya (Classification)**: yangi yozuvni aniq toifaga qo‘yish (`Spam` vs `Oddiy xat`, kredit berish `Xavfli` vs `Ishonchli`).\n4) **Anomaliyalarni aniqlash (Anomaly Detection)**: odatiy xulq-atvordan keskin farq qiluvchi g‘alati holatni tutish (karta firibgarligi!).',
        tip: 'Data Mining katta maʼlumotlarda yashirin biznes bilimi beradi, ammo shaxsiy maxfiylik (Privacy) chegaralariga rioya qilish talab etiladi.',
      },
    ],
    keyTerms: [
      { term: 'Data Mining', definition: 'Katta hajmdagi maʼlumotlar ichidan yashirin qonuniyat va bashoratlarni topish jarayoni.' },
      { term: 'Assotsiatsiya', definition: 'Bir voqea yoki xarid bilan birga tez-tez uchraydigan ikkinchi hodisani topish.' },
      { term: 'Klasterlash (Clustering)', definition: 'Obyektlarni o‘xshashlik belgilari asosida tabiiy guruhlarga (klasterlarga) ajratish.' },
      { term: 'Anomaliya aniqlash', definition: 'Odatiy statistik naqshdan keskin chetga chiqqan shubhali hodisani (firibgarlikni) topish.' },
    ],
    steps: [
      '1. Oddiy SQL qidiruv va Data Mining farqini tushuning.',
      '2. 4 ta asosiy usulni real biznes vaziyatlariga bog‘lang.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Mobil operator qaysi mijozlar keyingi oyda boshqa operatorga o‘tib ketishi ehtimoli yuqoriligini (Churn Prediction) oldindan aniqlamoqchi. Data Mining qanday yordam beradi?',
        expected: 'Oldin ketib qolgan mijozlar maʼlumotlarini tahlil qilib (qo‘ng‘iroq kamayishi, shikoyatlar ko‘payishi), xavf guruhidagi mijozlarni Klassifikatsiya qiladi va ularga maxsus chegirma yuboradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g11-l21-g1',
        num: '01',
        title: 'Data Mining usullarini mosla',
        topic: 'Intellektual tahlil metodlari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Hayotiy tizim misolini mos Data Mining usuliga bog‘lang:',
          pairs: [
            { left: 'Noutbuk olganga sumka va sichqoncha tavsiya qilish', right: 'Assotsiatsiya (Market Basket Analysis)' },
            { left: 'Kredit kartadan tunda begona davlatda yechilishni bloklash', right: 'Anomaliyalarni aniqlash' },
            { left: 'Xaridorlarni o‘xshash xarid odatiga ko‘ra 5 guruhga bo‘lish', right: 'Klasterlash (Clustering)' },
            { left: 'Kiruvchi xatni "Spam" yoki "Muhim" deb ajratish', right: 'Klassifikatsiya' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Data Mining (Maʼlumotlarni intellektual tahlillash) ning asosiy maqsadi nima?',
        options: [
          'Fayllarni ZIP qilib siqish',
          'Katta maʼlumotlar to‘plamidan yashirin qonuniyatlar, bog‘liqliklar va tendensiyalarni topish',
          'Kompyuter xotirasini tozalash',
          'Ekran rangini o‘zgartirish',
        ],
        answer: 1,
        explanation: 'Data Mining katta maʼlumotlar ichidan foydali bilim va bashoratlarni ajratib oladi.',
      },
      {
        prompt: 'Bank firibgarligini aniqlash tizimi mijozning odatiy xarajatlaridan keskin farq qiluvchi shubhali to‘lovni ushlashi qaysi usulga kiradi?',
        options: ['Anomaliyalarni aniqlash (Anomaly Detection)', 'Siqish', 'Formatlash', 'Normalizatsiya'],
        answer: 0,
        explanation: 'Odatiy xulqdan keskin chetlanish anomaliya sifatida aniqlanadi.',
      },
      {
        prompt: 'Internet-do‘konda "Ushbu mahsulot bilan birga ko‘pincha bularni ham olishadi" bloki qaysi Data Mining texnikasiga tayanadi?',
        options: ['Assotsiatsiya qoidalari', '3D modeling', 'Clipboard', 'DNS'],
        answer: 0,
        explanation: 'Assotsiatsiya birgalikda sodir bo‘luvchi xaridlar ehtimolini hisoblaydi.',
      },
      {
        prompt: 'Data Mining natijasida aniqlanadigan asosiy axloqiy/huquqiy xavf qaysi?',
        options: [
          'Klaviatura eskirishi',
          'Foydalanuvchilarning shaxsiy hayoti va maxfiyligi (Privacy) buzilishi',
          'Monitor o‘chishi',
          'Fayl formati o‘zgarishi',
        ],
        answer: 1,
        explanation: 'Insonlar haqidagi ko‘plab maʼlumotlarni birlashtirib tahlil qilish maxfiylik xavfini tug‘diradi.',
      },
      {
        prompt: 'Data Mining uchun sifatli natija olishda maʼlumotlar dastlab qanday bosqichdan o‘tishi kerak?',
        options: [
          'Tozalash (Data Cleaning — xato va dublikatlarni olib tashlash)',
          'Ovozga aylantirish',
          'Matnni yashirish',
          'Barchasini o‘chirish',
        ],
        answer: 0,
        explanation: 'Xom maʼlumotlardagi xato va bo‘shliqlar tozalanmasa, Data Mining noto‘g‘ri xulosa chiqaradi.',
      },
    ],
    teacherNotes: {
      method: 'Netflix/Uzum tavsiya tizimi va bank fraud-monitoring misollarini muhokama qilish.',
      timing: 'Kirish 5 daq, Data Mining 4 usuli 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: '4 ta usulni to‘g‘ri misollarga bog‘lash.',
      homework: 'Maktab elektron kundaligi maʼlumotlarida Data Mining qanday foydali qonuniyat topishi mumkinligini yozing.',
    },
  },
  {
    id: 'g11-l22',
    grade: 11,
    no: 22,
    part: '2-chorak',
    title: 'Ijtimoiy tarmoq va videokonferensiyalar',
    kind: 'dars',
    hours: 1,
    tools: ['Kommunikatsiya', 'Ijtimoiy tarmoqlar', 'Zoom / Meet'],
    objectives: [
      'O‘quvchi **Ijtimoiy tarmoqlar**ning muloqot, taʼlim va biznesdagi o‘rni hamda **axborot pufagi (Filter Bubble)**, kiberbulling va feyk xabarlar xavfini tahlil qiladi.',
      'O‘quvchi **Videokonferensiya** (Zoom, Google Meet, Microsoft Teams) tashkil etish uchun zarur apparat/dasturiy talablar va samarali o‘tkazish qoidalarini biladi.',
    ],
    intro:
      'Bugungi kunda jamoa aʼzolari turli qitʼalarda o‘tirib bir ekran atrofida uchrashuv o‘tkazmoqda (**Videokonferensiya**), milliardlab insonlar esa **Ijtimoiy tarmoqlar** orqali yangilik almashmoqda. Ularning ham kuchli tomoni, ham yashirin tuzoqlari bor!',
    sections: [
      {
        heading: 'Ijtimoiy tarmoqlar: imkoniyat va xavflar',
        body: '**Afzalliklari**: tezkor axborot va taʼlim kontenti tarqatish, biznes marketingi, hamfikrlar jamoalari. **Xavf va salbiy jihatlari**:\n• **Feyk xabarlar (Misinformation)** va faktlarni tekshirmasdan ulashish;\n• **Axborot pufagi (Echo Chamber / Filter Bubble)**: algoritmlar faqat siz yoqtirgan fikrlarni ko‘rsatib, boshqa nuqtai nazarlardan uzib qo‘yishi;\n• **Raqamli iz (Digital Footprint)**: tarmoqqa qo‘yilgan rasm yoki izoh umrbod saqlanib, kelajakdagi ishga kirishga taʼsir qilishi;\n• **Kiberbulling va maxfiylik**: begonalarga manzil va telefonni ochiq qo‘yish xavfi.',
        example: 'Profilingizni yopiq (Private) qilish va 2FA yoqish shaxsiy maʼlumotlaringizni himoyalaydi.',
      },
      {
        heading: 'Videokonferensiyalar va Texnik talablar',
        body: 'Sifatli videokonferensiya uchun: barqaror keng polosali internet (`5–15 Mbps`), veb-kamera, mikrofon (yoki garnitura — **aks-sadoni/Echo** ni yo‘qotish uchun!), yoritilgan xona va **Ekran ulashish (Screen Sharing)** hamda **Kuting xonasi (Waiting Room)** kabi xavfsizlik funksiyalari kerak. Afzalliklari: sayohat vaqti va chipta pulini tejash, tezkor qaror qabul qilish, nogironligi bor shaxslar uchun teng qulaylik.',
        tip: 'Videokonferensiyada gapirmayotganingizda mikrofonni o‘chirish (**Mute**) butun guruh uchun tovush sifatini yaxshilaydi!',
      },
    ],
    keyTerms: [
      { term: 'Filter Bubble', definition: 'Tavsiya algoritmlari foydalanuvchiga faqat o‘z qarashlariga mos kontentni chiqarib turishi.' },
      { term: 'Raqamli iz', definition: 'Foydalanuvchi internetda qoldiradigan barcha post, izoh, rasm va faollik izlari majmuasi.' },
      { term: 'Videokonferensiya', definition: 'Real vaqtda audio, video va ekran almashish orqali masofaviy guruhli uchrashuv.' },
      { term: 'Waiting Room', definition: 'Videokonferensiyaga begona shaxslar ruxsatsiz kirishini oldini oluvchi kutish zali.' },
    ],
    steps: [
      '1. Ijtimoiy tarmoqdagi 4 ta asosiy xavfni sanang.',
      '2. Videokonferensiya uchun zarur apparat va etiket qoidalarini ayting.',
      '3. Quyidagi To‘g‘ri/Noto‘g‘ri o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Nima uchun videokonferensiya vaqtida karnay (Speaker) o‘rniga quloqchinli garnitura (Headset) ishlatish tavsiya etiladi?',
        expected: 'Karnaydan chiqqan boshqalarning ovozi yana mikrofoningizga qaytib tushib, barcha ishtirokchilarda yoqimsiz aks-sado (Echo) hosil qilmasligi uchun.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l22-g1',
        num: '01',
        title: 'Ijtimoiy tarmoq va Konferensiya etikasi',
        topic: 'Xavfsizlik va muloqot qoidalari',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Ijtimoiy tarmoq va videokonferensiya haqidagi fikrlarni baholang:',
          statements: [
            { text: 'O‘chirilgan deb o‘ylangan post yoki izoh ham skrinshot va kesh orqali raqamli iz sifatida qolishi mumkin.', isTrue: true, explanation: 'Internetga joylangan maʼlumotni butunlay o‘chirish qiyin — Raqamli iz saqlanib qoladi.' },
            { text: 'Videokonferensiyaga begonalar kirmasligi uchun parol va Waiting Room funksiyalarini o‘chirib qo‘yish kerak.', isTrue: false, explanation: 'Aksincha, parol va Waiting Room ("Zoom-bombing" kabi begona kirishlarni) oldini oladi.' },
            { text: 'Filter Bubble algoritmi foydalanuvchini bir tomonlama axborot doirasida ushlab qolishi mumkin.', isTrue: true, explanation: 'Algoritm faqat avval yoqtirilgan mavzularni qayta-qayta ko‘rsataveradi.' },
            { text: 'Videokonferensiya xalqaro kompaniyalarning xizmat safari va aviachipta xarajatlarini katta miqdorda tejaydi.', isTrue: true, explanation: 'Masofaviy uchrashuv transport va mehmonxona xarajatlarini bartaraf etadi.' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Algoritmlar foydalanuvchiga faqat uning avvalgi qiziqishlariga mos fikrlarni ko‘rsatib, muqobil qarashlardan ajratib qo‘yishi nima deyiladi?',
        options: ['Filter Bubble (Axborot pufagi)', 'Streaming', 'Cloud Backup', 'Normalization'],
        answer: 0,
        explanation: 'Filter Bubble bir xil turdagi kontentni kuchaytirib ko‘rsatish hodisasidir.',
      },
      {
        prompt: 'Videokonferensiyada begona buzg‘unchilarning tasodifiy kirib kelishini to‘xtatish uchun qaysi himoya vositasi yoqiladi?',
        options: ['Waiting Room va uchrashuv paroli', 'Mikrofonni maksimal ochish', 'Avto-yozuv', 'Ekran fonini o‘chirish'],
        answer: 0,
        explanation: 'Waiting Room tashkilotchiga har bir kiruvchini tasdiqlash imkonini beradi.',
      },
      {
        prompt: 'Siz ijtimoiy tarmoqda qoldirgan barcha surat, layk va izohlar majmuasi kelajakda ish beruvchilar ham ko‘rishi mumkin bo‘lgan nima deb ataladi?',
        options: ['Raqamli iz (Digital Footprint)', 'Cache Memory', 'Audio Track', 'Aspect Ratio'],
        answer: 0,
        explanation: 'Raqamli iz insonning internetdagi umumiy faoliyati tarixidir.',
      },
      {
        prompt: 'Videokonferensiyada kompyuterning tashqi karnayi (Speaker) ishlatilganda tez-tez uchraydigan texnik muammo qaysi?',
        options: ['Aks-sado (Audio Echo / Feedback)', 'Rasm oq-qora bo‘lishi', 'Klaviatura qotishi', 'CSV xatosi'],
        answer: 0,
        explanation: 'Karnay ovozi mikrofonga qaytib tushganda aks-sado paydo bo‘ladi; yechim — quloqchin ishlatish.',
      },
      {
        prompt: 'Videokonferensiyalarning asosiy iqtisodiy va ekologik foydasi nimada?',
        options: [
          'Sayohat xarajatlari va transportdan chiqadigan uglerod gazlarini kamaytiradi',
          'Telefon narxini oshiradi',
          'Internet tezligini sekinlashtiradi',
          'Yuzma-yuz muloqotni qonunan taqiqlaydi',
        ],
        answer: 0,
        explanation: 'Safarlar kamayishi vaqt, pul va ekologik xarajatlarni tejaydi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda "Raqamli iz" ning kelajakdagi universitet/ish suhbatlariga taʼsirini real misol bilan muhokama qiling.',
      timing: 'Kirish 5 daq, Ijtimoiy tarmoq & Konferensiya 20 daq, TrueFalse 10 daq, Quiz 10 daq.',
      assessment: 'Filter Bubble va konferensiya xavfsizligi savollari.',
      homework: 'Xavfsiz ijtimoiy tarmoq profili uchun 5 banddan iborat chek-list tuzing.',
    },
  },
  {
    id: 'g11-l23',
    grade: 11,
    no: 23,
    part: '2-chorak',
    title: 'Masofadan ishlash. Sport va tibbiyotda texnologiyalar',
    kind: 'dars',
    hours: 1,
    tools: ['AT va jamiyat', 'Teleworking', 'Tibbiyot / Sport'],
    objectives: [
      'O‘quvchi **Masofadan ishlash (Teleworking / Remote Work)** ning xodim va ish beruvchi uchun afzalliklari hamda kamchiliklarini (izolyatsiya, ish va uy chegarasining yo‘qolishi) tahlil qiladi.',
      'O‘quvchi **Sportda** (VAR, Hawk-Eye, foto-finish, sensorlar) va **Tibbiyotda** (Elektron tibbiy karta, 3D skaner/MRT, telemeditsina, 3D chop etilgan protezlar) raqamli texnologiyalarning rolini biladi.',
    ],
    intro:
      'Bugun dasturchi Toshkentda o‘tirib Yevropa kompaniyasida ishlaydi (**Teleworking**), futbol hakami **VAR** bilan golni millimetrda tekshiradi, jarroh esa **3D MRT** modeli va **telemeditsina** orqali bemorni qutqaradi!',
    sections: [
      {
        heading: 'Masofadan ishlash (Teleworking)',
        body: '**Teleworking** — internet, VPN, bulutli hujjatlar va videokonferensiya orqali ofisga bormasdan uydan yoki koworkingdan ishlash.\n• **Afzalliklari**: yo‘l va tirbandlik vaqti tejaladi, moslashuvchan jadval, kompaniya ofis ijarasini tejaydi va butun dunyodan iqtidorli mutaxassis yollay oladi.\n• **Kamchiliklari**: ijtimoiy yakkalik (jamoadan uzilish), uydagi chalg‘ituvchilar, maʼlumotlar xavfsizligi nazorati qiyinligi, "ish va dam olish vaqti" aralashib ketishi.',
        example: 'IT, dizayn, tarjima va qo‘llab-quvvatlash xizmatlari masofadan ishlashga juda mos; jarrohlik yoki qurilishda esa imkonsiz.',
      },
      {
        heading: 'Sport va Tibbiyotda AT',
        body: '• **Sportda texnologiya**: **VAR (Video Assistant Referee)** va **Goal-line / Hawk-Eye** (tennis va futbolda to‘p chiziqni kesib o‘tganini millimetr aniqligida aniqlash); yugurishda foto-finish kameralari; futbolchilar formasidagi **GPS va yurak urishi sensorlari** charchoqni kuzatish uchun.\n• **Tibbiyotda texnologiya**: **Elektron tibbiy karta (EHR)** (istalgan shifoxonada tahlillar tarixi), **MRT / KT (3D tomografiya)** ichki aʼzolarni kesmasdan ko‘rish, **Telemeditsina** (qishloq bemoriga shahar professori maslahati), **3D bioprinting/protezlar** va avtomatik dori dozalash.',
        tip: 'Sportda texnologiya inson hakamning xatolarini kamaytiradi, ammo baʼzan o‘yin tempini sekinlashtirishi mumkin.',
      },
    ],
    keyTerms: [
      { term: 'Teleworking', definition: 'AKT vositalari yordamida ofisdan tashqarida (uydan) masofaviy mehnat qilish.' },
      { term: 'Hawk-Eye / VAR', definition: 'Sportda yuqori tezlikli kameralar orqali to‘p trayektoriyasi va hakam qarorlarini tekshiruvchi tizim.' },
      { term: 'Telemeditsina', definition: 'Video aloqa va sensorlar orqali masofadan tibbiy maslahat va monitoring ko‘rsatish.' },
      { term: 'EHR (Elektron tibbiy karta)', definition: 'Bemorning barcha kasallik, tashxis va retsept tarixi saqlanadigan markaziy raqamli baza.' },
    ],
    steps: [
      '1. Teleworking ning xodim va kompaniya uchun ijobiy/salbiy tomonlarini solishtiring.',
      '2. Sport va tibbiyotdagi aniq texnologiyalarni bog‘lang.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Qishloq shifoxonasidagi bemorning rentgen va qon tahlillarini poytaxtdagi yetakchi kardiolog darhol ko‘rib tashxis qo‘yishi qaysi ikki texnologiyaga tayanadi?',
        expected: '**Elektron tibbiy karta (EHR)** + **Telemeditsina** (tezkor internet va videomuloqot orqali).',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l23-g1',
        num: '01',
        title: 'Sport, Tibbiyot va Masofaviy ish',
        topic: 'Sohalarda raqamli texnologiyalar',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir texnologiyani qo‘llanish sohasi va vazifasiga bog‘lang:',
          pairs: [
            { left: 'Hawk-Eye / Goal-Line', right: 'Sportda to‘p chiziqdan o‘tganini millimetrda aniqlash' },
            { left: 'Teleworking', right: 'VPN va bulutli xizmatlar orqali uydan ishlash' },
            { left: 'Telemeditsina', right: 'Uzoq hududdagi bemorga masofadan shifokor konsiliumi' },
            { left: '3D KT / MRT skaneri', right: 'Inson tanasi ichki aʼzolarini operatsiyasiz 3D ko‘rish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Masofadan ishlash (Teleworking) ning ish beruvchi kompaniya uchun eng katta moliyaviy foydasi nimada?',
        options: [
          'Katta ofis ijarasi va kommunal xarajatlarni keskin kamaytirish',
          'Xodimlar maoshini 2 barobar ko‘tarish majburiyati',
          'Internetni o‘chirish',
          'Qog‘oz sarfini oshirish',
        ],
        answer: 0,
        explanation: 'Ofis maydoni va ish joyi jihozlash xarajatlari tejaladi hamda butun mamlakatdan kadrlar yollanadi.',
      },
      {
        prompt: 'Futbol va tennisda to‘p maydon chizig‘ini kesib o‘tganini yuqori aniqlikdagi kameralar yordamida ko‘rsatuvchi tizim qaysi?',
        options: ['EFTPOS', 'Hawk-Eye / Goal-Line Technology', 'Data Mining', 'CAD/CAM'],
        answer: 1,
        explanation: 'Hawk-Eye ko‘p burchakli kameralar orqali to‘pning 3D trayektoriyasini hisoblaydi.',
      },
      {
        prompt: 'Masofadan ishlash (Teleworking) ning xodim uchun asosiy psixologik kamchiligi qaysi?',
        options: [
          'Yo‘lga vaqt ketmasligi',
          'Jamoadan ajralib qolish (ijtimoiy izolyatsiya) va ish-dam olish chegarasi yo‘qolishi',
          'Qulay kiyimda ishlash',
          'Oilaga yaqin bo‘lish',
        ],
        answer: 1,
        explanation: 'Doimiy yolg‘iz ishlash muloqot yetishmasligi va charchoqqa olib kelishi mumkin.',
      },
      {
        prompt: 'Bemorning barcha tahlillari va retseptlari yagona raqamli tizimda saqlanishi qanday ataladi?',
        options: ['Elektron tibbiy karta (EHR)', 'Filter Bubble', 'Quishing', 'Batch Payroll'],
        answer: 0,
        explanation: 'EHR (Electronic Health Record) shifokorlarga bemor tarixini bir zumda ko‘rish imkonini beradi.',
      },
      {
        prompt: 'Qaysi kasb egasi to‘liq Teleworking (uydan onlayn) rejimida ishlay OLMAYDI?',
        options: ['Veb-dasturchi', 'Tarjimon', 'Tish shifokori (Stomatolog)', 'Grafik dizayner'],
        answer: 2,
        explanation: 'Stomatolog bemor bilan bevosita jismoniy muolaja o‘tkazishi shart.',
      },
    ],
    teacherNotes: {
      method: 'Teleworking jadvalini (Xodim uchun foyda/xavf vs Kompaniyalar uchun foyda/xavf) tuzish.',
      timing: 'Kirish 5 daq, Teleworking & Sport/Tibbiyot 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: 'Teleworking va sport/tibbiyot misollarini tahlil qilish.',
      homework: 'Tibbiyotda 3D bosma va sunʼiy intellektning 1 tadan qo‘llanilishini yozib keling.',
    },
  },
  {
    id: 'g11-l24',
    grade: 11,
    no: 24,
    part: '2-chorak',
    title: 'Ishlab chiqarish va ta`limda texnologiyalar',
    kind: 'dars',
    hours: 1,
    tools: ['AT va jamiyat', 'CAD/CAM', 'LMS / E-Learning'],
    objectives: [
      'O‘quvchi zamonaviy **Ishlab chiqarish**da robototexnika, avtomatlashtirilgan yig‘uv liniyalari va sifat nazorati sensorlarining taʼsirini (samaradorlik, aniqlik, ish o‘rinlari o‘zgarishi) tushunadi.',
      'O‘quvchi **Taʼlim**da LMS platformalar (Kundalik/Moodle), interaktiv simulyatorlar, adaptiv testlar va MOOC onlayn kurslarning afzalliklari hamda muammolarini biladi.',
    ],
    intro:
      'Zavodda konveyerda robotlar bir daqiqada o‘nlab detallarni mikron aniqligida yig‘adi, maktabda esa siz interaktiv darslik va **LMS** orqali bilimingizni tekshirmoqdasiz! Raqamli inqilob ikkala sohani ham tubdan o‘zgartirdi.',
    sections: [
      {
        heading: 'Ishlab chiqarishda texnologiyalar',
        body: 'Zamonaviy zavodlarda **CAD (kompyuterda loyihalash)** va **CAM / CNC dastgohlar** hamda **sanoat robotlari** qo‘llaniladi:\n• **Afzalliklari**: 24/7 tanaffussiz ishlash, yuqori takroriy aniqlik (nuqson/brak kam), zaharli bo‘yash yoki og‘ir payvandlashda ishchilar salomatligini asrash, uzoq muddatda mahsulot tannarxini tushirish.\n• **Kamchiliklari**: dastlabki investitsiya (robotlar sotib olish) juda qimmat; past malakali ish o‘rinlari qisqaradi (lekin robotlarga xizmat ko‘rsatuvchi muhandislarga talab oshadi!); elektr yoki dastur to‘xtasa butun liniya to‘xtaydi.',
        example: 'Mashina kuzovini bo‘yash roboti zaharli bo‘yoq bug‘ida insondan farqli ravishda zararlanmaydi va har bir qatlamni bir tekis sepadi.',
      },
      {
        heading: 'Taʼlimda texnologiyalar (EdTech / LMS)',
        body: '**LMS (Learning Management System)** — dars materiallari, video, topshiriqlar va baholarni boshqaruvchi tizim (Moodle, Google Classroom, eMaktab). Afzalliklari: o‘z tezligingizda o‘qish (Self-paced), tezkor avtomatik tekshiruv (Quiz), virtual kimyo/fizika laboratoriyalari (xavfsiz tajriba!), nogironligi bor o‘quvchilar uchun ekran o‘quvchilari (Screen Reader). Muammolari: **Raqamli tengsizlik** (hamma joyda internet/kompyuter yo‘qligi) va ko‘chirish (plagiat) nazorati.',
        tip: 'Texnologiya o‘qituvchini almashtirmaydi — u o‘qituvchiga takroriy tekshiruvdan qutulib, ijodiy muloqotga ko‘proq vaqt ajratishga yordam beradi!',
      },
    ],
    keyTerms: [
      { term: 'LMS (Taʼlim boshqaruv tizimi)', definition: 'O‘quv materiallari, testlar va baholarni onlayn boshqaruvchi taʼlim platformasi.' },
      { term: 'MOOC', definition: 'Minglab tinglovchilar uchun ochiq ommaviy onlayn kurslar (Coursera, Khan Academy).' },
      { term: 'Avtomatlashtirilgan liniya', definition: 'Sensorlar va robotlar yordamida inson aralashuvisiz uzluksiz ishlab chiqarish konveyeri.' },
      { term: 'Virtual laboratoriya', definition: 'Xavfli yoki qimmat kimyo/fizika tajribalarini ekranda simulyatsiya qiluvchi dastur.' },
    ],
    steps: [
      '1. Ishlab chiqarishni avtomatlashtirishning 3 afzallik va 2 muammosini sanang.',
      '2. Taʼlimda LMS va Virtual laboratoriyalar foydasini tushuning.',
      '3. Quyidagi bo‘shliq to‘ldirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Maktabda kimyo laboratoriyasi uchun qimmat va portlovchi moddalar yetishmasa, texnologiya bu muammoni qanday hal qiladi?',
        expected: '**Virtual laboratoriya simulyatorlari** (masalan, PhET yoki 3D VR laboratoriya) orqali barcha reaksiyalarni xavfsiz, bepul va ko‘p marta takrorlab ko‘rish mumkin.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l24-g1',
        num: '01',
        title: 'Ishlab chiqarish va Taʼlim texnologiyalari',
        topic: 'Zavodlar va EdTech',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Ishlab chiqarish va taʼlimda AT qo‘llanilishiga oid bo‘sh joylarni to‘ldiring:',
          template: 'Darslar, testlar va baholarni onlayn boshqaruvchi taʼlim platformasi {{0}} deyiladi. Zavodda robotlar {{1}} sharoitda inson o‘rniga xavfsiz va bir xil aniqlikda ishlaydi. Qimmat tajribalarni kompyuterda xavfsiz o‘tkazish uchun {{2}} qo‘llanadi.',
          blanks: [
            { options: ['LMS', 'POS', 'VPN'], answer: 'LMS' },
            { options: ['zaharli va takroriy', 'ijodiy suhbat', 'psixologik'], answer: 'zaharli va takroriy' },
            { options: ['Virtual laboratoriya', 'BitTorrent', 'Clipboard'], answer: 'Virtual laboratoriya' },
          ],
          hint: 'Taʼlim platformasi — LMS; zavod roboti — zaharli/takroriy ishlar; xavfsiz tajriba — Virtual laboratoriya.',
          explanation: 'LMS taʼlim jarayonini tartibga soladi, robotlar xavfli zavod ishlarini bajaradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Dars materiallarini joylash, uy vazifalarini yig‘ish va test baholarini yuritish uchun mo‘ljallangan tizim qanday ataladi?',
        options: ['EFTPOS', 'LMS (Learning Management System)', 'CAD', 'DNS'],
        answer: 1,
        explanation: 'LMS (masalan, Moodle, Google Classroom) taʼlim jarayonini raqamli boshqaradi.',
      },
      {
        prompt: 'Zavodda robotlashtirilgan avtomat liniyani joriy etishning DASTLABKI qiyinchiligi nimada?',
        options: [
          'Robotlar ishga chiqmay qolishi',
          'Asbob-uskunalarni sotib olish va dasturlash uchun juda katta boshlang‘ich sarmoya kerakligi',
          'Mahsulot sifati pasayishi',
          'Ishchilar taʼtilga chiqishi',
        ],
        answer: 1,
        explanation: 'Avtomatlashtirish uzoq muddatda arzonlashadi, lekin boshlang‘ich narxi (CAPEX) juda baland.',
      },
      {
        prompt: 'Avtomatlashtirish natijasida zavodlarda qaysi turdagi ish o‘rinlariga talab ORTADI?',
        options: [
          'Bir xil qutini qo‘lda tashuvchilarga',
          'Robotlarni dasturlovchi, sozlovchi va taʼmirlovchi malakali muhandislarga',
          'Qog‘oz chek yozuvchilarga',
          'Chiroq yoquvchilarga',
        ],
        answer: 1,
        explanation: 'Oddiy qo‘l mehnati kamayib, yuqori malakali texnik mutaxassislarga talab oshadi.',
      },
      {
        prompt: 'O‘quvchiga o‘ziga qulay tezlikda va vaqtda o‘qish imkonini beruvchi onlayn kurslar modeli qaysi?',
        options: ['Self-paced E-Learning / MOOC', 'Batch Processing', 'Real-time Airbag', 'Telegraph'],
        answer: 0,
        explanation: 'Self-paced taʼlimda har bir o‘quvchi mavzuni o‘z tezligida o‘zlashtiradi.',
      },
      {
        prompt: 'Elektron taʼlimni joriy etishda chekka hududlarda uchraydigan asosiy to‘siq nima?',
        options: [
          'Raqamli tengsizlik (internet va kompyuter yetishmasligi)',
          'Darsliklar ko‘pligi',
          'Qalam yetishmasligi',
          'Sinf xonasi kattaligi',
        ],
        answer: 0,
        explanation: 'Texnika va yuqori tezlikdagi internetga kirish tengsizligi onlayn taʼlimni cheklaydi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda "Avtomatlashtirish ishsizlik keltiradimi yoki yangi kasblar yaratadimi?" mavzusida 5 daqiqalik debat o‘tkazing.',
      timing: 'Kirish 5 daq, Ishlab chiqarish & Taʼlim 20 daq, FillBlank 10 daq, Quiz 10 daq.',
      assessment: 'LMS va ishlab chiqarish avtomatlashtiruvi savollari.',
      homework: 'Kelajakda robotlar bilan birga paydo bo‘ladigan 3 ta yangi kasb nomini yozib keling.',
    },
  },
  {
    id: 'g11-l25',
    grade: 11,
    no: 25,
    part: '2-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['AT va jamiyat', 'E-tijorat', 'Data Mining'],
    objectives: [
      'O‘quvchi 2-chorakning birinchi yarmi: E-tijorat (B2C/B2B/C2C), Internet Banking, EFTPOS, Avtomatik zaxira (Re-order Level), Data Mining, Ijtimoiy tarmoqlar, Teleworking, Sport/Tibbiyot va Taʼlimda AT mavzulari bo‘yicha bilimlarini sinaydi.',
    ],
    intro:
      '2-chorak oralig‘idagi nazorat ishi! Raqamli iqtisodiyot, Data Mining, Teleworking va ijtimoiy sohalarda texnologiyalar bo‘yicha bilimlaringizni tekshiring.',
    sections: [
      {
        heading: 'Nazorat mavzulari eslatmasi',
        body: '• **E-iqtisod**: `B2C`/`B2B`/`C2C`, `EFTPOS`, `Re-order Level`, `RFID`.\n• **Tahlil va Muloqot**: `Data Mining` (Assotsiatsiya, Klasterlash, Anomaliya), `Filter Bubble`, `Raqamli iz`, `Waiting Room`.\n• **Sohalar**: `Teleworking`, `Hawk-Eye/VAR`, `EHR / Telemeditsina`, `LMS / MOOC`.',
        example: 'Krossvord va 5 ta nazorat savolini bajaring.',
      },
    ],
    keyTerms: [
      { term: 'EFTPOS', definition: 'Savdo nuqtasida bank kartasi orqali to‘lov o‘tkazmasi.' },
      { term: 'Data Mining', definition: 'Katta maʼlumotlardan yashirin qonuniyatlarni kashf etish.' },
      { term: 'Teleworking', definition: 'Internet orqali masofadan turib ishlash.' },
      { term: 'LMS', definition: 'Taʼlim jarayonini onlayn boshqarish platformasi.' },
    ],
    steps: [
      '1. Krossvordda 2-chorak terminlarini toping.',
      '2. 5 ta nazorat testini mustaqil ishlang.',
    ],
    practice: [
      {
        task: 'Supermarketda `Re-order Level` va `EFTPOS` qanday qilib o‘zaro bog‘liq holda ishlaydi?',
        expected: 'Xaridor kassada tovarni olib `EFTPOS` bilan to‘laganda POS skaner bazadan tovar sonini kamaytiradi va `Re-order Level` dan pastga tushsa yangi partiya buyurtma qilinadi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l25-g1',
        num: '01',
        title: 'AT va Jamiyat krossvordi',
        topic: '19–24-darslar terminlari',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: 'Raqamli iqtisodiyot va jamiyat atamalarini bosh harfda kiriting:',
          clues: [
            { id: '1', clue: 'Onlayn taʼlimni boshqarish tizimi qisqartmasi (3 harf)', answer: 'LMS' },
            { id: '2', clue: 'Kompaniyadan yakuniy xaridorga savdo modeli (3 harf)', answer: 'B2C' },
            { id: '3', clue: 'Tovarlarni radioto‘lqin bilan uzoqdan o‘qiydigan yorliq (4 harf)', answer: 'RFID' },
            { id: '4', clue: 'Elektron tibbiy karta qisqartmasi (3 harf)', answer: 'EHR' },
          ],
          hint: 'LMS, B2C, RFID, EHR qisqartmalarini kiriting.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Katta maʼlumotlar omboridan "Noutbuk olgan mijoz 75% hollarda sichqoncha ham oladi" degan bog‘liqlikni topish qaysi jarayon?',
        options: ['Batch Processing', 'Data Mining (Assotsiatsiya)', 'Audio Ducking', 'Normalization'],
        answer: 1,
        explanation: 'Data Mining yashirin xarid bog‘liqliklarini topadi.',
      },
      {
        prompt: 'Zaxiralarni avtomatik boshqarishda ombordagi mahsulot soni minimal chegaradan tushganda yangi buyurtma berilish nuqtasi nima?',
        options: ['Re-order Level', 'Clipping Point', 'Filter Bubble', 'Bitrate'],
        answer: 0,
        explanation: 'Re-order Level qoldiq tugamasidan buyurtma berish chegarasidir.',
      },
      {
        prompt: 'Fuqaro shaxsiy avtomobilini onlayn eʼlon sayti orqali boshqa fuqaroga sotishi qaysi E-tijorat turi?',
        options: ['B2B', 'B2C', 'C2C', 'G2B'],
        answer: 2,
        explanation: 'Isteʼmolchidan isteʼmolchiga — C2C.',
      },
      {
        prompt: 'Masofadan ishlash (Teleworking) ga eng mos kelmaydigan kasb qaysi?',
        options: ['Dasturchi', 'Jarroh shifokor', 'Buxgalter', 'Kontent menejer'],
        answer: 1,
        explanation: 'Jarroh operatsiya xonasida jismonan ishtirok etishi shart.',
      },
      {
        prompt: 'Ijtimoiy tarmoq algoritmi sizga faqat bir xil yo‘nalishdagi xabarlarni ko‘rsatib, boshqa fikrlardan to‘sib qo‘yishi nima?',
        options: ['Filter Bubble', 'Quishing', 'EFTPOS', 'Hawk-Eye'],
        answer: 0,
        explanation: 'Filter Bubble axborot doirasini toraytirib qo‘yadi.',
      },
    ],
    teacherNotes: {
      method: 'Nazorat natijalaridan keyin 2-chorakning ikkinchi yarmi (Tarmoq arxitekturasi) ga kirish tayyorgarligi.',
      timing: 'Kirish 5 daq, Krossvord 15 daq, Nazorat testi 25 daq.',
      assessment: 'Test va krossvord bahosi.',
      homework: 'Keyingi darsga "Kompyuter tarmoqlari komponentlari" (Router, Switch, NIC, Modem) ni takrorlab keling.',
    },
  },
];
