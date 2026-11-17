import type { Lesson } from './types';

export const GRADE_9_Q2A: Lesson[] = [
  {
    id: 'g9-l19',
    grade: 9,
    no: 19,
    part: '2-chorak',
    title: 'Kommunikatsiya dasturlari qamrovi. Maʼlumotlarni boshqarish dasturlari',
    kind: 'dars',
    hours: 1,
    tools: ['Yangilik xizmatlari', 'Veb-sayt', 'Maʼlumotlar bazasi', 'Maktab tizimi'],
    objectives: [
      'O‘quvchi gazeta, plakat, taqdimot, veb-sayt va multimedia kabi axborot yetkazish vositalarini maqsadga ko‘ra taqqoslaydi.',
      'O‘quvchi maktab, kutubxona va kasalxona kabi tashkilotlarda ma’lumotlarni boshqarish tizimlari qanday ishlashini izohlaydi.',
    ],
    intro:
      'Axborotni kimgadir yetkazish uchun qog‘oz varaqadan tortib jonli veb-saytgacha ko‘plab kommunikatsiya vositalari mavjud. Bundan tashqari, tashkilotlar kundalik ma’lumotlarni tartibli saqlash va tezkor izlash uchun maxsus ma’lumotlarni boshqarish dasturlaridan foydalanadi.',
    sections: [
      {
        heading: 'Kommunikatsiya vositalari va ularni tanlash',
        body: 'Qog‘oz media (gazeta, flayer, buklet, plakat) — internetsiz joylarda ham o‘qiladi, qo‘lda tarqatish oson, ammo chop etish xarajati bor va ma’lumotni darhol yangilab bo‘lmaydi. Raqamli media (taqdimot, veb-sayt, animatsiya, multimedia) — ovoz, video va giperhavola qo‘shish, bir zumda tahrirlash va millionlab odamlarga yetkazish imkonini beradi.',
        example: 'Maktab sport musobaqasi uchun kirish joyiga plakat osish (qog‘oz) hamda Telegram/veb-saytda jonli jadval joylash (raqamli) birgalikda yaxshi natija beradi.',
        tip: 'Kompyuter yordamida nashr tayyorlash (DTP — Desktop Publishing) buklet va gazetalarda matn hamda rasmlarni aniq joylashtirishga xizmat qiladi.',
      },
      {
        heading: 'Maʼlumotlarni boshqarish tizimlari (Data Handling)',
        body: 'Maktab o‘quvchilar bazasi, kutubxona kartotekasi, shifoxona bemor yozuvlari va yo‘lovchi chiptalari tizimi ma’lumotlarni boshqarish dasturlari asosida ishlaydi. Ularning asosiy afzalliklari: minglab yozuvlar ichidan soniyada qidirish, avtomatik saralash, takrorlanishni kamaytirish, hisobot chiqarish va qog‘oz arxivga qaraganda kam joy egallash.',
        example: 'Maktab elektron jurnalida o‘quvchining davomati va baholari bir marta kiritilsa, chorak yakuni o‘rtacha bali avtomatik hisoblanadi.',
      },
    ],
    keyTerms: [
      { term: 'DTP (Desktop Publishing)', definition: 'Gazeta, jurnal va buklet sahifalarini kompyuterda professional maketlash.' },
      { term: 'Multimedia', definition: 'Matn, rasm, audio, video va animatsiyaning bitta raqamli mahsulotda birlashishi.' },
      { term: 'Maʼlumotlarni boshqarish tizimi', definition: 'Katta hajmdagi yozuvlarni kiritish, saqlash, qidirish va hisobot olish dasturi.' },
      { term: 'Elektron registr', definition: 'Davomat, bemorlar yoki mijozlar hisobini yuritishning raqamli shakli.' },
    ],
    steps: [
      '1. Qog‘oz (buklet, plakat) va raqamli (veb-sayt, taqdimot) kommunikatsiya vositalarini taqqoslang.',
      '2. Kutubxona yoki maktab ma’lumotlar boshqaruv tizimida saqlanadigan maydonlarni (ID, F.I.Sh., sinf, sana) aniqlang.',
      '3. Raqamli bazaning qog‘oz daftardan 3 ustunligini yozing.',
    ],
    practice: [
      {
        task: 'Maktabingizdagi "Yosh dasturchilar" to‘garagini eʼlon qilish uchun qaysi 2 kommunikatsiya usulini tanlaysiz? Sababini yozing.',
        expected: 'Maktab foyesiga rangli plakat (hamma ko‘rishi uchun) va ota-onalar chatiga/saytga ro‘yxatdan o‘tish havolasi bilan raqamli eʼlon.',
        difficulty: 'oson',
      },
      {
        task: 'Kasalxona bemorlari ma’lumotlar bazasida bo‘lishi shart bo‘lgan 5 ta maydon (ustun) ni loyihalang.',
        expected: 'Bemor_ID, F_I_Sh, Tugilgan_sana, Qon_guruhi, Tashrif_sanasi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l19-g1',
        num: '01',
        title: 'Media va boshqaruv tizimlari',
        topic: 'Kommunikatsiya va ma’lumot boshqaruvi',
        difficulty: 'Oson',
        engine: 'sort',
        config: {
          prompt: 'Berilgan misollarni 2 toifaga ajrating: Kommunikatsiya vositasi yoki Maʼlumotlarni boshqarish tizimi.',
          categories: ['Kommunikatsiya vositasi', 'Maʼlumotlarni boshqarish tizimi'],
          items: [
            { text: 'Maktab veb-sayti va yangiliklari', category: 'Kommunikatsiya vositasi' },
            { text: 'Kutubxona kitob berish-olish bazasi', category: 'Maʼlumotlarni boshqarish tizimi' },
            { text: 'Reklama bukleti (DTP)', category: 'Kommunikatsiya vositasi' },
            { text: 'Elektron kundalik va davomat jurnali', category: 'Maʼlumotlarni boshqarish tizimi' },
            { text: 'Multimedia taqdimot', category: 'Kommunikatsiya vositasi' },
            { text: 'Kasalxona bemorlar kartotekasi', category: 'Maʼlumotlarni boshqarish tizimi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Veb-saytning qog‘oz bukletga nisbatan eng katta afzalligi nimada?',
        options: ['Ma’lumotni bir zumda yangilash, audio-video qo‘shish va butun dunyoga tarqatish mumkin', 'Internet va elektr talab qilmaydi', 'Bosmaxona xarajati juda katta', 'Qo‘lda tarqatiladi'],
        answer: 0,
        explanation: 'Veb-sayt interaktiv kontent va tezkor yangilanish imkonini beradi.',
      },
      {
        prompt: 'DTP (Desktop Publishing) dasturlari asosan nima uchun ishlatiladi?',
        options: ['Gazeta, jurnal, flayer va plakat maketini tuzish uchun', 'Kompyuter virusini tekshirish uchun', 'Router sozlash uchun', 'Audio kesish uchun'],
        answer: 0,
        explanation: 'DTP sahifada matn bloklari, kolonkalar va grafikalarni chop etishga tayyorlaydi.',
      },
      {
        prompt: 'Maktabda qog‘oz jurnal o‘rniga raqamli ma’lumotlarni boshqarish dasturi ishlatilganda nima yaxshilanadi?',
        options: ['Kerakli o‘quvchini soniyada topish va avtomatik hisobot tuzish', 'Qog‘oz sarfi ko‘payadi', 'Fayl saqlab bo‘lmaydi', 'Faqat bitta o‘quvchi yoziladi'],
        answer: 0,
        explanation: 'Ma’lumotlar bazasi tezkor qidiruv, filtrlash va xatolarni kamaytirishni taʼminlaydi.',
      },
      {
        prompt: 'Qaysi vaziyatda qog‘oz plakat raqamli veb-saytdan samaraliroq bo‘lishi mumkin?',
        options: ['Internetga ulanmagan hudud yoki binoning kirish qismida tezkor eslatma berishda', 'Jonli video translyatsiya qilishda', 'Onlayn chipta sotishda', 'Real vaqtli chatda'],
        answer: 0,
        explanation: 'Plakat hech qanday qurilma yoki internetsiz o‘tkinchilarning ko‘ziga tashlanadi.',
      },
      {
        prompt: 'Matn, rasm, tovush va animatsiya bitta tizimda uyg‘unlashtirilishi qanday ataladi?',
        options: ['Multimedia', 'Monoxrom matn', 'BIOS', 'CLI'],
        answer: 0,
        explanation: 'Multimedia bir nechta axborot shakllarini (matn, audio, video) birlashtiradi.',
      },
    ],
    teacherNotes: {
      method: 'Bitta tadbir uchun ham qog‘oz buklet, ham raqamli taqdimot rejasini taqqoslash.',
      timing: 'Kommunikatsiya 20 daq, Ma’lumot boshqaruvi 15 daq, Saralash va quiz 10 daq.',
      assessment: 'Vaziyatga mos media va ma’lumot tizimi maydonlarini to‘g‘ri tanlash.',
      homework: 'Maktabingiz kutubxonasi uchun "Kitoblar" jadvalining 5 ta maydon nomini va ma’lumot turini yozing.',
    },
  },
  {
    id: 'g9-l20',
    grade: 9,
    no: 20,
    part: '2-chorak',
    title: 'Oʻlchov dasturlari. Boshqaruv dasturlaridagi mikroprotsessorlar',
    kind: 'dars',
    hours: 1,
    tools: ['Sensorlar', 'ADC', 'Mikroprotsessor', 'Issiqxona / Svetofor'],
    objectives: [
      'O‘quvchi kompyuter o‘lchov tizimlarida sensorlar, ADC (Analog-Raqamli aylantirgich) va ma’lumotlarni yig‘ish (Data logging) jarayonini tushunadi.',
      'O‘quvchi boshqaruv tizimlarida (issiqxona, aqlli pech, svetofor, avtonom tormoz) mikroprotsessorning teskari aloqa (feedback loop) siklini izohlaydi.',
    ],
    intro:
      'Inson 24 soat davomida issiqxonadagi haroratni yoki daryodagi suv sathini termometr bilan o‘lchab o‘tira olmaydi. Buning o‘rniga sensorlar va mikroprotsessorlar soniyasiga yuzlab marta o‘lchov olib, tizimni avtomatik boshqaradi.',
    sections: [
      {
        heading: 'O‘lchov tizimlari (Data Logging) va ADC',
        body: 'Tashqi muhitdagi harorat, yorug‘lik, namlik, bosim va pH kabi kattaliklar analog (uzluksiz) signaldir. Kompyuter esa faqat raqamli (0 va 1) ma’lumotni tushunadi! Shuning uchun sensor uzatgan analog signal avval ADC (Analog-to-Digital Converter) orqali raqamga aylantiriladi va ma’lumotlar registratorida (Data logger) vaqt belgisi bilan saqlanadi.',
        example: 'Meteorologiya stansiyasi har 10 daqiqada harorat va shamol tezligini yozib borib, 24 soatlik grafik hosil qiladi.',
        tip: 'O‘lchov dasturi faqat kuzatadi va grafik chizadi; Boshqaruv dasturi esa o‘lchangan qiymatga qarab aktuatorga buyruq beradi!',
      },
      {
        heading: 'Mikroprotsessorli boshqaruv va Teskari aloqa (Feedback)',
        body: 'Boshqaruv tizimi 4 qadamli siklda ishlaydi: 1) Sensor fizik ko‘rsatkichni o‘lchaydi va ADC orqali mikroprotsessorga uzatadi; 2) Mikroprotsessor qiymatni oldindan belgilangan chegara (preset value) bilan solishtiradi; 3) Agar farq bo‘lsa, mikroprotsessor DAC orqali aktuatorga (isitgich, ventilyator, nasos, valf) buyruq yuboradi; 4) Muhit o‘zgaradi va sensor yana o‘lchaydi (uzluksiz teskari aloqa).',
        example: 'Avtomatik issiqxonada harorat 18°C dan tushsa, mikroprotsessor isitgichni yoqadi; 26°C dan oshsa, oynani ochib ventilyatorni ishga tushiradi.',
      },
    ],
    keyTerms: [
      { term: 'Sensor (Datchik)', definition: 'Harorat, yorug‘lik, namlik kabi fizik kattalikni elektr signaliga aylantiruvchi kiritish qurilmasi.' },
      { term: 'ADC (Analog-Raqamli o‘zgartirgich)', definition: 'Sensorning analog signalini mikroprotsessor tushunadigan raqamli kodga aylantiruvchi blok.' },
      { term: 'Data Logging', definition: 'Sensor ko‘rsatkichlarini ma’lum vaqt oralig‘ida avtomatik yozib borish va grafiklash.' },
      { term: 'Teskari aloqa (Feedback loop)', definition: 'Chiqish natijasi muhitga taʼsir qilib, sensor orqali yana kirishga qaytuvchi uzluksiz boshqaruv sikli.' },
    ],
    steps: [
      '1. Sensor → ADC → Mikroprotsessor → Aktuator zanjirini blok-sxemada chizing.',
      '2. O‘lchov tizimi (Data logger) bilan Boshqaruv tizimi (Control system) farqini aniqlang.',
      '3. Issiqxona yoki ko‘cha chiroqlari misolida "IF harorat < 18 THEN ..." algoritmini yozing.',
    ],
    practice: [
      {
        task: 'Nima uchun sensor bilan mikroprotsessor orasida ADC (Analog-to-Digital Converter) bo‘lishi shart?',
        expected: 'Sensorlar analog (uzluksiz) signal beradi, mikroprotsessor esa faqat raqamli (ikkilik 0/1) signallarni qayta ishlaydi.',
        difficulty: 'oson',
      },
      {
        task: 'Avtomatik ko‘cha yoritish chiroqlarining qorong‘i tushganda yonib, tongda o‘chishi algoritmini 4 qadamda yozing.',
        expected: '1) Yorug‘lik sensori qiymatni o‘lchaydi; 2) ADC raqamlashtiradi; 3) Mikroprotsessor chegara bilan solishtiradi; 4) Past bo‘lsa relega chiroqni yoqish signalini beradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l20-g1',
        num: '01',
        title: 'Avtomatik boshqaruv siklini tartibla',
        topic: 'O‘lchov va boshqaruv tizimlari',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Avtomatik issiqxonada haroratni boshqarish jarayonini to‘g‘ri ketma-ketlikda joylashtiring.',
          items: [
            'Harorat sensori issiqxonadagi issiqlikni analog signal sifatida o‘lchaydi',
            'ADC analog signalni raqamli qiymatga aylantiradi',
            'Mikroprotsessor o‘lchangan qiymatni belgilangan meʼyor (masalan, 22°C) bilan solishtiradi',
            'Zarurat bo‘lsa mikroprotsessor aktuatorga (ventilyator yoki isitgichga) signal yuboradi',
          ],
          hint: 'Jarayon har doim o‘lchash (Sensor) dan boshlanib, ijro (Aktuator) bilan yakunlanadi.',
          explanation: 'Sensor → ADC → Mikroprotsessor taqqoslashi → Aktuator harakati avtomatik boshqaruvning universal zanjiridir.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Sensor yuborgan uzluksiz analog signalni kompyuter tushunadigan raqamli ko‘rinishga nima o‘tkazadi?',
        options: ['ADC (Analog-to-Digital Converter)', 'Plotter', 'HTML', 'Router'],
        answer: 0,
        explanation: 'ADC analog kuchlanishni ikkilik sonlarga aylantiradi.',
      },
      {
        prompt: 'Qaysi qurilma avtomatik boshqaruv tizimida mikroprotsessor buyrug‘i asosida fizik harakatni bajaradi?',
        options: ['Aktuator (motor, klapan, isitgich)', 'Yorug‘lik sensori', 'Shtrix-kod skaneri', 'ROM chipi'],
        answer: 0,
        explanation: 'Aktuator — chiqarish qurilmasi bo‘lib, elektr signalini mexanik yoki issiqlik harakatiga aylantiradi.',
      },
      {
        prompt: 'Ilmiy tajribada inson o‘rniga kompyuter sensor orqali uzluksiz ma’lumot yozib borishining afzalligi qaysi?',
        options: ['Aniq, inson xatosiz, tanaffussiz va juda tez oraliqda o‘lchaydi', 'Sensorlar hech qachon elektr talab qilmaydi', 'Grafik chizishni imkonsiz qiladi', 'Faqat kunduzi ishlaydi'],
        answer: 0,
        explanation: 'Data logging inson kira olmaydigan xavfli joylarda ham aniq va tinimsiz o‘lchov olib boradi.',
      },
      {
        prompt: 'Boshqaruv dasturi o‘lchov dasturidan nimasi bilan farq qiladi?',
        options: ['O‘lchangan natijaga asoslanib tizimga faol taʼsir ko‘rsatadi (aktuatorni yoqadi/o‘chiradi)', 'Faqat jadval chizadi', 'Sensor ishlatmaydi', 'Mikroprotsessorsiz ishlaydi'],
        answer: 0,
        explanation: 'O‘lchov tizimi ma’lumot yig‘adi; boshqaruv tizimi esa teskari aloqa orqali muhitni tartibga soladi.',
      },
      {
        prompt: 'Avtomobilning avtomatik tormoz yoki muzlatgich termostatida qaysi tamoyil ishlaydi?',
        options: ['Teskari aloqali mikroprotsessor boshqaruvi (Feedback loop)', 'Qo‘lda pochta yuborish', 'Veb-dizayn', 'Arxivlash'],
        answer: 0,
        explanation: 'Tizim doimiy ravishda sensor qiymatini tekshirib, chiqish moslamasini boshqarib turadi.',
      },
    ],
    teacherNotes: {
      method: 'Arduino yoki oddiy termostat misolida Sensor–ADC–CPU–Aktuator zanjirini chizib ko‘rsatish.',
      timing: 'O‘lchov va ADC 15 daq, Boshqaruv va Feedback 15 daq, Order o‘yini va quiz 15 daq.',
      assessment: '4 bosqichli boshqaruv siklini adashtirmasdan tartiblash.',
      homework: 'Aqlli kir yuvish mashinasida suv harorati va sathini boshqaruvchi teskari aloqani tasvirlab yozing.',
    },
  },
  {
    id: 'g9-l21',
    grade: 9,
    no: 21,
    part: '2-chorak',
    title: 'Modellashtirish dasturlari. Boshqaruv, taʼlim, sog‘liqni saqlash, savdo va autentifikatsiyada kompyuter tizimlari',
    kind: 'dars',
    hours: 1,
    tools: ['Simulyatorlar', 'Elektron tijorat', 'POS / EFTPOS', 'Biometrik tizim'],
    objectives: [
      'O‘quvchi kompyuter modellashtirish (ob-havo, aviasimulyator, ko‘prik mustahkamligi, moliya) nega hayotiy va iqtisodiy jihatdan zarurligini tushuntiradi.',
      'O‘quvchi taʼlim, tibbiyot, savdo (POS/EFTPOS, onlayn bank) va autentifikatsiyada kompyuter tizimlari rolini izohlaydi.',
    ],
    intro:
      'Yangi ko‘prik qurishdan yoki uchuvchini bo‘ron ichiga uchirishdan oldin muhandislar kompyuter modeli va simulyatorda minglab ssenariylarni xavfsiz sinab ko‘radilar. Shuningdek, bugun do‘kon kassasidan tortib kasalxonagacha barcha soha kompyuter tizimlari bilan integratsiyalashgan.',
    sections: [
      {
        heading: 'Modellashtirish dasturlari va Simulyatsiya',
        body: 'Kompyuter modeli — real tizimning matematik va grafik nusxasi ("Nima bo‘lar edi, agar..." savollariga javob beradi). Qo‘llanilishi: uchuvchilar simulyatori, ob-havo prognozi, avtomobil to‘qnashuv testi (crash test), moliyaviy byudjet (Excel). Afzalliklari: real falokat xavfi yo‘q, juda arzon, vaqtni tezlashtirish mumkin (100 yillik iqlim o‘zgarishini 1 soatda hisoblash). Cheklovi: model faqat unga kiritilgan formulalar va ma’lumotlar sifatiga bog‘liq.',
        example: 'Haqiqiy Boeing samolyotini yoqib sinash o‘rniga uchuvchi VR/kabina simulyatorida dvigatel ishdan chiqishini yuz marta mashq qiladi.',
        tip: 'Modellashtirish doim haqiqatni 100% aks ettirmaydi — kutilmagan omillar formula ichiga kirmay qolishi mumkin.',
      },
      {
        heading: 'Taʼlim, Tibbiyot, Savdo va Autentifikatsiya tizimlari',
        body: 'Taʼlim: LMS platformalari, interaktiv testlar va virtual laboratoriyalar. Tibbiyot: bemorlar elektron kartasi, bemor holatini 24/7 kuzatuvchi monitorlar, MRT/KT skanerlash va dorixona bazalari. Savdo: POS (Point of Sale) terminallar — shtrix-kodni o‘qiganda ombor zaxirasi avtomatik kamayadi (Automatic stock control) va qayta buyurtma beriladi; EFTPOS — elektron pul o‘tkazmasi. Autentifikatsiya: NFC kartalar, biometriya va 2FA.',
        example: 'Supermarket kassiri sutni skaner qilsa, bazadagi sut soni 1 taga kamayadi; minimal chegara (reorder level) ga tushganda yetkazib beruvchiga avtomatik buyurtma yuboriladi.',
      },
    ],
    keyTerms: [
      { term: 'Simulyatsiya (Modellashtirish)', definition: 'Real jarayon yoki obyektni kompyuterda xavfsiz va arzon sinab ko‘rish usuli.' },
      { term: 'POS / EFTPOS', definition: 'Savdo nuqtasi kassasi va bank kartasi orqali elektron mablag‘ o‘tkazish terminali.' },
      { term: 'Avtomatik zaxira nazorati', definition: 'Sotilgan tovarni bazadan ayirib, tugayotganda yangi buyurtma shakllantiruvchi tizim.' },
      { term: 'Autentifikatsiya', definition: 'Foydalanuvchi yoki mijoz shaxsini parol, karta yoki biometriya bilan tasdiqlash.' },
    ],
    steps: [
      '1. Kompyuter modellashtirishning 4 sohasi (aviatsiya, qurilish, moliya, ob-havo) uchun foydasini yozing.',
      '2. Supermarketdagi POS va avtomatik zaxira nazorati bosqichlarini tartiblang.',
      '3. Tibbiyotda bemor monitorining afzalliklarini (aniqlik, 24/7 signal) sanang.',
    ],
    practice: [
      {
        task: 'Nima uchun avtomobil zavodlari har doim haqiqiy mashinani devorga urishdan oldin kompyuter crash-test modelidan foydalanadi?',
        expected: 'Haqiqiy mashinalarni sindirish juda qimmat; modelda minglab burchak va materiallarni tez va arzon sinash mumkin.',
        difficulty: 'oson',
      },
      {
        task: 'Mijoz do‘konda bank kartasi (EFTPOS) bilan to‘lov qilganda bank va do‘kon o‘rtasida qanday ma’lumotlar almashinadi?',
        expected: 'Karta raqami/PIN tekshiruvi, bankda balans yetarliligini tasdiqlash, mablag‘ni o‘tkazish va kvitansiya chop etish.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l21-g1',
        num: '01',
        title: 'Soha va kompyuter tizimi',
        topic: 'Tizimlar qo‘llanilishi',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'Har bir sohani unga xos kompyuter tizimi bilan moslang.',
          pairs: [
            { left: 'Aviatsiya / Qurilish', right: 'Xavfsiz sinov uchun kompyuter simulyatsiyasi va modellashtirish' },
            { left: 'Chakana savdo', right: 'POS terminal, shtrix-kod va avtomatik zaxira nazorati' },
            { left: 'Sog‘liqni saqlash', right: 'Bemor ko‘rsatkichlarini 24/7 kuzatuvchi sensorli monitor va elektron karta' },
            { left: 'Bank / Xavfsizlik', right: 'Biometriya, Chip & PIN va ko‘p bosqichli autentifikatsiya' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Yadro elektr stansiyasi yoki samolyot parvozini real hayotda emas, kompyuter simulyatorida sinashning asosiy sababi nima?',
        options: ['Inson hayoti uchun xavfsiz va moddiy jihatdan ancha arzon', 'Haqiqiy samolyotdan sekinroq ishlaydi', 'Matematik formula kerak emas', 'Internet talab qilinadi'],
        answer: 0,
        explanation: 'Simulyatsiya falokat xavfisiz va katta xarajat qilmasdan tajriba o‘tkazish imkonini beradi.',
      },
      {
        prompt: 'Supermarketda mahsulot soni minimal chegaradan pastga tushganda avtomatik buyurtma beruvchi tizim nima deyiladi?',
        options: ['Avtomatik zaxira nazorati (Automatic stock control)', 'VR simulyator', 'OCR', 'Mail merge'],
        answer: 0,
        explanation: 'POS tizimi sotuvni qayd etgach, ombor qoldig‘ini kamaytirib kerakli paytda qayta buyurtma beradi.',
      },
      {
        prompt: 'EFTPOS qisqartmasi nimani anglatadi?',
        options: ['Savdo nuqtasida elektron mablag‘ o‘tkazish', 'Fayl arxivlash dasturi', 'Printer turi', 'Veb-brauzer nomi'],
        answer: 0,
        explanation: 'Electronic Funds Transfer at Point of Sale — karta terminali orqali naqdsiz to‘lov.',
      },
      {
        prompt: 'Kompyuter modellashtirishining asosiy cheklovi nimada?',
        options: ['Model natijasi unga kiritilgan qoidalar va ma’lumotlar aniqligiga bog‘liq', 'U hech qanday hisoblash bajarmaydi', 'Faqat o‘yinlar uchun ishlatiladi', 'Grafik chiza olmaydi'],
        answer: 0,
        explanation: 'Agar dastlabki formulada xato bo‘lsa yoki kutilmagan omil kiritilmasa, prognoz xato chiqadi.',
      },
      {
        prompt: 'Shifoxona jonlantirish bo‘limida bemor yurak urishi va kislorodini uzluksiz kuzatishda nima ishlatiladi?',
        options: ['Sensorlarga ulangan kompyuter monitoring tizimi', 'Plotter', 'Qog‘oz faks', 'CD-ROM'],
        answer: 0,
        explanation: 'Sensorlar bemor holatini soniyama-soniya kuzatib, xavfli o‘zgarishda signal beradi.',
      },
    ],
    teacherNotes: {
      method: 'Turli sohalar (do‘kon, shifoxona, aeroport) bo‘yicha 4 guruhga misollar tahlili berish.',
      timing: 'Modellashtirish 15 daq, Tizimlar qo‘llanilishi 15 daq, Match va quiz 15 daq.',
      assessment: 'Har bir sohada kompyuter tizimining kirish, qayta ishlash va chiqish qismini aytish.',
      homework: 'Yaqin atrofdagi do‘kon yoki dorixonada POS terminal va shtrix-kod qanday ishlashini kuzatib, 4 qatorli tavsif yozing.',
    },
  },
  {
    id: 'g9-l22',
    grade: 9,
    no: 22,
    part: '2-chorak',
    title: 'Tahlil va loyihalash',
    kind: 'loyiha',
    hours: 1,
    tools: ['SDLC', 'Kuzatuv / So‘rovnoma', 'DFD', 'Ekran maketi'],
    objectives: [
      'O‘quvchi Tizim rivojlanish hayotiy sikli (SDLC) ning dastlabki ikki bosqichi — Tahlil va Loyihalash mohiyatini tushunadi.',
      'O‘quvchi ma’lumot yig‘ishning 4 usuli (kuzatish, intervyu, so‘rovnoma, hujjatlar tahlili) hamda kiritish/chiqarish ekranlarini loyihalashni amalda qo‘llaydi.',
    ],
    intro:
      'Yangi dastur yoki axborot tizimi birdaniga kod yozishdan boshlanmaydi! Avval mavjud tizimdagi muammolar chuqur o‘rganiladi (Tahlil), so‘ngra yangi tizimning chizmasi, ma’lumotlar bazasi va ekranlari rejalanadi (Loyihalash).',
    sections: [
      {
        heading: '1-bosqich: Tahlil (Analysis) va Maʼlumot yig‘ish usullari',
        body: 'Tizim tahlilchisi hozirgi ish jarayonini o‘rganish uchun 4 usuldan foydalanadi: 1) Kuzatish (Observation) — xodim qanday ishlashini jonli ko‘rish (haqiqiy jarayonni ko‘rsatadi, lekin odamlar kuzatilganda odatdagidek ishlamasligi mumkin); 2) Intervyu (Suhbat) — menejer va xodimlarga chuqur savollar berish (ko‘p vaqt oladi); 3) So‘rovnoma (Questionnaire) — yuzlab odamdan tez fikr olish (savollar noto‘g‘ri tushunilishi mumkin); 4) Mavjud hujjatlarni tekshirish — kvitansiya, shakl va fayllarni tahlil qilish.',
        example: 'Maktab oshxonasi navbatini tezlashtirish loyihasida tahlilchi tanaffusdagi navbatni kuzatadi va o‘quvchilardan qisqa so‘rovnoma oladi.',
        tip: 'Kichik jamoa va chuqur tafsilot uchun Intervyu, 500 ta o‘quvchi fikrini tez yig‘ish uchun esa So‘rovnoma eng qulay!',
      },
      {
        heading: '2-bosqich: Loyihalash (Design)',
        body: 'Tahlildan so‘ng loyihachi quyidagilarni yaratadi: Maʼlumotlarni kiritish formalari (tushunarli yorliqlar, validatsiya qoidalari), Chiqarish hisobotlari/ekranlari, Maʼlumotlar bazasi jadval tuzilmasi (maydon nomlari, turlari, kalitlar), Maʼlumotlar oqimi diagrammalari (DFD) hamda dasturni sinash (Test) rejasi.',
        example: 'Kiritish formasida "Tug‘ilgan sana" maydoniga matn o‘rniga kalendar va sana formati validatsiyasi loyihalanadi.',
      },
    ],
    keyTerms: [
      { term: 'SDLC', definition: 'Tizimni tahlildan tortib joriy qilish va qo‘llab-quvvatlashgacha bo‘lgan hayotiy sikli.' },
      { term: 'Tahlil (Analysis)', definition: 'Mavjud tizim kamchiliklari va yangi tizimga qo‘yiladigan talablarni aniqlash bosqichi.' },
      { term: 'Loyihalash (Design)', definition: 'Yangi tizim interfeysi, ma’lumotlar strukturasi va algoritmlari chizmasini yaratish.' },
      { term: 'Validatsiya loyihasi', definition: 'Foydalanuvchi xato ma’lumot kiritishini oldindan cheklovchi qoidalarni rejalash.' },
    ],
    steps: [
      '1. Loyiha mavzusini tanlang (masalan, "Maktab kutubxonasi elektron tizimi").',
      '2. Ma’lumot yig‘ish uchun 2 usul tanlang (Kutubxonachi bilan intervyu + O‘quvchilar so‘rovnomasi).',
      '3. Yangi kitob qo‘shish ekran maketini (maydonlar va validatsiya) qog‘ozga chizing.',
    ],
    practice: [
      {
        task: 'Maktab kutubxonasini raqamlashtirishda 600 ta o‘quvchi va 2 ta kutubxonachi fikrini olish uchun qaysi usullarni tanlaysiz?',
        expected: '600 o‘quvchi uchun onlayn So‘rovnoma, 2 kutubxonachi uchun esa Intervyu va ish jarayonini Kuzatish.',
        difficulty: 'oson',
      },
      {
        task: 'Yangi o‘quvchini ro‘yxatga olish formasi uchun 4 ta maydon va har biriga bittadan validatsiya qoidasini loyihalang.',
        expected: 'Ism (bo‘sh bo‘lmasligi), Sinf (1..11 diapazon), Telefon (9–12 raqam formati), Tug‘ilgan sana (sana turi).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l22-g1',
        num: '01',
        title: 'SDLC bosqichlarini to‘g‘ri tartibla',
        topic: 'Tizim yaratish hayotiy sikli',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Yangi axborot tizimi yaratishning dastlabki va yakuniy SDLC bosqichlarini mantiqiy tartibda joylashtiring.',
          items: [
            'Tahlil (Analysis): mavjud muammoni intervyu, kuzatish va hujjatlar orqali o‘rganish',
            'Loyihalash (Design): ekran maketi, ma’lumotlar bazasi va test rejasini chizish',
            'Ishlab chiqish va Sinash (Development & Testing): dasturni yaratish va xatolarni tekshirish',
            'Joriy qilish, Hujjatlashtirish va Texnik xizmat (Implementation & Maintenance)',
          ],
          hint: 'Avval o‘rganamiz (Tahlil), keyin chizamiz (Loyiha), so‘ng quramiz (Ishlab chiqish) va topshiramiz (Joriy qilish).',
          explanation: 'SDLC ketma-ketligi tizimning xatosiz va foydalanuvchi talabiga mos chiqishini kafolatlaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Yuzlab mijozlardan qisqa vaqt ichida bir xil standart savollarga javob yig‘ishning eng qulay usuli qaysi?',
        options: ['So‘rovnoma (Questionnaire)', 'Har biri bilan 1 soatlik intervyu', 'Dastur kodini o‘zgartirish', 'Faylni o‘chirish'],
        answer: 0,
        explanation: 'So‘rovnoma katta auditoriyadan tez va statistik qayta ishlashga qulay javob yig‘adi.',
      },
      {
        prompt: 'Tizim tahlili bosqichida xodimning ishini jonli kuzatishning (Observation) kamchiligi nimada?',
        options: ['Xodim kuzatilayotganini bilib, odatdagidan boshqacha (sunʼiy) ishlashi mumkin', 'Hech qanday ma’lumot bermaydi', 'Faqat tunda bajariladi', 'Qog‘oz talab qiladi'],
        answer: 0,
        explanation: 'Hawthorne effekti tufayli kuzatuv ostidagi odam harakati odatdagidan farq qilishi mumkin.',
      },
      {
        prompt: 'Ekran formalari, hisobot ko‘rinishi va ma’lumotlar bazasi maydonlari SDLC ning qaysi bosqichida belgilanadi?',
        options: ['Loyihalash (Design)', 'Texnik xizmat', 'O‘chirish', 'Arxivlash'],
        answer: 0,
        explanation: 'Loyihalash bosqichida tizimning barcha interfeys va ma’lumot tuzilmalari chiziladi.',
      },
      {
        prompt: 'Mavjud korxonadagi qog‘oz kvitansiya va hisobot blankalarini tekshirish qaysi tahlil usuliga kiradi?',
        options: ['Mavjud hujjatlarni tahlil qilish (Document inspection)', 'Beta sinov', 'Paralel joriy qilish', 'Shifrlash'],
        answer: 0,
        explanation: 'Hujjatlar tahlili tizimga qanday kirish/chiqish ma’lumotlari kerakligini aniq ko‘rsatadi.',
      },
      {
        prompt: 'Nima uchun tizimni loyihalashda validatsiya qoidalari oldindan belgilanadi?',
        options: ['Dasturga mantiqan noto‘g‘ri yoki bo‘sh ma’lumotlar kiritilishini to‘xtatish uchun', 'Fayl hajmini oshirish uchun', 'Internet tezligini pasaytirish uchun', 'Dizaynni murakkablashtirish uchun'],
        answer: 0,
        explanation: 'Oldindan o‘ylangan validatsiya bazani keraksiz va xato yozuvlardan saqlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfni kichik loyiha jamoalariga bo‘lib, "Maktab oshxonasi" yoki "Kutubxona" tahlil-loyiha qog‘ozini to‘ldirtirish.',
      timing: 'Tahlil usullari 15 daq, Loyihalash 15 daq, Loyiha mashqi va test 15 daq.',
      assessment: 'Har bir tahlil usulining afzallik va cheklovini ayta olish.',
      homework: 'Kichik do‘kon kassasi uchun kiritish formasining qog‘oz eskizini chizib keling.',
    },
  },
  {
    id: 'g9-l23',
    grade: 9,
    no: 23,
    part: '2-chorak',
    title: 'Ishlab chiqish, sinash va joriy qilish',
    kind: 'dars',
    hours: 1,
    tools: ['Test ma’lumotlari', 'Direct / Parallel / Pilot / Phased'],
    objectives: [
      'O‘quvchi tizimni sinovdan o‘tkazishda uch xil test maʼlumotini (Normal, Abnormal/Invalid, Extreme/Boundary) qo‘llaydi.',
      'O‘quvchi yangi tizimni joriy qilishning 4 strategiyasini (To‘g‘ridan-to‘g‘ri, Parallel, Tajriba/Pilot, Bosqichma-bosqich) solishtiradi.',
    ],
    intro:
      'Dastur yozilgach, uni mijozga topshirishdan oldin turli kutilmagan qiymatlar bilan sinab ko‘rish shart. Tayyor bo‘lgan tizimni esa korxonaga birdaniga yoki eski tizim bilan yonma-yon joriy qilish strategiyasi tanlanadi.',
    sections: [
      {
        heading: 'Sinovdan o‘tkazish va Test maʼlumotlari turlari',
        body: 'Faraz qilaylik, dastur 0 dan 100 gacha imtihon balini qabul qiladi. Uni tekshirish uchun 3 xil test qiymati beriladi: 1) Normal (oddiy to‘g‘ri qiymat, masalan `50` yoki `75`); 2) Ekstremal / Chegaraviy (Extreme/Boundary — qabul qilinadigan eng chekka qiymatlar `0` va `100`); 3) Anormal / Noto‘g‘ri (Abnormal — qabul qilinmasligi kerak bo‘lgan qiymatlar: `-5`, `105` yoki `"abc"`).',
        example: 'Agar chegara `100` bo‘lganda tizim xato bersa, demak dasturchi `<= 100` o‘rniga `< 100` yozib qo‘ygan — buni aynan Extreme test aniqlaydi!',
        tip: 'Sinov rejasida kutilgan natija (Expected) va haqiqiy natija (Actual) oldindan yozib boriladi.',
      },
      {
        heading: 'Joriy qilishning (Implementation) 4 strategiyasi',
        body: '1) To‘g‘ridan-to‘g‘ri almashtirish (Direct changeover): eski tizim o‘chiriladi va darhol yangisi yoqiladi — arzon va tez, lekin xato chiqsa zaxira yo‘q! 2) Parallel (Parallel running): eski va yangi tizim maʼlum vaqt birga ishlaydi — eng xavfsiz, ammo xodimlar ikki marta ish qiladi (qimmat). 3) Tajriba (Pilot): yangi tizim avval faqat bitta filialda sinab ko‘riladi. 4) Bosqichma-bosqich (Phased): tizim modulma-modul (avval kassa, keyin ombor) joriy qilinadi.',
        example: 'Banklarda yangi hisob-kitob dasturi odatda Parallel usulda o‘tkaziladi, chunki xatolik millionlab so‘m zarar keltirishi mumkin.',
      },
    ],
    keyTerms: [
      { term: 'Normal / Extreme / Abnormal test', definition: 'Odatiy to‘g‘ri, eng chekka ruxsat etilgan va rad etilishi kerak bo‘lgan test qiymatlari.' },
      { term: 'Direct changeover', definition: 'Eski tizimni to‘xtatib, bir kechada to‘liq yangisiga o‘tish usuli.' },
      { term: 'Parallel running', definition: 'Eski va yangi tizimlarni bir vaqtda ishlatib, natijalarni solishtirish.' },
      { term: 'Pilot / Phased joriy qilish', definition: 'Pilot — bitta filialda sinash; Phased — dastur modullarini navbat bilan joriy etish.' },
    ],
    steps: [
      '1. Berilgan qoida (masalan, yosh 14..18) uchun Normal, Extreme va Abnormal test qiymatlarini tuzing.',
      '2. 4 joriy qilish strategiyasini narx, tezlik va xavf bo‘yicha jadvalga joylang.',
      '3. Kichik do‘kon va yirik bank uchun mos joriy qilish usulini tanlang.',
    ],
    practice: [
      {
        task: 'Maktab bahosi `1` dan `5` gacha butun son bo‘lishi kerak. Normal, Extreme va Abnormal test qiymatlarini yozing.',
        expected: 'Normal: 3; Extreme: 1 va 5; Abnormal: 0, 6, -2, "aʼlo".',
        difficulty: 'oson',
      },
      {
        task: '10 ta filiali bor supermarket tarmog‘ida yangi dasturni joriy qilishda Pilot va Direct usullaridan qay biri xavfsizroq?',
        expected: 'Pilot (avval 1 ta filialda sinash): agar xato chiqsa, qolgan 9 ta do‘kon ishi to‘xtab qolmaydi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l23-g1',
        num: '01',
        title: 'Joriy qilish strategiyalarini mosla',
        topic: 'Sinov va joriy qilish',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Tizimni joriy qilish usulini uning aniq taʼrifi bilan juftlang.',
          pairs: [
            { left: 'Direct changeover', right: 'Eski tizimni darhol o‘chirib, yangisiga to‘liq o‘tish' },
            { left: 'Parallel running', right: 'Ikkala tizimni bir vaqtda yuritib, natijani solishtirish' },
            { left: 'Pilot implementation', right: 'Yangi tizimni avval bitta bo‘lim yoki filialda sinash' },
            { left: 'Phased implementation', right: 'Yangi tizim qismlarini bosqichma-bosqich ishga tushirish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Qaysi joriy qilish usulida xatolik yuz bersa darhol eski tizim natijalariga tayanish mumkin, lekin ish yuklamasi ikki baravar ortadi?',
        options: ['Parallel running', 'Direct changeover', 'Pilot', 'Testlashsiz chiqarish'],
        answer: 0,
        explanation: 'Parallel usulda ham eski, ham yangi tizim baravar ishlaydi — xavfsiz, lekin qo‘shimcha mehnat talab qiladi.',
      },
      {
        prompt: 'Dastur 18 dan 65 gacha yoshni qabul qilsa, `18` va `65` qanday test maʼlumotiga kiradi?',
        options: ['Extreme (Chegaraviy)', 'Abnormal (Noto‘g‘ri)', 'Virusli', 'Tasodifiy'],
        answer: 0,
        explanation: 'Ruxsat etilgan diapazonning eng quyi va eng yuqori nuqtalari Extreme (Boundary) testdir.',
      },
      {
        prompt: 'Tizimni avval faqat bitta shahardagi filialda ishga tushirib ko‘rish qaysi strategiya?',
        options: ['Pilot', 'Direct', 'Phased', 'Parallel'],
        answer: 0,
        explanation: 'Pilot usulida bir kichik bo‘lim/filial sinov maydoni vazifasini bajaradi.',
      },
      {
        prompt: 'Direct changeover (to‘g‘ridan-to‘g‘ri o‘tish) ning eng katta xavfi nimada?',
        options: ['Yangi tizimda jiddiy xato chiqsa, orqaga qaytadigan ishlayotgan eski tizim bo‘lmaydi', 'Xodimlar ikki marta kiritadi', 'Juda sekin amalga oshadi', 'Hech qanday dastur kerak emas'],
        answer: 0,
        explanation: 'Eski tizim darhol o‘chirilgani uchun nosozlik butun tashkilot ishini to‘xtatishi mumkin.',
      },
      {
        prompt: 'Yoshi `18..65` oralig‘ida bo‘lishi kerak maydonga `150` kiritilishi qaysi test turi?',
        options: ['Abnormal (Noto‘g‘ri — rad etilishi kerak)', 'Normal', 'Extreme', 'Valid'],
        answer: 0,
        explanation: '`150` qabul qilinmaydigan chegaradan tashqari qiymat bo‘lib, dastur xato xabari chiqarishini tekshiradi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda "Maktab elektron jurnaliga o‘tish" misolida 4 joriy qilish usulini baholash.',
      timing: 'Test ma’lumotlari 15 daq, 4 strategiya 20 daq, Match va quiz 10 daq.',
      assessment: 'Normal, Extreme, Abnormal misollarni to‘g‘ri tuzish.',
      homework: '0..100 foiz baholash tizimi uchun 2 tadan Normal, Extreme va Abnormal test qiymat yozing.',
    },
  },
  {
    id: 'g9-l24',
    grade: 9,
    no: 24,
    part: '2-chorak',
    title: 'Hujjatlashtirish, baholash va texnik xizmat ko‘rsatish',
    kind: 'dars',
    hours: 1,
    tools: ['Texnik hujjat', 'Foydalanuvchi qo‘llanmasi', 'Baholash', 'Maintenance'],
    objectives: [
      'O‘quvchi Texnik hujjatlar (Technical documentation) va Foydalanuvchi qo‘llanmasi (User documentation) tarkibini farqlaydi.',
      'O‘quvchi tayyor tizimni baholash mezonlari hamda texnik xizmat turlarini (xatolarni tuzatish, yangilash) izohlaydi.',
    ],
    intro:
      'Dastur ishga tushgach, ish hali tugamaydi: foydalanuvchilar undan qanday foydalanishni bilishi, kelajakdagi dasturchilar esa kodni tushuna olishi uchun mukammal hujjatlar yoziladi.',
    sections: [
      {
        heading: 'Texnik va Foydalanuvchi hujjatlari',
        body: 'Foydalanuvchi hujjati (User documentation) oddiy xodim va mijozlar uchun yoziladi: dasturni o‘rnatish, tugmalar izohi, misollar, FAQ (ko‘p beriladigan savollar), xato xabarlari maʼnosi. Texnik hujjat (Technical documentation) esa kelajakda tizimni yangilaydigan dasturchi va administratorlar uchun: dastur kodi izohlari, o‘zgaruvchilar jadvali, ma’lumotlar bazasi sxemasi, algoritm blok-sxemalari, apparat/dastur talablari.',
        example: 'Oddiy o‘qituvchiga "Jurnalga baho qo‘yish bo‘yicha qo‘llanma" (User doc) kerak; IT mutaxassisga esa SQL jadvallar sxemasi va API kalitlari (Tech doc) kerak.',
        tip: 'Ikkala hujjatda ham kerakli umumiy qismlar: Dastur maqsadi, tizim talablari va xatolarni bartaraf etish (Troubleshooting).',
      },
      {
        heading: 'Baholash (Evaluation) va Texnik xizmat (Maintenance)',
        body: 'Baholash bosqichida tizim dastlabki talablarga qay darajada javob berishi, foydalanish qulayligi va tezligi so‘rovnoma/kuzatuv orqali tekshiriladi. Texnik xizmat ko‘rsatish esa uch xil bo‘ladi: 1) Tuzatuvchi (Corrective — topilgan xatolarni bartaraf etish); 2) Moslashtiruvchi (Adaptive — yangi qonun yoki OT yangilanishiga moslash); 3) Takomillashtiruvchi (Perfective — yangi qulay funksiyalar qo‘shish).',
        example: 'Soliq stavkasi o‘zgarganda buxgalteriya dasturini yangilash — Adaptive texnik xizmatga misoldir.',
      },
    ],
    keyTerms: [
      { term: 'User documentation', definition: 'Oddiy foydalanuvchilarga dasturda ishlashni o‘rgatuvchi yo‘riqnoma.' },
      { term: 'Technical documentation', definition: 'Dasturchi va texniklar uchun kod, arxitektura va baza tuzilmasini yorituvchi hujjat.' },
      { term: 'Baholash (Evaluation)', definition: 'Yangi tizim samaradorligi va talablarga mosligini tekshirish jarayoni.' },
      { term: 'Maintenance', definition: 'Tizim ishga tushgandan keyingi xatolarni tuzatish va yangilab borish jarayoni.' },
    ],
    steps: [
      '1. Foydalanuvchi qo‘llanmasiga kiruvchi 5 ta bo‘limni ro‘yxatga oling.',
      '2. Texnik hujjatga kiruvchi 5 ta bo‘limni ajrating.',
      '3. Texnik xizmat ko‘rsatishning 3 turi uchun real hayotiy misol keltiring.',
    ],
    practice: [
      {
        task: 'Maktab elektron kundaligining oddiy ota-ona qo‘llanmasiga SQL jadvallari chizmasi va dastur kodini qo‘shish to‘g‘rimi? Nima uchun?',
        expected: 'Noto‘g‘ri! Bu texnik hujjat tarkibi; oddiy foydalanuvchini chalkashtiradi va tizim xavfsizligiga zarar yetkazadi.',
        difficulty: 'oson',
      },
      {
        task: 'O‘quv markazi CRM tizimi ishga tushgandan 6 oy o‘tib unga SMS-xabarnoma funksiyasi qo‘shildi. Bu qaysi texnik xizmat turiga kiradi?',
        expected: 'Takomillashtiruvchi texnik xizmat (Perfective maintenance).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l24-g1',
        num: '01',
        title: 'Hujjat tarkibini sarala',
        topic: 'SDLC hujjatlashtirish',
        difficulty: 'O‘rta',
        engine: 'sort',
        config: {
          prompt: 'Elementlarni mos hujjat turiga ajrating: Foydalanuvchi qo‘llanmasi yoki Texnik hujjat.',
          categories: ['Foydalanuvchi qo‘llanmasi', 'Texnik hujjat'],
          items: [
            { text: 'Tugmalar va menyular bo‘yicha bosqichma-bosqich yo‘riqnoma', category: 'Foydalanuvchi qo‘llanmasi' },
            { text: 'Manba kodi va algoritm blok-sxemalari', category: 'Texnik hujjat' },
            { text: 'Tez-tez so‘raladigan savollar (FAQ)', category: 'Foydalanuvchi qo‘llanmasi' },
            { text: 'Ma’lumotlar bazasi jadvallari va kalitlari tuzilmasi', category: 'Texnik hujjat' },
            { text: 'Oddiy tildagi xato xabarlarini tushuntirish', category: 'Foydalanuvchi qo‘llanmasi' },
            { text: 'O‘zgaruvchilar va ma’lumot turlari ro‘yxati', category: 'Texnik hujjat' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Quyidagilardan qaysi biri FAQAT Texnik hujjat (Technical documentation) tarkibiga kiradi?',
        options: ['Dastur kodi izohlari va ma’lumotlar bazasi tuzilmasi', 'Qanday login qilish yo‘riqnomasi', 'Foydalanuvchi uchun tez-tez beriladigan savollar', 'Chop etish tugmasi tasviri'],
        answer: 0,
        explanation: 'Kod va baza strukturasi tizimni kelajakda qo‘llab-quvvatlaydigan dasturchilar uchun mo‘ljallangan.',
      },
      {
        prompt: 'Tizim ishga tushganidan keyin aniqlangan yashirin xatoni (bug) tuzatish nima deb ataladi?',
        options: ['Corrective (Tuzatuvchi) texnik xizmat', 'Pilot joriy qilish', 'Kuzatish', 'Arxivlash'],
        answer: 0,
        explanation: 'Corrective maintenance dastur ishidagi xatoliklarni bartaraf etadi.',
      },
      {
        prompt: 'Baholash (Evaluation) bosqichining asosiy maqsadi nima?',
        options: ['Yangi tizim boshlang‘ich talablarga qay darajada javob berishini aniqlash', 'Kabel o‘tkazish', 'Yangi parol o‘ylab topish', 'Fayl kengaytmasini o‘zgartirish'],
        answer: 0,
        explanation: 'Baholash loyiha muvaffaqiyatini, samaradorligini va foydalanuvchi mamnunligini o‘lchaydi.',
      },
      {
        prompt: 'Nima uchun dasturchi ketib qolganda ham Texnik hujjat juda muhim?',
        options: ['Yangi dasturchi kod va ma’lumotlar tuzilmasini tez tushunib davom ettira olishi uchun', 'Monitor yorqinligini saqlash uchun', 'Klaviatura ishlashi uchun', 'Skaner tezligi uchun'],
        answer: 0,
        explanation: 'Hujjatsiz begona kodni tushunish va o‘zgartirish juda ko‘p vaqt hamda xatolarga olib keladi.',
      },
      {
        prompt: 'Operatsion tizim yangilangani uchun dasturni moslashtirish qaysi xizmat turi?',
        options: ['Adaptive (Moslashtiruvchi) texnik xizmat', 'Document analysis', 'Black-box', 'Direct'],
        answer: 0,
        explanation: 'Adaptive maintenance tashqi muhit (OT, qonun, uskuna) o‘zgarganda tizimni moslashtiradi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfdagi biror ilova uchun 5 qatorli User guide va 3 qatorli Tech note yozdirib ko‘rish.',
      timing: 'Hujjat turlari 15 daq, Baholash va Maintenance 15 daq, Saralash va test 15 daq.',
      assessment: 'User va Technical hujjatlar o‘rtasidagi auditoriya farqini aniq bilish.',
      homework: 'O‘zingiz yoqtirgan ilova uchun qisqa 5 bandli "Foydalanuvchi yo‘riqnomasi" yozing.',
    },
  },
  {
    id: 'g9-l25',
    grade: 9,
    no: 25,
    part: '2-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Bilim sinovi', 'SDLC va Tizimlar'],
    objectives: [
      'O‘quvchi 19–24-darslar (Kommunikatsiya dasturlari, O‘lchov/Boshqaruv mikroprotsessorlari, Modellashtirish va SDLC bosqichlari) bo‘yicha bilimlarini mustahkamlaydi.',
      'O‘quvchi SDLC, test ma’lumotlari va joriy qilish strategiyalari bo‘yicha nazorat topshiriqlarini bajaradi.',
    ],
    intro:
      'Ushbu nazorat ishi darsida tizimlarni boshqarish, o‘lchov va mikroprotsessorlar, modellashtirish hamda SDLC ning barcha bosqichlari (Tahlildan Hujjatlashtirishgacha) bo‘yicha bilimlaringiz baholanadi.',
    sections: [
      {
        heading: 'Nazorat oldi qisqa eslatma',
        body: 'Eslab qoling: Sensor → ADC → Mikroprotsessor → Aktuator; Simulyatsiya xavfsiz va arzon sinov beradi; Tahlil usullari = Kuzatish, Intervyu, So‘rovnoma, Hujjatlar; Testlar = Normal, Extreme, Abnormal; Joriy qilish = Direct, Parallel, Pilot, Phased.',
        example: 'Agar savolda "eng xavfsiz, lekin ikki barobar xarajatli joriy qilish" so‘ralsa — Parallel.',
        tip: 'True/False o‘yinida har bir jumlani diqqat bilan tekshiring.',
      },
    ],
    keyTerms: [
      { term: 'ADC va Aktuator', definition: 'Analog signalni raqamlashtirish va buyruqni fizik harakatga aylantirish.' },
      { term: 'SDLC', definition: 'Tahlil → Loyihalash → Ishlab chiqish/Sinash → Joriy qilish → Hujjatlashtirish/Baholash.' },
      { term: 'Extreme test', definition: 'Qabul qilinadigan diapazonning eng chekka chegaraviy qiymatlari bilan sinash.' },
      { term: 'User vs Tech doc', definition: 'Oddiy foydalanuvchi hamda dasturchi-texniklar uchun yoziladigan hujjatlar.' },
    ],
    steps: [
      '1. True/False o‘yinida 4 ta asosiy tasdiqni tekshiring.',
      '2. Amaliy topshiriqlarni yozma bajaring.',
      '3. 5 ta yakuniy nazorat testini yeching.',
    ],
    practice: [
      {
        task: 'Avtomatik yong‘in signalizatsiyasi tizimida qaysi 2 sensor va qaysi 2 aktuator (chiqarish) ishlatilishini yozing.',
        expected: 'Sensorlar: tutun va harorat datchiklari; Aktuator/Chiqarish: sirena/chiroq hamda suv purkovchi klapan.',
        difficulty: 'oson',
      },
      {
        task: 'Parol uzunligi 8 dan 16 belgigacha bo‘lishi kerak. Normal, Extreme va Abnormal misollar yozing.',
        expected: 'Normal: 10 belgi; Extreme: 8 va 16 belgi; Abnormal: 5 yoki 20 belgi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l25-g1',
        num: '01',
        title: 'SDLC va Boshqaruv tizimlari nazorati',
        topic: 'Tizim tahlili va SDLC',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Quyidagi ilmiy-texnik tasdiqlarni To‘g‘ri yoki Noto‘g‘ri deb baholang.',
          statements: [
            {
              text: 'Sensorlar chiqaradigan analog signal kompyuterga kirishidan oldin ADC orqali raqamliga aylantiriladi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Kompyuter faqat raqamli signalni qayta ishlaydi, shuning uchun ADC zarur.',
            },
            {
              text: 'Parallel joriy qilish usuli eng arzon va eng kam mehnat talab qiladigan usuldir.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Parallel usul ikkita tizimni birdan yuritishni talab qilgani uchun eng qimmat va ko‘p mehnatlisidir.',
            },
            {
              text: 'Foydalanuvchi qo‘llanmasi (User documentation) ichida dastur kodi va SQL jadvallari sxemasi bo‘lishi shart.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Kod va baza tuzilmasi Texnik hujjat (Technical documentation) ga kiradi.',
            },
            {
              text: 'Kompyuter simulyatori yordamida uchuvchilar xavfli vaziyatlarni real samolyotga zarar yetkazmay mashq qiladilar.',
              isTrue: true,
              explanation: 'To‘g‘ri! Simulyatsiyaning bosh ustunligi xavfsizlik va tejamkorlikdir.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Harorat sensori ko‘rsatkichini uzluksiz yozib borib grafik chizuvchi dasturiy/apparat jarayoni nima?',
        options: ['Data logging (O‘lchov ma’lumotlarini qayd etish)', 'Mail merge', 'Defragmentatsiya', 'Krossvord'],
        answer: 0,
        explanation: 'Data logging sensor qiymatlarini avtomatik vaqt bo‘yicha saqlab boradi.',
      },
      {
        prompt: 'Eski tizimdan yangisiga bosqichma-bosqich — modulma-modul o‘tish usuli qanday ataladi?',
        options: ['Phased implementation', 'Direct changeover', 'Parallel running', 'OCR'],
        answer: 0,
        explanation: 'Phased usulida tizimning qismlari navbat bilan ishga tushiriladi.',
      },
      {
        prompt: 'Katta jamoa ichidan 300 kishining fikrini tezkor yig‘ish uchun eng mos tahlil usuli qaysi?',
        options: ['So‘rovnoma (Questionnaire)', 'Har biri bilan alohida intervyu', 'Kabellarni almashtirish', 'Direct o‘tish'],
        answer: 0,
        explanation: 'So‘rovnoma ko‘p sonli respondentlarni qamrab olish uchun tejamkor usuldir.',
      },
      {
        prompt: 'Mijoz yoshi 18 dan katta yoki teng bo‘lishi shart. Chegaraviy (Extreme) test qiymati qaysi?',
        options: ['18', '5', '-1', '"yigirma"'],
        answer: 0,
        explanation: '18 — ruxsat etilgan eng quyi chegara qiymatidir.',
      },
      {
        prompt: 'Ma’lumotlar bazasi sxemasi va algoritm blok-sxemalari qaysi hujjatda joylashadi?',
        options: ['Texnik hujjatda (Technical documentation)', 'Foydalanuvchi FAQ bo‘limida', 'Reklama bukletida', 'Kassa chekida'],
        answer: 0,
        explanation: 'Baza va kod arxitekturasi texnik mutaxassislar hujjatining qismidir.',
      },
    ],
    teacherNotes: {
      method: 'Yozma nazorat va interaktiv True/False sinovi.',
      timing: 'Qisqa takrorlash 5 daq, Nazorat ishi 35 daq, Tahlil 5 daq.',
      assessment: 'SDLC bosqichlari va sensor-aktuator zanjirini to‘liq o‘zlashtirish.',
      homework: 'Keyingi darsga kiberxavfsizlik tushunchalari (Phishing, Firewall) haqida o‘ylab keling.',
    },
  },
];
