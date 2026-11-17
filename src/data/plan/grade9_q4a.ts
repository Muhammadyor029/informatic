import type { Lesson } from './types';

export const GRADE_9_Q4A: Lesson[] = [
  {
    id: 'g9-l53',
    grade: 9,
    no: 53,
    part: '4-chorak',
    title: 'Matn va sahifa maketini formatlash',
    kind: 'dars',
    hours: 1,
    tools: ['Word / Writer', 'Gutter / Line Spacing', 'Widow & Orphan control'],
    objectives: [
      'O‘quvchi professional hujjat formatlashda qatorlararo masofa, abzats chekinishi (Indent / Hanging indent) va "Widow/Orphan control" qoidalarini qo‘llaydi.',
      'O‘quvchi varaq tikiladigan joy (Gutter margin) va ko‘p sahifali hujjatda maket muvozanatini to‘g‘ri sozlaydi.',
    ],
    intro:
      'Kitob yoki jurnal varag‘ini ochganingizda baʼzan yakka qolib ketgan satr ("yetim/beva qator") yoki muqova tikiladigan chetda kesilib qolgan matn ko‘zga tashlanadi. Professional maketlash aynan shu mayda, lekin muhim detallarni mukammal sozlashdir.',
    sections: [
      {
        heading: 'Abzats formatlash, Indent va Gutter hoshiyasi',
        body: 'Matnni o‘qishli qilish uchun: 1) Line Spacing (1.15 yoki 1.5 — juda siqilgan 1.0 ko‘zni charchatadi); 2) First Line Indent (abzats boshi chekinishi ~1.25 sm) va Hanging Indent (adabiyotlar ro‘yxatida birinchi satr chapda qolib, keyingilari ichkariga kiradi); 3) Gutter (Tikish hoshiyasi) — agar hujjat kitobcha qilib tikilsa yoki papkaga solinsa, chap/ichki hoshiyaga qo‘shimcha 1–1.5 sm joy qo‘shiladi.',
        example: 'Ilmiy adabiyotlar ro‘yxatida `Hanging Indent` qo‘llansa, har bir muallif familiyasi chapda aniq ajralib turadi.',
        tip: 'Tab va bo‘shliq (Space) bilan matn surish o‘rniga doim Lineal (Ruler) yoki Paragraph → Indentation dan foydalaning!',
      },
      {
        heading: 'Widow va Orphan nazorati hamda Keep Lines Together',
        body: 'Orphan (Yetim satr) — yangi abzatsning faqat birinchi satri sahifa pastida yolg‘iz qolib, qolgan matn keyingi sahifaga o‘tib ketishi. Widow (Beva satr) — abzatsning oxirgi bitta satri keyingi sahifa tepasiga yolg‘iz o‘tib qolishi. `Widow/Orphan control` yoqilsa, dastur avtomatik kamida 2 satrni birga olib o‘tadi. `Keep Lines Together` esa kichik jadval yoki sheʼr bandini ikki sahifaga bo‘linishdan asraydi.',
        example: 'Sarlavha sahifa oxirida qolib matni keyingi sahifada chiqmasligi uchun `Keep with next` yoqiladi.',
      },
    ],
    keyTerms: [
      { term: 'Gutter margin', definition: 'Kitob yoki hisobotni muqovalash/tikish uchun ajratiladigan qo‘shimcha hoshiya.' },
      { term: 'Hanging Indent', definition: 'Birinchi satr chetdan boshlanib, qolgan satrlar ichkariga suriladigan abzats formati.' },
      { term: 'Widow & Orphan', definition: 'Abzatsning bitta yolg‘iz satri sahifa boshida yoki oxirida ajralib qolish xatosi.' },
      { term: 'Line Spacing', definition: 'Matn qatorlari orasidagi vertikal bo‘shliq masofasi.' },
    ],
    steps: [
      '1. Hujjatda Page Setup → Margins bo‘limidan `Gutter: 1 sm` qo‘shing.',
      '2. Paragraph oynasida `Line & Page Breaks` dan `Widow/Orphan control` va sarlavha uchun `Keep with next` ni belgilang.',
      '3. Adabiyotlar ro‘yxatiga `Hanging Indent` qo‘llang.',
    ],
    practice: [
      {
        task: 'Qalin 80 betli kurs ishini chap tomondan prujina bilan tikish kerak. Chap chetdagi matn prujina ostiga kirib ketmasligi uchun nima qo‘shiladi?',
        expected: 'Page Setup → `Gutter` (1–1.5 sm) va Position: Left sozlanadi.',
        difficulty: 'oson',
      },
      {
        task: 'Widow va Orphan satrlar o‘rtasidagi farqni hamda ularni qanday bartaraf etishni tushuntiring.',
        expected: 'Orphan — abzatsning 1-satri sahifa oxirida yolg‘iz qolishi; Widow — oxirgi satri yangi sahifa tepasida yolg‘iz qolishi. Ikkalasi Paragraph → `Widow/Orphan control` bilan hal qilinadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l53-g1',
        num: '01',
        title: 'Maket muammolari va yechimlari',
        topic: 'Matn va sahifa formatlash',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Hujjat maketlash muammosini to‘g‘ri dasturiy yechim bilan juftlang.',
          pairs: [
            { left: 'Kitob tikiladigan chap chetda qo‘shimcha joy ajratish', right: 'Gutter margin' },
            { left: 'Abzatsning yakka satri keyingi betda qolib ketishi', right: 'Widow/Orphan control' },
            { left: 'Sarlavha sahifa pastida yolg‘iz qolib ketishi', right: 'Keep with next' },
            { left: 'Adabiyotlar ro‘yxatida 2-satrdan boshlab o‘ngga surish', right: 'Hanging Indent' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Hujjatni papkaga tikish yoki muqovalash uchun chetga qo‘shiladigan qo‘shimcha hoshiya nima deyiladi?',
        options: ['Gutter', 'Footer', 'Header', 'Watermark'],
        answer: 0,
        explanation: 'Gutter margin matnning tikish joyiga tushib yopilib qolishidan saqlaydi.',
      },
      {
        prompt: 'Abzatsning oxirgi bitta satri keyingi sahifa boshiga yolg‘iz o‘tib qolishi qanday ataladi?',
        options: ['Widow (Beva satr)', 'Hanging Indent', 'Gutter', 'Bookmark'],
        answer: 0,
        explanation: 'Widow — abzatsning oxirgi satri yangi bet tepasida yolg‘iz qolishi.',
      },
      {
        prompt: 'Adabiyotlar ro‘yxatida birinchi satr chapda qolib, keyingi satrlar ichkariga surilishi qaysi format?',
        options: ['Hanging Indent (Osilib turuvchi chekinish)', 'First Line Indent', 'Center Align', 'Subscript'],
        answer: 0,
        explanation: 'Hanging indent bibliografiya va lug‘at maqolalarida keng qo‘llaniladi.',
      },
      {
        prompt: 'Sheʼr to‘rtligining o‘rtasidan ikki sahifaga bo‘linib ketmasligi uchun Paragraph sozlamasidan qaysi belgi qo‘yiladi?',
        options: ['Keep lines together', 'Page Break', 'Columns', 'Strikethrough'],
        answer: 0,
        explanation: 'Keep lines together butun abzatsni bitta sahifada ushlab turadi.',
      },
      {
        prompt: 'Uzun o‘quv matnlarini o‘qish qulay bo‘lishi uchun odatiy qatorlararo interval (Line Spacing) qancha tavsiya etiladi?',
        options: ['1.15 yoki 1.5', '0.5', '5.0', '0.1'],
        answer: 0,
        explanation: '1.15–1.5 interval satrlarning bir-biriga yopishib ketmasligini taʼminlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Word/Writer da Paragraph → Line and Page Breaks oynasini jonli ko‘rsatish.',
      timing: 'Gutter/Indent 15 daq, Widow/Orphan 15 daq, Match va test 15 daq.',
      assessment: 'Gutter, Hanging Indent va Widow/Orphan tushunchalarini ajrata olish.',
      homework: '5 manbadan iborat adabiyotlar ro‘yxatini `Hanging Indent` va `1.5` interval bilan formatlang.',
    },
  },
  {
    id: 'g9-l54',
    grade: 9,
    no: 54,
    part: '4-chorak',
    title: 'Dastur uskunalari yordamida jadvallarni tahrirlash',
    kind: 'dars',
    hours: 1,
    tools: ['Word / Writer Tables', 'Merge / Split Cells', 'Cell Padding & Repeat Header'],
    objectives: [
      'O‘quvchi hujjatda jadval yaratish, kataklarni birlashtirish (`Merge Cells`) va bo‘lish (`Split Cells`), ustun/qator qo‘shish hamda tekislashni bajaradi.',
      'O‘quvchi ko‘p sahifali jadvallarda "Repeat Header Rows" va "Cell Margins/Padding" sozlamalarini qo‘llaydi.',
    ],
    intro:
      'Jadvallar dars jadvali, narxnomalar va ma’lumotnoma sahifalarini tartibga soladi. Lekin ko‘p sahifaga o‘tgan jadvalning 2-sahifada ustun nomlari yo‘qolib qolsa yoki matn katak chegarasiga yopishib tursa, uni o‘qish juda qiyinlashadi.',
    sections: [
      {
        heading: 'Kataklarni birlashtirish, bo‘lish va matn tekislash',
        body: 'Jadvalning eng yuqori sarlavha qatorida 4 ta ustunni bitta qilish uchun `Merge Cells` (Kataklarni birlashtirish) bosiladi; bitta katakni 2 ga bo‘lish uchun `Split Cells`. Matn katak ichida nafaqat chap-o‘ngga, balki vertikal ham (`Align Center Left`, `Align Center` — katak markazida) tekislanishi kerak. `Cell Margins / Padding` katak chizig‘i va matn orasida nafas oladigan bo‘shliq beradi.',
        example: 'Dars jadvalida "Hafta kunlari" sarlavhasi uchun yuqori qator kataklari Merge qilinadi va matn markazlashtiriladi.',
        tip: 'Jadvaldagi matn katak devoriga yopishib qolmasligi uchun doim `Cell Padding` ni kamida 0.1–0.2 sm qoldiring!',
      },
      {
        heading: 'Ko‘p sahifali jadvallar: Repeat Header Rows va Text Direction',
        body: 'Agar jadval 2–3 sahifaga cho‘zilsa, 2-sahifada ustun sarlavhalari ko‘rinmay qoladi. Buni tuzatish uchun sarlavha qatorini belgilab, `Table Layout → Repeat Header Rows` bosiladi — endi har yangi sahifada sarlavha avtomatik takrorlanadi! Shuningdek, tor ustunlarda sarlavhani `Text Direction` bilan 90° vertikal aylantirish va `Allow row to break across pages` ni o‘chirish qulay.',
        example: '100 ta o‘quvchi ro‘yxati joylashgan jadvalning 2- va 3-betlarida ham `№ | F.I.Sh. | Sinf | Ball` qatori tepada avtomatik chiqib turadi.',
      },
    ],
    keyTerms: [
      { term: 'Merge Cells', definition: 'Ikki yoki undan ortiq qo‘shni jadval kataklarini bitta katakka birlashtirish.' },
      { term: 'Split Cells', definition: 'Bitta katakni bir nechta ustun yoki qatorga ajratish.' },
      { term: 'Repeat Header Rows', definition: 'Ko‘p sahifaga cho‘zilgan jadvalning sarlavha qatorini har sahifa tepasida avtomatik takrorlash.' },
      { term: 'Cell Padding (Margins)', definition: 'Jadval katagi chegarasi bilan ichidagi matn orasidagi ichki bo‘shliq.' },
    ],
    steps: [
      '1. 5 ustun va 6 qatorli jadval yarating.',
      '2. 1-qatorni `Merge Cells` bilan birlashtirib, markaziy sarlavha yozing.',
      '3. Katak ichidagi matnni vertikal markazlashtiring (`Align Center Left`) va `Cell Padding` bering.',
      '4. Jadval ko‘p sahifaga o‘tganda `Repeat Header Rows` ni yoqib tekshiring.',
    ],
    practice: [
      {
        task: '40 qatorli jadval ikki sahifaga bo‘lindi, 2-sahifada ustun nomlari ko‘rinmayapti. Qaysi buyruq buni darhol hal qiladi?',
        expected: 'Sarlavha qatorini tanlab, `Table Tools → Layout → Repeat Header Rows` tugmasini bosish.',
        difficulty: 'oson',
      },
      {
        task: 'Jadvaldagi bitta qator yarmi 1-sahifada, yarmi 2-sahifada uzilib qolmasligi uchun Table Properties da qaysi belgi o‘chiriladi?',
        expected: 'Row bo‘limidan `Allow row to break across pages` katakchasini o‘chirish.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l54-g1',
        num: '01',
        title: 'Jadval tahrirlash amallari',
        topic: 'Jadvallarni tahrirlash',
        difficulty: 'Oson',
        engine: 'fillblank',
        config: {
          prompt: 'Jadval sozlamalariga oid jumlani to‘ldiring.',
          template: 'Jadvalning 1-qatoridagi kataklarni sarlavha uchun bitta qilish {{0}}, bitta katakni ikkiga ajratish {{1}}, ko‘p sahifali jadvalda ustun nomlarini har betda ko‘rsatish esa {{2}} deyiladi.',
          blanks: [
            { options: ['Merge Cells', 'Split Cells', 'Shading'], answer: 'Merge Cells' },
            { options: ['Split Cells', 'Merge Cells', 'Borders'], answer: 'Split Cells' },
            { options: ['Repeat Header Rows', 'Text Direction', 'Gutter'], answer: 'Repeat Header Rows' },
          ],
          hint: 'Birlashtirish = Merge; Bo‘lish = Split; Takrorlanuvchi sarlavha = Repeat Header Rows.',
          explanation: 'Merge, Split va Repeat Header Rows jadvallarni professional bezashning asosiy uskunalaridir.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Jadvalning yuqori qatoridagi 4 ta qo‘shni katakni bitta umumiy sarlavha katagiga birlashtirish buyrug‘i nima?',
        options: ['Merge Cells', 'Split Cells', 'AutoFit', 'Distribute Rows'],
        answer: 0,
        explanation: 'Merge Cells tanlangan kataklarni bitta yaxlit katakka aylantiradi.',
      },
      {
        prompt: 'Jadval bir necha sahifaga cho‘zilganda ustun sarlavhalari har yangi sahifada takrorlanishi uchun nima yoqiladi?',
        options: ['Repeat Header Rows', 'Page Break', 'Drop Cap', 'Watermark'],
        answer: 0,
        explanation: 'Repeat Header Rows 2-, 3- va keyingi sahifalarda jadval boshini avtomatik ko‘rsatadi.',
      },
      {
        prompt: 'Katak ichidagi matn katak chizig‘iga yopishib qolmasligi uchun qaysi parametr oshiriladi?',
        options: ['Cell Margins / Padding', 'Line Spacing 0.5', 'Font Size 20', 'Landscape'],
        answer: 0,
        explanation: 'Cell Padding matn va katak devori o‘rtasida bo‘sh hoshiya beradi.',
      },
      {
        prompt: 'Juda tor ustun nomini joylashtirish uchun matnni 90° vertikal burish qaysi tugma bilan bajariladi?',
        options: ['Text Direction', 'Shading', 'Sort', 'Formula'],
        answer: 0,
        explanation: 'Text Direction katak ichidagi yozuvni vertikal yoki gorizontal yo‘nalishga o‘giradi.',
      },
      {
        prompt: 'Jadval katagi ichida raqamlar va sanalar o‘zgaruvchan bo‘lsa, barcha ustun kengligini matnga moslashning tez yo‘li nima?',
        options: ['AutoFit to Contents', 'Delete Table', 'Flip Horizontal', 'Crop'],
        answer: 0,
        explanation: 'AutoFit to Contents ustunlarni ichidagi eng uzun matnga avtomatik moslaydi.',
      },
    ],
    teacherNotes: {
      method: 'Sinf dars jadvali yoki narxnoma jadvalini Merge/Split va Repeat Header Rows bilan jonli yasash.',
      timing: 'Merge/Split/Padding 15 daq, Ko‘p sahifali jadvallar 15 daq, FillBlank va quiz 15 daq.',
      assessment: 'Merge, Split va Repeat Header Rows ni amalda bajara olish.',
      homework: '3 betga cho‘zilgan o‘quvchilar jadvalini tayyorlab, har bir sahifada sarlavha qatori takrorlanishini sozlang.',
    },
  },
  {
    id: 'g9-l55',
    grade: 9,
    no: 55,
    part: '4-chorak',
    title: 'Maʼlumot manbasi bilan hujjatni birlashtirib, pochta orqali yuborish',
    kind: 'dars',
    hours: 1,
    tools: ['Mail Merge (Pochtani birlashtirish)', 'Master Document', 'Data Source (CSV/XLSX)'],
    objectives: [
      'O‘quvchi Mail Merge (Pochtani birlashtirish) texnologiyasining maqsadini — bitta asosiy shablon (Master Document) va ma’lumot manbasi (Data Source) dan yuzlab shaxsiylashtirilgan hujjat yaratishni tushuntiradi.',
      'O‘quvchi birlashtirish maydonlari (`«Ism»`, `«Sinf»`, `«Ball»`) va shartli filtrlarni qo‘llash bosqichlarini tartiblaydi.',
    ],
    intro:
      'Tasavvur qiling, maktabning 300 nafar bitiruvchisiga ismlari va fan baholari yozilgan alohida sertifikat yoki taklifnoma tayyorlashingiz kerak! Har birini qo‘lda nusxalab yozishga butun kun ketadi, ammo `Mail Merge` bu ishni 10 soniyada xatosiz bajaradi.',
    sections: [
      {
        heading: 'Mail Merge ning ikki ustuni: Master Hujjat va Manba fayli',
        body: 'Mail Merge (Pochta birlashtiruvi) ikkita faylni bog‘laydi: 1) Master Document (Asosiy hujjat — Word da yozilgan sertifikat yoki xat shabloni, o‘zgarmas matn va `«Ism»`, `«Sinf»`, `«Baho»` kabi maydonlardan iborat); 2) Data Source (Ma’lumot manbasi — Excel, CSV yoki Access dagi qatorlar jadvali, har bir qator bir kishi ma’lumoti). Dastur ularni birlashtirib, har bir kishi uchun shaxsiylashtirilgan alohida xat, PDF yoki email yuboradi!',
        example: '"Hurmatli `«Ota_ona»`, farzandingiz `«Oquvchi_ismi»` informatika fanidan `«Baho»` oldi" shabloniga 100 qatorli Excel ulansa, 100 ta tayyor xat hosil bo‘ladi.',
        tip: 'Mail Merge da "Preview Results" tugmasi bilan har bir odamning ismini chop etishdan oldin ko‘zdan kechiring, shuningdek faqat maʼlum guruhni (masalan, `Sinf = 9-A`) filtrlash (Filter Recipients) ham mumkin!',
      },
      {
        heading: 'Mail Merge bosqichlari va Elektron pochta jo‘natmasi',
        body: 'Bosqichlar: 1) Hujjat turini tanlash (Letters, Labels, E-mail messages); 2) Data Source ni ulash (`Select Recipients → Use an Existing List`); 3) Kerakli joylarga maydonlarni qo‘yish (`Insert Merge Field`); 4) Filtrlash va `Preview Results`; 5) `Finish & Merge` (Chop etish, Yangi hujjatga saqlash yoki `Send Email Messages` orqali har bir shaxsga alohida email yuborish).',
        example: 'Olimpiada g‘oliblariga sertifikat yuborishda faqat `Ball >= 80` bo‘lgan qatorlar filtrlanib, bitta tugma bilan 25 kishiga shaxsiy PDF va email ketadi.',
      },
    ],
    keyTerms: [
      { term: 'Mail Merge', definition: 'Bitta shablon hujjatni jadval manbasi bilan birlashtirib ko‘plab shaxsiy hujjatlar yaratish.' },
      { term: 'Master Document', definition: 'Umumiy matn va o‘zgaruvchi maydon belgilarini saqlovchi asosiy shablon fayli.' },
      { term: 'Data Source', definition: 'O‘zgaruvchi ma’lumotlar (ism, manzil, ball) saqlanadigan Excel, CSV yoki Access jadvali.' },
      { term: 'Merge Field (`«...»`)', definition: 'Ma’lumot manbasidagi ustun qiymati qo‘yiladigan shablon ichidagi belgi.' },
    ],
    steps: [
      '1. Excel/CSV da `Ism`, `Sinf`, `Email`, `Natija` ustunlaridan iborat 5 kishilik manba fayli yarating.',
      '2. Word/Writer da taklifnoma matnini yozing va `Mailings → Select Recipients` orqali manbani ulang.',
      '3. `Insert Merge Field` bilan tegishli joylarga maydonlarni joylang.',
      '4. `Preview Results` bilan tekshirib, `Finish & Merge` ni bajaring.',
    ],
    practice: [
      {
        task: 'Mail Merge bajarishda qanday ikkita asosiy fayl kerak bo‘ladi va ularning vazifasi nima?',
        expected: '1) Master Document (Word shabloni — umumiy dizayn va «Maydonlar»); 2) Data Source (Excel/CSV/Access — har bir qabul qiluvchining ma’lumotlari).',
        difficulty: 'oson',
      },
      {
        task: 'Manba jadvalida 500 ta o‘quvchi bor, lekin taklifnoma faqat 9-sinflarga yuborilishi kerak. Jadvalni o‘chirmasdan buni qanday qilasiz?',
        expected: 'Mail Merge dagi `Edit Recipient List → Filter` orqali `Sinf = 9` shartini qo‘llash.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l55-g1',
        num: '01',
        title: 'Mail Merge bosqichlarini tartibla',
        topic: 'Mail Merge',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Mail Merge yordamida 100 ta sertifikat yaratish va yuborish bosqichlarini to‘g‘ri tartibda joylashtiring.',
          items: [
            'Asosiy hujjat (Master Document) shablonini tayyorlash va hujjat turini tanlash',
            'Ma’lumot manbasini (Excel / CSV / Access jadvalini) ulash (Select Recipients)',
            'Matn ichidagi kerakli joylarga «Merge Field» maydonlarini joylashtirish',
            'Preview Results bilan tekshirish va Finish & Merge orqali yakunlash / yuborish',
          ],
          hint: 'Shablon → Manba ulash → Maydon qo‘yish → Ko‘rib chiqish va Yakunlash.',
          explanation: 'Bu 4 bosqich Mail Merge jarayonining universal algoritmidir.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Mail Merge texnologiyasining asosiy vazifasi nimadan iborat?',
        options: ['Bitta shablon va ma’lumotlar jadvalidan ko‘p sonli shaxsiylashtirilgan hujjat/xat yaratish', 'Rasmlarni ZIP qilish', 'Kodni HTML ga o‘girish', 'Diskni formatlash'],
        answer: 0,
        explanation: 'Mail Merge har bir shaxs uchun nomini qo‘lda yozmasdan avtomatik xat/sertifikat chiqaradi.',
      },
      {
        prompt: 'Mail Merge da har bir qabul qiluvchining ismi, manzili va bali qayerdan olinadi?',
        options: ['Data Source (Ma’lumot manbasi — Excel, CSV, Access)', 'Slide Master dan', 'Printer drayveridan', 'Header dan'],
        answer: 0,
        explanation: 'O‘zgaruvchi ma’lumotlar jadval ko‘rinishidagi Data Source da saqlanadi.',
      },
      {
        prompt: 'Asosiy hujjat ichidagi `«Ism»` ko‘rinishidagi belgi nima deb ataladi?',
        options: ['Merge Field (Birlashtirish maydoni)', 'Check Digit', 'Watermark', 'Section Break'],
        answer: 0,
        explanation: 'Merge Field birlashtirish paytida Data Source dagi ustun qiymatiga almashadi.',
      },
      {
        prompt: 'Hujjatni yuborishdan avval har bir kishining ma’lumoti to‘g‘ri tushganini tekshirish tugmasi qaysi?',
        options: ['Preview Results', 'Split Cells', 'Spelling', 'Macros'],
        answer: 0,
        explanation: 'Preview Results maydon nomlari o‘rniga haqiqiy qiymatlarni ko‘rsatib tekshirishga imkon beradi.',
      },
      {
        prompt: 'Faqat Toshkent shahridagi mijozlarga xat chiqarish uchun Mail Merge da qaysi vosita ishlatiladi?',
        options: ['Filter Recipients (Qabul qiluvchilarni filtrlash)', 'Gutter margin', 'Rotate 90°', 'Lossy compress'],
        answer: 0,
        explanation: 'Filter Recipients berilgan shartga (`Shahar = Toshkent`) mos yozuvlarnigina tanlaydi.',
      },
    ],
    teacherNotes: {
      method: '5 ta o‘quvchilik Excel faylini Word dagi "Faxriy yorliq" shabloniga jonli ulab ko‘rsatish.',
      timing: 'Master/Source 15 daq, Merge Fields va Filtr 15 daq, Order va test 15 daq.',
      assessment: 'Mail Merge bosqichlarini tartiblash va Master/Source farqini aytish.',
      homework: '5 do‘stingiz uchun tug‘ilgan kun taklifnomasi Mail Merge shablonini va CSV ro‘yxatini tayyorlang.',
    },
  },
  {
    id: 'g9-l56',
    grade: 9,
    no: 56,
    part: '4-chorak',
    title: 'Ma’lumotlar bazasi tuzilmasini yaratish. Maʼlumotlarni boshqarish va taqdim etish',
    kind: 'dars',
    hours: 1,
    tools: ['Access / LibreOffice Base', 'DbLab', 'Jadvallar / Kalitlar / Query / Report'],
    objectives: [
      'O‘quvchi ma’lumotlar bazasi tuzilmasi (Jadval, Yozuv/Record, Maydon/Field, Birlamchi kalit — Primary Key, Ma’lumot turlari) ni tushunadi.',
      'O‘quvchi bazada shartli qidiruv so‘rovi (`Query`) tuzish va natijalarni Forma/Hisobot (`Form`/`Report`) ko‘rinishida taqdim etishni biladi.',
    ],
    intro:
      'Elektron jadval kichik hisob-kitoblar uchun zo‘r, lekin maktabdagi minglab o‘quvchi, kitob va baholarni tezkor qidirish va bog‘lash uchun haqiqiy Maʼlumotlar bazasi (Database — Access/Base) kerak bo‘ladi.',
    sections: [
      {
        heading: 'Jadval, Maydon (Field), Yozuv (Record) va Primary Key',
        body: 'Ma’lumotlar bazasi jadvalida har bir ustun — Maydon (Field, masalan `Ism`, `Sinf`, `Ball`), har bir qator esa — Yozuv (Record — bitta obyekt haqidagi to‘liq ma’lumot). Har bir maydonga to‘g‘ri Ma’lumot turi (Data Type) tanlanishi shart: Text (matn), Number/Integer (butun son), Decimal/Currency (o‘nlik/pul), Date/Time (sana), Boolean/Yes-No (mantiqiy). Har bir yozuvni takrorlanmas qilib ajratish uchun esa Primary Key (Birlamchi kalit, masalan `Oquvchi_ID`) belgilanadi.',
        example: 'Ikki o‘quvchining ismi bir xil ("Aziz") bo‘lishi mumkin, lekin `ID` raqami (`101` va `102`) hech qachon takrorlanmaydi — u Primary Key!',
        tip: 'Telefon raqami (`+998901234567`) bilan matematik amal bajarilmaydi va boshida `0` yoki `+` bo‘lishi mumkin — shuning uchun uni Number emas, `Text` turida saqlang!',
      },
      {
        heading: 'Query (So‘rov), Form (Kiritish formasi) va Report (Hisobot)',
        body: 'Query — bazadan kerakli mezon bo‘yicha ma’lumotlarni saralab oluvchi so‘rov (masalan: `Ball >= 85 AND Sinf = "9-A"`). Form — operator qulay va xatosiz ma’lumot kiritishi uchun ekran oynasi. Report — qidiruv yoki jadval natijalarini chiroyli sarlavha, guruhlash va yakuniy yig‘indi (`SUM`, `COUNT`, `AVG`) bilan chop etish uchun hisobot.',
        example: 'Direktorga chorak yakunida faqat "Aʼlochi o‘quvchilar ro‘yxati" kerak bo‘lsa, avval Query bilan saralab, keyin Report ko‘rinishida PDF ga chiqariladi.',
      },
    ],
    keyTerms: [
      { term: 'Field va Record', definition: 'Field — jadvaldagi bitta ustun (xususiyat); Record — bitta qator (obyekt yozuvi).' },
      { term: 'Primary Key (Birlamchi kalit)', definition: 'Jadvaldagi har bir yozuvni noyob identifikatsiya qiluvchi takrorlanmas maydon.' },
      { term: 'Data Type', definition: 'Maydonda saqlanadigan ma’lumot turi (Text, Number, Date/Time, Boolean, Currency).' },
      { term: 'Query & Report', definition: 'Query — shartli tanlash so‘rovi; Report — chop etish va taqdim etish uchun rasmiy hisobot.' },
    ],
    steps: [
      '1. `Oquvchilar` jadvali uchun 5 maydon va ularning Data Type larini belgilang.',
      '2. Qaysi maydon Primary Key bo‘lishini aniqlang.',
      '3. Quyidagi DbLab laboratoriyasida `Ball > 80` bo‘lgan o‘quvchilarni topuvchi Query tuzing!',
    ],
    practice: [
      {
        task: '`Kitoblar` jadvali uchun quyidagi maydonlarga mos Data Type yozing: `Kitob_ID`, `Nomi`, `Narxi`, `Nashr_sanasi`, `Mavjudmi`.',
        expected: 'Kitob_ID: AutoNumber/Integer (PK); Nomi: Text; Narxi: Currency/Decimal; Nashr_sanasi: Date/Time; Mavjudmi: Boolean (Yes/No).',
        difficulty: 'oson',
      },
      {
        task: 'Nima uchun ma’lumotlar bazasida `Oquvchi_Ismi` o‘rniga `Oquvchi_ID` Primary Key sifatida tanlanadi?',
        expected: 'Ism va familiyalar bir xil bo‘lib takrorlanishi mumkin; Primary Key esa mutlaqo takrorlanmas (unique) va bo‘sh bo‘lmasligi shart.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l56-g1',
        num: '01',
        title: 'DbLab: Aʼlochilarni qidirish so‘rovi',
        topic: 'Ma’lumotlar bazasi Query',
        difficulty: 'O‘rta',
        engine: 'dblab',
        config: {
          prompt: '9-sinf o‘quvchilari jadvalidan Informatika bali 80 dan katta (`Ball > 80`) bo‘lgan o‘quvchilarni topuvchi Query tuzing!',
          tableName: 'Oquvchilar_9',
          columns: [
            { name: 'ID', type: 'Integer (PK)' },
            { name: 'Ism', type: 'Text' },
            { name: 'Sinf', type: 'Text' },
            { name: 'Ball', type: 'Integer' },
          ],
          rows: [
            { ID: 101, Ism: 'Azizbek', Sinf: '9-A', Ball: 92 },
            { ID: 102, Ism: 'Madina', Sinf: '9-B', Ball: 78 },
            { ID: 103, Ism: 'Sardor', Sinf: '9-A', Ball: 85 },
            { ID: 104, Ism: 'Nilufar', Sinf: '9-V', Ball: 80 },
            { ID: 105, Ism: 'Jasur', Sinf: '9-B', Ball: 96 },
          ],
          mode: 'query',
          targetField: 'Ball',
          targetOp: '>',
          targetValue: '80',
          expectedRowCount: 3,
          hint: 'Maydon: Ball | Operator: > | Qiymat: 80 ni tanlang (`80` kirmaydi, chunki qatʼiy katta >).',
          explanation: '92, 85 va 96 ball olgan 3 ta o‘quvchi (`Ball > 80`) shartini qanoatlantiradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ma’lumotlar bazasi jadvalidagi har bir yozuvni takrorlanmas qilib ajratuvchi maydon nima deb ataladi?',
        options: ['Primary Key (Birlamchi kalit)', 'Boolean', 'Footer', 'Report'],
        answer: 0,
        explanation: 'Primary Key qiymati har bir qator uchun noyob bo‘lib, takrorlanmaydi.',
      },
      {
        prompt: 'Jadvaldagi bitta o‘quvchiga tegishli to‘liq ma’lumotlar qatori qanday ataladi?',
        options: ['Yozuv (Record)', 'Maydon (Field)', 'Query', 'Data Type'],
        answer: 0,
        explanation: 'Qator — Record (yozuv), ustun esa — Field (maydon).',
      },
      {
        prompt: '"Mahsulot omborda mavjudmi? (Ha/Yo‘q)" maydoni uchun qaysi ma’lumot turi eng mos?',
        options: ['Boolean (Yes/No)', 'Date/Time', 'Text', 'Currency'],
        answer: 0,
        explanation: 'Faqat ikki holatni (Ha/Yo‘q, True/False) saqlashda Boolean eng ixcham turdir.',
      },
      {
        prompt: 'Ma’lumotlarni qulay kiritish uchun yaratilgan ekran oynasi va chop etish uchun yaratilgan yakuniy hujjat mos ravishda qaysilar?',
        options: ['Form (Forma) va Report (Hisobot)', 'Table va Macro', 'CSS va HTML', 'Zip va Rar'],
        answer: 0,
        explanation: 'Form ma’lumot kiritishni osonlashtiradi, Report esa natijalarni chiroyli chop etishga tayyorlaydi.',
      },
      {
        prompt: 'Nima uchun `+998901234567` telefon raqami bazada odatda `Number` emas, `Text` turida saqlanadi?',
        options: ['U bilan arifmetik amal bajarilmaydi va `+` yoki boshidagi `0` yo‘qolmay saqlanadi', 'Text sonlardan tezroq qo‘shiladi', 'Number faqat 2 xonali bo‘ladi', 'Text shifrlanadi'],
        answer: 0,
        explanation: 'Number turi boshidagi `0` va `+` belgisini tashlab yuboradi; telefon raqamlari ustida qo‘shish/bo‘lish qilinmaydi.',
      },
    ],
    teacherNotes: {
      method: 'DbLab o‘yinida Query filtrlashni ko‘rsatib, Access/Base jadvalini jonli yaratish.',
      timing: 'Jadval/PK/Data Types 20 daq, Query/Form/Report 15 daq, DbLab va test 10 daq.',
      assessment: 'DbLab da `Ball > 80` so‘rovini to‘g‘ri tuzish.',
      homework: 'Maktab kutubxonasi uchun `Kitoblar` jadvali tuzilmasini (6 maydon, Data Type, Primary Key) daftarga chizing.',
    },
  },
  {
    id: 'g9-l57',
    grade: 9,
    no: 57,
    part: '4-chorak',
    title: 'Ob’yektlarni to‘g‘ri joylash. Taqdimot slaydlarini yaratish uchun mos dastur imkoniyatlaridan foydalanish',
    kind: 'dars',
    hours: 1,
    tools: ['PowerPoint / Impress', 'Slide Layout', 'Transitions & Presenter Notes'],
    objectives: [
      'O‘quvchi taqdimot yaratishda slayd maketlari (Title Slide, Two Content), vizual muvozanat (White space) va obyektlarni to‘g‘ri joylashni qo‘llaydi.',
      'O‘quvchi o‘tish effektlari (Transitions), cheklangan animatsiya va Presenter Notes (Ma’ruzachi izohlari) dan o‘rinli foydalanishni biladi.',
    ],
    intro:
      'Yaxshi taqdimot — slaydni matn bilan to‘ldirib o‘qib berish emas! Tomoshabin ekrandagi asosiy fikr va tasvirni bir qarashda ilg‘ashi, ma’ruzachi esa Presenter Notes ga tayanib jonli gapirishi kerak.',
    sections: [
      {
        heading: 'Slaydda obyektlarni to‘g‘ri joylash va Bo‘sh joy (White space)',
        body: 'Har bir slaydda: 1) Kamida 30–40% bo‘sh joy (White space) qoldiring — zich matn ko‘zni charchatadi; 2) Obyektlarni o‘zaro `Align` va `Distribute` bilan tekislang; 3) Bitta slaydda 2–3 xil shrift o‘lchami ierarxiyasi (Sarlavha 32pt, Kichik sarlavha 22pt, Qisqa tezislar 18–20pt); 4) Rasmlar keskin va aniq, matn bilan fon orasida kuchli kontrast bo‘lsin.',
        example: 'Ikki narsani solishtirishda bo‘sh slaydni qo‘lda yasash o‘rniga tayyor `Comparison` yoki `Two Content` Slide Layout ni tanlang.',
        tip: 'Slaydga uzun hikoya yozmang — slaydga faqat kalit so‘zlar va diagramma qo‘ying, batafsil nutqingizni esa pastdagi `Speaker / Presenter Notes` ga yozing!',
      },
      {
        heading: 'Transitions, Animatsiya va Harakat tugmalari (Action Buttons)',
        body: 'Slide Transitions (slaydlar almashishi) butun taqdimotda bir xil va silliq (masalan, Fade) bo‘lsin — har slaydda har xil aylanuvchi effekt tomoshabinni chalg‘itadi. Element animatsiyasi (Appear/Fade) esa faqat ro‘yxat bandlarini bosqichma-bosqich ochish uchun ishlatiladi. `Action Buttons` (Giperhavola tugmalari) yordamida taqdimot ichida boshqa slaydga ("Mundarijaga qaytish") yoki tashqi veb-saytga sakrash mumkin.',
        example: 'Viktorina yoki interaktiv menyuli taqdimotda "Keyingi bo‘lim" va "Bosh sahifa" Action tugmalari qulay navigatsiya beradi.',
      },
    ],
    keyTerms: [
      { term: 'White Space (Bo‘sh fazo)', definition: 'Slayddagi elementlar orasidagi nafas oluvchi bo‘sh joy — o‘qishni osonlashtiradi.' },
      { term: 'Presenter Notes', definition: 'Ma’ruzachi uchun slayd ostiga yoziladigan, ekranda tomoshabinga ko‘rinmaydigan eslatma matni.' },
      { term: 'Slide Transition', definition: 'Bir slayddan keyingi slaydga o‘tishdagi vizual effekt.' },
      { term: 'Action Button', definition: 'Bosilganda ma’lum slaydga, faylga yoki URL ga o‘tkazuvchi interaktiv tugma.' },
    ],
    steps: [
      '1. `Two Content` maketida chapga rasm, o‘ngga 4 ta qisqa tezis joylang.',
      '2. Slayd ostidagi `Notes` qismiga o‘zingiz aytadigan 3 jumlali nutqni yozing.',
      '3. Barcha slaydlarga bir xil `Fade` o‘tishini va bitta "Bosh sahifa" Action tugmasini qo‘ying.',
    ],
    practice: [
      {
        task: 'Taqdimotning har bir slaydiga 200 so‘zli matn yozib, 8 ta uchib keladigan animatsiya qo‘yish nima uchun yomon amaliyot sanaladi?',
        expected: 'Tomoshabin slayd o‘qish bilan ovora bo‘lib ma’ruzachini eshitmaydi, ko‘p animatsiya esa eʼtiborni chalg‘itadi va vaqt oladi.',
        difficulty: 'oson',
      },
      {
        task: 'Interaktiv maktab katalogi taqdimotida 10-slayddan darhol 2-slayd ("Mundarija") ga qaytish uchun qaysi vositani qo‘yasiz?',
        expected: '`Insert → Shapes → Action Buttons (Home)` va Hyperlink to: `Slide 2` sozlamasini.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l57-g1',
        num: '01',
        title: 'Professional taqdimot qoidalari',
        topic: 'Taqdimot yaratish',
        difficulty: 'Oson',
        engine: 'truefalse',
        config: {
          prompt: 'Taqdimot slaydlarini bezash bo‘yicha fikrlarni baholang.',
          statements: [
            {
              text: 'Slayd ichidagi White space (bo‘sh joy) dizaynning muhim qismi bo‘lib, ma’lumotni tez ilg‘ashga yordam beradi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Bo‘sh joy ko‘z zo‘riqishini kamaytiradi va asosiy fikrni ajratadi.',
            },
            {
              text: 'Ma’ruzachi aytadigan butun uzun matnni slaydga kichik shriftda ko‘chirib qo‘yish eng yaxshi usuldir.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Uzun nutq `Presenter Notes` da turishi, slaydda esa qisqa tezislar bo‘lishi kerak.',
            },
            {
              text: 'Action Buttons slaydlar o‘rtasida interaktiv giperhavolali navigatsiya yaratishga imkon beradi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Harakat tugmalari menyu va viktorina slaydlarida juda qulay.',
            },
            {
              text: 'Har bir slaydga mutlaqo har xil va murakkab aylanuvchi Transition effekti qo‘yish tavsiya etiladi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Izchil va sokin bir xil o‘tish (masalan, Fade) professional ko‘rinadi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ma’ruzachi ekranda tomoshabinlarga ko‘rsatmasdan, faqat o‘zi o‘qib turadigan nutq matnini qayerga yozadi?',
        options: ['Presenter Notes (Ma’ruzachi eslatmalari)', 'Header', 'Slide Title', 'Watermark'],
        answer: 0,
        explanation: 'Presenter View rejimida eslatmalar faqat ma’ruzachi ekranida ko‘rinadi.',
      },
      {
        prompt: 'Taqdimotning 15-slaydidan bosish bilan darhol 1-slaydga qaytish uchun qaysi element qo‘shiladi?',
        options: ['Action Button / Hyperlink', 'Crop', 'Line Spacing', 'Spell Check'],
        answer: 0,
        explanation: 'Action Button istalgan slayd yoki URL ga bir bosishda o‘tish imkonini beradi.',
      },
      {
        prompt: 'Slaydda obyektlar orasida yetarli bo‘sh joy (White space) qoldirish nima uchun foydali?',
        options: ['Asosiy elementlar darhol ko‘zga tashlanadi va o‘qish yengillashadi', 'Slayd sonini kamaytiradi', 'Rangni o‘chiradi', 'Internetni tezlashtiradi'],
        answer: 0,
        explanation: 'Zich bo‘lmagan maket diqqatni asosiy ma’lumotga jamlashga yordam beradi.',
      },
      {
        prompt: 'Barcha slaydlarda o‘tish effektlari (Transitions) qanday tanlanishi maʼqul?',
        options: ['Butun taqdimot bo‘ylab yagona va silliq uslubda', 'Har bir slaydda 5 xil effekt', 'Eng sekin 10 soniyali effekt', 'Matnni yashiradigan effekt'],
        answer: 0,
        explanation: 'Sokin va izchil o‘tish taqdimot mazmunidan chalg‘itmaydi.',
      },
      {
        prompt: 'Ikkita rasm yoki diagrammani yonma-yon joylashtirish uchun eng mos standart slayd maketi (Layout) qaysi?',
        options: ['Two Content / Comparison', 'Title Only', 'Blank', 'Section Header'],
        answer: 0,
        explanation: 'Two Content va Comparison ikki ustunli teng simmetrik joylashuv beradi.',
      },
    ],
    teacherNotes: {
      method: '"Yomon zich slayd vs Toza White space slayd" ni yonma-yon ko‘rsatib tahlil qilish.',
      timing: 'Joylashuv va White space 15 daq, Notes/Transitions/Action 15 daq, TrueFalse va quiz 15 daq.',
      assessment: 'Action tugmalari va Presenter Notes vazifasini amalda qo‘llash.',
      homework: 'Istalgan fan mavzusida 4 slaydli toza taqdimot tayyorlab, har bir slaydga Presenter Notes yozing.',
    },
  },
  {
    id: 'g9-l58',
    grade: 9,
    no: 58,
    part: '4-chorak',
    title: 'Taqdimotga elektron jadvaldan diagrammalarni import qilish',
    kind: 'dars',
    hours: 1,
    tools: ['Excel + PowerPoint', 'Paste Options (Embed vs Link)', 'SVG / Yuqori sifatli rasm'],
    objectives: [
      'O‘quvchi elektron jadvaldagi (Excel/Calc) diagramma va jadvallarni taqdimotga import qilish usullarini (Embedded, Linked, Picture) farqlaydi.',
      'O‘quvchi import qilingan diagramma slayd rangiga moslashishi va o‘lchami buzilmasligi uchun moslashtirish amallarini bajaradi.',
    ],
    intro:
      'Hisob-kitoblar Excel da qilinadi, lekin rahbariyat yoki sinf oldida ular PowerPoint/Impress slaydida ko‘rsatiladi. Diagrammani shunchaki nusxalashda `Link` (bog‘langan) yoki `Embed` (ichki) rejimini to‘g‘ri tanlash muhim!',
    sections: [
      {
        heading: 'Diagrammani import qilishning 3 usuli',
        body: 'Excel dan diagrammani nusxalab (`Ctrl+C`) PowerPoint ga qo‘yayotganda (`Paste Options`) uchta asosiy tanlov chiqadi: 1) **Embed Workbook**: butun Excel jadvali nusxasi taqdimot ichida saqlanadi — faylni boshqa kompyuterga olib borsangiz ham ishlaydi, lekin asl Excel o‘zgarsa bu yangilanmaydi. 2) **Link Data**: diagramma asl Excel fayliga bog‘lanadi — Excel da raqam o‘zgarsa taqdimotda ham `Refresh` orqali darhol yangilanadi (ammo Excel fayli o‘chirilsa yoki yo‘li o‘zgarsa aloqa uziladi!). 3) **Picture (Rasm sifatida)**: tahrirlab bo‘lmaydi, lekin hech qachon buzilmaydi va fayl yengil bo‘ladi.',
        example: 'Har oyda yangilanadigan savdo hisoboti taqdimotida `Use Destination Theme & Link Data` tanlansa, oylik raqamlar Excel da yangilanishi bilan slayd ham tayyor bo‘ladi.',
        tip: 'Agar taqdimotni USB fleshkada boshqa maktab kompyuteriga olib ketayotgan bo‘lsangiz, `Link Data` o‘rniga `Embed` yoki ikkala faylni bitta papkada olib yuring!',
      },
      {
        heading: 'Slaydga moslashtirish va O‘qishlilik',
        body: 'Import qilingan diagrammada shriftlar slayd uchun juda mayda (9pt) bo‘lishi mumkin! Slaydda diagramma sarlavhasi 20–24pt, o‘q yozuvlari kamida 14–16pt bo‘lishi va slayd brend ranglariga mos `Use Destination Theme` tanlanishi lozim.',
        example: 'To‘q ko‘k slayd foniga qora matnli Excel grafigini qo‘yib bo‘lmaydi — matn rangi oqqa yoki diagramma foni och rangga o‘zgartiriladi.',
      },
    ],
    keyTerms: [
      { term: 'Embed (Ichiga joylash)', definition: 'Excel ma’lumotlari nusxasini to‘g‘ridan-to‘g‘ri taqdimot fayli ichida saqlash.' },
      { term: 'Link Data (Bog‘lash)', definition: 'Taqdimotdagi diagrammani asl Excel fayli bilan jonli bog‘lab qo‘yish.' },
      { term: 'Destination Theme', definition: 'Import qilingan grafik rang va shriftlarini avtomatik taqdimot stili ranglariga moslash.' },
      { term: 'Keep Source Formatting', definition: 'Diagrammaning Excel dagi asl rang va ko‘rinishini o‘zgartirmay saqlab qolish.' },
    ],
    steps: [
      '1. Excel/Calc da ustunli diagramma yarating.',
      '2. Uni nusxalab PowerPoint/Impress slaydiga `Link Data` va boshqa slaydga `Embed` usulida joylang.',
      '3. Excel dagi bir sonni o‘zgartiring va Link qilingan slaydda diagramma qanday yangilanishini tekshiring.',
    ],
    practice: [
      {
        task: 'Excel dagi bir raqam o‘zgarganda PowerPoint slaydida ham diagramma avtomatik yangilanishi uchun qaysi Paste usulini tanlaysiz?',
        expected: '`Link Data` (Use Destination Theme & Link Data yoki Keep Source Formatting & Link Data).',
        difficulty: 'oson',
      },
      {
        task: 'Taqdimotni email orqali boshqa shahardagi hakamlarga yuboryapsiz (Excel faylini yubormaysiz). Link va Embed dan qay birini qo‘llash shart?',
        expected: '`Embed` (yoki `Picture`): chunki Link qo‘yilsa, hakam kompyuterida asl Excel fayli bo‘lmagani uchun bog‘lanish uziladi va ma’lumot yangilanmaydi/xato berishi mumkin.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l58-g1',
        num: '01',
        title: 'Import usulini tanla',
        topic: 'Diagrammani import qilish',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Vaziyat uchun eng to‘g‘ri import (Paste) usulini tanlang.',
          scenario: 'Maktab maʼmuriyati har haftalik davomat hisobotini bitta umumiy papkada saqlaydi: `davomat.xlsx` fayli har juma yangilanadi va unga ulangan `hisobot.pptx` taqdimoti avtomatik yangi grafikni ko‘rsatishi kerak.',
          options: [
            {
              text: 'Use Destination Theme & Link Data (Bog‘lash)',
              isCorrect: true,
              feedback: 'Ajoyib! Link Data asl Excel fayli bilan jonli aloqani saqlab, raqam o‘zgarishini slaydda aks ettiradi va taqdimot rangiga moslaydi.',
            },
            {
              text: 'Paste as Picture (Rasm sifatida)',
              isCorrect: false,
              feedback: 'Rasm sifatida qo‘yilgan grafik statik bo‘ladi — Excel o‘zgarganda u avtomatik yangilanmaydi.',
            },
            {
              text: 'Matnni oddiy Textbox ga qo‘lda qayta terish',
              isCorrect: false,
              feedback: 'Bu ko‘p vaqt oladi va inson xatosiga olib keladi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Asl Excel jadvalida raqam o‘zgarganda taqdimotdagi diagramma ham yangilanishi uchun qaysi joylashtirish varianti tanlanadi?',
        options: ['Link Data (Ma’lumotni bog‘lash)', 'Paste as Picture', 'Keep Text Only', 'Watermark'],
        answer: 0,
        explanation: 'Link Data taqdimot va manba Excel fayli o‘rtasida jonli bog‘lanish o‘rnatadi.',
      },
      {
        prompt: 'Excel faylini alohida yubormasdan, diagramma tahrirlanadigan holda faqat bitta PPTX fayli ichida saqlash usuli qaysi?',
        options: ['Embed Workbook', 'Link Data', 'CSV export', 'PDF'],
        answer: 0,
        explanation: 'Embed butun Excel ma’lumoti nusxasini PPTX fayli ichiga joylaydi.',
      },
      {
        prompt: 'Paste Options dagi "Use Destination Theme" nimani anglatadi?',
        options: ['Import qilingan diagramma rang va shriftlarini taqdimot dizayniga avtomatik moslash', 'Excel ranglarini saqlab qolish', 'Diagrammani rasmga aylantirish', 'O‘qni o‘chirish'],
        answer: 0,
        explanation: 'Destination Theme taqdimotning korporativ rang palitrasini grafikga qo‘llaydi.',
      },
      {
        prompt: 'Diagramma `Picture` (rasm) sifatida joylashtirilsa qanday cheklov paydo bo‘ladi?',
        options: ['Grafik ichidagi sonlarni va o‘qlarni tahrirlab ham, Excel bilan yangilab ham bo‘lmaydi', 'Slaydda ko‘rinmaydi', 'Bosib chiqarib bo‘lmaydi', 'Rangi qora bo‘lib qoladi'],
        answer: 0,
        explanation: 'Picture oddiy piksel tasvirga aylanadi va bog‘lanishni yo‘qotadi.',
      },
      {
        prompt: 'Excel jadvalidan slaydda juda kichik (8pt) chiqqan diagramma o‘q yozuvlarini nima qilish kerak?',
        options: ['Kamida 14–16pt gacha kattalashtirib, auditoriyaga o‘qilishi oson qilish', 'Yashirib qo‘yish', 'Crop qilib kesish', 'Qiya qilib qo‘yish'],
        answer: 0,
        explanation: 'Slayddagi barcha grafik matnlar zal oxiridan ham aniq ko‘rinishi lozim.',
      },
    ],
    teacherNotes: {
      method: 'Excel da bitta katakni o‘zgartirganda `Link Data` qilingan slaydda ustun o‘sib ketishini jonli ko‘rsatish.',
      timing: '3 import usuli 20 daq, Moslashtirish 15 daq, CaseStudy va test 10 daq.',
      assessment: 'Embed, Link va Picture orasidan vaziyatga mosini tanlash.',
      homework: 'Excel dagi kichik jadvaldan Pie chart tuzib, PowerPoint/Impress ga `Use Destination Theme` bilan joylang.',
    },
  },
  {
    id: 'g9-l59',
    grade: 9,
    no: 59,
    part: '4-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Bilim sinovi', 'Hujjat, Mail Merge va Baza'],
    objectives: [
      'O‘quvchi 53–58-darslar (Sahifa maketi/Gutter/Widow-Orphan, Jadvallar, Mail Merge, Ma’lumotlar bazasi, Taqdimotlar va Diagramma importi) bo‘yicha olgan bilimlarini tekshiradi.',
      'O‘quvchi ofis dasturlarini integratsiyalash bo‘yicha nazorat savollarini bajaradi.',
    ],
    intro:
      '4-chorakning birinchi nazorat ishi matn va jadvallarni chuqur formatlash, Mail Merge, ma’lumotlar bazasi tuzilmasi hamda taqdimotga diagramma import qilish mavzularini qamrab oladi.',
    sections: [
      {
        heading: 'Nazorat oldi asosiy nuqtalar',
        body: 'Takrorlang: Gutter (tikish hoshiyasi), Widow/Orphan, Hanging Indent; Merge/Split Cells va Repeat Header Rows; Mail Merge (Master Document + Data Source + `«Merge Field»`); Database (Field, Record, Primary Key, Query, Form, Report); PowerPoint (`Presenter Notes`, `Action Buttons`, `Embed` vs `Link Data`).',
        example: 'Savolda "ko‘p betli jadvalda sarlavha har betda chiqishi" — `Repeat Header Rows`; "noyob yozuv kaliti" — `Primary Key`.',
        tip: 'Krossvord javoblarini lotin bosh harflari bilan kiriting.',
      },
    ],
    keyTerms: [
      { term: 'Widow & Gutter', definition: 'Maketdagi yolg‘iz satr muammosi va kitob tikish hoshiyasi.' },
      { term: 'Mail Merge', definition: 'Shablon va jadval manbasini birlashtirish texnologiyasi.' },
      { term: 'Primary Key & Query', definition: 'Jadval yozuvining noyob kaliti va shartli tanlash so‘rovi.' },
      { term: 'Link vs Embed', definition: 'Manba bilan jonli bog‘lash hamda fayl ichiga nusxalash.' },
    ],
    steps: [
      '1. Krossvordda 53–58-darslarning asosiy atamalarini toping.',
      '2. Amaliy topshiriqlarni bajarib ko‘ring.',
      '3. Yakuniy 5 ta test savolini ishlang.',
    ],
    practice: [
      {
        task: 'Maktab bitiruvchilari bazasida `ID`, `Ism`, `Telefon`, `Tugilgan_sana`, `Stipendiya_oladimi` maydonlariga Data Type yozing.',
        expected: 'ID: Integer (PK); Ism: Text; Telefon: Text; Tugilgan_sana: Date/Time; Stipendiya_oladimi: Boolean.',
        difficulty: 'oson',
      },
      {
        task: 'Word da Mail Merge, Excel dan PowerPoint ga diagramma importi hamda Repeat Header Rows vazifalarini 1 tadan jumlada taʼriflang.',
        expected: 'Mail Merge — shaxsiy xat/sertifikatlar yaratish; Link/Embed — jadvallardan grafik ko‘chirish; Repeat Header Rows — ko‘p betli jadval sarlavhasini takrorlash.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l59-g1',
        num: '01',
        title: 'Ofis integratsiyasi krossvordi',
        topic: 'Hujjat, Baza va Taqdimot',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '53–58-darslarga oid asosiy xalqaro atamalarni kiriting.',
          clues: [
            { id: 'c1', clue: 'Kitob yoki hisobot tikiladigan chetga qo‘shiladigan qo‘shimcha hoshiya (6 harf)', answer: 'GUTTER' },
            { id: 'c2', clue: 'Jadvalning qo‘shni kataklarini bittaga birlashtirish buyrug‘i (5 harf)', answer: 'MERGE' },
            { id: 'c3', clue: 'Ma’lumotlar bazasidan shart asosida ma’lumot tanlash so‘rovi (5 harf)', answer: 'QUERY' },
            { id: 'c4', clue: 'Taqdimotda diagrammani Excel bilan jonli bog‘lab qo‘yish (4 harf)', answer: 'LINK' },
          ],
          hint: 'Javoblar: GUTTER, MERGE, QUERY, LINK.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Abzatsning bitta birinchi satri sahifa oxirida yolg‘iz qolib ketishi nima deb ataladi?',
        options: ['Orphan (Yetim satr)', 'Gutter', 'Merge Field', 'Action Button'],
        answer: 0,
        explanation: 'Orphan — birinchi satr sahifa pastida yolg‘iz qolishi; Widow — oxirgi satr tepada yolg‘iz qolishi.',
      },
      {
        prompt: 'Ko‘p sahifaga o‘tgan jadvalning 2-sahifasida ham ustun nomlari avtomatik ko‘rinishi uchun qaysi tugma yoqiladi?',
        options: ['Repeat Header Rows', 'Split Cells', 'Embed', 'Drop Cap'],
        answer: 0,
        explanation: 'Repeat Header Rows jadval sarlavha qatorini keyingi sahifalarda takrorlaydi.',
      },
      {
        prompt: 'Mail Merge da `Data Source` vazifasini odatda qaysi turdagi fayl bajaradi?',
        options: ['Excel, CSV yoki Access jadvali', 'MP4 video', 'PNG rasm', 'Slide Master'],
        answer: 0,
        explanation: 'Data Source qatorlar va ustunlarda oluvchilar ma’lumotini saqlaydi.',
      },
      {
        prompt: 'Ma’lumotlar bazasida jadvaldagi har bir yozuvni takrorlanmas qilib belgilaydigan maydon qaysi?',
        options: ['Primary Key (Birlamchi kalit)', 'Boolean', 'Footer', 'White space'],
        answer: 0,
        explanation: 'Primary Key har bir yozuv uchun noyob (takrorlanmas) identifikator beradi.',
      },
      {
        prompt: 'Taqdimotda ma’ruzachi nutqi uchun mo‘ljallangan, lekin tomoshabin ekranida ko‘rinmaydigan matn qayerga yoziladi?',
        options: ['Presenter Notes', 'Chart Title', 'Footer', 'Action Button'],
        answer: 0,
        explanation: 'Presenter Notes faqat ma’ruzachi ekranida ko‘rinib, nutqqa yordam beradi.',
      },
    ],
    teacherNotes: {
      method: 'Krossvord va amaliy test orqali o‘quvchilar tayyorgarligini baholash.',
      timing: 'Kirish 5 daq, Nazorat ishi 35 daq, Yakun 5 daq.',
      assessment: 'Barcha ofis integratsiyasi tushunchalarini aniq bilish.',
      homework: 'Keyingi darsga Excel dagi `$A$1` (absolyut murojaat) belgisini eslab keling.',
    },
  },
  {
    id: 'g9-l60',
    grade: 9,
    no: 60,
    part: '4-chorak',
    title: 'Maʼlumotlar modelini yaratish. Nisbiy va absolyut murojaat.',
    kind: 'dars',
    hours: 1,
    tools: ['Excel / Calc', 'SheetLab', 'Nisbiy (A1) vs Absolyut ($A$1)'],
    objectives: [
      'O‘quvchi elektron jadvalda real hayotiy ma’lumotlar modelini (xarajat, soliq, valyuta kursi, chegirma) qurish tamoyillarini tushunadi.',
      'O‘quvchi formula nusxalanganda katak manzili qanday o‘zgarishini — Nisbiy (`A1`), Absolyut (`$A$1`) va Aralash (`$A1`, `A$1`) murojaatlar orqali boshqaradi.',
    ],
    intro:
      'Valyuta kursi yoki chegirma foizi bitta alohida katakda (masalan, `C1` da) turganda, 50 ta mahsulot formulasini pastga nusxalasangiz formulangiz buzilib qolmasligi uchun nima qilish kerak? Javobi: `$` belgisi (Absolyut murojaat)!',
    sections: [
      {
        heading: 'Maʼlumotlar modeli va Nisbiy murojaat (`A1`)',
        body: 'Ma’lumotlar modeli — kiruvchi parametrlarni (masalan, dollar kursi, soliq %, narx) alohida kataklarga yozib, formulalar orqali yakuniy natijani ("Agar dollar kursi o‘zgarsa, foyda qancha bo‘ladi?") hisoblovchi jadvaldir. Oddiy murojaat `=A2*B2` — Nisbiy (Relative) murojaat: uni bir qator pastga ko‘chirsangiz, avtomatik `=A3*B3` ga o‘zgaradi.',
        example: '10 ta tovar uchun `Narx × Soni` formulasini bir marta `=A2*B2` deb yozib pastga tortsangiz, har bir qator o‘z qiymatini hisoblaydi.',
        tip: 'Formula ichida qo‘lda `=A2*12500` deb son yozib qo‘ymang — kurs o‘zgarsa 100 ta formulani tahrirlashga to‘g‘ri keladi! Kursni bitta alohida katakka (`$D$1`) yozing!',
      },
      {
        heading: 'Absolyut murojaat (`$A$1`) va Aralash murojaat (`$A1` / `A$1`)',
        body: 'Agar barcha qatorlar bitta o‘zgarmas katakka (masalan, `D1` dagi QQS `12%` yoki valyuta kursi) murojaat qilsa, nusxalashda `D1` pastga siljib `D2`, `D3` bo‘lib ketmasligi uchun `$` bilan qulflanadi: `=B2*$D$1` (`F4` tugmasi avtomatik `$` qo‘yadi!). Aralash murojaatda faqat ustun (`$A1`) yoki faqat qator (`A$1`) qulflanadi (ko‘paytirish jadvali yasashda juda qulay).',
        example: '`=B2*$D$1` formulasini pastga nusxalaganda `B2` → `B3`, `B4` ga o‘zgaradi, ammo `$D$1` hamma qatorda o‘zgarishsiz `$D$1` bo‘lib qoladi!',
      },
    ],
    keyTerms: [
      { term: 'Maʼlumotlar modeli', definition: 'Kiruvchi qiymatlar o‘zgarganda natijani avtomatik qayta hisoblovchi formulali jadval.' },
      { term: 'Nisbiy murojaat (A1)', definition: 'Formula boshqa katakka ko‘chirilganda manzili mos ravishda o‘zgaradigan murojaat.' },
      { term: 'Absolyut murojaat ($A$1)', definition: 'Ustuni ham, qatori ham `$` bilan qulflangan va nusxalashda o‘zgarmaydigan manzil.' },
      { term: 'F4 tugmasi', definition: 'Excel/Calc da katak manziliga tezda `$` belgisini qo‘shish tugmasi.' },
    ],
    steps: [
      '1. Kurs yoki soliq foizini yuqoridagi alohida `C1` katakka kiriting.',
      '2. Birinchi tovar uchun `=A2*$C$1` formulasini yozing.',
      '3. Quyidagi SheetLab da absolyut murojaatdan foydalanib to‘g‘ri formulani kiriting!',
    ],
    practice: [
      {
        task: '`B2` katakdagi `=A2*C$1` formulasini 1 qator pastga va 1 ustun o‘ngga (`C3` ga) nusxalasangiz formula qanday ko‘rinishga keladi?',
        expected: '`=B3*D$1` (chunki A→B, 2→3, C→D o‘zgaradi, lekin `$1` qatori qulflangani uchun 1 bo‘lib qoladi).',
        difficulty: 'qiyin',
      },
      {
        task: 'Nima uchun soliq stavkasi `12%` ni formula ichiga emas, alohida `$D$1` katakka yozish kerak?',
        expected: 'Soliq stavkasi o‘zgarganda faqat bitta `D1` katakni o‘zgartirish bilan butun jadvaldagi barcha hisoblar bir zumda yangilanadi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g9-l60-g1',
        num: '01',
        title: 'SheetLab: Absolyut murojaat bilan valyuta hisobi',
        topic: 'Absolyut murojaat',
        difficulty: 'O‘rta',
        engine: 'sheetlab',
        config: {
          prompt: 'C1 katakda 1 dollar kursi (`12500`), A2 katakda mahsulot narxi dollarda (`4`) berilgan. B2 katakka absolyut murojaat (`$C$1`) dan foydalanib so‘mdagi narxni hisoblovchi formula yozing!',
          rows: 3,
          cols: 3,
          initialCells: {
            A1: 'USD',
            B1: 'Kurs:',
            C1: '12500',
            A2: '4',
            B2: '',
          },
          targetCell: 'B2',
          expectedValue: 50000,
          requiredFormulaTokens: ['=', 'A2', '$C$1'],
          hint: 'B2 katakka `=A2*$C$1` formulasini yozing (4 × 12500 = 50000).',
          explanation: '`$C$1` absolyut murojaati formulani B3, B4 ga ko‘chirganda ham kurs katagini o‘zgartirmay saqlaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Excel/Calc da katak manzilini absolyut (nusxalashda o‘zgarmas) qilish uchun qaysi belgi ishlatiladi?',
        options: ['$', '#', '&', '%'],
        answer: 0,
        explanation: 'Dollar `$` belgisi ustun yoki qator raqamini qulflaydi (masalan, `$C$1`).',
      },
      {
        prompt: '`C2` katakdagi `=A2*$B$1` formulasini `C3` katakka pastga ko‘chirsangiz formula qanday ko‘rinish oladi?',
        options: ['=A3*$B$1', '=A3*$B$2', '=A2*$B$1', '=B3*$C$1'],
        answer: 0,
        explanation: '`A2` nisbiy bo‘lgani uchun `A3` ga o‘zgaradi, `$B$1` esa absolyut — o‘zgarishsiz qoladi.',
      },
      {
        prompt: 'Excel formula qatorida `B1` ustida turganda `F4` tugmasi bosilsa nima sodir bo‘ladi?',
        options: ['Manzil `$B$1` absolyut ko‘rinishga o‘tadi', 'Fayl yopiladi', 'Jadval o‘chadi', 'Shrift qalinlashadi'],
        answer: 0,
        explanation: 'F4 tugmasi nisbiy, absolyut va aralash murojaatlar orasida tez almashtiradi.',
      },
      {
        prompt: 'Ma’lumotlar modelini qurishda o‘zgarmas stavkalar (QQS, chegirma, kurs) nima uchun alohida katakka yoziladi?',
        options: ['Stavka o‘zgarsa faqat bitta katakni yangilab butun modelni qayta hisoblash uchun', 'Jadvalni bezash uchun', 'Fayl hajmini oshirish uchun', 'Pie chart yasash uchun'],
        answer: 0,
        explanation: 'Parametrlarni ajratish "What-If" tahlilini juda oson va xatosiz qiladi.',
      },
      {
        prompt: '`D$5` ko‘rinishidagi murojaat qaysi turga kiradi?',
        options: ['Aralash (Mixed) murojaat — ustuni nisbiy, qatori absolyut', 'To‘liq absolyut', 'To‘liq nisbiy', 'Xato sintaksis'],
        answer: 0,
        explanation: 'Faqat 5-qator oldida `$` turgani uchun qator qulflangan, ustun `D` esa ko‘chirilganda o‘zgarishi mumkin.',
      },
    ],
    teacherNotes: {
      method: 'Absolyut murojaat qo‘ymay pastga tortganda `0` chiqib qolishi xatosini ko‘rsatib, `$` bilan tuzatish.',
      timing: 'Model va Nisbiy 15 daq, Absolyut/Aralash 15 daq, SheetLab va test 15 daq.',
      assessment: 'SheetLab da `=A2*$C$1` formulasini to‘g‘ri yozish.',
      homework: '5 ta mahsulotning USD narxidan bitta `$B$1` (kurs) katak orqali so‘m qiymatini hisoblovchi jadval tuzing.',
    },
  },
];
