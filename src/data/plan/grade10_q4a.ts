import type { Lesson } from './types';

export const GRADE_10_Q4A: Lesson[] = [
  {
    id: 'g10-l53',
    grade: 10,
    no: 53,
    part: '4-chorak',
    title: 'Ma’lumotlar bazasini yaratish. Maʼlumot turlari va katak hajmlari. Uch tomonlama bogʻlanish.',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'LibreOffice Base', 'SQL'],
    objectives: [
      'O‘quvchi maʼlumotlar bazasi (Database), jadval (Table), yozuv (Record/Row) va maydon (Field/Column) tushunchalarini biladi.',
      'O‘quvchi mos **Maʼlumot turi (Data Type)** va **Maydon hajmi (Field Size)** ni to‘g‘ri tanlashni hamda **Uch tomonlama (Ternary) bog‘lanish** mantiqini tushunadi.',
    ],
    intro:
      '4-chorakda minglab va millionlab yozuvlarni tizimli saqlovchi **Maʼlumotlar bazalari (Microsoft Access / LibreOffice Base / SQL)** dunyosiga kiramiz! Har bir ustunga to‘g‘ri maʼlumot turini tanlash xotira va aniqlik uchun hal qiluvchi ahamiyatga ega.',
    sections: [
      {
        heading: 'Jadval tuzilishi, Maʼlumot turlari va Maydon hajmi',
        body: 'Bazadagi har bir jadval **Yozuvlardan (Records/qatorlar)** va **Maydonlardan (Fields/ustunlar)** iborat. Har bir maydon uchun aniq **Maʼlumot turi (Data Type)** tanlanadi:\n• **Short Text**: qisqa matn (Ism, Telefon — max 255 belgi). Maydon hajmini (`Field Size`) ehtiyojga moslab (masalan, 30 belgi) cheklash xotirani tejaydi!\n• **Number (Integer / Double)**: arifmetik amal bajariladigan sonlar (Yosh, Narx, Balans). Eslab qoling: **telefon raqami bilan matematik amal bajarilmaydi** va oldida `0` bo‘lishi mumkin — shuning uchun telefon **`Text`** sifatida saqlanadi!\n• **Date/Time**: tug‘ilgan sana, buyurtma vaqti.\n• **Boolean (Yes/No)**: mantiqiy `Ha / Yo‘q` (masalan, `To‘landimi?`).\n• **AutoNumber**: har bir yangi yozuvga avtomatik noyob ID raqam beradi.',
        example: '`Jins` ustuni uchun `Short Text` (hajmi `1` — `M`/`F`) yoki `Maktab_ID` uchun `AutoNumber` tanlanadi.',
      },
      {
        heading: 'Uch tomonlama bog‘lanish (Ternary Relationship)',
        body: 'Baʼzan ikkita jadval bog‘lanishi yetarli bo‘lmaydi — **uchta obyekt** bir vaqtning o‘zida bog‘lanishi kerak bo‘ladi (**Uch tomonlama bog‘lanish**). Masalan, maktabda **`O‘qituvchi`**, **`Fan`** va **`Sinf`** birlashib dars jadvalini (`Dars`) hosil qiladi; yoki **`Shifokor`**, **`Bemor`** va **`Dori`** birlashib `Retsept` jadvalini yaratadi. Bu bog‘lanish markazda bog‘lovchi jadval (Junction table) orqali 3 ta tashqi kalit bilan quriladi.',
        example: 'Retsept(RetseptID, ShifokorID, BemorID, DoriID, Sana) — 3 ta mustaqil jadvalni bir voqeada bog‘laydi.',
      },
    ],
    keyTerms: [
      { term: 'Field / Record', definition: 'Field — jadval ustuni (atribut), Record — bitta obyekt haqidagi to‘liq qator.' },
      { term: 'Data Type', definition: 'Maydonda saqlanadigan maʼlumot turi (Text, Number, Date/Time, Boolean, AutoNumber).' },
      { term: 'Field Size', definition: 'Maydonga sig‘ishi mumkin bo‘lgan maksimal belgilar yoki son razryadlari hajmi.' },
      { term: 'Ternary (Uch tomonlama) bog‘lanish', definition: 'Bir vaqtning o‘zida 3 ta jadvalni o‘zaro bog‘laydigan munosabat.' },
    ],
    steps: [
      '1. Nima uchun telefon raqami `Number` emas, `Short Text` bo‘lishini tushuning.',
      '2. Uch tomonlama bog‘lanishga 1 ta misol keltiring.',
      '3. Quyidagi moslashtirish o‘yinida maʼlumot turlarini bog‘lang.',
    ],
    practice: [
      {
        task: 'Talaba kartasi jadvalidagi quyidagi maydonlarga eng mos Data Type yozing: `TalabaID`, `FIO`, `Telefon`, `TugilganSana`, `Grantdami`.',
        expected: '`TalabaID`: AutoNumber; `FIO`: Short Text; `Telefon`: Short Text; `TugilganSana`: Date/Time; `Grantdami`: Boolean (Yes/No).',
        difficulty: 'oson',
      },
      {
        task: 'Nima uchun pochta indeksi (`100000`) yoki telefon raqami (`+998901234567`) uchun `Number` o‘rniga `Short Text` tanlanadi?',
        expected: '1) Boshidagi `+` yoki `0` raqami `Number` da tushib qoladi; 2) Telefon raqamlari qo‘shilmaydi yoki ko‘paytirilmaydi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l53-g1',
        num: '01',
        title: 'Maʼlumot turlarini tanla',
        topic: 'MB maydon turlari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir maydon misolini eng to‘g‘ri maʼlumot turi (Data Type) ga moslashtiring:',
          pairs: [
            { left: 'Telefon raqami (+998 90 ...)', right: 'Short Text (hisob-kitob qilinmaydi va 0/+ bor)' },
            { left: 'Talabaning shartnoma summasi', right: 'Currency / Decimal Number' },
            { left: 'Imtihondan o‘tdimi? (Ha/Yo‘q)', right: 'Boolean (Yes/No)' },
            { left: 'Har yangi qatorga avtomatik ID', right: 'AutoNumber' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Maʼlumotlar bazasi jadvalidagi bitta qator (masalan, bitta o‘quvchi haqidagi hamma maʼlumot) qanday ataladi?',
        options: ['Field (Maydon)', 'Record (Yozuv)', 'Primary Key', 'Query'],
        answer: 1,
        explanation: 'Qator — Record (yozuv), ustun esa — Field (maydon) deb ataladi.',
      },
      {
        prompt: 'Telefon raqami va pasport seriyasini saqlash uchun qaysi maʼlumot turi ENG TO‘G‘RI?',
        options: ['Integer Number', 'Short Text', 'Boolean', 'Date/Time'],
        answer: 1,
        explanation: 'Ularda boshlang‘ich nol, `+` yoki harflar bo‘lishi mumkin va arifmetik amal bajarilmaydi.',
      },
      {
        prompt: '"Foydalanuvchi faolmi?" (Ha yoki Yo‘q) ustuni uchun qaysi maʼlumot turi ishlatiladi?',
        options: ['Boolean (Yes/No)', 'AutoNumber', 'Long Text', 'Currency'],
        answer: 0,
        explanation: 'Boolean faqat ikkita qiymat (True/False yoki Yes/No) saqlab, minimal xotira egallaydi.',
      },
      {
        prompt: 'Short Text maydoni uchun `Field Size` ni 255 o‘rniga 20 qilib belgilashning foydasi nima?',
        options: [
          'Disk xotirasini tejaydi va keraksiz uzun matn kiritilishini cheklaydi',
          'Jadvalni o‘chiradi',
          'Sonlarni sanaga aylantiradi',
          'Internet tezligini oshiradi',
        ],
        answer: 0,
        explanation: 'Aniq belgilangan Field Size xotiradan samarali foydalanish va uzunlik validatsiyasini taʼminlaydi.',
      },
      {
        prompt: '`O‘qituvchi`, `Sinf` va `Fan` jadvallarining bir vaqtda bog‘lanishi qanday bog‘lanish turiga misol?',
        options: ['Birga-bir (1:1)', 'Uch tomonlama bog‘lanish (Ternary)', 'Chiziqli bog‘lanish', 'Bog‘lanishsiz'],
        answer: 1,
        explanation: 'Uchta mustaqil obyektning birlashishi uch tomonlama (Ternary) bog‘lanish deyiladi.',
      },
    ],
    teacherNotes: {
      method: 'Access yoki LibreOffice Base da "Telefon = Text vs Number" xatosini jonli ko‘rsatish.',
      timing: 'Kirish 5 daq, Turlar va Ternary 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: 'Jadval maydonlariga to‘g‘ri Data Type belgilash.',
      homework: '"Kutubxona" jadvali uchun 6 ta maydon, ularning Data Type va Field Size ni yozing.',
    },
  },
  {
    id: 'g10-l54',
    grade: 10,
    no: 54,
    part: '4-chorak',
    title: 'Birga-bir va birga-ko‘p bogʻlanish. Koʻpga-koʻp bogʻlanish. Bogʻlanishlar yaratish va foydalanish',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'DbLab', 'ER Diagramma'],
    objectives: [
      'O‘quvchi jadvallar orasidagi 3 ta bog‘lanish turini (**1:1 — Birga-bir**, **1:∞ — Birga-ko‘p**, **∞:∞ — Ko‘pga-ko‘p**) aniqlaydi.',
      'O‘quvchi **Ko‘pga-ko‘p (M:N)** bog‘lanishni bazada bevosita qurib bo‘lmasligini va uni oraliq bog‘lovchi jadval (**Junction Table**) orqali ikkita **1:∞** ga ajratishni biladi.',
    ],
    intro:
      'Bitta o‘quvchining bitta pasporti bo‘ladi (`1:1`), bitta o‘qituvchi ko‘plab sinflarda dars beradi (`1:∞`), lekin bitta o‘quvchi ko‘p fanlarga qatnashib, bitta fanda ko‘p o‘quvchi o‘qisa (`∞:∞`) — buni bazada qanday bog‘laymiz?',
    sections: [
      {
        heading: '3 ta asosiy bog‘lanish (Relationship / Cardinality) turi',
        body: '1) **Birga-bir (`1:1`)**: A jadvaldagi bitta yozuvga B jadvaldagi faqat bitta yozuv mos keladi (masalan, `Fuqaro ↔ Pasport`, `Maktab ↔ Direktor`).\n2) **Birga-ko‘p (`1:∞` yoki `1:M`)**: eng ko‘p uchraydigan bog‘lanish! A dagi bitta yozuv B dagi ko‘plab yozuvlarga tegishli, lekin B dagi har bir yozuv faqat bitta A ga tegishli (masalan, `Sinf ↔ O‘quvchilar`, `Mijoz ↔ Buyurtmalar`).\n3) **Ko‘pga-ko‘p (`∞:∞` yoki `M:N`)**: A dan bittasi ko‘p B ga, B dan bittasi ko‘p A ga mos (masalan, `O‘quvchi ↔ To‘garak`, `Kitob ↔ Muallif`).',
        example: 'Bitta `Mijoz` ko‘p `Buyurtma` berishi mumkin, ammo har bir `Buyurtma` faqat bitta `Mijoz` ga tegishli — bu `1:∞` dir.',
      },
      {
        heading: 'Ko‘pga-ko‘p bog‘lanishni yechish: Bog‘lovchi jadval (Junction Table)',
        body: 'Relyatsion maʼlumotlar bazasi **bevosita `∞:∞` bog‘lanishni qo‘llab-quvvatlamaydi**! Shuning uchun o‘rtaga 3-jadval (**Junction / Link Table**) qo‘yiladi va u bilan ikkita **`1:∞`** bog‘lanish tuziladi: `O‘quvchi (1) ── (∞) Qatnashuv (∞) ── (1) To‘garak`.',
        tip: 'Quyidagi `DbLab` o‘yinida obyekt juftliklari orasidagi to‘g‘ri bog‘lanish turini (`1:1`, `1:∞`, `∞:∞`) toping!',
      },
    ],
    keyTerms: [
      { term: 'Birga-bir (1:1)', definition: 'Birinchi jadvalning bitta yozuviga ikkinchi jadvalning faqat bitta yozuvi mos kelishi.' },
      { term: 'Birga-ko‘p (1:∞)', definition: 'Ota jadvalning bitta yozuviga bola jadvalning ko‘plab yozuvlari mos kelishi.' },
      { term: 'Ko‘pga-ko‘p (∞:∞)', definition: 'Ikkala tomondan ham ko‘plab yozuvlar o‘zaro bog‘lanishi (oraliq jadval talab qiladi).' },
      { term: 'Junction Table', definition: 'Ko‘pga-ko‘p bog‘lanishni ikkita birga-ko‘p bog‘lanishga ajratuvchi oraliq jadval.' },
    ],
    steps: [
      '1. `1:1`, `1:∞` va `∞:∞` misollarini har ikki tomondan o‘qib tekshiring.',
      '2. `DbLab` laboratoriyasida bog‘lanish turlarini belgilang.',
    ],
    practice: [
      {
        task: '`Shifokor` va `Bemor` jadvallari orasidagi bog‘lanish turini aniqlang va bazada qanday realizatsiya qilinishini tushuntiring.',
        expected: '`∞:∞` (bitta shifokor ko‘p bemorni ko‘radi, bitta bemor ham ko‘p shifokorga borishi mumkin). Bazada o‘rtaga `Qabul` (Appointment) junction jadvali qo‘yiladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l54-g1',
        num: '01',
        title: 'DbLab: Bog‘lanish turini aniqla',
        topic: '1:1, 1:∞ va ∞:∞ bog‘lanishlar',
        difficulty: 'O‘rta',
        engine: 'dblab',
        config: {
          prompt: 'Quyidagi jadval juftliklari orasida qaysi bog‘lanish turi mavjudligini tanlang:',
          tableName: 'Maktab_Boglanishlar',
          columns: [
            { name: 'ID', type: 'AutoNumber' },
            { name: 'Obyekt', type: 'Text' },
          ],
          rows: [
            { ID: 1, Obyekt: 'Maktab ↔ Sinf' },
            { ID: 2, Obyekt: 'O‘quvchi ↔ Pasport' },
            { ID: 3, Obyekt: 'O‘quvchi ↔ To‘garak' },
          ],
          mode: 'relation',
          relationPairs: [
            { pairLabel: 'O‘quvchi ↔ Shaxsiy Pasport', answer: '1:1' },
            { pairLabel: 'Ona Sinf ↔ O‘quvchilar', answer: '1:∞' },
            { pairLabel: 'O‘quvchi ↔ Fan / To‘garak', answer: '∞:∞' },
          ],
          hint: 'Har ikki tomondan so‘rang: "Bittasiga nechtasi to‘g‘ri keladi?"',
          explanation: 'O‘quvchida 1 ta pasport (1:1); 1 sinfda ko‘p o‘quvchi (1:∞); O‘quvchi ko‘p to‘garakka boradi, to‘garakda ko‘p o‘quvchi bor (∞:∞).',
        },
      },
    ],
    quiz: [
      {
        prompt: '`Davlat` va `Poytaxt` jadvallari o‘rtasida qanday bog‘lanish bo‘ladi?',
        options: ['1:1 (Birga-bir)', '1:∞ (Birga-ko‘p)', '∞:∞ (Ko‘pga-ko‘p)', 'Bog‘lanish yo‘q'],
        answer: 0,
        explanation: 'Har bir davlatning bitta rasmiy poytaxti, poytaxt esa bitta davlatga tegishli — `1:1`.',
      },
      {
        prompt: 'Bitta `Muallif` ko‘p `Kitob` yozadi, lekin har bir kitob faqat bitta muallifga tegishli bo‘lsa, bog‘lanish qanday?',
        options: ['1:1', '1:∞ (Birga-ko‘p)', '∞:∞', '0:1'],
        answer: 1,
        explanation: '1 muallif → ko‘p kitob: bu klassik `1:∞` bog‘lanish.',
      },
      {
        prompt: 'Relyatsion bazada `∞:∞` (Ko‘pga-ko‘p) bog‘lanishni qurish uchun nima qo‘shiladi?',
        options: [
          'Hech narsa qo‘shilmaydi',
          'O‘rtaga bog‘lovchi oraliq jadval (Junction Table) va ikkita 1:∞ bog‘lanish',
          'Barcha maʼlumot bitta katakka yoziladi',
          'Fayl CSV ga o‘tkaziladi',
        ],
        answer: 1,
        explanation: 'Junction Table `∞:∞` bog‘lanishni ikkita boshqariladigan `1:∞` bog‘lanishga aylantiradi.',
      },
      {
        prompt: 'Relyatsion maʼlumotlar bazalarida eng keng tarqalgan bog‘lanish turi qaysi?',
        options: ['1:1', '1:∞ (Birga-ko‘p)', '∞:∞', 'Teskarisi'],
        answer: 1,
        explanation: 'Deyarli barcha biznes tizimlari (Mijoz–Buyurtma, Sinf–O‘quvchi) `1:∞` bog‘lanishga quriladi.',
      },
      {
        prompt: '`Buyurtma` va `Mahsulot` orasidagi bog‘lanish (bitta buyurtmada ko‘p mahsulot, bitta mahsulot ko‘p buyurtmada) qaysi turda?',
        options: ['1:1', '1:∞', '∞:∞ (Ko‘pga-ko‘p)', 'Hech biri'],
        answer: 2,
        explanation: 'Ikkala tomondan ham ko‘plik bo‘lgani uchun `∞:∞`; yechimi — `Buyurtma_Tarkibi` jadvali.',
      },
    ],
    teacherNotes: {
      method: 'ER diagramma chizib `∞:∞` ni `Junction Table` orqali ikkita `1:∞` ga ajratishni doskada ko‘rsatish.',
      timing: 'Kirish 5 daq, 3 xil bog‘lanish 18 daq, DbLab 12 daq, Quiz 10 daq.',
      assessment: 'DbLab bog‘lanish topshirig‘i va `∞:∞` yechimi.',
      homework: '3 ta jadval juftligi uchun (`1:1`, `1:∞`, `∞:∞`) o‘z misolingizni yozing.',
    },
  },
  {
    id: 'g10-l55',
    grade: 10,
    no: 55,
    part: '4-chorak',
    title: 'Oddiy yozuvli va relyatsion maʼlumotlar bazasi oʻrtasidagi farq',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'Flat-File vs Relational'],
    objectives: [
      'O‘quvchi **Oddiy yozuvli (Flat-File)** baza (bitta yagona jadval) bilan **Relyatsion (Relational)** baza (o‘zaro bog‘langan bir nechta jadval) farqini tushunadi.',
      'O‘quvchi Flat-File bazadagi maʼlumotlar ortiqchaligi (**Redundancy**) va yangilash/o‘chirish **anomaliyalarini** tahlil qiladi.',
    ],
    intro:
      'Nima uchun Excel dagi bitta ulkan jadval o‘rniga Access da 4–5 ta alohida bog‘langan jadval yaratamiz? Bitta katta jadvalda minglab marta takrorlanadigan manzil va telefonlar qanday falokatga olib kelishini ko‘ramiz!',
    sections: [
      {
        heading: 'Oddiy yozuvli (Flat-File) baza muammolari',
        body: '**Flat-File Database** — barcha maʼlumot bitta yagona jadvalda saqlanadi (masalan, oddiy CSV yoki bitta Excel varag‘i). Kichik ro‘yxatlar uchun sodda va arzon bo‘lsa-da, katta hajmda 3 jiddiy muammo tug‘diradi:\n1) **Maʼlumot takrorlanishi (Data Redundancy)**: agar Ali 10 marta kitob olsa, uning ismi, sinfi va telefon raqami 10 marta qayta yoziladi — xotira isrof bo‘ladi.\n2) **Yangilash anomaliyasi (Update Anomaly)**: Ali telefonini almashtirsa, 10 ta qatordan 9 tasini tuzatib 1 tasini unutsangiz, bazada qarama-qarshilik (inconsistency) paydo bo‘ladi.\n3) **O‘chirish / Qo‘shish anomaliyasi**: birorta ham kitob olmagan yangi o‘quvchini faqat "Kitob ijarasi" jadvaliga qo‘shib bo‘lmaydi!',
        example: 'Flat-File da 100 ta buyurtmada mijoz manzili 100 marta takrorlanadi; Relyatsion bazada mijoz 1 marta `Mijozlar` jadvalida saqlanadi!',
      },
      {
        heading: 'Relyatsion (Relational) bazaning ustunliklari',
        body: '**Relyatsion baza** — maʼlumotlar mantiqiy mavzularga (O‘quvchilar, Kitoblar, Ijaralar) bo‘linib, kalitlar bilan bog‘lanadi. Natijada: takrorlanish keskin kamayadi, maʼlumot bir joydan yangilanadi, xotira tejaladi va xavfsizlik/huquqlarni har bir jadvalga alohida berish mumkin.',
        tip: 'Flat-File faqat juda kichik va oddiy ro‘yxatlar uchun; haqiqiy tizimlar esa DOIM relyatsion bo‘ladi!',
      },
    ],
    keyTerms: [
      { term: 'Flat-File Database', definition: 'Barcha maʼlumotlarni bitta yagona o‘zaro bog‘lanmagan jadvalda saqlovchi baza.' },
      { term: 'Relational Database', definition: 'Kalitlar yordamida o‘zaro bog‘langan bir nechta jadvaldan tashkil topgan baza.' },
      { term: 'Data Redundancy', definition: 'Bir xil maʼlumotning ko‘p marta keraksiz takrorlanishi.' },
      { term: 'Update Anomaly', definition: 'Takrorlangan maʼlumotning faqat bir qismini yangilab, qolganida eski xato qiymat qolib ketishi.' },
    ],
    steps: [
      '1. Flat-File ning 3 ta kamchiligini (Redundancy, Update/Delete anomaliyalari) tahlil qiling.',
      '2. Relyatsion bazaning 4 afzalligini ayting.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Maktab oshxonasida 5 ta mahsulot ro‘yxatini saqlash uchun Flat-File yetarlimi? 2000 o‘quvchili maktab kutubxonasi uchun-chi?',
        expected: '5 ta mahsulot uchun oddiy Flat-File (1 ta jadval) tez va yetarli; 2000 o‘quvchili kutubxona uchun esa albatta Relyatsion baza (`O‘quvchilar`, `Kitoblar`, `Ijara`) shart.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l55-g1',
        num: '01',
        title: 'Flat-File vs Relyatsion',
        topic: 'Maʼlumotlar bazasi arxitekturasi',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir tushunchani to‘g‘ri taʼrif yoki baza turiga bog‘lang:',
          pairs: [
            { left: 'Flat-File baza', right: 'Hamma maʼlumot bitta jadvalda saqlanadi, takrorlanish ko‘p' },
            { left: 'Relyatsion baza', right: 'Bir nechta bog‘langan jadval, kalitlar va kam takrorlanish' },
            { left: 'Data Redundancy', right: 'Bir xil manzil yoki telefonning yuzlab qatorda qayta yozilishi' },
            { left: 'Update Anomaly', right: 'Bir joyda o‘zgargan telefon raqam boshqa qatorlarda eski holida qolishi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Oddiy yozuvli (Flat-File) baza nimadan iborat?',
        options: [
          'O‘zaro bog‘langan 10 ta jadvaldan',
          'Barcha maʼlumotlar bitta yagona jadvalda (masalan, bitta CSV faylda) saqlanishidan',
          'Faqat rasmlardan',
          'SQL serverlar klasteridan',
        ],
        answer: 1,
        explanation: 'Flat-File bazada jadvallar o‘rtasida bog‘lanish bo‘lmaydi, hamma narsa bir jadvalda turadi.',
      },
      {
        prompt: 'Bir xil maʼlumotning ko‘plab qatorlarda keraksiz qayta-qayta takrorlanishi nima deyiladi?',
        options: ['Data Integrity', 'Data Redundancy (Ortiqchalik)', 'Validation', 'Encryption'],
        answer: 1,
        explanation: 'Data Redundancy xotirani band qiladi va xatoliklar manbaiga aylanadi.',
      },
      {
        prompt: 'O‘qituvchi familiyasi o‘zgarganda, Flat-File jadvalda 50 ta qatordan 49 tasi yangilanib 1 tasi eski qolib ketsa, bu qaysi muammo?',
        options: ['Yangilash anomaliyasi (Update Anomaly)', 'Tezlik oshishi', 'Normalizatsiya', 'Avto-saqlash'],
        answer: 0,
        explanation: 'Maʼlumot ziddiyatiga olib keluvchi qisman yangilanish Update Anomaly deyiladi.',
      },
      {
        prompt: 'Relyatsion bazada yangi mijozning telefoni o‘zgarsa, nechta qatorda tahrirlanadi?',
        options: ['Barcha 500 ta buyurtma qatorida', 'Faqat `Mijozlar` jadvalidagi yagona 1 ta qatorda', 'Hech qayerda', 'Yarim qatorlarda'],
        answer: 1,
        explanation: 'Mijoz maʼlumoti alohida jadvalda bir marta saqlangani uchun faqat 1 joyda yangilanadi.',
      },
      {
        prompt: 'Qaysi vaziyatda oddiy Flat-File baza afzalroq bo‘lishi mumkin?',
        options: [
          'Katta bank tizimi uchun',
          'Juda kichik, kamdan-kam o‘zgaradigan bir martalik oddiy ro‘yxat uchun',
          'Millionlab tranzaksiyalar uchun',
          'Universitet tizimi uchun',
        ],
        answer: 1,
        explanation: 'Kichik oddiy ro‘yxatlar uchun relyatsion baza qurish ortiqcha murakkablik bo‘ladi.',
      },
    ],
    teacherNotes: {
      method: 'Flat-File dagi "Ali telefonini 10 qatorda o‘zgartirish" muammosini relyatsion 2 jadval bilan taqqoslash.',
      timing: 'Kirish 5 daq, Flat vs Relational 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: 'Anomaliya turlarini misol bilan tushuntirish.',
      homework: 'Flat-File dan Relyatsion bazaga ajratiladigan 1 ta jadval misolini chizing.',
    },
  },
  {
    id: 'g10-l56',
    grade: 10,
    no: 56,
    part: '4-chorak',
    title: 'Maʼlumotlarni import qilish. Relyatsion maʼlumotlar bazasini yaratish.',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'LibreOffice Base', 'CSV Import'],
    objectives: [
      'O‘quvchi tashqi CSV/Excel fayllaridan maʼlumotlar bazasi jadvallariga **Import** qilish bosqichlarini biladi.',
      'O‘quvchi jadvallarni yaratib, har bir ustunga kalit va mos maʼlumot turini berib relyatsion baza qurish tartibini bajaradi.',
    ],
    intro:
      '1000 ta o‘quvchining ismini bazaga qo‘lda bittalab kiritishga bir hafta ketadi! Tayyor Excel yoki `.csv` fayldan maʼlumotlarni to‘g‘ridan-to‘g‘ri bazaga yuklash (**Import**) esa bor-yo‘g‘i 1 daqiqa vaqt oladi.',
    sections: [
      {
        heading: 'Tashqi fayldan jadvallarga Import qilish qoidalari',
        body: 'Access yoki Base da `External Data → Import` orqali `.csv`, `.txt` yoki `.xlsx` fayllar yuklanadi. Muhim bosqichlar:\n1) **First Row Contains Column Headings**: birinchi qator sarlavha ekanini belgilash.\n2) **Data Type tayinlash**: har bir ustun turini tekshirish (masalan, ID → Integer, Telefon → Short Text, Sana → Date).\n3) **Primary Key tanlash**: mavjud noyob ID ustunini belgilash yoki yangi `AutoNumber` yaratish.\n4) **Format mosligi**: sana formati (`DD.MM.YYYY` vs `MM/DD/YYYY`) va kodirovka (`UTF-8`) mos bo‘lmasa import xatoliklari (`ImportErrors` jadvali) chiqadi!',
        example: '`Students.csv` faylini import qilishda `First Row Contains Column Headings` belgilanmasa, "FIO" so‘zi oddiy o‘quvchi qatoriga tushib qoladi!',
      },
      {
        heading: 'Relyatsion bazani bosqichma-bosqich yaratish',
        body: 'Import qilingan jadvallar (`O‘quvchilar`, `Kurslar`, `Ro‘yxatdan_Otish`) tayyor bo‘lgach: 1) Har bir jadvalda **Primary Key** tekshiriladi; 2) `Database Tools → Relationships` oynasida jadvallar **Foreign Key** orqali bog‘lanadi; 3) **Referential Integrity** yoqiladi.',
        tip: 'Importdan oldin Excel/CSV jadvalida bo‘sh ustunlar va formulalar xatolarini (`#N/A`) tozalab olish shart!',
      },
    ],
    keyTerms: [
      { term: 'Import Wizard', definition: 'CSV, TXT yoki Excel maʼlumotlarini bosqichma-bosqich bazaga yuklovchi yordamchi oyna.' },
      { term: 'Column Headings', definition: 'Birinchi qatorni jadval maydonlari nomi sifatida qabul qilish opsiyasi.' },
      { term: 'ImportErrors', definition: 'Import paytida maʼlumot turi mos kelmagan qatorlarni ko‘rsatuvchi tizim jadvali.' },
      { term: 'Append vs New Table', definition: 'Yuklanayotgan qatorlarni yangi jadvalga yozish (New) yoki mavjud jadval oxiriga qo‘shish (Append).' },
    ],
    steps: [
      '1. CSV faylni bazaga import qilishning 5 bosqichini tartiblang.',
      '2. Sana va UTF-8 mosligini tekshirish sababini tushuning.',
      '3. Quyidagi tartiblash o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'CSV fayldan bazaga import qilinganda `ImportErrors` jadvali paydo bo‘ldi va 5 ta sana bo‘sh tushdi. Buning sababi nima bo‘lishi mumkin?',
        expected: 'CSV dagi sana formati (masalan, `25.03.2026`) bilan bazada tanlangan sana formati (`MM/DD/YYYY`) mos kelmagan.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l56-g1',
        num: '01',
        title: 'Bazaga Import qilish tartibi',
        topic: 'Relyatsion baza yaratish',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Tashqi CSV fayldan maʼlumotlar bazasiga jadval import qilish bosqichlarini to‘g‘ri tartiblang:',
          items: [
            'Tashqi CSV fayl manzilini ko‘rsatib Import Wizard ni ochish',
            'Ajratgichni (vergul/nuqtali vergul) va UTF-8 kodirovkasini tanlash',
            '"First Row Contains Column Headings" belgisini yoqish',
            'Har bir maydonning Data Type va Primary Key ustunini belgilash',
            'Jadvallarni Relationships oynasida o‘zaro bog‘lash',
          ],
          hint: 'Avval manba fayl va kodirovka tanlanadi, oxirida esa jadvallar o‘zaro bog‘lanadi.',
          explanation: 'Manba → Ajratgich/UTF-8 → Sarlavhalar → Turlar/Kalitlar → Relationships.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'CSV faylini bazaga yuklayotganda 1-qator oddiy yozuv bo‘lib qolmasdan ustun nomi bo‘lishi uchun qaysi belgi yoqiladi?',
        options: [
          'Delete First Row',
          'First Row Contains Column Headings',
          'Encrypt Table',
          'AutoNumber Only',
        ],
        answer: 1,
        explanation: 'Ushbu opsiya 1-qatorni jadval maydonlari sarlavhasiga aylantiradi.',
      },
      {
        prompt: 'Mavjud jadvaldagi maʼlumotlar saqlanib qolib, yangi qatorlarni uning davomidan qo‘shib yuklash rejimi qaysi?',
        options: ['Overwrite', 'Append', 'Delete', 'Export'],
        answer: 1,
        explanation: 'Append mavjud jadval tuzilmasiga yangi qatorlarni qo‘shadi.',
      },
      {
        prompt: 'Import vaqtida bir nechta qatorning maʼlumot turi mos kelmagani haqida bazada avtomatik qaysi jadval hosil bo‘ladi?',
        options: ['SuccessLog', 'ImportErrors', 'BackupTable', 'Users'],
        answer: 1,
        explanation: 'Access muammoli qator va maydonlarni `ImportErrors` jadvalida qayd etadi.',
      },
      {
        prompt: 'Import qilishdan OLDIN tashqi Excel jadvalini nima qilish tavsiya etiladi?',
        options: [
          'Qatorlarni birlashtirish (Merge)',
          'Bo‘sh ustunlar va formula xatolarini tozalash',
          'Faylni rasmga aylantirish',
          'Parol qo‘yish',
        ],
        answer: 1,
        explanation: 'Toza va tuzilmaviy jadval importda xatosiz yuklanadi.',
      },
      {
        prompt: 'Yuklangan ikkita jadvalni (`Mijozlar` va `Buyurtmalar`) yagona relyatsion tizimga birlashtirish qayerda bajariladi?',
        options: ['Relationships oynasida', 'WordArt menyusida', 'Page Setup da', 'Macro Recorder da'],
        answer: 0,
        explanation: 'Relationships oynasida jadvallar kalitlari o‘zaro bog‘lanadi.',
      },
    ],
    teacherNotes: {
      method: 'Tayyor `o‘quvchilar.csv` faylini import qilishda "Column Headings" unutilsa nima bo‘lishini ko‘rsatish.',
      timing: 'Kirish 5 daq, Import bosqichlari 18 daq, Order o‘yini 12 daq, Quiz 10 daq.',
      assessment: 'Import bosqichlari va `ImportErrors` sababini aniqlash.',
      homework: 'Ikki jadvaldan (`Kitoblar.csv` va `Mualliflar.csv`) relyatsion baza loyihasini tuzib chiqing.',
    },
  },
  {
    id: 'g10-l57',
    grade: 10,
    no: 57,
    part: '4-chorak',
    title: 'Kalitlar. Murakkab kalit. Tashqi kalit.',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'Primary Key', 'Foreign Key', 'Composite Key'],
    objectives: [
      'O‘quvchi **Birlamchi kalit (Primary Key)**, **Murakkab/Tarkibiy kalit (Composite Key)** va **Tashqi kalit (Foreign Key)** tushunchalarini aniq farqlaydi.',
      'O‘quvchi har bir kalit turining qatʼiy qoidalarini (takrorlanmaslik, `NULL` bo‘lmaslik, maʼlumot turi mosligi) biladi.',
    ],
    intro:
      'Sinfda ikkita "Azizbek Karimov" bo‘lsa, kompyuter ularni qanday ajratadi? Buning uchun har bir yozuvga **noyob kalit** beriladi! Bugun **Primary Key**, **Composite Key** va **Foreign Key** sirlarini ochamiz.',
    sections: [
      {
        heading: 'Birlamchi kalit (Primary Key — PK) va Nomzod kalit',
        body: '**Primary Key (PK)** — jadvaldagi har bir qatorni (yozuvni) **yagona va noyob** tarzda aniqlovchi maydon. 2 ta qatʼiy qoidasi bor: 1) **Takrorlanmaydi (Unique)**; 2) **Bo‘sh qoldirilmaydi (`NOT NULL`)**.\nMasalan, `Ism` PK bo‘la olmaydi (ikki kishining ismi bir xil bo‘lishi mumkin!), lekin `Talaba_ID`, `PINFL` yoki `Pasport_Raqami` PK bo‘la oladi.',
        example: '`Talaba_ID = 1042` — butun bazada faqat bitta talabaga tegishli!',
      },
      {
        heading: 'Murakkab kalit (Composite Key) va Tashqi kalit (Foreign Key — FK)',
        body: '• **Murakkab kalit (Composite Key)**: bitta ustunning o‘zi noyob bo‘lmaganda, **2 yoki undan ortiq ustun birgalikda** Primary Key vazifasini bajaradi! Masalan, `Dars_Jadvali` da `(SinfID, Kun, Soat)` uchalasi birga noyobdir.\n• **Tashqi kalit (Foreign Key — FK)**: boshqa jadvalning **Primary Key** iga ishora qiluvchi maydon — u jadvallarni bog‘laydi! FK takrorlanishi MUMKIN (chunki `1:∞` da bitta sinfda 30 ta o‘quvchining `SinfID` si bir xil bo‘ladi), lekin uning **Data Type** i ota jadvaldagi PK bilan bir xil bo‘lishi shart (`AutoNumber` ↔ `Number Long Integer`).',
        tip: 'Esda tuting: PK — takrorlanmaydi (`1` tomon); FK — ko‘p marta takrorlanishi mumkin (`∞` tomon)!',
      },
    ],
    keyTerms: [
      { term: 'Primary Key (PK)', definition: 'Jadvaldagi har bir yozuvni noyob belgilaydigan, bo‘sh bo‘lmaydigan asosiy kalit.' },
      { term: 'Composite Key', definition: 'Yozuvni noyob aniqlash uchun birlashtirilgan ikki yoki undan ortiq maydondan iborat kalit.' },
      { term: 'Foreign Key (FK)', definition: 'Boshqa jadvalning Primary Key iga bog‘lanib, jadvallar aloqasini taʼminlovchi maydon.' },
      { term: 'Candidate Key', definition: 'Primary Key sifatida tanlanishi mumkin bo‘lgan barcha noyob maydonlar.' },
    ],
    steps: [
      '1. Primary, Composite va Foreign Key farqlarini ko‘rib chiqing.',
      '2. `AutoNumber` PK ga `FK` da qaysi tur mos kelishini yodlang (`Number / Long Integer`).',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: '`Buyurtma_Tarkibi(BuyurtmaID, MahsulotID, Soni)` jadvalida nega alohida `BuyurtmaID` yoki `MahsulotID` ning o‘zi Primary Key bo‘la olmaydi?',
        expected: 'Bitta buyurtmada 5 ta mahsulot bo‘lsa `BuyurtmaID` 5 marta takrorlanadi; bitta mahsulot ko‘p buyurtmada bo‘lsa `MahsulotID` ham takrorlanadi. Shuning uchun `(BuyurtmaID + MahsulotID)` **Composite Key** qilinadi!',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l57-g1',
        num: '01',
        title: 'Kalitlar arxitekturasi',
        topic: 'PK, Composite va FK',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Kalit turini uning aniq xususiyati yoki misoliga bog‘lang:',
          pairs: [
            { left: 'Primary Key (PK)', right: 'Noyob, takrorlanmaydigan va bo‘sh bo‘lmaydigan asosiy kalit' },
            { left: 'Foreign Key (FK)', right: 'Boshqa jadval PK iga ishora qiluvchi va takrorlanishi mumkin bo‘lgan kalit' },
            { left: 'Composite Key', right: 'Birgalikda noyoblikni taʼminlovchi ikki ustun (masalan, BuyurtmaID+TovarID)' },
            { left: 'AutoNumber PK ↔ FK turi', right: 'Number (Long Integer) maʼlumot turi bilan bog‘lanadi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Nima uchun `Familiya` ustunini Primary Key qilib tanlash xato hisoblanadi?',
        options: [
          'Matn juda uzun bo‘lgani uchun',
          'Bir nechta odamning familiyasi bir xil (takrorlanuvchi) bo‘lishi mumkinligi uchun',
          'Familiya har doim bo‘sh bo‘lgani uchun',
          'Matn ustuni kalit bo‘la olmagani uchun',
        ],
        answer: 1,
        explanation: 'Primary Key mutlaqo takrorlanmas (Unique) bo‘lishi shart.',
      },
      {
        prompt: 'Ikki yoki undan ortiq ustundan tashkil topgan birlamchi kalit qanday nomlanadi?',
        options: ['Foreign Key', 'Composite Key (Murakkab kalit)', 'Candidate Key', 'Secondary Key'],
        answer: 1,
        explanation: 'Composite Key bir nechta ustunning birikmasidan yasaladi.',
      },
      {
        prompt: '`O‘quvchilar` jadvalidagi `SinfID` ustuni `Sinflar` jadvalidagi `SinfID` (PK) bilan bog‘langan. `O‘quvchilar.SinfID` qanday kalit?',
        options: ['Primary Key', 'Foreign Key (Tashqi kalit)', 'Composite Key', 'AutoNumber'],
        answer: 1,
        explanation: 'Boshqa jadval PK iga bog‘langan ustun Foreign Key deyiladi.',
      },
      {
        prompt: 'Ota jadvalda PK `AutoNumber` turida bo‘lsa, bola jadvaldagi Foreign Key qaysi turda bo‘lishi shart?',
        options: ['Short Text', 'Number (Long Integer)', 'Boolean', 'Date/Time'],
        answer: 1,
        explanation: 'AutoNumber aslida Long Integer sonidir, shuning uchun FK ham `Number (Long Integer)` bo‘lishi kerak.',
      },
      {
        prompt: 'Primary Key haqidagi qaysi fikr XATO?',
        options: [
          'Hech qachon takrorlanmaydi',
          'Qiymati bo‘sh (`NULL`) bo‘lishi mumkin',
          'Har bir jadvalda yozuvni aniqlaydi',
          'Ko‘pincha ID maydoni bo‘ladi',
        ],
        answer: 1,
        explanation: 'Primary Key hech qachon NULL (bo‘sh) bo‘la olmaydi!',
      },
    ],
    teacherNotes: {
      method: '`BuyurtmaID + MahsulotID` misolida Composite Key nima uchun zarurligini ko‘rsating.',
      timing: 'Kirish 5 daq, PK/Composite/FK 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: 'PK va FK larni to‘g‘ri ajratish va maʼlumot turini moslash.',
      homework: 'Maktabingiz dars jadvali uchun `Composite Key` qanday maydonlardan iborat bo‘lishini yozing.',
    },
  },
  {
    id: 'g10-l58',
    grade: 10,
    no: 58,
    part: '4-chorak',
    title: 'Bogʻlanishlar yaxlitligi. Ma’lumotlar validatsiyasi va verifikatsiyasi',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'Referential Integrity', 'Validation Rule'],
    objectives: [
      'O‘quvchi **Bog‘lanishlar yaxlitligi (Referential Integrity)** tushunchasini va uning "yetim yozuvlar" (**Orphan Records**) paydo bo‘lishini qanday to‘sishini tushunadi.',
      'O‘quvchi Access da maydon darajasidagi validatsiya (**Validation Rule / Validation Text**), `Cascade Update` va `Cascade Delete` funksiyalarini biladi.',
    ],
    intro:
      'Tasavvur qiling: `Sinflar` jadvalidan `10-A` ni o‘chirib yubordingiz, lekin `O‘quvchilar` jadvalida `10-A` ga tegishli 30 ta o‘quvchi "havoda osilib" qoldi! Bunday xavfli "yetim yozuvlar" ni **Referential Integrity (Bog‘lanishlar yaxlitligi)** mutlaqo to‘xtatadi!',
    sections: [
      {
        heading: 'Bog‘lanishlar yaxlitligi (Referential Integrity)',
        body: '**Referential Integrity** yoqilganda baza 3 qatʼiy qoidani nazorat qiladi:\n1) Bola jadvalga (`O‘quvchilar`) ota jadvalda (`Sinflar`) **mavjud bo‘lmagan** `SinfID` ni kiritib bo‘lmaydi!\n2) Agar bola jadvalda unga bog‘langan yozuvlar bo‘lsa, ota jadvaldan yozuvni bexosdan **o‘chirib** bo‘lmaydi.\n3) **Cascade Update Related Fields**: ota jadvaldagi PK o‘zgarsa, bola jadvaldagi barcha FK lar avtomatik yangilanadi. **Cascade Delete Related Records**: ota yozuv o‘chirilganda unga bog‘liq bola yozuvlar ham o‘chadi (juda ehtiyotkorlik bilan ishlatiladi!).',
        example: 'Bazadagi mavjud sinflar ID si `1, 2, 3`. Agar `SinfID = 99` deb yangi o‘quvchi qo‘shmoqchi bo‘lsangiz, Referential Integrity xato berib to‘xtatadi!',
      },
      {
        heading: 'Access da Validatsiya va Verifikatsiya',
        body: '• **Validation Rule**: maydonga kiritiladigan qiymat sharti (masalan, `>=1 AND <=5` yoki `"Erkak" Or "Ayol"`). **Validation Text**: shart buzilganda chiqadigan tushunarli ogohlantirish.\n• **Input Mask**: kiritish shabloni (masalan, telefon `(+998) 00-000-00-00`).\n• **Verifikatsiya**: bazaga kiritishda asl hujjat bilan **vizual tekshirish** yoki **ikki marta kiritish**.',
        tip: 'Validatsiya — qoida (`0..100` oraliq), Referential Integrity — jadvallararo kalit mosligi!',
      },
    ],
    keyTerms: [
      { term: 'Referential Integrity', definition: 'Har bir Foreign Key haqiqiy mavjud Primary Key ga ishora qilishini taʼminlovchi yaxlitlik qoidasi.' },
      { term: 'Orphan Record (Yetim yozuv)', definition: 'Ota yozuvi o‘chirilgani sababli mavjud bo‘lmagan kalitga bog‘lanib qolgan yozuv.' },
      { term: 'Validation Rule / Text', definition: 'Access maydoniga qo‘yiladigan tekshirish sharti va xato matni.' },
      { term: 'Cascade Delete', definition: 'Ota yozuv o‘chirilganda unga bog‘liq barcha bola yozuvlarni avtomatik o‘chirish.' },
    ],
    steps: [
      '1. Referential Integrity ning 2 ta asosiy taqiqini yodlang.',
      '2. `Validation Rule` va `Input Mask` farqini ayting.',
      '3. Quyidagi To‘g‘ri/Noto‘g‘ri o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Mijozlar jadvalida `ID=5` mijozning 12 ta buyurtmasi bor. Referential Integrity yoqilgan holda `ID=5` mijozni to‘g‘ridan-to‘g‘ri o‘chirib bo‘ladimi?',
        expected: 'Yo‘q (`Cascade Delete` yoqilmagan bo‘lsa), chunki 12 ta buyurtma yetim yozuv (Orphan Record) bo‘lib qoladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l58-g1',
        num: '01',
        title: 'Yaxlitlik va Validatsiya nazorati',
        topic: 'Referential Integrity qoidalari',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Bog‘lanishlar yaxlitligi va validatsiyaga oid jumlalarni baholang:',
          statements: [
            { text: 'Referential Integrity mavjud bo‘lmagan SinfID ga yangi o‘quvchi kiritishni to‘xtatadi.', isTrue: true, explanation: 'Har bir tashqi kalit ota jadvalda haqiqiy mavjud birlamchi kalitga mos bo‘lishi shart.' },
            { text: 'Yetim yozuv (Orphan Record) — ota yozuvi o‘chib ketib, aloqasi uzilgan bola yozuvdir.', isTrue: true, explanation: 'Referential Integrity aynan yetim yozuvlar paydo bo‘lishining oldini oladi.' },
            { text: 'Validation Rule bazadagi telefon raqamining haqiqatan ham ishlayotganini tekshiradi.', isTrue: false, explanation: 'Validation faqat format/qoidani tekshiradi; haqiqatga mosligini Verifikatsiya aniqlaydi.' },
            { text: 'Cascade Update ota jadvaldagi PK o‘zgarganda bola jadvaldagi FK larni avtomatik yangilaydi.', isTrue: true, explanation: 'Cascade Update bog‘langan kalitlarni sinxron o‘zgartiradi.' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Bog‘lanishlar yaxlitligi (Referential Integrity) ning asosiy maqsadi nima?',
        options: [
          'Jadvallarni chiroyli ranglash',
          'Yetim yozuvlar (Orphan Records) va mavjud bo‘lmagan kalitga bog‘lanishning oldini olish',
          'Fayl hajmini kichraytirish',
          'SQL so‘rovlarni sekinlashtirish',
        ],
        answer: 1,
        explanation: 'Referential Integrity tashqi kalitlar doimo haqiqiy mavjud birlamchi kalitga ishora qilishini kafolatlaydi.',
      },
      {
        prompt: 'Access da maydonga kiritiladigan baho `2` dan `5` gacha bo‘lishi uchun `Validation Rule` qanday yoziladi?',
        options: ['>=2 And <=5', '=2+5', '2:5', 'Between 10 And 20'],
        answer: 0,
        explanation: '`>=2 And <=5` (yoki `Between 2 And 5`) 2 dan 5 gacha qiymatga ruxsat beradi.',
      },
      {
        prompt: 'Ota yozuv o‘chirilganda unga bog‘langan barcha bola yozuvlarni avtomatik o‘chirib yuboradigan xavfli funksiya qaysi?',
        options: ['Cascade Update', 'Cascade Delete', 'Input Mask', 'Required'],
        answer: 1,
        explanation: 'Cascade Delete bog‘liq barcha qatorlarni ham o‘chiradi, shuning uchun ehtiyotkorlik bilan yoqiladi.',
      },
      {
        prompt: 'Telefon raqamini `(90) 123-45-67` ko‘rinishida aniq shablon bilan kiritishga majburlovchi Access xususiyati qaysi?',
        options: ['Input Mask', 'Lookup Wizard', 'Default Value', 'Caption'],
        answer: 0,
        explanation: 'Input Mask foydalanuvchiga tayyor shablon bo‘ylab kiritishni taʼminlaydi.',
      },
      {
        prompt: 'Validatsiya qoidasi buzilganda foydalanuvchiga chiqadigan tushunarli ogohlantirish matni qayerga yoziladi?',
        options: ['Field Size', 'Validation Text', 'Format', 'Indexed'],
        answer: 1,
        explanation: 'Validation Text xato ro‘y berganda ekranda ko‘rinadigan xabarni belgilaydi.',
      },
    ],
    teacherNotes: {
      method: 'Referential Integrity yoqilgan va yoqilmagan bazada "mavjud bo‘lmagan ID" kiritib ko‘rsatish.',
      timing: 'Kirish 5 daq, Referential Integrity 18 daq, TrueFalse 12 daq, Quiz 10 daq.',
      assessment: 'Orphan Record va Validation Rule/Text ni to‘g‘ri qo‘llash.',
      homework: 'Kutubxona bazasida `Ijara.KitobID` uchun Referential Integrity nima uchun shartligini yozing.',
    },
  },
  {
    id: 'g10-l59',
    grade: 10,
    no: 59,
    part: '4-chorak',
    title: 'Qidirish amallari. Murakkab querylar. Ichki va jamlanma querylar.',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'SQL', 'DbLab'],
    objectives: [
      'O‘quvchi oddiy va murakkab **Query (So‘rov)** larni (`AND`, `OR`, `NOT`, `LIKE "*..."`, `Between`) yozadi.',
      'O‘quvchi **Jamlanma so‘rovlar (Summary/Aggregate Queries**: `SUM`, `COUNT`, `AVG`, `GROUP BY`) hamda **Ichki so‘rovlar (Subquery / Crosstab Query)** ishlash mantiqini tushunadi.',
    ],
    intro:
      'Jadvalda 50 000 ta yozuv bor, bizga esa faqat "10-sinf va balli 85 dan yuqori o‘quvchilar" yoki "Har bir sinfning o‘rtacha bali" kerak! Buni maʼlumotlar bazasida **So‘rovlar (Queries)** bajaradi.',
    sections: [
      {
        heading: 'Oddiy va Murakkab Querylar (Criteria)',
        body: 'So‘rovlar (`Select Query` / SQL `SELECT ... WHERE ...`) maʼlum shart bo‘yicha yozuvlarni saralab chiqaradi:\n• **`AND`**: ikkala shart ham bajarilishi kerak (`Sinf = "10-A" AND Ball >= 86`). Access QBE panjarasida bir qatorga yoziladi!\n• **`OR`**: kamida bittasi bajarilishi kerak (`Shahar = "Toshkent" OR Shahar = "Samarqand"`). Access QBE da *alohida `Or:` qatoriga* yoziladi.\n• **`LIKE "A*"`** (SQL da `"A%"`): "A" harfi bilan boshlanadigan barcha nomlarni izlash.',
        example: '`Between #01/01/2026# And #31/03/2026#` — faqat 1-chorak sanalarini oladi.',
      },
      {
        heading: 'Jamlanma (Summary/Totals) va Ichki (Subquery) so‘rovlar',
        body: '• **Jamlanma Query (`Totals` Σ / SQL `GROUP BY`)**: qatorlarni toifa bo‘yicha guruhlab **`COUNT`**, **`SUM`**, **`AVG`**, **`MIN`**, **`MAX`** hisoblaydi (masalan, har bir sinfda nechta o‘quvchi bor).\n• **Ichki so‘rov (Nested / Subquery)**: bir so‘rov natijasidan ikkinchi so‘rov ichida shart sifatida foydalanish (masalan, "O‘rtacha balldan yuqori olgan o‘quvchilar": avval ichki query `AVG(Ball)` ni topadi, tashqi query undan kattalarini chiqaradi!).',
        tip: 'Quyidagi `DbLab` laboratoriyasida jonli jadval ustida `Query` tuzib ko‘ring!',
      },
    ],
    keyTerms: [
      { term: 'Query (So‘rov)', definition: 'Bazadan belgilangan mezon bo‘yicha maʼlumot qidirish, filtrlash va hisoblash vositasi.' },
      { term: 'AND / OR operatorlari', definition: 'Ikkala shartni (AND) yoki kamida bitta shartni (OR) birlashtiruvchi mantiqiy operatorlar.' },
      { term: 'Summary Query (GROUP BY)', definition: 'Yozuvlarni guruhlab SUM, COUNT, AVG hisoblovchi jamlanma so‘rov.' },
      { term: 'Subquery (Ichki so‘rov)', definition: 'Boshqa so‘rovning shart qismi ichiga joylashtirilgan yordamchi so‘rov.' },
    ],
    steps: [
      '1. `AND` va `OR` shartlarining Access QBE dagi joylashuv farqini eslang.',
      '2. `DbLab` da `Ball > 80` so‘rovini ishga tushiring.',
    ],
    practice: [
      {
        task: 'Access so‘rovlar konstruktorida (QBE) `Shahar` qatoriga `"Buxoro"` va `Ball` qatoriga `>85` bir xil qatorga yozilsa, natija qanday bo‘ladi?',
        expected: 'Bu **`AND`** mantiqidir: ham Buxorolik, ham balli 85 dan katta bo‘lgan o‘quvchilargina chiqadi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l59-g1',
        num: '01',
        title: 'DbLab: Aʼlochilarni qidirish so‘rovi',
        topic: 'Maʼlumotlar bazasi so‘rovlari',
        difficulty: 'O‘rta',
        engine: 'dblab',
        config: {
          prompt: 'O‘quvchilar jadvalidan balli 85 dan katta (`Ball > 85`) bo‘lgan o‘quvchilarni topuvchi Query ni tuzing:',
          tableName: 'Oquvchilar',
          columns: [
            { name: 'ID', type: 'Number' },
            { name: 'Ism', type: 'Text' },
            { name: 'Sinf', type: 'Text' },
            { name: 'Ball', type: 'Number' },
          ],
          rows: [
            { ID: 1, Ism: 'Azizbek', Sinf: '10-A', Ball: 92 },
            { ID: 2, Ism: 'Dilnoza', Sinf: '10-B', Ball: 78 },
            { ID: 3, Ism: 'Sarvar', Sinf: '10-A', Ball: 88 },
            { ID: 4, Ism: 'Madina', Sinf: '10-B', Ball: 85 },
            { ID: 5, Ism: 'Jasur', Sinf: '10-A', Ball: 95 },
          ],
          mode: 'query',
          targetField: 'Ball',
          targetOp: '>',
          targetValue: '85',
          expectedRowCount: 3,
          hint: 'Maydon: `Ball`, Operator: `>`, Qiymat: `85` ni tanlang.',
          explanation: '92, 88 va 95 — jami 3 nafar o‘quvchining balli 85 dan qatʼiyan katta (Madina 85 ga teng bo‘lgani uchun kirmaydi!).',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Access QBE panjarasida `OR` shartini berish uchun ikkinchi mezon qayerga yoziladi?',
        options: [
          'Birinchi mezon bilan bitta katakka',
          'Pastdagi alohida "Or:" qatoriga',
          'Jadval nomiga',
          'Maydon turiga',
        ],
        answer: 1,
        explanation: 'Bir qator — AND, pastdagi alohida `Or:` qatori esa — OR shartini bildiradi.',
      },
      {
        prompt: 'Har bir bo‘limdagi xodimlar soni va o‘rtacha maoshini hisoblash uchun qaysi query turi ishlatiladi?',
        options: ['Simple Select Query', 'Jamlanma (Summary / Totals) Query', 'Delete Query', 'Update Query'],
        answer: 1,
        explanation: 'Totals (Σ) / GROUP BY jamlanma so‘rovi guruhlar bo‘yicha COUNT, SUM, AVG hisoblaydi.',
      },
      {
        prompt: 'Access da "S" harfi bilan boshlanuvchi barcha shaharlarni topish kriteriyasi qaysi?',
        options: ['="S"', 'Like "S*"', '> "S"', 'Not "S"'],
        answer: 1,
        explanation: '`Like "S*"` da `*` yulduzcha istalgan davomiy harflarni bildiradi.',
      },
      {
        prompt: 'Bir so‘rovning natijasini ikkinchi so‘rov ichida shart sifatida ishlatish nima deyiladi?',
        options: ['Crosstab Query', 'Ichki so‘rov (Subquery / Nested Query)', 'Append Query', 'Table Design'],
        answer: 1,
        explanation: 'Ichki so‘rov avval bajarilib, tashqi so‘rovga qiymat uzatadi.',
      },
      {
        prompt: '`Narx >= 10000 AND Narx <= 50000` shartini qisqa qilib qaysi operator bilan yozish mumkin?',
        options: ['Like', 'Between 10000 And 50000', 'Or', 'Not Null'],
        answer: 1,
        explanation: 'Between ... And ... yopiq oraliqni tekshiradi.',
      },
    ],
    teacherNotes: {
      method: 'DbLab da `> 85` va `>= 85` farqini (`Madina: 85` qatori orqali) yaqqol ko‘rsating.',
      timing: 'Kirish 5 daq, Murakkab va Jamlanma querylar 18 daq, DbLab 12 daq, Quiz 10 daq.',
      assessment: 'DbLab so‘rov natijasi va AND/OR farqi.',
      homework: 'Summa > 50000 AND Shahar = "Toshkent" sharti uchun Access mezon jadvalini chizing.',
    },
  },
  {
    id: 'g10-l60',
    grade: 10,
    no: 60,
    part: '4-chorak',
    title: 'Statik va dinamik parametrlar. Ma’lumotlar bazasi doirasida hisoblashlarni amalga oshirish.',
    kind: 'dars',
    hours: 1,
    tools: ['Access', 'Parameter Query', 'Calculated Fields'],
    objectives: [
      'O‘quvchi **Statik parametrli so‘rov** (kodda qotirilgan mezon) bilan **Dinamik parametrli so‘rov** (ishga tushganda `[...]` oyna orqali qiymat so‘raydigan Parameter Query) farqini biladi.',
      'O‘quvchi bazada jadvalga ortiqcha saqlanmaydigan **Hisoblanuvchi maydonlar (Calculated Fields)** ni query va formalarda to‘g‘ri yaratadi.',
    ],
    intro:
      'Har safar boshqa sinf ro‘yxatini ko‘rish uchun 11 ta alohida Query tuzish shartmi? Yo‘q! Kvadrat qavs `[Qaysi sinfni ko‘rmoqchisiz?]` bilan bitta **Dinamik parametrli so‘rov** tuzsangiz, barchasi uchun ishlaydi!',
    sections: [
      {
        heading: 'Statik vs Dinamik parametrli so‘rovlar',
        body: '• **Statik parametr (Static Query)**: qidiruv mezoni so‘rov konstruktorida qatʼiy yozib qo‘yilgan (`="10-A"`). Boshqa sinf kerak bo‘lsa, so‘rov dizaynini o‘zgartirishga to‘g‘ri keladi.\n• **Dinamik parametr (Parameter Query)**: mezon o‘rniga kvadrat qavs **`[...]`** ichida savol matni yoziladi, masalan: **`[Sinf nomini kiriting:]`**. So‘rov har safar ishga tushganda foydalanuvchiga muloqot oynasi chiqib qiymat so‘raydi!',
        example: '`Between [Boshlanish sanasi:] And [Tugash sanasi:]` — istalgan davr uchun 1 ta hisobot so‘rovi bilan ishlaydi.',
      },
      {
        heading: 'Maʼlumotlar bazasida hisoblashlar (Calculated Fields)',
        body: 'Yaxshi baza dizaynida `Summa = Narx * Soni` kabi qiymat jadvalda saqlanmaydi (chunki narx o‘zgarsa eski summa xato bo‘lib qoladi!). Buning o‘rniga Query ichida **Hisoblanuvchi maydon** yoziladi: **`Jami: [Narx]*[Soni]`**. Bu esa doimo jonli va aniq natija beradi.',
        example: 'QQS qo‘shilgan narxni hisoblash: `YakuniyNarx: [Narx]*1.12`. Maydon nomlari `[ ]` ichiga olinadi.',
        tip: 'Hisoblanuvchi maydonni jadvalda saqlamaslik ortiqcha xotira va yangilash anomaliyasidan saqlaydi!',
      },
    ],
    keyTerms: [
      { term: 'Static Query', definition: 'Qidiruv mezoni doimiy qiymat sifatida qotirib qo‘yilgan so‘rov.' },
      { term: 'Dynamic Parameter Query', definition: 'Ishga tushirilganda [Savol] oynasi orqali foydalanuvchidan qiymat oluvchi so‘rov.' },
      { term: 'Calculated Field', definition: 'Query yoki formada mavjud maydonlar ustida formula bilan jonli hisoblanadigan maydon.' },
      { term: '[Kvadrat qavs]', definition: 'Access da maydon nomini yoki dinamik parametr so‘rovini belgilovchi qavs.' },
    ],
    steps: [
      '1. Statik va Dinamik parametr farqini solishtiring.',
      '2. `Jami: [Narx]*[Soni]` hisoblanuvchi maydonini yozish sintaksisini yodlang.',
      '3. Quyidagi bo‘shliqni to‘ldirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Foydalanuvchi so‘rovni ochganda o‘zi shahar nomini yozib natija olishi uchun `Shahar` ustuni Criteria qatoriga nima yoziladi?',
        expected: '`[Shahar nomini kiriting:]` (kvadrat qavs ichida istalgan tushunarli savol).',
        difficulty: 'oson',
      },
      {
        task: '`TugilganYil` maydoni bor. Hozirgi 2026-yilga nisbatan `Yosh` ni hisoblovchi Calculated Field yozing.',
        expected: '`Yosh: 2026-[TugilganYil]` (yoki `Yosh: Year(Date())-[TugilganYil]`).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l60-g1',
        num: '01',
        title: 'Dinamik parametr va hisoblash',
        topic: 'Parameter Query & Calculated Field',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Access so‘rovlaridagi dinamik parametr va hisoblash qoidalarini to‘ldiring:',
          template: 'Mezon doimiy qotirilgan so‘rov {{0}} parametr deyiladi. So‘rov ochilganda foydalanuvchidan qiymat so‘rashi uchun savol {{1}} qavs ichiga yoziladi. Query da narx va sonini ko‘paytirish {{2}} orqali bajariladi.',
          blanks: [
            { options: ['Statik', 'Dinamik', 'Tasodifiy'], answer: 'Statik' },
            { options: ['kvadrat [ ]', 'oddiy ( )', 'figurali { }'], answer: 'kvadrat [ ]' },
            { options: ['Jami: [Narx]*[Soni]', 'Jami = Narx + Soni', 'SUM(Narx)'], answer: 'Jami: [Narx]*[Soni]' },
          ],
          hint: 'Statik = o‘zgarmas; Dinamik = `[Savol]`; Calculated = `Nomi: [A]*[B]`.',
          explanation: 'Kvadrat qavslar dinamik parametr oynasini chiqaradi; Calculated Field esa natijani jonli hisoblaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Access Query ishga tushirilganda foydalanuvchidan qiymat so‘raydigan oyna chiqarish uchun Criteria ga nima yoziladi?',
        options: ['("Qiymat")', '[Sinfni kiriting:]', '{Sinf}', '#Sinf#'],
        answer: 1,
        explanation: 'Kvadrat qavs `[...]` ichidagi matn Parameter Query oynasini ishga tushiradi.',
      },
      {
        prompt: 'Access Query konstruktorida `Jami` nomli hisoblanuvchi maydon (Narx × Soni) to‘g‘ri sintaksisi qaysi?',
        options: ['=Narx*Soni', 'Jami: [Narx]*[Soni]', 'Jami = [Narx] x [Soni]', 'SELECT Jami'],
        answer: 1,
        explanation: 'Access Query da yangi ustun nomi `:` ikki nuqta bilan ajratilib, maydonlar `[ ]` ichida yoziladi.',
      },
      {
        prompt: 'Nima uchun `Jami_Summa` (`Narx * Soni`) ni bazadagi jismoniy jadvalda alohida ustun qilib saqlamaslik tavsiya etiladi?',
        options: [
          'Narx yoki soni o‘zgarganda eski summa yangilanmay xatolik (anomaliya) keltirib chiqarishi mumkin',
          'Access ko‘paytirishni bilmagani uchun',
          'Jadvalda son saqlab bo‘lmagani uchun',
          'Chiroyli ko‘rinmagani uchun',
        ],
        answer: 0,
        explanation: 'Hisoblanadigan qiymatlarni Query/Form da jonli hisoblash maʼlumot yaxlitligini saqlaydi.',
      },
      {
        prompt: 'Statik parametrli so‘rovning kamchiligi nimada?',
        options: [
          'Har safar yangi shart bilan izlash uchun so‘rov dizaynini qo‘lda o‘zgartirish kerak bo‘ladi',
          'Hech qachon natija chiqarmaydi',
          'Faqat 1 ta yozuv topadi',
          'Parol so‘raydi',
        ],
        answer: 0,
        explanation: 'Statik mezon qotirilgan bo‘ladi; moslashuvchanlik uchun Dinamik parametr kerak.',
      },
      {
        prompt: '10% chegirma berilgandan keyingi narxni hisoblash uchun to‘g‘ri yozilgan Calculated Field qaysi?',
        options: ['ChegirmaNarx: [Narx]*0.9', 'ChegirmaNarx = 10%', '[Narx]-10', 'SUM([Narx])'],
        answer: 0,
        explanation: '10% chegirmadan so‘ng asl narxning 90% (`*0.9`) qismi qoladi.',
      },
    ],
    teacherNotes: {
      method: 'Access da `Jami: [Narx]*[Soni]` bilan Excel dagi `=A2*B2` sintaksisi farqini (`:` vs `=`) taqqoslang.',
      timing: 'Kirish 5 daq, Parametrlar & Calculated 20 daq, FillBlank 10 daq, Quiz 10 daq.',
      assessment: 'To‘g‘ri Parameter Query va Calculated Field sintaksisi.',
      homework: 'Oylik ish haqi jadvali uchun `Soliq: [Maosh]*0.12` va `Qolga: [Maosh]-[Soliq]` maydonlarini yozing.',
    },
  },
  {
    id: 'g10-l61',
    grade: 10,
    no: 61,
    part: '4-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Access', 'DbLab'],
    objectives: [
      'O‘quvchi 4-chorakning birinchi yarmi: Maʼlumot turlari, bog‘lanish turlari (1:1, 1:∞, ∞:∞), Flat-File vs Relational, Kalitlar (PK/FK/Composite), Referential Integrity va Querylar bo‘yicha bilimlarini sinaydi.',
    ],
    intro:
      '4-chorak oralig‘idagi nazorat ishi! Relyatsion maʼlumotlar bazasi, kalitlar, yaxlitlik va `Query` tuzish bo‘yicha bilimlaringizni sinovdan o‘tkazing.',
    sections: [
      {
        heading: 'Nazorat mavzulari xulosasi',
        body: '• **Turlar**: Telefon/Index → `Short Text`; Arifmetik son → `Number`; Ha/Yo‘q → `Boolean`.\n• **Bog‘lanish**: `1:1`, `1:∞`, `∞:∞` (Junction Table orqali!).\n• **Kalitlar**: `Primary Key` (noyob, NOT NULL), `Composite Key` (2+ ustun), `Foreign Key` (bog‘lovchi).\n• **So‘rovlar**: `AND`/`OR`, `GROUP BY`, `[Dinamik parametr]`, `Nomi: [A]*[B]`.',
        example: 'DbLab da murakkab qidiruv mezonini amalda tekshiring.',
      },
    ],
    keyTerms: [
      { term: 'Primary Key', definition: 'Jadvaldagi har bir yozuvni noyob belgilovchi asosiy kalit.' },
      { term: 'Foreign Key', definition: 'Jadvallarni o‘zaro bog‘lovchi tashqi kalit.' },
      { term: 'Referential Integrity', definition: 'Mavjud bo‘lmagan kalitga ulanishni va yetim yozuvlarni taqiqlovchi yaxlitlik.' },
      { term: 'Parameter Query', definition: 'Ishga tushganda [Savol] oynasi orqali qiymat oluvchi dinamik so‘rov.' },
    ],
    steps: [
      '1. `DbLab` da nazorat so‘rovini bajaring.',
      '2. 5 ta nazorat testini ishlang.',
    ],
    practice: [
      {
        task: 'Nima uchun `∞:∞` bog‘lanishni bazada qurishda o‘rtaga 3-jadval (Junction Table) qo‘yiladi?',
        expected: 'Relyatsion MB bevosita ko‘pga-ko‘p bog‘lanishni qo‘llamaydi; Junction Table uni ikkita `1:∞` bog‘lanishga aylantiradi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l61-g1',
        num: '01',
        title: 'Nazorat DbLab: Shahar bo‘yicha qidiruv',
        topic: 'Query bilan maʼlumot ajratish',
        difficulty: 'O‘rta',
        engine: 'dblab',
        config: {
          prompt: 'Mijozlar jadvalidan faqat "Toshkent" shahridagi mijozlarni (`Shahar = Toshkent`) topuvchi Query tuzing:',
          tableName: 'Mijozlar',
          columns: [
            { name: 'ID', type: 'Number' },
            { name: 'Mijoz', type: 'Text' },
            { name: 'Shahar', type: 'Text' },
            { name: 'Buyurtma', type: 'Number' },
          ],
          rows: [
            { ID: 1, Mijoz: 'Anvar', Shahar: 'Toshkent', Buyurtma: 5 },
            { ID: 2, Mijoz: 'Zuhra', Shahar: 'Samarqand', Buyurtma: 3 },
            { ID: 3, Mijoz: 'Kamol', Shahar: 'Toshkent', Buyurtma: 8 },
            { ID: 4, Mijoz: 'Nargiza', Shahar: 'Buxoro', Buyurtma: 2 },
          ],
          mode: 'query',
          targetField: 'Shahar',
          targetOp: '=',
          targetValue: 'Toshkent',
          expectedRowCount: 2,
          hint: 'Maydon: `Shahar`, Operator: `=`, Qiymat: `Toshkent`.',
          explanation: 'Anvar va Kamol — jami 2 ta mijoz Toshkent shahridan.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Telefon raqami `+998912345678` ni saqlash uchun bazada qaysi maʼlumot turi tanlanadi?',
        options: ['Number', 'Short Text', 'Boolean', 'Currency'],
        answer: 1,
        explanation: 'Boshidagi `+`/`0` saqlanishi va hisob qilinmasligi uchun Short Text ishlatiladi.',
      },
      {
        prompt: 'Bitta jadvalning o‘zida hamma maʼlumotlarni saqlash natijasida yuzaga keladigan keraksiz takrorlanish nima deyiladi?',
        options: ['Normalizatsiya', 'Data Redundancy', 'Referential Integrity', 'Indexing'],
        answer: 1,
        explanation: 'Data Redundancy bir xil maʼlumotning takror-takror yozilishidir.',
      },
      {
        prompt: '`BuyurtmaID` va `MahsulotID` juftligi birgalikda bitta qatorni noyob aniqlasa, bu qaysi kalit?',
        options: ['Composite Key (Murakkab kalit)', 'Foreign Key', 'AutoNumber', 'Super Key'],
        answer: 0,
        explanation: 'Ikki yoki ko‘p maydondan iborat Primary Key — Composite Key deyiladi.',
      },
      {
        prompt: 'Mavjud bo‘lmagan `SinfID` bilan o‘quvchi kiritishni to‘xtatuvchi qoida qanday nomlanadi?',
        options: ['Referential Integrity', 'Flat-File', 'Crosstab', 'Mail Merge'],
        answer: 0,
        explanation: 'Bog‘lanishlar yaxlitligi (Referential Integrity) noto‘g‘ri tashqi kalit kiritilishini bloklaydi.',
      },
      {
        prompt: 'So‘rov ishga tushganda foydalanuvchidan sana kiritishni so‘rashi uchun Criteria ga qanday yoziladi?',
        options: ['[Sanani kiriting:]', '=Sana()', '"Sana"', '*Sana*'],
        answer: 0,
        explanation: 'Kvadrat qavslar dinamik parametr oynasini ochadi.',
      },
    ],
    teacherNotes: {
      method: 'DbLab amaliyoti va test natijalari asosida 4-chorakning ikkinchi qismiga (Normalizatsiya) o‘tish.',
      timing: 'Takrorlash 5 daq, DbLab 15 daq, Nazorat testi 25 daq.',
      assessment: 'DbLab va 5 ta nazorat savoli.',
      homework: 'Keyingi darsga: "Maʼlumotlar bazasini 3NF gacha normallashtirish" mavzusini ko‘rib chiqing.',
    },
  },
];
