import type { Lesson } from './types';

export const GRADE_11_Q1A: Lesson[] = [
  {
    id: 'g11-l01',
    grade: 11,
    no: 1,
    part: '1-chorak',
    title: 'Videoni tahrirlash dasturi. Mutanosiblikni belgilash.',
    kind: 'dars',
    hours: 1,
    tools: ['Video', 'OpenShot / Shotcut', 'CapCut / Premiere'],
    objectives: [
      'O‘quvchi video tahrirlash dasturlari (OpenShot, Shotcut, DaVinci Resolve, Premiere Pro) interfeysining asosiy panellarini (Media Pool, Preview, Timeline) biladi.',
      'O‘quvchi kadrlar mutanosibligi (**Aspect Ratio**: `16:9`, `9:16`, `4:3`, `1:1`) va kadr tezligi (**FPS**) tushunchalarini amaliy maqsadga ko‘ra to‘g‘ri tanlaydi.',
    ],
    intro:
      '11-sinfni raqamli multimedia — **Video va Audio montaj** bilan boshlaymiz! Nima uchun YouTube videolari keng ekranli, Instagram Reels esa vertikal bo‘ladi? Bularning barchasi **Mutanosiblik (Aspect Ratio)** sozlamasiga bog‘liq.',
    sections: [
      {
        heading: 'Video muharrir interfeysi',
        body: 'Har qanday zamonaviy video muharrir (bepul ochiq kodli **OpenShot** yoki **Shotcut**, shuningdek **Premiere Pro**) 4 asosiy qismdan iborat:\n1) **Project Files / Media Bin**: video, rasm va audio fayllar ombori.\n2) **Preview Window (Monitor)**: tahrirlanayotgan videoni jonli ko‘rish oynasi.\n3) **Timeline (Vaqt shkalasi)**: video (`V1`, `V2`) va audio (`A1`, `A2`) qatlamlari ketma-ket joylashadigan ish maydoni.\n4) **Effects / Properties**: o‘tishlar, rang va tezlik sozlamalari.',
        example: 'Yuqori trek (`V2`) dagi rasm yoki matn pastki trek (`V1`) dagi asosiy videoning ustida ko‘rinadi (qavatlar tamoyili).',
      },
      {
        heading: 'Mutanosiblik (Aspect Ratio) va FPS',
        body: '**Aspect Ratio** — kadr kengligining balandligiga nisbati:\n• **`16:9` (1920×1080 Full HD, 3840×2160 4K)**: YouTube, televizor va zamonaviy monitorlar standarti.\n• **`9:16` (1080×1920)**: TikTok, Instagram Reels, YouTube Shorts (vertikal telefon).\n• **`1:1` (1080×1080)**: ijtimoiy tarmoq postlari (kvadrat).\n• **`4:3`**: eski televizor va klassik prezentatsiyalar.\n**FPS (Frames Per Second)** — soniyadagi kadrlar soni: kino (`24 fps`), standart video (`30 fps`), ravon sport/o‘yin (`60 fps`).',
        example: 'Telefonni vertikal ushlab olingan `9:16` videoni `16:9` loyihaga qo‘ysangiz, ikki chetida qora chiziqlar (Pillarbox) paydo bo‘ladi!',
        tip: 'Loyiha boshlanishida darhol maqsadli platformaga mos Aspect Ratio ni belgilash keyingi kesilishlardan saqlaydi!',
      },
    ],
    keyTerms: [
      { term: 'Aspect Ratio', definition: 'Video kadr kengligining uning balandligiga nisbati (masalan, 16:9 yoki 9:16).' },
      { term: 'Timeline (Vaqt shkalasi)', definition: 'Video va audio kliplar vaqt bo‘yicha ketma-ket joylashtiriladigan tahrirlash paneli.' },
      { term: 'FPS (Frame Rate)', definition: 'Bir soniya davomida ekranda almashinadigan kadrlar soni (24, 30, 60 fps).' },
      { term: 'Full HD (1080p)', definition: '1920×1080 pikselli, 16:9 mutanosiblikdagi keng tarqalgan video aniqligi.' },
    ],
    steps: [
      '1. Video muharrirning 4 ta asosiy panelini sanang.',
      '2. `16:9`, `9:16`, `1:1` va `4:3` formatlarini mos platformalarga bog‘lang.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Maktab tadbiri haqida YouTube uchun reportaj tayyorlayapsiz. Qaysi Aspect Ratio va ruxsat (Resolution) ni tanlaysiz?',
        expected: '`16:9` mutanosiblik va `1920×1080` (Full HD) yoki `3840×2160` (4K), `30 fps` yoki `60 fps`.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l01-g1',
        num: '01',
        title: 'Mutanosiblik va muharrir qismlari',
        topic: 'Aspect Ratio va Video interfeys',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir tushunchani mos tavsif yoki qo‘llanilishiga bog‘lang:',
          pairs: [
            { left: '16:9 (1920×1080)', right: 'YouTube va zamonaviy keng ekranlar uchun standart nisbat' },
            { left: '9:16 (1080×1920)', right: 'Vertikal mobil format (Reels, Shorts)' },
            { left: 'Timeline', right: 'Video va audio qatlamlari joylashadigan vaqt shkalasi' },
            { left: '60 FPS', right: 'Tezkor harakat va sport uchun silliq kadr tezligi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'YouTube va zamonaviy televizorlar uchun standart kadr mutanosibligi (Aspect Ratio) qaysi?',
        options: ['4:3', '16:9', '1:1', '9:16'],
        answer: 1,
        explanation: '16:9 (masalan, 1920×1080 Full HD) zamonaviy keng ekranlar standartidir.',
      },
      {
        prompt: 'Video muharrirda kliplar ketma-ket joylashtirilib kesiladigan asosiy ish maydoni qanday ataladi?',
        options: ['Color Wheel', 'Timeline (Vaqt shkalasi)', 'Render Queue', 'Media Cache'],
        answer: 1,
        explanation: 'Timeline da barcha video va audio treklar vaqt o‘qi bo‘ylab yig‘iladi.',
      },
      {
        prompt: 'Smartfonni tik holatda ushlab Shorts yoki Reels videosi tayyorlash uchun qaysi Aspect Ratio tanlanadi?',
        options: ['16:9', '4:3', '9:16', '21:9'],
        answer: 2,
        explanation: 'Vertikal ekranlar uchun kenglik 9, balandlik 16 nisbat (`9:16`) qo‘llanadi.',
      },
      {
        prompt: 'Video sifati ko‘rsatkichi `60 fps` nimani anglatadi?',
        options: [
          'Video hajmi 60 MB ekanini',
          'Bir soniyada 60 ta kadr ko‘rsatilishini',
          'Video davomiyligi 60 soniya ekanini',
          '60 xil rang ishlatilganini',
        ],
        answer: 1,
        explanation: 'FPS (Frames Per Second) — soniyadagi kadrlar soni.',
      },
      {
        prompt: 'Qaysi bepul va ochiq kodli (Open Source) dastur video tahrirlash uchun ishlatiladi?',
        options: ['OpenShot / Shotcut', 'WinRAR', 'Notepad++', 'PuTTY'],
        answer: 0,
        explanation: 'OpenShot va Shotcut bepul, kross-platforma video montaj dasturlaridir.',
      },
    ],
    teacherNotes: {
      method: 'OpenShot yoki Shotcut oynasini ochib, `16:9` vs `9:16` profil tanlashni ko‘rsatish.',
      timing: 'Kirish 5 daq, Interfeys va Aspect Ratio 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: 'Platformaga qarab to‘g‘ri mutanosiblik tanlash.',
      homework: '3 ta mashhur platforma (YouTube, Shorts, eski TV) uchun Aspect Ratio va o‘lchamlarini yozib keling.',
    },
  },
  {
    id: 'g11-l02',
    grade: 11,
    no: 2,
    part: '1-chorak',
    title: 'Videoklipni montaj qilish va kliplarni birlashtirish.',
    kind: 'dars',
    hours: 1,
    tools: ['Video', 'Timeline', 'Split / Trim'],
    objectives: [
      'O‘quvchi videoklipni kesish (**Trim**), o‘rtasidan bo‘lish (**Split / Razor**) va ortiqcha qismlarni o‘chirish (Ripple Delete) amallarini bajaradi.',
      'O‘quvchi alohida videokliplarni Timeline da mantiqiy ketma-ketlikda birlashtirib yaxlit syujet yig‘adi.',
    ],
    intro:
      'Xom videoda ko‘pincha boshida kamera yoqilguncha pauza, o‘rtasida esa xato kadrlar bo‘ladi. Professional montajchi **Split (Bo‘lish)** va **Trim (Qirqish)** asboblari bilan ortiqcha soniyalarni olib tashlab, kliplarni bir tekis ulaydi!',
    sections: [
      {
        heading: 'Kesish (Trim) va Bo‘lish (Split / Razor)',
        body: '• **Trim (Boshi/oxirini qisqartirish)**: klipning chap yoki o‘ng chetini sichqoncha bilan ichkariga surib, keraksiz boshlanish yoki tugashni olib tashlash.\n• **Split / Razor Tool (`S` yoki `C`)**: ijro kursorini (Playhead) kerakli kadrga qo‘yib, bitta klipni 2 ta mustaqil bo‘lakka kesish — o‘rtadagi xato joyni kesib olish uchun ishlatiladi!\n• **Ripple Delete**: bo‘lakni o‘chirganda qoladigan bo‘sh qora bo‘shliqni (Gap) avtomatik yopib, keyingi kliplarni chapga surish.',
        example: '15 soniyalik kadrning 5–8-soniyalari orasida shamol shovqini bo‘lsa: 5-soniyada `Split`, 8-soniyada `Split`, o‘rtadagi 3 soniyalik bo‘lakka `Ripple Delete`!',
      },
      {
        heading: 'Kliplarni birlashtirish (Concatenation) va O‘tishlar',
        body: 'Kliplar Timeline da ketma-ket joylashtiriladi: Kirish (Intro) → Asosiy kadrlar → Xulosa (Outro). Kliplar orasidagi keskin sakrashni yumshatish uchun **Cut** (to‘g‘ridan-to‘g‘ri ulash) yoki **Cross Dissolve / Fade** (silliq erib o‘tish) qo‘llaniladi.',
        tip: 'Quyidagi `Timeline` simulyatorida kliplarni syujet bo‘yicha to‘g‘ri ketma-ketlikda yig‘ib ko‘ring!',
      },
    ],
    keyTerms: [
      { term: 'Playhead (Ijro kursori)', definition: 'Timeline da ayni damda qaysi kadr ko‘rsatilayotganini bildiruvchi vertikal chiziq.' },
      { term: 'Split / Razor', definition: 'Playhead turgan nuqtadan videoklipni ikki bo‘lakka bo‘lish asbobi.' },
      { term: 'Trim', definition: 'Klipning boshi yoki oxirini chetlaridan surib qisqartirish.' },
      { term: 'Ripple Delete', definition: 'Klipni o‘chirib, uning o‘rnidagi bo‘sh vaqtni avtomatik siqib yopish.' },
    ],
    steps: [
      '1. `Trim` va `Split` farqini tushuning.',
      '2. `Timeline` o‘yinida kliplarni to‘g‘ri tartibda joylashtiring.',
    ],
    practice: [
      {
        task: 'Oddiy `Delete` va `Ripple Delete` o‘rtasidagi asosiy farq nimada?',
        expected: 'Oddiy `Delete` klipni o‘chiradi, lekin o‘rnida qora bo‘shliq (Gap) qoldiradi; `Ripple Delete` esa o‘ngdagi kliplarni surib bo‘shliqni darhol yopadi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l02-g1',
        num: '01',
        title: 'Timeline: Maktab reportajini yig‘',
        topic: 'Kliplarni ketma-ket birlashtirish',
        difficulty: 'O‘rta',
        engine: 'timeline',
        config: {
          prompt: 'Maktab haqidagi qisqa video-reportaj kliplarini mantiqiy syujet tartibida (Kirish → Dars jarayoni → Intervyu → Yakun) Timeline ga joylang:',
          clips: [
            { id: 'c3', label: 'O‘quvchi intervyusi', duration: 8, color: '#059669' },
            { id: 'c1', label: 'Kirish (Maktab binosi)', duration: 4, color: '#2563eb' },
            { id: 'c4', label: 'Xulosa va yakuniy kadr', duration: 3, color: '#9333ea' },
            { id: 'c2', label: 'Informatika darsi jarayoni', duration: 6, color: '#d97706' },
          ],
          expectedOrder: ['c1', 'c2', 'c3', 'c4'],
          hint: 'Syujet: Kirish (c1) → Dars jarayoni (c2) → Intervyu (c3) → Xulosa (c4).',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Videoklipning o‘rtasidagi 4 soniyalik xato joyni kesib olish uchun avval qaysi asbob ishlatiladi?',
        options: ['Zoom', 'Split / Razor (Bo‘lish)', 'Mute', 'Invert'],
        answer: 1,
        explanation: 'Xato joyning boshi va oxirida Split qilinib, o‘rtadagi bo‘lak o‘chiriladi.',
      },
      {
        prompt: 'O‘rtadan klip o‘chirilganda hosil bo‘lgan qora bo‘shliqni avtomatik yopib, keyingi kliplarni suradigan amal qaysi?',
        options: ['Ripple Delete', 'Copy', 'Export', 'Freeze Frame'],
        answer: 0,
        explanation: 'Ripple Delete o‘chirish bilan birga bo‘shliqni ham yopadi.',
      },
      {
        prompt: 'Timeline da joriy kadrni belgilab turuvchi vertikal chiziq nima deyiladi?',
        options: ['Aspect Ratio', 'Playhead', 'Codec', 'Thumbnail'],
        answer: 1,
        explanation: 'Playhead ijro va tahrirlash nuqtasini ko‘rsatadi.',
      },
      {
        prompt: 'Klipning faqat boshlanishi yoki tugashidagi ortiqcha 2 soniyani chetidan tortib qisqartirish nima?',
        options: ['Trim', 'Render', 'Subtitling', 'Panning'],
        answer: 0,
        explanation: 'Trim klipning chetlarini ichkariga qisqartirishdir.',
      },
      {
        prompt: 'Bir klip tugab ikkinchisi silliq erib chiqish o‘tish effekti odatda nima deyiladi?',
        options: ['Cross Dissolve', 'Crop', 'Bitrate', 'Pixelate'],
        answer: 0,
        explanation: 'Cross Dissolve ikki klip o‘rtasida ravon aralashuv o‘tishini beradi.',
      },
    ],
    teacherNotes: {
      method: 'Timeline simulyatorida syujet mantig‘i (Kirish-Asosiy-Xulosa) va `Ripple Delete` qulayligini ko‘rsatish.',
      timing: 'Kirish 5 daq, Split/Trim/Ripple 18 daq, Timeline o‘yini 12 daq, Quiz 10 daq.',
      assessment: 'Kliplarni syujet bo‘yicha to‘g‘ri birlashtirish.',
      homework: '30 soniyalik "Mening kunim" videosi uchun 4 ta klipdan iborat syujet rejasini yozing.',
    },
  },
  {
    id: 'g11-l03',
    grade: 11,
    no: 3,
    part: '1-chorak',
    title: 'Matnli slayd va titr yaratish. Izoh va subtitr qoʻshish. Animatsiya va effektlar qoʻshish.',
    kind: 'dars',
    hours: 1,
    tools: ['Video', 'Titrlar', 'Subtitr (.srt)'],
    objectives: [
      'O‘quvchi kirish/yakuniy **titrlar (Titles & Credits)**, **Lower Third** (ekran ostidagi ism-lavozim yorlig‘i) va **Subtitrlar (`.srt`)** farqini biladi.',
      'O‘quvchi video ustida **Animatsiya (Keyframes)**, **Transition** va vizual effektlarni meʼyorda qo‘llashni o‘rganadi.',
    ],
    intro:
      'Ovozsiz tomosha qilayotgan odam ham videongizni tushunishi uchun **Subtitrlar**, spiker kimligini ko‘rsatish uchun esa **Lower Third titrlar** kerak! Keling, matn, keyframe animatsiya va effektlarni to‘g‘ri qo‘llashni ko‘ramiz.',
    sections: [
      {
        heading: 'Matnli slayd, Titr, Lower Third va Subtitr',
        body: '• **Title / Credits**: film boshidagi nom slaydi va oxiridagi mualliflar ro‘yxati (scrolling credits).\n• **Lower Third**: kadrning pastki uchdan bir qismida chiqadigan ism va lavozim yozuvi (masalan, *"Aziz Karimov — loyiha muallifi"*).\n• **Subtitr (Captions / `.srt`)**: ekranda gapirilayotgan nutqning sinxron matn tarjimasi yoki yozuvi (kar va eshitishda nuqsoni borlar hamda ovozsiz ijtimoiy tarmoqlar uchun muhim!).',
        example: '`.srt` faylida har bir gapning tartib raqami, `00:00:02,000 --> 00:00:05,500` vaqt oralig‘i va matni saqlanadi.',
      },
      {
        heading: 'Animatsiya (Keyframes) va Effektlar',
        body: '**Keyframe (Tayanch kadr)** — vaqtning maʼlum nuqtasida obyektning o‘lchami (Scale), joylashuvi (Position) yoki shaffofligini (Opacity) belgilaydi; muharrir ikki keyframe orasidagi o‘zgarishni o‘zi silliq hisoblaydi (masalan, matn chapdan uchib kirishi). **Effektlar** (Blur, Brightness, Color Filter) va **Transitions** (Wipe, Slide, Fade) chalg‘itmasligi uchun bir videoda 2–3 xil uslub bilan cheklanish tavsiya etiladi.',
        tip: 'Matn har doim fon bilan yuqori kontrastda (masalan, qora yarim-shaffof fon ustida oq matn) bo‘lishi shart!',
      },
    ],
    keyTerms: [
      { term: 'Lower Third', definition: 'Ekranning pastki qismida spiker ismi va unvonini ko‘rsatuvchi grafik matn bloki.' },
      { term: 'Subtitr (.srt)', definition: 'Video nutqiga vaqt bo‘yicha moslashtirilgan sinxron matn fayli.' },
      { term: 'Keyframe', definition: 'Vaqt shkalasida animatsiya qiymati (o‘lcham, koordinata, shaffoflik) qayd etiladigan tayanch nuqta.' },
      { term: 'Transition', definition: 'Bir videoklipdan ikkinchisiga o‘tishdagi vizual effekt (Fade, Dissolve, Wipe).' },
    ],
    steps: [
      '1. Titr, Lower Third va Subtitr farqlarini ajrating.',
      '2. Keyframe animatsiyasi qanday ishlashini tushuning.',
      '3. Quyidagi Timeline topshirig‘ida Titr trekini yoqib kliplarni joylang.',
    ],
    practice: [
      {
        task: 'Nima uchun subtitrlarda oq matn orqasiga yarim-shaffof qora to‘rtburchak (Backdrop) qo‘yish foydali?',
        expected: 'Video foni yorqin yoki oq rangga o‘zgarganda ham subtitr matni kontrastini yo‘qotmay oson o‘qiladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l03-g1',
        num: '01',
        title: 'Timeline: Titr treki bilan montaj',
        topic: 'Titr va kliplarni birlashtirish',
        difficulty: 'O‘rta',
        engine: 'timeline',
        config: {
          prompt: 'Kliplarni to‘g‘ri tartiblang va yuqorida Titr (Title Track) qatlamini faollashtiring:',
          clips: [
            { id: 'a2', label: 'Asosiy eksperiment', duration: 7, color: '#059669' },
            { id: 'a1', label: 'Sarlavha kirishi', duration: 4, color: '#2563eb' },
            { id: 'a3', label: 'Yakuniy titrlar (Credits)', duration: 4, color: '#7c3aed' },
          ],
          expectedOrder: ['a1', 'a2', 'a3'],
          requireTitleTrack: true,
          hint: 'Tartib: Sarlavha (a1) → Eksperiment (a2) → Yakuniy titrlar (a3). Shuningdek Titr trekini yoqishni unutmang!',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Intervyu paytida ekranning pastki chap burchagida spikerning ismi va kasbini ko‘rsatuvchi yozuv nima deyiladi?',
        options: ['End Credits', 'Lower Third', 'Watermark', 'Watermark'],
        answer: 1,
        explanation: 'Lower Third ekranning pastki qismida shaxsni tanishtiruvchi grafik titrdir.',
      },
      {
        prompt: 'Video subtitrlarini saqlash uchun eng keng tarqalgan matnli fayl formati qaysi?',
        options: ['.mp3', '.srt', '.png', '.xlsx'],
        answer: 1,
        explanation: '`.srt` (SubRip Subtitle) vaqt kodlari va subtitr matnlarini saqlovchi standart formatdir.',
      },
      {
        prompt: 'Matnning 0-soniyada chapda turib, 2-soniyada ekran markaziga silliq siljishini taʼminlovchi tayanch nuqtalar nima?',
        options: ['Keyframes (Tayanch kadrlar)', 'Aspect Ratio', 'Codecs', 'Bitrate'],
        answer: 0,
        explanation: 'Keyframe ikki vaqt nuqtasi orasidagi parametr o‘zgarishini animatsiyalaydi.',
      },
      {
        prompt: 'Kadrdagi chiroyli qora-to‘liq oq matn fon oqarganda ko‘rinmay qolmasligi uchun nima qo‘llaniladi?',
        options: [
          'Matnga soya (Drop Shadow) yoki to‘q yarim-shaffof fon berish',
          'Shriftni 6px qilish',
          'Matnni yashirish',
          'FPS ni tushirish',
        ],
        answer: 0,
        explanation: 'Kontrastli soya yoki yarim-shaffof fon har qanday kadrda o‘qilishni taʼminlaydi.',
      },
      {
        prompt: 'Film oxirida barcha ijodkorlar ro‘yxati pastdan yuqoriga suzib chiqadigan titr qanday ataladi?',
        options: ['Scrolling Credits', 'Lower Third', 'Trim', 'Freeze Frame'],
        answer: 0,
        explanation: 'Scrolling Credits film yakunida mualliflar ro‘yxatini ko‘rsatadi.',
      },
    ],
    teacherNotes: {
      method: 'Lower Third va `.srt` subtitr fayli matnini Notepad da ko‘rsatish.',
      timing: 'Kirish 5 daq, Titr/Subtitr/Keyframe 20 daq, Timeline o‘yini 10 daq, Quiz 10 daq.',
      assessment: 'Titr trekini yoqib Timeline topshirig‘ini bajarish.',
      homework: '3 ta qatorli `.srt` subtitr fayli namunasini daftarga yozing.',
    },
  },
  {
    id: 'g11-l04',
    grade: 11,
    no: 4,
    part: '1-chorak',
    title: 'Videoklipdan tasvir hosil qilish. Videoklipga ovozli ma’lumot qoʻshish va oʻchirish.',
    kind: 'dars',
    hours: 1,
    tools: ['Video', 'Snapshot / Freeze Frame', 'Audio Track'],
    objectives: [
      'O‘quvchi videoklipdan bitta kadrni rasm sifatida eksport qilish (**Snapshot / Export Frame**) va kadrni vaqtincha to‘xtatish (**Freeze Frame**) usullarini biladi.',
      'O‘quvchi video bilan uning asl ovozini ajratish (**Detach / Unlink Audio**), asl ovozni o‘chirish (**Mute**) va yangi fon musiqasi yoki diktor ovozi (**Voiceover**) qo‘shishni bajaradi.',
    ],
    intro:
      'YouTube videosi muqovasi (Thumbnail) uchun aynan eng zo‘r kadrni suratga olish yoki shamolli ko‘chada yozilgan videoning shovqinli ovozini o‘chirib, o‘rniga tiniq diktor ovozini qo‘yish qanday bajariladi?',
    sections: [
      {
        heading: 'Videoklipdan tasvir (Snapshot) va Kadrni muzlatish (Freeze Frame)',
        body: '• **Export Frame / Snapshot (`Ctrl + Shift + E` / Camera icon)**: Playhead turgan aniq kadrni `.png` yoki `.jpg` rasm sifatida saqlab oladi (YouTube Thumbnail yoki hisobot uchun).\n• **Freeze Frame**: videoning bir kadrini 3–5 soniyaga "to‘xtatib" (muzlatib) qo‘yish — muhim detalni tushuntirish yoki pauza effekti uchun!',
        example: 'Fizika tajribasida to‘p havoga sakragan eng yuqori nuqtada **Freeze Frame** qo‘yib, ekranda "Maksimal balandlik" deb izoh chiqarish mumkin.',
      },
      {
        heading: 'Ovozni ajratish, o‘chirish va yangi audio qo‘shish',
        body: 'Videokliplarda rasm va tovush odatda birga bog‘langan (`Linked`) bo‘ladi:\n1) **Detach / Unlink Audio**: video va audio qatlamini ajratadi.\n2) **Mute / Delete Audio**: videoning keraksiz asl shovqinini o‘chiradi.\n3) **Audio Track (`A1`, `A2`) ga qo‘shish**: diktor ovozi (`A1` — balandroq, `-6 dB`) va fon musiqasi (`A2` — pastroq, `-20 dB`, **Audio Ducking** bilan!).',
        example: 'Fon musiqasi hech qachon suxandon ovozini bosib ketmasligi uchun uning balandligi `20%–30%` ga tushiriladi.',
      },
    ],
    keyTerms: [
      { term: 'Export Frame / Snapshot', definition: 'Videodagi aniq bir kadrni alohida JPG yoki PNG tasvir fayli qilib saqlash.' },
      { term: 'Freeze Frame', definition: 'Video harakatini bir kadrda maʼlum soniyaga to‘xtatib rasmdek ushlab turish.' },
      { term: 'Detach Audio', definition: 'Videoklip ichidagi audio trekni alohida tahrirlash yoki o‘chirish uchun ajratish.' },
      { term: 'Audio Ducking', definition: 'Diktor gapirganda fon musiqasi ovozini avtomatik yoki qo‘lda pasaytirish usuli.' },
    ],
    steps: [
      '1. `Snapshot` va `Freeze Frame` farqini ayting.',
      '2. Video ovozini ajratish va yangi ovoz qo‘shish bosqichlarini tartiblang.',
      '3. Quyidagi To‘g‘ri/Noto‘g‘ri o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Videoklipda shahar shovqini juda baland, lekin biz kadrni saqlab qolib, o‘rniga o‘zimizning tushuntirish ovozimizni qo‘ymoqchimiz. Qaysi amallarni ketma-ket bajaramiz?',
        expected: '1) Klip ustida `Detach Audio` (yoki `Mute`) bosib asl shovqinni o‘chiramiz; 2) `A1` audio trekka o‘zimiz yozgan diktor ovozini joylashtiramiz.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l04-g1',
        num: '01',
        title: 'Kadr va Audio boshqaruvi',
        topic: 'Tasvir olish va audio qo‘shish',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Videoda tasvir va ovoz bilan ishlash qoidalarini tekshiring:',
          statements: [
            { text: 'Snapshot / Export Frame yordamida videodagi istalgan kadrni PNG yoki JPG rasm qilib saqlash mumkin.', isTrue: true, explanation: 'Playhead turgan kadrni alohida rasm fayliga eksport qilish mumkin.' },
            { text: 'Asl videoning shovqinli ovozini o‘chirish uchun albatta video tasvirning o‘zini ham o‘chirish shart.', isTrue: false, explanation: 'Yo‘q, `Mute` yoki `Detach Audio → Delete` bilan faqat audio o‘chiriladi, video qoladi.' },
            { text: 'Audio Ducking usulida diktor gapirganda fon musiqasi ovozi pasaytirib qo‘yiladi.', isTrue: true, explanation: 'Bu tomoshabin nutqni tiniq eshitishi uchun zarur.' },
            { text: 'Freeze Frame video ichida bitta kadrni bir necha soniyaga harakatsiz to‘xtatib turadi.', isTrue: true, explanation: 'Freeze Frame muhim joyga urg‘u berish uchun kadrni vaqtincha muzlatadi.' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Videoklipdan YouTube muqovasi (Thumbnail) uchun bitta kadrni rasm fayli qilib olish funksiyasi qaysi?',
        options: ['Detach Audio', 'Export Frame / Snapshot', 'Slow Motion', 'Ripple Delete'],
        answer: 1,
        explanation: 'Snapshot / Export Frame joriy kadrni PNG/JPG tasvirga aylantiradi.',
      },
      {
        prompt: 'Videoni o‘chirmasdan, faqat uning ichidagi asl shovqinli ovozini olib tashlash uchun qaysi amal bajariladi?',
        options: [
          'Detach Audio (ajratib) → Audio trekni o‘chirish yoki Mute qilish',
          'Aspect Ratio ni o‘zgartirish',
          'Klipni 2x tezlashtirish',
          'Fade Out qo‘yish',
        ],
        answer: 0,
        explanation: 'Audio trek videodan ajratilgach, uni mustaqil o‘chirish yoki pasaytirish mumkin.',
      },
      {
        prompt: 'Video davomida diktor ovozi yangraganda fon musiqasining ovozini pastroq darajaga tushirish texnikasi nima?',
        options: ['Freeze Frame', 'Audio Ducking', 'Rendering', 'Cropping'],
        answer: 1,
        explanation: 'Audio Ducking nutq ostidagi fon musiqasini pasaytirib tiniqlik beradi.',
      },
      {
        prompt: 'Klipni bir lahza to‘xtatib, ekranda harakatsiz surat hosil qilish effekti qaysi?',
        options: ['Freeze Frame', 'Cross Dissolve', 'Time-lapse', 'Audio Mix'],
        answer: 0,
        explanation: 'Freeze Frame kadrni belgilangan vaqtga muzlatadi.',
      },
      {
        prompt: 'Fon musiqasini qo‘shishda Timeline ning qaysi qismiga joylashtirish to‘g‘ri?',
        options: ['Faqat V1 video trekiga', 'Alohida Audio trekka (masalan, A2)', 'Titr oynasiga', 'Media Bin ichiga'],
        answer: 1,
        explanation: 'Audio fayllar Timeline ning pastki audio treklariga (`A1`, `A2`) qo‘yiladi.',
      },
    ],
    teacherNotes: {
      method: 'Snapshot va Freeze Frame farqini amalda ko‘rsatib, `Audio Ducking` uchun `-18 dB` / `-20 dB` qoidasini tushuntiring.',
      timing: 'Kirish 5 daq, Snapshot/Freeze/Audio 20 daq, TrueFalse 10 daq, Quiz 10 daq.',
      assessment: 'Ovozni ajratib yangi diktor ovozi qo‘shish tartibi.',
      homework: 'O‘zingiz yoqtirgan video uchun qayerda Freeze Frame va Audio Ducking ishlatilishini yozing.',
    },
  },
  {
    id: 'g11-l05',
    grade: 11,
    no: 5,
    part: '1-chorak',
    title: 'Videoklip tezligini oʻzgartirish. Videoklipni turli fayl formatlarida eksport qilish.',
    kind: 'dars',
    hours: 1,
    tools: ['Video', 'Speed / Time-lapse', 'MP4 / MOV / WEBM'],
    objectives: [
      'O‘quvchi videoklip tezligini o‘zgartirish (**Slow Motion `<100%`** va **Fast Motion / Time-lapse `>100%`**) hamda buning audio balandligi/pitch va FPS ga taʼsirini tushunadi.',
      'O‘quvchi loyihani yakuniy **Render / Export** qilishda konteyner va kodeklar (**MP4 / H.264**, **MOV**, **WebM**, **AVI**) hamda **Bitrate** tanlovini biladi.',
    ],
    intro:
      'Quyosh botishini 10 soniyada ko‘rsatish (**Time-lapse**) yoki futbol golini 2 barobar sekinlashtirish (**Slow Motion**) — barchasi tezlikni boshqarishdir! Tayyor montajni esa barcha qurilmalarda ochiladigan **MP4** ga qanday eksport qilamiz?',
    sections: [
      {
        heading: 'Video tezligi: Slow Motion vs Fast Motion',
        body: '• **Sekinlashtirish (Slow Motion, `0.5x` / `50%`)**: klip davomiyligi 2 barobar uzayadi! Ravon sekinlashuv chiqishi uchun asl video kamida **`60 fps` yoki `120 fps`** da suratga olingan bo‘lishi kerak (aks holda `24 fps` ni sekinlashtirsangiz video uzuq-yuluq qotib ko‘rinadi).\n• **Tezlashtirish (Fast Motion / Time-lapse, `2x`–`10x`)**: klip davomiyligi qisqaradi (masalan, bulutlar harakati). Tezlik o‘zgarganda ovoz "ingichkalashib" yoki "yo‘g‘onlashib" ketmasligi uchun **`Maintain Audio Pitch`** yoqiladi yoki audio o‘chiriladi.',
        example: '1 daqiqalik (60 soniya) klipni `2x (200%)` tezlashtirsangiz, u endi **30 soniya** davom etadi; `0.5x (50%)` qilsangiz **120 soniya** bo‘ladi.',
      },
      {
        heading: 'Eksport (Render) va Video formatlari',
        body: 'Timeline loyiha fayli (`.osp`, `.mlt`, `.prproj`) faqat muharrirning ichida ochiladi! Tomoshabinlarga yuborish uchun **Export / Render** qilinadi:\n• **`.mp4` (H.264 / H.265 kodek)**: eng universal format — telefon, kompyuter, brauzer va YouTube da kichik hajm + yuqori sifat!\n• **`.mov`**: Apple/QuickTime va professional montaj uchun yuqori sifatli (hajmi kattaroq).\n• **`.webm` (VP9)**: veb-saytlar va brauzerlar uchun optimallashtirilgan ochiq format.\n• **`.avi` (siqilmagan)**: juda katta hajm, bugungi kunda vebda kam ishlatiladi.\n**Bitrate (Mbps)** — sifat va fayl hajmini belgilaydi: yuqori bitrate = tiniqroq tasvir, lekin kattaroq fayl.',
        tip: 'Loyihani eksport qilganda faqat tayyor MP4 ni saqlab, loyiha faylini o‘chirib yubormang — keyinchalik matnni tahrirlash uchun loyiha fayli kerak bo‘ladi!',
      },
    ],
    keyTerms: [
      { term: 'Slow Motion (< 1x)', definition: 'Video tezligini pasaytirib harakatni sekin va batafsil ko‘rsatish.' },
      { term: 'Time-lapse / Fast Motion', definition: 'Uzoq vaqt davomidagi jarayonni tezlashtirib qisqa vaqtda ko‘rsatish.' },
      { term: 'MP4 (H.264)', definition: 'Yuqori siqish samaradorligi va barcha qurilmalarda moslikka ega asosiy video format.' },
      { term: 'Render / Export', definition: 'Timeline dagi barcha qatlamlar, matnlar va effektlarni bitta yakuniy video faylga yig‘ib chiqarish.' },
    ],
    steps: [
      '1. `0.5x` va `2x` tezlikda video uzunligi qanday o‘zgarishini hisoblang.',
      '2. `MP4`, `MOV`, `WebM` formatlari farqini yodlang.',
      '3. Quyidagi kalkulyator o‘yinida eksport/tezlik masalasini yeching.',
    ],
    practice: [
      {
        task: '80 soniyalik videoklip tezligi `4x (400%)` ga oshirildi. Yangi video necha soniya davom etadi?',
        expected: '`80 / 4 = 20` soniya.',
        difficulty: 'oson',
      },
      {
        task: 'Maktab sayti va Telegram kanali uchun 3 daqiqalik rolikni qaysi format va kodekda eksport qilish eng to‘g‘ri?',
        expected: '`.mp4` konteynerida `H.264` kodeki bilan — ham sifatli, ham hajmi ixcham, barcha telefon va brauzerlarda ochiladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l05-g1',
        num: '01',
        title: 'Tezlik va Hajm hisobi',
        topic: 'Video davomiyligi hisobi',
        difficulty: 'O‘rta',
        engine: 'calc',
        config: {
          prompt: 'Sizda 24 soniyalik videoklip bor. Uni 0.5x (2 barobar sekin — Slow Motion) rejimiga o‘tkazsangiz, klip davomiyligi necha soniyaga aylanadi?',
          unit: 'soniya',
          correctAnswer: 48,
          tolerance: 0,
          steps: [
            'Asl davomiylik = 24 soniya',
            'Tezlik koeffitsiyenti = 0.5',
            'Yangi davomiylik = 24 / 0.5 = 48 soniya',
          ],
          hint: 'Tezlik 2 barobar kamaysa, video davomiyligi 2 barobar oshadi (24 ÷ 0.5).',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Silliq Slow Motion (sekinlashtirilgan video) olish uchun kamera dastlab necha FPS da tasvirga olgani maʼqul?',
        options: ['12 fps', '24 fps', '60 yoki 120 fps', '5 fps'],
        answer: 2,
        explanation: '60/120 fps ni 2–4 barobar sekinlashtirganda ham soniyasiga 30 ta kadr saqlanib ravon ko‘rinadi.',
      },
      {
        prompt: 'Internet, Telegram va mobil qurilmalarda eng keng tarqalgan universal video formati qaysi?',
        options: ['.mp4 (H.264)', '.prproj', '.psd', '.raw'],
        answer: 0,
        explanation: 'MP4 (H.264) deyarli barcha brauzer va telefonlarda qo‘shimcha plaginlarsiz ishlaydi.',
      },
      {
        prompt: '60 soniyalik klip tezligi `2x` ga oshirilsa, natijaviy video qancha davom etadi?',
        options: ['120 soniya', '30 soniya', '60 soniya', '15 soniya'],
        answer: 1,
        explanation: 'Tezlik 2 barobar oshganda vaqt 2 barobar qisqaradi: 60 / 2 = 30 soniya.',
      },
      {
        prompt: 'Timeline loyiha fayli (masalan `.osp`) bilan eksport qilingan `.mp4` faylning farqi nimada?',
        options: [
          'Loyiha fayli faqat dastur ichida tahrirlash uchun saqlanadi, MP4 esa tayyor tomosha qilinadigan video',
          'Farqi yo‘q',
          'MP4 ni qaytib treklarga bo‘lish shart emas',
          'Loyiha fayli telefonda to‘g‘ridan-to‘g‘ri ijro bo‘ladi',
        ],
        answer: 0,
        explanation: 'Loyiha fayli montaj ko‘rsatmalarini saqlaydi; yakuniy video faqat Render/Export orqali yaratiladi.',
      },
      {
        prompt: 'Eksport vaqtida `Bitrate` qiymatini haddan tashqari pasaytirib yuborsak nima sodir bo‘ladi?',
        options: [
          'Video sifati buzilib piksellar/kvadratlar (artefaktlar) paydo bo‘ladi',
          'Video davomiyligi 2 barobar uzayadi',
          'Ovoz 3D bo‘lib qoladi',
          'Rasm 4K ga aylanadi',
        ],
        answer: 0,
        explanation: 'Bitrate soniyadagi maʼlumot oqimini belgilaydi; juda past bitrate tasvir sifatini buzadi.',
      },
    ],
    teacherNotes: {
      method: 'Tezlik va Bitrate taʼsirini real eksport oynasi parametrlarida tushuntirish.',
      timing: 'Kirish 5 daq, Tezlik & Formatlar 20 daq, Calc 10 daq, Quiz 10 daq.',
      assessment: 'Tezlik hisobi va eksport formatini asoslash.',
      homework: 'MP4, MOV, WebM va AVI formatlarini hajm/moslik bo‘yicha jadvalda solishtiring.',
    },
  },
  {
    id: 'g11-l06',
    grade: 11,
    no: 6,
    part: '1-chorak',
    title: 'Audioni tahrirlash dasturlari',
    kind: 'dars',
    hours: 1,
    tools: ['Audacity', 'Audio tahrirlash', 'Waveform'],
    objectives: [
      'O‘quvchi bepul va ommabop audio muharrir (**Audacity**) hamda uning interfeys qismlari (Transport Toolbar, Waveform, Timeline, Level Meters) bilan tanishadi.',
      'O‘quvchi raqamli tovushning asosiy xususiyatlari: **Sampling Rate (Hz)**, **Bit Depth**, **Mono vs Stereo** kanallarini tushunadi.',
    ],
    intro:
      'Podkast, audiokitob yoki video uchun suxandon ovozi yozishda tiniq tovush juda muhim! Endi dunyodagi eng mashhur bepul audio muharrir — **Audacity** bilan tanishamiz.',
    sections: [
      {
        heading: 'Audacity interfeysi va Tovush to‘lqini (Waveform)',
        body: '**Audacity** — Windows, macOS va Linux da ishlaydigan bepul, ochiq kodli (Open Source) audio muharrir. Asosiy elementlari:\n• **Transport tugmalari**: `Play`, `Pause`, `Stop`, `Record` (qizil doira).\n• **Waveform (Tovush to‘lqini)**: vertikal o‘qda balandlik (amplituda, `-1.0` dan `+1.0` gacha), gorizontal o‘qda vaqt ko‘rsatiladi.\n• **Playback/Recording Meters**: ovoz darajasini dB da ko‘rsatadi (`0 dB` dan oshsa **Clipping** — xirillash/buzilish yuz beradi!).',
        example: 'Yozib olayotganda ovoz darajasi `-12 dB` dan `-6 dB` oralig‘ida bo‘lishi eng sifatli sanaladi.',
      },
      {
        heading: 'Mono vs Stereo va Sampling Rate',
        body: '• **Mono (1 kanal)**: bitta mikrofon yordamida yozilgan nutq/podkast uchun ideal — hajmi 2 barobar kichik!\n• **Stereo (2 kanal: Left & Right)**: musiqa va kino effekti uchun (chap va o‘ng quloqchinda har xil tovush).\n• **Sample Rate (`44.1 kHz` / `48 kHz`)**: soniyasiga tovushdan necha marta namuna olinishi (`44 100 Hz` — CD va musiqa standarti; `48 000 Hz` — video bilan sinxron audio standarti).',
        tip: 'Loyiha fayli (`.aup3`) faqat Audacity da ochiladi; eshitish uchun uni eksport qilish kerak!',
      },
    ],
    keyTerms: [
      { term: 'Audacity', definition: 'Tovush yozish, kesish, effekt qo‘shish va qayta ishlash uchun bepul ko‘p trekli audio muharrir.' },
      { term: 'Waveform', definition: 'Tovush to‘lqinining vaqt bo‘yicha balandlik (amplituda) grafigi.' },
      { term: 'Clipping (0 dB)', definition: 'Tovush balandligi maksimal chegaradan oshib, to‘lqin uchlari kesilib xirillab qolishi.' },
      { term: 'Sample Rate (44.1 kHz)', definition: 'Analog tovushni raqamlashtirishda bir soniyada olinadigan namunalar chastotasi.' },
    ],
    steps: [
      '1. Audacity da Mono va Stereo to‘lqin ko‘rinishini farqlang.',
      '2. `0 dB` Clipping xavfini tushuning.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Nima uchun podkast yoki dars ovozini yozishda ko‘pincha Stereo emas, Mono trek tanlanadi?',
        expected: 'Chunki bitta odam nutqi bitta mikrofondan yoziladi; Mono trek fayl hajmini tejaydi va ikkala quloqchinda ham bir tekis eshitiladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l06-g1',
        num: '01',
        title: 'Audacity va Raqamli Audio',
        topic: 'Audio muharrir asoslari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Audio tushunchasini to‘g‘ri taʼrifi bilan bog‘lang:',
          pairs: [
            { left: 'Mono trek', right: '1 ta kanal — diktor nutqi va podkast uchun ideal' },
            { left: 'Stereo trek', right: '2 ta kanal (Chap va O‘ng) — musiqa uchun standart' },
            { left: 'Clipping (> 0 dB)', right: 'Ovoz meʼyordan oshib to‘lqinning buzilib xirillashi' },
            { left: '44.1 kHz / 48 kHz', right: 'Soniyasiga olinadigan raqamli tovush namunalari soni' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Quyidagilardan qaysi biri bepul, ochiq kodli (Open Source) audio muharrir hisoblanadi?',
        options: ['Audacity', 'Excel', 'Paint', 'Access'],
        answer: 0,
        explanation: 'Audacity audio tahrirlash uchun eng mashhur bepul dasturdir.',
      },
      {
        prompt: 'Tovush yozishda indikator `0 dB` dan oshib qizilga kirib ketsa qanday nuqson yuz beradi?',
        options: ['Clipping (ovozning buzilishi va xirillashi)', 'Reverberatsiya', 'Fade In', 'Stereo kengayish'],
        answer: 0,
        explanation: '0 dB dan oshgan to‘lqinlar cho‘qqisi kesilib (Clipping) yoqimsiz xirillash beradi.',
      },
      {
        prompt: 'Musiqa va CD sifatidagi audio uchun standart namuna olish chastotasi (Sample Rate) qaysi?',
        options: ['100 Hz', '44 100 Hz (44.1 kHz)', '24 Hz', '10 MHz'],
        answer: 1,
        explanation: '44.1 kHz inson eshitadigan 20 kHz gacha chastotalarni aniq saqlash standarti (Nyquist qoidasi).',
      },
      {
        prompt: 'Stereo audioklip Audacity ekranida nechta to‘lqin qatori ko‘rinishida aks etadi?',
        options: ['1 ta', '2 ta (Left va Right kanallar)', '4 ta', 'Ko‘rinmaydi'],
        answer: 1,
        explanation: 'Stereo chap (L) va o‘ng (R) ikkita mustaqil to‘lqin yo‘lagidan iborat.',
      },
      {
        prompt: 'Audacity ning joriy tahrirlanayotgan loyiha fayli qanday kengaytmada saqlanadi?',
        options: ['.aup3', '.xlsx', '.html', '.svg'],
        answer: 0,
        explanation: 'Audacity 3.x versiyalari loyihani `.aup3` formatida saqlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Audacity interfeysini ochib, qizil Clipping indikatorini va Mono/Stereo to‘lqinni ko‘rsatish.',
      timing: 'Kirish 5 daq, Audacity & Audio nazariyasi 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: 'Audio terminlarini to‘g‘ri farqlash.',
      homework: 'Audacity ni uy kompyuteringizda ko‘rib, 10 soniyalik ovoz yozishda -6 dB darajani sinab ko‘ring.',
    },
  },
  {
    id: 'g11-l07',
    grade: 11,
    no: 7,
    part: '1-chorak',
    title: 'Audiokliplarni kesish va kliplarni birlashtirish',
    kind: 'dars',
    hours: 1,
    tools: ['Audacity', 'Cut / Split', 'Time Shift'],
    objectives: [
      'O‘quvchi Audacity da to‘lqin qismini belgilash (**Selection Tool**), kesib olish (**Cut / Delete**), sukut qo‘yish (**Silence**) va keraksiz chetlarni kesish (**Trim Audio**) amallarini bajaradi.',
      'O‘quvchi **Time Shift** (kliplarni vaqt bo‘yicha surish) va ko‘p trekli (**Multi-track Mix**) birlashtirishni amalda qo‘llaydi.',
    ],
    intro:
      'Nutq yozayotganda baʼzan yo‘talib yuborasiz yoki 5 soniya o‘ylab pauza qilasiz. Audacity da **Selection Tool** bilan to‘lqindagi bu xatolarni jarrohlik aniqligida kesib tashlab, ikkita klipni birlashtirish mumkin!',
    sections: [
      {
        heading: 'Audioklipni kesish asboblari',
        body: '• **Selection Tool (`F1`)**: to‘lqin ustidan kerakli soniyalar oralig‘ini belgilash.\n• **Delete / Cut (`Ctrl + X`)**: belgilangan xato pauza yoki yo‘talni o‘chirish (o‘ng tomon avtomatik chapga suriladi!).\n• **Trim Audio (`Ctrl + T`)**: faqat belgilangan kerakli qismni qoldirib, qolgan bosh va oxirini kesib tashlash.\n• **Silence Audio (`Ctrl + L`)**: vaqt uzunligini buzmasdan, faqat belgilangan joydagi shovqinni "jimjitlikka" (tekis chiziqqa) aylantirish (masalan, nafas olish ovozini yo‘qotish).\n• **Split (`Ctrl + I`)**: bitta trekni ikki mustaqil klipga bo‘lish.',
        example: 'Video bilan sinxron bo‘lgan ovozda nafas olish shovqinini `Delete` qilsangiz, keyingi gaplar videodan oldinga siljib ketadi! Buning o‘rniga **`Silence (`Ctrl+L`)`** qiling — vaqt joyida qoladi!',
      },
      {
        heading: 'Kliplarni birlashtirish (Join & Multi-track)',
        body: '• **Bir trek ichida ulash**: ikkinchi klipni ko‘chirib birinchisining oxiriga joylash (`Paste`) yoki **Time Shift** (klip sarlavha panelidan sudrab surish) bilan yonma-yon qo‘yib `Join` qilish.\n• **Multi-track (Turli treklarda birlashtirish)**: `Track 1` ga diktor ovozi, `Track 2` ga musiqa qo‘yilsa, eksportda ular bitta boyitilgan audioga aralashadi (**Mix**).',
        tip: 'Quyidagi `AudioLab` studiyasida klipning bosh va oxirini belgilangan soniyaga aniq kesib ko‘ring!',
      },
    ],
    keyTerms: [
      { term: 'Trim Audio (Ctrl+T)', definition: 'Tanlangan qismdan tashqaridagi barcha bosh va oxirgi qismlarni kesib tashlash.' },
      { term: 'Silence (Ctrl+L)', definition: 'Davomiylikni o‘zgartirmasdan belgilangan segment tovushini nolga tushirish.' },
      { term: 'Split Clip (Ctrl+I)', definition: 'Audio trekni kursor turgan joydan alohida mustaqil kliplarga bo‘lish.' },
      { term: 'Multi-track Mix', definition: 'Bir nechta parallel audio treklarni (nutq + musiqa) bitta yakuniy trekkacha birlashtirish.' },
    ],
    steps: [
      '1. `Delete` va `Silence (Ctrl+L)` o‘rtasidagi muhim vaqt farqini tushuning.',
      '2. `AudioLab` da trekni kerakli soniyalarga kesing (`Trim`).',
    ],
    practice: [
      {
        task: 'Video uchun yozilgan suxandon ovozining o‘rtasida 1 soniyalik kuchli nafas ovozi bor. Video bilan sinxronlik buzilmasligi uchun `Delete` ishlatamizmi yoki `Silence`?',
        expected: '`Silence Audio (Ctrl+L)` — chunki `Delete` trekni 1 soniyaga qisqartirib, undan keyingi hamma so‘zlarni videodan 1 soniya oldinga siljitib yuboradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g11-l07-g1',
        num: '01',
        title: 'AudioLab: Klip boshini va oxirini kesish',
        topic: 'Audiokliplarni aniq kesish (Trim)',
        difficulty: 'O‘rta',
        engine: 'audiolab',
        config: {
          prompt: '12 soniyalik audio yozuvning boshidagi 2 soniyalik sukutni va oxiridagi 2 soniyalik shovqinni kesib tashlang (yaʼni 2s dan 10s gacha qoldiring). Balandlik: 100%, Tezlik: 1x.',
          clipDurationSec: 12,
          targetTrimStart: 2,
          targetTrimEnd: 10,
          targetVolume: 100,
          targetSpeed: 1,
          hint: 'Boshlanish (Trim Start) ni `2` ga, Tugash (Trim End) ni `10` ga sozlang.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Audacity da vaqt davomiyligini o‘zgartirmasdan faqat nafas olish yoki shovqin joyini tekis jimjitlikka aylantirish amali qaysi?',
        options: ['Silence Audio (Ctrl+L)', 'Trim Audio', 'Normalize', 'Reverse'],
        answer: 0,
        explanation: 'Silence belgilangan qismning amplitudasini 0 ga tushiradi, lekin klip uzunligini qisqartirmaydi.',
      },
      {
        prompt: 'Belgilanib tanlangan kerakli segmentni qoldirib, undan chap va o‘ng tomondagi hamma ortiqcha qismlarni kesib tashlovchi buyruq qaysi?',
        options: ['Split', 'Trim Audio', 'Amplify', 'Change Pitch'],
        answer: 1,
        explanation: 'Trim Audio faqat belgilangan foydali sohani saqlab qoladi.',
      },
      {
        prompt: 'Turli treklardagi diktor ovozi va fon musiqasini bitta yakuniy trekka birlashtirish jarayoni nima deyiladi?',
        options: ['Clipping', 'Mixing (Mix and Render)', 'Trimming', 'Resampling'],
        answer: 1,
        explanation: 'Mixing parallel audio treklarni yagona muvozanatli ovozga jamlaydi.',
      },
      {
        prompt: 'Klipni bir trekning ichida vaqt bo‘yicha o‘ngga yoki chapga surish uchun Audacity da qaysi imkoniyat ishlatiladi?',
        options: ['Klipning yuqori sarlavha panelidan sudrash (Time Shift)', 'Zoom Out', 'Invert', 'Record'],
        answer: 0,
        explanation: 'Audacity 3.x da har bir klipning yuqori chetidan ushlab vaqt bo‘ylab surish mumkin.',
      },
      {
        prompt: '10 soniyalik klipda `2s–4s` oralig‘i `Delete` bilan o‘chirilsa, klip endi necha soniya bo‘ladi?',
        options: ['10 soniya', '8 soniya', '6 soniya', '12 soniya'],
        answer: 1,
        explanation: 'Delete 2 soniyalik bo‘lakni olib tashlab qolganini biriktiradi: 10 - 2 = 8 soniya.',
      },
    ],
    teacherNotes: {
      method: 'AudioLab da 2s–10s oralig‘ini kesishni va real Audacity da `Silence` vs `Delete` farqini ko‘rsatish.',
      timing: 'Kirish 5 daq, Kesish/Birlashtirish 18 daq, AudioLab 12 daq, Quiz 10 daq.',
      assessment: 'AudioLab topshirig‘ini aniq bajarish.',
      homework: 'Podkast kirishi uchun 2 ta trek (musiqa + ovoz) birlashish sxemasini daftarga chizing.',
    },
  },
  {
    id: 'g11-l08',
    grade: 11,
    no: 8,
    part: '1-chorak',
    title: 'Audioklipning ovoz sozlamalarini tahrirlash',
    kind: 'dars',
    hours: 1,
    tools: ['Audacity', 'Noise Reduction', 'Normalize / Fade'],
    objectives: [
      'O‘quvchi audio sifatini yaxshilashning 4 asosiy sozlamasini (**Noise Reduction** — shovqinni tozalash, **Normalize / Amplify** — balandlikni tenglashtirish, **Fade In / Fade Out** — silliq kirish/chiqish, **Compression / EQ**) tushunadi.',
      'O‘quvchi shovqin tozalashning 2 qadamli jarayonini (1-qadam: Shovqin profili olish; 2-qadam: Butun trekka qo‘llash) to‘g‘ri tartibda biladi.',
    ],
    intro:
      'Arzon mikrofonda yozilgan ovoz ortida "sh-sh-sh" degan doimiy fon shovqini eshitilyaptimi yoki musiqa oxirida keskin uzilib qolyaptimi? **Noise Reduction**, **Normalize** va **Fade In/Out** ovozingizni studiya darajasiga olib chiqadi!',
    sections: [
      {
        heading: 'Shovqinni tozalash (Noise Reduction) va Balandlikni sozlash',
        body: '• **Noise Reduction (2 bosqichda!)**: 1) Trekning boshida 1–2 soniya gapirmay turilgan *faqat shovqinli joyni* belgilab → `Effect → Noise Reduction → Get Noise Profile`; 2) Butun trekni tanlab (`Ctrl + A`) → yana `Noise Reduction → OK`!\n• **Amplify vs Normalize**: `Amplify` butun trekni bir xilda balandlatadi/pasaytiradi; **`Normalize`** esa eng baland cho‘qqini xavfsiz darajaga (masalan, `-1.0 dB` ga) avtomatik moslab, Stereo da chap/o‘ng kanallarni ham tenglashtiradi.',
        example: 'Agar ovozingiz juda past yozilgan bo‘lsa, `Normalize to -1.0 dB` bir klik bilan Clipping qilmasdan maksimal tiniq balandlik beradi!',
      },
      {
        heading: 'Fade In, Fade Out va Compressor / EQ',
        body: '• **Fade In**: trek boshida ovozning `0%` dan silliq ko‘tarilib kirishi (1–2 soniya).\n• **Fade Out**: trek oxirida ovozning keskin uzilmay, asta-sekin so‘nishi (2–3 soniya).\n• **Compressor**: juda baland va juda past gapirilgan joylar farqini tekislab, ovozni professional va zich qiladi.\n• **Equalizer (EQ)**: past (Bass), o‘rta (Mid) va yuqori (Treble) chastotalarni sozlash.',
        tip: 'Shovqin tozalashda sozlamani haddan oshirsangiz, ovoz "temir/robot" ohangiga kirib qoladi — meʼyorni saqlang!',
      },
    ],
    keyTerms: [
      { term: 'Noise Reduction', definition: 'Mikrofonning doimiy fon shovqinini (shovqin profili asosida) tozalash effekti.' },
      { term: 'Normalize', definition: 'Ovoz cho‘qqisini belgilangan xavfsiz darajaga (-1 dB) avtomatik keltirish.' },
      { term: 'Fade In / Fade Out', definition: 'Klip boshida silliq kuchayib borish va oxirida asta so‘nib tugash effekti.' },
      { term: 'Compressor', definition: 'Baland va past tovushlar dinamik farqini qisqartirib ovozni barqaror qiluvchi effekt.' },
    ],
    steps: [
      '1. `Noise Reduction` ning 2 ta bosqichini yodlang.',
      '2. `Fade In` va `Fade Out` vazifasini ko‘ring.',
      '3. Quyidagi tartiblash o‘yinida shovqin tozalash qadamlarini joylang.',
    ],
    practice: [
      {
        task: 'Nima uchun ovoz yozishni boshlashdan oldin 2 soniya sukut saqlab (gapirmasdan) mikrofonni yoqib turish tavsiya etiladi?',
        expected: 'O‘sha 2 soniyalik bo‘sh joydan `Get Noise Profile` orqali toza fon shovqini namunasini olish uchun!',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l08-g1',
        num: '01',
        title: 'Shovqin tozalash bosqichlari',
        topic: 'Noise Reduction algoritmi',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Audacity da mikrofon fon shovqinini tozalash (Noise Reduction) bosqichlarini to‘g‘ri tartiblang:',
          items: [
            'Trekda faqat fon shovqini eshitilib turgan 1–2 soniyalik sukut joyini belgilash',
            'Effect → Noise Reduction oynasidan "Get Noise Profile" tugmasini bosish',
            'Butun audio trekni (Ctrl + A) belgilab olish',
            'Qayta Effect → Noise Reduction oynasini ochib "OK" bilan shovqinni tozalash',
          ],
          hint: 'Avval shovqin namunasini (Profile) oling, keyin butun trekni tanlab tozalang.',
          explanation: 'Noise Reduction ikki bosqichli: avval faqat shovqindan namuna olinadi, so‘ng butun trekdan o‘sha chastotalar ayirib tashlanadi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Audacity da `Noise Reduction` ni qo‘llashdan OLDIN birinchi qadam sifatida nima qilish kerak?',
        options: [
          'Ovozni 2x tezlashtirish',
          'Faqat fon shovqini eshitilgan bo‘sh qismni tanlab "Get Noise Profile" ni bosish',
          'Faylni MP3 ga eksport qilish',
          'Reverberatsiya qo‘shish',
        ],
        answer: 1,
        explanation: 'Dastur nima shovqin ekanini bilishi uchun avval sof shovqin namunasini ko‘rsatish shart.',
      },
      {
        prompt: 'Musiqa yakunda keskin uzilib qolmasdan, asta-sekin pasayib tugashi uchun qaysi effekt ishlatiladi?',
        options: ['Fade In', 'Fade Out', 'Amplify', 'Reverse'],
        answer: 1,
        explanation: 'Fade Out klip oxirida ovozni silliq nolga tushiradi.',
      },
      {
        prompt: 'Trekning eng baland cho‘qqisini Clipping siz maksimal xavfsiz darajaga (`-1 dB`) keltiruvchi effekt qaysi?',
        options: ['Normalize', 'Fade In', 'Mute', 'Noise Gate'],
        answer: 0,
        explanation: 'Normalize avtomatik ravishda eng baland nuqtani belgilangan dB darajasiga moslaydi.',
      },
      {
        prompt: 'Suxandonning baʼzi so‘zlari juda past, baʼzilari esa juda baland eshitilsa, ularni bir tekis qilish uchun nima qo‘llanadi?',
        options: ['Compressor', 'Invert', 'Split', 'Truncate Silence'],
        answer: 0,
        explanation: 'Compressor dinamik diapazonni siqib, past va baland ovozlar farqini tenglashtiradi.',
      },
      {
        prompt: 'Equalizer (EQ) yordamida nimani o‘zgartirish mumkin?',
        options: [
          'Klip davomiyligini',
          'Turli chastotalar (Bass, O‘rta, Yuqori) balandligini',
          'Fayl nomini',
          'Bit Depth ni',
        ],
        answer: 1,
        explanation: 'Equalizer ovozdagi past, o‘rta va yuqori chastotalarni kuchaytirish yoki pasaytirish uchun xizmat qiladi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfdagi kompyuter ventilyatori shovqini yozilgan misolda 2 bosqichli Noise Reduction ni jonli ko‘rsatish.',
      timing: 'Kirish 5 daq, 4 ta sozlama 20 daq, Order o‘yini 10 daq, Quiz 10 daq.',
      assessment: 'Noise Reduction ketma-ketligi va Normalize/Fade farqi.',
      homework: 'Audioklipni qayta ishlashda qaysi tartib to‘g‘ri (avval Noise Reductionmi yoki Amplify?) ekanini asoslab yozing.',
    },
  },
  {
    id: 'g11-l09',
    grade: 11,
    no: 9,
    part: '1-chorak',
    title: 'Audioklipning tezligini va ovoz balandligini sozlash. Reverberatsiya effektini qoʻshish yoki uni sozlash.',
    kind: 'dars',
    hours: 1,
    tools: ['Audacity', 'AudioLab', 'Reverb / Change Tempo'],
    objectives: [
      'O‘quvchi **`Change Speed`** (tezlik + ohang/pitch birga o‘zgaradi), **`Change Tempo`** (ohang o‘zgarmay faqat tezlik o‘zgaradi) va **`Change Pitch`** (faqat ovoz yo‘g‘on/ingichkaligi o‘zgaradi) farqlarini biladi.',
      'O‘quvchi **`Reverberatsiya (Reverb)`** effekti — yopiq xona yoki katta zal aks-sadosini modellashtirish va uning `Room Size` / `Wetness` parametrlarini tushunadi.',
    ],
    intro:
      'Katta konsert zalida gapirayotgandek aks-sado effektini yaratish (**Reverb**) yoki audiokitob tezligini oshirganda suxandonning ovozini "burunduq" ovoziga aylantirmasdan tezlashtirish (**Change Tempo**) sirlari bugungi darsda!',
    sections: [
      {
        heading: 'Tezlikni o‘zgartirishning 3 ta usuli',
        body: 'Audacity ning `Effect → Pitch and Tempo` bo‘limida 3 ta alohida vosita bor:\n1) **Change Speed and Pitch**: plastinkani tez aylantirgandek **ham tezlik, ham ovoz ohangi (Pitch)** o‘zgaradi (ovoz ingichkalashadi).\n2) **Change Tempo**: **ovoz ohangi o‘zgarmagan holda** faqat gapirish tezligini oshiradi yoki sekinlashtiradi (podkast/audiokitobni `1.5x` qilish uchun ideal!).\n3) **Change Pitch**: tezlik/davomiylik o‘zgarmagan holda faqat tovush chastotasini yo‘g‘onlashtiradi yoki ingichkalashtiradi.',
        example: 'Podcast tinglayotganda `1.5x` bosganingizda boshlovchi ovozi chiyillab qolmasligi `Change Tempo` algoritmidir.',
      },
      {
        heading: 'Ovoz balandligi va Reverberatsiya (Reverb)',
        body: '• **Ovoz balandligi (Volume / Gain / Envelope Tool)**: trek chapidagi Gain slayderi yoki **Envelope Tool** (vaqt davomida nuqtalar qo‘yib balandlikni chizish).\n• **Reverberatsiya (Reverb)**: tovush to‘lqinlarining devorlardan ko‘p marta qaytishi (akustik makon hissi). Muhim sozlamalari: **Room Size (%)** — xona kattaligi (kichik xona vs sobor/zal); **Reverberance / Decay Time** — aks-sadoning davom etish vaqti; **Wet Gain / Dry Gain** — effektli va asl tovush nisbati.',
        tip: 'Quyidagi `AudioLab` studiyasida klip tezligini `1.5x`, ovoz balandligini `120%` qilib, kesish bilan birga sinab ko‘ring!',
      },
    ],
    keyTerms: [
      { term: 'Change Tempo', definition: 'Ovoz ohangini (Pitch) saqlab qolgan holda faqat ijro tezligini o‘zgartirish.' },
      { term: 'Change Speed', definition: 'Tezlik bilan birga ovoz ohangini ham proporsional o‘zgartiruvchi effekt.' },
      { term: 'Reverberatsiya (Reverb)', definition: 'Tovushning devorlardan ko‘p marta qaytishi natijasida yuzaga keladigan tabiiy makon/zal aks-sadosi.' },
      { term: 'Dry / Wet nisbati', definition: 'Effekt qo‘llanmagan asl tovush (Dry) bilan Reverb qo‘shilgan tovush (Wet) balandligi nisbati.' },
    ],
    steps: [
      '1. `Change Speed`, `Change Tempo` va `Change Pitch` farqini ajrating.',
      '2. `Reverb` parametrlarini (`Room Size`, `Wet/Dry`) eslab qoling.',
      '3. `AudioLab` amaliyotida tezlik, balandlik va kesishni sozlang.',
    ],
    practice: [
      {
        task: 'O‘qituvchi maʼruza audiosini 25% tezlashtirmoqchi, lekin ovozi o‘zgarib kulgili chiqishini xohlamaydi. Qaysi effektni tanlashi kerak?',
        expected: '**`Change Tempo`** — chunki u ovoz ohangini (Pitch) asl holida qoldirib, faqat tezlikni oshiradi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l09-g1',
        num: '01',
        title: 'AudioLab: Tezlik va Balandlik sozlamalari',
        topic: 'Tezlik, balandlik va kesishni birlashtirish',
        difficulty: 'O‘rta',
        engine: 'audiolab',
        config: {
          prompt: '10 soniyalik intervyu trekini 1s dan 9s gacha qirqib oling, ovoz balandligini 120% ga ko‘taring va tezlikni 1.5x ga oshiring:',
          clipDurationSec: 10,
          targetTrimStart: 1,
          targetTrimEnd: 9,
          targetVolume: 120,
          targetSpeed: 1.5,
          hint: 'Trim Start: `1`, Trim End: `9`, Ovoz balandligi: `120%`, Tezlik: `1.5x`.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ovoz ohangini (Pitch) o‘zgartirmasdan faqat gapirish tezligini oshirish uchun qaysi effekt ishlatiladi?',
        options: ['Change Speed', 'Change Tempo', 'Echo', 'Fade Out'],
        answer: 1,
        explanation: 'Change Tempo ovoz chastotasini o‘zgartirmay tezlikni boshqaradi.',
      },
      {
        prompt: 'Tovushning yopiq zal yoki xonada devorlardan qaytib tabiiy hajmdor aks-sado berishi qaysi effektdir?',
        options: ['Normalize', 'Reverberatsiya (Reverb)', 'Mute', 'Silence'],
        answer: 1,
        explanation: 'Reverb xona akustikasi va makon hajmini modellashtiradi.',
      },
      {
        prompt: 'Reverb sozlamasida "kichik xona" o‘rniga "katta konsert zali" effektini beruvchi parametr qaysi?',
        options: ['Room Size (Xona o‘lchami)', 'Sample Rate', 'Bit Depth', 'Trim'],
        answer: 0,
        explanation: 'Room Size qanchalik katta (%) bo‘lsa, makon shunchalik keng eshitiladi.',
      },
      {
        prompt: 'Agar klipga haddan tashqari ko‘p `Wet` (Reverb) qo‘shilsa va `Dry` kamaysa, ovoz qanday eshitiladi?',
        options: [
          'So‘zlar tushunarsiz, go‘yo uzoq g‘or ichidan chiqayotgandek bo‘lib qoladi',
          'Ovoz mutlaqo quruq chiqadi',
          'Tezlik 2 barobar oshadi',
          'Fayl WAV ga aylanadi',
        ],
        answer: 0,
        explanation: 'Diktor nutqi tiniq qolishi uchun Wet nisbati meʼyorida (10–25%) qo‘yiladi.',
      },
      {
        prompt: 'Davomiylikni o‘zgartirmasdan faqat erkak ovozini ingichkaroq yoki yo‘g‘onroq qilish effekti qaysi?',
        options: ['Change Pitch', 'Change Tempo', 'Fade In', 'Noise Reduction'],
        answer: 0,
        explanation: 'Change Pitch vaqt uzunligini saqlab, faqat chastota balandligini o‘zgartiradi.',
      },
    ],
    teacherNotes: {
      method: 'AudioLab da 1.5x va 120% ni sozlash bilan birga Audacity da `Change Tempo` vs `Change Speed` farqini eshittiring.',
      timing: 'Kirish 5 daq, Tempo/Speed/Reverb 20 daq, AudioLab 10 daq, Quiz 10 daq.',
      assessment: 'AudioLab natijasi va `Reverb` parametrlarini tushunish.',
      homework: 'Sheʼr o‘qilishi va rok qo‘shiq uchun mos `Reverb` (`Room Size` katta/kichik) farqini yozing.',
    },
  },
];
