import type { Lesson } from './types';

export const GRADE_9_Q3A: Lesson[] = [
  {
    id: 'g9-l33',
    grade: 9,
    no: 33,
    part: '3-chorak',
    title: 'Fayl kengaytmasi va ularni samarali boshqarish',
    kind: 'dars',
    hours: 1,
    tools: ['Fayl menejeri', 'CSV / TXT / RTF / PDF', 'PNG / JPG / SVG'],
    objectives: [
      'O‘quvchi hujjat, jadval, tasvir, audio, video va veb-fayl kengaytmalarini (`.csv`, `.rtf`, `.pdf`, `.png`, `.svg`, `.mp3`, `.mp4`, `.html`, `.css`) hamda universal formatlar vazifasini biladi.',
      'O‘quvchi loyiha papkalarini ierarxik tuzish, tushunarli nomlash va fayl versiyalarini samarali boshqarishni qo‘llaydi.',
    ],
    intro:
      'Kompyuterdagi har bir fayl nomidan keyingi nuqta va 3–4 ta harf (masalan, `.pdf`, `.csv`, `.png`) uning qanday turdagi ma’lumot ekanini va qaysi dasturda ochilishini bildiradi. Tartibli fayl boshqaruvi esa loyihada vaqtni tejaydi.',
    sections: [
      {
        heading: 'Asosiy fayl formatlari va universal kengaytmalar',
        body: 'Matn va hujjat: `.txt` (oddiy matn, formatlashsiz), `.rtf` (Rich Text Format — turli dasturlarda ochiladigan formatlangan matn), `.docx` (Word), `.pdf` (Portable Document Format — barcha qurilmada maketi buzilmay ochiladi). Jadval: `.csv` (Comma Separated Values — vergul bilan ajratilgan universal jadval), `.xlsx`. Rasm: `.jpg` (foto, yo‘qotishli siqish), `.png` (shaffof fon, yo‘qotishsiz), `.svg` (vektor, kattalashtirganda xiralashmaydi), `.gif` (animatsiya). Audio/Video: `.mp3`, `.wav`, `.mp4`. Veb/Arxiv: `.html`, `.css`, `.zip`.',
        example: 'Excel dagi jadvalni Access yoki Python dasturiga ko‘chirishda eng universal ko‘prik — `.csv` formatidir.',
        tip: 'Fayl nomida probel o‘rniga pastki chiziq (`hisobot_2025_v2.pdf`) ishlatish veb-serverlarda xatolarning oldini oladi!',
      },
      {
        heading: 'Fayllarni ierarxik boshqarish va versiyalash',
        body: 'Barcha fayllarni "Desktop" ga tashlamang. Bosh loyiha papkasi ichida `01_Hujjatlar`, `02_Rasmlar`, `03_Jadvallar`, `04_Natija` kabi quyi papkalar oching. Muhim fayllarni `loyiha_v1.docx`, `loyiha_v2.docx` kabi versiya raqami bilan saqlash eski holatga qaytish imkonini beradi.',
        example: 'Veb-sayt yaratishda `index.html` asosiy papkada, rasmlar `images/`, stillar esa `css/` papkasida turishi tartibni saqlaydi.',
      },
    ],
    keyTerms: [
      { term: 'Fayl kengaytmasi', definition: 'Fayl nomining nuqtadan keyingi qismi bo‘lib, uning formati va dasturini belgilaydi.' },
      { term: 'CSV formati', definition: 'Jadval ma’lumotlarini vergul bilan ajratilgan matn sifatida saqlovchi universal format.' },
      { term: 'PDF formati', definition: 'Turli kompyuter va telefonlarda shrift hamda sahifa ko‘rinishini o‘zgartirmay saqlovchi hujjat.' },
      { term: 'Ierarxik papka tuzilmasi', definition: 'Fayllarni mavzu va turiga ko‘ra daraxtsimon papkalarga tartiblab joylashtirish.' },
    ],
    steps: [
      '1. `Loyiha_9sinf` bosh papkasi va ichida `matn`, `jadval`, `grafika` papkalarini yarating.',
      '2. Umumiy (generic) va xususiy (proprietary) formatlarni (masalan `.csv` vs `.xlsx`, `.rtf` vs `.docx`) ajrating.',
      '3. Fayllarni aniq nom va versiya (`v1`, `v2`) bilan saqlashni mashq qiling.',
    ],
    practice: [
      {
        task: 'Turli operatsion tizimlarda (Windows, Linux, macOS) ochilganda sahifa ko‘rinishi va shriftlari buzilmasligi uchun Word hujjatini qaysi formatda saqlaysiz?',
        expected: '`.pdf` (Portable Document Format).',
        difficulty: 'oson',
      },
      {
        task: 'Shaffof fonga ega maktab logotipi uchun `.jpg` va `.png` dan qay birini tanlash kerakligini tushuntiring.',
        expected: '`.png` — u shaffof fonni (alpha kanal) qo‘llab-quvvatlaydi va matn/chiziq chetlarini xiralashtirmaydi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l33-g1',
        num: '01',
        title: 'Fayl kengaytmasini toifaga ajrat',
        topic: 'Fayl formatlari',
        difficulty: 'Oson',
        engine: 'sort',
        config: {
          prompt: 'Fayl kengaytmalarini mos guruhlarga ajrating.',
          categories: ['Hujjat / Jadval', 'Tasvir / Grafika', 'Audio / Video / Veb'],
          items: [
            { text: '.csv (Jadval matni)', category: 'Hujjat / Jadval' },
            { text: '.pdf (Universial hujjat)', category: 'Hujjat / Jadval' },
            { text: '.png (Shaffof rastr)', category: 'Tasvir / Grafika' },
            { text: '.svg (Vektor tasvir)', category: 'Tasvir / Grafika' },
            { text: '.mp4 (Video)', category: 'Audio / Video / Veb' },
            { text: '.html (Veb-sahifa)', category: 'Audio / Video / Veb' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Turli jadval va ma’lumotlar bazasi dasturlari o‘rtasida eng oson ma’lumot almashish uchun qaysi umumiy format ishlatiladi?',
        options: ['.csv', '.mp3', '.jpg', '.exe'],
        answer: 0,
        explanation: 'CSV (Comma-Separated Values) deyarli barcha jadval va DB dasturlari tomonidan o‘qiladi.',
      },
      {
        prompt: 'Qaysi rasm formati shaffof (transparent) fonni qo‘llab-quvvatlaydi?',
        options: ['.png', '.jpg', '.txt', '.wav'],
        answer: 0,
        explanation: 'PNG shaffoflik va yo‘qotishsiz siqishni qo‘llaydi, JPG esa shaffof fonni saqlamaydi.',
      },
      {
        prompt: 'Hujjat boshqa kompyuterda ochilganda sahifa joylashuvi o‘zgarib ketmasligi uchun qaysi formatda eksport qilinadi?',
        options: ['.pdf', '.txt', '.csv', '.css'],
        answer: 0,
        explanation: 'PDF hujjat ko‘rinishini barcha qurilmalarda bir xil saqlaydi.',
      },
      {
        prompt: 'Kattalashtirganda sifati buzilmaydigan (piksellarga bo‘linmaydigan) vektor tasvir formati qaysi?',
        options: ['.svg', '.jpg', '.gif', '.mp3'],
        answer: 0,
        explanation: 'SVG matematik chiziq va egri shakllar orqali saqlanadigan vektor formatidir.',
      },
      {
        prompt: 'Oddiy, hech qanday shrift stili va rasmsiz faqat matn saqlaydigan fayl formati qaysi?',
        options: ['.txt', '.pdf', '.pptx', '.mp4'],
        answer: 0,
        explanation: '`.txt` (Plain text) faqat sof matn belgilarini saqlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Bitta ma’lumotni `.txt`, `.rtf` va `.pdf` da saqlab, hajmi va ko‘rinishini solishtirish.',
      timing: 'Formatlar 20 daq, Papka boshqaruvi 15 daq, Sort va quiz 10 daq.',
      assessment: 'Universal formatlar (CSV, RTF, PDF, PNG) qo‘llanilishini aniq bilish.',
      homework: 'Kompyuteringizdagi "Yuklanmalar" papkasini kamida 4 ta toifa papkaga tartiblab chiqing.',
    },
  },
  {
    id: 'g9-l34',
    grade: 9,
    no: 34,
    part: '3-chorak',
    title: 'Saqlash yoki uzatish uchun fayl hajmini kamaytirish',
    kind: 'dars',
    hours: 1,
    tools: ['ZIP / 7-Zip', 'Lossless vs Lossy', 'Rasm o‘lchami (DPI/Res)'],
    objectives: [
      'O‘quvchi fayl hajmini kamaytirish sabablari (disk joyi, elektron pochta limiti, tez yuklash) va usullarini tushuntiradi.',
      'O‘quvchi Yo‘qotishsiz (Lossless — ZIP, PNG) va Yo‘qotishli (Lossy — JPG, MP3) siqish turlarini farqlaydi.',
    ],
    intro:
      'Elektron pochta odatda 25 MB dan katta ilovani qabul qilmaydi, og‘ir rasmlar esa veb-saytni sekinlashtiradi. Shuning uchun fayllarni sifatiga zarar yetkazmay (yoki sezilmas darajada) siqish juda muhim!',
    sections: [
      {
        heading: 'Yo‘qotishsiz (Lossless) va Yo‘qotishli (Lossy) siqish',
        body: 'Lossless (Yo‘qotishsiz) siqishda fayl ichidagi takrorlanuvchi naqshlar qisqartiriladi, ochilganda esa asl fayl 100% tiklanadi — hujjatlar, dastur kodlari va ma’lumotlar bazasi uchun faqat shu usul (masalan, `.zip`, `.7z`, `.png`) shart! Lossy (Yo‘qotishli) siqishda esa inson ko‘zi yoki qulog‘i ilg‘amaydigan mayda tafsilotlar butunlay olib tashlanadi (`.jpg`, `.mp3`, `.mp4`) — fayl juda kichrayadi, biroq asl sifatni qaytarib bo‘lmaydi.',
        example: 'Word hujjati yoki Python kodini Lossy qilib bo‘lmaydi (bitta harf o‘chsa ham buziladi) — ularni faqat `.zip` bilan Lossless arxivlash kerak!',
        tip: 'Veb-sayt uchun 4000×3000 px rasmni 800×600 px ga kichraytirish (Resizing/Resampling) ham sahifa ochilishini 10 baravar tezlashtiradi.',
      },
      {
        heading: 'Arxivlash (ZIP) va tasvir o‘lchamini optimallash',
        body: 'ZIP arxivlash 20 ta alohida faylni bitta ixcham paketga jamlaydi — bu emailda yuborish va saqlashni osonlashtiradi. Rasmlar uchun esa DPI/PPI (ekran uchun 72–96 ppi yetarli, chop etish uchun 300 dpi kerak) va rang chuqurligini pasaytirish hajmni keskin kamaytiradi.',
        example: '10 MB lik 10 ta PDF faylni bitta `hujjatlar.zip` arxiviga solganda hajmi 6–7 MB ga tushadi va bitta ilova sifatida ketadi.',
      },
    ],
    keyTerms: [
      { term: 'Lossless (Yo‘qotishsiz) siqish', definition: 'Fayl ochilganda barcha ma’lumot 100% asl holatida tiklanadigan siqish (ZIP, PNG).' },
      { term: 'Lossy (Yo‘qotishli) siqish', definition: 'Inson sezmaydigan qismlarni o‘chirib hajmni kuchli kamaytiradigan siqish (JPG, MP3).' },
      { term: 'Arxivlash (.zip / .7z)', definition: 'Bir nechta fayl va papkalarni bitta siqilgan faylga birlashtirish.' },
      { term: 'Ruxsat (Resolution / DPI)', definition: 'Tasvirdagi piksellar zichligi; ekran va chop etish uchun turlicha tanlanadi.' },
    ],
    steps: [
      '1. 5 ta hujjatni tanlab, 7-Zip yoki Windows "Compress to ZIP" orqali arxivlang.',
      '2. Asl hajm va arxivlangan `.zip` hajmini taqqoslang.',
      '3. Katta fotosuratni veb-sayt uchun kichikroq ruxsatda (JPG) saqlab hajm farqini tekshiring.',
    ],
    practice: [
      {
        task: 'Nima uchun buxgalteriya Excel jadvalini uzatishda Lossy siqish qo‘llab bo‘lmaydi?',
        expected: 'Lossy ma’lumotlarni olib tashlaydi; raqam yoki formuladan bitta bayt yo‘qolsa ham butun jadval yaroqsiz bo‘ladi.',
        difficulty: 'oson',
      },
      {
        task: 'Maktab sayti bosh sahifasiga 8 MB lik kamera suratini qo‘yish qanday muammo keltirib chiqaradi va uni qanday hal qilasiz?',
        expected: 'Sahifa sekin yuklanadi va mobil trafikni yeydi. Yechim: rasm enini ekran o‘lchamiga (masalan 1200 px) moslab, JPG/WebP da ~150 KB gacha siqish.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l34-g1',
        num: '01',
        title: 'Siqish turlarini ajrat',
        topic: 'Fayllarni siqish',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Fayllarni siqish haqidagi fikrlarni baholang.',
          statements: [
            {
              text: 'ZIP arxivlash yo‘qotishsiz (Lossless) usul bo‘lib, fayl arxivdan chiqarilganda birorta ham belgisi yo‘qolmaydi.',
              isTrue: true,
              explanation: 'To‘g‘ri! ZIP da barcha baytlar matematik usulda ixchamlanadi va to‘liq qayta tiklanadi.',
            },
            {
              text: 'JPG formatida saqlashda yo‘qolgan tafsilotlarni faylni qayta ochib tiklab olish mumkin.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! JPG yo‘qotishli (Lossy) format — o‘chirilgan mayda rang tafsilotlari qaytmaydi.',
            },
            {
              text: 'Veb-saytda rasmlarni kichikroq hajmda saqlash sahifaning tezroq yuklanishiga yordam beradi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Kichik fayl tarmoqdan tezroq uzatiladi.',
            },
            {
              text: 'Musiqiy MP3 faylini yana ZIP ga solsangiz hajmi 10 barobar kichrayadi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! MP3 allaqachon qattiq siqilgan format bo‘lgani uchun ZIP uni deyarli qisqartira olmaydi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Matnli hujjatlar va dastur kodlari uchun qaysi siqish turi majburiy?',
        options: ['Yo‘qotishsiz (Lossless — masalan ZIP)', 'Yo‘qotishli (Lossy)', 'Faqat MP3', 'Qirqish'],
        answer: 0,
        explanation: 'Matn va koddan birorta ham bit yo‘qolmasligi uchun Lossless siqish zarur.',
      },
      {
        prompt: 'Qaysi formatlar yo‘qotishli (Lossy) siqishga misol bo‘ladi?',
        options: ['JPG va MP3', 'ZIP va TXT', 'PNG va WAV', 'CSV va RTF'],
        answer: 0,
        explanation: 'JPG (rasm) va MP3 (ovoz) inson sezgisi ilg‘amaydigan qismlarni tashlab yuborib hajmni kuchli kamaytiradi.',
      },
      {
        prompt: 'Elektron pochtada 25 ta kichik faylni bitta qilib va kichikroq hajmda yuborishning eng qulay usuli qaysi?',
        options: ['Barchasini bitta `.zip` arxiv fayliga joylash', 'Har birini qog‘ozga chiqarib skanerlash', 'Hammasini MP3 ga o‘tkazish', '25 ta alohida xat yozish'],
        answer: 0,
        explanation: 'ZIP arxivi fayllarni bitta paketga jamlab, hajmini ham kamaytiradi.',
      },
      {
        prompt: 'Veb-sahifalar uchun rasmlarni optimallashtirishda ekran ruxsati odatda qancha DPI/PPI yetarli bo‘ladi?',
        options: ['72–96 PPI', '1200 DPI', '2400 DPI', '1 DPI'],
        answer: 0,
        explanation: 'Bosma jurnalga 300 DPI kerak, veb ekranlar uchun esa 72–96 PPI kifoya.',
      },
      {
        prompt: 'Nima uchun fayl hajmini kamaytirish tarmoq uchun foydali?',
        options: ['Yuklash/uzatish tezlashadi va server hamda diskda kam joy egallaydi', 'Viruslarni ko‘paytiradi', 'Ekran rangini o‘chiradi', 'Parolni bekor qiladi'],
        answer: 0,
        explanation: 'Kichik fayl tarmoq polosasi va xotirani tejaydi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda Word/rasm fayllarini ZIP qilib, "Asl hajm vs Siqilgan hajm" foizini hisoblash.',
      timing: 'Lossless/Lossy 20 daq, Arxivlash/Optimallash 15 daq, TrueFalse va test 10 daq.',
      assessment: 'Lossy va Lossless farqini to‘g‘ri misollar bilan aytish.',
      homework: 'Bitta BMP/PNG rasmni JPG ga o‘tkazib, ikki fayl hajmi nisbatini hisoblang.',
    },
  },
  {
    id: 'g9-l35',
    grade: 9,
    no: 35,
    part: '3-chorak',
    title: 'Tasvirlarni joylashtirish va tahrirlash uchun dastur uskunalaridan foydalanish',
    kind: 'dars',
    hours: 1,
    tools: ['GIMP / Photopea / Paint.NET', 'Word / Writer', 'Qatlamlar (Layers)'],
    objectives: [
      'O‘quvchi rastrli grafika muharrirlarida (GIMP, Photopea) tasvirni ochish, qatlamlarda ishlash va obyektni ajratib olishni biladi.',
      'O‘quvchi hujjat yoki taqdimotga rasm joylashtirish va matn bilan o‘rash (Text wrapping) uskunalarini qo‘llaydi.',
    ],
    intro:
      'Maqola, buklet yoki veb-saytning yarim jozibasi — to‘g‘ri tanlangan va tartibli tahrirlangan tasvir! Bugun tasvir muharriri uskunalari hamda matnli hujjatga rasmni chiroyli joylashtirishni o‘rganamiz.',
    sections: [
      {
        heading: 'Tasvir muharriri (GIMP / Photopea) asosiy uskunalari',
        body: 'Zamonaviy tasvir tahririda Qatlamlar (Layers) shaffof plyonkalar kabi ishlaydi: fon, rasm va matn alohida qatlamda turishi tahrirlashni osonlashtiradi. Muhim uskunalar: Move (ko‘chirish), Selection (to‘rtburchak, lasso, sehrli tayoqcha — rasm qismini ajratish), Eraser (o‘chirgich), Clone Stamp (keraksiz dog‘ni yo‘qotish), Text (matn qo‘shish).',
        example: 'Mahsulot suratidan oq fonni "Magic Wand" (Sehrli tayoqcha) bilan tanlab o‘chirsangiz, uni chiroyli banner ustiga qo‘yish mumkin.',
        tip: 'GIMP va onlayn Photopea bepul bo‘lib, Adobe Photoshop kabi qatlamlar bilan ishlaydi.',
      },
      {
        heading: 'Hujjatga tasvir joylashtirish va Text Wrapping',
        body: 'Word yoki LibreOffice Writer ga rasm qo‘yilganda (Insert → Pictures), u odatda "In Line with Text" holatida turadi va matn orasida noqulay bo‘shliq qoldiradi. Uni professional joylashtirish uchun "Wrap Text" (Matn bilan o‘rash) dan `Square` (Kvadrat), `Tight` (Zich) yoki `Behind/In Front of Text` ni tanlash kerak.',
        example: 'Gazeta maqolasida rasm chap burchakda turib, matn uning o‘ng tomonidan chiroyli oqib tushishi uchun `Square` o‘rash qo‘llanadi.',
      },
    ],
    keyTerms: [
      { term: 'Qatlam (Layer)', definition: 'Tasvir elementlarini bir-biriga xalaqit bermay alohida tahrirlash imkonini beruvchi shaffof sath.' },
      { term: 'Sehrli tayoqcha (Magic Wand)', definition: 'Bir xil rangdagi tutash hududni bir bosishda belgilash uskunasi.' },
      { term: 'Text Wrapping', definition: 'Hujjatda matnning joylashtirilgan rasm atrofidan qanday o‘tishini belgilovchi rejim.' },
      { term: 'Clone Stamp', definition: 'Tasvirning toza qismidan namuna olib, keraksiz obyektni berkitish uskunasi.' },
    ],
    steps: [
      '1. Tasvir muharririda rasm ochib, yangi qatlam (Layer) yarating.',
      '2. Sehrli tayoqcha yoki Lasso bilan bir obyektni ajrating.',
      '3. Hujjat muharririda rasm qo‘yib, "Text Wrapping → Square" ni qo‘llang.',
    ],
    practice: [
      {
        task: 'Hujjatga rasm qo‘ygandan keyin uni sahifaning istalgan joyiga erkin sudrab olib o‘tolmayapsiz. Qaysi sozlamani o‘zgartirish kerak?',
        expected: 'Wrap Text rejimini "In Line with Text" dan "Square" yoki "Tight" ga o‘zgartirish kerak.',
        difficulty: 'oson',
      },
      {
        task: 'Nima uchun logotip matni va fon rasmini bitta emas, alohida qatlamlarda (Layers) saqlash foydali?',
        expected: 'Keyinchalik matn shrifti yoki fon rangini boshqa qismga zarar yetkazmasdan alohida tahrirlash mumkin.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l35-g1',
        num: '01',
        title: 'Tasvir muharriri asboblari',
        topic: 'Grafika uskunalari',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'Grafik muharrir va hujjat uskunasini vazifasi bilan juftlang.',
          pairs: [
            { left: 'Qatlamlar (Layers)', right: 'Matn, fon va rasmlarni mustaqil qavatlarda saqlash' },
            { left: 'Text Wrapping (Square)', right: 'Matnning hujjatdagi rasm atrofidan chiroyli o‘tib ketishi' },
            { left: 'Magic Wand', right: 'Bir xil rangdagi fon yoki hududni bir bosishda belgilash' },
            { left: 'Clone Stamp', right: 'Tasvirning bir qismidan nusxa olib dog‘larni berkitish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Tasvir muharririda matn, fon va qahramonni bir-birini buzmasdan alohida tahrirlash uchun nima ishlatiladi?',
        options: ['Qatlamlar (Layers)', 'Arxivator', 'Fayervol', 'Plotter'],
        answer: 0,
        explanation: 'Har bir obyekt alohida qatlamda tursa, uni mustaqil siljitish va o‘zgartirish mumkin.',
      },
      {
        prompt: 'Word hujjatida rasm atrofidan matn tekis oqib tushishi uchun qaysi sozlama tanlanadi?',
        options: ['Wrap Text → Square / Tight', 'Header', 'Page Break', 'Watermark'],
        answer: 0,
        explanation: 'Square yoki Tight o‘rash usullari matnni rasm yoniga chiroyli joylashtiradi.',
      },
      {
        prompt: 'Bir xil oq fonni tezda ajratib o‘chirish uchun qaysi tanlash uskunasi eng qulay?',
        options: ['Sehrli tayoqcha (Magic Wand)', 'Matn (Text)', 'Kattalashtirish (Zoom)', 'Piramida'],
        answer: 0,
        explanation: 'Magic Wand o‘xshash rangli piksellarni avtomatik belgilab beradi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri bepul va kuchli rastrli tasvir muharriri hisoblanadi?',
        options: ['GIMP / Photopea', 'Notepad', 'WinRAR', 'PuTTY'],
        answer: 0,
        explanation: 'GIMP (ochiq kodli desktop) va Photopea (brauzer) keng imkoniyatli rasm muharrirlaridir.',
      },
      {
        prompt: 'Rasmni matn ostida xira fon sifatida joylashtirish uchun qaysi o‘rash varianti ishlatiladi?',
        options: ['Behind Text', 'In Line with Text', 'Top and Bottom', 'Crop'],
        answer: 0,
        explanation: 'Behind Text tasvirni matn qavatining orqasiga o‘tkazadi.',
      },
    ],
    teacherNotes: {
      method: 'GIMP/Photopea va LibreOffice Writer da jonli namoyish ko‘rsatish.',
      timing: 'Grafik uskunalar 15 daq, Text wrapping 15 daq, Match va test 15 daq.',
      assessment: 'Qatlam va Text Wrapping ni amalda qo‘llash.',
      homework: 'Hujjatga bitta rasm qo‘yib, "Square" va "Tight" o‘rash farqini skrinshot bilan ko‘rsating.',
    },
  },
  {
    id: 'g9-l36',
    grade: 9,
    no: 36,
    part: '3-chorak',
    title: 'Tasvirni aniq joylashtirish. Tasvirning tomonlar nisbatini oʻzgartirish',
    kind: 'dars',
    hours: 1,
    tools: ['Align / Grid', 'Aspect Ratio (Tomonlar nisbati)', 'Resize'],
    objectives: [
      'O‘quvchi tomonlar nisbati (Aspect Ratio) nima ekanini va rasmni cho‘zilib/pachaq bo‘lib qolishidan qanday asrashni tushunadi.',
      'O‘quvchi tasvirni hujjat va slayd chetlariga (Margins), to‘r chiziqlarga (Grid) va boshqa obyektlarga nisbatan aniq tekislash (Align) ni bajaradi.',
    ],
    intro:
      'Taqdimotlarda odam yuzi cho‘zilib ingichka yoki pachoq bo‘lib qolgan rasmlarni ko‘rganmisiz? Bu "tomonlar nisbati" (Aspect Ratio) buzilganining belgisi! Bundan tashqari, tasvirlarni ko‘z bilan emas, tekislash chiziqlari bilan aniq joylashtirish kerak.',
    sections: [
      {
        heading: 'Tomonlar nisbati (Aspect Ratio) va Proporsional o‘lchamlash',
        body: 'Aspect Ratio — rasm kengligining balandligiga nisbati (masalan, 16:9, 4:3, 1:1). Agar 1200×800 (3:2) rasmning faqat enini 600 px qilib, balandligini 800 px qoldirsangiz, tasvir buziladi (distortion). Shuning uchun "Lock Aspect Ratio" (Nisbatni qulflash) belgisi yoqiq bo‘lishi yoki rasmni faqat BURCHAK markeridan (Shift bosib) tortib kichraytirish shart! Balandlik ham proporsional 400 px bo‘ladi.',
        example: '1600×900 (16:9) rasm eni ikki baravar (800 px) kamaytirilsa, nisbat saqlanishi uchun bo‘yi ham 450 px bo‘lishi kerak.',
        tip: 'Hech qachon rasmning yon yoki ustki o‘rta markeridan tortmang — doim BURCHAKDAN torting!',
      },
      {
        heading: 'Aniq joylashtirish: Align, Distribute va Chegaralar',
        body: 'Rasmni sahifaga joylashtirganda uch qoidaga amal qiling: 1) Sahifa chetlari (Margins) dan tashqariga chiqmasin; 2) Boshqa matn yoki rasm ustiga chiqib ketmasin (Overlap); 3) Align (Left, Center, Right, Top, Middle) va Distribute (teng masofada tarqatish) buyruqlari bilan millimetrgacha tekislansin.',
        example: '3 ta logotipni yonma-yon chiroyli qo‘yish uchun uchalasini tanlab, "Align Top" va "Distribute Horizontally" bosiladi.',
      },
    ],
    keyTerms: [
      { term: 'Aspect Ratio (Tomonlar nisbati)', definition: 'Tasvir kengligi va balandligi o‘rtasidagi proporsional nisbat (masalan, 16:9).' },
      { term: 'Lock Aspect Ratio', definition: 'Bir o‘lcham o‘zgarganda ikkinchisini avtomatik moslab, rasm buzilishini to‘sadigan qulf.' },
      { term: 'Distortion (Buzilish)', definition: 'Tomonlar nisbati buzilganda rasmning cho‘zilib yoki yassilanib ketishi.' },
      { term: 'Align & Distribute', definition: 'Obyektlarni bir chiziqqa tekislash va oralarini teng taqsimlash vositasi.' },
    ],
    steps: [
      '1. Rasm xususiyatlarida "Lock Aspect Ratio" yoqilganini tekshiring.',
      '2. Rasmni burchagidan tortib o‘lchamini o‘zgartiring va hisob-kitobni tekshiring.',
      '3. Ikkita rasmni "Align Middle" orqali bitta gorizontal o‘qqa keltiring.',
    ],
    practice: [
      {
        task: '1200×900 pikselli rasmning tomonlar nisbati qancha? Enini 800 px ga tushirsak, buzilmasligi uchun bo‘yi necha piksel bo‘ladi?',
        expected: 'Nisbat 1200:900 = 4:3. Bo‘yi = 800 × 3 ÷ 4 = 600 px.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Slaydda 4 ta ikonka har xil balandlikda qiyshiq turibdi. Ularni 2 bosishda bir chiziqqa qanday keltirasiz?',
        expected: 'Barchasini belgilab, Arrange → Align → Align Middle (yoki Top) va Distribute Horizontally bosish orqali.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g9-l36-g1',
        num: '01',
        title: 'Tomonlar nisbati hisoblagichi',
        topic: 'Aspect Ratio',
        difficulty: 'o‘rta',
        engine: 'calc',
        config: {
          prompt: 'Asl rasm o‘lchami eniga 1600 px va bo‘yiga 1200 px (4:3 nisbat). Rasm buzilmasligi uchun enini 800 px ga tushirsak, bo‘yi necha piksel bo‘lishi kerak?',
          unit: 'px',
          correctAnswer: 600,
          tolerance: 0,
          steps: [
            'Eni necha baravar kichrayganini toping: 1600 ÷ 800 = 2 marta',
            'Nisbat saqlanishi uchun bo‘yini ham 2 ga bo‘ling: 1200 ÷ 2 = 600 px',
          ],
          hint: 'Eni yarmiga kamaygan bo‘lsa, bo‘yi ham yarmiga kamayishi shart!',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Rasm o‘lchamini o‘zgartirayotganda u cho‘zilib yoki pachoq bo‘lib ketmasligi uchun qaysi markerlardan tortish kerak?',
        options: ['Burchak (diagonal) markerlaridan', 'Yuqori o‘rta markeridan', 'Chap o‘rta markeridan', 'Pastki o‘rta markeridan'],
        answer: 0,
        explanation: 'Burchakdan tortish kenglik va balandlikni bir xil proporsiyada o‘zgartiradi.',
      },
      {
        prompt: '1920 × 1080 pikselli ekran tasvirining tomonlar nisbati (Aspect Ratio) qancha?',
        options: ['16:9', '4:3', '1:1', '3:1'],
        answer: 0,
        explanation: '1920 ÷ 120 = 16, 1080 ÷ 120 = 9 → 16:9 keng ekran nisbati.',
      },
      {
        prompt: '"Lock Aspect Ratio" sozlamasi o‘chirilgan bo‘lsa qanday xato yuz berishi mumkin?',
        options: ['Rasm proporsiyasi buziladi (distortion)', 'Fayl o‘chib ketadi', 'Rang oq-qora bo‘ladi', 'Matn tarjima bo‘ladi'],
        answer: 0,
        explanation: 'Qulf o‘chiq bo‘lsa, faqat bir tomon o‘zgarib rasm shakli buziladi.',
      },
      {
        prompt: 'Bir qatordagi 3 ta rasm orasidagi bo‘shliqni bir xil teng qilish uchun qaysi buyruq ishlatiladi?',
        options: ['Distribute Horizontally', 'Crop', 'Watermark', 'Flip Vertical'],
        answer: 0,
        explanation: 'Distribute obyektlar orasidagi masofani teng taqsimlaydi.',
      },
      {
        prompt: 'Kvadrat profil rasmi (1:1 nisbat) eni 500 px bo‘lsa, bo‘yi necha piksel bo‘ladi?',
        options: ['500 px', '250 px', '1000 px', '100 px'],
        answer: 0,
        explanation: '1:1 nisbatda eni va bo‘yi teng bo‘ladi.',
      },
    ],
    teacherNotes: {
      method: 'Buzilgan (cho‘zilgan) va to‘g‘ri nisbatli ikki suratni ekranda yonma-yon ko‘rsatish.',
      timing: 'Aspect Ratio 15 daq, Align/Distribute 15 daq, Calc o‘yini va quiz 15 daq.',
      assessment: 'Proporsiya hisobini to‘g‘ri yechish va Align amallarini bilish.',
      homework: '800×600 rasmning eni 400 px va 200 px bo‘lgandagi proporsional bo‘yini hisoblang.',
    },
  },
  {
    id: 'g9-l37',
    grade: 9,
    no: 37,
    part: '3-chorak',
    title: 'Tasvirni qirqish va aylantirish',
    kind: 'dars',
    hours: 1,
    tools: ['Crop (Qirqish)', 'Rotate 90°/180°', 'Flip (Ko‘zgu aks)'],
    objectives: [
      'O‘quvchi Crop (Qirqish) uskunasidan rasmning keraksiz chetlarini olib tashlash va kompozitsiyani yaxshilashda foydalanadi.',
      'O‘quvchi Rotate (90°, 180°, 270°, erkin burchak) va Flip (Gorizontal/Vertikal ko‘zgu aks) amallari orasidagi farqni ajratadi.',
    ],
    intro:
      'Baʼzan suratda keraksiz orqa fon ko‘p joy oladi yoki telefonda surat teskari/yonbosh saqlanib qoladi. Qirqish (Crop), Aylantirish (Rotate) va Ko‘zgu aksi (Flip) — tasvirni tartibga keltirishning eng asosiy amallaridir.',
    sections: [
      {
        heading: 'Tasvirni qirqish (Crop) va tarkibiy kompozitsiya',
        body: 'Crop (Qirqish) tasvirning keraksiz chetki qismlarini kesib tashlab, asosiy obyektga eʼtiborni qaratadi va fayl hajmini ham kamaytiradi. Masalan, keng manzara ichidan faqat bino yoki portretni 1:1 kvadrat yoki 16:9 kadr qilib qirqib olish mumkin ("Uchdan bir qoidasi" — asosiy obyektni kesishish nuqtalariga joylash).',
        example: 'Pasport uchun 3×4 rasm tayyorlashda keng fotosuratdan faqat yuz va yelka qismi markazlashtirib qirqib olinadi.',
        tip: 'Crop bilan Resize ni adashtirmang: Resize butun rasmni kichraytiradi, Crop esa chetlarini kesib olib tashlaydi!',
      },
      {
        heading: 'Aylantirish (Rotate) va Ko‘zgu aksi (Flip)',
        body: 'Rotate (Aylantirish) tasvirni soat mili yo‘nalishida yoki teskari tomonga 90°, 180°, 270° (yoki qiyshiq ufqni to‘g‘rilash uchun 2–3°) ga buradi. Flip Horizontal (Gorizontal akslantirish) chapni o‘ngga ko‘zgudagidek aylantiradi; Flip Vertical esa tepani pastga akslantiradi. Ehtiyot bo‘ling: matnli rasmni Flip qilsangiz, harflar ko‘zgudagidek teskari o‘qilmaydigan bo‘lib qoladi!',
        example: 'Yonbosh olingan hujjat skanerini o‘qilishi uchun `Rotate 90° Right` qilinadi; Flip qilinsa yozuv teskari bo‘lib qolardi.',
      },
    ],
    keyTerms: [
      { term: 'Crop (Qirqish)', definition: 'Tasvirning keraksiz tashqi chetlarini kesib tashlab kadrni toraytirish.' },
      { term: 'Rotate (Aylantirish)', definition: 'Tasvirni markaz atrofida ma’lum burchakka (90°, 180°, erkin) burish.' },
      { term: 'Flip Horizontal', definition: 'Tasvirning chap va o‘ng tomonini ko‘zgu aksida almashtirish.' },
      { term: 'Flip Vertical', definition: 'Tasvirning yuqori va pastki qismini ko‘zgu aksida almashtirish.' },
    ],
    steps: [
      '1. Rasmdagi ortiqcha fonni Crop uskunasi bilan kesib oling.',
      '2. Yonbosh turgan suratni Rotate 90° bilan to‘g‘ri holatga keltiring.',
      '3. Flip Horizontal qo‘llaganda matn va simmetriya qanday o‘zgarishini kuzating.',
    ],
    practice: [
      {
        task: 'Skanerlangan sahifa rasmi o‘ngga yonboshlab qolgan (soat 3 tomonga qaragan). Uni tiklash uchun qaysi burish kerak?',
        expected: 'Rotate 90° Counter-Clockwise (chapga 90° aylantirish) yoki 270° o‘ngga.',
        difficulty: 'oson',
      },
      {
        task: 'Selfi kamerada olingan suratda futbolkadagi yozuv teskari ko‘rinib qolgan. Rotate 180° qilasizmi yoki Flip Horizontal?',
        expected: 'Flip Horizontal — chunki yozuv ko‘zgudagidek chap-o‘ng almashgan, tepa-past emas.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l37-g1',
        num: '01',
        title: 'Crop, Rotate va Flip farqi',
        topic: 'Tasvir geometriyasi',
        difficulty: 'Oson',
        engine: 'fillblank',
        config: {
          prompt: 'Tasvirni tahrirlash amallariga oid jumlani to‘ldiring.',
          template: 'Suratning keraksiz chetlarini kesib olish {{0}}, qiyshiq ufqni burchakka burib to‘g‘rilash {{1}}, tasvirni chapdan o‘ngga ko‘zgudek almashtirish esa {{2}} deyiladi.',
          blanks: [
            { options: ['Crop', 'Flip', 'Zoom'], answer: 'Crop' },
            { options: ['Rotate', 'Resize', 'Blur'], answer: 'Rotate' },
            { options: ['Flip Horizontal', 'Crop', 'Invert'], answer: 'Flip Horizontal' },
          ],
          hint: 'Kesish = Crop; Burish = Rotate; Ko‘zgu = Flip.',
          explanation: 'Crop kadrni qisqartiradi, Rotate aylantiradi, Flip esa ko‘zgu aksini beradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Fotosuratning orqasidagi keraksiz bo‘sh devor va odamlarni olib tashlash uchun qaysi amal bajariladi?',
        options: ['Crop (Qirqish)', 'Flip Vertical', 'Blur', 'Sharpen'],
        answer: 0,
        explanation: 'Crop tasvirning ortiqcha qirralarini kesib tashlaydi.',
      },
      {
        prompt: 'Matn yozilgan belgini "Flip Horizontal" qilsak nima sodir bo‘ladi?',
        options: ['Matn ko‘zgu aksida teskari bo‘lib qoladi', 'Matn kattalashadi', 'Rasm oq-qora bo‘ladi', 'Fayl ZIP bo‘ladi'],
        answer: 0,
        explanation: 'Gorizontal ko‘zgu aksi chap va o‘ng tomonni almashtiradi, shuning uchun matn teskari ko‘rinadi.',
      },
      {
        prompt: 'Crop va Resize amallarining asosiy farqi nimada?',
        options: ['Crop tasvir qismini kesib tashlaydi, Resize esa butun rasm o‘lchamini kattalashtiradi/kichraytiradi', 'Farqi yo‘q', 'Resize faqat matn uchun', 'Crop rasmni aylantiradi'],
        answer: 0,
        explanation: 'Crop kadr tarkibini qisqartiradi, Resize esa piksel o‘lchamini masshtablaydi.',
      },
      {
        prompt: 'Teskari (boshi pastda) tushgan suratni to‘g‘rilash uchun necha gradus aylantirish (Rotate) kerak?',
        options: ['180°', '90°', '45°', '360°'],
        answer: 0,
        explanation: '180 daraja aylantirish tasvirni to‘liq o‘nglaydi.',
      },
      {
        prompt: 'Dengiz ufqi biroz qiyshiq tushgan suratni to‘g‘rilash uchun qaysi ikki amal ketma-ket ishlatiladi?',
        options: ['Kichik burchakka Rotate (Straighten), so‘ng burchak chetlarini Crop qilish', 'Flip Vertical va Invert', 'Faqat Brightness oshirish', 'ZIP arxivlash'],
        answer: 0,
        explanation: 'Biroz aylantirilganda burchaklarda bo‘sh qismlar qoladi, ularni Crop tekislaydi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda bitta qiyshiq va fonli rasmni Crop + Rotate orqali jonli tahrirlash.',
      timing: 'Crop 15 daq, Rotate vs Flip 15 daq, FillBlank va quiz 15 daq.',
      assessment: 'Rotate 180° va Flip Vertical o‘rtasidagi farqni aniq tushuntirish.',
      homework: 'Telefon yoki kompyuteringizda biror suratni qirqib (Crop) va tekislab, asl va natijani solishtiring.',
    },
  },
  {
    id: 'g9-l38',
    grade: 9,
    no: 38,
    part: '3-chorak',
    title: 'Tasvir rangi, yorqinligi, kontrasti va aniqligi boshqarish',
    kind: 'dars',
    hours: 1,
    tools: ['ImageLab', 'Yorqinlik / Kontrast', 'Aniqlik (Sharpness)', 'Grayscale'],
    objectives: [
      'O‘quvchi Yorqinlik (Brightness), Kontrast (Contrast), To‘yinganlik (Saturation) va Aniqlik (Sharpness) tushunchalarini farqlaydi.',
      'O‘quvchi rasmni qorong‘i yoki xira holatdan sifatli ko‘rinishga keltirish uchun rang va yorug‘lik parametrlarini sozlaydi.',
    ],
    intro:
      'Qorong‘ida olingan xira suratni tashlab yuborishga shoshilmang! Yorqinlik (Brightness), Kontrast (Contrast) va Aniqlik (Sharpness) ni to‘g‘ri sozlab, oddiy rasmni professional ko‘rinishga keltirish mumkin.',
    sections: [
      {
        heading: 'Yorqinlik (Brightness) va Kontrast (Contrast)',
        body: 'Yorqinlik (Brightness) tasvirning umumiy yorug‘lik yoki qorong‘ilik darajasini bir tekis oshiradi/kamaytiradi. Kontrast esa eng yorug‘ (oq) va eng qorong‘i (qora) nuqtalar orasidagi farqni kuchaytiradi: kontrast oshsa, ranglar yanada ajralib turadi va matn aniqroq o‘qiladi; haddan tashqari oshsa esa tafsilotlar yo‘qoladi.',
        example: 'Qorong‘i xonada olingan suratda Brightness +15%, Contrast +10% qilinsa tafsilotlar ochiladi.',
        tip: 'Skanerlangan oq-qora varaq xira bo‘lsa, Contrast ni biroz oshirish harflarni qoraytirib, fonni oqartiradi.',
      },
      {
        heading: 'Rang tizimi, To‘yinganlik va Aniqlik (Sharpness)',
        body: 'Rang chuqurligi va rejimlari: RGB (ekranlar uchun Qizil-Yashil-Ko‘k), CMYK (bosmaxona uchun), Grayscale (kulrang oq-qora), Black & White (faqat 1-bit oq va qora). Saturation — ranglar jonliligi. Sharpness (Aniqlik) — obyekt chetlaridagi kontrastni oshirib, biroz xira rasmni tiniqlashtiradi.',
        example: 'Gazetaga oq-qora chop etiladigan rasm avval Grayscale rejimiga o‘tkaziladi, aks holda ranglar bosmada noaniq kulrang bo‘lib chiqadi.',
      },
    ],
    keyTerms: [
      { term: 'Brightness (Yorqinlik)', definition: 'Tasvirning umumiy yorug‘lik darajasini o‘zgartiruvchi parametr.' },
      { term: 'Contrast (Kontrast)', definition: 'Eng yorug‘ va eng qorong‘i sohalar orasidagi keskinlik farqi.' },
      { term: 'Sharpness (Aniqlik)', definition: 'Obyekt qirralarini keskinlashtirib, tasvir tiniqligini oshirish.' },
      { term: 'Grayscale', definition: 'Rangli tasvirni kulrang tuslardagi oq-qora ko‘rinishga o‘girish.' },
    ],
    steps: [
      '1. Quyidagi ImageLab studiyasida slayderlar bilan yorqinlik va kontrastni o‘zgartirib ko‘ring.',
      '2. Maqsadli sozlamalarga (Brightness: 115%, Contrast: 120%, Rotate: 90°) yetkazing.',
      '3. RGB va CMYK rang modellarining farqini daftariga qayd eting.',
    ],
    practice: [
      {
        task: 'Skanerlangan xira test varag‘ini o‘qish osonlashishi uchun qaysi ikki parametrni o‘zgartirish maʼqul?',
        expected: 'Contrast ni oshirish va Brightness ni moslash (yoki Sharpness qo‘shish).',
        difficulty: 'oson',
      },
      {
        task: 'Veb-sayt uchun RGB, bosmaxonada kitob chiqarish uchun esa nima uchun CMYK ishlatiladi?',
        expected: 'Monitorlar yorug‘lik chiqaradi (RGB — qo‘shiluvchi ranglar), qog‘oz esa siyoh bilan yorug‘likni yutadi (CMYK — ayiriluvchi ranglar).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l38-g1',
        num: '01',
        title: 'ImageLab: Fotolaboratoriya sozlamalari',
        topic: 'Tasvir rangi va yorug‘ligi',
        difficulty: 'O‘rta',
        engine: 'imagelab',
        config: {
          prompt: 'Qorong‘i va yonbosh olingan manzara suratini tahrirlang: Brightness = 115%, Contrast = 120%, Rotate = 90°, FlipH = o‘chiq.',
          subject: 'landscape',
          target: {
            brightness: 115,
            contrast: 120,
            rotate: 90,
            flipH: false,
          },
          tolerance: 5,
          hint: 'Yorqinlik slayderini 115 ga, Kontrastni 120 ga suring va "90° Aylantir" tugmasini bosing.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Tasvirning eng yorug‘ va eng qorong‘i joylari orasidagi farqni oshiruvchi parametr qaysi?',
        options: ['Kontrast (Contrast)', 'Burish (Rotate)', 'Qirqish (Crop)', 'DPI'],
        answer: 0,
        explanation: 'Kontrast yorug‘ joylarni yorug‘roq, qorong‘i joylarni to‘qroq qilib tafovutni kuchaytiradi.',
      },
      {
        prompt: 'Rangli fotosuratni kulrang tuslardagi oq-qora ko‘rinishga o‘tkazish rejimi nima deyiladi?',
        options: ['Grayscale', 'RGB', 'HTML', 'Vector'],
        answer: 0,
        explanation: 'Grayscale qora va oq orasidagi 256 xil kulrang tusdan foydalanadi.',
      },
      {
        prompt: 'Tasvir chetlari biroz xira (blur) chiqqanda ularni tiniqlashtirish uchun qaysi amal qo‘llanadi?',
        options: ['Sharpness (Aniqlikni oshirish)', 'Flip Vertical', 'Watermark', 'Compress'],
        answer: 0,
        explanation: 'Sharpen filtri chegara piksellari kontrastini oshirib aniqlik beradi.',
      },
      {
        prompt: 'Kompyuter monitorlari tasvir ko‘rsatishda qaysi asosiy rang modelidan foydalanadi?',
        options: ['RGB (Red, Green, Blue)', 'CMYK', 'PNG', 'CSV'],
        answer: 0,
        explanation: 'Ekran piksellari qizil, yashil va ko‘k yorug‘lik nurlarini aralashtiradi.',
      },
      {
        prompt: 'Yorqinlik (Brightness) haddan tashqari 100% ga oshirib yuborilsa nima bo‘ladi?',
        options: ['Surat juda oqarib, yorug‘ joylardagi tafsilotlar yo‘qoladi (overexposed)', 'Fayl ZIP bo‘ladi', 'Rasm 90° aylanadi', 'Hech narsa o‘zgarmaydi'],
        answer: 0,
        explanation: 'Haddan ortiq yorqinlik rasmni oq dog‘ga aylantirib detalni yo‘qotadi.',
      },
    ],
    teacherNotes: {
      method: 'ImageLab o‘yinida slayderlarni surish orqali real vaqtdagi vizual o‘zgarishni tushuntirish.',
      timing: 'Brightness/Contrast 15 daq, RGB/CMYK/Sharpness 15 daq, ImageLab va quiz 15 daq.',
      assessment: 'ImageLab laboratoriya topshirig‘ini aniq bajarish.',
      homework: 'RGB va CMYK rang modellari qo‘llanish sohasi bo‘yicha 3 qatorli eslatma yozing.',
    },
  },
  {
    id: 'g9-l39',
    grade: 9,
    no: 39,
    part: '3-chorak',
    title: 'Sahifa maketi. Maqsad va auditoriyaga mos hujjat yaratish uchun dasturiy uskunalardan foydalanish',
    kind: 'dars',
    hours: 1,
    tools: ['Word / Writer', 'Margins / Orientation', 'Columns / Page Break'],
    objectives: [
      'O‘quvchi sahifa sozlamalarini (Margins, Portrait/Landscape yo‘nalishi, A4/A5 o‘lchami, Ustunlar — Columns) maqsadga qarab sozlaydi.',
      'O‘quvchi hujjatni chiroyli maketlashda bo‘sh qator (Enter) bosib o‘tish o‘rniga Page Break va Section Break dan foydalanishni biladi.',
    ],
    intro:
      'Yaxshi yozilgan maqola ham noto‘g‘ri sahifa chetlari (Margins) yoki bo‘sh satrlar bilan surilgan betlar tufayli tartibsiz ko‘rinishi mumkin. Sahifa maketini to‘g‘ri qurish — professional hujjatning asosidir.',
    sections: [
      {
        heading: 'Sahifa o‘lchami, yo‘nalishi va hoshiyalar (Margins)',
        body: 'Portrait (Kitobiy — vertikal) odatiy xat, hisobot va darsliklar uchun; Landscape (Albom — gorizontal) esa keng jadvallar, plakatlar, taqvim va slaydlar uchun qulay. Margins (Hoshiyalar) — sahifa chetlaridagi bo‘sh joy (odatda 2–2.5 sm; buklet yoki kitob tikiladigan chetda Gutter qo‘shiladi). Gazeta va maktab byulletenlarida matnni o‘qish osonlashishi uchun sahifa 2 yoki 3 ustunga (Columns) bo‘linadi.',
        example: '12 ustunli katta Excel hisobotini Word ga qo‘yganda sahifa sig‘ishi uchun faqat o‘sha sahifaga "Landscape" yo‘nalish beriladi.',
        tip: 'Yangi sahifaga o‘tish uchun hech qachon 20 marta `Enter` bosmang — tepaga matn qo‘shilsa hammasi surilib ketadi! Buning o‘rniga `Ctrl + Enter` (Page Break) bosing.',
      },
      {
        heading: 'Page Break va Section Break farqi',
        body: 'Page Break (Sahifa ajratgich) matnni darhol keyingi yangi sahifadan boshlaydi. Section Break (Bo‘lim ajratgich) esa hujjat ichida mustaqil bo‘lim yaratadi: masalan, 1-sahifa Portrait bo‘lib, 2-sahifani Landscape qilish, yoki sahifa yuqorisini 1 ustun, pastini 2 ustun qilish uchun albatta Section Break kerak!',
        example: 'Referatning titul varag‘ida raqam ko‘rinmasligi, 2-betdan raqamlanishi uchun orasiga Section Break qo‘yiladi.',
      },
    ],
    keyTerms: [
      { term: 'Orientation (Portrait / Landscape)', definition: 'Sahifaning vertikal (kitobiy) yoki gorizontal (albom) joylashuvi.' },
      { term: 'Margins (Hoshiyalar)', definition: 'Matn va qog‘oz cheti o‘rtasidagi bo‘sh chegara masofasi.' },
      { term: 'Page Break (Ctrl+Enter)', definition: 'Keyingi matnni majburan yangi sahifa boshidan boshlovchi belgi.' },
      { term: 'Section Break', definition: 'Bitta hujjat ichida turli sahifa yo‘nalishi, ustun yoki Header qo‘llash imkonini beruvchi bo‘lim ajratgich.' },
    ],
    steps: [
      '1. Hujjatda Layout → Size (A4) va Margins (Normal 2.5 sm) ni tekshiring.',
      '2. Gazeta uslubida 2 ustunli (Columns) maket yarating.',
      '3. `Section Break (Next Page)` qo‘yib, bitta sahifani Landscape ga aylantiring.',
    ],
    practice: [
      {
        task: 'Hujjatning 1–2-sahifasi Portrait, 3-sahifasi esa keng jadval uchun Landscape bo‘lishi kerak. Qaysi ajratgich ishlatiladi?',
        expected: '2-sahifa oxiriga va 3-sahifa oxiriga `Section Break (Next Page)` qo‘yiladi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Maktab devoriy gazetasi uchun sahifani necha ustunga bo‘lish va qaysi orientatsiya qulayroq?',
        expected: '2–3 ustun (Columns) ko‘zni charchatmaydi; devoriy plakat uchun A3 Landscape yoki Portrait mos keladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g9-l39-g1',
        num: '01',
        title: 'Sahifa maketi elementlari',
        topic: 'Sahifa maketlash',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'Sahifa maketi atamalarini ularning aniq vazifasi bilan juftlang.',
          pairs: [
            { left: 'Landscape', right: 'Keng jadval yoki sertifikat uchun gorizontal sahifa yo‘nalishi' },
            { left: 'Columns', right: 'Gazeta yoki buklet kabi matnni bir necha ustunlarga bo‘lish' },
            { left: 'Page Break', right: 'Enter bosmasdan yangi sahifaga aniq o‘tish belgisi' },
            { left: 'Section Break', right: 'Bitta hujjatning bir qismini boshqa yo‘nalish yoki ustunda sozlash' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '15 ustunli keng moliyaviy jadvalni qog‘ozga sig‘dirish uchun qaysi sahifa yo‘nalishi eng mos?',
        options: ['Landscape (Albom)', 'Portrait (Kitobiy)', '1 ustunli A6', 'Super-tor hoshiya'],
        answer: 0,
        explanation: 'Landscape kenglik bo‘yicha ko‘proq joy beradi.',
      },
      {
        prompt: 'Yangi bobni doim yangi sahifadan boshlash uchun eng to‘g‘ri usul qaysi?',
        options: ['Page Break (Ctrl+Enter) qo‘yish', '15 marta Enter bosish', 'Probel bilan surish', 'Shriftni kattalashtirish'],
        answer: 0,
        explanation: 'Page Break oldingi sahifaga matn qo‘shilganda ham keyingi bobni aniq yangi sahifa boshida saqlaydi.',
      },
      {
        prompt: 'Hujjatning faqat 4-sahifasini Landscape, qolganlarini Portrait qilish uchun nima kerak?',
        options: ['Section Break (Bo‘lim ajratgich)', 'Bold tugmasi', 'Line spacing', 'Watermark'],
        answer: 0,
        explanation: 'Section Break har bir bo‘lim uchun mustaqil sahifa sozlamalarini beradi.',
      },
      {
        prompt: 'Matn va sahifa chetlari orasidagi bo‘sh joy qanday ataladi?',
        options: ['Margins (Hoshiyalar)', 'Footer', 'Indent', 'Bullet'],
        answer: 0,
        explanation: 'Top, Bottom, Left, Right hoshiyalari Margins deb ataladi.',
      },
      {
        prompt: 'Maktab axborot byulletenini o‘qish oson va gazetasimon bo‘lishi uchun nima qo‘llanadi?',
        options: ['Columns (2 yoki 3 ustunli matn)', 'Juda uzun 1 satr', '5pt shrift', 'Matnni vertikal yozish'],
        answer: 0,
        explanation: 'Qisqa satrli ustunlar ko‘z harakatini yengillashtiradi va sahifaga ko‘p ma’lumot sig‘diradi.',
      },
    ],
    teacherNotes: {
      method: 'Enter bosib surilgan buzuq hujjat bilan Page Break qo‘yilgan toza hujjatni solishtirib ko‘rsatish.',
      timing: 'Margins/Orientation 15 daq, Columns/Page & Section Break 15 daq, Match va quiz 15 daq.',
      assessment: 'Page Break va Section Break farqini aniq bilish.',
      homework: '2 sahifali maktab byulleteni maketini tuzib, 1-sahifada 2 ustunli yangiliklar joylashtiring.',
    },
  },
  {
    id: 'g9-l40',
    grade: 9,
    no: 40,
    part: '3-chorak',
    title: 'Hujjatga obyektlarni joylashtirish',
    kind: 'dars',
    hours: 1,
    tools: ['Word / Writer', 'Jadvallar', 'Shakllar / SmartArt', 'Diagramma'],
    objectives: [
      'O‘quvchi hujjatga matndan tashqari obyektlarni — rasm, jadval, grafik shakl (Shapes), diagramma va belgilarni (Symbols) joylashtira oladi.',
      'O‘quvchi obyektlarni guruhlash (Group), qatlam tartibini (Bring Forward / Send Backward) o‘zgartirish va izoh (Caption) berishni qo‘llaydi.',
    ],
    intro:
      'Zamonaviy hisobot va taqdimotlar faqat matndan iborat bo‘lmaydi: ularda jadvallar, blok-sxema shakllari, Excel dan ko‘chirilgan diagrammalar va formulalar uyg‘unlashadi.',
    sections: [
      {
        heading: 'Jadval, Shakl (Shapes), Diagramma va Obyekt joylashtirish',
        body: 'Insert menyusi orqali hujjatga quyidagilar qo‘shiladi: 1) Table (Jadval) — ma’lumotlarni qator va ustunlarda tartiblash; 2) Shapes (Shakllar) — o‘qlar, to‘rtburchaklar, blok-sxemalar chizish; 3) SmartArt — ierarxiya va jarayon sxemalarini tez yasash; 4) Chart / Embedded Excel — hisoblangan grafiklar; 5) Equation va Symbols — matematik belgilar (`∑`, `π`, `≤`).',
        example: 'Maktab hisobotida "1-rasm: Kompyuter tizimi" kabi raqamlangan ostki yozuv (Caption) qo‘yish ilmiy hujjat madaniyatidir.',
        tip: 'Bir nechta shakllardan (masalan, blok-sxema) yasalganda ularni belgilab `Group` qiling — shunda keyin siljitganda tarqalib ketmaydi!',
      },
      {
        heading: 'Obyektlar tartibi (Z-order) va Joylashtirish usullari',
        body: 'Ikkita obyekt (masalan, rasm va ustidagi matnli shakl) ustma-ust tushganda `Bring to Front` (Oldinga chiqarish) yoki `Send to Back` (Orqaga yuborish) orqali ularning ustma-ust tartibi boshqariladi. Shuningdek, obyektlarni Nusxalash-Qo‘yish (Embedded) va Bog‘lash (Linked — manba Excel yangilansa Word dagi grafik ham yangilanadi) usullari bor.',
        example: 'Taqdimotdagi diagramma har hafta Excel da yangilansa, uni "Link & Keep Source" bilan qo‘yish vaqtni tejaydi.',
      },
    ],
    keyTerms: [
      { term: 'Group (Guruhlash)', definition: 'Bir nechta alohida shakl yoki rasmni bitta yaxlit obyektga birlashtirish.' },
      { term: 'Z-order (Bring Forward / Send Back)', definition: 'Ustma-ust tushgan obyektlarning qaysi biri tepada ko‘rinishini belgilash.' },
      { term: 'Caption (Sarlavha/Izoh)', definition: 'Rasm yoki jadval ostiga qo‘yiladigan tartib raqamli tushuntirish matni.' },
      { term: 'Embedded vs Linked', definition: 'Embedded — hujjat ichiga to‘liq nusxalanadi; Linked — asl fayldagi o‘zgarishni aks ettiradi.' },
    ],
    steps: [
      '1. Hujjatga 3×4 jadval va 3 ta blok-sxema shakli (Shape) joylashtiring.',
      '2. Shakllarni bog‘lovchi strelka qo‘shib, hammasini bitta Group ga birlashtiring.',
      '3. Rasm ostiga "1-rasm: Tarmoq tuzilmasi" Caption qo‘shing.',
    ],
    practice: [
      {
        task: 'Hujjatda 4 ta shakl va 3 ta strelkadan blok-sxema chizdingiz, lekin matn qo‘shilganda shakllar siljib aralashib ketdi. Muammoni qanday hal qilasiz?',
        expected: 'Barcha shakllar va strelkalarni Shift bilan tanlab `Group` qilish orqali.',
        difficulty: 'oson',
      },
      {
        task: 'Har oyda ma’lumotlari yangilanadigan Excel jadvalini Word hisobotiga Embedded yoki Linked usulda joylashtirish afzalmi?',
        expected: 'Linked (Bog‘langan) usul: Excel fayli yangilanganda Word hisobotidagi jadval ham avtomatik yangilanadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l40-g1',
        num: '01',
        title: 'Hujjatda Insert uskunasini top',
        topic: 'Obyektlarni joylashtirish',
        difficulty: 'Oson',
        engine: 'hotspot',
        config: {
          prompt: 'Hujjatga jadval, rasm yoki shakl kabi tashqi obyektlarni qo‘shish uchun Word menyusidagi kerakli tugmani bosing!',
          appTitle: 'Matn muharriri (Word)',
          layout: 'word',
          targetZoneId: 'insert',
          zones: [
            { id: 'bold', label: 'Qalin (Bold)', icon: 'B', group: 'Shrift', hintText: 'Matnni qalin qilish' },
            { id: 'align', label: 'Tekislash (Align)', icon: '≡', group: 'Abzats', hintText: 'Matnni chap/markazga tekislash' },
            { id: 'insert', label: 'Qo‘shish (Insert)', icon: '⊞', group: 'Obyektlar', hintText: 'Rasm, jadval, shakl, diagramma' },
            { id: 'header', label: 'Header / Footer', icon: '📄', group: 'Sahifa', hintText: 'Sarlavha va kolontitul' },
            { id: 'spell', label: 'Imlo tekshiruvi', icon: '✓', group: 'Tekshiruv', hintText: 'Xatolarni topish' },
          ],
          explanation: 'Rasm, jadval, Shapes, SmartArt va diagrammalar "Insert" (Qo‘shish) bo‘limidan joylashtiriladi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Chizilgan bir nechta shakl va strelkalarni bir butun qilib ko‘chirish uchun qaysi amal bajariladi?',
        options: ['Group (Guruhlash)', 'Crop', 'Sort', 'Split'],
        answer: 0,
        explanation: 'Group bir nechta elementni bitta obyektga birlashtiradi.',
      },
      {
        prompt: 'Rasm matnli to‘rtburchakni yopib qo‘yganda, rasmni orqaga o‘tkazish uchun qaysi buyruq beriladi?',
        options: ['Send to Back / Send Backward', 'Bring to Front', 'Bold', 'Copy'],
        answer: 0,
        explanation: 'Send to Back obyektni eng pastki qatlamga tushiradi.',
      },
      {
        prompt: 'Excel dagi jadval o‘zgarganda Word dagi nusxasi ham avtomatik yangilanishi uchun qaysi joylashtirish usuli tanlanadi?',
        options: ['Linked (Bog‘langan obyekt)', 'Oddiy rasm (PNG)', 'Screenshot', 'Plain text'],
        answer: 0,
        explanation: 'Linked obyekt asl manba faylga bog‘langan bo‘lib, o‘zgarishlarni aks ettiradi.',
      },
      {
        prompt: 'Ilmiy hisobotlarda har bir rasm va jadval ostidagi tartib raqamli izoh ("1-rasm: ...") nima deb ataladi?',
        options: ['Caption', 'Watermark', 'Bookmark', 'Macro'],
        answer: 0,
        explanation: 'Caption obyektlarga raqamlangan nom beradi va avtomatik rasm mundarijasi tuzishga yordam beradi.',
      },
      {
        prompt: 'Tashkiliy tuzilma (direktor → o‘rinbosarlar → o‘qituvchilar) sxemasini tez chizish uchun eng qulay vosita qaysi?',
        options: ['SmartArt (Hierarchy)', 'Find & Replace', 'Margins', 'Thesaurus'],
        answer: 0,
        explanation: 'SmartArt tayyor grafik sxemalar (ierarxiya, sikl, jarayon) yaratishga mo‘ljallangan.',
      },
    ],
    teacherNotes: {
      method: 'Blok-sxema chizish va Group + Align ni amalda ko‘rsatish.',
      timing: 'Obyektlar 15 daq, Group/Z-order/Linked 15 daq, Hotspot va quiz 15 daq.',
      assessment: 'Hotspot va guruhlash/bog‘lash tamoyilini tushunish.',
      homework: 'Word/Writer da 3 qadamli algoritm sxemasini Shapes bilan chizib guruhlang.',
    },
  },
  {
    id: 'g9-l41',
    grade: 9,
    no: 41,
    part: '3-chorak',
    title: 'Header va Footer maydonlarini yaratish',
    kind: 'dars',
    hours: 1,
    tools: ['Word / Writer', 'Header & Footer', 'Dynamic Fields (Page/Date)'],
    objectives: [
      'O‘quvchi Header (yuqori kolontitul) va Footer (pastki kolontitul) vazifasini hamda barcha sahifalarda avtomatik takrorlanish mexanizmini tushunadi.',
      'O‘quvchi kolontitullarga avtomatik dinamik maydonlar (Sahifa raqami, Jami sahifalar, Sana, Fayl nomi, Muallif) joylashtirishni va "Different First Page" ni qo‘llaydi.',
    ],
    intro:
      '100 betlik kitobning har bir sahifasiga qo‘lda "1-bet", "2-bet" va kitob nomini yozib chiqish shart emas! Header va Footer maydonlariga bir marta dinamik maydon qo‘ysangiz, kompyuter barcha betlarda o‘zi avtomatik yangilab turadi.',
    sections: [
      {
        heading: 'Header va Footer nima va ularda nima joylashadi?',
        body: 'Header — sahifaning eng yuqori hoshiyasidagi takrorlanuvchi hudud (odatda kompaniya logotipi, hujjat sarlavhasi, bob nomi, sana). Footer — sahifaning eng pastki hoshiyasidagi hudud (odatda sahifa raqami `Page X of Y`, muallif ismi, fayl nomi/manzili, maxfiylik belgisi). Ularni tahrirlash uchun sahifa tepasiga yoki pastiga ikki marta chertish kifoya.',
        example: 'Imtihon varaqasi Footer qismida `1-sahifa / 4` va fayl nomi turishi varaqlar aralashib ketishining oldini oladi.',
        tip: 'Sahifa raqamini klaviaturadan `1` deb qo‘lda yozmang — hamma sahifada `1` chiqib qoladi! Albatta `Insert → Page Number` (Avtomatik maydon) dan foydalaning.',
      },
      {
        heading: 'Dinamik maydonlar va "Different First Page"',
        body: 'Dinamik maydonlar (Automated Fields): Page Number (joriy bet), Number of Pages (umumiy betlar soni), Date/Time (avtomatik yangilanadigan sana), File Name / File Path. Referat va kitoblarning 1-titul varag‘ida sahifa raqami va kolontitul ko‘rinmasligi uchun `Different First Page` (Birinchi sahifa farqli) belgilanadi. Turli boblarda har xil Header bo‘lishi uchun esa `Section Break` qo‘yilib, `Link to Previous` o‘chiriladi.',
        example: 'Maktab hisobotida: Header chapda — "9-sinf Informatika", o‘ngda — joriy sana; Footer o‘rtada — "2 / 10-bet".',
      },
    ],
    keyTerms: [
      { term: 'Header (Yuqori kolontitul)', definition: 'Har bir sahifa tepasida avtomatik takrorlanadigan sarlavha maydoni.' },
      { term: 'Footer (Pastki kolontitul)', definition: 'Har bir sahifa pastida avtomatik takrorlanadigan izoh va raqamlash maydoni.' },
      { term: 'Dinamik maydon (Field)', definition: 'Sahifa raqami, sana yoki fayl nomini kompyuter o‘zi avtomatik yangilab turuvchi kod.' },
      { term: 'Different First Page', definition: 'Titul (1-sahifa) da kolontitullarni yashirish yoki boshqacha qilish sozlamasi.' },
    ],
    steps: [
      '1. Hujjat tepasiga ikki marta bosib Header maydonini oching.',
      '2. Header chapiga loyiha nomini, o‘ngiga avtomatik Date maydonini qo‘ying.',
      '3. Footer ga `Page X of Y` avtomatik sahifa raqamini qo‘ying.',
      '4. `Different First Page` ni yoqib, titul sahifasidan raqamni olib tashlang.',
    ],
    practice: [
      {
        task: 'O‘quvchi 5 sahifali referatning birinchi sahifasi pastiga qo‘lda "1" raqamini yozdi, natijada barcha 5 sahifada "1" chiqib qoldi. Xato nimada va qanday tuzatiladi?',
        expected: 'U avtomatik `Page Number` maydoni o‘rniga oddiy matn yozgan. Uni o‘chirib, `Insert → Page Number` qo‘yish kerak.',
        difficulty: 'oson',
      },
      {
        task: 'Hujjatning 1-sahifasi muqova (raqamsiz), 2–5-sahifalar esa raqamli bo‘lishi uchun qaysi sozlama yoqiladi?',
        expected: 'Header & Footer menyusidan `Different First Page` katakchasini belgilash.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l41-g1',
        num: '01',
        title: 'Header va Footer qoidalari',
        topic: 'Kolontitullar',
        difficulty: 'Oson',
        engine: 'truefalse',
        config: {
          prompt: 'Header va Footer haqidagi tasdiqlarni tekshiring.',
          statements: [
            {
              text: 'Footer maydoniga qo‘lda "1" raqami yozilsa, barcha sahifalar "1, 2, 3" bo‘lib avtomatik raqamlanadi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Qo‘lda yozilgan matn hamma sahifada "1" bo‘lib qoladi; avtomatik raqamlash uchun Page Number maydoni kerak.',
            },
            {
              text: 'Muqova (1-sahifa) da sahifa raqamini yashirish uchun "Different First Page" funksiyasi ishlatiladi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Bu sozlama birinchi sahifa kolontitulini alohida qiladi.',
            },
            {
              text: 'Header va Footer ga avtomatik sana, fayl nomi va muallif kabi dinamik maydonlar qo‘shish mumkin.',
              isTrue: true,
              explanation: 'To‘g‘ri! Dinamik maydonlar hujjat ma’lumotlarini avtomatik ko‘rsatadi.',
            },
            {
              text: 'Header hujjatning eng pastki qismida joylashadi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Header tepada (Head — bosh), Footer esa pastda (Foot — oyoq) joylashadi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Har bir sahifaning yuqori qismida avtomatik takrorlanadigan hudud nima deyiladi?',
        options: ['Header (Yuqori kolontitul)', 'Footer', 'Margin', 'Watermark'],
        answer: 0,
        explanation: 'Header sahifaning tepa hoshiyasida joylashadi.',
      },
      {
        prompt: '50 betlik hisobotning barcha sahifalarini to‘g‘ri raqamlash uchun Footer ga nima qo‘yiladi?',
        options: ['Avtomatik Page Number maydoni', 'Qo‘lda 1 raqami', 'Space tugmasi', 'Line spacing'],
        answer: 0,
        explanation: 'Dinamik Page Number maydoni har bir sahifaning haqiqiy tartib raqamini chiqaradi.',
      },
      {
        prompt: 'Hujjatning faqat 1-titul varag‘ida Header va Footer ko‘rinmasligi uchun qaysi belgi yoqiladi?',
        options: ['Different First Page', 'Bold', 'Landscape', 'Mirror Margins'],
        answer: 0,
        explanation: 'Different First Page birinchi sahifani alohida kolontitul bilan qoldirish imkonini beradi.',
      },
      {
        prompt: 'Qaysi ma’lumot odatda Footer maydoniga qo‘yiladi?',
        options: ['Sahifa raqami (`X of Y`), fayl nomi yoki muallif ismi', 'Asosiy maqolaning barcha matni', 'Katta 4K video', 'Dastur kodi'],
        answer: 0,
        explanation: 'Footer qisqa navigatsiya va metama’lumotlar uchun mo‘ljallangan.',
      },
      {
        prompt: 'Hujjatning 2-bo‘limida 1-bo‘limdan farqli Header yozish uchun nimalar qilish kerak?',
        options: ['Section Break qo‘yish va yangi bo‘limda "Link to Previous" ni o‘chirish', 'Faqat Enter bosish', 'Faylni PDF qilish', 'Rasmni o‘chirish'],
        answer: 0,
        explanation: '`Link to Previous` o‘chirilmasa, yangi bo‘limdagi o‘zgarish oldingi bo‘limni ham o‘zgartirib yuboradi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda 3 sahifali hujjat yaratib, Page X of Y va Different First Page ni jonli sozlash.',
      timing: 'Header/Footer 15 daq, Dinamik maydonlar va Bo‘limlar 15 daq, TrueFalse va quiz 15 daq.',
      assessment: 'Avtomatik maydon bilan oddiy matn farqini bilish.',
      homework: '3 sahifali hujjat tayyorlab, 1-betni raqamsiz, 2–3-betlarni esa Header (ismingiz) va Footer (Page X of Y) bilan bezang.',
    },
  },
  {
    id: 'g9-l42',
    grade: 9,
    no: 42,
    part: '3-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Bilim sinovi', 'Fayl, Grafika va Maket'],
    objectives: [
      'O‘quvchi 33–41-darslar (Fayl formatlari, Siqish, Tasvir tahriri, Aspect Ratio, Crop/Rotate/Flip, Brightness/Contrast, Sahifa maketi, Obyektlar va Header/Footer) bo‘yicha bilimlarini tekshiradi.',
      'O‘quvchi amaliy grafik va hujjat maketlash vazifalarini mustaqil bajaradi.',
    ],
    intro:
      'Ushbu nazorat ishida fayllarni boshqarish va siqish, rastr/vektor tasvirlarni tahrirlash qoidalari hamda hujjat sahifasini professional maketlash bo‘yicha olgan bilimlaringiz baholanadi.',
    sections: [
      {
        heading: 'Nazorat ishi uchun takrorlash jadvali',
        body: 'Asosiy nuqtalar: 1) `.csv` (jadval), `.pdf` (o‘zgarmas hujjat), `.png` (shaffof rasm), `.svg` (vektor); 2) Lossless (`ZIP`) vs Lossy (`JPG/MP3`); 3) Aspect ratio (burchakdan tortish, `Lock Aspect Ratio`); 4) Crop (qirqish) vs Rotate (aylantirish) vs Flip (ko‘zgu); 5) Page Break vs Section Break va `Different First Page`.',
        example: 'Agar 1000×500 rasm enini 500 px ga tushirsak, bo‘yi buzilmasligi uchun 250 px bo‘ladi.',
        tip: 'Krossvord va testda atamalarning aniq maʼnosiga eʼtibor bering.',
      },
    ],
    keyTerms: [
      { term: 'Lossless vs Lossy', definition: 'Ma’lumotni yo‘qotmasdan (ZIP) va mayda tafsilotlarni olib tashlab (JPG/MP3) siqish.' },
      { term: 'Aspect Ratio', definition: 'Tasvir kengligi va balandligi proporsiyasi (16:9, 4:3).' },
      { term: 'Section Break', definition: 'Bir hujjatda har xil sahifa yo‘nalishi va Header/Footer qo‘llash.' },
      { term: 'Header & Footer', definition: 'Sahifa tepasi va pastidagi avtomatik takrorlanuvchi maydonlar.' },
    ],
    steps: [
      '1. Krossvordda 33–41-darslarning asosiy atamalarini yeching.',
      '2. Amaliy hisob va hujjat maketi vazifalarini bajaring.',
      '3. 5 ta nazorat testini yakunlang.',
    ],
    practice: [
      {
        task: '1920×1080 rasmni nisbatini buzmay kengligini 960 px ga kichraytiring — balandligi necha piksel bo‘ladi?',
        expected: '960 = 1920 ÷ 2 bo‘lgani uchun, balandlik = 1080 ÷ 2 = 540 px.',
        difficulty: 'oson',
      },
      {
        task: 'Hisobotning 1-beti muqova (raqamsiz), 2-beti Portrait matn, 3-beti esa keng Landscape jadval bo‘lishi uchun qanday 2 ta sozlama ishlatiladi?',
        expected: 'Muqova uchun `Different First Page`; 2- va 3-betlar orasiga `Section Break (Next Page)` va 3-betga `Landscape`.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l42-g1',
        num: '01',
        title: 'Grafika va Hujjat maketi krossvordi',
        topic: 'Fayl, grafika va maket',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: 'Grafika va sahifa maketiga oid inglizcha/xalqaro atamalarni kiriting.',
          clues: [
            { id: 'c1', clue: 'Tasvirning ortiqcha chetlarini kesib olish amali (4 harf)', answer: 'CROP' },
            { id: 'c2', clue: 'Sahifaning eng yuqorisida takrorlanadigan sarlavha hududi (6 harf)', answer: 'HEADER' },
            { id: 'c3', clue: 'Sahifaning gorizontal (albom) yo‘nalishi (9 harf)', answer: 'LANDSCAPE' },
            { id: 'c4', clue: 'Shaffof fonni saqlovchi yo‘qotishsiz rasm formati (3 harf)', answer: 'PNG' },
          ],
          hint: 'Javoblar: CROP, HEADER, LANDSCAPE, PNG.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Hujjatdagi matnning rasm atrofidan tekis oqib tushishi uchun qaysi amal qo‘llanadi?',
        options: ['Wrap Text (Square/Tight)', 'Page Break', 'Watermark', 'Lossy compress'],
        answer: 0,
        explanation: 'Text Wrapping matn va rasm munosabatini boshqaradi.',
      },
      {
        prompt: 'Qaysi siqish usulida fayl arxivdan ochilganda barcha ma’lumot 100% tiklanadi?',
        options: ['Lossless (Yo‘qotishsiz, masalan ZIP)', 'Lossy (JPG)', 'MP3', 'Crop'],
        answer: 0,
        explanation: 'Lossless algoritm asl baytlarni o‘zgartirmasdan qayta tiklaydi.',
      },
      {
        prompt: 'Xira skanerlangan matn qog‘ozini o‘qilishi oson qilish uchun qaysi ikki tasvir sozlamasi ko‘proq yordam beradi?',
        options: ['Kontrast va Aniqlik (Contrast & Sharpness)', 'Flip Vertical', 'Watermark', 'Aspect Ratio'],
        answer: 0,
        explanation: 'Kontrast matnni fonda yaqqol ajratadi, aniqlik esa harf chetlarini tiniqlashtiradi.',
      },
      {
        prompt: 'Footer qismida barcha sahifalarda avtomatik o‘sib boradigan bet raqamini qo‘yish uchun nima tanlanadi?',
        options: ['Page Number dinamik maydoni', 'Qo‘lda "1" yozish', 'Shapes', 'Landscape'],
        answer: 0,
        explanation: 'Dinamik maydon sahifa soniga qarab raqamni avtomatik yangilaydi.',
      },
      {
        prompt: 'Bir nechta chizilgan shakllarni bitta obyektga birlashtirib ko‘chirish buyrug‘i nima?',
        options: ['Group', 'Split', 'Crop', 'Indent'],
        answer: 0,
        explanation: 'Group tanlangan barcha elementlarni yaxlit obyektga aylantiradi.',
      },
    ],
    teacherNotes: {
      method: 'Nazariy test va kichik amaliy Word/GIMP topshirig‘i kombinatsiyasi.',
      timing: 'Kirish 5 daq, Nazorat ishi 35 daq, Tahlil 5 daq.',
      assessment: 'Grafika va sahifa maketi vositalarini mustaqil qo‘llay olish.',
      homework: 'Keyingi darsga "Korporativ brend va stil (Corporate House Style)" haqida o‘ylab keling.',
    },
  },
];
