import type { Lesson } from './types';

export const GRADE_10_Q3B: Lesson[] = [
  {
    id: 'g10-l44',
    grade: 10,
    no: 44,
    part: '3-chorak',
    title: 'Validatsiya qoidalari',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'Data Validation'],
    objectives: [
      'O‘quvchi elektron jadvalga kiritiladigan maʼlumotlar sifatini nazorat qiluvchi **Validatsiya (Data Validation)** qoidalarini tushunadi.',
      'O‘quvchi kiritish xatolarini oldini olish uchun 6 asosiy validatsiya turini (Range, Type, Length, Format, Presence, Lookup/List) ajratadi.',
    ],
    intro:
      '"Garbage In, Garbage Out" (Chiqindi kirsang, chiqindi chiqarasan)! Agar o‘quvchi yoshi katagiga tasodifan `-15` yoki `250`, yoxud `"salom"` yozilsa, o‘rtacha hisob buziladi. **Validatsiya qoidalari** bunday xato kiritishni darhol to‘xtatadi.',
    sections: [
      {
        heading: 'Validatsiya (Validation) nima?',
        body: '**Validatsiya** — foydalanuvchi kiritgan maʼlumotning mantiqan to‘g‘ri va ruxsat etilgan chegarada ekanini **avtomatik tekshirish** jarayoni. Eʼtibor bering: validatsiya maʼlumot *haqiqiy hayotga* mosligini (masalan, "Ali" ismi o‘rniga "Vali" yozilmaganini) emas, balki *qoidalarga mosligini* (masalan, baho 2 dan 5 gacha butun son ekanini) tekshiradi!',
        example: 'Talaba yoshi `7` dan `19` gacha butun son bo‘lishi shart — `25` yoki `12.5` kiritilsa, dastur rad etadi.',
      },
      {
        heading: '6 ta asosiy validatsiya turi',
        body: '1) **Range Check (Diapazon tekshiruvi)**: son yoki sana maʼlum oraliqda bo‘lishi (masalan, `0 <= ball <= 100`).\n2) **Type Check (Tur tekshiruvi)**: faqat butun son (`Whole number`), o‘nli son (`Decimal`) yoki sana.\n3) **Length Check (Uzunlik tekshiruvi)**: matn uzunligi cheklovi (masalan, parol kamida 8 belgi, PINFL aynan 14 ta raqam).\n4) **Format Check (Shakl/Format tekshiruvi)**: masalan, `AA1234567` yoki sana `DD.MM.YYYY` ko‘rinishida.\n5) **Presence Check (Bo‘sh emaslik tekshiruvi)**: majburiy maydon bo‘sh qolmasligi.\n6) **Lookup / List Check (Ro‘yxatdan tanlash)**: faqat ruxsat etilgan ro‘yxat qiymatlari (`Toshkent`, `Samarqand`, ...).',
        example: 'Passport seriya va raqami format tekshiruviga (`2 ta harf + 7 ta raqam`), maktab sinfi esa ro‘yxat tekshiruviga (`5..11`) misoldir.',
      },
    ],
    keyTerms: [
      { term: 'Validatsiya', definition: 'Kiritilayotgan maʼlumotning belgilangan mantiqiy qoidalarga mosligini tekshirish.' },
      { term: 'Range Check', definition: 'Son yoki sananing minimal va maksimal chegara oralig‘ida ekanini tekshirish.' },
      { term: 'Length Check', definition: 'Kiritilgan matn yoki kodning belgilar soni meʼyorda ekanini tekshirish.' },
      { term: 'Format Check', definition: 'Qiymat belgilangan shablon (harf/raqam tartibi) ga mos kelishini tekshirish.' },
    ],
    steps: [
      '1. Validatsiya va Verifikatsiya farqini eslang.',
      '2. 6 ta validatsiya qoidasini kundalik misollar bilan bog‘lang.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'O‘quvchi imtihonda olgan balli `0` dan `100` gacha bo‘lishi kerak. Qaysi validatsiya turi qo‘llanadi?',
        expected: 'Range Check (Diapazon tekshiruvi) va Type Check (Whole number).',
        difficulty: 'oson',
      },
      {
        task: 'Maktab jurnalida o‘quvchi jinsini kiritishda "O‘g‘il", "Ogil", "o‘g‘il bola" kabi har xil yozuvlar paydo bo‘lmasligi uchun qaysi validatsiya eng yaxshi?',
        expected: 'List / Lookup Check (ochiluvchi ro‘yxat: faqat "O‘g‘il bola" va "Qiz bola" tanlanadi).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l44-g1',
        num: '01',
        title: 'Validatsiya turlarini mosla',
        topic: 'Maʼlumot validatsiyasi turlari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir hayotiy tekshiruv misolini mos validatsiya turiga bog‘lang:',
          pairs: [
            { left: 'Imtihon balli 0 dan 100 gacha bo‘lishi shart', right: 'Range Check (Diapazon)' },
            { left: 'Telefon raqami aniq 9 ta raqamdan iborat bo‘lishi', right: 'Length Check (Uzunlik)' },
            { left: 'Majburiy F.I.Sh. maydoni bo‘sh qolmasligi', right: 'Presence Check (Mavjudlik)' },
            { left: 'Avtomobil raqami "01 A 123 AA" shablonida bo‘lishi', right: 'Format Check (Shablon)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Validatsiya nima uchun amalga oshiriladi?',
        options: [
          'Kiritilayotgan maʼlumotning mantiqiy qoidalarga mos va to‘g‘ri shaklda ekanini tekshirish uchun',
          'Fayl hajmini kattalashtirish uchun',
          'Tasvirlarni ranglash uchun',
          'Internetni o‘chirish uchun',
        ],
        answer: 0,
        explanation: 'Validatsiya mantiqsiz yoki xato shakldagi maʼlumotlar kiritilishining oldini oladi.',
      },
      {
        prompt: 'Yilning oy raqami `1` dan `12` gacha bo‘lishi kerakligi qaysi validatsiya turiga kiradi?',
        options: ['Length Check', 'Range Check', 'Format Check', 'Presence Check'],
        answer: 1,
        explanation: 'Qiymatning quyi (1) va yuqori (12) chegarasini tekshirish — Range Check.',
      },
      {
        prompt: 'Validatsiya maʼlumotning 100% haqiqatga mosligini (masalan, "2006" o‘rniga "2007" deb xato yozilmaganini) kafolatlay oladimi?',
        options: [
          'Ha, har doim',
          'Yo‘q, u faqat qoidaga mosligini tekshiradi; haqiqatga mosligini Verifikatsiya tekshiradi',
          'Faqat Excelda kafolatlaydi',
          'Faqat matnli kataklarda',
        ],
        answer: 1,
        explanation: 'Ikkala yil ham 1900–2025 oralig‘iga kirgani uchun validatsiyadan o‘tadi; asl nusxa bilan solishtirish — Verifikatsiya.',
      },
      {
        prompt: 'PINFL kodi aynan 14 ta belgidan iborat bo‘lishi kerakligini qaysi qoida tekshiradi?',
        options: ['Length Check', 'Range Check', 'Spell Check', 'Type Check'],
        answer: 0,
        explanation: 'Length Check belgilar sonini nazorat qiladi.',
      },
      {
        prompt: 'Ro‘yxatdagi faqat maʼlum shaharlar nomini tanlashga ruxsat berish qaysi tekshiruv turidir?',
        options: ['List / Lookup Check', 'Presence Check', 'Arithmetic Check', 'Parity Check'],
        answer: 0,
        explanation: 'Lookup/List check qiymatning ruxsat etilgan ro‘yxatda mavjudligini tekshiradi.',
      },
    ],
    teacherNotes: {
      method: '6 ta validatsiya turini real formalar (ro‘yxatdan o‘tish oynasi) misolida ko‘rsatish.',
      timing: 'Kirish 5 daq, 6 validatsiya turi 20 daq, Match o‘yini 10 daq, Quiz 10 daq.',
      assessment: 'Match o‘yini va validatsiya farqlarini tushuntirish.',
      homework: 'Onlayn anketa uchun 4 ta maydon va ularga mos validatsiya qoidalarini yozing.',
    },
  },
  {
    id: 'g10-l45',
    grade: 10,
    no: 45,
    part: '3-chorak',
    title: 'Elektron jadvalga qoʻllanadigan validatsiya',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'Data Validation', 'Drop-down List'],
    objectives: [
      'O‘quvchi Excelning **`Data → Data Validation`** oynasidagi 3 ta bo‘lim (**Settings**, **Input Message**, **Error Alert**) vazifasini biladi.',
      'O‘quvchi katakda ochiluvchi ro‘yxat (**Drop-down List**) va foydalanuvchi uchun xato xabari yaratadi.',
    ],
    intro:
      'Endi validatsiya qoidalarini bevosita **Excel / LibreOffice Calc** da qo‘llashni o‘rganamiz! Katak bosilganda yordamchi eslatma chiqishi va noto‘g‘ri qiymatda ogohlantirish oynasi ochilishi qanday sozlanadi?',
    sections: [
      {
        heading: 'Data Validation oynasining 3 ta yorlig‘i (Tabs)',
        body: '`Data → Data Validation` oynasida 3 muhim bo‘lim mavjud:\n1) **Settings (Sozlamalar)**: tekshirish mezonini tanlash (`Whole number`, `Decimal`, `List`, `Date`, `Text length`, `Custom` formula).\n2) **Input Message (Kirish xabari)**: foydalanuvchi katakni bosgan zahoti yonida paydo bo‘ladigan yordamchi maslahat ("Iltimos, 1 dan 5 gacha baho kiriting").\n3) **Error Alert (Xato ogohlantirishi)**: qoida buzilganda chiqadigan oyna — 3 darajasi bor: **Stop** (qatʼiyan kiritishga yo‘l qo‘ymaydi), **Warning** (ogohlantiradi, lekin tasdiqlansa ruxsat beradi), **Information** (faqat maʼlumot beradi).',
        example: '`List` turini tanlab, `Source` maydoniga `Aʼlo,Yaxshi,Qoniqarli` yozsangiz, katak yonida o‘z-o‘zidan ochiluvchi menyu tugmasi paydo bo‘ladi!',
        tip: 'Agar jadvalda allaqachon xato maʼlumotlar kiritilgan bo‘lsa, `Data Validation → Circle Invalid Data` buyrug‘i barcha xato kataklarni qizil oval bilan belgilab beradi!',
      },
    ],
    keyTerms: [
      { term: 'Data Validation', definition: 'Excelning Data menyusida kataklarga kiritish cheklovi o‘rnatuvchi vosita.' },
      { term: 'Drop-down List', definition: 'List qoidasi orqali katakda paydo bo‘ladigan tayyor variantlar ro‘yxati.' },
      { term: 'Input Message', definition: 'Katak tanlanganda foydalanuvchiga ko‘rsatiladigan oldindan maslahat oynasi.' },
      { term: 'Error Alert (Stop)', definition: 'Noto‘g‘ri qiymat kiritilishini mutlaqo taqiqlovchi qatʼiy xato xabari.' },
    ],
    steps: [
      '1. Baho ustuniga `Whole number: 2..5` qoidasini qo‘ying.',
      '2. `Input Message` va `Stop` darajali `Error Alert` yozing.',
      '3. Quyidagi tartiblash o‘yinida Drop-down List yaratish bosqichlarini qo‘ying.',
    ],
    practice: [
      {
        task: 'Qachon Error Alert ning `Stop` o‘rniga `Warning` uslubini tanlash foydali bo‘ladi?',
        expected: 'Masalan, oylik maosh odatda 10 mln dan kam bo‘lsa-da, kamdan-kam hollarda direktor mukofoti oshishi mumkin bo‘lganda — tizim ogohlantiradi, lekin operator tasdiqlab kirita oladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l45-g1',
        num: '01',
        title: 'Drop-down ro‘yxat yaratish tartibi',
        topic: 'Excel Data Validation',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Katakda ochiluvchi ro‘yxat (Drop-down List) yaratish bosqichlarini tartiblang:',
          items: [
            'Ro‘yxat qo‘yiladigan katak yoki diapazonni belgilash',
            'Data menyusidan Data Validation tugmasini bosish',
            'Settings bo‘limida Allow maydonidan List ni tanlash',
            'Source maydoniga variantlarni vergul bilan yoki diapazon sifatida kiritish',
            'OK tugmasini bosib, katak yonidagi strelkani tekshirish',
          ],
          hint: 'Avval kataklar belgilanadi, oxirida OK bosib natija tekshiriladi.',
          explanation: 'Belgilash → Data Validation → Allow: List → Source kiritish → OK.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Excelda katakka ochiluvchi ro‘yxat (Drop-down menu) qo‘yish uchun Data Validation ning `Allow` maydonidan qaysi variant tanlanadi?',
        options: ['Whole number', 'List', 'Text length', 'Date'],
        answer: 1,
        explanation: 'Allow → List tanlanganda Source dagi qiymatlardan ochiluvchi ro‘yxat yaratiladi.',
      },
      {
        prompt: 'Katak ustiga bosilganda, hali yozishdan OLDIN ko‘rsatma chiqishi uchun qaysi bo‘lim sozlanadi?',
        options: ['Settings', 'Input Message', 'Error Alert', 'Circle Invalid Data'],
        answer: 1,
        explanation: 'Input Message foydalanuvchi katakni tanlagan zahoti maslahat matnini chiqaradi.',
      },
      {
        prompt: 'Error Alert ning qaysi uslubi noto‘g‘ri qiymat kiritilishini QATʼIYAN man etadi?',
        options: ['Information', 'Warning', 'Stop', 'Comment'],
        answer: 2,
        explanation: 'Stop uslubi faqat "Retry" yoki "Cancel" tugmalarini beradi, xato qiymatni saqlashga yo‘l qo‘ymaydi.',
      },
      {
        prompt: 'Validatsiya qo‘yilishidan OLDIN kiritilib qolgan noto‘g‘ri kataklarni ekranda topish uchun qaysi buyruq ishlatiladi?',
        options: ['Clear All', 'Circle Invalid Data', 'Protect Sheet', 'Freeze Panes'],
        answer: 1,
        explanation: 'Circle Invalid Data avvaldan mavjud qoidabuzar kataklarni qizil aylana bilan belgilaydi.',
      },
      {
        prompt: 'Matn uzunligini cheklash (masalan, max 10 belgi) uchun Allow ro‘yxatidan qaysi biri tanlanadi?',
        options: ['Decimal', 'Time', 'Text length', 'Custom'],
        answer: 2,
        explanation: 'Text length katakka kiritiladigan belgilar sonini cheklaydi.',
      },
    ],
    teacherNotes: {
      method: '`Circle Invalid Data` va 3 xil `Error Alert` (Stop/Warning/Info) ni jonli ko‘rsatish.',
      timing: 'Kirish 5 daq, Data Validation 3 yorlig‘i 20 daq, Order o‘yini 10 daq, Quiz 10 daq.',
      assessment: 'Ochiluvchi ro‘yxat va Stop ogohlantirishini sozlash.',
      homework: 'Sinf ro‘yxatiga "Viloyat" ustuni uchun 5 ta viloyatdan iborat Drop-down List yarating.',
    },
  },
  {
    id: 'g10-l46',
    grade: 10,
    no: 46,
    part: '3-chorak',
    title: 'Maʼlumotlar kiritilishini tekshirish',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'Custom Validation', 'Verifikatsiya'],
    objectives: [
      'O‘quvchi elektron jadvalda murakkab tekshirish qoidalari (`Custom` formula yordamida validatsiya, masalan `COUNTIF` bilan takrorsiz kiritish) yaratadi.',
      'O‘quvchi kiritilgan maʼlumotni tekshirishda `IFERROR`, `ISNUMBER` va vizual verifikatsiya usullarini birlashtiradi.',
    ],
    intro:
      'Oddiy validatsiya son chegarasini tekshiradi, ammo katakka **takroriy ID** yozishni taqiqlash yoki **boshlanish sanasi tugash sanasidan kichik** bo‘lishini tekshirish kerak bo‘lsa-chi? Buni **Custom Validation (Maxsus formula)** hal qiladi!',
    sections: [
      {
        heading: 'Custom Validation (Formula asosida tekshirish)',
        body: '`Data Validation → Allow: Custom` bo‘limiga `TRUE` yoki `FALSE` qaytaruvchi mantiqiy formula yoziladi:\n• **Takrorsiz (noyob) qiymat kiritish**: `A2:A50` da bir xil ID ikki marta yozilmasligi uchun `=COUNTIF($A$2:$A$50, A2)=1` formulasi qo‘yiladi!\n• **Boshqa katakka bog‘liq shart**: tugash sanasi (`C2`) boshlanish sanasidan (`B2`) katta bo‘lishi uchun `=C2>=B2`.\n• **Faqat katta harflar / kodlar**: `=EXACT(A2, UPPER(A2))`.',
        example: '`=COUNTIF($A$2:$A$50, A2)=1` — agar biror ID ikkinchi marta yozilsa, COUNTIF `2` qaytaradi, `2=1` esa `FALSE` bo‘lib Excel kiritishni to‘xtatadi!',
      },
      {
        heading: 'Xatolarni ushlash (`IFERROR`) va Verifikatsiya',
        body: 'Formula xatolarini (`#N/A`, `#DIV/0!`) chiroyli xabarga aylantirish uchun **`=IFERROR(formula, "Topilmadi")`** ishlatiladi. Maʼlumot kiritib bo‘lingach esa albatta **verifikatsiya** (qog‘ozdagi asl hujjat bilan ko‘zda solishtirish) va nazorat yig‘indilari (Check Sum) tekshiriladi.',
        example: '`=IFERROR(VLOOKUP(A2, $E$2:$F$10, 2, FALSE), "Bunday kod yo‘q")` — `#N/A` o‘rniga tushunarli matn chiqaradi.',
      },
    ],
    keyTerms: [
      { term: 'Custom Validation', definition: 'Mantiqiy Excel formulasi (TRUE/FALSE) asosida murakkab kiritish qoidasi yozish.' },
      { term: 'IFERROR(qiymat, xato_matni)', definition: 'Formula xato (`#N/A`, `#DIV/0!`) berganda uning o‘rniga tushunarli qiymat chiqaruvchi funksiya.' },
      { term: 'Takrorsizlik (Uniqueness)', definition: 'COUNTIF(...)=1 orqali ustunda dublikat yozuv kiritishni taqiqlash.' },
      { term: 'Nazorat yig‘indisi (Check Sum)', definition: 'Kiritilgan raqamlar yig‘indisini asl hujjatdagi jami bilan solishtirib tekshirish.' },
    ],
    steps: [
      '1. `COUNTIF($A$2:$A$20, A2)=1` formulasining mantiqini tushuning.',
      '2. `IFERROR` yordamida `#DIV/0!` xatosini yashiring.',
      '3. Quyidagi bo‘shliq to‘ldirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Sotuv summasi kiritiladigan `C2:C20` ustunida `B2:B20` katagi bo‘sh bo‘lsa summa kiritishni taqiqlovchi Custom formula qanday yoziladi?',
        expected: '`=B2<>""` (`B2` bo‘sh emasligini tekshiradi).',
        difficulty: 'qiyin',
      },
      {
        task: '`=A2/B2` formulasida `B2=0` bo‘lsa `#DIV/0!` chiqmasligi uchun qanday o‘zgartirish kerak?',
        expected: '`=IFERROR(A2/B2, 0)` yoki `=IFERROR(A2/B2, "Nolga bo‘lib bo‘lmaydi")`.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l46-g1',
        num: '01',
        title: 'Custom tekshiruv formulalari',
        topic: 'Maʼlumot kiritish nazorati',
        difficulty: 'Qiyin',
        engine: 'fillblank',
        config: {
          prompt: 'Kiritishni nazorat qiluvchi formulalarni to‘g‘ri element bilan to‘ldiring:',
          template: 'Ustunda takroriy ID yozilishini to‘sish uchun Allow → {{0}} tanlanib, ={{1}}($A$2:$A$20, A2)=1 yoziladi. Formula xato berganda #N/A o‘rniga matn chiqarish uchun ={{2}}(...) ishlatiladi.',
          blanks: [
            { options: ['Custom', 'List', 'Decimal'], answer: 'Custom' },
            { options: ['COUNTIF', 'ROUND', 'TODAY'], answer: 'COUNTIF' },
            { options: ['IFERROR', 'AVERAGE', 'MIN'], answer: 'IFERROR' },
          ],
          hint: 'Custom formula TRUE/FALSE tekshiradi; IFERROR esa formula xatosini ushlaydi.',
          explanation: 'Custom da `COUNTIF(...)=1` noyoblikni taʼminlaydi, IFERROR xatolarni boshqaradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Excel Data Validation da formula yordamida murakkab cheklov yozish uchun qaysi tur tanlanadi?',
        options: ['Custom', 'Whole number', 'Any value', 'Time'],
        answer: 0,
        explanation: 'Custom opsiyasi istalgan mantiqiy Excel formulasini validatsiya qoidasi sifatida qabul qiladi.',
      },
      {
        prompt: '`=COUNTIF($A$2:$A$100, A2)=1` qoidasi nimani taʼminlaydi?',
        options: [
          'Faqat 1 raqami kiritilishini',
          'A2:A100 diapazonida bir xil qiymat ikki marta kiritilmasligini (takrorsizlikni)',
          'Barcha sonlar qo‘shilishini',
          'Matnlarni o‘chirishni',
        ],
        answer: 1,
        explanation: 'Agar qiymat ikkinchi marta kiritilsa COUNTIF natijasi 2 bo‘ladi va `=1` sharti yolg‘on chiqib rad etiladi.',
      },
      {
        prompt: '`=IFERROR(100/B2, "Xato")` formulasi `B2=0` bo‘lganda ekranda nimani chiqaradi?',
        options: ['#DIV/0!', '0', 'Xato', '100'],
        answer: 2,
        explanation: '100/0 xato bergani uchun IFERROR ikkinchi argumentdagi `"Xato"` matnini qaytaradi.',
      },
      {
        prompt: 'Qog‘ozdagi hisob-faktura yig‘indisi bilan Excel jadvali yig‘indisini solishtirib tekshirish usuli qanday ataladi?',
        options: ['Nazorat yig‘indisi (Check Sum / Batch Total)', 'Shartli formatlash', 'AutoFit', 'Data Bars'],
        answer: 0,
        explanation: 'Check Sum asl hujjatdagi jami summa bilan kiritilgan maʼlumotlar yig‘indisini solishtiradi.',
      },
      {
        prompt: 'Tugash sanasi (`C2`) boshlanish sanasidan (`B2`) oldin bo‘lmasligi uchun Custom formulasi qanday yoziladi?',
        options: ['=C2<B2', '=C2>=B2', '=C2+B2', '=C2=0'],
        answer: 1,
        explanation: 'Tugash sanasi boshlanish sanasidan katta yoki teng (`>=`) bo‘lgandagina mantiqan to‘g‘ri hisoblanadi.',
      },
    ],
    teacherNotes: {
      method: 'Dublikat ID taqiqlash (`COUNTIF(...)=1`) va `IFERROR` ni real kichik jadvalda sinab ko‘rsatish.',
      timing: 'Kirish 5 daq, Custom Validation 18 daq, FillBlank va mashq 12 daq, Quiz 10 daq.',
      assessment: 'Custom formula mantiqini tushunish va xatosiz yozish.',
      homework: 'Tug‘ilgan sana ustuni bugungi sanadan (`TODAY()`) katta bo‘lmasligi uchun Custom/Date validatsiya yozing.',
    },
  },
  {
    id: 'g10-l47',
    grade: 10,
    no: 47,
    part: '3-chorak',
    title: 'Maʼlumotlarni filtrlash va saralash',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'Sort', 'AutoFilter'],
    objectives: [
      'O‘quvchi bitta va ko‘p darajali saralash (**Multi-level Sort**: masalan, avval Sinf bo‘yicha, keyin Ball bo‘yicha kamayish tartibida) amallarini bajaradi.',
      'O‘quvchi **AutoFilter** (matn, son va rang bo‘yicha) hamda **Custom Filter** (AND / OR shartlari) dan foydalanadi.',
    ],
    intro:
      '5000 qatorlik savdo jadvalidan faqat "Toshkent" dagi "1 000 000 so‘mdan katta" xaridlarni ajratib ko‘rish va kamayish tartibida tizish — **Saralash (Sort)** va **Filtrlash (Filter)** yordamida 5 soniyada bajariladi!',
    sections: [
      {
        heading: 'Saralash (Sorting) va Ko‘p darajali saralash',
        body: '• **Oddiy saralash (`A→Z` / `Z→A`)**: faqat ustun ichidagi bitta katakni tanlab bosiladi (butun jadval qatorlari birga ko‘chishi uchun faqat bitta ustunni alohida belgilab qo‘ymang — aks holda ismlar va baholar aralashib ketadi!).\n• **Ko‘p darajali saralash (`Data → Sort → Add Level`)**: masalan, avval `Sinf` bo‘yicha `A→Z`, so‘ng bir xil sinf ichida `Ball` bo‘yicha `Largest to Smallest` (kattadan kichikka).',
        example: '10-A sinf o‘quvchilari alohida guruhlanib, ular ichida eng yuqori ball olganlar yuqorida chiqadi.',
      },
      {
        heading: 'Filtrlash (AutoFilter & Custom Filter)',
        body: '**Filter (`Ctrl + Shift + L`)**: sarlavha qatorida ochiluvchi strelkalar qo‘shadi. Filtrlash maʼlumotlarni **o‘chirmaydi**, faqat shartga mos kelmagan qatorlarni vaqtincha yashiradi! **`Number Filters` / `Text Filters`** da `Greater Than`, `Begins With` (masalan, "A" harfi bilan boshlanadiganlar), `Top 10` va `AND`/`OR` shartlari mavjud.',
        example: 'Shahar = `"Samarqand"` AND Summa `> 500 000` filtri faqat ikkala shartni bajargan qatorlarni ko‘rsatadi.',
        tip: 'Filtrlangan jadvalda yig‘indi olish uchun oddiy `SUM` yashirin qatorlarni ham qo‘shib yuboradi — faqat ko‘rinayotgan qatorlar uchun **`=SUBTOTAL(9, C2:C100)`** ishlating!',
      },
    ],
    keyTerms: [
      { term: 'Multi-level Sort', definition: 'Jadvalni bir vaqtning o‘zida 2 yoki undan ortiq ustun ustuvorligi bo‘yicha saralash.' },
      { term: 'AutoFilter', definition: 'Shartga mos qatorlarni qoldirib, qolganlarini vaqtincha yashiruvchi vosita.' },
      { term: 'SUBTOTAL(9, ...)', definition: 'Filtrlangan jadvaldagi faqat ko‘rinib turgan qatorlar yig‘indisini hisoblovchi funksiya.' },
      { term: 'Wildcard (* / ?)', definition: 'Matn filtrida `*` (istalgan belgilar) va `?` (bitta belgi) shabloni.' },
    ],
    steps: [
      '1. `Data → Sort` da 2 ta daraja (`Shahar`, so‘ng `Savdo`) qo‘shing.',
      '2. `Ctrl + Shift + L` bilan filtrni yoqing va sinab ko‘ring.',
      '3. Quyidagi CaseStudy vaziyatini hal qiling.',
    ],
    practice: [
      {
        task: 'O‘quvchi faqat `B` ustunni (Baholar) alohida belgilab `Sort Z→A` bosib, "Continue with the current selection" ni tanladi. Qanday xato ro‘y beradi?',
        expected: 'Faqat baholar saralanadi, `A` ustundagi ismlar joyida qolib, har bir o‘quvchiga boshqa birovning bahosi o‘tib ketadi! To‘g‘ri usul — `Expand the selection` ni tanlash.',
        difficulty: 'oson',
      },
      {
        task: 'Filtr yoqilganda pastki qatorda `=SUM(D2:D50)` va `=SUBTOTAL(9, D2:D50)` ning qaysi biri faqat ekranda qolgan qatorlarni qo‘shadi?',
        expected: '`=SUBTOTAL(9, D2:D50)` — chunki `SUM` yashirin qatorlarni ham qo‘shaveradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l47-g1',
        num: '01',
        title: 'Keys: Saralash va Filtrlash muammosi',
        topic: 'Sort va Filter xatolari',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Kassir jadvalni filtrlab, faqat "Karta orqali" to‘langan savdolarni ko‘rdi. Pastda jami summani bilish uchun qaysi formulani ishlatishi kerak?',
          scenario: 'Jadvalda 200 ta qator bor, filtrdan so‘ng atigi 35 ta qator ekranda ko‘rinib turibdi. Oddiy `=SUM(D2:D201)` hali ham 200 ta qatorning hammasini qo‘shib ko‘rsatmoqda.',
          options: [
            {
              text: '=SUBTOTAL(9, D2:D201)',
              isCorrect: true,
              feedback: 'To‘g‘ri! SUBTOTAL funksiyasining `9` kodi filtr bilan yashirilgan qatorlarni tashlab, faqat ko‘rinayotganlarini qo‘shadi.',
            },
            {
              text: '=SUM(D2:D201) + 0',
              isCorrect: false,
              feedback: 'Noto‘g‘ri — oddiy SUM filtrlangan yashirin qatorlarni eʼtiborsiz qoldirmaydi.',
            },
            {
              text: '=COUNT(D2:D201)',
              isCorrect: false,
              feedback: 'Noto‘g‘ri — COUNT summa emas, sonlar miqdorini sanaydi va yashirinlarni ham hisoblaydi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Jadvalda bir vaqtning o‘zida ham `Sinf` (A→Z), ham `Ball` (kattadan kichikka) bo‘yicha tartiblash nima deyiladi?',
        options: ['AutoFilter', 'Ko‘p darajali saralash (Multi-level Sort)', 'Freeze Panes', 'Subtotal'],
        answer: 1,
        explanation: 'Sort oynasida "Add Level" tugmasi bilan bir nechta saralash ustunini ketma-ket berish mumkin.',
      },
      {
        prompt: 'Excelda AutoFilter ni yoqish/o‘chirishning tezkor klaviatura birikmasi qaysi?',
        options: ['Ctrl + B', 'Ctrl + Shift + L', 'Ctrl + Z', 'Alt + F4'],
        answer: 1,
        explanation: 'Ctrl + Shift + L filtr tugmachalarini darhol yoqadi yoki o‘chiradi.',
      },
      {
        prompt: 'Filtr qo‘llanganda shartga mos kelmagan qatorlar bilan nima sodir bo‘ladi?',
        options: [
          'Butunlay o‘chib ketadi',
          'Vaqtincha yashiriladi (filtr tozalansa yana qaytadi)',
          'Boshqa faylga ko‘chiriladi',
          'Matn rangi oqaradi',
        ],
        answer: 1,
        explanation: 'Filter qatorlarni o‘chirmaydi, faqat vaqtincha ko‘rinmas qiladi.',
      },
      {
        prompt: 'Matn filtrida "A" harfi bilan boshlanadigan barcha ismlarni topish uchun qaysi shart qo‘yiladi?',
        options: ['Ends With A', 'Begins With A (yoki A*)', 'Contains Z', 'Greater Than A'],
        answer: 1,
        explanation: 'Begins With A yoki `A*` yulduzcha shabloni A dan boshlangan barcha matnlarni ajratadi.',
      },
      {
        prompt: 'Filtrlangan ro‘yxatda faqat ko‘rinib turgan qatorlar yig‘indisini to‘g‘ri hisoblaydigan funksiya qaysi?',
        options: ['SUM', 'SUBTOTAL', 'ROUND', 'VLOOKUP'],
        answer: 1,
        explanation: 'SUBTOTAL(9, diapazon) faqat filtrdan o‘tgan qatorlarni jamlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Bitta ustunni saralab "Continue with current selection" bosganda maʼlumotlar chalkashishini ko‘rsatish.',
      timing: 'Kirish 5 daq, Multi-level Sort va Filter 20 daq, CaseStudy 10 daq, Quiz 10 daq.',
      assessment: 'Ko‘p darajali saralash va SUBTOTAL qo‘llash.',
      homework: 'Mahsulotlar jadvalida Kategoriya + Narx bo‘yicha saralash va >100 000 filtri qo‘llang.',
    },
  },
  {
    id: 'g10-l48',
    grade: 10,
    no: 48,
    part: '3-chorak',
    title: 'Jamlovchi jadvallar va diagrammalar',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'PivotTable', 'PivotChart'],
    objectives: [
      'O‘quvchi katta hajmdagi xom jadvalni bir necha soniyada guruhlab tahlil qiluvchi **Jamlovchi jadval (PivotTable)** va **PivotChart** vazifasini tushunadi.',
      'O‘quvchi PivotTable ning 4 ta maydoni (**Rows**, **Columns**, **Values**, **Filters**) ni to‘g‘ri joylashtiradi.',
    ],
    intro:
      '10 000 ta savdo cheki jadvalidan "Har bir shaharda har bir oy bo‘yicha qancha telefon sotilgan?" degan hisobotni birorta formula yozmasdan 15 soniyada chiqarish mumkinmi? Albatta — **PivotTable (Jamlovchi jadval)** bilan!',
    sections: [
      {
        heading: 'PivotTable (Jamlovchi jadval) nima?',
        body: '**PivotTable** — katta jadvaldagi takroriy yozuvlarni avtomatik guruhlab, yig‘indi (`Sum`), son (`Count`), o‘rtacha (`Average`) va foiz ulushlarni dinamik hisoblaydigan tahlil vositasi (`Insert → PivotTable`). Asl maʼlumot o‘zgarganda `Refresh` tugmasi bosilsa hisobot darhol yangilanadi.',
        example: '1000 qatorli do‘kon jadvalidan bir marta sudrab qo‘yish orqali 5 ta filialning oylik daromad jadvali hosil bo‘ladi.',
      },
      {
        heading: 'PivotTable ning 4 ta hududi (Areas)',
        body: '• **Rows (Qatorlar)**: chap tomonda qator sifatida chiqadigan guruhlar (masalan, `Shahar` yoki `Sotuvchi`).\n• **Columns (Ustunlar)**: tepada ustun sarlavhasi bo‘ladigan guruhlar (masalan, `Oy` yoki `Kategoriya`).\n• **Values (Qiymatlar)**: hisoblanadigan sonli maydon (`Summa` → `Sum`, `Soni` → `Count`).\n• **Filters / Slicer**: butun hisobotni filtrlaydigan maydon (masalan, `Yil`).\n**PivotChart** esa ushbu jamlovchi jadval asosida avtomatik quriladigan interaktiv diagrammadir.',
        tip: 'PivotTable yaratishdan oldin asosiy jadvalda **bo‘sh sarlavhali ustun** va **birlashtirilgan katak (Merge)** bo‘lmasligi kerak!',
      },
    ],
    keyTerms: [
      { term: 'PivotTable', definition: 'Katta maʼlumotlar jadvalini formulalarsiz guruhlab jamlovchi interaktiv hisobot jadvali.' },
      { term: 'PivotChart', definition: 'PivotTable bilan bog‘langan va filtr o‘zgarganda birga yangilanadigan diagramma.' },
      { term: 'Slicer', definition: 'PivotTable va PivotChart ni bir klik bilan filtrlash uchun vizual tugmalar paneli.' },
      { term: 'Values maydoni', definition: 'Sum, Count, Average kabi statistik amallar bajariladigan sonli maydon.' },
    ],
    steps: [
      '1. PivotTable ning 4 ta hududini (`Rows`, `Columns`, `Values`, `Filters`) eslang.',
      '2. `Slicer` va `Refresh` vazifasini ko‘ring.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Savdo jadvalida `Viloyat`, `Oy`, `Mahsulot`, `Narx` ustunlari bor. Har bir viloyatning oylar kesimidagi jami daromadini ko‘rish uchun maydonlarni 4 hududga qanday joylashtiramiz?',
        expected: '`Rows`: Viloyat; `Columns`: Oy; `Values`: Sum of Narx; `Filters`: Mahsulot.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l48-g1',
        num: '01',
        title: 'PivotTable maydonlarini joyla',
        topic: 'PivotTable va PivotChart',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'PivotTable qismlarini ularning aniq vazifasiga moslashtiring:',
          pairs: [
            { left: 'Rows (Qatorlar)', right: 'Hisobot chap tomonida guruhlanadigan toifalar (masalan, Shaharlar)' },
            { left: 'Values (Qiymatlar)', right: 'Sum, Count yoki Average hisoblanadigan sonli ustun' },
            { left: 'Slicer', right: 'Hisobotni tez filtrlovchi vizual tugmalar paneli' },
            { left: 'Refresh', right: 'Asosiy jadval o‘zgarganda PivotTable ni yangilash buyrug‘i' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'PivotTable (Jamlovchi jadval) yaratishning eng katta afzalligi nima?',
        options: [
          'Murakkab formulalar yozmasdan katta jadvalni tez guruhlash va umumlashtirish',
          'Tasvirlarni tahrirlash',
          'Faylni parolsiz ochish',
          'Matn shriftini kattalashtirish',
        ],
        answer: 0,
        explanation: 'PivotTable maydonlarni sudrab joylash orqali minglab qatorni sekundlarda tahlil qiladi.',
      },
      {
        prompt: 'Savdo summalarini qo‘shish (`Sum of Summa`) uchun ustunni PivotTable ning qaysi maydoniga tashlash kerak?',
        options: ['Filters', 'Columns', 'Rows', 'Values'],
        answer: 3,
        explanation: 'Sonli hisob-kitoblar (`Sum`, `Count`, `Average`, `Max`) doimo `Values` maydoniga qo‘yiladi.',
      },
      {
        prompt: 'Asosiy xom jadvaldagi narx o‘zgartirilsa, PivotTable natijasi qachon yangilanadi?',
        options: [
          'Hech qachon yangilanmaydi',
          'Refresh (Yangilash) buyrug‘i bosilganda',
          'Kompyuter o‘chirilganda',
          'Print bosilganda',
        ],
        answer: 1,
        explanation: 'PivotTable kesh bilan ishlaydi; manba o‘zgargach Data → Refresh All yoki o‘ng klik → Refresh qilish kerak.',
      },
      {
        prompt: 'PivotTable ni qulay vizual tugmalar orqali filtrlash vositasi qanday nomlanadi?',
        options: ['Name Box', 'Slicer', 'Wrap Text', 'AutoFill'],
        answer: 1,
        explanation: 'Insert Slicer tugmasi interaktiv filtr tugmalar panelini chiqaradi.',
      },
      {
        prompt: 'PivotTable bilan bevosita bog‘lanib, filtr o‘zgarishiga qarab avtomatik yangilanadigan diagramma nima?',
        options: ['SmartArt', 'PivotChart', 'Sparkline', 'WordArt'],
        answer: 1,
        explanation: 'PivotChart bevosita PivotTable maʼlumotlariga tayanadi.',
      },
    ],
    teacherNotes: {
      method: '30 qatorli savdo jadvalidan `Insert → PivotTable` orqali 1 daqiqada hisobot va PivotChart qurib ko‘rsatish.',
      timing: 'Kirish 5 daq, PivotTable 4 hududi 20 daq, Match va mashq 10 daq, Quiz 10 daq.',
      assessment: 'Maydonlarni to‘g‘ri hududlarga joylashtirish.',
      homework: 'Oila xarajatlari jadvalidan Kategoriyalar kesimida PivotTable va PivotChart yasang.',
    },
  },
  {
    id: 'g10-l49',
    grade: 10,
    no: 49,
    part: '3-chorak',
    title: 'Maʼlumotlarni import va eksport qilish',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'CSV', 'TXT', 'PDF'],
    objectives: [
      'O‘quvchi elektron jadvalda tashqi maʼlumotlarni **Import** qilish (`CSV`, `TXT`, `Web`, `Access`) va **Eksport** qilish (`.csv`, `.pdf`, `.xlsx`) farqlarini biladi.',
      'O‘quvchi **`CSV (Comma-Separated Values)`** formatining tuzilishi, ajratgichlar (`comma`, `semicolon`, `tab`) va kodlash (`UTF-8`) ahamiyatini tushunadi.',
    ],
    intro:
      'Bank saytidan yuklangan hisobot, maʼlumotlar bazasidan olingan ro‘yxat yoki Python dasturi natijasi ko‘pincha **`.csv`** formatida keladi. Uni Excel ga buzmasdan qanday yuklash (Import) va boshqa tizimga qanday uzatish (Eksport) kerak?',
    sections: [
      {
        heading: 'CSV va Delimiter (Ajratgich) tushunchasi',
        body: '**CSV (Comma-Separated Values)** — oddiy matn fayli bo‘lib, unda har bir qator jadval qatoriga, ustunlar esa maxsus ajratgich (**Delimiter**: vergul `,`, nuqtali vergul `;` yoki `Tab`) bilan ajratilgan qiymatlarga mos keladi. Masalan: `Ali,10-A,5`. Muhimi: CSV **formulalar, ranglar va diagrammalarni saqlamaydi** — faqat sof qiymatlarni saqlaydi!',
        example: 'Agar o‘zbekcha `o‘`, `g‘` harflari importda "buzilib" ko‘rinsa, `Data → From Text/CSV` da File Origin sifatida **`UTF-8`** tanlanadi!',
      },
      {
        heading: 'Import va Eksport turlari',
        body: '• **Import (`Data → Get Data`)**: `.csv`, `.txt`, veb-sahifa jadvali yoki JSON/XML dan toza jadval olish (Power Query yordamida ustunlarni ajratish — `Text to Columns`).\n• **Eksport (`File → Save As / Export`)**:\n  – **`.xlsx`**: formulalar va formatlashni to‘liq saqlaydi;\n  – **`.csv`**: boshqa dasturlar (Python, SQL, 1C) ga o‘tkazish uchun universal engil format;\n  – **`.pdf`**: chop etish va tahrirlanmaydigan rasmiy hisobot jo‘natish uchun.',
        tip: 'Bitta ustunga yopishib tushgan `Ali;10A;95` matnini `Data → Text to Columns` bilan `;` bo‘yicha 3 ta ustunga ajratish mumkin!',
      },
    ],
    keyTerms: [
      { term: 'CSV', definition: 'Maʼlumotlarni vergul yoki nuqtali vergul bilan ajratib saqlovchi universal matn jadval formati.' },
      { term: 'Delimiter (Ajratgich)', definition: 'Matn faylida ustunlarni bir-biridan ajratuvchi belgi (vergul, `;`, Tab).' },
      { term: 'UTF-8', definition: 'O‘zbekcha va boshqa milliy harflarni buzilmasdan saqlovchi xalqaro matn kodirovkasi.' },
      { term: 'Text to Columns', definition: 'Bitta katakdagi ajratgichli matnni bir nechta ustunlarga bo‘lish vositasi.' },
    ],
    steps: [
      '1. `.xlsx`, `.csv` va `.pdf` formatlari farqini jadvalda taqqoslang.',
      '2. `UTF-8` va `Text to Columns` vazifasini ko‘ring.',
      '3. Quyidagi bo‘shliqni to‘ldirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'O‘quvchi formulali hisobotini `.csv` formatida saqlab yubordi. Qabul qiluvchi faylni ochganda formulalar saqlanadimi?',
        expected: 'Yo‘q! CSV faqat oxirgi hisoblangan matn/son qiymatlarini saqlaydi; formulalar, ranglar va ikkinchi varaqlar yo‘qoladi.',
        difficulty: 'oson',
      },
      {
        task: 'Internetdan olingan CSV da barcha maʼlumotlar vergul bilan bitta `A` ustunga tushib qolgan. Qanday tuzatiladi?',
        expected: '`Data → Text to Columns → Delimited → Comma` tanlanadi (yoki `From Text/CSV` bilan yuklanadi).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l49-g1',
        num: '01',
        title: 'Import va Eksport formatlari',
        topic: 'CSV, UTF-8 va eksport',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Maʼlumotlarni import va eksport qilishga oid bo‘sh joylarni to‘ldiring:',
          template: 'Ustunlari vergul bilan ajratilgan oddiy matnli jadval formati {{0}} deyiladi. Milliy harflar buzilib chiqmasligi uchun importda {{1}} kodirovkasi tanlanadi. Tahrirlanmaydigan bosma hisobot jo‘natish uchun esa {{2}} formatiga eksport qilinadi.',
          blanks: [
            { options: ['CSV', 'PNG', 'MP3'], answer: 'CSV' },
            { options: ['UTF-8', 'BMP', 'RAW'], answer: 'UTF-8' },
            { options: ['PDF', 'EXE', 'BAT'], answer: 'PDF' },
          ],
          hint: 'CSV — matnli jadval; UTF-8 — harf kodirovkasi; PDF — o‘zgarmas hujjat.',
          explanation: 'CSV maʼlumot almashish uchun, UTF-8 harflar to‘g‘ri chiqishi uchun, PDF esa chop etish/yuborish uchun qulay.',
        },
      },
    ],
    quiz: [
      {
        prompt: '`.csv` fayl formatining to‘liq kengaytmasi qaysi?',
        options: ['Common System Variable', 'Comma-Separated Values', 'Computer Sheet View', 'Central Storage Value'],
        answer: 1,
        explanation: 'CSV — Comma-Separated Values (vergul bilan ajratilgan qiymatlar).',
      },
      {
        prompt: 'Jadvalni `.csv` formatida saqlaganda nima YO‘QOLADI?',
        options: [
          'Matnli yozuvlar',
          'Sonlar',
          'Formulalar, katak ranglari, diagrammalar va qo‘shimcha varaqlar',
          'Qatorlar soni',
        ],
        answer: 2,
        explanation: 'CSV oddiy matn fayli bo‘lgani uchun bezaklar, formulalar va ko‘p varaqli tuzilmani saqlamaydi.',
      },
      {
        prompt: 'CSV faylni ochganda `o‘`, `g‘` harflari o‘rniga g‘alati belgilar chiqsa, qaysi sozlamani to‘g‘rilash kerak?',
        options: ['Shrift o‘lchamini', 'Matn kodirovkasini (UTF-8 tanlash)', 'Ekran yorqinligini', 'Qog‘oz o‘lchamini'],
        answer: 1,
        explanation: 'UTF-8 encoding barcha xalqaro va o‘zbekcha harflarni to‘g‘ri o‘qiydi.',
      },
      {
        prompt: 'Bitta ustunga `;` belgisi bilan birlashib tushgan qiymatlarni alohida ustunlarga ajratuvchi Excel buyrug‘i qaysi?',
        options: ['Merge & Center', 'Text to Columns', 'Protect Sheet', 'AutoSum'],
        answer: 1,
        explanation: 'Data → Text to Columns ajratgich (delimiter) asosida matnni ustunlarga bo‘ladi.',
      },
      {
        prompt: 'Hisobotni o‘zgarmaydigan va hamma qurilmada bir xil ko‘rinadigan shaklda eksport qilish uchun eng mos format qaysi?',
        options: ['.pdf', '.txt', '.csv', '.bat'],
        answer: 0,
        explanation: 'PDF hujjat ko‘rinishini va joylashuvini har qanday qurilmada aynan saqlab qoladi.',
      },
    ],
    teacherNotes: {
      method: 'Notepad da oddiy `.csv` yaratib, uni Excel da `From Text/CSV (UTF-8)` orqali ochib ko‘rsatish.',
      timing: 'Kirish 5 daq, CSV/UTF-8 18 daq, FillBlank 10 daq, Quiz 12 daq.',
      assessment: '`.csv` va `.xlsx` farqini to‘g‘ri tushuntirish.',
      homework: '5 qatorli o‘quvchi ro‘yxatini `.csv` da saqlab, Notepad da ochib ko‘ring va tuzilishini daftarga yozing.',
    },
  },
  {
    id: 'g10-l50',
    grade: 10,
    no: 50,
    part: '3-chorak',
    title: 'Grafik va diagrammalar. Modellashtirish. Simulyatorlar',
    kind: 'dars',
    hours: 1,
    tools: ['Excel', 'ChartLab', 'Modellashtirish'],
    objectives: [
      'O‘quvchi maʼlumot xususiyatiga qarab to‘g‘ri diagramma turini (**Bar/Column** taqqoslash, **Line** vaqt bo‘yicha dinamika, **Pie** butunning ulushlari) tanlaydi.',
      'O‘quvchi elektron jadvalda **"What-If" (Agar ... bo‘lsa-chi?) modellashtirish** (Goal Seek, Scenario Manager) va kompyuter simulyatorlari rolini tushunadi.',
    ],
    intro:
      'Jadvaldagi 50 ta raqamdan ko‘ra bitta chiroyli diagramma tendensiyani darhol ko‘rsatadi! Bundan tashqari, Excel yordamida "Agar dollar kursi 5% oshsa, foydamiz qancha o‘zgaradi?" kabi **kompyuter modellarini** sinash mumkin.',
    sections: [
      {
        heading: 'Diagramma turini to‘g‘ri tanlash',
        body: '• **Ustunli diagramma (Column / Bar Chart)**: turli toifalar yoki shaharlar qiymatini **taqqoslash** uchun.\n• **Chiziqli grafik (Line Chart)**: qiymatning **vaqt davomida** (kunlar, oylar, yillar) o‘zgarish dinamikasini ko‘rsatish uchun.\n• **Doiraviy diagramma (Pie Chart)**: yagona butunning **foiz ulushlarini** (100% tarkibini) ko‘rsatish uchun (toifalar 5–6 tadan oshmagani maʼqul).\nHar bir yaxshi diagrammada aniq **Sarlavha**, **X/Y o‘qi nomlari**, **O‘lchov birligi** va **Legenda** bo‘lishi shart.',
        example: 'Oylik harorat o‘zgarishi — `Line Chart`; Davlat budjetining sohalar ulushi — `Pie Chart`; Maktablar sonini taqqoslash — `Bar Chart`.',
      },
      {
        heading: 'Kompyuter modellashtirish va Simulyatorlar',
        body: '**Modellashtirish** — haqiqiy jarayonning (biznes foydasi, ko‘prik yuklamasi, ob-havo) matematik formulasini jadvalda yaratib, turli kirish qiymatlarida natijani oldindan ko‘rish (`What-If Analysis`: Goal Seek). **Simulyatorlar** (parvoz trenajyori, avariya sinovi, kimyoviy reaksiya) esa xavfsiz, arzon va tezkor tajriba o‘tkazish imkonini beradi.',
        example: 'Parvoz simulyatorida uchuvchi real samolyotni xavf ostiga qo‘ymay, bo‘ronda qo‘nishni 100 marta mashq qilishi mumkin!',
        tip: 'Quyidagi `ChartLab` laboratoriyasida o‘quvchilar foiz dinamikasi uchun to‘g‘ri grafikni quring!',
      },
    ],
    keyTerms: [
      { term: 'Line Chart', definition: 'Vaqt davomida uzluksiz o‘zgarish va tendensiyani ko‘rsatuvchi chiziqli grafik.' },
      { term: 'Pie Chart', definition: 'Butun miqdorning tarkibiy qismlari va foiz ulushlarini ko‘rsatuvchi doira diagramma.' },
      { term: 'What-If Modellashtirish', definition: 'Kiruvchi parametrlarni o‘zgartirib, kelajakdagi natijalarni elektron jadvalda bashorat qilish.' },
      { term: 'Simulyator', definition: 'Haqiqiy tizim xatti-harakatini xavfsiz va boshqariladigan virtual muhitda takrorlovchi dastur.' },
    ],
    steps: [
      '1. `Bar`, `Line` va `Pie` diagrammalari qachon ishlatilishini farqlang.',
      '2. `ChartLab` da sarlavha va o‘qlarni to‘g‘ri sozlang.',
    ],
    practice: [
      {
        task: 'Nima uchun haqiqiy samolyotda emas, balki kompyuter parvoz simulyatorida uchuvchilarni tayyorlash afzal?',
        expected: 'Xavfsizlik (halokat xavfi yo‘q), arzonlik (yonilg‘i sarflanmaydi), va istalgan ekstremal ob-havoni bir klik bilan yaratish mumkin.',
        difficulty: 'oson',
      },
      {
        task: '2020–2026 yillar davomida maktab internet tezligining o‘sishini ko‘rsatish uchun Pie Chart mosmi yoki Line Chart?',
        expected: '`Line Chart` — chunki gap vaqt davomidagi o‘zgarish dinamikasi haqida ketmoqda.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l50-g1',
        num: '01',
        title: 'ChartLab: Vaqt dinamikasi grafigi',
        topic: 'Diagrammalarni to‘g‘ri qurish',
        difficulty: 'O‘rta',
        engine: 'chartlab',
        config: {
          prompt: 'Oylik elektr sarfi o‘zgarishini ko‘rsatish uchun mos diagramma turi, X/Y o‘qlari va sarlavhani tanlang:',
          datasetTitle: 'Oylik elektr sarfi',
          data: [
            { label: 'Yanvar', value: 320 },
            { label: 'Fevral', value: 290 },
            { label: 'Mart', value: 240 },
            { label: 'Aprel', value: 195 },
          ],
          correctType: 'line',
          xAxisOptions: ['Oylar', 'KiloVatt', 'Shaharlar'],
          correctXAxis: 'Oylar',
          yAxisOptions: ['Sarf (kVt·soat)', 'Oylar', 'Xona soni'],
          correctYAxis: 'Sarf (kVt·soat)',
          titleOptions: ['Oylik elektr sarfi dinamikasi', 'Aholi tarkibi', 'Kitoblar ro‘yxati'],
          correctTitle: 'Oylik elektr sarfi dinamikasi',
          explanation: 'Vaqt bo‘yicha (Yanvar–Aprel) o‘zgarish dinamikasi uchun Line (chiziqli) grafik eng maqbul tanlovdir!',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Vaqt davomida (masalan, 12 oy ichida) qiymatning o‘sish yoki pasayish tendensiyasini ko‘rsatish uchun qaysi diagramma eng mos?',
        options: ['Pie Chart', 'Line Chart', 'Scatter Plot', 'Radar'],
        answer: 1,
        explanation: 'Line Chart vaqt bo‘yicha dinamikani yaqqol ko‘rsatadi.',
      },
      {
        prompt: 'Butun sinf o‘quvchilarining to‘garaklar bo‘yicha foiz ulushini (100% tarkibini) ko‘rsatishda qaysi diagramma ishlatiladi?',
        options: ['Line Chart', 'Pie Chart (Doiraviy)', 'Histogram', 'Area'],
        answer: 1,
        explanation: 'Pie Chart butunning ulushlarini ko‘rsatish uchun yaratilgan.',
      },
      {
        prompt: 'Kompyuter simulyatsiyasi va modellashtirishning asosiy afzalligi qaysi?',
        options: [
          'Qimmat va xavfli real sinovlarsiz turli stsenariylarni tez tekshirish',
          'Faqat rasm chizish',
          'Kompyuterni elektrsiz ishlatish',
          'Matnlarni tarjima qilish',
        ],
        answer: 0,
        explanation: 'Simulyatorlar xavfli, qimmat yoki uzoq vaqt oladigan jarayonlarni xavfsiz modellashtiradi.',
      },
      {
        prompt: 'Excelda kerakli yakuniy natijani olish uchun kiruvchi katak qanday qiymatda bo‘lishini teskari topuvchi vosita nima?',
        options: ['Goal Seek', 'AutoFit', 'Format Painter', 'Merge'],
        answer: 0,
        explanation: 'Goal Seek (What-If Analysis) belgilangan maqsadga yetish uchun boshlang‘ich parametrni avtomatik topadi.',
      },
      {
        prompt: 'Diagrammada ranglar yoki chiziqlar qaysi maʼlumot qatoriga tegishli ekanini tushuntiruvchi blok qanday nomlanadi?',
        options: ['Formula Bar', 'Legend (Legenda)', 'Gridlines', 'Cell'],
        answer: 1,
        explanation: 'Legend diagrammadagi har bir rang/belgining maʼnosini izohlaydi.',
      },
    ],
    teacherNotes: {
      method: 'ChartLab da noto‘g‘ri diagramma turi (masalan, dinamikaga Pie qo‘yish) nima uchun yomonligini tushuntirish.',
      timing: 'Kirish 5 daq, Diagramma turlari 15 daq, Modellashtirish 10 daq, ChartLab & Quiz 15 daq.',
      assessment: 'ChartLab va simulyator afzalliklari javoblari.',
      homework: 'Excelda kichik oila budjeti modeli (`Daromad - Xarajat`) va Pie Chart tuzing.',
    },
  },
  {
    id: 'g10-l51',
    grade: 10,
    no: 51,
    part: '3-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Excel'],
    objectives: [
      'O‘quvchi 3-chorakning barcha mavzulari: Validatsiya, Data Validation, Filter/Sort, PivotTable, CSV Import/Eksport, Diagrammalar va Modellashtirish bo‘yicha bilimlarini sinaydi.',
    ],
    intro:
      '3-chorak yakuniy nazorat ishi! Validatsiya turlari, filtrlash (`SUBTOTAL`), PivotTable, CSV/UTF-8 va diagramma tanlash bo‘yicha bilimlaringizni sinab ko‘ring.',
    sections: [
      {
        heading: '3-chorak yakuniy takrorlash',
        body: '• **Validatsiya**: Range, Length, Type, Format, Presence, List + Excel `Data Validation` (Settings, Input Message, Error Alert).\n• **Tahlil**: Multi-level Sort, Filter + `SUBTOTAL`, PivotTable (Rows, Columns, Values, Filters), PivotChart.\n• **Maʼlumot almashish va Grafik**: CSV (`UTF-8`), PDF, Bar/Line/Pie diagrammalar, What-If modellashtirish.',
        example: 'Dinamika → Line; Ulushlar → Pie; Taqqoslash → Column/Bar.',
      },
    ],
    keyTerms: [
      { term: 'Data Validation', definition: 'Kiritilayotgan qiymatlarni mantiqiy qoidalar bilan cheklash.' },
      { term: 'PivotTable', definition: 'Katta jadvallarni tez guruhlab tahlil qilish vositasi.' },
      { term: 'CSV (UTF-8)', definition: 'Milliy harflarni saqlab qoluvchi vergul bilan ajratilgan matn jadvali.' },
      { term: 'SUBTOTAL', definition: 'Filtrlangan jadvalning faqat ko‘rinayotgan qatorlarini hisoblash.' },
    ],
    steps: [
      '1. Krossvordda 3-chorak terminlarini toping.',
      '2. 5 ta nazorat testini bajaring.',
    ],
    practice: [
      {
        task: 'CSV fayl ochilganda o‘zbek harflari buzilsa qaysi kodirovka tanlanadi va nima uchun?',
        expected: '`UTF-8` kodirovkasi tanlanadi, chunki u barcha milliy va Unicode belgilarini to‘g‘ri aks ettiradi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l51-g1',
        num: '01',
        title: '3-chorak nazorat krossvordi',
        topic: 'Elektron jadval atamalari',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '3-chorak elektron jadval mavzulari bo‘yicha asosiy terminlarni kiriting:',
          clues: [
            { id: '1', clue: 'Vergul bilan ajratilgan qiymatlar fayl kengaytmasi (3 harf)', answer: 'CSV' },
            { id: '2', clue: 'Vaqt bo‘yicha o‘zgarishni ko‘rsatuvchi chiziqli grafik turi', answer: 'LINE' },
            { id: '3', clue: 'Butunning foiz ulushini ko‘rsatuvchi doiraviy diagramma', answer: 'PIE' },
            { id: '4', clue: 'PivotTable ni tugmalar bilan tezkor filtrlaydigan panel', answer: 'SLICER' },
          ],
          hint: 'CSV, LINE, PIE, SLICER so‘zlarini bosh harfda kiriting.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Katakda tayyor variantlardan tanlash imkonini beruvchi ro‘yxat (Drop-down) Data Validation ning qaysi turi bilan yaratiladi?',
        options: ['Whole number', 'List', 'Text length', 'Date'],
        answer: 1,
        explanation: 'Allow → List tanlanganda katak yonida ochiluvchi ro‘yxat paydo bo‘ladi.',
      },
      {
        prompt: 'Turli viloyatlardagi maktablar sonini o‘zaro taqqoslash uchun eng qulay diagramma qaysi?',
        options: ['Column / Bar Chart', 'Pie Chart (30 ta viloyat uchun)', 'Scatter', 'Stock'],
        answer: 0,
        explanation: 'Toifalar o‘rtasidagi miqdorlarni aniq solishtirish uchun ustunli (Bar/Column) diagramma eng yaxshisi.',
      },
      {
        prompt: 'Filtrlangan jadvalda faqat ko‘rinayotgan kataklarni qo‘shadigan funksiya qaysi?',
        options: ['SUM', 'SUBTOTAL', 'COUNTIF', 'ROUND'],
        answer: 1,
        explanation: 'SUBTOTAL filtrlangan yashirin qatorlarni hisobga qo‘shmaydi.',
      },
      {
        prompt: 'Parol kamida 8 ta belgidan iborat bo‘lishi sharti qaysi validatsiya turiga kiradi?',
        options: ['Range Check', 'Length Check', 'Presence Check', 'Lookup Check'],
        answer: 1,
        explanation: 'Belgilar sonini tekshirish — Length Check.',
      },
      {
        prompt: 'PivotTable da guruhlanadigan qator nomlari (masalan, "Filiallar") qaysi hududga qo‘yiladi?',
        options: ['Values', 'Rows', 'Formula Bar', 'Name Box'],
        answer: 1,
        explanation: 'Rows hududi chap tomondagi guruh qatorlarini hosil qiladi.',
      },
    ],
    teacherNotes: {
      method: 'Nazorat ishi natijalarini tahlil qilib, keyingi takrorlash darsida qiyin mavzularni yechish.',
      timing: 'Kirish 5 daq, Krossvord 15 daq, Nazorat testi 20 daq, Tahlil 5 daq.',
      assessment: 'Test va krossvord natijalari asosida chorak bahosi.',
      homework: '3-chorakda o‘tilgan barcha funksiyalar ro‘yxatini konspekt qiling.',
    },
  },
  {
    id: 'g10-l52',
    grade: 10,
    no: 52,
    part: '3-chorak',
    title: 'Takrorlash',
    kind: 'takrorlash',
    hours: 1,
    tools: ['Excel', 'Formulalar', 'Validatsiya', 'PivotTable'],
    objectives: [
      'O‘quvchi 3-chorakda o‘rganilgan elektron jadval ko‘nikmalarini (`$A$1`, `VLOOKUP`, `INDEX/MATCH`, `COUNTIF/SUMIF`, `Data Validation`, `PivotTable`, `ChartLab`) umumlashtirib mustahkamlaydi.',
    ],
    intro:
      '3-chorakni yakunlashdan oldin barcha kuchli Excel vositalarini bitta umumiy takrorlash laboratoriyasida mustahkamlaymiz. Bu bilimlar 4-chorakdagi **Maʼlumotlar bazasi** darslariga mustahkam poydevor bo‘ladi!',
    sections: [
      {
        heading: '3-chorak bo‘yicha oltin qoidalar xulosasi',
        body: '1) Formula doim `=` bilan boshlanadi; o‘zgarmas katakka **`$A$1`** qo‘ying.\n2) Qidiruvda `VLOOKUP` faqat o‘ngga qaraydi (`FALSE` — aniq moslik); **`INDEX + MATCH`** esa istalgan tomonga ishlaydi.\n3) Shartli sanash va yig‘ish: `COUNTIF`, `SUMIF` (`"mezon"` qo‘shtirnoqda!).\n4) Maʼlumot tozaligi: `Data Validation` + `Protect Sheet` (avval kiritiladigan katakni Unlock qiling!).\n5) Tahlil: `Filter` + `SUBTOTAL`, `PivotTable` va to‘g‘ri `Chart`.',
        example: 'Agar 3-chorakning ushbu 5 qoidasini bilsangiz, istalgan maktab yoki biznes jadvalini bemalol avtomatlashtira olasiz!',
      },
    ],
    keyTerms: [
      { term: '$A$1', definition: 'Nusxalanishda joyini o‘zgartirmaydigan absolyut murojaat.' },
      { term: 'INDEX + MATCH', definition: 'Chap va o‘ng ustunlardan ishonchli qidiruvchi funksiya juftligi.' },
      { term: 'Data Validation', definition: 'Xato maʼlumot kiritilishini oldindan to‘xtatuvchi qoida.' },
      { term: 'PivotTable', definition: 'Tezkor guruhlash va hisobot tuzish jadvali.' },
    ],
    steps: [
      '1. 5 ta oltin qoidani ko‘zdan kechiring.',
      '2. Tezkor `Flashcards` orqali barcha funksiyalarni takrorlang.',
      '3. Yakuniy 5 ta takrorlash savolini ishlang.',
    ],
    practice: [
      {
        task: 'Qaysi vazifa uchun `VLOOKUP` o‘rniga `INDEX + MATCH` tanlash shart va nima uchun?',
        expected: 'Qidirilayotgan ustun natija ustunidan o‘ngda bo‘lganda (chapga qidirish) yoki jadvalga yangi ustunlar tez-tez qo‘shiladigan hollarda.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l52-g1',
        num: '01',
        title: 'Excel Super Kartochkalari',
        topic: '3-chorakni umumlashtirish',
        difficulty: 'O‘rta',
        engine: 'flashcards',
        config: {
          prompt: 'Har bir karta ustiga bosib taʼrif va misolini takrorlang:',
          cards: [
            { term: '=$D$1', definition: 'Absolyut murojaat — formula tortilganda ham D1 katak joyida qoladi.', example: '=B2*$D$1' },
            { term: 'VLOOKUP(..., FALSE)', definition: 'Vertikal jadvalning 1-ustunidan aniq moslikni izlaydi.', example: '=VLOOKUP(A2,$E$2:$G$10,3,FALSE)' },
            { term: 'INDEX + MATCH', definition: 'MATCH tartib raqamini topadi, INDEX esa qiymatni olib beradi.', example: '=INDEX(A2:A10, MATCH(F2,D2:D10,0))' },
            { term: 'COUNTIF / SUMIF', definition: 'Berilgan shartga mos kataklarni sanaydi yoki qo‘shadi.', example: '=COUNTIF(B2:B20, ">=80")' },
            { term: 'SUBTOTAL(9, ...)', definition: 'Filtrlangan jadvaldagi faqat ko‘rinayotgan qatorlarni jamlaydi.', example: '=SUBTOTAL(9, C2:C100)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Elektron jadvalda o‘zbekcha harfli CSV faylni to‘g‘ri ochish uchun qaysi kodirovka tanlanadi?',
        options: ['ASCII', 'UTF-8', 'BMP', 'PDF'],
        answer: 1,
        explanation: 'UTF-8 kodirovkasi o‘zbekcha harflarni buzmasdan ochadi.',
      },
      {
        prompt: 'Yaxlitlashda `=ROUNDUP(3.01, 0)` qaysi qiymatni beradi?',
        options: ['3', '3.1', '4', '0'],
        answer: 2,
        explanation: 'ROUNDUP kichik kasrni ham doim yuqoriga (`4` ga) ko‘taradi.',
      },
      {
        prompt: 'Katakda faqat "Ha" va "Yo‘q" qiymatlari tanlanishi uchun Data Validation da qaysi tur qo‘llanadi?',
        options: ['Whole number', 'List', 'Decimal', 'Time'],
        answer: 1,
        explanation: 'List ochiluvchi ro‘yxat yaratadi.',
      },
      {
        prompt: 'Qaysi diagramma turi vaqt davomidagi o‘zgarish dinamikasini eng yaxshi ko‘rsatadi?',
        options: ['Line Chart', 'Pie Chart', 'Scatter', 'Radar'],
        answer: 0,
        explanation: 'Chiziqli grafik (Line Chart) vaqt kesimidagi dinamika uchun yaratilgan.',
      },
      {
        prompt: 'PivotTable da hisoblanadigan sonlar (`Sum`, `Count`) qayerga joylashtiriladi?',
        options: ['Rows', 'Columns', 'Values', 'Filters'],
        answer: 2,
        explanation: 'Statistik hisoblar har doim Values hududiga tashlanadi.',
      },
    ],
    teacherNotes: {
      method: 'Chorak yakunida eng ko‘p xato qilingan mavzular (abs. murojaat, INDEX+MATCH, Custom validation) ni qayta ko‘rish.',
      timing: 'Takrorlash 15 daq, Flashcards 15 daq, Quiz va yakun 15 daq.',
      assessment: 'Takrorlash testi va faollik ballari.',
      homework: '4-chorak — Relyatsion maʼlumotlar bazasi mavzusiga kirish uchun kundalik hayotdan jadval misollarini o‘ylab keling.',
    },
  },
];
