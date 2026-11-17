import type { Lesson } from './types';

export const GRADE_10_Q2A: Lesson[] = [
  {
    id: 'g10-l19',
    grade: 10,
    no: 19,
    part: '2-chorak',
    title: 'Tarmoq kompyuterlari. Lokal hududiy (Local area networks) va global hududiy tarmoq (Wide area networks).',
    kind: 'dars',
    hours: 1,
    tools: ['LAN vs WAN', 'WLAN', 'NetBuilder', 'Switch / Router'],
    objectives: [
      'O‘quvchi Lokal hududiy tarmoq (LAN), Simsiz LAN (WLAN) va Global hududiy tarmoq (WAN) ni geografik qamrov, egalik huquqi, tezlik va xavfsizlik mezonlari bo‘yicha farqlaydi.',
      'O‘quvchi tarmoqning umumiy resurslardan foydalanishdagi afzalliklari va kamchiliklarini tahlil qiladi.',
    ],
    intro:
      'Maktabingiz binosidagi 30 ta kompyuterni birlashtiruvchi tarmoq — LAN, Toshkent va Londondagi filiallarni bog‘lovchi tarmoq esa WAN dir! Keling, ikkala tarmoqning texnik farqini va qanday qurilmalar ularni bog‘lashini ko‘ramiz.',
    sections: [
      {
        heading: 'LAN, WLAN va WAN tarmoqlari',
        body: '**LAN (Local Area Network)**: bitta bino yoki kampus kabi kichik geografik hududni qoplaydi; odatda tashkilotning o‘ziga tegishli (xususiy kabellar va Switch lar); uzatish tezligi juda yuqori (1–10 Gbps) va xatolar kam. **WLAN**: kabelsiz (Wi-Fi Access Point orqali) LAN. **WAN (Wide Area Network)**: shaharlar, davlatlar va qitʼalararo katta masofalarni bog‘laydi (Internet — eng yirik WAN!). WAN da tashqi aloqa provayderlari (ISP) kabellari, optik tolalar va sunʼiy yo‘ldoshlar ijaraga olinadi; tezligi LAN dan pastroq va tashqi hujum xavfi yuqoriroq.',
        example: 'Maktab ichidagi Switch ga ulangan sinf kompyuterlari LAN ni tashkil qiladi; maktab Router orqali viloyat taʼlim serveriga ulanishi esa WAN orqali amalga oshadi.',
        tip: 'LAN egasi — o‘zingiz/tashkilot; WAN da esa o‘rtadagi aloqa kanallari Telekom/ISP provayderlariga tegishli bo‘ladi!',
      },
      {
        heading: 'Kompyuter tarmog‘ining afzallik va kamchiliklari',
        body: 'Afzalliklari: qimmat printer va skanerlarni umumiy ishlatish, fayllarni markazdan tezkor almashish, dasturlarni bir joydan yangilash, markaziy zaxira nusxa (Backup). Kamchiliklari: o‘rnatish va administrator xarajati, server ishdan chiqsa tarmoq to‘xtashi, virus/hujumlar tarmoq bo‘ylab tez tarqalishi mumkinligi.',
        example: '30 ta kompyuterga 30 ta alohida printer sotib olish o‘rniga tarmoqda bitta kuchli lazer printer ulanadi.',
      },
    ],
    keyTerms: [
      { term: 'LAN (Local Area Network)', definition: 'Bitta bino yoki kichik hudud ichidagi yuqori tezlikli xususiy kompyuter tarmog‘i.' },
      { term: 'WAN (Wide Area Network)', definition: 'Katta geografik hududlarni (shaharlar, davlatlar) provayder kanallari orqali bog‘lovchi tarmoq.' },
      { term: 'WLAN', definition: 'LAN ning Wi-Fi radioto‘lqinlari orqali ulanadigan simsiz ko‘rinishi.' },
      { term: 'ISP (Internet Provayder)', definition: 'Foydalanuvchi LAN tarmog‘ini global WAN (Internet) ga ulab beruvchi tashkilot.' },
    ],
    steps: [
      '1. LAN va WAN ni 4 mezon (Masofa, Egalik, Tezlik, Xavfsizlik) bo‘yicha jadvalda taqqoslang.',
      '2. Quyidagi NetBuilder o‘yinida maktab LAN tarmog‘ini Switch va Router orqali WAN ga ulang!',
      '3. Tarmoqning 3 afzallik va 2 kamchiligini yozing.',
    ],
    practice: [
      {
        task: 'Nima uchun bir bino ichidagi LAN tarmog‘i odatda WAN tarmog‘idan tezroq va xavfsizroq bo‘ladi?',
        expected: 'LAN da kabellar qisqa va xususiy (tashqi trafik bilan bo‘lishilmaydi), shuning uchun yo‘qotish kam va begonalar kira olmaydi.',
        difficulty: 'oson',
      },
      {
        task: 'Bankning Toshkent, Samarqand va Buxorodagi filiallari o‘zaro bog‘langan tarmoq LAN mi yoki WAN? Nima uchun?',
        expected: 'WAN — chunki filiallar turli shaharlarda (katta geografik hududda) joylashgan va davlat/telekom aloqa liniyalaridan foydalanadi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l19-g1',
        num: '01',
        title: 'NetBuilder: LAN ni WAN ga ula',
        topic: 'LAN va WAN arxitekturasi',
        difficulty: 'O‘rta',
        engine: 'netbuilder',
        config: {
          prompt: 'Maktab kompyuter sinfidagi PC va Serverni Switch ga ulang, so‘ng LAN ni global WAN (Internet) ga chiqarish uchun Switch ni Router ga, Router ni esa Modem ga bog‘lang!',
          devices: [
            { id: 'pc', label: 'Sinf PK', type: 'pc' },
            { id: 'srv', label: 'Maktab Serveri', type: 'server' },
            { id: 'sw', label: 'LAN Switch', type: 'switch' },
            { id: 'rt', label: 'Router', type: 'router' },
            { id: 'md', label: 'WAN Modem', type: 'modem' },
          ],
          requiredLinks: [
            ['pc', 'sw'],
            ['srv', 'sw'],
            ['sw', 'rt'],
            ['rt', 'md'],
          ],
          hint: 'Sinf PK va Server → Switch → Router → Modem ketma-ketligida ulang.',
          explanation: 'Ichki LAN qurilmalari Switch atrofida yig‘iladi, tashqi WAN aloqasi esa Router va Modem orqali amalga oshadi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Bitta maktab yoki ofis binosi ichidagi kompyuterlarni bog‘lovchi tarmoq qanday ataladi?',
        options: ['LAN (Local Area Network)', 'WAN', 'Bluetooth PAN', 'GSM'],
        answer: 0,
        explanation: 'Kichik geografik hudud (bitta bino/kampus) dagi tarmoq LAN dir.',
      },
      {
        prompt: 'Dunyo miqyosidagi eng katta WAN (Wide Area Network) ga misol qaysi?',
        options: ['Internet', 'Maktab sinfidagi Switch', 'USB Flash', 'Bluetooth quloqchin'],
        answer: 0,
        explanation: 'Internet butun yer yuzidagi millionlab LAN tarmoqlarini bog‘lovchi global WAN dir.',
      },
      {
        prompt: 'WAN tarmog‘i LAN dan qaysi jihati bilan farq qiladi?',
        options: ['Katta geografik hududni egallaydi va odatda tashqi telekom/ISP aloqa kanallarini ijaraga oladi', 'Faqat 2 ta kompyuterdan iborat', 'Kabelsiz bo‘la olmaydi', 'Doim bepul'],
        answer: 0,
        explanation: 'Shaharlaaro va davlatlararo aloqa tashqi provayder liniyalarini talab qiladi.',
      },
      {
        prompt: 'Bitta bino ichida kompyuterlarni Wi-Fi (Access Point) orqali simsiz lokal tarmoqqa ulash nima deyiladi?',
        options: ['WLAN', 'WAN', 'ROM', 'NFC'],
        answer: 0,
        explanation: 'WLAN — Wireless Local Area Network.',
      },
      {
        prompt: 'Tarmoqda barcha kompyuterlarning bitta markaziy printer va fayl serverini bo‘lishib ishlatishining foydasi nimada?',
        options: ['Uskuna xarajatini tejash va fayllarni markazdan oson boshqarish', 'Viruslarni ko‘paytirish', 'Elektrni ikki baravar oshirish', 'Ishni sekinlashtirish'],
        answer: 0,
        explanation: 'Umumiy resurslar (printer, fayl, internet) dan foydalanish xarajatlarni keskin kamaytiradi.',
      },
    ],
    teacherNotes: {
      method: 'NetBuilder da LAN → Switch → Router → WAN bog‘lanishini amalda qurish.',
      timing: 'LAN/WLAN/WAN 20 daq, Afzallik/kamchilik 10 daq, NetBuilder va quiz 15 daq.',
      assessment: 'NetBuilder sxemasini to‘g‘ri bog‘lash va LAN/WAN farqini bilish.',
      homework: 'Maktab tarmog‘idagi LAN va tashqi WAN chegara nuqtalarini (Router/Modem) tasvirlab chizma tuzing.',
    },
  },
  {
    id: 'g10-l20',
    grade: 10,
    no: 20,
    part: '2-chorak',
    title: 'Kliyent-server va peer-to-peer tarmoqlari.',
    kind: 'dars',
    hours: 1,
    tools: ['Client-Server', 'Peer-to-Peer (P2P)', 'Tarmoq modellari'],
    objectives: [
      'O‘quvchi Kliyent-Server (Client-Server) va Teng huquqli (Peer-to-Peer / P2P) tarmoq arxitekturalarining ishlash tamoyilini tushuntiradi.',
      'O‘quvchi har ikki modelni xavfsizlik, markazlashgan zaxiralash, xarajat va nosozlikka chidamlilik bo‘yicha taqqoslab, vaziyatga mosini tanlaydi.',
    ],
    intro:
      'Tarmoqdagi kompyuterlar ikki xil munosabatda ishlashi mumkin: yo bitta kuchli "Boshliq" server barcha fayllar va huquqlarni boshqaradi (Client-Server), yo barcha kompyuterlar teng huquqli bo‘lib bir-biri bilan to‘g‘ridan-to‘g‘ri almashadi (Peer-to-Peer)!',
    sections: [
      {
        heading: 'Kliyent-Server (Client-Server) modeli',
        body: 'Ushbu modelda bitta yoki bir nechta maxsus kuchli **Server** kompyuterlari xizmat ko‘rsatadi (fayl saqlash, veb-sahifa berish, login-parollarni tekshirish, chop etish navbatini boshqarish), qolgan foydalanuvchi kompyuterlari (**Kliyentlar**) esa serverga so‘rov yuborib natija oladi. Afzalliklari: markaziy xavfsizlik va foydalanuvchi huquqlarini boshqarish, bitta joydan oson avtomatik zaxira nusxalash (Backup), minglab kompyuterlarda ham barqaror ishlash. Kamchiligi: qimmat server uskunalari va tarmoq administratori kerak; agar asosiy server ishdan chiqsa, barcha kliyentlar to‘xtab qoladi (Single point of failure).',
        example: 'Maktab elektron kundaligi, YouTube va bank ilovalari Kliyent-Server modelida ishlaydi: brauzeringiz Kliyent, ma’lumotlar bazasi joylashgan kompyuter esa Serverdir.',
        tip: 'Kliyent va Server har xil dasturiy rollardir: kuchli serverda xizmatlar markazlashadi!',
      },
      {
        heading: 'Peer-to-Peer (P2P — Teng huquqli tarmoq)',
        body: 'P2P tarmog‘ida markaziy boshqaruvchi server BO‘LMAYDI — barcha kompyuterlar (peers) teng huquqqa ega bo‘lib, har biri ham kliyent, ham server vazifasini bajaradi! Afzalliklari: qimmat server va mutaxassis shart emas, sozlash oson va arzon, bitta kompyuter o‘chsa ham qolganlari ishlayveradi. Kamchiliklari: xavfsizlik zaif (har bir PK o‘z faylini himoyalashi kerak), umumiy zaxira nusxa yo‘q, 10–15 tadan ko‘p kompyuterda tarmoq sekinlashib tartibsiz bo‘lib qoladi.',
        example: 'Uydagi 3 ta noutbuk bir-biriga printer ulab fayl almashishi yoki BitTorrent orqali fayl yuklash P2P modeliga misol.',
      },
    ],
    keyTerms: [
      { term: 'Client-Server', definition: 'Markaziy server resurslarni va xavfsizlikni boshqarib, kliyentlar so‘roviga javob beradigan arxitektura.' },
      { term: 'Peer-to-Peer (P2P)', definition: 'Markaziy serversiz, barcha kompyuterlar teng huquqda bevosita bog‘lanadigan tarmoq.' },
      { term: 'Single point of failure', definition: 'Markaziy server ishdan chiqqanda butun tizimning to‘xtab qolish xavfi.' },
      { term: 'Markaziy Backup', definition: 'Kliyent-Server modelida barcha foydalanuvchi fayllarini serverda avtomatik zaxiralash.' },
    ],
    steps: [
      '1. Client-Server va P2P ni 5 mezon (Server narxi, Xavfsizlik, Backup, Masshtab, Nosozlik taʼsiri) bo‘yicha taqqoslang.',
      '2. Kichik 4 kishilik uy ofisi va 500 o‘quvchili maktab uchun mos modelni tanlang.',
      '3. Sort o‘yinida xususiyatlarni to‘g‘ri toifalarga ajrating.',
    ],
    practice: [
      {
        task: '100 ta xodim ishlaydigan bank filiali uchun Peer-to-Peer tarmog‘i nima uchun yaroqsiz?',
        expected: 'P2P da markaziy xavfsizlik, yagona parol nazorati va markaziy zaxira nusxa yo‘q; 100 ta kompyuterni boshqarish imkonsiz va xavfli bo‘ladi.',
        difficulty: 'oson',
      },
      {
        task: 'Uydagi 3 ta kompyuter o‘rtasida rasm va printer almashish uchun qaysi model arzon va qulayroq? Asoslang.',
        expected: 'Peer-to-Peer (P2P): alohida qimmat server sotib olish shart emas, sozlash oson va kichik sonda tez ishlaydi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l20-g1',
        num: '01',
        title: 'Client-Server vs Peer-to-Peer',
        topic: 'Tarmoq arxitekturalari',
        difficulty: 'O‘rta',
        engine: 'sort',
        config: {
          prompt: 'Tarmoq xususiyatlarini mos modelga ajrating: Client-Server yoki Peer-to-Peer (P2P).',
          categories: ['Client-Server', 'Peer-to-Peer (P2P)'],
          items: [
            { text: 'Markazlashtirilgan xavfsizlik, login va foydalanuvchi huquqlari', category: 'Client-Server' },
            { text: 'Barcha fayllardan bitta joyda avtomatik Backup olish oson', category: 'Client-Server' },
            { text: 'Alohida server va tarmoq administratori talab qilinmaydi (arzon)', category: 'Peer-to-Peer (P2P)' },
            { text: 'Bitta kompyuter o‘chsa ham boshqa tugunlar o‘zaro ishlayveradi', category: 'Peer-to-Peer (P2P)' },
            { text: 'Asosiy server ishdan chiqsa barcha foydalanuvchilar xizmatdan uziladi', category: 'Client-Server' },
            { text: 'Odatda 10 tagacha kompyuterli kichik uy/ofislar uchun mos', category: 'Peer-to-Peer (P2P)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Qaysi tarmoq modelida markaziy boshqaruvchi server bo‘lmaydi va hamma kompyuterlar teng huquqli hisoblanadi?',
        options: ['Peer-to-Peer (P2P)', 'Client-Server', 'Mainframe', 'Intranet'],
        answer: 0,
        explanation: 'P2P da har bir kompyuter (peer) ham so‘rov yuboradi, ham boshqalarga resurs beradi.',
      },
      {
        prompt: '500 nafar talaba ishlaydigan universitet tarmog‘ida foydalanuvchi parollari va zaxira nusxalarini boshqarish uchun qaysi model zarur?',
        options: ['Client-Server', 'Peer-to-Peer', 'Bluetooth', 'ADSL'],
        answer: 0,
        explanation: 'Katta tashkilotlarda xavfsizlik va markaziy boshqaruv uchun Client-Server shart.',
      },
      {
        prompt: 'Client-Server tarmog‘ining asosiy zaif tomoni (Single point of failure) nimada?',
        options: ['Markaziy server ishdan chiqsa barcha kliyentlar kerakli ma’lumotga kira olmay qoladi', 'Server juda arzon', 'Xavfsizlik umuman yo‘q', 'Faqat 2 kompyuter ulanadi'],
        answer: 0,
        explanation: 'Shuning uchun muhim tizimlarda zaxira (failover) serverlar qo‘yiladi.',
      },
      {
        prompt: 'Peer-to-Peer tarmog‘ida ma’lumotlarni zaxiralash (Backup) nima uchun qiyin?',
        options: ['Ma’lumotlar markaziy serverda emas, turli kompyuterlar bo‘ylab tarqalib saqlanadi', 'P2P da fayl saqlab bo‘lmaydi', 'SSD ishlamaydi', 'Tarmoq faqat kechasi ishlaydi'],
        answer: 0,
        explanation: 'Har bir kompyuterni alohida-alohida zaxiralashga to‘g‘ri keladi.',
      },
      {
        prompt: 'Kliyent-Server modelida brauzer orqali veb-sayt ochayotgan sizning kompyuteringiz qaysi rolni bajaradi?',
        options: ['Kliyent (Client)', 'Server', 'Modem', 'Hub'],
        answer: 0,
        explanation: 'So‘rov yuboruvchi va xizmat oluvchi qurilma Kliyent deb ataladi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfdagi 30 ta kompyuter (Client-Server) va uydagi 3 ta noutbuk (P2P) misollarini taqqoslash.',
      timing: 'Client-Server 15 daq, P2P 15 daq, Sort va quiz 15 daq.',
      assessment: 'Har ikki modelning 3 afzallik va 2 kamchiligini asoslash.',
      homework: 'Maktabingiz informatika sinfida qaysi tarmoq modeli qo‘llanganini aniqlab, sababini yozing.',
    },
  },
  {
    id: 'g10-l21',
    grade: 10,
    no: 21,
    part: '2-chorak',
    title: 'Virtual shaxsiy tarmoq (VPN)',
    kind: 'dars',
    hours: 1,
    tools: ['VPN Tunneling', 'Shifrlash', 'Masofaviy ofis'],
    objectives: [
      'O‘quvchi Virtual shaxsiy tarmoq (VPN — Virtual Private Network) nima ekanini va u umumiy Internet ustidan qanday qilib shifrlangan himoyalangan tunnel yaratishini tushuntiradi.',
      'O‘quvchi VPN ning korporativ masofaviy ish, ochiq Wi-Fi himoyasi hamda tezlik/ishonchlilikka taʼsiri nuqtai nazaridan afzallik va cheklovlarini baholaydi.',
    ],
    intro:
      'Xodim uydan yoki mehmonxonaning ochiq Wi-Fi tarmog‘idan turib kompaniyaning maxfiy ichki serveriga ulanishi kerak. Umumiy Internet xavfli! Yechim — **VPN (Virtual Private Network)** — Internet ichida shifrlangan maxfiy "yerosti tunneli" qurishdir.',
    sections: [
      {
        heading: 'VPN qanday ishlaydi? (Tunneling va Shifrlash)',
        body: 'Oddiy ulanishda Internet paketlaringiz provayder va Wi-Fi tarmog‘i orqali ochiq (yoki faqat domen ko‘rinadigan holda) o‘tadi. VPN yoqilganda esa qurilmangizdagi VPN-mijoz barcha trafikni qalin shifrlaydi va himoyalangan "tunnel" orqali tashkilotning VPN-serveriga uzatadi. Natijada ochiq Wi-Fi egasi yoki yo‘ldagi tinglovchilar ma’lumotni o‘qiy olmaydi, xodim esa xuddi ofis LAN tarmog‘ining ichida o‘tirgandek ichki fayl va bazalarga kira oladi!',
        example: 'Safardagi shifokor yoki bank xodimi kompaniya ichki bazasiga kirish uchun albatta korporativ VPN ga ulanadi.',
        tip: 'Bepul shubhali VPN ilovalardan ehtiyot bo‘ling: ishonchsiz VPN provayderining o‘zi trafikingizni kuzatishi yoki reklama qo‘shishi mumkin!',
      },
      {
        heading: 'VPN ning afzalliklari va cheklovlari',
        body: 'Afzalliklari: 1) Umumiy Wi-Fi tarmoqlarida trafikni shifrlab himoyalaydi; 2) Masofaviy xodimlarni tashkilot Intranetiga xavfsiz ulaydi; 3) Tashkilot uchun qimmat xususiy xalqaro kabel yotqizishdan arzonroq (mavjud Internet ustida ishlaydi). Cheklovlari: 1) Shifrlash va qo‘shimcha server orqali aylanish Internet tezligini biroz pasaytirishi va kechikishni (ping) oshirishi mumkin; 2) VPN serveri uzilsa aloqa to‘xtaydi.',
        example: 'Masofadan ishlovchi dasturchi VPN tunneli orqali ofis serveridagi yopiq kod bazasiga xavfsiz ulanadi.',
      },
    ],
    keyTerms: [
      { term: 'VPN', definition: 'Umumiy Internet infratuzilmasi ustida shifrlangan yopiq xususiy tarmoq yaratuvchi texnologiya.' },
      { term: 'Tunneling', definition: 'Ma’lumot paketlarini himoyalangan shifrlangan qobiq ichiga o‘rab uzatish mexanizmi.' },
      { term: 'IP Masking', definition: 'Foydalanuvchining haqiqiy IP-manzilini yashirib, VPN server IP sini ko‘rsatish.' },
      { term: 'Korporativ Intranet kirishi', definition: 'Masofaviy xodimning ofis tashqarisidan ichki kompaniya tizimlariga xavfsiz ulanishi.' },
    ],
    steps: [
      '1. Qurilma → Shifrlangan Tunnel → VPN Server → Korporativ Server zanjirini chizing.',
      '2. Ochiq Wi-Fi da VPN siz va VPN bilan trafik holatini taqqoslang.',
      '3. VPN ning 3 ta afzalligi va 2 ta cheklovini yozing.',
    ],
    practice: [
      {
        task: 'Nima uchun kompaniya xodimlariga aeroportdagi bepul Wi-Fi dan ofis serveriga to‘g‘ridan-to‘g‘ri emas, faqat VPN orqali kirish buyuriladi?',
        expected: 'Ochiq Wi-Fi da begonalar trafikni tutib olishi (sniffing) mumkin; VPN esa barcha ma’lumotlarni shifrlangan tunnel ichida xavfsiz uzatadi.',
        difficulty: 'oson',
      },
      {
        task: 'VPN yoqilganda Internet tezligi nima uchun biroz kamayishi mumkin? 2 texnik sabab ayting.',
        expected: '1) Har bir paketni shifrlash va deshifrlash protsessor/vaqt sarflaydi; 2) Trafik to‘g‘ridan-to‘g‘ri emas, qo‘shimcha VPN serveri orqali uzoqroq yo‘l bosadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l21-g1',
        num: '01',
        title: 'VPN ishlashi va xavfsizligi',
        topic: 'Virtual shaxsiy tarmoq',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'VPN texnologiyasi haqidagi fikrlarni baholang.',
          statements: [
            {
              text: 'VPN umumiy Internet ustidan shifrlangan himoyalangan tunnel yaratib, masofaviy xodimni ofis tarmog‘iga ulaydi.',
              isTrue: true,
              explanation: 'To‘g‘ri! VPN ning asosiy maqsadi umumiy tarmoq ustidan xavfsiz xususiy aloqa yaratishdir.',
            },
            {
              text: 'VPN dan foydalanganda ma’lumotlarni shifrlash tufayli internet tezligi odatda biroz pasayishi mumkin.',
              isTrue: true,
              explanation: 'To‘g‘ri! Shifrlash va qo‘shimcha tugun orqali o‘tish biroz kechikish qo‘shadi.',
            },
            {
              text: 'VPN barcha kompyuter viruslari va zararli dasturlarni avtomatik davolaydigan antivirusdir.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! VPN tarmoq trafigini shifrlaydi, u Antivirus o‘rnini bosmaydi.',
            },
            {
              text: 'VPN shaxsiy fizik kabel yotqizishga qaraganda uzoqdagi ofislarni bog‘lashda ancha arzon tushadi.',
              isTrue: true,
              explanation: 'To‘g‘ri! U mavjud global Internet liniyalaridan xavfsiz foydalanadi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'VPN (Virtual Private Network) ning asosiy vazifasi nimadan iborat?',
        options: ['Umumiy Internet orqali shifrlangan va xavfsiz xususiy tarmoq tunneli yaratish', 'Monitorni tozalash', 'Fayllarni ZIP qilish', 'Hard diskni formatlash'],
        answer: 0,
        explanation: 'VPN trafikni shifrlab, ochiq tarmoqda ma’lumot sizib chiqishining oldini oladi.',
      },
      {
        prompt: 'Xodim uydan turib kompaniyaning faqat ichki tarmog‘ida ochiladigan tizimiga xavfsiz ulanishda nimadan foydalanadi?',
        options: ['Korporativ VPN', 'Bluetooth', 'Ochiq HTTP', 'OCR'],
        answer: 0,
        explanation: 'Korporativ VPN masofaviy qurilmani xavfsiz ravishda tashkilot ichki tarmog‘ining bir qismiga aylantiradi.',
      },
      {
        prompt: 'VPN yoqilganda paketlarni himoyalash uchun qo‘llaniladigan ikkita asosiy mexanizm qaysilar?',
        options: ['Shifrlash (Encryption) va Tunneling', 'Compression va Crop', 'Merge va Split', 'Sort va Filter'],
        answer: 0,
        explanation: 'Tunneling paketlarni kapsulalaydi, shifrlash esa ularni o‘qib bo‘lmas qiladi.',
      },
      {
        prompt: 'Ishonchsiz bepul VPN ilovalaridan foydalanishning xavfi nimada bo‘lishi mumkin?',
        options: ['VPN egasining o‘zi foydalanuvchi trafikini yozib olishi yoki reklama/malware qo‘shishi', 'Kompyuter og‘irlashishi', 'Ekran kichrayishi', 'Klaviatura o‘chishi'],
        answer: 0,
        explanation: 'Barcha trafik VPN serveridan o‘tgani uchun faqat ishonchli va tekshirilgan provayderdan foydalanish shart.',
      },
      {
        prompt: 'VPN qaysi tahdiddan HIMOYA QILA OLMAYDI?',
        options: ['Foydalanuvchi o‘zi USB fleshkadan Troyan virusi o‘rnatishidan', 'Ochiq Wi-Fi da trafikni tinglashdan', 'Haqiqiy IP manzilni ko‘rishdan', 'Shifrlanmagan paket o‘g‘irlashdan'],
        answer: 0,
        explanation: 'Mahalliy fayldagi virusni VPN emas, Antivirus tekshirishi lozim.',
      },
    ],
    teacherNotes: {
      method: '"Shaffof shisha quvur (oddiy Internet) vs Po‘lat zirhli tunnel (VPN)" analogiyasi bilan tushuntirish.',
      timing: 'VPN & Tunneling 20 daq, Afzallik/cheklov 15 daq, TrueFalse va quiz 10 daq.',
      assessment: 'VPN nima uchun masofaviy ishda shartligini va antivirusdan farqini bilish.',
      homework: 'Korporativ VPN ning kompaniya va xodim uchun 3 ta foydasini daftariga yozing.',
    },
  },
  {
    id: 'g10-l22',
    grade: 10,
    no: 22,
    part: '2-chorak',
    title: 'Intranet va ekstranet. Internet va uning xususiyatlari',
    kind: 'dars',
    hours: 1,
    tools: ['Internet', 'Intranet', 'Extranet', 'WWW vs Internet'],
    objectives: [
      'O‘quvchi Internet, Intranet va Ekstranet (Extranet) tarmoqlarini kirish huquqi, foydalanuvchilar doirasi, xavfsizlik va maqsad bo‘yicha aniq farqlaydi.',
      'O‘quvchi Internet va WWW (World Wide Web) o‘rtasidagi texnik farqni (infratuzilma vs xizmat) izohlaydi.',
    ],
    intro:
      'Ko‘pchilik "Internet" bilan "World Wide Web (WWW)" ni bitta narsa deb o‘ylaydi! Aslida Internet — global tarmoq infratuzilmasi, WWW esa undagi xizmatlardan biri. Shuningdek, tashkilotlar hamma uchun Internet, faqat xodimlarga **Intranet**, hamkorlarga esa **Extranet** ochadilar.',
    sections: [
      {
        heading: 'Internet, Intranet va Extranet taqqoslanishi',
        body: '1) **Internet** (Global ochiq tarmoq): dunyodagi hamma kirishi mumkin; veb-saytlar, email, video aloqa; nazorat qiluvchi yagona egasi yo‘q; ma’lumot ishonchliligi turlicha. 2) **Intranet** (Ichki yopiq tarmoq): faqat bitta tashkilot xodimlari/o‘quvchilari uchun (login-parol va fayervol bilan himoyalangan); ichki buyruqlar, dars jadvali, HR ma’lumotlari saqlanadi — tez va ishonchli. 3) **Extranet**: Intranetning tashqi ishonchli hamkorlar (yetkazib beruvchilar, mijozlar, ota-onalar) ga ruxsat berilgan cheklangan qismi!',
        example: 'Maktab o‘qituvchilari xonasidagi ichki hujjatlar tizimi — **Intranet**; ota-onalar login bilan kirib faqat o‘z farzandi bahosini ko‘radigan portal — **Extranet**; hammaga ochiq yangilik sayti esa **Internet**!',
        tip: 'Esda saqlang: `Intranet` = faqat xodimlar; `Extranet` = xodimlar + ruxsat berilgan tashqi hamkorlar/mijozlar; `Internet` = butun dunyo.',
      },
      {
        heading: 'Internet va WWW (World Wide Web) farqi',
        body: '**Internet** — kompyuterlar, routerlar, optik kabellar, sunʼiy yo‘ldoshlar va TCP/IP protokollaridan tashkil topgan fizik va mantiqiy GLOBAL TARMOQ. **WWW (World Wide Web)** — aynan Internet ustida HTTP/HTTPS protokoli orqali ishlaydigan gipermatnli veb-sahifalar tizimi! Internetda WWW dan tashqari Email (SMTP/IMAP), FTP fayl uzatish, VoIP qo‘ng‘iroqlar va onlayn o‘yin protokollari ham ishlaydi.',
        example: 'Internet — bu avtomobil yo‘llari va ko‘priklar tizimi; WWW esa o‘sha yo‘llarda yuradigan avtobus xizmatlaridan biri!',
      },
    ],
    keyTerms: [
      { term: 'Intranet', definition: 'Tashkilotning faqat o‘z xodimlari foydalanishi uchun yaratilgan yopiq ichki tarmog‘i.' },
      { term: 'Extranet', definition: 'Intranetning maxsus ruxsat (login/VPN) bilan tashqi hamkor va mijozlarga ochilgan qismi.' },
      { term: 'Internet', definition: 'TCP/IP asosida butun dunyo kompyuter va tarmoqlarini bog‘lovchi global tarmoq.' },
      { term: 'WWW (World Wide Web)', definition: 'Internet ustida brauzer va HTTP/HTTPS orqali ochiladigan veb-sahifalar to‘plami.' },
    ],
    steps: [
      '1. Uchta konsentrik doira chizing: markazda Intranet, o‘rtada Extranet, tashqarida Internet.',
      '2. Internet va WWW o‘rtasidagi farqni 2 ta misol bilan yozing.',
      '3. Quyidagi Sort o‘yinida har bir tizimni to‘g‘ri toifaga ajrating.',
    ],
    practice: [
      {
        task: 'Avtomobil zavodi ehtiyot qism yetkazib beruvchi tashqi firmalarga o‘z ombor qoldig‘ini login orqali ko‘rishga ruxsat berdi. Bu qaysi tarmoq turi?',
        expected: 'Extranet — chunki tashkilotning ichki tizimiga ruxsat berilgan tashqi biznes hamkorlar kiritilmoqda.',
        difficulty: 'oson',
      },
      {
        task: '"Men elektron pochta (SMTP) yuboryapman, demak WWW dan foydalanyapman" degan fikr nega texnik jihatdan xato?',
        expected: 'Chunki Email (SMTP/IMAP) va WWW (HTTP/HTTPS) — bu Internet infratuzilmasi ustida ishlaydigan ikkita alohida xizmatdir.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l22-g1',
        num: '01',
        title: 'Internet, Intranet va Extranet',
        topic: 'Tarmoq turlari',
        difficulty: 'Oson',
        engine: 'sort',
        config: {
          prompt: 'Tavsif va misollarni mos toifaga ajrating: Internet, Intranet yoki Extranet.',
          categories: ['Internet', 'Intranet', 'Extranet'],
          items: [
            { text: 'Barcha dunyo foydalanuvchilari uchun ochiq qidiruv tizimi va Wikipedia', category: 'Internet' },
            { text: 'Tashkilotning faqat ichki xodimlari kiradigan buyruqlar va HR portali', category: 'Intranet' },
            { text: 'Mijozlar yoki tashqi yetkazib beruvchilar login bilan kiradigan ombor portali', category: 'Extranet' },
            { text: 'Ota-onalar maxsus parol bilan farzandining kundaligini ko‘radigan maktab qismi', category: 'Extranet' },
            { text: 'Yagona egasi va boshqaruvchisi bo‘lmagan global tarmoq', category: 'Internet' },
            { text: 'Fayervol ortida faqat kompaniya binosi/VPN dan ochiladigan ichki wiki', category: 'Intranet' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Faqatgina bir tashkilotning o‘z xodimlari uchun yopiq bo‘lgan ichki veb-tizimi nima deb ataladi?',
        options: ['Intranet', 'Internet', 'Extranet', 'WWW'],
        answer: 0,
        explanation: 'Intranet ("Intra" — ichki) faqat tashkilot aʼzolari uchundir.',
      },
      {
        prompt: 'Kompaniya o‘z Intranetining bir qismiga tashqi hamkorlar (yetkazib beruvchilar) ga parol bilan kirish huquqini bersa, bu nima bo‘ladi?',
        options: ['Extranet', 'Hub', 'Peer-to-Peer', 'LAN'],
        answer: 0,
        explanation: 'Extranet ("Extra" — tashqi) tanlangan tashqi hamkorlar bilan bog‘lanish uchun xizmat qiladi.',
      },
      {
        prompt: 'Internet va World Wide Web (WWW) munosabati haqida qaysi fikr to‘g‘ri?',
        options: ['Internet — global tarmoq infratuzilmasi; WWW esa unda ishlaydigan veb-sahifalar xizmati', 'WWW kabel, Internet esa sayt', 'Ikkalasi mutlaqo bir xil tushuncha', 'WWW internetsiz ishlaydi'],
        answer: 0,
        explanation: 'Internet — apparat va protokollar tarmog‘i; WWW esa HTTP/HTML ga asoslangan xizmatdir.',
      },
      {
        prompt: 'Intranetning Internetdan asosiy afzalligi nimada?',
        options: ['Yuqori xavfsizlik, keraksiz shovqinsiz ishonchli ichki axborot va tezlik', 'Butun dunyo o‘qiy olishi', 'Hech qanday fayervol kerak emasligi', 'Modem talab qilishi'],
        answer: 0,
        explanation: 'Intranetda begona odamlar kira olmaydi va axborot nazorat ostida bo‘ladi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri Internetda ishlaydigan, lekin WWW bo‘lmagan xizmatdir?',
        options: ['FTP fayl almashinuvi va SMTP elektron pochta', 'HTML sahifa', 'CSS stil', 'Brauzer tablari'],
        answer: 0,
        explanation: 'FTP, SMTP, VoIP va SSH Internet protokollari bo‘lib, WWW (HTTP) dan mustaqil ishlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Uchta halqa (Intranet ⊂ Extranet ⊂ Internet) diagrammasini chizib, maktab portali misolida tushuntirish.',
      timing: 'Intranet/Extranet/Internet 20 daq, Internet vs WWW 15 daq, Sort va quiz 10 daq.',
      assessment: 'Intranet va Extranet hamda Internet va WWW farqini aniq aytish.',
      homework: 'O‘zingiz bilgan bir bank yoki universitet tizimida Internet, Intranet va Extranet qismlarini ajratib yozing.',
    },
  },
  {
    id: 'g10-l23',
    grade: 10,
    no: 23,
    part: '2-chorak',
    title: 'Internetda muloqot qilish. Mobil tarmoqlar',
    kind: 'dars',
    hours: 1,
    tools: ['Blog / Forum / Wiki / Podcast', '3G / 4G LTE / 5G', 'Uyali aloqa hujayralari'],
    objectives: [
      'O‘quvchi Internetdagi asosiy muloqot va hamkorlik vositalarini — Elektron pochta, Blog, Mikroblog, Forum, Wiki va Podkast/VoIP ni farqlaydi.',
      'O‘quvchi Mobil tarmoqlar (2G, 3G, 4G, 5G) ning hujayraviy (cellular) tuzilmasi va avlodlar bo‘yicha tezlik/imkoniyat o‘zgarishini tushuntiradi.',
    ],
    intro:
      'Internetdagi muloqot faqat chatdan iborat emas: kimdir Blog yuritadi, kimdir Forumda savol beradi, jamoalar esa Wikipedia kabi Wiki da hamkorlikda maqola yozadi. Bularning barchasini cho‘ntagimizda tutib turuvchi kuch esa — 4G/5G mobil tarmoqlaridir!',
    sections: [
      {
        heading: 'Internetda muloqot va kontent almashish turlari',
        body: '1) **Blog** (Web log): bir muallifning teskari xronologik tartibda yuritadigan maqolalari; 2) **Mikroblog**: juda qisqa postlar (Twitter/X, Telegram kanal); 3) **Forum**: mavzular bo‘yicha hamma savol-javob qiladigan ochiq munozara maydoni (odatda moderator nazorat qiladi); 4) **Wiki**: ko‘plab foydalanuvchilar birgalikda tahrirlab boyitadigan bilimlar bazasi (Wikipedia); 5) **VoIP (Voice over IP)**: Internet orqali ovozli/video qo‘ng‘iroqlar (Zoom, Telegram, WhatsApp — anʼanaviy telefon aloqasidan arzon).',
        example: 'Dasturchi muammoga duch kelsa, Forum (StackOverflow) dan javob topadi; jamoa ichki qo‘llanmani esa Wiki da yozadi.',
        tip: 'Wiki sahifalarini istalgan odam tahrirlay olishi sababli ulardagi ma’lumotni ilmiy manba sifatida boshqa manbalar bilan qayta tekshirish zarur.',
      },
      {
        heading: 'Mobil tarmoqlar (Cellular Networks: 3G, 4G, 5G)',
        body: 'Mobil aloqada hudud olti burchakli "hujayralar" (Cells) ga bo‘linadi va har birida tayanch stansiya (Base Station) turadi; telefon harakatlanganda signal avtomatik keyingi minoraga o‘tadi (Handover). Avlodlar: **2G** — raqamli ovoz va SMS; **3G** — mobil internet, videoqo‘ng‘iroq (~bir necha Mbps); **4G (LTE)** — HD/FullHD video oqimi va tezkor ilovalar (~100+ Mbps); **5G** — o‘ta yuqori tezlik (1–10 Gbps), millisoniyali kechikish (ultra-low latency), millionlab IoT sensorlari va avtonom avtomobillar uchun.',
        example: '5G da kechikish (latency) 1–5 ms ga tushgani uchun jarroh masofadan robot-jarrohni real vaqtda boshqara oladi!',
      },
    ],
    keyTerms: [
      { term: 'Blog vs Wiki vs Forum', definition: 'Blog — shaxsiy jurnal; Wiki — jamoaviy tahrirlanadigan bilim bazasi; Forum — savol-javob munozarasi.' },
      { term: 'VoIP', definition: 'Ovoz va videoni telefon liniyasi emas, Internet paketlari orqali uzatish texnologiyasi.' },
      { term: 'Hujayra (Cell) & Base Station', definition: 'Mobil aloqa qamrovini taʼminlovchi hudud bo‘lagi va uning markaziy antennasi.' },
      { term: '4G / 5G', definition: 'Yuqori tezlikli mobil internet avlodlari; 5G o‘ta past kechikish va IoT sig‘imini beradi.' },
    ],
    steps: [
      '1. Blog, Forum, Wiki va VoIP platformalarini maqsadi va mualliflik huquqi bo‘yicha taqqoslang.',
      '2. 2G → 3G → 4G → 5G evolyutsiyasini tezlik va qo‘llanilish bo‘yicha yozing.',
      '3. Match o‘yinida vositalarni vazifasi bilan bog‘lang.',
    ],
    practice: [
      {
        task: 'Sinfdagi 20 o‘quvchi bitta umumiy "Informatika atamalari lug‘ati" ni birgalikda yozib tahrirlamoqchi. Blog, Forum va Wiki dan qay biri eng mos?',
        expected: 'Wiki — chunki u bir nechta foydalanuvchiga bitta sahifani birgalikda yaratish va tahrirlash imkonini beradi.',
        difficulty: 'oson',
      },
      {
        task: 'Avtonom (haydovchisiz) avtomobillar va masofaviy jarrohlik uchun nima sababdan 3G/4G emas, aynan 5G tarmog‘i muhim?',
        expected: '5G da ultra-past kechikish (1–5 ms latency) va juda katta o‘tkazuvchanlik mavjud, bu real vaqtda zudlik bilan tormozlash/qaror chiqarishda hal qiluvchi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l23-g1',
        num: '01',
        title: 'Internet muloqoti va Mobil avlodlar',
        topic: 'Kommunikatsiya va Mobil tarmoq',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'Muloqot vositasi va mobil texnologiyani uning taʼrifi bilan juftlang.',
          pairs: [
            { left: 'Wiki', right: 'Ko‘plab foydalanuvchilar hamkorlikda tahrirlaydigan ochiq ensiklopediya/baza' },
            { left: 'Forum', right: 'Mavzular bo‘yicha foydalanuvchilar savol-javob va bahs yuritadigan maydon' },
            { left: 'VoIP', right: 'Internet orqali arzon ovozli va video qo‘ng‘iroqlar texnologiyasi' },
            { left: '5G tarmog‘i', right: 'Gigabit tezlik va 1 ms kechikishli IoT/avtonom tizimlar aloqasi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Turli foydalanuvchilar bitta maqolani birgalikda yozishi, qo‘shishi va tahrirlashi mumkin bo‘lgan veb-tizim qaysi?',
        options: ['Wiki (masalan, Wikipedia)', 'Shaxsiy Blog', 'Static PDF', 'VoIP'],
        answer: 0,
        explanation: 'Wiki jamoaviy tahrirlash va hamkorlikda kontent yaratish uchun mo‘ljallangan.',
      },
      {
        prompt: 'Internet orqali anʼanaviy telefon liniyasisiz ovozli qo‘ng‘iroqlarni amalga oshirish texnologiyasi nima?',
        options: ['VoIP (Voice over IP)', 'SMS', 'OCR', 'HDMI'],
        answer: 0,
        explanation: 'VoIP ovozni raqamli IP-paketlarga bo‘lib Internet orqali uzatadi.',
      },
      {
        prompt: '5G mobil tarmog‘ining 4G dan eng muhim texnik ustunliklaridan biri qaysi?',
        options: ['O‘ta yuqori tezlik va minimal kechikish (ultra-low latency)', 'Faqat SMS yuborishi', 'Minoralar kerak emasligi', 'Telefon quvvatisiz ishlashi'],
        answer: 0,
        explanation: '5G millisoniya darajasidagi past kechikish va gigabitli tezlikni taʼminlaydi.',
      },
      {
        prompt: 'Mobil aloqa tarmoqlarida geografik hudud tayanch stansiyalar atrofida nimalarga bo‘linadi?',
        options: ['Hujayralarga (Cells)', 'Piksellarga', 'Kataklarga (Excel)', 'Sekundlarga'],
        answer: 0,
        explanation: 'Shuning uchun u Cellular (Hujayraviy/Uyali) aloqa deb ataladi.',
      },
      {
        prompt: 'Forumlarda nomaqbul xabarlar va spamlarni nazorat qilib tartib saqlovchi shaxs kim?',
        options: ['Moderator', 'Plotter', 'Compiler', 'Drayver'],
        answer: 0,
        explanation: 'Moderator forum qoidalariga rioya qilinishini tekshiradi va keraksiz postlarni o‘chiradi.',
      },
    ],
    teacherNotes: {
      method: 'Blog, Forum va Wiki ning hayotiy misollarini (Medium, StackOverflow, Wikipedia) ko‘rsatish.',
      timing: 'Internet muloqoti 20 daq, Mobil tarmoqlar (Cells/3G-5G) 15 daq, Match va quiz 10 daq.',
      assessment: 'Blog/Forum/Wiki/VoIP hamda 4G/5G farqini aniq aytish.',
      homework: '3G, 4G va 5G avlodlarini tezlik, kechikish va qo‘llanilish sohasi bo‘yicha jadvalga soling.',
    },
  },
  {
    id: 'g10-l24',
    grade: 10,
    no: 24,
    part: '2-chorak',
    title: 'Video va veb konferensiya. Videokonferensiyaning jamiyatga taʼsiri',
    kind: 'dars',
    hours: 1,
    tools: ['Zoom / Google Meet / Teams', 'Web Conferencing', 'Ekran ulashish & Webinar'],
    objectives: [
      'O‘quvchi Video konferensiya (apparat va dasturiy tarkibi: veb-kamera, mikrofon, karnay/quloqchin, kodek, tezkor internet) va Veb konferensiya (Webinar, ekran ulashish, chat, whiteboard) farqini tushuntiradi.',
      'O‘quvchi videokonferensiyaning biznes, taʼlim, ekologiya (transport chiqindilari kamayishi) va jamiyat hayotiga ijobiy hamda salbiy taʼsirlarini baholaydi.',
    ],
    intro:
      'Ilgari xalqaro shartnoma imzolash uchun samolyotga chiqib 10 soat uchish kerak edi. Bugun esa bir tugma bilan 5 ta qitʼadagi hamkasblar ekran oldida ko‘rishib, bitta hujjat ustida birga ishlamoqda!',
    sections: [
      {
        heading: 'Video va Veb konferensiya (Uskunalar va Imkoniyatlar)',
        body: '**Video konferensiya** ikki yoki undan ko‘p joydagi ishtirokchilarning real vaqtda jonli audio va video orqali uchrashishidir; kerakli vositalar: HD veb-kamera, mikrofon (echo-cancellation bilan), karnay/quloqchin, keng polosali Internet va video-siqish dasturi (Codec). **Veb konferensiya (Webinar)** esa video ustiga hamkorlik vositalarini qo‘shadi: Ekran ulashish (Screen sharing), Virtual oq doska (Whiteboard), Fayl almashish, Matnli chat va Yozib olish (Recording).',
        example: 'O‘qituvchi veb-konferensiyada o‘z ekranini ulashib Excel formulasini ko‘rsatadi va chatda o‘quvchilar savollariga javob beradi.',
        tip: 'Videoqo‘ng‘iroqda aks-sado (Echo) chiqmasligi uchun quloqchin taqing va gapirmayotganda mikrofonni o‘chiring (Mute)!',
      },
      {
        heading: 'Videokonferensiyaning jamiyatga ijobiy va salbiy taʼsiri',
        body: 'Ijobiy taʼsirlar: 1) Sayohat va mehmonxona xarajatlarini hamda yo‘l vaqtini keskin tejaydi; 2) Ekologiya: kamroq samolyot va avtomobil qatnovi karbonat angidrid (CO2) chiqindisini kamaytiradi; 3) Taʼlim va tibbiyot: olis qishloq o‘quvchisi poytaxt professoridan dars eshitadi (telemeditsina/masofaviy taʼlim); 4) Moslashuvchan ish (nogironligi borlar va ota-onalar uydan ishlaydi). Salbiy taʼsirlar: 1) Vaqt mintaqalari (Time zones) farqi — Toshkentda kunduz bo‘lsa, AQShda yarim tun; 2) Internet uzilishi yoki tasvir qotishi; 3) Jonli yuzma-yuz ishonch va jamoaviy ruhning sustlashishi; 4) Ekran charchashi ("Zoom fatigue") va maxfiylik (xonalarga begona kirishi) xavfi.',
        example: 'Yirik korporatsiyalar haftalik xizmat safarlarini veb-konferensiyaga almashtirib, yiliga millionlab dollar va tonnalab yoqilg‘i tejamoqda.',
      },
    ],
    keyTerms: [
      { term: 'Videokonferensiya', definition: 'Turli hududlardagi odamlarning real vaqtda jonli video va audio orqali uchrashuvi.' },
      { term: 'Veb-konferensiya / Webinar', definition: 'Brauzer/ilova orqali ekran ulashish, virtual doska va chat bilan birga o‘tadigan onlayn seminar.' },
      { term: 'Codec (Video/Audio)', definition: 'Jonli tasvir va tovushni internetda tez uzatish uchun siquvchi va ochuvchi dastur.' },
      { term: 'Time zone muammosi', definition: 'Turli qitʼalardagi ishtirokchilar uchun bitta qulay soatni belgilash qiyinchiligi.' },
    ],
    steps: [
      '1. Videokonferensiya uchun zarur 5 ta apparat va dasturiy elementni sanang.',
      '2. Ekologiya, Iqtisod va Taʼlim bo‘yicha 4 ta ijobiy taʼsirni yozing.',
      '3. Vaqt mintaqalari, Kiberxavfsizlik va Aloqa sifati kabi 3 ta cheklovni baholang.',
    ],
    practice: [
      {
        task: 'Toshkent, Tokio va London filiallari rahbarlari videokonferensiya o‘tkazishda qanday amaliy muammoga duch keladilar?',
        expected: 'Vaqt mintaqalari (Time zones) farqi — bir shaharda ish vaqti bo‘lsa, boshqasida kechasi bo‘lishi mumkin.',
        difficulty: 'oson',
      },
      {
        task: 'Xalqaro kompaniya har oyda xodimlarni samolyotda uchirish o‘rniga videokonferensiyaga o‘tsa, 3 sohada qanday foyda ko‘radi?',
        expected: '1) Iqtisodiy: chipta/mehmonxona xarajati tejaladi; 2) Ekologik: CO2 chiqindisi kamayadi; 3) Vaqt: xodimlar yo‘lda kun yo‘qotmaydi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l24-g1',
        num: '01',
        title: 'Videokonferensiya taʼsirlari',
        topic: 'Video va veb konferensiya',
        difficulty: 'Oson',
        engine: 'sort',
        config: {
          prompt: 'Videokonferensiyaning jamiyatga taʼsirlarini 2 guruhga ajrating: Afzallik yoki Kamchilik/Xavf.',
          categories: ['Afzallik (Ijobiy taʼsir)', 'Kamchilik / Cheklov'],
          items: [
            { text: 'Sayohat xarajati va CO2 chiqindilarining kamayishi', category: 'Afzallik (Ijobiy taʼsir)' },
            { text: 'Nogironligi borlar va olis hududlar uchun teng taʼlim/ish imkoniyati', category: 'Afzallik (Ijobiy taʼsir)' },
            { text: 'Turli davlatlar orasida vaqt mintaqasi (Time zone) mos kelmasligi', category: 'Kamchilik / Cheklov' },
            { text: 'Kechikish (lag), internet uzilishi va jonli tana tilini yo‘qotish', category: 'Kamchilik / Cheklov' },
            { text: 'Ekran ulashish va virtual doska bilan tezkor hamkorlik', category: 'Afzallik (Ijobiy taʼsir)' },
            { text: 'Mahalliy qonuniy hujjatni darhol jismonan imzolab bo‘lmasligi', category: 'Kamchilik / Cheklov' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Veb-konferensiyada ma’ruzachi o‘z kompyuteridagi jadval yoki kodni tinglovchilarga jonli ko‘rsatishi funksiyasi nima?',
        options: ['Ekran ulashish (Screen Sharing)', 'Mail Merge', 'Defragmentatsiya', 'Check Digit'],
        answer: 0,
        explanation: 'Screen Sharing barcha qatnashchilarga taqdimotchi ekranini real vaqtda ko‘rsatadi.',
      },
      {
        prompt: 'Kompaniyalarning xizmat safarlari o‘rniga videokonferensiyadan foydalanishi atrof-muhitga qanday foyda keltiradi?',
        options: ['Samolyot va avtomobillar kamayishi hisobiga karbonat angidrid (CO2) chiqindisi pasayadi', 'Kabel ko‘payadi', 'Monitor qiziydi', 'Shrift kichrayadi'],
        answer: 0,
        explanation: 'Kamroq transport qatnovi ekologik izni (carbon footprint) kamaytiradi.',
      },
      {
        prompt: 'Jonli videoqo‘ng‘iroq paytida katta hajmli video oqimini internetdan o‘tkazish uchun siqib-ochuvchi texnologiya nima?',
        options: ['Codec (Coder-Decoder)', 'OMR', 'Plotter', 'MICR'],
        answer: 0,
        explanation: 'Video va audio kodeklar (masalan, H.264, VP9, Opus) oqim hajmini kichraytirib uzatadi.',
      },
      {
        prompt: 'Xalqaro videokonferensiyani rejalashtirishda eng ko‘p uchraydigan noqulaylik qaysi?',
        options: ['Ishtirokchilarning turli vaqt mintaqalarida (Time zones) joylashuvi', 'Sichqoncha ishlamasligi', 'Printer yo‘qligi', 'PDF ochilmasligi'],
        answer: 0,
        explanation: 'Turli qitʼalar orasidagi soat farqi umumiy qulay vaqt topishni qiyinlashtiradi.',
      },
      {
        prompt: 'Onlayn dars yoki konferensiyaga begona shaxslar kirib xalaqit bermasligi uchun nima qo‘llanadi?',
        options: ['Kutish xonasi (Waiting Room) va uchrashuv paroli', 'Mikrofonni sindirish', 'Ekranni o‘chirish', 'Wi-Fi parolini tarqatish'],
        answer: 0,
        explanation: 'Waiting Room va parol faqat ruxsat etilgan ishtirokchilarni kiritadi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda "Xalqaro uchrashuv: Toshkent – London – Tokio" vaqt mintaqasi va netiket mashqini o‘tkazish.',
      timing: 'Video vs Web conferencing 15 daq, Jamiyatga taʼsiri 15 daq, Sort va quiz 15 daq.',
      assessment: 'Videokonferensiya uskunalarini, ijobiy va salbiy taʼsirlarini aniq aytish.',
      homework: 'Onlayn dars/konferensiyada rioya qilinishi shart bo‘lgan 5 ta "Video-muloqot odobi" qoidasini yozing.',
    },
  },
  {
    id: 'g10-l25',
    grade: 10,
    no: 25,
    part: '2-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Bilim sinovi', 'Tarmoqlar va Kommunikatsiya'],
    objectives: [
      'O‘quvchi 19–24-darslar (LAN/WAN, Client-Server vs P2P, VPN, Internet/Intranet/Extranet, Blog/Forum/Wiki/5G va Video-veb konferensiya) bo‘yicha olgan bilimlarini tekshiradi.',
      'O‘quvchi tarmoq arxitekturalarini tanlash va nazorat testini mustaqil bajaradi.',
    ],
    intro:
      '2-chorakning birinchi nazorat ishi barcha tarmoq turlari (LAN, WLAN, WAN, VPN), modellar (Client-Server vs P2P), Intranet/Extranet/Internet hamda mobil aloqa va videokonferensiya mavzularini qamrab oladi.',
    sections: [
      {
        heading: 'Nazorat oldi asosiy nuqtalar',
        body: 'Takrorlang: LAN (bino ichida tez, xususiy) vs WAN (katta hudud, ISP); Client-Server (markaziy xavfsizlik/backup) vs P2P (arzon, teng huquqli); VPN (shifrlangan tunnel); Intranet (faqat xodimlar) vs Extranet (+tashqi hamkorlar) vs Internet (hamma); WWW ⊂ Internet; Blog/Forum/Wiki/VoIP; 5G ultra-low latency.',
        example: 'Krossvordda lotin bosh harflari bilan: `INTRANET`, `EXTRANET`, `CLIENT`, `VPN`, `WIKI` kabi atamalarni esda tuting.',
        tip: 'Har bir tarmoq turining foydalanuvchi doirasi va xavfsizlik darajasini ajrating.',
      },
    ],
    keyTerms: [
      { term: 'LAN & WAN', definition: 'Lokal bino tarmog‘i hamda shaharlararo/global provayder tarmog‘i.' },
      { term: 'Client-Server & P2P', definition: 'Markaziy server boshqaruvi hamda teng huquqli to‘g‘ridan-to‘g‘ri almashinuv.' },
      { term: 'Intranet & Extranet', definition: 'Ichki xodimlar tarmog‘i va tashqi hamkorlarga ochilgan qism.' },
      { term: 'VPN & VoIP', definition: 'Shifrlangan tunnel tarmog‘i va Internet orqali ovozli aloqa.' },
    ],
    steps: [
      '1. Krossvordda 19–24-darslarning tayanch atamalarini yeching.',
      '2. Qisqa taqqoslash topshiriqlarini bajaring.',
      '3. Yakuniy 5 ta nazorat testini yakunlang.',
    ],
    practice: [
      {
        task: 'Maktab elektron tizimida: o‘qituvchilar xonasi portali (A), ota-onalar parolli kabineti (B) va hamma ochadigan maktab sayti (C) — qaysilari Internet, Intranet, Extranet?',
        expected: 'A — Intranet, B — Extranet, C — Internet.',
        difficulty: 'oson',
      },
      {
        task: 'Nima uchun kompaniya uydagi xodimlariga ofis serveriga ulanishda VPN beradi va P2P o‘rniga Client-Server ishlatadi?',
        expected: 'VPN ochiq internetda trafikni shifrlab himoyalaydi; Client-Server esa barcha fayl, ruxsat va zaxira nusxalarni markazdan boshqaradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l25-g1',
        num: '01',
        title: 'Tarmoqlar bo‘yicha krossvord',
        topic: 'Tarmoq turlari va arxitektura',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '19–24-darslarga oid asosiy tarmoq atamalarini kiriting.',
          clues: [
            { id: 'c1', clue: 'Faqat tashkilot xodimlari kiradigan yopiq ichki tarmoq (8 harf)', answer: 'INTRANET' },
            { id: 'c2', clue: 'Tashqi hamkorlarga ham parol bilan ochiladigan tarmoq qismi (8 harf)', answer: 'EXTRANET' },
            { id: 'c3', clue: 'Umumiy Internet ustidan shifrlangan xususiy tunnel (3 harf)', answer: 'VPN' },
            { id: 'c4', clue: 'Internet orqali ovozli qo‘ng‘iroq texnologiyasi (4 harf)', answer: 'VOIP' },
          ],
          hint: 'Javoblar: INTRANET, EXTRANET, VPN, VOIP.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Qaysi tarmoq modeli kichik 5 kompyuterli uyda server sotib olmasdan arzon fayl almashish uchun eng qulay?',
        options: ['Peer-to-Peer (P2P)', 'Mainframe', 'WAN', 'Extranet'],
        answer: 0,
        explanation: 'P2P modelida qimmat markaziy server shart emas.',
      },
      {
        prompt: 'Internet va WWW haqidagi qaysi taʼrif to‘g‘ri?',
        options: ['WWW — Internet global tarmog‘i ustida HTTP/HTTPS orqali ishlaydigan veb-sahifalar xizmati', 'Internet va WWW mutlaqo bir xil', 'WWW simli aloqa kabelidir', 'Internet faqat bitta saytdan iborat'],
        answer: 0,
        explanation: 'Internet — infratuzilma, WWW — uning ichidagi veb xizmatidir.',
      },
      {
        prompt: 'Mehmonxonaning ochiq Wi-Fi tarmog‘idan ofis serveriga xavfsiz ulanish uchun xodim nimani yoqadi?',
        options: ['VPN', 'Adware', 'Hub', 'ROM'],
        answer: 0,
        explanation: 'VPN trafikni shifrlangan tunnel ichida uzatadi.',
      },
      {
        prompt: 'Ko‘plab foydalanuvchilar birgalikda tahrirlab boyitadigan onlayn bilimlar bazasi nima?',
        options: ['Wiki', 'Blog', 'Cookie', 'Barcode'],
        answer: 0,
        explanation: 'Wiki hamkorlikda tahrirlash imkonini beradi.',
      },
      {
        prompt: 'Masofadan robot-jarrohlik kabi real vaqtli tizimlar uchun 5G tarmog‘ining hal qiluvchi xususiyati qaysi?',
        options: ['O‘ta past kechikish (Ultra-low latency) va yuqori tezlik', 'Faqat 2G signali', 'Simli bo‘lishi', 'Server talab qilmasligi'],
        answer: 0,
        explanation: '1–5 ms kechikish darhol reaksiya berishni taʼminlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Krossvord va amaliy savollar bilan tarmoq mavzularini yakunlash.',
      timing: 'Kirish 5 daq, Nazorat ishi 35 daq, Tahlil 5 daq.',
      assessment: 'LAN/WAN, Client-Server/P2P, Intranet/Extranet/Internet farqini aniq bilish.',
      homework: 'Keyingi darsga "Ekspert tizimlar" (tibbiy tashxis qo‘yuvchi dasturlar) haqida o‘ylab keling.',
    },
  },
];
