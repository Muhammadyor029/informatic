import type { Lesson } from './types';

export const GRADE_11_Q4B: Lesson[] = [
  {
    id: 'g11-l61',
    grade: 11,
    no: 61,
    part: '4-chorak',
    title: 'Oʻzgaruvchilar bilan ishlash. Maʼlumot turlari.',
    kind: 'dars',
    hours: 1,
    tools: ['JavaScript', 'let / const / Data Types'],
    objectives: [
      'O‘quvchi JavaScript da o‘zgaruvchi eʼlon qilish kalit so‘zlari (**`let`**, **`const`**, eskirgan `var`) va nomlash qoidalarini (camelCase) biladi.',
      'O‘quvchi asosiy **Maʼlumot turlari** (**`string`, `number`, `boolean`, `undefined`, `null`, `object`**) ni hamda **`typeof`** operatorini amalda qo‘llaydi.',
    ],
    intro:
      'Har qanday dastur xotirada maʼlumotlarni saqlab turishi kerak — foydalanuvchi ismi, o‘yin balli, tizimga kirgan-kirmaganligi. Buning uchun nomlangan qutichalar — **O‘zgaruvchilar (Variables)** va **Maʼlumot turlari (Data Types)** ishlatiladi!',
    sections: [
      {
        heading: '`let`, `const` va o‘zgaruvchi nomlash qoidalari',
        body: '• **`const`** (o‘zgarmas): qiymati qayta tayinlanmaydigan o‘zgaruvchi (masalan, `const PI = 3.14;`, `const ism = "Ali";`). Zamonaviy JS da avvalo `const` ishlatiladi!\n• **`let`**: keyinchalik qiymati o‘zgaradigan o‘zgaruvchi (masalan, `let ball = 0; ball = ball + 10;`).\n• **Nomlash qoidalari**: harf, `_` yoki `$` bilan boshlanadi (raqam bilan boshlanmaydi!), probel qo‘yilmaydi, kalit so‘zlar (`let`, `if`) ishlatilmaydi. Odatda **camelCase** (`oquvchiYoshi`) qo‘llanadi.',
      },
      {
        heading: 'JavaScript ning asosiy maʼlumot turlari va `typeof`',
        body: '• **`string`** (matn): qo‘shtirnoq ichida (`"Salom"`, `\'11-sinf\'`, `` `Test` ``).\n• **`number`** (son): butun va o‘nli sonlar (`25`, `3.14`, `-7`).\n• **`boolean`** (mantiqiy): faqat `true` (rost) yoki `false` (yolg‘on).\n• **`undefined`**: eʼlon qilingan, lekin qiymat berilmagan (`let x;` → `undefined`).\n• **`null`**: ataylab qo‘yilgan “bo‘sh qiymat”.\n• **`typeof`** operatori qiymat turini aniqlaydi: `typeof 42` → `"number"`, `typeof "42"` → `"string"`.',
        tip: 'Ehtiyot bo‘ling: `"15"` (qo‘shtirnoq ichida) — son emas, **`string`** (matn)! `"15" + 5` natijasi `"155"` chiqadi, `20` emas!',
      },
    ],
    keyTerms: [
      { term: 'const vs let', definition: '`const` qayta qiymat olmaydigan o‘zgarmas; `let` esa qiymati o‘zgaruvchan konteyner.' },
      { term: 'string / number / boolean', definition: 'JavaScript dagi matn, son va mantiqiy (true/false) asosiy turlar.' },
      { term: 'undefined vs null', definition: '`undefined` — qiymat hali berilmagan; `null` — ataylab bo‘sh deb belgilangan qiymat.' },
      { term: 'typeof', definition: 'O‘zgaruvchi yoki qiymatning maʼlumot turini satr ko‘rinishida qaytaruvchi operator.' },
    ],
    steps: [
      '1. `const` va `let` qachon ishlatilishini ajrating.',
      '2. `"100"` (string) va `100` (number) farqini tekshiring.',
      '3. Quyidagi koddagi xatoni topish (`codebug`) va moslashtirish mashqlarini bajaring.',
    ],
    practice: [
      {
        task: 'Quyidagi qiymatlar uchun `typeof` nimani qaytaradi: `let a = 17;`, `let b = "17";`, `let c = false;`, `let d;`?',
        expected: 'a → "number", b → "string", c → "boolean", d → "undefined".',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l61-g1',
        num: '01',
        title: 'O‘zgaruvchi xatosini toping! (CodeBug)',
        topic: 'const va let xatosi',
        difficulty: 'O‘rta',
        engine: 'codebug',
        config: {
          prompt: 'O‘yin ballini oshirmoqchi bo‘lgan JavaScript kodida Runtime xatolik (`Assignment to constant variable`) chiqmoqda. Xatoli qatorni toping:',
          lines: [
            'const oyinchi = "Jasur";',
            'const ball = 10;',
            'ball = ball + 5;',
            'console.log(oyinchi, ball);',
          ],
          buggyLine: 1,
          options: [
            '2-qator: `ball` keyin o‘zgarishi kerak bo‘lgani uchun `const` o‘rniga `let ball = 10;` yozilishi shart',
            '1-qator: ism raqam bo‘lishi kerak',
            '3-qator: `+` o‘rniga `*` yoziladi',
            '4-qator: `console.log` ishlamaydi',
          ],
          answer: '2-qator: `ball` keyin o‘zgarishi kerak bo‘lgani uchun `const` o‘rniga `let ball = 10;` yozilishi shart',
          explanation: '`const` bilan yaratilgan o‘zgaruvchiga keyinchalik `=` bilan yangi qiymat berib bo‘lmaydi; o‘zgaruvchi hisoblagichlar `let` bilan ochiladi.',
        },
      },
      {
        id: 'g11-l61-g2',
        num: '02',
        title: 'Maʼlumot turlarini moslang',
        topic: 'JS Data Types',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir JavaScript qiymatini uning aniq turiga bog‘lang:',
          pairs: [
            { left: '"Toshkent"', right: 'string (Matn turi)' },
            { left: '98.5', right: 'number (Son turi)' },
            { left: 'true / false', right: 'boolean (Mantiqiy tur)' },
            { left: 'let x; (qiymat berilmagan)', right: 'undefined (Aniqlanmagan)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Qiymati dastur davomida o‘zgarib boradigan (masalan, hisoblagich `score`) o‘zgaruvchi qaysi kalit so‘z bilan eʼlon qilinadi?',
        options: ['let', 'const', 'fixed', 'int'],
        answer: 0,
        explanation: 'Qayta tayinlanadigan o‘zgaruvchilar `let` bilan, o‘zgarmas qiymatlar esa `const` bilan ochiladi.',
      },
      {
        prompt: '`typeof "2026"` ifodasi konsolga nimani chiqaradi?',
        options: ['"string"', '"number"', '"boolean"', '"undefined"'],
        answer: 0,
        explanation: 'Qo‘shtirnoq ichiga olingan har qanday belgi, hatto raqam bo‘lsa ham, `string` turiga kiradi.',
      },
      {
        prompt: 'Qaysi o‘zgaruvchi nomi JavaScript qoidalariga ko‘ra XATO (yaroqsiz)?',
        options: ['let 1sinf = 11;', 'let sinf1 = 11;', 'let _sinf = 11;', 'let $sinf = 11;'],
        answer: 0,
        explanation: 'O‘zgaruvchi nomi hech qachon raqam (`1`) bilan boshlanishi mumkin emas.',
      },
      {
        prompt: 'Foydalanuvchining imtihondan o‘tgan-o‘tmaganligini (`Ha` / `Yo‘q`) saqlash uchun eng mos maʼlumot turi qaysi?',
        options: ['boolean', 'number', 'undefined', 'null'],
        answer: 0,
        explanation: 'Ikki holatli mantiqiy qiymat (`true` / `false`) uchun `boolean` ishlatiladi.',
      },
      {
        prompt: '`let a;` deb yozib, qiymat bermasak `a` ning qiymati va turi nima bo‘ladi?',
        options: ['undefined', '0', '""', 'null'],
        answer: 0,
        explanation: 'Qiymat tayinlanmagan o‘zgaruvchi avtomatik `undefined` bo‘ladi.',
      },
    ],
    teacherNotes: {
      method: 'Brauzer konsolida `typeof`, `const` xatosi va `"5" + 3` vs `5 + 3` farqini jonli ko‘rsating.',
      timing: 'let/const 15 daqiqa, Maʼlumot turlari 15 daqiqa, CodeBug va test 15 daqiqa.',
      assessment: 'O‘quvchi `const` vs `let` va `string` vs `number` ni xatosiz ajratishi.',
      homework: 'O‘zingiz haqingizda 5 xil turdagi (`string`, `number`, `boolean`, `undefined`, `null`) 5 ta o‘zgaruvchi yozing.',
    },
  },
  {
    id: 'g11-l62',
    grade: 11,
    no: 62,
    part: '4-chorak',
    title: 'Operatorlar. Stringlarni boshqarish.',
    kind: 'dars',
    hours: 1,
    tools: ['JavaScript', 'Operators / String Methods'],
    objectives: [
      'O‘quvchi JavaScript da **arifmetik** (`+ - * / % **`), **taqqoslash** (`===` vs `==`, `!==`, `>=`) va **mantiqiy** (`&&`, `||`, `!`) operatorlarni xatosiz ishlatadi.',
      'O‘quvchi matnlar (**String**) bilan ishlashning asosiy xossa va metodlarini (`.length`, `.toUpperCase()`, `.toLowerCase()`, `.trim()`, `.slice()`, `.includes()`, Template literals `` `Salom ${ism}` ``) amalda qo‘llaydi.',
    ],
    intro:
      'Ro‘yxatdan o‘tishda foydalanuvchi ismining boshida ortiqcha probel qolib ketsa, parol 8 belgidan qisqa bo‘lsa yoki matndan kerakli so‘zni ajratib olish kerak bo‘lsa nima qilamiz? **Operatorlar** va **String metodlari** hamma muammoni bir qator kodda hal qiladi!',
    sections: [
      {
        heading: 'Muhim JavaScript Operatorlari',
        body: '• **Arifmetik**: `+`, `-`, `*`, `/`, **`%` (qoldiq: `10 % 3 === 1` — juft/toqni topishda `n % 2 === 0`)**, `**` (daraja: `2 ** 3 === 8`).\n• **Qatʼiy taqqoslash (`===` va `!==`)**: `5 == "5"` (`true` — turni aylantirib aldaydi!), lekin **`5 === "5"` (`false` — ham qiymat, ham turni tekshiradi!)**. Doim **`===`** ishlating!\n• **Mantiqiy**: `&&` (VA — ikkisi ham rost), `||` (YOKI — kamida bittasi rost), `!` (EMAS — teskari qiladi).',
      },
      {
        heading: 'Stringlarni boshqarish (Metodlar va Template Literals)',
        body: 'Tasavvur qiling: `const matn = "  Axborot Texnologiyasi  ";`\n• **`.length`** (xossa!): belgilar sonini qaytaradi (masalan, `"Salom".length === 5`).\n• **`.trim()`**: boshidagi va oxiridagi ortiqcha bo‘sh joylarni (probellarni) kesib tashlaydi.\n• **`.toUpperCase()` / `.toLowerCase()`**: hamma harfni KATTA yoki kichik qiladi.\n• **`.slice(start, end)`**: matndan bo‘lak qirqib oladi (`"Informa".slice(0, 4)` → `"Info"`).\n• **`.includes("so‘z")`**: matn ichida shu bo‘lak bor-yo‘qligini (`true/false`) tekshiradi.\n• **Template Literals (`` `...` ``)**: `` `Salom, ${ism}! Ball: ${ball}` `` — `+` siz qulay matn yig‘ish!',
        tip: 'String metodlari asl o‘zgaruvchini o‘zgartirmaydi — ular *yangi matn* qaytaradi!',
      },
    ],
    keyTerms: [
      { term: '=== (Qatʼiy tenglik)', definition: 'Ham qiymatni, ham maʼlumot turini solishtiruvchi xavfsiz tenglik operatori.' },
      { term: '% (Modulo)', definition: 'Bo‘lishdan qolgan qoldiqni qaytaruvchi operator (juft/toq sonni tekshirish uchun).' },
      { term: '.length & .slice()', definition: '`.length` matn uzunligini, `.slice(a, b)` esa belgilangan indeks oralig‘ini kesib oladi.' },
      { term: 'Template Literal', definition: 'Teskari apostrof (`` ` ``) va `${...}` yordamida matn ichiga o‘zgaruvchi joylash usuli.' },
    ],
    steps: [
      '1. `==` va `===` orasidagi farqni eslab qoling.',
      '2. `0` dan boshlanadigan string indekslari bo‘yicha `.slice(start, end)` natijasini hisoblang.',
      '3. Quyidagi moslashtirish va bo‘sh joyni to‘ldirish mashqlarini bajaring.',
    ],
    practice: [
      {
        task: '`const s = "informatika";` berilgan. `s.slice(0, 4).toUpperCase()` natijasi nima chiqadi?',
        expected: '`"INFO"` (`0,1,2,3`-indekslar `"info"` bo‘ladi va `toUpperCase()` uni katta harfga o‘tkazadi).',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l62-g1',
        num: '01',
        title: 'String metodlari va Operatorlar',
        topic: 'Matnni qayta ishlash',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Metod yoki operatorni uning aniq natijasi bilan moslang:',
          pairs: [
            { left: '"  salom  ".trim()', right: '"salom" (chetki probellarni olib tashlaydi)' },
            { left: '"JavaScript".slice(0, 4)', right: '"Java" (0 dan 4-indeksgacha kesadi)' },
            { left: '15 % 4', right: '3 (bo‘lishdan qolgan qoldiq)' },
            { left: '10 === "10"', right: 'false (turlari turlicha: number vs string)' },
          ],
        },
      },
      {
        id: 'g11-l62-g2',
        num: '02',
        title: 'Template literal va metodlarni to‘ldiring',
        topic: 'JS String syntax',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Koddagi bo‘sh o‘rinlarni to‘g‘ri operator va metod bilan to‘ldiring:',
          template: 'Parol kamida 8 belgi ekanini tekshirish uchun `parol.{{0}} >= 8` yoziladi. Matn ichida `"@"` borligini bilish uchun esa `email.{{1}}("@")` ishlatiladi.',
          blanks: [
            { options: ['length', 'size()', 'count'], answer: 'length' },
            { options: ['includes', 'slice', 'trim'], answer: 'includes' },
          ],
          hint: 'JS da satr uzunligi `length` xossasi (qavssiz!); qidirish esa `includes(...)`.',
          explanation: '`.length` funksiya emas xossa bo‘lgani uchun qavs `()` qo‘yilmaydi; `.includes()` esa true/false qaytaradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'JavaScript da `10 === "10"` va `10 == "10"` ifodalarining natijalari qanday?',
        options: [
          '`10 === "10"` bu `false`, `10 == "10"` esa `true`',
          'Ikkalasi ham `true`',
          'Ikkalasi ham `false`',
          'Sintaksis xatosi chiqadi',
        ],
        answer: 0,
        explanation: '`===` qatʼiy tekshiradi (number !== string), `==` esa turni majburan tenglab qo‘yadi.',
      },
      {
        prompt: '`"Salom dunyo!".includes("dunyo")` natijasi nima?',
        options: ['true', 'false', '6', '"dunyo"'],
        answer: 0,
        explanation: '`.includes()` qidirilayotgan so‘z matn ichida topilsa `true` qaytaradi.',
      },
      {
        prompt: '`const son = 17; const qoldiq = son % 5;` bajarilganda `qoldiq` nechaga teng?',
        options: ['2', '3', '3.4', '12'],
        answer: 0,
        explanation: '17 ni 5 ga bo‘lganda 3 butun va 2 qoldiq qoladi.',
      },
      {
        prompt: 'Foydalanuvchi `"  ali@mail.uz  "` deb probellar bilan kiritgan matnni tozalash uchun qaysi metod ishlatiladi?',
        options: ['.trim()', '.slice()', '.length', '.toUpperCase()'],
        answer: 0,
        explanation: '`.trim()` matn boshi va oxiridagi bo‘sh joylarni olib tashlaydi.',
      },
      {
        prompt: '`"Vesna".slice(1, 4)` qaysi matnni qaytaradi?',
        options: ['"esn"', '"Vesn"', '"esna"', '"sn"'],
        answer: 0,
        explanation: 'Indekslar 0 dan boshlanadi: 0=V, 1=e, 2=s, 3=n (4-indeks kirmaydi) → `"esn"`.',
      },
    ],
    teacherNotes: {
      method: 'Parol va email validatsiyasini `.trim()`, `.length` va `.includes("@")` orqali 3 qatorda yozib ko‘rsating.',
      timing: 'Operatorlar (`===`, `%`, `&&`) 15 daqiqa, String metodlari 15 daqiqa, mashqlar va test 15 daqiqa.',
      assessment: 'O‘quvchi `===` ni va 0-indeksli `.slice()` ni xatosiz hisoblay olishi.',
      homework: 'Foydalanuvchi F.I.Sh. idan bosh harflarni (masalan, `"Ali Valiyev"` → `"A.V."`) ajratib beruvchi JS ifodasini yozing.',
    },
  },
  {
    id: 'g11-l63',
    grade: 11,
    no: 63,
    part: '4-chorak',
    title: 'Array. Shartli buyruqlar.',
    kind: 'dars',
    hours: 1,
    tools: ['JavaScript', 'Arrays / if-else / switch'],
    objectives: [
      'O‘quvchi **Massiv (Array)** yaratish (`[]`), `0`-indeksdan murojaat qilish, `.length`, `.push()`, `.pop()` metodlarini biladi.',
      'O‘quvchi shartli buyruqlar (**`if / else if / else`** va **`switch`**) yordamida qaror qabul qiluvchi algoritmlar yozadi hamda koddagi mantiqiy xatolarni tuzatadi.',
    ],
    intro:
      '30 nafar o‘quvchining ismini 30 ta alohida `o1, o2, ..., o30` o‘zgaruvchiga yozish o‘rniga ularni bitta tartibli ro‘yxat — **Array (Massiv)** ga joylaymiz! So‘ngra **Shartli buyruqlar (`if/else`)** bilan har biriga baho qo‘yamiz.',
    sections: [
      {
        heading: 'Array (Massiv) bilan ishlash',
        body: '• **Yaratish va murojaat**: `const fanlar = ["Matematika", "Informatika", "Fizika"];`\n  Indekslar **`0`** dan boshlanadi: `fanlar[0]` → `"Matematika"`, oxirgi element: `fanlar[fanlar.length - 1]`.\n• **Asosiy metodlar**:\n  - `fanlar.push("Ingliz tili")` — oxiriga yangi element qo‘shadi;\n  - `fanlar.pop()` — oxirgi elementni olib tashlaydi;\n  - `fanlar.includes("Fizika")` — massivda bor-yo‘qligini tekshiradi.',
      },
      {
        heading: 'Shartli buyruqlar: `if / else if / else` va `switch`',
        body: '```js\nif (ball >= 86) {\n  baho = "5 (Aʼlo)";\n} else if (ball >= 71) {\n  baho = "4 (Yaxshi)";\n} else if (ball >= 56) {\n  baho = "3 (Qoniqarli)";\n} else {\n  baho = "2 (Qoniqarsiz)";\n}\n```\n• **Muhim qoida**: shartlar doim **eng yuqori chegaradan pastga** (yoki pastdan yuqoriga) mantiqiy tartibda tekshiriladi!\n• **`switch (kun)`**: bitta o‘zgaruvchini aniq bir nechta qiymatlar (`case 1:`, `case 2:`, `default:`) bilan solishtirishda qulay (`break;` yozishni unutmang!).',
        tip: 'Massivning oxirgi elementiga `arr[arr.length]` deb murojaat qilmang — u `undefined` beradi! Oxirgi indeks har doim `arr.length - 1`!',
      },
    ],
    keyTerms: [
      { term: 'Array (Massiv)', definition: 'Bir nechta qiymatni 0 dan boshlanuvchi indekslar bo‘yicha saqlovchi tartibli ro‘yxat (`[...]`).' },
      { term: '.push() / .pop()', definition: 'Massivning oxiriga element qo‘shish (`push`) va oxiridan o‘chirish (`pop`) metodlari.' },
      { term: 'if / else if / else', definition: 'Mantiqiy shart rost yoki yolg‘onligiga qarab turli kod bloklarini bajaruvchi shart operatori.' },
      { term: 'switch ... case', definition: 'Bitta ifodaning aniq qiymatlariga mos tarmoqni tanlovchi shartli konstruksiya (har bir case oxirida `break`).' },
    ],
    steps: [
      '1. `0` dan boshlanuvchi massiv indekslari va `length - 1` qoidasini tekshiring.',
      '2. `if / else if / else` tarmog‘ida birinchi rost chiqqan shartdan keyin qolganlari tekshirilmasligini tushuning.',
      '3. Quyidagi `codebug` va moslashtirish o‘yinlarini bajaring.',
    ],
    practice: [
      {
        task: '`const ranglar = ["qizil", "yashil"]; ranglar.push("ko‘k");` bajarilgach, `ranglar.length` va `ranglar[2]` nima bo‘ladi?',
        expected: '`ranglar.length` = `3`, `ranglar[2]` = `"ko‘k"`.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l63-g1',
        num: '01',
        title: 'Massiv indeks xatosini toping! (CodeBug)',
        topic: 'Off-by-one bug',
        difficulty: 'O‘rta',
        engine: 'codebug',
        config: {
          prompt: 'Dastur massivdagi oxirgi o‘quvchini chiqarishi kerak, lekin konsolda `undefined` chiqmoqda. Xato qaysi qatorda?',
          lines: [
            'const sinf = ["Aziz", "Madina", "Sardor"];',
            'const oxirgi = sinf[sinf.length];',
            'if (oxirgi !== undefined) {',
            '  console.log("Oxirgi:", oxirgi);',
            '}',
          ],
          buggyLine: 1,
          options: [
            '2-qator: indekslar 0 dan boshlangani uchun `sinf[sinf.length - 1]` bo‘lishi shart',
            '1-qator: massivda kamida 4 ta ism bo‘lishi kerak',
            '3-qator: `if` kerak emas',
            '4-qator: `console.log` ishlamaydi',
          ],
          answer: '2-qator: indekslar 0 dan boshlangani uchun `sinf[sinf.length - 1]` bo‘lishi shart',
          explanation: '3 ta elementli massivda indekslar `0, 1, 2`. `sinf.length` esa `3` ga teng, shuning uchun `sinf[3]` undefined qaytaradi!',
        },
      },
      {
        id: 'g11-l63-g2',
        num: '02',
        title: 'Array va Shartli buyruqlar',
        topic: 'JS mantiq',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'JavaScript buyruqlarini ularning vazifasi bilan moslang:',
          pairs: [
            { left: 'arr.push("yangi")', right: 'Massivning oxiriga yangi element qo‘shadi' },
            { left: 'arr[0]', right: 'Massivning eng birinchi elementini oladi' },
            { left: 'else { ... }', right: 'Yuqoridagi barcha `if` va `else if` lar yolg‘on bo‘lganda ishlaydi' },
            { left: 'break (switch ichida)', right: 'Mos kelgan `case` bajarilgach keyingi case larga o‘tib ketmaslikni to‘xtatadi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '`const mevalar = ["olma", "anor", "uzum"];` massivida `"anor"` nechanchi indeksda turadi?',
        options: ['1', '2', '0', '3'],
        answer: 0,
        explanation: 'Indekslash 0 dan boshlanadi: 0="olma", 1="anor", 2="uzum".',
      },
      {
        prompt: 'Massiv oxiridan oxirgi elementni sug‘urib olib tashlaydigan metod qaysi?',
        options: ['.pop()', '.push()', '.trim()', '.slice(0)'],
        answer: 0,
        explanation: '`.push()` oxiriga qo‘shadi, `.pop()` esa oxiridan olib tashlaydi.',
      },
      {
        prompt: '`let ball = 90; if (ball >= 60) { daraja = "O‘tdi"; } else if (ball >= 85) { daraja = "Aʼlo"; }` kodining mantiqiy xatosi nimada?',
        options: [
          'Birinchi `ball >= 60` sharti rost chiqib `"O‘tdi"` tanlanadi va `ball >= 85` ga hech qachon yetib bormaydi',
          '`else if` umuman ishlamaydi',
          '`ball` string bo‘lishi kerak',
          'Xato yo‘q',
        ],
        answer: 0,
        explanation: 'Kattaroq chegara (`>= 85`) avval yozilishi kerak edi!',
      },
      {
        prompt: '`switch` operatorida bitta `case` oxirida `break;` yozish unutilsa nima bo‘ladi?',
        options: [
          'Keyingi `case` lar ham tekshirilmasdan ketma-ket bajarilib ketadi (Fall-through)',
          'Brauzer yopiladi',
          'Massiv o‘chadi',
          'Hech narsa bo‘lmaydi',
        ],
        answer: 0,
        explanation: '`break` tarmoqni to‘xtatadi, aks holda pastdagi `case` ham ishlab ketadi.',
      },
      {
        prompt: '`const x = [10, 20]; x.push(30);` dan so‘ng `x.length` nechaga teng?',
        options: ['3', '2', '30', '1'],
        answer: 0,
        explanation: 'Yangi element qo‘shilgach massivda 3 ta element bo‘ladi.',
      },
    ],
    teacherNotes: {
      method: 'Baho qo‘yish dasturida shartlar tartibini teskari qo‘yib (`>= 60` birinchi) xato chiqishini o‘quvchilarga toptiring.',
      timing: 'Array metodlari 15 daqiqa, if/else va switch 15 daqiqa, CodeBug va test 15 daqiqa.',
      assessment: 'O‘quvchi 0-indekslashni va `if / else if` shartlar tartibini to‘g‘ri qo‘llashi.',
      homework: 'Haftaning kun raqamiga (`1..7`) qarab nomini chiqaruvchi `switch` kodi yozib keling.',
    },
  },
  {
    id: 'g11-l64',
    grade: 11,
    no: 64,
    part: '4-chorak',
    title: 'Luplar.',
    kind: 'dars',
    hours: 1,
    tools: ['JavaScript', 'for / while / for...of / break'],
    objectives: [
      'O‘quvchi **Takrorlash operatorlari — Luplar (Loops)**: **`for`**, **`while`**, **`do...while`** va massivlar uchun **`for...of`** qachon qo‘llanishini farqlaydi.',
      'O‘quvchi sikl ichida **`break`** va **`continue`** boshqaruv buyruqlarini hamda **cheksiz sikl (Infinite Loop)** xavfini oldini olishni o‘rganadi.',
    ],
    intro:
      'Massivda 1000 ta o‘quvchi bahosi bo‘lsa, o‘rtacha ballni hisoblash uchun 1000 qator kod yozmaymiz! Bir xil amalni yuzlab marta avtomatik takrorlovchi mexanizm — **Luplar (Takrorlanish sikllari)** buning uchun yaratilgan!',
    sections: [
      {
        heading: '`for` va `for...of` luplari (Takrorlanish soni maʼlum bo‘lganda)',
        body: '• **Klassik `for` lupi** 3 qismdan iborat: `for (boshlanish; shart; qadam)`:\n```js\nlet jami = 0;\nconst baholar = [5, 4, 5, 5];\nfor (let i = 0; i < baholar.length; i++) {\n  jami += baholar[i];\n}\n```\n• **`for...of` lupi**: Indeks kerak bo‘lmaganda massiv elementlarini to‘g‘ridan-to‘g‘ri aylanishning eng toza usuli:\n```js\nfor (const b of baholar) { console.log(b); }\n```',
      },
      {
        heading: '`while`, `break`, `continue` va Cheksiz sikl xavfi',
        body: '• **`while (shart)`**: Takrorlanish soni oldindan aniq bo‘lmaganda (masalan, “Foydalanuvchi to‘g‘ri parol kiritmaguncha so‘ra”).\n• **`do...while`**: Kamida 1 marta bajarilib, keyin shartni tekshiradi.\n• **`break`**: Siklni muddatidan oldin BUTUNLAY to‘xtatib chiqib ketadi.\n• **`continue`**: Faqat joriy qadamni tashlab, siklning keyingi qadamiga o‘tadi.\n• **Diqqat!** `while (i < 5)` ichida `i++` yozish esdan chiqsa, shart doim rost qolib **Cheksiz sikl (Infinite Loop)** brauzerni qotirib qo‘yadi!',
        tip: 'Sikl ichida o‘zgaruvchi qiymati o‘zgarishi shart — `for` da `i++`, `while` da shartni yolg‘onga aylantiruvchi qadam borligini doim tekshiring!',
      },
    ],
    keyTerms: [
      { term: 'for lupi', definition: 'Boshlang‘ich qiymat, davom etish sharti va o‘zgarish qadamini bitta qatorda jamlaydigan sikl.' },
      { term: 'while lupi', definition: 'Berilgan mantiqiy shart rost bo‘lib turgan muddat davomida takrorlanadigan sikl.' },
      { term: 'break vs continue', definition: '`break` — sikldan butunlay chiqadi; `continue` — joriy iteratsiyani o‘tkazib yuborib keyingisiga o‘tadi.' },
      { term: 'Infinite Loop', definition: 'Sharti hech qachon false bo‘lmagani uchun to‘xtamay aylanadigan xato sikl.' },
    ],
    steps: [
      '1. `for` va `while` qachon afzal ekanini ajrating.',
      '2. Qadamlar bo‘yicha `break` va `continue` li sikl natijasini qo‘lda hisoblang (Trace Table).',
      '3. Quyidagi kalkulyator (`calc` trace) va moslashtirish o‘yinlarini bajaring.',
    ],
    practice: [
      {
        task: '`for (let i = 1; i <= 5; i++) { if (i === 3) continue; console.log(i); }` konsolga nimalarni chiqaradi?',
        expected: '`1, 2, 4, 5` (chunki `i === 3` bo‘lganda `continue` joriy qadamni tashlab yubordi).',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l64-g1',
        num: '01',
        title: 'Sikl natijasini hisoblang (Trace)',
        topic: 'for lupi tahlili',
        difficulty: 'O‘rta',
        engine: 'calc',
        config: {
          prompt: 'Quyidagi JavaScript sikli bajarilib bo‘lgach, `yigindi` o‘zgaruvchisining qiymati nechaga teng bo‘ladi?\n```js\nlet yigindi = 0;\nfor (let i = 1; i <= 5; i++) {\n  if (i === 4) break;\n  yigindi += i;\n}\n```',
          unit: 'qiymat',
          correctAnswer: 6,
          tolerance: 0,
          steps: [
            'i = 1: yigindi = 0 + 1 = 1',
            'i = 2: yigindi = 1 + 2 = 3',
            'i = 3: yigindi = 3 + 3 = 6',
            'i = 4: `break` ishlaydi va sikl darhol to‘xtaydi! Natija = 6.',
          ],
          hint: 'i=1, 2, 3 qo‘shiladi; i=4 da `break` siklni to‘xtatadi!',
        },
      },
      {
        id: 'g11-l64-g2',
        num: '02',
        title: 'Lup turlari va boshqaruvi',
        topic: 'JavaScript sikllari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Sikl operatorlarini to‘g‘ri tavsifi bilan moslang:',
          pairs: [
            { left: 'for (let i=0; i<10; i++)', right: 'Takrorlanish soni aniq bo‘lganda qo‘llaniladigan hisoblagichli sikl' },
            { left: 'while (shart)', right: 'Takrorlanish soni nomaʼlum, shart rost ekan davom etuvchi sikl' },
            { left: 'for (const x of arr)', right: 'Massiv elementlarini indekssiz oson aylanib chiqish' },
            { left: 'break', right: 'Sikl shartini kutmasdan darhol sikldan chiqib ketish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '`for (let i = 0; i < 4; i++)` sikli necha marta aylanadi?',
        options: ['4 marta (i = 0, 1, 2, 3)', '3 marta', '5 marta', 'Cheksiz'],
        answer: 0,
        explanation: '0, 1, 2, 3 qiymatlarida `i < 4` rost; 4 ga yetganda to‘xtaydi — jami 4 marta.',
      },
      {
        prompt: 'Siklning faqat joriy qadamini o‘tkazib yuborib, keyingi takrorlanishga o‘tuvchi buyruq qaysi?',
        options: ['continue', 'break', 'return', 'switch'],
        answer: 0,
        explanation: '`continue` shu iteratsiyaning qolgan qismini tashlab keyingisiga o‘tadi.',
      },
      {
        prompt: 'Shart noto‘g‘ri bo‘lgan taqdirda ham tanasi kamida 1 marta albatta bajariladigan sikl qaysi?',
        options: ['do ... while', 'while', 'for', 'for...of'],
        answer: 0,
        explanation: '`do...while` avval kod blokini 1 marta bajarib, shartni sikl oxirida tekshiradi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri cheksiz siklga (Infinite Loop) olib keladi?',
        options: [
          'let i = 1; while (i <= 5) { console.log(i); }',
          'for (let i = 1; i <= 5; i++) { console.log(i); }',
          'let i = 5; while (i > 0) { i--; }',
          'for (const x of [1, 2]) { console.log(x); }',
        ],
        answer: 0,
        explanation: 'Birinchi variantda `i++` yozilmagani uchun `i` doim `1` bo‘lib qoladi va `1 <= 5` cheksiz davom etadi!',
      },
      {
        prompt: '`const sonlar = [2, 4, 6];` massivini eng qisqa va tushunarli aylanish usuli qaysi?',
        options: ['for (const s of sonlar) { ... }', 'if (sonlar) { ... }', 'switch (sonlar)', 'slice(sonlar)'],
        answer: 0,
        explanation: '`for...of` to‘g‘ridan-to‘g‘ri massiv qiymatlarini birma-bir beradi.',
      },
    ],
    teacherNotes: {
      method: 'Doskada 3 ustunli Trace Table (`Qadam | i | yigindi`) chizib, siklning har bir aylanishini o‘quvchilar bilan birga kuzating.',
      timing: 'for/for...of 15 daqiqa, while/break/continue 15 daqiqa, trace mashqi va test 15 daqiqa.',
      assessment: 'O‘quvchi kichik sikl uchun Trace Table tuzib, oxirgi qiymatni aniq topa olishi.',
      homework: '1 dan 20 gacha faqat juft sonlar yig‘indisini hisoblaydigan `for` sikli yozing.',
    },
  },
  {
    id: 'g11-l65',
    grade: 11,
    no: 65,
    part: '4-chorak',
    title: 'Funksiyalar.',
    kind: 'dars',
    hours: 1,
    tools: ['JavaScript', 'function / Parameters / return / Arrow'],
    objectives: [
      'O‘quvchi kodni qayta ishlatish (**DRY — Don’t Repeat Yourself**) va modullash uchun **Funksiya** eʼlon qilish hamda chaqirishni biladi.',
      'O‘quvchi **Parametr** vs **Argument**, **`return`** (natija qaytarish vs `console.log`), **Local/Block Scope** va **Arrow Function (`=>`)** larni to‘g‘ri qo‘llaydi.',
    ],
    intro:
      'Dasturda 10 ta joyda chegirma narxini hisoblash kerak bo‘lsa, bitta formulani 10 marta nusxalab yozamizmi? Yo‘q! Formula o‘zgarsa 10 joydan tuzatishga to‘g‘ri keladi. Bitta **Funksiya** yozamiz va kerak joyda chaqiraveramiz!',
    sections: [
      {
        heading: 'Funksiya tuzilishi: Parametr, Argument va `return`',
        body: '```js\nfunction chegirmaNarx(narx, foiz) {   // narx, foiz — Parametrlar\n  const natija = narx - (narx * foiz / 100);\n  return natija;                     // Qiymatni qaytaradi va funksiyani tugatadi\n}\n\nconst tolov = chegirmaNarx(200, 15); // 200, 15 — Argumentlar → natija 170\n```\n• **`return` vs `console.log`**: `console.log` faqat ekranga ko‘rsatadi, lekin hisob-kitobda ishlatib bo‘lmaydi (`undefined` qaytadi). **`return`** esa qiymatni tashqariga uzatadi — `tolov + 10` kabi davom ettirish mumkin!\n• **Scope (Ko‘rinish doirasi)**: funksiya ichida `let/const` bilan ochilgan o‘zgaruvchi (masalan, `natija`) faqat shu funksiya ichidagina ko‘rinadi (Local Scope).',
      },
      {
        heading: 'Standart parametr va Zamonaviy Arrow Function (`=>`)',
        body: '• **Arrow Function (O‘qli funksiya)**: qisqa va zamonaviy ko‘rinish:\n```js\nconst kvadrat = (x) => x * x;\nconst salom = (ism = "Mehmon") => `Salom, ${ism}!`; // Standart parametr\n```\n• **Afzalliklari**: kod ixcham, o‘qilishi oson, har bir funksiya bitta aniq vazifani bajaradi va alohida test (Unit Test) qilish juda qulay!',
        tip: '`return` buyrug‘i ishlashi bilan funksiya darhol to‘xtaydi — `return` dan keyingi qatordagi kod hech qachon bajarilmaydi!',
      },
    ],
    keyTerms: [
      { term: 'Parametr vs Argument', definition: 'Parametr — funksiya taʼrifidagi o‘zgaruvchi nomi; Argument — chaqirganda beriladigan haqiqiy qiymat.' },
      { term: 'return', definition: 'Funksiyadan natijaviy qiymatni chaqiruvchiga qaytaruvchi va funksiya ijrosini yakunlovchi kalit so‘z.' },
      { term: 'Arrow Function (=>)', definition: 'JavaScript ES6 dagi ixcham funksiya yozish sintaksisi (`(a, b) => a + b`).' },
      { term: 'Local Scope', definition: 'Funksiya yoki blok ichida eʼlon qilingan o‘zgaruvchining faqat shu blok ichidagina amal qilishi.' },
    ],
    steps: [
      '1. `return` siz funksiya `undefined` qaytarishini eslab qoling.',
      '2. Oddiy `function` ni Arrow function `=>` ga aylantirib ko‘ring.',
      '3. Quyidagi natija hisoblash (`calc`) va moslashtirish mashqlarini bajaring.',
    ],
    practice: [
      {
        task: 'To‘g‘ri to‘rtburchak yuzini qaytaruvchi `yuza(eni, boyi)` funksiyasini ham oddiy, ham Arrow function ko‘rinishida yozing.',
        expected: 'Oddiy: `function yuza(eni, boyi) { return eni * boyi; }`\nArrow: `const yuza = (eni, boyi) => eni * boyi;`',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l65-g1',
        num: '01',
        title: 'Funksiya chaqiruvini hisoblang',
        topic: 'Parametr va return',
        difficulty: 'O‘rta',
        engine: 'calc',
        config: {
          prompt: 'Quyidagi kod bajarilganda `yakun` qiymati nechaga teng bo‘ladi?\n```js\nfunction hisobla(a, b = 2) {\n  return a * b + 3;\n}\nconst yakun = hisobla(5) + hisobla(4, 3);\n```',
          unit: 'qiymat',
          correctAnswer: 28,
          tolerance: 0,
          steps: [
            '1-chaqiruv `hisobla(5)`: b berilmadi, demak standart `b = 2`. Natija: `5 * 2 + 3 = 13`.',
            '2-chaqiruv `hisobla(4, 3)`: `4 * 3 + 3 = 15`.',
            '`yakun = 13 + 15 = 28`.',
          ],
          hint: 'Birinchi chaqiruvda ikkinchi argument yo‘q, shuning uchun `b = 2` olinadi!',
        },
      },
      {
        id: 'g11-l65-g2',
        num: '02',
        title: 'Funksiya tushunchalari',
        topic: 'JS Funksiyalar',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Funksiya elementlarini aniq taʼrifi bilan moslang:',
          pairs: [
            { left: 'Parametr', right: 'Funksiya qavslari ichida eʼlon qilinadigan kirish o‘zgaruvchisi' },
            { left: 'Argument', right: 'Funksiyani chaqirayotganda uzatiladigan haqiqiy qiymat' },
            { left: 'return', right: 'Natijani tashqariga qaytaradi va funksiyani to‘xtatadi' },
            { left: '(x) => x * 2', right: 'Arrow Function (o‘qli funksiya) qisqa yozuvi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Agar funksiya ichida `return` umuman yozilmasa, uni chaqirib o‘zgaruvchiga olganda (`const r = f();`) `r` ning qiymati nima bo‘ladi?',
        options: ['undefined', '0', 'null', 'false'],
        answer: 0,
        explanation: '`return` bo‘lmagan funksiya sukut bo‘yicha `undefined` qaytaradi.',
      },
      {
        prompt: 'Funksiyalar dasturlashdagi qaysi muhim tamoyilni (DRY) amalga oshiradi?',
        options: [
          'Don’t Repeat Yourself — bir xil kodni qayta-qayta yozmasdan modullash',
          'Direct Changeover',
          'Data Minimization',
          'Delete All',
        ],
        answer: 0,
        explanation: 'Funksiyalar takroriy kodni bitta joyga jamlaydi va xatolarni tuzatishni osonlashtiradi.',
      },
      {
        prompt: '`function f() { return 10; console.log("Salom"); }` chaqirilganda konsolga "Salom" chiqadimi?',
        options: [
          'Yo‘q, chunki `return` funksiyani darhol yakunlaydi',
          'Ha, 10 dan keyin chiqadi',
          'Faqat Safari da chiqadi',
          'Xato beradi',
        ],
        answer: 0,
        explanation: '`return` dan keyingi qatorlar “yetib bo‘lmas kod” (Unreachable code) hisoblanadi.',
      },
      {
        prompt: '`const qosh = (a, b) => a + b;` qaysi turdagi funksiya?',
        options: ['Arrow Function (O‘qli funksiya)', 'Callback Loop', 'Class Constructor', 'Switch Case'],
        answer: 0,
        explanation: '`=>` belgisi ES6 Arrow Function ekanligini bildiradi.',
      },
      {
        prompt: 'Funksiya ichida `let maxfiy = 42;` yaratilsa, funksiyadan tashqarida `console.log(maxfiy)` nima beradi?',
        options: [
          'ReferenceError (ko‘rinmaydi, chunki Local Scope)',
          '42',
          '0',
          'true',
        ],
        answer: 0,
        explanation: 'Ichki o‘zgaruvchi faqat o‘z funksiyasi doirasida yashaydi.',
      },
    ],
    teacherNotes: {
      method: 'Selsiydan Farengeytga o‘tkazuvchi va bahoni matnga aylantiruvchi 2 ta kichik funksiya yozib ko‘rsating.',
      timing: 'Parametr/return 15 daqiqa, Scope/Arrow function 15 daqiqa, hisoblash o‘yini va test 15 daqiqa.',
      assessment: 'O‘quvchi `return` va `console.log` farqini hamda argument uzatishni tushunishi.',
      homework: 'Massivdagi sonlarning o‘rtacha qiymatini qaytaruvchi `ortacha(arr)` funksiyasini yozib keling.',
    },
  },
  {
    id: 'g11-l66',
    grade: 11,
    no: 66,
    part: '4-chorak',
    title: 'HTML shakllari va boshqaruv hodisalari. Pop-up oynalar.',
    kind: 'dars',
    hours: 1,
    tools: ['HTML', 'JavaScript', 'Forms / Events / Pop-ups'],
    objectives: [
      'O‘quvchi **HTML shakllari (`<form>`, `<input>`, `<select>`, `<button>`)** dan `.value` orqali foydalanuvchi kiritgan maʼlumotlarni o‘qishni biladi.',
      'O‘quvchi **Boshqaruv hodisalari (DOM Events: `onclick`, `onchange`, `onsubmit`, `addEventListener`)** hamda **Pop-up oynalar (`alert`, `confirm`, `prompt` va zamonaviy HTML modal)** ni amalda qo‘llaydi.',
    ],
    intro:
      'Veb-sayt foydalanuvchi bilan qanday muloqot qiladi? Siz tugmani bosganingizda (`click`), matn yozganingizda (`input`) yoki formani jo‘natganingizda (`submit`) brauzerda **Hodisa (Event)** yuz beradi va JavaScript bunga javob qaytaradi!',
    sections: [
      {
        heading: 'HTML shakllari (Forms) va `.value` ni o‘qish',
        body: '```html\n<input id="ismInput" type="text" placeholder="Ismingiz">\n<button onclick="salomBer()">Yuborish</button>\n<p id="chiqish"></p>\n```\n• Input maydonidagi matn `innerHTML` bilan EMAS, balki **`.value`** bilan o‘qiladi!\n```js\nfunction salomBer() {\n  const ism = document.getElementById("ismInput").value;\n  document.getElementById("chiqish").textContent = "Salom, " + ism;\n}\n```\n• `<form onsubmit="event.preventDefault(); ...">` — forma jo‘natilganda sahifa yangilanib ketishini (`preventDefault()`) to‘xtatadi!',
      },
      {
        heading: 'Boshqaruv hodisalari (Events) va Pop-up oynalar',
        body: '• **Asosiy hodisalar**:\n  - `onclick` / `addEventListener("click", ...)` — element bosilganda;\n  - `onchange` — ro‘yxat (`<select>`) yoki maydon qiymati o‘zgarganda;\n  - `onmouseover` — sichqoncha ustiga kelganda;\n  - `onsubmit` — forma yuborilganda.\n• **JavaScript ning 3 ta standart Pop-up oynasi**:\n  1. **`alert("Xabar")`**: foydalanuvchiga ogohlantirish beradi (faqat `OK`).\n  2. **`confirm("O‘chirilsinmi?")`**: `OK` → `true`, `Cancel` → `false` qaytaradi!\n  3. **`prompt("Yoshingiz?", "17")`**: foydalanuvchi kiritgan matnni (yoki `Cancel` da `null`) qaytaradi.\n• **Zamonaviy amaliyot**: haqiqiy saytlarda `alert/confirm` o‘rniga CSS/HTML `<dialog>` modallaridan foydalanish foydalanuvchi tajribasini (UX) yaxshilaydi!',
      },
    ],
    keyTerms: [
      { term: 'Event (Hodisa)', definition: 'Foydalanuvchi harakati (bosish, yozish, forma jo‘natish) natijasida brauzerda yuz beradigan signal.' },
      { term: 'input.value', definition: 'HTML `<input>` yoki `<select>` maydoniga foydalanuvchi kiritgan joriy qiymat.' },
      { term: 'event.preventDefault()', definition: 'Forma jo‘natilganda (`submit`) sahifaning avtomatik qayta yuklanishini to‘xtatuvchi metod.' },
      { term: 'alert / confirm / prompt', definition: 'Xabar berish, Ha/Yo‘q tasdiq olish (`boolean`) va matn kiritishni so‘rash (`string/null`) pop-up oynalari.' },
    ],
    steps: [
      '1. `<p>` dan matn olish (`textContent`) va `<input>` dan qiymat olish (`.value`) farqini ajrating.',
      '2. `alert`, `confirm` va `prompt` qaytargan qiymat turlarini solishtiring.',
      '3. Quyidagi interaktiv `htmlplay` shakl yasash mashqini bajaring!',
    ],
    practice: [
      {
        task: 'O‘chirish tugmasi bosilganda foydalanuvchidan tasdiq so‘rab, faqat `OK` bosilgandagina elementni o‘chiradigan kod qanday yoziladi?',
        expected: 'if (confirm("Haqiqatdan ham o‘chirilsinmi?")) { /* o‘chirish kodi */ }',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l66-g1',
        num: '01',
        title: 'Interaktiv HTML forma va Hodisa yozing',
        topic: 'Forms & Events (HTMLPlay)',
        difficulty: 'O‘rta',
        engine: 'htmlplay',
        config: {
          prompt: 'Ism kiritadigan `<input id="ism">`, `onclick="tekshir()"` hodisali `<button>` va `tekshir()` funksiyasida `.value` o‘qib `alert(...)` chiqaradigan kod yozing!',
          starterCode: '<form>\n  <!-- input va button qo‘shing -->\n</form>\n<script>\n  // tekshir() funksiyasini yozing\n</script>',
          checks: [
            { label: '<input> maydoni qo‘shilgan', pattern: '<input\\b', flags: 'i' },
            { label: 'onclick yoki addEventListener hodisasi bor', pattern: '(onclick\\s*=|addEventListener\\s*\\()', flags: 'i' },
            { label: '.value bilan input qiymati o‘qilgan', pattern: '\\.value\\b', flags: '' },
            { label: 'Pop-up (alert/confirm/prompt) yoki DOM chiqish funksiyasi bor', pattern: '(alert|confirm|prompt)\\s*\\(', flags: '' },
          ],
          hint: 'Masalan: `<input id="ism">` va `<button type="button" onclick="tekshir()">OK</button>`; script da `const v = document.getElementById("ism").value; alert("Salom " + v);`.',
        },
      },
      {
        id: 'g11-l66-g2',
        num: '02',
        title: 'Pop-up oynalar va Hodisalar',
        topic: 'Interaktiv Web',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Pop-up va hodisalarni ularning qaytargan natijasi yoki vazifasi bilan moslang:',
          pairs: [
            { left: 'confirm("Davom etamizmi?")', right: 'OK bosilsa `true`, Cancel bosilsa `false` qaytaradi' },
            { left: 'prompt("Ismingiz?")', right: 'Foydalanuvchi yozgan matnni (yoki Cancel da `null`) qaytaradi' },
            { left: 'inputElement.value', right: 'Shakl maydoniga kiritilgan matnni o‘qiydi' },
            { left: 'onchange', right: 'Tanlash ro‘yxati (`<select>`) qiymati o‘zgarganda ishga tushadi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '`<input id="parol" type="password">` maydoniga foydalanuvchi yozgan matnni JS da qanday o‘qib olinadi?',
        options: [
          'document.getElementById("parol").value',
          'document.getElementById("parol").innerHTML',
          'document.getElementById("parol").text',
          'alert("parol")',
        ],
        answer: 0,
        explanation: 'Shakl boshqaruv elementlari (`input`, `select`, `textarea`) qiymati `.value` xossasida turadi.',
      },
      {
        prompt: 'Qaysi pop-up oynasi foydalanuvchidan “Ha” (`true`) yoki “Yo‘q” (`false`) javobini qaytaradi?',
        options: ['confirm()', 'alert()', 'prompt()', 'console.log()'],
        answer: 0,
        explanation: '`confirm()` OK/Cancel tugmalariga mos ravishda boolean (`true`/`false`) qaytaradi.',
      },
      {
        prompt: '`<form>` ichidagi Submit tugmasi bosilganda sahifa o‘z-o‘zidan yangilanib (reload) ketmasligi uchun JS da nima chaqiriladi?',
        options: ['event.preventDefault()', 'window.reload()', 'document.write()', 'break'],
        answer: 0,
        explanation: 'preventDefault() formaning standart HTTP jo‘natish (sahifani yangilash) harakatini to‘xtatadi.',
      },
      {
        prompt: 'Foydalanuvchi `prompt("Yoshingiz?")` oynasida “Cancel” (Bekor qilish) tugmasini bossa, funksiya nimani qaytaradi?',
        options: ['null', 'true', '0', 'undefined'],
        answer: 0,
        explanation: 'Bekor qilingan `prompt()` har doim `null` qaytaradi.',
      },
      {
        prompt: 'Ro‘yxatdan (`<select>`) boshqa shahar tanlanganda darhol narxni qayta hisoblash uchun qaysi hodisa eng mos?',
        options: ['onchange', 'onunload', 'onresize', 'onprint'],
        answer: 0,
        explanation: 'Select elementida tanlov o‘zgarganda `onchange` hodisasi ishga tushadi.',
      },
    ],
    teacherNotes: {
      method: 'Ikki sonni qo‘shadigan kichik HTML kalkulyator formasini (`input` + `button` + `onclick` + `preventDefault`) jonli yozdiring.',
      timing: 'Forms va .value 15 daqiqa, Events va Pop-up 15 daqiqa, HTMLPlay va test 15 daqiqa.',
      assessment: 'O‘quvchi `.value` bilan `.innerHTML` ni adashtirmasligi va `confirm/prompt` natijasini bilishi.',
      homework: 'Yoshni kiritib “18 yoshdan katta/kichik” deb javob chiqaradigan interaktiv HTML shakl sahifasini tuzing.',
    },
  },
  {
    id: 'g11-l67',
    grade: 11,
    no: 67,
    part: '4-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Nazorat', 'JavaScript yakuniy'],
    objectives: [
      'O‘quvchi 4-chorakning ikkinchi yarmidagi **HTML/JavaScript dasturlash** (**DOM chiqarish, O‘zgaruvchilar va Turlar, Operatorlar/Stringlar, Array va Shartlar, Luplar, Funksiyalar, HTML Shakllar va Hodisalar**) bo‘yicha yakuniy nazorat ishini topshiradi.',
    ],
    intro:
      'Ushbu nazorat ishida siz **JavaScript dasturlash asoslari** bo‘yicha olgan barcha amaliy ko‘nikmalaringizni — o‘zgaruvchilardan tortib, DOM formalari va funksiyalargacha sinovdan o‘tkazasiz!',
    sections: [
      {
        heading: 'Yakuniy JS nazorati bo‘limlari',
        body: '• `document.getElementById()`, `.innerHTML`, `.textContent`, `.value`, `console.log()`.\n• `const` vs `let`, `typeof`, `===` vs `==`, `%`, String metodlari (`.trim()`, `.slice()`, `.length`).\n• `Array` (`0`-indeks, `.push()`, `.pop()`), `if / else if / else`, `switch`.\n• `for`, `while`, `for...of`, `break`, `continue` va `function / return / =>`.\n• HTML shakllari (`onsubmit`, `onclick`) va Pop-up oynalar (`alert`, `confirm`, `prompt`).',
      },
    ],
    keyTerms: [
      { term: 'DOM & .value', definition: 'Elementlarni `id` orqali boshqarish va input maydonidan qiymat o‘qish.' },
      { term: 'Trace Table', definition: 'Sikl va funksiya qadamlarini qo‘lda kuzatib natija chiqarish.' },
      { term: 'Scope & return', definition: 'Funksiya qaytaruvchi qiymati va lokal o‘zgaruvchilar doirasi.' },
    ],
    steps: [
      '1. Kod tahlili (Trace) va `codebug` topshiriqlarini diqqat bilan ishlang.',
      '2. 5 ta yakuniy nazorat testini bajaring.',
    ],
    practice: [
      {
        task: 'Nazorat vazifasi: `const a = [4, 7, 10];` massividagi barcha toq bo‘lmagan (juft) sonlar yig‘indisini hisoblaydigan JS siklini yozing.',
        expected: 'let s = 0;\nfor (const x of a) {\n  if (x % 2 === 0) s += x;\n}\n// Natija: 4 + 10 = 14',
        difficulty: 'orta',
      },
    ],
    games: [
      {
        id: 'g11-l67-g1',
        num: '01',
        title: 'Nazorat: Kod tahlili (Sikl + Funksiya)',
        topic: 'JS Yakuniy Trace',
        difficulty: 'Qiyin',
        engine: 'calc',
        config: {
          prompt: 'Quyidagi dastur bajarilgach `natija` nechaga teng bo‘ladi?\n```js\nconst sonlar = [2, 5, 8, 3];\nlet natija = 0;\nfor (let i = 0; i < sonlar.length; i++) {\n  if (sonlar[i] % 2 === 0) {\n    natija += sonlar[i];\n  }\n}\n```',
          unit: 'qiymat',
          correctAnswer: 10,
          tolerance: 0,
          steps: [
            'i=0: sonlar[0] = 2 (juft) → natija = 2',
            'i=1: sonlar[1] = 5 (toq) → o‘tkaziladi',
            'i=2: sonlar[2] = 8 (juft) → natija = 2 + 8 = 10',
            'i=3: sonlar[3] = 3 (toq) → o‘tkaziladi',
            'Yakuniy natija = 10',
          ],
          hint: 'Faqat juft sonlar (`% 2 === 0`) yig‘indiga qo‘shiladi: 2 va 8.',
        },
      },
      {
        id: 'g11-l67-g2',
        num: '02',
        title: 'Nazorat: JS Xatosini toping!',
        topic: 'Form & DOM Bug',
        difficulty: 'O‘rta',
        engine: 'codebug',
        config: {
          prompt: 'Foydalanuvchi `<input id="yosh">` ga son yozsa ham, `matn` o‘zgaruvchisiga bo‘sh satr tushmoqda. Qaysi qatorda xato bor?',
          lines: [
            'function tekshir() {',
            '  const el = document.getElementById("yosh");',
            '  const matn = el.innerHTML;',
            '  console.log("Yosh:", matn);',
            '}',
          ],
          buggyLine: 2,
          options: [
            '3-qator: `<input>` elementidan qiymat olishda `el.innerHTML` emas `el.value` ishlatiladi',
            '1-qator: funksiya nomi katta harf bilan yozilishi shart',
            '2-qator: `getElementById` ishlamaydi',
            '4-qator: `console.log` sintaksisi xato',
          ],
          answer: '3-qator: `<input>` elementidan qiymat olishda `el.innerHTML` emas `el.value` ishlatiladi',
          explanation: '`<input>` ning yopuvchi tegi va ichki HTML i bo‘lmaydi; foydalanuvchi yozgan qiymat har doim `.value` da saqlanadi!',
        },
      },
    ],
    quiz: [
      {
        prompt: '`typeof true` va `typeof "true"` natijalari qaysi javobda to‘g‘ri berilgan?',
        options: [
          '"boolean" va "string"',
          'Ikkalasi ham "boolean"',
          '"string" va "number"',
          '"undefined" va "null"',
        ],
        answer: 0,
        explanation: 'Qo‘shtirnoqsiz `true` mantiqiy tur, qo‘shtirnoq ichidagi `"true"` esa matn (string).',
      },
      {
        prompt: '`"Uzbekistan".slice(0, 5)` qaysi qiymatni qaytaradi?',
        options: ['"Uzbek"', '"Uzbeki"', '"zbeki"', '"stan"'],
        answer: 0,
        explanation: '0, 1, 2, 3, 4-indeksdagi harflar `"Uzbek"` ni beradi.',
      },
      {
        prompt: 'Qaysi shartda `5` ham qiymat, ham tur jihatdan `5` ga tengligi xavfsiz tekshiriladi?',
        options: ['x === 5', 'x == 5', 'x = 5', 'x !== 5'],
        answer: 0,
        explanation: '`===` qatʼiy tenglikni tekshiradi (`x = 5` esa qiymat berishdir!).',
      },
      {
        prompt: 'Funksiya hisoblagan qiymatni tashqaridagi o‘zgaruvchiga berish uchun funksiya ichida nima yoziladi?',
        options: ['return', 'console.log', 'alert', 'break'],
        answer: 0,
        explanation: 'Faqat `return` natijani chaqiruvchi kodga qaytaradi.',
      },
      {
        prompt: 'Foydalanuvchi tugmani bosganda funksiya ishlashi uchun HTML atributi qaysi?',
        options: ['onclick="..."', 'onprint="..."', 'for="..."', 'href="..."'],
        answer: 0,
        explanation: '`onclick` yoki JS dagi `addEventListener("click", ...)` bosish hodisasini ushlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Amaliy kod yozish va nazariy testdan iborat 2 qismli nazorat shaklida o‘tkazing.',
      timing: 'Kirish 5 daqiqa, nazorat ishi 35 daqiqa, tekshirish 5 daqiqa.',
      assessment: 'O‘quvchining kod xatosini topishi va Trace natijasini to‘g‘ri chiqarishi.',
      homework: 'Butun 11-sinf dasturini umumiy takrorlashga tayyorgarlik.',
    },
  },
  {
    id: 'g11-l68',
    grade: 11,
    no: 68,
    part: '4-chorak',
    title: 'Takrorlash darsi',
    kind: 'takrorlash',
    hours: 1,
    tools: ['Takrorlash', '11-sinf yakuniy'],
    objectives: [
      'O‘quvchi 11-sinf Informatika va AT kursining barcha 4 choragi — **Axborot va Xavfsizlik, Multimedia/Mantiq, Tarmoq/Loyiha boshqaruvi/SDLC, Grafika/Mail Merge va JavaScript Web dasturlash** bilimlarini yakuniy umumlashtiradi.',
      'O‘quvchi maktab bitiruvchisi sifatida IT va raqamli texnologiyalar bo‘yicha yaxlit tayyorgarligini interaktiv o‘yinlar bilan mustahkamlaydi.',
    ],
    intro:
      'Tabriklaymiz — siz **11-sinf Informatika va Axborot texnologiyalari** kursining yakuniy darsiga yetib keldingiz! Ushbu darsda yil davomida o‘rganilgan eng muhim ko‘nikmalarni — mantiqiy sxemalar va tarmoq xavfsizligidan tortib, SDLC, Vektor grafika va JavaScript gacha — yirik yakuniy marafonda mustahkamlaymiz!',
    sections: [
      {
        heading: '11-sinf yillik bilimlari xaritasi',
        body: '• **1-chorak**: Axborot sifati, Shifrlash va 2FA, Auditiv/Video montaj (Sample rate, Bitrate, Frame rate), VR va AR.\n• **2-chorak**: Kompyuter tarmoqlari (`Switch/Router`, `IP/DNS/TCP`), Mantiqiy ventillar (`AND, OR, NOT, XOR`), Ekspert tizimlar va Maʼlumotlar bazasi asoslari.\n• **3-chorak**: `Bandwidth`, `BitTorrent`, Tarmoq xavfsizligi va Huquq, Sunʼiy yo‘ldoshlar (`GEO/LEO`), Loyiha boshqaruvi (`Gantt/CPA`), `DRP (RTO/RPO)` va to‘liq `SDLC (DFD, Testing, Changeover)`.\n• **4-chorak**: `Vektor (SVG)` vs `Rastr (PNG/JPEG)`, Animatsiya (`Tween/Mask`), `Mail Merge`, hamda `HTML + JavaScript` (`DOM, Array, Loops, Functions, Forms`).',
        tip: 'Siz endi nafaqat kompyuterdan foydalanuvchi, balki axborot tizimlarini tahlil qiladigan, loyihalaydigan va dasturlaydigan zamonaviy raqamli mutaxassissiz!',
      },
    ],
    keyTerms: [
      { term: 'SDLC & CPA', definition: 'Tizimlarni tahlildan joriy etishgacha boshqarish va Kritik yo‘l tahlili.' },
      { term: 'SVG vs PNG', definition: 'Masshtablanuvchi vektor grafikasi va pikselli rastr grafikasi.' },
      { term: 'DOM + JavaScript', definition: 'Veb-sahifa elementlari va foydalanuvchi hodisalarini dasturiy boshqarish.' },
    ],
    steps: [
      '1. Yillik flash-kartochkalarni aylantirib barcha 4 chorak qoidalarini esga oling.',
      '2. Yakuniy Krossvord va Bitiruv testini bajaring!',
    ],
    practice: [
      {
        task: 'Maktab bitiruv loyihasi sifatida o‘quvchilar portfoliosi saytini qursangiz: 1) Logotip uchun format; 2) Jadval rejalash diagrammasi; 3) Xabar chiqarish JS buyrug‘i — bularni sanang.',
        expected: '1) Vektor `SVG` (Inkscape); 2) `Gantt` diagrammasi va Kritik yo‘l (CPA); 3) `document.getElementById(...).textContent`.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l68-g1',
        num: '01',
        title: '11-sinf Oltin Kartochkalari (Flashcards)',
        topic: 'Yillik takrorlash',
        difficulty: 'O‘rta',
        engine: 'flashcards',
        config: {
          prompt: '11-sinfning har bir choragidan eng muhim formulalar va tushunchalarni takrorlang:',
          cards: [
            { front: 'Audio Bitrate formulasi?', back: 'Sample Rate (Hz) × Bit Depth × Kanallar soni', tag: '1-chorak' },
            { front: 'Switch vs Router?', back: 'Switch — LAN ichida MAC-manzil; Router — tarmoqlar aro IP-manzil', tag: '2-chorak' },
            { front: 'Yuklash vaqti va CPA?', back: 'Vaqt = (MB × 8) / Mbps; Kritik yo‘l = Float=0 bo‘lgan eng uzun yo‘l', tag: '3-chorak' },
            { front: 'Vektor vs Rastr?', back: 'Vektor (SVG) — formula, xiralashmaydi; Rastr (PNG/JPG) — piksellar', tag: '4-chorak' },
            { front: 'Input qiymati vs Paragraf matni?', back: 'Input uchun `.value`; <p>/<div> matni uchun `.textContent` / `.innerHTML`', tag: 'JavaScript' },
            { front: 'Qatʼiy tenglik JS da?', back: '`===` ham qiymatni, ham maʼlumot turini solishtiradi!', tag: 'JavaScript' },
          ],
        },
      },
      {
        id: 'g11-l68-g2',
        num: '02',
        title: '11-sinf Katta Yakuniy Krossvordi',
        topic: 'Yillik atamalar',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '11-sinf kursining to‘rtta choragidan olingan asosiy atamalarni toping:',
          clues: [
            { id: '1', clue: 'Vektorli grafikaning veb uchun asosiy XML formati', answer: 'SVG' },
            { id: '2', clue: 'Ikki kalit kadr orasidagi silliq harakatni avtomatik to‘ldirish', answer: 'TWEEN' },
            { id: '3', clue: 'Funksiyadan qiymat qaytaruvchi JavaScript kalit so‘zi', answer: 'RETURN' },
            { id: '4', clue: 'Kiruvchi va chiquvchi tarmoq paketlarini filtrlaydigan himoya devori', answer: 'FIREWALL' },
          ],
          hint: 'SVG, TWEEN, RETURN, FIREWALL.',
        },
      },
    ],
    quiz: [
      {
        prompt: '11-sinf tarmoq darsidan: MAC-manzillar jadvali orqali paketni faqat kerakli LAN portiga uzatuvchi qurilma qaysi?',
        options: ['Switch', 'Hub', 'Modem', 'Repeater'],
        answer: 0,
        explanation: 'Switch bitta mahalliy tarmoq ichida aqlli kommutatsiya bajaradi.',
      },
      {
        prompt: 'Kritik yo‘li 25 kun, parallel ikkinchi tarmog‘i 19 kun bo‘lgan loyihada ikkinchi tarmoqning zaxira vaqti (Float) necha kun?',
        options: ['6 kun', '25 kun', '44 kun', '0 kun'],
        answer: 0,
        explanation: 'Float = 25 - 19 = 6 kun.',
      },
      {
        prompt: 'Animatsiyada pastki qatlamning faqat belgilangan shakl ichidagi qismini ko‘rsatib turish texnikasi nima?',
        options: ['Niqoblovchi qatlam (Masking Layer)', 'Onion Skinning', 'Resampling', 'Mail Merge'],
        answer: 0,
        explanation: 'Masking qatlami rasmni kesmasdan (non-destructive) oyna vazifasini bajaradi.',
      },
      {
        prompt: 'JavaScript da massiv oxiriga yangi element qo‘shish va qiymati o‘zgarmas o‘zgaruvchi ochish uchun nimalar ishlatiladi?',
        options: ['`.push()` va `const`', '`.pop()` va `var`', '`.trim()` va `let`', '`.slice()` va `switch`'],
        answer: 0,
        explanation: '`.push()` oxiriga qo‘shadi; `const` qayta tayinlanmaydigan o‘zgaruvchini belgilaydi.',
      },
      {
        prompt: 'Bitiruv tabrigi: Axborot tizimini noldan loyihalashda kod yozishdan OLDIN qaysi bosqichlar bajariladi?',
        options: [
          'Konsepsiya/Tahlil (Hujjatlar tahlili) va Dizayn (Prototip, DFD, Maʼlumotlar bazasi)',
          'Faqat Beta sinov',
          'Faqat Direct Changeover',
          'Kod yozib bo‘lgandan keyin talab yig‘iladi',
        ],
        answer: 0,
        explanation: 'To‘g‘ri SDLC da avval Tahlil va Dizayn puxta bajarilib, keyin ishlab chiqish va sinovga o‘tiladi.',
      },
    ],
    teacherNotes: {
      method: 'Yakuniy darsni jamoaviy viktorina va o‘quvchilarning kelajakdagi IT kasblari (Frontend, QA, PM, Dizayn, Kiberxavfsizlik) bo‘yicha qisqa suhbati bilan yakunlang.',
      timing: '4 chorak xaritasi 15 daqiqa, Krossvord/Flashcards 15 daqiqa, yakuniy blits va tilaklar 15 daqiqa.',
      assessment: 'O‘quvchining o‘rganilgan barcha yo‘nalishlarni bir-biri bilan bog‘lay olishi.',
      homework: 'Bitiruv imtihonlari va kelgusi taʼlim bosqichiga muvaffaqiyatli tayyorgarlik!',
    },
  },
];
