import type { Lesson } from './types';

export const GRADE_7_P2B: Lesson[] = [
  {
    id: 'g7-l26',
    grade: 7,
    no: 26,
    part: '2-yarim yillik',
    title: 'Takrorlash',
    kind: 'takrorlash',
    hours: 1,
    tools: ['Word', 'PowerPoint', 'Excel'],
    objectives: [
      'O‘quvchi 1–2-yarim yillikda o‘tilgan Word, PowerPoint va Excel mavzularini tizimli takrorlaydi.',
      'O‘quvchi elektron jadval va ma’lumotlar bazasi o‘rtasidagi farqni tushunib, Access bo‘limiga tayyorlanadi.',
    ],
    intro:
      'Ma’lumotlar bazasi (Access) bo‘limiga o‘tishdan oldin, Wordda bezash, PowerPointda taqdim etish va Excelda hisoblash bo‘yicha eng muhim ko‘nikmalarni bir eslab olaylik!',
    sections: [
      {
        heading: 'Uchta dastur — uchta vazifa',
        body: 'Word/Writer — chiroyli matnli hujjatlar (stillar, ustunlar, jadvallar); PowerPoint/Impress — auditoriyaga mos taqdimotlar (Transitions, Animations, Audio); Excel/Calc — dinamik hisob-kitob va modellashtirish (formulalar, Shartli formatlash, Goal Seek, diagrammalar).',
        example: 'Bitta maktab loyihasi uchun Excelda hisoblab, Wordda hisobot yozib, PowerPointda himoya qilamiz.',
        tip: 'Keyingi darslarda o‘rganiladigan Ma’lumotlar bazasi (Access/Base) — minglab tartibli yozuvlarni saqlash va tezkor qidirish uchun Exceldan ham kuchliroq vositadir.',
      },
      {
        heading: 'Amaliy ko‘nikmalar blitsi',
        body: 'Tezkor takrorlash: Print Preview (Ctrl+P) qog‘oz isrofiga qarshi; Add Animation ikkinchi effekt qo‘shish uchun; Data Validation esa anketadan tushgan ma’lumotlarni xatosiz kiritish uchun ishlatiladi.',
        example: 'Excelda 0.35 → Percentage formatida 35% bo‘ladi.',
      },
    ],
    keyTerms: [
      { term: 'Heading stillari', definition: 'Wordda avtomatik mundarija va izchil sarlavha yaratuvchi uslub.' },
      { term: 'With / After Previous', definition: 'PowerPointda animatsiyalarni bir vaqtda yoki ketma-ket boshlash.' },
      { term: 'Goal Seek', definition: 'Excelda kutilgan natijaga mos kirish qiymatini topish.' },
      { term: 'Ma’lumotlar bazasi', definition: 'Katta hajmdagi bog‘langan ma’lumotlarni saqlash va boshqarish tizimi.' },
    ],
    steps: [
      '1. Har bir dasturdan (Word, PowerPoint, Excel) 2 tadan asosiy atamani daftarga yozing.',
      '2. Qaysi vazifa uchun qaysi dastur qulayligini misollar bilan izohlang.',
      '3. Flesh-kartalar va test yordamida bilimingizni mustahkamlang.',
    ],
    practice: [
      {
        task: 'Word, PowerPoint va Excel dasturlarining har biri uchun 1 tadan eng muhim tezkor tugma yoki vositani ko‘rsating.',
        expected: 'Word: Styles/Print Preview; PowerPoint: Add Animation/F5; Excel: =SUM/Conditional Formatting.',
        difficulty: 'oson',
      },
      {
        task: '10 000 ta kitob haqidagi ma’lumotni saqlash va izlashda nega matn muharriri noqulayligini asoslang.',
        expected: 'Wordda qidirish, filtrlash va ma’lumot turini nazorat qilish qiyinligi tushuntiriladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l26-g1',
        num: '01',
        title: 'Ofis dasturlari takrorlash kartalari',
        topic: 'Word, PowerPoint, Excel',
        difficulty: 'Oson',
        engine: 'flashcards',
        config: {
          prompt: 'Kartalarni aylantirib, asosiy dastur vositalarini esga oling.',
          cards: [
            { term: 'Wrap Text → Square', definition: 'Wordda matnni rasm atrofiga to‘rtburchak qilib o‘rash.', example: 'Gazeta maqolasi' },
            { term: 'Apply To All', definition: 'Tanlangan slayd o‘tish effektini barcha slaydlarga qo‘llash.', example: 'Fade o‘tishi' },
            { term: 'Add Animation', definition: 'Obyektning eski animatsiyasini o‘chirmay yangisini qo‘shish.', example: 'Kirish + Chiqish' },
            { term: 'Goal Seek', definition: 'Istalgan formula natijasi uchun kirish sonini topish.', example: 'O‘rtacha 85 uchun ball' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Hujjat chop etilishidan oldin sahifalar chetini va joylashuvini tekshiradigan oyna qaysi?',
        options: ['Print Preview', 'Animation Pane', 'Goal Seek', 'Query'],
        answer: 0,
        explanation: 'Print Preview (Ctrl+P) qog‘ozdagi yakuniy ko‘rinishni ko‘rsatadi.',
      },
      {
        prompt: 'Slaydda birinchi obyekt harakatlanishi bilan bir vaqtda ikkinchisi ham boshlanishi uchun nima tanlanadi?',
        options: ['On Click', 'With Previous', 'Exit', 'Hide'],
        answer: 1,
        explanation: 'With Previous ikki animatsiyani sinxron (bir vaqtda) ishga tushiradi.',
      },
      {
        prompt: 'Katak qiymati 50 dan kichik bo‘lsa qizilga bo‘yash uchun qaysi Excel vositasi ishlatiladi?',
        options: ['Merge & Center', 'Conditional Formatting', 'Wrap Text', 'Spell Check'],
        answer: 1,
        explanation: 'Conditional Formatting qiymat shartiga ko‘ra avtomatik format beradi.',
      },
      {
        prompt: 'Ma’lumot to‘plash shakli (Data Capture Form) da nega ko‘proq yopiq variantli savollar beriladi?',
        options: [
          'Qog‘oz ko‘proq ketishi uchun',
          'Bir xil formatdagi xatosiz ma’lumot yig‘ish va tahlilni osonlashtirish uchun',
          'Yozishni qiyinlashtirish uchun',
          'Fayl ochilmasligi uchun',
        ],
        answer: 1,
        explanation: 'Variantli javoblar imlo xatolarini bartaraf etib, tezkor saralash imkonini beradi.',
      },
      {
        prompt: 'Elektron jadvaldagi "=A1+B1*2" formulasi A1=5, B1=3 bo‘lganda nechchi beradi?',
        options: ['16', '11', '10', '13'],
        answer: 1,
        explanation: 'Amallar tartibiga ko‘ra avval 3*2=6, so‘ng 5+6=11.',
      },
    ],
    teacherNotes: {
      method: 'Savol-javob musobaqasi va flesh-kartalar orqali bilimlarni faollashtirish.',
      timing: '10 daqiqa umumiy takrorlash, 20 daqiqa flesh-kartalar va muhokama, 15 daqiqa test.',
      assessment: 'Uchta dasturning mos qo‘llanish sohalarini farqlay olishi.',
      homework: 'Keyingi darsga "Birlamchi kalit (Primary Key)" nima uchun kerakligini o‘ylab keling.',
    },
  },
  {
    id: 'g7-l27',
    grade: 7,
    no: 27,
    part: '2-yarim yillik',
    title: 'Ma’lumotlar bazasi uchun maqsadni aniqlash. Ma’lumotlar bazasi uchun maydon tanlash',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'LibreOffice Base'],
    objectives: [
      'O‘quvchi yangi ma’lumotlar bazasi (Access/Base) yaratishdan oldin uning maqsadi va foydalanuvchilarini aniqlay oladi.',
      'O‘quvchi ortiqcha takrorlanishsiz aniq maydonlarni (Field) hamda noyob Birlamchi kalit (Primary Key) maydonini tanlay oladi.',
    ],
    intro:
      'Maktabda bir xil ismli ikkita "Azizbek Karimov" bo‘lishi mumkin. Kompyuter ularni qanday ajratadi? Har biriga takrorlanmas ID (Birlamchi kalit) berish va to‘g‘ri maydonlar tanlash orqali!',
    sections: [
      {
        heading: 'Maqsadni aniqlash va maydonlar tanlash',
        body: 'Baza yaratishdan oldin so‘raymiz: "Bu baza kimlar uchun va qanday savollarga javob berishi kerak?" Keyin kerakli maydonlar tanlanadi. Muhim qoida: murakkab ma’lumotni bo‘laklang ("To‘liq ism" o‘rniga "Familiya" va "Ism" alohida ustun bo‘lsa, alifbo bo‘yicha saralash oson bo‘ladi!).',
        example: 'Maktab kutubxonasi bazasi maqsadi — kitob berilishini kuzatish. Maydonlar: Kitob_ID, Nomi, Muallif, Nashr_yili, Mavjudmi.',
        tip: 'Hisob-kitob bilan topiladigan qiymatni (masalan, "Tug‘ilgan yil" turganda "Yosh" ni) bazada alohida maydon qilib saqlash shart emas, chunki har yili eskirib qoladi!',
      },
      {
        heading: 'Birlamchi kalit (Primary Key)',
        body: 'Har bir jadvalda har qaysi yozuvni (qatorni) noyob tarzda ajratib turuvchi maydon — Birlamchi kalit (Primary Key) bo‘lishi kerak. Masalan, Student_ID, Pasport_raqami yoki Kitob_kodi. Birlamchi kalit hech qachon bo‘sh bo‘lmaydi va takrorlanmaydi!',
        example: 'Ism (Aziz) takrorlanishi mumkin, ammo Student_ID = 1042 faqat bitta o‘quvchiga tegishli.',
      },
    ],
    keyTerms: [
      { term: 'Birlamchi kalit (Primary Key)', definition: 'Jadvaldagi har bir yozuvni yagona va takrorlanmas tarzda aniqlovchi maydon.' },
      { term: 'Atomar maydon', definition: 'Yana kichik qismlarga bo‘linmaydigan aniq maydon (masalan, Ism va Familiya alohida).' },
      { term: 'Dublikat (Takrorlanish)', definition: 'Bir xil qiymatlarning keraksiz qaytarilishi.' },
      { term: 'Baza maqsadi', definition: 'Ma’lumotlar bazasi qaysi muammo va qidiruvlar uchun xizmat qilishi.' },
    ],
    steps: [
      '1. "Sport seksiyasi a’zolari" bazasining maqsadini 1 gapda yozing.',
      '2. Kerakli maydonlarni tuzing (Azo_ID, Familiya, Ism, Sport_turi, Sinf, Telefon).',
      '3. Nima uchun Ism emas, Azo_ID Birlamchi kalit bo‘lishini asoslang.',
      '4. Keraksiz yoki birlashtirilib ketgan maydonlarni tekshirib tozalang.',
    ],
    practice: [
      {
        task: 'Avtosalon bazasida "Avto_Nomi, Rangi, Narxi, Davlat_Raqami" maydonlaridan qaysi biri Primary Key bo‘la olishini aniqlang.',
        expected: 'Davlat_Raqami (yoki VIN kodi) takrorlanmas bo‘lgani uchun Primary Key bo‘la oladi.',
        difficulty: 'oson',
      },
      {
        task: '"F.I.O va Manzili" degan bitta katta maydonni qulay qidiruv uchun mayda maydonlarga ajrating.',
        expected: 'Familiya, Ism, Tuman, Ko‘cha, Uy_raqami.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l27-g1',
        num: '01',
        title: 'Primary Key topish',
        topic: 'Maydon va Kalit',
        difficulty: 'Oson',
        engine: 'fillblank',
        config: {
          prompt: 'Ma’lumotlar bazasi tuzish asoslari haqidagi gaplarni to‘ldiring.',
          template: 'Jadvaldagi har bir yozuvni takrorlanmas tarzda ajratib turadigan maydon {{0}} deyiladi. Unda hech qachon {{1}} qiymat bo‘lmasligi kerak. Saralash oson bo‘lishi uchun "F.I.O" ni {{2}} maydonlariga ajratish tavsiya etiladi.',
          blanks: [
            { options: ['Primary Key', 'Footer', 'Layout'], answer: 'Primary Key' },
            { options: ['takroriy (dublikat)', 'sonli', 'qisqa'], answer: 'takroriy (dublikat)' },
            { options: ['Ism va Familiya', 'Sana va Vaqt', 'Narx va Soni'], answer: 'Ism va Familiya' },
          ],
          hint: 'Noyob kalit — Primary Key, unda dublikat bo‘lmaydi, F.I.O esa Ism va Familiyaga bo‘linadi.',
          explanation: 'Primary Key yozuvlarning yagonaligini ta’minlaydi, atomar maydonlar esa saralashni qulaylashtiradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Jadvaldagi har bir yozuvni noyob tarzda belgilaydigan maydon nima deyiladi?',
        options: ['Foreign Key', 'Primary Key (Birlamchi kalit)', 'Validation', 'Caption'],
        answer: 1,
        explanation: 'Primary Key jadvaldagi har bir qatorning takrorlanmas identifikatoridir.',
      },
      {
        prompt: 'Quyidagi maydonlardan qaysi biri maktab o‘quvchilari bazasida Primary Key bo‘la olmaydi?',
        options: ['Oquvchi_ID', 'Tug‘ilganlik guvohnoma seriya-raqami', 'O‘quvchining ismi (masalan, "Aziz")', 'Yagona elektron kod'],
        answer: 2,
        explanation: 'Bir sinf yoki maktabda bir xil ismli bir nechta o‘quvchi bo‘lishi mumkin.',
      },
      {
        prompt: 'Nima uchun "Ism va Familiya" ni bitta ustunda emas, ikkita alohida maydonda saqlash afzal?',
        options: [
          'Familiya bo‘yicha alifbo tartibida tez saralash va qidirish uchun',
          'Faylni kattalashtirish uchun',
          'Rangini o‘zgartirish uchun',
          'Rasm qo‘shish uchun',
        ],
        answer: 0,
        explanation: 'Alohida maydonlar familiya yoki ism bo‘yicha alohida saralash va murojaat qilish imkonini beradi.',
      },
      {
        prompt: 'Birlamchi kalit (Primary Key) maydoni bo‘sh (Null) qoldirilishi mumkinmi?',
        options: ['Ha, ixtiyoriy', 'Yo‘q, har bir yozuvda albatta noyob qiymat bo‘lishi shart', 'Faqat oxirgi qatorda', 'Faqat matn bo‘lsa'],
        answer: 1,
        explanation: 'Primary Key bo‘sh ham, takroriy ham bo‘la olmaydi.',
      },
      {
        prompt: 'Ma’lumotlar bazasi loyihalashda eng birinchi qadam nima?',
        options: [
          'Rangli shakl chizish',
          'Bazaning maqsadi va undan qanday axborot olinishini aniqlash',
          'Printer tanlash',
          'Musiqa qo‘shish',
        ],
        answer: 1,
        explanation: 'Maqsadni aniqlash qaysi jadvallar va maydonlar kerakligini belgilab beradi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfdagi bir xil ismli o‘quvchilar misolida Primary Key (ID) zarurligini ko‘rsatish.',
      timing: '10 daqiqa nazariya, 23 daqiqa maydonlar tanlash loyihasi, 12 daqiqa FillBlank va test.',
      assessment: 'Maydonlarni to‘g‘ri parchalash va Primary Key ni asoslab tanlash.',
      homework: 'Poliklinika bemorlari bazasi uchun 6 ta maydon va Primary Key tanlab yozing.',
    },
  },
  {
    id: 'g7-l28',
    grade: 7,
    no: 28,
    part: '2-yarim yillik',
    title: 'Ma’lumot turlari. Ma’lumotlar bazasi jadvalini yaratish.',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'LibreOffice Base'],
    objectives: [
      'O‘quvchi Access/Base dasturidagi ma’lumot turlarini (Short Text, Number, Currency, Date/Time, Yes/No, AutoNumber) to‘g‘ri belgilay oladi.',
      'O‘quvchi Design View (Konstruktor) rejimida jadval yaratib, maydon o‘lchami (Field Size) va Primary Key o‘rnatishni bajaradi.',
    ],
    intro:
      'Endi qog‘ozdagi rejamizni haqiqiy ma’lumotlar bazasi dasturiga ko‘chiramiz! Access yoki LibreOffice Base da "Design View" orqali har bir maydonga aniq tur va xotira hajmi belgilab jadval quramiz.',
    sections: [
      {
        heading: 'Access/Base ma’lumot turlari',
        body: 'Design View da jadval qurilganda har bir maydon qarshisida tur tanlanadi: AutoNumber — 1, 2, 3 deb avtomatik noyob ID beradi; Short Text — matn va kodlar (telefon, indeks) uchun; Number — hisoblanadigan sonlar (miqdor, ball); Currency — pul/narx uchun; Date/Time — sana/vaqt; Yes/No — mantiqiy Ha/Yo‘q.',
        example: 'Kitob_ID → AutoNumber (Primary Key); Nomi → Short Text (Field Size: 80); Narxi → Currency; Mavjud → Yes/No.',
        tip: 'Telefon raqami, pochta indeksi va pasport seriyasini doimo Short Text qiling — chunki ular bilan qo‘shish/ayirish qilinmaydi va boshidagi "0" tushib qolmasligi kerak!',
      },
      {
        heading: 'Field Size (Maydon hajmi) va Jadvalni saqlash',
        body: 'Short Text maydonining standart hajmi 255 belgi, ammo masalan "Sinf" uchun 5 belgi ("11-A"), "Ism" uchun 30 belgi yetarli. Field Size ni moslashtirish xotirani tejaydi va tasodifiy uzun xato matn kiritilishini cheklaydi. Keyin jadvalga mazmunli nom (masalan, tbl_Kitoblar) berib saqlaymiz.',
        example: 'Design View dan Datasheet View ga o‘tib jadvalga real qatorlarni kiritishni boshlaymiz.',
      },
    ],
    keyTerms: [
      { term: 'Design View (Konstruktor)', definition: 'Jadval maydonlari nomini, turini va xossalarini sozlash rejimi.' },
      { term: 'AutoNumber', definition: 'Har bir yangi yozuv qo‘shilganda avtomatik tartib raqam beruvchi noyob tur.' },
      { term: 'Currency', definition: 'Pul qiymatlarini aniq yaxlitlash va valyuta belgisi bilan saqlovchi tur.' },
      { term: 'Field Size', definition: 'Maydonga kiritilishi mumkin bo‘lgan maksimal belgilar yoki son hajmi.' },
    ],
    steps: [
      '1. Access yoki LibreOffice Base da yangi bo‘sh baza ("Maktab_Kutubxonasi") yarating.',
      '2. Table Design View ni ochib, Kitob_ID (AutoNumber, Primary Key), Sarlavha (Short Text, size 80), Sahifa (Number), Narx (Currency), Sana (Date/Time), Topshirildi (Yes/No) maydonlarini kiriting.',
      '3. Jadvalni "Kitoblar" nomi bilan saqlang.',
      '4. Datasheet View ga o‘tib 4 ta kitob haqida yozuv kiriting.',
    ],
    practice: [
      {
        task: 'Sport to‘garagi jadvalini AutoNumber kaliti va 5 ta turli Data Type bilan Design View da yarating.',
        expected: 'Jadval saqlanadi va 3+ ta haqiqiy yozuv kiritiladi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Short Text maydonining Field Size qiymatini 255 dan 10 ga tushirganda nima bo‘lishini sinab ko‘ring.',
        expected: '10 ta belgidan uzun matn kiritishga ruxsat berilmaydi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g7-l28-g1',
        num: '01',
        title: 'Access ma’lumot turlari laboratoriya',
        topic: 'Ma’lumot turlari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Maydon nomlarini Access/Base dagi eng to‘g‘ri ma’lumot turiga bog‘lang.',
          pairs: [
            { left: 'Talaba_ID (avtomatik 1, 2, 3...)', right: 'AutoNumber' },
            { left: 'Mahsulot narxi', right: 'Currency' },
            { left: 'Tug‘ilgan sanasi', right: 'Date/Time' },
            { left: 'To‘garakka a’zomi?', right: 'Yes/No (Boolean)' },
            { left: 'Telefon raqami (+998...)', right: 'Short Text' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Har bir yangi yozuv qo‘shilganda avtomatik 1, 2, 3... tartib raqami berib boradigan ma’lumot turi qaysi?',
        options: ['Short Text', 'AutoNumber', 'Yes/No', 'Date/Time'],
        answer: 1,
        explanation: 'AutoNumber Primary Key sifatida noyob tartib raqamini avtomatik yaratadi.',
      },
      {
        prompt: 'Jadvalning tuzilmasini (maydon nomlari va turlarini) sozlash uchun qaysi ko‘rinish rejimi ishlatiladi?',
        options: ['Datasheet View', 'Design View', 'Print Preview', 'Slide Show'],
        answer: 1,
        explanation: 'Design View jadval tuzilmasini loyihalash, Datasheet View esa ma’lumot kiritish uchundir.',
      },
      {
        prompt: 'Narx va oylik maosh kabi moliyaviy qiymatlar uchun qaysi tur eng aniq?',
        options: ['Short Text', 'Currency', 'Yes/No', 'AutoNumber'],
        answer: 1,
        explanation: 'Currency turi pul birliklari va yaxlitlash xatolarining oldini olish uchun moslashgan.',
      },
      {
        prompt: '"Field Size = 6" qilib belgilangan Short Text maydoniga nechta belgi kiritish mumkin?',
        options: ['Cheksiz', 'Ko‘pi bilan 6 ta belgi', '255 ta belgi', 'Faqat raqam'],
        answer: 1,
        explanation: 'Field Size maksimal belgilar sonini cheklaydi va ortiqcha matn kiritilishidan himoyalaydi.',
      },
      {
        prompt: 'Nima uchun pochta indeksi (masalan, "100000") yoki telefon raqami Short Text turida saqlanadi?',
        options: [
          'Boshidagi nollar tushib qolmasligi va ustida hisob-kitob qilinmagani uchun',
          'Chunki Number turi 100 dan katta son olmaydi',
          'Chunki chiroyliroq ko‘rinadi',
          'Matn tahrirlash uchun',
        ],
        answer: 0,
        explanation: 'Text boshidagi 0 va maxsus belgilarni (+, -) saqlab qoladi.',
      },
    ],
    teacherNotes: {
      method: 'Design View da jadval qurish va Datasheet View ga o‘tib yozuv kiritishni bosqichma-bosqich ko‘rsatish.',
      timing: '10 daqiqa tushuntirish, 25 daqiqa Access/Base amaliyoti, 10 daqiqa Match va test.',
      assessment: 'Primary Key, aniq Data Type va Field Size qo‘yilganligi.',
      homework: '5 ta maydonli "Do‘stlarim" jadvalining Design View loyihasini daftarga yozing.',
    },
  },
  {
    id: 'g7-l29',
    grade: 7,
    no: 29,
    part: '2-yarim yillik',
    title: 'Ochiladigan ro‘yxatni yaratish. Maʼlumot kiritish formasini yaratish (Form).',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'LibreOffice Base'],
    objectives: [
      'O‘quvchi xatolarni kamaytirish uchun jadval maydoniga ochiladigan ro‘yxat (Lookup Wizard) qo‘sha oladi.',
      'O‘quvchi ma’lumotlarni bitta-bitta qulay kiritish va ko‘rish uchun Forma (Form) yaratish hamda bezashni bajaradi.',
    ],
    intro:
      'Katta jadvalga to‘g‘ridan-to‘g‘ri yozuv kiritganda ko‘z tolib, qo‘shni qatorga o‘tib ketish oson. Ammo Forma (Form) va ochiladigan ro‘yxat yaratsak, ekranda bitta chiroyli anketa oynasi chiqadi!',
    sections: [
      {
        heading: 'Ochiladigan ro‘yxat (Lookup Wizard)',
        body: 'Masalan, "Sinf" yoki "Shahar" ustuniga foydalanuvchi xato yozmasligi uchun Lookup Wizard (yoki Value List) orqali tayyor variantlar ro‘yxati ("7-A", "7-B", "7-V") biriktiriladi. Ma’lumot kiritayotganda katak yonida pastga qaragan strelka chiqadi va kerakli qiymat bir bosishda tanlanadi.',
        example: 'Baholar maydoniga Lookup ro‘yxati: "A’lo", "Yaxshi", "Qoniqarli" — endi hech kim imlo xato qilmaydi!',
        tip: '"Limit To List = Yes" qo‘ysangiz, foydalanuvchi ro‘yxatda yo‘q noto‘g‘ri qiymatni yoza olmaydi!',
      },
      {
        heading: 'Ma’lumot kiritish formasi (Form)',
        body: 'Form — bu foydalanuvchiga qulay bo‘lgan ekran oynasi bo‘lib, bir vaqtning o‘zida faqat BITTA yozuvning barcha maydonlarini chiroyli qilib ko‘rsatadi. Create → Form (yoki Form Wizard) orqali yasaladi. Formada Oldingi/Keyingi yozuv tugmalari, Yangi yozuv qo‘shish tugmasi va o‘zgarishlarni darhol jadvalga saqlash imkoniyati bor.',
        example: 'Formaning sarlavhasiga maktab nomi, tugmalariga esa "Yangi qo‘shish" va "Saqlash" qo‘yamiz.',
      },
    ],
    keyTerms: [
      { term: 'Lookup Wizard', definition: 'Maydonda tayyor variantlardan tanlash uchun ochiladigan ro‘yxat yaratish vositasi.' },
      { term: 'Form (Forma)', definition: 'Baza jadvaliga qulay va xatosiz ma’lumot kiritish hamda tahrirlash oynasi.' },
      { term: 'Limit To List', definition: 'Faqat ro‘yxatda mavjud qiymatlarni kiritishga ruxsat beruvchi cheklov.' },
      { term: 'Form View', definition: 'Foydalanuvchi tayyor formani to‘ldirib ishlaydigan ko‘rinish rejimi.' },
    ],
    steps: [
      '1. "Kitoblar" jadvalining Design View oynasini oching va "Janr" maydoni uchun Lookup Wizard dan "Badiiy; Ilmiy; Darslik; Ertak" ro‘yxatini yarating.',
      '2. Jadvalni tanlab Create → Form (yoki Form Wizard) ni bosing.',
      '3. Form Design View da sarlavhani o‘zbekchaga chiroyli qilib moslang.',
      '4. Form View ga o‘tib, ochiladigan ro‘yxat yordamida 2 ta yangi kitob qo‘shing va ular jadvalda paydo bo‘lganini tekshiring.',
    ],
    practice: [
      {
        task: 'O‘quvchilar jadvalidagi "Jinsi" yoki "Sinf" maydoni uchun ochiladigan ro‘yxat (Lookup) sozlang.',
        expected: 'Katak bosilganda tayyor variantlar ro‘yxati ochiladi.',
        difficulty: 'oson',
      },
      {
        task: 'Jadval asosida Forma yaratib, forma orqali 2 ta yangi yozuv qo‘shing va navigatsiya tugmalari bilan ko‘rib chiqing.',
        expected: 'Forma orqali kiritilgan ma’lumotlar asosiy jadvalda avtomatik saqlanadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l29-g1',
        num: '01',
        title: 'Forma va Lookup yaratish tartibi',
        topic: 'Form va Ochiladigan ro‘yxat',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Ochiladigan ro‘yxatli ma’lumot kiritish formasini yaratish bosqichlarini tartiblang.',
          items: [
            'Jadval Design View da maydon uchun Lookup Wizard ro‘yxatini sozlash va saqlash',
            'Jadvalni belgilab Create → Form Wizard orqali forma yaratish',
            'Formaga aniq sarlavha berish va maydon joylashuvini qulaylashtirish',
            'Form View rejimiga o‘tib yangi yozuvlarni ro‘yxatdan tanlab kiritish',
          ],
          hint: 'Avval jadvalda Lookup sozlanadi, keyin Forma yasaladi, bezaladi va Form View da to‘ldiriladi.',
          explanation: 'Jadvalda sozlangan Lookup ro‘yxati Forma ichida ham avtomatik ishlaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ma’lumotlar bazasida jadvalga qulay va xatosiz bitta-bitta yozuv kiritish uchun yaratiladigan ekran oynasi nima?',
        options: ['Query', 'Form (Forma)', 'Header', 'Transition'],
        answer: 1,
        explanation: 'Form foydalanuvchi uchun qulay kiritish va ko‘rish interfeysidir.',
      },
      {
        prompt: 'Maydonda tayyor variantlardan tanlash imkonini beruvchi ochiladigan ro‘yxat qaysi vosita bilan qilinadi?',
        options: ['Lookup Wizard', 'AutoSum', 'WordArt', 'Goal Seek'],
        answer: 0,
        explanation: 'Lookup Wizard (yoki Combo Box) katakda ochiladigan ro‘yxat hosil qiladi.',
      },
      {
        prompt: 'Ochiladigan ro‘yxatdan foydalanishning asosiy foydasi nimada?',
        options: [
          'Kiritishni tezlashtiradi va imlo xatolarining oldini oladi',
          'Faylni ZIP qiladi',
          'Kompyuterni o‘chiradi',
          'Ranglarni o‘chiradi',
        ],
        answer: 0,
        explanation: 'Tayyor variantni tanlash tezroq va "Toshkent" / "toshket" kabi xatolarga yo‘l qo‘ymaydi.',
      },
      {
        prompt: 'Forma orqali yangi yozuv kiritib saqlansa, u qayerga yoziladi?',
        options: [
          'Hech qayerga',
          'Asosiy bog‘langan ma’lumotlar bazasi jadvaliga',
          'Faqat Word hujjatiga',
          'Savatga',
        ],
        answer: 1,
        explanation: 'Forma jadval ustida ishlaydigan interfeys bo‘lib, ma’lumotlar to‘g‘ridan-to‘g‘ri jadvalda saqlanadi.',
      },
      {
        prompt: 'Agar foydalanuvchi ochiladigan ro‘yxatdan tashqari begona so‘z yozishini taqiqlamoqchi bo‘lsak, qaysi xossa yoqiladi?',
        options: ['Limit To List = Yes', 'Wrap Text = No', 'Allow Zero Length', 'Show Formulas'],
        answer: 0,
        explanation: 'Limit To List = Yes faqat ro‘yxatdagi qiymatlarni qabul qiladi.',
      },
    ],
    teacherNotes: {
      method: 'Datasheet View va chiroyli Form View oynalarini solishtirib foydalanuvchi qulayligini ko‘rsatish.',
      timing: '10 daqiqa tushuntirish, 25 daqiqa Lookup va Forma yasash, 10 daqiqa Order va test.',
      assessment: 'Ochiladigan ro‘yxat ishlashi va Forma orqali jadvalga yozuv qo‘shilgani.',
      homework: 'Formada foydalanuvchi uchun qanday tugmalar ("Oldingi", "Keyingi", "Saqlash") bo‘lishi kerakligini chizing.',
    },
  },
  {
    id: 'g7-l30',
    grade: 7,
    no: 30,
    part: '2-yarim yillik',
    title: 'Ma’lumotlar bazasini sinovdan o‘tkazish. Ma’lumotlar xavfsizligi.',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'LibreOffice Base'],
    objectives: [
      'O‘quvchi ma’lumotlar bazasini validatsiya qoidalari (Validation Rule) va test ma’lumotlari bilan sinovdan o‘tkazadi.',
      'O‘quvchi bazani parollash, zaxira nusxa (Backup) olish va ruxsatlarni cheklash orqali ma’lumotlar xavfsizligini ta’minlaydi.',
    ],
    intro:
      'Maktab bazasida kimdir tasodifan o‘quvchining yoshini "-5" yoki "250" deb kiritsa-chi? Yoki elektr o‘chib baza fayli shikastlansa-chi? Bugun bazani ham xato kiritishlardan, ham yo‘qotishdan himoya qilishni o‘rganamiz!',
    sections: [
      {
        heading: 'Bazani sinovdan o‘tkazish va Validation Rule',
        body: 'Design View da maydonga Validation Rule (masalan, `>= 6 AND <= 19` maktab o‘quvchisi yoshi uchun) va Validation Text ("Yosh 6 dan 19 gacha bo‘lishi kerak!") qo‘yiladi. Sinov paytida haqiqiy (Normal), chegara (6, 19) va noto‘g‘ri (5, 25, matn) qiymatlarni kiritib himoya ishlashini tekshiramiz.',
        example: 'Baholar maydoni uchun Validation Rule: `Between 1 And 5`. Agar 8 kiritilsa, dastur xato xabarini chiqarib to‘xtatadi!',
        tip: 'Primary Key maydonida ikkita bir xil qiymat kiritib ko‘ring — baza "dublikat mumkin emas" deb rad etishi sinov muvaffaqiyatli o‘tganini bildiradi.',
      },
      {
        heading: 'Ma’lumotlar xavfsizligi va Zaxira nusxa (Backup)',
        body: 'Ma’lumotlar bazasida ko‘pincha shaxsiy ma’lumotlar (ism, manzil, telefon, baho) saqlanadi. Xavfsizlik uchun: 1) Bazaga kuchli parol qo‘yish (Encrypt with Password); 2) Foydalanuvchi huquqlarini ajratish (faqat o‘qish vs tahrirlash); 3) Muntazam Zaxira nusxa (Backup) ni boshqa disk yoki bulutda saqlash shart.',
        example: 'O‘quvchi faqat o‘z bahosini ko‘ra oladi (Read-only), o‘zgartirish huquqi esa faqat o‘qituvchida bo‘ladi.',
      },
    ],
    keyTerms: [
      { term: 'Validation Rule', definition: 'Maydonga kiritiladigan qiymatlarning ruxsat etilgan chegarasini belgilovchi qoida.' },
      { term: 'Validation Text', definition: 'Noto‘g‘ri qiymat kiritilganda foydalanuvchiga chiqadigan tushuntirish xabari.' },
      { term: 'Backup (Zaxira nusxa)', definition: 'Asl baza buzilganda yoki o‘chganda tiklash uchun saqlangan nusxa fayl.' },
      { term: 'Kirish huquqlari (Permissions)', definition: 'Kim ma’lumotni ko‘ra olishi va kim o‘zgartira olishini cheklash.' },
    ],
    steps: [
      '1. Jadvalingizdagi sonli maydonga (masalan, "Soni" yoki "Yosh") Validation Rule: `> 0` va Validation Text yozing.',
      '2. Datasheet yoki Form View da 0 va -3 qiymatlarini kiritib xabar chiqishini sinang.',
      '3. Primary Key da takroriy qiymat kiritishga urinib himoyani tekshiring.',
      '4. Fayl menyusidan bazaning Zaxira nusxasini (Back Up Database / Save As) boshqa papkaga saqlang.',
    ],
    practice: [
      {
        task: 'Test ballari (0 dan 100 gacha) maydoni uchun Validation Rule va tushunarli Validation Text yozing.',
        expected: 'Rule: `>=0 And <=100` (yoki Between 0 And 100); -1 yoki 105 kiritilganda xato xabari chiqadi.',
        difficulty: 'oson',
      },
      {
        task: 'Maktab bazasi xavfsizligi uchun 3 ta asosiy tahdid va ularga qarshi 3 ta himoya chorasini yozing.',
        expected: 'Begona kirishi → Parol; Disk buzilishi → Backup; Xato kiritish → Validation Rule.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l30-g1',
        num: '01',
        title: 'Baza xavfsizligi va validatsiya',
        topic: 'Sinov va Xavfsizlik',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Quyidagi vaziyatda ma’lumotlar bazasi xavfsizligi nuqtayi nazaridan qaysi chora eng to‘g‘ri?',
          scenario: 'Maktab ma’lumotlar bazasi saqlanadigan kompyuterning qattiq diski to‘satdan ishdan chiqdi. Barcha yillik ma’lumotlar yo‘qolib ketmasligi uchun oldindan nima qilingan bo‘lishi kerak edi?',
          options: [
            {
              text: 'Shrift hajmini kattalashtirib qo‘yish',
              isCorrect: false,
              feedback: 'Shrift o‘lchami ma’lumotlarni saqlab qolmaydi.',
            },
            {
              text: 'Muntazam ravishda boshqa tashqi xotira yoki xavfsiz bulutga Backup (zaxira nusxa) olib borish',
              isCorrect: true,
              feedback: 'To‘g‘ri! Muntazam Backup (3-2-1 qoidasi) texnik nosozliklarda ma’lumotni tiklashning yagona ishonchli yo‘lidir.',
            },
            {
              text: 'Primary Key ni o‘chirib tashlash',
              isCorrect: false,
              feedback: 'Primary Key ni o‘chirish disk nosozligidan himoya qilmaydi va bazani buzadi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Maydonga faqat 1 dan 5 gacha son kiritilishiga ruxsat beruvchi Validation Rule qaysi?',
        options: ['>= 1 And <= 5', '= 5', '< 0', 'Text Only'],
        answer: 0,
        explanation: '">= 1 And <= 5" (yoki Between 1 And 5) qiymatni 1–5 oralig‘ida cheklaydi.',
      },
      {
        prompt: 'Foydalanuvchi Validation Rule ni buzganda ekranda ko‘rinadigan ogohlantirish matni qayerda yoziladi?',
        options: ['Validation Text', 'Primary Key', 'Header', 'AutoNumber'],
        answer: 0,
        explanation: 'Validation Text foydalanuvchiga qanday qiymat kiritish kerakligini tushunarli tilda chiqaradi.',
      },
      {
        prompt: 'Ma’lumotlar bazasini yo‘qolib ketishidan saqlash uchun muntazam qilinadigan amal nima?',
        options: ['Backup (Zaxira nusxa olish)', 'Delete', 'Formatting', 'Sorting'],
        answer: 0,
        explanation: 'Backup fayl buzilishi yoki o‘chib ketishi holatida bazani tiklash imkonini beradi.',
      },
      {
        prompt: 'Ma’lumotlar bazasini begona shaxslar ochishidan himoyalash uchun nima qo‘llaniladi?',
        options: [
          'Kuchli parol (Encryption) va kirish huquqlarini cheklash',
          'Ekran yorqinligini pasaytirish',
          'Lookup ro‘yxatini o‘chirish',
          'Printerga chiqarish',
        ],
        answer: 0,
        explanation: 'Parol bilan shifrlash va foydalanuvchi rollari ruxsatsiz kirishni to‘xtatadi.',
      },
      {
        prompt: 'Bazani sinovdan o‘tkazishda qaysi turdagi ma’lumotlar bilan tekshirish kerak?',
        options: [
          'Faqat bitta to‘g‘ri son bilan',
          'Normal, chegaraviy va ataylab kiritilgan noto‘g‘ri qiymatlar bilan',
          'Hech qanday ma’lumot kiritmasdan',
          'Faqat rasmlar bilan',
        ],
        answer: 1,
        explanation: 'To‘liq test uchala holatda ham tizim kutilgandek javob berishini tasdiqlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda -10 yosh kiritishga urinib, Validation Rule ning qanday to‘xtatishini ko‘rsatish.',
      timing: '10 daqiqa nazariya, 23 daqiqa Validation Rule va Backup amaliyoti, 12 daqiqa CaseStudy va test.',
      assessment: 'Validation Rule/Text to‘g‘ri yozilgani va testdan o‘tgani.',
      homework: 'O‘z bazangizdagi kamida 2 ta maydon uchun Validation Rule qoidalarini yozing.',
    },
  },
  {
    id: 'g7-l31',
    grade: 7,
    no: 31,
    part: '2-yarim yillik',
    title: 'Maʼlumotlarni matn bilan ishlash dasturiga yuborish.',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'Word'],
    objectives: [
      'O‘quvchi Access/Base ma’lumotlar bazasidagi jadval yoki so‘rov natijalarini Word (RTF/DOCX) ga eksport qilishni biladi.',
      'O‘quvchi Mail Merge (Xatlarni birlashtirish) g‘oyasi orqali har bir yozuv uchun shaxsiy diplom yoki xat yaratish imkonini tushunadi.',
    ],
    intro:
      'Tasavvur qiling, olimpiadada g‘olib bo‘lgan 50 nafar o‘quvchiga faxriy yorliq berish kerak. Ismlarni bazadan Wordga bitta-bitta ko‘chirish o‘rniga bir bosishda eksport qilish yoki Mail Merge bilan avtomatik yasash mumkin!',
    sections: [
      {
        heading: 'Bazadan Wordga eksport qilish (Export)',
        body: 'Accessda "External Data → Export → Word RTF File" tugmasi bosilsa, tanlangan jadval yoki query natijalari Word hujjatiga tayyor jadval sifatida yuboriladi. Bu ma’lumotlarni chiroyli hisobot matniga qo‘shishda juda qulay.',
        example: 'Kutubxona qarzdorlari ro‘yxatini Accessdan Wordga yuborib, tepasiga direktor murojaati matnini qo‘shamiz.',
        tip: 'Butun katta jadvalni emas, avval kerakli odamlarni ajratuvchi Query natijasini Wordga eksport qiling — hujjat ixcham va aniq bo‘ladi!',
      },
      {
        heading: 'Mail Merge (Ma’lumot birlashtirish) haqida tushuncha',
        body: 'Worddagi Mailings → Mail Merge vositasi Access jadvalidagi har bir yozuvni (Ism, Sinf, O‘rin) olib, yagona shablon hujjatga joylaydi va 50 ta alohida shaxsiylashtirilgan sertifikat chiqaradi.',
        example: 'Shablon: "Hurmatli <<Ism>>, siz <<Sinf>> nomidan..." — bazadagi barcha o‘quvchilar uchun avtomatik to‘ldiriladi.',
      },
    ],
    keyTerms: [
      { term: 'Eksport (Export)', definition: 'Ma’lumotlarni bir dasturdan boshqa dastur formatiga (masalan, Access → Word) chiqarish.' },
      { term: 'RTF formati', definition: 'Matn muharrirlarining deyarli barchasida (Word, Writer) ochiladigan universal matn formati.' },
      { term: 'Mail Merge', definition: 'Baza jadvalidagi ma’lumotlarni Word shabloniga avtomatik birlashtirish.' },
      { term: 'External Data', definition: 'Accessda tashqi fayllarni import va eksport qilish menyusi.' },
    ],
    steps: [
      '1. Access/Base dasturida tayyor jadval yoki Query ni tanlang.',
      '2. External Data → Export → Word RTF (yoki nusxalab Writer/Wordga maxsus joylash) ni tanlang.',
      '3. Saqlanadigan papkani ko‘rsating va eksport tugagach Wordda ochilishini kuzating.',
      '4. Wordda sarlavha, sana va imzo qo‘shib chop etishga tayyor hisobot yarating.',
    ],
    practice: [
      {
        task: 'O‘quvchilar jadvalidagi ma’lumotlarni Word/Writer hujjatiga eksport qilib, tepasiga rasmiy sarlavha yozing.',
        expected: 'Bazadagi ma’lumotlar Wordda tartibli jadval ko‘rinishida ochiladi.',
        difficulty: 'oson',
      },
      {
        task: '50 ta o‘quvchiga tabriknoma yozish uchun Mail Merge da bazaning qaysi maydonlari <<...>> shaklida ishlatilishini ko‘rsating.',
        expected: '<<Familiya>>, <<Ism>>, <<Sinf>> maydonlari shablonda belgilanadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l31-g1',
        num: '01',
        title: 'Accessdan Wordga eksport qadamlari',
        topic: 'Ma’lumotlarni Wordga yuborish',
        difficulty: 'Oson',
        engine: 'order',
        config: {
          prompt: 'Ma’lumotlar bazasidan kerakli ro‘yxatni Word hujjatiga yuborish bosqichlarini tartiblang.',
          items: [
            'Eksport qilinadigan jadval yoki Query natijasini belgilash',
            'External Data → Export → Word RTF File buyrug‘ini tanlash',
            'Saqlash manzilini ko‘rsatish va faylni Wordda ochish',
            'Word hujjatida sarlavha, izoh qo‘shib Print Preview da tekshirish',
          ],
          hint: 'Avval manba tanlanadi, keyin External Data → Export, fayl ochiladi va Wordda bezaladi.',
          explanation: 'Eksport qilingan RTF/Word fayli keyin matn muharririda bemalol tahrirlanadi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Accessdagi ma’lumotlarni matn bilan ishlash dasturiga (Word) yuborish uchun qaysi menyudan foydalaniladi?',
        options: ['Home', 'External Data → Export', 'Animations', 'View'],
        answer: 1,
        explanation: 'External Data menyusida Import va Export buyruqlari joylashgan.',
      },
      {
        prompt: 'Access jadvalini Wordga yuborishda ko‘pincha qaysi universal matn formati yaratiladi?',
        options: ['.mp3', '.rtf', '.exe', '.png'],
        answer: 1,
        explanation: 'RTF (Rich Text Format) Word va boshqa barcha matn muharrirlarida oson ochiladi.',
      },
      {
        prompt: 'Baza jadvalidagi 100 nafar kishi uchun avtomatik shaxsiy taklifnoma tayyorlovchi Word vositasi qaysi?',
        options: ['Mail Merge', 'Wrap Text', 'Spell Check', 'Header'],
        answer: 0,
        explanation: 'Mail Merge shablon hujjatni baza yozuvlari bilan avtomatik birlashtiradi.',
      },
      {
        prompt: 'Nima uchun butun jadval o‘rniga avval Query natijasini Wordga eksport qilgan ma’qul?',
        options: [
          'Faqat kerakli shartga mos yozuvlarni ortiqcha ma’lumotsiz chiqarish uchun',
          'Faylni buzish uchun',
          'Shriftni kichraytirish uchun',
          'Rangni o‘chirish uchun',
        ],
        answer: 0,
        explanation: 'Query keraksiz yozuvlarni filtrlab, Wordga faqat zarur hisobotni yuboradi.',
      },
      {
        prompt: 'Wordga eksport qilingan ma’lumotlar odatda qanday ko‘rinishda tushadi?',
        options: ['Audio fayl', 'Matn hujjati ichidagi jadval', 'Video klip', 'Dastur kodi'],
        answer: 1,
        explanation: 'Jadval yoki query yozuvlari Word hujjatiga tartibli jadval shaklida o‘tadi.',
      },
    ],
    teacherNotes: {
      method: 'Accessdagi 5 ta yozuvni Wordga RTF qilib eksport qilish va shaxsiy yorliq maketini ko‘rsatish.',
      timing: '10 daqiqa tushuntirish, 23 daqiqa amaliy eksport, 12 daqiqa Order va test.',
      assessment: 'Ma’lumotlar buzilmasdan Wordga o‘tgani va rasmiylashtirilgani.',
      homework: 'Faxriy yorliq shablonida bazadan olinadigan 3 ta o‘zgaruvchi maydonni belgilab yozing.',
    },
  },
  {
    id: 'g7-l32',
    grade: 7,
    no: 32,
    part: '2-yarim yillik',
    title: 'Maʼlumotlarni jadval bilan ishlash dasturiga yuborish.',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'Excel'],
    objectives: [
      'O‘quvchi Access/Base ma’lumotlar bazasidagi ma’lumotlarni Excel (XLSX / CSV) ga eksport qilishni biladi.',
      'O‘quvchi eksport qilingan ma’lumotlar ustida Excelda formula (=SUM, =AVERAGE) va diagrammalar qurishni amalda bajaradi.',
    ],
    intro:
      'Ma’lumotlar bazasi ma’lumotlarni saqlash va qidirishda zo‘r, ammo murakkab grafiklar chizish va What-if tahlili qilishda Excel tengsiz! Bugun bazadan ma’lumotlarni Excelga yuborib tahlil qilamiz.',
    sections: [
      {
        heading: 'Bazadan Excelga eksport qilish (Export to Excel / CSV)',
        body: 'Accessda jadval yoki query ni tanlab "External Data → Export → Excel" bosiladi. Fayl formati sifatida .xlsx (yoki universal .csv — vergul bilan ajratilgan qiymatlar) tanlanadi. "Export data with formatting and layout" katakchasi belgilansa, ustun kengliklari va sarlavha formatlari ham saqlanadi.',
        example: 'Do‘kon savdolari bazasini Excelga chiqarib, kunlik umumiy savdo summasini va oylik diagrammani quramiz.',
        tip: 'CSV fayli ochilganda o‘zbekcha "o‘", "g‘" harflari buzilib ketmasligi uchun UTF-8 kodlashini tanlang (yoki to‘g‘ridan-to‘g‘ri .xlsx formatida eksport qiling)!',
      },
      {
        heading: 'Excelda tahlil va vizualizatsiya',
        body: 'Ma’lumot Excelga o‘tgach, endi siz bilgan barcha vositalarni ishlatish mumkin: =SUM(), =AVERAGE(), Shartli formatlash (Conditional Formatting), Saralash va Ustunli/Doiraviy diagrammalar!',
        example: 'Bazadan tushgan kitoblar narxi ustiga Excelda =SUM(D2:D20) bilan jami qiymat topiladi.',
      },
    ],
    keyTerms: [
      { term: 'Excel Export (.xlsx)', definition: 'Ma’lumotlar bazasi jadvalini Excel ish kitobiga o‘tkazish.' },
      { term: 'CSV (Comma-Separated Values)', definition: 'Jadval ma’lumotlarini vergul bilan ajratib saqlovchi universal matn fayli.' },
      { term: 'Formatting and Layout', definition: 'Eksport paytida jadval dizayni va ustun formatlarini saqlab qolish sozlamasi.' },
      { term: 'Integratsiya', definition: 'Turli ofis dasturlari (Access + Excel + Word) birgalikda ishlashi.' },
    ],
    steps: [
      '1. Access/Base dasturida sonli ustunlari bor jadvalni (masalan, Kitoblar) tanlang.',
      '2. External Data → Export → Excel buyrug‘ini bering va .xlsx fayl sifatida saqlang.',
      '3. Hosil bo‘lgan Excel faylini ochib, narxlar ustuniga =SUM() va =AVERAGE() formulalarini qo‘shing.',
      '4. Natija bo‘yicha 1 ta ustunli diagramma yarating.',
    ],
    practice: [
      {
        task: 'Bazadan Excelga eksport qilingan jadvalda eng qimmat va eng arzon mahsulotni =MAX va =MIN bilan toping.',
        expected: 'Excel formulalari bazadan kelgan sonlarda xatosiz ishlaydi.',
        difficulty: 'oson',
      },
      {
        task: 'Export qilingan ma’lumotlarga Excelda Conditional Formatting (o‘rtachadan yuqorisi yashil) qo‘llang.',
        expected: 'Yuqori ko‘rsatkichlar avtomatik rang bilan ajraladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l32-g1',
        num: '01',
        title: 'Access + Excel hamkorligi',
        topic: 'Ma’lumotlarni Excelga yuborish',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Bazadan Excelga eksport qilish haqidagi jumlalarni to‘ldiring.',
          template: 'Bazadan murakkab grafik va hisoblar uchun ma’lumotlar {{0}} dasturiga yuboriladi. Universal matnli jadval almashish formati {{1}} deyiladi. Eksportda ustun ko‘rinishini saqlash uchun {{2}} belgilanadi.',
          blanks: [
            { options: ['Excel', 'Paint', 'Audacity'], answer: 'Excel' },
            { options: ['.csv', '.mp4', '.exe'], answer: '.csv' },
            { options: ['Formatting and Layout', 'Hide During Show', 'Pen Up'], answer: 'Formatting and Layout' },
          ],
          hint: 'Jadval dasturi — Excel, universal format — .csv, dizaynni saqlash — Formatting and Layout.',
          explanation: 'Access ma’lumotlarni xavfsiz saqlaydi, Excel esa ularni formulalar va diagrammalar bilan tahlil qiladi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Access bazasidagi sonli ma’lumotlarni diagramma va What-if tahlili uchun qaysi dasturga yuborgan ma’qul?',
        options: ['Paint', 'Excel (Elektron jadval)', 'Scratch', 'Brauzer'],
        answer: 1,
        explanation: 'Excel murakkab hisob-kitoblar, Shartli formatlash va diagrammalar yaratish uchun yaratilgan.',
      },
      {
        prompt: 'CSV fayl formati nimani anglatadi?',
        options: [
          'Video fayl formatini',
          'Vergul bilan ajratilgan qiymatlar (universal jadval almashish) faylini',
          'Audio siqishni',
          'Rasm faylini',
        ],
        answer: 1,
        explanation: 'CSV (Comma-Separated Values) barcha jadval va baza dasturlari tushunadigan yengil formatdir.',
      },
      {
        prompt: 'Eksport qilingan jadval Excelda ochilgach birinchi navbatda nimalarni qo‘shish mumkin?',
        options: [
          'Faqat rasm o‘chirish',
          '=SUM, =AVERAGE formulalari, Shartli formatlash va diagrammalar',
          'Slayd o‘tishlari',
          'Primary Key',
        ],
        answer: 1,
        explanation: 'Excelda hisob-kitob formulalari va vizual grafiklar darhol qo‘shiladi.',
      },
      {
        prompt: 'Eksport qilishda "Open the destination file after the export operation is complete" nimani bajaradi?',
        options: [
          'Faylni o‘chiradi',
          'Eksport tugashi bilan hosil bo‘lgan Excel faylini avtomatik ochib beradi',
          'Bazani yopadi',
          'Printerni ishga tushiradi',
        ],
        answer: 1,
        explanation: 'Bu belgi eksportdan so‘ng yangi Excel faylini darhol tekshirish uchun ochib beradi.',
      },
      {
        prompt: 'Nima uchun Accessda saqlash va Excelda tahlil qilish bir-birini to‘ldiradi?',
        options: [
          'Access katta ma’lumotni xavfsiz saqlaydi, Excel esa kuchli hisob va grafiklar chizadi',
          'Chunki bitta dasturda jadval bo‘lmaydi',
          'Ikkalasi ham faqat rasm chizadi',
          'Faqat internet tezligi uchun',
        ],
        answer: 0,
        explanation: 'Har bir dasturning kuchli tomonidan foydalanish professional integratsiya beradi.',
      },
    ],
    teacherNotes: {
      method: 'Access → Excel → Diagramma zanjirini sinfda jonli bajarish.',
      timing: '8 daqiqa tushuntirish, 25 daqiqa eksport va Excelda tahlil, 12 daqiqa FillBlank va test.',
      assessment: 'Ma’lumotlar to‘g‘ri eksport qilinib, Excelda formula va grafik qo‘shilgani.',
      homework: 'Word va Excelga eksport qilish o‘rtasidagi asosiy maqsad farqini 2 gapda yozing.',
    },
  },
  {
    id: 'g7-l33',
    grade: 7,
    no: 33,
    part: '2-yarim yillik',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Access', 'Excel', 'Word'],
    objectives: [
      'O‘quvchi ma’lumotlar bazasi maydonlari, Primary Key, ma’lumot turlari, Lookup/Forma, Validation Rule/Backup va Eksport bilimlarini nazoratdan o‘tkazadi.',
      'O‘quvchi kichik ma’lumotlar bazasini mustaqil loyihalash va himoyalash topshirig‘ini bajaradi.',
    ],
    intro:
      '7-sinf Ma’lumotlar bazasi bo‘limining yakuniy nazorat ishida jadval yaratish, forma, tekshiruv qoidalari va boshqa dasturlarga eksport qilish ko‘nikmalarimizni namoyish etamiz.',
    sections: [
      {
        heading: 'Access/Base bo‘yicha asosiy mezonlar',
        body: 'Har bir jadvalda takrorlanmas Primary Key bo‘lishi, har bir maydonga to‘g‘ri Data Type (AutoNumber, Short Text, Number, Currency, Date/Time, Yes/No) berilishi, xatolarni kamaytirish uchun Lookup va Validation Rule qo‘llanishi shart.',
        example: 'Telefon — Short Text; Narx — Currency; ID — AutoNumber; Ball — `>=0 And <=100`.',
        tip: 'Nazorat oxirida bazani albatta saqlang va Backup nusxasini oling!',
      },
      {
        heading: 'Eksport va xavfsizlik',
        body: 'Hisobot matni uchun Word (RTF), hisob va grafiklar uchun Excel (.xlsx / .csv) ga eksport qilish hamda ma’lumotlarni parol/huquqlar bilan himoyalash qoidalarini yodda tuting.',
        example: 'External Data → Export bo‘limidan kerakli dastur tanlanadi.',
      },
    ],
    keyTerms: [
      { term: 'Primary Key', definition: 'Yozuvlarni noyob ajratib turuvchi takrorlanmas kalit maydon.' },
      { term: 'Lookup & Form', definition: 'Ochiladigan ro‘yxat va qulay ma’lumot kiritish oynasi.' },
      { term: 'Validation Rule & Backup', definition: 'Ma’lumot to‘g‘riligini tekshirish va zaxira nusxa saqlash.' },
      { term: 'Export', definition: 'Bazadagi ma’lumotlarni Word yoki Excelga uzatish.' },
    ],
    steps: [
      '1. "To‘garaklar" jadvalini 5 ta maydon (ID AutoNumber PK, Nomi, O‘qituvchi, O‘quvchi_soni, Hafta_kuni Lookup) bilan tuzing.',
      '2. O‘quvchi_soni maydoniga `> 0` Validation Rule qo‘ying.',
      '3. Jadval asosida Forma yaratib 3 ta yozuv kiriting.',
      '4. Natijani Excelga eksport qilib jami o‘quvchilar sonini =SUM bilan toping.',
    ],
    practice: [
      {
        task: 'Jadvalga kiritilgan ma’lumotlarni Validation Rule ni buzuvchi son bilan sinab ko‘ring.',
        expected: 'Xato qiymat rad etilib, Validation Text ko‘rinadi.',
        difficulty: 'oson',
      },
      {
        task: 'Yaratilgan bazadan Excel va Wordga eksport natijalarini taqqoslang.',
        expected: 'Excelda hisoblab, Wordda rasmiylashtirib bo‘ladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g7-l33-g1',
        num: '01',
        title: 'Access yakuniy laboratoriya',
        topic: 'Baza nazorat ishi',
        difficulty: 'O‘rta',
        engine: 'dblab',
        config: {
          prompt: 'To‘garak a’zolari jadvalidan balli 85 dan yuqori bo‘lgan o‘quvchilarni qidirib toping.',
          tableName: 'Togarag_Azolari',
          columns: [
            { name: 'ID', type: 'AutoNumber' },
            { name: 'Ism', type: 'Short Text' },
            { name: 'Togarag', type: 'Short Text' },
            { name: 'Ball', type: 'Number' },
          ],
          rows: [
            { ID: 1, Ism: 'Dilshod', Togarag: 'Robototexnika', Ball: 92 },
            { ID: 2, Ism: 'Malika', Togarag: 'Grafika', Ball: 80 },
            { ID: 3, Ism: 'Behruz', Togarag: 'Dasturlash', Ball: 95 },
            { ID: 4, Ism: 'Zarina', Togarag: 'Robototexnika', Ball: 88 },
          ],
          mode: 'query',
          targetField: 'Ball',
          targetOp: '>',
          targetValue: '85',
          expectedRowCount: 3,
          hint: 'Maydon: "Ball", Amal: ">", Qiymat: "85".',
          explanation: '85 dan katta ballga ega 3 ta yozuv (92, 95, 88) ajratib olindi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ma’lumotlar bazasida jadval yaratayotganda Primary Key qanday vazifani bajaradi?',
        options: [
          'Matn rangini o‘zgartiradi',
          'Har bir yozuvni noyob (takrorlanmas) tarzda aniqlaydi',
          'Faylni Wordga yuboradi',
          'Ovoz qo‘shadi',
        ],
        answer: 1,
        explanation: 'Primary Key yozuvlarning bir-biridan aniq ajralib turishini ta’minlaydi.',
      },
      {
        prompt: 'Foydalanuvchi noto‘g‘ri oraliqdagi son (masalan, yosh = -2) kiritishini to‘suvchi vosita qaysi?',
        options: ['Validation Rule', 'Lookup', 'Form Header', 'RTF Export'],
        answer: 0,
        explanation: 'Validation Rule maydon qiymatiga mantiqiy cheklov qo‘yadi.',
      },
      {
        prompt: 'Ochiladigan ro‘yxat yaratish uchun Design View da qaysi vosita ishlatiladi?',
        options: ['Lookup Wizard', 'Goal Seek', 'AutoSum', 'Animations'],
        answer: 0,
        explanation: 'Lookup Wizard tayyor variantlar ro‘yxatini yaratadi.',
      },
      {
        prompt: 'Bazadagi ma’lumotlardan grafik chizish va foiz hisoblash uchun eng qulay eksport yo‘nalishi qaysi?',
        options: ['Word RTF', 'Excel (.xlsx)', 'Paint (.png)', 'Audacity'],
        answer: 1,
        explanation: 'Excel elektron jadval dasturi hisob-kitob va diagrammalar uchun mo‘ljallangan.',
      },
      {
        prompt: 'Texnik nosozlikda baza yo‘qolib ketmasligi uchun nima qilish shart?',
        options: [
          'Muntazam Backup (zaxira nusxa) olish',
          'Shriftni qalin qilish',
          'Formani yopib qo‘yish',
          'Primary Key ni o‘chirish',
        ],
        answer: 0,
        explanation: 'Backup boshqa joyda saqlangan nusxa orqali ma’lumotlarni tiklash kafolatidir.',
      },
    ],
    teacherNotes: {
      method: 'Amaliy Access/Base nazorati + DbLab va test.',
      timing: '25 daqiqa amaliy nazorat, 15 daqiqa DbLab/test, 5 daqiqa baholash.',
      assessment: 'Jadval tuzilmasi, Validation, Forma va Eksport aniqligi.',
      homework: '7-sinf davomida o‘rganilgan barcha 4 ta dastur bo‘yicha qisqa xulosa tayyorlang.',
    },
  },
  {
    id: 'g7-l34',
    grade: 7,
    no: 34,
    part: '2-yarim yillik',
    title: 'Takrorlash',
    kind: 'takrorlash',
    hours: 1,
    tools: ['Word', 'PowerPoint', 'Excel', 'Access'],
    objectives: [
      'O‘quvchi 7-sinfda o‘tilgan barcha ofis va xavfsizlik ko‘nikmalarini (Word, Internet xavfsizligi, PowerPoint, Excel, Access) umumlashtiradi.',
      'O‘quvchi 8-sinfda boshlanadigan dasturlash, HTML/CSS, tarmoqlar va video/audio montajga tayyorlanadi.',
    ],
    intro:
      '7-sinf informatika kursini muvaffaqiyatli tugatdingiz! Endi siz matn, taqdimot, elektron jadval va ma’lumotlar bazasini o‘zaro bog‘lab ishlata olasiz. Keling, yillik bilimlarimizni yakuniy viktorinada mustahkamlaymiz!',
    sections: [
      {
        heading: '7-sinfning 4 ta tayanch ustuni',
        body: '1) Word: Heading stillari, Wrap Text/Crop, Merge Cells, ko‘p darajali ro‘yxat, Header/Footer, Columns va Print Preview; 2) PowerPoint: Loyiha spetsifikatsiyasi, Transitions, Audio/vaqt, Add Animation va Auditoriya talablari; 3) Excel: Input/Output dizayn, What-if modellashtirish, Data Capture Form, Number Format, Conditional Formatting va Goal Seek; 4) Access: Primary Key, Data Types, Lookup/Form, Validation/Backup va Word/Excelga eksport.',
        example: 'Endi maktab tadqiqotini Accessda yig‘ib, Excelda tahlil qilib, Wordda hisobot yozib, PowerPointda taqdim eta olasiz!',
        tip: '8-sinfda esa Scratchda o‘z o‘yinlaringizni yaratish, HTML/CSS da veb-sayt qurish, kompyuter tarmoqlarini loyihalash va video montaj qilishni o‘rganasiz!',
      },
      {
        heading: 'Raqamli xavfsizlik doimo hamroh',
        body: 'Yil davomida o‘rgangan 12+ belgili kuchli parol, 2FA, fishingdan saqlanish va ma’lumotlar zaxira nusxasi (Backup) qoidalari sizga har kuni asqatadi.',
        example: 'Hech qachon shubhali havolalarga parol kiritmang va muhim fayllarning nusxasini saqlang.',
      },
    ],
    keyTerms: [
      { term: 'Styles & Print Preview', definition: 'Hujjatni izchil bezash va qog‘ozga chiqarishdan oldin tekshirish.' },
      { term: 'Transition & Animation', definition: 'Slaydlar almashishi va obyektlar harakati sinxronizatsiyasi.' },
      { term: 'What-if & Goal Seek', definition: 'Elektron jadvalda modellashtirish va maqsadli parametrni topish.' },
      { term: 'Primary Key & Validation', definition: 'Ma’lumotlar bazasi aniqligi va yaxlitligini ta’minlash.' },
    ],
    steps: [
      '1. To‘rtta dastur (Word, PowerPoint, Excel, Access) bo‘yicha 1 tadan eng kuchli ko‘nikmangizni ayting.',
      '2. Yakuniy krossvord va test savollarini yeching.',
      '3. Yil davomida yaratgan eng yaxshi loyihalaringizni portfolioga saqlang.',
    ],
    practice: [
      {
        task: 'O‘quv yili loyihalari zanjirini (Baza → Excel → Word → PowerPoint) ketma-ketlikda izohlang.',
        expected: 'Har bir bosqichning vazifasi va integratsiya foydasi aniq tushuntiriladi.',
        difficulty: 'oson',
      },
      {
        task: 'Kuchli parol va Backup qoidalarini 3 ta oltin qoida shaklida yozing.',
        expected: 'Uzun aralash parol, 2FA, muntazam zaxira nusxa.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g7-l34-g1',
        num: '01',
        title: '7-sinf yakuniy krossvordi',
        topic: 'Yillik takrorlash',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '7-sinfning barcha bo‘limlaridan 4 ta asosiy atamani toping (bosh harflarda yozing).',
          clues: [
            { id: 'c1', clue: 'Accessda ma’lumot kiritish ekran oynasi (4 harf)', answer: 'FORM' },
            { id: 'c2', clue: 'Wordda matnni rasm yonidan o‘rab o‘tish sozlamasi (bitta so‘z: Square/Tight emas, umumiy nomi ...)', answer: 'WRAP' },
            { id: 'c3', clue: 'Zaxira nusxa olishning xalqaro nomi (6 harf)', answer: 'BACKUP' },
            { id: 'c4', clue: 'Soxta havola orqali parol o‘g‘irlash hujumi (inglizcha)', answer: 'PHISHING' },
          ],
          hint: 'Atamalar: FORM, WRAP, BACKUP, PHISHING.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Wordda barcha sarlavhalarga bir xil uslub berish va avtomatik mundarija tuzish uchun nima ishlatiladi?',
        options: ['Stillar (Heading Styles)', 'Wrap Text', 'Crop', 'Watermark'],
        answer: 0,
        explanation: 'Heading stillari ham dizayn izchilligini, ham avtomatik mundarijani ta’minlaydi.',
      },
      {
        prompt: 'PowerPointda bitta obyektga ikkinchi animatsiyani birinchisini o‘chirmasdan qo‘shish tugmasi qaysi?',
        options: ['Add Animation', 'Transitions', 'Hide During Show', 'Layout'],
        answer: 0,
        explanation: 'Add Animation mavjud animatsiyaga qo‘shimcha harakat qo‘shadi.',
      },
      {
        prompt: 'Excelda natija katagiga qarab kirish katagi qiymatini avtomatik topadigan vosita qaysi?',
        options: ['Conditional Formatting', 'Goal Seek', 'Merge & Center', 'Data Labels'],
        answer: 1,
        explanation: 'Goal Seek maqsad qiymatga mos kirish parametrini hisoblaydi.',
      },
      {
        prompt: 'Accessda jadvaldagi har bir yozuvni noyob belgilaydigan maydon qanday ataladi?',
        options: ['Lookup', 'Primary Key', 'Field Size', 'Short Text'],
        answer: 1,
        explanation: 'Primary Key yozuvlarning takrorlanmas identifikatoridir.',
      },
      {
        prompt: 'Paroldan tashqari telefon SMS yoki ilova kodi bilan kirish himoyasi qisqacha nima deyiladi?',
        options: ['RTF', 'CSV', '2FA', 'PDF'],
        answer: 2,
        explanation: '2FA (Two-Factor Authentication) ikki bosqichli autentifikatsiya hisoblanadi.',
      },
    ],
    teacherNotes: {
      method: 'Yillik loyihalar ko‘rgazmasi va jamoaviy viktorina.',
      timing: '10 daqiqa yillik sarhisob, 20 daqiqa krossvord va viktorina, 15 daqiqa test va taqdirlash.',
      assessment: '7-sinf asosiy atamalari va vositalarini erkin qo‘llay olishi.',
      homework: '8-sinfga tayyorgarlik sifatida HTML nima ekanini qiziqib ko‘ring.',
    },
  },
];
