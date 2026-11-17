import type { Lesson } from './types';

export const GRADE_9_Q2B: Lesson[] = [
  {
    id: 'g9-l26',
    grade: 9,
    no: 26,
    part: '2-chorak',
    title: 'Xavfsizlik muammolari. Elektron xavfsizlik. Maʼlumotlar xavfsizligi',
    kind: 'dars',
    hours: 1,
    tools: ['Elektron xavfsizlik', 'Phishing / Pharming / Smishing', 'Shaxsiy ma’lumot'],
    objectives: [
      'O‘quvchi elektron xavfsizlik (E-safety) qoidalari va shaxsiy ma’lumotlarni Internetda himoya qilish zarurligini biladi.',
      'O‘quvchi ijtimoiy muhandislik va internet firibgarlik usullari — Phishing, Pharming va Smishing dan himoyalanish yo‘llarini tushuntiradi.',
    ],
    intro:
      'Internetdagi har bir rasm, telefon raqami yoki nomaʼlum havola ortida xavf yashirinishi mumkin. Elektron xavfsizlik — nafaqat kompyuterni virusdan, balki insonni ham onlayn firibgarlardan himoya qilish madaniyatidir.',
    sections: [
      {
        heading: 'E-safety va Shaxsiy maʼlumotlar maxfiyligi',
        body: 'Shaxsiy ma’lumotlar (ism-familiya, uy manzili, maktab raqami, karta ma’lumotlari, shaxsiy suratlar) ijtimoiy tarmoqda hamma uchun ochiq qo‘yilmasligi kerak. Kiberbulling (onlayn haqorat/tahdid) holatida javob qaytarmaslik, dalilni skrinshot qilish, tajovuzkorni bloklash va ota-ona yoki ustozga xabar berish zarur.',
        example: 'Geo-tegi yoqilgan suratni tarmoqqa joylash begonalarga sizning aniq uy manzilingizni oshkor qilishi mumkin.',
        tip: 'Internetga yuklangan har qanday rasm yoki izohni butunlay o‘chirib tashlash qiyin — "joylashdan oldin o‘yla" qoidasiga amal qiling!',
      },
      {
        heading: 'Phishing, Pharming va Smishing dan himoyalanish',
        body: 'Phishing — bank yoki mashhur sayt nomidan soxta elektron xat yuborib, parol yoki karta kodini so‘rash (odatda soxta havola orqali). Smishing — SMS yoki messenjer orqali keladigan soxta havolali firibgarlik. Pharming — foydalanuvchi to‘g‘ri manzilni yozsa ham, zararli dastur yoki DNS almashtirish orqali uni yashirincha soxta saytga yo‘naltirish.',
        example: '"Siz yutuq yutdingiz, kartangiz raqamini kiriting" degan SMS — Smishing misoli. Himoya: nomaʼlum havolaga kirmang, URL harflarini (`g00gle` emas `google`) va HTTPS qulfini tekshiring!',
      },
    ],
    keyTerms: [
      { term: 'Elektron xavfsizlik (E-safety)', definition: 'Internet va raqamli qurilmalardan shaxsiy hayot hamda ma’lumotlarga zarar yetkazmay foydalanish.' },
      { term: 'Phishing', definition: 'Ishonchli tashkilot niqobida soxta xat va sayt orqali maxfiy ma’lumotlarni o‘g‘irlashga urinish.' },
      { term: 'Pharming', definition: 'Foydalanuvchi to‘g‘ri URL kiritsa ham DNS buzilishi orqali soxta saytga yo‘naltirilishi.' },
      { term: 'Smishing', definition: 'SMS xabarlar orqali amalga oshiriladigan firibgarlik (SMS + Phishing).' },
    ],
    steps: [
      '1. Shaxsiy va ommaviy ma’lumotlar ro‘yxatini ajrating.',
      '2. Phishing xatining 4 ta ogohlantiruvchi belgisini (xato domen, shoshilinch talab, nomaʼlum jo‘natuvchi, parol so‘rash) aniqlang.',
      '3. Kiberbulling va shubhali havola uchraganda qilinadigan 3 qadamni yozing.',
    ],
    practice: [
      {
        task: 'Elektron pochtaga "`support@payme-uz-verify.xyz` — Hisobingiz bloklandi, 1 soat ichida parolni kiriting" xati kelsa, qanday belgilardan uning Phishing ekanini bilasiz?',
        expected: 'Shubhali domen nomi, qo‘rqitish va shoshiltirish ohangi, havola orqali parol so‘rashi.',
        difficulty: 'oson',
      },
      {
        task: 'Phishing va Pharming orasidagi asosiy texnik farqni 2 gapda tushuntiring.',
        expected: 'Phishing da foydalanuvchi o‘zi soxta havolani bosadi; Pharming da esa to‘g‘ri sayt manzili terilsa ham DNS/zararli kod uni soxta saytga burib yuboradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l26-g1',
        num: '01',
        title: 'Kiberxavfni aniqla va himoyalan',
        topic: 'Elektron xavfsizlik',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Quyidagi vaziyatda o‘quvchi qanday harakat qilishi eng to‘g‘ri va xavfsiz?',
          scenario: 'Messenjeringizga notanish raqamdan "Maktab stipendiyasi berilmoqda, ushbu havolaga kirib bank kartangiz va SMS kodni yozing" degan xabar keldi.',
          options: [
            {
              text: 'Havolani ochmaslik, hech qanday karta yoki SMS kod bermaslik va akkauntni bloklash/shikoyat qilish',
              isCorrect: true,
              feedback: 'To‘g‘ri! Bu klassik Smishing/Phishing firibgarligi. Hech bir rasmiy tashkilot SMS kod so‘ramaydi.',
            },
            {
              text: 'Tekshirib ko‘rish uchun havolani bosib, eski parolni kiritish',
              isCorrect: false,
              feedback: 'Shubhali havolani ochish ham qurilmaga zararli fayl yuklashi mumkin.',
            },
            {
              text: 'Xabarni barcha sinfdoshlarga tarqatish',
              isCorrect: false,
              feedback: 'Firibgarlik havolasini tarqatish boshqa do‘stlaringizni ham xavf ostiga qo‘yadi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Bank nomidan soxta elektron xat yuborib, parol va karta ma’lumotlarini so‘rash usuli nima deb ataladi?',
        options: ['Phishing', 'Ergonomika', 'OCR', 'Plotter'],
        answer: 0,
        explanation: 'Phishing ishonchli tashkilot qiyofasiga kirib foydalanuvchini aldashga qaratilgan.',
      },
      {
        prompt: 'Foydalanuvchi to‘g‘ri veb-manzilni yozsa ham, zararli kod yoki DNS orqali soxta sahifaga yo‘naltirilishi qaysi xavf?',
        options: ['Pharming', 'Backup', 'Multitasking', 'Defragmentatsiya'],
        answer: 0,
        explanation: 'Pharming foydalanuvchi xatosiga emas, DNS/hosts o‘zgartirilishiga tayanadi.',
      },
      {
        prompt: 'Ijtimoiy tarmoqda kiberbulling (haqorat yoki tahdid) ga duch kelganda birinchi to‘g‘ri harakat qaysi?',
        options: ['Skrinshot olish, foydalanuvchini bloklash va katta yoshli ishonchli odamga xabar berish', 'Barcha parollarni ommaga e’lon qilish', 'Haqoratga haqorat bilan javob qaytarish', 'Shaxsiy uy manzilini yozish'],
        answer: 0,
        explanation: 'Dalilni saqlash, tajovuzkorni bloklash va kattalardan yordam so‘rash eng xavfsiz yo‘ldir.',
      },
      {
        prompt: 'Smishing qaysi aloqa kanali orqali amalga oshiriladi?',
        options: ['SMS yoki mobil xabarlar orqali', 'Qog‘oz gazeta orqali', 'Lazer printer orqali', 'Bluetooth sichqoncha orqali'],
        answer: 0,
        explanation: 'Smishing = SMS + Phishing.',
      },
      {
        prompt: 'Shaxsiy ma’lumotlarni himoyalash nuqtai nazaridan qaysi ma’lumotni ommaviy profilga qo‘ymaslik kerak?',
        options: ['Aniq uy manzili, pasport nusxasi va telefon raqami', 'Sevimli kitob janri', 'Matematikaga qiziqishi', 'Sevimli rangi'],
        answer: 0,
        explanation: 'Manzil, hujjat va raqamlar shaxsiy xavfsizlikka bevosita tahdid solishi mumkin.',
      },
    ],
    teacherNotes: {
      method: 'Soxta va haqiqiy bank xabarlari namunalarini solishtirib ko‘rsatish (faoliyat himoya ruhida).',
      timing: 'E-safety 15 daq, Phishing/Pharming/Smishing 15 daq, Case study va test 15 daq.',
      assessment: 'Firibgarlik belgilarini to‘g‘ri aniqlash.',
      homework: 'Ijtimoiy tarmoqdagi xavfsiz profil sozlamalari bo‘yicha 5 punktli eslatma yozing.',
    },
  },
  {
    id: 'g9-l27',
    grade: 9,
    no: 27,
    part: '2-chorak',
    title: 'Axborot himoyasi protokoli. Antiviruslar va fayervol',
    kind: 'dars',
    hours: 1,
    tools: ['Firewall', 'Antivirus', 'SSL / TLS', 'Shifrlash'],
    objectives: [
      'O‘quvchi Fayervol (Firewall) tarmoq trafikini qoidalar asosida qanday filtrlashini tushuntiradi.',
      'O‘quvchi Antivirus dasturlari, shifrlash (Encryption) va xavfsiz protokollar (SSL/TLS) ning o‘zaro himoya vazifasini izohlaydi.',
    ],
    intro:
      'Kompyuter tarmoqqa ulangan zahoti himoya devorisiz qolmasligi kerak. Antivirus tizim ichidagi zararli fayllarni ovlasa, Fayervol tashqi tarmoq darvozasida turib ruxsatsiz kirishlarni to‘sadi, shifrlash esa ma’lumotni o‘qib bo‘lmas kodga aylantiradi.',
    sections: [
      {
        heading: 'Fayervol (Firewall) va Antivirus qanday himoya qiladi?',
        body: 'Fayervol (apparat yoki dasturiy) — shaxsiy tarmoq va Internet o‘rtasidagi nazorat punkti. U kiruvchi va chiquvchi ma’lumot paketlarini (IP-manzil, port raqami, protokol) belgilangan qoidalar bilan tekshirib, shubhali trafikni bloklaydi. Antivirus dasturi esa qurilmadagi fayllarni skanerlab, virus, chuvalchang (worm) va troyanlarni virus bazasi (signatures) hamda xatti-harakat tahlili orqali aniqlab karantinga oladi yoki o‘chiradi.',
        example: 'Xavfsiz ishlash uchun Antivirus bazasi har kuni avtomatik yangilanib turishi shart, aks holda yangi chiqqan zararkunandani taniy olmaydi.',
        tip: 'Fayervol kompyuterga fizik zarar yoki foydalanuvchi o‘zi USB orqali ochgan zararli faylni to‘sa olmaydi — buning uchun Antivirus va ehtiyotkorlik kerak!',
      },
      {
        heading: 'Shifrlash va SSL/TLS himoya protokollari',
        body: 'Shifrlash (Encryption) — oddiy tushunarli matnni (Plaintext) maxsus algoritm va kalit yordamida o‘qib bo‘lmaydigan shifrmatnga (Ciphertext) aylantirish. Agar tarmoqda ma’lumot tutib olinsa ham, kalitsiz uni o‘qib bo‘lmaydi. SSL/TLS protokollari HTTPS orqali veb-brauzer va server orasida shifrlangan tunnel yaratib, raqamli sertifikat bilan saytning haqiqiyligini tasdiqlaydi.',
        example: 'Onlayn do‘konda to‘lov qilayotganda TLS protokoli karta raqamingizni faqat bank serveri ochadigan qilib shifrlaydi.',
      },
    ],
    keyTerms: [
      { term: 'Fayervol (Firewall)', definition: 'Kiruvchi va chiquvchi tarmoq trafikini xavfsizlik qoidalariga ko‘ra filtrlaydigan devor.' },
      { term: 'Antivirus', definition: 'Zararli dasturlarni aniqlaydigan, bloklaydigan va karantinga oladigan himoya dasturi.' },
      { term: 'Shifrlash (Encryption)', definition: 'Ma’lumotni ruxsatsiz o‘qishdan saqlash uchun kalit yordamida kodlangan shaklga o‘girish.' },
      { term: 'SSL / TLS', definition: 'Internetda ma’lumotlarni shifrlash va server haqiqiyligini tasdiqlovchi kriptografik protokol.' },
    ],
    steps: [
      '1. Tarmoq kirishida Fayervol va Tizim ichida Antivirus vazifalarini farqlang.',
      '2. Oddiy shifrlash (Sezar shifri) tamoyilini Cipher o‘yinida sinab ko‘ring.',
      '3. HTTPS va SSL/TLS sertifikatining qanday tekshirilishini ko‘rib chiqing.',
    ],
    practice: [
      {
        task: 'Nima uchun birgina Antivirus yoki birgina Fayervolning o‘zi to‘liq himoya bera olmaydi?',
        expected: 'Fayervol tashqi tarmoq ulanishlarini filtrlaydi, lekin fleshkadagi virusni tekshirmaydi; Antivirus esa faylni tekshiradi, lekin tarmoq portlarini yopmaydi. Ikkalasi birga ishlaydi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Antivirus bazasini yangilamasdan 2 yil ishlatish qanday xavf tug‘dirishini yozing.',
        expected: 'Yangi paydo bo‘lgan virus va ransomware lar imzo bazasida bo‘lmagani uchun antivirus ularni o‘tkazib yuboradi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g9-l27-g1',
        num: '01',
        title: 'Sezar shifri laboratoriya mashqi',
        topic: 'Shifrlash asoslari',
        difficulty: 'O‘rta',
        engine: 'cipher',
        config: {
          prompt: 'Shifrlash tamoyilini tushunish uchun berilgan so‘zni +3 siljish (Sezar shifri) bilan shifrlang!',
          mode: 'encode',
          plaintext: 'XAVFSIZ',
          shift: 3,
          hint: 'Alifbo bo‘yicha har bir harfni 3 ta oldinga suring (A→D, B→E).',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Tashqi Internet va lokal tarmoq orasida turib, ruxsatsiz kiruvchi paketlarni to‘sadigan himoya vositasi nima?',
        options: ['Fayervol (Firewall)', 'Plotter', 'OCR', 'Word'],
        answer: 0,
        explanation: 'Firewall belgilangan qoidalar asosida tarmoq trafikini filtrlaydi.',
      },
      {
        prompt: 'Shifrlash (Encryption) ning asosiy vazifasi nimadan iborat?',
        options: ['Ma’lumot tutib olinsa ham kalitsiz o‘qib bo‘lmaydigan holga keltirish', 'Faylni butunlay o‘chirish', 'Monitorni o‘chirish', 'Printer tezligini oshirish'],
        answer: 0,
        explanation: 'Shifrlangan ma’lumot (ciphertext) faqat maxfiy kalitga ega qabul qiluvchi tomonidangina ochiladi.',
      },
      {
        prompt: 'HTTPS ulanishini taʼminlovchi zamonaviy shifrlash protokoli qaysi?',
        options: ['TLS (SSL)', 'FTP', 'GIF', 'CSV'],
        answer: 0,
        explanation: 'TLS (Transport Layer Security) avvalgi SSL ning takomillashgan davomchisi bo‘lib, HTTPS ni himoyalaydi.',
      },
      {
        prompt: 'Antivirus dasturi samarali ishlashi uchun nima qilish zarur?',
        options: ['Virus imzolari bazasini muntazam yangilab turish', 'Uni har hafta o‘chirib tashlash', 'Fayervolni butunlay o‘chirish', 'Faqat eski fayllarni saqlash'],
        answer: 0,
        explanation: 'Har kuni minglab yangi zararli dasturlar chiqqani sababli antivirus bazasi yangilanishi shart.',
      },
      {
        prompt: 'Fayervol qaysi holatdan himoya QILOLMAYDI?',
        options: ['Foydalanuvchi o‘zi tekshirmasdan USB fleshkadan zararli dasturni ishga tushirsa', 'Begona IP dan ruxsatsiz portga ulanishdan', 'Zararli chiquvchi ulanishni to‘sishdan', 'Tarmoq paketlarini filtrlashdan'],
        answer: 0,
        explanation: 'Mahalliy tashuvchidan qo‘lda ishga tushirilgan faylni tarmoq fayervoli emas, Antivirus tekshiradi.',
      },
    ],
    teacherNotes: {
      method: 'Shahar darvozasi qo‘riqchisi (Firewall), ichki politsiya (Antivirus) va seyf qulfi (Encryption) analogiyasi.',
      timing: 'Firewall/Antivirus 15 daq, Shifrlash/SSL 15 daq, Cipher mashqi va quiz 15 daq.',
      assessment: 'Cipher mashqini to‘g‘ri bajarish va himoya qatlamlarini tushuntirish.',
      homework: 'Kuchli himoyalangan uy kompyuteri uchun 4 qatlamli xavfsizlik rejasini tuzing.',
    },
  },
  {
    id: 'g9-l28',
    grade: 9,
    no: 28,
    part: '2-chorak',
    title: 'Auditoriyani huquqiy, maʼnaviy, axloqiy va madaniy jihatdan baho berish',
    kind: 'dars',
    hours: 1,
    tools: ['Auditoriya tahlili', 'Axborot etikasi', 'Madaniy moslik'],
    objectives: [
      'O‘quvchi har qanday raqamli mahsulot (sayt, o‘yin, hujjat) yaratishdan oldin maqsadli auditoriyani yosh, til, tajriba va madaniyat jihatidan tahlil qiladi.',
      'O‘quvchi huquqiy, axloqiy (etika), maʼnaviy va madaniy normalarga zid kelmaydigan kontent tayyorlash mezonlarini qo‘llaydi.',
    ],
    intro:
      '7 yoshli bolalar uchun yaratilgan sayt 50 yoshli muhandislar uchun mo‘ljallangan portaldan butunlay boshqacha bo‘ladi! Kontent yaratuvchi odam nafaqat dizaynni, balki tinglovchilarning yoshi, madaniyati, axloqiy qadriyatlari va qonun talablarini ham hisobga olishi kerak.',
    sections: [
      {
        heading: 'Maqsadli auditoriyani baholash mezonlari',
        body: 'Hujjat, taqdimot yoki veb-sayt yaratishdan avval auditoriyaning 4 jihatini aniqlang: 1) Yoshi (bolalar uchun yirik shrift, yorqin rasm va sodda til; kattalar uchun rasmiy uslub va batafsil faktlar); 2) Texnik savodxonligi (boshlang‘ich foydalanuvchiga katta tugmalar va tushunarli yo‘riqnoma); 3) Til va imkoniyati cheklanganlik (Accessibility — ko‘rish qobiliyati pastlar uchun baland kontrast va audio tasvir); 4) Qiziqishlari.',
        example: '1-sinf o‘quvchilari uchun tayyorlangan taqdimotda mayda 10pt matnli uzun jadvallar emas, katta illyustratsiyalar va qisqa so‘zlar ishlatiladi.',
        tip: 'Kontent dizaynida "Accessibility" — hamma, jumladan zaif ko‘ruvchilar ham o‘qiy oladigan rang kontrasti va Alt-matn qo‘shishdir.',
      },
      {
        heading: 'Huquqiy, axloqiy, maʼnaviy va madaniy jihatlar',
        body: 'Huquqiy (Legal): qonun bilan taqiqlangan ma’lumot tarqatmaslik, mualliflik huquqini buzmaslik, shaxsiy ma’lumotlarni ruxsatsiz eʼlon qilmaslik. Axloqiy (Ethical): qonunda yozilmagan bo‘lsa ham adolatli bo‘lish (masalan, yolg‘on reklama qilmaslik, kiberbullingga yo‘l qo‘ymaslik). Madaniy va maʼnaviy (Cultural/Moral): turli millat, din va mahalliy anʼanalarning ramzlari, rang maʼnolari va odob meʼyorlarini hurmat qilish.',
        example: 'Bir mamlakatda omad belgisi sanalgan imo-ishora yoki rang boshqa madaniyatda hurmatsizlik deb qabul qilinishi mumkin — shuning uchun global saytda neytral va hurmatli tasvir tanlanadi.',
      },
    ],
    keyTerms: [
      { term: 'Maqsadli auditoriya', definition: 'Axborot mahsuloti (sayt, hujjat, video) yo‘naltirilgan aniq odamlar guruhi.' },
      { term: 'Accessibility (Qulaylik)', definition: 'Turli jismoniy imkoniyatga ega insonlar uchun axborotdan teng foydalanish sharoiti.' },
      { term: 'Huquqiy vs Axloqiy', definition: 'Huquqiy — qonun bilan majburiy tartib; Axloqiy — jamiyatdagi vijdon va halollik mezoni.' },
      { term: 'Madaniy moslashuv', definition: 'Kontentdagi til, rang, tasvir va urf-odatlarni auditoriya madaniyatiga hurmat bilan moslashtirish.' },
    ],
    steps: [
      '1. Ikkita auditoriyani (6 yoshli bolalar va maktab o‘qituvchilari) tanlab, shrift, rang va til uslubini belgilang.',
      '2. Qonuniy bo‘lsa-da, axloqan noto‘g‘ri bo‘lgan 2 ta raqamli holatga misol toping.',
      '3. Ko‘zi ojiz yoki rang ajratolmaydigan foydalanuvchilar uchun saytni moslash choralarini sanang.',
    ],
    practice: [
      {
        task: 'Keksa yoshdagi foydalanuvchilar uchun "Onlayn poliklinikaga yozilish" sahifasini qanday dizayn qilishni 3 bandda yozing.',
        expected: 'Yirik shrift (16–18px+), yuqori rang kontrasti, sodda katta tugmalar va qisqa tushunarli ko‘rsatmalar.',
        difficulty: 'oson',
      },
      {
        task: 'Huquqiy buzilish va Axloqiy buzilish o‘rtasidagi farqni AKT misolida tushuntiring.',
        expected: 'Litsenziyasiz dastur o‘g‘irlash — huquqiy buzilish (qonunga zid); do‘stining muvaffaqiyatsiz kulgili rasmini ruxsatsiz guruhda masxara qilish — axloqiy va ma’naviy buzilish.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l28-g1',
        num: '01',
        title: 'Auditoriyaga mos kontent tanla',
        topic: 'Auditoriya va etika',
        difficulty: 'Oson',
        engine: 'casestudy',
        config: {
          prompt: 'Qaysi dizayn qarori ko‘rsatilgan auditoriya uchun eng to‘g‘ri va hurmatli?',
          scenario: 'Siz 1–2-sinf o‘quvchilari uchun "Yo‘l harakati qoidalari" mavzusida taʼlimiy veb-sahifa tayyorlayapsiz.',
          options: [
            {
              text: 'Yirik shrift, yorqin tushunarli illyustratsiyalar, qisqa gaplar va ovozli yordamchi tugmalar qo‘shish',
              isCorrect: true,
              feedback: 'Ajoyib! Yosh bolalar uchun ko‘rgazmali, sodda til va yirik elementlar eng samaralidir.',
            },
            {
              text: '10pt mayda shriftda 10 sahifalik yuridik qonun matnini joylashtirish',
              isCorrect: false,
              feedback: 'Kichik yoshdagi bolalar murakkab yuridik matn va mayda shriftni o‘qiy olmaydi.',
            },
            {
              text: 'Kulrang fonda xira kulrang harflar ishlatish',
              isCorrect: false,
              feedback: 'Past kontrast barcha foydalanuvchilar, ayniqsa bolalar uchun ko‘rishni qiyinlashtiradi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Bolalar auditoriyasi uchun yaratilgan o‘quv veb-saytida qaysi xususiyat bo‘lishi kerak?',
        options: ['Yirik shrift, tushunarli sodda matn va aniq rasmlar', 'Murakkab moliyaviy terminlar', 'Past kontrastli qorong‘i matn', 'Faqat lotincha yuridik hujjatlar'],
        answer: 0,
        explanation: 'Auditoriya yoshiga mos ravishda til soddaligi va vizual yorqinlik muhim.',
      },
      {
        prompt: 'Kontent yaratishda Accessibility (Qulaylik) deganda nima tushuniladi?',
        options: ['Ko‘rish, eshitish yoki harakat imkoniyati cheklangan odamlar ham bemalol foydalana olishi', 'Faqat tezkor internetda ochilishi', 'Fayl hajmining 1 GB bo‘lishi', 'Parolni olib tashlash'],
        answer: 0,
        explanation: 'Alt-matn, baland kontrast va subtitrlar barcha foydalanuvchilar uchun teng imkoniyat beradi.',
      },
      {
        prompt: 'Qonunan ruxsat etilgan bo‘lsa-da, insonlarning his-tuyg‘ulari va urf-odatlariga hurmatsizlik ko‘rsatish qaysi meʼyorning buzilishidir?',
        options: ['Axloqiy va madaniy meʼyorlar (Ethical & Cultural)', 'CPU tezligi', 'DNS standarti', 'Arxivlash qoidasi'],
        answer: 0,
        explanation: 'Etika va madaniyat qonunda yozilmagan holatlarda ham o‘zaro hurmatni talab qiladi.',
      },
      {
        prompt: 'Global xalqaro kompaniya veb-saytni turli davlatlar uchun chiqarishda nimaga eʼtibor qaratishi lozim?',
        options: ['Til, valyuta, sana formati va madaniy ramzlarning mahalliy talabga mosligiga', 'Faqat bitta tilda qoldirishga', 'Rasmlarni butunlay o‘chirishga', 'Hammani bitta vaqt zonasiga o‘tkazishga'],
        answer: 0,
        explanation: 'Lokalizatsiya va madaniy sezgirlik foydalanuvchi ishonchini oshiradi.',
      },
      {
        prompt: 'Boshqa odamning shaxsiy suratini ruxsatsiz tarmoqqa joylab, ustidan kulish nima hisoblanadi?',
        options: ['Ham axloqiy, ham huquqiy buzilish (kiberbulling va maxfiylikka tajovuz)', 'Foydali reklama', 'Texnik xizmat', 'Normal test'],
        answer: 0,
        explanation: 'Shaxsiy tasvir va shaʼn daxlsizligi ham qonun, ham axloq bilan himoyalangan.',
      },
    ],
    teacherNotes: {
      method: 'Turli yosh guruhlari (1-sinf vs 11-sinf vs kattalar) uchun bitta mavzudagi 3 ta maket g‘oyasini solishtirish.',
      timing: 'Auditoriya omillari 15 daq, Huquq/Axloq/Madaniyat 15 daq, Case study va test 15 daq.',
      assessment: 'Har bir auditoriya uchun to‘g‘ri vizual va axloqiy tanlov qilish.',
      homework: 'O‘zingiz bilgan bir taʼlimiy saytni auditoriyaga mosligi bo‘yicha 4 mezon asosida baholang.',
    },
  },
  {
    id: 'g9-l29',
    grade: 9,
    no: 29,
    part: '2-chorak',
    title: 'Mualliflik huquqi va uning turlari. Mualliflik huquqi himoyasi',
    kind: 'dars',
    hours: 1,
    tools: ['Copyright ©', 'Creative Commons', 'Plagiat', 'DRM / Litsenziya'],
    objectives: [
      'O‘quvchi mualliflik huquqi (Copyright), Creative Commons (CC) litsenziyalari, Open Source va Public Domain tushunchalarini farqlaydi.',
      'O‘quvchi dasturiy taʼminot va raqamli kontentni piratlikdan himoya qilish usullari (litsenziya kaliti, dongle, DRM, suv belgisi) hamda plagiatdan saqlanishni tushuntiradi.',
    ],
    intro:
      'Internetdagi har bir rasm, musiqa, matn yoki kompyuter dasturi kimningdir mehnati bilan yaratilgan va qonun bilan himoyalangan. Uni ruxsatsiz ko‘chirib "meniki" deyish — ham qonunbuzarlik, ham muallif mehnatini qadrsizlantirishdir.',
    sections: [
      {
        heading: 'Mualliflik huquqi, Plagiat va Litsenziya turlari',
        body: 'Copyright (©) muallifga o‘z asaridan nusxa olish, tarqatish va sotishda mutlaq huquq beradi. Plagiat — boshqa birovning matni yoki dasturini manbasini ko‘rsatmasdan o‘z nomidan taqdim etish. Creative Commons (CC) — muallifning maʼlum shartlar (masalan, ismini ko‘rsatish — BY, notijorat — NC) asosida bepul foydalanishga ruxsat berishi. Public Domain — mualliflik muddati o‘tgan yoki ochiq mulkka aylangan asarlar.',
        example: 'Referat yozganda Vikipediyadan matn ko‘chirib manbasini bermaslik — plagiat; iqtibos keltirib manbani ko‘rsatish esa halol ilmiy ishdir.',
        tip: 'Litsenziya shartlari: Freeware (bepul, kodi yopiq), Shareware (vaqtinchalik bepul sinov), Open Source (kodi ochiq, o‘zgartirish mumkin).',
      },
      {
        heading: 'Dastur va kontentni himoya qilish usullari',
        body: 'Kompaniyalar noqonuniy nusxalashni (piratlikni) to‘xtatish uchun quyidagi choralarni qo‘llaydi: 1) Unikal Mahsulot kaliti (Product Key / Serial number); 2) Onlayn aktivatsiya; 3) Apparat kaliti (Dongle — USB qurilma ulanmasa qimmat CAD dastur ishlamaydi); 4) DRM (Digital Rights Management — elektron kitob/musiqani nusxalashni cheklash); 5) Suv belgisi (Watermark — rasm ustiga xira muallif nomi tushirish).',
        example: 'Professional fotograflar namuna suratlarga shaffof Watermark qo‘yadi; mijoz to‘lov qilgach toza faylni oladi.',
      },
    ],
    keyTerms: [
      { term: 'Mualliflik huquqi (Copyright)', definition: 'Yaratilgan ijodiy asar yoki dasturni muallif ruxsatisiz nusxalash va tarqatishni cheklovchi qonun.' },
      { term: 'Plagiat', definition: 'Begona ishni manba ko‘rsatmasdan o‘ziniki qilib ko‘rsatish.' },
      { term: 'Creative Commons (CC)', definition: 'Muallif ko‘rsatgan shartlar asosida asardan erkin foydalanish ruxsatnomasi.' },
      { term: 'Dongle / Product Key', definition: 'Dastur litsenziyasini tasdiqlovchi USB apparat kaliti yoki seriya raqami.' },
    ],
    steps: [
      '1. Copyright, Creative Commons va Open Source litsenziyalarini jadvalda taqqoslang.',
      '2. Pirat dastur ishlatishning 3 ta xavfini (qonuniy javobgarlik, virus/troyan xavfi, yangilanish yo‘qligi) sanang.',
      '3. Taqdimotga rasm olayotganda muallif manbasini to‘g‘ri ko‘rsatishni mashq qiling.',
    ],
    practice: [
      {
        task: 'Maktab taqdimotiga internetdan surat olmoqchisiz. Mualliflik huquqini buzmaslik uchun qanday 2 yo‘l tutasiz?',
        expected: '1) CC/Public Domain litsenziyali (Unsplash, Wikimedia Commons) manbalardan olish; 2) Muallif va sayt havolasini slayd pastida ko‘rsatish.',
        difficulty: 'oson',
      },
      {
        task: 'Nima uchun pirat (buzilgan "crack") dasturlarni o‘rnatish kompyuter xavfsizligi uchun ham xatarli?',
        expected: 'Buzilgan dasturlar ichiga ko‘pincha troyan, spyware yoki ransomware yashirilgan bo‘ladi va xavfsizlik yangilanishlari kelmaydi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l29-g1',
        num: '01',
        title: 'Litsenziya va himoya turlari',
        topic: 'Mualliflik huquqi',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Tushuncha va himoya usullarini ularning aniq taʼrifi bilan juftlang.',
          pairs: [
            { left: 'Plagiat', right: 'Birovning asarini manbasini bermasdan o‘z nomi bilan taqdim etish' },
            { left: 'Open Source', right: 'Dastlabki kodi ochiq bo‘lgan va o‘zgartirishga ruxsat etilgan dastur' },
            { left: 'Dongle', right: 'Dasturni ishga tushirish uchun kompyuterga ulanadigan fizik USB kalit' },
            { left: 'Watermark', right: 'Rasm yoki video ruxsatsiz ishlatilmasligi uchun qo‘yiladigan shaffof belgi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Boshqa muallif matnini manba ko‘rsatmasdan o‘z referatingizga ko‘chirib qo‘yish nima deyiladi?',
        options: ['Plagiat', 'Validatsiya', 'Kesh', 'Simulyatsiya'],
        answer: 0,
        explanation: 'Manbasiz ko‘chirish plagiat — akademik va huquqiy qoidabuzarlikdir.',
      },
      {
        prompt: 'Dasturni noqonuniy nusxalashdan saqlash uchun kompyuter USB portiga ulanadigan fizik himoya kaliti nima?',
        options: ['Dongle', 'Hub', 'Modem', 'Trackpad'],
        answer: 0,
        explanation: 'Qimmat muhandislik dasturlari ko‘pincha apparat kaliti (Dongle) bilan himoyalanadi.',
      },
      {
        prompt: 'Kodi hamma uchun ochiq, bepul va hamjamiyat tomonidan rivojlantiriladigan dastur turi qaysi?',
        options: ['Open Source (Ochiq kodli)', 'Proprietary (Yopiq tijoriy)', 'Shareware', 'Ransomware'],
        answer: 0,
        explanation: 'Linux, LibreOffice va GIMP ochiq kodli (Open Source) dasturlardir.',
      },
      {
        prompt: 'Fotosuratchilar internetga qo‘ygan namunaviy rasmlarini himoyalash uchun ustiga nima joylashtiradilar?',
        options: ['Suv belgisi (Watermark)', 'DNS manzil', 'MAC kod', 'Barcode'],
        answer: 0,
        explanation: 'Shaffof suv belgisi rasmni ruxsatsiz tijoriy ishlatishga to‘sqinlik qiladi.',
      },
      {
        prompt: '30 kunlik bepul sinov muddati tugagach to‘lov so‘raydigan dastur qaysi toifaga kiradi?',
        options: ['Shareware', 'Public domain', 'Open source', 'Firmware'],
        answer: 0,
        explanation: 'Shareware — "avval sinab ko‘r, yoqsa sotib ol" modelidagi dastur.',
      },
    ],
    teacherNotes: {
      method: 'Creative Commons belgilarini (BY, NC, SA) ko‘rsatib, bepul rasm qidirish amaliyoti.',
      timing: 'Mualliflik huquqi va litsenziyalar 20 daq, Himoya usullari 15 daq, Match va test 10 daq.',
      assessment: 'Freeware, Shareware, Open Source va Copyright farqini aytish.',
      homework: 'Taqdimotlarda ruxsat etilgan bepul suratlar topish mumkin bo‘lgan 3 ta CC/ochiq platforma nomini yozing.',
    },
  },
  {
    id: 'g9-l30',
    grade: 9,
    no: 30,
    part: '2-chorak',
    title: 'AKT foydalanuvchisi bilan elektron xat orqali muloqot qilish. Spam tushunchasi',
    kind: 'dars',
    hours: 1,
    tools: ['Elektron pochta', 'To / CC / BCC', 'Netiket', 'Spam filtri'],
    objectives: [
      'O‘quvchi elektron pochta maydonlari (To, CC, BCC, Subject, Attachment) va xat yozish odobi (Netiquette) qoidalarini to‘g‘ri qo‘llaydi.',
      'O‘quvchi Spam tushunchasi, uning zararlari hamda spamlardan himoyalanish usullarini izohlaydi.',
    ],
    intro:
      'Elektron pochta — maktab, universitet va ish joylaridagi asosiy rasmiy muloqot vositasi. Ammo xatni noto‘g‘ri manzilga yuborish, mavzusiz qoldirish yoki barcha qabul qiluvchilar pochtasini oshkor qilish jiddiy xato sanaladi.',
    sections: [
      {
        heading: 'To, CC, BCC va Elektron pochta odobi (Netiket)',
        body: 'To — asosiy qabul qiluvchi manzili. CC (Carbon Copy — Nusxa) — xabardan xabardor bo‘lishi kerak bo‘lgan odamlar (barcha manzillar ko‘rinadi). BCC (Blind Carbon Copy — Yashirin nusxa) — bir nechta odamga xat yuborganda ular bir-birining elektron manzilini ko‘rmasligi uchun (shaxsiy ma’lumot maxfiyligini saqlaydi!). Mavzu (Subject) aniq va qisqa bo‘lishi, ilova (Attachment) hajmi chekloviga (odatda 20–25 MB) amal qilinishi lozim.',
        example: 'Maktab direktori 200 nafar ota-onaga eʼlon yuborganda barcha manzillarni To ga emas, BCC ga qo‘yishi shart — aks holda hamma bir-birining shaxsiy emailini ko‘rib qoladi.',
        tip: 'Rasmiy xatda HAMMA HARFLARNI BOSH HARF (CAPS LOCK) bilan yozmang — Internet odobida bu baqirish belgisi hisoblanadi!',
      },
      {
        heading: 'Spam tushunchasi va unga qarshi kurash',
        body: 'Spam — foydalanuvchining roziligisiz ommaviy ravishda yuboriladigan reklama, firibgarlik yoki keraksiz elektron xabarlar. Zararlari: pochta qutisini to‘ldiradi, tarmoq o‘tkazuvchanligini band qiladi, ichida Phishing havolalari yoki virusli ilovalar bo‘lishi mumkin. Himoya: spam-filtrni yoqish, nomaʼlum xatdagi "Unsubscribe" tugmasini shubhali bo‘lsa bosmaslik, asosiy pochtani hamma saytga yozavermaslik.',
        example: 'Shubhali saytlarda ro‘yxatdan o‘tishda alohida ikkilamchi pochta manzilidan foydalanish asosiy ish pochtangizni spamdan toza saqlaydi.',
      },
    ],
    keyTerms: [
      { term: 'CC (Nusxa)', definition: 'Asosiy xat nusxasini manzili barchaga ko‘rinadigan tarzda boshqa shaxslarga yuborish.' },
      { term: 'BCC (Yashirin nusxa)', definition: 'Qabul qiluvchilar bir-birining email manzilini ko‘rmasligi uchun yuboriladigan yashirin nusxa.' },
      { term: 'Netiket (Netiquette)', definition: 'Internet va elektron pochtada madaniy, hurmatli va aniq muloqot qilish qoidalari.' },
      { term: 'Spam', definition: 'Roziliksiz ommaviy yuboriladigan keraksiz, reklama yoki zararli elektron xabarlar.' },
    ],
    steps: [
      '1. To, CC va BCC maydonlarining farqini amaliy misolda tekshiring.',
      '2. Ustozga rasmiy elektron xat tuzish shablonini (Mavzu, Salomlashish, Asosiy matn, Xayrlashish) yozing.',
      '3. Spam qutisiga tushgan xatlar bilan qanday munosabatda bo‘lishni aniqlang.',
    ],
    practice: [
      {
        task: 'Sinf rahbari 30 ta ota-onaga ekskursiya haqida xat yubormoqda. Ota-onalarning email manzillari bir-biriga ko‘rinmasligi uchun qaysi maydon ishlatiladi?',
        expected: 'BCC (Yashirin nusxa) maydoni.',
        difficulty: 'oson',
      },
      {
        task: 'Quyidagi noto‘g‘ri xatni tahrirlang: Mavzu: (bo‘sh) | Matn: "SALOM MENGA DARSLIKNI TASHAB YUBORING TEZDA".',
        expected: 'Mavzu: 9-sinf Informatika darsligi so‘rovi | Matn: "Assalomu alaykum, hurmatli ustoz! Iltimos, 9-sinf elektron darsligini yubora olasizmi? Hurmat bilan, Alisher."',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l30-g1',
        num: '01',
        title: 'Elektron pochta maydonlari',
        topic: 'Elektron pochta va Spam',
        difficulty: 'Oson',
        engine: 'fillblank',
        config: {
          prompt: 'Elektron pochta qoidalariga oid jumlalarni to‘ldiring.',
          template: 'Boshqa qabul qiluvchilar bir-birining manzilini ko‘rmasligi uchun {{0}} maydoni, hamkasbni xabardor qilish uchun {{1}} maydoni ishlatiladi; roziliksiz kelgan ommaviy reklama xatlari esa {{2}} deyiladi.',
          blanks: [
            { options: ['BCC', 'CC', 'Subject'], answer: 'BCC' },
            { options: ['CC', 'BCC', 'Attachment'], answer: 'CC' },
            { options: ['Spam', 'Netiket', 'Reply'], answer: 'Spam' },
          ],
          hint: 'Blind Carbon Copy = BCC; Carbon Copy = CC; Keraksiz xabar = Spam.',
          explanation: 'BCC shaxsiy manzillar maxfiyligini saqlaydi, CC ochiq nusxa beradi, Spam esa keraksiz xatdir.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ko‘p sonli mijozlarga bir xil xabar yuborganda ularning shaxsiy email manzillarini yashirish uchun qaysi maydon ishlatiladi?',
        options: ['BCC (Blind Carbon Copy)', 'CC', 'To', 'Subject'],
        answer: 0,
        explanation: 'BCC maydonidagi manzillar boshqa qabul qiluvchilarga ko‘rinmaydi.',
      },
      {
        prompt: 'Elektron pochtada "Reply All" (Barchaga javob berish) tugmasi qachon ehtiyotkorlik bilan ishlatilishi kerak?',
        options: ['Faqat barcha xat ishtirokchilari javobingizni ko‘rishi shart bo‘lganda', 'Har qanday shaxsiy rahmat aytishda', 'Spam kelganda', 'Fayl o‘chirishda'],
        answer: 0,
        explanation: '"Reply All" 100 kishiga keraksiz javob yuborib yuborishi mumkin — shaxsiy javobda "Reply" bosing.',
      },
      {
        prompt: 'Spam xabarlar nima uchun xavfli bo‘lishi mumkin?',
        options: ['Ichida Phishing havolalari yoki zararli fayl ilovalari bo‘lishi mumkin', 'Monitorni sindiradi', 'Protsessorni eritadi', 'Faqat matnni tarjima qiladi'],
        answer: 0,
        explanation: 'Ko‘plab spam xatlar ortida firibgarlik va virus tarqatish yotadi.',
      },
      {
        prompt: 'Rasmiy elektron xatda "Subject" (Mavzu) satri qanday bo‘lishi lozim?',
        options: ['Qisqa, aniq va xat mazmunini aks ettiruvchi', 'Bo‘sh qoldiriladi', 'Butun xat matni yoziladi', 'Faqat kulgich (emoji) qo‘yiladi'],
        answer: 0,
        explanation: 'Yaxshi mavzu satri qabul qiluvchiga xat muhimligini darhol tushunish imkonini beradi.',
      },
      {
        prompt: 'Netiket qoidasiga ko‘ra xat matnini to‘liq BOSH HARFLARDA yozish nimani anglatadi?',
        options: ['Baqirish yoki tajovuzkor ohangni', 'Juda muloyimlikni', 'Shifrlanganlikni', 'Tezkor internetni'],
        answer: 0,
        explanation: 'Raqamli muloqotda ALL CAPS baqirish sifatida qabul qilinadi.',
      },
    ],
    teacherNotes: {
      method: 'To/CC/BCC farqini sinf ekrani orqali real elektron pochta interfeysida ko‘rsatish.',
      timing: 'Maydonlar va Netiket 20 daq, Spam va himoya 15 daq, FillBlank va test 10 daq.',
      assessment: 'BCC va CC ning maxfiylik farqini to‘g‘ri qo‘llash.',
      homework: 'Maktab kutubxonachisidan kitob so‘rab, barcha netiket qoidalariga mos rasmiy email namunasini yozing.',
    },
  },
  {
    id: 'g9-l31',
    grade: 9,
    no: 31,
    part: '2-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Bilim sinovi', 'Xavfsizlik va Huquq'],
    objectives: [
      'O‘quvchi 26–30-darslar (Elektron xavfsizlik, Firewall/Antivirus/SSL, Auditoriya/Etika, Mualliflik huquqi va Elektron pochta/Spam) bo‘yicha olgan bilimlarini tekshiradi.',
      'O‘quvchi kiberxavfsizlik va huquqiy-axloqiy muammolarni amaliy vaziyatlarda hal qiladi.',
    ],
    intro:
      '2-chorak yakuniy nazorat ishida shaxsiy ma’lumotlarni asrash, Phishing/Pharming/Smishing dan himoyalanish, Fayervol va shifrlash, mualliflik huquqi hamda elektron pochta madaniyati bo‘yicha bilimlaringiz sinovdan o‘tadi.',
    sections: [
      {
        heading: 'Nazorat oldi asosiy tushunchalar',
        body: 'Takrorlang: Phishing (soxta xat) vs Pharming (DNS/soxta yo‘naltirish) vs Smishing (SMS); Firewall (tarmoq filtri) vs Antivirus (fayl tekshiruvi) vs TLS/SSL (shifrlash); Copyright/Plagiat/CC/Open Source/Dongle/Watermark; To/CC/BCC va Spam.',
        example: 'Krossvordda lotin bosh harflari bilan aniq atamalarni kiriting: masalan, `PHISHING`, `FIREWALL`, `PLAGIAT`, `SPAM`.',
        tip: 'BCC — manzillarni yashiradi; Watermark — rasmni himoyalaydi.',
      },
    ],
    keyTerms: [
      { term: 'Phishing & Pharming', definition: 'Firibgarlik xatlari va DNS orqali soxta saytga yo‘naltirish hujumlari.' },
      { term: 'Firewall & TLS', definition: 'Tarmoq trafikini filtrlash va aloqani kriptografik shifrlash.' },
      { term: 'Copyright & CC', definition: 'Mualliflik huquqi va shartli ochiq litsenziyalar.' },
      { term: 'BCC & Spam', definition: 'Maxfiy nusxa maydoni va roziliksiz ommaviy xabarlar.' },
    ],
    steps: [
      '1. Krossvord orqali asosiy atamalarni tiklang.',
      '2. Amaliy vaziyatlarda huquqiy va xavfsizlik yechimlarini yozing.',
      '3. Yakuniy 5 ta test savoliga javob bering.',
    ],
    practice: [
      {
        task: 'Elektron tijorat sayti ochayotgan tadbirkorga xavfsizlik va auditoriya bo‘yicha 3 ta majburiy talab yozing.',
        expected: '1) HTTPS (SSL/TLS) shifrlashi; 2) Fayervol va ma’lumotlar bazasini himoyalash; 3) Tushunarli, madaniy mos va qulay interfeys.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Plagiat va Copyright buzilishini oldini olish uchun o‘quvchi nima qilishi kerak?',
        expected: 'Olingan manbalarga havola berish, CC/ochiq litsenziyali materiallardan foydalanish va matnni o‘z so‘zi bilan tahlil qilish.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g9-l31-g1',
        num: '01',
        title: 'Xavfsizlik va Huquq krossvordi',
        topic: 'Xavfsizlik va mualliflik huquqi',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '26–30-darslarga oid asosiy atamalarni lotin bosh harflarida kiriting.',
          clues: [
            { id: 'c1', clue: 'Soxta xat va havola orqali parol o‘g‘irlashga urinish (8 harf)', answer: 'PHISHING' },
            { id: 'c2', clue: 'Tarmoq paketlarini ruxsat qoidalari bo‘yicha filtrlaydigan devor (8 harf)', answer: 'FIREWALL' },
            { id: 'c3', clue: 'Birovning asarini manbasiz ko‘chirib olish (7 harf)', answer: 'PLAGIAT' },
            { id: 'c4', clue: 'Roziliksiz yuboriladigan ommaviy reklama xabarlari (4 harf)', answer: 'SPAM' },
          ],
          hint: 'Javoblar: PHISHING, FIREWALL, PLAGIAT, SPAM.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'SMS xabarlar orqali soxta havola yuborib karta ma’lumotlarini so‘rash nima deb ataladi?',
        options: ['Smishing', 'Pharming', 'Dongle', 'Netiket'],
        answer: 0,
        explanation: 'Smishing — SMS yordamida amalga oshiriladigan phishing turi.',
      },
      {
        prompt: 'Elektron pochta yuborishda qabul qiluvchilar bir-birining manzilini ko‘rmasligi uchun qaysi maydon ishlatiladi?',
        options: ['BCC', 'CC', 'To', 'Title'],
        answer: 0,
        explanation: 'Blind Carbon Copy (BCC) manzillarni yashiradi.',
      },
      {
        prompt: 'Dastur litsenziyasini tasdiqlovchi fizik USB qurilma nima?',
        options: ['Dongle', 'Watermark', 'Modem', 'Kesh'],
        answer: 0,
        explanation: 'Dongle ulanmaguncha himoyalangan dastur ishga tushmaydi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri ma’lumotni tarmoqda kalitsiz o‘qilishidan himoya qiladi?',
        options: ['SSL/TLS shifrlash', 'Hub qurilmasi', 'CAPS LOCK matn', 'Capsula fayli'],
        answer: 0,
        explanation: 'SSL/TLS ma’lumotni kriptografik shifrlab uzatadi.',
      },
      {
        prompt: 'Yosh bolalar uchun mo‘ljallangan taʼlimiy saytda qaysi mezon eng muhim?',
        options: ['Katta shrift, sodda til, yorqin ko‘rgazmali rasmlar va xavfsiz muhit', 'Mayda kulrang matn', 'Reklama spamlari', 'Murakkab ilmiy formulalar'],
        answer: 0,
        explanation: 'Maqsadli auditoriya yoshiga mos dizayn va xavfsizlik asosiy talabdir.',
      },
    ],
    teacherNotes: {
      method: '2-chorak nazorat sinovi — krossvord, amaliy holat tahlili va test.',
      timing: 'Kirish 5 daq, Nazorat ishi 35 daq, Natijalar tahlili 5 daq.',
      assessment: 'Xavfsizlik tahdidlari va huquqiy meʼyorlarni to‘g‘ri farqlash.',
      homework: 'Keyingi darsga qidiruv tizimlarida aniq qidirish usullarini ko‘rib keling.',
    },
  },
  {
    id: 'g9-l32',
    grade: 9,
    no: 32,
    part: '2-chorak',
    title: 'Internetdan samarali foydalanish. Internetdan topilgan axborotning ishonchliligini baholash',
    kind: 'dars',
    hours: 1,
    tools: ['Qidiruv operatorlari', 'Fact-checking', 'URL domenlari (.gov, .edu)'],
    objectives: [
      'O‘quvchi qidiruv tizimlarida aniq natija topish operatorlarini (`"..."`, `-`, `site:`, `AND/OR`, `filetype:`) qo‘llaydi.',
      'O‘quvchi Internetdan topilgan axborotning ishonchliligini 5 mezon (Muallif/Manba, Sana, Maqsad/Xolislik, Dalillar, Domen turi) asosida baholaydi.',
    ],
    intro:
      'Internet — cheksiz kutubxona, biroq unda hamma narsa ham haqiqat emas! Kimdir ataylab yolg‘on xabar (Fake news) tarqatadi, kimdir esa eskirgan ma’lumotni joylaydi. Professional foydalanuvchi axborotni tez topadi va uni albatta tekshiradi.',
    sections: [
      {
        heading: 'Samarali qidiruv operatorlari (Search Engines)',
        body: 'Oddiy so‘z yozsangiz millionlab keraksiz sahifa chiqadi. Aniqroq qidirish uchun operatorlardan foydalaning: 1) Qo‘shtirnoq `"algoritm turlari"` — aynan shu iborani so‘zma-so‘z izlaydi; 2) Minus belgisi `python -ilon` — "ilon" so‘zi bor sahifalarni chiqarib tashlaydi; 3) `site:gov.uz` — faqat ko‘rsatilgan domen ichidan qidiradi; 4) `filetype:pdf` — faqat PDF hujjatlarni topadi.',
        example: '`site:edu.uz "informatika 9-sinf" filetype:pdf` so‘rovi faqat taʼlim domenidagi PDF darsliklarni chiqarib beradi!',
        tip: 'Qidiruv natijasining birinchi qatori ko‘pincha "Ad / Reklama" bo‘ladi — albatta domen nomini tekshiring!',
      },
      {
        heading: 'Axborot ishonchliligini baholash (CRAAP / 5 mezon)',
        body: 'Topilgan ma’lumotga ishonishdan oldin 5 savol bering: 1) Muallif kim? (Nufuzli olim, vazirlik `.gov`, universitet `.edu` yoki nomaʼlum blog?); 2) Sana qachon? (Texnologiyada 2010-yilgi maqola eskirgan bo‘lishi mumkin); 3) Maqsad nima? (Xolis ilmiy faktmi yoki mahsulot sotuvchi reklama/sensatsiyami?); 4) Dalil va manbalar bormi? (Boshqa mustaqil saytlar tasdiqlaydimi?); 5) Matn savodli yozilganmi? (Ko‘p imloviy xato ishonch darajasini pasaytiradi).',
        example: '`.gov.uz` (davlat organi) va `.edu` (taʼlim) domenlari qattiq nazorat qilinadi; `.com` yoki shaxsiy blogda esa har kim xohlagan fikrini yozishi mumkin.',
      },
    ],
    keyTerms: [
      { term: 'Qidiruv operatori', definition: 'Qidiruv tizimi natijalarini toraytiruvchi maxsus belgi yoki buyruq (`""`, `-`, `site:`).' },
      { term: 'Ishonchlilik (Reliability)', definition: 'Manbadagi ma’lumotning haqiqiyligi, xolisligi va tekshirilganlik darajasi.' },
      { term: 'Domendagi farqlar', definition: '`.gov` (davlat), `.edu` (taʼlim), `.org` (tashkilot), `.com` (tijorat/umumiy).' },
      { term: 'Fact-checking', definition: 'Axborotni kamida 2–3 mustaqil va nufuzli manba orqali qayta tekshirish.' },
    ],
    steps: [
      '1. Qidiruv operatorlari (`""`, `-`, `site:`, `filetype:`) dan foydalanib aniq so‘rov tuzing.',
      '2. Berilgan veb-sahifani 5 mezon (Muallif, Sana, Maqsad, Manba, Domen) bo‘yicha tekshiring.',
      '3. Soxta yangilik (Fake news) va ilmiy maqolani ajratishni mashq qiling.',
    ],
    practice: [
      {
        task: 'Yaguar hayvoni haqida qidirganda avtomobil markasi chiqmasligi uchun qanday qidiruv so‘rovi yozasiz?',
        expected: '`yaguar hayvon -avtomobil -mashina` yoki `"Panthera onca"`.',
        difficulty: 'oson',
      },
      {
        task: 'Sog‘liq haqidagi "Bir kunda mo‘jizaviy tuzalish" sarlavhali saytning ishonchliligini 3 mezon asosida rad eting.',
        expected: '1) Muallif/shifokor litsenziyasi yo‘q; 2) Ilmiy tadqiqot havolalari berilmagan; 3) Sensatsion reklama va dori sotish maqsadi ko‘rinib turibdi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l32-g1',
        num: '01',
        title: 'Aniq qidiruv va ishonchli manba',
        topic: 'Internetdan samarali foydalanish',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Qidiruv operatorlari va domen turlarini ularning maʼnosi bilan juftlang.',
          pairs: [
            { left: '"axborot xavfsizligi"', right: 'Aynan shu iborani so‘zma-so‘z tartibda qidiradi' },
            { left: 'site:gov.uz', right: 'Faqat O‘zbekiston davlat organlari saytlari ichidan izlaydi' },
            { left: 'filetype:pdf', right: 'Natijalarda faqat PDF formatdagi fayllarni chiqaradi' },
            { left: 'apple -meva', right: 'Kompyuter kompaniyasi haqida izlab, meva sahifalarini chetlatadi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Qidiruv tizimida aynan bir necha so‘zdan iborat aniq iborani tartibini buzmasdan izlash uchun nima ishlatiladi?',
        options: ['Qo‘shtirnoq ("...")', 'Yulduzcha (*)', 'So‘roq (?)', 'Undov (!)'],
        answer: 0,
        explanation: 'Qo‘shtirnoq ichidagi matn qidiruv tizimiga aynan o‘sha iborani izlashni buyuradi.',
      },
      {
        prompt: 'Quyidagi domenlardan qaysi biri odatda rasmiy davlat tashkilotiga tegishli bo‘ladi?',
        options: ['.gov.uz', '.shop', '.blog', '.fun'],
        answer: 0,
        explanation: '`.gov` (Government) domenlari faqat rasmiy davlat idoralariga beriladi.',
      },
      {
        prompt: 'Internetdagi biror maqolaning ishonchli ekanligini tekshirishda qaysi harakat eng to‘g‘ri?',
        options: ['Muallifi, sanasi, keltirilgan ilmiy manbalarini tekshirish va boshqa nufuzli sayt bilan solishtirish', 'Matnda ko‘p undov belgisi borligiga qarash', 'Sarlavhasi vahimali ekaniga ishonish', 'Faqat bitta bloger postini o‘qish'],
        answer: 0,
        explanation: 'Fact-checking muallif, sana, dalil va mustaqil tasdiqqa tayanadi.',
      },
      {
        prompt: 'Faqat `.edu` saytlaridan PDF darslik topish uchun qaysi qidiruv so‘rovi to‘g‘ri?',
        options: ['informatika site:edu filetype:pdf', 'informatika +rasm', 'informatika -pdf', 'informatika *edu'],
        answer: 0,
        explanation: '`site:` domenni, `filetype:` esa fayl turini cheklaydi.',
      },
      {
        prompt: 'Nima uchun IT va tibbiyotga oid maqolada nashr qilingan SANA juda muhim?',
        options: ['Texnologiya va ilm tez eskiradi — eski ma’lumot bugun noto‘g‘ri bo‘lishi mumkin', 'Yangi sanali saytlar tezkor internet beradi', 'Eski fayllar virusli bo‘ladi', 'Sana matn rangini o‘zgartiradi'],
        answer: 0,
        explanation: 'Masalan, 2012-yilgi kiberxavfsizlik tavsiyalari bugungi tahdidlar uchun eskirgan hisoblanadi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda real qidiruv tizimida `"..."` va `site:` operatorlari bilan topilgan natijalar soni farqini ko‘rsatish.',
      timing: 'Qidiruv operatorlari 15 daq, Ishonchlilik mezonlari 15 daq, Match va quiz 15 daq.',
      assessment: 'Samarali qidiruv so‘rovi tuza olish va soxta manbani fosh etish.',
      homework: 'Qiziqqan mavzuingiz bo‘yicha 1 ta ishonchli (.edu/.gov) va 1 ta shubhali manbani 5 mezon bilan tahlil qiling.',
    },
  },
];
