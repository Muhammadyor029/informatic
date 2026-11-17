import type { Lesson } from './types';

export const GRADE_11_Q1B: Lesson[] = [
  {
    id: 'g11-l10',
    grade: 11,
    no: 10,
    part: '1-chorak',
    title: 'Audiokliplarni turli fayl formatlarida eksport qilish.',
    kind: 'dars',
    hours: 1,
    tools: ['Audacity', 'WAV / FLAC / MP3 / OGG'],
    objectives: [
      'O‘quvchi audio formatlarni 3 toifaga (**Siqilmagan / Lossless Uncompressed**: `.wav`, `.aiff`; **Yo‘qotishsiz siqilgan / Lossless Compressed**: `.flac`; **Yo‘qotishli siqilgan / Lossy**: `.mp3`, `.aac`, `.ogg`) ajratadi.',
      'O‘quvchi audio fayl hajmi formulasi va **Bitrate (kbps)** ning sifatga taʼsirini hisoblaydi.',
    ],
    intro:
      'Studiyada saqlanadigan **WAV** qo‘shiq nega 40 MB, xuddi shu qo‘shiq **MP3** da esa atigi 4 MB chiqadi? Bugun **Yo‘qotishli (Lossy)** va **Yo‘qotishsiz (Lossless)** audio formatlar hamda eksport qoidalarini o‘rganamiz.',
    sections: [
      {
        heading: 'Lossless (Yo‘qotishsiz) vs Lossy (Yo‘qotishli) formatlar',
        body: '• **`.wav` (Uncompressed Lossless)**: siqilmagan toza raqamli audio (PCM). Studiya montaji va arxiv uchun eng yuqori sifat, lekin fayl hajmi juda katta (~10 MB/daqiqa).\n• **`.flac` (Compressed Lossless)**: sifatdan **hech narsa yo‘qotmasdan** WAV ga nisbatan hajmni ~40–50% kichraytiradi (ZIP arxiv kabi!).\n• **`.mp3` / `.aac` / `.ogg` (Lossy)**: inson qulog‘i deyarli sezmaydigan chastotalarni olib tashlab, hajmni **10 barobargacha** kichraytiradi! Veb, Telegram, podkast va mobil ilovalar uchun standart.',
        example: '192–320 kbps sifatli `.mp3` oddiy tinglovchi uchun `.wav` dan farqlanmaydi, lekin 8 barobar kam joy oladi!',
      },
      {
        heading: 'Audio hajmi va Bitrate (kbps) hisobi',
        body: 'Doimiy bitrate (`CBR`) da fayl hajmi formulasiga amal qilinadi: **`Hajm (bit) = Bitrate (bit/s) × Vaqt (soniya)`** → `KB` yoki `MB` ga o‘tkazish uchun `8` ga bo‘linadi!\nMasalan, `128 kbps` (128 000 bit/s) MP3 ning 1 soniyasi = `128 / 8 = 16 KB/s`; 100 soniyasi = `1600 KB ≈ 1.6 MB`!',
        tip: 'Video yoki keyingi qayta montaj uchun DOIM **`.wav`**, tayyor tarqatish uchun esa **`.mp3` (yoki `.ogg`/`.aac`)** eksport qiling!',
      },
    ],
    keyTerms: [
      { term: 'WAV', definition: 'Siqilmagan, yo‘qotishsiz studiya audio formati (eng katta hajm, maksimal sifat).' },
      { term: 'FLAC', definition: 'Sifatni 100% saqlab qolgan holda hajmni ikki baravargacha kamaytiruvchi yo‘qotishsiz format.' },
      { term: 'MP3 / OGG (Lossy)', definition: 'Inson eshitmaydigan qismlarni tashlab hajmni keskin kichraytiruvchi yo‘qotishli format.' },
      { term: 'Bitrate (kbps)', definition: 'Bir soniya audioni saqlash uchun sarflanadigan kilobitlar miqdori (masalan, 128, 192, 320 kbps).' },
    ],
    steps: [
      '1. `WAV`, `FLAC` va `MP3` ning qachon tanlanishini taqqoslang.',
      '2. `Calc` o‘yinida 128 kbps audio fayl hajmini hisoblang.',
    ],
    practice: [
      {
        task: 'Nima uchun ovozni tahrirlab qayta-qayta `.mp3` ga saqlash (re-encoding) tavsiya etilmaydi?',
        expected: 'Chunki har safar `.mp3` ga eksport qilinganda Lossy siqish yana maʼlumotlarni yo‘qotadi va sifat pasayib boradi; ish jarayonida `.wav` yoki `.aup3` saqlanishi kerak.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g11-l10-g1',
        num: '01',
        title: 'Calc: MP3 fayl hajmini hisobla',
        topic: 'Bitrate va fayl hajmi',
        difficulty: 'O‘rta',
        engine: 'calc',
        config: {
          prompt: 'Bitrate = 128 kbps bo‘lgan podkast 60 soniya (1 daqiqa) davom etadi. Uning hajmi necha Kilobayt (KB, 1 KB = 1000 bayt o‘nlik yoki 128/8 × 60) bo‘ladi?',
          unit: 'KB',
          correctAnswer: 960,
          tolerance: 0,
          steps: [
            '128 kbps = soniyasiga 128 kilobit',
            'Baytga o‘tkazamiz: 128 / 8 = 16 KB/soniya',
            '60 soniya uchun: 16 × 60 = 960 KB',
          ],
          hint: 'Bitni baytga o‘tkazish uchun 8 ga bo‘ling (128 / 8 = 16 KB/s), so‘ng 60 ga ko‘paytiring.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Siqilmagan va maksimal asl studiya sifatini saqlaydigan audio format qaysi?',
        options: ['.mp3', '.wav', '.ogg', '.aac'],
        answer: 1,
        explanation: 'WAV siqilmagan PCM audio formati bo‘lib, hech qanday sifat yo‘qotmaydi.',
      },
      {
        prompt: 'Qaysi format sifatni 100% saqlagan holda (Lossless) fayl hajmini WAV ga qaraganda ~40–50% kichraytiradi?',
        options: ['.flac', '.mp3', '.wma', '.amr'],
        answer: 0,
        explanation: 'FLAC (Free Lossless Audio Codec) yo‘qotishsiz siqish formatidir.',
      },
      {
        prompt: 'Veb-saytlar va podkastlar uchun kichik hajmda tez yuklanadigan eng mashhur yo‘qotishli (Lossy) format qaysi?',
        options: ['.wav', '.aiff', '.mp3', '.aup3'],
        answer: 2,
        explanation: 'MP3 hajmni kichraytirib barcha qurilmalarda oson ijro etiladi.',
      },
      {
        prompt: 'MP3 eksportida `320 kbps` va `64 kbps` orasidagi farq nimada?',
        options: [
          '320 kbps ancha tiniqroq sifatga ega, lekin hajmi 5 baravar katta',
          '64 kbps yaxshiroq sifat beradi',
          'Ikkalasi bir xil hajmda chiqadi',
          '320 kbps ovozni o‘chiradi',
        ],
        answer: 0,
        explanation: 'Bitrate qancha yuqori bo‘lsa, tovush tafsilotlari shuncha ko‘p saqlanadi va fayl kattalashadi.',
      },
      {
        prompt: '256 kbps audio oqimi 1 soniyada necha Kilobayt (KB) maʼlumot uzatadi?',
        options: ['16 KB', '32 KB', '64 KB', '256 KB'],
        answer: 1,
        explanation: '256 kilobit ÷ 8 = 32 Kilobayt.',
      },
    ],
    teacherNotes: {
      method: 'Calc masalasida `bit → bayt (÷8)` o‘tishini va Lossy/Lossless jadvalini tushuntiring.',
      timing: 'Kirish 5 daq, Formatlar 18 daq, Calc 10 daq, Quiz 12 daq.',
      assessment: 'Bitrate hajm masalasi va format tanlash.',
      homework: '3 daqiqalik (180 s) 192 kbps MP3 fayl hajmini MB da hisoblab keling.',
    },
  },
  {
    id: 'g11-l11',
    grade: 11,
    no: 11,
    part: '1-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Video', 'Audacity'],
    objectives: [
      'O‘quvchi 1-chorakning multimedia bo‘limi (Video montaj, Aspect Ratio, Titr/Subtitr, Tezlik, Audacity kesish, Noise Reduction, Reverb, WAV/MP3) bo‘yicha bilimlarini sinaydi.',
    ],
    intro:
      '1-chorak oralig‘idagi nazorat ishi! Video va audio montaj bo‘yicha o‘rganilgan barcha termin va amaliy ko‘nikmalarni tekshiring.',
    sections: [
      {
        heading: 'Multimedia bo‘limi takrori',
        body: '• **Video**: Aspect Ratio (`16:9`, `9:16`), `Timeline`, `Split` / `Trim` / `Ripple Delete`, `Lower Third` / `.srt`, `Snapshot` vs `Freeze Frame`, `MP4 (H.264)`.\n• **Audio**: `Mono` vs `Stereo`, `0 dB Clipping`, `Silence (Ctrl+L)`, `Noise Reduction` (2 qadam), `Change Tempo` vs `Speed`, `Reverb`, `WAV / FLAC / MP3`.',
        example: 'Krossvord va 5 ta nazorat savolini bajaring.',
      },
    ],
    keyTerms: [
      { term: 'Ripple Delete', definition: 'O‘chirilgan klip o‘rnidagi bo‘shliqni avtomatik yopish.' },
      { term: 'Lower Third', definition: 'Ekran pastida spikerni tanishtiruvchi matnli grafik.' },
      { term: 'Clipping', definition: '0 dB dan oshib ovozning xirillab buzilishi.' },
      { term: 'FLAC / WAV', definition: 'Yo‘qotishsiz (Lossless) audio formatlar.' },
    ],
    steps: [
      '1. Krossvordda multimedia atamalarini toping.',
      '2. 5 ta nazorat testini bajaring.',
    ],
    practice: [
      {
        task: 'Video bilan sinxron audio trekdan yo‘talni o‘chirishda nima uchun `Delete` o‘rniga `Silence` tanlanadi?',
        expected: '`Silence` vaqt davomiyligini saqlab qoladi va keyingi so‘zlarning video lab harakatidan siljib ketishini oldini oladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l11-g1',
        num: '01',
        title: 'Multimedia nazorat krossvordi',
        topic: 'Video va Audio atamalar',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '1–10-darslarda o‘tilgan asosiy multimedia atamalarini bosh harfda kiriting:',
          clues: [
            { id: '1', clue: 'Subtitr fayllari kengaytmasi (3 harf)', answer: 'SRT' },
            { id: '2', clue: 'Siqilmagan studiya audio formati (3 harf)', answer: 'WAV' },
            { id: '3', clue: 'Zal aks-sadosi effekti (6 harf)', answer: 'REVERB' },
            { id: '4', clue: 'Bitta kanalli audio yozuv turi (4 harf)', answer: 'MONO' },
          ],
          hint: 'SRT, WAV, REVERB, MONO so‘zlarini kiriting.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'YouTube Shorts va TikTok kabi vertikal mobil videolar uchun qaysi Aspect Ratio tanlanadi?',
        options: ['16:9', '4:3', '9:16', '1:1'],
        answer: 2,
        explanation: 'Vertikal ekran mutanosibligi — `9:16`.',
      },
      {
        prompt: 'Audacity da fon shovqinini tozalashdan oldin birinchi bo‘lib qaysi amal bajariladi?',
        options: ['Get Noise Profile', 'Fade Out', 'Change Pitch', 'Export MP3'],
        answer: 0,
        explanation: 'Avval sof shovqin joyidan Noise Profile olinishi shart.',
      },
      {
        prompt: 'Ovoz ohangini o‘zgartirmay faqat ijro tezligini oshiruvchi effekt qaysi?',
        options: ['Change Speed', 'Change Tempo', 'Change Pitch', 'Reverb'],
        answer: 1,
        explanation: 'Change Tempo ovoz chastotasini saqlagan holda tezlikni o‘zgartiradi.',
      },
      {
        prompt: 'Videodagi aniq bir kadrni alohida PNG/JPG surat qilib saqlab olish funksiyasi nima?',
        options: ['Detach Audio', 'Snapshot / Export Frame', 'Ripple Delete', 'Audio Ducking'],
        answer: 1,
        explanation: 'Snapshot tanlangan kadrdan rasm fayli yaratadi.',
      },
      {
        prompt: 'Quyidagi audio formatlardan qaysi biri YO‘QOTISHLI (Lossy) hisoblanadi?',
        options: ['WAV', 'FLAC', 'MP3', 'AIFF'],
        answer: 2,
        explanation: 'MP3 hajmni kichraytirish uchun baʼzi eshitilmaydigan chastotalarni olib tashlaydi (Lossy).',
      },
    ],
    teacherNotes: {
      method: 'Multimedia bo‘yicha nazorat ishi; krossvord va test natijalarini darhol tahlil qilish.',
      timing: 'Takrorlash 5 daq, Krossvord 15 daq, Nazorat testi 25 daq.',
      assessment: 'Krossvord va 5 ta nazorat testi.',
      homework: 'Keyingi dars — Zamonaviy rivojlanayotgan texnologiyalar mavzusiga tayyorlaning.',
    },
  },
  {
    id: 'g11-l12',
    grade: 11,
    no: 12,
    part: '1-chorak',
    title: 'Texnologiya va bizning turmush tarzimiz. Uch oʻlchamli printer. Toʻrtinchi va beshinchi avlod uyali aloqasi.',
    kind: 'dars',
    hours: 1,
    tools: ['3D Printer', '4G / 5G', 'Yangi texnologiyalar'],
    objectives: [
      'O‘quvchi raqamli texnologiyalarning kundalik hayotga ijobiy va salbiy taʼsirini tahlil qiladi.',
      'O‘quvchi **3D bosma (Additive Manufacturing)** ishlash prinsipi va qo‘llanilishini hamda **4G vs 5G** aloqa avlodlari farqini (tezlik, kechikish/latency, IoT sig‘imi) biladi.',
    ],
    intro:
      'Uydagi choynakni ham telefon bilan boshqaryapmiz, shifoxonada esa 3D printerda sunʼiy suyak protezlari chop etilmoqda! Keling, zamonaviy hayotimizni o‘zgartirayotgan **3D Printerlar** va **4G/5G** texnologiyalarini ko‘ramiz.',
    sections: [
      {
        heading: '3D Printer (Additiv ishlab chiqarish)',
        body: 'Oddiy stanoklar detalni yo‘nib chiqarsa (subtraktiv), **3D Printer** raqamli 3D model (`.stl` / `.obj`) asosida materialni (plastik filament PLA/ABS, qatron, metall kukuni, hatto tirik hujayra/biogel!) **qatlam-baqatlam (layer by layer)** qo‘shib jismoniy buyum yasaydi. Tibbiyotda protezlar, arxitekturada maketlar, kosmik sanoatda yengil detallar chop etiladi.',
        example: 'Avtomobil ishlab chiqarishda yangi detal prototipini zavodda 3 haftada emas, 3D printerda 4 soatda chiqarish mumkin.',
      },
      {
        heading: '4G vs 5G uyali aloqa avlodlari',
        body: '• **4G (LTE)**: mobil keng polosali internet (~100 Mbps gacha), HD video va ilovalar uchun mos, kechikish (Latency) ~30–50 ms.\n• **5G (Beshinchi avlod)**: yuqori chastotali to‘lqinlar orqali **1–10 Gbps** gacha tezlik, **1 ms** gacha ultra-past kechikish va 1 km² da **1 milliontagacha IoT qurilmani** ulash imkoniyati! Bu avtonom haydovchisiz mashinalar va masofaviy jarrohlik uchun zarur.',
        tip: '5G to‘lqinlari devordan qiyinroq o‘tadi, shuning uchun shaharlarda zichroq kichik bazaviy stansiyalar o‘rnatiladi.',
      },
    ],
    keyTerms: [
      { term: '3D Printer', definition: 'Raqamli 3D model asosida materialni qatlam-baqatlam qo‘yib buyum yasovchi qurilma.' },
      { term: 'Additiv texnologiya', definition: 'Materialni kesib tashlamasdan, qatlamma-qatlam qo‘shib detal yaratish usuli.' },
      { term: '5G', definition: 'Ultra-tezkor (Gbps), 1 ms kechikishli va ommaviy IoT ni qo‘llovchi 5-avlod mobil aloqa.' },
      { term: 'Latency (Kechikish)', definition: 'Signalning yuborilib javob qaytishiga ketadigan vaqt (millisekund).' },
    ],
    steps: [
      '1. 3D printerning bosma bosqichlarini tushuning.',
      '2. 4G va 5G ni 3 mezon (Tezlik, Latency, IoT sig‘imi) bo‘yicha solishtiring.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Nima uchun masofaviy jarrohlik roboti va haydovchisiz avtomobillar uchun 4G emas, aynan 5G zarur?',
        expected: '5G da kechikish (Latency) ~1 ms gacha tushadi; xavfli vaziyatda tormoz yoki jarroh pichoq signali soniyaning mingdan birida yetib borishi shart.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l12-g1',
        num: '01',
        title: '3D Printer va 5G texnologiyalari',
        topic: 'Zamonaviy texnologiyalar',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Texnologiyani uning asosiy xususiyatiga moslashtiring:',
          pairs: [
            { left: '3D Printer (Additiv)', right: 'Qatlamma-qatlam plastik/metall qo‘shib 3D modeldan buyum yasash' },
            { left: '5G Latency (~1 ms)', right: 'Haydovchisiz mashina va masofaviy jarrohlik uchun zudlik javobi' },
            { left: '4G LTE', right: 'HD video va mobil ilovalar uchun keng tarqalgan 4-avlod aloqa' },
            { left: '3D Bioprinting', right: 'Tibbiyotda maxsus moslashtirilgan protez va to‘qimalar chop etish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '3D printer buyumni qaysi tamoyil asosida yaratadi?',
        options: [
          'Katta blokni bolta bilan yo‘nish orqali',
          'Raqamli model asosida materialni qatlamma-qatlam (Additiv) qo‘shish orqali',
          'Qog‘ozga lazer bilan bo‘yoq sepish orqali',
          'Magnit lenta yozish orqali',
        ],
        answer: 1,
        explanation: '3D bosma (Additive Manufacturing) qatlamma-qatlam qo‘shish usulida ishlaydi.',
      },
      {
        prompt: '5G tarmog‘ining 4G ga nisbatan eng muhim texnik ustunligi qaysi?',
        options: [
          'Faqat qo‘ng‘iroq qilish',
          'Bir necha Gbps tezlik, ~1 ms ultra-past kechikish va millionlab IoT qurilmani ulash',
          'Simli kabeldan sekinroq ishlash',
          'Batareyasiz telefonlarda ishlash',
        ],
        answer: 1,
        explanation: '5G yuqori tezlik, past kechikish va ulkan IoT zichligini taʼminlaydi.',
      },
      {
        prompt: '3D printerda chop etish uchun 3D modellar ko‘pincha qaysi formatda tayyorlanadi?',
        options: ['.stl / .obj', '.mp3', '.csv', '.srt'],
        answer: 0,
        explanation: 'STL (Stereolithography) 3D chop etishdagi asosiy model formatidir.',
      },
      {
        prompt: 'Texnologiyalarning turmush tarzimizga SALBIY taʼsirlariga qaysi biri misol bo‘ladi?',
        options: [
          'Tibbiy diagnostika aniqligining oshishi',
          'Kamharakatlilik, kiberfiribgarlik va ekran qaramligi ortishi',
          'Masofaviy taʼlim imkoniyati',
          'Tezkor muloqot',
        ],
        answer: 1,
        explanation: 'Qulayliklar bilan birga gipodinamiya, ko‘z charchashi va kiber-xavflar ham ortadi.',
      },
      {
        prompt: '5G aloqa minoralari nima uchun 4G ga qaraganda bir-biriga yaqinroq joylashtiriladi?',
        options: [
          'Yuqori chastotali 5G to‘lqinlar qisqa masofali bo‘lib, devor va daraxtlardan qiyinroq o‘tadi',
          'Chiroyli ko‘rinishi uchun',
          'Telefon zaryadini oshirish uchun',
          'Simlarni qisqartirish uchun',
        ],
        answer: 0,
        explanation: 'Yuqori chastotali (mmWave) signallar yuqori tezlik beradi, ammo to‘siqlardan o‘tish qobiliyati pastroq.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda 3D bosma (`.stl` → Slicer → G-code → Chop etish) zanjirini qisqacha tushuntiring.',
      timing: 'Kirish 5 daq, 3D Printer & 4G/5G 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: '4G vs 5G va 3D bosma qo‘llanilishini asoslash.',
      homework: 'Tibbiyot va qurilishda 3D printerlarning 2 ta foydasini yozing.',
    },
  },
  {
    id: 'g11-l13',
    grade: 11,
    no: 13,
    part: '1-chorak',
    title: 'Sunʼiy intellekt. Boyitilgan reallik. Biometrik axborot. Bulutli texnologiyalar.',
    kind: 'dars',
    hours: 1,
    tools: ['AI', 'AR', 'Biometrika', 'Cloud'],
    objectives: [
      'O‘quvchi 4 ta zamonaviy texnologiyani: **Sunʼiy intellekt (AI)**, **Boyitilgan reallik (AR)**, **Biometrik autentifikatsiya** va **Bulutli texnologiyalar (Cloud Computing)** ni farqlaydi.',
      'O‘quvchi har bir texnologiyaning afzalliklari hamda axloqiy/xavfsizlik jihatlarini (maxfiylik, biometrik maʼlumotlar sizib chiqishi) baholaydi.',
    ],
    intro:
      'Telefonni yuzingiz bilan ochasiz (**Biometrika**), fayllarni Google Drive da saqlaysiz (**Bulut**), xonaga virtual divan qo‘yib ko‘rasiz (**AR**) va ovozli yordamchidan maslahat olasiz (**AI**)! Bugun shu 4 texnologiyani chuqurroq o‘rganamiz.',
    sections: [
      {
        heading: 'Sunʼiy intellekt (AI) va Boyitilgan reallik (AR)',
        body: '• **Sunʼiy intellekt (AI)**: mashinalarning inson fikrlashini (tajribadan o‘rganish, nutq/tasvir tanish, tarjima, qaror qabul qilish) simulyatsiya qilishi. Misol: tibbiy rentgen tasvirida o‘simtani aniqlash, spam filtrlari.\n• **Boyitilgan reallik (AR — Augmented Reality)**: real dunyo tasviriga (telefon kamerasi yoki aqlli ko‘zoynak orqali) **virtual 3D obyekt va maʼlumotlarni** qo‘shib ko‘rsatish! (Masalan, IKEA ilovasida xonangizga virtual mebel qo‘yish, futbol o‘yinida ekrandagi ofsayd chizig‘i).',
        example: 'VR sizni butunlay virtual olamga olib kirsa, **AR** haqiqiy atrof-muhitni saqlab ustiga raqamli qatlam qo‘shadi!',
      },
      {
        heading: 'Biometrik axborot va Bulutli texnologiyalar',
        body: '• **Biometrika**: shaxsni uning noyob biologik belgilari — barmoq izi, yuz (Face ID), ko‘z to‘r pardasi (Retina/Iris) yoki ovoz orqali aniqlash. Afzalligi: parolni unutib bo‘lmaydi; **Xavfi**: parolni almashtirsa bo‘ladi, lekin barmoq izini o‘zgartirib bo‘lmaydi!\n• **Bulutli texnologiyalar (Cloud Computing)**: fayl va dasturlarni shaxsiy kompyuterda emas, internetdagi uzoq serverlarda saqlash va ishlatish (Google Drive, iCloud, AWS). Istalgan joydan kirish va avtomatik hamkorlik beradi, ammo internetga va provayder xavfsizligiga bog‘liq.',
        tip: 'AR ≠ VR: Telefon kamerangiz orqali oshxona stolingiz ustida 3D yurak modelini ko‘rish — **AR**!',
      },
    ],
    keyTerms: [
      { term: 'Sunʼiy intellekt (AI)', definition: 'O‘rganish, tahlil qilish va qaror qabul qilish kabi intellektual vazifalarni bajaruvchi kompyuter tizimlari.' },
      { term: 'Boyitilgan reallik (AR)', definition: 'Haqiqiy dunyo ko‘rinishi ustiga real vaqtda raqamli rasm, matn yoki 3D obyekt qo‘shish.' },
      { term: 'Biometrika', definition: 'Shaxsni noyob jismoniy yoki xulq-atvor belgilari (barmoq izi, ko‘z, yuz) bo‘yicha tasdiqlash.' },
      { term: 'Cloud Computing', definition: 'Internet orqali server quvvati, xotira va dasturlardan talab bo‘yicha foydalanish.' },
    ],
    steps: [
      '1. AI, AR, Biometrika va Cloud ning bittadan hayotiy misolini keltiring.',
      '2. Biometrika paroldan nimasi bilan ustun va nimasi bilan xavfliroq ekanini muhokama qiling.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Muzeyga borganingizda telefoningiz kamerasini qadimgi ko‘za ustiga tutsangiz, ekranda ko‘zaning butun 3D shakli va tarixi paydo bo‘ldi. Bu VR mi yoki AR?',
        expected: '**AR (Boyitilgan reallik)** — chunki haqiqiy muzey devori va eksponat foni saqlangan holda ustiga virtual maʼlumot qo‘yilmoqda.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l13-g1',
        num: '01',
        title: '4 ta zamonaviy texnologiyani bog‘la',
        topic: 'AI, AR, Biometrika va Bulut',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir texnologiyani uning aniq qo‘llanilish misoli bilan bog‘lang:',
          pairs: [
            { left: 'Sunʼiy intellekt (AI)', right: 'Rentgen tasviridan kasallik alomatini avtomatik aniqlash' },
            { left: 'Boyitilgan reallik (AR)', right: 'Kamera orqali bo‘sh xonaga virtual divanni joylab ko‘rish' },
            { left: 'Biometrik autentifikatsiya', right: 'Aeroportda ko‘z qorachig‘i yoki barmoq izi bilan pasport nazorati' },
            { left: 'Bulutli texnologiya (Cloud)', right: 'Bir hujjatni 5 kishi internet orqali bir vaqtda tahrirlashi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Real dunyo tasviriga smartfon kamerasi orqali virtual 3D obyektlarni qo‘shib ko‘rsatuvchi texnologiya qaysi?',
        options: ['Virtual reallik (VR)', 'Boyitilgan reallik (AR)', 'Biometrika', '3D Printer'],
        answer: 1,
        explanation: 'AR (Augmented Reality) haqiqiy muhitni raqamli obyektlar bilan boyitadi.',
      },
      {
        prompt: 'Biometrik maʼlumotlar (masalan, barmoq izi bazasi) o‘g‘irlanishining oddiy paroldan ko‘ra xavfliroq jihati nimada?',
        options: [
          'Parolni yangisiga almashtirsa bo‘ladi, barmoq izi va ko‘z pardasini esa o‘zgartirib bo‘lmaydi',
          'Biometrika internetda ishlamaydi',
          'Uni hech qachon tekshirib bo‘lmaydi',
          'Faqat bir marta qo‘llanadi',
        ],
        answer: 0,
        explanation: 'Biologik belgilar umrbod o‘zgarmas bo‘lgani uchun ularning sizib chiqishi doimiy xavf tug‘diradi.',
      },
      {
        prompt: 'Kompaniyaning shaxsiy server sotib olmasdan, internetdagi uzoq maʼlumotlar markazidan joy va hisoblash quvvati ijaraga olishi nima?',
        options: ['Bulutli texnologiyalar (Cloud Computing)', 'Local Storage', 'Bluetooth', 'Offline Backup'],
        answer: 0,
        explanation: 'Cloud Computing internet orqali masofaviy server resurslarini taqdim etadi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri Biometrik axborotga KIRMAYDI?',
        options: ['Barmoq izi', 'Ko‘z to‘r pardasi (Retina)', 'Yuz tuzilishi (Face ID)', 'PIN-kod (4 xonali raqam)'],
        answer: 3,
        explanation: 'PIN-kod biologik xususiyat emas, balki eslab qolinadigan maxfiy son.',
      },
      {
        prompt: 'Bulutli saqlash (Cloud Storage) dan foydalanishning asosiy kamchiligi qaysi?',
        options: [
          'Telefon sinib qolsa fayllar yo‘qoladi',
          'Fayllarga kirish uchun barqaror internet aloqasi talab qilinadi',
          'Boshqalar bilan ulashib bo‘lmaydi',
          'Faqat matn saqlaydi',
        ],
        answer: 1,
        explanation: 'Internetsiz (oflayn sinxronizatsiya bo‘lmasa) bulutdagi fayllarga ulanib bo‘lmaydi.',
      },
    ],
    teacherNotes: {
      method: 'AR vs VR farqini va "Parolni almashtirish mumkin, lekin barmoq izini yo‘q" fikrini muhokama qiling.',
      timing: 'Kirish 5 daq, 4 ta texnologiya 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: 'AR/VR/Biometrika/Cloud ni farqlash.',
      homework: 'Maktabda bulutli texnologiya va AR qanday foyda keltirishi haqida 1 tadan taklif yozing.',
    },
  },
  {
    id: 'g11-l14',
    grade: 11,
    no: 14,
    part: '1-chorak',
    title: 'Avtomatlashtirilgan tarjima. Golografik tasvirlash. Robototexnika.',
    kind: 'dars',
    hours: 1,
    tools: ['Tarjimon', 'Golografiya', 'Robototexnika'],
    objectives: [
      'O‘quvchi **Avtomatlashtirilgan/Mashina tarjimasi (Computer-Assisted / Neural Machine Translation)** imkoniyatlari va til nozikliklaridagi cheklovlarini tushunadi.',
      'O‘quvchi **Golografik tasvirlash (Holography)** prinsipi hamda **Robototexnika (Robotics)** ning sanoat, tibbiyot va xavfli muhitlardagi rolini biladi.',
    ],
    intro:
      'Yaponiyaga borganingizda kamerangizni menyuga tutib o‘zbekchada o‘qiysiz (**Avtotarjima**), konsert sahnasida uch o‘lchamli nurli siymo ko‘rasiz (**Gologramma**), zavodda esa 24 soat payvand qiluvchi **Robot** ishlaydi!',
    sections: [
      {
        heading: 'Avtomatlashtirilgan tarjima va Gologramma',
        body: '• **Avtomatlashtirilgan (Neyron) tarjima**: matn, nutq yoki kamera tasviridagi yozuvlarni real vaqtda bir tildan boshqasiga o‘girish. Sayohat va tezkor tushunishda juda qulay, ammo **iboralar, hazillar, sheʼriyat va rasmiy huquqiy hujjatlarda** maʼno buzilishi mumkin — shuning uchun inson muharrir tekshiruvi zarur!\n• **Golografik tasvirlash (Holography)**: lazer nurlarining interferensiyasi yordamida maxsus ko‘zoynaksiz havoda ko‘rinadigandek **haqiqiy 3D hajmli tasvir (Gologramma)** hosil qilish. Muzeylar, jarrohlikda aʼzolarni ko‘rish, hujjatlarni qalbakilashtirishdan himoyalash (banknot va pasportlardagi gologrammalar!) da ishlatiladi.',
        example: '"It is raining cats and dogs" iborasini so‘zma-so‘z tarjima qilish kulgili xato chiqaradi — neyron tarjima kontekstni tushunishga harakat qiladi.',
      },
      {
        heading: 'Robototexnika (Robotics)',
        body: '**Robot** — sensorlar orqali muhitni sezib, dastur bo‘yicha mexanik harakat (**aktuatorlar**) bajaruvchi avtomatik qurilma. Sanoatda (avtomobil yig‘ish, bo‘yash), tibbiyotda (Da Vinci jarrohlik roboti), omborlarda (Amazon kurer robotlari) va xavfli hududlarda (mina tozalash, Mars roverlari, chuqur okean) inson hayotini asraydi. Kamchiligi: o‘rnatish narxi baland va oddiy ish o‘rinlari qisqarishi mumkin.',
        tip: 'Robotlar takroriy, o‘ta aniq va hayot uchun xavfli ishlarda insondan ustun, lekin ijod va hamdardlikda inson o‘rnini bosa olmaydi!',
      },
    ],
    keyTerms: [
      { term: 'Mashina tarjimasi', definition: 'Matn yoki nutqni dasturiy algoritmlar yordamida bir tildan ikkinchisiga avtomatik tarjima qilish.' },
      { term: 'Golografiya', definition: 'Yorug‘lik to‘lqinlari interferensiyasi orqali uch o‘lchamli hajmli tasvir yaratish texnologiyasi.' },
      { term: 'Robototexnika', definition: 'Sensor, protsessor va aktuatorlarga ega avtomatlashtirilgan mexanik tizimlarni yaratish sohasi.' },
      { term: 'Mikro-jarrohlik roboti', definition: 'Shifokor qo‘li qaltirashini bartaraf etib millimetr aniqligida operatsiya qiluvchi robot.' },
    ],
    steps: [
      '1. Avtotarjima afzalligi va cheklovlarini ko‘ring.',
      '2. Gologramma va robototexnika qo‘llanilishini sanang.',
      '3. Quyidagi To‘g‘ri/Noto‘g‘ri o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Nima uchun muhim xalqaro shartnomalar yoki adabiy romanlarni faqat avtomatik tarjimonga topshirib bo‘lmaydi?',
        expected: 'Chunki avtomatik tarjimon madaniy nozikliklar, ko‘p maʼnoli atamalar va huquqiy masʼuliyat talab qiladigan kontekstda xato qilishi mumkin.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l14-g1',
        num: '01',
        title: 'Tarjima, Gologramma va Robotlar',
        topic: 'Yangi texnologiyalar tahlili',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Avtomatik tarjima, golografiya va robototexnika haqidagi fikrlarni baholang:',
          statements: [
            { text: 'Golografiya lazer nurlari yordamida uch o‘lchamli (3D) hajmli tasvir hosil qiladi.', isTrue: true, explanation: 'Gologramma yorug‘lik interferensiyasi orqali 3D hajm effektini yaratadi.' },
            { text: 'Mashina tarjimonlari sheʼrlar va murakkab huquqiy hujjatlarni har doim inson tarjimoni darajasida xatosiz o‘giradi.', isTrue: false, explanation: 'Iboralar, badiiy uslub va murakkab kontekstda inson muharriri zarur.' },
            { text: 'Robototexnika radioaktiv zonalar va mina tozalash kabi xavfli ishlarda inson hayotini saqlaydi.', isTrue: true, explanation: 'Xavfli muhitlarda robotlardan foydalanish asosiy afzalliklardan biridir.' },
            { text: 'Banknot va ID kartalardagi gologrammalar ularni qalbakilashtirishdan himoyalash uchun ishlatiladi.', isTrue: true, explanation: 'Gologrammalarni oddiy skaner/printerda nusxalab bo‘lmaydi.' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Avtomobil zavodida og‘ir qismlarni 24 soat to‘xtovsiz va bir xil aniqlikda payvandlash uchun qaysi texnologiya eng samarali?',
        options: ['Golografiya', 'Sanoat robototexnikasi', 'QR kod', 'Bulutli dastur'],
        answer: 1,
        explanation: 'Sanoat robotlari charchamaydi va takroriy aniqlik talab qiladigan og‘ir ishlarni tez bajaradi.',
      },
      {
        prompt: 'Banknotlar (pullar) va pasportlarda qalbakilashtirishdan himoya sifatida uchraydigan yaltiroq 3D tasvir nima?',
        options: ['Subtitr', 'Gologramma', 'Watermark CSV', 'Bitmap'],
        answer: 1,
        explanation: 'Gologramma nusxalashni qiyinlashtiruvchi optik 3D tasvirdir.',
      },
      {
        prompt: 'Avtomatlashtirilgan tarjimaning eng katta kamchiligi qaysi?',
        options: [
          'Faqat tunda ishlashi',
          'Iboralar, kinoya va murakkab kontekstni baʼzan noto‘g‘ri tarjima qilishi',
          'Lotin alifbosini tanimasligi',
          'Internetda umuman ishlamasligi',
        ],
        answer: 1,
        explanation: 'So‘zma-so‘z yoki kontekstsiz tarjima maʼnoni buzishi mumkin.',
      },
      {
        prompt: 'Robot atrof-muhitdagi to‘siq yoki harorat haqida maʼlumotni qaysi qismi orqali oladi?',
        options: ['Aktuator', 'Sensorlar (Datchiklar)', 'Printer', 'Monitor'],
        answer: 1,
        explanation: 'Sensorlar tashqi muhitni o‘qiydi, aktuatorlar esa harakatni bajaradi.',
      },
      {
        prompt: 'Golografik tasvirlash oddiy 2D proyeksiya (proyektor) dan nimasi bilan farq qiladi?',
        options: [
          'Yorug‘lik intensivligidan tashqari fazasini ham qayd etib, turli burchakdan 3D hajm beradi',
          'Faqat oq-qora bo‘ladi',
          'Qog‘ozga chop etiladi',
          'Tovush chiqaradi',
        ],
        answer: 0,
        explanation: 'Golografiya yorug‘lik to‘lqinlarining fazasi va amplitudasi orqali chuqurlik (3D) hosil qiladi.',
      },
    ],
    teacherNotes: {
      method: 'Passportdagi himoya gologrammasi va sayohat tarjimoni misollarini sinfda ko‘rsatish.',
      timing: 'Kirish 5 daq, Tarjima/Gologramma/Robot 20 daq, TrueFalse 10 daq, Quiz 10 daq.',
      assessment: 'Har bir texnologiyaning afzallik va cheklovlarini tushuntirish.',
      homework: 'Robotlar qo‘llanilishining 2 ta ijobiy va 2 ta ijtimoiy muammoli jihatini yozing.',
    },
  },
  {
    id: 'g11-l15',
    grade: 11,
    no: 15,
    part: '1-chorak',
    title: 'QR kodlar. Taqiladigan hisoblash qurilmalari.',
    kind: 'dars',
    hours: 1,
    tools: ['QR Code', 'Wearables', 'Yangi texnologiyalar'],
    objectives: [
      'O‘quvchi **QR kod (Quick Response Code)** tuzilishini (3 ta burchakdagi pozitsiya kvadratlari, xatolarni tuzatish qobiliyati) va uning oddiy shtrix-koddan (Barcode) ustunligini biladi.',
      'O‘quvchi **Taqiladigan qurilmalar (Wearable Technology)**: aqlli soatlar, fitnes-trekerlar, aqlli ko‘zoynak va tibbiy sensorlarning imkoniyat va xavflarini tahlil qiladi.',
    ],
    intro:
      'Kafeda menyu ko‘rishdan tortib Click/Payme to‘lovigacha hamma joyda **QR kod** bor! Qo‘lingizdagi **Aqlli soat** esa qadam va yurak urishingizni kun bo‘yi kuzatmoqda. Bu ikki texnologiya qanday ishlaydi?',
    sections: [
      {
        heading: 'QR kodlar (2D Matrix Barcode)',
        body: '**QR (Quick Response)** — ikki o‘lchovli (2D) matritsali kod. Oddiy chiziqli **Shtrix-kod (Barcode)** atigi ~20 ta raqam saqlasa, QR kod **4000 dan ortiq belgi** (URL havola, Wi-Fi paroli, vizitka, to‘lov maʼlumoti) saqlaydi! Uchta burchagidagi katta kvadratlar (**Position Markers**) kamera uni istalgan burchakdan, hatto teskari ushlaganda ham 0.1 soniyada o‘qishini taʼminlaydi. **Error Correction** tufayli QR kodning 30% gacha qismi kir yoki yirtiq bo‘lsa ham o‘qiladi! **Xavfi (Quishing)**: firibgarlar soxta zararli havolali QR kod yopishtirib ketishi mumkin!',
        example: 'Bekatdagi to‘lov QR kodi ustiga begona stiker yopishtirilmaganiga eʼtibor bering va ochilgan URL manzilini tekshiring!',
      },
      {
        heading: 'Taqiladigan hisoblash qurilmalari (Wearables)',
        body: '**Wearables** — inson tanasiga taqiladigan mini-kompyuterlar: **Aqlli soatlar (Smartwatch)**, fitnes bilakuzuklar (yurak urishi, kislorod SpO2, uyqu tahlili), tibbiy insulin/EKG patchlari, aqlli ko‘zoynaklar. Afzalliklari: qo‘llar bo‘sh holda tezkor bildirishnoma, sog‘liqni doimiy monitoring qilish, NFC to‘lov. Kamchiliklari: kichik ekran, batareya tez tugashi, shaxsiy sog‘liq maʼlumotlari maxfiyligi xavfi.',
        tip: 'Oddiy Barcode — 1D (gorizontal chiziqlar); QR kod — 2D (kvadrat piksellar)!',
      },
    ],
    keyTerms: [
      { term: 'QR Code (Quick Response)', definition: 'Minglab belgilarni tez o‘qiladigan shaklda saqlovchi ikki o‘lchovli (2D) matritsali kod.' },
      { term: 'Error Correction', definition: 'QR kodning bir qismi shikastlanganda ham maʼlumotni tiklab o‘qish algoritmi.' },
      { term: 'Wearables', definition: 'Tanaga taqib yuriladigan sensorli aqlli elektron qurilmalar (soat, treker, ko‘zoynak).' },
      { term: 'Quishing', definition: 'Zararli veb-sahifaga yo‘naltiruvchi soxta QR kodlar orqali fishing hujumi.' },
    ],
    steps: [
      '1. 1D Barcode va 2D QR kodning sig‘im va o‘qish farqini solishtiring.',
      '2. Taqiladigan qurilmalarning foyda va cheklovlarini sanang.',
      '3. Quyidagi bo‘shliqni to‘ldirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Nima uchun QR kodning markaziga kichik kompaniya logotipini qo‘ysa ham telefon kamerasi uni bemalol o‘qiyveradi?',
        expected: 'QR kod ichida **Error Correction** (Reed-Solomon xatolarni tuzatish kodi) mavjud bo‘lib, kodning 30% gacha qismi yopilsa ham asl matnni qayta tiklay oladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g11-l15-g1',
        num: '01',
        title: 'QR kod va Wearables bilimdoni',
        topic: '2D kodlar va taqiladigan qurilmalar',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'QR kod va taqiladigan qurilmalarga oid bo‘sh joylarni to‘ldiring:',
          template: 'Oddiy shtrix-kod 1D bo‘lsa, QR kod {{0}} matritsali koddir. QR kodning 30% qismi zararlanganda ham o‘qilishini {{1}} algoritmi taʼminlaydi. Yurak urishi va qadamni o‘lchaydigan aqlli soatlar {{2}} texnologiyasiga kiradi.',
          blanks: [
            { options: ['ikki o‘lchovli (2D)', 'uch o‘lchovli (3D)', 'audio'], answer: 'ikki o‘lchovli (2D)' },
            { options: ['Error Correction', 'Clipping', 'Freeze Frame'], answer: 'Error Correction' },
            { options: ['Wearables', 'Flat-File', 'Batch'], answer: 'Wearables' },
          ],
          hint: 'QR — 2D; tiklash — Error Correction; taqiladigan qurilma — Wearables.',
          explanation: 'QR kod 2D tuzilma va Error Correction tufayli ishonchli; aqlli soatlar esa Wearables toifasiga kiradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'QR kodning 1D shtrix-kodga (Barcode) nisbatan asosiy ustunligi nimada?',
        options: [
          'Minglab belgi (URL, matn) sig‘dira oladi va istalgan burchakdan tez o‘qiladi',
          'Faqat 5 ta raqam saqlaydi',
          'Kamerasiz o‘qiladi',
          'Faqat qizil rangda bo‘ladi',
        ],
        answer: 0,
        explanation: 'QR kod 2 o‘lchamda maʼlumot saqlagani uchun yuzlab barobar ko‘p axborot joylaydi.',
      },
      {
        prompt: 'QR kod burchaklaridagi 3 ta katta kvadrat belgilarining vazifasi nima?',
        options: [
          'Bezak berish',
          'Kamera kodning yo‘nalishi va o‘lchamini istalgan burchakdan tez aniqlashi uchun',
          'Narxni ko‘rsatish',
          'Shovqinni tozalash',
        ],
        answer: 1,
        explanation: 'Position Detection Markers skanerga kodning burchagi va qiyshayishini darhol aniqlab beradi.',
      },
      {
        prompt: 'Soxta QR kod skaner qilib, firibgarlik saytiga kirib qolish xavfi qanday ataladi?',
        options: ['Quishing (QR Phishing)', 'Render', 'Compression', 'Normalize'],
        answer: 0,
        explanation: 'Quishing — QR kodlar orqali amalga oshiriladigan fishing hujumi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri Taqiladigan qurilma (Wearable) ga misol BO‘LA OLMAYDI?',
        options: ['Aqlli soat (Smartwatch)', 'Fitnes bilakuzuk', 'Stol usti lazer printeri', 'Aqlli ko‘zoynak'],
        answer: 2,
        explanation: 'Lazer printer stol ustida turadigan tashqi qurilma, tanaga taqilmaydi.',
      },
      {
        prompt: 'Fitnes-trekerlar va aqlli soatlarning keng tarqalgan kamchiligi qaysi?',
        options: [
          'Kichik ekran va tez-tez quvvatlash (batareya) zarurati',
          'Hech qanday sensor yo‘qligi',
          'Vaqtni ko‘rsata olmasligi',
          'Internetga umuman ulanmasligi',
        ],
        answer: 0,
        explanation: 'O‘lchami kichikligi sababli batareya sig‘imi va ekrani cheklangan bo‘ladi.',
      },
    ],
    teacherNotes: {
      method: 'QR kodning 3 burchak kvadrati va Quishing xavfsizligi qoidalarini ko‘rsatish.',
      timing: 'Kirish 5 daq, QR & Wearables 20 daq, FillBlank 10 daq, Quiz 10 daq.',
      assessment: 'QR afzalliklari va Quishing himoyasi.',
      homework: 'Sinfingiz uchun bepul QR generator yordamida xavfsiz havola QR kodini yaratib ko‘ring.',
    },
  },
  {
    id: 'g11-l16',
    grade: 11,
    no: 16,
    part: '1-chorak',
    title: 'Ultra yuqori aniqlik darajasidagi televideniye. Koʻrish qobiliyatini yaxshilash. Virtual reallik.',
    kind: 'dars',
    hours: 1,
    tools: ['UHD / 4K / 8K', 'OLED', 'Vision Enhancement', 'VR'],
    objectives: [
      'O‘quvchi **UHD TV (4K va 8K)**, **OLED/QLED** displey texnologiyalari va yuqori keng polosali internet/saqlash talablarini biladi.',
      'O‘quvchi **Ko‘rish qobiliyatini yaxshilash (Vision Enhancement)** vositalari hamda **Virtual reallik (VR — Virtual Reality)** shlemlarining qo‘llanilishini tushunadi.',
    ],
    intro:
      'Katta ekranda kino ko‘rayotganda har bir maysa bargini tiniq ko‘rish (**4K/8K UHD**), maxsus ko‘zoynak taqib virtual Mars yuzasida yurish (**VR**) va ko‘zi ojizlarga dunyoni "ko‘rish"ga yordam beruvchi **Aqlli ko‘zoynaklar** — bugungi mavzumiz!',
    sections: [
      {
        heading: 'Ultra High Definition (UHD: 4K va 8K) va OLED',
        body: '• **Full HD (1080p)**: `1920×1080` (~2 mln piksel).\n• **4K UHD (2160p)**: `3840×2160` (~8.3 mln piksel — Full HD dan **4 barobar** tiniqroq!).\n• **8K UHD**: `7680×4320` (~33 mln piksel — 16 barobar!).\n**OLED (Organic LED)** ekranlarda har bir piksel mustaqil yonib-o‘chadi — shuning uchun haqiqiy mutlaq qora rang, yuqori kontrast va egiluvchan ekranlar olinadi. Kamchiligi: 4K/8K uzatish uchun juda tezkor internet (`25–100 Mbps`) va katta xotira zarur.',
        example: 'Kichik 6 dyuymli telefonda 4K va 8K farqi sezilmaydi, lekin 65 dyuymli televizorda 4K nihoyatda tiniq ko‘rinadi.',
      },
      {
        heading: 'Ko‘rishni yaxshilash (Vision Enhancement) va Virtual reallik (VR)',
        body: '• **Vision Enhancement**: zaif ko‘ruvchilar uchun kamera + ekran orqali tasvirni kattalashtiruvchi, kontrastini oshiruvchi va matnni ovozga o‘giruvchi aqlli ko‘zoynaklar (eSight, OrCam) hamda jarrohlik uchun termal/infraqizil ko‘rish tizimlari.\n• **Virtual reallik (VR)**: maxsus shlem (Meta Quest, PlayStation VR) va kontrollerlar orqali foydalanuvchini tashqi dunyodan butunlay uzib, 360° kompyuter yaratgan **virtual olamga** joylashtirish! Qo‘llanilishi: parvoz/jarrohlik simulyatorlari, arxitektura sayohati, xavfli sharoit mashqlari, taʼlim va o‘yinlar. Kamchiligi: bosh aylanishi (motion sickness) va narxi.',
        tip: 'AR real dunyoga qo‘shadi; **VR esa real dunyoni to‘liq almashtiradi!**',
      },
    ],
    keyTerms: [
      { term: '4K UHD', definition: '3840×2160 pikselli (8.3 megapiksel) o‘ta yuqori aniqlikdagi televideniye va video standarti.' },
      { term: 'OLED', definition: 'Har bir organik pikseli o‘zidan nur taratib, mukammal qora rang beruvchi displey texnologiyasi.' },
      { term: 'Vision Enhancement', definition: 'Zaif ko‘ruvchilarga tasvirni kuchaytirib yoki o‘qib beruvchi yordamchi raqamli tizimlar.' },
      { term: 'Virtual reallik (VR)', definition: 'Maxsus shlem orqali foydalanuvchini to‘liq sunʼiy 3D kompyuter muhitiga sho‘ng‘ituvchi texnologiya.' },
    ],
    steps: [
      '1. Full HD, 4K va 8K piksellar sonini solishtiring.',
      '2. AR va VR o‘rtasidagi asosiy farqni ayting.',
      '3. Quyidagi CaseStudy topshirig‘ini bajaring.',
    ],
    practice: [
      {
        task: 'Tibbiyot talabalariga murakkab yurak jarrohligini haqiqiy bemorga zarar yetkazmasdan 50 marta mashq qilish uchun qaysi texnologiya eng mos: UHD TV mi yoki VR simulyator?',
        expected: '**VR (Virtual reallik)** — chunki kontrollerlar bilan 3D muhitda amaliy qo‘l harakatlarini xavfsiz mashq qilish imkonini beradi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l16-g1',
        num: '01',
        title: 'Keys: VR vs AR vs UHD',
        topic: 'Vizual texnologiyalarni tanlash',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Qurilish kompaniyasi mijozga hali qurilmagan uyning ichida "yurib ko‘rish", xonalar o‘lchamini va derazadan ko‘rinishni to‘liq his qilish imkonini bermoqchi. Qaysi texnologiya eng mos?',
          scenario: 'Mijoz ofisda o‘tiribdi. Hali bino poydevori ham qo‘yilmagan, faqat 3D BIM loyiha modeli mavjud.',
          options: [
            {
              text: 'Virtual reallik (VR) shlemi orqali 360° virtual tur',
              isCorrect: true,
              feedback: 'To‘g‘ri! Bino hali mavjud bo‘lmagani uchun VR shlemi mijozni to‘liq kelajakdagi uy ichiga olib kiradi.',
            },
            {
              text: 'Oddiy QR kodli qog‘oz varaq',
              isCorrect: false,
              feedback: 'Noto‘g‘ri — qog‘oz xonaning 360° hajmini his qildira olmaydi.',
            },
            {
              text: 'MP3 audio fayl',
              isCorrect: false,
              feedback: 'Noto‘g‘ri — meʼmorchilik ko‘rish va fazoviy hisni talab qiladi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '4K UHD ekranning standart piksellar o‘lchami qaysi?',
        options: ['1280×720', '1920×1080', '3840×2160', '800×600'],
        answer: 2,
        explanation: '4K UHD (3840×2160) eni va bo‘yiga Full HD dan 2 barobar (jami 4 barobar ko‘p piksel) katta.',
      },
      {
        prompt: 'Virtual reallik (VR) va Boyitilgan reallik (AR) o‘rtasidagi asosiy farq nimada?',
        options: [
          'VR foydalanuvchini butunlay sunʼiy olamga kiritadi, AR esa haqiqiy dunyo ustiga virtual element qo‘shadi',
          'AR faqat o‘yinlarda, VR esa faqat matn yozishda ishlatiladi',
          'Ular mutlaqo bir xil',
          'VR internetsiz ishlamaydi',
        ],
        answer: 0,
        explanation: 'VR to‘liq immersiv virtual muhit yaratadi; AR esa haqiqiy atrofni boyitadi.',
      },
      {
        prompt: 'OLED displeylarning anʼanaviy LCD ekranlardan ustunligi nimada?',
        options: [
          'Har bir piksel mustaqil yongani uchun mutlaq qora rang va yuqori kontrast beradi',
          'Faqat 16 ta rang ko‘rsatadi',
          'Og‘ir shisha lampali bo‘ladi',
          'Hech qanday elektr ishlatmaydi',
        ],
        answer: 0,
        explanation: 'OLED da qora piksel butunlay o‘chiriladi, shuning uchun kontrast cheksiz yuqori.',
      },
      {
        prompt: 'Ko‘rish qobiliyati zaif insonlarga atrofni kattalashtirib va kontrastlab ko‘rsatuvchi aqlli ko‘zoynaklar qaysi yo‘nalishga kiradi?',
        options: ['Vision Enhancement', 'Batch Processing', 'Data Mining', 'CAD/CAM'],
        answer: 0,
        explanation: 'Vision Enhancement ko‘rishni kuchaytiruvchi yordamchi texnologiyadir.',
      },
      {
        prompt: 'VR shlemidan uzoq foydalanganda baʼzi odamlarda uchraydigan noqulaylik qaysi?',
        options: [
          'Bosh aylanishi va ko‘ngil aynishi (Motion Sickness)',
          'Klaviatura buzilishi',
          'Qog‘oz tiqilishi',
          'CSV kodirovkasi xatosi',
        ],
        answer: 0,
        explanation: 'Ko‘z ko‘rayotgan harakat bilan ichki quloq muvozanati mos kelmaganda bosh aylanishi kuzatilishi mumkin.',
      },
    ],
    teacherNotes: {
      method: '4K piksellar sonini Full HD ga nisbatan kvadratlar misolida ko‘rsating (2×2 = 4 marta ko‘p).',
      timing: 'Kirish 5 daq, UHD/Vision/VR 20 daq, CaseStudy 10 daq, Quiz 10 daq.',
      assessment: 'AR vs VR va UHD farqlarini izohlash.',
      homework: 'Taʼlimda VR shlemlari yordamida o‘tish foydali bo‘lgan 3 ta fanni va mavzuni yozing.',
    },
  },
  {
    id: 'g11-l17',
    grade: 11,
    no: 17,
    part: '1-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Yangi texnologiyalar'],
    objectives: [
      'O‘quvchi 1-chorakning ikkinchi qismi: 3D Printer, 4G/5G, AI, AR/VR, Biometrika, Cloud, Mashina tarjimasi, Golografiya, Robototexnika, QR kod, Wearables va UHD/Vision Enhancement bo‘yicha bilimlarini sinaydi.',
    ],
    intro:
      '1-chorak yakuniy nazorat ishi! Zamonaviy rivojlanayotgan texnologiyalarning ishlash tamoyillari, afzalliklari va xavfsizlik jihatlari bo‘yicha bilimlaringizni sinang.',
    sections: [
      {
        heading: 'Nazorat mavzulari xulosasi',
        body: '• **Ishlab chiqarish va Aloqa**: `3D Printer` (Additiv), `5G` (~1 ms latency, Gbps, IoT).\n• **Intellekt va Reallik**: `AI`, `AR` (haqiqiy + virtual), `VR` (to‘liq virtual), `Golografiya` (3D nur), `UHD 4K` (`3840×2160`).\n• **Xavfsizlik va Qurilmalar**: `Biometrika`, `Cloud`, `QR kod` (2D, Error Correction, Quishing), `Wearables`.',
        example: 'Krossvord va 5 ta yakuniy savolni diqqat bilan ishlang.',
      },
    ],
    keyTerms: [
      { term: '5G Latency', definition: '1 millisekundgacha tushirilgan signal kechikishi.' },
      { term: 'AR vs VR', definition: 'Real olamni boyitish vs to‘liq virtual muhitga sho‘ng‘ish.' },
      { term: 'Quishing', definition: 'Soxta QR kod orqali amalga oshiriladigan fishing.' },
      { term: 'Additiv bosma', definition: 'Qatlamma-qatlam qo‘shib 3D obyekt yaratish.' },
    ],
    steps: [
      '1. Krossvordda zamonaviy texnologiyalar atamalarini toping.',
      '2. 5 ta yakuniy nazorat testini bajaring.',
    ],
    practice: [
      {
        task: 'Nima uchun 5G tarmog‘i haydovchisiz avtomobillar uchun juda muhim?',
        expected: 'Chunki 5G ~1 ms ultra-past kechikish (Latency) bilan to‘siqlar haqidagi signalni bir zumda uzatadi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l17-g1',
        num: '01',
        title: '1-chorak yakuniy krossvordi',
        topic: 'Yangi texnologiyalar terminlari',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: 'Yangi texnologiyalar bo‘limiga oid asosiy qisqartma va atamalarni bosh harfda kiriting:',
          clues: [
            { id: '1', clue: 'Fayl va dasturlarni internetdagi serverlarda saqlash (5 harf)', answer: 'CLOUD' },
            { id: '2', clue: 'Ikki o‘lchovli tezkor javob matritsali kodi (2 harf)', answer: 'QR' },
            { id: '3', clue: 'Sunʼiy intellekt qisqartmasi (2 harf)', answer: 'AI' },
            { id: '4', clue: 'To‘liq virtual muhitga kirituvchi texnologiya (2 harf)', answer: 'VR' },
          ],
          hint: 'CLOUD, QR, AI, VR atamalarini kiriting.',
        },
      },
    ],
    quiz: [
      {
        prompt: '3D printer qaysi texnologiya turiga mansub?',
        options: ['Additiv (qatlamma-qatlam qo‘shish)', 'Subtraktiv (kesib tashlash)', 'Termo-bosma qog‘oz', 'Magnit yozuv'],
        answer: 0,
        explanation: '3D printer materialni qatlamma-qatlam qo‘shib shakl yasaydi.',
      },
      {
        prompt: '3840×2160 pikselli televideniye standarti qaysi?',
        options: ['HD (720p)', 'Full HD (1080p)', '4K UHD', 'VGA'],
        answer: 2,
        explanation: '3840×2160 — 4K Ultra High Definition standartidir.',
      },
      {
        prompt: 'Muzey eksponati ustiga kamerani tutganda ekranda uning 3D modeli va izohi chiqishi qaysi texnologiya?',
        options: ['Boyitilgan reallik (AR)', 'Virtual reallik (VR)', '3D Bioprinting', 'OLED'],
        answer: 0,
        explanation: 'Haqiqiy manzara ustiga virtual element qo‘shilishi — AR.',
      },
      {
        prompt: 'QR kodning bir qismi tirnalib qolganda ham o‘qilishini taʼminlovchi xususiyat qaysi?',
        options: ['Error Correction (Xatolarni tuzatish)', 'Bitrate', 'Clipping', 'Change Tempo'],
        answer: 0,
        explanation: 'Error Correction qisman shikastlangan kodni ham tiklab o‘qiydi.',
      },
      {
        prompt: 'Shaxsni ko‘z to‘r pardasi yoki barmoq izi orqali tekshirish nima deyiladi?',
        options: ['Golografiya', 'Biometrik autentifikatsiya', 'Mashina tarjimasi', 'Cloud Computing'],
        answer: 1,
        explanation: 'Noyob biologik belgilar orqali shaxsni tasdiqlash Biometrika deyiladi.',
      },
    ],
    teacherNotes: {
      method: '1-chorak yakuniy baholash va krossvord tahlili.',
      timing: 'Takrorlash 5 daq, Krossvord 15 daq, Nazorat testi 25 daq.',
      assessment: '1-chorak yakuniy bahosi.',
      homework: 'Keyingi takrorlash darsi uchun video/audio va yangi texnologiyalar konspektini ko‘rib chiqing.',
    },
  },
  {
    id: 'g11-l18',
    grade: 11,
    no: 18,
    part: '1-chorak',
    title: 'Takrorlash darsi',
    kind: 'takrorlash',
    hours: 1,
    tools: ['Video', 'Audacity', 'Yangi texnologiyalar'],
    objectives: [
      'O‘quvchi 1-chorakda o‘tilgan Multimedia (Video + Audio montaj) va Zamonaviy texnologiyalar (5G, 3D, AI, AR/VR, QR, Biometrika, Cloud) bilimlarini umumlashtiradi.',
    ],
    intro:
      '1-chorakning yakuniy takrorlash darsi! Video/audio montaj ko‘nikmalari va XXI asr texnologiyalarining asosiy tushunchalarini tezkor kartochkalar va test bilan mustahkamlang.',
    sections: [
      {
        heading: '1-chorak tayanch xulosalari',
        body: '• **Video**: `16:9` vs `9:16`, `Split` / `Trim` / `Ripple Delete`, `Lower Third` / `.srt`, `Snapshot`, `MP4 (H.264)`.\n• **Audio**: `Mono` vs `Stereo`, `Noise Reduction` (2 bosqich), `Change Tempo` vs `Speed`, `Reverb`, `WAV / FLAC / MP3`.\n• **Texnologiyalar**: `3D Printer`, `5G` (1 ms latency), `AR` vs `VR`, `Biometrika`, `Cloud`, `QR` (2D + Error Correction).',
        example: '2-chorakda E-tijorat, Data Mining va Kompyuter tarmoqlarining chuqur arxitekturasiga o‘tamiz!',
      },
    ],
    keyTerms: [
      { term: 'Ripple Delete', definition: 'Kesilgan klip o‘rnidagi bo‘sh vaqtni avtomatik yopish.' },
      { term: 'Change Tempo', definition: 'Ovoz ohangini buzmasdan gapirish tezligini o‘zgartirish.' },
      { term: 'Lossless (WAV/FLAC)', definition: 'Sifatni 100% saqlab qoluvchi audio formatlar.' },
      { term: 'AR vs VR', definition: 'Haqiqiy muhitni boyitish vs to‘liq virtual muhit.' },
    ],
    steps: [
      '1. Flashcards yordamida asosiy atamalarni takrorlang.',
      '2. Yakuniy 5 ta savolni ishlang.',
    ],
    practice: [
      {
        task: 'O‘quv videosi tayyorlashda 1–16-darslardagi texnologiyalardan qanday uyg‘unlikda foydalanish mumkin?',
        expected: 'Videoni `16:9` Full HD da montaj qilish (`Split`, `Lower Third`, `.srt`), ovozni Audacity da `Noise Reduction` va `Normalize` bilan tozalab `.wav` da qo‘shish, hamda tayyor video havolasini QR kod orqali ulashish.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g11-l18-g1',
        num: '01',
        title: '1-chorak Blitz Kartochkalari',
        topic: 'Multimedia va Texnologiyalar',
        difficulty: 'O‘rta',
        engine: 'flashcards',
        config: {
          prompt: 'Har bir karta ustiga bosib taʼrif va qo‘llanilishini takrorlang:',
          cards: [
            { term: '16:9 vs 9:16', definition: '16:9 keng ekranli YouTube/TV uchun; 9:16 vertikal telefon Reels/Shorts uchun.', example: '1920×1080 vs 1080×1920' },
            { term: 'Noise Reduction', definition: '1) Sukutdan profil olish; 2) Butun trekka qo‘llash orqali shovqinni tozalash.', example: 'Audacity Effect menyusi' },
            { term: 'WAV vs MP3', definition: 'WAV siqilmagan studiya sifati (katta hajm); MP3 siqilgan ixcham format.', example: '128 kbps MP3 = 16 KB/soniya' },
            { term: 'AR vs VR', definition: 'AR haqiqiy kadrga 3D qo‘shadi; VR to‘liq virtual dunyoga kiritadi.', example: 'Kamera mebeli (AR) vs Shlem (VR)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '192 kbps MP3 audio fayl 10 soniyada necha Kilobayt joy egallaydi?',
        options: ['192 KB', '240 KB', '320 KB', '96 KB'],
        answer: 1,
        explanation: '192 / 8 = 24 KB/soniya; 24 × 10 = 240 KB.',
      },
      {
        prompt: 'Video montajda spiker ismini pastki chap burchakda ko‘rsatish elementi nima?',
        options: ['Freeze Frame', 'Lower Third', 'Fade Out', 'Aspect Ratio'],
        answer: 1,
        explanation: 'Lower Third kadrning pastki qismidagi tanishtiruvchi titrdir.',
      },
      {
        prompt: 'Qaysi texnologiya materialni kesmasdan qatlamma-qatlam qo‘yib buyum yasaydi?',
        options: ['3D Printer', 'OLED', '4G LTE', 'QR kod'],
        answer: 0,
        explanation: '3D printerlar additiv (qatlamma-qatlam) usulda ishlaydi.',
      },
      {
        prompt: 'Har bir piksel mustaqil yorug‘lik chiqarib mukammal qora rang beradigan ekran turi qaysi?',
        options: ['OLED', 'CRT', 'Fax', 'E-Ink'],
        answer: 0,
        explanation: 'OLED piksellari qora rangda to‘liq o‘chgani uchun maksimal kontrast beradi.',
      },
      {
        prompt: 'Ovoz yozuvidagi kichik shovqinli pauzani vaqtni siljitmasdan nolga tushirish buyrug‘i qaysi?',
        options: ['Ripple Delete', 'Silence Audio (Ctrl+L)', 'Change Speed', 'Export WAV'],
        answer: 1,
        explanation: 'Silence Audio davomiylikni o‘zgartirmay tovushni jimjit qiladi.',
      },
    ],
    teacherNotes: {
      method: '1-chorak yakuni; o‘quvchilarning multimedia va yangi texnologiyalar bo‘yicha taassurotlarini muhokama qilish.',
      timing: 'Takrorlash 15 daq, Flashcards 15 daq, Yakuniy quiz 15 daq.',
      assessment: 'Umumiy chorak takrori.',
      homework: '2-chorakda "E-tijorat va internet banking" mavzusi uchun kundalik to‘lov ilovalari misollarini yozing.',
    },
  },
];
