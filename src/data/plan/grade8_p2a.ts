import type { Lesson } from './types';

export const GRADE_8_P2A: Lesson[] = [
  {
    id: 'g8-l17',
    grade: 8,
    no: 17,
    part: '2-yarim yillik',
    title: 'Kompyuter tarmoqlari. Asosiy tushunchalar',
    kind: 'dars',
    hours: 1,
    tools: ['Tarmoq'],
    objectives: [
      'O‘quvchi kompyuter tarmog‘i nima ekanini, uning afzallik va kamchiliklarini tushuntira oladi.',
      'O‘quvchi LAN (Lokal tarmoq) va WAN (Global tarmoq), shuningdek o‘tkazuvchanlik (Bandwidth) va paketlar tushunchasini biladi.',
    ],
    intro:
      'Sinfdagi 15 ta kompyuter bitta printerga qog‘oz chiqarsa yoki bir-biriga fleshsiz fayl uzatsa — bu kompyuter tarmog‘i sharofatidir! Keling, tarmoqlar olamiga sho‘ng‘iymiz.',
    sections: [
      {
        heading: 'Kompyuter tarmog‘i va uning turlari (LAN / WAN)',
        body: 'Kompyuter tarmog‘i — ma’lumot va resurslar (fayl, printer, internet) almashish uchun simli yoki simsiz bog‘langan ikki va undan ortiq qurilmalar tizimi. Qamroviga ko‘ra: LAN (Local Area Network) — bitta xona, maktab yoki bino ichidagi lokal tarmoq; WAN (Wide Area Network) — shahar va mamlakatlarni bog‘lovchi global tarmoq (eng katta misoli — Internet!).',
        example: 'Maktab informatika xonasi tarmog‘i — LAN; Toshkent va London banklarini bog‘lovchi tarmoq — WAN.',
        tip: 'Tarmoq katta qulaylik (fayl almashish, umumiy printer, tez aloqa) bersa ham, bitta virus tarmoq bo‘ylab tez tarqalishi va server buzilganda ish to‘xtashi mumkin — shuning uchun himoya zarur!',
      },
      {
        heading: 'Ma’lumot uzatish qanday kechadi?',
        body: 'Tarmoqda ma’lumotlar mayda "paketlar" (Packets) ga bo‘linib yuboriladi. Har bir qurilmaning tarmoqda o‘ziga xos manzili (IP manzil va MAC manzil) bo‘ladi. Tezlik esa Mbit/s (Mbps) da o‘lchanadi.',
        example: 'Katta rasm 100 ta mayda paketga bo‘linib yuboriladi va qabul qiluvchida qayta yig‘iladi.',
      },
    ],
    keyTerms: [
      { term: 'Kompyuter tarmog‘i', definition: 'Ma’lumot va qurilmalarni birgalikda ishlatish uchun bog‘langan kompyuterlar tizimi.' },
      { term: 'LAN (Lokal tarmoq)', definition: 'Kichik hudud (uy, maktab, ofis) doirasidagi tezkor tarmoq.' },
      { term: 'WAN (Global tarmoq)', definition: 'Keng geografik hududlarni (shaharlar, davlatlar) bog‘lovchi tarmoq.' },
      { term: 'IP manzil', definition: 'Tarmoqdagi har bir qurilmani aniqlaydigan noyob raqamli manzil.' },
    ],
    steps: [
      '1. Sinf xonasidagi kompyuterlar qanday ulanganini (kabel yoki Wi-Fi) kuzating.',
      '2. Tarmoqning 3 ta asosiy foydasini (umumiy printer, fayl almashish, internet) sanang.',
      '3. LAN va WAN misollarini jadvalga ajrating.',
    ],
    practice: [
      {
        task: 'Uy Wi-Fi tarmog‘i, Maktab binosi tarmog‘i va Internet ni LAN/WAN turlariga ajrating.',
        expected: 'Uy va Maktab — LAN; Internet — WAN.',
        difficulty: 'oson',
      },
      {
        task: 'Tarmoqsiz kompyuterlar va tarmoqqa ulangan kompyuterlar farqini 3 ta misolda ko‘rsating.',
        expected: 'Resurslarni bo‘lishish, markaziy saqlash va tezkor aloqa farqlari tushuntiriladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l17-g1',
        num: '01',
        title: 'LAN va WAN ni ajrat',
        topic: 'Tarmoq turlari',
        difficulty: 'Oson',
        engine: 'sort',
        config: {
          prompt: 'Berilgan tarmoq misollarini LAN (Lokal) yoki WAN (Global) turiga ajrating.',
          buckets: ['LAN (Lokal tarmoq)', 'WAN (Global tarmoq)'],
          items: [
            { label: 'Maktab informatika xonasidagi 15 ta kompyuter', bucket: 'LAN (Lokal tarmoq)' },
            { label: 'Uydagi Wi-Fi router, noutbuk va telefonlar', bucket: 'LAN (Lokal tarmoq)' },
            { label: 'Butun dunyoni bog‘lovchi Internet tarmog‘i', bucket: 'WAN (Global tarmoq)' },
            { label: 'Toshkent va Samarqand filiallarini ulovchi bank tarmog‘i', bucket: 'WAN (Global tarmoq)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Bitta bino yoki maktab ichidagi kompyuterlarni bog‘laydigan tarmoq turi qaysi?',
        options: ['WAN', 'LAN (Local Area Network)', 'USB', 'CPU'],
        answer: 1,
        explanation: 'LAN kichik hudud (xonadon, sinf, bino) doirasidagi lokal tarmoqdir.',
      },
      {
        prompt: 'Dunyodagi eng katta WAN (Global tarmoq) misoli nima?',
        options: ['Bluetooth', 'Internet', 'Flash xotira', 'Sinf printeri'],
        answer: 1,
        explanation: 'Internet qit’alar va davlatlarni birlashtiruvchi eng yirik WAN dir.',
      },
      {
        prompt: 'Tarmoqqa ulanishning asosiy afzalligi qaysi?',
        options: [
          'Har bir kompyuterga alohida printer sotib olish shart bo‘lmaydi, fayl va internetni bo‘lishish mumkin',
          'Kompyuter elektrsiz ishlaydi',
          'Monitor o‘lchami kengayadi',
          'Klaviatura kerak bo‘lmaydi',
        ],
        answer: 0,
        explanation: 'Tarmoq resurslarni (printer, fayllar, internet kanali) birgalikda ishlatish imkonini beradi.',
      },
      {
        prompt: 'Tarmoqdagi har bir qurilma boshqalaridan ajralib turishi uchun unga nima beriladi?',
        options: ['IP manzil', 'Shrift o‘lchami', 'ZIP kengaytma', 'Font Color'],
        answer: 0,
        explanation: 'IP manzil tarmoqdagi har bir tugunning mantiqiy manzilidir.',
      },
      {
        prompt: 'Tarmoqning asosiy xavf yoki kamchiliklaridan biri nima?',
        options: [
          'Zararli dastur (virus) bir kompyuterdan boshqalariga tez tarqalishi mumkin',
          'Fayllar juda tez uzatiladi',
          'Elektron pochta ishlaydi',
          'Printerni umumiy ishlatib bo‘ladi',
        ],
        answer: 0,
        explanation: 'Himoyalanmagan tarmoqda viruslar va ruxsatsiz kirish xavfi oshadi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfdagi kompyuterlar misolida mahalliy LAN va tashqi WAN aloqasini sxemada chizib ko‘rsatish.',
      timing: '12 daqiqa nazariya, 18 daqiqa muhokama va misollar, 15 daqiqa Sort va test.',
      assessment: 'LAN va WAN farqi hamda tarmoq afzallik/xavflarini tushuntira olishi.',
      homework: 'Uyingizdagi tarmoqqa ulangan barcha qurilmalar (telefon, TV, noutbuk) ro‘yxatini yozib keling.',
    },
  },
  {
    id: 'g8-l18',
    grade: 8,
    no: 18,
    part: '2-yarim yillik',
    title: 'Tarmoq komponentlari.',
    kind: 'dars',
    hours: 1,
    tools: ['Tarmoq'],
    objectives: [
      'O‘quvchi tarmoqning asosiy apparat komponentlari (Tarmoq kartasi NIC, Kabel/Wi-Fi, Switch, Router, Modem, Server, AP) vazifasini biladi.',
      'O‘quvchi har bir komponent tarmoqning qaysi bo‘g‘inida ishlashini ajrata oladi.',
    ],
    intro:
      'Tarmoq ishlashi uchun shunchaki simlarning o‘zi yetarli emas: signalni kompyuterga qabul qiluvchi karta, xonalar ichida tarqatuvchi kommutator va internetga yo‘l ko‘rsatuvchi marshrutizator kerak!',
    sections: [
      {
        heading: 'Asosiy apparat komponentlari',
        body: '1) NIC (Network Interface Card — tarmoq kartasi): har bir kompyuter ichidagi tarmoq porti/Wi-Fi moduli; 2) Switch (Kommutator): lokal tarmoqdagi barcha kompyuterlarni bog‘lab, paketni faqat kerakli manzilga (MAC bo‘yicha) yuboradi; 3) Router (Marshrutizator): har xil tarmoqlarni (masalan, maktab LAN ini Internet WAN bilan) bog‘lab, eng yaxshi yo‘lni tanlaydi; 4) Access Point (AP): simsiz Wi-Fi nuqtasi; 5) Server: tarmoqdagi fayl va xizmatlarni saqlovchi kuchli kompyuter.',
        example: 'Sinfdagi 20 ta kompyuter Switch ga ulanadi, Switch esa Internetga chiqish uchun Router ga ulanadi.',
        tip: 'NIC — bu kompyuter ichidagi karta, Switch — mahalliy tarqatuvchi, Router — tashqi tarmoqlarga chiqaruvchi "yo‘l boshlovchi" ekanini adashtirmang!',
      },
      {
        heading: 'Uzatish muhiti',
        body: 'Qurilmalarni bog‘lash uchun mis o‘rama juft (UTP kabeli), yorug‘lik bilan uzatuvchi optik tolali kabel (Fiber Optic) yoki simsiz radio to‘lqinlar (Wi-Fi) qo‘llaniladi.',
        example: 'Binolar orasidagi uzoq masofada optik tola, sinf ichida esa UTP kabel va Wi-Fi ishlatiladi.',
      },
    ],
    keyTerms: [
      { term: 'NIC (Tarmoq kartasi)', definition: 'Kompyuterni kabel yoki Wi-Fi orqali tarmoqqa ulovchi ichki qurilma.' },
      { term: 'Switch (Kommutator)', definition: 'Lokal tarmoqdagi qurilmalarni bog‘lab, ma’lumotni aniq qabul qiluvchiga uzatuvchi qurilma.' },
      { term: 'Router (Marshrutizator)', definition: 'Turli tarmoqlarni (LAN va Internet) bog‘lab, paketlarga yo‘l ko‘rsatuvchi qurilma.' },
      { term: 'Access Point (AP)', definition: 'Simli tarmoqdan simsiz Wi-Fi signalini tarqatuvchi ulanish nuqtasi.' },
    ],
    steps: [
      '1. Kompyuter orqa panelidagi RJ-45 tarmoq portini (NIC) ko‘zdan kechiring.',
      '2. Switch, Router va Wi-Fi Access Point rasmlari hamda portlari sonini taqqoslang.',
      '3. Tarmoq komponentlarining oddiy zanjirini (Server + PC → Switch → Router → Internet) chizing.',
    ],
    practice: [
      {
        task: 'Sinf xonasiga 12 ta kompyuterni sim bilan ulash uchun qaysi qurilma va nechta port kerakligini aniqlang.',
        expected: 'Kamida 16 portli bitta Switch hamda 12 ta UTP patch-kord kabel kerak.',
        difficulty: 'oson',
      },
      {
        task: 'Router va Switch vazifalari o‘rtasidagi asosiy farqni 2 gapda tushuntiring.',
        expected: 'Switch bitta lokal tarmoq ichida bog‘laydi, Router esa turli tarmoqlarni (LAN ↔ Internet) yo‘naltiradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l18-g1',
        num: '01',
        title: 'Tarmoq komponentlari va vazifasi',
        topic: 'Tarmoq qurilmalari',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'Har bir tarmoq qurilmasini uning aniq vazifasi bilan bog‘lang.',
          pairs: [
            { left: 'NIC (Tarmoq kartasi)', right: 'Kompyuterni tarmoq kabeli yoki Wi-Fi ga ulovchi ichki platacha' },
            { left: 'Switch (Kommutator)', right: 'Lokal tarmoqdagi ko‘plab kompyuterlarni bog‘lab aniq manzilga uzatish' },
            { left: 'Router (Marshrutizator)', right: 'Turli tarmoqlarni (LAN va Internet) bog‘lab eng maqbul yo‘l tanlash' },
            { left: 'Access Point (AP)', right: 'Qurilmalarga simsiz Wi-Fi ulanishini taqdim etish' },
            { left: 'Server', right: 'Tarmoq foydalanuvchilari uchun umumiy fayl va xizmatlarni saqlash' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Har bir kompyuterni tarmoqqa ulash uchun uning ichida bo‘lishi shart bo‘lgan komponent qaysi?',
        options: ['Printer', 'NIC (Tarmoq kartasi)', 'Skaner', 'Proyektor'],
        answer: 1,
        explanation: 'NIC (Network Interface Card) bo‘lmasa kompyuter tarmoq signalini qabul qila olmaydi.',
      },
      {
        prompt: 'Lokal tarmoqni tashqi tarmoq (Internet) bilan bog‘lab, ma’lumotlarga yo‘nalish beruvchi qurilma nima?',
        options: ['Hub', 'Router (Marshrutizator)', 'Switch', 'UTP kabel'],
        answer: 1,
        explanation: 'Router har xil tarmoqlar orasida paketlarni marshrutlaydi.',
      },
      {
        prompt: 'Xonadagi 20 ta kompyuterni bir-biri bilan tezkor bog‘lash uchun qaysi qurilma eng mos?',
        options: ['Modem', 'Switch', 'Mikrofon', 'Monitor'],
        answer: 1,
        explanation: 'Switch lokal tarmoqdagi barcha qurilmalarni portlar orqali bog‘laydi.',
      },
      {
        prompt: 'Simsiz planshet va telefonlarni maktab tarmog‘iga ulash uchun qaysi komponent ishlatiladi?',
        options: ['Access Point (Wi-Fi nuqtasi)', 'Optik tola', 'RJ-45 jek', 'Floppy disk'],
        answer: 0,
        explanation: 'Access Point (AP) simli tarmoqni simsiz Wi-Fi ga tarqatadi.',
      },
      {
        prompt: 'Eng yuqori tezlikda va uzoq masofaga yorug‘lik signali orqali uzatuvchi kabel turi qaysi?',
        options: ['Oddiy telefon simi', 'Optik tolali kabel (Fiber Optic)', 'Mis sim', 'USB kabel'],
        answer: 1,
        explanation: 'Optik tolali kabellar elektr emas, yorug‘lik impulsi yordamida juda tez va uzoqqa uzatadi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfdagi haqiqiy tarmoq kabeli, Switch va Router qurilmalarini qo‘lda ko‘rsatish.',
      timing: '10 daqiqa tushuntirish, 20 daqiqa qurilmalar tahlili, 15 daqiqa Match va test.',
      assessment: 'NIC, Switch, Router va AP vazifalarini adashtirmay aytishi.',
      homework: 'Router va Switch o‘rtasidagi 3 ta farqni daftarga yozib keling.',
    },
  },
  {
    id: 'g8-l19',
    grade: 8,
    no: 19,
    part: '2-yarim yillik',
    title: 'Amaliy mashg‘ulot. Kabel, jek, Hub, Swich, Router, modem',
    kind: 'amaliy',
    hours: 1,
    tools: ['Tarmoq'],
    objectives: [
      'O‘quvchi UTP (o‘rama juft) kabeli, RJ-45 konnektori (jek) va qisqich (Crimper) tuzilishini amaliy biladi.',
      'O‘quvchi Hub va Switch o‘rtasidagi fundamental farqni hamda Modem va Router vazifalarini farqlay oladi.',
    ],
    intro:
      'Bugun haqiqiy tarmoq texniklaridek UTP kabelidagi 8 ta rangli simni, RJ-45 jekni, shuningdek eski "Hub" nima uchun aqlli "Switch" ga o‘rnini bo‘shatganini hamda Modem bilan Routerni amalda o‘rganamiz!',
    sections: [
      {
        heading: 'UTP kabel, RJ-45 jek va T568B rang tartibi',
        body: 'Standart tarmoq kabeli (UTP Cat5e/Cat6) ichida 4 juft — jami 8 ta rangli ingichka sim bor. Ularga plastik RJ-45 konnektor (jek) qisqich asbob (Crimper) yordamida o‘rnatiladi. Eng mashhur T568B tartibi: Oq-sabzi, Sabzi, Oq-yashil, Ko‘k, Oq-ko‘k, Yashil, Oq-jigarrang, Jigarrang.',
        example: 'Ikkala uchi T568B qilib siqilgan "To‘g‘ri kabel" (Straight-through) kompyuterni Switch/Router ga ulash uchun ishlatiladi.',
        tip: 'Kabel uchini qisayotganda simlar RJ-45 ning oxirigacha to‘liq kirganini plastik uchidan ko‘rib tekshiring — bitta sim yetmay qolsa tarmoq ishlamaydi!',
      },
      {
        heading: 'Hub vs Switch va Modem vs Router',
        body: 'Hub (Konsentrator) — "sodda" qurilma: bir portga kelgan signalni HAMMA portlarga tarqatib yuboradi (shovqin va xavfsizlik muammosi!). Switch — "aqlli": paketni faqat kerakli oluvchi portga jo‘natadi. Modem (Modulyator-Demodulyator) esa provayder liniyasidan (telefon, kabel, optika) kelgan signalni raqamli signalga aylantirib beradi; Router esa shu internetni uy yoki maktab qurilmalariga taqsimlaydi.',
        example: 'Uy Wi-Fi qutisi ko‘pincha ichida ham Modem, ham Router, ham Switch va AP ni birlashtirgan bo‘ladi!',
      },
    ],
    keyTerms: [
      { term: 'UTP / RJ-45 (Jek)', definition: '8 simli o‘rama juft tarmoq kabeli va uning uchidagi 8 kontaktli plastik konnektor.' },
      { term: 'Hub (Konsentrator)', definition: 'Kelgan signalni barcha portlarga ko‘r-ko‘rona tarqatuvchi eskirgan qurilma.' },
      { term: 'Switch vs Hub', definition: 'Switch faqat manzil portiga uzatadi (tez va xavfsiz), Hub esa hammaga.' },
      { term: 'Modem', definition: 'Provayderning analog/optik signalini kompyuter tushunadigan raqamli signalga o‘giruvchi qurilma.' },
    ],
    steps: [
      '1. Kesilgan UTP kabel namunasidagi 4 juft (8 ta) rangli simlarni ko‘zdan kechiring.',
      '2. T568B rang tartibini xavfsiz tarzda (jismoniy sim yoki sxemada) ketma-ket terib tekshiring.',
      '3. Hub va Switch o‘rtasida 4 ta kompyuter paket almashganda qaysinisi tirbandlik chiqarmasligini solishtiring.',
      '4. NetBuilder simulyatorida Modem → Router → Switch → PC zanjirini yig‘ing.',
    ],
    practice: [
      {
        task: 'Modem, Router, Switch va Kompyuterni internetga chiqish tartibida bog‘lang.',
        expected: 'Modem ↔ Router ↔ Switch ↔ PC zanjiri to‘g‘ri quriladi.',
        difficulty: 'oson',
      },
      {
        task: 'Nima uchun zamonaviy maktablarda Hub o‘rniga Switch ishlatilishini 2 ta sabab bilan tushuntiring.',
        expected: 'Tezlik yuqori (to‘qnashuv yo‘q) va xavfsiz (begona portga paket ketmaydi).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l19-g1',
        num: '01',
        title: 'Kabel va qurilmalarni bog‘la',
        topic: 'Modem, Router, Switch',
        difficulty: 'O‘rta',
        engine: 'netbuilder',
        config: {
          prompt: 'Maktab kichik tarmog‘ini internetga ulang: Modemni Routerga, Routerni Switchga, Switchni esa PC-1 va PC-2 ga bog‘lang.',
          devices: [
            { id: 'modem', label: 'Modem', type: 'modem' },
            { id: 'router', label: 'Router', type: 'router' },
            { id: 'switch', label: 'Switch', type: 'switch' },
            { id: 'pc1', label: 'PC-1', type: 'pc' },
            { id: 'pc2', label: 'PC-2', type: 'pc' },
          ],
          requiredLinks: [
            ['modem', 'router'],
            ['router', 'switch'],
            ['switch', 'pc1'],
            ['switch', 'pc2'],
          ],
          hint: 'Zanjir: Modem — Router — Switch, keyin Switch dan PC-1 va PC-2 ga torting.',
          explanation: 'Modem tashqi aloqani oladi, Router internetni yo‘naltiradi, Switch esa lokal kompyuterlarni ulaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Standart Ethernet (UTP) tarmoq kabeli uchiga o‘rnatiladigan plastik jek qanday nomlanadi?',
        options: ['USB-A', 'RJ-45', 'HDMI', 'VGA'],
        answer: 1,
        explanation: '8 kontaktli tarmoq konnektori RJ-45 deb ataladi.',
      },
      {
        prompt: 'Hub va Switch qurilmalari o‘rtasidagi eng muhim farq nimada?',
        options: [
          'Hub kelgan ma’lumotni barcha portlarga tarqatadi, Switch esa faqat kerakli manzil portiga yuboradi',
          'Hub faqat simsiz ishlaydi',
          'Switch faqat 1 ta kompyuter ulaydi',
          'Farqi yo‘q',
        ],
        answer: 0,
        explanation: 'Switch MAC manzil jadvali yordamida faqat kerakli portga uzatib tezlik va xavfsizlikni oshiradi.',
      },
      {
        prompt: 'Provayder liniyasidan kelayotgan tashqi signalni raqamli signalga aylantirib beruvchi qurilma qaysi?',
        options: ['Printer', 'Modem', 'Hub', 'Klaviatura'],
        answer: 1,
        explanation: 'Modem (Modulator-Demodulator) tashqi aloqa kanali signalini raqamli ko‘rinishga o‘giradi.',
      },
      {
        prompt: 'UTP kabeli ichida nechta alohida rangli sim (4 juft) mavjud?',
        options: ['2 ta', '4 ta', '8 ta', '16 ta'],
        answer: 2,
        explanation: 'O‘rama juft UTP kabelida 4 juft = 8 ta sim mavjud.',
      },
      {
        prompt: 'Kabelni RJ-45 konnektorga siqish uchun qaysi maxsus asbobdan foydalaniladi?',
        options: ['Qaychi', 'Krimp (Crimper)', 'Bolg‘a', 'Lineyka'],
        answer: 1,
        explanation: 'Crimper asbobi RJ-45 mis tishlarini simlarga mustahkam qisib beradi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda tayyor RJ-45 jek va UTP kabel kesimini qo‘ldan-qo‘lga berib ko‘rsatish + NetBuilder simulyatsiyasi.',
      timing: '10 daqiqa namoyish, 20 daqiqa rang tartibi/sxema, 15 daqiqa NetBuilder va test.',
      assessment: 'Modem → Router → Switch → PC bog‘lanishini xatosiz tushuntira olishi.',
      homework: 'T568B 8 ta sim ranglari ketma-ketligini daftarga yozib yodlang.',
    },
  },
  {
    id: 'g8-l20',
    grade: 8,
    no: 20,
    part: '2-yarim yillik',
    title: 'Tarmoqni loyihalash',
    kind: 'loyiha',
    hours: 1,
    tools: ['Tarmoq'],
    objectives: [
      'O‘quvchi tarmoq loyihalashdan oldin talablarni (kompyuterlar soni, bino o‘lchami, byudjet, simli/simsiz ehtiyoj) tahlil qiladi.',
      'O‘quvchi asosiy tarmoq topologiyalari (Yulduz — Star, Shina — Bus, Halqa — Ring) afzallik va kamchiliklarini solishtirib loyiha chiza oladi.',
    ],
    intro:
      'Kichik do‘kon yoki yangi ofis ochilganda kabellarni qanday tortish va qaysi qurilmalarni sotib olish kerak? Bugun tarmoq topologiyalarini tanlab, haqiqiy tarmoq loyihasini tuzamiz!',
    sections: [
      {
        heading: 'Tarmoq topologiyalari (Ulanish sxemalari)',
        body: 'Topologiya — kompyuterlarning o‘zaro joylashish va ulanish shakli. 1) Shina (Bus) — hamma kompyuter bitta asosiy kabelga ulanadi (arzon, lekin bosh kabel uzilsa hammasi to‘xtaydi!); 2) Halqa (Ring) — yopiq doira bo‘ylab uzatiladi; 3) Yulduz (Star) — hamma qurilmalar markaziy Switch ga ulanadi (bitta kabel uzilsa ham qolganlari ishlayveradi — bugun eng keng tarqalgani!).',
        example: 'Zamonaviy maktablar va ofislarda "Yulduz (Star)" topologiyasi qo‘llaniladi.',
        tip: 'Stol kompyuterlari va serverlar uchun ishonchli simli UTP kabel, noutbuk va planshetlar uchun esa qo‘shimcha Access Point (Wi-Fi) rejalashtiring!',
      },
      {
        heading: 'Tarmoq loyihalash bosqichlari',
        body: '1) Xonalar chizmasi va qurilmalar sonini hisoblash; 2) Topologiya va kabel turini tanlash (Star + Cat6); 3) Zarur portlar soniga qarab Switch tanlash (+20% zaxira port qoldirish!); 4) Xavfsizlik va Router joylashuvini (xona markazi) belgilash.',
        example: '10 ta kompyuter uchun 10 portli emas, kelajak uchun 16 portli Switch tanlash aqlli yechimdir.',
      },
    ],
    keyTerms: [
      { term: 'Topologiya', definition: 'Tarmoqdagi qurilmalar va kabellarning geometrik ulanish sxemasi.' },
      { term: 'Yulduz (Star) topologiyasi', definition: 'Barcha qurilmalar markaziy Switch ga alohida kabel bilan bog‘lanadigan eng ishonchli sxema.' },
      { term: 'Shina (Bus) topologiyasi', definition: 'Barcha tugunlar bitta umumiy magistral kabelga ulanadigan eski sxema.' },
      { term: 'Masshtablanish (Scalability)', definition: 'Kelajakda tarmoqqa yangi qurilmalarni oson qo‘sha olish imkoniyati.' },
    ],
    steps: [
      '1. Kichik "Maktab kutubxonasi" tarmog‘i uchun reja tuzing: 1 ta Server, 6 ta PC, 1 ta Tarmoq printeri va Wi-Fi zona.',
      '2. Qaysi topologiya (Star) tanlanishini va nima uchunligini yozing.',
      '3. Kerakli Switch portlari sonini zaxira bilan hisoblang (8 ta qurilma + zaxira = 16 portli Switch).',
      '4. NetBuilder yordamida Yulduz topologiyasini bog‘lab tekshiring.',
    ],
    practice: [
      {
        task: 'Star va Bus topologiyalaridan qaysi biri bitta kabel kesilganda ham ishlashda davom etishini chizmada ko‘rsating.',
        expected: 'Star topologiyasida faqat 1 ta kompyuter uziladi, qolganlari ishlayveradi.',
        difficulty: 'oson',
      },
      {
        task: '14 ta kompyuter va 2 ta printerli sinf uchun portlar zaxirasi bilan Switch tanlang.',
        expected: '16 ta qurilma uchun 24 portli Switch tavsiya etiladi (kelajakdagi kengayish uchun).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l20-g1',
        num: '01',
        title: 'Yulduz (Star) topologiyasi loyihasi',
        topic: 'Tarmoqni loyihalash',
        difficulty: 'O‘rta',
        engine: 'netbuilder',
        config: {
          prompt: 'Kutubxona uchun Yulduz (Star) topologiyasi yarating: Server, 2 ta PC va Wi-Fi AP ni markaziy Switch ga ulang, Switchni esa Router ga bog‘lang.',
          devices: [
            { id: 'router', label: 'Router', type: 'router' },
            { id: 'switch', label: 'Markaziy Switch', type: 'switch' },
            { id: 'server', label: 'Fayl Server', type: 'server' },
            { id: 'pc1', label: 'PC-1', type: 'pc' },
            { id: 'ap', label: 'Wi-Fi AP', type: 'ap' },
          ],
          requiredLinks: [
            ['router', 'switch'],
            ['switch', 'server'],
            ['switch', 'pc1'],
            ['switch', 'ap'],
          ],
          hint: 'Markazdagi Switch hamma tugunlarni (Router, Fayl Server, PC-1, Wi-Fi AP) o‘ziga birlashtiradi.',
          explanation: 'Yulduz topologiyasida barcha qurilmalar markaziy Switch orqali bog‘lanadi va bitta shox uzilsa ham tizim ishlaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Zamonaviy maktab va ofislarda eng ko‘p qo‘llaniladigan, ishonchli tarmoq topologiyasi qaysi?',
        options: ['Shina (Bus)', 'Yulduz (Star)', 'Chiziqli', 'Kabelsiz'],
        answer: 1,
        explanation: 'Yulduz (Star) topologiyasida barcha qurilmalar markaziy Switch ga ulanadi va boshqarish oson.',
      },
      {
        prompt: 'Shina (Bus) topologiyasining eng katta kamchiligi nima?',
        options: [
          'Asosiy magistral kabel uzilsa, butun tarmoq ishdan chiqadi',
          'Juda tez ishlaydi',
          'Switch kerak bo‘ladi',
          'Wi-Fi ishlaydi',
        ],
        answer: 0,
        explanation: 'Shina topologiyasida barcha kompyuterlar bitta asosiy kabelga bog‘langan bo‘ladi.',
      },
      {
        prompt: '12 ta kompyuterni ulashda nega 12 portli emas, 16 yoki 24 portli Switch tanlash tavsiya etiladi?',
        options: [
          'Kelajakda yangi kompyuter yoki printer qo‘shilganda zaxira port (masshtablanish) bo‘lishi uchun',
          '12 portli Switch ishlamaydi',
          'Kabel yetmasligi uchun',
          'Elektr ko‘p ketishi uchun',
        ],
        answer: 0,
        explanation: 'Zaxira portlar qoldirish tarmoqni keyinchalik osongina kengaytirish imkonini beradi.',
      },
      {
        prompt: 'Yulduz (Star) topologiyasida bitta kompyuterga ketgan kabel uzilib qolsa nima sodir bo‘ladi?',
        options: [
          'Butun maktab tarmog‘i to‘xtaydi',
          'Faqat o‘sha bitta kompyuter tarmoqdan uziladi, qolganlari normal ishlayveradi',
          'Router yonib ketadi',
          'Server o‘chadi',
        ],
        answer: 1,
        explanation: 'Har bir qurilma mustaqil kabelda ulangani uchun nosozlik boshqalarga ta’sir qilmaydi.',
      },
      {
        prompt: 'Wi-Fi Access Point (AP) ni xonaning qaysi qismiga o‘rnatish eng samarali?',
        options: [
          'Temir shkaf ichiga',
          'To‘siqlardan xoli balandroq va xona markaziga yaqin joyga',
          'Yerto‘la burchagiga',
          'Printer ostiga',
        ],
        answer: 1,
        explanation: 'Baland va ochiq markaziy nuqta simsiz signalni hamma tomonga teng tarqatadi.',
      },
    ],
    teacherNotes: {
      method: 'Sinf o‘quvchilari bilan arqon yoki chizma yordamida Bus va Star topologiyalarini sinab ko‘rish.',
      timing: '10 daqiqa topologiyalar, 22 daqiqa loyiha chizish, 13 daqiqa NetBuilder va test.',
      assessment: 'Star topologiyasi, zaxira port va Wi-Fi joylashuvi mantiqi.',
      homework: '3 xonali kichik ofis uchun tarmoq chizmasini (Star + AP) daftarga chizing.',
    },
  },
  {
    id: 'g8-l21',
    grade: 8,
    no: 21,
    part: '2-yarim yillik',
    title: 'Tarmoq boshqaruvi. Boshqarish vazifalarini aniqlash',
    kind: 'dars',
    hours: 1,
    tools: ['Tarmoq'],
    objectives: [
      'O‘quvchi tarmoq ma’muri (Network Administrator) ning asosiy vazifalarini (foydalanuvchi hisoblari, ruxsatlar, monitoring, yangilash va zaxira) biladi.',
      'O‘quvchi oddiy tarmoq muammolarini aniqlash (Troubleshooting: kabel, IP, ping) bosqichlarini tushunadi.',
    ],
    intro:
      'Maktabda 30 ta kompyuter har kuni muammosiz ishlashi uchun kimdir ularni kuzatib, yangi o‘quvchilarga login berib, tezlikni nazorat qilib turishi kerak. Bu — Tarmoq boshqaruvi deyiladi!',
    sections: [
      {
        heading: 'Tarmoq boshqaruvining asosiy vazifalari',
        body: '1) Hisoblar va huquqlarni boshqarish: har bir o‘quvchi va ustozga alohida login va ruxsat (masalan, ustoz jurnali papkasini o‘quvchilar o‘zgartira olmasligi); 2) Monitoring: tarmoq tezligi va qurilmalar holatini kuzatish; 3) Dasturlarni yangilash va litsenziyalarni nazorat qilish; 4) Markaziy zaxira nusxa (Backup) olish; 5) Nosozliklarni bartaraf etish.',
        example: 'Umumiy "Informatika_Darslar" papkasiga o‘qituvchiga "Read/Write" (o‘zgartirish), o‘quvchilarga esa "Read-only" (faqat o‘qish) huquqi beriladi.',
        tip: 'Internet ishlamay qolganda darhol Routerni ayblamang! Qadam-baqadam tekshiring: 1) Kabel chirog‘i yonyaptimi? 2) Boshqa sayt ochilyaptimi? 3) `ping` buyrug‘i javob beryaptimi?',
      },
      {
        heading: 'Oddiy tarmoq diagnostikasi (`ping`, `ipconfig`)',
        body: 'Buyruqlar satrida `ipconfig` (yoki Linux/Mac da `ip a`) kompyuterning joriy IP manzilini ko‘rsatadi. `ping 8.8.8.8` esa boshqa qurilma yoki internet bilan aloqa bor-yo‘qligini millisoniyalarda tekshiradi.',
        example: 'Agar `ping` da "Request timed out" chiqsa, demak aloqa yo‘q yoki bloklangan.',
      },
    ],
    keyTerms: [
      { term: 'Tarmoq ma’muri (SysAdmin)', definition: 'Tarmoq ishini, hisoblarni va xavfsizlikni boshqaruvchi mutaxassis.' },
      { term: 'Ruxsat huquqlari (Permissions)', definition: 'Foydalanuvchilarning papka va resurslardan foydalanish chegarasi (Read / Write).' },
      { term: 'Monitoring', definition: 'Tarmoq yuklamasi, tezligi va qurilmalar sozligini doimiy kuzatish.' },
      { term: 'Ping buyrug‘i', definition: 'Tarmoqdagi boshqa tugun bilan aloqa bor-yo‘qligi va kechikishini tekshiruvchi buyruq.' },
    ],
    steps: [
      '1. Maktab tarmog‘ida 3 ta foydalanuvchi guruhini ajrating: Direktor/Admin, O‘qituvchi, O‘quvchi.',
      '2. Har bir guruhga umumiy server papkalarida qanday ruxsat (Read / Write / None) berilishini belgilang.',
      '3. "Kompyuter internetga ulanmayapti" muammosini tekshirishning 4 qadamli algoritmini tuzing.',
    ],
    practice: [
      {
        task: 'Maktab serveridagi "O‘quv_materiallar" va "Test_javoblari" papkalari uchun o‘qituvchi va o‘quvchi huquqlarini belgilang.',
        expected: 'O‘quv_materiallar: O‘quvchi = Read-only; Test_javoblari: O‘quvchi = Ruxsat yo‘q.',
        difficulty: 'oson',
      },
      {
        task: 'Aloqa uzilganda tekshirish ketma-ketligini (jismoniy ulanish → IP → Router → Provayder) yozing.',
        expected: 'Eng sodda sababdan (kabel/Wi-Fi) murakkabga qarab mantiqiy tartib tuziladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l21-g1',
        num: '01',
        title: 'Nosozlikni aniqlash tartibi',
        topic: 'Tarmoq boshqaruvi',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Sinfdagi bitta kompyuterda internet ishlamay qolganda tarmoq ma’muri tekshiradigan qadamlarni tartiblang.',
          items: [
            'Jismoniy ulanishni (UTP kabel ulangani va port chirog‘i yonishini) tekshirish',
            'Kompyuterda IP manzil olinganligini (ipconfig) ko‘rish',
            'Lokal Router ga `ping` yuborib ichki aloqani tekshirish',
            'Tashqi internet manziliga `ping` berib provayder aloqasini aniqlash',
          ],
          hint: 'Avval kabel (jismoniy), keyin IP sozlamasi, so‘ng ichki Router va nihoyat tashqi Internet.',
          explanation: 'Pastdan yuqoriga (kabeldan tashqi tarmoqqa) tekshirish muammo manbasini eng tez topadi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Maktab serveridagi "Darsliklar" papkasini o‘quvchilar ko‘ra olishi, lekin o‘chira olmasligi uchun qaysi huquq beriladi?',
        options: ['Full Control (To‘liq)', 'Read-only (Faqat o‘qish)', 'Delete', 'Admin'],
        answer: 1,
        explanation: 'Read-only huquqi fayllarni ochish va nusxalashga ruxsat beradi, lekin o‘zgartirish yoki o‘chirishni taqiqlaydi.',
      },
      {
        prompt: 'Tarmoqdagi boshqa kompyuter yoki server bilan aloqa bor-yo‘qligini tekshiruvchi mashhur buyruq qaysi?',
        options: ['print', 'ping', 'copy', 'style'],
        answer: 1,
        explanation: '`ping` buyrug‘i sinov paketlari yuborib, aloqa mavjudligi va tezligini tekshiradi.',
      },
      {
        prompt: 'Tarmoq ma’murining asosiy vazifalariga qaysi biri KIRMAYDI?',
        options: [
          'Foydalanuvchi hisoblari va ruxsatlarini boshqarish',
          'Tarmoq ishlashi va tezligini monitoring qilish',
          'Boshqalarning shaxsiy parollarini tarqatish',
          'Server ma’lumotlarining zaxira nusxasini (Backup) olish',
        ],
        answer: 2,
        explanation: 'Tarmoq ma’muri maxfiylik va xavfsizlikni saqlashi shart, parollarni aslo tarqatmaydi.',
      },
      {
        prompt: 'Faqat 1 ta kompyuterda internet yo‘qolib, qolgan 14 tasida ishlayotgan bo‘lsa, muammo qayerda bo‘lishi ehtimoli eng katta?',
        options: [
          'Butun shaharda internet o‘chgan',
          'O‘sha bitta kompyuterning kabeli, porti yoki tarmoq sozlamasida',
          'Provayder serveri buzilgan',
          'Modem o‘chirilgan',
        ],
        answer: 1,
        explanation: 'Qolgan kompyuterlar ishlayotgani Router va provayder soz ekanini bildiradi.',
      },
      {
        prompt: 'Tarmoq monitoringi nima uchun amalga oshiriladi?',
        options: [
          'Muammolar, tiqilishlar va nosozliklarni foydalanuvchilar sezishidan oldin aniqlash uchun',
          'Monitor rangini o‘zgartirish uchun',
          'Kabel uzunligini o‘lchash uchun',
          'O‘yin o‘ynash uchun',
        ],
        answer: 0,
        explanation: 'Monitoring tarmoq barqarorligi va tezkor xizmat ko‘rsatishni ta’minlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Sinf rollari bo‘yicha (Admin, Ustoz, O‘quvchi) papka ruxsatlari matritsasini tuzish.',
      timing: '10 daqiqa tushuntirish, 23 daqiqa ruxsatlar va diagnostika, 12 daqiqa Order va test.',
      assessment: 'Read-only vs Write farqi va diagnostika tartibini to‘g‘ri bilishi.',
      homework: 'Agar sinf tarmog‘idagi HAMMA kompyuterda birdan internet o‘chsa, birinchi qayerlarni tekshirish kerakligini yozing.',
    },
  },
  {
    id: 'g8-l22',
    grade: 8,
    no: 22,
    part: '2-yarim yillik',
    title: 'Tarmoq xavfsizligi',
    kind: 'dars',
    hours: 1,
    tools: ['Tarmoq'],
    objectives: [
      'O‘quvchi tarmoqdagi asosiy tahdidlarni (ruxsatsiz kirish, zararli dasturlar, ochiq Wi-Fi tinglanishi, zaif router paroli) biladi.',
      'O‘quvchi tarmoqni himoyalash usullarini (Firewall/Fayervol, WPA2/WPA3 Wi-Fi shifrlash, antivirus, VPN va HTTPS) tushuntira oladi.',
    ],
    intro:
      'Kompyuter tarmog‘i eshik va derazasi ochiq uyga o‘xshaydi: agar Fayervol (qorovul), WPA3 shifrlash (qulf) va Antivirus bo‘lmasa, begona kimsalar tarmog‘ingizga kirib ma’lumotlaringizni ko‘rishi mumkin!',
    sections: [
      {
        heading: 'Tarmoq xavfsizligi devorlari: Fayervol va Shifrlash',
        body: 'Fayervol (Firewall — "Olovli devor") — ichki tarmoq va internet o‘rtasida turib, har bir kiruvchi va chiquvchi trafikni qoidalar bo‘yicha tekshiradigan himoya tizimi (ruxsat etilmagan ulanishlarni bloklaydi). Wi-Fi tarmoqlarida esa ochiq (parolsiz) yoki eski WEP o‘rniga kuchli WPA2 yoki WPA3 shifrlash ishlatilishi shart!',
        example: 'Kafe yoki metroda parolsiz ochiq Wi-Fi ga ulanganda bank ilovalari va parollar kiritilmaydi, chunki trafik shifrlanmagan bo‘lishi mumkin.',
        tip: 'Yangi Router o‘rnatilganda uning zavod standart parolini ("admin / admin") DARHOL o‘zgartirish kerak — bu eng birinchi himoya qadamidir!',
      },
      {
        heading: 'Zararli dasturlar va HTTPS / VPN',
        body: 'Tarmoq orqali tarqaladigan Chuvalchang (Worm) va Troyanlardan saqlanish uchun yangilangan Antivirus va tizim yangilanishlari (Updates) kerak. Shuningdek internetda HTTPS saytlardan foydalanish va jamoat tarmog‘ida VPN ishlatish ma’lumotlarni shifrlangan tunnelda saqlaydi.',
        example: 'Firewall shubhali portdan kirmoqchi bo‘lgan begona ulanishni darhol to‘sadi.',
      },
    ],
    keyTerms: [
      { term: 'Fayervol (Firewall)', definition: 'Tarmoqqa kiruvchi va chiquvchi ma’lumotlarni xavfsizlik qoidalariga ko‘ra filtrlaydigan himoya devori.' },
      { term: 'WPA2 / WPA3', definition: 'Simsiz Wi-Fi tarmog‘idagi ma’lumotlarni shifrlovchi zamonaviy himoya standartlari.' },
      { term: 'Shifrlash (Encryption)', definition: 'Ma’lumotni begonalar o‘qiy olmaydigan maxfiy ko‘rinishga o‘tkazish.' },
      { term: 'MAC filtrlash', definition: 'Routerga faqat ro‘yxatga kiritilgan aniq qurilmalarnigina kiritish usuli.' },
    ],
    steps: [
      '1. Tarmoq xavfsizligining 4 ta himoya qatlamini (Router paroli → WPA3 Wi-Fi → Firewall → Antivirus) sxemada chizing.',
      '2. Ochiq parolsiz Wi-Fi tarmog‘ida qanday harakatlardan tiyilish kerakligini yozing.',
      '3. CaseStudy vaziyatini tahlil qilib to‘g‘ri qaror qabul qiling.',
    ],
    practice: [
      {
        task: 'Uy Wi-Fi routerini himoyalash uchun 4 qadamli xavfsizlik yo‘riqnomasini tuzing.',
        expected: 'Admin parolini almashtirish, WPA2/WPA3 yoqish, kuchli Wi-Fi paroli, proshivkani yangilash.',
        difficulty: 'oson',
      },
      {
        task: 'Firewall va Antivirus o‘rtasidagi vazifa farqini aniq misolda izohlang.',
        expected: 'Firewall tarmoq ulanishlarini (trafikni) nazorat qiladi, Antivirus esa fayl va dasturlardagi viruslarni topib yo‘q qiladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l22-g1',
        num: '01',
        title: 'Tarmoq xavfsizligi qalqoni',
        topic: 'Tarmoq xavfsizligi',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Ushbu holatda tarmoq xavfsizligi bo‘yicha eng to‘g‘ri yo‘l qaysi?',
          scenario: 'Siz kafeda bepul, parolsiz "Free_Cafe_WiFi" tarmog‘iga ulandingiz va elektron pochtangiz hamda ota-onangizning bank ilovasiga kirmoqchisiz. Nima qilish xavfsizroq?',
          options: [
            {
              text: 'Darhol bank ilovasiga kirib parolni yozaveraman, farqi yo‘q',
              isCorrect: false,
              feedback: 'Xavfli! Parolsiz ochiq Wi-Fi da begonalar trafikni kuzatib qolishi mumkin.',
            },
            {
              text: 'Bank va muhim parolli hisoblarga ochiq Wi-Fi orqali kirmayman — mobil internet (4G/5G) dan foydalanaman',
              isCorrect: true,
              feedback: 'A’lo qaror! Moliyaviy va maxfiy tizimlar uchun ochiq jamoat Wi-Fi sidan ko‘ra shifrlangan mobil tarmoq xavfsizroq.',
            },
            {
              text: 'Parolimni hamma ko‘rishi uchun chatga yozib qo‘yaman',
              isCorrect: false,
              feedback: 'Mutlaqo noto‘g‘ri! Parollar har doim maxfiy qolishi kerak.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ichki tarmoq va internet o‘rtasida turib, ruxsatsiz ulanishlarni to‘suvchi himoya tizimi nima?',
        options: ['Switch', 'Fayervol (Firewall)', 'Hub', 'Modem'],
        answer: 1,
        explanation: 'Firewall tarmoq trafikini xavfsizlik qoidalariga muvofiq filtrlaydi.',
      },
      {
        prompt: 'Wi-Fi tarmog‘ini himoyalash uchun hozirgi kunda qaysi shifrlash protokoli tavsiya etiladi?',
        options: ['Parolsiz (Open)', 'WEP (eski)', 'WPA2 yoki WPA3', 'HTTP'],
        answer: 2,
        explanation: 'WPA2 va eng yangi WPA3 standartlari kuchli shifrlashni ta’minlaydi.',
      },
      {
        prompt: 'Yangi Wi-Fi router xarid qilinganda bajarilishi SHART bo‘lgan birinchi xavfsizlik amali nima?',
        options: [
          'Chiroqlarini yopish',
          'Zavod standart admin login/parolini ("admin/admin") kuchli parolga o‘zgartirish',
          'Antennalarini yechish',
          'Fayervolni o‘chirish',
        ],
        answer: 1,
        explanation: 'Standart router parollari internetda hammaga ma’lum bo‘lgani uchun ularni darhol almashtirish kerak.',
      },
      {
        prompt: 'Fayervol (Firewall) va Antivirusning asosiy farqi nimada?',
        options: [
          'Firewall tarmoq trafikini nazorat qiladi, Antivirus esa zararli fayllarni aniqlab tozalaydi',
          'Ikkalasi aynan bir xil',
          'Firewall faqat Wordda ishlaydi',
          'Antivirus kabellarni ulaydi',
        ],
        answer: 0,
        explanation: 'Firewall — kirish-chiqish darvozasi nazoratchisi, Antivirus esa fayllar tekshiruvchisidir.',
      },
      {
        prompt: 'Nima uchun parolsiz ochiq Wi-Fi orqali bank karta parollarini kiritmaslik kerak?',
        options: [
          'Batareya tez tugaydi',
          'Shifrlanmagan ochiq tarmoqda ma’lumotlarni ushlab qolish (tinglash) xavfi yuqori',
          'Ekran xiralashadi',
          'Wi-Fi ishlamaydi',
        ],
        answer: 1,
        explanation: 'Ochiq Wi-Fi da ma’lumotlarni uchinchi shaxslar tutib olishi osonroq.',
      },
    ],
    teacherNotes: {
      method: '"Qorovul darvoza (Firewall) va qulfli xona (WPA3)" analogiyasi bilan tushuntirish.',
      timing: '10 daqiqa tushuntirish, 20 daqiqa uy router xavfsizligi rejasi, 15 daqiqa CaseStudy va test.',
      assessment: 'Firewall, WPA2/WPA3 va jamoat Wi-Fi xavfini to‘g‘ri asoslay olishi.',
      homework: 'Uyingizdagi Wi-Fi tarmog‘i WPA2 yoki WPA3 ekanligini (telefondan ko‘rib) aniqlab keling.',
    },
  },
  {
    id: 'g8-l23',
    grade: 8,
    no: 23,
    part: '2-yarim yillik',
    title: 'Amaliy mashgʻulot: maktab kompyuter tarmog‘ini loyihalash',
    kind: 'loyiha',
    hours: 1,
    tools: ['Tarmoq'],
    objectives: [
      'O‘quvchi haqiqiy maktab miqyosida ko‘p xonali (Informatika xonasi, Kutubxona, O‘qituvchilar xonasi, Server xonasi) tarmoq loyihasini tuzadi.',
      'O‘quvchi loyihada barcha zarur komponentlar (Modem, Router, Firewall, Asosiy Switch, Qavat Switchlari, AP va kabellar) ni mantiqiy joylashtiradi.',
    ],
    intro:
      'Bugun haqiqiy tarmoq arxitektorimiz! Butun maktabning internet va ichki tarmog‘ini noldan loyihalab, 3 ta xonani yagona xavfsiz tizimga birlashtiramiz.',
    sections: [
      {
        heading: 'Maktab tarmog‘i arxitekturasi',
        body: 'Katta binoda barcha kabellarni 3-qavatdan 1-qavatga cho‘zish o‘rniga iyerarxik Yulduz (Extended Star) sxemasi ishlatiladi: Internet → Modem → Firewall/Router → Asosiy Server & Bosh Switch. Undan esa har bir xonadagi (Informatika, Kutubxona) lokal Switch ga bitta magistral kabel boradi, ustozlar xonasiga esa Wi-Fi Access Point o‘rnatiladi.',
        example: 'Informatika xonasi (15 ta PC + 1 ta Printer → 24 portli Switch) → Bosh Switch.',
        tip: 'Maktab serveri alohida qulflanadigan xonada (yoki metall shkaf — Rack da) turishi va uzluksiz quvvat manbai (UPS) ga ulangan bo‘lishi kerak!',
      },
      {
        heading: 'Loyiha spetsifikatsiyasi va byudjet',
        body: 'Loyihada faqat chizma emas, jihozlar ro‘yxati (Bill of Materials) ham yoziladi: nechta Router, nechta Switch, nechta AP, taxminiy necha metr UTP kabel va qaysi xavfsizlik choralari (Firewall, o‘quvchilar uchun kontent filtri) qo‘llanilishi ko‘rsatiladi.',
        example: '1 ta Router, 2 ta 24-portli Switch, 2 ta Wi-Fi AP, 200 metr Cat6 UTP kabel.',
      },
    ],
    keyTerms: [
      { term: 'Iyerarxik Yulduz (Extended Star)', definition: 'Bosh Switch orqali boshqa xona Switchlarini bog‘lovchi kengaytirilgan tarmoq sxemasi.' },
      { term: 'Jihozlar ro‘yxati (BOM)', definition: 'Loyihani amalga oshirish uchun kerak bo‘ladigan barcha apparat va kabellar smetasi.' },
      { term: 'UPS (Uzluksiz quvvat)', definition: 'Elektr o‘chganda server va routerlarni vaqtincha quvvatlab turuvchi batareya qurilmasi.' },
      { term: 'Kontent filtri', definition: 'Maktab tarmog‘ida xavfli va chalg‘ituvchi saytlarni bloklovchi xavfsizlik qoidasi.' },
    ],
    steps: [
      '1. Maktabning 3 ta hududini belgilang: Informatika xonasi (12 PC), Kutubxona (4 PC + Wi-Fi), O‘qituvchilar xonasi (Wi-Fi + Printer).',
      '2. Kirish nuqtasini tuzing: Internet → Modem → Router/Firewall → Asosiy Server.',
      '3. Switch va AP larni xonalarga taqsimlab Star topologiyasida bog‘lang.',
      '4. NetBuilder da asosiy tugunlarni ulab, kerakli jihozlar ro‘yxatini yozing.',
    ],
    practice: [
      {
        task: 'Maktab tarmog‘i loyihangizda o‘qituvchilar Wi-Fi tarmog‘i bilan o‘quvchilar Wi-Fi tarmog‘ini nima uchun ajratish kerakligini asoslang.',
        expected: 'Xavfsizlik va tezlik ustuvorligi (VLAN/Mehmon tarmog‘i) tushuntiriladi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Maktabning 2 qavatini bog‘lash uchun 1 ta bosh Switch va 2 ta qavat Switchi sxemasini chizing.',
        expected: 'Kabellar tejalgan iyerarxik yulduz sxemasi hosil bo‘ladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g8-l23-g1',
        num: '01',
        title: 'Maktab tarmog‘ini qur (Loyiha)',
        topic: 'Maktab tarmog‘i loyihasi',
        difficulty: 'Qiyin',
        engine: 'netbuilder',
        config: {
          prompt: 'To‘liq maktab tarmog‘ini ulang: Modem — Router — Switch zanjiridan so‘ng Switch ga Maktab Serveri, Sinf PC va Kutubxona AP ni bog‘lang.',
          devices: [
            { id: 'modem', label: 'Modem', type: 'modem' },
            { id: 'router', label: 'Router + Firewall', type: 'router' },
            { id: 'switch', label: 'Bosh Switch', type: 'switch' },
            { id: 'server', label: 'Maktab Serveri', type: 'server' },
            { id: 'pc', label: 'Informatika PC', type: 'pc' },
            { id: 'ap', label: 'Kutubxona Wi-Fi AP', type: 'ap' },
          ],
          requiredLinks: [
            ['modem', 'router'],
            ['router', 'switch'],
            ['switch', 'server'],
            ['switch', 'pc'],
            ['switch', 'ap'],
          ],
          hint: 'Modem — Router — Bosh Switch zanjirini quring va Bosh Switch ga Server, PC hamda Wi-Fi AP ni ulang.',
          explanation: 'Bu arxitektura ham simli sinf kompyuterlarini, ham kutubxona simsiz qurilmalarini markaziy Server va Internetga xavfsiz ulaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ko‘p qavatli maktabda har bir xona Switchini markaziy Bosh Switch ga ulash qaysi sxemaga kiradi?',
        options: ['Shina', 'Iyerarxik Yulduz (Extended Star)', 'Halqa', 'Nuqtadan-nuqtaga'],
        answer: 1,
        explanation: 'Extended Star bir nechta yulduz Switchlarini markaziy Switch bilan bog‘laydi va kabellarni tejaydi.',
      },
      {
        prompt: 'Maktab serveri va asosiy Routerni elektr uzilishidan himoyalash uchun qaysi qurilmaga ulash kerak?',
        options: ['Hub', 'UPS (Uzluksiz quvvat manbai)', 'Printer', 'Skaner'],
        answer: 1,
        explanation: 'UPS elektr o‘chganda tarmoq uskunalarini o‘chirib qo‘ymay ishlatib turadi.',
      },
      {
        prompt: 'Maktab tarmog‘ida o‘qituvchilar va o‘quvchilar uchun alohida Wi-Fi tarmog‘i yaratishning asosiy sababi nima?',
        options: [
          'Maktab jurnallari va ichki hujjatlarni xavfsiz ajratib saqlash uchun',
          'Signalni o‘chirish uchun',
          'Elektr tejash uchun',
          'Kabel rangini o‘zgartirish uchun',
        ],
        answer: 0,
        explanation: 'Tarmoqlarni ajratish (segmentatsiya) xavfsizlikni oshiradi va o‘quvchilarning xizmat serverlariga kirishini cheklaydi.',
      },
      {
        prompt: 'Maktab tarmog‘i loyihasiga nega "Jihozlar ro‘yxati (smeta)" kiritiladi?',
        options: [
          'Qaysi qurilmadan nechta va necha metr kabel sotib olishni aniq hisoblash uchun',
          'Faqat rasm bezash uchun',
          'Dars jadvali tuzish uchun',
          'Word ochish uchun',
        ],
        answer: 0,
        explanation: 'Smeta byudjetni rejalashtirish va hech bir komponent unutilmasligi uchun kerak.',
      },
      {
        prompt: 'Maktab tarmog‘ida xavfli saytlarni bloklash va tashqi hujumlarni to‘xtatish uchun Router ortida nima sozlanadi?',
        options: ['Firewall va kontent filtri', 'Paint', 'Audio ekvalayzer', 'AutoSum'],
        answer: 0,
        explanation: 'Firewall va filtrlash o‘quvchilarni zararli saytlar va tarmoq hujumlaridan himoya qiladi.',
      },
    ],
    teacherNotes: {
      method: 'Guruhlarda maktab qavati planiga qarab kabel va Switch joylashuvini loyihalash.',
      timing: '8 daqiqa topshiriq, 25 daqiqa loyiha va NetBuilder, 12 daqiqa taqdimot va test.',
      assessment: 'Barcha xonalar qamrab olingani, xavfsizlik va zaxira portlar inobatga olingani.',
      homework: 'Keyingi nazorat ishiga Tarmoq komponentlari, topologiyalar va xavfsizlikni takrorlang.',
    },
  },
  {
    id: 'g8-l24',
    grade: 8,
    no: 24,
    part: '2-yarim yillik',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Tarmoq'],
    objectives: [
      'O‘quvchi LAN/WAN, tarmoq komponentlari (NIC, Hub, Switch, Router, Modem, AP), topologiyalar, boshqaruv va xavfsizlik bilimlarini tekshiradi.',
      'O‘quvchi tarmoq muammosi va topologiya sxemasini mustaqil hal qiladi.',
    ],
    intro:
      'Kompyuter tarmoqlari bo‘limini yakunlayapmiz! Nazorat ishida qurilmalar vazifasi, Star/Bus topologiyalari, tarmoq boshqaruvi va xavfsizlik bo‘yicha bilimlarimizni sinovdan o‘tkazamiz.',
    sections: [
      {
        heading: 'Asosiy tarmoq mezonlari',
        body: 'LAN — lokal, WAN — global tarmoq. NIC — kompyuter porti, Hub — hamma portga tarqatuvchi eskirgan qurilma, Switch — manzil bo‘yicha aniq uzatuvchi, Modem — signal o‘zgartiruvchi, Router — tarmoqlarni bog‘lab yo‘l tanlovchi.',
        example: 'Modem → Router → Switch → PC/Server/AP ulanish tartibi.',
        tip: 'Savollarda "Router" bilan "Switch" ni, hamda "Firewall" bilan "Antivirus" ni aralashtirib yubormang!',
      },
      {
        heading: 'Xavfsizlik va Boshqaruv',
        body: 'Yulduz (Star) topologiyasi eng ishonchli, `ping` aloqani tekshiradi, Read-only ruxsati o‘zgartirishdan saqlaydi, Firewall tarmoq darvozasini himoyalaydi va WPA3 Wi-Fi ni shifrlaydi.',
        example: 'Router standart parolini almashtirish — eng birinchi qadam.',
      },
    ],
    keyTerms: [
      { term: 'LAN / WAN', definition: 'Lokal va global kompyuter tarmoqlari.' },
      { term: 'Switch / Router / Modem', definition: 'Tarqatish, yo‘naltirish va signal o‘zgartirish qurilmalari.' },
      { term: 'Star topologiyasi', definition: 'Markaziy Switch atrofida bog‘langan ishonchli tarmoq sxemasi.' },
      { term: 'Firewall & WPA3', definition: 'Tarmoq trafigi filtri va zamonaviy Wi-Fi shifrlash.' },
    ],
    steps: [
      '1. Kichik ofis uchun Star topologiyali tarmoq sxemasini chizing (Router, Switch, 4 ta PC, 1 ta Printer).',
      '2. Har bir qurilma va kabel (UTP / RJ-45) vazifasini qisqacha yozing.',
      '3. Krossvord va yakuniy test savollarini yeching.',
    ],
    practice: [
      {
        task: 'Hub o‘rniga Switch ishlatilganda tarmoqda nima yaxshilanishini 2 ta dalil bilan yozing.',
        expected: 'Paket faqat kerakli portga borgani uchun tezlik va xavfsizlik oshadi.',
        difficulty: 'oson',
      },
      {
        task: 'Tarmoq boshqaruvi va xavfsizligi bo‘yicha 3 ta asosiy qoidani sanang.',
        expected: 'Ruxsatlar (Read/Write), Firewall/WPA3 va muntazam Backup.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g8-l24-g1',
        num: '01',
        title: 'Tarmoq nazorat krossvordi',
        topic: 'Tarmoq atamalari',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: 'Tarmoq bo‘limining asosiy atamalarini toping (bosh harflarda yozing).',
          clues: [
            { id: 'c1', clue: 'Tarmoqlarni bog‘lab eng to‘g‘ri yo‘lni tanlovchi qurilma', answer: 'ROUTER' },
            { id: 'c2', clue: 'Lokal tarmoqdagi kompyuterlarni portlar orqali bog‘lovchi aqlli qurilma', answer: 'SWITCH' },
            { id: 'c3', clue: 'Bino ichidagi lokal kompyuter tarmog‘i (qisqartma 3 harf)', answer: 'LAN' },
            { id: 'c4', clue: 'Tarmoqqa ruxsatsiz kirishni to‘suvchi himoya devori (inglizcha)', answer: 'FIREWALL' },
          ],
          hint: 'Atamalar: ROUTER, SWITCH, LAN, FIREWALL.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Turli tarmoqlarni (masalan, maktab LAN ini Internet bilan) bog‘lovchi qurilma qaysi?',
        options: ['Hub', 'Router', 'RJ-45', 'NIC'],
        answer: 1,
        explanation: 'Router har xil tarmoqlar orasida paketlarga yo‘l ko‘rsatadi.',
      },
      {
        prompt: 'Kelgan signalni barcha portlarga farqiga bormay yuboradigan eskirgan qurilma qaysi?',
        options: ['Switch', 'Hub', 'Modem', 'Firewall'],
        answer: 1,
        explanation: 'Hub signalni hamma portlarga tarqatib tarmoqni sekinlashtiradi.',
      },
      {
        prompt: 'Kompyuterlarda bitta kabel uzilganda ham qolgan kompyuterlar ishlashda davom etadigan topologiya qaysi?',
        options: ['Shina (Bus)', 'Yulduz (Star)', 'Halqa', 'Ketma-ket'],
        answer: 1,
        explanation: 'Yulduz topologiyasida har bir kompyuter alohida kabelda markaziy Switch ga ulangan.',
      },
      {
        prompt: 'Wi-Fi tarmog‘ini shifrlashning eng zamonaviy va xavfsiz standarti qaysi?',
        options: ['WEP', 'WPA3', 'Open', 'HTML'],
        answer: 1,
        explanation: 'WPA3 (va WPA2) eng kuchli simsiz shifrlash usullaridir.',
      },
      {
        prompt: 'Aloqa bor-yo‘qligini tekshirish uchun qaysi buyruq yordamida sinov paketi yuboriladi?',
        options: ['ping', 'dir', 'bold', 'crop'],
        answer: 0,
        explanation: '`ping` buyrug‘i tarmoqdagi tugunning javob berishini va kechikishini tekshiradi.',
      },
    ],
    teacherNotes: {
      method: 'Sinf nazorat ishi: sxema chizish + krossvord + test.',
      timing: '20 daqiqa sxema va yozma, 15 daqiqa krossvord va test, 10 daqiqa tahlil.',
      assessment: 'Qurilmalar vazifasi va topologiya mantiqi aniqligi.',
      homework: 'Keyingi bo‘lim uchun yoqtirgan qisqa multfilm yoki reklama roligining nimasi sizni jalb qilganini o‘ylab keling.',
    },
  },
];
