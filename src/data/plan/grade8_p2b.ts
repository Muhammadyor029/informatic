import type { Lesson } from './types';

export const GRADE_8_P2B: Lesson[] = [
  {
    id: 'g8-l25',
    grade: 8,
    no: 25,
    part: '2-yarim yillik',
    title: 'Video va animatsiyalardan foydalanish. Asosiy tushunchalar',
    kind: 'dars',
    hours: 1,
    tools: ['Video', 'Pencil2D'],
    objectives: [
      'O‘quvchi kadr (Frame), FPS (Frames Per Second — soniyadagi kadrlar soni) va Vaqt chizig‘i (Timeline) tushunchalarini biladi.',
      'O‘quvchi rastrli (Frame-by-frame) va vektorli animatsiya hamda video montajning qo‘llanish sohalarini tushuntira oladi.',
    ],
    intro:
      'Multfilm va kinolardagi harakat aslida ko‘zimizning kichik aldanishidir: ekranda soniyasiga 24 ta rasm (kadr) juda tez almashsa, miyamiz uni silliq harakat deb qabul qiladi!',
    sections: [
      {
        heading: 'Kadr, FPS va Timeline nima?',
        body: 'Har bir video yoki animatsiya alohida suratchalardan — Kadrlardan (Frames) iborat. FPS (Frames Per Second) — 1 soniyada nechta kadr ko‘rsatilishini bildiradi: multfilmlarda odatda 12–24 FPS, videolarda 24–60 FPS ishlatiladi. Timeline (Vaqt chizig‘i) esa kadrlar, tasvirlar va ovoz yo‘lakchalarini vaqt bo‘yicha ketma-ket joylaydigan ish maydonidir.',
        example: 'Agar 12 FPS tezlikda 3 soniyalik multfilm qilmoqchi bo‘lsangiz, jami 12 × 3 = 36 ta kadr chizish kerak.',
        tip: 'FPS qancha yuqori bo‘lsa harakat shuncha silliq chiqadi, lekin chizish ishi va fayl hajmi ham shuncha ortadi!',
      },
      {
        heading: 'Video formatlar va ssenariy (Storyboard)',
        body: 'Video yaratishdan oldin kadrlar rejasi (Storyboard) tuziladi. Tayyor video esa keng tarqalgan `.mp4` (H.264 — yaxshi sifat va kichik hajm) formatida saqlanadi.',
        example: 'Ta’limiy videoda murakkab jarayonni (masalan, qon aylanishini) animatsiya bilan tushuntirish matndan 10 barobar samarali.',
      },
    ],
    keyTerms: [
      { term: 'Kadr (Frame)', definition: 'Video yoki animatsiyani tashkil etuvchi eng kichik bitta tasvir.' },
      { term: 'FPS (Frames Per Second)', definition: 'Bir soniyada almashadigan kadrlar soni (kadr chastotasi).' },
      { term: 'Timeline (Vaqt chizig‘i)', definition: 'Video, rasm va audio kliplarni vaqt tartibida joylashtiruvchi panel.' },
      { term: 'MP4 formati', definition: 'Yuqori sifat va ixcham hajmni saqlovchi eng ommabop video formati.' },
    ],
    steps: [
      '1. Flipbook (daftar burchagiga ketma-ket rasm chizib varaqash) misolida FPS ta’sirini tasavvur qiling.',
      '2. 24 FPS da 5 soniyalik klip nechta kadrdan iborat bo‘lishini hisoblang (24 × 5 = 120 kadr).',
      '3. 4 kadrli qisqa "Sakrayotgan to‘p" Storyboard eskizini chizing.',
    ],
    practice: [
      {
        task: '12 FPS va 60 FPS video o‘rtasidagi silliqlik va fayl hajmi farqini tushuntiring.',
        expected: '60 FPS silliqroq (sport/o‘yin uchun), lekin 5 barobar ko‘p kadr va katta fayl hajmiga ega.',
        difficulty: 'oson',
      },
      {
        task: '30 FPS da 10 soniyalik video yaratish uchun jami nechta kadr almashishini hisoblang.',
        expected: '30 × 10 = 300 kadr.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g8-l25-g1',
        num: '01',
        title: 'Kadr va FPS hisobi',
        topic: 'Video va animatsiya asoslari',
        difficulty: 'Oson',
        engine: 'calc',
        config: {
          prompt: 'Multfilm 24 FPS (soniyada 24 kadr) tezlikda 5 soniya davom etadi. Ushbu multfilmda jami nechta kadr mavjud?',
          unit: 'kadr',
          correctAnswer: 120,
          tolerance: 0,
          steps: [
            '1 soniyadagi kadrlar soni (FPS) = 24.',
            'Davomiyligi = 5 soniya.',
            'Jami kadrlar = 24 × 5 = 120 kadr.',
          ],
          hint: 'FPS qiymatini soniyalar soniga ko‘paytiring: 24 × 5.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Animatsiya va videoda "FPS" qisqartmasi nimani anglatadi?',
        options: [
          'Bir soniyadagi kadrlar sonini (Frames Per Second)',
          'Fayl parol tizimini',
          'Matn o‘lchamini',
          'Audio chastotasini',
        ],
        answer: 0,
        explanation: 'FPS 1 soniya ichida ekranda necha marta kadr almashishini ko‘rsatadi.',
      },
      {
        prompt: 'Video va audio kliplarni vaqt bo‘yicha ketma-ket joylashtirib montaj qilinadigan asosiy ish maydoni qaysi?',
        options: ['Margin', 'Timeline (Vaqt chizig‘i)', 'Footer', 'Spreadsheet'],
        answer: 1,
        explanation: 'Timeline montaj dasturlarining yuragi bo‘lib, qatlamlar va ketma-ketlikni boshqaradi.',
      },
      {
        prompt: 'Agar animatsiya 12 FPS da 4 soniya davom etsa, jami nechta kadr bo‘ladi?',
        options: ['16 kadr', '48 kadr', '3 kadr', '24 kadr'],
        answer: 1,
        explanation: '12 × 4 = 48 kadr.',
      },
      {
        prompt: 'Internet va qurilmalarda eng keng tarqalgan, sifatli hamda ixcham video fayl kengaytmasi qaysi?',
        options: ['.mp4', '.docx', '.xlsx', '.html'],
        answer: 0,
        explanation: '.mp4 (MPEG-4) ko‘pchilik brauzer va telefonlarda muammosiz ochiladi.',
      },
      {
        prompt: 'Nima uchun animatsiya chizishdan oldin Storyboard (kadrlar ssenariysi) tuziladi?',
        options: [
          'Har bir sahna ketma-ketligini oldindan rejalash va ortiqcha chizishning oldini olish uchun',
          'Faylni kattalashtirish uchun',
          'Tovushni o‘chirish uchun',
          'Shart emas',
        ],
        answer: 0,
        explanation: 'Storyboard vaqt va mehnatni tejab, aniq ssenariy bo‘yicha ishlash imkonini beradi.',
      },
    ],
    teacherNotes: {
      method: 'Kichik yopishqoq varaqchalarda (Flipbook) 6 kadrlik mini-animatsiya yasab FPS ni jonli ko‘rsatish.',
      timing: '12 daqiqa tushuntirish, 20 daqiqa Storyboard va hisob, 13 daqiqa Calc va test.',
      assessment: 'Kadr, FPS va Timeline tushunchalarini aniq farqlashi.',
      homework: 'Keyingi darsga Pencil2D da chizmoqchi bo‘lgan oddiy qahramon (to‘p, qush, mashina) g‘oyasini o‘ylab keling.',
    },
  },
  {
    id: 'g8-l26',
    grade: 8,
    no: 26,
    part: '2-yarim yillik',
    title: 'Animatsiya yaratish. Pencil2D dasturidan foydalanish',
    kind: 'dars',
    hours: 1,
    tools: ['Pencil2D'],
    objectives: [
      'O‘quvchi bepul Pencil2D dasturi interfeysi (Tools, Layers: Bitmap/Vector/Sound, Timeline, Keyframe) bilan ishlay oladi.',
      'O‘quvchi "Onion Skin" (Piyoz po‘sti — oldingi kadrning xira soyasi) funksiyasidan foydalanib silliq 2D animatsiya yaratadi va eksport qiladi.',
    ],
    intro:
      'Endi o‘zimizning birinchi 2D multfilmimizni chizamiz! Bepul va yengil Pencil2D dasturida "Onion Skin" (oldingi kadr soyasini ko‘rib chizish) siri yordamida sakrayotgan to‘p yoki uchayotgan qush animatsiyasini yaratamiz.',
    sections: [
      {
        heading: 'Pencil2D qatlamlari va Keyframe',
        body: 'Pencil2D da Timeline da qatlamlar (Layers) bor: Bitmap Layer (rastrli chizish), Vector Layer (vektorli silliq chizish) va Camera/Sound Layer. Har bir o‘zgaradigan kadrga "+" (Add Frame) orqali yangi Keyframe (Kalit kadr) qo‘shiladi. Agar to‘p sakrashini chizmoqchi bo‘lsangiz, fondagi daraxtni alohida pastki qatlamda chizib qo‘ysangiz, uni har kadrda qayta chizishga hojat qolmaydi!',
        example: '1-qatlam (Fon): Tog‘ va yer; 2-qatlam (Harakat): Kadrdan-kadrga o‘zgaruvchi sakrayotgan koptok.',
        tip: 'ANIMATSIYA SIRI — "Onion Skin" tugmasini yoqing! Shunda 2-kadrni chizayotganingizda 1-kadrning xira ko‘k soyasi ko‘rinib turadi va keyingi joylashuvni xatosiz chizasiz!',
      },
      {
        heading: 'Animatsiyani tekshirish va eksport qilish',
        body: 'Play (▶) va Loop (takroriy aylantirish) tugmalari bilan natijani ko‘ramiz, FPS ni o‘rtacha 12 ga sozlaymiz. Ish tugagach File → Export → Movie (`.mp4`) yoki Animated GIF sifatida saqlanadi (`.pclx` — loyiha fayli!).',
        example: 'Koptok yerga tekkanda biroz yassi (Squash) va ko‘tarilganda cho‘zinchoq (Stretch) chizilsa, multfilm juda jonli chiqadi!',
      },
    ],
    keyTerms: [
      { term: 'Pencil2D', definition: 'Kadr-ba-kadr 2D multfilm yaratish uchun bepul ochiq kodli dastur.' },
      { term: 'Onion Skin (Piyoz po‘sti)', definition: 'Keyingi kadrni aniq chizish uchun oldingi va keyingi kadrlarni xira ko‘rsatib turuvchi vosita.' },
      { term: 'Keyframe (Kalit kadr)', definition: 'Obyektning yangi holati chiziladigan asosiy kadr.' },
      { term: 'Layers (Qatlamlar)', definition: 'Orqa fon va harakatlanuvchi qahramonlarni alohida saqlash darajalari.' },
    ],
    steps: [
      '1. Pencil2D dasturini oching va FPS ni 12 ga sozlang.',
      '2. Pastki Timeline da chapdan "Onion Skin (Previous)" tugmasini yoqing.',
      '3. 1-kadrda koptokni tepada chizing, "+" bosib 2-kadrda biroz pastroqda chizing — jami 8–10 ta sakrash kadrini chizing.',
      '4. Loop va Play ni bosib tekshiring, so‘ng File → Export → Animated GIF/Movie qilib saqlang.',
    ],
    practice: [
      {
        task: 'Onion Skin yoqilgan holda chapdan o‘ngga yurib borayotgan 8 kadrli koptok yoki mashina animatsiyasi yarating.',
        expected: 'Koptok ravon sakrab harakatlanadi.',
        difficulty: 'oson',
      },
      {
        task: 'Alohida pastki qatlamda qo‘zg‘almas uy fonini, ustki qatlamda esa uchib o‘tayotgan qush animatsiyasini tuzing.',
        expected: 'Uy har kadrda qayta chizilmasdan saqlanib qoladi, qush esa qanot qoqib uchadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l26-g1',
        num: '01',
        title: 'Pencil2D jarayonini tartibla',
        topic: '2D animatsiya yaratish',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Pencil2D dasturida qatlamli 2D multfilm yaratish bosqichlarini tartiblang.',
          items: [
            'FPS tezligini (masalan, 12 FPS) va fon qatlamini (Layer) sozlash',
            'Oldingi kadr soyasini ko‘rish uchun Onion Skin funksiyasini yoqish',
            'Yangi Keyframe lar qo‘shib har bir kadrda harakatni chizib borish',
            'Play va Loop tugmalari bilan silliqlikni sinab ko‘rish',
            'Tayyor loyihani (.pclx) saqlash va Movie (.mp4) yoki GIF ga eksport qilish',
          ],
          hint: 'Avval FPS/qatlam, keyin Onion Skin, kadr chizish, Play sinovi va oxirida Eksport.',
          explanation: 'Onion Skin va qatlamlardan to‘g‘ri foydalanish chizish vaqtini tejaydi va harakatni silliq qiladi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Pencil2D da chizayotganda oldingi kadrning xira soyasini ko‘rsatib turuvchi qulay vosita qaysi?',
        options: ['Crop', 'Onion Skin (Piyoz po‘sti)', 'AutoSum', 'Mail Merge'],
        answer: 1,
        explanation: 'Onion Skin oldingi/keyingi kadrlar soyasini ko‘rsatib, harakatni davom ettirishni osonlashtiradi.',
      },
      {
        prompt: 'Har kadrda fonni (osmon va uyni) qaytadan chizmaslik uchun nima qilish kerak?',
        options: [
          'Fonni alohida pastki Layer (Qatlam) da chizish',
          'Fonsiz qoldirish',
          'FPS ni 100 qilish',
          'Onion Skin ni o‘chirish',
        ],
        answer: 0,
        explanation: 'Qatlamlar qo‘zg‘almas fon va harakatlanuvchi qahramonni bir-biridan mustaqil boshqarish imkonini beradi.',
      },
      {
        prompt: 'Pencil2D da tayyor animatsiyani boshqalar ham video pleyerda ko‘ra olishi uchun nima qilinadi?',
        options: [
          'Faqat .txt qilib saqlash',
          'File → Export → Movie (yoki GIF) orqali eksport qilish',
          'Print qilish',
          'Yopib yuborish',
        ],
        answer: 1,
        explanation: 'Loyiha fayli (.pclx) faqat Pencil2D da ochiladi; ulashish uchun Movie (.mp4) yoki GIF ga eksport qilinadi.',
      },
      {
        prompt: 'Multfilm o‘ynalayotganda to‘xtamay qayta-qayta aylanib turishi uchun qaysi tugma yoqiladi?',
        options: ['Stop', 'Loop', 'Mute', 'Pen up'],
        answer: 1,
        explanation: 'Loop tugmasi animatsiya oxiridan boshiga uzluksiz takrorlab ko‘rsatadi.',
      },
      {
        prompt: '2D animatsiyada koptok yerga urilganda biroz siqilib ko‘tarilishi qanday effekt beradi?',
        options: [
          'Harakatni tabiiy va elastik qiladi (Squash and Stretch)',
          'Kadrni o‘chiradi',
          'Rangni qoraytiradi',
          'Ovozni balandlatadi',
        ],
        answer: 0,
        explanation: 'Siqilish va cho‘zilish (Squash & Stretch) klassik animatsiyaning asosiy tamoyilidir.',
      },
    ],
    teacherNotes: {
      method: 'Onion Skin yoqilgan va o‘chirilgan holatda to‘p chizishni solishtirib ko‘rsatish.',
      timing: '10 daqiqa interfeys, 25 daqiqa sakrayotgan koptok chizish, 10 daqiqa Order va test.',
      assessment: 'Qatlamlar, Onion Skin va silliq harakat chiqqanligi.',
      homework: 'Pencil2D da 12 kadrli "Uchayotgan kapalak" yoki "Suzayotgan baliq" yaratib keling.',
    },
  },
  {
    id: 'g8-l27',
    grade: 8,
    no: 27,
    part: '2-yarim yillik',
    title: 'Takrorlash',
    kind: 'takrorlash',
    hours: 1,
    tools: ['HTML', 'Tarmoq', 'Pencil2D'],
    objectives: [
      'O‘quvchi 8-sinfning o‘tilgan bo‘limlarini (HTML/CSS, Kompyuter tarmoqlari, Video va Pencil2D animatsiyasi) umumlashtirib takrorlaydi.',
      'O‘quvchi turli media va texnologiyalarni yaxlit loyihada bog‘lash g‘oyasini tushunadi.',
    ],
    intro:
      'Video montaj va audio dasturlariga o‘tishdan oldin, HTML sayt, tarmoqlar va 2D animatsiyadan olgan asosiy bilimlarimizni bir eslab, keyingi ijodiy videoloyihalarga tayyorlanamiz!',
    sections: [
      {
        heading: '8-sinf ko‘prik takrorlashi',
        body: '1) Scratchda o‘zgaruvchi, to‘qnashuv, validatsiya va debaglash; 2) HTML/CSS da `<head>`, `<body>`, `<a href>`, `<img alt>`, HEX ranglar va `index.html`; 3) Tarmoqlarda LAN/WAN, Switch, Router, Modem, Star topologiya va Firewall; 4) Animatsiyada FPS, Timeline, Layers va Onion Skin.',
        example: 'Pencil2D da yasagan GIF animatsiyangizni hatto o‘zingiz yaratgan HTML sahifaga `<img>` tegi bilan qo‘yishingiz mumkin!',
        tip: 'Kelgusi darslarda video yaratish va Audacity da ovoz yozishda ham aynan Timeline (Vaqt chizig‘i) va qatlamlar bilan ishlaysiz.',
      },
      {
        heading: 'Raqamli ijodda xavfsizlik va mualliflik',
        body: 'Sayt joylashda ham, video yaratishda ham boshqalarning rasmlari va musiqalaridan ruxsatsiz foydalanmaslik (Creative Commons yoki o‘z chizgan media), hamda tarmoq xavfsizligini (WPA3, kuchli parol) saqlash muhim.',
        example: 'O‘zimiz chizgan Pencil2D animatsiyasi — 100% mualliflik ishingizdir.',
      },
    ],
    keyTerms: [
      { term: 'index.html & CSS', definition: 'Veb-sahifa skeleti va rang-dizayn uslublari.' },
      { term: 'Router & Firewall', definition: 'Tarmoqlararo yo‘naltiruvchi qurilma va xavfsizlik devori.' },
      { term: 'FPS & Timeline', definition: 'Soniyadagi kadrlar tezligi va vaqt bo‘ylab montaj chizig‘i.' },
      { term: 'Onion Skin', definition: 'Animatsiyada oldingi kadrning xira soyasini ko‘rsatuvchi yordamchi.' },
    ],
    steps: [
      '1. HTML, Tarmoq va Pencil2D bo‘limlaridan 1 tadan eng muhim terminni izohlang.',
      '2. Flesh-kartalar yordamida tezkor savol-javobda qatnashing.',
      '3. Keyingi darsda Adobe Spark / video muharrirda yaratadigan video mavzusini tanlang.',
    ],
    practice: [
      {
        task: 'HTMLdagi `<img>`, Tarmoqdagi `Switch` va Pencil2D dagi `Onion Skin` vazifalarini bittadan gapda ta’riflang.',
        expected: 'Har uchala sohadagi asosiy atamalar aniq va to‘g‘ri ta’riflanadi.',
        difficulty: 'oson',
      },
      {
        task: '24 FPS da 3 soniyalik Pencil2D animatsiyasini nechta kadrda chizish kerakligini va uni HTML sahifaga qanday qo‘yishni ko‘rsating.',
        expected: '72 kadr (yoki GIF eksport → `<img src="anim.gif">`).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l27-g1',
        num: '01',
        title: '8-sinf aralash flesh-kartalar',
        topic: 'HTML, Tarmoq, Animatsiya',
        difficulty: 'Oson',
        engine: 'flashcards',
        config: {
          prompt: 'Uchta bo‘lim bo‘yicha asosiy bilimlarni kartalar orqali takrorlang.',
          cards: [
            { term: 'target="_blank"', definition: 'HTML havolani brauzerning yangi yorlig‘ida ochish atributi.', example: '<a href="..." target="_blank">' },
            { term: 'Star topologiyasi', definition: 'Barcha kompyuterlar markaziy Switch ga ulanadigan ishonchli tarmoq sxemasi.', example: 'Maktab sinfi tarmog‘i' },
            { term: 'Firewall', definition: 'Tarmoq trafigini qoidalar asosida filtrlaydigan himoya devori.', example: 'Ruxsatsiz kirishni bloklash' },
            { term: 'Onion Skin', definition: 'Pencil2D da oldingi kadr soyasini ko‘rsatib chizishni osonlashtiruvchi funksiya.', example: 'Silliq koptok sakrashi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Veb-sayt internetga joylanganda server eng birinchi qaysi HTML faylini ochadi?',
        options: ['main.css', 'index.html', 'video.mp4', 'router.txt'],
        answer: 1,
        explanation: 'Server standart bo‘yicha bosh sahifa sifatida `index.html` ni qidiradi.',
      },
      {
        prompt: 'Lokal tarmoqdagi 15 ta kompyuterni bog‘lab, paketni aniq manzil portiga uzatuvchi qurilma qaysi?',
        options: ['Hub', 'Switch', 'Modem', 'Alt'],
        answer: 1,
        explanation: 'Switch paketni faqat kerakli oluvchi portiga yuboradi.',
      },
      {
        prompt: 'Pencil2D da qahramon harakatini keyingi kadrda aniq davom ettirish uchun nima yoqiladi?',
        options: ['Onion Skin', 'Goal Seek', 'Wrap Text', 'Hide'],
        answer: 0,
        explanation: 'Onion Skin oldingi kadrning xira soyasini ko‘rsatib turadi.',
      },
      {
        prompt: '20 FPS tezlikda 4 soniyalik animatsiya nechta kadrdan iborat?',
        options: ['24 kadr', '80 kadr', '5 kadr', '16 kadr'],
        answer: 1,
        explanation: '20 × 4 = 80 kadr.',
      },
      {
        prompt: 'Scratchda dasturdagi xatolarni topish va tuzatish jarayoni nima deyiladi?',
        options: ['Debaglash (Debugging)', 'Xosting', 'Formatlash', 'Shifrlash'],
        answer: 0,
        explanation: 'Debugging — kod nuqsonlarini aniqlab bartaraf etish jarayonidir.',
      },
    ],
    teacherNotes: {
      method: 'Tezkor savol-javob va kichik jamoaviy viktorina.',
      timing: '10 daqiqa sharh, 20 daqiqa flesh-kartalar va muhokama, 15 daqiqa test.',
      assessment: 'Turli bo‘lim atamalarini ishonchli farqlay olishi.',
      homework: 'Keyingi darsdagi videoloyiha uchun 4 ta slaydlik kichik matn ssenariysi o‘ylab keling.',
    },
  },
  {
    id: 'g8-l28',
    grade: 8,
    no: 28,
    part: '2-yarim yillik',
    title: 'Adobe Spark dasturida yangi video yaratish',
    kind: 'dars',
    hours: 1,
    tools: ['Adobe Spark', 'Kdenlive / OpenShot'],
    objectives: [
      'O‘quvchi Adobe Spark Video (Adobe Express) va muqobil video muharrirlar (OpenShot/Kdenlive/Clipchamp) yordamida loyiha ochishni biladi.',
      'O‘quvchi videoga slaydlar, rasm/video kliplar, sarlavha matnlari (Title) va mavzu uslubini qo‘shib tartibga keltira oladi.',
    ],
    intro:
      'Qanday qilib bir necha daqiqada suratlar, qisqa videolar va chiroyli sarlavhalardan professional ta’limiy rolik yig‘ish mumkin? Adobe Spark Video (yoki OpenShot/Clipchamp) buni oddiy va juda qiziqarli qiladi!',
    sections: [
      {
        heading: 'Adobe Spark (Express) Video bilan tanishuv',
        body: 'Adobe Spark Video — bulutli (yoki brauzerdagi) oddiy video hikoya yaratish vositasi (kompyuterda oflayn bepul muqobillari: OpenShot, Kdenlive, Clipchamp). Ish boshida: 1) Loyiha nomi va shablon (yoki noldan boshlash) tanlanadi; 2) Storyboard kabi pastki qatorda ketma-ket kadrlar (Slaydlar) qo‘shiladi; 3) Har bir kadrga Icon, Photo, Video yoki qisqa Text joylanadi.',
        example: '"Tabiatni asraylik!" roligi: 1-kadr — Sarlavha, 2-kadr — O‘rmon rasmi + qisqa fakt, 3-kadr — Yechim, 4-kadr — Xulosa.',
        tip: 'Video kadrlariga uzun gaplar yozmang! Tomoshabin ekrandagi 3–5 so‘zni darhol o‘qiy olishi kerak, batafsil gapni esa ovoz bilan aytamiz.',
      },
      {
        heading: 'Video mutanosibligi va Theme (Mavzu)',
        body: 'Video yaratishda ekran nisbati (Aspect Ratio) tanlanadi: Widescreen `16:9` (YouTube, televizor, kompyuter uchun) yoki Kvadrat `1:1` / Vertikal `9:16` (mobil telefon uchun). Theme (Mavzu) esa barcha kadrlarga bir xil shrift va silliq o‘tish effekti beradi.',
        example: 'Maktab ekrani va kompyuterda ko‘rsatish uchun doimo `16:9` keng format tanlanadi.',
      },
    ],
    keyTerms: [
      { term: 'Adobe Spark Video', definition: 'Matn, rasm va videolardan tezda hikoyaviy rolik yig‘uvchi veb-vosita.' },
      { term: 'Aspect Ratio (16:9)', definition: 'Video ekranining eni va bo‘yi nisbati (16:9 — standart keng ekran).' },
      { term: 'Theme (Mavzu dizayni)', definition: 'Butun videodagi rang, shrift va o‘tish uslubini birlashtiruvchi shablon.' },
      { term: 'Klip / Slayd ketma-ketligi', definition: 'Videoni tashkil etuvchi tartiblangan vizual bloklar.' },
    ],
    steps: [
      '1. Adobe Express/Spark Video (yoki OpenShot/Clipchamp) da yangi loyiha yarating va `16:9` formatini tanlang.',
      '2. 4 ta kadr (slayd) qo‘shing: Kirish sarlavhasi, 2 ta rasm/fakt kadri va Yakun.',
      '3. Har bir kadrga qisqa matn (3–5 so‘z) va sifatli rasm qo‘ying.',
      '4. Kadr davomiyligini 3–4 soniyaga moslab, "Theme" tanlab oldindan ko‘ring.',
    ],
    practice: [
      {
        task: '"Maktabimiz hayoti" mavzusida 4 kadrdan iborat qisqa video loyihasini Timeline da tartiblang.',
        expected: 'Titul → Foto/Fakt 1 → Foto/Fakt 2 → Xulosa ketma-ketligi silliq almashadi.',
        difficulty: 'oson',
      },
      {
        task: 'Televizor/YouTube (16:9) va telefon hikoyalari (9:16) uchun qaysi video formati tanlanishini misollar bilan ko‘rsating.',
        expected: 'Gorizontal ekran uchun 16:9, vertikal mobil uchun 9:16 asoslanadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l28-g1',
        num: '01',
        title: 'Video montaj Timeline tartibi',
        topic: 'Yangi video yaratish',
        difficulty: 'Oson',
        engine: 'timeline',
        config: {
          prompt: 'Maktab haqidagi promo-rolik kliplarini mantiqiy ketma-ketlikda joylashtiring va Title Track ni yoqing.',
          clips: [
            { id: 'c3', label: 'Xulosa va Chaqiruv (4s)', duration: 4, color: 'emerald' },
            { id: 'c1', label: 'Kirish: Maktab ko‘rinishi (3s)', duration: 3, color: 'rose' },
            { id: 'c2', label: 'Dars jarayonlari (5s)', duration: 5, color: 'indigo' },
          ],
          expectedOrder: ['c1', 'c2', 'c3'],
          requireTitleTrack: true,
          hint: 'Tartib: Kirish (c1) → Dars jarayonlari (c2) → Xulosa (c3), va Sarlavha (Title) yo‘lagini yoqing.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Kompyuter monitori va YouTube uchun standart keng ekran video nisbati qaysi?',
        options: ['1:1', '16:9', '4:3', '9:16'],
        answer: 1,
        explanation: '16:9 keng formatli gorizontal video standartidir.',
      },
      {
        prompt: 'Adobe Spark Video (va shunga o‘xshash muharrirlarda) "Theme" bo‘limi nimani boshqaradi?',
        options: [
          'Butun videoning umumiy rang, shrift va o‘tish uslubini',
          'Fayl parolini',
          'Wi-Fi tezligini',
          'Printer qog‘ozini',
        ],
        answer: 0,
        explanation: 'Theme barcha video kadrlariga yagona dizayn va uslubiy izchillik beradi.',
      },
      {
        prompt: 'Videorolik kadrlariga matn yozishda qaysi qoida eng ma’qul?',
        options: [
          'Ekranni to‘ldirib 10 qator matn yozish',
          'Qisqa 3–6 so‘zli aniq sarlavha yoki kalit ibora yozish',
          'Shriftni juda kichik qilish',
          'Umuman sarlavha bermaslik',
        ],
        answer: 1,
        explanation: 'Video tez almashgani uchun tomoshabin faqat qisqa va yirik matnni o‘qib ulguradi.',
      },
      {
        prompt: 'Adobe Spark ga o‘xshash oflayn bepul video montaj dasturlariga qaysilar kiradi?',
        options: ['Excel va Access', 'OpenShot va Kdenlive', 'Paint va Notepad', 'Word va Calc'],
        answer: 1,
        explanation: 'OpenShot va Kdenlive bepul, ochiq kodli kuchli video tahrirlash dasturlaridir.',
      },
      {
        prompt: 'Video tayyor bo‘lgach, uni hamma qurilmalarda ko‘rish uchun odatda qaysi formatda yuklab olinadi?',
        options: ['.mp4', '.sb3', '.html', '.rtf'],
        answer: 0,
        explanation: '.mp4 barcha telefon, kompyuter va platformalar tomonidan qo‘llab-quvvatlanadi.',
      },
    ],
    teacherNotes: {
      method: 'Internet bo‘lmagan sinfda ham OpenShot/Clipchamp orqali bir xil Storyboard-slayd montajini ko‘rsatish.',
      timing: '10 daqiqa tushuntirish, 23 daqiqa 4 kadrli video yig‘ish, 12 daqiqa Timeline va test.',
      assessment: 'Mantiqiy ketma-ketlik, 16:9 formati va qisqa aniq sarlavhalar.',
      homework: 'Yaratgan videongizdagi har bir kadr uchun 10 soniyalik ovozli sharh matnini yozib keling.',
    },
  },
  {
    id: 'g8-l29',
    grade: 8,
    no: 29,
    part: '2-yarim yillik',
    title: 'Animatsiya yoki videoga saundtrek yoki ovozli sharh (Narration) qo‘shish',
    kind: 'dars',
    hours: 1,
    tools: ['Adobe Spark', 'Audacity'],
    objectives: [
      'O‘quvchi videoda Saundtrek (fon musiqasi) va Narration (ovozli sharh/diktor nutqi) vazifalarini farqlaydi.',
      'O‘quvchi mikrofon orqali aniq ovozli sharh yozib, fon musiqasi balandligini nutqni bosib ketmaydigan qilib moslay oladi.',
    ],
    intro:
      'Ovozsiz video xuddi ovozsiz kinoga o‘xshaydi — zerikarli! To‘g‘ri tanlangan fon musiqasi kayfiyat bersa, tiniq ovozli sharh (Narration) tomoshabinga mazmunni tushuntirib beradi.',
    sections: [
      {
        heading: 'Narration (Ovozli sharh) yozish qoidalari',
        body: 'Narration — kadrlar davomida diktor yoki muallifning tushuntirib beradigan ovozidir. Sifatli yozish uchun: 1) Avval matnni qog‘ozga yozib mashq qiling; 2) Tinch xonada mikrofondan 15–20 sm masofada gapiring; 3) Har bir kadr uchun alohida ovoz yozing — shunda xato qilsangiz ham faqat o‘sha 1 ta kadrni qayta yozasiz!',
        example: 'Adobe Spark da qizil mikrofon tugmasini bosib turib, "Bu bizning maktab bog‘imiz..." deb 4 soniya sharh yozamiz.',
        tip: 'Mikrofon oldida qog‘oz shitirlatmang va puflamang! Agar shovqin tushib qolsa, o‘sha kadr ovozini qayta yozing.',
      },
      {
        heading: 'Saundtrek (Fon musiqasi) va Ovoz muvozanati',
        body: 'Saundtrek videoning kayfiyatiga (quvnoq, ilmiy, sokin) mos bo‘lishi kerak. ENG MUHIMI — Ovoz balandligi balansi (Audio Mixing): Agar ham ovozli sharh, ham musiqa bo‘lsa, musiqa balandligi 15–25% ga pasaytirilishi (Ducking) shart, aks holda musiqa gapiruvchini bosib ketadi!',
        example: 'Ovozli sharh 100%, fon musiqasi 20% balandlikda qo‘yiladi.',
      },
    ],
    keyTerms: [
      { term: 'Narration (Ovozli sharh)', definition: 'Video yoki animatsiya kadrlarini tushuntirib beruvchi muallif/diktor nutqi.' },
      { term: 'Saundtrek (Soundtrack)', definition: 'Videoga hissiyot va ritm beruvchi fon musiqasi.' },
      { term: 'Audio balans (Mixing)', definition: 'Nutq va fon musiqasi balandligini bir-biriga xalaqit bermaydigan qilib sozlash.' },
      { term: 'Mualliflik huquqsiz musiqa', definition: 'Videolarda qonuniy bepul ishlatish mumkin bo‘lgan (Royalty-free) audio treklar.' },
    ],
    steps: [
      '1. Avvalgi darsda yig‘ilgan 4 kadrli videoni oching.',
      '2. Har bir kadr uchun yozgan ssenariy matningizni tinch va ravon ovozda mikrofon orqali yozing (Narration).',
      '3. Music bo‘limidan videoga mos sokin saundtrek tanlang.',
      '4. Musiqa balandligi (Volume) slayderini pastga (20–30%) tushirib, diktor ovozi aniq eshitilayotganini tekshiring.',
    ],
    practice: [
      {
        task: 'Videongizning har bir slaydi uchun 3–5 soniyalik ravon ovozli sharh yozing.',
        expected: 'Diktor ovozi kadr almashishi bilan sinxron va tushunarli eshitiladi.',
        difficulty: 'oson',
      },
      {
        task: 'Fon musiqasi diktor nutqini bosib ketmasligi uchun ovoz balandligi balansini sozlang.',
        expected: 'Nutq aniq va tiniq, musiqa esa mayin orqa fonda eshitiladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l29-g1',
        num: '01',
        title: 'Ovozli sharh va saundtrek',
        topic: 'Audio qo‘shish',
        difficulty: 'Oson',
        engine: 'truefalse',
        config: {
          prompt: 'Videoga ovozli sharh va saundtrek qo‘shish qoidalarini tekshiring.',
          statements: [
            {
              text: 'Videoda ham ovozli sharh, ham fon musiqasi bo‘lsa, fon musiqasi nutqdan ancha pastroq (20% atrofida) qo‘yilishi kerak.',
              isTrue: true,
              explanation: 'Aks holda musiqa diktor ovozini bosib ketadi va tomoshabin gapni tushunmaydi.',
            },
            {
              text: 'Ovozli sharhni avval matnini yozmasdan, o‘ylamay gapirib ketaverish yaxshiroq.',
              isTrue: false,
              explanation: 'Oldindan yozilgan qisqa ssenariy tutilmasdan ravon va xatosiz gapirishni ta’minlaydi.',
            },
            {
              text: 'Har bir kadrga alohida ovoz yozish xato bo‘lganda faqat o‘sha bitta kadrni qayta yozish imkonini beradi.',
              isTrue: true,
              explanation: 'Butun 2 daqiqalik videoni boshidan yozish o‘rniga bitta kadrni tuzatish vaqtni tejaydi.',
            },
            {
              text: 'Internetdan topilgan istagan mashhur qo‘shiqni mualliflik huquqini tekshirmay videoga qo‘yib tarqatish mumkin.',
              isTrue: false,
              explanation: 'Mualliflik huquqi bilan himoyalangan musiqalarni ruxsatsiz ishlatish videoni bloklashga olib keladi; Royalty-free treklar kerak.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Videoda kadrlar davomida voqeani tushuntirib boruvchi diktor ovozi nima deb ataladi?',
        options: ['Transition', 'Narration (Ovozli sharh)', 'Watermark', 'FPS'],
        answer: 1,
        explanation: 'Narration — videoni mazmunan boyituvchi tushuntiruvchi ovozli sharhdir.',
      },
      {
        prompt: 'Ovozli sharh (100%) bilan birga chalinayotgan fon musiqasi balandligi taxminan necha foiz bo‘lishi ma’qul?',
        options: ['100% (bir xil balandlikda)', '15% – 25% (mayin fonda)', '150%', '0%'],
        answer: 1,
        explanation: 'Past fon musiqasi kayfiyat beradi va nutqning tiniq eshitilishiga xalaqit qilmaydi.',
      },
      {
        prompt: 'Sifatli ovoz yozish uchun mikrofonga qanday gapirish to‘g‘ri?',
        options: [
          'Mikrofonga og‘izni tekkizib baqirish',
          'Tinch xonada 15–20 sm masofadan ravon va aniq gapirish',
          'Deraza ochiq ko‘cha shovqinida yozish',
          'Tez-tez shivirlash',
        ],
        answer: 1,
        explanation: '15–20 sm masofa nafas shovqinini (popping) kamaytiradi va ovozni tiniq yozadi.',
      },
      {
        prompt: 'Videoga saundtrek tanlashda nimaga alohida e’tibor berish kerak?',
        options: [
          'Video kayfiyatiga mosligi va mualliflik huquqidan xoli (Royalty-free) ekanligiga',
          'Musiqa fayli imkon qadar katta bo‘lishiga',
          'Faqat og‘ir rok musiqasi bo‘lishiga',
          'Videodan uzun bo‘lmasligiga',
        ],
        answer: 0,
        explanation: 'Mos kayfiyat va litsenziyasiz/ruxsatli musiqa professional va qonuniy natija beradi.',
      },
      {
        prompt: 'Nima uchun ovoz yozishdan oldin kadrlar matnini yozib olish tavsiya etiladi?',
        options: [
          'Tutilishlar va "e-e", "a-a" kabi ortiqcha tovushlarsiz ravon nutq chiqishi uchun',
          'Vaqt cho‘zish uchun',
          'Mikrofonni tekshirish uchun',
          'Shart emas',
        ],
        answer: 0,
        explanation: 'Tayyor matn diktorning aniqligi va vaqt me’yorini (masalan, 4 soniya) saqlashga yordam beradi.',
      },
    ],
    teacherNotes: {
      method: 'Baland musiqa ostida nutq eshitilmay qolgan va to‘g‘ri balanslangan ikki xil videoni eshittirib solishtirish.',
      timing: '8 daqiqa qoidalar, 27 daqiqa Narration va saundtrek qo‘shish, 10 daqiqa True/False va test.',
      assessment: 'Ovoz tiniqligi va musiqa-nutq balansi.',
      homework: 'Keyingi darsga ikki xil yosh guruhi (bolalar va kattalar) uchun video uslubi farqlarini o‘ylab keling.',
    },
  },
  {
    id: 'g8-l30',
    grade: 8,
    no: 30,
    part: '2-yarim yillik',
    title: 'Auditoriya talablarini inobatga olish.',
    kind: 'dars',
    hours: 1,
    tools: ['Video', 'Adobe Spark'],
    objectives: [
      'O‘quvchi video va animatsiya yaratishda auditoriya yoshi, qiziqishi, tili va ko‘rish sharoitini (mobil/subtitr) hisobga olishni biladi.',
      'O‘quvchi bitta mavzuni turli auditoriyalar uchun moslashtira oladi.',
    ],
    intro:
      '7-sinfda taqdimot auditoriyasini o‘rgangan edik, videoda esa bu yanada muhimroq! Agar video yosh bolalar uchun bo‘lsa tezligi va tili boshqacha, maktab direktori yoki ota-onalar uchun bo‘lsa faktlari va ohangi mutlaqo boshqacha bo‘ladi.',
    sections: [
      {
        heading: 'Video auditoriyasining 4 talabi',
        body: '1) Yoshi va qiziqishi: Bolalar uchun qisqa (30–60 s), yorqin ranglar, quvnoq musiqa, sodda so‘zlar; kattalar/ota-onalar uchun rasmiy faktlar, sokin temp va aniq natijalar. 2) Imkoniyati cheklanganlar va ovozsiz ko‘rish (Accessibility): Ko‘p odamlar videoni metroda ovozsiz ko‘radi — shuning uchun aniq yirik sarlavha yoki subtitrlar qo‘yish juda foydali! 3) Qurilma: Telefon (vertikal) vs Kompyuter/Proyektor (gorizontal).',
        example: '1-sinf bolalariga "Tish yuvish" videosi quvnoq qahramon va 2 daqiqalik qo‘shiq shaklida; ota-onalarga esa tish shifokori maslahati shaklida qilinadi.',
        tip: 'Video ichidagi matn ekranda kamida 3–4 soniya turishi kerak — o‘zingiz ichingizda ikki marta o‘qib ulgursangiz, demak tomoshabin ham o‘qiy oladi!',
      },
      {
        heading: 'Auditoriyadan fikr-mulohaza olish (Feedback)',
        body: 'Videoni yakunlab e’lon qilishdan oldin maqsadli auditoriyaning 2–3 vakiliga ko‘rsatib so‘rang: "Matn o‘qishga ulgurildimi? Ovoz tushunarlimi? Zerikarli joyi yo‘qmi?".',
        example: 'Do‘stingiz "3-slayd matni juda tez o‘tib ketdi" desa, davomiylikni 3 soniyadan 5 soniyaga uzaytiramiz.',
      },
    ],
    keyTerms: [
      { term: 'Auditoriya tahlili', definition: 'Video kim uchun mo‘ljallanganini (yoshi, bilimi, qiziqishi) aniqlash.' },
      { term: 'Subtitr / Ekrandagi matn', definition: 'Ovozni eshitolmaydigan yoki ovozsiz ko‘ruvchilar uchun ekran tagidagi matn.' },
      { term: 'Temp (Pacing)', definition: 'Video kadrlarining almashish tezligi (bolalar uchun dinamik, hisobot uchun sokin).' },
      { term: 'Feedback (Fikr-mulohaza)', definition: 'Tomoshabinlar fikri asosida videoni yaxshilash.' },
    ],
    steps: [
      '1. Mavjud 4 kadrli videongiz uchun aniq auditoriyani tanlang (masalan, "5–6-sinf o‘quvchilari").',
      '2. Kadrlar davomiyligini tekshiring: har bir matn bemalol o‘qilishiga yetadigan soniya (3–5 s) bering.',
      '3. Ovoz eshitilmasa ham tushunilishi uchun qisqa subtitr/asosiy matnlarni aniq kontrastda joylang.',
      '4. Juftlikda bir-biringizning videongizni ko‘rib Feedback bering.',
    ],
    practice: [
      {
        task: 'Bir xil "Kompyuter ko‘zga zarari" mavzusini boshlang‘ich sinf va o‘qituvchilar auditoriyasi uchun 2 xil reja bilan tasvirlang.',
        expected: 'Til, musiqa, kadr tezligi va faktlar tanlovi auditoriyaga mos ajratiladi.',
        difficulty: 'oson',
      },
      {
        task: 'Sinfdoshingiz videosini tomosha qilib, 3 ta mezonda (matn tezligi, ovoz kontrasti, auditoriyaga moslik) xulosa yozing.',
        expected: 'Aniq yaxshilash takliflari beriladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l30-g1',
        num: '01',
        title: 'Auditoriyaga mos video tanla',
        topic: 'Auditoriya talablari',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Ushbu holatda videoni auditoriyaga moslashtirish uchun qaysi o‘zgartirish kerak?',
          scenario: 'Siz 7-sinf o‘quvchilari uchun "Tez yordam va xavfsizlik" videosi yasadingiz, lekin 2-kadrdagi 4 qatorli muhim qoida atigi 1.5 soniya turib o‘tib ketmoqda va musiqa juda baland. Qanday tuzatasiz?',
          options: [
            {
              text: 'Matnni 1 qatorga qisqartirib kadr vaqtini 4 soniyaga cho‘zaman va musiqani pasaytiraman',
              isCorrect: true,
              feedback: 'To‘g‘ri! Qisqa matn + yetarli o‘qish vaqti + to‘g‘ri audio balans auditoriya talabini to‘liq qondiradi.',
            },
            {
              text: 'Musiqani yanada balandlatib, kadrni 0.5 soniyaga tushiraman',
              isCorrect: false,
              feedback: 'Noto‘g‘ri! Bunday holda tomoshabin matnni umuman o‘qiy olmaydi.',
            },
            {
              text: 'Videoni matnsiz va ovozsiz qoldiraman',
              isCorrect: false,
              feedback: 'Qoidalar matn va ovozsiz tomoshabinga yetib bormaydi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Videoni ovozsiz ko‘rayotgan yoki eshitishda qiynaladigan tomoshabinlar uchun eng muhim element nima?',
        options: [
          'Baland saundtrek',
          'Aniq subtitrlar va o‘qishli qisqa ekran matnlari',
          'Tez miltillovchi fon',
          'Yashirin slayd',
        ],
        answer: 1,
        explanation: 'Subtitrlar va qisqa sarlavhalar videoni hamma uchun ochiq (accessible) qiladi.',
      },
      {
        prompt: 'Ekrandagi qisqa matn kadrda qancha vaqt ko‘rinib turishi o‘qish uchun qulay?',
        options: ['0.5 soniya', 'Kamida 3–4 soniya (2 marta o‘qishga yetgulik)', '30 soniya bitta so‘z', '0.1 soniya'],
        answer: 1,
        explanation: 'O‘rtacha o‘qish tezligi bo‘yicha 3–5 soniya qisqa matnni o‘zlashtirish uchun eng qulay muddat.',
      },
      {
        prompt: 'Boshlang‘ich sinf bolalari uchun tayyorlangan ta’limiy video qanday xususiyatga ega bo‘lishi kerak?',
        options: [
          'Ilmiy terminlarga to‘la 20 daqiqalik ma’ruza',
          'Yorqin tasvirlar, sodda tushunarli til va qisqa davomiylik',
          'Qora-oq jadvallar',
          'Murakkab formulalar',
        ],
        answer: 1,
        explanation: 'Yosh bolalar diqqati qisqa, jonli va sodda tasvirlar orqali yaxshi ushlab turiladi.',
      },
      {
        prompt: 'Video tayyor bo‘lgach, maqsadli auditoriya vakillaridan fikr (Feedback) olish nima uchun foydali?',
        options: [
          'Muallif sezmagan tezlik, ovoz yoki tushunarsiz joylarni aniqlab tuzatish uchun',
          'Fayl hajmini oshirish uchun',
          'Ranglarni o‘chirish uchun',
          'Foydasiz jarayon',
        ],
        answer: 0,
        explanation: 'Tashqi nigoh videoning real tomoshabinga qanday ta’sir qilishini ko‘rsatadi.',
      },
      {
        prompt: 'Ijtimoiy tarmoqlarda telefon ekranida vertikal ko‘rish uchun ko‘pincha qaysi format tanlanadi?',
        options: ['16:9', '9:16', '21:9', '4:1'],
        answer: 1,
        explanation: '9:16 vertikal ekranli smartfonlarga to‘liq mos tushadi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfdoshlar orasida "2 qatorli matnni necha soniyada o‘qiymiz?" tajribasi.',
      timing: '10 daqiqa tushuntirish, 20 daqiqa juftliklarda video tekshiruvi va moslash, 15 daqiqa CaseStudy va test.',
      assessment: 'O‘qish vaqti, subtitr/kontrast va auditoriyaga moslik.',
      homework: 'Keyingi darsdagi "Mahsulotni reklama qilish" loyihasi uchun foydali ekologik mahsulot (masalan, qayta ishlangan daftar yoki quyoshli chiroq) o‘ylab keling.',
    },
  },
  {
    id: 'g8-l31',
    grade: 8,
    no: 31,
    part: '2-yarim yillik',
    title: 'Mahsulotni reklama qilish',
    kind: 'dars',
    hours: 1,
    tools: ['Video', 'Adobe Spark'],
    objectives: [
      'O‘quvchi samarali reklama videosining tuzilmasini (AIDA modeli: E’tibor — Qiziqish — Istak — Harakatga chaqiruv) biladi.',
      'O‘quvchi halol va ijodiy 30 soniyalik reklama roligini (shior/slogan, afzalliklar, ovozli sharh va chaqiruv) yarata oladi.',
    ],
    intro:
      'Zo‘r g‘oya yoki foydali mahsulot yaratdingiz, lekin uni odamlarga qanday qilib 30 soniyada qiziqarli tanishtirasiz? Bugun haqiqiy kreativ reklama roligi tuzish sirlarini o‘rganamiz!',
    sections: [
      {
        heading: 'Reklama videosining AIDA formulasi',
        body: 'Muvaffaqiyatli qisqa rolik 4 bosqichdan iborat: 1) Attention (E’tibor — birinchi 3 soniyada kuchli savol yoki muammo: "Sumkangiz og‘irmi?"); 2) Interest (Qiziqish — mahsulotni ko‘rsatish); 3) Desire (Istak — uning 2–3 ta asosiy foydasini aytish); 4) Action (Harakatga chaqiruv / CTA — "Maktab yarmarkasida sinab ko‘ring!" va esda qoladigan qisqa shior/Slogan).',
        example: 'Eko-ruchka reklamasi: "Plastik chiqindisiz yozing!" (Slogan) → qulayligi → "Bugunoq o‘z hissa qo‘shing!".',
        tip: 'Reklama HALOL bo‘lishi kerak! Mahsulotda yo‘q xususiyatlarni bo‘rttirib aldamang va raqobatchilarni yomonlamang — o‘z mahsulotingizning haqiqiy foydasini ko‘rsating.',
      },
      {
        heading: '30 soniyalik ritm va vizual joziba',
        body: 'Qisqa reklamada kadrlar har 3–4 soniyada almashib tursa tomoshabin zerikmaydi. Yirik sarlavha, mahsulotning yaqin planli surati, jo‘shqin fon musiqasi va ishonchli diktor ovozi birlashtiriladi.',
        example: '1-kadr (3s): Muammo; 2–3-kadr (12s): Yechim va afzalliklar; 4-kadr (5s): Slogan va chaqiruv.',
      },
    ],
    keyTerms: [
      { term: 'AIDA modeli', definition: 'E’tibor (Attention), Qiziqish (Interest), Istak (Desire) va Harakat (Action) reklama tuzilmasi.' },
      { term: 'Slogan (Shior)', definition: 'Mahsulotning asosiy g‘oyasini ifodalovchi qisqa, esda qolarli ibora.' },
      { term: 'Call to Action (CTA)', definition: 'Tomoshabinni yakunda aniq harakatga undovchi chaqiruv ("Sinab ko‘ring!").' },
      { term: 'Halol reklama', definition: 'Mahsulot xususiyatlarini rostgo‘y va axloqiy me’yorlarda taqdim etish.' },
    ],
    steps: [
      '1. Foydali mahsulot yoki to‘garakni tanlang (masalan, "Ekologik sumka", "Robototexnika to‘garagi").',
      '2. Qisqa 3–5 so‘zli Slogan o‘ylab toping.',
      '3. AIDA bo‘yicha 4 ta kadrdan iborat video rolikni Adobe Spark/video muharrirda yig‘ing.',
      '4. Ovozli sharh va quvnoq fon musiqasi qo‘shib namoyish eting.',
    ],
    practice: [
      {
        task: 'Maktabingizdagi kitobxonlik klubi uchun AIDA bosqichlari asosida 4 jumlali reklama ssenariysi tuzing.',
        expected: 'Muammo/Savol → Klub taqdimi → Foyda → Chaqiruv va Slogan mavjud.',
        difficulty: 'oson',
      },
      {
        task: 'Slogani, 2 ta foydasi va Call to Action kadriga ega 20–30 soniyalik video-rolik yarating.',
        expected: 'Dinamik va halol reklama videosi tayyor bo‘ladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l31-g1',
        num: '01',
        title: 'AIDA reklama roligini yig‘',
        topic: 'Reklama tuzilmasi',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Reklama videosining AIDA formulasi bosqichlarini to‘g‘ri ketma-ketlikda joylashtiring.',
          items: [
            'Attention (E’tibor): Birinchi 3 soniyada savol yoki muammo bilan qiziqtirish',
            'Interest (Qiziqish): Mahsulot yoki xizmatni yaqqol ko‘rsatish',
            'Desire (Istak): Mahsulot beradigan aniq foyda va afzalliklarni ko‘rsatish',
            'Action (Harakat / CTA): Esda qoladigan Slogan va aniq harakatga chaqiruv',
          ],
          hint: 'A-I-D-A tartibi: E’tibor → Qiziqish → Istak → Harakat.',
          explanation: 'AIDA tuzilmasi tomoshabin e’tiborini ushlab, yakunda aniq harakatga undaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Reklama videosining dastlabki 3 soniyasi nima uchun eng hal qiluvchi hisoblanadi?',
        options: [
          'Tomoshabin e’tiborini darhol jalb qilish (Attention) uchun — aks holda videoni o‘tkazib yuboradi',
          'Fayl nomini yozish uchun',
          'Musiqani o‘chirish uchun',
          'Narxini yashirish uchun',
        ],
        answer: 0,
        explanation: 'Dastlabki 3 soniyada kuchli savol yoki kadr tomoshabinni videoni oxirigacha ko‘rishga undaydi.',
      },
      {
        prompt: 'Mahsulotning asosiy g‘oyasini bildiradigan qisqa va esda qolarli shior nima deyiladi?',
        options: ['Footer', 'Slogan', 'Margin', 'Firewall'],
        answer: 1,
        explanation: 'Slogan brend yoki mahsulotni esda saqlab qolishga yordam beruvchi qisqa shiordir.',
      },
      {
        prompt: 'AIDA modelidagi oxirgi "A" (Action — Call to Action) qaysi kadrni bildiradi?',
        options: [
          'Audio o‘chirishni',
          '"Hoziroq ro‘yxatdan o‘ting!" kabi aniq harakatga chaqiruvni',
          'Kadrni kesishni',
          'Xato yozishni',
        ],
        answer: 1,
        explanation: 'Call to Action tomoshabinga videodan keyin aynan nima qilish kerakligini aytadi.',
      },
      {
        prompt: 'Reklama videosi axloqi va qonuni bo‘yicha qaysi harakat TAQIQLANADI?',
        options: [
          'Mahsulot afzalliklarini chiroyli ko‘rsatish',
          'Soxta va yolg‘on va’dalar berib iste’molchini aldash',
          'Quvnoq musiqa qo‘yish',
          'Slogan ishlatish',
        ],
        answer: 1,
        explanation: 'Reklama halol bo‘lishi, mavjud bo‘lmagan natijalarni va’da qilmasligi kerak.',
      },
      {
        prompt: '30 soniyalik reklama videoda har bir slayd taxminan necha soniya turishi optimal ritm beradi?',
        options: ['3–5 soniya', '25 soniya', '0.2 soniya', '60 soniya'],
        answer: 0,
        explanation: '3–5 soniyalik kadrlar ham o‘qishga ulgurish, ham dinamik ritm saqlash imkonini beradi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda "Maktab to‘garaklari" yoki "Ekologik g‘oyalar" bo‘yicha 30 soniyalik mini-rolik yaratish musobaqasi.',
      timing: '10 daqiqa AIDA, 25 daqiqa rolik tayyorlash, 10 daqiqa Order va test.',
      assessment: 'AIDA bosqichlari, Slogan va halol taqdimot.',
      homework: 'Keyingi darsda Audacity da qayta ishlash uchun 15 soniyalik she’r yoki hikoya audio faylini yozib keling.',
    },
  },
  {
    id: 'g8-l32',
    grade: 8,
    no: 32,
    part: '2-yarim yillik',
    title: 'Audacity dasturida ishlash',
    kind: 'dars',
    hours: 1,
    tools: ['Audacity'],
    objectives: [
      'O‘quvchi bepul Audacity dasturida ovoz yozish, tovush to‘lqinini (Waveform) o‘qish va kesish/o‘chirish (Selection, Cut/Trim/Delete) amallarini bajaradi.',
      'O‘quvchi audio sifatini yaxshilash effektlarini (Noise Reduction — shovqinni tozalash, Amplify, Fade In/Out) qo‘llab `.mp3` / `.wav` ga eksport qiladi.',
    ],
    intro:
      'Ovoz yozayotganda boshida 3 soniya jimlik, o‘rtasida yo‘tal yoki orqada ventilyator g‘uvillashi tushib qolsa, qaytadan yozish shart emas! Bepul Audacity dasturi ovoz to‘lqinlarini xuddi matn kabi kesib tozalaydi!',
    sections: [
      {
        heading: 'Audacity interfeysi va asosiy tahrirlash',
        body: 'Audacity — bepul ochiq kodli audio muharriri. Ekranda ovoz to‘lqin shaklida (Waveform — baland tepaliklar baland tovush, tekis chiziq jimlik) ko‘rinadi. Selection Tool (I-kursori) yordamida keraksiz jimlik yoki xato qism belgilab `Delete` bosilsa o‘chadi! `Ctrl+X/C/V` bilan ovoz bo‘laklarini ko‘chirish va ikkinchi yo‘lakchaga (Track) fon musiqasi qo‘shish mumkin.',
        example: 'Boshidagi 2 soniyalik bo‘sh chiziqni belgilab Delete bossak, audio darhol nutqdan boshlanadi.',
        tip: 'Audacity loyiha fayli (`.aup3`) boshqa dasturlarda ochilmaydi! Barcha pleyerlar va video muharrirlarda ishlashi uchun albatta `File → Export Audio → MP3 / WAV` qiling.',
      },
      {
        heading: 'Asosiy audio effektlar (Effect menyusi)',
        body: '1) Noise Reduction (Shovqinni kamaytirish): avval 1 soniya toza shovqin (jimlik) qismini belgilab "Get Noise Profile" olinadi, so‘ng butun audioni belgilab Noise Reduction qo‘llanadi! 2) Fade In (boshidan asta ko‘tarilish) va Fade Out (oxirida asta so‘nish); 3) Amplify / Normalize — ovoz balandligini me’yorga keltirish.',
        example: 'Musiqa oxirining 3 soniyasiga "Fade Out" bersak, qo‘shiq keskin uzilmay mayin tugaydi.',
      },
    ],
    keyTerms: [
      { term: 'Audacity', definition: 'Ovoz yozish, kesish, tozalash va ko‘p yo‘lakli montaj uchun bepul dastur.' },
      { term: 'Waveform (Tovush to‘lqini)', definition: 'Audioning vaqt bo‘yicha balandlik amplitudasini ko‘rsatuvchi grafik ko‘rinish.' },
      { term: 'Noise Reduction', definition: 'Audio yozuvdan doimiy orqa fon shovqinini (g‘uvillashni) olib tashlash effekti.' },
      { term: 'Fade In / Fade Out', definition: 'Ovozning boshida sekin kuchayib, oxirida sekin pasayib tugash effekti.' },
    ],
    steps: [
      '1. Audacity dasturini oching va qizil Record tugmasi bilan 10 soniyalik ovoz yozing (boshida 2 soniya jim turing).',
      '2. Selection Tool bilan boshidagi 2 soniyali jimlikni belgilab Effect → Noise Reduction → Get Noise Profile ni bosing.',
      '3. Ctrl+A bilan hammasini belgilab Noise Reduction ni qo‘llang, keyin keraksiz jimlikni Delete bilan kesib tashlang.',
      '4. Oxirgi 2 soniyaga Effect → Fade Out berib, File → Export → Export as MP3 sifatida saqlang.',
    ],
    practice: [
      {
        task: 'Ovoz yozuvining boshidagi va oxiridagi ortiqcha jimliklarni Selection Tool yordamida kesib olib tashlang.',
        expected: 'Audio keraksiz pauzalarsiz toza boshlanib tugaydi.',
        difficulty: 'oson',
      },
      {
        task: 'Ovozli she’r ostiga ikkinchi trekda musiqa qo‘shib, Fade In / Fade Out va past fon balandligini sozlang.',
        expected: 'Ikki trekli professional audio kompozitsiya `.mp3` da eksport qilinadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l32-g1',
        num: '01',
        title: 'Audacity studiyasi: Kesish va sozlash',
        topic: 'Audacity da ishlash',
        difficulty: 'O‘rta',
        engine: 'audiolab',
        config: {
          prompt: 'Audio yozuvning boshidagi 2 soniya jimlik va oxiridagi 2 soniya shovqinni qirqib (2s dan 8s gacha qoldiring), balandlikni 100% va tezlikni 1x qiling.',
          clipDurationSec: 10,
          targetTrimStart: 2,
          targetTrimEnd: 8,
          targetVolume: 100,
          targetSpeed: 1,
          hint: 'Boshlanish (Trim Start) = 2s, Tugash (Trim End) = 8s, Ovoz (Volume) = 100%, Tezlik = 1x.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Audacity dasturida mikrofondan yozilgan fon g‘uvillashini tozalash uchun qaysi effekt ishlatiladi?',
        options: ['Fade Out', 'Noise Reduction', 'Reverse', 'Echo'],
        answer: 1,
        explanation: 'Noise Reduction avval shovqin namunasini o‘rganib, so‘ng butun audiodan uni tozalaydi.',
      },
      {
        prompt: 'Musiqaning oxiri keskin uzilib qolmasdan asta-sekin pasayib tugashi uchun qaysi effekt qo‘llaniladi?',
        options: ['Fade In', 'Fade Out', 'Amplify', 'Change Speed'],
        answer: 1,
        explanation: 'Fade Out tovushni silliq nolga tushirib tugatadi.',
      },
      {
        prompt: 'Audacity to‘lqin grafigida (Waveform) deyarli tekis gorizontal chiziq nimani bildiradi?',
        options: ['Juda baland qichqiriqni', 'Jimlik yoki juda past shovqinni', 'Musiqa tugaganini', 'Xato faylni'],
        answer: 1,
        explanation: 'Tovush balandligi amplituda balandligi bilan ko‘rsatiladi; tekis chiziq jimlikdir.',
      },
      {
        prompt: 'Tayyor tahrirlangan audioni telefon va barcha dasturlarda ochish uchun qaysi formatda eksport qilgan ma’qul?',
        options: ['.aup3', '.mp3 yoki .wav', '.docx', '.html'],
        answer: 1,
        explanation: '.aup3 faqat Audacity loyiha fayli; tarqatish uchun MP3 yoki WAV ga eksport qilinadi.',
      },
      {
        prompt: 'Ovoz to‘lqinining bir bo‘lagini belgilab `Delete` bosilsa nima sodir bo‘ladi?',
        options: [
          'Butun dastur yopiladi',
          'Belgilangan ortiqcha audio bo‘lagi o‘chiriladi',
          'Ovoz 2 barobar tezlashadi',
          'Yangi trek ochiladi',
        ],
        answer: 1,
        explanation: 'Selection Tool bilan belgilab Delete bosish keraksiz jimlik yoki xatoni kesib tashlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Sinf shovqini bilan 5 soniyali yozuv olib, "Get Noise Profile → Noise Reduction" mo‘jizasini ko‘rsatish.',
      timing: '10 daqiqa interfeys, 23 daqiqa Audacity amaliyoti, 12 daqiqa AudioLab va test.',
      assessment: 'Shovqinni tozalash, ortiqcha bo‘lakni kesish va MP3 eksporti.',
      homework: 'O‘z videongiz uchun Audacity da tozalangan 15 soniyalik diktor ovozi tayyorlab keling.',
    },
  },
  {
    id: 'g8-l33',
    grade: 8,
    no: 33,
    part: '2-yarim yillik',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Pencil2D', 'Adobe Spark', 'Audacity'],
    objectives: [
      'O‘quvchi 2D animatsiya (FPS, Onion Skin, Layers), video yaratish (16:9, AIDA, auditoriya, Narration/Saundtrek) va Audacity audio montaji bilimlarini tekshiradi.',
      'O‘quvchi multimedia loyihasi uchun audio/video montaj topshirig‘ini mustaqil bajaradi.',
    ],
    intro:
      'Multimedia (animatsiya, video va audio) bo‘limini yakunlab, nazorat ishida nazariy va amaliy ko‘nikmalarimizni tekshiramiz!',
    sections: [
      {
        heading: 'Animatsiya va Video bo‘yicha nazorat mezonlari',
        body: 'Kadr/FPS (12–60 FPS), Pencil2D da Onion Skin va Qatlamlar, Videoda 16:9 nisbati, qisqa ekran matnlari, auditoriya talablari (subtitr/temp) hamda AIDA reklama tuzilmasi asosiy mezonlardir.',
        example: '15 FPS × 4 soniya = 60 kadr.',
        tip: 'Video va audio loyihalarda har doim loyiha faylini ham, eksport qilingan tayyor `.mp4`/`.mp3` faylini ham saqlashni unutmang.',
      },
      {
        heading: 'Audio montaj tekshiruvi',
        body: 'Audacity da keraksiz pauzani kesish, Noise Reduction bilan shovqin tozalash, Fade In/Out hamda videoda Narration (100%) va Saundtrek (20%) balansi to‘g‘ri bajarilishi lozim.',
        example: 'Eksport: Video → `.mp4`, Audio → `.mp3`/`.wav`.',
      },
    ],
    keyTerms: [
      { term: 'FPS & Onion Skin', definition: 'Soniyadagi kadr tezligi va oldingi kadr soyasi yordamchisi.' },
      { term: 'AIDA & Slogan', definition: 'Reklama videosi modeli va esda qoluvchi shior.' },
      { term: 'Narration & Mixing', definition: 'Ovozli sharh hamda musiqa bilan ovoz muvozanati.' },
      { term: 'Noise Reduction & Fade', definition: 'Shovqinni tozalash va silliq kirish/chiqish effektlari.' },
    ],
    steps: [
      '1. Audacity da 10 soniyalik ovoz yozib, boshidagi/oxiridagi jimlikni kesing va Fade Out qo‘ying.',
      '2. Qisqa 3 slaydlik ekologik yoki maktab reklama videosini (16:9) sarlavha va ovoz bilan yig‘ing.',
      '3. Yakuniy krossvord va test savollarini yeching.',
    ],
    practice: [
      {
        task: '24 FPS da 10 soniyalik multfilm uchun jami kadr sonini va 2 ta asosiy qatlam (Layer) nomini yozing.',
        expected: '240 kadr; 1-qatlam: Fon, 2-qatlam: Harakatlanuvchi qahramon.',
        difficulty: 'oson',
      },
      {
        task: 'Reklama roligingizni AIDA modeli bo‘yicha 4 bandga ajratib tekshiring.',
        expected: 'Attention, Interest, Desire, Action bosqichlari to‘liq tekshiriladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l33-g1',
        num: '01',
        title: 'Multimedia nazorat krossvordi',
        topic: 'Video, Animatsiya, Audio',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: 'Multimedia bo‘limining asosiy atamalarini toping (bosh harflarda yozing).',
          clues: [
            { id: 'c1', clue: 'Bir soniyadagi kadrlar soni qisqartmasi (3 harf)', answer: 'FPS' },
            { id: 'c2', clue: 'Ovozni tahrirlash va shovqin tozalash bepul dasturi', answer: 'AUDACITY' },
            { id: 'c3', clue: 'Videoda ovoz keskin tugamay asta pasayib borishi effekti: Fade ...', answer: 'OUT' },
            { id: 'c4', clue: 'Reklama mahsulotining esda qolarli qisqa shiori', answer: 'SLOGAN' },
          ],
          hint: 'Atamalar: FPS, AUDACITY, OUT, SLOGAN.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Pencil2D da harakatni silliq chizish uchun oldingi kadr soyasini ko‘rsatadigan funksiya qaysi?',
        options: ['Onion Skin', 'Noise Reduction', 'Firewall', 'Alt Text'],
        answer: 0,
        explanation: 'Onion Skin oldingi va keyingi kadrlar izini xira ko‘rsatib turadi.',
      },
      {
        prompt: 'Videoda ovozli sharh (Narration) aniq eshitilishi uchun fon musiqasini qanday sozlash kerak?',
        options: [
          'Musiqa balandligini 15–25% gacha pasaytirish',
          'Musiqani 200% ga ko‘tarish',
          'Diktor ovozini o‘chirish',
          'Video tezligini 3x qilish',
        ],
        answer: 0,
        explanation: 'Past fon musiqasi nutqni bosib ketmaydi va videoni yoqimli qiladi.',
      },
      {
        prompt: 'Audacity da mikrofon yozuvidagi doimiy g‘uvillashni yo‘qotuvchi effekt qaysi?',
        options: ['Noise Reduction', 'Fade In', 'Timeline', 'Loop'],
        answer: 0,
        explanation: 'Noise Reduction shovqin profiliga qarab keraksiz fon g‘uvillashini tozalaydi.',
      },
      {
        prompt: 'Reklama videosining AIDA modelidagi birinchi "A" (Attention) bosqichi vazifasi nima?',
        options: [
          'Birinchi soniyalardayoq tomoshabin diqqatini jalb qilish',
          'Faylni eksport qilish',
          'Muallif ismini mayda yozish',
          'Audioni kesish',
        ],
        answer: 0,
        explanation: 'Dastlabki soniyalarda e’tiborni tortish tomoshabinning videoni ko‘rishda davom etishini belgilaydi.',
      },
      {
        prompt: 'Kompyuter va televizor ekranlari uchun mos standart video mutanosibligi qaysi?',
        options: ['16:9', '1:3', '9:16', '2:5'],
        answer: 0,
        explanation: '16:9 gorizontal keng ekran standarti hisoblanadi.',
      },
    ],
    teacherNotes: {
      method: 'Amaliy audio/video nazorati + krossvord/test.',
      timing: '25 daqiqa amaliy ish, 15 daqiqa krossvord va test, 5 daqiqa baholash.',
      assessment: 'Audio tozaligi, video ritmi va nazariy aniqlik.',
      homework: '8-sinf davomida yaratgan eng yaxshi 3 ta loyihangizni (Scratch, HTML, Video/Animatsiya) ko‘rgazma uchun tayyorlang.',
    },
  },
  {
    id: 'g8-l34',
    grade: 8,
    no: 34,
    part: '2-yarim yillik',
    title: 'Takrorlash',
    kind: 'takrorlash',
    hours: 1,
    tools: ['Scratch', 'HTML', 'Tarmoq', 'Audacity'],
    objectives: [
      'O‘quvchi 8-sinfning to‘rtta yirik bo‘limini (Scratch o‘yinlar, HTML/CSS saytlar, Kompyuter tarmoqlari va Video/Animatsiya/Audio) yaxlit umumlashtiradi.',
      'O‘quvchi 9-sinfda boshlanadigan apparat ta’minoti, xotira hisoblashlari, axborot xavfsizligi va murakkab veb/jadval texnologiyalariga tayyorlanadi.',
    ],
    intro:
      '8-sinfni a’lo darajada yakunladingiz! Siz bu yil o‘yin dasturladingiz, HTML/CSS da sayt qurdingiz, maktab tarmog‘ini loyihaladingiz hamda multfilm, video va audio montaj qildingiz. Bugun barcha bilimlarni sarhisob qilamiz!',
    sections: [
      {
        heading: '8-sinfning to‘rtta ijodiy va muhandislik yo‘nalishi',
        body: '1) Scratch dasturlash: X/Y koordinatalar, o‘zgaruvchilar (Set/Change), Forever + to‘qnashuvlar, validatsiya (Repeat until), kostyumlar, taymer va debaglash; 2) Veb dasturlash: HTML5 skeleti, matn/ro‘yxat teglari, `<a>` linklar, `<img>` rasmlar, CSS HEX ranglar va xosting (`index.html`); 3) Tarmoqlar: LAN/WAN, NIC/Switch/Router/Modem/AP, Star topologiya, boshqaruv (`ping`, Read-only) va Firewall/WPA3; 4) Multimedia: FPS, Pencil2D (Onion Skin), Adobe Spark/Video (AIDA, Narration) va Audacity.',
        example: 'Endi siz butun bir raqamli mahsulotni noldan oxirigacha yarata olasiz!',
        tip: '9-sinfda kompyuter ichidagi qurilmalar, bayt/megabayt hisob-kitoblari, kiberxavfsizlik protokollari, grafika, Access va 3 qatlamli veb-dasturlashni chuqur o‘rganasiz.',
      },
      {
        heading: 'Karyera va kelajak ko‘nikmalari',
        body: '8-sinfda sinab ko‘rgan sohalaringiz zamonaviy kasblarning poydevoridir: O‘yin dasturchisi (Scratch mantiqi), Frontend veb-muhandis (HTML/CSS), Tarmoq administratori (Switch/Router/Firewall) va Video/Audio montaj ustasi!',
        example: 'Qaysi yo‘nalish sizga ko‘proq yoqqanini yozda mustaqil rivojlantirib boring.',
      },
    ],
    keyTerms: [
      { term: 'Debugging & Validation', definition: 'Dastur xatolarini tuzatish va noto‘g‘ri kiritishlarni tekshirish.' },
      { term: 'HTML & CSS', definition: 'Veb-sahifa tuzilishi hamda rang-dizayn uslublari.' },
      { term: 'Star & Firewall', definition: 'Ishonchli tarmoq topologiyasi va tarmoq himoya devori.' },
      { term: 'Timeline & Audio Mixing', definition: 'Video/animatsiya vaqti va ovoz balansini boshqarish.' },
    ],
    steps: [
      '1. Yil davomida yaratgan loyihalaringizdan 1 tasini (o‘yin, sayt, tarmoq chizmasi yoki video) sinfga taqdim eting.',
      '2. 4 ta bo‘lim bo‘yicha yakuniy umumlashtiruvchi o‘yin va testni yeching.',
      '3. 9-sinfga o‘z oldingizga qo‘ygan 1 ta o‘quv maqsadingizni yozing.',
    ],
    practice: [
      {
        task: '4 ta soha (O‘yin, Veb, Tarmoq, Video) ning har biridan 2 tadan asosiy vosita/atamani bog‘lab yozing.',
        expected: 'Scratch/Variables, HTML/CSS, Switch/Router, Pencil2D/Audacity.',
        difficulty: 'oson',
      },
      {
        task: '"Maktabning o‘quv portali" g‘oyasida HTML, Tarmoq va Video qanday birgalikda ishlashini tushuntiring.',
        expected: 'Sayt HTML/CSS da yoziladi, LAN/Router orqali ochiladi, unda dars videolari joylanadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l34-g1',
        num: '01',
        title: '8-sinf yakuniy saralash bellashuvi',
        topic: 'Yillik takrorlash',
        difficulty: 'O‘rta',
        engine: 'sort',
        config: {
          prompt: '8-sinf atamalarini o‘ziga mos bo‘limlarga ajrating.',
          buckets: ['Dasturlash va Veb', 'Tarmoq va Multimedia'],
          items: [
            { label: 'O‘zgaruvchi va Repeat until validatsiya', bucket: 'Dasturlash va Veb' },
            { label: 'index.html, <a href>, HEX ranglar', bucket: 'Dasturlash va Veb' },
            { label: 'Debaglash (Debugging)', bucket: 'Dasturlash va Veb' },
            { label: 'Switch, Router va Star topologiyasi', bucket: 'Tarmoq va Multimedia' },
            { label: 'Firewall va WPA3 shifrlash', bucket: 'Tarmoq va Multimedia' },
            { label: 'FPS, Onion Skin va Audacity Noise Reduction', bucket: 'Tarmoq va Multimedia' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Scratchda dasturdagi mantiqiy xatoni topib tuzatish jarayoni nima deyiladi?',
        options: ['Xosting', 'Debaglash (Debugging)', 'Onion Skin', 'Narration'],
        answer: 1,
        explanation: 'Debugging dasturdagi buglarni aniqlash va tuzatish jarayonidir.',
      },
      {
        prompt: 'HTMLda sahifaga rasm qo‘shish va matn rangini berish uchun qaysi juftlik to‘g‘ri?',
        options: [
          '<img> va CSS `color`',
          '<a> va `margin`',
          '<title> va `ping`',
          '<br> va `fps`',
        ],
        answer: 0,
        explanation: '<img> rasm joylashtiradi, CSS `color` esa matn rangini belgilaydi.',
      },
      {
        prompt: 'Lokal tarmoqdagi kompyuterlarni bog‘lovchi qurilma va tashqi tarmoqlarga yo‘l ko‘rsatuvchi qurilma juftligi qaysi?',
        options: ['Switch va Router', 'Hub va Alt', 'CSS va HTML', 'MP3 va MP4'],
        answer: 0,
        explanation: 'Switch lokal tugunlarni bog‘laydi, Router esa tarmoqlar orasida yo‘nalish beradi.',
      },
      {
        prompt: 'Pencil2D dasturida oldingi kadrning xira soyasini ko‘rish va Audacity da fon g‘uvillashini tozalash vositalari qaysilar?',
        options: [
          'Onion Skin va Noise Reduction',
          'Merge Cells va Goal Seek',
          'Primary Key va Lookup',
          'Target blank va Href',
        ],
        answer: 0,
        explanation: 'Onion Skin 2D animatsiyada, Noise Reduction esa audio tozalashda ishlatiladi.',
      },
      {
        prompt: 'Veb-saytni internetga joylashtirganda server eng avval qaysi faylni izlaydi?',
        options: ['style.css', 'index.html', 'video.mp4', 'music.mp3'],
        answer: 1,
        explanation: 'Bosh sahifa doimo `index.html` deb nomlanadi.',
      },
    ],
    teacherNotes: {
      method: 'O‘quvchilar loyihalari ko‘rgazmasi va yakuniy umumlashtiruvchi viktorina.',
      timing: '15 daqiqa loyihalar taqdimoti, 15 daqiqa Sort/sarhisob, 15 daqiqa test va tabrik.',
      assessment: 'Yillik asosiy ko‘nikmalarning mustahkam o‘zlashtirilishi.',
      homework: 'Yozda o‘zingizga yoqqan yo‘nalishda (o‘yin, veb-sahifa yoki animatsiya) bitta erkin loyiha yarating.',
    },
  },
];
