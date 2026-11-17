import type { Lesson } from './types';

export const GRADE_8_P1B: Lesson[] = [
  {
    id: 'g8-l10',
    grade: 8,
    no: 10,
    part: '1-yarim yillik',
    title: 'HTML tushunchasi va veb-sahifani sozlash',
    kind: 'dars',
    hours: 1,
    tools: ['HTML', 'VS Code / Notepad'],
    objectives: [
      'O‘quvchi HTML (HyperText Markup Language) veb-sahifalarning tuzilmasini yaratuvchi belgilash tili ekanini tushunadi.',
      'O‘quvchi standart HTML5 hujjat skeletini (`<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<body>`) yoza oladi va `.html` sifatida saqlab brauzerda ochadi.',
    ],
    intro:
      'Internetdagi har bir sayt — YouTube, Wikipedia yoki maktabingiz portali — brauzerga HTML kodi orqali tushuntiriladi. Bugun birinchi shaxsiy veb-sahifangizni yaratasiz!',
    sections: [
      {
        heading: 'HTML va teglar tushunchasi',
        body: 'HTML — dasturlash tili emas, veb-sahifa skeletini quruvchi belgilash tilidir (HyperText Markup Language). HTML buyruqlari uchburchak qavs ichidagi "teglar" (Tags) ko‘rinishida yoziladi. Ko‘p teglar juft bo‘ladi: ochuvchi `<p>` va yopuvchi `</p>`.',
        example: '`<!DOCTYPE html><html><head><title>Mening saytim</title></head><body>Salom, dunyo!</body></html>`',
        tip: 'Faylni saqlayotganda albatta `.html` kengaytmasi (masalan, `index.html`) bilan saqlang va yopuvchi tegda qiyshiq chiziq `/` ni unutmang!',
      },
      {
        heading: 'Head va Body bo‘limlari farqi',
        body: '`<head>` — sahifa haqidagi texnik ma’lumotlar (sarlavha tabda ko‘rinuvchi `<title>`, UTF-8 kodirovkasi, stillar) joylashadigan qism. `<body>` — foydalanuvchi brauzer oynasida ko‘radigan barcha matn, rasm va tugmalar joylashadigan asosiy tana qismidir.',
        example: '`<meta charset="UTF-8">` qo‘yilsa, o‘zbekcha "o‘", "g‘" harflari buzilmay chiroyli chiqadi.',
      },
    ],
    keyTerms: [
      { term: 'HTML', definition: 'Veb-sahifalarning tuzilishi va mazmunini belgilovchi gipermatn belgilash tili.' },
      { term: 'Teg (Tag)', definition: '`<...>` burchakli qavslar ichida yoziladigan HTML elementi belgisi.' },
      { term: '<head> / <title>', definition: 'Brauzer yorlig‘i (tab) nomi va sahifa sozlamalarini saqlovchi bo‘lim.' },
      { term: '<body>', definition: 'Ekranda ko‘rinadigan barcha veb-sahifa kontenti joylashadigan bo‘lim.' },
    ],
    steps: [
      '1. Notepad yoki VS Code dasturini oching.',
      '2. `<!DOCTYPE html>`, `<html>`, `<head><meta charset="UTF-8"><title>Ilk sahifam</title></head>` va `<body>` teglarini yozing.',
      '3. `<body>` ichiga o‘zingiz haqingizda 1 gap yozing va `index.html` nomi bilan saqlang.',
      '4. Fayl ustiga ikki marta bosib, Chrome/Firefox brauzerida ochilishini ko‘ring.',
    ],
    practice: [
      {
        task: 'HTML hujjat skeletini noldan yozib, brauzer yorlig‘ida "8-sinf Informatika" yozuvi chiqadigan qiling.',
        expected: 'Brauzer tabida "8-sinf Informatika" sarlavhasi ko‘rinadi.',
        difficulty: 'oson',
      },
      {
        task: 'O‘zbekcha harflar to‘g‘ri ko‘rinishi uchun `<head>` ichiga qaysi teg yozilishini qo‘shing.',
        expected: '`<meta charset="UTF-8">` qo‘shilib to‘g‘ri kodlash ta’minlanadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l10-g1',
        num: '01',
        title: 'Birinchi HTML skeletini qur',
        topic: 'HTML asosiy tuzilmasi',
        difficulty: 'Oson',
        engine: 'htmlplay',
        config: {
          prompt: 'To‘liq HTML sahifa yarating: <html>, <head> ichida <title>Mening sahifam</title> va <body> ichida <h1>Salom!</h1> bo‘lsin.',
          starterCode: '<!DOCTYPE html>\n<html>\n  <!-- head va body qo‘shing -->\n</html>',
          checks: [
            { label: '<head> tegi mavjud', pattern: '<head>' },
            { label: '<title>...</title> mavjud', pattern: '<title>.*</title>' },
            { label: '<body>...</body> mavjud', pattern: '<body>[\\s\\S]*</body>' },
            { label: '<h1> sarlavhasi yozilgan', pattern: '<h1>.*</h1>' },
          ],
          hint: '<head><title>Mening sahifam</title></head><body><h1>Salom!</h1></body>',
        },
      },
    ],
    quiz: [
      {
        prompt: 'HTML fayllari kompyuterga qaysi kengaytma bilan saqlanishi kerak?',
        options: ['.docx', '.html', '.sb3', '.xlsx'],
        answer: 1,
        explanation: 'Veb-sahifalar `.html` (yoki `.htm`) kengaytmasi bilan saqlanib brauzerda ochiladi.',
      },
      {
        prompt: 'Brauzerning yuqori yorlig‘i (tab) da ko‘rinadigan sahifa nomi qaysi teg ichiga yoziladi?',
        options: ['<body>', '<title>', '<h1>', '<p>'],
        answer: 1,
        explanation: '`<head>` bo‘limidagi `<title>` brauzer yorlig‘i sarlavhasini belgilaydi.',
      },
      {
        prompt: 'Foydalanuvchi sahifa oynasida ko‘radigan barcha matn va rasmlar qaysi teg ichida joylashadi?',
        options: ['<head>', '<body>', '<meta>', '<title>'],
        answer: 1,
        explanation: 'Sahifaning ko‘rinadigan asosiy kontenti `<body>...</body>` ichida yoziladi.',
      },
      {
        prompt: 'Yopuvchi teg ochuvchi tegdan nimasi bilan farq qiladi?',
        options: ['Katta harf bilan', 'Teg nomidan oldin `/` belgisi borligi bilan (masalan, `</body>`)', 'Qavssiz yozilishi bilan', 'Farqi yo‘q'],
        answer: 1,
        explanation: 'Yopuvchi juft teglarda `<` dan keyin qiyshiq chiziq `/` qo‘yiladi.',
      },
      {
        prompt: '`<!DOCTYPE html>` qatori sahifa boshida nimani bildiradi?',
        options: [
          'Hujjat zamonaviy HTML5 standartida yozilganligini brauzerga bildiradi',
          'Faylni o‘chiradi',
          'Rangni qizil qiladi',
          'Matnni yashiradi',
        ],
        answer: 0,
        explanation: 'DOCTYPE deklaratsiyasi brauzerga HTML5 rejimida ishlashni ko‘rsatadi.',
      },
    ],
    teacherNotes: {
      method: 'Oddiy matn muharririda kod yozib, brauzerda F5 (Refresh) bilan natijani ko‘rish siklini o‘rgatish.',
      timing: '10 daqiqa nazariya, 23 daqiqa ilk HTML fayl yaratish, 12 daqiqa HtmlPlay va test.',
      assessment: 'Juft teglar to‘g‘ri yopilib, fayl brauzerda bexato ochilganligi.',
      homework: 'O‘zingiz haqingizdagi ilk `about.html` sahifasini uyda tayyorlab keling.',
    },
  },
  {
    id: 'g8-l11',
    grade: 8,
    no: 11,
    part: '1-yarim yillik',
    title: 'Veb-sahifada matn joylashtirish va ularni boshqarish.',
    kind: 'dars',
    hours: 1,
    tools: ['HTML'],
    objectives: [
      'O‘quvchi sarlavhalar (`<h1>`–`<h6>`), xatboshilar (`<p>`), yangi qator (`<br>`) va ajratuvchi chiziq (`<hr>`) teglarini qo‘llay oladi.',
      'O‘quvchi matnni ajratish teglari (`<b>`/`<strong>`, `<i>`/`<em>`, `<u>`) hamda ro‘yxatlar (`<ul>`, `<ol>`, `<li>`) ni yoza oladi.',
    ],
    intro:
      'HTML kodingizda Enter tugmasini 10 marta bossangiz ham, brauzer hamma matnni bitta qatorda yopishtirib chiqaradi! Matnni tartibli sarlavha, xatboshi va ro‘yxatlarga ajratish uchun maxsus teglar kerak.',
    sections: [
      {
        heading: 'Sarlavhalar (`<h1>`..`<h6>`) va Xatboshi (`<p>`)',
        body: '`<h1>` eng katta bosh sarlavha, `<h6>` eng kichigi. Har bir xatboshi (abzats) `<p>...</p>` tegiga olinadi. Abzats ichidan yangi qatorga tushish uchun yakka `<br>` tegi, gorizontal chiziq tortish uchun `<hr>` tegi ishlatiladi. Muhim matnni qalin qilish uchun `<strong>` (yoki `<b>`), qiyshaytirish uchun `<em>` (yoki `<i>`) qo‘llaniladi.',
        example: '`<h1>O‘zbekiston</h1><p>Bu <strong>go‘zal</strong> yurt.<br>Poytaxti — Toshkent.</p>`',
        tip: 'Sahifada odatda faqat bitta bosh `<h1>` sarlavha ishlatiladi — bu qidiruv tizimlari va ekran o‘qigichlar uchun muhim!',
      },
      {
        heading: 'Tartibli (`<ol>`) va Tartibsiz (`<ul>`) ro‘yxatlar',
        body: 'Belgili (nuqtali) ro‘yxat `<ul>` (Unordered List), raqamli ro‘yxat esa `<ol>` (Ordered List) ichida yoziladi. Har bir band esa `<li>...</li>` (List Item) tegi bilan o‘raladi.',
        example: '`<ul><li>Olma</li><li>Anor</li></ul>`',
      },
    ],
    keyTerms: [
      { term: '<h1> ... <h6>', definition: 'Oltita darajadagi veb-sahifa sarlavha teglari.' },
      { term: '<p> va <br>', definition: 'Xatboshi (Paragraph) va majburiy yangi qator (Line Break) teglari.' },
      { term: '<ul> / <ol> / <li>', definition: 'Belgili ro‘yxat, raqamli ro‘yxat va ro‘yxat bandi teglari.' },
      { term: '<strong> / <em>', definition: 'Matnni semantik jihatdan qalin va kursiv ajratish teglari.' },
    ],
    steps: [
      '1. `<body>` ichiga `<h1>` bosh sarlavha va `<h2>` bo‘lim sarlavhasi yozing.',
      '2. `<p>` tegi ichida ikki qatorli matn yozib, o‘rtasiga `<br>` va ostiga `<hr>` qo‘ying.',
      '3. Matndagi bir muhim so‘zni `<strong>` bilan ajrating.',
      '4. Sevimli 3 ta kitobingizni `<ol>` va `<li>` raqamli ro‘yxatida chiqaring.',
    ],
    practice: [
      {
        task: 'O‘zingizning sevimli taomingiz retseptini `<h2>`, `<p>`, `<ul>` (masalliqlar) va `<ol>` (tayyorlash bosqichlari) bilan yozing.',
        expected: 'Belgili va raqamli ro‘yxatlar to‘g‘ri yopilgan teglar bilan ko‘rinadi.',
        difficulty: 'oson',
      },
      {
        task: 'She’rning 4 qatorini `<p>` va `<br>` yordamida alohida satrlarga ajrating.',
        expected: 'Har bir misra alohida yangi satrdan chiqadi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g8-l11-g1',
        num: '01',
        title: 'HTML matn va ro‘yxat ustasi',
        topic: 'Matn teglari',
        difficulty: 'O‘rta',
        engine: 'htmlplay',
        config: {
          prompt: 'Sahifada <h2> sarlavha, <strong> so‘zli <p> xatboshi hamda <ul> ichida kamida 2 ta <li> bandli ro‘yxat tuzing.',
          starterCode: '<h2>Mening maqsadlarim</h2>\n<p>Men bugun HTML o‘rganyapman.</p>\n<!-- Ro‘yxat qo‘shing -->',
          checks: [
            { label: '<h2> sarlavhasi bor', pattern: '<h2>.*</h2>' },
            { label: '<p> xatboshisi va <strong> bor', pattern: '<p>.*<strong>.*</strong>.*</p>' },
            { label: '<ul> ro‘yxati ochilgan va yopilgan', pattern: '<ul>[\\s\\S]*</ul>' },
            { label: '<li> bandi mavjud', pattern: '<li>.*</li>' },
          ],
          hint: '<p>Men <strong>HTML</strong> o‘rganyapman.</p><ul><li>Kod yozish</li><li>Sayt qurish</li></ul>',
        },
      },
    ],
    quiz: [
      {
        prompt: 'HTMLda eng katta bosh sarlavhani belgilash uchun qaysi teg ishlatiladi?',
        options: ['<h6>', '<p>', '<h1>', '<head>'],
        answer: 2,
        explanation: '<h1> eng yirik bosh sarlavha, <h6> esa eng kichik darajali sarlavhadir.',
      },
      {
        prompt: 'Xatboshi ichida yopuvchi tegi bo‘lmagan holda yangi qatorga tushish tegi qaysi?',
        options: ['<p>', '<br>', '<hr>', '<li>'],
        answer: 1,
        explanation: '<br> (Line Break) yakka teg bo‘lib, matnni keyingi qatorga o‘tkazadi.',
      },
      {
        prompt: 'Raqamlangan (1, 2, 3...) ro‘yxat yaratish uchun qaysi juft teg ishlatiladi?',
        options: ['<ul>...</ul>', '<ol>...</ol>', '<dl>...</dl>', '<li>...</li>'],
        answer: 1,
        explanation: '<ol> (Ordered List) raqamli ro‘yxat, <ul> (Unordered List) esa belgili ro‘yxat yaratadi.',
      },
      {
        prompt: 'Ro‘yxatning har bir alohida bandi qaysi teg ichiga yoziladi?',
        options: ['<item>', '<li>', '<list>', '<p>'],
        answer: 1,
        explanation: 'Ham <ul>, ham <ol> ichidagi har bir band <li>...</li> bilan yoziladi.',
      },
      {
        prompt: 'Matnni sahifa bo‘ylab gorizontal chiziq bilan ajratish tegi qaysi?',
        options: ['<br>', '<hr>', '<line>', '<border>'],
        answer: 1,
        explanation: '<hr> (Horizontal Rule) bo‘limlar orasiga gorizontal ajratuvchi chiziq chizadi.',
      },
    ],
    teacherNotes: {
      method: 'HTML da Enter bosish natija bermasligini ko‘rsatib, `<p>` va `<br>` zarurligini amaliy isbotlash.',
      timing: '10 daqiqa tushuntirish, 23 daqiqa retsept/tarjimai hol sahifasi, 12 daqiqa HtmlPlay va test.',
      assessment: 'Sarlavha iyerarxiyasi, `<ul>`/`<ol>` ichida `<li>` to‘g‘ri ishlatilishi.',
      homework: 'Sevimli 5 ta kitobingiz haqida `<ol>` va `<strong>` ishlatilgan HTML sahifa tuzing.',
    },
  },
  {
    id: 'g8-l12',
    grade: 8,
    no: 12,
    part: '1-yarim yillik',
    title: 'Link joylashtirish',
    kind: 'dars',
    hours: 1,
    tools: ['HTML'],
    objectives: [
      'O‘quvchi giperhavola (`<a>` — Anchor) tegi, `href` atributi va `target="_blank"` parametrini to‘g‘ri yoza oladi.',
      'O‘quvchi tashqi veb-saytga link, bir sayt ichidagi boshqa sahifaga (`about.html`) link va sahifa ichidagi ankor link yarata oladi.',
    ],
    intro:
      'Internetni "o‘rgimchak to‘ri" (Web) ga aylantiradigan narsa — giperhavolalar (Links)! Bir marta bosish bilan boshqa sahifaga yoki boshqa davlatdagi saytga o‘tish imkonini beruvchi `<a>` tegni o‘rganamiz.',
    sections: [
      {
        heading: 'Giperhavola (`<a>`) va `href` atributi',
        body: 'Havola yaratish uchun `<a href="manzil">Ko‘rinadigan matn</a>` ishlatiladi. `href` (Hypertext Reference) atributiga to‘liq tashqi manzil (`https://uzedu.uz`) yoki shu papkadagi boshqa sahifa nomi (`aloqa.html`) yoziladi. Yangi yorliqda (tabda) ochish uchun `target="_blank"` qo‘shiladi.',
        example: '`<a href="https://ziyonet.uz" target="_blank">ZiyoNET kutubxonasi</a>`',
        tip: 'Tashqi saytlarga link yozganda albatta `https://` bilan yozing — aks holda brauzer uni o‘z papkangizdagi fayl deb izlab "Fayl topilmadi" xatosini beradi!',
      },
      {
        heading: 'Ichki va elektron pochta linklari',
        body: 'O‘z saytingiz sahifalarini bog‘lash uchun nisbiy manzil (`href="darslar.html"`) yoziladi. Elektron pochtaga tezkor xat yozish linki esa `href="mailto:ustoz@maktab.uz"` ko‘rinishida tuziladi.',
        example: 'Navigatsiya menyusi: `<a href="index.html">Bosh sahifa</a> | <a href="galereya.html">Galereya</a>`.',
      },
    ],
    keyTerms: [
      { term: '<a href="...">', definition: 'Giperhavola (Hyperlink) yaratuvchi anchor tegi.' },
      { term: 'href atributi', definition: 'Havola bosilganda qayerga o‘tish kerakligini ko‘rsatuvchi manzil.' },
      { term: 'target="_blank"', definition: 'Havolani brauzerning yangi yorlig‘ida (tabida) ochish parametri.' },
      { term: 'Nisbiy manzil', definition: 'Shu sayt papkasi ichidagi boshqa HTML faylga qisqa yo‘l (masalan, `about.html`).' },
    ],
    steps: [
      '1. `index.html` faylingizda 3 ta foydali saytga tashqi havolalar ro‘yxatini (`<ul>` ichida `<a>`) yarating.',
      '2. Tashqi linklarga `target="_blank"` qo‘shing.',
      '3. Xuddi shu papkada `ikkinchi.html` fayl ochib, ikkala sahifani bir-biriga `<a href="...">` bilan bog‘lang.',
    ],
    practice: [
      {
        task: 'Maktabingiz sahifasidan boshqa "dars_jadvali.html" sahifasiga o‘tuvchi va qaytuvchi ikkita bog‘langan sahifa tuzing.',
        expected: 'Har ikkala link bosilganda sahifalar o‘zaro almashadi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Tashqi sayt havolasi yangi oynada ochilishi uchun `target="_blank"` atributini qo‘llang.',
        expected: 'Asosiy sahifa yopilmasdan yangi tabda sayt ochiladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g8-l12-g1',
        num: '01',
        title: 'Giperhavola kodi yoz',
        topic: 'HTML Linklar',
        difficulty: 'Oson',
        engine: 'htmlplay',
        config: {
          prompt: 'https://uzedu.uz saytiga yangi tabda ochiladigan (target="_blank") havola yarating.',
          starterCode: '<p>Foydali portal: <!-- havola yozing --></p>',
          checks: [
            { label: '<a tegi mavjud', pattern: '<a\\s+' },
            { label: 'href="https://..." manzili berilgan', pattern: 'href="https://[^"]+"' },
            { label: 'target="_blank" qo‘shilgan', pattern: 'target="_blank"' },
            { label: '</a> yopilgan', pattern: '</a>' },
          ],
          hint: '<a href="https://uzedu.uz" target="_blank">Ta’lim portali</a>',
        },
      },
    ],
    quiz: [
      {
        prompt: 'HTMLda giperhavola (link) yaratish uchun qaysi teg ishlatiladi?',
        options: ['<link>', '<a>', '<href>', '<url>'],
        answer: 1,
        explanation: '<a> (Anchor) tegi foydalanuvchi bosadigan giperhavolani yaratadi.',
      },
      {
        prompt: 'Havola bosilganda qayerga o‘tishini ko‘rsatuvchi majburiy atribut qaysi?',
        options: ['src', 'alt', 'href', 'title'],
        answer: 2,
        explanation: 'href (Hypertext Reference) havolaning maqsad manzilini belgilaydi.',
      },
      {
        prompt: 'Link bosilganda manzil brauzerning YANGI yorlig‘ida (tabida) ochilishi uchun nima yoziladi?',
        options: ['open="new"', 'target="_blank"', 'tab="true"', 'href="new"'],
        answer: 1,
        explanation: 'target="_blank" atributi sahifani yangi yorliqda ochadi.',
      },
      {
        prompt: 'Tashqi veb-sayt manzilini yozishda `<a href="google.com">` deb `https://` ni unutib qo‘ysak nima bo‘ladi?',
        options: [
          'Brauzer uni kompyuterdagi mahalliy fayl deb izlab topa olmaydi',
          'Sayt tezroq ochiladi',
          'Rang ko‘k bo‘lmaydi',
          'Avtomatik qo‘shiladi',
        ],
        answer: 0,
        explanation: 'Tashqi saytlar uchun protokol (`https://`) albatta ko‘rsatilishi shart.',
      },
      {
        prompt: 'Foydalanuvchi bosganda pochta dasturini ochuvchi havola qaysi so‘z bilan boshlanadi?',
        options: ['http://', 'mailto:', 'email://', 'send:'],
        answer: 1,
        explanation: '`href="mailto:nom@sayt.uz"` elektron pochta havolasini hosil qiladi.',
      },
    ],
    teacherNotes: {
      method: 'Ikki HTML sahifani bir-biriga bog‘lab kichik ko‘p sahifali saytcha hosil qilish.',
      timing: '10 daqiqa tushuntirish, 23 daqiqa ikki sahifali sayt tuzish, 12 daqiqa HtmlPlay va test.',
      assessment: 'href, https:// va target="_blank" to‘g‘ri yozilganligi.',
      homework: '3 ta sahifadan iborat (Bosh sahifa, Men haqimda, Sevimli mashg‘ulotlar) bog‘langan menyu yarating.',
    },
  },
  {
    id: 'g8-l13',
    grade: 8,
    no: 13,
    part: '1-yarim yillik',
    title: 'Veb-sahifada tasvirlar joylashtirish va ularni boshqarish.',
    kind: 'dars',
    hours: 1,
    tools: ['HTML'],
    objectives: [
      'O‘quvchi `<img>` yakka tegi, `src` (manba yo‘li) va `alt` (muqobil matn) atributlarini to‘g‘ri ishlata oladi.',
      'O‘quvchi tasvir o‘lchamlarini (`width`, `height`) proporsiyani buzmagan holda boshqaradi va rasmni linkka aylantira oladi.',
    ],
    intro:
      'Matnsiz sayt zerikarli, lekin juda katta rasm ham butun ekranni egallab saytni buzib qo‘yishi mumkin. HTMLda `<img>` tegi bilan rasmlarni chiroyli joylashtirish va boshqarishni o‘rganamiz!',
    sections: [
      {
        heading: '`<img>` tegi va majburiy atributlari',
        body: '`<img>` tegi yopuvchi `</img>` ga ega emas (yakka teg). Unda 2 ta muhim atribut bo‘lishi shart: `src="images/tabiat.jpg"` (rasm fayli yo‘li) va `alt="Tog‘ manzarasi"` (rasm yuklanmasa chiqadigan yoki ko‘zi ojizlar ekran o‘qigichi o‘qiydigan muqobil matn).',
        example: '`<img src="maktab.jpg" alt="Maktab binosi" width="400">`',
        tip: 'Tasvir cho‘zilib ketmasligi uchun `width` va `height` ni ikkalasini birdan bermang — faqat `width="350"` bersangiz, brauzer bo‘yini proporsional o‘zi moslaydi!',
      },
      {
        heading: 'Rasmni bosiladigan tugma (Link) qilish',
        body: 'Agar `<img>` tegni `<a>...</a>` ichiga joylashtirsak, rasm ustiga bosilganda boshqa sahifaga o‘tuvchi grafik tugmaga aylanadi! Ko‘pincha barcha rasmlar sayt papkasi ichidagi `images/` papkasida saqlanadi.',
        example: '`<a href="katta.html"><img src="kuchuk.jpg" alt="Kuchukcha" width="200"></a>`',
      },
    ],
    keyTerms: [
      { term: '<img src="..." alt="...">', definition: 'Veb-sahifaga tasvir qo‘shuvchi yakka HTML tegi.' },
      { term: 'src (Source)', definition: 'Rasm faylining papkadagi yoki internetdagi manzil yo‘li.' },
      { term: 'alt (Alternative text)', definition: 'Rasm ko‘rinmay qolganda chiqadigan izoh matni (Accessibility uchun shart).' },
      { term: 'width / height', definition: 'Tasvirning piksel yoki foizlardagi eni va bo‘yi o‘lchamlari.' },
    ],
    steps: [
      '1. Saytingiz papkasi ichida `images` papkasi ochib, 2 ta rasm (`.jpg` yoki `.png`) joylang.',
      '2. `index.html` ga `<img src="images/rasm1.jpg" alt="Tavsif" width="320">` tegini qo‘shing.',
      '3. Rasm fayli nomini ataylab 1 harfga o‘zgartirib, `alt` matni chiqishini tekshiring va yana to‘g‘rilang.',
      '4. Ikkinchi rasmni `<a>` tegi ichiga olib bosiladigan linkka aylantiring.',
    ],
    practice: [
      {
        task: 'Sahifangizda `width="300"` o‘lchamda 2 ta rasmdan iborat kichik foto-galereya tuzing.',
        expected: 'Rasmlar bir tekis o‘lchamda va sifatli `alt` matni bilan ko‘rinadi.',
        difficulty: 'oson',
      },
      {
        task: 'Logotip rasmini bosganda bosh sahifaga (`index.html`) qaytaradigan link-rasm yozing.',
        expected: '`<a href="index.html"><img ...></a>` kodi ishlaydi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l13-g1',
        num: '01',
        title: 'Tasvir tegi HTML amaliyoti',
        topic: 'Veb-sahifada tasvirlar',
        difficulty: 'Oson',
        engine: 'htmlplay',
        config: {
          prompt: '`logo.png` tasvirini `alt` tavsifi va `width="250"` o‘lchami bilan sahifaga joylashtiring.',
          starterCode: '<h2>Maktab galereyasi</h2>\n<!-- img tegni shu yerga yozing -->',
          checks: [
            { label: '<img tegi mavjud', pattern: '<img\\s+' },
            { label: 'src atributi kiritilgan', pattern: 'src="[^"]+"' },
            { label: 'alt atributi kiritilgan', pattern: 'alt="[^"]+"' },
            { label: 'width o‘lchami berilgan', pattern: 'width="\\d+"' },
          ],
          hint: '<img src="logo.png" alt="Maktab logotipi" width="250">',
        },
      },
    ],
    quiz: [
      {
        prompt: 'HTMLda rasm joylashtirish uchun qaysi yakka teg ishlatiladi?',
        options: ['<image>', '<img>', '<pic>', '<photo>'],
        answer: 1,
        explanation: '<img> tegi sahifaga tasvir qo‘yish uchun qo‘llaniladi (yopuvchi tegi yo‘q).',
      },
      {
        prompt: 'Rasm fayli manzili xato bo‘lsa yoki internet sekin bo‘lib rasm yuklanmasa qaysi atributdagi matn chiqadi?',
        options: ['src', 'alt', 'width', 'href'],
        answer: 1,
        explanation: 'alt (alternative text) tasvir ko‘rinmaganda uning mazmunini bildiruvchi matndir.',
      },
      {
        prompt: 'Tasvir cho‘zilib deformatsiya bo‘lmasligi uchun o‘lcham berishning eng to‘g‘ri usuli qaysi?',
        options: [
          'Faqat `width` (eni) ni berish — shunda `height` avtomatik proporsional moslashadi',
          'Ham width=100, ham height=900 qo‘yish',
          'Hech qachon rasm qo‘ymaslik',
          'Alt ni o‘chirish',
        ],
        answer: 0,
        explanation: 'Faqat bitta tomonni (odatda width) berish original nisbatni saqlaydi.',
      },
      {
        prompt: 'Rasm ustiga bosganda boshqa saytga o‘tishi uchun `<img>` qaysi teg ichiga o‘raladi?',
        options: ['<p>...</p>', '<a href="...">...</a>', '<h1>...</h1>', '<ul>...</ul>'],
        answer: 1,
        explanation: '<a>...</a> tegi ichidagi har qanday element (matn yoki rasm) giperhavolaga aylanadi.',
      },
      {
        prompt: '`src="images/gul.jpg"` yozuvi nimani bildiradi?',
        options: [
          'HTML fayl yonidagi `images` papkasi ichidagi `gul.jpg` rasmini',
          'Rasm rangini',
          'Rasm qalinligini',
          'Audio faylni',
        ],
        answer: 0,
        explanation: 'Nisbiy yo‘l `images/gul.jpg` fayl ichki papkada joylashganligini ko‘rsatadi.',
      },
    ],
    teacherNotes: {
      method: 'Papkani tartibli saqlash (`index.html` + `images/` papkasi) va `alt` ning ekran o‘qigichlar uchun ahamiyatini tushuntirish.',
      timing: '10 daqiqa tushuntirish, 23 daqiqa galereya yaratish, 12 daqiqa HtmlPlay va test.',
      assessment: '`src`, `alt` va proporsional o‘lcham berilganligi.',
      homework: '3 ta rasmli mini-galereya va bosh sahifaga qaytuvchi link-rasm yasab keling.',
    },
  },
  {
    id: 'g8-l14',
    grade: 8,
    no: 14,
    part: '1-yarim yillik',
    title: 'Veb-sahifa dizaynini tanlash ularni boshqarish. Ranglar',
    kind: 'dars',
    hours: 1,
    tools: ['HTML', 'CSS'],
    objectives: [
      'O‘quvchi HTMLda CSS (Cascading Style Sheets) orqali sahifa dizayni, fon, shrift va bo‘shliqlarni boshqarishni biladi.',
      'O‘quvchi veb-ranglarni nom (`navy`), HEX (`#dc2626`) va RGB (`rgb(15, 23, 42)`) ko‘rinishida qo‘llab, kontrast qoidasiga amal qiladi.',
    ],
    intro:
      'HTML — uyning g‘isht va devorlari bo‘lsa, CSS — uning bo‘yoqlari, pardalari va chiroyli bezagidir! Bugun oq-qora sahifamizga zamonaviy ranglar, shriftlar va dizayn nafasini beramiz.',
    sections: [
      {
        heading: 'CSS ulash va rang berish usullari',
        body: 'Stillarni `<head>` ichida `<style> ... </style>` tegida (yoki alohida `style.css` faylida) yozish mumkin. Asosiy rang xossalari: `color` — matn rangi, `background-color` — fon rangi. Vebda ranglar 3 xil beriladi: 1) Inglizcha nom (`crimson`, `white`); 2) HEX 16-lik kod (`#e11d48`, `#0f172a`); 3) RGB (`rgb(225, 29, 72)`).',
        example: '`body { background-color: #f8fafc; color: #0f172a; font-family: Arial, sans-serif; }`',
        tip: 'KONTRAST QOIDASI: Qizil fonda ko‘k matn yoki och sariq fonda oq matn o‘qilmaydi! Matn va fon o‘rtasida doimo kuchli kontrast (masalan, to‘q matn + och fon) saqlang.',
      },
      {
        heading: 'Shrift, chekinish va bezak xossalari',
        body: 'CSSda `font-family` (shrift turi), `font-size` (o‘lcham: `18px`), `text-align: center` (markazlash), `padding` (ichki bo‘shliq) va `border-radius: 12px` (yumaloq burchaklar) sahifani darhol professional ko‘rinishga keltiradi.',
        example: '`h1 { color: #b91c1c; text-align: center; }`',
      },
    ],
    keyTerms: [
      { term: 'CSS (Cascading Style Sheets)', definition: 'HTML sahifaning tashqi ko‘rinishi, ranglari va joylashuvini bezovchi til.' },
      { term: 'HEX rang kodi', definition: '`#RRGGBB` ko‘rinishidagi 6 xonali o‘n oltilik rang kodi (masalan, `#ffffff` — oq).' },
      { term: 'color / background-color', definition: 'Matn rangi hamda elementning orqa fon rangini belgilovchi CSS xossalari.' },
      { term: 'Kontrast', definition: 'Matn va uning orqa foni ranglari orasidagi o‘qishni osonlashtiruvchi keskin farq.' },
    ],
    steps: [
      '1. `index.html` faylining `<head>` qismiga `<style>...</style>` bo‘limini qo‘shing.',
      '2. `body` uchun och fon (`#f1f5f9`), to‘q matn (`#1e293b`) va `font-family: sans-serif` yozing.',
      '3. `h1` sarlavhasiga HEX rang va `text-align: center` bering.',
      '4. Rasmga `border-radius: 12px` berib burchaklarini yumaloqlang.',
    ],
    practice: [
      {
        task: '`#000000` (qora), `#ffffff` (oq) va `#dc2626` (qizil) HEX kodlaridan foydalanib yuqori kontrastli kartochka bezang.',
        expected: 'Matn aniq va ko‘zni charchatmaydigan tarzda o‘qiladi.',
        difficulty: 'oson',
      },
      {
        task: 'Inline style va `<style>` bo‘limi farqini ko‘rsatib, barcha `<p>` larni yagona qoida bilan bezang.',
        expected: 'Bitta `p { ... }` qoidasi sahifadagi hamma xatboshilarni bir xil bezaydi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l14-g1',
        num: '01',
        title: 'CSS rang va uslub berish',
        topic: 'Veb-sahifa dizayni',
        difficulty: 'O‘rta',
        engine: 'htmlplay',
        config: {
          prompt: '<style> tegi ichida `body` ga background-color va `h1` ga color hamda text-align: center bering.',
          starterCode: '<style>\n  /* CSS qoidalarini yozing */\n</style>\n<h1>Salom, CSS!</h1>',
          checks: [
            { label: 'body uchun background-color berilgan', pattern: 'body\\s*\\{[^}]*background-color\\s*:' },
            { label: 'h1 uchun color berilgan', pattern: 'h1\\s*\\{[^}]*color\\s*:' },
            { label: 'h1 markazlashtirilgan', pattern: 'text-align\\s*:\\s*center' },
          ],
          hint: '<style>\n  body { background-color: #f8fafc; }\n  h1 { color: #dc2626; text-align: center; }\n</style>',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Veb-sahifaning ranglari, shriftlari va dizaynini boshqarish uchun qaysi texnologiya qo‘llaniladi?',
        options: ['CSS', 'SQL', 'MP3', 'ZIP'],
        answer: 0,
        explanation: 'CSS (Cascading Style Sheets) HTML elementlariga vizual dizayn beradi.',
      },
      {
        prompt: 'HEX rang tizimida `#ffffff` kodi qaysi rangni bildiradi?',
        options: ['Qora', 'Qizil', 'Oq', 'Yashil'],
        answer: 2,
        explanation: 'Barcha kanallar maksimal (ff, ff, ff) bo‘lganda oq rang hosil bo‘ladi; `#000000` esa qoradir.',
      },
      {
        prompt: 'CSSda elementning orqa fon rangini o‘zgartiruvchi xossa qaysi?',
        options: ['color', 'background-color', 'font-size', 'src'],
        answer: 1,
        explanation: '`color` matn rangini, `background-color` esa fon rangini boshqaradi.',
      },
      {
        prompt: 'Veb-dizaynda rang tanlashda eng muhim qoida nima?',
        options: [
          'Matn va fon orasida o‘qish oson bo‘ladigan kuchli kontrast yaratish',
          'Ilk ko‘ringan 10 ta yorqin rangni aralashtirish',
          'Matn rangini fon rangiga bir xil qilish',
          'Shriftni 5px qilish',
        ],
        answer: 0,
        explanation: 'Yaxshi kontrast matnning hamma qurilmada bemalol o‘qilishini ta’minlaydi.',
      },
      {
        prompt: 'Ichki CSS qoidalari HTML faylning qaysi bo‘limida `<style>...</style>` ichiga yoziladi?',
        options: ['<head>', '<title>', '<img>', '<br>'],
        answer: 0,
        explanation: 'Ichki CSS uslublari `<head>` bo‘limi ichidagi `<style>` tegiga yoziladi.',
      },
    ],
    teacherNotes: {
      method: 'Yomon kontrastli (sariq ustida oq) va zamonaviy palitrali sahifani solishtirish.',
      timing: '10 daqiqa rang nazariyasi, 23 daqiqa CSS bezash, 12 daqiqa HtmlPlay va test.',
      assessment: 'HEX/RGB ranglar va yetarli matn-fon kontrasti tanlanganligi.',
      homework: 'Saytingiz uchun 3 ta uyg‘un HEX rang kodini tanlab, sahifangizni bezab keling.',
    },
  },
  {
    id: 'g8-l15',
    grade: 8,
    no: 15,
    part: '1-yarim yillik',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['HTML', 'CSS'],
    objectives: [
      'O‘quvchi HTML hujjat tuzilishi, matn va ro‘yxat teglari, havolalar (`<a>`), rasmlar (`<img>`) va CSS rang dizayni bilimlarini tekshiradi.',
      'O‘quvchi kichik bezalgan veb-sahifani mustaqil yaratadi.',
    ],
    intro:
      'HTML va CSS veb-dasturlash asoslari bo‘limini yakunlab, nazorat ishida mustaqil veb-sahifa yaratish va test savollarini bajaramiz.',
    sections: [
      {
        heading: 'Nazorat sahifasiga qo‘yiladigan talablar',
        body: 'To‘liq HTML5 skeleti (`<!DOCTYPE html>`, `head`, `meta charset="UTF-8"`, `title`, `body`), kamida bitta `<h1>`, `<p>`, `<ul>` yoki `<ol>`, `width` va `alt` li `<img>`, `target="_blank"` li `<a>` hamda `<style>` bo‘limida fon va matn ranglari bo‘lishi kerak.',
        example: 'Mavzu: "Sevimli sportim" yoki "Mening shahrim" haqida 1 betlik sahifa.',
        tip: 'Yopuvchi teglarni (`</h1>`, `</p>`, `</ul>`, `</a>`) unutmang — bitta yopilmagan teg butun sahifa dizaynini buzib yuborishi mumkin!',
      },
      {
        heading: 'Kod xatolarini tekshirish',
        body: 'Brauzerda sahifani ochib har bir link ishlashini, rasm ko‘rinayotganini va ranglar o‘qishli ekanini ko‘zdan kechiring.',
        example: 'Agar rasm o‘rnida singan belgi va `alt` chiqsa, fayl nomi va papka manzilini (`src`) tekshiring.',
      },
    ],
    keyTerms: [
      { term: 'HTML5 skeleti', definition: 'Hujjat turi, head va body dan tashkil topgan standart tuzilma.' },
      { term: '<a href> & <img src>', definition: 'Veb-sahifadagi giperhavola va tasvir teglari.' },
      { term: 'CSS <style>', definition: 'Sahifa ranglari, shrift va tekislashni boshqarish bo‘limi.' },
      { term: 'Yakka va Juft teglar', definition: 'Yopuvchi teg talab qilmaydigan (`<img>`, `<br>`) va juft (`<p>...</p>`) teglar.' },
    ],
    steps: [
      '1. `nazorat.html` faylini yaratib to‘liq HTML5 tuzilmasini yozing.',
      '2. Mavzu bo‘yicha `<h1>`, 2 ta `<p>`, 3 bandli `<ul>` ro‘yxat qo‘shing.',
      '3. Bitta rasm (`<img>` + `alt`) va bitta tashqi link (`<a href="..." target="_blank">`) kiriting.',
      '4. `<style>` orqali rang va shrift berib brauzerda tekshiring.',
    ],
    practice: [
      {
        task: 'Ataylab `alt` va `target="_blank"` unutilgan kodni to‘ldirib xatosiz holga keltiring.',
        expected: 'Barcha majburiy atributlar to‘g‘ri qo‘shiladi.',
        difficulty: 'oson',
      },
      {
        task: 'HTML hujjatda matn va ro‘yxat teglarini xatosiz yopib brauzerda sinang.',
        expected: 'Sahifa tartibli va yuqori kontrastli ko‘rinishda ochiladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l15-g1',
        num: '01',
        title: 'HTML/CSS nazorat sinovi',
        topic: 'HTML/CSS tekshiruv',
        difficulty: 'O‘rta',
        engine: 'htmlplay',
        config: {
          prompt: 'Sahifada CSS rangli <h1>, <ul> ro‘yxat va <a href="https://..." target="_blank"> link yarating.',
          starterCode: '<style>\n  h1 { color: #b91c1c; }\n</style>\n<!-- Sahifa tarkibini yozing -->',
          checks: [
            { label: '<h1> mavjud', pattern: '<h1>.*</h1>' },
            { label: '<ul> ro‘yxat mavjud', pattern: '<ul>[\\s\\S]*<li>.*</li>[\\s\\S]*</ul>' },
            { label: 'xavfsiz havola mavjud', pattern: '<a[^>]+href="https://[^"]+"[^>]*>.*</a>' },
          ],
          hint: '<h1>Nazorat</h1><ul><li>HTML</li><li>CSS</li></ul><a href="https://uzedu.uz" target="_blank">Portal</a>',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Quyidagi teglardan qaysi biri yopuvchi tegga muhtoj EMAS (yakka teg)?',
        options: ['<p>', '<img>', '<a>', '<ul>'],
        answer: 1,
        explanation: '<img> (hamda <br>, <hr>) yakka teglar bo‘lib, alohida yopuvchi teg yozilmaydi.',
      },
      {
        prompt: 'Giperhavola bosilganda sayt yangi yorliqda ochilishi uchun qaysi atribut qo‘shiladi?',
        options: ['alt="_blank"', 'target="_blank"', 'src="_new"', 'href="_tab"'],
        answer: 1,
        explanation: 'target="_blank" yangi brauzer yorlig‘ini ochadi.',
      },
      {
        prompt: 'CSSda matn rangini belgilovchi xossa qaysi?',
        options: ['background-color', 'font-color', 'color', 'text-color'],
        answer: 2,
        explanation: 'Matn rangi faqat `color` xossasi orqali beriladi (`font-color` xato!).',
      },
      {
        prompt: 'Rasm yuklanmay qolgan holatda foydalanuvchi rasm o‘rnida ko‘radigan tavsif matni qaysi atributga yoziladi?',
        options: ['title', 'alt', 'href', 'width'],
        answer: 1,
        explanation: 'alt atributi muqobil tavsif matnini taqdim etadi.',
      },
      {
        prompt: 'Veb-sahifaning ko‘rinmaydigan texnik sozlamalari (masalan, `<title>` va `<style>`) qayerda joylashadi?',
        options: ['<body>', '<head>', '<footer>', '<p>'],
        answer: 1,
        explanation: '<head> qismi sahifa haqidagi metama’lumotlar, sarlavha va stillarni saqlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Amaliy mustaqil veb-sahifa yaratish nazorati + test.',
      timing: '25 daqiqa HTML/CSS sahifa tuzish, 15 daqiqa HtmlPlay va test, 5 daqiqa tahlil.',
      assessment: 'Teglar sintaksisi, link/rasm ishlashi va rang kontrasti.',
      homework: 'Keyingi darsga "Domen" va "Hosting" so‘zlari ma’nosini o‘rganib keling.',
    },
  },
  {
    id: 'g8-l16',
    grade: 8,
    no: 16,
    part: '1-yarim yillik',
    title: 'Veb-saytni internetda joylashtirish',
    kind: 'dars',
    hours: 1,
    tools: ['HTML', 'Brauzer'],
    objectives: [
      'O‘quvchi veb-saytni internetda e’lon qilish uchun kerakli uch asosiy tushunchani (Domen nomi, Xosting/Server va Fayl tuzilmasi — `index.html`) biladi.',
      'O‘quvchi saytni joylashtirishdan oldin tekshirish (barcha linklar, kichik harfli fayl nomlari, rasmlar) va bepul statik xostinglar (GitHub Pages, Netlify) tamoyilini tushunadi.',
    ],
    intro:
      'Saytingiz hozir faqat o‘z kompyuteringizda ochilyapti. Uni butun dunyo ko‘rishi uchun internetdagi maxsus doimiy kompyuterga — Xostingga joylab, unga chiroyli manzil (Domen) bog‘lash kerak!',
    sections: [
      {
        heading: 'Domen, Xosting (Server) va `index.html`',
        body: 'Sayt internetda ishlashi uchun 2 ta asosiy narsa kerak: 1) Xosting (Web Hosting) — sayt fayllaringiz (HTML, CSS, rasmlar) 24/7 saqlanib turadigan server kompyuter; 2) Domen (Domain Name) — o‘sha serverning eslab qolish oson manzili (masalan, `maktab6.uz`). Bosh sahifa fayli doimo `index.html` deb nomlanadi, chunki server sayt ochilganda avtomatik birinchi shu faylni izlaydi!',
        example: 'Oddiy HTML/CSS saytlarni bepul statik xosting platformalarda (GitHub Pages, Netlify, Vercel) bir necha daqiqada joylashtirish mumkin.',
        tip: 'Juda muhim: Internet serverlari (ko‘pincha Linux) katta-kichik harflarni farqlaydi (`Rasm.jpg` ≠ `rasm.jpg`)! Shuning uchun barcha fayl nomlarini kichik lotin harflarida, bo‘shliqsiz (`mening_saytim.html`) yozing!',
      },
      {
        heading: 'Saytni e’lon qilishdan oldingi tekshiruv (Pre-launch Checklist)',
        body: 'Saytni yuklashdan oldin tekshiring: 1) Hamma rasmlar `C:/Users/...` emas, nisbiy yo‘lda (`images/foto.jpg`) turibdimi? 2) Barcha sahifalararo havolalar ishlaydimi? 3) Bosh sahifa `index.html` mi? 4) Matnda imlo va kontrast xatolari yo‘qmi?',
        example: 'Agar `<img src="C:/Desktop/rasm.jpg">` deb yozilgan bo‘lsa, boshqa odamning kompyuterida rasm ko‘rinmaydi!',
      },
    ],
    keyTerms: [
      { term: 'Xosting (Web Hosting)', definition: 'Veb-sayt fayllarini 24 soat internetda saqlab beruvchi server xizmati.' },
      { term: 'Domen nomi', definition: 'Saytning internetdagi noyob matnli manzili (masalan, `uzedu.uz`).' },
      { term: 'index.html', definition: 'Saytga kirilganda veb-server birinchi bo‘lib ochadigan bosh sahifa fayli.' },
      { term: 'Nisbiy yo‘l (Relative Path)', definition: 'Fayl manzilini kompyuter diskidan emas, sayt papkasidan boshlab ko‘rsatish.' },
    ],
    steps: [
      '1. Saytingiz papkasini ko‘zdan kechiring: bosh sahifa nomi `index.html` ekanini tekshiring.',
      '2. Barcha fayl nomlari kichik harflar va bo‘shliqsiz ekaniga ishonch hosil qiling.',
      '3. Rasmlar va boshqa sahifalar havolalari nisbiy yo‘lda (`images/...`, `about.html`) yozilganini tekshiring.',
      '4. Joylashtirishdan oldingi nazorat ro‘yxatini (Checklist) to‘ldiring.',
    ],
    practice: [
      {
        task: 'Ataylab `C:\\Users\\Student\\Desktop\\rasm.png` qilib qo‘yilgan xato rasm yo‘lini to‘g‘ri nisbiy yo‘lga o‘zgartiring.',
        expected: '`images/rasm.png` kabi sayt papkasiga nisbiy yo‘l yoziladi.',
        difficulty: 'oson',
      },
      {
        task: 'Saytni internetga yuklashdan oldingi 5 bandli "Tekshiruv varaqasi" tuzing.',
        expected: 'index.html, kichik harflar, nisbiy yo‘llar, ishlaydigan linklar va brauzer testi kiritiladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l16-g1',
        num: '01',
        title: 'Saytni joylashtirish tekshiruvi',
        topic: 'Sayt publikatsiyasi',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Bu vaziyatda saytda nima uchun rasmlar boshqalarda ko‘rinmayapti?',
          scenario: 'O‘quvchi o‘z saytini bepul xostingga yukladi. O‘z noutbugida rasmlar ko‘rinardi, lekin do‘stlarida rasmlar o‘rnida faqat `alt` matni chiqyapti. Kodda: `<img src="C:\\Users\\Ali\\Pictures\\logo.png">` yozilgan. Sababi nima?',
          options: [
            {
              text: 'Internetda PNG rasmlar ishlamaydi',
              isCorrect: false,
              feedback: 'PNG barcha brauzer va serverlarda bemalol ishlaydi.',
            },
            {
              text: 'Rasm manzili foydalanuvchining shaxsiy C: diskiga bog‘langan, serverga nisbiy `images/logo.png` yo‘li bilan yuklanmagan',
              isCorrect: true,
              feedback: 'To‘g‘ri topdingiz! Xosting serveri sizning kompyuteringizdagi C: diskni ko‘ra olmaydi; rasm sayt papkasida nisbiy yo‘l bilan bo‘lishi shart.',
            },
            {
              text: 'Domen nomi juda uzun bo‘lgani uchun',
              isCorrect: false,
              feedback: 'Domen uzunligi rasm yo‘liga ta’sir qilmaydi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Veb-sayt fayllari 24/7 saqlanib, foydalanuvchilarga uzatib turiladigan server xizmati nima deyiladi?',
        options: ['Brauzer', 'Xosting (Web Hosting)', 'Photoshop', 'Scratch'],
        answer: 1,
        explanation: 'Xosting sayt fayllarini doimiy internetga ulangan serverda saqlaydi.',
      },
      {
        prompt: 'Saytning bosh sahifa HTML fayli odatda qanday nomlanishi shart?',
        options: ['home.txt', 'index.html', 'page1.docx', 'start.png'],
        answer: 1,
        explanation: 'Server sayt manzili ochilganda standart bo‘yicha `index.html` faylini izlaydi.',
      },
      {
        prompt: 'Saytni serverga yuklashda fayl nomlarini nega kichik lotin harflarida va bo‘shliqsiz (`mening_saytim.html`) yozish tavsiya etiladi?',
        options: [
          'Serverlar katta-kichik harfni farqlashi va bo‘shliq URL da muammo chiqarishi mumkinligi uchun',
          'Chiroyli ko‘rinishi uchun',
          'Klaviatura katta harf yozmagani uchun',
          'Shart emas',
        ],
        answer: 0,
        explanation: 'Linux serverlari case-sensitive bo‘lib, `Foto.jpg` bilan `foto.jpg` ni boshqa fayl deb hisoblaydi.',
      },
      {
        prompt: 'Saytning internetdagi eslab qolish oson manzili (masalan, `maktab.uz`) qanday ataladi?',
        options: ['Xosting', 'Domen nomi (Domain)', 'Alt matni', 'HEX kod'],
        answer: 1,
        explanation: 'Domen — murakkab raqamli IP manzil o‘rnida ishlatiladigan tushunarli sayt nomi.',
      },
      {
        prompt: 'Nima uchun sayt kodida rasm yo‘li sifatida `D:\\Rasmlar\\1.jpg` emas, `images/1.jpg` yoziladi?',
        options: [
          'D: disk serverda mavjud emas, nisbiy yo‘l esa har qanday serverda papka ichidan topadi',
          'Chunki D: disk sekin ishlaydi',
          'HTML backslash belgisini yoqtirmaydi',
          'Faqat rang uchun',
        ],
        answer: 0,
        explanation: 'Nisbiy yo‘l sayt papkasi ko‘chirilganda ham hamma rasmlarning bexato ochilishini kafolatlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Mahalliy papka va Server o‘rtasidagi farqni oddiy sxemada tushuntirish.',
      timing: '12 daqiqa nazariya, 20 daqiqa fayl tuzilmasini tekshirish, 13 daqiqa CaseStudy va test.',
      assessment: 'Domen/Xosting farqi va nisbiy yo‘llar qoidasini tushunganligi.',
      homework: 'Keyingi yarim yillikda o‘tiladigan "Kompyuter tarmoqlari" mavzusi uchun uy interneti qanday qurilmalardan iboratligini ko‘rib keling.',
    },
  },
];
