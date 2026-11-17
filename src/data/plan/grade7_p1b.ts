import type { Lesson } from './types';

export const GRADE_7_P1B: Lesson[] = [
  {
    id: 'g7-l09',
    grade: 7,
    no: 9,
    part: '1-yarim yillik',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Word', 'Brauzer'],
    objectives: [
      'O‘quvchi Wordda stillar, Wrap Text, jadval, ro‘yxatlar, Header/Footer, ustunlar va Print Preview bilimlarini sinaydi.',
      'O‘quvchi internet xavfsizligi bo‘yicha amaliy qaror qabul qilish ko‘nikmasini tekshiradi.',
    ],
    intro:
      'Matn hujjatlarini professional bezash va internet xavfsizligi bo‘yicha olgan bilimlarimizni nazorat ishi orqali mustahkamlaymiz.',
    sections: [
      {
        heading: 'Matn muharriri bo‘yicha nazorat mezonlari',
        body: 'Nazorat hujjatida Heading 1 stili, Wrap Text → Square bilan joylangan va qirqilgan rasm, Merge Cells sarlavhali jadval, belgili ro‘yxat hamda sahifa raqamli Footer bo‘lishi kerak.',
        example: 'Yakuniy fayl Print Preview (Ctrl+P) da tekshirilib ortiqcha bo‘sh sahifalarsiz topshiriladi.',
        tip: 'Har bir amalni bajarib bo‘lgach Ctrl+S tugmasi bilan saqlab boring.',
      },
      {
        heading: 'Kiberxavfsizlik tekshiruvi',
        body: 'Kuchli parol tuzish qoidalari (kamida 12 belgi, harf/raqam/belgi), 2FA himoyasi va fishing havolalarini farqlash test savollarida tekshiriladi.',
        example: 'https:// bilan boshlangan domen ham harflari ataylab almashtirilgan bo‘lsa (masalan, payrne.uz) soxta bo‘lishi mumkin!',
      },
    ],
    keyTerms: [
      { term: 'Heading va Mundarija', definition: 'Sarlavhalar tuzilmasini boshqaruvchi stillar.' },
      { term: 'Wrap Text va Crop', definition: 'Tasvirni matn bilan o‘rash va qirqish amallari.' },
      { term: 'Header / Footer', definition: 'Yuqori va pastki kolontitullar.' },
      { term: 'Fishing va 2FA', definition: 'Soxta havola hujumi va ikki bosqichli himoya.' },
    ],
    steps: [
      '1. Wordda "Xavfsiz internet qoidalari" sarlavhali 1 sahifalik varaqacha tayyorlang.',
      '2. Sarlavhani Heading 1 bilan, 4 ta qoidani belgili ro‘yxat bilan yozing.',
      '3. Jadval qo‘shib Merge Cells qiling va Print Preview da tekshiring.',
    ],
    practice: [
      {
        task: 'Hujjatga Footer qo‘shib avtomatik sahifa raqami va o‘z ismingizni joylashtiring.',
        expected: 'Pastki kolontitulda ism va sahifa raqami ko‘rinadi.',
        difficulty: 'oson',
      },
      {
        task: 'Asosiy matnni 2 ustunga bo‘lib, o‘rtasiga vertikal chiziq qo‘ying.',
        expected: 'Line between yoqilgan 2 ustunli matn hosil bo‘ladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l09-g1',
        num: '01',
        title: 'Word va Xavfsizlik blitsi',
        topic: 'Nazorat takrorlash',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Nazorat oldidan fikrlar to‘g‘riligini tekshiring.',
          statements: [
            {
              text: 'Merge Cells bitta katakni ikkita ustunga bo‘ladi.',
              isTrue: false,
              explanation: 'Merge Cells birlashtiradi; bo‘lish uchun Split Cells ishlatiladi.',
            },
            {
              text: 'Print Preview (Ctrl+P) hujjatni qog‘ozga chiqarishdan oldin ko‘rib olishga xizmat qiladi.',
              isTrue: true,
              explanation: 'Chop etishdagi xatolar va ortiqcha sahifalar shu yerda aniqlanadi.',
            },
            {
              text: 'Tab tugmasi ko‘p darajali ro‘yxatda keyingi ichki darajaga tushiradi.',
              isTrue: true,
              explanation: 'Tab ichkariga suradi, Shift+Tab esa tashqariga qaytaradi.',
            },
            {
              text: 'Parolni hamma saytlarda "123456" qilib qo‘yish xavfsiz hisoblanadi.',
              isTrue: false,
              explanation: 'Bir xil va oddiy parol barcha hisoblarni xavf ostiga qo‘yadi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Matnni rasm yonidan o‘rab o‘tishi uchun qaysi sozlama ishlatiladi?',
        options: ['Wrap Text → Square', 'Split Cells', 'Header', 'Orientation'],
        answer: 0,
        explanation: 'Square rejimi matnni tasvir atrofida chiroyli joylashtiradi.',
      },
      {
        prompt: 'Sahifani yotqizilgan (albomiy) ko‘rinishga o‘tkazish qaysi buyruq?',
        options: ['Margins', 'Orientation → Landscape', 'Columns → Two', 'Crop'],
        answer: 1,
        explanation: 'Landscape sahifani gorizontal keng holatga keltiradi.',
      },
      {
        prompt: 'Avtomatik mundarija tuzish uchun sarlavhalarga nima qo‘llanishi shart?',
        options: ['Heading stillari', 'Qizil rang', 'Shading', 'Bullets'],
        answer: 0,
        explanation: 'Word mundarijani Heading 1, Heading 2 stillari asosida yaratadi.',
      },
      {
        prompt: 'Kuchli parolda nimalar bo‘lishi tavsiya etiladi?',
        options: [
          'Faqat tug‘ilgan yil',
          'Katta-kichik harflar, raqamlar va maxsus belgilar (12+ belgi)',
          'Faqat ism',
          'Faqat 4 ta nol',
        ],
        answer: 1,
        explanation: 'Aralash belgilar va uzunlik parolni taxmin qilishni qiyinlashtiradi.',
      },
      {
        prompt: 'Jadvaldagi ikkita qo‘shni katakni bitta qilish amali qaysi?',
        options: ['Merge Cells', 'Split Cells', 'Different First Page', 'Line Between'],
        answer: 0,
        explanation: 'Merge Cells tanlangan kataklarni birlashtiradi.',
      },
    ],
    teacherNotes: {
      method: 'Amaliy mini-loyiha + test shaklidagi nazorat.',
      timing: '25 daqiqa amaliy varaqacha, 15 daqiqa test va o‘yin, 5 daqiqa yakun.',
      assessment: 'Barcha formatlash vositalaridan o‘rinli foydalanish.',
      homework: 'Keyingi bo‘lim uchun taqdimot tayyorlash g‘oyasini o‘ylab kelish.',
    },
  },
  {
    id: 'g7-l10',
    grade: 7,
    no: 10,
    part: '1-yarim yillik',
    title: 'Loyiha xususiyatini ishlab chiqish',
    kind: 'loyiha',
    hours: 1,
    tools: ['PowerPoint', 'LibreOffice Impress'],
    objectives: [
      'O‘quvchi multimedia taqdimot loyihasini yaratishdan oldin texnik spetsifikatsiya (talablar rejasi) tuza oladi.',
      'O‘quvchi loyihaning maqsadi, maqsadli auditoriyasi, slaydlar tuzilmasi va dizayn standartini belgilaydi.',
    ],
    intro:
      'Yaxshi bino avval chizmadan (loyihadan) boshlanganidek, ta’sirchan taqdimot ham slaydlar dasturini ochishdan oldin aniq reja — loyiha xususiyatini ishlab chiqishdan boshlanadi!',
    sections: [
      {
        heading: 'Loyiha xususiyati (Specification) nima?',
        body: 'Loyiha xususiyati — taqdimot kim uchun (auditoriya), nima maqsadda (o‘rgatish, ishontirish, hisobot), nechta slayddan iborat bo‘lishi, qanday rang va shriftlar ishlatilishi hamda qanday media (rasm, audio) kerakligini belgilovchi reja.',
        example: 'Mavzu: "Ekologiya va chiqindilarni qayta ishlash". Auditoriya: 5–7-sinflar. Rang: yashil/oq. Slaydlar soni: 6 ta.',
        tip: 'Barcha slaydlarda bitta umumiy rang palitrasi va ko‘pi bilan 2 xil shrift turidan foydalanishni rejalashtiring — shunda taqdimot professional chiqadi.',
      },
      {
        heading: 'Ssenariy taxtasi (Storyboard) tuzish',
        body: 'Har bir slayd uchun kichik eskiz (Storyboard) chiziladi: sarlavha qayerda turadi, rasm chapdami yoki o‘ngdami, qaysi o‘tish va ovoz effekti qo‘llaniladi. Bu ish vaqtini 2 barobar tejaydi.',
        example: '1-slayd: Titul; 2-slayd: Muammo statistikasi; 3-slayd: Yechim qadamlari; 4-slayd: Xulosa.',
      },
    ],
    keyTerms: [
      { term: 'Loyiha spetsifikatsiyasi', definition: 'Taqdimotga qo‘yiladigan maqsad, auditoriya, hajm va dizayn talablari hujjati.' },
      { term: 'Storyboard (Kadrlar rejasi)', definition: 'Slaydlarning ketma-ketlik sxemasi va eskizi.' },
      { term: 'Rang palitrasi', definition: 'Butun taqdimotda uyg‘un qo‘llaniladigan asosiy 2–3 ta rang to‘plami.' },
      { term: 'Izchillik (Consistency)', definition: 'Barcha slaydlarda bir xil uslub, shrift va joylashuvni saqlash.' },
    ],
    steps: [
      '1. Taqdimot mavzusini tanlang (masalan, "O‘zbekiston qadimiy shaharlari" yoki "Qayta tiklanuvchi energiya").',
      '2. Auditoriya yoshi va taqdimot maqsadini 2 gap bilan yozing.',
      '3. 5 ta slayd uchun Storyboard (har slayd sarlavhasi, rasmi va matn g‘oyasi) tuzing.',
      '4. Umumiy shrift (masalan, Segoe UI / Arial) va 2 ta asosiy rangni belgilang.',
    ],
    practice: [
      {
        task: '"Maktab kutubxonasi yangiliklari" taqdimoti uchun 4 bandli loyiha xususiyatini yozing.',
        expected: 'Maqsad, auditoriya, rang palitrasi va slaydlar rejasi aniq ko‘rsatilgan.',
        difficulty: 'oson',
      },
      {
        task: 'Tanlagan mavzuingiz bo‘yicha 5 ta slaydning Storyboard eskizini daftarga chizing.',
        expected: 'Har bir slayd maketi va tarkibi mantiqiy ketma-ketlikda tasvirlangan.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l10-g1',
        num: '01',
        title: 'Loyihani rejalashtirish tartibi',
        topic: 'Taqdimot spetsifikatsiyasi',
        difficulty: 'Oson',
        engine: 'order',
        config: {
          prompt: 'Taqdimot loyihasini ishlab chiqish bosqichlarini to‘g‘ri tartiblang.',
          items: [
            'Mavzu, maqsad va auditoriyani aniqlash',
            'Umumiy rang palitrasi va shrift standartini belgilash',
            'Har bir slayd uchun Storyboard (kadrlar eskizi) tuzish',
            'Kerakli matn, sifatli rasm va audio materiallarni yig‘ish',
            'PowerPointda slaydlarni yaratib sinab ko‘rish',
          ],
          hint: 'Dasturga o‘tishdan oldin maqsad, dizayn standarti, Storyboard va materiallar tayyorlanadi.',
          explanation: 'Puxta loyiha xususiyati PowerPointda tartibli va sifatli ishlashni ta’minlaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Taqdimot yaratishdan oldin slaydlar sxemasi va joylashuvini qog‘ozda rejalash nima deyiladi?',
        options: ['Storyboard (Kadrlar rejasi)', 'Print Preview', 'Margin', 'ClipArt'],
        answer: 0,
        explanation: 'Storyboard har bir slaydning tuzilmasi va mazmunini oldindan chizib olish usulidir.',
      },
      {
        prompt: 'Loyiha xususiyatida (spetsifikatsiyada) qaysi savolga javob yozilishi SHART?',
        options: [
          'Kompyuter narxi qancha?',
          'Taqdimot kim uchun (auditoriya) va nima maqsadda yaratilmoqda?',
          'Internet provayderi kim?',
          'Monitor dyuymi nechchi?',
        ],
        answer: 1,
        explanation: 'Maqsad va auditoriya dizayn, matn tili va media tanlovini belgilaydi.',
      },
      {
        prompt: 'Taqdimotda barcha slaydlar chiroyli va uyg‘un ko‘rinishi uchun nechta shrift turidan foydalanish ma’qul?',
        options: ['10 xil shrift', 'Ko‘pi bilan 2 xil mos shrift', 'Har bir so‘zga har xil', 'Shriftsiz'],
        answer: 1,
        explanation: 'Ko‘pi bilan 1–2 xil shrift (sarlavha va matn uchun) vizual tartibni saqlaydi.',
      },
      {
        prompt: 'Slaydlarda "izchillik (consistency)" deganda nima tushuniladi?',
        options: [
          'Har slaydning mutlaqo boshqa rang va uslubda bo‘lishi',
          'Barcha slaydlarda yagona rang palitrasi, shrift va uslubni saqlash',
          'Matnni iloji boricha mayda yozish',
          'Har slaydda 10 ta animatsiya qo‘yish',
        ],
        answer: 1,
        explanation: 'Izchillik taqdimotga professional va yaxlit ko‘rinish beradi.',
      },
      {
        prompt: 'Yaxshi rejalashtirilgan loyiha xususiyati nimaga yordam beradi?',
        options: [
          'Vaqtni tejashga va maqsaddan chetga chiqmaslikka',
          'Fayl hajmini oshirishga',
          'Slaydlarni yashirishga',
          'Ovozni o‘chirishga',
        ],
        answer: 0,
        explanation: 'Oldindan tuzilgan reja ortiqcha qayta ishlash va xatolarning oldini oladi.',
      },
    ],
    teacherNotes: {
      method: 'Chizma (Storyboard) varaqlarini tarqatib, kelgusi darslarda yasaladigan taqdimot rejasini tuzdirish.',
      timing: '12 daqiqa tushuntirish, 23 daqiqa loyiha spetsifikatsiyasi yozish, 10 daqiqa Order va test.',
      assessment: 'Maqsad, auditoriya va Storyboard aniqligi.',
      homework: 'Keyingi darsda ishlatish uchun taqdimotingizga mos 3 ta rasm topib papkaga jamlang.',
    },
  },
  {
    id: 'g7-l11',
    grade: 7,
    no: 11,
    part: '1-yarim yillik',
    title: 'Slaydga o‘tish effektlarini qo‘shish.',
    kind: 'dars',
    hours: 1,
    tools: ['PowerPoint', 'LibreOffice Impress'],
    objectives: [
      'O‘quvchi slayd o‘tishi (Transition) va obyekt animatsiyasi (Animation) o‘rtasidagi farqni tushunadi.',
      'O‘quvchi Transitions bo‘limidan mos o‘tish effektini tanlash, davomiyligi (Duration) va "Apply To All" ni sozlay oladi.',
    ],
    intro:
      'Bir slayddan ikkinchisiga oddiy sakrab o‘tish o‘rniga sahifa varag‘iday silliq almashsa, taqdimot darhol jonlanadi. Buni "Transitions" (O‘tish effektlari) bajaradi!',
    sections: [
      {
        heading: 'Slayd o‘tish effekti (Transition) nima?',
        body: 'Transition — bu namoyish vaqtida bir slayddan keyingi slaydga o‘tishda butun slayd ekraniga beriladigan harakat effektidir. PowerPointdagi Transitions yorlig‘ida silliq (Fade, Push, Wipe) va ta’sirchan (Morph, Split) effektlar mavjud.',
        example: 'Rasmiy hisobot uchun sokin "Fade" yoki "Push" effekti eng mos tanlovdir.',
        tip: 'Har bir slaydga turlicha keskin (sinadigan, aylanadigan) o‘tish qo‘ymang — tomoshabin chalg‘ib qoladi! Butun taqdimotga bitta silliq o‘tish effektini "Apply To All" bilan qo‘llagan ma’qul.',
      },
      {
        heading: 'O‘tish tezligi (Duration) va Apply To All',
        body: 'Duration (Davomiylik) sekundlarda o‘lchanadi (masalan, 0.75 s — tez va silliq; 3.0 s — juda sekin va zerikarli). Parametrlarni sozlab bo‘lgach "Apply To All" tugmasini bossangiz, o‘sha o‘tish effekti barcha slaydlarga bir zumda tatbiq etiladi.',
        example: 'Effect Options orqali Push effektining yo‘nalishini (chapdan, o‘ngdan, pastdan) tanlash mumkin.',
      },
    ],
    keyTerms: [
      { term: 'Transition (O‘tish)', definition: 'Bir slayddan ikkinchisiga almashishda qo‘llaniladigan vizual effekt.' },
      { term: 'Duration (Davomiylik)', definition: 'O‘tish effektining necha soniyada bajarilish vaqti.' },
      { term: 'Effect Options', definition: 'Tanlangan o‘tish effektining yo‘nalishi yoki shaklini sozlash.' },
      { term: 'Apply To All', definition: 'Tanlangan o‘tish va sozlamani taqdimotdagi hamma slaydlarga qo‘llash.' },
    ],
    steps: [
      '1. 4 ta slayddan iborat taqdimotingizni oching.',
      '2. Transitions yorlig‘idan "Push" yoki "Fade" effektini tanlang.',
      '3. Duration qiymatini 01.00 soniyaga sozlang va "Effect Options" dan yo‘nalishni o‘zgartiring.',
      '4. "Apply To All" tugmasini bosib, F5 bilan natijani ko‘ring.',
    ],
    practice: [
      {
        task: 'Barcha slaydlarga bir xil "Fade" o‘tish effektini 0.75 soniya tezlikda qo‘llang.',
        expected: 'Slaydlar yumshoq va izchil almashadi.',
        difficulty: 'oson',
      },
      {
        task: 'Effect Options yordamida Wipe effektini "From Left" yo‘nalishida barcha slaydlarga bering.',
        expected: 'Har bir keyingi slayd chapdan o‘ngga silliq ochiladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l11-g1',
        num: '01',
        title: 'Transition sozlamalarini to‘ldir',
        topic: 'Slaydga o‘tish effektlari',
        difficulty: 'Oson',
        engine: 'fillblank',
        config: {
          prompt: 'Slayd o‘tish effektlari haqidagi jumlalarni to‘ldiring.',
          template: 'Bir slayddan ikkinchisiga o‘tish effekti {{0}} deyiladi. Effektning bajarilish tezligi {{1}} orqali sozlanadi. Bir xil effektni hamma slaydlarga berish uchun {{2}} bosiladi.',
          blanks: [
            { options: ['Transition', 'Animation', 'Footer'], answer: 'Transition' },
            { options: ['Duration', 'Font Size', 'Margin'], answer: 'Duration' },
            { options: ['Apply To All', 'Delete All', 'Close'], answer: 'Apply To All' },
          ],
          hint: 'Slayd almashishi — Transition, vaqt — Duration, hammaga qo‘llash — Apply To All.',
          explanation: 'Transitions menyusidagi Duration va Apply To All tugmalari izchil slayd almashishini ta’minlaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Slaydlar almashishi orasidagi vizual harakat effekti qanday ataladi?',
        options: ['Transition (O‘tish)', 'Layout', 'Formatting', 'Header'],
        answer: 0,
        explanation: 'Transition — slaydlararo o‘tish effektidir.',
      },
      {
        prompt: 'Tanlangan o‘tish effektini bir bosishda taqdimotning barcha slaydlariga qo‘yish tugmasi qaysi?',
        options: ['Copy', 'Apply To All', 'Preview', 'New Slide'],
        answer: 1,
        explanation: 'Apply To All tugmasi joriy o‘tish effektini barcha slaydlarga qo‘llaydi.',
      },
      {
        prompt: 'Slaydga o‘tishda "Duration: 05.00" qo‘yilsa nima bo‘ladi?',
        options: [
          'Slayd o‘tishi juda sekin (5 soniya) davom etib tomoshabinni zeriktiradi',
          '5 ta slayd o‘chib ketadi',
          'Ovoz 5 marta balandlashadi',
          'Hech narsa bo‘lmaydi',
        ],
        answer: 0,
        explanation: 'Odatda 0.5–1.2 soniya eng qulay va dinamik tezlik hisoblanadi.',
      },
      {
        prompt: 'Rasmiy taqdimotda har bir slaydga har xil keskin o‘tish effektlari qo‘yish nega tavsiya etilmaydi?',
        options: [
          'Dastur ruxsat bermaydi',
          'Tinglovchilarning e’tiborini mavzudan chalg‘itib yuboradi',
          'Matn o‘chib ketadi',
          'Slayd raqami buziladi',
        ],
        answer: 1,
        explanation: 'Izchil va bitta sokin uslubdagi o‘tish effekti e’tiborni mazmunda saqlaydi.',
      },
      {
        prompt: 'O‘tish effektining yo‘nalishini (masalan, chapdan yoki pastdan chiqishini) qaysi tugma o‘zgartiradi?',
        options: ['Effect Options', 'Bold', 'Margins', 'Save'],
        answer: 0,
        explanation: 'Effect Options tanlangan effektning qo‘shimcha yo‘nalish variantlarini beradi.',
      },
    ],
    teacherNotes: {
      method: 'Sokin (Fade) va haddan tashqari keskin o‘tishli ikkita taqdimotni solishtirish.',
      timing: '10 daqiqa nazariya, 23 daqiqa Transitions amaliyoti, 12 daqiqa FillBlank va test.',
      assessment: 'O‘tish effekti izchilligi va Duration me’yori.',
      homework: 'O‘zingiz rejalashtirgan loyihaga qaysi Transition mosligini asoslab yozing.',
    },
  },
  {
    id: 'g7-l12',
    grade: 7,
    no: 12,
    part: '1-yarim yillik',
    title: 'Slaydlarga vaqt va audio qo‘shish',
    kind: 'dars',
    hours: 1,
    tools: ['PowerPoint', 'LibreOffice Impress'],
    objectives: [
      'O‘quvchi "Advance Slide" bo‘limida sichqoncha bosilganda (On Mouse Click) va belgilangan vaqtdan keyin (After) avtomatik o‘tishni sozlay oladi.',
      'O‘quvchi slaydga audio qo‘shish, uning "Play in Background" va "Across Slides" sozlamalarini boshqara oladi.',
    ],
    intro:
      'Ko‘rgazma yoki bayram zalida taqdimot hech kim tugma bosmasa ham o‘z-o‘zidan slayd almashib, orqa fonda mayin musiqa yangrab turishini ko‘rganmisiz? Bugun aynan shuni sozlaymiz!',
    sections: [
      {
        heading: 'Slayd almashish vaqtini sozlash (Advance Slide)',
        body: 'Transitions → Timing guruhida "Advance Slide" bo‘limi bor: "On Mouse Click" — ma’ruzachi gapirib bo‘lgach sichqoncha/strelka bosganda o‘tadi; "After" — ko‘rsatilgan soniyadan so‘ng (masalan, 00:05.00) keyingi slaydga avtomatik o‘tadi. Shuningdek "Rehearse Timings" orqali nutqingizga mos real vaqtni yozib olish mumkin.',
        example: 'Stenddagi avtomatik reklama taqdimoti uchun "After 4 sec" va Loop (Set Up Slide Show) yoqiladi.',
        tip: 'Agar taqdimotni sinf oldida o‘zingiz gapirib himoya qilsangiz, "After" ni o‘chirib faqat "On Mouse Click" qoldiring — aks holda slayd siz gapirib ulgurmasingizdan o‘tib ketadi!',
      },
      {
        heading: 'Audio qo‘shish va fonda ijro etish',
        body: 'Insert → Audio orqali kompyuterdan ovoz qo‘shiladi yoki to‘g‘ridan-to‘g‘ri mikrofondan yoziladi (Record Audio). Audio belgisini tanlab Playback yorlig‘idan "Start: Automatically", "Play Across Slides" (barcha slaydlar davomida uzilmay chalinishi) va "Hide During Show" (ovoz karnayi rasmini namoyishda yashirish) yoqiladi.',
        example: 'Musiqa ovozi nutqqa xalaqit bermasligi uchun Audio → Volume → Low tanlanadi.',
      },
    ],
    keyTerms: [
      { term: 'Advance Slide (After)', definition: 'Belgilangan soniyalar o‘tgach keyingi slaydga avtomatik o‘tish sozlamasi.' },
      { term: 'On Mouse Click', definition: 'Slaydni faqat ma’ruzachi bosganda almashtirish rejimi.' },
      { term: 'Play Across Slides', definition: 'Musiqaning bitta slaydda to‘xtamay, butun taqdimot bo‘ylab yangrashini yoqish.' },
      { term: 'Rehearse Timings', definition: 'Nutq bilan sinov o‘tkazib, har slayd uchun ideal vaqtni yozib olish.' },
    ],
    steps: [
      '1. Taqdimotingizga Transitions → Timing dan har bir slaydga "After: 00:04.00" vaqtini qo‘ying.',
      '2. 1-slaydga Insert → Audio orqali sokin audio fayl joylashtiring.',
      '3. Audio → Playback yorlig‘ida "Play in Background" (yoki Automatically + Across Slides + Hide During Show) ni yoqing.',
      '4. F5 tugmasi bilan hech narsani bosmasdan slaydlar va musiqa ishlashini tekshiring.',
    ],
    practice: [
      {
        task: 'Maktab haqidagi 4 slaydli fotoko‘rgazmani har 3 soniyada o‘zi almashadigan va fonda musiqa chalinadigan qiling.',
        expected: 'After 00:03.00 va Play Across Slides yoqiladi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Ovoz karnaychasi belgisi namoyishda ekranda ko‘rinmasligi uchun kerakli parametrni yoqing.',
        expected: 'Hide During Show belgilanadi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g7-l12-g1',
        num: '01',
        title: 'Avtomatik taqdimot va audio',
        topic: 'Vaqt va Audio',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'PowerPoint Playback va Timing sozlamalarini vazifasi bilan bog‘lang.',
          pairs: [
            { left: 'On Mouse Click', right: 'Faqat ma’ruzachi bosganda keyingi slaydga o‘tish' },
            { left: 'After: 00:05.00', right: '5 soniyadan keyin avtomatik keyingi slaydga o‘tish' },
            { left: 'Play Across Slides', right: 'Audio fayl barcha slaydlar davomida uzilmay chalinishi' },
            { left: 'Hide During Show', right: 'Namoyishda audio karnay belgisini yashirib qo‘yish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Slaydni hech qanday tugma bosmasdan, masalan 5 soniyadan keyin avtomatik almashtirish uchun nima sozlanadi?',
        options: [
          'Transitions → Timing → After',
          'Home → Font',
          'View → Zoom',
          'Insert → Table',
        ],
        answer: 0,
        explanation: 'Advance Slide bo‘limidagi After katakchasi avtomatik o‘tish vaqtini belgilaydi.',
      },
      {
        prompt: 'Birinchi slaydga qo‘yilgan musiqa 2, 3, 4-slaydlarga o‘tganda ham o‘chib qolmasligi uchun qaysi sozlama yoqiladi?',
        options: ['Stop on Click', 'Play Across Slides', 'Mute', 'Trim Audio'],
        answer: 1,
        explanation: 'Play Across Slides musiqani keyingi slaydlarda ham davom ettiradi.',
      },
      {
        prompt: 'Ma’ruzachi sinf oldida o‘zi gapirib tushuntiradigan taqdimotda qaysi o‘tish usuli afzal?',
        options: ['On Mouse Click', 'After 2 seconds', 'Audio Mute', 'Hide Slide'],
        answer: 0,
        explanation: 'On Mouse Click ma’ruzachiga o‘z nutqi tezligiga mos ravishda slayd almashtirish imkonini beradi.',
      },
      {
        prompt: 'Namoyish paytida ekranda kulrang karnay belgisini ko‘rsatmaslik uchun nima belgilanadi?',
        options: ['Loop until Stopped', 'Hide During Show', 'Rewind', 'Fade In'],
        answer: 1,
        explanation: 'Hide During Show namoyish vaqtida audio ikonasini yashiradi.',
      },
      {
        prompt: 'Har bir slaydga nutqqa ketadigan vaqtni jonli mashq qilib yozib olish funksiyasi qaysi?',
        options: ['Rehearse Timings', 'Spell Check', 'Crop', 'Merge'],
        answer: 0,
        explanation: 'Rehearse Timings ma’ruza repetitsiyasi paytida har bir slayd vaqtini avtomatik qayd etadi.',
      },
    ],
    teacherNotes: {
      method: '"Avtomatik stend" va "Jonli ma’ruza" rejimlari o‘rtasidagi farqni ko‘rsatish.',
      timing: '10 daqiqa tushuntirish, 25 daqiqa audio va vaqt sozlash, 10 daqiqa Match va test.',
      assessment: 'Audio uzilmay ishlashi va After/Click mantiqan to‘g‘ri qo‘llangani.',
      homework: 'Taqdimotning bir slaydi uchun 10 soniyalik ovozli izoh matnini yozib keling.',
    },
  },
  {
    id: 'g7-l13',
    grade: 7,
    no: 13,
    part: '1-yarim yillik',
    title: 'Animatsiya effektini qo‘shish',
    kind: 'dars',
    hours: 1,
    tools: ['PowerPoint', 'LibreOffice Impress'],
    objectives: [
      'O‘quvchi slayd obyektlariga (matn, rasm, shakl) beriladigan animatsiyaning 3 asosiy guruhini (Entrance, Emphasis, Exit) farqlaydi.',
      'O‘quvchi bitta obyektga bir nechta animatsiya qo‘shish uchun "Add Animation" dan to‘g‘ri foydalanadi.',
    ],
    intro:
      'Transition butun slayd almashishini boshqarsa, Animation (Animatsiya) — slayd ichidagi alohida so‘z, rasm yoki strelkaning qanday paydo bo‘lishi, ajralib turishi va g‘oyib bo‘lishini boshqaradi!',
    sections: [
      {
        heading: 'Animatsiyaning to‘rt turi',
        body: 'Animations yorlig‘ida yulduzcha ranglari bo‘yicha 4 guruh bor: 1) Entrance (Yashil — kirish/paydo bo‘lish: Fade, Fly In); 2) Emphasis (Sariq — e’tiborni tortish: Pulse, Spin); 3) Exit (Qizil — chiqish/yo‘qolish: Fly Out); 4) Motion Paths — obyektni chizilgan yo‘l bo‘ylab yurgizish.',
        example: 'Matn bandlari birin-ketin chiqishi uchun Entrance → Appear yoki Fly In qo‘yamiz.',
        tip: 'MUHIM QOIDA: Bitta rasmga ham kirish, ham chiqish animatsiyasi bermoqchi bo‘lsangiz, oddiy galereyadan bosmang (eski animatsiyani o‘chirib yuboradi!), balki "Add Animation" tugmasidan foydalaning!',
      },
      {
        heading: 'Animatsiya tartibi va Animation Pane',
        body: 'Obyektga animatsiya berilgach, yonida 1, 2, 3 kabi tartib raqamlari chiqadi. "Animation Pane" panelini ochib, qaysi obyekt birinchi, qaysinisi ikkinchi harakatlanishini ko‘rish va o‘zgartirish mumkin.',
        example: 'Avval savol matni (1), keyin rasm (2), oxirida javob (3) chiqadi.',
      },
    ],
    keyTerms: [
      { term: 'Entrance (Yashil)', definition: 'Obyektning slaydda paydo bo‘lish (kirish) animatsiyasi.' },
      { term: 'Emphasis (Sariq)', definition: 'Slaydda turgan obyektning rang, o‘lcham yoki aylanish bilan ajralishi.' },
      { term: 'Exit (Qizil)', definition: 'Obyektning slayddan chiqib ketish (yo‘qolish) animatsiyasi.' },
      { term: 'Add Animation', definition: 'Mavjud animatsiyani o‘chirmasdan bitta obyektga qo‘shimcha animatsiya qo‘shish.' },
    ],
    steps: [
      '1. Slaydga sarlavha, rasm va strelka shakli joylashtiring.',
      '2. Rasmni tanlab Animations → Entrance (Yashil) dan "Fly In" bering.',
      '3. O‘sha rasmga "Add Animation" tugmasi orqali sariq "Pulse" (Emphasis) qo‘shing.',
      '4. "Animation Pane" ni ochib, 1 va 2 raqamli harakatlarni "Play" qilib tekshiring.',
    ],
    practice: [
      {
        task: 'Viktorina slaydi tuzib, avval savol (1), so‘ng rasm (2), oxirida to‘g‘ri javob (3) chiqadigan qiling.',
        expected: 'Entrance animatsiyalari 1 → 2 → 3 tartibida ishlaydi.',
        difficulty: 'oson',
      },
      {
        task: 'Quyosh shakliga Motion Paths (yoki Spin) bilan aylanish va chiqish animatsiyasini "Add Animation" da biriktiring.',
        expected: 'Bitta shaklda ikkita ketma-ket animatsiya ishlaydi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l13-g1',
        num: '01',
        title: 'Animatsiya guruhlarini ajrat',
        topic: 'Animatsiya turlari',
        difficulty: 'Oson',
        engine: 'sort',
        config: {
          prompt: 'Animatsiya effektlarini ularning rang guruhiga ko‘ra ajrating.',
          buckets: ['Entrance (Yashil — kirish)', 'Emphasis (Sariq — ajratish)', 'Exit (Qizil — chiqish)'],
          items: [
            { label: 'Rasmning sahnaga uchib kirishi (Fly In)', bucket: 'Entrance (Yashil — kirish)' },
            { label: 'Matnning asta-sekin paydo bo‘lishi (Fade In)', bucket: 'Entrance (Yashil — kirish)' },
            { label: 'Obyektning bir joyda aylanishi (Spin)', bucket: 'Emphasis (Sariq — ajratish)' },
            { label: 'Muhim sonning kattalashib-kichrayishi (Pulse)', bucket: 'Emphasis (Sariq — ajratish)' },
            { label: 'Eski rasmning slayddan uchib chiqib ketishi (Fly Out)', bucket: 'Exit (Qizil — chiqish)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'PowerPointda Yashil rangli animatsiya yulduzchalari nimani bildiradi?',
        options: [
          'Exit (Chiqib ketish)',
          'Entrance (Paydo bo‘lish/kirish)',
          'Emphasis (Ajratib ko‘rsatish)',
          'Slayd o‘tishi',
        ],
        answer: 1,
        explanation: 'Yashil — kirish (Entrance), Sariq — urg‘u (Emphasis), Qizil — chiqish (Exit).',
      },
      {
        prompt: 'Bitta obyektga oldingi animatsiyasini o‘chirmasdan ikkinchi animatsiya qo‘shish tugmasi qaysi?',
        options: ['Apply To All', 'Add Animation', 'Transition', 'Reset'],
        answer: 1,
        explanation: 'Add Animation mavjud effekt yoniga yangisini qo‘shadi.',
      },
      {
        prompt: 'Barcha animatsiyalar ro‘yxatini va ketma-ketligini boshqaruvchi oyna qaysi?',
        options: ['Format Painter', 'Animation Pane', 'Print Preview', 'Slide Sorter'],
        answer: 1,
        explanation: 'Animation Pane slayddagi barcha animatsiyalar tartibi va vaqtini ko‘rsatadi.',
      },
      {
        prompt: 'Obyektni slayd bo‘ylab chizilgan traektoriya bo‘yicha yurgizuvchi animatsiya turi qaysi?',
        options: ['Motion Paths', 'Fade', 'Exit', 'Header'],
        answer: 0,
        explanation: 'Motion Paths (Harakat yo‘llari) obyektni belgilangan yo‘nalishda siljitadi.',
      },
      {
        prompt: 'Slaydda turgan tugma yoki matnga tinglovchi diqqatini jalb qilish uchun qaysi guruh mos?',
        options: ['Exit (Qizil)', 'Emphasis (Sariq)', 'Trash', 'Crop'],
        answer: 1,
        explanation: 'Emphasis (Urg‘u) obyektni sahnadan yo‘qotmasdan harakat yoki rang bilan ajratib ko‘rsatadi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda "Add Animation" ni bosmay turib almashtirganda birinchi animatsiya yo‘qolib qolishini jonli ko‘rsatish.',
      timing: '10 daqiqa tushuntirish, 25 daqiqa viktorina slaydi yasash, 10 daqiqa Sort va test.',
      assessment: 'Obyektlar mantiqiy ketma-ketlikda va ortiqcha bezaklarsiz animatsiyalanganligi.',
      homework: '3 bosqichli suv aylanishi sxemasi slaydi uchun animatsiya rejasini yozing.',
    },
  },
  {
    id: 'g7-l14',
    grade: 7,
    no: 14,
    part: '1-yarim yillik',
    title: 'Animatsiya va vaqtni moslash',
    kind: 'dars',
    hours: 1,
    tools: ['PowerPoint', 'LibreOffice Impress'],
    objectives: [
      'O‘quvchi animatsiya boshlanish shartlarini ("On Click", "With Previous", "After Previous") farqlaydi va to‘g‘ri qo‘llaydi.',
      'O‘quvchi "Duration" va "Delay" (kechikish) orqali murakkab sinxron animatsiya va vaqtni moslay oladi.',
    ],
    intro:
      'Agar slaydga 6 ta rasm qo‘yib hammasini "On Click" qilsangiz, taqdimotda sichqonchani 6 marta bosishingizga to‘g‘ri keladi! "With Previous" va "After Previous" bilan esa ular soat mexanizmidek uyg‘un ishlaydi.',
    sections: [
      {
        heading: 'Animatsiyani ishga tushirish usullari (Start)',
        body: '1) On Click — sichqoncha bosilganda boshlanadi (izohlab turishda qulay); 2) With Previous — oldingi animatsiya (yoki slayd ochilishi) bilan BIR VAQTDA boshlanadi; 3) After Previous — oldingi animatsiya tugashi BILANOQ navbatma-navbat boshlanadi.',
        example: 'Sarlavha chiqishi bilan birga rasm chiqishi uchun "With Previous", undan keyin 1, 2, 3-bandlar ketma-ket chiqishi uchun "After Previous" tanlanadi.',
        tip: 'Animation Pane oynasida vaqt chizig‘i (Timeline) rangli tayoqchalar shaklida ko‘rinadi — ularni surib animatsiyalar boshlanishini aniq soniyalargacha moslash mumkin!',
      },
      {
        heading: 'Duration (Davomiylik) va Delay (Kechikish)',
        body: 'Duration — animatsiya qancha vaqt harakatlanishi (masalan, 0.50 s). Delay — oldingi qadam tugagach necha soniya kutib turib keyin boshlanishi (masalan, 1.00 s pauza). Delay yordamida matnni o‘qishga yetarli vaqt qoldiramiz.',
        example: 'Savol chiqadi → 3 soniya Delay → to‘g‘ri javob animatsiyasi ishga tushadi.',
      },
    ],
    keyTerms: [
      { term: 'With Previous', definition: 'Oldingi hodisa bilan bir vaqtda (parallel) ishga tushish.' },
      { term: 'After Previous', definition: 'Oldingi animatsiya tugagandan so‘ng ketma-ket ishga tushish.' },
      { term: 'Delay (Kechikish)', definition: 'Animatsiya boshlanishidan oldin kutiladigan pauza vaqti.' },
      { term: 'Timeline (Vaqt chizig‘i)', definition: 'Animation Pane dagi harakatlar davomiyligini ko‘rsatuvchi shkalalar.' },
    ],
    steps: [
      '1. Avvalgi darsdagi 3 ta obyektli slaydni va "Animation Pane" ni oching.',
      '2. 1-obyektni "With Previous" ga o‘tkazing (slayd ochilishi bilan chiqadi).',
      '3. 2-obyektni "After Previous" va "Delay: 00.50" ga sozlang.',
      '4. 3-obyekt uchun "After Previous", "Delay: 01.00" qo‘yib F5 da uyg‘unlikni tekshiring.',
    ],
    practice: [
      {
        task: 'Svetofor chiroqlarini (Qizil → Sariq → Yashil) har 1.5 soniyada ketma-ket yonadigan qilib Delay bilan moslang.',
        expected: 'Chiroqlar avtomatik va aniq intervalda yonadi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Ikkita qahramon rasmini "With Previous" bilan bir vaqtda qarama-qarshi tomondan sahna o‘rtasiga keltiring.',
        expected: 'Ikkala rasm baravar uchib kelib uchrashadi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g7-l14-g1',
        num: '01',
        title: 'Animatsiya vaqtini sinxronla',
        topic: 'Timing va Delay',
        difficulty: 'O‘rta',
        engine: 'calc',
        config: {
          prompt: '1-animatsiya 2 soniya (Duration=2), 2-animatsiya esa "After Previous" bo‘lib Delay=1.5 va Duration=1 bo‘lsa, ikkalasi jami necha soniyada tugaydi?',
          unit: 'soniya',
          correctAnswer: 4.5,
          tolerance: 0.1,
          steps: [
            '1-animatsiya bajarilishi = 2 soniya.',
            'Keyin 2-animatsiya kutishi (Delay) = 1.5 soniya.',
            '2-animatsiya bajarilishi (Duration) = 1 soniya.',
            'Jami: 2 + 1.5 + 1 = 4.5 soniya.',
          ],
          hint: 'After Previous ketma-ket bo‘lgani uchun barcha vaqtlarni qo‘shing: 2 + 1.5 + 1.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ikkita animatsiyani aynan bir vaqtda (baravar) ishga tushirish uchun qaysi Start rejimi tanlanadi?',
        options: ['On Click', 'With Previous', 'After Previous', 'Stop All'],
        answer: 1,
        explanation: 'With Previous oldingi hodisa bilan bir vaqtda boshlanadi.',
      },
      {
        prompt: 'Oldingi animatsiya tugagach, sichqoncha bosmasdan avtomatik navbatdagisini boshlash rejimi qaysi?',
        options: ['After Previous', 'On Click', 'Hide', 'Crop'],
        answer: 0,
        explanation: 'After Previous ketma-ket avtomatik ijroni ta’minlaydi.',
      },
      {
        prompt: 'Animation Pane dagi "Delay" parametri nimani bildiradi?',
        options: [
          'Animatsiya boshlanishidan oldingi kutish (pauza) vaqtini',
          'Slaydni o‘chirishni',
          'Matn shriftini',
          'Ovoz balandligini',
        ],
        answer: 0,
        explanation: 'Delay (Kechikish) harakat boshlanishini ko‘rsatilgan soniyaga kechiktiradi.',
      },
      {
        prompt: 'Agar slayd "After: 3 sec" ga qo‘yilgan bo‘lsa, ammo ichidagi animatsiyalar jami 6 soniya davom etsa nima xato bo‘ladi?',
        options: [
          'Hech qanday xato yo‘q',
          'Animatsiyalar tugamasdan turib keyingi slaydga o‘tib ketadi',
          'Musiqa tezlashadi',
          'Rasm kattalashadi',
        ],
        answer: 1,
        explanation: 'Slayd vaqti (Advance Slide) ichidagi barcha animatsiyalar tugash vaqtidan katta bo‘lishi kerak.',
      },
      {
        prompt: 'Animatsiya harakatining o‘zi qancha tez yoki sekin bajarilishini qaysi maydon belgilaydi?',
        options: ['Duration', 'Layout', 'Bookmark', 'Margins'],
        answer: 0,
        explanation: 'Duration animatsiya effektining bajarilish davomiyligini belgilaydi.',
      },
    ],
    teacherNotes: {
      method: 'Svetofor yoki poyga mashinalari misolida With Previous vs After Previous ni ko‘rsatish.',
      timing: '10 daqiqa tushuntirish, 25 daqiqa vaqt moslash, 10 daqiqa Calc o‘yini va test.',
      assessment: 'Slayd vaqti va animatsiyalar davomiyligi o‘zaro ziddiyatsiz moslangani.',
      homework: '4 ta slayddan iborat avtomatik mini-multfilm animatsiyasi ssenariysini yozing.',
    },
  },
  {
    id: 'g7-l15',
    grade: 7,
    no: 15,
    part: '1-yarim yillik',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['PowerPoint', 'LibreOffice Impress'],
    objectives: [
      'O‘quvchi loyiha spetsifikatsiyasi, o‘tish effektlari (Transitions), vaqt, audio va animatsiya sinxronizatsiyasi bilimlarini tekshiradi.',
      'O‘quvchi tayyor slaydlarni avtomatik va ovozli ko‘rinishda namoyishga tayyorlaydi.',
    ],
    intro:
      'PowerPoint taqdimot dizayni va multimedia animatsiyasi bo‘limini yakunlab, loyihaviy va nazariy nazorat ishini bajaramiz.',
    sections: [
      {
        heading: 'Taqdimot nazorati asosiy talablari',
        body: 'Taqdimotda barcha slaydlar yagona Transition uslubida bo‘lishi, audio fonda Play Across Slides bilan chalinishi hamda obyektlar Add Animation, With Previous/After Previous bilan vaqtga moslangan bo‘lishi lozim.',
        example: 'Masalan, 3 ta slayd × 5 soniya = 15 soniyalik avtomatik taqdimot.',
        tip: 'Topshirishdan oldin F5 tugmasini bosib boshidan oxirigacha o‘zingiz ko‘rib chiqing — yashirin xatolar shu paytda bilinadi!',
      },
      {
        heading: 'Animatsiya va o‘tish farqi',
        body: 'Transition — slaydlar almashishi, Animation — slayd ichidagi obyektlar harakati ekanini adashtirmang.',
        example: 'Fade (Transition) slaydni almashtiradi, Fly In (Animation) rasmni olib kiradi.',
      },
    ],
    keyTerms: [
      { term: 'Transition va Animation', definition: 'Slaydlararo o‘tish hamda slayd ichidagi obyekt harakati.' },
      { term: 'Duration / Delay', definition: 'Harakat davomiyligi va boshlanishdan oldingi kutish.' },
      { term: 'Play Across Slides', definition: 'Audioning slaydlar almashganda ham davom etishi.' },
      { term: 'Apply To All', definition: 'O‘tish effektini barcha slaydlarga tatbiq etish.' },
    ],
    steps: [
      '1. 3 slaydli "Ekologiya" taqdimotini oching.',
      '2. Barcha slaydlarga bir xil Fade o‘tishini (Apply To All) qo‘ying.',
      '3. 2-slayddagi 2 ta rasmni With Previous / After Previous bilan animatsiyalang.',
      '4. F5 rejimida barchasini tekshirib saqlang.',
    ],
    practice: [
      {
        task: 'Slaydlardagi barcha tugma va rasmlarning chiqish tartibini Animation Pane da tekshirib tartiblang.',
        expected: 'Sarlavha → Matn → Rasm ketma-ketligi xatosiz ishlaydi.',
        difficulty: 'oson',
      },
      {
        task: 'Audio belgisini namoyishda yashirib, musiqani slayd boshidan avtomatik yoqing.',
        expected: 'Hide During Show va Start: Automatically sozlanadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l15-g1',
        num: '01',
        title: 'Taqdimot nazorat krossvordi',
        topic: 'PowerPoint atamalari',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: 'PowerPoint animatsiya va o‘tish atamalarini toping (bosh harflarda yozing).',
          clues: [
            { id: 'c1', clue: 'Slayddan slaydga o‘tish effekti (inglizcha, birlikda)', answer: 'TRANSITION' },
            { id: 'c2', clue: 'Animatsiya boshlanishidan oldingi pauza/kechikish vaqti', answer: 'DELAY' },
            { id: 'c3', clue: 'Harakatning davomiylik vaqti', answer: 'DURATION' },
            { id: 'c4', clue: 'Slayddagi yashil kirish animatsiyasi guruhi', answer: 'ENTRANCE' },
          ],
          hint: 'Atamalar: TRANSITION, DELAY, DURATION, ENTRANCE.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Slayd ichidagi rasm yoki matnning harakatlanishi qanday nomlanadi?',
        options: ['Transition', 'Animation', 'Margin', 'Header'],
        answer: 1,
        explanation: 'Obyektlar harakati Animation, slaydlar almashishi esa Transition deyiladi.',
      },
      {
        prompt: 'Bitta obyektga birinchi effektini o‘chirmay ikkinchisini qo‘shish uchun qaysi tugma bosiladi?',
        options: ['Add Animation', 'Effect Options', 'New Slide', 'Hide Slide'],
        answer: 0,
        explanation: 'Add Animation bir obyektda bir nechta ketma-ket effekt yaratadi.',
      },
      {
        prompt: 'Sichqonchani bosmasdan oldingi animatsiya tugashi bilan keyingisi boshlanishi uchun nima tanlanadi?',
        options: ['On Click', 'After Previous', 'With Previous', 'Crop'],
        answer: 1,
        explanation: 'After Previous ketma-ket avtomatik boshlanishni ta’minlaydi.',
      },
      {
        prompt: 'Qaysi rangdagi animatsiyalar obyektni sahnadan chiqarib yuborish uchun ishlatiladi?',
        options: ['Yashil', 'Sariq', 'Qizil (Exit)', 'Ko‘k'],
        answer: 2,
        explanation: 'Qizil yulduzchali Exit animatsiyalari obyektni slayddan yo‘qotadi.',
      },
      {
        prompt: 'Taqdimotdagi barcha slaydlarga bir xil o‘tish effektini qo‘yish tugmasi qaysi?',
        options: ['Apply To All', 'Play Across Slides', 'Storyboard', 'Rehearse'],
        answer: 0,
        explanation: 'Apply To All tanlangan o‘tishni barcha slaydlarga tatbiq qiladi.',
      },
    ],
    teacherNotes: {
      method: 'Amaliy taqdimot himoyasi + nazariy test.',
      timing: '25 daqiqa amaliy nazorat, 15 daqiqa krossvord/test, 5 daqiqa tahlil.',
      assessment: 'O‘tish, audio va animatsiya vaqti uyg‘unligi.',
      homework: 'Keyingi darsga "Auditoriya" so‘zi ma’nosini ta’riflab kelish.',
    },
  },
  {
    id: 'g7-l16',
    grade: 7,
    no: 16,
    part: '1-yarim yillik',
    title: 'Auditoriya va maqsadni bilish',
    kind: 'dars',
    hours: 1,
    tools: ['PowerPoint', 'LibreOffice Impress'],
    objectives: [
      'O‘quvchi har xil yosh va kasb egalari (bolalar, tengdoshlar, ustozlar, tadbirkorlar) uchun taqdimot uslubini moslashni biladi.',
      'O‘quvchi taqdimot maqsadiga (axborot berish, o‘rgatish, ishontirish) qarab dalillar va dizayn tanlay oladi.',
    ],
    intro:
      '1-sinf o‘quvchisi uchun tayyorlangan ertak taqdimotini maktab direktoriga hisobot sifatida ko‘rsatib bo‘lmaydi! Muvaffaqiyatli chiqish siri — auditoriyangiz va maqsadingizni aniq bilishdir.',
    sections: [
      {
        heading: 'Auditoriyani tahlil qilish',
        body: 'Taqdimot tayyorlashda tomoshabinlarning 4 jihatini hisobga olamiz: 1) Yoshi (boshlang‘ich sinfga yorqin rasmlar va qisqa so‘zlar; kattalarga fakt va grafiklar); 2) Bilim darajasi (notanish atamalarni tushuntirish kerakmi?); 3) Qiziqishlari; 4) Rasmiy yoki norasmiy muhit.',
        example: '5-sinf bolalari uchun: yirik shrift, qiziqarli qahramonlar, qisqa gaplar. Ota-onalar yig‘ilishi uchun: aniq jadval, diagramma va tinch ranglar.',
        tip: 'Auditoriyani charchatmaslik uchun slayddagi matnni baland ovozda so‘zma-so‘z o‘qib bermang — siz tushuntiring, slayd esa fikringizni tasvirlab tursin!',
      },
      {
        heading: 'Taqdimot maqsadi',
        body: 'Har bir chiqishning bosh maqsadi bo‘ladi: Axborot berish (yangilik yetkazish), O‘rgatish (qadam-baqadam ko‘rsatma berish) yoki Ishontirish (masalan, "Maktabda bog‘ yarataylik" loyihasini ma’qullatish). Maqsadga ko‘ra yakuniy slayd ham "Savollar" yoki "Harakatga chaqiruv" bilan tugaydi.',
        example: 'Ishontiruvchi taqdimotda muammo → yechim → foyda va natija grafigi ko‘rsatiladi.',
      },
    ],
    keyTerms: [
      { term: 'Maqsadli auditoriya', definition: 'Taqdimot mo‘ljallangan aniq tinglovchi yoki tomoshabinlar guruhi.' },
      { term: 'Uslub (Tone)', definition: 'Auditoriyaga qarab tanlanadigan rasmiy yoki do‘stona bayon usuli.' },
      { term: 'Ishontiruvchi maqsad', definition: 'Tinglovchilarni biror g‘oyani qo‘llab-quvvatlashga undash.' },
      { term: 'O‘rgatuvchi maqsad', definition: 'Yangi ko‘nikma yoki mavzuni bosqichma-bosqich tushuntirish.' },
    ],
    steps: [
      '1. Bitta mavzuni tanlang: "Suvni tejash".',
      '2. Uni 2-sinf o‘quvchilari uchun qanday dizayn va so‘zlar bilan tayyorlashni yozing.',
      '3. Xuddi shu mavzuni maktab rahbariyati uchun qanday statistik grafiklar bilan ko‘rsatishni taqqoslang.',
      '4. Tanlangan auditoriya uchun 1 ta namuna slayd yasang.',
    ],
    practice: [
      {
        task: 'Boshlang‘ich sinf va 10-sinf auditoriyasi uchun "Sog‘lom ovqatlanish" slaydlarini solishtiring.',
        expected: 'Kichiklar uchun ertak/rasmli, kattalar uchun vitaminlar jadvali va ilmiy faktli dizayn tanlanadi.',
        difficulty: 'oson',
      },
      {
        task: 'Maktabda robototexnika to‘garagi ochishga ishontiruvchi 3 ta kuchli dalil slayd rejasini tuzing.',
        expected: 'Muammo, qiziqish statistikasi va kutilayotgan natijalar ko‘rsatiladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l16-g1',
        num: '01',
        title: 'Auditoriyaga mos dizayn tanla',
        topic: 'Auditoriya va maqsad',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Quyidagi vaziyatda qaysi taqdimot yondashuvi eng to‘g‘ri?',
          scenario: 'Siz 2-sinf o‘quvchilariga "Yo‘l harakati qoidalari" haqida 5 daqiqalik taqdimot o‘tkazishingiz kerak. Qaysi uslubni tanlaysiz?',
          options: [
            {
              text: '12 pt shriftda uzun qonun moddalari va murakkab jadvallarni joylayman',
              isCorrect: false,
              feedback: 'Noto‘g‘ri! 2-sinf bolalari uzun rasmiy matndan tez charchaydi.',
            },
            {
              text: 'Yorqin svetofor rasmlari, qisqa 3–4 so‘zli qoidalar va qiziqarli animatsiyali misollar qo‘llayman',
              isCorrect: true,
              feedback: 'Ajoyib! Yosh auditoriya uchun vizual, qisqa va tushunarli bayon eng samarali.',
            },
            {
              text: 'Faqat oq fonda hech qanday rasmsiz qora matn qoldiraman',
              isCorrect: false,
              feedback: 'Kichik bolalar diqqatini jamlash uchun ko‘rgazmali rasmlar juda zarur.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Taqdimot dizayni, ranglari va atamalarini tanlashda eng avval nimani hisobga olish kerak?',
        options: [
          'Proyektor og‘irligini',
          'Auditoriya yoshi, qiziqishi va taqdimot maqsadini',
          'Sinf derazalari sonini',
          'Printer rusumini',
        ],
        answer: 1,
        explanation: 'Auditoriya va maqsad slayd uslubi, tili hamda grafikalarini belgilaydi.',
      },
      {
        prompt: 'Maktab rahbariyati yoki ilmiy konferensiya uchun qaysi dizayn uslubi mos?',
        options: [
          'Haddan tashqari ko‘p multfilm stikerlari',
          'Tinch ranglar, aniq grafik/jadval va izchil rasmiy uslub',
          'Har slaydda 5 xil yorqin neon rang',
          'Faqat qo‘shiq matnlari',
        ],
        answer: 1,
        explanation: 'Rasmiy auditoriya aniqlik, faktlar va sokin professional dizaynni qadrlaydi.',
      },
      {
        prompt: 'Ma’ruzachi taqdimot paytida slayddagi matn bilan qanday ishlashi eng to‘g‘ri?',
        options: [
          'Ekranga qarab barcha matnni so‘zma-so‘z o‘qib berish',
          'Slaydda qisqa tayanch fikrni ko‘rsatib, auditoriyaga qarab jonli izohlash',
          'Auditoriyaga orqa o‘girib turish',
          'Slaydni umuman ko‘rsatmaslik',
        ],
        answer: 1,
        explanation: 'Slayd tayanch bo‘lib xizmat qiladi, asosiy tushuntirishni ma’ruzachi jonli beradi.',
      },
      {
        prompt: 'Boshlang‘ich sinf o‘quvchilari uchun mo‘ljallangan taqdimotning muhim xususiyati qaysi?',
        options: [
          'Kichik 10 pt shrift',
          'Ko‘rgazmali yorqin rasmlar, sodda til va yirik shrift',
          'Murakkab moliyaviy formulalar',
          'Rasmlarsiz uzun abzatslar',
        ],
        answer: 1,
        explanation: 'Bolalar uchun tushunarli sodda til va yirik ko‘rgazmali tasvirlar zarur.',
      },
      {
        prompt: 'Agar maqsad "tinglovchilarni yangi to‘garakka yozilishga ishontirish" bo‘lsa, oxirgi slaydda nima bo‘lishi foydali?',
        options: [
          'Qanday yozilish haqida aniq chaqiruv va aloqa ma’lumoti',
          'Bo‘sh qora ekran',
          'Boshqa mavzudagi rasm',
          'Matematika formulalari',
        ],
        answer: 0,
        explanation: 'Ishontiruvchi taqdimot aniq harakatga chaqiruv (Call to Action) bilan yakunlanadi.',
      },
    ],
    teacherNotes: {
      method: 'Bir mavzuni ikki xil auditoriyaga moslab ko‘rsatish bo‘yicha guruhli mashg‘ulot.',
      timing: '10 daqiqa nazariya, 22 daqiqa slayd moslash, 13 daqiqa CaseStudy va test.',
      assessment: 'Auditoriya talabini dizayn va tilda to‘g‘ri aks ettira olganligi.',
      homework: 'Keyingi yarim yillikda o‘rganiladigan Excel mavzusi uchun kichik so‘rovnoma ma’lumotlarini yig‘ib keling.',
    },
  },
];
