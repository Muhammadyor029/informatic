import type { Lesson } from './types';

export const GRADE_10_Q1B: Lesson[] = [
  {
    id: 'g10-l10',
    grade: 10,
    no: 10,
    part: '1-chorak',
    title: 'Loyiha (amaliy) ishi',
    kind: 'loyiha',
    hours: 1,
    tools: ['Foto + Video + Veb + UI', 'Shablon loyiha'],
    objectives: [
      'O‘quvchi 1–9-darslarda o‘rganilgan ma’lumot tahlili, shifrlash, validatsiya, amaliy foto/video tahrir va UI elementlarini bitta kichik loyihada birlashtiradi.',
      'O‘quvchi loyiha talablariga mos hujjat va UI prototipini rejalab taqdim etadi.',
    ],
    intro:
      'Nazariyani amaliyot bilan mustahkamlash vaqti! Ushbu loyiha darsida siz "Maktab ekologiya klubi" uchun ro‘yxatdan o‘tish UI maketini, tasvir/video rejasini hamda validatsiya qoidalarini bitta yaxlit mini-loyihada yig‘asiz.',
    sections: [
      {
        heading: 'Loyiha vazifasi va bosqichlari',
        body: 'Loyiha 4 qismdan iborat: 1) **Ma’lumot va UI shakli**: ishtirokchi anketasi uchun to‘g‘ri boshqaruv elementlari (Text box, Radio, Checkbox, Drop-down, Date picker) tanlash; 2) **Validatsiya & Verifikatsiya**: har bir maydon uchun tekshiruv (Range, Format, Presence, Double entry) belgilash; 3) **Media tayyorlash**: logotipni o‘lchash/retushlash va 30 soniyalik video rolik rejasini tuzish; 4) **Himoya**: foydalanuvchi paroli va ma’lumotini shifrlash (HTTPS/Asimmetrik+Simmetrik) rejasini yozish.',
        example: 'Anketada: `Ism` (Text box + Presence), `Sinf` (Drop-down 5..11 + Lookup), `Yo‘nalish` (Checkbox — bir necha tanlov), `Email` (Format + Double Entry).',
        tip: 'Loyihani bajarishda avval foydalanuvchi qulayligini (UI), so‘ng xatosiz ma’lumot kiritilishini (Validatsiya) tekshiring.',
      },
    ],
    keyTerms: [
      { term: 'UI Prototip', definition: 'Ilova yoki formaning boshqaruv elementlari joylashgan dastlabki chizmasi.' },
      { term: 'Texnik topshiriq (Spec)', definition: 'Loyihada bajariladigan vazifalar, media formatlar va himoya talablari ro‘yxati.' },
      { term: 'Integratsiya', definition: 'Turli media va nazorat vositalarini yagona loyihaga birlashtirish.' },
      { term: 'Test rejasi', definition: 'Yaratilgan formaning Normal, Extreme va Abnormal qiymatlarda sinovi.' },
    ],
    steps: [
      '1. Loyiha bosqichlarini quyidagi Order o‘yinida mantiqiy tartibga soling.',
      '2. 5 maydonli ro‘yxatdan o‘tish formasi uchun UI elementlari va validatsiya jadvalini tuzing.',
      '3. Logotip/banner rasm formati va eksport sifatini tanlang.',
    ],
    practice: [
      {
        task: 'Loyihangizdagi "Qiziqishlar" va "Tug‘ilgan sana" maydonlari uchun qaysi UI element va validatsiya qoidalarini tanlaysiz?',
        expected: 'Qiziqishlar: `Checkbox` (bir nechta tanlov) + `Lookup`; Tug‘ilgan sana: `Date Picker` + `Range/Format check`.',
        difficulty: 'oson',
      },
      {
        task: 'Loyiha sayti uchun shaffof fonli logotip va reklama fotosurati qaysi formatlarda saqlanishi kerak?',
        expected: 'Logotip — `.png` (yoki vektor `.svg`), fotosurat — vebga optimallashtirilgan `.jpg` (yoki `.webp`).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l10-g1',
        num: '01',
        title: 'Amaliy loyiha ish jarayoni',
        topic: 'Loyiha rejalashtirish',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Multimedia va veb-anketa loyihasini yaratish bosqichlarini to‘g‘ri ketma-ketlikda joylashtiring.',
          items: [
            'Talablarni yig‘ish va maqsadli auditoriya uchun ma’lumot manbalarini aniqlash',
            'UI boshqaruv elementlari (Radio/Checkbox/Dropdown) va validatsiya qoidalarini loyihalash',
            'Foto, video va veb-sahifa kontentini yaratish hamda tahrirlash',
            'Normal/Extreme/Abnormal qiymatlar bilan sinash va xavfsizlikni (HTTPS) tekshirish',
          ],
          hint: 'Talab → UI/Validatsiya loyihasi → Media va Kod → Sinov va Himoya.',
          explanation: 'Tizimli yondashuv loyihada qayta ishlash va xatolarni minimallashtiradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Loyiha anketasida foydalanuvchi 4 ta klubdan istalgan bir nechtasini tanlay olishi uchun qaysi element qo‘yiladi?',
        options: ['Checkbox', 'Radio button', 'Slider', 'Label'],
        answer: 0,
        explanation: 'Checkbox ko‘p tanlovli (multi-select) variantlar uchun mo‘ljallangan.',
      },
      {
        prompt: 'Yaratilgan forma maydonlari bo‘sh qolmasligi uchun qaysi validatsiya qoidasi biriktiriladi?',
        options: ['Presence Check', 'Check Digit', 'Lossy Check', 'Flip'],
        answer: 0,
        explanation: 'Presence check majburiy maydon bo‘sh emasligini nazorat qiladi.',
      },
      {
        prompt: 'Loyiha saytida orqa foni shaffof bo‘lgan klub logotipi uchun eng mos rasm formati qaysi?',
        options: ['.png yoki .svg', '.jpg', '.txt', '.mp3'],
        answer: 0,
        explanation: 'PNG va SVG shaffof fonni qo‘llaydi va aniq qirralarni saqlaydi.',
      },
      {
        prompt: 'Foydalanuvchi kiritgan email manzili to‘g‘ri yozilganini verifikatsiya qilish uchun nima qo‘shish mumkin?',
        options: ['Emailni ikki marta kiritish (Double Entry) maydoni', 'Blur filtri', 'Crop', 'Watermark'],
        answer: 0,
        explanation: 'Double entry ikki kiritishni solishtirib terish xatosini ushlaydi.',
      },
      {
        prompt: 'Agar loyiha uchun maktab ehtiyojiga 100% mos maxsus boshqaruv tizimi noldan yozdirilsa, bu qaysi dastur turi?',
        options: ['Buyurtma dastur (Bespoke software)', 'Off-the-shelf', 'Utilit', 'Drayver'],
        answer: 0,
        explanation: 'Noldan buyurtmachi talabi bo‘yicha yaratiladigan dastur Bespoke software deyiladi.',
      },
    ],
    teacherNotes: {
      method: 'Juftliklarda mini-loyiha prototipini qog‘oz/kompyuterda tayyorlab 2 daqiqalik taqdimot qilish.',
      timing: 'Loyiha topshirig‘i 5 daq, Amaliy bajarish 25 daq, Order va quiz 15 daq.',
      assessment: 'UI elementlari, validatsiya va media formatlarini to‘g‘ri uyg‘unlashtirish.',
      homework: 'Loyiha hujjatini to‘liq yakunlab, test misollarini ilova qiling.',
    },
  },
  {
    id: 'g10-l11',
    grade: 10,
    no: 11,
    part: '1-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Bilim sinovi', '1–9-darslar yakuni'],
    objectives: [
      'O‘quvchi 1–10-darslar (DIK, Kodlash/Shifrlash, Validatsiya/Verifikatsiya, Ichki apparat/Kesh, Drayver/Kompilyator, Foto/Video/UI/Bespoke) bo‘yicha bilimlarini sinaydi.',
      'O‘quvchi nazorat krossvordi va test topshiriqlarini mustaqil yechadi.',
    ],
    intro:
      '10-sinfning birinchi nazorat ishi ma’lumot nazariyasi, simmetrik/asimmetrik kriptografiya, chuqur validatsiya-verifikatsiya, protsessor/xotira arxitekturasi hamda dasturiy taʼminot turlarini qamrab oladi.',
    sections: [
      {
        heading: 'Nazorat oldi asosiy xulosalar',
        body: 'Eslab qoling: Data+Context=Information; Simmetrik (1 kalit, tez) vs Asimmetrik (Public+Private kalit); Consistency Check & Check Digit; Visual Check & Double Entry; CPU (CU, ALU, Cache, Registr); Compiler vs Interpreter vs Linker; Radio (1 ta) vs Checkbox (ko‘p); Bespoke vs Off-the-shelf.',
        example: 'Savolda "Ikkita bog‘liq maydon ziddiyatini tekshirish" — Consistency Check; "Ochiq kalit bilan shifrlash" — Asimmetrik.',
        tip: 'Krossvord kataklariga atamalarni aniq va xatosiz kiriting.',
      },
    ],
    keyTerms: [
      { term: 'Simmetrik vs Asimmetrik', definition: 'Bir xil kalitli tezkor shifrlash hamda Ochiq/Shaxsiy juft kalitli shifrlash.' },
      { term: 'Consistency & Check Digit', definition: 'Maydonlararo mantiqiy moslik va nazorat raqami tekshiruvlari.' },
      { term: 'Compiler & Linker', definition: 'To‘liq tarjima va obyekt fayllarni bitta dasturga bog‘lash.' },
      { term: 'Bespoke software', definition: 'Maxsus buyurtma asosida noldan ishlab chiqiladigan dastur.' },
    ],
    steps: [
      '1. Krossvordda 1-bobning asosiy atamalarini yeching.',
      '2. Qisqa tahliliy savollarga javob bering.',
      '3. Yakuniy 5 ta nazorat testini ishlang.',
    ],
    practice: [
      {
        task: 'Kod berish (Coding), Kodlash (Encoding) va Shifrlash (Encryption) o‘rtasidagi farqni bittadan misol bilan yozing.',
        expected: 'Coding: `UZ`/`M/F` (ixchamlash); Encoding: `ASCII/UTF-8` (moslik); Encryption: `AES/RSA` (maxfiylik).',
        difficulty: 'oson',
      },
      {
        task: 'Kompilyator, Interpretator va Drayver qaysi dastur toifasiga kiradi va ularning farqi nima?',
        expected: 'Barchasi Tizimli dasturiy taʼminot. Kompilyator butun kodni oldindan tarjima qiladi, Interpretator satrma-satr bajaradi, Drayver esa OT ga apparatni boshqarish imkonini beradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l11-g1',
        num: '01',
        title: '1-bob yakuniy krossvordi',
        topic: 'Ma’lumot, Kriptografiya va Tizimlar',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '1–9-darslardagi asosiy atamalarni lotin bosh harflarida kiriting.',
          clues: [
            { id: 'c1', clue: 'Protsessor va RAM orasidagi o‘ta tezkor xotira (5 harf)', answer: 'CACHE' },
            { id: 'c2', clue: 'Maxsus buyurtma asosida yoziladigan dastur turi (7 harf)', answer: 'BESPOKE' },
            { id: 'c3', clue: 'Kodni satrma-satr o‘girib bajaruvchi tizimli dastur (11 harf)', answer: 'INTERPRETER' },
            { id: 'c4', clue: 'Qatlamning ma’lum joylarini buzmasdan yashirish usuli (4 harf)', answer: 'MASK' },
          ],
          hint: 'Javoblar: CACHE, BESPOKE, INTERPRETER, MASK.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Asimmetrik shifrlashda shifrlangan xabarni faqat egasi ocha olishi uchun qaysi kalit sir saqlanadi?',
        options: ['Private Key (Shaxsiy kalit)', 'Public Key (Ochiq kalit)', 'ASCII kodi', 'Check Digit'],
        answer: 0,
        explanation: 'Ochiq kalit hammaga beriladi, Shaxsiy kalit esa faqat egasida maxfiy saqlanadi.',
      },
      {
        prompt: 'Boshqa maqsadda to‘plangan tayyor ma’lumotdan (masalan, do‘kon sodiqlik kartasi statistikasidan) qayta foydalanish qaysi manba?',
        options: ['Bilvosita (Indirect) manba', 'Bevosita (Direct) manba', 'Primary sensor', 'Double entry'],
        answer: 0,
        explanation: 'Ikkinchi maqsadda qayta ishlatilgan manba Bilvosita manba deyiladi.',
      },
      {
        prompt: 'Tizimli dasturlardan qaysi biri apparat qurilmalari (printer, GPU) bilan OT o‘rtasida tarjimonlik qiladi?',
        options: ['Device Driver (Drayver)', 'Compiler', 'Spreadsheet', 'WYSIWYG'],
        answer: 0,
        explanation: 'Drayversiz OT yangi apparat bilan to‘g‘ri ishlay olmaydi.',
      },
      {
        prompt: 'Kodni bir marta butunlay mashina kodiga aylantirib `.exe` fayl chiqaruvchi vosita qaysi?',
        options: ['Kompilyator (Compiler)', 'Interpretator', 'Utilit', 'BIOS'],
        answer: 0,
        explanation: 'Compiler barcha kodni oldindan mashina tiliga o‘giradi.',
      },
      {
        prompt: 'Foydalanuvchi ro‘yxatdan o‘tayotganda "Jins" maydoni uchun faqat birini tanlashga ruxsat beruvchi UI elementi qaysi?',
        options: ['Radio Button', 'Checkbox', 'Slider', 'Progress Bar'],
        answer: 0,
        explanation: 'Radio Button o‘zaro istisno qiluvchi variantlardan bittasini tanlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Yozma va platformadagi krossvord/test kombinatsiyasi.',
      timing: 'Kirish 5 daq, Nazorat ishi 35 daq, Tahlil 5 daq.',
      assessment: '10-sinf 1-bob tayanch tushunchalarini xatosiz farqlash.',
      homework: 'Keyingi darsga sensor turlari (harakat, bosim, namlik, harorat, yorug‘lik) haqida tayyorlaning.',
    },
  },
  {
    id: 'g10-l12',
    grade: 10,
    no: 12,
    part: '1-chorak',
    title: 'Sensorlar. Harakat va bosim sensorlari, Namlik, harorat va yorug‘lik sensorlari',
    kind: 'dars',
    hours: 1,
    tools: ['PIR / Akselerometr', 'Bosim / Namlik / Termistor / LDR', 'ADC & Boshqaruv'],
    objectives: [
      'O‘quvchi 5 asosiy sensor guruhining — Harakat (PIR/Ultratovush), Bosim (Piezoelektrik/Og‘irlik), Namlik (Gigrometr), Harorat (Termistor) va Yorug‘lik (LDR/Fotodiod) ishlash tamoyilini tushuntiradi.',
      'O‘quvchi real avtomatlashtirilgan tizimlar (xavfsizlik, aqlli qishloq xo‘jaligi, tibbiyot, ko‘cha yoritishi) uchun to‘g‘ri sensorni tanlay oladi.',
    ],
    intro:
      'Sensorlar — kompyuter va robotlarning "sezgi aʼzolari"! Ular atrof-muhitdagi harakat, bosim, namlik, issiqlik va yorug‘likni uzluksiz o‘lchab, analog signalni ADC orqali mikroprotsessorga uzatadi.',
    sections: [
      {
        heading: 'Harakat va Bosim sensorlari',
        body: '**Harakat sensorlari**: PIR (Passiv infraqizil — tana issiqligi va harakatni sezadi, avtomatik eshik va xavfsizlik signalizatsiyasi), Ultratovush (tovush to‘lqini aks-sadosi bilan masofani o‘lchaydi, mashina parkovkasi). **Bosim sensorlari**: gaz/suyuqlik bosimi yoki mexanik kuchni o‘lchaydi — aqlli svetofor yo‘l ostida mashina og‘irligini sezishi, sanoat qozonlari bosimi va smartfon ekranidagi bosim sezgirligi.',
        example: 'Savdo markazi eshigiga odam yaqinlashganda PIR harakat sensori signal beradi va aktuator eshikni ochadi.',
        tip: 'Sensor faqat o‘lchovchi (Input) qurilmadir — u hech qachon eshikni o‘zi ochmaydi, eshikni Aktuator ochadi!',
      },
      {
        heading: 'Namlik, Harorat va Yorug‘lik sensorlari',
        body: '**Namlik sensori (Moisture / Humidity)**: tuproq yoki havodagi suv miqdorini o‘lchaydi (avtomatik tomchilatib sug‘orish, kiyim quritgich). **Harorat sensori (Temperature)**: issiqlik darajasini o‘lchaydi (konditsioner, muzlatgich, avtomobil dvigateli, kimyoviy reaktor). **Yorug‘lik sensori (Light / LDR)**: yorug‘lik kuchini sezadi (ko‘cha chiroqlarini shomda yoqish, telefon ekranini quyoshda yorqinlashtirish).',
        example: 'Zamonaviy issiqxonada tuproq namligi sensori 30% dan tushsa suv nasosi yoqiladi; yorug‘lik tushsa LED lampalar yonadi.',
      },
    ],
    keyTerms: [
      { term: 'PIR / Ultratovush sensori', definition: 'Infraqizil issiqlik harakati yoki tovush aks-sadosi orqali obyekt/masofani aniqlovchi sensor.' },
      { term: 'Bosim sensori', definition: 'Fizik bosim yoki og‘irlik kuchini elektr signaliga aylantiruvchi datchik.' },
      { term: 'Namlik va Harorat sensorlari', definition: 'Tuproq/havo namligini (gigrometr) hamda issiqlik darajasini (termistor) o‘lchovchi sensorlar.' },
      { term: 'LDR (Yorug‘lik sensori)', definition: 'Yorug‘lik tushishi bilan qarshiligi o‘zgaradigan fotorezistor datchik.' },
    ],
    steps: [
      '1. 5 ta sensor turini kirish signali va qo‘llanilish sohasi bilan jadvalga yozing.',
      '2. Har bir sensorning ADC orqali mikroprotsessorga ulanishini tekshiring.',
      '3. Turli avtomatik tizimlar (avtomatik sug‘orish, signalizatsiya, ko‘cha chirog‘i) uchun sensor tanlang.',
    ],
    practice: [
      {
        task: 'Avtomobilning orqaga yurishda to‘siqqa urilmasligi (parktronik) va bog‘ni avtomatik sug‘orish tizimida qaysi sensorlar ishlatiladi?',
        expected: 'Parktronikda — Ultratovush (masofa/harakat) sensori; Bog‘ sug‘orishda — Tuproq namligi sensori (va yomg‘ir/harorat sensori).',
        difficulty: 'oson',
      },
      {
        task: 'Xavfsizlik signalizatsiyasi ko‘chadagi chiroq o‘chib qolsa ham o‘g‘rini payqashi uchun Yorug‘lik (LDR) emas, nima uchun PIR Harakat sensori tanlanadi?',
        expected: 'PIR sensori ko‘rinadigan yorug‘likka emas, odam tanasidan chiqadigan infraqizil issiqlik harakatiga sezgir, shuning uchun qop-qorong‘ida ham ishlaydi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l12-g1',
        num: '01',
        title: 'Sensor va qo‘llanilish sohasi',
        topic: 'Sensorlar',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'Sensorni uning eng mos real hayotiy qo‘llanilishi bilan juftlang.',
          pairs: [
            { left: 'Harakat sensori (PIR)', right: 'Tunda xonaga begona kirganda signalizatsiyani ishga tushirish' },
            { left: 'Bosim sensori', right: 'Chorraha yo‘lida avtomobil kelganini sezib svetoforni boshqarish' },
            { left: 'Namlik sensori', right: 'Tuproq qurib qolganda issiqxona sug‘orish nasosini yoqish' },
            { left: 'Yorug‘lik sensori (LDR)', right: 'Qorong‘i tushishi bilan ko‘cha chiroqlarini avtomatik yoqish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Avtomatik eshiklar odam yaqinlashganda ochilishi uchun asosan qaysi sensordan foydalanadi?',
        options: ['Harakat sensori (PIR / Mikroto‘lqin)', 'Namlik sensori', 'pH sensori', 'Ovoz karnayi'],
        answer: 0,
        explanation: 'Harakat sensori yaqinlashayotgan obyekt harakatini va issiqlik o‘zgarishini darhol sezadi.',
      },
      {
        prompt: 'Aqlli ko‘cha yoritish ustunlarida quyosh botganda chiroq avtomatik yonishi uchun qaysi sensor ishlaydi?',
        options: ['Yorug‘lik sensori (LDR)', 'Bosim sensori', 'Namlik sensori', 'Gaz sensori'],
        answer: 0,
        explanation: 'LDR yorug‘lik intensivligini o‘lchab, qorong‘ilik chegarasidan tushganda signal beradi.',
      },
      {
        prompt: 'Sensor o‘lchagan analog signal mikroprotsessor tushunadigan raqamli qiymatga nima orqali o‘tadi?',
        options: ['ADC (Analog-to-Digital Converter)', 'Aktuator', 'Plotter', 'SMTP'],
        answer: 0,
        explanation: 'Mikroprotsessor faqat raqamli signalni qayta ishlagani uchun ADC zarur.',
      },
      {
        prompt: 'Bug‘ qozonlari va avtomobil shinalarida xavfsiz darajani nazorat qiluvchi sensor qaysi?',
        options: ['Bosim sensori', 'Yorug‘lik sensori', 'PIR sensori', 'OCR'],
        answer: 0,
        explanation: 'Bosim sensori gaz yoki suyuqlik bosimi xavfli chegaradan oshsa ogohlantiradi.',
      },
      {
        prompt: 'Qishloq xo‘jaligida suvni tejash uchun tomchilatib sug‘orishni faqat tuproq quriganda yoquvchi datchik nima?',
        options: ['Namlik sensori (Moisture sensor)', 'Harakat sensori', 'Yorug‘lik sensori', 'Magnit skaner'],
        answer: 0,
        explanation: 'Tuproq namligi sensori ildiz atrofidagi suv miqdorini aniq o‘lchaydi.',
      },
    ],
    teacherNotes: {
      method: 'Arduino sensor to‘plamini (yoki rasmlarini) ko‘rsatib, Input (Sensor) vs Output (Aktuator) zanjirini mustahkamlash.',
      timing: 'Harakat/Bosim 15 daq, Namlik/Harorat/Yorug‘lik 15 daq, Match va quiz 15 daq.',
      assessment: '5 ta sensorning vazifasi va mos tizimini to‘g‘ri ko‘rsatish.',
      homework: '"Aqlli uy" xonasida 5 ta sensorning har biri qaysi vazifani bajarishini yozib keling.',
    },
  },
  {
    id: 'g10-l13',
    grade: 10,
    no: 13,
    part: '1-chorak',
    title: 'Elektron xavfsizlik tushunchasi.',
    kind: 'dars',
    hours: 1,
    tools: ['E-safety', 'Raqamli iz (Digital Footprint)', 'Kibergigiyena'],
    objectives: [
      'O‘quvchi Elektron xavfsizlik (E-safety) tamoyillarini — shaxsiy ma’lumotlarni asrash, maxfiylik sozlamalari, raqamli iz (Digital Footprint) va onlayn firibgarlikdan saqlanishni chuqur tushunadi.',
      'O‘quvchi kiberbulling, zararli havolalar va shubhali tanishuvlarga qarshi xavfsiz xulq-atvor strategiyasini qo‘llaydi.',
    ],
    intro:
      'Internetdagi har bir bosilgan "Like", yozilgan izoh va yuklangan surat o‘chmaydigan **Raqamli iz (Digital Footprint)** qoldiradi! Elektron xavfsizlik nafaqat qurilmani, balki obro‘ingiz, mablag‘ingiz va shaxsiy hayotingizni himoya qiladi.',
    sections: [
      {
        heading: 'Raqamli iz (Digital Footprint) va Shaxsiy maʼlumotlar',
        body: 'Raqamli iz ikki xil bo‘ladi: **Faol iz** (o‘zingiz bilib joylagan post, rasm, izoh) va **Passiv iz** (saytlar siz bilmagan holda yig‘adigan Cookie, IP manzil, qidiruv tarixi). Maxfiylik qoidalari: ijtimoiy tarmoq profilini yopiq/do‘stlar uchun qilish, geolokatsiyani o‘chirish, pasport/karta/uy manzili rasmlarini hech qachon joylamaslik, bir xil parolni hamma saytda ishlatmaslik va 2FA yoqish.',
        example: 'Kelajakda universitet yoki ish beruvchi nomzodning ijtimoiy tarmoqdagi eski qo‘pol izohlarini ko‘rib rad javobi berishi mumkin — raqamli iz yo‘qolmaydi!',
        tip: 'Onlayn o‘yinlarda ham haqiqiy ism, maktab raqami yoki telefonni begona o‘yinchilarga aytmang!',
      },
      {
        heading: 'Onlayn tahdidlarga qarshi E-safety qoidalari',
        body: '1) Shubhali ilova va fayllarni faqat rasmiy do‘konlardan (Google Play, App Store, rasmiy sayt) yuklang; 2) Tekin sovg‘a/lotereya vaʼda qiluvchi havolalarga ishonmang; 3) Kiberbulling yoki tahdid bo‘lsa muloqotga kirishmang, dalilni saqlang, bloklang va ota-ona/maktab/ishonch raqamiga xabar bering; 4) Onlayn tanishgan odam bilan kattalar roziligisiz va yolg‘iz uchrashmang.',
        example: 'Agar do‘stingiz akkauntidan "Menga zudlik bilan pul tashlab tur, ertaga qaytaraman" deb yozsa — avval telefon orqali ovozini eshitib tekshiring (akkaunt buzilgan bo‘lishi mumkin!).',
      },
    ],
    keyTerms: [
      { term: 'Raqamli iz (Digital Footprint)', definition: 'Foydalanuvchining Internetda qoldiradigan barcha faol va passiv ma’lumot izlari.' },
      { term: 'Elektron xavfsizlik (E-safety)', definition: 'Onlayn muhitda shaxsiy xavfsizlik, maxfiylik va ruhiy salomatlikni asrash qoidalari.' },
      { term: 'Kiberbulling', definition: 'Raqamli platformalar orqali atayin haqorat qilish, qo‘rqitish yoki obro‘sizlantirish.' },
      { term: 'Maxfiylik sozlamalari', definition: 'Profil, rasm va shaxsiy ma’lumotlarni kim ko‘ra olishini cheklovchi parametrlar.' },
    ],
    steps: [
      '1. Faol va passiv raqamli iz misollarini ajrating.',
      '2. Ijtimoiy tarmoqdagi xavfsizlik tekshiruv ro‘yxatini (2FA, yopiq profil, geo-tegsiz rasm) tuzing.',
      '3. Quyidagi CaseStudy vaziyatida eng to‘g‘ri E-safety harakatini tanlang.',
    ],
    practice: [
      {
        task: 'Faol va Passiv raqamli iz o‘rtasidagi farqni 1 tadan aniq misol bilan tushuntiring.',
        expected: 'Faol iz — o‘zingiz yuklagan rasm yoki izoh; Passiv iz — veb-sayt yig‘adigan tashrif tarixi, IP va cookie fayllar.',
        difficulty: 'oson',
      },
      {
        task: 'Telegramda eng yaqin do‘stingizning profilidan "Shoshilinch karta raqamim ishlamayapti, 500 ming tashlab tur" degan xabar kelsa qanday tekshirasiz?',
        expected: 'Hech qachon darhol pul o‘tkazmaslik, balki oddiy telefon qo‘ng‘irog‘i orqali haqiqatan o‘zi yozganini tasdiqlash (akkaunt hijacking bo‘lishi mumkin).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l13-g1',
        num: '01',
        title: 'E-safety: Raqamli vaziyatni bahola',
        topic: 'Elektron xavfsizlik',
        difficulty: 'Oson',
        engine: 'casestudy',
        config: {
          prompt: 'Qaysi harakat E-safety qoidalariga to‘liq mos keladi?',
          scenario: 'Onlayn o‘yin chatida o‘zini 14 yoshli bola deb tanishtirgan notanish foydalanuvchi sizdan qaysi maktabda o‘qishingizni va uchrashish uchun telefon raqamingizni so‘radi.',
          options: [
            {
              text: 'Shaxsiy ma’lumot (maktab, manzil, telefon) bermaslik, muloqotni to‘xtatish va ota-onaga xabar berish',
              isCorrect: true,
              feedback: 'To‘g‘ri! Internetda har kim o‘zini boshqa odam qilib ko‘rsatishi mumkin; shaxsiy ma’lumot va yolg‘iz uchrashish xavfli.',
            },
            {
              text: 'Maktab raqami va dars tugash vaqtini yozib yuborish',
              isCorrect: false,
              feedback: 'Bu sizning real hayotdagi jismoniy xavfsizligingizga tahdid solishi mumkin.',
            },
            {
              text: 'U bilan uchrashishga hech kimga aytmay borish',
              isCorrect: false,
              feedback: 'Hech qachon notanish onlayn suhbatdosh bilan kattalar xabarisiz uchrashmang.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Foydalanuvchi Internetda bilib yoki bilmay qoldiradigan barcha ma’lumot va harakatlar izi nima deyiladi?',
        options: ['Raqamli iz (Digital Footprint)', 'Kesh xotira', 'Check Digit', 'ROM'],
        answer: 0,
        explanation: 'Digital Footprint — sizning onlayn tarixingiz va obro‘ingiz izidir.',
      },
      {
        prompt: 'Saytlar foydalanuvchining qiziqishlari va sessiyasini kuzatish uchun brauzerda saqlaydigan kichik fayllar nima?',
        options: ['Cookies', 'Plotter', 'Firmware', 'Drivers'],
        answer: 0,
        explanation: 'Cookie fayllar passiv raqamli izning bir qismi bo‘lib, foydalanuvchi sozlamalari va tashrifini eslab qoladi.',
      },
      {
        prompt: 'Ijtimoiy tarmoqqa yangi uy kaliti yoki samolyot chiptasi (shtrix-kodli) suratini qo‘yish nima uchun xavfli?',
        options: ['Jinoyatchilar chipta kodi va manzildan shaxsiy ma’lumot va uyda yo‘qligingizni bilib olishi mumkin', 'Telefon batareyasi tugaydi', 'Rasm oq-qora bo‘ladi', 'Wi-Fi sekinlashadi'],
        answer: 0,
        explanation: 'Chiptadagi shtrix-kod va geo-teglar shaxsiy ma’lumot va manzilni oshkor qiladi.',
      },
      {
        prompt: 'Kiberbulling qurboni bo‘lganda qilinadigan TO‘G‘RI qadamlar ketma-ketligi qaysi?',
        options: ['Skrinshot saqlash → Tajovuzkorni bloklash → Ota-ona/ustoz/ma’muriyatga xabar berish', 'Javob haqorat yozish → Parolni berish', 'Kompyuterni sindirish', 'Hammasini o‘chirib jim yurish'],
        answer: 0,
        explanation: 'Dalil saqlash, aloqani uzish va yordam so‘rash eng xavfsiz yondashuvdir.',
      },
      {
        prompt: 'Onlayn hisoblarni buzib kirishdan himoyalashning eng kuchli bazaviy chorasi qaysi?',
        options: ['Har saytda noyob kuchli parol + 2FA (Ikki bosqichli tasdiqlash)', 'Bitta "123456" paroli', 'Profilni hammaga ochish', 'Shubhali ilovalar o‘rnatish'],
        answer: 0,
        explanation: 'Noyob parol va 2FA hisobni egallab olish xavfini keskin kamaytiradi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda "Raqamli iz 10 yildan keyin ham qoladi" mavzusida ochiq suhbat.',
      timing: 'Raqamli iz 15 daq, E-safety qoidalari 15 daq, Case study va quiz 15 daq.',
      assessment: 'Faol/Passiv iz va kiberbullingda to‘g‘ri harakatni bilish.',
      homework: 'O‘zingiz foydalanadigan ijtimoiy tarmoqlarda maxfiylik sozlamalarini tekshirib, 4 bandli hisobot yozing.',
    },
  },
  {
    id: 'g10-l14',
    grade: 10,
    no: 14,
    part: '1-chorak',
    title: 'Phishing, Pharming, Vishing, Troyan, Worm, Spyware, Rootkit, Adware, Ransomware tushunchalari va xavfsizlikni ta`minlash.',
    kind: 'dars',
    hours: 1,
    tools: ['Kiberhimoya', '9 ta kiber-tahdid tahlili', 'Antivirus / Backup / 2FA'],
    objectives: [
      'O‘quvchi 9 ta asosiy kiber-tahdidning (Phishing, Pharming, Vishing, Troyan, Worm, Spyware, Rootkit, Adware, Ransomware) har birining ishlash mexanizmi va farqini aniq tushuntira oladi.',
      'O‘quvchi ushbu tahdidlardan himoyalanishning ko‘p qatlamli chora-tadbirlarini (yangilanishlar, Antivirus/EDR, Firewall, 3-2-1 zaxira nusxa, hushyorlik) qo‘llaydi.',
    ],
    intro:
      'Kiberxavfsizlikda dushmanni tanish — himoyalanishning yarim garovidir! Bugun firibgarlik va zararli dasturlarning barcha 9 asosiy turini alohida o‘rganib, ularning har biriga qarshi aniq himoya qalqonini ko‘rib chiqamiz.',
    sections: [
      {
        heading: 'Ijtimoiy muhandislik hujumlari: Phishing, Pharming, Vishing',
        body: '1) **Phishing**: soxta elektron xat va havola orqali bank/pochta nomidan parol va karta ma’lumotini aldayotgan firibgarlik (himoya: jo‘natuvchi domenini tekshirish, havolani bosmaslik). 2) **Pharming**: foydalanuvchi to‘g‘ri sayt manzilini yozsa ham, zararli dastur yoki DNS zaharlanishi orqali uni yashirincha soxta saytga yo‘naltirish (himoya: HTTPS sertifikatini tekshirish, ishonchli DNS va antivirus). 3) **Vishing** (Voice Phishing): telefon qo‘ng‘irog‘i orqali o‘zini "bank xavfsizlik xizmati" deb tanishtirib, SMS kod yoki CVV so‘rash (himoya: hech kimga SMS kod bermang, telefonni qo‘yib bankning rasmiy raqamiga o‘zingiz qo‘ng‘iroq qiling!).',
        example: 'Qo‘ng‘iroq qilib "Kartangizdan pul yechilmoqda, to‘xtatish uchun SMS kodni ayting" deyish — 100% Vishing firibgarligidir!',
        tip: 'Banklar hech qachon qo‘ng‘iroq qilib SMS kod yoki karta PIN kodini so‘ramaydi!',
      },
      {
        heading: '6 ta asosiy zararli dastur (Malware) va Himoyalanish',
        body: '4) **Troyan (Trojan Horse)**: foydali dastur (bepul o‘yin, buzilgan dastur) niqobi ostida kirib, ichida yashirin zararli kodni ishga tushiradigan dastur (o‘zidan ko‘paymaydi). 5) **Worm (Chuvalchang)**: hech qanday foydali dasturga yopishmasdan va foydalanuvchi bosishisiz tarmoq zaifliklari orqali mustaqil nusxalanib tarqaladi. 6) **Spyware**: foydalanuvchi roziligisiz ma’lumotlarni (jumladan **Keylogger** — bosilgan tugmalar va parollarni) yashirincha kuzatib tashqariga yuboradi. 7) **Rootkit**: tizimning eng chuqur (administrator/yadro) darajasiga kirib, o‘zini va boshqa zararli dasturlarni Antivirus va Task Manager dan yashirib oladi. 8) **Adware**: doimiy bezovta qiluvchi reklama oynalarini chiqaradi va brauzer sahifasini o‘zgartiradi. 9) **Ransomware**: kompyuterdagi barcha hujjat va rasmlarni shifrlab qulflaydi va ochish uchun pul (tovon) talab qiladi! Himoya: OS va dasturlarni doim yangilash (patching), rasmiy manbadan yuklash, Antivirus + Firewall hamda oflayn/bulut **3-2-1 zaxira nusxa (Backup)** — Ransomware ga qarshi eng ishonchli qalqon!',
        example: 'Agar sizda oflayn tashqi diskda kechagi 3-2-1 zaxira nusxa bo‘lsa, Ransomware fayllaringizni qulflasa ham firibgarlarga pul to‘lamay tizimni tozalab qayta tiklay olasiz!',
      },
    ],
    keyTerms: [
      { term: 'Phishing / Pharming / Vishing', definition: 'Soxta email (Phishing), DNS/soxta saytga burish (Pharming) va telefon qo‘ng‘irog‘i (Vishing) firibgarliklari.' },
      { term: 'Troyan va Worm', definition: 'Troyan — foydali dastur niqobida kiradi; Worm — tarmoq orqali mustaqil ko‘payib tarqaladi.' },
      { term: 'Spyware va Rootkit', definition: 'Spyware yashirincha kuzatadi (masalan keylogger); Rootkit esa tizim yadrosida zararli faoliyatni yashiradi.' },
      { term: 'Adware va Ransomware', definition: 'Adware majburiy reklama chiqaradi; Ransomware fayllarni shifrlab tovon talab qiladi.' },
    ],
    steps: [
      '1. Barcha 9 ta tahdidni 3 guruhga ajrating: Firibgarlik (3), Yashirin kirish/kuzatuv (4), Reklama/Tovon (2).',
      '2. Har bir tahdid uchun 1 tadan aniq himoya chorasini yozing.',
      '3. Quyidagi Flashcards va testda barcha 9 tushunchani yoddan tekshiring.',
    ],
    practice: [
      {
        task: 'Troyan (Trojan) va Chuvalchang (Worm) zararli dasturlari tarqalish usuli bilan qanday farq qiladi?',
        expected: 'Troyan foydali dastur/fayl niqobi ostida foydalanuvchi o‘rnatishi orqali kiradi va mustaqil ko‘paymaydi; Worm esa tarmoq bo‘shliqlari orqali foydalanuvchi harakatisiz avtomatik ko‘payib tarqaladi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Ransomware hujumidan keyin ma’lumotlarni firibgarlarga pul bermasdan qaytarishning yagona ishonchli oldindan ko‘riladigan chorasi nima?',
        expected: 'Tizimdan uzilgan (oflayn yoki alohida bulut versiyali) muntazam zaxira nusxa (3-2-1 Backup) ga ega bo‘lish.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l14-g1',
        num: '01',
        title: '9 ta Kiber-tahdid lug‘at kartochkalari',
        topic: 'Kiberxavfsizlik va Malware',
        difficulty: 'O‘rta',
        engine: 'flashcards',
        config: {
          prompt: 'Barcha 9 ta asosiy kiber-tahdid taʼrifi va himoya usulini kartochkalarda tekshiring.',
          cards: [
            { term: 'Phishing / Vishing / Pharming', definition: 'Phishing: soxta email/havola; Vishing: bank xodimi bo‘lib telefon qilish; Pharming: DNS orqali yashirincha soxta saytga burish.', example: 'Himoya: domen va HTTPS ni tekshirish, SMS kod bermaslik' },
            { term: 'Troyan vs Worm', definition: 'Troyan: bepul o‘yin/dastur niqobidagi yashirin zararli kod; Worm: tarmoq bo‘ylab mustaqil ko‘payuvchi zararkunanda.', example: 'Himoya: rasmiy saytlardan yuklash va OS yangilash' },
            { term: 'Spyware vs Rootkit', definition: 'Spyware: tugmalar va parolni yashirincha josuslik qilib yig‘adi; Rootkit: tizim yadrosida administrator huquqi bilan o‘zini antivirusdan yashiradi.', example: 'Himoya: kuchli Antivirus/EDR va minimal admin huquqi' },
            { term: 'Adware vs Ransomware', definition: 'Adware: tinimsiz pop-up reklama chiqaradi; Ransomware: barcha fayllarni shifrlab tovon (pul) talab qiladi.', example: 'Himoya: reklama blokeri va oflayn 3-2-1 Backup' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Telefon orqali qo‘ng‘iroq qilib, o‘zini bank xavfsizlik xizmati deb tanishtirib SMS-kod so‘rash firibgarligi qaysi?',
        options: ['Vishing (Voice Phishing)', 'Pharming', 'Adware', 'Rootkit'],
        answer: 0,
        explanation: 'Vishing — ovozli telefon qo‘ng‘irog‘i orqali amalga oshiriladigan ijtimoiy muhandislik hujumidir.',
      },
      {
        prompt: 'Kompyuterdagi barcha hujjat va suratlarni shifrlab qulflab qo‘yib, ochish evaziga pul talab qiluvchi zararli dastur nima?',
        options: ['Ransomware', 'Adware', 'Spyware', 'Cookie'],
        answer: 0,
        explanation: 'Ransomware (ransom — tovon) fayllarni shifrlab foydalanuvchidan to‘lov talab qiladi.',
      },
      {
        prompt: 'Tizimning eng chuqur administrator darajasiga joylashib, o‘zining va boshqa viruslarning mavjudligini antivirusdan yashirib turadigan dastur qaysi?',
        options: ['Rootkit', 'Adware', 'Vishing', 'Phishing'],
        answer: 0,
        explanation: 'Rootkit tizim jarayonlariga aralashib, Task Manager va antivirusdan yashirinishga urinadi.',
      },
      {
        prompt: 'Tarmoq zaifliklaridan foydalanib, boshqa faylga yopishmasdan va odam harakatisiz mustaqil ko‘payib tarqaluvchi zararkunanda nima?',
        options: ['Worm (Chuvalchang)', 'Troyan', 'Adware', 'Pharming'],
        answer: 0,
        explanation: 'Worm tarmoq bo‘ylab o‘z nusxalarini avtomatik tarqata oladi.',
      },
      {
        prompt: 'Foydali dastur niqobi ostida kiradigan (A) hamda foydalanuvchi tugma bosishlarini yashirin kuzatadigan (B) dasturlar mos ravishda qaysilar?',
        options: ['A — Troyan, B — Spyware', 'A — Adware, B — Worm', 'A — Rootkit, B — Vishing', 'A — Pharming, B — Firewall'],
        answer: 0,
        explanation: 'Troyan foydali dasturdek ko‘rinadi; Spyware (masalan, keylogger) esa foydalanuvchini yashirin kuzatadi.',
      },
    ],
    teacherNotes: {
      method: 'Barcha 9 ta tahdidni "Firibgarlik vs Malware" jadvalida aniq himoya chorasi bilan o‘rgatish (faqat himoya nuqtai nazaridan!).',
      timing: 'Phishing/Pharming/Vishing 15 daq, 6 ta Malware 20 daq, Flashcards va test 10 daq.',
      assessment: 'Har bir 9 atamani aniq ajratib, uning qarshi chorasini aytish.',
      homework: '9 ta kiber-tahdidning har biri uchun 1 qatorli taʼrif va 1 qatorli himoya chorasi jadvalini yozing.',
    },
  },
  {
    id: 'g10-l15',
    grade: 10,
    no: 15,
    part: '1-chorak',
    title: 'Salomatlik va xavfsizlik.',
    kind: 'dars',
    hours: 1,
    tools: ['Ergonomika', 'Ish o‘rni auditi', 'Elektr va Yong‘in xavfsizligi'],
    objectives: [
      'O‘quvchi 10-sinf darajasida kompyuter bilan ishlashda salomatlik muammolarini (RSI/Karpal tunnel sindromi, Ko‘z charchashi, Orqa/Bo‘yin og‘rig‘i, Ozon chiqishi) tahlil qiladi.',
      'O‘quvchi ofis va maktab xonalarida ish joyi ergonomikasi hamda elektr/yong‘in xavfsizligi auditini o‘tkazadi.',
    ],
    intro:
      'Zamonaviy IT mutaxassisi kuniga 8–10 soat ekran qarshisida ishlaydi. Agar ergonomik qoidalarga amal qilinmasa, yoshlikdanoq Karpal tunnel sindromi (bilak og‘rig‘i), ko‘z xiralashishi va umurtqa qiyshayishi rivojlanishi mumkin.',
    sections: [
      {
        heading: 'Salomatlik muammolari va chuqur Ergonomik yechimlar',
        body: '1) **RSI / Karpal tunnel sindromi**: klaviatura va sichqonchada bilakni bukib uzoq ishlashdan paydo bo‘ladi — yechim: bilak uchun jel tayanch (wrist rest), ergonomik klaviatura va sichqoncha, har soatda qo‘l mashqlari. 2) **Kompyuter ko‘rish sindromi (Ko‘z charchashi)**: ekran miltillashi, quyosh aks etishi, kam pirpiratish — yechim: 20-20-20 qoidasi, anti-glare ekran, ko‘zdan 50–70 sm masofa, xona yorug‘ligi ekran yorug‘ligiga mos bo‘lishi. 3) **Umurtqa va Bo‘yin og‘rig‘i**: egilib o‘tirish — yechim: 5 oyoqli g‘ildirakli sozlanadigan stul, bel tayanchi (lumbar support), tizza va tirsak 90° burchakda, oyoqlar polga yoki oyoq tayanchiga to‘liq tegib turishi. 4) **Lazer printer ozoni**: yopiq kichik xonada ko‘p lazer printer ishlasa havo quriydi va ozon ajraladi — xonani shamollatish zarur.',
        example: 'Stul juda baland bo‘lib oyoq havoda osilib qolsa, son tomirlari siqilib qon aylanishi buziladi — shuning uchun oyoq tayanchi (footrest) qo‘yiladi.',
        tip: 'Monitorning eng yuqori qatori ko‘z sathida bo‘lsa, bo‘yin oldinga egilmaydi.',
      },
      {
        heading: 'Ish joyidagi texnik xavfsizlik (Elektr, Yong‘in, Og‘irlik)',
        body: '1) Elektr toki urishi: ochiq simlar, kompyuter yonida ichimliklar; yechim — RCD (himoya o‘chirgich), suyuqlikni stolga qo‘ymaslik. 2) Yong‘in xavfi: bitta rozetkaga ketma-ket uzaytirgichlar ulash (daisy-chaining) — yechim: ko‘proq devor rozetkalari va kompyuter xonasida CO2 (karbonat angidrid) o‘t o‘chirgichi bo‘lishi (elektrda suv ishlatilmaydi!). 3) Qoqilish va uskuna tushishi: kabellarni trunking kanaliga olish, og‘ir printerlarni mustahkam stol o‘rtasiga qo‘yish.',
        example: 'Elektr yong‘inida suv sepish qatʼiyan taqiqlanadi — tok urishi mumkin; buning o‘rniga CO2 yoki kukunli o‘t o‘chirgich ishlatiladi!',
      },
    ],
    keyTerms: [
      { term: 'Karpal tunnel / RSI', definition: 'Bilakdagi asab va paylarning takroriy harakat va noto‘g‘ri holat tufayli siqilib og‘rishi.' },
      { term: 'Lumbar support & Footrest', definition: 'Bel qismini tutib turuvchi stul tayanchi va oyoqlar uchun maxsus taglik.' },
      { term: 'CO2 o‘t o‘chirgich', definition: 'Elektr jihozlaridagi yong‘inni qisqa tutashuvsiz xavfsiz o‘chirish vositasi.' },
      { term: 'Daisy-chaining xavfi', definition: 'Bitta rozetkaga bir nechta uzaytirgichni ulab haddan tashqari qizish va yong‘in keltirib chiqarish.' },
    ],
    steps: [
      '1. Tirsak 90°, tizza 90°, ko‘zdan ekranga 50–70 sm ergonomik qoidalarini tekshiring.',
      '2. Elektr yong‘ini va qoqilish xavflari oldini olish choralarini yozing.',
      '3. Quyidagi Match o‘yinida muammo va aniq yechimlarni juftlang.',
    ],
    practice: [
      {
        task: 'Nima uchun kompyuter sinfida yong‘in chiqqanda suvli o‘t o‘chirgich emas, CO2 (karbonat angidrid) o‘t o‘chirgichi ishlatilishi shart?',
        expected: 'Suv elektr tokini o‘tkazadi va o‘chirayotgan odamni tok urishi hamda uskunalarni butunlay qisqa tutashuvga uchratishi mumkin.',
        difficulty: 'oson',
      },
      {
        task: 'Bo‘yi pastroq o‘quvchi baland stolda o‘tirganda stulni ko‘tarishi bilan oyoqlari yerga yetmay qoldi. Qanday 2 ergonomik yechim berasiz?',
        expected: 'Oyoq ostiga maxsus `Footrest` (oyoq tayanchi) qo‘yish hamda stol balandligi sozlanadigan bo‘lsa uni tushirish.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l15-g1',
        num: '01',
        title: 'Salomatlik va Texnik xavfsizlik mosligi',
        topic: 'Salomatlik va xavfsizlik',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'Ish joyidagi xavf yoki kasallikni uning to‘g‘ri oldini olish chorasi bilan juftlang.',
          pairs: [
            { left: 'Karpal tunnel sindromi (RSI)', right: 'Ergonomik klaviatura, bilak tayanchi va tanaffuslar' },
            { left: 'Elektr uskunalari yong‘ini', right: 'CO2 o‘t o‘chirgich va uzaytirgichni ortiqcha yuklamaslik' },
            { left: 'Yopiq xonada lazer printerdan ozon/issiqlik', right: 'Xonani muntazam shamollatish va printerlarni alohida joylash' },
            { left: 'Oyog‘i yerga yetmay tomir siqilishi', right: 'Oyoq tayanchi (Footrest) va sozlanadigan stul' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Kompyuter xonasida elektr jihozlari yonganda qaysi o‘t o‘chirish vositasi ishlatiladi?',
        options: ['CO2 (karbonat angidrid) o‘t o‘chirgichi', 'Suvli shlang', 'Oddiy chelakda suv', 'Qog‘oz'],
        answer: 0,
        explanation: 'CO2 elektr tokini o‘tkazmaydi va qurilmalarga suv kabi qo‘shimcha zarar bermaydi.',
      },
      {
        prompt: 'Bitta devor rozetkasiga ketma-ket 3 ta uzaytirgich (pilot) ulab kompyuterlarni yoqish qanday xavf tug‘diradi?',
        options: ['Rozetka va simlar haddan tashqari qizib yong‘in chiqishi (Overloading)', 'Internet tezlashishi', 'RAM oshishi', 'Monitor kattalashishi'],
        answer: 0,
        explanation: 'Ortiqcha elektr yuki izolyatsiyani eritib yong‘inga olib keladi.',
      },
      {
        prompt: 'Karpal tunnel sindromi / RSI ning oldini olish uchun sichqoncha va klaviatura bilan ishlaganda bilak qanday holatda bo‘lishi kerak?',
        options: ['To‘g‘ri (neytral) chiziqda, bilak tayanchiga yengil tayanib', '90° yuqoriga qayrilib', 'Stol chetiga qattiq bosilib', 'Havoda osilib'],
        answer: 0,
        explanation: 'Neytral to‘g‘ri burchak bilakdagi pay va asab tolalariga bosimni kamaytiradi.',
      },
      {
        prompt: 'Kichik yopiq xonada ko‘plab lazer printerlar uzluksiz ishlaganda qaysi xavfsizlik chorasi zarur?',
        options: ['Yaxshi shamollatish (ventilyatsiya) — ozon va toner zarralaridan himoya', 'Derazalarni yopishtirish', 'Printerga suv sepish', 'Chiroqni o‘chirish'],
        answer: 0,
        explanation: 'Lazer printerlar yuqori kuchlanish tufayli ozon va issiqlik chiqaradi, shuning uchun havo almashinuvi muhim.',
      },
      {
        prompt: 'Kompyuterda ishlaganda tirsak va tizza burchaklari qancha gradus atrofida bo‘lishi ergonomik meʼyor hisoblanadi?',
        options: ['Taxminan 90° (to‘g‘ri burchak)', '30°', '180°', '45°'],
        answer: 0,
        explanation: '90° burchak qon aylanishi va mushaklar zo‘riqmasligi uchun eng qulay holatdir.',
      },
    ],
    teacherNotes: {
      method: 'Sinfxonada real "Xavfsizlik va Ergonomika auditi" o‘tkazish (kabellar, monitor, stul, o‘t o‘chirgich).',
      timing: 'Ergonomika 15 daq, Elektr/Yong‘in/Ozon 15 daq, Match va quiz 15 daq.',
      assessment: 'CO2 o‘t o‘chirgich, daisy-chaining xavfi va ergonomik meʼyorlarni bilish.',
      homework: 'Maktab kompyuter xonasi uchun 6 bandli "Texnika xavfsizligi eslatmasi" ni tayyorlang.',
    },
  },
  {
    id: 'g10-l16',
    grade: 10,
    no: 16,
    part: '1-chorak',
    title: 'Raqamli tengsizlik tushunchasi va sabablari, Sanoati rivojlangan va rivojlanmagan hududlar, Ijtimoiy-iqtisodiy guruhlar.',
    kind: 'dars',
    hours: 1,
    tools: ['Digital Divide', 'Infratuzilma', 'Ijtimoiy-iqtisodiy omillar'],
    objectives: [
      'O‘quvchi Raqamli tengsizlik (Digital Divide) nima ekanini va uning asosiy sabablarini (iqtisodiy daromad, infratuzilma, taʼlim/savodxonlik, yosh, nogironlik) tahlil qiladi.',
      'O‘quvchi sanoati rivojlangan va rivojlanmagan hududlar, shahar va qishloq hamda turli ijtimoiy-iqtisodiy guruhlar orasidagi raqamli tafovut oqibatlari va yechimlarini baholaydi.',
    ],
    intro:
      'Bugun bir shaharda o‘quvchilar optik tolali Internet va sunʼiy intellekt bilan dars qilayotgan bir paytda, dunyoning boshqa chekkasida millionlab insonlarda hatto barqaror elektr yoki kompyuter yo‘q. Bu tafovut **Raqamli tengsizlik (Digital Divide)** deyiladi.',
    sections: [
      {
        heading: 'Raqamli tengsizlikning sabablari va ko‘rinishlari',
        body: 'Raqamli tengsizlik — zamonaviy AKT va Internetdan foydalanish imkoniyati borlar bilan bunday imkoniyati cheklanganlar o‘rtasidagi tafovutdir. Asosiy omillar: 1) **Iqtisodiy**: qimmat noutbuk va internet tariflari kam taʼminlangan oilalar uchun og‘irlik qiladi; 2) **Geografik (Shahar vs Qishloq / Rivojlangan vs Rivojlanmagan hududlar)**: olis tog‘li yoki rivojlanayotgan hududlarda optik kabel, 4G/5G va elektr infratuzilmasi sust; 3) **Taʼlim va yosh**: keksa avlod yoki raqamli savodxonligi past insonlar onlayn davlat xizmatlaridan foydalanishga qiynaladi; 4) **Til va nogironlik**: ko‘p ilovalar mahalliy tilda yoki ko‘rish/eshitish imkoniyati cheklanganlarga moslanmagan.',
        example: 'Pandemiya davrida onlayn darslarga o‘tilganda uyida bittagina smartfoni bor ko‘p bolali oila va tezkor Wi-Fi + noutbukli oila orasidagi taʼlim farqi yaqqol ko‘rindi.',
        tip: 'Raqamli tengsizlik faqat "qurilma bor-yo‘qligi" emas, balki Internet tezligi va undan samarali foydalanish ko‘nikmasi farqini ham o‘z ichiga oladi!',
      },
      {
        heading: 'Oqibatlar va Raqamli tengsizlikni qisqartirish yo‘llari',
        body: 'Oqibatlari: sifatli taʼlim va yuqori maoshli IT ish o‘rinlaridan ortda qolish, onlayn bank/sog‘liq/davlat xizmatlaridan mahrum bo‘lish. Yechimlari: maktab va kutubxonalarda bepul kompyuter sinflari va Wi-Fi punktlari ochish, olis hududlarga sunʼiy yo‘ldosh (masalan, Starlink) va mobil minoralar tortish, arzon taʼlim noutbuklari dasturlari hamda yoshlar/keksalar uchun bepul raqamli savodxonlik kurslari tashkil etish.',
        example: 'O‘zbekistonda IT Park filiallari va "Bir million dasturchi" loyihasi chekka tuman yoshlariga ham teng taʼlim imkoniyatini yaratishga qaratilgan.',
      },
    ],
    keyTerms: [
      { term: 'Raqamli tengsizlik (Digital Divide)', definition: 'Turli hududlar va ijtimoiy guruhlar o‘rtasida kompyuter hamda Internetdan foydalanish imkoniyatidagi farq.' },
      { term: 'Infratuzilma tafovuti', definition: 'Shahar va qishloq/olis hududlar orasida elektr, optik tolali aloqa va mobil qamrov farqi.' },
      { term: 'Raqamli savodxonlik', definition: 'Raqamli qurilmalar va internet xizmatlaridan ishonchli va xavfsiz foydalana olish ko‘nikmasi.' },
      { term: 'Ijtimoiy-iqtisodiy omil', definition: 'Oila daromadi, taʼlim darajasi va narxlarning texnologiya xarid qilishga taʼsiri.' },
    ],
    steps: [
      '1. Raqamli tengsizlikka olib keluvchi 4 ta asosiy omilni (Hudud, Daromad, Yosh/Savodxonlik, Imkoniyat) sanang.',
      '2. Rivojlangan va rivojlanayotgan hududlardagi farqlarni taqqoslang.',
      '3. Tengsizlikni kamaytirish uchun 3 ta amaliy davlat/jamiyat chorasini taklif qiling.',
    ],
    practice: [
      {
        task: 'Nima uchun bir xil shahar ichida ham yuqori daromadli va kam taʼminlangan oilalar o‘rtasida raqamli tengsizlik bo‘lishi mumkin?',
        expected: 'Daromadi past oilalar zamonaviy noutbuk, planshet va yuqori tezlikli cheksiz internet to‘lovini ko‘tara olmasligi sababli.',
        difficulty: 'oson',
      },
      {
        task: 'Chekka qishloq maktabida optik internet hali yetib bormagan bo‘lsa, raqamli tengsizlikni kamaytirish uchun qanday 2 texnik/tashkiliy chora ko‘rish mumkin?',
        expected: '1) Sunʼiy yo‘ldosh yoki 4G/LTE kuchaytirgich antenna orqali internet ulash; 2) Oflayn ishlaydigan lokal serverli elektron darsliklar kutubxonasini o‘rnatish.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l16-g1',
        num: '01',
        title: 'Raqamli tengsizlik omillari va yechimlari',
        topic: 'Raqamli tengsizlik',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Raqamli tengsizlik sababini unga mos yechim chorasi bilan juftlang.',
          pairs: [
            { left: 'Olis qishloqda optik kabel yo‘qligi', right: 'Sun’iy yo‘ldosh interneti va mobil 4G/5G tayanch stansiyalari' },
            { left: 'Oila kompyuter sotib olishga qiynalishi', right: 'Maktab/kutubxonada bepul kompyuter markazlari va imtiyozli kredit' },
            { left: 'Keksalarning elektron xizmatlarni tushunmasligi', right: 'Bepul raqamli savodxonlik kurslari va sodda interfeys' },
            { left: 'Ko‘zi ojiz foydalanuvchi saytdan foydalanolmasligi', right: 'Accessibility (Screen-reader mosligi va Alt-matnlar)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '"Raqamli tengsizlik" (Digital Divide) atamasi nimani anglatadi?',
        options: ['AKT va Internetdan foydalanish imkoniyatiga ega guruhlar bilan bunday imkoniyati cheklanganlar orasidagi farq', 'Ikki raqamni bo‘lish amali', 'Monitor ekranini ikkiga bo‘lish', 'Kabel uzunligi'],
        answer: 0,
        explanation: 'Digital Divide ijtimoiy, iqtisodiy va geografik texnologiya tafovutidir.',
      },
      {
        prompt: 'Sanoati rivojlangan va rivojlanmagan hududlar orasidagi raqamli tengsizlikning asosiy sababi nima?',
        options: ['Aloqa infratuzilmasi, elektr taʼminoti va iqtisodiy imkoniyatlar farqi', 'Iqlim faqat sovuqligi', 'Harflar soni ko‘pligi', 'Kompyuter sichqonchasi rangi'],
        answer: 0,
        explanation: 'Tezkor aloqa liniyalari va xarid qobiliyati infratuzilmaga bog‘liq.',
      },
      {
        prompt: 'Davlat barcha xizmatlarni (pensiya, nafaqa, shifokor navbati) faqat internetga o‘tkazsa, qaysi guruh eng ko‘p qiynalishi mumkin?',
        options: ['Keksalar, kam taʼminlanganlar va interneti yo‘q qishloq aholisi', 'Professional dasturchilar', 'IT kompaniya menejerlari', 'O‘yin studiyalari'],
        answer: 0,
        explanation: 'Raqamli savodxonligi past yoki qurilmasi yo‘q odamlar xizmatdan uzilib qolmasligi uchun anʼanaviy yoki yordam markazlari qolishi kerak.',
      },
      {
        prompt: 'Shahardagi jamoat kutubxonalarida bepul Wi-Fi va kompyuter zallari ochish nimaga xizmat qiladi?',
        options: ['Raqamli tengsizlikni qisqartirishga', 'Spamni oshirishga', 'Elektr sarfini bekor qilishga', 'Virus tarqatishga'],
        answer: 0,
        explanation: 'Ochiq jamoat punktlari shaxsiy kompyuteri yo‘q insonlarga ham Internet imkonini beradi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri raqamli tengsizlikka taʼsir etuvchi omil HISOBLANMAYDI?',
        options: ['Foydalanuvchining ko‘z rangi', 'Oila daromadi', 'Geografik joylashuv (shahar/qishloq)', 'Raqamli savodxonlik darajasi'],
        answer: 0,
        explanation: 'Daromad, hudud va taʼlim bevosita taʼsir qiladi; ko‘z rangi esa aloqador emas.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda "Internet bo‘lmagan 1 hafta" fikr tajribasi va yechimlar munozarasi.',
      timing: 'Digital Divide sabablari 20 daq, Yechimlar 15 daq, Match va quiz 10 daq.',
      assessment: 'Tengsizlikning 4 omilini va kamida 3 yechimni asoslash.',
      homework: 'O‘z hududingizda raqamli savodxonlikni oshirish uchun 1 ta ijtimoiy loyiha g‘oyasini yozing.',
    },
  },
  {
    id: 'g10-l17',
    grade: 10,
    no: 17,
    part: '1-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Bilim sinovi', 'Sensorlar, Kiberxavfsizlik, Salomatlik'],
    objectives: [
      'O‘quvchi 12–16-darslar (Sensorlar, E-safety, 9 ta Kiber-tahdid, Salomatlik/Ergonomika va Raqamli tengsizlik) bo‘yicha olgan bilimlarini tekshiradi.',
      'O‘quvchi himoya choralari va texnik vaziyatlar bo‘yicha yakuniy chorak testini bajaradi.',
    ],
    intro:
      'Ushbu nazorat ishi sensor texnologiyalari, elektron xavfsizlik, barcha 9 ta kiber-tahdid (Phishing dan Ransomware gacha), ish o‘rni xavfsizligi hamda raqamli tengsizlik mavzularini qamrab oladi.',
    sections: [
      {
        heading: 'Nazorat oldi asosiy xulosalar',
        body: 'Takrorlang: PIR (harakat/issiqlik), LDR (yorug‘lik), Namlik, Bosim, Harorat; Raqamli iz (Faol/Passiv); 9 tahdid: Phishing, Pharming, Vishing, Troyan, Worm, Spyware, Rootkit, Adware, Ransomware; Salomatlik: RSI, CO2 o‘t o‘chirgich, 90°/50–70 sm; Digital Divide sabablari va yechimlari.',
        example: 'Savolda "fayllarni shifrlab tovon so‘rash" — Ransomware; "elektr yong‘inini o‘chirish" — CO2.',
        tip: 'True/False o‘yinidagi har bir atamani diqqat bilan tekshiring.',
      },
    ],
    keyTerms: [
      { term: 'Sensorlar (PIR/LDR)', definition: 'Fizik muhit o‘zgarishini o‘lchab ADC ga uzatuvchi datchiklar.' },
      { term: '9 ta Kiber-tahdid', definition: 'Firibgarlik va zararli dasturlarning tasnifi hamda himoya mexanizmlari.' },
      { term: 'CO2 & Ergonomika', definition: 'Elektr xavfsizligi va bilak/ko‘z/umurtqa sog‘lig‘ini asrash.' },
      { term: 'Digital Divide', definition: 'Hudud va ijtimoiy guruhlar o‘rtasidagi raqamli imkoniyat tafovuti.' },
    ],
    steps: [
      '1. True/False o‘yinida 4 ta asosiy tasdiqni tekshiring.',
      '2. Sensorlar va Kiberxavfsizlik amaliy savollarini bajaring.',
      '3. Yakuniy 5 ta test savoliga javob bering.',
    ],
    practice: [
      {
        task: 'Troyan, Worm va Ransomware ning farqini 1 tadan qisqa gapda yozing.',
        expected: 'Troyan — foydali dastur niqobida kiradi; Worm — tarmoqda mustaqil ko‘payadi; Ransomware — fayllarni shifrlab tovon so‘raydi.',
        difficulty: 'oson',
      },
      {
        task: 'Avtomatik ko‘cha yoritishi va aqlli sug‘orishda qaysi sensorlar hamda elektr yong‘inida qaysi o‘t o‘chirgich ishlatiladi?',
        expected: 'Yorug‘lik (LDR) va Namlik (Moisture) sensorlari; yong‘inda — CO2 o‘t o‘chirgichi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l17-g1',
        num: '01',
        title: '1-chorak yakuniy nazorati',
        topic: 'Sensorlar, Xavfsizlik va Jamiyat',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Quyidagi ilmiy va xavfsizlik tasdiqlarini baholang.',
          statements: [
            {
              text: 'Vishing — telefon qo‘ng‘irog‘i orqali o‘zini bank xodimi deb tanishtirib maxfiy kod so‘rash firibgarligidir.',
              isTrue: true,
              explanation: 'To‘g‘ri! Voice Phishing ovozli qo‘ng‘iroq orqali amalga oshiriladi.',
            },
            {
              text: 'Elektr kompyuterlar yonib ketganda birinchi navbatda chelakda suv sepib o‘chirish kerak.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Suv tok o‘tkazadi; elektr yong‘inida CO2 yoki kukunli o‘t o‘chirgich qo‘llanadi.',
            },
            {
              text: 'Rootkit tizimning chuqur darajasiga joylashib, o‘zini va zararli fayllarni antivirusdan yashirishga harakat qiladi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Rootkit operatsion tizim yadrosi darajasida yashirinadi.',
            },
            {
              text: 'Raqamli tengsizlik faqat kompyuter narxiga bog‘liq, internet infratuzilmasi va savodxonlikning aloqasi yo‘q.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Infratuzilma, taʼlim/savodxonlik, til va nogironlik ham asosiy omillardir.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Tuproq namligini o‘lchab, suv nasosini avtomatik yoqish signali beradigan sensor qaysi?',
        options: ['Namlik sensori (Moisture sensor)', 'Yorug‘lik sensori', 'PIR harakat sensori', 'Bosim sensori'],
        answer: 0,
        explanation: 'Namlik sensori tuproq yoki havodagi suv miqdorini nazorat qiladi.',
      },
      {
        prompt: 'Foydalanuvchi to‘g‘ri veb-manzilni tergan bo‘lsa ham, DNS buzilishi tufayli soxta saytga yo‘naltirilishi nima?',
        options: ['Pharming', 'Vishing', 'Adware', 'RSI'],
        answer: 0,
        explanation: 'Pharming DNS yoki hosts faylini o‘zgartirib foydalanuvchini soxta sahifaga buradi.',
      },
      {
        prompt: 'Foydalanuvchining barcha klaviatura bosishlarini yashirincha yozib oluvchi Keylogger qaysi toifaga kiradi?',
        options: ['Spyware', 'Adware', 'Backup', 'CO2'],
        answer: 0,
        explanation: 'Spyware foydalanuvchi harakatlari va parollarini yashirin kuzatuvchi josus dasturdir.',
      },
      {
        prompt: 'Karpal tunnel sindromi (bilak og‘rig‘i) ning oldini olish uchun qaysi ergonomik chora ko‘riladi?',
        options: ['Bilak tayanchi (wrist rest), ergonomik klaviatura va muntazam tanaffuslar', 'Stulni juda past qilish', 'Monitorni yuqoriga ko‘tarish', 'Suv ichmaslik'],
        answer: 0,
        explanation: 'Bilakni to‘g‘ri holatda tutish va dam oldirish RSI xavfini kamaytiradi.',
      },
      {
        prompt: 'Shahar va qishloq o‘rtasidagi tezkor Internet hamda raqamli texnologiyalarga kirish farqi qanday ataladi?',
        options: ['Raqamli tengsizlik (Digital Divide)', 'Check Digit', 'Data Logging', 'Multitasking'],
        answer: 0,
        explanation: 'Geografik va iqtisodiy sabablarga ko‘ra texnologiyaga kirishdagi tafovut Raqamli tengsizlikdir.',
      },
    ],
    teacherNotes: {
      method: 'Chorak yakuniy nazorat — True/False hamda test bilan bilimlarni tekshirish.',
      timing: 'Kirish 5 daq, Nazorat ishi 35 daq, Xatolar tahlili 5 daq.',
      assessment: 'Barcha 9 ta tahdid va sensor/ergonomika tushunchalarini farqlash.',
      homework: 'Keyingi darsga rivojlangan va rivojlanayotgan davlatlardagi texnologik misollarni o‘ylab keling.',
    },
  },
  {
    id: 'g10-l18',
    grade: 10,
    no: 18,
    part: '1-chorak',
    title: 'Samarasi yuqori va past boʻlgan texnologiyalar. Turli davlatlardagi holatlarni o‘rganish',
    kind: 'dars',
    hours: 1,
    tools: ['High-tech vs Low-tech', 'Global Case Studies', 'Barqaror texnologiya'],
    objectives: [
      'O‘quvchi Yuqori texnologiyali (High-tech) va Oddiy/Arzon texnologiyali (Low-tech / Appropriate technology) yechimlarning iqtisodiy va ekologik samaradorligini solishtiradi.',
      'O‘quvchi turli mamlakatlar sharoitiga (elektr, byudjet, taʼlim darajasi) qarab nega baʼzan soddaroq texnologiya eng yaxshi natija berishini tahlil qiladi.',
    ],
    intro:
      'Har doim ham eng qimmat superkompyuter yoki robot eng samarali yechim bo‘lavermaydi! Agar hududda elektr energiyasi tez-tez o‘chsa yoki taʼmirlash ustasi bo‘lmasa, qimmat High-tech bir oyda chiqindiga aylanishi, oddiy va ishonchli Low-tech esa yillar davomida millionlab insonga xizmat qilishi mumkin.',
    sections: [
      {
        heading: 'High-tech va Low-tech (Moslashgan texnologiya) farqi',
        body: '**Yuqori texnologiya (High-tech)**: avtomatlashtirilgan robotlar, 5G, bulutli AI tizimlari, aqlli shahar sensorlari — juda yuqori tezlik va aniqlik beradi, biroq katta sarmoya, uzluksiz elektr va malakali muhandislarni talab qiladi. **Soddaroq / Mos texnologiya (Low-tech / Appropriate technology)**: arzon, taʼmirlash oson, kam energiya (yoki quyosh batareyasi) bilan ishlaydigan, mahalliy sharoitga mos yechimlar (masalan, qimmat bulutli tizim o‘rniga quyosh energiyali oflayn taʼlim plansheti yoki SMS orqali qishloq xo‘jaligi narxlarini olish).',
        example: 'Yaponiya va Janubiy Koreyada 5G/robotlashtirilgan zavodlar yuqori samara beradi; Sahro hududlarida esa qimmat elektr server o‘rniga quyosh batareyali oflayn server (RACHEL) maktablarga ko‘proq foyda keltiradi!',
        tip: 'Yaxshi muhandis "Eng qimmatini" emas, balki joyning sharoitiga ko‘ra **"Eng mosini (Appropriate Technology)"** tanlaydi!',
      },
      {
        heading: 'Turli davlatlardagi tajriba va O‘zbekiston konteksti',
        body: 'Rivojlangan davlatlarda (Estoniya — elektron hukumat, Singapur — Smart Nation) deyarli barcha davlat xizmatlari raqamli; rivojlanayotgan mamlakatlarda esa (masalan, Keniyadagi M-Pesa) qimmat bank terminallari va optik internet bo‘lmagan joylarda oddiy tugmali telefon + SMS orqali mobil pul o‘tkazmalari milliardlab odamlar hayotini inqilobiy o‘zgartirdi! O‘zbekistonda esa My.gov.uz, Click/Payme mobil to‘lovlari va olis maktablarni raqamlashtirish ikkala yo‘nalishni uyg‘unlashtirmoqda.',
        example: 'Keniya tajribasi (M-Pesa) shuni ko‘rsatdiki, oddiy SMS texnologiyasi to‘g‘ri qo‘llansa, hatto eng murakkab bank tizimidan ham ko‘proq odamga yetib boradi.',
      },
    ],
    keyTerms: [
      { term: 'High-tech (Yuqori texnologiya)', definition: 'Eng zamonaviy mikroelektronika, AI va katta infratuzilmaga tayanuvchi murakkab tizimlar.' },
      { term: 'Low-tech / Appropriate Tech', definition: 'Mahalliy sharoit, arzon narx va kam energiyaga moslashtirilgan sodda va ishonchli texnologiya.' },
      { term: 'M-Pesa / SMS Banking', definition: 'Smartfon va tezkor internetsiz, oddiy mobil aloqa orqali moliya xizmatlarini ko‘rsatish namunasi.' },
      { term: 'Barqarorlik (Sustainability)', definition: 'Texnologiyaning uzoq yillar mahalliy kuch bilan qo‘llab-quvvatlanib ishlay olishi.' },
    ],
    steps: [
      '1. High-tech va Low-tech yechimlarini 4 mezon (narx, energiya, kadrlar, samaradorlik) bo‘yicha solishtiring.',
      '2. Turli davlatlar misolini (Estoniya/Yaponiya vs Keniya/Olis hududlar) tahlil qiling.',
      '3. Quyidagi CaseStudy vaziyatida eng mos texnologiyani tanlang.',
    ],
    practice: [
      {
        task: 'Keniya dagi M-Pesa mobil to‘lov tizimi nima uchun interneti yo‘q qishloqlarda ham yuqori samara berdi?',
        expected: 'Chunki u qimmat smartfon va 4G internetni talab qilmay, oddiy tugmali telefonlar va SMS/USSD tarmog‘ida ishladi.',
        difficulty: 'oson',
      },
      {
        task: 'Elektr taʼminoti beqaror bo‘lgan tog‘li hududdagi maktabga 30 ta qimmat VR shlem olish afzalmi yoki quyosh panelli oflayn elektron kutubxona? Asoslang.',
        expected: 'Quyosh panelli oflayn kutubxona (Appropriate tech): u elektr uzilganda ham ishlaydi, barcha fanlarni qamrab oladi va taʼmiri oson.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l18-g1',
        num: '01',
        title: 'Hududga mos texnologiyani tanla',
        topic: 'High-tech va Low-tech',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Berilgan sharoitda qaysi texnologik yechim eng yuqori real samara beradi?',
          scenario: 'Internet tezligi juda past va ko‘pchilikda oddiy tugmali telefon bo‘lgan olis qishloq fermerlariga har kuni bozor narxlari va ob-havo ogohlantirishini yetkazish kerak.',
          options: [
            {
              text: 'Oddiy SMS / USSD xabarnoma xizmati (Low-tech, ishonchli va hamyonbop)',
              isCorrect: true,
              feedback: 'Ajoyib! Oddiy SMS barcha telefonlarda internetsiz ishlaydi va eng ko‘p fermerga tezkor yetib boradi.',
            },
            {
              text: 'Faqat 4K video strimingli VR ilovasi yaratish',
              isCorrect: false,
              feedback: 'Past internet va oddiy telefonlarda VR video umuman ochilmaydi.',
            },
            {
              text: 'Har bir fermerga ming dollarlik server sotib olishni buyurish',
              isCorrect: false,
              feedback: 'Bu iqtisodiy jihatdan imkonsiz va samarasiz yechim.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '"Appropriate Technology" (Moslashgan texnologiya) tushunchasi nimani anglatadi?',
        options: ['Mahalliy sharoit, byudjet, energiya va mutaxassislar imkoniyatiga eng mos keladigan texnologiyani tanlash', 'Faqat eng qimmat robotlarni sotib olish', 'Texnologiyadan butunlay voz kechish', 'Faqat eski qog‘oz ishlatish'],
        answer: 0,
        explanation: 'Samarali texnologiya doim mahalliy sharoit va barqarorlikka mos bo‘lishi kerak.',
      },
      {
        prompt: 'Keniya kabi mamlakatlarda M-Pesa tizimi bank infratuzilmasi bo‘lmagan hududlarda qanday muvaffaqiyatga erishdi?',
        options: ['Oddiy SMS/USSD orqali hamma ishlata oladigan mobil pul o‘tkazmasini joriy etib', 'Har bir uyga bankomat qo‘yib', 'Faqat oltin tanga tarqatib', 'Optik kabelni bepul berib'],
        answer: 0,
        explanation: 'Low-tech mobil aloqaga tayangan yechim millionlab odamlarni moliyaviy tizimga kiritdi.',
      },
      {
        prompt: 'High-tech (Yuqori texnologiya) zavodlarining asosiy talablari qaysilar?',
        options: ['Katta sarmoya, barqaror elektr/internet va yuqori malakali muhandislar', 'Faqat quyosh nuri', 'Hech qanday bilim talab qilmaydi', 'Elektrsiz ishlaydi'],
        answer: 0,
        explanation: 'Murakkab avtomatlashtirilgan tizimlar kuchli infratuzilma va mutaxassis talab qiladi.',
      },
      {
        prompt: 'Elektr uzilishlari ko‘p bo‘lgan hududda maktab elektron resurslari uzluksiz ishlashi uchun qaysi yechim samarali?',
        options: ['Quyosh energiyasida ishlovchi oflayn lokal taʼlim serveri', 'Bulutli 8K video oqimi', 'Faqat onlayn zoom', 'Katta Mainframe'],
        answer: 0,
        explanation: 'Oflayn lokal server va quyosh batareyasi elektr va internet muammosini hal qiladi.',
      },
      {
        prompt: 'Turli mamlakatlarning AKT rivojlanish darajasini solishtirganda nimaga eʼtibor beriladi?',
        options: ['Aholining Internet qamrovi, elektr barqarorligi, taʼlim va iqtisodiy darajaga', 'Faqat poytaxt nomiga', 'Bayroq rangiga', 'Shrift turiga'],
        answer: 0,
        explanation: 'Infratuzilma, iqtisodiyot va inson kapitali raqamli samaradorlikni belgilaydi.',
      },
    ],
    teacherNotes: {
      method: 'Estoniya (e-Gov), Yaponiya (Robototexnika) va Keniya (M-Pesa) misollarini taqqoslash.',
      timing: 'High vs Low tech 15 daq, Davlatlar tahlili 15 daq, Case study va quiz 15 daq.',
      assessment: 'Har doim ham qimmat texnologiya eng yaxshi emasligini asoslab tushuntirish.',
      homework: 'O‘zbekistonda so‘nggi yillarda joriy etilgan 3 ta muvaffaqiyatli raqamli xizmat (masalan, My.gov.uz, USSD/QR to‘lov) samaradorligini yozing.',
    },
  },
];
