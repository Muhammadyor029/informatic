import type { Lesson } from './types';

export const GRADE_7_P1A: Lesson[] = [
  {
    id: 'g7-l01',
    grade: 7,
    no: 1,
    part: '1-yarim yillik',
    title: 'Matn stillarini sozlash va ulardan foydalanish',
    kind: 'dars',
    hours: 1,
    tools: ['Word', 'LibreOffice Writer'],
    objectives: [
      'O‘quvchi matn stillari (Heading 1, Heading 2, Normal) nima uchun kerakligini tushunadi.',
      'O‘quvchi tayyor stillarni qo‘llash, shuningdek yangi stil yaratish va o‘zgartirishni bajara oladi.',
    ],
    intro:
      '20 sahifalik referat yozayotganingizda barcha 15 ta sarlavhani birma-bir qalin va ko‘k rangga bo‘yash shart emas. Stil (Style) orqali bir marta sozlasangiz, barcha sarlavhalar bir soniyada yangilanadi!',
    sections: [
      {
        heading: 'Stil (Style) tushunchasi va turlari',
        body: 'Stil — bu shrift turi, o‘lchami, rangi, tekislanishi va qator oralig‘i bir joyga jamlangan tayyor formatlash to‘plami. "Normal" asosiy matn uchun, "Heading 1" bob sarlavhalari uchun, "Heading 2" esa kichik bo‘limlar uchun ishlatiladi.',
        example: 'Heading 1 uslubini 18 pt ko‘k rangga o‘zgartirsangiz (Modify Style), hujjatdagi barcha Heading 1 sarlavhalari avtomatik ko‘k rangga o‘tadi.',
        tip: 'Heading stillaridan foydalanishning yana bir katta foydasi — Wordda "Table of Contents" (Avtomatik mundarija) ni bir bosishda yasash mumkin!',
      },
      {
        heading: 'Stil yaratish va tahrirlash',
        body: 'Home → Styles panelida istalgan stil ustiga sichqonchaning o‘ng tugmasini bosib "Modify" (O‘zgartirish) tanlanadi. Yoki chiroyli bezalgan matnni belgilab "Create a Style" orqali o‘z shaxsiy uslubimizni saqlab qo‘yishimiz mumkin.',
        example: 'Ta’riflar uchun "Muhim_Izoh" nomli kursiv va och kulrang fonli yangi stil yaratamiz.',
      },
    ],
    keyTerms: [
      { term: 'Stil (Style)', definition: 'Bir necha formatlash qoidalarini o‘zida jamlagan tayyor bezak shabloni.' },
      { term: 'Heading 1 / Heading 2', definition: 'Asosiy va ikkinchi darajali sarlavha stillari.' },
      { term: 'Modify Style', definition: 'Mavjud stil parametrlarini o‘zgartirib, butun hujjatga tatbiq etish.' },
      { term: 'Mundarija (Table of Contents)', definition: 'Heading stillari asosida avtomatik yaratiladigan sahifalar ro‘yxati.' },
    ],
    steps: [
      '1. Word yoki Writer dasturida 3 ta sarlavha va 3 ta matn abzatsidan iborat matn kiriting.',
      '2. Sarlavhalarga Home → Styles bo‘limidan Heading 1 va Heading 2 bering.',
      '3. Heading 1 ustida o‘ng tugmani bosib Modify orqali shrift rangini to‘q qizilga o‘zgartiring.',
      '4. References → Table of Contents orqali avtomatik mundarija qo‘shib ko‘ring.',
    ],
    practice: [
      {
        task: 'Mavjud referat matniga Normal, Heading 1 va Heading 2 stillarini qo‘llang.',
        expected: 'Butun hujjat yagona, tartibli iyerarxik ko‘rinishga keladi.',
        difficulty: 'oson',
      },
      {
        task: '"Eslatma" nomli shaxsiy stil yaratib, hujjatdagi 2 ta qoidaga qo‘llang.',
        expected: 'Har ikkala eslatma bir xil shrift va rangda ajralib turadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l01-g1',
        num: '01',
        title: 'Stillar panelini top',
        topic: 'Matn stillari',
        difficulty: 'Oson',
        engine: 'hotspot',
        config: {
          prompt: 'Word dasturida sarlavha va abzats stillari (Styles) tanlanadigan tugmani toping.',
          appTitle: 'Word — Home tasmasi',
          layout: 'word',
          targetZoneId: 'styles',
          zones: [
            { id: 'bold', label: 'B Qalin', icon: 'B', group: 'Font' },
            { id: 'align', label: 'Tekislash', icon: '≡', group: 'Paragraph' },
            { id: 'styles', label: 'AaBbCc Stillar', icon: 'Aa', group: 'Styles' },
            { id: 'borders', label: 'Chegara', icon: '⊞', group: 'Paragraph' },
            { id: 'find', label: 'Qidirish', icon: '🔍', group: 'Editing' },
          ],
          explanation: 'Styles paneli hujjatdagi barcha sarlavha va matnlarni bir xil standartda saqlaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Matn stillari (Styles) dan foydalanishning asosiy afzalligi nimada?',
        options: [
          'Hujjatni bir zumda izchil bezash va avtomatik mundarija tuzish imkonini beradi',
          'Faylni videoga aylantiradi',
          'Klaviatura tilini almashtiradi',
          'Rasm hajmini kattalashtiradi',
        ],
        answer: 0,
        explanation: 'Stillar izchil dizaynni ta’minlaydi va Heading lar asosida avtomatik mundarija yaratadi.',
      },
      {
        prompt: 'Bob va bo‘limlarning asosiy sarlavhasi uchun qaysi stil qo‘llaniladi?',
        options: ['Normal', 'Heading 1', 'Italic', 'Footer'],
        answer: 1,
        explanation: 'Heading 1 hujjatning eng yuqori darajali sarlavhasidir.',
      },
      {
        prompt: 'Heading 1 stilini Modify qilsak nima sodir bo‘ladi?',
        options: [
          'Faqat birinchi so‘z o‘zgaradi',
          'Heading 1 qo‘llangan barcha sarlavhalar avtomatik yangilanadi',
          'Matn o‘chib ketadi',
          'Hech narsa o‘zgarmaydi',
        ],
        answer: 1,
        explanation: 'Stil o‘zgartirilganda unga bog‘langan barcha elementlar bir vaqtda yangilanadi.',
      },
      {
        prompt: 'Oddiy asosiy matn uchun standart stil qanday nomlanadi?',
        options: ['Title', 'Normal', 'Header', 'Caption'],
        answer: 1,
        explanation: 'Normal (Odatiy) — asosiy xatboshilar uchun tayanch stildir.',
      },
      {
        prompt: 'Avtomatik mundarija (Table of Contents) qaysi stillar asosida quriladi?',
        options: ['Faqat rangli matnlar', 'Heading 1, Heading 2, Heading 3 stillari', 'Jadvallar', 'Rasmlar'],
        answer: 1,
        explanation: 'Matn muharriri mundarijani aynan Heading stillariga qarab tuzadi.',
      },
    ],
    teacherNotes: {
      method: '20 sahifali namuna matnda stillar orqali 5 soniyada dizayn va mundarija yasab ko‘rsatish.',
      timing: '10 daqiqa namoyish, 25 daqiqa amaliy stil sozlash, 10 daqiqa Hotspot va test.',
      assessment: 'Sarlavhalarni qo‘lda emas, Heading stillari bilan bezaganligi.',
      homework: '3 ta bo‘limli kichik maqola uchun Normal, Heading 1, Heading 2 parametrlarini rejalashtiring.',
    },
  },
  {
    id: 'g7-l02',
    grade: 7,
    no: 2,
    part: '1-yarim yillik',
    title: 'Wrap text sozlamalaridan foydalanish. Tasvirni qirqish va o‘lchamini o‘zgartirish',
    kind: 'dars',
    hours: 1,
    tools: ['Word', 'LibreOffice Writer'],
    objectives: [
      'O‘quvchi hujjatda matnning tasvir atrofida o‘ralish usullarini (Wrap Text: In Line, Square, Tight, Behind/In Front of Text) qo‘llay oladi.',
      'O‘quvchi tasvirning keraksiz chetlarini qirqish (Crop) va aniq santimetr/millimetr o‘lcham berishni bajaradi.',
    ],
    intro:
      'Wordga rasm qo‘yganingizda u matnni pastga surib yuborib, joyidan qimirlamay qolganini ko‘rganmisiz? Buning yechimi — Wrap Text (Matn bilan o‘rash) sozlamasidir!',
    sections: [
      {
        heading: 'Wrap Text (Matn bilan o‘rash) rejimlari',
        body: 'Rasm tanlanganda Picture Format → Wrap Text ochiladi. "In Line with Text" (standart) rasmni katta harf kabi qatorga qo‘yadi va erkin surib bo‘lmaydi. "Square" — matnni rasm atrofiga to‘rtburchak qilib o‘raydi. "Tight" — rasm konturiga zich o‘raydi. "Behind Text" — matn tagiga fon qiladi; "In Front of Text" — matn ustiga qo‘yadi.',
        example: 'Gazeta maqolasida surat yonidan matn chiroyli oqib tushishi uchun "Square" rejimi tanlanadi.',
        tip: 'Rasmni hujjatning istalgan joyiga sichqoncha bilan erkin surmoqchi bo‘lsangiz, avval uni "In Line with Text" dan "Square" yoki "Tight" rejimiga o‘tkazing!',
      },
      {
        heading: 'Tasvirni qirqish (Crop) va aniq o‘lcham berish',
        body: 'Crop (Qirqish) tugmasi bosilganda rasm chetida qora burchaklar chiqadi — ularni ichkariga tortib ortiqcha fon kesib tashlanadi. "Crop to Shape" yordamida rasmni aylana yoki yulduz shakliga keltirish mumkin. Picture Format → Size panelida esa aniq eni (Width) va bo‘yi (Height) sm larda kiritiladi.',
        example: 'Avtobiografiya uchun portretni 4 sm × 5 sm qilib qirqamiz va Square qilib o‘ng chetga qo‘yamiz.',
      },
    ],
    keyTerms: [
      { term: 'Wrap Text', definition: 'Matnning hujjatdagi rasm atrofida qanday joylashishini boshqaruvchi sozlama.' },
      { term: 'Square / Tight', definition: 'Matnni rasm yonidan zich o‘rab o‘tishini ta’minlovchi rejimlar.' },
      { term: 'Crop (Qirqish)', definition: 'Tasvirning keraksiz chetki qismlarini kesib olib tashlash.' },
      { term: 'Lock Aspect Ratio', definition: 'Eni o‘zgartirilganda bo‘yini proporsional avtomatik moslash qoidasi.' },
    ],
    steps: [
      '1. Hujjatga 2 abzats matn va 1 ta rasm joylashtiring.',
      '2. Rasmni tanlab Picture Format → Wrap Text → Square ni bosing va matnning chap burchagiga suring.',
      '3. Crop tugmasi bilan rasmning ortiqcha chetlarini kesib tashlang.',
      '4. Size bo‘limidan rasm enini aniq 6 sm ga sozlang.',
    ],
    practice: [
      {
        task: 'Maktab logotipini matnning orqasiga suv belgisi kabi "Behind Text" rejimida joylashtiring.',
        expected: 'Matn logotip ustida bemalol o‘qilib turadi.',
        difficulty: 'oson',
      },
      {
        task: 'To‘rtburchak portretni "Crop to Shape → Oval" orqali doira shaklida qirqib matn yoniga joylang.',
        expected: 'Doirasimon rasm yonida matn tartibli o‘raladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l02-g1',
        num: '01',
        title: 'Wrap Text va Crop mosligi',
        topic: 'Tasvir sozlamalari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir tasvir sozlamasini uning vazifasi bilan juftlang.',
          pairs: [
            { left: 'Square', right: 'Matn rasm atrofida kvadrat ramka bo‘ylab o‘raladi' },
            { left: 'Behind Text', right: 'Tasvir matnning orqa fonida turadi' },
            { left: 'Crop', right: 'Tasvirning ortiqcha chetlarini kesib olish' },
            { left: 'In Front of Text', right: 'Tasvir matn ustida qalqib turadi' },
            { left: 'In Line with Text', right: 'Tasvir oddiy harf kabi matn qatorida turadi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Rasmni hujjatda istalgan joyga erkin surish va matnni uning yonidan o‘tkazish uchun qaysi Wrap Text rejimi qulay?',
        options: ['In Line with Text', 'Square', 'Crop', 'Print Preview'],
        answer: 1,
        explanation: 'Square rejimi rasmni erkin surishga va matnni yonidan tartibli o‘tkazishga imkon beradi.',
      },
      {
        prompt: 'Tasvirning chetidagi keraksiz qismlarni kesib tashlash buyrug‘i qaysi?',
        options: ['Wrap Text', 'Crop', 'Rotate', 'Borders'],
        answer: 1,
        explanation: 'Crop (Qirqish) tasvirning keraksiz qirralarini olib tashlaydi.',
      },
      {
        prompt: 'Rasm matnga xalaqit bermay fon sifatida matn tagida turishi uchun qaysi parametr tanlanadi?',
        options: ['In Front of Text', 'Behind Text', 'Tight', 'Top and Bottom'],
        answer: 1,
        explanation: 'Behind Text tasvirni matn qatlamining orqasiga joylashtiradi.',
      },
      {
        prompt: 'O‘lcham o‘zgartirganda tasvir cho‘zilib xunuklashmasligi uchun nima saqlanishi kerak?',
        options: ['Shrift rangi', 'Tomonlar nisbati (Aspect Ratio)', 'Header maydoni', 'Ustunlar soni'],
        answer: 1,
        explanation: 'Aspect Ratio eni va bo‘yi nisbatini saqlab, tasvir deformatsiyasining oldini oladi.',
      },
      {
        prompt: 'Crop to Shape buyrug‘i nima qiladi?',
        options: [
          'Rasmni aylana, yulduz kabi geometrik shaklda qirqadi',
          'Rasmni o‘chiradi',
          'Rasmni qora-oq qiladi',
          'Matnni ustunlarga bo‘ladi',
        ],
        answer: 0,
        explanation: 'Crop to Shape rasmni tanlangan geometrik shakl chegarasi bo‘ylab kesadi.',
      },
    ],
    teacherNotes: {
      method: 'Gazeta sahifasi maketi ustida Wrap Text rejimlarini jonli almashtirib ko‘rsatish.',
      timing: '10 daqiqa nazariya, 25 daqiqa gazetaga o‘xshash maqola bezash, 10 daqiqa Match va test.',
      assessment: 'Matn rasm ustiga chiqib ketmagani va rasm nisbati buzilmagani.',
      homework: 'O‘zingiz yoqtirgan sportchi haqida rasmli yarim betlik maqola bezab keling.',
    },
  },
  {
    id: 'g7-l03',
    grade: 7,
    no: 3,
    part: '1-yarim yillik',
    title: 'Jadval o‘rnatish',
    kind: 'dars',
    hours: 1,
    tools: ['Word', 'LibreOffice Writer'],
    objectives: [
      'O‘quvchi hujjatga kerakli ustun va qatorli jadval qo‘shishni biladi.',
      'O‘quvchi kataklarni birlashtirish (Merge Cells), bo‘lish (Split Cells), qator qo‘shish va jadvalni bezash amallarini bajaradi.',
    ],
    intro:
      'Dars jadvali, sinf ro‘yxati yoki musobaqa jadvalini bo‘shliq (Space) bosib tekislash juda noqulay va chiroyli chiqmaydi. Buning uchun matn muharririda maxsus Jadval (Table) vositasi mavjud!',
    sections: [
      {
        heading: 'Jadval yaratish va kataklarni boshqarish',
        body: 'Insert → Table menyusidan sichqoncha bilan kerakli ustun va qatorlar soni belgilanadi (yoki Insert Table da aniq son kiritiladi). Katakdan keyingi katakka o‘tishda Tab tugmasi ishlatiladi; oxirgi katakda Tab bosilsa, yangi qator avtomatik qo‘shiladi.',
        example: '5 kunlik dars jadvali uchun 6 ta qator (1-sarlavha + 5 kun) va 4 ta ustunli jadval tuzamiz.',
        tip: 'Jadval ichida Enter bossangiz yangi qator qo‘shilmaydi, balki katak balandligi oshadi! Keyingi katakka o‘tish uchun Tab yoki strelka tugmalaridan foydalaning.',
      },
      {
        heading: 'Kataklarni birlashtirish, bo‘lish va bezash',
        body: 'Sarlavha butun jadval tepasida turishi uchun birinchi qatordagi kataklarni belgilab Layout → Merge Cells (Kataklarni birlashtirish) bosiladi. Bitta katakni ikkiga ajratish uchun Split Cells ishlatiladi. Table Design orqali esa kataklarga rangli fon (Shading) va chiziq qalinligi (Borders) beriladi.',
        example: '"Haftalik reja" sarlavhasini 4 ta ustun bo‘ylab Merge Cells bilan bitta katakka birlashtiramiz.',
      },
    ],
    keyTerms: [
      { term: 'Merge Cells', definition: 'Bir nechta qo‘shni kataklarni bitta katta katakka birlashtirish.' },
      { term: 'Split Cells', definition: 'Bitta katakni bir nechta ustun yoki qatorga bo‘lish.' },
      { term: 'Shading (Soya/Fon)', definition: 'Jadval kataklari ichini rang bilan to‘ldirish.' },
      { term: 'Insert Row / Column', definition: 'Jadvalga qo‘shimcha qator yoki ustun qo‘shish.' },
    ],
    steps: [
      '1. Insert → Table orqali 4 ustun va 6 qatorli jadval joylashtiring.',
      '2. Eng yuqori qator kataklarini belgilab Merge Cells bilan birlashtiring va sarlavha yozing.',
      '3. Jadval ustunlariga sarlavhalarni (№, Fan, O‘qituvchi, Xona) kiriting.',
      '4. Sarlavha qatoriga Shading orqali rang berib, oxirgi katakda Tab bosib yangi qator qo‘shing.',
    ],
    practice: [
      {
        task: 'Haftalik uy vazifalari jadvalini Merge Cells sarlavhasi bilan bezab yarating.',
        expected: 'Sarlavha markazda bitta birlashtirilgan katakda, qolgan qatorlar aniq ustunlarda turadi.',
        difficulty: 'oson',
      },
      {
        task: 'Jadvaldagi bitta "Natija" katagini Split Cells bilan 2 ta kichik ustunga (1-urinish, 2-urinish) bo‘ling.',
        expected: 'Bitta katak ikki bo‘lakka ajraladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l03-g1',
        num: '01',
        title: 'Jadval boshqaruvi bosqichlari',
        topic: 'Jadval tuzish',
        difficulty: 'Oson',
        engine: 'order',
        config: {
          prompt: 'Word hujjatida sarlavhali chiroyli jadval tuzish ketma-ketligini tartiblang.',
          items: [
            'Insert → Table menyusidan ustun va qator sonini tanlab jadval qo‘shish',
            'Birinchi qator kataklarini belgilab Merge Cells bilan birlashtirish',
            'Tab tugmasi bilan kataklarga ma’lumotlarni kiritib chiqish',
            'Table Design bo‘limidan sarlavha qatoriga fon rangi (Shading) va chegara berish',
          ],
          hint: 'Avval jadval qo‘yiladi, keyin sarlavha kataklari birlashtiriladi, to‘ldiriladi va bezaladi.',
          explanation: 'To‘g‘ri rejalashtirilgan jadval avval yaratiladi, so‘ng tuzilmasi moslanadi va bezaladi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Jadvaldagi qo‘shni kataklarni bitta umumiy katakka birlashtirish buyrug‘i qaysi?',
        options: ['Split Cells', 'Merge Cells', 'Delete Table', 'Wrap Text'],
        answer: 1,
        explanation: 'Merge Cells bir nechta belgilangan kataklarni bitta katakka birlashtiradi.',
      },
      {
        prompt: 'Jadvalning eng oxirgi katagida turib qaysi tugmani bossak, pastdan avtomatik yangi qator qo‘shiladi?',
        options: ['Enter', 'Space', 'Tab', 'Esc'],
        answer: 2,
        explanation: 'Oxirgi katakda Tab bosilganda jadval oxiriga yangi qator qo‘shiladi.',
      },
      {
        prompt: 'Bitta katakni bir nechta kichik kataklarga ajratish qaysi buyruq bilan bajariladi?',
        options: ['Split Cells', 'Merge Cells', 'Crop', 'Copy'],
        answer: 0,
        explanation: 'Split Cells tanlangan katakni ko‘rsatilgan ustun/qatorlarga bo‘ladi.',
      },
      {
        prompt: 'Jadval kataklariga orqa fon rangi berish funksiyasi qanday ataladi?',
        options: ['Shading', 'Header', 'Bullets', 'Landscape'],
        answer: 0,
        explanation: 'Shading katak ichini rang bilan bo‘yaydi.',
      },
      {
        prompt: 'Word hujjatida jadval qo‘shish buyrug‘i qaysi menyuda joylashgan?',
        options: ['View', 'Insert', 'Mailings', 'Review'],
        answer: 1,
        explanation: 'Insert (Qo‘shish) menyusida Table vositasi joylashgan.',
      },
    ],
    teacherNotes: {
      method: 'Sinf dars jadvali yoki turnir jadvalini birgalikda yig‘ish.',
      timing: '10 daqiqa tushuntirish, 25 daqiqa jadval yasash, 10 daqiqa Order va test.',
      assessment: 'Merge/Split va Shading to‘g‘ri qo‘llanganligi.',
      homework: 'Oila a’zolarining tug‘ilgan kunlari jadvalini Merge sarlavhasi bilan bezab tuzing.',
    },
  },
  {
    id: 'g7-l04',
    grade: 7,
    no: 4,
    part: '1-yarim yillik',
    title: 'Belgili ro‘yxat yaratish',
    kind: 'dars',
    hours: 1,
    tools: ['Word', 'LibreOffice Writer'],
    objectives: [
      'O‘quvchi tartibsiz (belgili — Bullets) va tartibli (raqamli — Numbering) ro‘yxatlar farqini biladi.',
      'O‘quvchi ko‘p darajali (Multilevel List) ro‘yxat yaratish va maxsus belgilar tanlashni bajaradi.',
    ],
    intro:
      'Bozor ro‘yxati yoki sayohatga olinadigan narsalarda tartib muhim emas (belgili ro‘yxat), lekin osh pishirish retseptida ketma-ketlik muhim (raqamli ro‘yxat)!',
    sections: [
      {
        heading: 'Bullets (Belgili) va Numbering (Raqamli) ro‘yxatlar',
        body: 'Home → Paragraph bo‘limida ikki xil ro‘yxat tugmasi bor: Bullets (nuqta, galochka, kvadrat belgilar) — tartibi muhim bo‘lmagan narsalar uchun; Numbering (1, 2, 3 yoki a, b, c) — aniq qadamlar va reytinglar uchun ishlatiladi.',
        example: 'Xarid ro‘yxati: • Olma, • Non, • Sut. Ko‘rsatma: 1. Dasturni oching, 2. Faylni saqlang.',
        tip: 'Ro‘yxatdan chiqish uchun oxirgi bo‘sh satrda Enter tugmasini ikki marta bosing yoki Backspace bosing!',
      },
      {
        heading: 'Ko‘p darajali ro‘yxat (Multilevel List) va belgilar',
        body: 'Ro‘yxat ichida ichki bo‘lim ochish uchun yangi qatorga o‘tib Tab tugmasini bosing (daraja pasayadi: 1 → a yoki • → ◦). Orqaga qaytarish uchun Shift + Tab bosiladi. Shuningdek "Define New Bullet" orqali istagan maxsus belgi (✓, ★, ➔) ni tanlash mumkin.',
        example: '1. Kompyuter qismlari → (Tab) a) Monitor, b) Klaviatura.',
      },
    ],
    keyTerms: [
      { term: 'Bullets (Belgili ro‘yxat)', definition: 'Nuqta, kvadrat yoki belgi bilan boshlanadigan tartibsiz ro‘yxat.' },
      { term: 'Numbering (Raqamli ro‘yxat)', definition: 'Raqam yoki harflar bilan ketma-ket tartiblangan ro‘yxat.' },
      { term: 'Multilevel List', definition: 'Ichki darajali (1, 1.1, a) tuzilmaga ega ro‘yxat.' },
      { term: 'Tab / Shift+Tab', definition: 'Ro‘yxat ichida darajani ichkariga surish va qaytarish tugmalari.' },
    ],
    steps: [
      '1. 5 ta maktab anjomining nomini kiriting va ularga Home → Bullets qo‘llang.',
      '2. Bullets yonidagi strelkadan belgini galochka (✓) ga o‘zgartiring.',
      '3. Pastdan 3 bosqichli dars tayyorlash rejasini Numbering (1, 2, 3) bilan yozing.',
      '4. 2-band ostiga qator ochib, Tab tugmasi bilan ichki darajali band qo‘shing.',
    ],
    practice: [
      {
        task: 'Mevalar va sabzavotlar uchun 2 darajali belgili ro‘yxat yarating.',
        expected: 'Asosiy punktlar nuqta (•), ichki punktlar Tab bilan aylana (◦) ko‘rinishida turadi.',
        difficulty: 'oson',
      },
      {
        task: 'Sinf navbatchiligi qoidalari uchun maxsus yulduzcha (★) belgili ro‘yxat sozlang.',
        expected: 'Define New Bullet orqali yulduzcha belgisi ro‘yxatga qo‘llanadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l04-g1',
        num: '01',
        title: 'Qaysi ro‘yxat turi mos?',
        topic: 'Bullets va Numbering',
        difficulty: 'Oson',
        engine: 'sort',
        config: {
          prompt: 'Berilgan misollarni Belgili (tartibsiz) yoki Raqamli (tartibli) ro‘yxatga ajrating.',
          buckets: ['Belgili ro‘yxat (Bullets)', 'Raqamli ro‘yxat (Numbering)'],
          items: [
            { label: 'Sayohat sumkasiga solinadigan narsalar', bucket: 'Belgili ro‘yxat (Bullets)' },
            { label: 'Maktabda o‘tiladigan sevimli fanlar', bucket: 'Belgili ro‘yxat (Bullets)' },
            { label: 'Kompyuterni xavfsiz o‘chirish qadamlari', bucket: 'Raqamli ro‘yxat (Numbering)' },
            { label: 'Olimpiada g‘oliblari 1, 2, 3-o‘rinlari', bucket: 'Raqamli ro‘yxat (Numbering)' },
            { label: 'O‘quv qurollari ro‘yxati', bucket: 'Belgili ro‘yxat (Bullets)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ketma-ket bajarilishi shart bo‘lgan ko‘rsatma uchun qaysi ro‘yxat turi mos?',
        options: ['Belgili (Bullets)', 'Raqamli (Numbering)', 'Shading', 'Watermark'],
        answer: 1,
        explanation: 'Qadamlar ketma-ketligida raqamli ro‘yxat (1, 2, 3) ishlatiladi.',
      },
      {
        prompt: 'Ko‘p darajali ro‘yxatda keyingi ichki darajaga (o‘ngga) tushish tugmasi qaysi?',
        options: ['Tab', 'Esc', 'Ctrl + B', 'F5'],
        answer: 0,
        explanation: 'Tab tugmasi ro‘yxat bandini bitta ichki darajaga suradi.',
      },
      {
        prompt: 'Ichki darajadagi bandni bir daraja chapga (asosiy darajaga) qaytarish tugmalari qaysi?',
        options: ['Shift + Tab', 'Ctrl + C', 'Alt + F4', 'Enter'],
        answer: 0,
        explanation: 'Shift + Tab ro‘yxat chekinishini bir daraja orqaga qaytaradi.',
      },
      {
        prompt: 'Ro‘yxat belgilarini boshqa rasmcha yoki belgiga (✓, ★) almashtirish uchun qayerga kiriladi?',
        options: ['Bullets strelkasi → Define New Bullet', 'Font Color', 'Header', 'Page Setup'],
        answer: 0,
        explanation: 'Define New Bullet bo‘limida Symbol yoki Picture tanlash mumkin.',
      },
      {
        prompt: 'Yangi ro‘yxat yaratishda har safar Enter bosilganda nima sodir bo‘ladi?',
        options: [
          'Hujjat yopiladi',
          'Keyingi ro‘yxat belgisi yoki raqami avtomatik qo‘yiladi',
          'Matn o‘chadi',
          'Jadval chiziladi',
        ],
        answer: 1,
        explanation: 'Word keyingi qatorga o‘tilganda avtomatik navbatdagi belgi yoki raqamni qo‘yadi.',
      },
    ],
    teacherNotes: {
      method: 'Sinf qoidalari (Bullets) va evakuatsiya rejasi (Numbering) misollarini solishtirish.',
      timing: '8 daqiqa nazariya, 25 daqiqa ko‘p darajali ro‘yxat amaliyoti, 12 daqiqa Sort va test.',
      assessment: 'Tab/Shift+Tab bilan darajali ro‘yxat tuza olganligi.',
      homework: 'O‘zingizning kun tartibingizni raqamli, sevimli mashg‘ulotlaringizni esa belgili ro‘yxatda yozing.',
    },
  },
  {
    id: 'g7-l05',
    grade: 7,
    no: 5,
    part: '1-yarim yillik',
    title: 'Hujjatga Header va Footer maydonlarini qo‘shish',
    kind: 'dars',
    hours: 1,
    tools: ['Word', 'LibreOffice Writer'],
    objectives: [
      'O‘quvchi Header (yuqori kolontitul) va Footer (pastki kolontitul) vazifasini biladi.',
      'O‘quvchi sahifa raqami (Page Number), sana, hujjat nomi va "Different First Page" sozlamasini qo‘llay oladi.',
    ],
    intro:
      'Kitobning har bir betining tepasida bob nomi, pastida esa bet raqami turadi. Agar 50 betlik hujjatda buni qo‘lda yozsak adashib ketamiz — Header va Footer buni barcha sahifalarga bir marta yozishda avtomatik chiqaradi!',
    sections: [
      {
        heading: 'Header va Footer nima?',
        body: 'Header — har bir sahifaning eng yuqori hoshiya (margin) qismida takrorlanadigan maydon (masalan, tashkilot nomi yoki sarlavha). Footer — sahifaning eng pastki qismida takrorlanadigan maydon (ko‘pincha sahifa raqami va muallif ismi). Insert → Header / Footer orqali qo‘shiladi.',
        example: 'Yuqorida "7-A sinf Informatika hisoboti", pastda esa o‘ng burchakda avtomatik sahifa raqami (1, 2, 3...).',
        tip: 'Kolontitulni tahrirlab bo‘lgach, asosiy matnga qaytish uchun "Close Header and Footer" tugmasini bosing yoki sahifa o‘rtasiga ikki marta tez bosing!',
      },
      {
        heading: 'Avtomatik sahifa raqami va Birinchi sahifa',
        body: 'Insert → Page Number orqali sahifa raqamlari avtomatik qo‘yiladi — agar o‘rtadan yangi bet qo‘shsangiz, raqamlar o‘zi yangilanadi! Muqova (titul) sahifasida raqam chiqmasligi uchun Header & Footer menyusida "Different First Page" katakchasini belgilash kifoya.',
        example: '1-sahifa (muqova) toza qoladi, raqamlash 2-sahifadan ko‘rinadi.',
      },
    ],
    keyTerms: [
      { term: 'Header (Yuqori kolontitul)', definition: 'Sahifaning yuqori chetida takrorlanuvchi axborot maydoni.' },
      { term: 'Footer (Pastki kolontitul)', definition: 'Sahifaning pastki chetida takrorlanuvchi maydon.' },
      { term: 'Page Number', definition: 'Har bir sahifani avtomatik raqamlovchi maydon.' },
      { term: 'Different First Page', definition: 'Birinchi titul sahifasi uchun kolontitulni yashirish yoki boshqacha qilish.' },
    ],
    steps: [
      '1. Kamida 2–3 sahifalik matnli hujjat oching (Ctrl+Enter bilan yangi sahifa qo‘shish mumkin).',
      '2. Insert → Header orqali yuqoriga ismingiz va mavzu nomini yozing.',
      '3. Insert → Page Number → Bottom of Page bilan pastki qismga sahifa raqami qo‘ying.',
      '4. "Different First Page" ni yoqib, 1-sahifada kolontitul yashirilishini tekshiring.',
    ],
    practice: [
      {
        task: '3 betli hujjatning Footer qismiga avtomatik sana va sahifa raqami joylashtiring.',
        expected: 'Barcha sahifalarda raqamlar ketma-ket (1, 2, 3) ko‘rinadi.',
        difficulty: 'oson',
      },
      {
        task: 'Titul sahifasida kolontitul ko‘rinmaydigan, 2-sahifadan boshlab esa ko‘rinadigan qilib sozlang.',
        expected: 'Different First Page faollashgan va 1-bet toza.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l05-g1',
        num: '01',
        title: 'Header va Footer qoidalari',
        topic: 'Kolontitullar',
        difficulty: 'Oson',
        engine: 'fillblank',
        config: {
          prompt: 'Kolontitullar haqidagi gaplarni to‘g‘ri so‘zlar bilan to‘ldiring.',
          template: 'Sahifaning yuqori qismida takrorlanuvchi maydon {{0}}, pastki qismida esa {{1}} deyiladi. Muqova betida sahifa raqamini ko‘rsatmaslik uchun {{2}} belgilanadi.',
          blanks: [
            { options: ['Header', 'Footer', 'Margin'], answer: 'Header' },
            { options: ['Footer', 'Header', 'Cursor'], answer: 'Footer' },
            { options: ['Different First Page', 'Merge Cells', 'Wrap Text'], answer: 'Different First Page' },
          ],
          hint: 'Tepa — Header, Past — Footer, 1-betni ajratish — Different First Page.',
          explanation: 'Header yuqorida, Footer pastda joylashadi; Different First Page titul betini alohida qiladi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Har bir sahifaning yuqori chetida takrorlanadigan matn qismi nima deb ataladi?',
        options: ['Footer', 'Header', 'Column', 'Style'],
        answer: 1,
        explanation: 'Header (Head — bosh) sahifaning yuqori kolontitulidir.',
      },
      {
        prompt: 'Sahifa raqamini qo‘lda yozish o‘rniga Insert → Page Number ishlatishning foydasi nimada?',
        options: [
          'Yangi sahifa qo‘shilsa ham raqamlar avtomatik to‘g‘ri yangilanadi',
          'Matn rangi qizil bo‘ladi',
          'Shrift kattalashadi',
          'Jadval chiziladi',
        ],
        answer: 0,
        explanation: 'Avtomatik sahifa raqami betlar o‘zgarganda ham xatosiz hisoblab boradi.',
      },
      {
        prompt: '1-sahifa (muqova) da Header va Footer chiqmasligi uchun qaysi sozlama yoqiladi?',
        options: ['Print All', 'Different First Page', 'Mirror Margins', 'Justify'],
        answer: 1,
        explanation: 'Different First Page birinchi sahifani qolganlaridan farqli (bo‘sh) qilish imkonini beradi.',
      },
      {
        prompt: 'Header/Footer maydonidan chiqib asosiy matnni yozishga qaytish uchun nima qilinadi?',
        options: [
          'Dasturni yopish',
          'Close Header and Footer ni bosish yoki matn ustida ikki marta bosish',
          'Ctrl+X bosish',
          'Kompyuterni qayta yoqish',
        ],
        answer: 1,
        explanation: 'Matn qismida ikki marta bosish (Double click) yoki Close tugmasi kolontituldan chiqaradi.',
      },
      {
        prompt: 'Odatda hujjatdagi sahifa raqami va muallif nomi qaysi qismga qo‘yiladi?',
        options: ['Footer (Pastki kolontitul)', 'Rasm o‘rtasiga', 'Margin tashqarisiga', 'Klipboardga'],
        answer: 0,
        explanation: 'Sahifa raqamlari va pastki izohlar odatda Footer qismiga joylashtiriladi.',
      },
    ],
    teacherNotes: {
      method: 'Darslik kitobining yuqori va pastki chetlarini ko‘rsatib Header/Footer ni tushuntirish.',
      timing: '8 daqiqa tushuntirish, 25 daqiqa amaliyot, 12 daqiqa FillBlank va test.',
      assessment: 'Sahifa raqami qo‘lda emas, Page Number funksiyasi bilan qo‘yilgani.',
      homework: '3 betli loyiha hisoboti uchun Header va Footer da nimalar bo‘lishini rejalashtiring.',
    },
  },
  {
    id: 'g7-l06',
    grade: 7,
    no: 6,
    part: '1-yarim yillik',
    title: 'Matnni ustunlarga bo‘lish',
    kind: 'dars',
    hours: 1,
    tools: ['Word', 'LibreOffice Writer'],
    objectives: [
      'O‘quvchi matnni gazeta yoki jurnal uslubida 2, 3 yoki undan ortiq ustunlarga (Columns) bo‘lishni biladi.',
      'O‘quvchi ustunlar orasiga ajratuvchi chiziq (Line Between) va ustun uzilishi (Column Break) qo‘yishni bajaradi.',
    ],
    intro:
      'Gazeta va jurnallarda matn nega bitta uzun qator emas, 2 yoki 3 ta ingichka ustunda yoziladi? Chunki qisqa satrlarni ko‘z bilan o‘qish tezroq va osonroq!',
    sections: [
      {
        heading: 'Matnni ustunlarga (Columns) bo‘lish',
        body: 'Layout (Page Layout) → Columns bo‘limidan One, Two, Three yoki "More Columns" tanlanadi. Agar faqat maqola matni ustunda, sarlavha esa butun sahifa enida turishini xohlasangiz, avval faqat maqola matnini belgilang, so‘ng Columns → Two ni bosing!',
        example: 'Sarlavha tepada keng eni bo‘ylab, asosiy yangilik matni esa pastda 2 ustunda joylashadi.',
        tip: 'Butun hujjatni belgilamay Columns bossangiz, sarlavha ham tor ustunga siqilib qoladi! Shuning uchun ustun qilinadigan matnni aniq belgilab oling.',
      },
      {
        heading: 'Ajratuvchi chiziq va ustun uzilishi (Column Break)',
        body: '"More Columns" oynasida "Line between" katakchasini belgilasak, ustunlar o‘rtasiga chiroyli vertikal chiziq tushadi. Birinchi ustun to‘lmasdan ikkinchi ustunga o‘tish uchun Breaks → Column Break ishlatiladi.',
        example: 'Maktab devoriy gazetasi ruknlarini chiziq bilan ajratib 3 ustunga joylashtiramiz.',
      },
    ],
    keyTerms: [
      { term: 'Columns (Ustunlar)', definition: 'Sahifadagi matnni vertikal ustunlarga ajratib joylashtirish.' },
      { term: 'Line between', definition: 'Ustunlar o‘rtasiga vertikal ajratuvchi chiziq qo‘shish parametri.' },
      { term: 'Column Break', definition: 'Matnni majburan keyingi ustunning boshiga o‘tkazish.' },
      { term: 'Ustunlar oralig‘i (Spacing)', definition: 'Ikki qo‘shni ustun orasidagi bo‘sh masofa.' },
    ],
    steps: [
      '1. Sarlavha va 2 abzatsli maktab yangiligi matnini yozing.',
      '2. Faqat matn abzatslarini belgilab Layout → Columns → Two ni tanlang.',
      '3. Columns → More Columns ga kirib "Line between" ni yoqing.',
      '4. Ikkinchi abzats boshiga Breaks → Column qo‘yib, uning o‘ng ustunga o‘tishini ko‘ring.',
    ],
    practice: [
      {
        task: 'Maktab hayotidan 3 ta qisqa xabarni sarlavhasi ustida qoladigan qilib 3 ustunga joylashtiring.',
        expected: 'Sarlavha keng holda tepada, 3 ta xabar esa pastda chiziqlar bilan ajratilgan 3 ustunda turadi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Lug‘at so‘zlari ro‘yxatini 2 ustunga bo‘lib, o‘rtasiga vertikal chiziq torting.',
        expected: 'So‘zlar tejamkor va o‘qishli 2 ustunda joylashadi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g7-l06-g1',
        num: '01',
        title: 'Gazeta sahifasini tuzish',
        topic: 'Ustunlar (Columns)',
        difficulty: 'Oson',
        engine: 'truefalse',
        config: {
          prompt: 'Matnni ustunlarga bo‘lish haqidagi fikrlarni tekshiring.',
          statements: [
            {
              text: 'Sarlavha keng qolib, faqat asosiy matn 2 ustun bo‘lishi uchun avval faqat asosiy matn belgilanadi.',
              isTrue: true,
              explanation: 'Faqat belgilangan matn qismi ustunlarga bo‘linadi, sarlavha esa sahifa enida qoladi.',
            },
            {
              text: 'Ustunlar orasiga vertikal chiziq qo‘yish mumkin emas.',
              isTrue: false,
              explanation: 'More Columns oynasida "Line between" funksiyasi orqali chiziq qo‘yiladi.',
            },
            {
              text: 'Column Break matnning qolgan qismini keyingi ustun boshiga ko‘chiradi.',
              isTrue: true,
              explanation: 'Breaks → Column keyingi ustunga o‘tish imkonini beradi.',
            },
            {
              text: 'Columns buyrug‘i Print menyusida joylashgan.',
              isTrue: false,
              explanation: 'Columns sahifa tuzilmasi — Layout (Page Layout) menyusida joylashgan.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Matnni gazeta kabi 2 yoki 3 ustunga bo‘lish buyrug‘i qaysi menyuda joylashgan?',
        options: ['Insert', 'Layout (Page Layout)', 'Review', 'File'],
        answer: 1,
        explanation: 'Sahifa maketi va ustunlar Layout bo‘limida joylashgan.',
      },
      {
        prompt: 'Ustunlar o‘rtasiga vertikal chiziq qo‘yish uchun qaysi parametr belgilanadi?',
        options: ['Line between', 'Merge Cells', 'Footer', 'Bold'],
        answer: 0,
        explanation: 'More Columns oynasidagi "Line between" katakchasi ajratuvchi chiziq chizadi.',
      },
      {
        prompt: 'Sarlavha sahifa enida qolib, faqat pastdagi matnni 2 ustunga bo‘lish uchun nima qilish kerak?',
        options: [
          'Hech narsani belgilamaslik',
          'Faqat 2 ustunga bo‘linadigan matnni belgilash',
          'Sarlavhani o‘chirish',
          'Ustunlarni 1 ga tushirish',
        ],
        answer: 1,
        explanation: 'Matn belgilangach Columns tanlansa, faqat o‘sha qism ustunlarga ajratiladi.',
      },
      {
        prompt: 'Birinchi ustundan keyingi ustun boshiga tezkor o‘tish buyrug‘i qaysi?',
        options: ['Page Break', 'Column Break', 'Wrap Text', 'Undo'],
        answer: 1,
        explanation: 'Breaks → Column Break kursordan keyingi matnni keyingi ustunga o‘tkazadi.',
      },
      {
        prompt: 'Nima uchun gazeta va bukletlarda matn ustunlarga bo‘linadi?',
        options: [
          'Qisqa satrlar ko‘zga o‘qish uchun ancha qulay bo‘lgani uchun',
          'Faylni shifrlash uchun',
          'Ranglarni olib tashlash uchun',
          'Shriftni kattalashtirish uchun',
        ],
        answer: 0,
        explanation: 'Tor ustundagi qisqa qatorlarda ko‘z charchamaydi va tez o‘qiladi.',
      },
    ],
    teacherNotes: {
      method: 'Haqiqiy gazeta yoki buklet sahifasini namunada ko‘rsatib, Wordda uning maketini yasash.',
      timing: '8 daqiqa tushuntirish, 25 daqiqa maktab gazetasi sahifasi, 12 daqiqa True/False va test.',
      assessment: 'Sarlavha butun enida, matn esa chiziqli 2–3 ustunda chiqishi.',
      homework: 'Maktabingiz haqida 2 ustunli kichik buklet matnini tayyorlab keling.',
    },
  },
  {
    id: 'g7-l07',
    grade: 7,
    no: 7,
    part: '1-yarim yillik',
    title: 'Sahifani formatlash buyruqlaridan foydalanish. Print preview buyrug‘idan foydalanish',
    kind: 'dars',
    hours: 1,
    tools: ['Word', 'LibreOffice Writer'],
    objectives: [
      'O‘quvchi sahifa o‘lchami (Size: A4), yo‘nalishi (Orientation: Portrait / Landscape) va chekka hoshiyalarini (Margins) sozlay oladi.',
      'O‘quvchi qog‘ozni isrof qilmasdan chop etishdan oldin Print Preview (Oldindan ko‘rish) orqali xatolarni tekshiradi.',
    ],
    intro:
      'Hujjatingiz ekranda zo‘r ko‘rinishi mumkin, lekin printerdan chiqqanda jadvalning yarim qismi kesilib qolsa-chi? Buning oldini olish uchun chop etishdan oldin albatta Print Preview da tekshirish kerak!',
    sections: [
      {
        heading: 'Sahifa parametrlari (Page Setup)',
        body: 'Layout → Page Setup bo‘limida uchta asosiy sozlama bor: 1) Size — qog‘oz formati (odatda A4); 2) Orientation — Portrait (tik/kitobiy) yoki Landscape (yotqizilgan/albomiy); 3) Margins — chap, o‘ng, tepa va pastki bo‘sh chetlar (masalan, Normal yoki Narrow).',
        example: 'Keng jadvallar va diplom/sertifikatlar uchun "Landscape" (albomiy) yo‘nalish tanlanadi.',
        tip: 'Agar matningizning oxirgi 2 qatori bexosdan 2-betga o‘tib qolgan bo‘lsa, Margin ni "Narrow" qilib yoki shriftni 1 pt kichraytirib hamma matnni bitta A4 qog‘ozga sig‘dirish mumkin — qog‘ozni tejang!',
      },
      {
        heading: 'Print Preview (Chop etishdan oldin ko‘rish)',
        body: 'File → Print (yoki Ctrl+P) bosilganda o‘ng tomonda sahifa qog‘ozda qanday chiqishi (Print Preview) ko‘rinadi. Bu yerda jami nechta bet chiqishi, oxirgi betda bo‘sh sahifa qolib ketmagani va hoshiyalar tekisligi tekshiriladi.',
        example: 'Print oynasida faqat 1–2-betlarni chop etish (Pages: 1-2) yoki ikki tomonlama chop etishni tanlash mumkin.',
      },
    ],
    keyTerms: [
      { term: 'Orientation (Yo‘nalish)', definition: 'Qog‘ozning tik (Portrait) yoki yotqizilgan (Landscape) joylashuvi.' },
      { term: 'Margins (Chetlar)', definition: 'Sahifa qirrasidan matngacha bo‘lgan bo‘sh maydonlar.' },
      { term: 'A4 formati', definition: 'Hujjatlar chop etishda qo‘llaniladigan standart qog‘oz o‘lchami (210×297 mm).' },
      { term: 'Print Preview', definition: 'Hujjatni qog‘ozga chiqarishdan oldin ekranda ko‘zdan kechirish oynasi.' },
    ],
    steps: [
      '1. Tayyor jadval yoki buklet hujjatingizni oching.',
      '2. Layout → Size → A4 ni tanlang, so‘ng Orientation ni Landscape ga o‘tkazib farqini ko‘ring.',
      '3. Margins → Narrow (Tor) qilib matn sig‘imini kuzating.',
      '4. Ctrl + P bosib Print Preview oynasida necha sahifa chiqishini tekshiring.',
    ],
    practice: [
      {
        task: 'Sertifikat namunasini Landscape yo‘nalishda A4 qog‘ozga moslab sozlang.',
        expected: 'Sahifa eniga kengayib, sertifikat bitta betga chiroyli sig‘adi.',
        difficulty: 'oson',
      },
      {
        task: '2-betga 1 qator o‘tib ketgan matnni Margins sozlamasi orqali 1 ta betga joylang.',
        expected: 'Print Preview oynasida "1 of 1" sahifa ko‘rsatiladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l07-g1',
        num: '01',
        title: 'Sahifa formati terminlari',
        topic: 'Page Setup va Print Preview',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'Sahifa sozlamalarini ularning aniq ma’nosi bilan bog‘lang.',
          pairs: [
            { left: 'Portrait', right: 'Qog‘ozning tik (kitobiy) yo‘nalishi' },
            { left: 'Landscape', right: 'Qog‘ozning yotqizilgan (albomiy) yo‘nalishi' },
            { left: 'Margins', right: 'Matn va qog‘oz cheti orasidagi bo‘sh hoshiya' },
            { left: 'Print Preview', right: 'Chop etishdan oldin sahifani ekranda tekshirish' },
            { left: 'A4', right: 'Eng keng tarqalgan standart qog‘oz o‘lchami' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Keng jadval yoki faxriy yorliq tayyorlashda qaysi sahifa yo‘nalishi qulayroq?',
        options: ['Portrait (Tik)', 'Landscape (Albomiy)', 'Narrow', 'Bullets'],
        answer: 1,
        explanation: 'Landscape sahifaning enini kengaytiradi, bu keng jadvallar va yorliqlar uchun qulay.',
      },
      {
        prompt: 'Hujjatni chop etishdan oldin qog‘ozda qanday ko‘rinishini tekshirish oynasi qaysi?',
        options: ['Spell Check', 'Print Preview', 'Find & Replace', 'Save As'],
        answer: 1,
        explanation: 'Print Preview (Ctrl+P) qog‘ozga chiqadigan yakuniy ko‘rinishni ko‘rsatadi.',
      },
      {
        prompt: 'Sahifa chetlaridagi bo‘sh masofani o‘zgartirish uchun qaysi menyuga kiriladi?',
        options: ['Margins', 'Audio', 'Pen', 'Styles'],
        answer: 0,
        explanation: 'Margins yuqori, pastki, chap va o‘ng bo‘sh chetlarni boshqaradi.',
      },
      {
        prompt: 'Oxirgi betda atigi 1–2 ta qator qolib ketganda qog‘ozni tejashning eng yaxshi yo‘li nima?',
        options: [
          'Matnni o‘chirib tashlash',
          'Margins ni biroz toraytirish (Narrow) va Print Preview da tekshirish',
          'Printerni o‘chirish',
          'Yana 3 ta bo‘sh bet qo‘shish',
        ],
        answer: 1,
        explanation: 'Hoshiyani biroz kamaytirish matnni avvalgi betga sig‘dirib qog‘ozni tejaydi.',
      },
      {
        prompt: 'Print Preview ni tezkor ochish klaviatura kombinatsiyasi qaysi?',
        options: ['Ctrl + P', 'Ctrl + Z', 'Ctrl + X', 'F2'],
        answer: 0,
        explanation: 'Ctrl + P chop etish va oldindan ko‘rish (Print Preview) oynasini ochadi.',
      },
    ],
    teacherNotes: {
      method: 'Ekrandagi matn va Print Preview da ko‘rinadigan bo‘sh 2-bet misolini ko‘rsatib, ekologiya/qog‘oz tejashni bog‘lash.',
      timing: '10 daqiqa tushuntirish, 22 daqiqa sahifa sozlash, 13 daqiqa Match va test.',
      assessment: 'Portrait/Landscape va Print Preview dan to‘g‘ri foydalanish.',
      homework: 'Uydagi daftar varaqlarining taxminiy Margin masofalarini lineykada o‘lchab keling.',
    },
  },
  {
    id: 'g7-l08',
    grade: 7,
    no: 8,
    part: '1-yarim yillik',
    title: 'Amaliy mashg‘ulot: Internetdan foydalanish jarayonida xavfsizlikni ta’minlash',
    kind: 'amaliy',
    hours: 1,
    tools: ['Brauzer'],
    objectives: [
      'O‘quvchi kuchli parol yaratish, ikki bosqichli tekshiruv (2FA) va shaxsiy ma’lumotlarni himoyalash qoidalarini qo‘llaydi.',
      'O‘quvchi fishing (soxta havola/sayt) va kiberbulling holatlarida to‘g‘ri himoya chorasini tanlaydi.',
    ],
    intro:
      'Internet — katta shahar kabi: unda foydali kutubxonalar bilan birga firibgarlar ham uchraydi. Bugungi amaliy mashg‘ulotda o‘zingizning raqamli qal’angizni qanday himoya qilishni mashq qilamiz!',
    sections: [
      {
        heading: 'Kuchli parol va Shaxsiy ma’lumotlar himoyasi',
        body: 'Zaif parollar ("123456", "qwerty", tug‘ilgan kun) soniyalar ichida buziladi. Kuchli parol kamida 12 ta belgidan iborat bo‘lib, katta-kichik harflar, raqamlar va maxsus belgilarni (!@#$%) o‘z ichiga olishi kerak. Har bir sayt uchun alohida parol va imkon bo‘lsa 2FA (Ikki bosqichli tasdiqlash) yoqiladi.',
        example: 'Zaif: "samandar2012". Kuchli eslab qolish oson parol: "Kitob#Bog‘da77!".',
        tip: 'Shaxsiy ma’lumotlar (uy manzili, maktab raqami, pasport, karta kodi va parollar) ni hech qachon ijtimoiy tarmoqlarda ochiq yozmang va begonalarga yubormang!',
      },
      {
        heading: 'Fishingni tanib olish va kiberxavfsizlik',
        body: 'Fishing (Phishing) — mashhur sayt nomiga juda o‘xshash soxta manzil orqali (masalan, "g00gle-login.xyz") parolingizni o‘g‘irlashga urinishdir. Shuningdek kiberbulling (internetda haqorat yoki tahdid) ga duch kelsangiz, javob qaytarmang, skrinshot oling, foydalanuvchini bloklang va ota-ona yoki ustozga xabar bering.',
        example: '"Akkauntingiz bloklanadi, tezda parolni kiriting" degan xabar 99% hollarda fishing tuzog‘idir.',
      },
    ],
    keyTerms: [
      { term: 'Kuchli parol', definition: 'Harflar, raqamlar va maxsus belgilardan tuzilgan kamida 12 belgili parol.' },
      { term: 'Fishing (Phishing)', definition: 'Soxta sayt yoki xat orqali foydalanuvchi paroli va ma’lumotini aldab olish.' },
      { term: '2FA (Ikki bosqichli himoya)', definition: 'Paroldan tashqari telefon SMS yoki ilova kodi bilan kirish.' },
      { term: 'Kiberbulling', definition: 'Internet orqali kimgadir bosim o‘tkazish, masxara qilish yoki tahdid qilish.' },
    ],
    steps: [
      '1. Berilgan 5 ta parolni zaif va kuchli guruhlarga ajratib tahlil qiling.',
      '2. O‘zingiz uchun 12+ belgili kuchli parol formulasini o‘ylab toping (lekin uni birovga ko‘rsatmang!).',
      '3. Soxta URL manzillar ("g00gle.com", "payme-bonus.tk") dagi xatolarni aniqlang.',
      '4. Kiberbulling va shubhali xabar vaziyatlari bo‘yicha himoya rejasini tuzing.',
    ],
    practice: [
      {
        task: 'Zaif "futbol2011" parolini kuchli parolga aylantirish usulini ko‘rsating.',
        expected: 'Masalan: "Futb0l!Mayd0ni#11" — katta/kichik harf, raqam va maxsus belgilar qo‘shiladi.',
        difficulty: 'oson',
      },
      {
        task: 'Soxta fishing xabarining 3 ta asosiy alomatini sanab bering.',
        expected: 'Shoshilinch qo‘rqitish, xato domen nomi va parol/karta ma’lumotini so‘rash.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l08-g1',
        num: '01',
        title: 'Kiberxavfsizlik ssenariysi',
        topic: 'Internet xavfsizligi',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Ushbu holatda xavfsizlik qoidasiga ko‘ra qanday yo‘l tutish kerak?',
          scenario: 'O‘yindagi notanish foydalanuvchi sizga: "Bepul 1000 tanga olish uchun mana bu linkka kirib login va parolingni yoz!" — deb havola yubordi. Nima qilasiz?',
          options: [
            {
              text: 'Havolaga kirib parolimni yozaman — tanga kerak!',
              isCorrect: false,
              feedback: 'Xato! Bu fishing hujumi bo‘lib, akkauntingizni o‘g‘irlab olishlari mumkin.',
            },
            {
              text: 'Havolani ochmayman, yuboruvchini bloklayman va ota-onam yoki ustozga xabar beraman',
              isCorrect: true,
              feedback: 'Barakalla! Shubhali havolalarni ochmaslik va bloklash eng xavfsiz yo‘ldir.',
            },
            {
              text: 'Parolim o‘rniga do‘stimning parolini yozib sinab ko‘raman',
              isCorrect: false,
              feedback: 'Noto‘g‘ri! Boshqalarning ma’lumotini ham aslo soxta saytga kiritmaslik kerak.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Quyidagi parollardan qaysi biri eng kuchli hisoblanadi?',
        options: ['12345678', 'alisher2012', 'Maktab_Bog‘i!94$', 'qwerty'],
        answer: 2,
        explanation: 'Unda katta-kichik harflar, raqamlar va maxsus belgilar mavjud hamda uzunligi yetarli.',
      },
      {
        prompt: 'Soxta sayt orqali foydalanuvchining login va parolini o‘g‘irlashga urinish nima deyiladi?',
        options: ['Fishing (Phishing)', 'Arxivlash', 'Formatlash', 'Caching'],
        answer: 0,
        explanation: 'Fishing — yolg‘on sahifalar yordamida maxfiy ma’lumotlarni "ovlash" hujumidir.',
      },
      {
        prompt: 'Ikki bosqichli autentifikatsiya (2FA) nima uchun kerak?',
        options: [
          'Kompyuterni tezlatish uchun',
          'Paroldan tashqari qo‘shimcha SMS/kod bilan hisobni himoyalash uchun',
          'Internet tezligini ikki barobar oshirish uchun',
          'Rasm rangini o‘zgartirish uchun',
        ],
        answer: 1,
        explanation: 'Parol o‘g‘irlansa ham, 2FA kodi bo‘lmasa begona hisobga kira olmaydi.',
      },
      {
        prompt: 'Kiberbullingga duch kelganda birinchi navbatda nima qilish to‘g‘ri?',
        options: [
          'Haqorat bilan javob qaytarish',
          'Javob bermaslik, dalilni saqlash, bloklash va kattalarga aytish',
          'Parolni hammaga tarqatish',
          'Kompyuterni sindirish',
        ],
        answer: 1,
        explanation: 'Qarama-qarshilikka kirmay, bloklash va ishonchli kattalarga xabar berish xavfsiz yechimdir.',
      },
      {
        prompt: 'Qaysi ma’lumotni internetda begonalarga aslo yubormaslik kerak?',
        options: [
          'Sevimli kitob nomini',
          'Uy manzili, pasport va bank karta ma’lumotlarini',
          'Ob-havo haqidagi fikrni',
          'Maktab fanlari nomini',
        ],
        answer: 1,
        explanation: 'Shaxsiy va moliyaviy ma’lumotlar doimo maxfiy saqlanishi lozim.',
      },
    ],
    teacherNotes: {
      method: 'Soxta va haqiqiy havolalar misollarini tahlil qilish amaliy mashg‘uloti.',
      timing: '10 daqiqa muhokama, 20 daqiqa amaliy tahlil, 15 daqiqa CaseStudy va test.',
      assessment: 'Fishing alomatlari va kuchli parol mezonlarini aniq bilishi.',
      homework: 'Oilangiz bilan "Internet xavfsizligi eslatmasi" nomli 5 bandlik qoida tuzing.',
    },
  },
];
