import type { Lesson } from './types';

export const GRADE_9_Q1B: Lesson[] = [
  {
    id: 'g9-l10',
    grade: 9,
    no: 10,
    part: '1-chorak',
    title: 'Xotira hajmiga bog‘liq masalalarni yechish',
    kind: 'dars',
    hours: 1,
    tools: ['Kalkulyator', 'Axborot o‘lchov birliklari'],
    objectives: [
      'O‘quvchi axborot o‘lchov birliklari (bit, bayt, KB, MB, GB, TB) orasida aniq konvertatsiya amallarini bajaradi.',
      'O‘quvchi matn, rasm va arxiv fayllarining diskda qancha joy egallashini hamda tashuvchiga nechta fayl sig‘ishini hisoblaydi.',
    ],
    intro:
      'USB fleshkaga 500 ta surat sig‘adimi? 100 sahifali kitob necha kilobayt bo‘ladi? Xotira hajmiga oid masalalarni yechish orqali fayllar o‘lchamini oldindan aniq hisoblashni o‘rganamiz.',
    sections: [
      {
        heading: 'O‘lchov birliklari shkalasi (2 ning darajalari)',
        body: 'Eng kichik birlik — 1 bit (0 yoki 1). 1 bayt = 8 bit (odatda ASCII da 1 ta belgi = 1 bayt, Unicode UTF-16 da esa 2 bayt). Ikkilik tizimda har bir keyingi bosqich 1024 (= 2^10) ga ko‘payadi: 1 KB = 1024 bayt; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB. Soddalashtirilgan SI o‘lchamda ishlab chiqaruvchilar baʼzan 1000 dan ham foydalanadilar, shuning uchun 1 TB disk kompyuterda ~931 GiB ko‘rinadi.',
        example: '4 MB nechta KB bo‘ladi? 4 × 1024 = 4096 KB. Yoki 2048 MB necha GB? 2048 ÷ 1024 = 2 GB.',
        tip: 'Katta birlikdan kichik birlikka o‘tganda KO‘PAYTIRING (×1024 yoki ×8), kichikdan kattaga o‘tganda BO‘LING (÷1024 yoki ÷8).',
      },
      {
        heading: 'Matn va rasm hajmini hisoblash formulalari',
        body: 'Matn hajmi: V = Sahifalar × Satrlar × Belgilar × (1 ta belgi hajmi). Rastrli rasm hajmi: V = Eni (piksel) × Bo‘yi (piksel) × Rang chuqurligi (bit yoki bayt). Masalan, 24-bitli (True Color) har bir piksel 3 bayt (24 ÷ 8) joy egallaydi. So‘ng umumiy baytni 1024 ga bo‘lib KB yoki MB topiladi.',
        example: '1024 × 512 pikselli 24-bit (3 bayt) siqilmagan rasm = 1024 × 512 × 3 bayt = 1572864 bayt = 1536 KB = 1.5 MB.',
      },
    ],
    keyTerms: [
      { term: 'Bit va Bayt', definition: '1 bayt = 8 bit; bit ikkilik raqam (0/1), bayt esa bitta ASCII belgi hajmidir.' },
      { term: '1024 koeffitsienti', definition: 'Kompyuter xotirasida 2^10 = 1024 qadam bilan KB, MB, GB, TB birliklari almashadi.' },
      { term: 'Rang chuqurligi', definition: 'Bitta piksel rangini kodlash uchun ajratilgan bitlar soni (masalan, 24 bit = 3 bayt).' },
      { term: 'Sig‘im masalasi', definition: 'Berilgan xotira hajmiga ko‘rsatilgan o‘lchamdagi fayllardan nechtasi sig‘ishini bo‘lib aniqlash.' },
    ],
    steps: [
      '1. Barcha ma’lumotlarni bitta umumiy o‘lchov birligiga (masalan, bayt yoki MB ga) keltiring.',
      '2. Matn bo‘lsa: belgilar sonini belgi kodlash hajmiga (1 yoki 2 bayt) ko‘paytiring.',
      '3. Rasm bo‘lsa: Eni × Bo‘yi × (bit ÷ 8) formulasini qo‘llang.',
      '4. Nechta fayl sig‘ishini topishda qoldiqsiz butun sonni (Math.floor) oling.',
    ],
    practice: [
      {
        task: '8 GB hajmli bo‘sh USB fleshkaga har biri 4 MB bo‘lgan musiqalardan ko‘pi bilan nechta sig‘adi?',
        expected: '8 GB = 8 × 1024 = 8192 MB. 8192 ÷ 4 = 2048 ta musiqa.',
        difficulty: 'oson',
      },
      {
        task: '100 betlik kitobning har bir betida 32 ta satr, har satrda 64 ta belgi bor (1 belgi = 1 bayt). Kitob hajmini KB da toping.',
        expected: '100 × 32 × 64 = 204800 bayt. 204800 ÷ 1024 = 200 KB.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l10-g1',
        num: '01',
        title: 'Xotira sig‘imi kalkulyatori',
        topic: 'Xotira hajmini hisoblash',
        difficulty: 'o‘rta',
        engine: 'calc',
        config: {
          prompt: '4 GB hajmli flesh-xotiraga har biri 512 KB bo‘lgan fotosuratlardan nechta sig‘adi? (1 GB = 1024 MB, 1 MB = 1024 KB deb oling)',
          unit: 'ta surat',
          correctAnswer: 8192,
          tolerance: 0,
          steps: [
            '4 GB ni MB ga o‘tkazing: 4 × 1024 = 4096 MB',
            '4096 MB ni KB ga o‘tkazing: 4096 × 1024 = 4 194 304 KB',
            'Umumiy KB ni bitta surat hajmiga bo‘ling: 4 194 304 ÷ 512 = 8192',
          ],
          hint: 'Avval 1 MB ga 2 ta 512 KB surat sig‘ishini bilsangiz, 4096 MB × 2 = 8192 chiqadi!',
        },
      },
    ],
    quiz: [
      {
        prompt: '1 Megabayt (MB) nechta Kilobaytga (KB) teng?',
        options: ['100', '512', '1024', '8192'],
        answer: 2,
        explanation: 'Ikkilik sanoq tizimida 1 MB = 2^10 KB = 1024 KB.',
      },
      {
        prompt: '2 bayt necha bitdan iborat?',
        options: ['8 bit', '16 bit', '32 bit', '1024 bit'],
        answer: 1,
        explanation: '1 bayt = 8 bit bo‘lgani uchun 2 × 8 = 16 bit.',
      },
      {
        prompt: '512 × 256 pikselli 16-bitli (2 bayt/piksel) rasm necha Kilobayt joy egallaydi?',
        options: ['128 KB', '256 KB', '512 KB', '1024 KB'],
        answer: 1,
        explanation: '(512 × 256 × 2 bayt) ÷ 1024 = 256 KB.',
      },
      {
        prompt: '2048 MB xotira necha GB ga teng?',
        options: ['0.5 GB', '2 GB', '4 GB', '20 GB'],
        answer: 1,
        explanation: '2048 ÷ 1024 = 2 GB.',
      },
      {
        prompt: 'ASCII kodlashda "INFORMATIKA" so‘zi (11 ta harf) necha bit hajmga ega?',
        options: ['11 bit', '88 bit', '44 bit', '1024 bit'],
        answer: 1,
        explanation: 'Har bir ASCII belgi 1 bayt = 8 bit; 11 × 8 = 88 bit.',
      },
    ],
    teacherNotes: {
      method: 'Doskada 1024 = 2^10 qoidasini ikkilik darajalar orqali qisqartirib hisoblash usulini ko‘rsatish.',
      timing: 'Birliklar shkalasi 10 daq, Matn va rasm masalalari 20 daq, Calc o‘yini va mustaqil ish 15 daq.',
      assessment: 'Calc o‘yinidagi masalani xatosiz yechish va test.',
      homework: '640 × 480 o‘lchamli 24-bitli rasmning hajmini KB da hisoblab keling.',
    },
  },
  {
    id: 'g9-l11',
    grade: 9,
    no: 11,
    part: '1-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Bilim sinovi', 'Takrorlash'],
    objectives: [
      'O‘quvchi 1–10-darslar (Hardware/Software, OT, Kompyuter turlari, Kiritish/Chiqarish, Xotira va hajm masalalari) bo‘yicha olgan bilimlarini tekshiradi.',
      'O‘quvchi amaliy va hisob-kitob masalalarini mustaqil hal qiladi.',
    ],
    intro:
      'Ushbu nazorat darsida 9-sinfning birinchi bobida o‘rganilgan apparat, dasturiy taʼminot, operatsion tizim, kiritish-chiqarish qurilmalari hamda xotira hajmiga oid bilimlaringizni sinovdan o‘tkazasiz.',
    sections: [
      {
        heading: 'Takrorlash uchun tayanch nuqtalar',
        body: 'Nazorat savollari 4 yo‘nalishni qamrab oladi: 1) CPU, RAM, ROM, Motherboard vazifalari va GUI/CLI farqlari; 2) OMR, OCR, MICR, RFID va Shtrix-kod qo‘llanilishi; 3) Lazer, Inkjet, Matritsali printer, Plotter va Aktuatorlar; 4) Bit → Bayt → KB → MB → GB → TB konvertatsiyasi.',
        example: 'Agar testda "1024 KB nechta MB?" deyilsa — 1 MB; "3 bayt necha bit?" deyilsa — 24 bit.',
        tip: 'Har bir savolda kalit so‘zga qarang: "magnit siyoh" = MICR, "test doirachasi" = OMR, "mexanik harakat" = Aktuator.',
      },
    ],
    keyTerms: [
      { term: 'Hardware vs Software', definition: 'Fizik qurilmalar majmui hamda ularni boshqaruvchi dasturlar tizimi.' },
      { term: 'Direct Data Entry', definition: 'Inson klaviaturada termasdan avtomatik kiritish (OMR, RFID, Barcode).' },
      { term: 'Solid State', definition: 'Harakatlanuvchi qismsiz tezkor yarimo‘tkazgich xotira (SSD, Flash).' },
      { term: 'Konvertatsiya', definition: 'Axborot hajmini bir birlikdan boshqa birlikka (×1024 yoki ÷1024) o‘tkazish.' },
    ],
    steps: [
      '1. Asosiy atamalarni 5 daqiqada ko‘zdan kechiring.',
      '2. Krossvord va interaktiv topshiriqni mustaqil bajaring.',
      '3. Nazorat testidagi 5 ta asosiy savolga shoshilmasdan javob bering.',
    ],
    practice: [
      {
        task: '2 TB li tashqi HDD ga har biri 2 GB bo‘lgan video darslardan nechta sig‘ishini hisoblang.',
        expected: '2 TB = 2048 GB. 2048 ÷ 2 = 1024 ta video dars.',
        difficulty: 'oson',
      },
      {
        task: 'Bankda chekni o‘qish (A), katta bino loyihasini chop etish (B) va o‘lchangan haroratga ko‘ra derazani ochish (C) uchun 3 qurilma yozing.',
        expected: 'A — MICR, B — Plotter, C — Aktuator.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l11-g1',
        num: '01',
        title: '1-bob yakuniy krossvord',
        topic: 'Kompyuter arxitekturasi va xotira',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '1–10-darslar bo‘yicha asosiy atamalarni lotin bosh harflarida kiriting.',
          clues: [
            { id: 'c1', clue: 'Kompyuter yoqilganda BIOS saqlanadigan doimiy xotira (3 harf)', answer: 'ROM' },
            { id: 'c2', clue: 'Test varaqasidagi bo‘yalgan belgilarni o‘quvchi tizim (3 harf)', answer: 'OMR' },
            { id: 'c3', clue: 'Katta formatdagi chizma va banner chop etuvchi qurilma (7 harf)', answer: 'PLOTTER' },
            { id: 'c4', clue: 'Harakatlanuvchi qismsiz tezkor doimiy disk (3 harf)', answer: 'SSD' },
          ],
          hint: 'Qisqartmalar: ROM, OMR, SSD; chizuvchi qurilma nomi: PLOTTER.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Kompyuter yoqilganda operatsion tizim doimiy diskdan qaysi xotiraga yuklanadi?',
        options: ['RAM', 'OMR', 'Plotter', 'MICR'],
        answer: 0,
        explanation: 'Tezkor ishlashi uchun OT ishga tushayotganda RAM xotirasiga ko‘chiriladi.',
      },
      {
        prompt: 'Qaysi interfeysda amallar oynalar, ikonkalar va sichqoncha orqali bajariladi?',
        options: ['GUI', 'CLI', 'BIOS', 'OCR'],
        answer: 0,
        explanation: 'GUI (WIMP) grafik boshqaruv interfeysidir.',
      },
      {
        prompt: 'Radioto‘lqinlar orqali kontaktsiz identifikatsiya qiluvchi texnologiya qaysi?',
        options: ['RFID', 'Inkjet', 'CRT', 'ALU'],
        answer: 0,
        explanation: 'RFID teglari radioto‘lqinlar yordamida masofadan o‘qiladi.',
      },
      {
        prompt: '4096 KB xotira hajmi necha Megabaytga teng?',
        options: ['2 MB', '4 MB', '8 MB', '16 MB'],
        answer: 1,
        explanation: '4096 ÷ 1024 = 4 MB.',
      },
      {
        prompt: 'Skanerdan o‘tgan rasm ichidagi matnni tahrirlanadigan ko‘rinishga keltiruvchi dastur qaysi?',
        options: ['OCR', 'VPN', 'HTML', 'MIDI'],
        answer: 0,
        explanation: 'OCR optik belgi tanish dasturidir.',
      },
    ],
    teacherNotes: {
      method: 'Variantlar bo‘yicha yozma nazorat hamda platformadagi krossvord/test kombinatsiyasi.',
      timing: 'Kirish 5 daq, Nazorat ishi 35 daq, Natijalar tahlili 5 daq.',
      assessment: '5 ballik mezon: 5 ta savoldan 4–5 tasi to‘g‘ri va hisob masalasi yechilgan bo‘lsa aʼlo.',
      homework: 'Xato qilingan mavzularni 1–10-darslardan qayta o‘qib chiqish.',
    },
  },
  {
    id: 'g9-l12',
    grade: 9,
    no: 12,
    part: '1-chorak',
    title: 'Kompyuter tarmoqlari qurilmalari',
    kind: 'dars',
    hours: 1,
    tools: ['Router', 'Switch', 'Hub', 'Modem', 'NIC'],
    objectives: [
      'O‘quvchi tarmoq qurilmalari — NIC (Tarmoq kartasi), Hub, Switch, Router, Modem va Bridge vazifalarini farqlaydi.',
      'O‘quvchi Hub va Switch orasidagi trafikka oid muhim texnik farqni (broadcast vs MAC-manzil) tushuntira oladi.',
    ],
    intro:
      'Kompyuterlarni o‘zaro bog‘lash uchun kabel yoki Wi-Fi ning o‘zi yetarli emas: signalni to‘g‘ri manzilga yetkazuvchi Router, Switch va tarmoq kartalari (NIC) zarur.',
    sections: [
      {
        heading: 'NIC, Hub va Switch',
        body: 'NIC (Network Interface Card) — kompyuterga tarmoqqa ulanish imkonini beruvchi karta bo‘lib, har birida zavoddan berilgan noyob MAC-manzil bor. Hub kelgan ma’lumot paketini tarmoqdagi BARCHA portlarga tarqatadi (bu tarmoqni sekinlashtiradi va xavfsiz emas). Switch esa aqlliroq: u qurilmalarning MAC-manzilini eslab qoladi va paketni FAQAT kerakli manzilga yo‘naltiradi.',
        example: 'Maktab sinfidagi 20 ta kompyuterni bitta lokal tarmoqqa (LAN) birlashtirish uchun odatda 24-portli Switch qo‘yiladi.',
        tip: 'MAC-manzil — qurilmaning o‘zgarmas "pasport raqami" (masalan, 00:1A:2B:3C:4D:5E), IP-manzil esa vaqtinchalik "uy manzili" dir.',
      },
      {
        heading: 'Router, Modem va Bridge',
        body: 'Router (Marshrutizator) — turli tarmoqlarni (masalan, uy LAN tarmog‘ini Internet WAN ga) bog‘laydi va IP-manzil asosida ma’lumot paketlari uchun eng qisqa yo‘lni tanlaydi. Modem (Modulator-Demodulator) telefon yoki kabel liniyasi signallarini raqamli ko‘rinishga va aksincha o‘giradi. Bridge esa ikkita o‘xshash LAN segmentini bitta tarmoqqa birlashtiradi.',
        example: 'Uyingizdagi Wi-Fi router ko‘pincha ichida ham Switch, ham Wireless Access Point, ham Router vazifasini bajaradi.',
      },
    ],
    keyTerms: [
      { term: 'NIC (Tarmoq kartasi)', definition: 'Har bir qurilmada noyob MAC-manzilga ega bo‘lgan tarmoqqa ulanish adapteri.' },
      { term: 'Switch (Kommutator)', definition: 'MAC-manzillar jadvali orqali ma’lumotni faqat kerakli kompyuterga yuboruvchi qurilma.' },
      { term: 'Router (Marshrutizator)', definition: 'Tarmoqlarni o‘zaro bog‘lab, IP-manzillar bo‘yicha paketlarni yo‘naltiruvchi qurilma.' },
      { term: 'Modem', definition: 'Raqamli va analog signallarni o‘zaro aylantiruvchi aloqa qurilmasi.' },
    ],
    steps: [
      '1. Kompyuterlardan boshlab Switch gacha bog‘lanish sxemasini chizing.',
      '2. Switch ni Internetga chiqarish uchun Router va Modem qo‘shing.',
      '3. Hub va Switch o‘rtasidagi xavfsizlik va tezlik farqini belgilang.',
    ],
    practice: [
      {
        task: 'Nima uchun zamonaviy maktab tarmoqlarida Hub o‘rniga Switch ishlatiladi? 2 sabab ayting.',
        expected: '1) Switch paketni faqat kerakli portga yuborgani uchun tarmoqda tiqilinch kamayadi; 2) Boshqa kompyuterlar begona trafikni tutib ololmaydi.',
        difficulty: 'oson',
      },
      {
        task: 'Uydagi 2 ta noutbuk, 1 ta tarmoq printeri va Internet ulanishi uchun kerakli qurilmalar zanjirini tasvirlang.',
        expected: 'Noutbuklar va printer → Switch (yoki Wi-Fi AP) → Router → Modem → ISP Internet.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l12-g1',
        num: '01',
        title: 'Ofis lokal tarmog‘ini yig‘ish',
        topic: 'Tarmoq topologiyasi va qurilmalari',
        difficulty: 'O‘rta',
        engine: 'netbuilder',
        config: {
          prompt: 'Ikkita kompyuterni (PC1, PC2) markaziy Switch ga ulang, Switch ni esa Internetga chiqish uchun Router ga bog‘lang.',
          devices: [
            { id: 'pc1', label: '1-Kompyuter', type: 'pc' },
            { id: 'pc2', label: '2-Kompyuter', type: 'pc' },
            { id: 'sw', label: 'Switch', type: 'switch' },
            { id: 'rt', label: 'Router (ISP)', type: 'router' },
          ],
          requiredLinks: [
            ['pc1', 'sw'],
            ['pc2', 'sw'],
            ['sw', 'rt'],
          ],
          hint: 'Kompyuterlar avval Switch ga, Switch esa tashqi tarmoqqa chiqish uchun Router ga ulanadi.',
          explanation: 'Yulduzsimon lokal tarmoqda barcha ishchi stansiyalar Switch orqali ulanib, Router orqali tashqi tarmoqqa chiqadi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Switch ma’lumot paketini kerakli kompyuterga qaysi identifikator asosida yuboradi?',
        options: ['MAC-manzil', 'Foydalanuvchi ismi', 'Fayl kengaytmasi', 'BIOS versiyasi'],
        answer: 0,
        explanation: 'Switch tarmoq kartalarining fizik MAC-manzilini o‘rganib, paketni faqat o‘sha portga yo‘naltiradi.',
      },
      {
        prompt: 'Turli tarmoqlarni (LAN va Internet) bog‘lab, IP-paketlar yo‘nalishini aniqlovchi qurilma qaysi?',
        options: ['Router', 'Hub', 'Skaner', 'UPS'],
        answer: 0,
        explanation: 'Router IP-manzillar jadvali bo‘yicha tarmoqlararo marshrutlashni bajaradi.',
      },
      {
        prompt: 'Hub qurilmasining Switch ga nisbatan asosiy kamchiligi nimada?',
        options: ['Paketni tarmoqdagi barcha portlarga yuborib, to‘qnashuv va sekinlik tug‘diradi', 'Elektr iste’mol qilmaydi', 'Faqat 1 ta kompyuter ulaydi', 'Wi-Fi siz ishlamaydi'],
        answer: 0,
        explanation: 'Hub aqlli emas — u barcha signallarni hamma portlarga nusxalab tarqatadi.',
      },
      {
        prompt: 'MAC-manzil qaysi qurilma ichida saqlanadi?',
        options: ['NIC (Tarmoq interfeys kartasi)', 'Printer kartriji', 'Monitor matritsasi', 'PSU'],
        answer: 0,
        explanation: 'Har bir NIC ishlab chiqarish jarayonida takrorlanmas MAC-manzil bilan chiqariladi.',
      },
      {
        prompt: 'Modem so‘zi qanday jarayonlarni birlashtiradi?',
        options: ['Modulyatsiya va Demodulyatsiya', 'Monitor va Demontaj', 'Xotira va Fayl', 'Router va Kabel'],
        answer: 0,
        explanation: 'Modem raqamli signalni analogga (modulyatsiya) va analog signalni raqamliga (demodulyatsiya) aylantiradi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda 4 o‘quvchiga rol (PC1, PC2, Switch, Hub) berib, "xat yuborish" o‘yini bilan farqni ko‘rsatish.',
      timing: 'NIC/Hub/Switch 15 daq, Router/Modem 15 daq, NetBuilder o‘yini va test 15 daq.',
      assessment: 'NetBuilder da yulduzsimon tarmoqni to‘g‘ri ulash.',
      homework: 'Uydagi Wi-Fi routeringiz orqasidagi LAN va WAN portlar farqini ko‘rib yozib keling.',
    },
  },
  {
    id: 'g9-l13',
    grade: 9,
    no: 13,
    part: '1-chorak',
    title: 'Brauzerdan foydalanish. Kompyuter tarmoqlari dasturiy jihati.',
    kind: 'dars',
    hours: 1,
    tools: ['Veb-brauzer', 'HTTP/HTTPS', 'DNS', 'URL', 'Wi-Fi va Bluetooth'],
    objectives: [
      'O‘quvchi veb-brauzer, URL tuzilmasi, DNS server, HTTP va HTTPS protokollari qanday hamkorlikda ishlashini biladi.',
      'O‘quvchi tarmoq dasturiy jihatlari — IP, Wi-Fi va Bluetooth aloqa turlarini hamda xavfsizlik belgilarini farqlaydi.',
    ],
    intro:
      'Brauzer satriga sayt manzilini yozganingizda bir soniya ichida DNS, TCP/IP va HTTPS protokollari ishga tushib, dunyoning narigi chetidagi serverdan sahifani olib keladi.',
    sections: [
      {
        heading: 'URL, DNS va HTTP/HTTPS qanday ishlaydi?',
        body: 'URL (Uniform Resource Locator) — veb-resursning to‘liq manzili (masalan: `https://kitob.uz/informatika`). DNS (Domain Name System) odamga qulay `kitob.uz` nomini kompyuter tushunadigan IP-manzilga (masalan, `185.74.5.12`) aylantiruvchi telefon kitobiga o‘xshaydi. HTTP — gipermatn uzatish protokoli; HTTPS esa shifrlangan (SSL/TLS) xavfsiz versiyasi bo‘lib, brauzerda qulf belgisi bilan ko‘rinadi.',
        example: 'Bank saytiga kirganda manzil `http://` emas, albatta `https://` bilan boshlanishi shart, aks holda parolingiz ochiq ketadi.',
        tip: 'Brauzer xususiyatlari: Xatcho‘plar (Bookmarks), Tarix (History), Kesh (Cache — sahifani tezroq yuklash uchun vaqtincha saqlash) va Cookie fayllar.',
      },
      {
        heading: 'Wi-Fi, Bluetooth va Intranet / Internet',
        body: 'Bluetooth — qisqa masofada (~10 m) kam quvvat bilan quloqchin, sichqoncha yoki telefon orasida ma’lumot almashish uchun. Wi-Fi — kengroq hududda (~50–100 m) Router/Access Point orqali tezkor Internet va LAN ulanishini beradi. Internet — global tarmoq, Intranet esa faqat bitta tashkilot ichidagi yopiq veb-tizimdir.',
        example: 'Maktab ichidagi dars jadvali faqat maktab Wi-Fi da ochilsa — bu Intranet; hamma joydan ochiladigan veb-sayt esa Internetdir.',
      },
    ],
    keyTerms: [
      { term: 'DNS (Domen nomlari tizimi)', definition: 'Matnli sayt nomini raqamli IP-manzilga aylantiruvchi tizim.' },
      { term: 'HTTPS', definition: 'Brauzer va server orasidagi trafikni shifrlab uzatuvchi xavfsiz veb-protokol.' },
      { term: 'URL', definition: 'Protokol, domen nomi va sahifa yo‘lidan tashkil topgan to‘liq veb-manzil.' },
      { term: 'Wi-Fi va Bluetooth', definition: 'Wi-Fi — keng tarmoq va yuqori tezlik; Bluetooth — qisqa masofali shaxsiy ulanish (PAN).' },
    ],
    steps: [
      '1. Brauzer manzil satridagi `https://example.uz/dars/1` qismlarini ajrating (protokol, domen, yo‘l).',
      '2. Brauzerning asosiy boshqaruv elementlarini (Orqaga, Yangilash, Xatcho‘p, Qulf belgisi) ko‘zdan kechiring.',
      '3. Wi-Fi va Bluetooth texnologiyalarini masofa, tezlik va quvvat sarfi bo‘yicha solishtiring.',
    ],
    practice: [
      {
        task: '`https://edu.uz/2025/reja.html` manzilining 3 asosiy qismini (protokol, domen, fayl yo‘li) ajratib yozing.',
        expected: 'Protokol: https, Domen: edu.uz, Yo‘l: /2025/reja.html.',
        difficulty: 'oson',
      },
      {
        task: 'Nima uchun simsiz quloqchin ulashda Wi-Fi emas, Bluetooth ishlatiladi?',
        expected: 'Bluetooth qisqa masofada juda kam batareya sarflaydi va router talab qilmay to‘g‘ridan-to‘g‘ri bog‘lanadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l13-g1',
        num: '01',
        title: 'Brauzer oynasi elementini top',
        topic: 'Brauzer interfeysi va xavfsizlik',
        difficulty: 'Oson',
        engine: 'hotspot',
        config: {
          prompt: 'Sayt bilan ulanish shifrlangan va xavfsiz (HTTPS) ekanligini ko‘rsatuvchi belgini toping!',
          appTitle: 'Veb-brauzer',
          layout: 'browser',
          targetZoneId: 'https',
          zones: [
            { id: 'back', label: 'Orqaga / Oldinga', icon: '←', group: 'Navigatsiya', hintText: 'Oldingi sahifaga qaytish' },
            { id: 'reload', label: 'Yangilash (Refresh)', icon: '↻', group: 'Navigatsiya', hintText: 'Sahifani qayta yuklash' },
            { id: 'https', label: 'Qulf (HTTPS)', icon: '🔒', group: 'Manzil satri', hintText: 'SSL/TLS shifrlash holati' },
            { id: 'url', label: 'URL manzil satri', icon: '🌐', group: 'Manzil satri', hintText: 'Veb-manzil kiritiladigan joy' },
            { id: 'bookmark', label: 'Xatcho‘p (Bookmark)', icon: '★', group: 'Asboblar', hintText: 'Sahifani saqlab qo‘yish' },
          ],
          explanation: 'Manzil satri boshidagi qulf belgisi aloqa HTTPS orqali shifrlanganini bildiradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Domen nomini (masalan, ziyonet.uz) kompyuter tushunadigan IP-manzilga nima aylantirib beradi?',
        options: ['DNS serveri', 'Printer drayveri', 'USB Switch', 'HDMI'],
        answer: 0,
        explanation: 'DNS inson yodlab qoladigan nomlarni IP-manzillarga tarjima qiladi.',
      },
      {
        prompt: 'HTTP va HTTPS o‘rtasidagi asosiy farq nimada?',
        options: ['HTTPS ma’lumotlarni shifrlab uzatadi', 'HTTP faqat rasmlarni ochadi', 'HTTPS internetsiz ishlaydi', 'Farqi yo‘q'],
        answer: 0,
        explanation: 'HTTPS (Secure) SSL/TLS sertifikati yordamida ma’lumotlarni yo‘lda o‘qilib ketishidan himoyalaydi.',
      },
      {
        prompt: 'Brauzerda ilgari ko‘rilgan sahifa rasmlarini tezroq ochish uchun saqlab turuvchi vaqtinchalik xotira nima?',
        options: ['Kesh (Cache)', 'ROM', 'Plotter', 'Router'],
        answer: 0,
        explanation: 'Brauzer keshi takroriy kirishda sahifa elementlarini tez yuklashga yordam beradi.',
      },
      {
        prompt: 'Wi-Fi va Bluetooth taqqoslanganda qaysi fikr to‘g‘ri?',
        options: ['Wi-Fi uzoqroq masofa va katta tezlik beradi, Bluetooth esa kam energiyali qisqa aloqa uchun', 'Bluetooth 10 km ga yetadi', 'Wi-Fi faqat sim orqali ishlaydi', 'Bluetooth video ko‘rish uchun asosiy Internetdir'],
        answer: 0,
        explanation: 'Wi-Fi tarmoqqa chiqishda, Bluetooth esa aksessuarlarni ulashda tejamkor.',
      },
      {
        prompt: 'Foydalanuvchi parolini kiritayotganda sayt manzilida `http://` ko‘rinsa, bu nimadan darak beradi?',
        options: ['Aloqa shifrlanmagan — shaxsiy ma’lumot kiritish xavfli', 'Sayt juda tez ishlaydi', 'Xavfsiz bank sahifasi', 'Kompyuter virusdan toza'],
        answer: 0,
        explanation: 'Shifrlanmagan HTTP orqali yuborilgan parolni tarmoqda tutib olish mumkin.',
      },
    ],
    teacherNotes: {
      method: 'Brauzer dasturini ochib, real URL qismlari va HTTPS sertifikat oynasini ko‘rsatish.',
      timing: 'URL/DNS/HTTPS 20 daq, Wi-Fi/Bluetooth 15 daq, Hotspot va quiz 10 daq.',
      assessment: 'Hotspot da HTTPS belgisini va URL tarkibini to‘g‘ri izohlash.',
      homework: 'Kundalik kiradigan 3 ta saytingizning HTTPS holatini va IP-manzilini (`ping` orqali) tekshiring.',
    },
  },
  {
    id: 'g9-l14',
    grade: 9,
    no: 14,
    part: '1-chorak',
    title: 'Tarmoq muammolari va kommunikatsiya',
    kind: 'dars',
    hours: 1,
    tools: ['Parol siyosati', '2FA', 'Elektron pochta', 'Faks/Videoaloqa'],
    objectives: [
      'O‘quvchi tarmoq xavfsizligi muammolari (ruxsatsiz kirish, zaif parollar, tarmoq uzilishi) va ularni bartaraf etish usullarini biladi.',
      'O‘quvchi elektron kommunikatsiya vositalari (elektron pochta, video/audio konferensiya, faks) dan vaziyatga qarab foydalanishni baholaydi.',
    ],
    intro:
      'Tarmoqqa ulanish katta imkoniyat ochgani kabi xavflarni ham olib keladi: zaif parollar, ochiq Wi-Fi orqali ma’lumot sizib chiqishi yoki noto‘g‘ri aloqa kanalini tanlash jiddiy muammolarga sabab bo‘ladi.',
    sections: [
      {
        heading: 'Tarmoq xavfsizligi va autentifikatsiya usullari',
        body: 'Hisoblarni himoyalash uchun kuchli parol (kamida 10–12 belgi: katta-kichik harf, raqam, belgi; tug‘ilgan kun yoki `123456` emas) hamda Ikki bosqichli autentifikatsiya (2FA — parol + SMS/ilova kodi) qo‘llanadi. Umumiy ochiq Wi-Fi tarmoqlarida bank ilovalariga kirmaslik va ma’lumotlarni shifrlash zarur. Shuningdek, foydalanuvchi ID va huquqlarni boshqarish begona shaxsning fayllarga kirishini cheklaydi.',
        example: 'Agar tajovuzkor parolingizni bilib qolsa ham, 2FA yoqilgan bo‘lsa telefoningizdagi bir martalik kodsiz kira olmaydi.',
        tip: 'Har bir muhim sayt (pochta, kundalik, bank) uchun alohida noyob parol ishlating!',
      },
      {
        heading: 'Elektron kommunikatsiya usullari va Faks vs E-mail',
        body: 'Elektron pochta rasmiy xabar, fayl yuborish va hujjat izini qoldirish uchun qulay. Videokonferensiya (Zoom, Google Meet) jonli yuzma-yuz muhokama va ekran ulashish imkonini beradi (ammo yuqori tezlikli Internet talab qiladi). Jismoniy faks eski bo‘lsa-da, qog‘oz nusxani to‘g‘ridan-to‘g‘ri telefon liniyasi orqali yuboradi; elektron faks esa PDF ni internet orqali yuboradi.',
        example: 'Shartnomaga imzo qo‘yilgan asl qog‘ozni tezkor yuborishda ilgari faks ishlatilgan, bugun esa skaner + HTTPS/imzolangan PDF ishlatiladi.',
      },
    ],
    keyTerms: [
      { term: '2FA (Ikki bosqichli tasdiqlash)', definition: 'Paroldan tashqari ikkinchi tasdiq (SMS kod, biometriya, token) talab qiluvchi himoya.' },
      { term: 'Ruxsatsiz kirish', definition: 'Huquqi bo‘lmagan shaxsning tarmoq yoki hisobdagi ma’lumotlarni ko‘rishi/o‘zgartirishi.' },
      { term: 'Videokonferensiya', definition: 'Turli joylardagi ishtirokchilarning real vaqtda ovoz va tasvir orqali muloqoti.' },
      { term: 'Elektron faks', definition: 'Qog‘oz mashinasiz, internet va kompyuter orqali faks hujjat yuborish xizmati.' },
    ],
    steps: [
      '1. Parol kuchliligini tekshirish qoidalarini (uzunlik, xilma-xillik, noyoblik) belgilang.',
      '2. 2FA qanday ishlashini blok-sxemada tasvirlang.',
      '3. Turli xabar turlari (rasmiy hisobot, shoshilinch jamoa muhokamasi, fayl yuborish) uchun mos aloqa vositasini tanlang.',
    ],
    practice: [
      {
        task: 'Quyidagi parollardan qaysi biri eng kuchli ekanini asoslang: `salom1999`, `qwerty123`, `T0shk3nt!Bah0r#9`.',
        expected: '`T0shk3nt!Bah0r#9` — uzun (16 belgi), katta/kichik harf, raqam va maxsus belgilar mavjud.',
        difficulty: 'oson',
      },
      {
        task: 'Xalqaro jamoada loyihani muhokama qilishda elektron pochta va videokonferensiyadan qay birini qaysi bosqichda qo‘llash ma’qul?',
        expected: 'Jonli fikr almashish va ekran ko‘rsatishda videokonferensiya; yakuniy qaror va fayllarni rasmiy qayd etishda elektron pochta.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l14-g1',
        num: '01',
        title: 'Tarmoq xavfsizligi bo‘yicha to‘g‘ri qaror',
        topic: 'Tarmoq muammolari',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Qahvaxona (kafe) dagi parolsiz ochiq Wi-Fi da o‘tirgan foydalanuvchi uchun eng xavfsiz yo‘l qaysi?',
          scenario: 'Siz kafedagi bepul, parolsiz Wi-Fi ga ulandingiz va shaxsiy bank ilovangizdan pul o‘tkazishingiz kerak.',
          options: [
            {
              text: 'Ochiq Wi-Fi dan uzilib, shaxsiy mobil internet (4G/5G) va 2FA orqali to‘lov qilish',
              isCorrect: true,
              feedback: 'To‘g‘ri! Parolsiz umumiy Wi-Fi da trafik ushlanib qolishi (sniffing) mumkin; mobil tarmoq ancha xavfsiz.',
            },
            {
              text: 'Oddiy parolni kiritib, brauzerda "Parolni saqlash" ni bosish',
              isCorrect: false,
              feedback: 'Bu ochiq tarmoqda ham, qurilmada ham katta xavf tug‘diradi.',
            },
            {
              text: 'Parol o‘rniga tug‘ilgan yilingizni qo‘yish',
              isCorrect: false,
              feedback: 'Tug‘ilgan yil eng tez buziladigan zaif paroldir.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ikki bosqichli autentifikatsiya (2FA) nima uchun kerak?',
        options: ['Parol o‘g‘irlansa ham hisobga begonalar kirishini to‘sish uchun', 'Internet tezligini oshirish uchun', 'Fayl hajmini kichraytirish uchun', 'Spam xatlarni ko‘paytirish uchun'],
        answer: 0,
        explanation: '2FA ikkinchi mustaqil tasdiqni (kod, kalit, biometriya) talab qiladi.',
      },
      {
        prompt: 'Qaysi parol eng xavfsiz hisoblanadi?',
        options: ['12345678', 'Samandar2010', 'M9#kL!v2$pQz', 'qwertyuiop'],
        answer: 2,
        explanation: 'Murakkab, tasodifiy va har xil belgilar aralashgan parolni taxmin qilish qiyin.',
      },
      {
        prompt: 'Real vaqtda bir necha kishining ovoz, video va ekranni ulashib muhokama o‘tkazish vositasi nima?',
        options: ['Videokonferensiya', 'An’anaviy faks', 'OMR skaneri', 'Bluetooth quloqchin'],
        answer: 0,
        explanation: 'Videokonferensiya audio, video va ekran ulashish orqali jonli hamkorlikni beradi.',
      },
      {
        prompt: 'Parolsiz umumiy Wi-Fi tarmog‘ida qaysi amalni bajarish XAVFLI?',
        options: ['Ochiq yangilik saytini o‘qish', 'Bank paroli va karta raqamlarini kiritish', 'Ob-havoni ko‘rish', 'Xaritadan ko‘cha izlash'],
        answer: 1,
        explanation: 'Ochiq tarmoqda maxfiy moliyaviy ma’lumotlarni yuborish xavfsizlikka tahdid soladi.',
      },
      {
        prompt: 'Elektron pochtaning an’anaviy qog‘oz faksdan asosiy ustunligi nimada?',
        options: ['Fayl sifatini yo‘qotmasdan istalgan formatdagi hujjatni bir vaqtda ko‘p odamga tezkor yuboradi', 'Elektr energiyasi talab qilmaydi', 'Faqat bitta raqamga ishlaydi', 'Kompyuter kerak emas'],
        answer: 0,
        explanation: 'E-mail tahrirlanadigan fayllar, rasmlar va arzon global aloqa imkonini beradi.',
      },
    ],
    teacherNotes: {
      method: 'Parol kuchliligi musobaqasi va ochiq Wi-Fi xavflari bo‘yicha muhokama.',
      timing: 'Tarmoq xavflari 15 daq, Aloqa vositalari 15 daq, CaseStudy va test 15 daq.',
      assessment: 'Kuchli parol yaratish va 2FA mohiyatini tushuntirish.',
      homework: 'Kuchli parol yaratish bo‘yicha 5 ta oltin qoidani daftaringizga yozib keling.',
    },
  },
  {
    id: 'g9-l15',
    grade: 9,
    no: 15,
    part: '1-chorak',
    title: 'Axborot texnologiyasining bandlikka taʼsiri',
    kind: 'dars',
    hours: 1,
    tools: ['Avtomatlashtirish', 'IT kasblar', 'Qayta malaka oshirish'],
    objectives: [
      'O‘quvchi AT rivoji natijasida qaysi anʼanaviy kasblar kamayib, qanday yangi kasblar paydo bo‘layotganini tahlil qiladi.',
      'O‘quvchi ish joylarida avtomatlashtirishning ijobiy va salbiy oqibatlarini muvozanatli baholaydi.',
    ],
    intro:
      'Kompyuter va robotlar birgina zavodda yuzlab oddiy ishlarni bajara oladi, lekin ayni paytda dasturchi, kiberxavfsizlik mutaxassisi va raqamli dizayner kabi millionlab yangi ish o‘rinlarini yaratmoqda.',
    sections: [
      {
        heading: 'Qisqarayotgan va avtomatlashtirilayotgan ish o‘rinlari',
        body: 'Takrorlanuvchi, bir xil qoidaga bo‘ysunuvchi ishlar avtomatlashtirilmoqda: zavod konveyeridagi payvandlash/bo‘yash (robot qo‘llar), bank kassirlari o‘rnini bankomat va mobil ilovalar egallashi, kutubxona kartotekasi va ma’lumot kirituvchi operatorlarning kamayishi. Xodimlar uchun bu ishsizlik xavfi yoki yangi kasbga qayta o‘qish (retraining) zaruratini tug‘diradi.',
        example: 'Supermarketlarda o‘z-o‘ziga xizmat qilish kassalari (Self-checkout) joriy etilishi kassirlar sonini kamaytiradi, lekin tizimga xizmat ko‘rsatuvchi texniklarga ehtiyoj tug‘diradi.',
        tip: 'Avtomatlashtirish "insonni ishsiz qoldirish" bilan cheklanmaydi — og‘ir va xavfli mehnatni yengillashtiradi.',
      },
      {
        heading: 'Yangi yaratilgan kasblar va ish uslubi',
        body: 'AT tufayli butunlay yangi sohalar paydo bo‘ldi: Veb-dasturchi, Ma’lumotlar tahlilchisi (Data Analyst), Kiberxavfsizlik muhandisi, UI/UX dizayner, SMM mutaxassisi, Bulut arxitektori va Tizim administratori. Shuningdek, masofadan ishlash (Remote work) orqali yoshlar o‘z shahridan turib xalqaro kompaniyalarda ishlashi mumkin.',
        example: 'O‘zbekistondagi yosh dasturchi Toshkent yoki viloyatda turib xorijiy startapga mobil ilova yaratib berishi bugun oddiy holat.',
      },
    ],
    keyTerms: [
      { term: 'Avtomatlashtirish', definition: 'Inson bajaradigan takroriy ishlarni dastur yoki robotlarga o‘tkazish.' },
      { term: 'Qayta malaka (Retraining)', definition: 'Texnologiya o‘zgarganda xodimning yangi raqamli ko‘nikmalarni egallashi.' },
      { term: 'Masofaviy ish (Remote work)', definition: 'Ofisga bormasdan Internet orqali ish vazifalarini bajarish shakli.' },
      { term: 'Yangi IT kasblar', definition: 'Dasturchi, Data Analyst, DevOps, UI/UX dizayner kabi raqamli iqtisodiyot kasblari.' },
    ],
    steps: [
      '1. Kamaygan 3 ta kasb va ularning o‘rnini bosgan texnologiyani yozing.',
      '2. Oxirgi 15 yilda paydo bo‘lgan 4 ta zamonaviy raqamli kasbni sanang.',
      '3. Korxona va xodim nuqtai nazaridan avtomatlashtirishning foyda/xavfini solishtiring.',
    ],
    practice: [
      {
        task: 'Bankda mobil ilovalar ommalashishi mijozlar va xodimlarga qanday taʼsir ko‘rsatganini yozing.',
        expected: 'Mijozlar 24/7 navbatsiz to‘lov qiladi; oddiy kassa xodimlari kamayadi, ammo IT va mijoz maslahatchilariga talab ortadi.',
        difficulty: 'oson',
      },
      {
        task: 'Kelajakda o‘z kasbingizda raqobatbardosh bo‘lish uchun qaysi raqamli ko‘nikmalar zarur deb o‘ylaysiz?',
        expected: 'Algoritmik fikrlash, ma’lumot tahlili, chet tili va AI vositalaridan to‘g‘ri foydalanish.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l15-g1',
        num: '01',
        title: 'Kasblar transformatsiyasi',
        topic: 'AT va bandlik',
        difficulty: 'Oson',
        engine: 'sort',
        config: {
          prompt: 'Kasblarni AT taʼsiri bo‘yicha 2 guruhga ajrating: Kamayayotgan (avtomatlashayotgan) yoki Talab ortayotgan IT kasblar.',
          categories: ['Kamayayotgan kasblar', 'Talab ortayotgan IT kasblar'],
          items: [
            { text: 'Konveyer payvandchisi', category: 'Kamayayotgan kasblar' },
            { text: 'Kiberxavfsizlik muhandisi', category: 'Talab ortayotgan IT kasblar' },
            { text: 'Qog‘oz kartoteka xodimi', category: 'Kamayayotgan kasblar' },
            { text: 'Ma’lumotlar tahlilchisi (Data Analyst)', category: 'Talab ortayotgan IT kasblar' },
            { text: 'Oddiy ma’lumot teruvchi (Tipist)', category: 'Kamayayotgan kasblar' },
            { text: 'UI/UX dizayner', category: 'Talab ortayotgan IT kasblar' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'AT rivojlanishi tufayli qaysi turdagi ish o‘rinlari birinchi navbatda qisqaradi?',
        options: ['Bir xil takrorlanuvchi qo‘l mehnati va qog‘oz operatsiyalari', 'Ijodiy dizayn va ilmiy tadqiqot', 'Kiberxavfsizlik auditlari', 'Psixologik maslahatlar'],
        answer: 0,
        explanation: 'Aniq algoritmga tushadigan takroriy vazifalarni mashina va dasturlar tezroq bajaradi.',
      },
      {
        prompt: 'Avtomatlashtirish sharoitida xodim o‘z ishini saqlab qolishi uchun nima qilishi kerak?',
        options: ['Yangi texnologiyalarni o‘rganish va qayta malaka oshirish (Retraining)', 'Kompyuterdan umuman voz kechish', 'Faqat qog‘ozda yozish', 'Internetni o‘chirib qo‘yish'],
        answer: 0,
        explanation: 'Doimiy o‘rganish va raqamli vositalarni o‘zlashtirish eng muhim himoyadir.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri AT sababli paydo bo‘lgan yangi kasbdir?',
        options: ['Veb-dasturchi va Kiberxavfsizlik mutaxassisi', 'Temirchi', 'Suv tashuvchi', 'Xattot'],
        answer: 0,
        explanation: 'Veb va axborot xavfsizligi kompyuter tarmoqlari rivojidan keyin vujudga keldi.',
      },
      {
        prompt: 'Zavodda robotlardan foydalanishning ishchilar xavfsizligiga ijobiy taʼsiri nimada?',
        options: ['Inson uchun xavfli (zaharli, issiq, og‘ir) ishlarni robotlar bajaradi', 'Ishchilar dam olmay ishlaydi', 'Elektr sarfi nol bo‘ladi', 'Robotlar hech qachon buzilmaydi'],
        answer: 0,
        explanation: 'Robotlar zaharli bo‘yoq sepadigan yoki o‘ta og‘ir metall ko‘taradigan joylarda inson hayotini asraydi.',
      },
      {
        prompt: 'Masofaviy ish (Remote work) ning xodim uchun asosiy afzalligi qaysi?',
        options: ['Yo‘lga vaqt va pul sarflamasdan istalgan hududdan ishlash imkoniyati', 'Umuman ishlamaslik', 'Elektr energiyasiz ishlash', 'Hamkasblar bilan doim yonma-yon o‘tirish'],
        answer: 0,
        explanation: 'Masofadan ishlash geografik cheklovlarni olib tashlaydi va vaqtni tejaydi.',
      },
    ],
    teacherNotes: {
      method: 'Sinf bilan "2035-yilda eng kerakli 5 kasb" kichik aqliy hujumi o‘tkazish.',
      timing: 'Taʼsir tahlili 20 daq, Yangi kasblar 15 daq, Saralash o‘yini va test 10 daq.',
      assessment: 'Kamayayotgan va ortayotgan kasblarni asosli ajratish.',
      homework: 'O‘zingiz qiziqqan bir IT kasb (dasturchi, dizayner, tahlilchi) haqida 5 ta fakt yozing.',
    },
  },
  {
    id: 'g9-l16',
    grade: 9,
    no: 16,
    part: '1-chorak',
    title: 'Axborot texnologiyasi (AT) ning tashkilotlar ish uslubiga taʼsiri. Mikroprotsessorli uy qurilmalari',
    kind: 'dars',
    hours: 1,
    tools: ['Masofaviy ish', 'ERP / Videomuloqot', 'Mikroprotsessorli texnika'],
    objectives: [
      'O‘quvchi moslashuvchan ish jadvallari (Teleworking, Part-time, Job sharing, Siqilgan ish haftasi) mohiyatini tushuntiradi.',
      'O‘quvchi mikroprotsessorli maishiy texnikalarning (kir yuvish mashinasi, mikroto‘lqinli pech, aqlli sovutgich, avtonom changyutgich) ijobiy va salbiy taʼsirini baholaydi.',
    ],
    intro:
      'AT ofislarda ish tartibini o‘zgartirib, uydan ishlash va moslashuvchan soatlarni olib kirgan bo‘lsa, uylarimizda esa kir yuvish mashinasidan tortib robot-changyutgichgacha barchasini kichik mikroprotsessorlar boshqarmoqda.',
    sections: [
      {
        heading: 'Tashkilotlarda zamonaviy ish shakllari',
        body: 'AT tufayli to‘rtta moslashuvchan ish tartibi kengaydi: 1) Masofadan ishlash (Teleworking) — xodim uydan VPN va videokonferensiya orqali ishlaydi; 2) Yarim stavka (Part-time) — kuniga kamroq soat ishlash; 3) Ishni bo‘lishish (Job sharing) — bitta to‘liq lavozimni 2 xodim bo‘lib bajarishi; 4) Siqilgan ish haftasi (Compressed hours) — 5 kunlik 40 soatni 4 kunda 10 soatdan ishlash.',
        example: 'Kompaniya teleworking qo‘llasa, katta ofis ijarasi tejaladi; biroq xodimda uyda chalg‘imaslik intizomi va jamoadan ajralib qolmaslik muhim.',
        tip: 'Video-qo‘ng‘iroq (Zoom/Teams) ishchi safar xarajatlarini kamaytirsa-da, jonli insoniy ishonch o‘rnini to‘liq bosa olmasligi mumkin.',
      },
      {
        heading: 'Mikroprotsessorli uy qurilmalari va ularning taʼsiri',
        body: 'Kir yuvish mashinasi, mikroto‘lqinli pech, aqlli termostat, robot-changyutgich va aqlli muzlatgich ichida maxsus o‘rnatilgan (embedded) mikroprotsessorlar bor. Ijobiy tomoni: uy yumushlari tezlashadi, bo‘sh vaqt ko‘payadi, energiya tejaladi (masalan, xona bo‘shligida isitishni o‘chirish). Salbiy tomoni: kamharakatlilik ortishi, oddiy qo‘l ko‘nikmalarining yo‘qolishi hamda Internetga ulangan "aqlli" uy qurilmalarining buzilish xavfi.',
        example: 'Robot-changyutgich lidar sensori bilan xona xaritasini chizib, egasi ishdaligida polni tozalaydi va o‘zi quvvat stansiyasiga qaytadi.',
      },
    ],
    keyTerms: [
      { term: 'Job sharing', definition: 'Bitta to‘liq shtat vazifalarini ikki xodim o‘rtasida kelishilgan jadvalda bo‘lib olish.' },
      { term: 'Compressed hours', definition: 'Haftalik umumiy ish soatini o‘zgartirmagan holda kamroq kunlarga jamlash.' },
      { term: 'O‘rnatilgan (Embedded) mikroprotsessor', definition: 'Maishiy yoki sanoat qurilmasi ichiga bitta aniq boshqaruv vazifasi uchun joylangan chip.' },
      { term: 'Aqlli uy (Smart Home)', definition: 'Sensor va mikroprotsessorlar orqali yoritish, isitish va xavfsizlikni avtomatlashtirish.' },
    ],
    steps: [
      '1. Moslashuvchan ish turlarini (Teleworking, Part-time, Job sharing, Compressed) taqqoslang.',
      '2. Uyingizdagi mikroprotsessorli 5 ta qurilmani sanang.',
      '3. Ularning turmush tarzi va sog‘liqqa 2 ta foyda hamda 2 ta salbiy taʼsirini belgilang.',
    ],
    practice: [
      {
        task: 'Xodim kuniga 10 soatdan haftada 4 kun ishlab, juma kuni dam olishi qaysi ish shakli deb ataladi?',
        expected: 'Siqilgan ish haftasi (Compressed hours).',
        difficulty: 'oson',
      },
      {
        task: 'Mikroprotsessorli uy texnikalarining oilaviy hayotga ijobiy va salbiy taʼsirini jadvalda yozing.',
        expected: 'Ijobiy: vaqt tejash, qulaylik, energiya nazorati; Salbiy: kamharakatlilik, texnikaga qaramlik, taʼmir qimmatligi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l16-g1',
        num: '01',
        title: 'Ish shakllari va qurilmalar mosligi',
        topic: 'AT tashkilot va uyda',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'Moslashuvchan ish tartiblari va mikroprotsessor atamalarini juftlang.',
          pairs: [
            { left: 'Teleworking', right: 'Uydan yoki masofadan tarmoq orqali ishlash' },
            { left: 'Job sharing', right: 'Bitta to‘liq ish o‘rnini ikki xodim bo‘lishib bajarishi' },
            { left: 'Compressed hours', right: '40 soatlik haftalik ishni 4 kunda bajarib tugatish' },
            { left: 'Embedded mikroprotsessor', right: 'Kir yuvish mashinasi yoki pech ichidagi boshqaruv chipi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Bitta to‘liq shtat ishini ikki nafar xodim o‘zaro taqsimlab bajarishi nima deb ataladi?',
        options: ['Job sharing (Ishni bo‘lishish)', 'Compressed hours', 'Overtime', 'Data mining'],
        answer: 0,
        explanation: 'Job sharing da ikki xodim bitta lavozim masʼuliyatini bo‘lib oladi.',
      },
      {
        prompt: 'Mikroprotsessorli kir yuvish mashinasi ichidagi chip nima vazifani bajaradi?',
        options: ['Suv harorati, aylanish tezligi va vaqtni sensorlar asosida boshqaradi', 'Video montaj qiladi', 'Internet sayt yaratadi', 'Matn chop etadi'],
        answer: 0,
        explanation: 'O‘rnatilgan mikroprotsessor dastur rejimiga mos sensor va motorlarni boshqaradi.',
      },
      {
        prompt: 'Tashkilot uchun Teleworking (masofaviy ish) ning asosiy moliyaviy foydasi qaysi?',
        options: ['Katta ofis ijarasi va kommunal xarajatlarni tejash', 'Elektron pochtadan voz kechish', 'Xodimlarga kompyuter bermaslik', 'Internetni bekor qilish'],
        answer: 0,
        explanation: 'Kamroq ofis maydoni ijaraga olinishi tashkilot xarajatlarini sezilarli pasaytiradi.',
      },
      {
        prompt: 'Uy texnikalarining haddan tashqari avtomatlashtirilishi qanday salbiy oqibatga olib kelishi mumkin?',
        options: ['Jismoniy faollik kamayishi va mustaqil ko‘nikmalar susayishi', 'Vaqt yetishmasligi', 'Fayllar ko‘payishi', 'Ekran kichrayishi'],
        answer: 0,
        explanation: 'Hamma yumushni texnika bajarganda odamda harakatsizlik ortishi mumkin.',
      },
      {
        prompt: 'Smart-muzlaktich Internetga ulangan bo‘lsa, qaysi xavfsizlik chorasi muhim?',
        options: ['Standart zavod parolini o‘zgartirish va tarmoqni himoyalash', 'Muzlatgich eshigini ochiq qoldirish', 'Elektrdan butunlay uzib qo‘yish', 'Bluetooth ni o‘chirib tashlamaslik'],
        answer: 0,
        explanation: 'IoT qurilmalari standart parol bilan qolsa, uy tarmog‘iga kirish nuqtasiga aylanishi mumkin.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda "Qaysi ish tartibi ota-onamga qulay?" mini-suhbati.',
      timing: 'Ish shakllari 20 daq, Mikroprotsessorli texnika 15 daq, Match va test 10 daq.',
      assessment: '4 ta ish shaklini aniq misollar bilan farqlash.',
      homework: 'Uyingizdagi 3 ta mikroprotsessorli texnikaning qanday sensorlardan foydalanishini yozing.',
    },
  },
  {
    id: 'g9-l17',
    grade: 9,
    no: 17,
    part: '1-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Bilim sinovi', 'Tarmoq va Jamiyat'],
    objectives: [
      'O‘quvchi 12–16-darslar (Tarmoq qurilmalari, Brauzer/DNS/HTTPS, Xavfsizlik, Bandlik va Uy texnikalari) bo‘yicha olgan bilimlarini tekshiradi.',
      'O‘quvchi tarmoq sxemalari va xavfsizlik qoidalariga oid test hamda amaliy savollarga javob beradi.',
    ],
    intro:
      'Ikkinchi nazorat ishi kompyuter tarmoqlari, brauzer va internet protokollari, 2FA xavfsizligi hamda AT ning bandlik va tashkilotlar ish tartibiga taʼsirini qamrab oladi.',
    sections: [
      {
        heading: 'Nazorat oldi asosiy takrorlash',
        body: 'Quyidagi juftliklarni esda tuting: Switch → MAC manzil; Router → IP va tarmoqlararo yo‘naltirish; DNS → domen nomini IP ga aylantirish; HTTPS → shifrlangan veb-aloqa; 2FA → parol + ikkinchi tasdiq; Teleworking/Job sharing → moslashuvchan mehnat shakllari.',
        example: 'Agar savolda "Domen nomini IP ga nima o‘giradi?" deyilsa — DNS; "Barcha portlarga tarqatadigan eski qurilma?" deyilsa — Hub.',
        tip: 'Savollarni diqqat bilan o‘qing va tarmoq qurilmalari (Switch vs Router) vazifasini chalkashtirmang.',
      },
    ],
    keyTerms: [
      { term: 'Switch vs Router', definition: 'Switch lokal tarmoq ichida bog‘laydi; Router turli tarmoqlarni o‘zaro bog‘laydi.' },
      { term: 'DNS va HTTPS', definition: 'Manzilni IP ga tarjima qilish hamda veb-trafikni shifrlash.' },
      { term: 'Retraining', definition: 'Avtomatlashtirish sharoitida yangi kasbiy ko‘nikmalarni o‘zlashtirish.' },
      { term: 'Embedded chip', definition: 'Maishiy qurilmalarni avtomatik boshqaruvchi o‘rnatilgan mikroprotsessor.' },
    ],
    steps: [
      '1. Tarmoq atamalarini bo‘sh o‘rinlarga qo‘yish mashqida tekshiring.',
      '2. Amaliy vaziyatlarda to‘g‘ri qurilma va xavfsizlik chorasini tanlang.',
      '3. Yakuniy 5 ta test savolini mustaqil ishlang.',
    ],
    practice: [
      {
        task: 'Brauzerda `https://` va DNS ning o‘zaro vazifasini 3 qatorda izohlang.',
        expected: 'DNS sayt nomini IP-manzilga aylantiradi, HTTPS esa brauzer va server orasidagi ma’lumotni shifrlab uzatadi.',
        difficulty: 'oson',
      },
      {
        task: 'Kompaniya 5 ta yangi xodimni uydan ishlatmoqchi. Ularga kerakli 3 ta texnik/dasturiy shartni yozing.',
        expected: 'Barqaror Internet, himoyalangan VPN/2FA ulanishi va videokonferensiya/bulut hamkorlik vositalari.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l17-g1',
        num: '01',
        title: 'Tarmoq va kommunikatsiya testi',
        topic: 'Tarmoq va xavfsizlik',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Tarmoq ishlashiga oid jumlani to‘g‘ri atamalar bilan to‘ldiring.',
          template: 'Sayt nomini IP-manzilga {{0}} aylantiradi, ma’lumotni shifrlab uzatishni {{1}} taʼminlaydi, lokal tarmoqdagi kompyuterlarni esa MAC-manzil orqali {{2}} bog‘laydi.',
          blanks: [
            { options: ['DNS', 'RAM', 'OMR'], answer: 'DNS' },
            { options: ['HTTPS', 'HTTP', 'USB'], answer: 'HTTPS' },
            { options: ['Switch', 'Hub', 'Modem'], answer: 'Switch' },
          ],
          hint: 'Nomdan IP ga = DNS; shifrlangan veb = HTTPS; aqlli kommutator = Switch.',
          explanation: 'DNS, HTTPS va Switch zamonaviy tarmoqlarning asosiy tayanchlaridir.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Lokal tarmoqdagi barcha kompyuterlarga paketni nusxalab yuboradigan samarasiz qurilma qaysi?',
        options: ['Hub', 'Switch', 'Router', 'Firewall'],
        answer: 0,
        explanation: 'Hub paketni faqat kerakli manzilga emas, hamma portlarga yuboradi.',
      },
      {
        prompt: 'Brauzerda "Xatcho‘p" (Bookmark) nima uchun ishlatiladi?',
        options: ['Kerakli sayt manzilini keyin tez ochish uchun saqlab qo‘yish', 'Viruslarni o‘chirish', 'Kodni kompilyatsiya qilish', 'IP ni yashirish'],
        answer: 0,
        explanation: 'Bookmark foydali veb-sahifalarga bir bosishda qaytish imkonini beradi.',
      },
      {
        prompt: 'Parol o‘g‘irlansa ham begonalarning kirishini oldini oluvchi qo‘shimcha himoya nima?',
        options: ['2FA (Ikki bosqichli tasdiqlash)', 'Ekran yorqinligi', 'Bluetooth', 'Cookie'],
        answer: 0,
        explanation: '2FA telefon kodi yoki biometriya kabi ikkinchi tasdiqni so‘raydi.',
      },
      {
        prompt: 'Haftalik 40 soatlik ishni 5 kun o‘rniga 4 kunda bajarish usuli qanday ataladi?',
        options: ['Compressed hours (Siqilgan ish haftasi)', 'Job sharing', 'Part-time', 'Multitasking'],
        answer: 0,
        explanation: 'Siqilgan ish haftasida ish kunlari soni qisqaradi, kunlik soat ortadi.',
      },
      {
        prompt: 'Robot-changyutgich yoki aqlli pech ichidagi maxsus boshqaruv chipi qanday ataladi?',
        options: ['O‘rnatilgan (Embedded) mikroprotsessor', 'Mainframe', 'Plotter', 'Optik disk'],
        answer: 0,
        explanation: 'Maishiy texnikalarda maxsus vazifali o‘rnatilgan mikroprotsessorlar ishlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Yozma va interaktiv test aralash nazorat o‘tkazish.',
      timing: 'Tayyorgarlik 5 daq, Nazorat ishi 35 daq, Xatolar ustida ishlash 5 daq.',
      assessment: 'Har bir tarmoq va bandlik tushunchasini to‘g‘ri qo‘llash.',
      homework: 'Keyingi darsga ergonomika va sog‘liqni saqlash qoidalarini ko‘rib keling.',
    },
  },
  {
    id: 'g9-l18',
    grade: 9,
    no: 18,
    part: '1-chorak',
    title: 'Axborot texnologiyasi (AT) jihozlaridan uzoq muddat foydalanishning sog‘liqqa ta’siri',
    kind: 'dars',
    hours: 1,
    tools: ['Ergonomika', 'Xavfsizlik qoidalari'],
    objectives: [
      'O‘quvchi kompyuterda uzoq ishlashdan kelib chiqadigan kasalliklar (RSI, ko‘z zo‘riqishi, umurtqa og‘rig‘i) sabablarini tushunadi.',
      'O‘quvchi ergonomik ish o‘rnini to‘g‘ri tashkil etish hamda kabellar, elektr tokidan himoyalanish qoidalarini amalda qo‘llaydi.',
    ],
    intro:
      'Kompyuterda soatlab qimirlamay o‘tirish ko‘zga, bilakka va umurtqaga jiddiy zarar yetkazishi mumkin. Shuningdek, tartibsiz simlar va qizigan rozetkalar texnik xavfsizlikka tahdid soladi. Sog‘liq va xavfsizlik — IT madaniyatining birinchi shartidir!',
    sections: [
      {
        heading: 'Sog‘liq muammolari va Ergonomika yechimlari',
        body: '1) RSI (Repetitive Strain Injury — Takroriy zo‘riqish jarohati): klaviatura va sichqonchada uzoq ishlashdan bilak paylarining yallig‘lanishi. Yechim: ergonomik klaviatura, bilak tayanchi va muntazam tanaffus. 2) Ko‘z zo‘riqishi va bosh og‘rig‘i: ekranga yaqin o‘tirish, xira yoki yaltiraydigan ekran. Yechim: "20-20-20" qoidasi (har 20 daqiqada 20 fut/6 metr uzoqqa 20 soniya qarash), ekranni ko‘zdan 50–70 sm masofada va ko‘z sathidan biroz pastda tutish, yarqiramaydigan (anti-glare) filtr. 3) Umurtqa va bo‘yin og‘rig‘i: balandligi sozlanadigan bel tayanchli stul va oyoq tayanchi.',
        example: 'Ekranni deraza ro‘parasiga qo‘yilsa, quyosh shu’lasi ekranda aks etib ko‘zni tez charchatadi — monitor derazaga yonbosh qo‘yilishi kerak.',
        tip: 'Har 45–50 daqiqalik mashg‘ulotdan keyin albatta 5–10 daqiqa o‘rnidan turib yengil jismoniy mashq qiling!',
      },
      {
        heading: 'Ish joyidagi elektr va yong‘in xavfsizligi',
        body: 'Sinf va uyda quyidagi xavflar mavjud: polga yoyilgan kabellarga qoqilib ketish (yechim: kabellarni maxsus quti — trunking ichiga olish); bitta rozetkaga ko‘p uzaytirgich ulashdan rozetka qizib yong‘in chiqishi; kompyuter yonida suv/choy ichish natijasida qisqa tutashuv; og‘ir uskunalarning stol chetidan tushib ketishi.',
        example: 'Informatika xonasida shisha idishda suv olib kirish qatʼiyan man etiladi — bir tomchi suv klaviatura va elektr tizimiga zarar yetkazishi mumkin.',
      },
    ],
    keyTerms: [
      { term: 'Ergonomika', definition: 'Ish o‘rni, mebel va uskunalarni inson tanasiga mos va zararsiz qilib loyihalash fani.' },
      { term: 'RSI', definition: 'Klaviatura yoki sichqonchada uzluksiz bir xil harakatdan bilak va barmoqlarda paydo bo‘ladigan jarohat.' },
      { term: '20-20-20 qoidasi', definition: 'Har 20 daqiqada 6 metr uzoqlikka 20 soniya qarab ko‘z mushaklarini dam oldirish.' },
      { term: 'Kabel kanali (Trunking)', definition: 'Pol va devordagi simlarni tartibli yashirib, qoqilishdan asrovchi quti.' },
    ],
    steps: [
      '1. O‘z stol-stulingiz va monitoringiz balandligini ergonomik meʼyorlarga ko‘ra tekshiring.',
      '2. Xonadagi simlar va elektr ulanishlarini xavfsizlik nazoratidan o‘tkazing.',
      '3. RSI, ko‘z zo‘riqishi va bel og‘rig‘ining har biri uchun 2 tadan oldini olish chorasini belgilang.',
    ],
    practice: [
      {
        task: 'Sinfdagi o‘z ish joyingizni ko‘zdan kechirib, 3 ta ergonomik yaxshilanish taklifini yozing.',
        expected: 'Masalan: stul balandligini tirsak 90° bo‘ladigan qilib sozlash, monitorni ko‘z sathiga keltirish, kabellarni yig‘ish.',
        difficulty: 'oson',
      },
      {
        task: 'Nima uchun bir nechta kompyuter va printerni bitta arzon rozetkaga ketma-ket ulash xavfli?',
        expected: 'Elektr toki yuki ortib, simlar qizishi va yong‘in kelib chiqishi mumkin.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l18-g1',
        num: '01',
        title: 'Sog‘liq xavflari va yechimlar',
        topic: 'Ergonomika va xavfsizlik',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'AT dan uzoq foydalanishdagi muammoni uning to‘g‘ri yechimi bilan juftlang.',
          pairs: [
            { left: 'Bilakda RSI og‘rig‘i', right: 'Ergonomik klaviatura, bilak tayanchi va tanaffus' },
            { left: 'Ko‘z quruqligi va charchash', right: '20-20-20 qoidasi va yaltiramaydigan ekran filtri' },
            { left: 'Kabelga qoqilib yiqilish', right: 'Simlarni maxsus kanal (trunking) ichiga joylash' },
            { left: 'Bel va bo‘yin og‘rig‘i', right: 'Bel tayanchli sozlanadigan stul va tik holat' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'RSI (Takroriy zo‘riqish jarohati) asosan tananing qaysi qismida uchraydi?',
        options: ['Bilak, qo‘l va barmoqlarda', 'Tizzada', 'Quloqda', 'Tishda'],
        answer: 0,
        explanation: 'RSI klaviatura va sichqonchada uzoq va noto‘g‘ri burchakda ishlashdan kelib chiqadi.',
      },
      {
        prompt: 'Ko‘z zo‘riqishini kamaytirish uchun "20-20-20" qoidasi nimani anglatadi?',
        options: ['Har 20 daqiqada 20 fut (6 metr) uzoqqa 20 soniya qarash', '20 soat uxlash', 'Monitor yorqinligini 200% ga ko‘tarish', '20 sm masofada o‘tirish'],
        answer: 0,
        explanation: 'Uzoqqa qarash ko‘z linzalari mushaklaridagi taranglikni bo‘shatadi.',
      },
      {
        prompt: 'Kompyuter monitori foydalanuvchidan qancha masofada va qaysi balandlikda turishi maʼqul?',
        options: ['50–70 sm masofada, yuqori cheti ko‘z sathida', '15 sm masofada', 'Juda balandda boshni ko‘tarib', 'Oyoq ostida'],
        answer: 0,
        explanation: 'Ko‘z sathidagi yoki biroz pastdagi 50–70 sm masofa bo‘yin va ko‘z uchun eng qulaydir.',
      },
      {
        prompt: 'Kompyuter xonasida elektr va qoqilish xavfini kamaytirishning to‘g‘ri yo‘li qaysi?',
        options: ['Kabellarni kabel kanallariga yashirish va rozetkani ortiqcha yuklamaslik', 'Stol ustiga suv qo‘yish', 'Simlarni o‘rtadan tortib qo‘yish', 'Yong‘in chiqquncha e’tibor bermaslik'],
        answer: 0,
        explanation: 'Tartibli kabel kanali va to‘g‘ri elektr yuklamasi baxtsiz hodisalarning oldini oladi.',
      },
      {
        prompt: 'Yaltiraydigan deraza nuri ekranga tushishini qanday bartaraf etish mumkin?',
        options: ['Monitorni derazaga perpendikulyar qo‘yish yoki jalyuzi/anti-glare filtr ishlatish', 'Ekranni qop-qora qilish', 'Qorong‘ida fonarsiz ishlash', 'Stulni olib tashlash'],
        answer: 0,
        explanation: 'Yorug‘lik ekranga to‘g‘ri tushmasa, aks etish (glare) bo‘lmaydi va ko‘z toliqmaydi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda ergonomik stul va monitor holatini amalda to‘g‘rilab ko‘rsatish (Demo).',
      timing: 'Sog‘liq muammolari 15 daq, Elektr/yong‘in xavfsizligi 15 daq, Match o‘yini va test 15 daq.',
      assessment: 'Har bir muammoga aniq ergonomik yechim aytish.',
      homework: 'Uydagi dars stolingiz ergonomikasini tekshirib, qisqa foto/matn hisobot yozing.',
    },
  },
];
