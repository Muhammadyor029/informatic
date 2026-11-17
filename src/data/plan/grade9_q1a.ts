import type { Lesson } from './types';

export const GRADE_9_Q1A: Lesson[] = [
  {
    id: 'g9-l01',
    grade: 9,
    no: 1,
    part: '1-chorak',
    title: 'Kompyuter qurilmalari va dasturiy taʼminot. Kompyuter tizimining asosiy komponentlari',
    kind: 'dars',
    hours: 1,
    tools: ['Kompyuter tizimi', 'CPU / RAM / ROM'],
    objectives: [
      'O‘quvchi apparat taʼminoti (Hardware) va dasturiy taʼminot (Software) o‘rtasidagi uzviy bog‘liqlikni tushuntira oladi.',
      'O‘quvchi kompyuter tizimining ichki komponentlari (CPU, ona plata, RAM, ROM, GPU, quvvat bloki) vazifasini farqlaydi.',
    ],
    intro:
      'Kompyuter tizimi ikki ajralmas qismdan iborat: ko‘z bilan ko‘rib, qo‘l bilan ushlab bo‘ladigan apparat qismi (Hardware) va unga hayot bag‘ishlovchi dasturlar majmui (Software). Biri ikkinchisisiz ishlay olmaydi.',
    sections: [
      {
        heading: 'Hardware va Software tushunchalari',
        body: 'Apparat taʼminoti — tizim bloki ichidagi va unga ulangan barcha fizik qurilmalardir (protsessor, tezkor xotira, klaviatura, monitor). Dasturiy taʼminot esa kompyuterga qanday amal bajarishni buyuruvchi kodlar to‘plami bo‘lib, u tizimli (operatsion tizim, drayver, utilitlar) va amaliy (matn muharriri, brauzer, CAD, o‘yinlar) turlarga bo‘linadi.',
        example: 'Klaviatura — Hardware, klaviatura tugmasi bosilganda ekranga harf chiqaruvchi Word va OS drayveri — Software.',
        tip: 'Sinfda talabalarga "Hardware — tana va mushaklar, Software — ong va ko‘nikma" analogiyasi orqali tushuntiring.',
      },
      {
        heading: 'Kompyuter tizimining ichki asosiy komponentlari',
        body: 'Ona plata (Motherboard) — barcha qismlarni birlashtiruvchi asosiy sxema. CPU (Markaziy protsessor) — ALU (arifmetik-mantiqiy qurilma) va CU (boshqaruv qurilmasi) yordamida buyruqlarni bajaradi. RAM (Tezkor xotira) — joriy ishlayotgan dasturlarni vaqtincha saqlaydi (o‘chsa ma’lumot yo‘qoladi). ROM (Doimiy xotira) — kompyuter yoqilganda BIOS/UEFI yuklash ko‘rsatmalarini saqlaydi. GPU (Videokarta) — tasvir va 3D grafikani qayta ishlaydi; HDD/SSD esa fayllarni uzoq muddat saqlaydi.',
        example: 'Kompyuter yoqilganda avval ROM ichidagi BIOS/UEFI qurilmalarni tekshiradi (POST), so‘ng SSD dan Operatsion tizimni RAM ga yuklaydi.',
      },
    ],
    keyTerms: [
      { term: 'Hardware (Apparat taʼminoti)', definition: 'Kompyuter tizimining barcha fizik va mexanik qismlari.' },
      { term: 'Software (Dasturiy taʼminot)', definition: 'Apparatni boshqaruvchi va vazifalarni bajaruvchi dasturlar to‘plami.' },
      { term: 'CPU (Protsessor)', definition: 'Buyruqlarni o‘qiydigan, dekodlaydigan va bajaradigan markaziy hisoblash qurilmasi.' },
      { term: 'RAM va ROM', definition: 'RAM — elektrga bog‘liq tezkor xotira; ROM — zavodda yozilgan energiyadan mustaqil boshlang‘ich xotira.' },
    ],
    steps: [
      '1. Kompyuter tizimini ikki ustunga ajrating: Apparat va Dasturiy taʼminot.',
      '2. Tizim blokining ichki komponentlari (CPU, RAM, Motherboard, PSU, SSD, GPU) ni xaritada belgilang.',
      '3. Dasturiy taʼminotni Tizimli va Amaliy guruhlarga tasniflang.',
      '4. Kompyuterni yoqishdan ishchi stol chiqquncha bo‘lgan ma’lumot oqimini ketma-ketlikda tekshiring.',
    ],
    practice: [
      {
        task: 'Uy kompyuteringiz yoki maktab kompyuterining System Information oynasidan CPU, RAM va SSD hajmini aniqlab yozing.',
        expected: 'Masalan: Intel Core i5, 8 GB RAM, 256 GB SSD ko‘rinishida texnik pasport tuziladi.',
        difficulty: 'oson',
      },
      {
        task: 'RAM va ROM xotiralarini 4 mezon (o‘zgaruvchanligi, yozish imkoniyati, hajmi, vazifasi) bo‘yicha taqqoslash jadvalini tuzing.',
        expected: 'Har ikki xotira turi aniq mezonlar asosida to‘g‘ri solishtirilgan jadval.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l01-g1',
        num: '01',
        title: 'Komponent va vazifa mosligi',
        topic: 'Kompyuter arxitekturasi',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'Kompyuter tizimining asosiy komponentlarini ularning vazifasi bilan juftlang.',
          pairs: [
            { left: 'CPU (Markaziy protsessor)', right: 'Hisob-kitob va buyruqlarni boshqarish markazi' },
            { left: 'RAM (Tezkor xotira)', right: 'Ochiq dastur ma’lumotlarini vaqtincha saqlovchi xotira' },
            { left: 'ROM (Doimiy xotira)', right: 'Kompyuterni ishga tushiruvchi BIOS/UEFI saqlanadigan joy' },
            { left: 'Ona plata (Motherboard)', right: 'Barcha ichki qurilmalarni o‘zaro bog‘lovchi asosiy plata' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Kompyuter elektr manbaidan uzilganda qaysi xotiradagi ma’lumotlar o‘chib ketadi?',
        options: ['ROM', 'SSD', 'RAM', 'Flash karta'],
        answer: 2,
        explanation: 'RAM energiyaga bog‘liq (volatile) xotira bo‘lib, tok uzilishi bilan undagi vaqtinchalik ma’lumotlar tozalanadi.',
      },
      {
        prompt: 'Kompyuter yoqilganda BIOS/UEFI yuklash ko‘rsatmalari qayerda saqlanadi?',
        options: ['ROM chipida', 'Printer buferida', 'Sichqoncha xotirasida', 'Brauzer keshida'],
        answer: 0,
        explanation: 'Boshlang‘ich yuklash kodi energiyadan mustaqil ROM xotirasida saqlanadi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri AMALIY dasturiy taʼminotga misol bo‘ladi?',
        options: ['Windows 11 drayveri', 'LibreOffice Writer', 'BIOS mikrodasturi', 'Linux yadrosi'],
        answer: 1,
        explanation: 'LibreOffice Writer foydalanuvchiga aniq matnli vazifani bajarishga xizmat qiluvchi amaliy dasturdir.',
      },
      {
        prompt: 'Protsessor tarkibidagi arifmetik va mantiqiy amallarni bajaruvchi qism qanday ataladi?',
        options: ['ALU', 'PSU', 'HDMI', 'DVD'],
        answer: 0,
        explanation: 'ALU (Arithmetic Logic Unit) barcha matematik va mantiqiy taqqoslashlarni bajaradi.',
      },
      {
        prompt: 'Qaysi komponent tasvir va 3D grafika hisoblashlarini tezlashtiradi?',
        options: ['Ovoz kartasi', 'GPU (Videokarta)', 'Tarmoq kartasi', 'Sovutgich'],
        answer: 1,
        explanation: 'GPU (Graphics Processing Unit) parallel grafik hisob-kitoblar uchun mo‘ljallangan.',
      },
    ],
    teacherNotes: {
      method: 'Chiqindiga chiqarilgan eski tizim bloki qismlarini ko‘rgazma sifatida ko‘rsatib tushuntirish.',
      timing: 'Kirish 5 daq, Hardware/Software 15 daq, Ichki komponentlar 15 daq, Match o‘yini va test 10 daq.',
      assessment: 'Juftlash o‘yini va RAM/ROM farqi bo‘yicha og‘zaki savol-javob.',
      homework: 'O‘z uy kompyuteri yoki telefoni texnik ko‘rsatkichlarini (CPU, RAM, Storage) daftariga yozib kelish.',
    },
  },
  {
    id: 'g9-l02',
    grade: 9,
    no: 2,
    part: '1-chorak',
    title: 'Operatsion tizimlar',
    kind: 'dars',
    hours: 1,
    tools: ['Windows', 'Linux (Ubuntu)', 'macOS', 'Android'],
    objectives: [
      'O‘quvchi operatsion tizimning asosiy funksiyalarini (xotira, fayl, qurilma, xavfsizlik boshqaruvi) tushuntiradi.',
      'O‘quvchi CLI (buyruqlar satri) va GUI (grafik interfeys) o‘rtasidagi farqlar va qo‘llanilish sohalarini solishtiradi.',
    ],
    intro:
      'Operatsion tizim (OT) — foydalanuvchi bilan kompyuter apparati o‘rtasidagi tarjimon va boshqaruvchidir. OT bo‘lmasa, kompyuter temir qismlar to‘plamidan nariga o‘tmaydi.',
    sections: [
      {
        heading: 'Operatsion tizimning asosiy vazifalari',
        body: 'OT quyidagi muhim ishlarni boshqaradi: 1) Protsessor vaqtini taqsimlash (Multitasking); 2) RAM xotirasini dasturlarga ajratish; 3) Fayl tizimini tashkil etish (yaratish, nusxalash, o‘chirish); 4) Kiritish/chiqarish qurilmalarini drayverlar orqali boshqarish; 5) Foydalanuvchi huquqlari va xavfsizlikni nazorat qilish.',
        example: 'Bir vaqtning o‘zida musiqa tinglab, brauzerda ma’lumot qidirish OT ning ko‘p vazifalilik (Multitasking) funksiyasi natijasidir.',
        tip: 'Linux (Ubuntu/Mint) — bepul va ochiq kodli OT bo‘lib, serverlar va dasturchilar orasida juda mashhur.',
      },
      {
        heading: 'Interfeys turlari: CLI va GUI',
        body: 'GUI (Graphical User Interface — Grafik interfeys) WIMP (Windows, Icons, Menus, Pointer) tamoyiliga asoslanadi: sichqoncha bilan ikonkalarni bosish oson, ammo ko‘proq xotira talab qiladi. CLI (Command Line Interface — Buyruqlar satri) matnli buyruqlar orqali boshqariladi: kam resurs sarflaydi va avtomatlashtirish uchun qulay, lekin buyruqlarni yoddan bilishni talab qiladi.',
        example: 'Windows Explorer — GUI misoli; Terminal yoki Command Prompt (`dir`, `mkdir`, `cd`) — CLI misolidir.',
      },
    ],
    keyTerms: [
      { term: 'Operatsion tizim (OT)', definition: 'Apparat resurslarini boshqaruvchi va foydalanuvchi uchun qulay muhit yaratuvchi tizimli dastur.' },
      { term: 'GUI (Grafik interfeys)', definition: 'Oynalar, belgilar, menyular va ko‘rsatkich (WIMP) yordamida boshqariladigan vizual interfeys.' },
      { term: 'CLI (Buyruqlar satri)', definition: 'Klaviatura orqali matnli buyruqlar kiritilib bajariladigan tezkor interfeys.' },
      { term: 'Drayver', definition: 'Operatsion tizimga printer yoki videokarta kabi tashqi qurilma bilan muloqot qilish imkonini beruvchi dastur.' },
    ],
    steps: [
      '1. Kompyuterdagi Task Manager (Vazifalar menejeri) ni oching.',
      '2. Ishlab turgan jarayonlar (Processes) qancha CPU va RAM band qilganini ko‘ring.',
      '3. Buyruqlar satri (Terminal / CMD) ni ochib, `mkdir test9` va `dir` (yoki `ls`) buyruqlarini sinab ko‘ring.',
      '4. GUI va CLI usullarining tezligi va qulayligini taqqoslang.',
    ],
    practice: [
      {
        task: 'CLI (CMD yoki Terminal) orqali ishchi stolda `informatika9` papkasini yarating va ichiga kiring.',
        expected: '`mkdir informatika9` va `cd informatika9` buyruqlari muvaffaqiyatli bajariladi.',
        difficulty: 'oson',
      },
      {
        task: 'GUI va CLI ning 3 tadan afzallik hamda kamchiligini jadvalda yozib bering.',
        expected: 'Xotira sarfi, o‘rganish osonligi, avtomatlashtirish va tezlik mezonlari bo‘yicha aniq tahlil.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l02-g1',
        num: '01',
        title: 'CLI va GUI haqidagi fikrlar',
        topic: 'Operatsion tizim interfeyslari',
        difficulty: 'Oson',
        engine: 'truefalse',
        config: {
          prompt: 'Operatsion tizim va interfeys turlariga oid tasdiqlarni To‘g‘ri yoki Noto‘g‘ri deb baholang.',
          statements: [
            {
              text: 'GUI (Grafik interfeys) odatda CLI ga qaraganda kamroq RAM va protsessor kuchi talab qiladi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! GUI oynalar va grafika chizishi kerakligi uchun CLI ga nisbatan ko‘proq xotira sarflaydi.',
            },
            {
              text: 'Linux operatsion tizimi ochiq kodli va bepul tarqatilishi mumkin.',
              isTrue: true,
              explanation: 'To‘g‘ri! Linux ochiq manbali (Open Source) tizim hisoblanadi.',
            },
            {
              text: 'CLI muhitida foydalanuvchi amallarni sichqoncha bilan ikonkalarni sudrab bajaradi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Bu WIMP (GUI) ga xos, CLI da esa buyruqlar klaviaturadan matn shaklida kiritiladi.',
            },
            {
              text: 'Operatsion tizim fayllarni boshqarish va xotira taqsimotini nazorat qiladi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Fayl tizimi, RAM va protsessor taqsimoti OT ning bosh vazifalaridandir.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'WIMP qisqartmasi nimani anglatadi?',
        options: ['Web, Internet, Mail, Protocol', 'Windows, Icons, Menus, Pointer', 'Write, Input, Memory, Print', 'Word, Image, Media, Page'],
        answer: 1,
        explanation: 'Grafik interfeys asosini tashkil etuvchi 4 unsur: Oynalar, Ikonkalar, Menyular va Ko‘rsatkich.',
      },
      {
        prompt: 'Server administratorlari nima uchun ko‘pincha CLI interfeysini tanlaydilar?',
        options: ['O‘yin o‘ynash uchun', 'Kam resurs sarflab tezkor buyruq va skriptlar bajarish uchun', 'Faqat rasmlarni ko‘rish uchun', 'Monitor rangini o‘zgartirish uchun'],
        answer: 1,
        explanation: 'CLI grafik resurs yemaydi va murakkab vazifalarni bir buyruq bilan avtomatlashtirish imkonini beradi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri mobil operatsion tizim hisoblanadi?',
        options: ['Ubuntu Server', 'Android', 'BIOS', 'Excel'],
        answer: 1,
        explanation: 'Android va iOS smartfon hamda planshetlar uchun yaratilgan mobil operatsion tizimlardir.',
      },
      {
        prompt: 'Tashqi qurilma (masalan, printer) OT bilan to‘g‘ri ishlashi uchun nima o‘rnatiladi?',
        options: ['Drayver', 'Brauzer', 'Arxivator', 'Slayd'],
        answer: 0,
        explanation: 'Drayver OT va aniq qurilma o‘rtasidagi aloqani taʼminlaydi.',
      },
      {
        prompt: 'Bir vaqtning o‘zida bir nechta dasturni ochiq tutish va almashtirib ishlash qobiliyati nima deyiladi?',
        options: ['Kompilyatsiya', 'Multitasking (Ko‘p vazifalilik)', 'Defragmentatsiya', 'Klonlash'],
        answer: 1,
        explanation: 'OT protsessor vaqtini millisoniyalar ichida taqsimlab, bir nechta dasturni parallel yurgizadi.',
      },
    ],
    teacherNotes: {
      method: 'GUI va CLI interfeyslarini bitta vazifa (yangi papka ochish) misolida real ko‘rsatib solishtirish.',
      timing: 'OT vazifalari 15 daq, CLI vs GUI 15 daq, Amaliy terminal va o‘yin 15 daq.',
      assessment: 'True/False o‘yini hamda terminalda papka yaratish mashqi.',
      homework: 'Windows, macOS, Linux va Android tizimlaridan 2 tadan o‘ziga xos xususiyat yozish.',
    },
  },
  {
    id: 'g9-l03',
    grade: 9,
    no: 3,
    part: '1-chorak',
    title: 'Kompyuter turlari',
    kind: 'dars',
    hours: 1,
    tools: ['Desktop', 'Noutbuk', 'Planshet', 'Smartfon', 'Mainframe'],
    objectives: [
      'O‘quvchi shaxsiy kompyuterlar (Desktop, Laptop), mobil qurilmalar (Planshet, Smartfon) va yirik kompyuterlarni (Mainframe, Superkompyuter) farqlaydi.',
      'O‘quvchi vazifaga qarab (ofis, sayohat, bank tizimi) eng mos kompyuter turini tanlay oladi.',
    ],
    intro:
      'Hamma kompyuter ham stol ustidagi monitorli quti emas: cho‘ntagimizdagi smartfon ham, banklarning ulkan serverlari ham kompyuterdir. Ular o‘lchami, quvvati va vazifasiga ko‘ra turlanadi.',
    sections: [
      {
        heading: 'Stol kompyuteri (Desktop) va Noutbuk (Laptop)',
        body: 'Desktop doimiy joyda ishlatishga mo‘ljallangan: qismlarini yangilash (upgrade) oson, narxiga nisbatan unumdorligi yuqori va sovitilishi yaxshi, biroq ko‘tarib yurish noqulay va elektrga bog‘liq. Noutbuk batareyada ishlaydi va ixcham, lekin taʼmirlash/yangilash qiyinroq hamda o‘g‘irlash xavfi yuqori.',
        example: 'Arxitektura va 3D rendering studiyasida odatda kuchli Desktop, talaba yoki jurnalistda esa Noutbuk qulay.',
        tip: 'Stol kompyuteri va noutbukni solishtirishda doim 3 omilni ayting: portativlik, quvvat va modernizatsiya (upgrade).',
      },
      {
        heading: 'Smartfon, Planshet, Phablet va Mainframe',
        body: 'Planshet va smartfonlar sensor ekranli, yengil va doimiy tarmoqqa ulangan qurilmalar bo‘lib, tezkor muloqot va axborot isteʼmoli uchun qulay, lekin klaviaturasi kichikligi sabab katta matn terishga noqulay. Mainframe va Superkompyuterlar esa banklar, aviakompaniyalar va ob-havo modellashtirishda millionlab operatsiyalarni bir vaqtda bajaruvchi ulkan tizimlardir.',
        example: 'Aviachipta bron qilish tizimi minglab kassalarning so‘rovini bir soniyada Mainframe orqali qayta ishlaydi.',
      },
    ],
    keyTerms: [
      { term: 'Desktop (Stol kompyuteri)', definition: 'Doimiy ish joyiga o‘rnatiladigan, qismlarini almashtirish oson kompyuter.' },
      { term: 'Laptop (Noutbuk)', definition: 'Monitor, klaviatura va batareyasi bitta yig‘iluvchi korpusda joylashgan ko‘chma kompyuter.' },
      { term: 'Planshet (Tablet)', definition: 'Sensorli ekran orqali boshqariladigan yassi mobil kompyuter.' },
      { term: 'Mainframe', definition: 'Yirik tashkilotlar (bank, sug‘urta) da millionlab ma’lumotlarni qayta ishlovchi ulkan markaziy kompyuter.' },
    ],
    steps: [
      '1. Kompyuter turlarini quvvat va o‘lchamiga ko‘ra ro‘yxatga oling.',
      '2. Har bir tur uchun 2 ta afzallik va 2 ta cheklovni belgilang.',
      '3. Turli kasb egalari (bankir, video-montajchi, shifokor-konsultant, dasturchi) uchun mos qurilma tanlang.',
    ],
    practice: [
      {
        task: 'Tez-tez xizmat safariga chiqadigan sotuv menejeri uchun Noutbuk yoki Desktopdan qay biri afzalligini asoslang.',
        expected: 'Batareya, vazn va yig‘ilishi tufayli Noutbuk afzal; ofisdagi keng ekran cheklovi esa muqobil yechim bilan tushuntiriladi.',
        difficulty: 'oson',
      },
      {
        task: 'Smartfon va Planshet o‘rtasidagi 3 ta texnik va ergonomik farqni yozing.',
        expected: 'Ekran o‘lchami, qo‘ng‘iroq/SIM ustuvorligi, o‘qish va ko‘p oynali ishlash qulayligi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l03-g1',
        num: '01',
        title: 'Vaziyatga mos kompyuterni tanla',
        topic: 'Kompyuter turlari',
        difficulty: 'Oson',
        engine: 'casestudy',
        config: {
          prompt: 'Qaysi qurilma ushbu vazifa uchun eng to‘g‘ri tanlov hisoblanadi?',
          scenario: 'Xalqaro bank kuniga 10 milliondan ortiq karta to‘lovlarini uzilishsiz, markazlashgan va o‘ta ishonchli tarzda qayta ishlashi kerak.',
          options: [
            {
              text: 'Mainframe kompyuter tizimi',
              isCorrect: true,
              feedback: 'To‘g‘ri! Mainframe millionlab tranzaksiyalarni bir vaqtda va maksimal ishonchlilik bilan qayta ishlaydi.',
            },
            {
              text: 'Sensorli planshet (Tablet)',
              isCorrect: false,
              feedback: 'Planshet shaxsiy mobil foydalanish uchun, u millionlab bank tranzaksiyalariga mo‘ljallanmagan.',
            },
            {
              text: 'Oddiy ofis noutbuki',
              isCorrect: false,
              feedback: 'Noutbuk bunday yuklama va 24/7 bank xavfsizligi talablariga bardosh bera olmaydi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Qaysi kompyuter turining apparat qismlarini (RAM, GPU, SSD) almashtirish va yangilash eng oson?',
        options: ['Smartfon', 'Stol kompyuteri (Desktop)', 'Planshet', 'Aqlli soat'],
        answer: 1,
        explanation: 'Desktop korpusi keng va modulli bo‘lgani uchun qismlarini almashtirish ancha qulay va arzon.',
      },
      {
        prompt: 'Banklar va aviakompaniyalar katta hajmdagi tranzaksiyalar uchun nimadan foydalanadi?',
        options: ['Mainframe', 'Netbuk', 'Kalkulyator', 'MP3 pleer'],
        answer: 0,
        explanation: 'Mainframe — yirik hajmdagi ma’lumotlarni parallel qayta ishlash uchun yaratilgan.',
      },
      {
        prompt: 'Noutbukning Desktopga nisbatan asosiy kamchiligi nimada?',
        options: ['Ekranining mavjudligi', 'Batareya quvvati tugashi va sovitish/yangilash cheklovi', 'Wi-Fi ga ulana olmasligi', 'Klaviaturasi yo‘qligi'],
        answer: 1,
        explanation: 'Noutbuk batareyaga bog‘liq va ixcham korpus sababli ichki qismlari cheklangan.',
      },
      {
        prompt: 'Smartfon bilan planshet orasidagi o‘lchamga ega mobil qurilma ko‘pincha qanday ataladi?',
        options: ['Server', 'Phablet', 'Terminal', 'Skayner'],
        answer: 1,
        explanation: 'Phone + Tablet so‘zlaridan olingan Phablet katta ekranli smartfonni bildiradi.',
      },
      {
        prompt: 'Planshetda uzoq hujjatlar yozish nima uchun noqulay bo‘lishi mumkin?',
        options: ['Ekran sensor klaviaturasi kichik va taktil sezuvchanlik pastligi uchun', 'Wi-Fi ishlamagani uchun', 'Batareyasi bo‘lmagani uchun', 'Brauzer ocholmagani uchun'],
        answer: 0,
        explanation: 'Ekran klaviaturasida fizik tugma hissi yo‘qligi sabab tezkor matn terish qiyinroq.',
      },
    ],
    teacherNotes: {
      method: 'Vaziyatli kartochkalar (Case-based learning) yordamida har bir guruhga turli kasb vazifasini berish.',
      timing: 'Nazariya 20 daq, Jadval tuzish 15 daq, Case study va test 10 daq.',
      assessment: 'Har bir kompyuter turini to‘g‘ri asoslab tanlash.',
      homework: 'Oilangiz a’zolari uchun (o‘quvchi, shifokor, dizayner) qurilma tanlab, 3 qatorli izoh yozing.',
    },
  },
  {
    id: 'g9-l04',
    grade: 9,
    no: 4,
    part: '1-chorak',
    title: 'Yangi texnologiyalarning taʼsiri',
    kind: 'dars',
    hours: 1,
    tools: ['AI', 'AR/VR', 'Biometriya', '3D bosma', 'Kvant'],
    objectives: [
      'O‘quvchi sunʼiy intellekt (AI), kengaytirilgan/virtual reallik (AR/VR), biometriya va robototexnika tamoyillarini izohlaydi.',
      'O‘quvchi yangi texnologiyalarning kundalik hayotga ijobiy va ehtiyot bo‘lish lozim bo‘lgan jihatlarini baholaydi.',
    ],
    intro:
      'Texnologiya har yili keskin o‘zgaradi: kecha fantastika sanalgan ovozli tarjimonlar, yuzni tanish (Face ID) va 3D-bosilgan protezlar bugun oddiy haqiqatga aylandi.',
    sections: [
      {
        heading: 'Sunʼiy intellekt (AI) va Biometriya',
        body: 'AI — inson fikrlashini (o‘rganish, tahlil qilish, tarjima qilish, tasvir tanish) taqlid qiluvchi kompyuter tizimidir. Biometriya esa insonning noyob biologik belgilari — barmoq izi, ko‘z to‘r pardasi (Retina/Iris), yuz tuzilishi va ovozi orqali shaxsini tasdiqlaydi; paroldan farqli o‘laroq uni unutib bo‘lmaydi.',
        example: 'Aeroport pasport nazoratida yuzni tanish tizimi yo‘lovchini 2 soniyada tekshiradi; biroq yorug‘lik yoki niqob xatolikka olib kelishi mumkin.',
        tip: 'Biometriya qulay, lekin barmoq izi bazasi buzilsa uni parol kabi "almashtirib" bo‘lmaydi — shuning uchun himoya juda muhim.',
      },
      {
        heading: 'VR, AR, 3D bosma va Robototexnika',
        body: 'VR (Virtual reallik) maxsus shlem yordamida odamni to‘liq sunʼiy olamga olib kiradi (uchuvchilar simulyatori, o‘yinlar). AR (Kengaytirilgan reallik) esa real olam ustiga raqamli ma’lumot qo‘yadi (masalan, xonangizga virtual mebel joylab ko‘rish). 3D bosma raqamli modeldan qatlam-qatlam buyum (tish protezi, detallar) yasaydi.',
        example: 'Jarrohlar murakkab operatsiyadan oldin VR simulyatorda mashq qiladi, muzeylarda esa AR eksponat tarixini ekranda jonlantiradi.',
      },
    ],
    keyTerms: [
      { term: 'Sunʼiy intellekt (AI)', definition: 'Ma’lumotlardan o‘rganib qaror qabul qiluvchi va inson zakovatini modellashtiruvchi dasturiy tizim.' },
      { term: 'Biometriya', definition: 'Barmoq izi, yuz yoki ko‘z orqali shaxsni avtomatik aniqlash texnologiyasi.' },
      { term: 'VR (Virtual Reality)', definition: 'Insonni to‘liq raqamli simulyatsiya muhitiga sho‘ng‘ituvchi texnologiya.' },
      { term: 'AR (Augmented Reality)', definition: 'Haqiqiy tasvir ustiga qo‘shimcha 3D obyekt yoki matn qo‘shuvchi texnologiya.' },
    ],
    steps: [
      '1. Zamonaviy 5 texnologiya (AI, Biometriya, VR, AR, 3D printer) ni sanang.',
      '2. Har birining tibbiyot, taʼlim va sanoatdagi 1 tadan foydasini yozing.',
      '3. Ulardan noto‘g‘ri foydalanilganda yuzaga keladigan xavflarni (maxfiylik, soxta kontent, ish o‘rinlari) muhokama qiling.',
    ],
    practice: [
      {
        task: 'VR va AR texnologiyalarining asosiy farqini maktab darslari misolida tushuntiring.',
        expected: 'VR da o‘quvchi tarixiy shahar ichiga to‘liq ko‘chadi; AR da esa darslik rasmining ustida 3D yurak modeli chiqadi.',
        difficulty: 'oson',
      },
      {
        task: 'Biometrik autentifikatsiyaning an’anaviy PIN-kodga nisbatan 2 afzalligi va 1 kamchiligini yozing.',
        expected: 'Unutilmaydi va nusxalash qiyin; kamchiligi — jarohat/yorug‘lik taʼsiri yoki ma’lumot sizib chiqsa o‘zgartirib bo‘lmasligi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l04-g1',
        num: '01',
        title: 'Yangi texnologiyalar atamalari',
        topic: 'Yangi texnologiyalar',
        difficulty: 'Oson',
        engine: 'flashcards',
        config: {
          prompt: 'Kartochkalarni aylantirib, zamonaviy texnologiyalarning taʼrifini eslab qoling.',
          cards: [
            { term: 'Biometriya', definition: 'Barmoq izi, yuz yoki ko‘z to‘r pardasi yordamida shaxsni tasdiqlash.', example: 'Smartfonni Face ID bilan ochish' },
            { term: 'AR (Augmented Reality)', definition: 'Real kamera tasviri ustiga raqamli 3D obyekt qo‘shish.', example: 'Xonaga virtual divan qo‘yib ko‘rish' },
            { term: 'VR (Virtual Reality)', definition: 'Ko‘zoynak orqali to‘liq sunʼiy 3D olamga kirish.', example: 'Uchuvchilar trenajyori' },
            { term: '3D Bosma', definition: 'Kompyuter modelidan plastik yoki metal qatlamlab buyum yasash.', example: 'Shaxsiy tibbiy protez yasash' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Real dunyo ko‘rinishi ustiga raqamli tasvir va ma’lumot qo‘shadigan texnologiya qaysi?',
        options: ['AR (Kengaytirilgan reallik)', 'ROM', 'OCR', 'LAN'],
        answer: 0,
        explanation: 'AR real muhitni raqamli obyektlar bilan boyitadi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri biometrik ma’lumotga kirmaydi?',
        options: ['Barmoq izi', 'Ko‘z kamalagi (Iris)', 'Elektron pochta paroli', 'Yuz tuzilishi'],
        answer: 2,
        explanation: 'Parol — eslab qolinadigan matnli kalit, biologik belgi emas.',
      },
      {
        prompt: '3D printer qanday usulda buyum yaratadi?',
        options: ['Qog‘ozga siyoh purkab', 'Materialni qatlam-qatlam qo‘shib (additiv usul)', 'Faqat lazer bilan kesib', 'Audio to‘lqin orqali'],
        answer: 1,
        explanation: '3D bosmada raqamli chizma bo‘yicha yupqa qatlamlar ustma-ust eritilib qo‘yiladi.',
      },
      {
        prompt: 'VR shlemi nima uchun uchuvchilar tayyorlashda ishlatiladi?',
        options: ['Xavfsiz muhitda favqulodda holatlarni mashq qilish uchun', 'Yoqilg‘i quyish uchun', 'Qog‘oz chop etish uchun', 'Chipta sotish uchun'],
        answer: 0,
        explanation: 'Real samolyotga zarar yetkazmasdan bo‘ron yoki nosozlik vaziyatlarini simulyatsiya qilish mumkin.',
      },
      {
        prompt: 'Sunʼiy intellekt tizimlari qanday qilib o‘z aniqligini oshiradi?',
        options: ['Katta hajmdagi ma’lumotlar asosida o‘rganish (Machine Learning) orqali', 'Monitorni kattalashtirib', 'Kompyuterni tez-tez o‘chirib', 'Fayl nomini o‘zgartirib'],
        answer: 0,
        explanation: 'Mashinali o‘rganish algoritmlari ko‘p misollar tahlili asosida naqshlarni aniqlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Qisqa video namoyish va munozara ("Texnologiya foydalimi yoki xavflimi?").',
      timing: 'Taqdimot 20 daq, AR/VR solishtirish 15 daq, Flashcards va quiz 10 daq.',
      assessment: 'Har bir texnologiyaga hayotiy misol keltira olish.',
      homework: 'Tibbiyot yoki qishloq xo‘jaligida AI qo‘llanishi haqida 100 so‘zlik esse yozing.',
    },
  },
  {
    id: 'g9-l05',
    grade: 9,
    no: 5,
    part: '1-chorak',
    title: 'Kiritish qurilmalari va ularning qoʻllanishi',
    kind: 'dars',
    hours: 1,
    tools: ['Klaviatura', 'Sichqoncha', 'Skayner', 'Veb-kamera', 'Mikrofon'],
    objectives: [
      'O‘quvchi asosiy kiritish qurilmalari (klaviatura, sichqoncha, sensor ekran, joystik, skaner, raqamli kamera) ish tamoyilini tushunadi.',
      'O‘quvchi har bir qurilmaning qo‘llanilish sohasi, afzalligi va cheklovlarini tahlil qiladi.',
    ],
    intro:
      'Kiritish qurilmalari tashqi dunyodagi matn, tovush, harakat va tasvirlarni kompyuter tushunadigan raqamli signallarga (0 va 1 larga) aylantirib beradi.',
    sections: [
      {
        heading: 'Matn va ko‘rsatkich kiritish qurilmalari',
        body: 'Klaviatura — harf va buyruqlarni kiritishning asosiy vositasi (ergonomik turlari bilak zo‘riqishini kamaytiradi, lekin tezlik ko‘nikma talab qiladi). Sichqoncha va Taçpad (Touchpad) — GUI da kursorni boshqarish uchun qulay. Trekerbol (Trackerball) — qo‘l harakati cheklangan foydalanuvchilar yoki tor stollar uchun qulay, chunki korpusi qimirlamaydi.',
        example: 'Dizayner va arxitektorlar aniq chizish uchun sichqoncha o‘rniga Grafik planshet (Stylus) dan foydalanadi.',
        tip: 'Touchpad noutbukka o‘rnatilgan bo‘ladi va qo‘shimcha stol joyi talab qilmaydi, lekin ko‘p odamlar uchun "drag-and-drop" qiyinroq.',
      },
      {
        heading: 'Tasvir, tovush va o‘yin kiritish qurilmalari',
        body: 'Skaner qog‘ozdagi rasm yoki matnni raqamli faylga o‘giradi. Mikrofon tovush to‘lqinlarini raqamli audioga aylantiradi (ovozli boshqaruv va qo‘ng‘iroqlar). Veb-kamera jonli video kiritadi. Joystik va geympad — simulyator va o‘yinlarda yo‘nalishni boshqarish uchun.',
        example: 'Eski oilaviy suratlarni raqamlashtirishda yuqori sifatli planshetli skaner ishlatiladi.',
      },
    ],
    keyTerms: [
      { term: 'Kiritish qurilmasi (Input device)', definition: 'Foydalanuvchi yoki muhitdan ma’lumotni kompyuterga uzatuvchi uskuna.' },
      { term: 'Trekerbol (Trackerball)', definition: 'Barmoq bilan aylantiriladigan sharikli ko‘rsatkich qurilmasi.' },
      { term: 'Skaner', definition: 'Qog‘oz hujjat yoki fotosuratni raqamli tasvirga aylantiruvchi qurilma.' },
      { term: 'Ergonomik klaviatura', definition: 'Qo‘l va bilak bo‘g‘imlariga tushadigan yukni kamaytirish uchun bukilgan shakldagi klaviatura.' },
    ],
    steps: [
      '1. Kiritish qurilmalarini 3 guruhga bo‘ling: Matn/Ko‘rsatkich, Audio/Video, Maxsus boshqaruv.',
      '2. Har bir qurilma qaysi turdagi ma’lumot kiritishini aniqlang.',
      '3. Turli foydalanuvchilar (grafik dizayner, nogironligi bor foydalanuvchi, ofis xodimi) uchun qurilma tanlang.',
    ],
    practice: [
      {
        task: 'Sichqoncha va Trekerbolning 2 tadan farqini tushuntiring.',
        expected: 'Sichqoncha butun stol bo‘ylab siljitiladi; trekerbolda faqat sharik barmoq bilan aylantiriladi va kam joy oladi.',
        difficulty: 'oson',
      },
      {
        task: 'Skanerdan olingan qog‘oz hujjatni tahrirlanadigan Word matniga aylantirish uchun qaysi texnologiya qo‘llanilishini yozing.',
        expected: 'OCR (Optical Character Recognition — matnni optik tanish) texnologiyasi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l05-g1',
        num: '01',
        title: 'Kiritish qurilmasi va qo‘llanilishi',
        topic: 'Kiritish qurilmalari',
        difficulty: 'Oson',
        engine: 'fillblank',
        config: {
          prompt: 'Jumladagi bo‘sh o‘rinlarni mos kiritish qurilmalari bilan to‘ldiring.',
          template: 'Qog‘ozdagi rasmni kompyuterga o‘tkazishda {{0}}, stol ustida kam joy egallab kursorni boshqarishda {{1}}, raqamli rasm chizishda esa {{2}} qo‘llaniladi.',
          blanks: [
            { options: ['skaner', 'printer', 'kolonka'], answer: 'skaner' },
            { options: ['trekerbol', 'plotter', 'proyektor'], answer: 'trekerbol' },
            { options: ['grafik planshet', 'mikrofon', 'karnay'], answer: 'grafik planshet' },
          ],
          hint: 'Faqat ma’lumotni kompyuterga KIRITUVCHI qurilmalarni tanlang.',
          explanation: 'Skaner, trekerbol va grafik planshet — kiritish qurilmalari; printer, plotter va proyektor esa chiqarish qurilmalaridir.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Qo‘l harakati cheklangan foydalanuvchi yoki juda tor ish joyi uchun qaysi ko‘rsatkich qurilmasi qulay?',
        options: ['Trekerbol', 'Katta plotter', 'Lazer printer', 'Keng formatli skaner'],
        answer: 0,
        explanation: 'Trekerbol joyidan siljimaydi, faqat ustidagi sharik aylantiriladi.',
      },
      {
        prompt: 'Skanerlangan rasm ichidagi harflarni tahrirlanadigan matnga aylantiruvchi dastur texnologiyasi nima?',
        options: ['OCR', 'PDF', 'MP3', 'HDMI'],
        answer: 0,
        explanation: 'OCR (Optical Character Recognition) tasvirdagi matnni belgilarga ajratib taniydi.',
      },
      {
        prompt: 'Grafik dizayner qo‘lda rasm chizgandek aniq chiziqlar chizishi uchun qaysi qurilma eng mos?',
        options: ['Grafik planshet va stilus', 'Mikrofon', 'Shtrix-kod skaneri', 'OMR'],
        answer: 0,
        explanation: 'Bosim kuchini sezadigan stilus va grafik planshet tabiiy chizish imkonini beradi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri tovush to‘lqinlarini raqamli signalga aylantiradi?',
        options: ['Karnay (Speaker)', 'Mikrofon', 'Proyektor', 'Monitor'],
        answer: 1,
        explanation: 'Mikrofon tovush kirituvchi qurilmadir; karnay esa tovush chiqaradi.',
      },
      {
        prompt: 'Ergonomik klaviaturalar nima uchun ishlab chiqiladi?',
        options: ['RSI (bilak zo‘riqishi) xavfini kamaytirish uchun', 'Faqat chiroyli ko‘rinishi uchun', 'Protsessorni sovitish uchun', 'Internet tezligini oshirish uchun'],
        answer: 0,
        explanation: 'Ergonomik shakldagi klaviatura bilaklarni tabiiy holatda saqlab charchoqni kamaytiradi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfdagi qurilmalarni ko‘rib, har birining kiritish signalini (matn, tovush, tasvir) aniqlash.',
      timing: 'Asosiy kiritish 15 daq, Maxsus qurilmalar 15 daq, FillBlank va savol-javob 15 daq.',
      assessment: 'Kiritish va chiqarish qurilmalarini adashtirmasdan ajrata olish.',
      homework: 'Kundalik hayotda o‘zingiz foydalanadigan 5 ta kiritish qurilmasini sanab, vazifasini yozing.',
    },
  },
  {
    id: 'g9-l06',
    grade: 9,
    no: 6,
    part: '1-chorak',
    title: 'Maʼlumotni bevosita kiritishda foydalaniladigan qurilmalar.',
    kind: 'dars',
    hours: 1,
    tools: ['Barcode', 'QR kod', 'OMR', 'OCR', 'MICR', 'RFID', 'Chip & PIN'],
    objectives: [
      'O‘quvchi inson aralashuvisiz tezkor ma’lumot kirituvchi qurilmalarni (OMR, OCR, MICR, Shtrix-kod, QR, RFID, Chip o‘quvchi) farqlaydi.',
      'O‘quvchi har bir texnologiyaning bank, savdo, imtihon va logistikadagi qo‘llanilishini izohlaydi.',
    ],
    intro:
      'Supermarket kassasi mahsulot narxini qo‘lda termasdan "piq" etib o‘qib oladi, test varaqalari esa soniyada tekshiriladi. Buning siri — bevosita ma’lumot kiritish (Direct Data Entry) qurilmalaridadir!',
    sections: [
      {
        heading: 'Optik va magnit o‘quvchilar: OMR, OCR, MICR',
        body: 'OMR (Optical Mark Recognition) — test varaqalarida qalam bilan bo‘yalgan doirachalarni o‘qiydi (DTM testlari). OCR (Optical Character Recognition) — pasport yoki skanerlangan matnni taniydi. MICR (Magnetic Ink Character Recognition) — bank cheklari pastidagi maxsus magnit siyohli raqamlarni soxtalashtirishga qarshi yuqori aniqlikda o‘qiydi.',
        example: 'Test varaqasi siyoh bilan emas, aniq katakchani bo‘yash orqali OMR skaneridan o‘tadi — tezligi soatiga minglab varaq!',
        tip: 'OMR — belgi/katakchani, OCR — harflarni, MICR — magnit siyohli bank raqamlarini o‘qiydi.',
      },
      {
        heading: 'Shtrix-kod, QR kod, RFID va Chip & PIN',
        body: 'Shtrix-kod (Barcode) skaneri oq-qora chiziqlar orqali mahsulot ID sini o‘qiydi (narx bazadan olinadi!). QR kod ikki o‘lchamli bo‘lib, URL va katta matn sig‘dira oladi. RFID radio to‘lqin orqali kontaktsiz o‘qiydi (ombor, kutubxona, transport kartasi). Chip & PIN — bank kartasi mikrochipini o‘qib, PIN kod bilan xavfsiz to‘lovni tasdiqlaydi.',
        example: 'Metro turniketiga ATTO kartasini tekkizmasdan yaqinlashtirish — RFID/NFC texnologiyasi misolidir.',
      },
    ],
    keyTerms: [
      { term: 'OMR (Optik belgi tanish)', definition: 'Test yoki so‘rovnomadagi bo‘yalgan katakchalarni avtomatik o‘qish.' },
      { term: 'MICR', definition: 'Bank cheklaridagi magnit siyohli kodlarni o‘quvchi xavfsiz texnologiya.' },
      { term: 'RFID', definition: 'Radioto‘lqinlar yordamida tegdagi ma’lumotni masofadan o‘qish tizimi.' },
      { term: 'Shtrix-kod (Barcode)', definition: 'Tovar kodini ifodalovchi turli qalinlikdagi chiziqlar majmui.' },
    ],
    steps: [
      '1. Bevosita kiritish qurilmalari ro‘yxatini tuzing: OMR, OCR, MICR, Barcode, QR, RFID, Chip & PIN.',
      '2. Har biri qayerda qo‘llanilishini (Supermarket, Bank, Imtihon, Kutubxona) belgilang.',
      '3. Qo‘lda terishga nisbatan afzalliklarini (tezlik va inson xatosini yo‘qotish) tahlil qiling.',
    ],
    practice: [
      {
        task: 'Shtrix-kod ichida mahsulotning narxi saqlanadimi yoki faqat kodi? Javobingizni asoslang.',
        expected: 'Faqat mahsulot kodi (GTIN/EAN) saqlanadi; narx do‘kon ma’lumotlar bazasidan olinadi (aks holda narx o‘zgarsa hammasini qaytadan chop etish kerak bo‘lardi).',
        difficulty: 'o‘rta',
      },
      {
        task: 'Maktab kutubxonasi kitoblarini tez hisobga olish uchun Shtrix-kod yoki RFID dan qay biri qulayroq?',
        expected: 'RFID bir vaqtda bir nechta kitobni masofadan o‘qiy oladi va o‘g‘irlikka qarshi signal beradi, lekin shtrix-kod arzonroq.',
        difficulty: 'qiyin',
      },
    ],
    games: [
      {
        id: 'g9-l06-g1',
        num: '01',
        title: 'Direct Data Entry mosligi',
        topic: 'Bevosita ma’lumot kiritish',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Texnologiyani uning haqiqiy qo‘llanilish sohasi bilan juftlang.',
          pairs: [
            { left: 'OMR', right: 'Imtihon test varaqalaridagi bo‘yalgan doirachalarni tekshirish' },
            { left: 'MICR', right: 'Bank cheklaridagi magnit siyohli raqamlarni o‘qish' },
            { left: 'RFID', right: 'Ombor va transport kartalarini kontaktsiz radioto‘lqin bilan o‘qish' },
            { left: 'OCR', right: 'Pasport yoki skanerlangan varaqdan harflarni matnga aylantirish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Davlat imtihonlarida minglab test varaqalarini tekshirishda qaysi qurilma ishlatiladi?',
        options: ['OMR (Optical Mark Reader)', 'MICR', 'Plotter', 'Mikrofon'],
        answer: 0,
        explanation: 'OMR bo‘yalgan doirachalarning o‘rnini yuqori tezlikda va aniqlikda aniqlaydi.',
      },
      {
        prompt: 'Shtrix-kodda (Barcode) qanday ma’lumot kodlangan bo‘ladi?',
        options: ['Mahsulotning takrorlanmas kodi (ID)', 'Mahsulotning rangli rasmi', 'Sotuvchining ismi', 'Narxi va chegirmasi doimiy yoziladi'],
        answer: 0,
        explanation: 'Kassa skaneri kodni o‘qiydi, narx va nom esa kompyuter bazasidan topiladi.',
      },
      {
        prompt: 'Bank cheklarini himoyalash uchun maxsus magnit siyoh ishlatadigan tizim qaysi?',
        options: ['MICR', 'OMR', 'VR', 'VGA'],
        answer: 0,
        explanation: 'MICR magnit siyohni tekshirgani uchun oddiy printerda soxtalashtirish deyarli imkonsiz.',
      },
      {
        prompt: 'Kontaktsiz smart-kartalar va do‘konlardagi himoya teglarida qaysi texnologiya ishlaydi?',
        options: ['RFID', 'Sichqoncha', 'Joystik', 'Matrix printer'],
        answer: 0,
        explanation: 'RFID radioto‘lqinlar orqali chipdagi identifikatorni uzatadi.',
      },
      {
        prompt: 'QR kod oddiy chiziqli shtrix-koddan nimasi bilan ustun?',
        options: ['2D tuzilmasi tufayli ko‘proq ma’lumot (URL, matn) sig‘diradi va har qanday burchakdan o‘qiladi', 'Faqat banklarda ishlaydi', 'Oq-qora rangda bo‘lmaydi', 'Internet talab qilmaydigan printerdir'],
        answer: 0,
        explanation: 'QR kod ikki o‘lchamli matritsa bo‘lib, minglab belgilarni saqlay oladi.',
      },
    ],
    teacherNotes: {
      method: 'Shtrix-kod, QR kod va transport kartasini sinfda ko‘rsatib, farqlarini ochib berish.',
      timing: 'Optik/magnit o‘quvchilar 15 daq, Barcode/QR/RFID 15 daq, Match o‘yini va savollar 15 daq.',
      assessment: 'OMR, OCR va MICR qisqartmalarini adashtirmasdan izohlash.',
      homework: 'Uydagi 2 ta mahsulotning shtrix-kodidagi dastlabki 3 raqam nimani anglatishini aniqlang.',
    },
  },
  {
    id: 'g9-l07',
    grade: 9,
    no: 7,
    part: '1-chorak',
    title: 'Chiqarish qurilmalari va ulardan foydalanish',
    kind: 'dars',
    hours: 1,
    tools: ['Monitor (IPS/OLED)', 'Printer (Laser/Inkjet)', 'Plotter', '3D printer', 'Aktuator'],
    objectives: [
      'O‘quvchi displeylar (LCD/LED/OLED), proyektor, printer turlari (Lazer, Siyohli, Matritsali), plotter va aktuatorlar vazifasini biladi.',
      'O‘quvchi har xil ishlab chiqarish va ofis vazifalariga mos chiqarish qurilmasini tanlay oladi.',
    ],
    intro:
      'Kompyuter qayta ishlagan natijani inson ko‘rishi, eshitishi yoki jismonan olishi uchun Chiqarish qurilmalari (Output devices) xizmat qiladi. Ular ekran tasviridan tortib 3D detallar va robot harakatigacha masʼuldir.',
    sections: [
      {
        heading: 'Ekranlar, Proyektor va Ovoz chiqarish',
        body: 'Monitorlar (LCD/LED, OLED) piksellar yordamida tasvir ko‘rsatadi; CRT (eski kineskopli) monitorlar og‘ir va ko‘p tok yegani uchun deyarli ishlatilmaydi. Multimedia proyektor taqdimotni katta ekranga uzatadi. Karnay (Speaker) va quloqchinlar raqamli audioni analog tovushga aylantiradi.',
        example: 'Kinozal yoki dars xonasida 30 kishiga slayd ko‘rsatish uchun proyektor yoki katta interaktiv panel ishlatiladi.',
        tip: 'Aktuator (Actuator) — kompyuter signalini fizik harakatga (klapanni ochish, issiqxona oynasini ko‘tarish, robot qo‘lini burish) aylantiruvchi muhim chiqarish qurilmasidir!',
      },
      {
        heading: 'Printerlar, Plotter va 3D Printer',
        body: 'Lazer printer toner kukuni va qizdirish orqali juda tez va sifatli chop etadi (ofislar uchun eng maʼqul). Siyohli (Inkjet) printer arzonroq va fotosuratlarni yorqin bosadi, lekin kartriji tez tugaydi. Matritsali (Dot matrix) printer shovqinli bo‘lsa-da, ko‘p nusxali (kopirkali) kvitansiyalar bosishda qo‘llanadi. Plotter — A1/A0 kabi ulkan chizmalar va reklama bannerlari uchun. 3D printer — jismoniy modellar yaratadi.',
        example: 'Arxitektura byurosida binoning katta chizmasini chiqarish uchun oddiy A4 printer emas, balki Plotter kerak.',
      },
    ],
    keyTerms: [
      { term: 'Lazer printer', definition: 'Toner kukuni yordamida yuqori tezlikda matn va hujjat chop etuvchi qurilma.' },
      { term: 'Inkjet (Siyohli) printer', definition: 'Mikroskopik siyoh tomchilarini purkab, yuqori sifatli rasm chop etuvchi printer.' },
      { term: 'Plotter', definition: 'Muhandislik chizmalari, xaritalar va katta formatdagi bannerlarni chizuvchi qurilma.' },
      { term: 'Aktuator', definition: 'Elektr boshqaruv signalini mexanik harakatga aylantiruvchi ijrochi qurilma.' },
    ],
    steps: [
      '1. Chiqarish qurilmalarini 3 turga ajrating: Vizual (Monitor/Proyektor), Qog‘oz/Fizik (Printer/Plotter/3D), Mexanik/Audio (Aktuator/Karnay).',
      '2. Lazer va Siyohli printerlarning 1 bet tannarxi hamda tezligini taqqoslang.',
      '3. Avtomatik issiqxonada aktuator qanday rol o‘ynashini tushuntiring.',
    ],
    practice: [
      {
        task: 'Kuniga 2000 varaq matnli hujjat bosadigan maktab ma’muriyati uchun qaysi printer turini tavsiya qilasiz?',
        expected: 'Lazer printer: bosish tezligi yuqori, toner uzoqqa yetadi va bir sahifa tannarxi arzon.',
        difficulty: 'oson',
      },
      {
        task: 'Nima uchun eski avtomobil ustaxonalarida hali ham Matritsali (Dot Matrix) printerlar uchraydi?',
        expected: 'Changga chidamli, lenta arzon va kopirka qog‘ozida bir vaqtda ikki nusxa kvitansiya ura oladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l07-g1',
        num: '01',
        title: 'Chiqarish qurilmalarini tanla',
        topic: 'Chiqarish qurilmalari',
        difficulty: 'Oson',
        engine: 'sort',
        config: {
          prompt: 'Berilgan qurilmalarni to‘g‘ri toifaga ajrating: Kiritish (Input) yoki Chiqarish (Output).',
          categories: ['Kiritish (Input)', 'Chiqarish (Output)'],
          items: [
            { text: 'Plotter', category: 'Chiqarish (Output)' },
            { text: 'Aktuator (Motor)', category: 'Chiqarish (Output)' },
            { text: 'OMR skaneri', category: 'Kiritish (Input)' },
            { text: 'Lazer printer', category: 'Chiqarish (Output)' },
            { text: 'Mikrofon', category: 'Kiritish (Input)' },
            { text: 'Multimedia proyektor', category: 'Chiqarish (Output)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Katta formatdagi (A1, A0) muhandislik chizmalari va arxitektura rejalarini chop etish uchun nima ishlatiladi?',
        options: ['Plotter', 'Matritsali printer', 'Trekerbol', 'Shtrix-kod skaneri'],
        answer: 0,
        explanation: 'Plotter juda katta qog‘oz rulonlariga aniq vektor chiziqlar chizishga ixtisoslashgan.',
      },
      {
        prompt: 'Issiqxonada harorat oshganda darchani avtomatik ochuvchi mexanizm nima deb ataladi?',
        options: ['Sensor', 'Aktuator', 'Kesh xotira', 'Kompilyator'],
        answer: 1,
        explanation: 'Sensor haroratni o‘lchaydi (input), aktuator esa mexanik harakatni bajaradi (output).',
      },
      {
        prompt: 'Fotosuratlarni uyda sifatli, lekin kam miqdorda chop etish uchun eng arzon tanlov qaysi?',
        options: ['Siyohli (Inkjet) printer', 'Mainframe', 'Dot matrix printer', 'Katta plotter'],
        answer: 0,
        explanation: 'Inkjet printerlar fotopaperda boy rang beradi va boshlang‘ich narxi arzon.',
      },
      {
        prompt: 'Kopirka qog‘ozi orqali bir zarbada bir nechta nusxa (masalan, pochta kvitansiyasi) chiqarishga qaysi printer qodir?',
        options: ['Matritsali (Dot matrix) printer', 'Lazer printer', 'Siyohli printer', '3D printer'],
        answer: 0,
        explanation: 'Matritsali printer ignalari qog‘ozga jismoniy zarba bergani uchun bir necha qatlam nusxaga o‘ta oladi.',
      },
      {
        prompt: 'Lazer printerda tasvir hosil qilish uchun nima ishlatiladi?',
        options: ['Suyuq siyoh purkagich', 'Quruq toner kukuni va qizdiruvchi baraban', 'Qizigan plastmassa ip', 'Igna va lenta'],
        answer: 1,
        explanation: 'Lazer nuri barabanda zaryad hosil qiladi, toner yopishadi va pechda qog‘ozga pishiriladi.',
      },
    ],
    teacherNotes: {
      method: 'Printer turlarini jadval orqali 4 mezon (tezlik, sifat, shovqin, tannarx) bo‘yicha qiyoslash.',
      timing: 'Monitor/Proyektor/Aktuator 15 daq, Printer turlari 20 daq, Saralash o‘yini 10 daq.',
      assessment: 'Aktuator va sensor farqini to‘g‘ri ko‘rsatish.',
      homework: '3 ta printer turi (Laser, Inkjet, Dot matrix) uchun qisqa taqqoslash jadvali chizing.',
    },
  },
  {
    id: 'g9-l08',
    grade: 9,
    no: 8,
    part: '1-chorak',
    title: 'Xotira qurilmalari va ma’lumot almashish vositalari',
    kind: 'dars',
    hours: 1,
    tools: ['HDD', 'SSD', 'CD/DVD/Blu-ray', 'USB Flash', 'Bulut xotira'],
    objectives: [
      'O‘quvchi ikkilamchi xotira texnologiyalarini (Magnit, Optik, Qattiq jismli SSD/Flash) ish printsipiga ko‘ra ajratadi.',
      'O‘quvchi ma’lumot saqlash muhiti (Media) va uni o‘quvchi qurilma (Drive) farqini tushuntira oladi.',
    ],
    intro:
      'Kompyuter o‘chgandan keyin ham rasm, hujjat va dasturlar saqlanib qolishi uchun Ikkilamchi (tashqi) xotira kerak. Bugun ma’lumotlar magnit disklarda, lazer nurlari o‘qiydigan optik disklarda va elektr zaryadli chiplarda saqlanadi.',
    sections: [
      {
        heading: 'Magnit xotira vositalari (HDD, Magnit lenta)',
        body: 'HDD (Qattiq disk) ichida aylanuvchi magnit plastinalar va o‘qish-yozish kallagi bo‘ladi: arzon va katta hajmli (1–16 TB), biroq mexanik qismlari zarbaga nozik va SSD dan sekinroq. Magnit lenta (Magnetic Tape) juda arzonligi tufayli banklar va arxiv markazlarida zaxira nusxa (backup) saqlashda qo‘llanadi (ketma-ket kirish — sequential access).',
        example: 'Katta serverlarda barcha mijoz ma’lumotlarining tungi zaxira nusxasi LTO magnit lentasiga yozib qo‘yiladi.',
        tip: 'Disk (Media) — bu CD/DVD plastinkasi; Diskovod (Drive) — uni aylantirib lazer bilan o‘quvchi qurilmadir.',
      },
      {
        heading: 'Optik va Qattiq jismli (Solid State) vositalar',
        body: 'Optik disklar (CD ~700 MB, DVD ~4.7 GB, Blu-ray ~25–50 GB) ma’lumotni mikroskopik chuqurchalar (pits & lands) shaklida lazer yordamida o‘qiydi. Solid State (SSD, USB Flash, SD-karta) harakatlanuvchi qismsiz NAND flesh-chiplardan iborat: shovqinsiz, zarbaga chidamli va juda tezkor (to‘g‘ridan-to‘g‘ri kirish — direct access).',
        example: 'Eski noutbukdagi HDD ni SSD ga almashtirganda Windows yuklanishi 60 soniyadan 10 soniyagacha tezlashadi.',
      },
    ],
    keyTerms: [
      { term: 'Magnit xotira (HDD)', definition: 'Aylanuvchi magnit disklarga ma’lumot yozadigan anʼanaviy katta hajmli saqlagich.' },
      { term: 'Optik saqlagich', definition: 'CD, DVD, Blu-ray disklarda lazer nuri bilan o‘qiladigan xotira.' },
      { term: 'SSD (Solid State Drive)', definition: 'Harakatlanuvchi qismlari bo‘lmagan, tezkor mikrosxemali doimiy xotira.' },
      { term: 'Ketma-ket va To‘g‘ri kirish', definition: 'Magnit lentada ketma-ket izlanadi; SSD/HDD/DVD da istalgan manzilga darhol o‘tiladi.' },
    ],
    steps: [
      '1. Uch texnologiyani jadvalga tushiring: Magnit, Optik, Solid State.',
      '2. Har bir turga 2 tadan misol yozing (HDD/Lenta; CD/DVD/Blu-ray; SSD/SD/USB).',
      '3. Kirish usuli (Sequential vs Direct access) bo‘yicha ularni belgilang.',
    ],
    practice: [
      {
        task: 'CD (700 MB), DVD (4.7 GB) va Blu-ray (25 GB) disklarining nima uchun sig‘imi har xil ekanini tushuntiring.',
        expected: 'Qizil lazerdan ko‘k-binafsha (qisqa to‘lqinli) lazerga o‘tish yo‘lakchalarni zichroq joylashtirish imkonini beradi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Do‘stingiz bilan 15 GB videofayl almashish uchun qaysi vositalar eng qulayligini ayting.',
        expected: 'USB 3.0 Flash xotira (32 GB+) yoki Bulutli xotira (Google Drive/Telegram), chunki CD va oddiy DVD ga sig‘maydi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g9-l08-g1',
        num: '01',
        title: 'Xotira texnologiyasiga ajrat',
        topic: 'Xotira qurilmalari',
        difficulty: 'Oson',
        engine: 'sort',
        config: {
          prompt: 'Xotira vositalarini ishlash texnologiyasiga ko‘ra 3 toifaga ajrating.',
          categories: ['Magnit', 'Optik', 'Solid State (Flesh)'],
          items: [
            { text: 'Qattiq disk (HDD)', category: 'Magnit' },
            { text: 'Arxiv magnit lentasi', category: 'Magnit' },
            { text: 'Blu-ray disk', category: 'Optik' },
            { text: 'DVD-R disk', category: 'Optik' },
            { text: 'NVMe SSD', category: 'Solid State (Flesh)' },
            { text: 'SD xotira kartasi', category: 'Solid State (Flesh)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Qaysi xotira turida harakatlanuvchi mexanik qism umuman bo‘lmaydi?',
        options: ['SSD', 'HDD', 'DVD-RW', 'Magnit lenta'],
        answer: 0,
        explanation: 'SSD to‘liq yarimo‘tkazgich flesh-chiplardan tashkil topgan.',
      },
      {
        prompt: 'Ma’lumotni o‘qish uchun boshidan oxirigacha o‘tkazishni talab qiluvchi (ketma-ket kirish) vosita qaysi?',
        options: ['Magnit lenta (Magnetic tape)', 'SSD', 'Blu-ray', 'SD karta'],
        answer: 0,
        explanation: 'Magnit lenta kerakli joyga yetib borguncha lenta bo‘ylab aylanib chiqishi lozim.',
      },
      {
        prompt: 'Bir qatlamli standart DVD diskning taxminiy sig‘imi qancha?',
        options: ['700 MB', '4.7 GB', '1.44 MB', '25 GB'],
        answer: 1,
        explanation: 'CD — ~700 MB, bir qatlamli DVD — ~4.7 GB, bir qatlamli Blu-ray — ~25 GB.',
      },
      {
        prompt: 'Blu-ray disklari nima uchun ko‘k lazerdan foydalanadi?',
        options: ['To‘lqin uzunligi qisqa bo‘lgani uchun ma’lumotni juda zich yozish mumkin', 'Faqat chiroyli ko‘rinishi uchun', 'Diskni tez qizdirish uchun', 'Internetga ulanish uchun'],
        answer: 0,
        explanation: 'Qisqa to‘lqinli ko‘k-binafsha lazer kichikroq chuqurchalarni o‘qiy oladi, bu sig‘imni 25+ GB ga oshiradi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri eng katta mexanik zarbaga chidamlilikka ega?',
        options: ['USB Flash / SSD', 'Ichki HDD', 'CD disk', 'Magnit disketa'],
        answer: 0,
        explanation: 'SSD va USB Flash ichida aylanadigan disk yoki kallak bo‘lmagani uchun tebranishdan qo‘rqmaydi.',
      },
    ],
    teacherNotes: {
      method: 'Eski HDD, CD/DVD disk va SSD/SD kartani qo‘lda ushlab ko‘rish orqali solishtirish.',
      timing: 'Magnit 15 daq, Optik va Solid State 15 daq, Sort o‘yini va test 15 daq.',
      assessment: 'Uchala texnologiyani misollari bilan ajratish.',
      homework: 'CD, DVD va Blu-ray sig‘imlari farqi haqida qisqa eslatma yozing.',
    },
  },
  {
    id: 'g9-l09',
    grade: 9,
    no: 9,
    part: '1-chorak',
    title: 'Turli xotira qurilmalarining afzallik va kamchiliklari',
    kind: 'dars',
    hours: 1,
    tools: ['HDD vs SSD', 'Cloud Storage', 'Backup strategiyasi'],
    objectives: [
      'O‘quvchi HDD, SSD, USB Flash, Optik disk va Bulutli xotirani tezlik, narx/GB, chidamlilik va portativlik bo‘yicha baholaydi.',
      'O‘quvchi real hayotiy ssenariylar uchun eng maqbul xotira yechimini tanlay oladi.',
    ],
    intro:
      'Hamma vazifa uchun yagona "eng zo‘r" xotira yo‘q: SSD juda tez, lekin HDD arzonroq; Bulut hamma joydan ochiladi, ammo internet va obuna talab qiladi. Muhandis to‘g‘ri muvozanatni tanlay bilishi kerak.',
    sections: [
      {
        heading: 'SSD, HDD va Optik vositalar taqqoslanishi',
        body: 'SSD: juda tez (500–7000 MB/s), shovqinsiz, kam energiya sarflaydi, biroq 1 GB narxi HDD dan qimmatroq. HDD: 1 GB narxi eng arzon va ko‘p terabaytli arxivlar uchun qulay, lekin mexanik qismlari tufayli tushib ketsa ishdan chiqishi mumkin. Optik disklar (DVD-R/Blu-ray): uzoq yil o‘zgarmas arxiv saqlashga yaxshi, ammo qirilishga moyil va sekin.',
        example: 'Zamonaviy kompyuterlarda tizim (OS) va dasturlar uchun tezkor 512 GB SSD, filmlar va katta arxivlar uchun esa 2 TB HDD qo‘yiladi.',
        tip: 'USB Flash va SD kartalar kichik va qulay bo‘lgani bilan juda tez yo‘qoladi — shuning uchun ularda yagona nusxadagi muhim fayl saqlamang!',
      },
      {
        heading: 'Bulutli (Cloud) xotira va 3-2-1 zaxira qoidasi',
        body: 'Bulutli xotira (Google Drive, OneDrive, Dropbox) fayllarni istalgan qurilmadan ochish va hamkorlik qilish imkonini beradi. Kamchiligi — internetga bog‘liqlik, maxfiylik xavotiri va doimiy to‘lov. Xavfsiz saqlashning oltin qoidasi "3-2-1": muhim fayldan 3 nusxa, 2 xil tashuvchida (masalan, SSD + tashqi HDD) va 1 nusxasi uydan tashqarida (Bulutda) saqlanishi lozim.',
        example: 'Noutbuk o‘g‘irlansa ham, "3-2-1" qoidasiga amal qilgan dasturchining loyihasi bulutda saqlanib qoladi.',
      },
    ],
    keyTerms: [
      { term: 'Narx / Gigabayt nisbati', definition: 'Har bir gigabayt xotira hajmiga to‘g‘ri keladigan xarajat ko‘rsatkichi.' },
      { term: 'Ma’lumot uzatish tezligi', definition: 'Bir soniyada o‘qiladigan yoki yoziladigan megabaytlar miqdori (MB/s).' },
      { term: 'Bulutli xotira (Cloud)', definition: 'Fayllarni Internet orqali uzoqdagi serverlarda saqlash xizmati.' },
      { term: '3-2-1 Backup qoidasi', definition: '3 nusxa, 2 xil media turi, 1 ta tashqi/bulut nusxa strategiyasi.' },
    ],
    steps: [
      '1. 5 xil saqlagichni (SSD, HDD, USB Flash, Blu-ray, Cloud) 4 mezon bo‘yicha 1–5 ball bilan baholang.',
      '2. Video-montajchi, sayohatchi fotograf va maktab arxivi uchun alohida tavsiya tuzing.',
      '3. Shaxsiy fayllar uchun "3-2-1" zaxira rejasini yozing.',
    ],
    practice: [
      {
        task: 'Nima uchun 4K video montaj qiluvchi operator loyihani HDD da emas, NVMe SSD da tahrirlaydi?',
        expected: 'Katta hajmli 4K kadrlar sekundiga yuzlab megabayt o‘qish tezligini talab qiladi, HDD da tasvir qotib qoladi.',
        difficulty: 'oson',
      },
      {
        task: 'Maktab bitiruvchilari albom va diplom nusxalarini 10 yilga saqlash uchun 2 xil tashuvchini tanlab asoslang.',
        expected: 'Tashqi HDD/SSD hamda Bulutli xotira (yoki Blu-ray arxiv diski) kombinatsiyasi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l09-g1',
        num: '01',
        title: 'Qaysi xotirani tanlaymiz?',
        topic: 'Xotira tanlash strategiyasi',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Vaziyatni o‘qing va eng to‘g‘ri xotira yechimini tanlang.',
          scenario: 'Maktab o‘quvchisi bitiruv loyihasini uyda boshlaydi, maktabda davom ettiradi va ustozi bilan real vaqtda izoh almashishi kerak. Kompyuter xotirasidan tashqari eng qulay vosita qaysi?',
          options: [
            {
              text: 'Bulutli xotira (Google Drive / OneDrive) + kompyuterda mahalliy zaxira',
              isCorrect: true,
              feedback: 'Ajoyib! Bulutli xotira istalgan joydan kirish va hamkorlikni beradi, mahalliy nusxa esa internet uzilganda qutqaradi.',
            },
            {
              text: 'Magnit lenta (LTO)',
              isCorrect: false,
              feedback: 'Magnit lenta maxsus server qurilmasini talab qiladi va kundalik hamkorlikka yaramaydi.',
            },
            {
              text: 'Faqat bitta arzon USB Flash',
              isCorrect: false,
              feedback: 'USB tez yo‘qolishi yoki virus tushishi mumkin, shuningdek real vaqtda ustoz bilan hamkorlik qilib bo‘lmaydi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '1 terabayt (TB) ma’lumot saqlash uchun qaysi qurilma odatda eng arzon tushadi?',
        options: ['Ichki yoki tashqi HDD', 'Yuqori tezlikdagi NVMe SSD', 'SDXC Express karta', 'RAM moduli'],
        answer: 0,
        explanation: 'HDD ning har 1 GB ga to‘g‘ri keladigan narxi SSD va flesh xotiralardan ancha past.',
      },
      {
        prompt: 'Zaxira nusxalashdagi "3-2-1" qoidasidagi "1" nimani bildiradi?',
        options: ['Kamida 1 ta nusxa uydan/ofisdan tashqarida (masalan, bulutda) bo‘lishini', 'Faqat 1 ta parol qo‘yishni', 'Haftada 1 marta o‘chirishni', '1 ta USB ishlatishni'],
        answer: 0,
        explanation: 'Yong‘in yoki o‘g‘irlik yuz bersa ham masofaviy (off-site / cloud) nusxa saqlanib qoladi.',
      },
      {
        prompt: 'Bulutli xotiradan foydalanishning asosiy cheklovi nima?',
        options: ['Faqat Windowsda ishlashi', 'Internetga ulanish zarurati va ma’lumot maxfiyligi', 'Matn saqlay olmasligi', 'Fayl hajmi 1 MB dan oshmasligi'],
        answer: 1,
        explanation: 'Internetsiz onlayn faylga kirib bo‘lmaydi, shuningdek server ishonchliligi va 2FA muhim.',
      },
      {
        prompt: 'Noutbuk ko‘tarib yurilganda tushib ketsa, qaysi disk ma’lumot yo‘qotish xavfi ko‘proq?',
        options: ['HDD (mexanik plastinali)', 'SSD', 'SD karta', 'ROM'],
        answer: 0,
        explanation: 'HDD ning o‘qish kallagi aylanayotgan diskka urilib, sirtini tirnab yuborishi mumkin.',
      },
      {
        prompt: 'Operatsion tizimning tez yuklanishi uchun qaysi xotiraga o‘rnatish tavsiya etiladi?',
        options: ['SSD', 'DVD-RW', 'HDD 5400 RPM', 'Magnit lenta'],
        answer: 0,
        explanation: 'SSD tasodifiy o‘qish tezligi bo‘yicha HDD dan o‘nlab marta tez.',
      },
    ],
    teacherNotes: {
      method: 'Debat usuli: "Bulutli xotira USB fleshkani butunlay almashtiradimi?".',
      timing: 'Taqqoslash jadvali 20 daq, 3-2-1 qoidasi 15 daq, Case study va test 10 daq.',
      assessment: 'Har bir saqlagichning kamida 2 afzallik va 2 kamchiligini aytish.',
      homework: 'O‘z telefoningiz va kompyuteringizdagi muhim fayllar uchun 3-2-1 zaxira rejasini tuzing.',
    },
  },
];
