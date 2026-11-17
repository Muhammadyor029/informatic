import type { Lesson } from './types';

export const GRADE_11_Q3A: Lesson[] = [
  {
    id: 'g11-l33',
    grade: 11,
    no: 33,
    part: '3-chorak',
    title: 'Ma’lumotlarni uzatishda polosa kengligi va bit tezligining ahamiyati. BitTorrent protokoli',
    kind: 'dars',
    hours: 1,
    tools: ['Tarmoq', 'BitTorrent / P2P'],
    objectives: [
      'O‘quvchi **polosa kengligi (Bandwidth)** va **bit tezligi (Bit Rate / Throughput)** tushunchalarini farqlaydi hamda fayl yuklash vaqtini (`Hajm_bit / Tezlik_bps`) aniq hisoblaydi.',
      'O‘quvchi **BitTorrent (P2P)** protokolining `Tracker`, `Seeder`, `Leecher`, `Swarm` va bo‘laklar (pieces) almashinuvi mexanizmini mijoz-server modeli bilan solishtiradi.',
    ],
    intro:
      'Nima uchun 4 GB HD film bir vaqtda minglab odamlar ko‘chirib olsa ham birorta markaziy server qulab tushmaydi? Buning siri — **Bandwidth (polosa kengligi)** hisob-kitoblari va **BitTorrent P2P** arxitekturasida!',
    sections: [
      {
        heading: 'Polosa kengligi (Bandwidth) va Bit tezligi (Bit Rate)',
        body: '• **Bandwidth (Polosa kengligi)**: aloqa kanalining 1 soniyada o‘tkaza oladigan *maksimal nazariy* maʼlumot sig‘imi (`Mbps`, `Gbps` — megabit/soniya). Katta quvur diametriga o‘xshaydi.\n• **Bit Rate / Throughput (Haqiqiy tezlik)**: maʼlum bir vaqtda kanaldan *amalda* o‘tayotgan bitlar soni (`bps`, `kbps`, `Mbps`). Tarmoq tirbandligi, signal shovqini va protokol sarlavhalari sababli haqiqiy tezlik odatda polosa kengligidan biroz past bo‘ladi.\n• **Muhim birlik qoidasi**: Fayl hajmi **Bayt** (`MB`, `GB`), internet tezligi esa **Bit** (`Mbps`) da o‘lchanadi! `1 Bayt = 8 bit`.\n  `Yuklash vaqti (s) = (Fayl hajmi MB × 8) / Tezlik (Mbps)`.',
        example: '100 MB (megabayt) faylni 16 Mbps tezlikdagi tarmoqda yuklash: (100 × 8) / 16 = 800 Mbit / 16 Mbps = 50 soniya!',
      },
      {
        heading: 'BitTorrent (Peer-to-Peer) protokoli qanday ishlaydi?',
        body: 'Oddiy HTTP yuklashda barcha mijozlar bitta serverdan tortadi (server yuklanishi ortib sekinlashadi). **BitTorrent** da esa fayl yuzlab kichik bo‘laklarga (`pieces`, masalan 256 KB–4 MB) bo‘linadi:\n• **Torrent fayl (.torrent) / Magnet link**: fayl nomi, hajmi, bo‘laklar xeshi (`SHA-1/SHA-256`) va Tracker manzilini saqlaydi.\n• **Tracker**: qaysi IP manzillarda (`Peers`) fayl bo‘laklari borligini ko‘rsatib turuvchi koordinatordir (o‘zi fayl saqlamaydi).\n• **Seeder**: faylning **100% to‘liq** nusxasiga ega va boshqalarga ulashayotgan (upload) foydalanuvchi.\n• **Leecher (Downloader)**: faylni hali to‘liq yuklab olmagan foydalanuvchi (lekin yuklab olgan qismlarini bir vaqtda boshqalarga tarqatadi!).\n• **Swarm**: bir xil torrent faylni almashayotgan barcha Seeder va Leecher lar to‘plami.',
        tip: 'Katta dastur distributivlari (masalan, Ubuntu Linux ISO) rasmiy ravishda BitTorrent orqali tarqatiladi — chunki yuklovchilar ko‘paygani sari tarqatish quvvati ham oshadi!',
      },
    ],
    keyTerms: [
      { term: 'Bandwidth (Polosa kengligi)', definition: 'Aloqa kanalining soniyasiga uzata oladigan maksimal nazariy maʼlumot hajmi (Mbps).' },
      { term: 'Bit Rate', definition: 'Aloqa kanali orqali haqiqatda soniyasiga uzatilayotgan bitlar miqdori.' },
      { term: 'Seeder', definition: 'BitTorrent tarmog‘ida faylning barcha bo‘laklariga ega bo‘lib, faqat tarqatuvchi tugun.' },
      { term: 'Tracker & Swarm', definition: 'Tracker — ishtirokchi tugunlarni bog‘lovchi server; Swarm — shu faylni almashayotgan barcha peer lar guruhi.' },
    ],
    steps: [
      '1. Megabayt (MB) va Megabit (Mbit) farqini `× 8` qoidasi bilan hisoblang.',
      '2. Yuqori polosa kengligi video-konferensiya (4K streaming) uchun nima uchun shart ekanini tushuning.',
      '3. Quyidagi tezlik kalkulyatori va BitTorrent moslashtirish mashqini bajaring.',
    ],
    practice: [
      {
        task: '80 Mbps internet tezligida 400 MB hajmli taqdimot faylini yuklab olish uchun minimal necha soniya ketadi?',
        expected: '400 MB × 8 = 3200 Mbit. 3200 Mbit / 80 Mbps = 40 soniya.',
        difficulty: 'oson',
      },
      {
        task: 'Mijoz-server (HTTP) yuklashda 1000 ta odam bir vaqtda yuklasa tezlik pasayadi, BitTorrent da esa baʼzan tezlashadi. Sababini tushuntiring.',
        expected: 'HTTP da barcha yuk bitta serverning chiqish polosa kengligiga tushadi; BitTorrent da har bir Leecher yuklab olgan bo‘laklarini boshqalarga tarqatib, umumiy tarmoq polosani kengaytiradi.',
        difficulty: 'orta',
      },
    ],
    games: [
      {
        id: 'g11-l33-g1',
        num: '01',
        title: 'Fayl yuklash vaqti kalkulyatori',
        topic: 'Bandwidth va Bit tezligi',
        difficulty: 'O‘rta',
        engine: 'calc',
        config: {
          prompt: 'Sizda 250 MB hajmli Linux ISO bo‘lagi bor. Tarmog‘ingizning barqaror o‘tkazuvchanligi 40 Mbps. Faylni yuklab olish uchun necha soniya vaqt ketadi?',
          unit: 'soniya',
          correctAnswer: 50,
          tolerance: 0.5,
          steps: [
            '1-qadam: Fayl hajmini bitlarga o‘tkazing: 250 MB × 8 = 2000 Mbit',
            '2-qadam: Vaqtni topish uchun hajmni tezlikka bo‘ling: 2000 Mbit / 40 Mbps',
            'Natija = 50 soniya',
          ],
          hint: 'Eslab qoling: 1 Bayt = 8 bit. Avval 250 ni 8 ga ko‘paytiring, so‘ng 40 ga bo‘ling.',
        },
      },
      {
        id: 'g11-l33-g2',
        num: '02',
        title: 'BitTorrent ekotizimi rollari',
        topic: 'P2P protokoli',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'BitTorrent protokolining asosiy atamalarini ularning vazifasi bilan moslang:',
          pairs: [
            { left: 'Seeder', right: 'Faylning 100% qismiga ega va boshqalarga faqat ulashayotgan foydalanuvchi' },
            { left: 'Leecher', right: 'Faylni yuklab olayotgan va olgan qismlarini tarqatayotgan tugun' },
            { left: 'Tracker', right: 'Peer lar IP manzillarini ro‘yxatga olib ularni o‘zaro tanishtiruvchi server' },
            { left: 'Swarm', right: 'Bir xil fayl ustida almashinuv qilayotgan barcha Seeder va Leecher lar' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '150 MB hajmli video faylni 24 Mbps tezlikda yuklab olish uchun nazariy jihatdan necha soniya kerak bo‘ladi?',
        options: ['6.25 soniya', '50 soniya', '120 soniya', '24 soniya'],
        answer: 1,
        explanation: '150 MB × 8 = 1200 Mbit; 1200 Mbit / 24 Mbps = 50 soniya.',
      },
      {
        prompt: 'BitTorrent tarmog‘ida faylni to‘liq (100%) yuklab bo‘lgan va uni faqat boshqalarga tarqatayotgan foydalanuvchi nima deb ataladi?',
        options: ['Tracker', 'Leecher', 'Seeder', 'Router'],
        answer: 2,
        explanation: 'Seeder — to‘liq faylga ega bo‘lib, faqat upload qiluvchi ishtirokchi.',
      },
      {
        prompt: 'Bandwidth (polosa kengligi) keng, lekin Videoqo‘ng‘iroq qotishining sababi nima bo‘lishi mumkin?',
        options: [
          'Katta kechikish (Latency / Jitter) va paketlar yo‘qolishi (Packet Loss)',
          'Kompyuter sichqonchasining rangi',
          'Monitor yorqinligi pastligi',
          'Klaviaturadagi CAPS LOCK yoqilgani',
        ],
        answer: 0,
        explanation: 'Real vaqtli video uchun nafaqat keng bandwidth, balki past kechikish (latency) ham zarur.',
      },
      {
        prompt: '`.torrent` fayli ichida odatda nima saqlanADI?',
        options: [
          'Butun kino yoki dasturning to‘liq binar kodi',
          'Fayl nomi, bo‘laklar (pieces) xesh qiymatlari va Tracker manzili',
          'Foydalanuvchining bank parollari',
          'Monitor drayverlari',
        ],
        answer: 1,
        explanation: '.torrent fayli juda kichik metadata fayli bo‘lib, bo‘laklar xeshi va tracker maʼlumotini saqlaydi.',
      },
      {
        prompt: 'Agar bir vaqtning o‘zida ko‘plab mijozlar bitta HTTP serverdan katta faylni yuklasa nima sodir bo‘ladi?',
        options: [
          'Serverning chiqish polosa kengligi bo‘linib, har bir foydalanuvchi uchun tezlik pasayadi',
          'Server avtomatik ravishda BitTorrent ga aylanadi',
          'Fayl hajmi nolga teng bo‘lib qoladi',
          'Har bir mijozning tezligi ikki baravar oshadi',
        ],
        answer: 0,
        explanation: 'Markazlashgan serverning cheklangan polosa kengligi barcha ulanishlar o‘rtasida taqsimlanadi.',
      },
    ],
    teacherNotes: {
      method: 'Doskada MB va Mbit farqini hayotiy suv quvuri analogiyasi orqali ko‘rsating; P2P vs Client-Server diagrammasini chizing.',
      timing: 'Nazariya va hisob-kitoblar 20 daqiqa, P2P sxemasi 10 daqiqa, amaliy masalalar va test 15 daqiqa.',
      assessment: 'O‘quvchi 8 ga ko‘paytirish qoidasini xatosiz qo‘llashi va Seeder/Leecher rolini tushuntira olishi.',
      homework: 'Uydagi internet tezligini (Mbps) tekshirib, 1.5 GB fayl necha daqiqada yuklanishini hisoblab kelish.',
    },
  },
  {
    id: 'g11-l34',
    grade: 11,
    no: 34,
    part: '3-chorak',
    title: 'Tarmoq xavfsizligi muammolari. Xavfsizlik usullari',
    kind: 'dars',
    hours: 1,
    tools: ['Xavfsizlik', 'Firewall / TLS / 2FA'],
    objectives: [
      'O‘quvchi asosiy tarmoq tahdidlarini (**Phishing**, **Malware/Ransomware**, **DDoS**, **Man-in-the-Middle**, **SQL Injection**) aniqlaydi.',
      'O‘quvchi himoya mexanizmlarini (**Firewall**, **Shifrlash TLS/VPN**, **2FA/Biometriya**, **Patching**, **Anti-malware**) tahdidlarga moslab qo‘llaydi.',
    ],
    intro:
      'Tarmoqqa ulangan har bir qurilma qulaylik bilan birga potensial xavf ostida ham bo‘ladi. Kiberxavfsizlik hujumchini ko‘r-ko‘rona to‘sish emas, balki **ko‘p qatlamli himoya (Defense in Depth)** qurishdir!',
    sections: [
      {
        heading: 'Asosiy tarmoq xavfsizligi tahdidlari',
        body: '• **Phishing (Fishing)**: bank, pochta yoki davlat xizmati niqobida soxta sayt/xat yuborib, login va parolni aldash yo‘li bilan olish (ijtimoiy muhandislik).\n• **Malware & Ransomware**: zararli dastur (virus, troyan, shifrlovchi virus — fayllarni qulflab tovon talab qiladi).\n• **DDoS (Distributed Denial of Service)**: minglab zararlangan qurilmalar (botnet) orqali serverga haddan tashqari ko‘p so‘rov yuborib, uni ishdan chiqarish.\n• **MITM (Man-in-the-Middle / O‘rtadagi odam)**: ochiq Wi-Fi da foydalanuvchi va server o‘rtasidagi shifrlanmagan trafikni tinglash yoki o‘zgartirish.',
      },
      {
        heading: 'Himoya usullari va Ko‘p qatlamli xavfsizlik',
        body: '• **Firewall (Tarmoq ekrani)**: kiruvchi va chiquvchi tarmoq paketlarini port, IP va qoidalar asosida filtrlaydi (ruxsatsiz ulanishlarni bloklaydi).\n• **Shifrlash (HTTPS/TLS va VPN)**: maʼlumotlarni uzatishda shifrlaydi — ochiq Wi-Fi da MITM tinglovchi faqat tushunarsiz baytlarni ko‘radi.\n• **2FA / MFA (Ikki faktorli autentifikatsiya)**: paroldan tashqari ikkinchi tasdiq (SMS/Authenticator ilova/apparat kaliti) — parol o‘g‘irlansa ham akkaunt himoyalanadi.\n• **Tizim yangilanishlari (Security Patches) va Zaxira (Backup)**: zaifliklarni yopadi va Ransomware dan keyin maʼlumotni tiklash imkonini beradi.',
        tip: 'Hech qachon bir xil parolni bir nechta saytda ishlatmang va har doim parol menejeri + 2FA yoqing!',
      },
    ],
    keyTerms: [
      { term: 'Firewall', definition: 'Belgilangan xavfsizlik qoidalari bo‘yicha kiruvchi va chiquvchi tarmoq trafigini nazorat qiluvchi himoya devori.' },
      { term: 'Phishing', definition: 'Ishonchli tashkilot qiyofasiga kirib, foydalanuvchidan maxfiy maʼlumotlarni undirish usuli.' },
      { term: 'DDoS hujumi', definition: 'Ko‘plab manbalardan bir vaqtda ulkan so‘rov yuborib, xizmatni qonuniy foydalanuvchilar uchun ishlamaydigan holga keltirish.' },
      { term: '2FA (Ikki faktorli autentifikatsiya)', definition: 'Kirish uchun paroldan tashqari ikkinchi mustaqil tasdiqlash omilini (kod/biometriya) talab qilish.' },
    ],
    steps: [
      '1. Har bir kiber-tahdid qaysi zaiflikdan (inson xatosi, shifrsiz tarmoq, eskirgan dastur) foydalanishini ajrating.',
      '2. Tegishli himoya chorasini (2FA, VPN/TLS, Firewall, Backup) tanlang.',
      '3. Haqiqiy vaziyat (Case Study) va moslashtirish mashqini bajaring.',
    ],
    practice: [
      {
        task: 'Qahvaxonadagi parolsiz (Open) Wi-Fi orqali internet-bankka kirish nima uchun xavfli va qanday himoyalanish kerak?',
        expected: 'Ochiq Wi-Fi da MITM hujumi xavfi yuqori. Himoya uchun faqat HTTPS (TLS) tekshirilgan sayt/ilova, mobil internet (4G/5G) yoki ishonchli VPN hamda 2FA ishlatish zarur.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l34-g1',
        num: '01',
        title: 'Tahdidga qarshi eng to‘g‘ri himoya',
        topic: 'Tarmoq himoyasi',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir tarmoq tahdidini eng samarali himoya usuli bilan bog‘lang:',
          pairs: [
            { left: 'Ochiq Wi-Fi da trafikni tinglash (MITM)', right: 'HTTPS / TLS shifrlash va VPN ishlatish' },
            { left: 'Ransomware (fayllarni shifrlab tovon so‘rash)', right: 'Tarmoqdan uzilgan (offline) zaxira nusxa (Backup)' },
            { left: 'Parollar bazasi sizib chiqqanda akkauntga kirish', right: 'Ikki faktorli autentifikatsiya (2FA / MFA)' },
            { left: 'Keraksiz tarmoq portlaridan ruxsatsiz kirish', right: 'Firewall (Tarmoqlararo ekran) qoidalari' },
          ],
        },
      },
      {
        id: 'g11-l34-g2',
        num: '02',
        title: 'Korporativ tarmoq hodisasi (Case Study)',
        topic: 'Xavfsizlik auditi',
        difficulty: 'Qiyin',
        engine: 'casestudy',
        config: {
          prompt: 'Maktab/kompaniya xodimi pochtaga kelgan "Solig‘ingizda qarzdorlik bor" havolasini bosib, login va parolini kiritdi. Shundan so‘ng ko‘p o‘tmay kompyuterdagi hujjatlar ochilmay qoldi.',
          scenario: 'Xodim shubhali havola orqali soxta saytga maʼlumot kiritgan, so‘ngra tarmoq papkasidagi fayllar kengaytmasi `.locked` ga o‘zgarib qolgan.',
          questions: [
            {
              prompt: '1-hodisada xodim qaysi hujum turiga duch keldi?',
              options: ['DDoS hujumi', 'Phishing (Fishing)', 'DNS keshlash', 'Switch kolliziyasi'],
              answer: 1,
              explanation: 'Shoshilinch/qo‘rqituvchi xat orqali soxta sahifaga parol kiritish — klassik Phishing.',
            },
            {
              prompt: '2-hodisada `.locked` fayllar nimani anglatadi?',
              options: ['Ransomware zararli dasturi fayllarni shifrlagan', 'Qattiq disk avtomatik defragmentatsiya bo‘lmoqda', 'ZIP arxiv yaratildi', 'Operatsion tizim yangilanmoqda'],
              answer: 0,
              explanation: 'Fayllarni shifrlab qulflash Ransomware belgisidir.',
            },
            {
              prompt: 'Bu vaziyatda tizim maʼmuri eng birinchi qaysi harakatni bajarishi kerak?',
              options: [
                'Tovon pulini zudlik bilan o‘tkazish',
                'Zararlangan kompyuterni tarmoqdan darhol uzib, boshqa kompyuterlarga tarqalishini to‘xtatish',
                'Barcha parollarni monitor ustiga yozib qo‘yish',
                'Firewall ni o‘chirib qo‘yish',
              ],
              answer: 1,
              explanation: 'Izolyatsiya (tarmoqdan uzish) Ransomware ning umumiy server va qo‘shni kompyuterlarga o‘tishini to‘xtatadi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Tarmoq paketlarini IP-manzil va port raqami asosida tekshirib, shubhali ulanishlarni to‘sadigan tizim nima deb ataladi?',
        options: ['Compiler', 'Firewall', 'Defragmenter', 'Assembler'],
        answer: 1,
        explanation: 'Firewall (tarmoq ekrani) ruxsat etilgan va taqiqlangan trafikni filtrlaydi.',
      },
      {
        prompt: 'Minglab zararlangan kompyuterlar (botnet) bir vaqtda bitta veb-serverga milliardlab so‘rov yuborib uni to‘xtatib qo‘yishi qanday hujum?',
        options: ['DDoS', 'Phishing', 'Keylogger', 'Brute-force lokal'],
        answer: 0,
        explanation: 'Distributed Denial of Service — xizmat ko‘rsatishni taqsimlangan tarzda rad etish hujumi.',
      },
      {
        prompt: 'Nima uchun 2FA (ikki faktorli autentifikatsiya) parol o‘g‘irlanganda ham himoya bera oladi?',
        options: [
          'Chunki tizim parolsiz ishlaydi',
          'Chunki kirish uchun hujumchida bo‘lmagan ikkinchi tasdiq (telefon/ilova kodi) ham talab qilinadi',
          'Chunki 2FA monitorni o‘chirib qo‘yadi',
          'Chunki 2FA faqat mahalliy tarmoqda ishlaydi',
        ],
        answer: 1,
        explanation: 'Parol bilinsa ham ikkinchi omilsiz akkauntga kirish imkonsiz bo‘ladi.',
      },
      {
        prompt: 'Brauzer manzil satrida qulfcha belgisi va `https://` yozuvi nimani kafolatlaydi?',
        options: [
          'Sayt 100% halol va hech qachon fishing emasligini',
          'Siz va server o‘rtasidagi trafik TLS/SSL bilan shifrlanganini',
          'Kompyuteringizda virus yo‘qligini',
          'Internet tezligi 1 Gbps ekanligini',
        ],
        answer: 1,
        explanation: 'HTTPS trafikni shifrlaydi va domen egasini tasdiqlaydi, lekin fishing saytlar ham HTTPS sertifikati olishi mumkin — domenni diqqat bilan tekshirish kerak!',
      },
      {
        prompt: 'Ransomware hujumidan eng ishonchli qutqaruvchi chora qaysi?',
        options: [
          'Monitor chastotasini oshirish',
          'Muntazam va alohida (offline/immutable) saqlangan zaxira nusxalar (Backup)',
          'Klaviatura drayverini almashtirish',
          'HTML sahifada ranglarni o‘zgartirish',
        ],
        answer: 1,
        explanation: 'Tarmoqdan ajratilgan zaxira nusxa bo‘lsa, tizimni tovon to‘lamasdan tiklash mumkin.',
      },
    ],
    teacherNotes: {
      method: 'Soxta fishing xat namunalarini (domen imlosidagi kichik xatolar, masalan `g00gle.com`) tahlil qildiring.',
      timing: 'Tahdidlar 15 daqiqa, himoya qatlamlari 15 daqiqa, Case Study va test 15 daqiqa.',
      assessment: 'O‘quvchi har bir tahdid mexanizmini aniq aytib, unga mos himoyani asoslab bera olishi.',
      homework: 'O‘z asosiy akkauntlarida 2FA yoqilganligini tekshirish va parol xavfsizligi cheklistini tuzish.',
    },
  },
  {
    id: 'g11-l35',
    grade: 11,
    no: 35,
    part: '3-chorak',
    title: 'Ma’lumotlarni himoya qilish haqidagi qonun tamoyillari',
    kind: 'dars',
    hours: 1,
    tools: ['Huquq', 'O‘zR Qonuni / GDPR'],
    objectives: [
      'O‘quvchi **shaxsga doir maʼlumotlar** nima ekanini va O‘zbekiston Respublikasining “Shaxsga doir maʼlumotlar to‘g‘risida”gi Qonuni hamda xalqaro **GDPR** tamoyillarini tushunadi.',
      'O‘quvchi maʼlumotlarni qonuniy yig‘ish, minimal saqlash, aniqlik, muddat cheklovi va maxfiylik/xavfsizlik talablarini amaliy holatlarga tatbiq etadi.',
    ],
    intro:
      'Kompaniyalar bizning ismimiz, telefon raqamimiz, pasport seriyamiz va joylashuvimizni yig‘ganda ularni xohlagancha sotishi yoki cheksiz saqlashi mumkinmi? Yo‘q! Buni **Maʼlumotlarni himoya qilish qonunlari** tartibga soladi.',
    sections: [
      {
        heading: 'Shaxsga doir maʼlumotlar va Subyekt huquqlari',
        body: '• **Shaxsga doir maʼlumotlar**: muayyan jismoniy shaxsga taalluqli bo‘lgan yoki uni identifikatsiya qilish imkonini beradigan har qanday axborot (F.I.Sh., JSHSHIR/pasport, telefon, email, biometrik maʼlumotlar, IP-manzil, tibbiy karta).\n• **Maʼlumotlar subyekti huquqlari**:\n  1. O‘z maʼlumotlari qayta ishlanayotganini bilish va nusxasini olish huquqi;\n  2. Noto‘g‘ri maʼlumotlarni tuzatishni talab qilish;\n  3. Maqsad tugaganda maʼlumotlarni o‘chirishni (“Unutilish huquqi”) talab qilish;\n  4. Roziligini istalgan paytda qaytarib olish huquqi.',
      },
      {
        heading: 'Qonunning 8 ta oltin tamoyili (GDPR & O‘zR Qonuni)',
        body: '1. **Qonuniylik, adolatlilik va shaffoflik**: maʼlumot faqat subyektning aniq roziligi yoki qonuniy asos bilan olinadi; yashirin yig‘ish taqiqlanadi.\n2. **Maqsad bilan cheklanganlik**: maʼlumot faqat eʼlon qilingan aniq maqsad uchun ishlatiladi (yetkazib berish uchun olingan telefon raqamiga reklama spam yuborish mumkin emas!).\n3. **Maʼlumotlarni minimallashtirish**: keragidan ortiq maʼlumot so‘ralmaydi (masalan, ob-havo ilovasiga pasport raqami kerak emas).\n4. **Aniqlik va dolzarblik**: maʼlumotlar to‘g‘ri va yangilangan bo‘lishi shart.\n5. **Saqlash muddati cheklanganligi**: maqsad bajarilgach, maʼlumot o‘chiriladi yoki anonimlashtiriladi.\n6. **Xavfsizlik va maxfiylik**: ruxsatsiz kirish, yo‘qotish yoki sizib chiqishdan texnik (shifrlash) va tashkiliy himoya taʼminlanadi.\n7. **Chegaralararo uzatish cheklovi**: himoya darajasi yetarli bo‘lmagan davlatlarga roziliksiz uzatish taqiqlanadi.\n8. **Hisobdorlik (Accountability)**: maʼlumot operatori ushbu tamoyillarga rioya etilishiga javobgardir.',
        tip: 'O‘zbekiston Respublikasining “Shaxsga doir maʼlumotlar to‘g‘risida”gi Qonuni (O‘RQ-547) ham xuddi shu shaffoflik, rozilik va lokal saqlash/himoya tamoyillariga asoslanadi.',
      },
    ],
    keyTerms: [
      { term: 'Shaxsga doir maʼlumotlar', definition: 'Jismoniy shaxsni bevosita yoki bilvosita aniqlash imkonini beruvchi har qanday maʼlumot.' },
      { term: 'Data Minimization', definition: 'Faqat belgilangan maqsadga erishish uchun zarur bo‘lgan eng minimal hajmdagi maʼlumotni yig‘ish tamoyili.' },
      { term: 'Unutilish huquqi', definition: 'Shaxsning o‘ziga oid maʼlumotlarni qonuniy asos tugaganda tizimdan o‘chirtirish huquqi.' },
      { term: 'Maxfiylik va yaxlitlik', definition: 'Saqlanayotgan maʼlumotlarni ruxsatsiz kirish va buzilishdan shifrlash hamda nazorat bilan himoyalash.' },
    ],
    steps: [
      '1. Qaysi maʼlumotlar oddiy, qaysilari esa alohida himoyalanadigan maxsus (biometrik, tibbiy) shaxsiy maʼlumot ekanini ajrating.',
      '2. Qonun tamoyillarini buzuvchi amaliy holatlarni aniqlang.',
      '3. Quyidagi To‘g‘ri/Noto‘g‘ri va bo‘sh joyni to‘ldirish mashqlarini bajaring.',
    ],
    practice: [
      {
        task: 'Onlayn kitob do‘koni ro‘yxatdan o‘tishda foydalanuvchidan qon guruhi va ota-onasining ish joyini majburiy so‘ramoqda. Bu qaysi tamoyilni buzadi?',
        expected: 'Maʼlumotlarni minimallashtirish (Data Minimization) va maqsadga muvofiqlik tamoyilini buzadi, chunki kitob sotish uchun qon guruhi umuman kerak emas.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l35-g1',
        num: '01',
        title: 'Qonuniy yoki qonunbuzarlik?',
        topic: 'Maʼlumotlarni himoya qilish',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Quyidagi vaziyatlar maʼlumotlarni himoya qilish tamoyillariga mos yoki zid ekanini baholang:',
          statements: [
            {
              text: 'Do‘kon kuryerga berilgan telefon raqamni xaridor ruxsatisiz reklama agentligiga sotib yuborishi qonuniydir.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Bu maqsad bilan cheklanganlik va rozilik tamoyillarini qo‘pol ravishda buzadi.',
            },
            {
              text: 'Mijoz shartnomani bekor qilib akkauntini o‘chirishni so‘raganda kompaniya ortiqcha maʼlumotlarni o‘chirishi shart.',
              isTrue: true,
              explanation: 'To‘g‘ri! Saqlash muddati cheklanganligi va unutilish huquqi shuni talab qiladi.',
            },
            {
              text: 'Kalkulyator mobil ilovasi ishlashi uchun foydalanuvchining kontaktlari va mikrofoniga ruxsat so‘rashi Minimallashtirish tamoyiliga mos.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Kalkulyatorga kontaktlar va mikrofon kerak emas — bu Data Minimization tamoyiliga zid.',
            },
            {
              text: 'Shaxsiy maʼlumotlar bazasini shifrlanmagan ochiq matn (plain text) ko‘rinishida internetda saqlash Xavfsizlik tamoyilini buzadi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Operator texnik xavfsizlik choralarini (shifrlash, kirish nazorati) ko‘rishi shart.',
            },
          ],
        },
      },
      {
        id: 'g11-l35-g2',
        num: '02',
        title: 'Qonun tamoyillarini tiklang',
        topic: 'Huquqiy atamalar',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Bo‘sh o‘rinlarni qonun tamoyillariga mos atamalar bilan to‘ldiring:',
          template: 'Keragidan ortiq shaxsiy maʼlumot so‘ramaslik {{0}} tamoyili deyiladi. Maqsad tugagach maʼlumotni o‘chirish esa {{1}} tamoyiliga kiradi.',
          blanks: [
            { options: ['minimallashtirish', 'cheksiz yig‘ish', 'reklama'], answer: 'minimallashtirish' },
            { options: ['saqlash muddati cheklanganligi', 'ochiq tarqatish', 'arzonlashtirish'], answer: 'saqlash muddati cheklanganligi' },
          ],
          hint: 'Minimallashtirish — faqat zarurini olish; muddat — keraksiz bo‘lgach saqlamaslik.',
          explanation: 'Ikkala tamoyil ham ortiqcha maʼlumot to‘planib qolib sizib chiqish xavfini kamaytiradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Quyidagilardan qaysi biri “Maʼlumotlarni minimallashtirish” (Data Minimization) tamoyilini eng aniq ifodalaydi?',
        options: [
          'Barcha maʼlumotlarni bitta USB fleshkaga ko‘chirish',
          'Faqat belgilangan aniq maqsad uchun zarur bo‘lgan eng kam shaxsiy maʼlumotni yig‘ish',
          'Har bir foydalanuvchiga eng kichik shriftda shartnoma ko‘rsatish',
          'Parollarni 3 belgidan qisqa qilish',
        ],
        answer: 1,
        explanation: 'Ortiqcha, maqsadga aloqador bo‘lmagan shaxsiy maʼlumotlarni yig‘ish mumkin emas.',
      },
      {
        prompt: 'Yetkazib berish xizmati uchun olingan uy manzili va telefon raqamidan foydalanib, boshqa kompaniyalar nomidan spam SMS yuborish qaysi tamoyilni buzadi?',
        options: [
          'Maqsad bilan cheklanganlik (Purpose limitation)',
          'Ekran o‘lchami tamoyili',
          'Bit tezligi tamoyili',
          'Vektorli grafika tamoyili',
        ],
        answer: 0,
        explanation: 'Maʼlumot faqat dastlab rozilik berilgan aniq maqsad doirasida ishlatilishi shart.',
      },
      {
        prompt: 'O‘ziga oid shaxsiy maʼlumotlarni tizimdan butunlay o‘chirishni talab qilish huquqi nima deb ataladi?',
        options: ['DDoS huquqi', 'Unutilish / o‘chirish huquqi', 'Keshlash huquqi', 'Kompilyatsiya huquqi'],
        answer: 1,
        explanation: 'Maʼlumotlar subyekti qonuniy asos qolmaganda o‘z maʼlumotlarini o‘chirtirishga haqli.',
      },
      {
        prompt: 'Qaysi maʼlumot alohida (maxsus) toifadagi shaxsga doir maʼlumot hisoblanadi?',
        options: [
          'Kompyuter ekranining o‘lchami',
          'Barmoq izi (biometriya) va tibbiy tashxis',
          'Brauzer nomi',
          'Shahar ob-havo harorati',
        ],
        answer: 1,
        explanation: 'Biometrik, genetik va sog‘liqqa oid maʼlumotlar kuchaytirilgan maxsus himoya talab qiladi.',
      },
      {
        prompt: 'Maʼlumotlar bazasidan foydalanuvchilarning JSHSHIR va parollari sizib chiqsa, tashkilot nimani buzgan bo‘ladi?',
        options: [
          'Yaxlitlik va maxfiylik (Xavfsizlik) tamoyilini',
          'DNS domen tamoyilini',
          'Vektor grafikasi tamoyilini',
          'Gantt diagrammasi tamoyilini',
        ],
        answer: 0,
        explanation: 'Operator maʼlumotlarni texnik himoya choralari bilan ruxsatsiz tarqalishdan saqlashi shart.',
      },
    ],
    teacherNotes: {
      method: 'Telefonlardagi ilova ruxsatnomalari (Permissions) misolida “Minimallashtirish”ni muhokama qiling.',
      timing: 'Qonun tushunchasi 10 daqiqa, 8 ta tamoyil 15 daqiqa, amaliy bahs va test 20 daqiqa.',
      assessment: 'O‘quvchi har bir hayotiy vaziyatda aynan qaysi tamoyil buzilganini nomlab bera olishi.',
      homework: 'Telefoningizdagi 3 ta ilovaning ruxsatnomalarini (Kamera, Mikrofon, Kontaktlar) tekshirib, ortiqchalarini yozib keling.',
    },
  },
  {
    id: 'g11-l36',
    grade: 11,
    no: 36,
    part: '3-chorak',
    title: 'Sun’iy yoʻldosh aloqa tizimlari',
    kind: 'dars',
    hours: 1,
    tools: ['Tarmoq', 'GPS / Satnav / VSAT / LEO'],
    objectives: [
      'O‘quvchi sunʼiy yo‘ldosh aloqa tizimlarining ishlash prinsipini (**Uplink / Transponder / Downlink**), **GEO**, **MEO** va **LEO** orbitalarini taqqoslaydi.',
      'O‘quvchi **GPS / GLONASS / Galileo** (Trilateration), sunʼiy yo‘ldosh TV va **LEO sunʼiy yo‘ldosh interneti (masalan, Starlink)** qo‘llanilishi hamda cheklovlarini tahlil qiladi.',
    ],
    intro:
      'Cho‘l o‘rtasida, okeandagi kemada yoki baland tog‘da uyali aloqa minorasi bo‘lmasa ham, navigator yo‘lni aniq ko‘rsatadi va internet ishlaydi. Buning ortida kosmosdagi **sunʼiy yo‘ldosh aloqa tizimlari** turibdi!',
    sections: [
      {
        heading: 'Sunʼiy yo‘ldosh aloqasi va Orbitalar (GEO, MEO, LEO)',
        body: 'Signal yer usti stansiyasidan (**Uplink**) yo‘ldoshga uzatiladi, u yerda **Transponder** signalni kuchaytirib chastotasini o‘zgartiradi va yerga (**Downlink**) qaytaradi.\n• **GEO (Geostatsionar orbita, ~35 786 km)**: Yer bilan bir xil tezlikda aylanadi — osmonning bir nuqtasida “turib qolgandek” ko‘rinadi. Sunʼiy yo‘ldosh TV (Dish/Antennalar) uchun qulay, lekin masofa uzoqligi sabab **kechikish (latency) katta (~600 ms)**.\n• **MEO (O‘rta yer orbitasi, ~2 000–20 000 km)**: **GPS / Galileo** navigatsiya yo‘ldoshlari (~20 200 km) shu orbitada joylashgan.\n• **LEO (Past yer orbitasi, ~300–1 200 km)**: Yerga juda yaqin, shuning uchun kechikish juda past (**~25–50 ms**)! Zamonaviy **LEO internet** (Starlink, OneWeb) shu orbitada minglab yo‘ldoshlar turkumi bilan ishlaydi.',
      },
      {
        heading: 'GPS navigatsiya (Trilateration) va Qo‘llanilish sohalari',
        body: '• **GPS (Global Positioning System)** qanday ishlaydi? Yerdagi qabul qilgich (telefon) kamida **3–4 ta** yo‘ldoshdan kelayotgan atom soati vaqt belgisini o‘qiydi. Yorug‘lik tezligida signal yetib kelish vaqtidan har bir yo‘ldoshgacha bo‘lgan masofa hisoblanadi (**Trilateratsiya**) va aniq koordinata (`lat, lon, balandlik`) topiladi!\n• **Afzalliklari**: Okeanlar, tog‘lar, kabel tortib bo‘lmaydigan hududlarda global qamrov; falokat paytida yerdagi minoralar ishdan chiqqanda ham ishlaydi.\n• **Kamchiliklari**: Yomon ob-havo (qalin bulut, kuchli yomg‘ir — *rain fade*), bino ichida/yer ostida signal yo‘qolishi, uskunalar qimmatligi.',
        tip: 'GPS da telefoningiz yo‘ldoshga signal *yubormaydi* — u faqat yo‘ldoshlar tarqatayotgan vaqt signallarini *tinglab* o‘z koordinatasini hisoblaydi!',
      },
    ],
    keyTerms: [
      { term: 'GEO (Geostatsionar)', definition: '35 786 km balandlikda yer bilan sinxron aylanuvchi, sunʼiy yo‘ldosh TV da qo‘llanadigan orbita.' },
      { term: 'LEO (Past orbita)', definition: '500–1200 km balandlikda joylashgan, past kechikishli internet taqdim etuvchi orbita.' },
      { term: 'Trilateratsiya', definition: 'Kamida 3–4 ta yo‘ldoshgacha bo‘lgan masofa orqali aniq geografik koordinatani aniqlash usuli.' },
      { term: 'Uplink / Downlink', definition: 'Yerdan yo‘ldoshga (Uplink) va yo‘ldoshdan yerga (Downlink) signal uzatish yo‘nalishi.' },
    ],
    steps: [
      '1. GEO, MEO va LEO orbitalarini balandlik va kechikish (ping) bo‘yicha taqqoslang.',
      '2. GPS da atom soatlari aniqligi nima uchun hal qiluvchi ekanini tushuning.',
      '3. Quyidagi moslashtirish va bo‘sh joyni to‘ldirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Nima uchun onlayn video-o‘yinlar va Zoom qo‘ng‘iroqlari uchun GEO sunʼiy yo‘ldosh interneti noqulay, LEO esa qulay?',
        expected: 'GEO 35 786 km balandlikda joylashgani uchun signal borib-qaytishida ~600 ms kechikish bo‘ladi. LEO esa 550 km atrofida bo‘lib, ~30 ms past kechikish beradi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l36-g1',
        num: '01',
        title: 'Orbitalar va sunʼiy yo‘ldosh tizimlari',
        topic: 'Kosmik aloqa',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir orbita yoki tizimni uning asosiy xususiyatiga bog‘lang:',
          pairs: [
            { left: 'GEO (~35 786 km)', right: 'Bir nuqtada muallaq turgandek ko‘rinadi; sunʼiy yo‘ldosh TV uchun qulay' },
            { left: 'MEO (~20 200 km)', right: 'GPS, GLONASS va Galileo navigatsiya tizimlari joylashgan orbita' },
            { left: 'LEO (~550 km)', right: 'Past kechikishli (~30 ms) zamonaviy keng polosali sunʼiy yo‘ldosh interneti' },
            { left: 'Trilateratsiya', right: 'Bir nechta yo‘ldoshgacha masofa vaqti orqali joylashuvni aniqlash' },
          ],
        },
      },
      {
        id: 'g11-l36-g2',
        num: '02',
        title: 'GPS qanday hisoblaydi?',
        topic: 'Navigatsiya asoslari',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Sunʼiy yo‘ldosh aloqasi va GPS haqidagi fikrlarni tekshiring:',
          statements: [
            {
              text: 'Smartfondagi GPS qabul qilgichi joylashuvni aniqlash uchun kosmosga kuchli radio-signal uzatishi shart.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Smartfon passiv qabul qilgich — u faqat yo‘ldoshlardan kelayotgan vaqt signallarini qabul qiladi.',
            },
            {
              text: 'Aniq 3D koordinata (kenglik, uzunlik, balandlik) va vaqtni tuzatish uchun kamida 4 ta yo‘ldosh signali kerak.',
              isTrue: true,
              explanation: 'To‘g‘ri! 3 ta yo‘ldosh x, y, z ni, 4-yo‘ldosh esa telefon soatidagi xatolikni tuzatadi.',
            },
            {
              text: 'Kuchli yomg‘ir va qalin qor sunʼiy yo‘ldosh signalini susaytirishi (rain fade) mumkin.',
              isTrue: true,
              explanation: 'To‘g‘ri! Yuqori chastotali radioto‘lqinlar atmosferadagi suv tomchilarida yutiladi va sochiladi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Sunʼiy yo‘ldosh televideniyesi antennalarini bir marta aniq yo‘naltirib qo‘ygach, burish shart bo‘lmasligi qaysi orbita xususiyati tufayli?',
        options: ['LEO', 'GEO (Geostatsionar)', 'Suborbital', 'Lokal LAN'],
        answer: 1,
        explanation: 'GEO yo‘ldoshi Yer aylanishi bilan bir xil burchak tezligida harakatlanib, osmonning bir joyida turadi.',
      },
      {
        prompt: 'GPS tizimida foydalanuvchining koordinatasini aniqlash uchun qo‘llaniladigan geometrik usul qaysi?',
        options: ['Trilateratsiya', 'Defragmentatsiya', 'Polimorfizm', 'Rastrlash'],
        answer: 0,
        explanation: 'Trilateratsiya kamida 3–4 ta nuqtagacha bo‘lgan masofalarning kesishuv nuqtasini topadi.',
      },
      {
        prompt: 'Yerdan kosmosdagi sunʼiy yo‘ldoshga yuboriladigan signal yo‘nalishi nima deb ataladi?',
        options: ['Downlink', 'Uplink', 'Offline', 'Backbone'],
        answer: 1,
        explanation: 'Yerdan yo‘ldoshga — Uplink; yo‘ldoshdan yerga — Downlink.',
      },
      {
        prompt: 'Past yer orbitasi (LEO) tizimlarida bitta yo‘ldosh emas, yuzlab/minglab yo‘ldoshlar turkumi uchirilishining sababi nima?',
        options: [
          'Har bir LEO yo‘ldoshi kichik hududni qamraydi va yer ustidan tez uchib o‘tadi, shuning uchun uzluksiz estafeta kerak',
          'Yo‘ldoshlar quyoshni to‘sib turishi uchun',
          'Kabel ulash oson bo‘lishi uchun',
          'Faqat tunda ishlashi uchun',
        ],
        answer: 0,
        explanation: 'Yerga yaqin bo‘lgani uchun qamrov zonasi kichik va orbital tezligi yuqori.',
      },
      {
        prompt: 'Quyidagi joylardan qaysi birida sunʼiy yo‘ldosh (GPS/internet) qamrovi eng yaxshi ishlaydi?',
        options: [
          'Ochiq dengiz va osmon ko‘rinib turgan tekislikda',
          'Chuqur metro tunneli ichida',
          'Temir-beton yerto‘lada',
          'Qalin metall bunkerdagi xonada',
        ],
        answer: 0,
        explanation: 'Sunʼiy yo‘ldosh signali uchun osmon bilan to‘g‘ridan-to‘g‘ri ko‘rinish chizig‘i (Line of Sight) zarur.',
      },
    ],
    teacherNotes: {
      method: 'Sinf burchagiga 3 ta yo‘ldosh tasavvuri bilan iplar/chizg‘ich yordamida trilateratsiya kesishuvini ko‘rsating.',
      timing: 'Orbitalar 15 daqiqa, GPS prinsipi 15 daqiqa, mashqlar va test 15 daqiqa.',
      assessment: 'O‘quvchi GEO vs LEO kechikish sababini va GPS passiv qabul qilishini tushuntira olishi.',
      homework: 'O‘zbekistonda sunʼiy yo‘ldosh aloqasi qayerga (geologiya, aviatsiya, tog‘li qishloqlar) zarurligini yozib kelish.',
    },
  },
  {
    id: 'g11-l37',
    grade: 11,
    no: 37,
    part: '3-chorak',
    title: 'Loyiha boshqaruvining bosqichlari. Konsepsiya va boshlash',
    kind: 'loyiha',
    hours: 1,
    tools: ['Loyiha boshqaruvi', 'SMART / Charter'],
    objectives: [
      'O‘quvchi **Loyiha (Project)** va kundalik operatsion faoliyat farqini hamda loyihaning 5 ta hayot sikli bosqichini (**Boshlash, Rejalashtirish, Ijro etish, Monitoring va nazorat, Yakunlash**) o‘rganadi.',
      'O‘quvchi **Konsepsiya va Boshlash (Conception & Initiation)** bosqichida **SMART** maqsadlar, **Loyiha ustavi (Project Charter)** va **Texnik-iqtisodiy asos (Feasibility Study)** tuzishni o‘zlashtiradi.',
    ],
    intro:
      'Har qanday yirik IT mahsulot — maktab portali, mobil ilova yoki o‘yin — kod yozishdan emas, to‘g‘ri **Loyiha boshqaruvi (Project Management)** va aniq **Konsepsiya** dan boshlanadi!',
    sections: [
      {
        heading: 'Loyiha hayot siklining 5 ta asosiy bosqichi',
        body: 'Loyiha — boshlanishi va tugashi aniq, noyob natija beruvchi vaqtinchalik faoliyat. U 5 bosqichdan o‘tadi:\n1. **Konsepsiya va Boshlash (Initiation)**: G‘oyani shakllantirish, maqsad, byudjet va texnik imkoniyatni (**TELOS Feasibility**: Texnik, Iqtisodiy, Huquqiy, Operatsion, Jadval) tekshirish, **Project Charter** tasdiqlash.\n2. **Rejalashtirish (Planning)**: Vazifalarni bo‘lish (**WBS**), muddatlar (**Gantt**), resurslar va xavflarni rejalash.\n3. **Ijro etish (Execution)**: Jamoa dizayn, dasturlash va mahsulotni yaratish ustida ishlaydi.\n4. **Monitoring va nazorat (Monitoring & Control)**: Jarayonni reja bilan solishtirish, kechikish va byudjet og‘ishini tuzatish.\n5. **Yakunlash (Closing)**: Mahsulotni topshirish, hujjatlarni arxivlash va yakuniy tahlil (Lessons Learned).',
      },
      {
        heading: 'Konsepsiya bosqichida SMART maqsad va Project Charter',
        body: 'Maqsad umumiy emas, **SMART** bo‘lishi shart:\n• **S (Specific)** — Aniq: nima yaratiladi?\n• **M (Measurable)** — O‘lchanadigan: muvaffaqiyat qanday o‘lchanadi?\n• **A (Achievable)** — Erishiladigan: resurslar yetarlimi?\n• **R (Relevant)** — Dolzarb: muammoni hal qiladimi?\n• **T (Time-bound)** — Muddatli: qachon tugaydi?\nLoyiha boshlanishida **Loyiha ustavi (Project Charter)** yoziladi — unda loyiha homiysi, rahbari, maqsadi, asosiy manfaatdor tomonlar (**Stakeholders**) va cheklovlar (Scope, Time, Cost — “Oltin uchburchak”) belgilanadi.',
        tip: 'Loyiha boshqaruvi uchburchagi: Ko‘lam (Scope), Vaqt (Time) va Byudjet (Cost) o‘zaro bog‘liq — birini o‘zgartirsangiz, boshqalari ham taʼsirlanadi!',
      },
    ],
    keyTerms: [
      { term: 'Project Charter', definition: 'Loyihani rasman boshlovchi, uning maqsadi, rahbari va cheklovlarini belgilovchi hujjat.' },
      { term: 'SMART maqsad', definition: 'Aniq, o‘lchanadigan, erishiladigan, dolzarb va vaqti chegaralangan maqsad mezoni.' },
      { term: 'Stakeholders', definition: 'Loyiha natijasidan manfaatdor yoki unga taʼsir ko‘rsatuvchi barcha shaxslar va tashkilotlar.' },
      { term: 'Feasibility Study', definition: 'Loyihani texnik, moliyaviy, huquqiy va vaqt jihatdan amalga oshirish mumkinligini tekshirish.' },
    ],
    steps: [
      '1. Loyiha boshqaruvining 5 bosqichini to‘g‘ri ketma-ketlikda joylashtiring.',
      '2. “Maktab kutubxonasi uchun elektron katalog” misolida SMART maqsad tuzing.',
      '3. Quyidagi tartiblash va moslashtirish mashqlarini bajaring.',
    ],
    practice: [
      {
        task: '“Maktab uchun zo‘r sayt qilamiz” jumlasini SMART qoidasiga ko‘ra to‘liq maqsadga aylantiring.',
        expected: '“11-sinf o‘quvchilari jamoasi 2 oy ichida (30-aprelgacha) 500 ta o‘quvchiga mo‘ljallangan dars jadvali va uy vazifalari web-portalini ishga tushiradi.”',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l37-g1',
        num: '01',
        title: 'Loyiha hayot siklini tartiblang',
        topic: '5 ta bosqich',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Loyiha boshqaruvining 5 ta bosqichini boshidan oxirigacha to‘g‘ri ketma-ketlikda joylashtiring:',
          items: [
            '1. Konsepsiya va Boshlash (Initiation & Charter)',
            '2. Rejalashtirish (WBS, jadval va resurslar)',
            '3. Ijro etish (Mahsulotni yaratish)',
            '4. Monitoring va nazorat (Sifat va muddat tekshiruvi)',
            '5. Yakunlash (Topshirish va tajribani sarhisob qilish)',
          ],
          hint: 'Avval g‘oya va hujjat, so‘ng reja, keyin bajarish/nazorat va nihoyat yakunlash.',
        },
      },
      {
        id: 'g11-l37-g2',
        num: '02',
        title: 'SMART harflarini oching',
        topic: 'Maqsad qo‘yish',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'SMART qisqartmasidagi mezonlarni ularning maʼnosiga bog‘lang:',
          pairs: [
            { left: 'S — Specific', right: 'Maqsad aniq va tushunarli ifodalangan' },
            { left: 'M — Measurable', right: 'Natijani raqam yoki aniq mezon bilan o‘lchash mumkin' },
            { left: 'A — Achievable', right: 'Mavjud jamoa va resurslar bilan bajarish imkoni bor' },
            { left: 'T — Time-bound', right: 'Bajarilish muddati va yakuniy sana aniq belgilangan' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Loyiha boshqaruvi bosqichlarining eng birinchisi qaysi?',
        options: ['Yakunlash', 'Konsepsiya va Boshlash (Initiation)', 'Monitoring', 'Beta sinov'],
        answer: 1,
        explanation: 'Har bir loyiha g‘oyani asoslash va Project Charter tasdiqlashdan boshlanadi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri Loyiha ustavi (Project Charter) da ko‘rsatilADI?',
        options: [
          'Dasturning barcha JavaScript qatorlari',
          'Loyiha maqsadi, rahbari, asosiy muddat va byudjet doirasi',
          'Server IP manzili paroli',
          'Foydalanuvchilarning shaxsiy rasmlari',
        ],
        answer: 1,
        explanation: 'Project Charter loyihaning yuqori darajali pasporti bo‘lib, vakolat va asosiy chegaralarni belgilaydi.',
      },
      {
        prompt: 'SMART mezonidagi “T” harfi nimani anglatadi?',
        options: ['Technical (Texnik)', 'Time-bound (Aniq muddatli)', 'Testing (Sinov)', 'Total (Jami)'],
        answer: 1,
        explanation: 'T — Time-bound, yaʼni yakunlanish sanasi aniq belgilanishi shart.',
      },
      {
        prompt: 'Loyihaning texnik, iqtisodiy va huquqiy jihatdan amalga oshishi mumkinligini tekshiruvchi tadqiqot nima deyiladi?',
        options: ['Feasibility Study (Texnik-iqtisodiy asos)', 'Defragmentatsiya', 'Mail Merge', 'Rastrlash'],
        answer: 0,
        explanation: 'Feasibility Study loyihaga pul va vaqt sarflashdan oldin uning real imkoniyatini baholaydi.',
      },
      {
        prompt: 'Loyiha boshqaruvining “Oltin uchburchagi” qaysi 3 ta asosiy cheklovdan iborat?',
        options: [
          'CPU, RAM, SSD',
          'Ko‘lam (Scope), Vaqt (Time), Byudjet (Cost)',
          'HTML, CSS, JS',
          'Uplink, Downlink, Ping',
        ],
        answer: 1,
        explanation: 'Loyihadagi har bir o‘zgarish ko‘lam, muddat yoki xarajat uchburchagiga taʼsir qiladi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda kichik guruhlarga bo‘lib, har bir jamoaga maktab hayotiga oid bitta IT loyiha uchun 1 betlik Project Charter yozdiring.',
      timing: '5 bosqich 15 daqiqa, SMART va Charter 15 daqiqa, guruh ishi va test 15 daqiqa.',
      assessment: 'Jamoa tuzgan maqsadning SMART ning barcha 5 talabiga javob berishi.',
      homework: 'O‘z loyihangiz uchun 5 ta asosiy manfaatdor tomon (Stakeholder) ro‘yxatini tuzib kelish.',
    },
  },
  {
    id: 'g11-l38',
    grade: 11,
    no: 38,
    part: '3-chorak',
    title: 'Loyiha boshqaruvi uchun foydalaniladigan dasturiy ta’minot turlari',
    kind: 'loyiha',
    hours: 1,
    tools: ['Loyiha boshqaruvi', 'Trello / Jira / GanttProject'],
    objectives: [
      'O‘quvchi loyiha boshqaruvi dasturlarini (Gantt/Rejalash: **MS Project, GanttProject, LibrePlan**; Kanban/Agile doskalari: **Trello, Jira, Taiga**; Hujjat va hamkorlik: **Notion, Slack**) vazifasiga ko‘ra tanlaydi.',
      'O‘quvchi zamonaviy dasturlar imkoniyatlarini (WBS, resurs taqsimoti, vaqt hisobi, versiya nazorati va hisobotlar) baholaydi.',
    ],
    intro:
      '10 kishilik dasturchilar va dizaynerlar jamoasi 200 ta vazifani daftarda boshqara olmaydi. Zamonaviy IT da buning uchun maxsus **Loyiha boshqaruvi dasturlari (PM Software)** ishlatiladi!',
    sections: [
      {
        heading: 'Loyiha boshqaruvi dasturlarining asosiy turlari',
        body: '1. **Jadval va Gantt dasturlari** (*GanttProject — bepul ochiq kodli, MS Project, ProjectLibre*): Vazifalar ketma-ketligi, bog‘liqliklari (dependencies), kritik yo‘l (CPA) va resurs yuklamasini chizish uchun.\n2. **Kanban va Agile doskalari** (*Trello, Jira, Taiga — ochiq kodli, GitHub Projects*): Vazifalarni kartochkalarda `To Do → In Progress → Review → Done` ustunlari bo‘yicha ko‘rish uchun juda qulay.\n3. **Jamoviy hamkorlik va bilimlar bazasi** (*Notion, Confluence, Mattermost*): Texnik topshiriqlar (TZ), uchrashuv bayonnomalari va hujjatlarni bir joyda saqlash uchun.',
      },
      {
        heading: 'PM dasturlari beradigan asosiy afzalliklar va funksiyalar',
        body: '• **Vazifalarni taqsimlash (Task Assignment)**: har bir ishning aniq masʼul ijrochisi va muddati (Deadline) bor.\n• **Bog‘liqliklarni kuzatish**: “Dizayn bitmasdan Frontend boshlanmasin” kabi cheklovlar.\n• **Resurslar muvozanati**: bir kishiga bir kunda 16 soatlik ish tushib qolishini (Over-allocation) oldindan ko‘rish.\n• **Avtomatik hisobotlar va xabarnomalar**: muddat yaqinlashganda eslatma va kechikishlar grafigi (Burndown Chart).\n• **Bulutli hamkorlik**: dunyoning istalgan nuqtasidan real vaqtda bir xil doskada ishlash.',
        tip: 'Kichik o‘quv loyihasi uchun **Trello** yoki **GanttProject**, yirik dasturiy mahsulot uchun esa **Jira** yoki **GitHub Projects** eng qulay!',
      },
    ],
    keyTerms: [
      { term: 'Kanban doskasi', definition: 'Vazifalarni ustunlar (To Do / Doing / Done) orqali vizual boshqarish usuli.' },
      { term: 'GanttProject / ProjectLibre', definition: 'Gantt diagrammasi va resurslarni rejalashtirish uchun bepul ochiq kodli dasturlar.' },
      { term: 'Milestone (Nazora nuqtasi)', definition: 'Loyihaning muhim oraliq marrasi (masalan, “Dizayn tasdiqlandi” — davomiyligi 0 kun).' },
      { term: 'Over-allocation', definition: 'Bitta xodim yoki resursga uning imkoniyatidan ortiq vazifa bir vaqtda yuklanishi.' },
    ],
    steps: [
      '1. Waterfall (ketma-ket) va Agile (moslashuvchan) loyihalar uchun dastur tanlang.',
      '2. Kanban ustunlari va Gantt diagramma dasturlari farqini ajrating.',
      '3. Quyidagi moslashtirish va krossvord o‘yinlarini bajaring.',
    ],
    practice: [
      {
        task: 'Sinfdagi 4 kishilik dasturlash jamoasi uchun 3 haftalik sayt loyihasida qaysi bepul vositalar kombinatsiyasini tanlaysiz va nega?',
        expected: 'Vazifalarni taqsimlash uchun Trello yoki GitHub Projects (Kanban), muddatlarni rejalash uchun GanttProject, kod saqlash uchun GitHub.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l38-g1',
        num: '01',
        title: 'Loyiha dasturlarini tanlang',
        topic: 'PM vositalari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Loyiha ehtiyojiga eng mos dastur yoki funksiyani bog‘lang:',
          pairs: [
            { left: 'Trello / Taiga', right: 'Kartochkali Kanban doskasi (To Do → Doing → Done)' },
            { left: 'GanttProject / MS Project', right: 'Vazifalar muddati, bog‘liqligi va kritik yo‘lni chizish' },
            { left: 'Jira', right: 'Dasturiy taʼminotdagi xatolar (Bugs) va Agile sprintlarni boshqarish' },
            { left: 'Milestone', right: 'Loyiha bosqichini yakunlovchi nol davomiylikdagi muhim marra' },
          ],
        },
      },
      {
        id: 'g11-l38-g2',
        num: '02',
        title: 'Loyiha boshqaruvi krossvordi',
        topic: 'PM atamalari',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: 'Loyiha boshqaruvi dasturlariga oid asosiy atamalarni toping:',
          clues: [
            { id: '1', clue: 'Vazifalarni ustunlar (To Do / Done) shaklida ko‘rsatuvchi vizual doska usuli', answer: 'KANBAN' },
            { id: '2', clue: 'Dasturlash jamoalari sprint va bug larni kuzatadigan mashhur tizim', answer: 'JIRA' },
            { id: '3', clue: 'Vaqt jadvalini gorizontal ustunlarda ko‘rsatuvchi diagramma muallifi', answer: 'GANTT' },
            { id: '4', clue: 'Kartochkali onlayn Kanban taxtasi nomi', answer: 'TRELLO' },
          ],
          hint: 'Barcha javoblar lotin bosh harflarda yoziladi (KANBAN, JIRA, GANTT, TRELLO).',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Vazifalarni `To Do`, `In Progress`, `Done` ustunlarida kartochkalar shaklida boshqarish usuli nima deb ataladi?',
        options: ['Kanban', 'Trilateratsiya', 'Mail Merge', 'Rastrlash'],
        answer: 0,
        explanation: 'Kanban doskasi ish jarayonidagi tirbandlikni darhol ko‘rish imkonini beradi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri bepul va ochiq kodli (Open-Source) Gantt diagramma dasturidir?',
        options: ['GanttProject', 'Adobe Photoshop', 'CorelDRAW', 'WinRAR'],
        answer: 0,
        explanation: 'GanttProject — Gantt jadvali va PERT tarmoqlarini tuzish uchun mashhur bepul dastur.',
      },
      {
        prompt: 'Loyiha jadvalidagi “Milestone” (Nazora nuqtasi) ning davomiyligi odatda necha kun deb belgilanadi?',
        options: ['0 kun (faqat muhim voqea/marra belgisi)', '365 kun', '100 kun', '50 soat'],
        answer: 0,
        explanation: 'Milestone ish emas, balki muhim bosqich yakunlanganligini bildiruvchi sana nuqtasidir.',
      },
      {
        prompt: 'Bitta jamoa aʼzosiga bir vaqtda uning ish soatidan ko‘p vazifa yuklanib qolishi PM dasturida qanday ataladi?',
        options: ['Over-allocation (Resurs ortiqcha yuklanishi)', 'Defragmentatsiya', 'Encryption', 'BitTorrent'],
        answer: 0,
        explanation: 'PM dasturlari qizil ogohlantirish bilan bir odamga bir kunda juda ko‘p ish tushganini bildiradi.',
      },
      {
        prompt: 'Nima uchun loyiha boshqaruvi dasturlaridan foydalanish elektron pochta orqali boshqarishdan afzal?',
        options: [
          'Barcha vazifa holati, masʼullar, muddatlar va fayllar yagona tartibli joyda ko‘rinadi',
          'Kompyuter protsessorini sovitadi',
          'Internet tezligini 10 baravar oshiradi',
          'Kodlarni avtomatik tarjima qiladi',
        ],
        answer: 0,
        explanation: 'Markazlashgan PM tizimi xabarlar yo‘qolishini oldini oladi va shaffoflik beradi.',
      },
    ],
    teacherNotes: {
      method: 'Ekranda GanttProject yoki Trello namunasini ko‘rsatib, 5 ta o‘quv vazifasini kartochkalarga joylang.',
      timing: 'Dastur turlari 15 daqiqa, Kanban vs Gantt solishtirish 15 daqiqa, o‘yinlar va test 15 daqiqa.',
      assessment: 'O‘quvchi loyiha hajmiga qarab Kanban yoki Gantt vositasini to‘g‘ri tanlay olishi.',
      homework: 'Trello yoki qog‘ozda o‘zingizning 1 haftalik imtihonga tayyorgarlik Kanban doskangizni tuzing.',
    },
  },
  {
    id: 'g11-l39',
    grade: 11,
    no: 39,
    part: '3-chorak',
    title: 'Kritik bosqichlarni tahlil qilish. Gantt diagrammalari',
    kind: 'dars',
    hours: 1,
    tools: ['Loyiha boshqaruvi', 'CPA / PERT / Gantt'],
    objectives: [
      'O‘quvchi **Gantt diagrammasi**ni o‘qiydi (parallel va ketma-ket vazifalar, **Dependency**) hamda loyihaning minimal umumiy vaqtini aniqlaydi.',
      'O‘quvchi **Kritik yo‘l usuli (CPA — Critical Path Analysis)** orqali **Kritik yo‘l** va **Zaxira vaqt (Float / Slack)** ni aniq hisoblaydi.',
    ],
    intro:
      'Agar uyni qurishda devor ko‘tarish 10 kun, tom yopish 5 kun, bir vaqtda deraza buyurtma qilish esa 4 kun olsa, umumiy ish necha kun davom etadi? 19 kun emas — **15 kun**! Buni bizga **Kritik yo‘l (CPA)** va **Gantt diagrammasi** aytib beradi.',
    sections: [
      {
        heading: 'Gantt diagrammasi: Parallel va Ketma-ket vazifalar',
        body: '• **Gantt diagrammasi**: gorizontal o‘qda vaqt (kun/hafta), vertikal o‘qda esa vazifalar joylashgan jadval.\n• **Ketma-ket vazifa (Sequential / Dependent)**: B vazifa faqat A tugagandan keyingina boshlana oladi (masalan, poydevor qurilmasdan devor ko‘tarilmaydi).\n• **Parallel vazifa (Concurrent)**: C vazifa A yoki B bilan bir vaqtda bajarilishi mumkin (masalan, devor qurilayotganda mebel buyurtma qilish) — bu loyihani tezlashtiradi!',
      },
      {
        heading: 'Kritik yo‘l usuli (Critical Path Analysis — CPA) va Float',
        body: '• **Tarmoq diagrammasi (PERT)** da boshlanishdan oxirigacha bir nechta yo‘llar bo‘ladi.\n• **Kritik yo‘l (Critical Path)**: loyiha boshlanishidan tugashigacha bo‘lgan **ENG UZUN** yo‘ldir! Aynan shu yo‘l loyihaning minimal yakunlanish muddatini belgilaydi.\n• **Kritik vazifa**: agar kritik yo‘ldagi birorta vazifa 1 kunga kechiksa, BUTUN loyiha 1 kunga kechikadi (uning zaxira vaqti **Float = 0**).\n• **Float (Slack / Zaxira vaqt)**: kritik bo‘lmagan vazifani butun loyihani kechiktirmasdan kechiktirish mumkin bo‘lgan maksimal vaqt: `Float = Eng kech tugash (LF) - Eng erta tugash (EF)` yoki `(Kritik yo‘l - Shu yo‘l)`.',
        example: '1-yo‘l: A(4 kun) → B(6 kun) = 10 kun. 2-yo‘l: C(3 kun) → D(4 kun) = 7 kun. Kritik yo‘l = 1-yo‘l (10 kun, Float=0). 2-yo‘lning zaxira vaqti (Float) = 10 - 7 = 3 kun!',
      },
    ],
    keyTerms: [
      { term: 'Gantt diagrammasi', definition: 'Vazifalar davomiyligi, muddatlari va bog‘liqligini vaqt shkalasida ko‘rsatuvchi gorizontal grafik.' },
      { term: 'Kritik yo‘l (Critical Path)', definition: 'Loyiha tarmoq grafimidagi eng uzun yo‘l bo‘lib, loyihaning minimal umumiy vaqtini belgilaydi.' },
      { term: 'Float (Slack)', definition: 'Kritik bo‘lmagan vazifaning butun loyihani kechiktirmasdan surilishi mumkin bo‘lgan zaxira vaqti.' },
      { term: 'Dependency (Bog‘liqlik)', definition: 'Bir vazifaning boshlanishi yoki tugashi boshqa vazifaga bog‘liq bo‘lish qoidasi.' },
    ],
    steps: [
      '1. Barcha mumkin bo‘lgan yo‘llarning umumiy kunlarini qo‘shib chiqing.',
      '2. Eng katta yig‘indi — bu Kritik yo‘l (Float = 0).',
      '3. Quyidagi CPA kalkulyatori va ketma-ketlik mashqini bajaring.',
    ],
    practice: [
      {
        task: 'Loyihada 2 parallel tarmoq bor: Yuqori tarmoq: A(5 kun) → B(8 kun) → E(2 kun). Pastki tarmoq: C(6 kun) → D(5 kun) → E(2 kun). Kritik yo‘l necha kun va C/D tarmog‘ida necha kun Float bor?',
        expected: 'Yuqori yo‘l: 5+8+2 = 15 kun (Kritik yo‘l). Pastki yo‘l: 6+5+2 = 13 kun. C/D tarmog‘ida Float = 15 - 13 = 2 kun.',
        difficulty: 'orta',
      },
    ],
    games: [
      {
        id: 'g11-l39-g1',
        num: '01',
        title: 'Kritik yo‘lni hisoblang (CPA)',
        topic: 'Kritik yo‘l tahlili',
        difficulty: 'Qiyin',
        engine: 'calc',
        config: {
          prompt: 'Veb-sayt loyihasida 2 ta parallel yo‘l bor:\n• 1-yo‘l: Talablar (3 kun) → Backend API (9 kun) → Sinov (4 kun)\n• 2-yo‘l: Talablar (3 kun) → UI Dizayn (5 kun) → Matnlar (2 kun) → Sinov (4 kun)\nButun loyihani yakunlash uchun minimal necha kun kerak (Kritik yo‘l)?',
          unit: 'kun',
          correctAnswer: 16,
          tolerance: 0,
          steps: [
            '1-yo‘l davomiyligi: 3 + 9 + 4 = 16 kun',
            '2-yo‘l davomiyligi: 3 + 5 + 2 + 4 = 14 kun',
            'Kritik yo‘l = ikki yo‘lning eng uzuni = max(16, 14) = 16 kun (2-yo‘lning Float = 2 kun)',
          ],
          hint: 'Ehtiyot bo‘ling: Kritik yo‘l — ENG QISQA emas, balki barcha ishlar bitishi uchun zarur bo‘lgan ENG UZUN yo‘ldir!',
        },
      },
      {
        id: 'g11-l39-g2',
        num: '02',
        title: 'Gantt va CPA tushunchalari',
        topic: 'Jadval tahlili',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Kritik yo‘l va Gantt diagrammasi haqidagi fikrlarni baholang:',
          statements: [
            {
              text: 'Kritik yo‘ldagi har bir vazifaning zaxira vaqti (Float) nolga teng.',
              isTrue: true,
              explanation: 'To‘g‘ri! Shu sababli kritik vazifa 1 kun kechiksa, butun loyiha kechikadi.',
            },
            {
              text: 'Loyihani tezlashtirish uchun hech narsani parallel qilmasdan barcha vazifalarni birin-ketin bajarish kerak.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Mustaqil vazifalarni parallel bajarish umumiy muddatni keskin qisqartiradi.',
            },
            {
              text: 'Float vaqti 4 kun bo‘lgan vazifa 2 kun kechiksa, loyihaning yakuniy muddati o‘zgarmaydi.',
              isTrue: true,
              explanation: 'To‘g‘ri! 2 kun zaxira (Float = 4) ichida bo‘lgani uchun umumiy muddat buzilmaydi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Loyihaning minimal yakunlanish muddatini qaysi yo‘l belgilaydi?',
        options: [
          'Tarmoq diagrammasidagi eng qisqa yo‘l',
          'Kritik yo‘l — boshidan oxirigacha bo‘lgan eng uzun yo‘l',
          'Eng kam odam ishlaydigan yo‘l',
          'Birinchi boshlangan vazifa',
        ],
        answer: 1,
        explanation: 'Barcha tarmoqlar tugamaguncha loyiha bitmaydi, shuning uchun eng uzun zanjir umumiy vaqtni belgilaydi.',
      },
      {
        prompt: 'Kritik bo‘lmagan vazifaning “Float = 5 kun” bo‘lsa, u 3 kun kechiksa nima bo‘ladi?',
        options: [
          'Butun loyiha 3 kun kechikadi',
          'Butun loyiha 8 kun kechikadi',
          'Loyihaning umumiy tugash sanasi o‘zgarmaydi (zaxira hisobidan qoplanadi)',
          'Loyiha darhol bekor qilinadi',
        ],
        answer: 2,
        explanation: 'Kechikish (3 kun) mavjud zaxira vaqtdan (5 kun) oshmagani uchun umumiy muddatga taʼsir qilmaydi.',
      },
      {
        prompt: 'Gantt diagrammasida bir nechta chiziqning vertikal ustma-ust (bir xil sanalarda) joylashishi nimani bildiradi?',
        options: [
          'Vazifalar parallel (bir vaqtda) bajarilmoqda',
          'Dastur xato chizgan',
          'Hech kim ishlamayapti',
          'Loyiha tugagan',
        ],
        answer: 0,
        explanation: 'Bir xil kun ustunlarida joylashgan chiziqlar parallel ishlarni ko‘rsatadi.',
      },
      {
        prompt: 'Agar 2 ta parallel yo‘lning davomiyligi 18 kun va 12 kun bo‘lsa, qisqa yo‘ldagi Float (zaxira vaqt) necha kun?',
        options: ['30 kun', '6 kun', '18 kun', '0 kun'],
        answer: 1,
        explanation: 'Float = 18 - 12 = 6 kun.',
      },
      {
        prompt: 'Loyihani muddatidan oldin tugatish (“Crashing”) uchun menejer qo‘shimcha xodimlarni qaysi vazifalarga yo‘naltirishi kerak?',
        options: [
          'Float = 10 kun bo‘lgan vazifalarga',
          'Kritik yo‘ldagi (Float = 0) vazifalarga',
          'Yakunlanib bo‘lgan vazifalarga',
          'Tasodifiy vazifalarga',
        ],
        answer: 1,
        explanation: 'Faqat Kritik yo‘ldagi vazifalarni qisqartirish umumiy loyiha vaqtini qisqartira oladi!',
      },
    ],
    teacherNotes: {
      method: 'Choy damlash va nonushta tayyorlash (suv qaynatish, non kesish, dasturxon tuzash) misolida PERT va Kritik yo‘lni chizing.',
      timing: 'Gantt 10 daqiqa, PERT & Kritik yo‘l hisobi 20 daqiqa, amaliy masala va test 15 daqiqa.',
      assessment: 'O‘quvchi 2–3 tarmoqli grafikdan Kritik yo‘l va Float ni xatosiz topishi.',
      homework: '5 ta vazifali oddiy “Maktab tadbiri” uchun Gantt chizmasini daftarga chizib kelish.',
    },
  },
  {
    id: 'g11-l40',
    grade: 11,
    no: 40,
    part: '3-chorak',
    title: 'Amaliy mashg‘ulot',
    kind: 'amaliy',
    hours: 1,
    tools: ['Loyiha boshqaruvi', 'GanttProject / WBS / CPA'],
    objectives: [
      'O‘quvchi amaliyotda **Work Breakdown Structure (WBS)** tuzib, vazifalar bog‘liqligini belgilaydi va **Gantt diagrammasi** hamda **Kritik yo‘l** hisob-kitobini bajaradi.',
      'O‘quvchi loyihada muddat o‘zgarishi (kechikish ssenariysi) yuz berganda zaxira vaqtdan foydalanish qarorini qabul qiladi.',
    ],
    intro:
      'Nazariyani amaliyotga ko‘chiramiz! Bugungi amaliy mashg‘ulotda siz **IT loyiha menejeri** sifatida mobil ilova yaratish jadvalini yig‘asiz, bog‘liqliklarni qo‘yasiz va kritik nuqtalarni tekshirasiz.',
    sections: [
      {
        heading: 'Amaliy topshiriq: “Elektron kundalik” ilovasi jadvali',
        body: 'Quyidagi vazifalar jadvali berilgan (har bir qator — WBS elementi):\n• **A (2 kun)**: Texnik topshiriq yozish (Boshlang‘ich)\n• **B (4 kun)**: Maʼlumotlar bazasi sxemasi (Bog‘liq: `A`)\n• **C (5 kun)**: UI/UX Dizayn chizish (Bog‘liq: `A`)\n• **D (6 kun)**: Backend API yozish (Bog‘liq: `B`)\n• **E (4 kun)**: Mobil ekranlarni yasash (Bog‘liq: `C`)\n• **F (3 kun)**: Umumiy test va ishga tushirish (Bog‘liq: `D` va `E`)',
      },
      {
        heading: 'Tahlil qadamlarining natijasi',
        body: '1. `A` (2 kun) hammadan oldin bajariladi.\n2. Undan so‘ng 2 ta parallel tarmoq boshlanadi:\n   • **1-tarmoq (Backend)**: `B (4) + D (6) = 10 kun`\n   • **2-tarmoq (Frontend/UI)**: `C (5) + E (4) = 9 kun`\n3. Ikkala tarmoq tugagach `F (3 kun)` boshlanadi.\n4. **Kritik yo‘l**: `A → B → D → F = 2 + 4 + 6 + 3 = 15 kun`!\n5. **2-tarmoq (C va E)** ning zaxira vaqti: `10 - 9 = 1 kun`.',
        tip: 'GanttProject dasturida har bir vazifaga `Predecessors` (Oldingi vazifa) ustunini kiritganingizda dastur kritik yo‘lni avtomatik qizil rangda ajratib beradi!',
      },
    ],
    keyTerms: [
      { term: 'WBS (Work Breakdown Structure)', definition: 'Yirik loyihani kichik, boshqariladigan vazifa va ish paketlariga bo‘lish iyerarxiyasi.' },
      { term: 'Predecessor (Oldingi vazifa)', definition: 'Joriy vazifa boshlanishi uchun tugallangan bo‘lishi shart bo‘lgan bog‘liq vazifa.' },
    ],
    steps: [
      '1. `A → B → D → F` va `A → C → E → F` zanjirlarini qog‘ozga yoki GanttProject ga kiriting.',
      '2. Agar `C (UI Dizayn)` 2 kunga kechiksa, umumiy loyiha necha kunga cho‘zilishini tekshiring (Float=1 kun bo‘lgani uchun +1 kun kechikadi!).',
      '3. Quyidagi amaliy mashqlar va testni bajaring.',
    ],
    practice: [
      {
        task: 'Yuqoridagi “Elektron kundalik” loyihasida agar UI Dizayn (C) 1 kunga kechiksa, umumiy topshirish muddati 15 kundan oshib ketadimi?',
        expected: 'Yo‘q! Chunki 2-tarmoqda (C+E = 9 kun) 1-tarmoqqa (B+D = 10 kun) nisbatan 1 kun zaxira (Float) bor. 1 kunlik kechikish 15 kunlik umumiy muddatni buzmaydi.',
        difficulty: 'orta',
      },
    ],
    games: [
      {
        id: 'g11-l40-g1',
        num: '01',
        title: 'Amaliy loyihani tartiblang',
        topic: 'WBS bog‘liqligi',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Dasturiy taʼminot loyihasidagi texnologik bog‘liqlik ketma-ketligini to‘g‘ri qo‘ying:',
          items: [
            'A. Buyurtmachi bilan talablarni yig‘ish (TZ)',
            'B. Maʼlumotlar bazasi jadvallari (ER) va UI maketini chizish',
            'C. Backend va Frontend kodini yozish',
            'D. Integratsiya va qora/oq quti sinovlari (Testing)',
            'E. Tayyor tizimni serverga o‘rnatish (Deployment)',
          ],
          hint: 'Avval talablar, keyin loyihalash, so‘ng kodlash, sinov va oxirida o‘rnatish.',
        },
      },
      {
        id: 'g11-l40-g2',
        num: '02',
        title: 'Kechikish taʼsirini hisoblang',
        topic: 'Float tahlili',
        difficulty: 'Qiyin',
        engine: 'calc',
        config: {
          prompt: 'Yuqoridagi “Elektron kundalik” loyihasida Kritik yo‘l 15 kun (A=2, B=4, D=6, F=3). Ikkinchi tarmoq C(5)+E(4)=9 kun. Agar UI Dizayn (C) 3 kunga kechikib 8 kun davom etsa, BUTUN loyiha jami necha kunda tugaydi?',
          unit: 'kun',
          correctAnswer: 17,
          tolerance: 0,
          steps: [
            '1-tarmoq (B+D): 4 + 6 = 10 kun',
            '2-tarmoq yangi vaqti (C_yangi+E): (5 + 3) + 4 = 12 kun (Endi 2-tarmoq Kritik yo‘lga aylandi!)',
            'Umumiy yangi muddat: A(2) + 12 + F(3) = 17 kun!',
          ],
          hint: 'C endi 8 kun, demak C+E = 12 kun bo‘lib B+D (10 kun) dan oshib ketdi. A(2) + max(10, 12) + F(3) ni hisoblang.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'WBS (Work Breakdown Structure) nima maqsadda tuziladi?',
        options: [
          'Katta va murakkab loyihani kichik, o‘lchanadigan va taqsimlanadigan vazifalarga bo‘lish uchun',
          'Kompyuter ekranini qoraytirish uchun',
          'Tarmoq kabellarini ranglash uchun',
          'Fayllarni ZIP arxivlash uchun',
        ],
        answer: 0,
        explanation: 'WBS — loyihadagi barcha ishlarni iyerarxik ro‘yxatga ajratib, hech bir ish qolib ketmasligini taʼminlaydi.',
      },
      {
        prompt: 'GanttProject da `Predecessors` (Oldingi vazifa) ustuniga raqam kiritish nimani bildiradi?',
        options: [
          'Vazifa narxini',
          'Joriy vazifa boshlanishi uchun avval qaysi vazifa tugashi shartligini (Dependency)',
          'Xodim telefon raqamini',
          'Fayl kengaytmasini',
        ],
        answer: 1,
        explanation: 'Predecessor vazifalar orasidagi mantiqiy bog‘liqlikni belgilaydi.',
      },
      {
        prompt: 'Kritik bo‘lmagan vazifa o‘zining zaxira vaqti (Float) dan KO‘PROQ muddatga kechiksa nima sodir bo‘ladi?',
        options: [
          'Hech narsa o‘zgarmaydi',
          'U Kritik yo‘lga aylanib, butun loyihaning yakunlanish muddatini kechiktiradi',
          'Barcha qolgan vazifalar avtomatik tezlashadi',
          'Byudjet ikki baravar kamayadi',
        ],
        answer: 1,
        explanation: 'Float tugagach, har bir ortiqcha kechikish loyiha yakunini suradi.',
      },
      {
        prompt: 'Bir xil loyihada `D` vazifasi ham `B`, ham `C` ga bog‘liq bo‘lsa, `D` qachon boshlana oladi?',
        options: [
          'Faqat `B` tugagach',
          '`B` va `C` ning IKKALASI ham to‘liq tugagandan keyingina',
          '`A` boshlanmasdan turib',
          '`F` tugagach',
        ],
        answer: 1,
        explanation: 'Ikkala oldingi shart bajarilmaguncha bog‘liq vazifa boshlanmaydi.',
      },
      {
        prompt: 'Gantt diagrammasida odatda qizil rang bilan qaysi chiziqlar ajratib ko‘rsatiladi?',
        options: [
          'Eng arzon vazifalar',
          'Kritik yo‘ldagi (Float = 0) vazifalar',
          'Bekor qilingan vazifalar',
          'Dam olish kunlari',
        ],
        answer: 1,
        explanation: 'Qizil rang menejerga “Bu vazifa 1 kun ham kechikmasligi kerak!” degan ogohlantirish beradi.',
      },
    ],
    teacherNotes: {
      method: 'Kompyuterda GanttProject (yoki elektron jadvalda Gantt shabloni) orqali amaliy jadvalni yig‘diring.',
      timing: 'Topshiriq tushuntirish 10 daqiqa, amaliy jadval yig‘ish 25 daqiqa, tahlil va test 10 daqiqa.',
      assessment: 'Bog‘liqliklar to‘g‘ri qo‘yilgani va kechikish holatida yangi kritik yo‘lni topa olishi.',
      homework: 'Amaliy jadvalga qo‘shimcha “Hujjatlashtirish (2 kun)” vazifasini F dan oldin ulab, yangi muddatni hisoblash.',
    },
  },
  {
    id: 'g11-l41',
    grade: 11,
    no: 41,
    part: '3-chorak',
    title: 'Avariya/falokatdan keyingi tiklanishni boshqarish',
    kind: 'dars',
    hours: 1,
    tools: ['Xavfsizlik', 'DRP / RPO / RTO / 3-2-1 Backup'],
    objectives: [
      'O‘quvchi **Avariyadan keyingi tiklanish rejasi (DRP — Disaster Recovery Plan)** va uning ikki asosiy o‘lchovi — **RTO** hamda **RPO** ni tushunadi.',
      'O‘quvchi zaxiralashning **3-2-1 qoidasi**, **Full / Incremental / Differential** nusxalar hamda **Cold, Warm, Hot Site** zaxira markazlarini solishtiradi.',
    ],
    intro:
      'Yong‘in, zilzila, elektr tarmog‘idagi yirik uzilish yoki Ransomware hujumi natijasida kompaniya serverxonasi ishdan chiqdi. Biznes bir soat to‘xtasa ham millionlab zarar ko‘radi. Mana shunday paytda oldindan tayyorlangan **Disaster Recovery (Tiklanish rejasi)** hayotni saqlab qoladi!',
    sections: [
      {
        heading: 'DRP ning ikki oltin ko‘rsatkichi: RTO va RPO',
        body: '• **RTO (Recovery Time Objective — Tiklanish vaqti maqsadi)**: avariyadan keyin tizim *qancha vaqt ichida* qayta ishga tushishi shart? (Masalan, bank ilovasi uchun `RTO = 15 daqiqa`, maktab arxivi uchun `RTO = 24 soat`).\n• **RPO (Recovery Point Objective — Yo‘qotish nuqtasi maqsadi)**: kompaniya eng ko‘pi bilan *qancha vaqtlik* maʼlumotni yo‘qotishga chiday oladi? Bu zaxira nusxa olish tezligini belgilaydi (masalan, agar `RPO = 1 soat` bo‘lsa, har soatda backup olinishi shart!).',
      },
      {
        heading: 'Zaxira nusxa (3-2-1 qoidasi) va Zaxira markazlari (Cold/Warm/Hot)',
        body: '• **3-2-1 zaxira qoidasi**: **3** ta nusxa saqlang, **2** xil tashuvchida (masalan, server diski + NAS/tasma), **1** tasi albatta boshqa joyda/bulutda (**Off-site**) bo‘lsin!\n• **Backup turlari**: *Full* (to‘liq, sekin lekin tez tiklanadi), *Incremental* (oxirgi backup dan keyingi o‘zgarishlar — tez yoziladi, sekin tiklanadi), *Differential* (oxirgi Full dan keyingi barcha o‘zgarishlar).\n• **Zaxira maydonchalari**:\n  - **Cold Site**: faqat bino/elektr/internet bor, serverlar yo‘q (eng arzon, tiklanish haftalab vaqt oladi).\n  - **Warm Site**: serverlar bor, lekin oxirgi maʼlumotlar bilan yangilanishi kerak (tiklanish soatlar/kunlar).\n  - **Hot Site**: asosiy serverning real vaqtdagi oynasi (eng qimmat, tiklanish soniyalar/daqiqalar!).',
        tip: 'Sinovdan o‘tkazilmagan backup — yo‘q backup demakdir! DRP rejasini yilda kamida 1–2 marta sinab ko‘rish shart.',
      },
    ],
    keyTerms: [
      { term: 'RTO (Recovery Time Objective)', definition: 'Favqulodda vaziyatdan so‘ng tizim faoliyatini qayta tiklash uchun ruxsat etilgan maksimal vaqt.' },
      { term: 'RPO (Recovery Point Objective)', definition: 'Avariya paytida yo‘qolishi mumkin bo‘lgan maʼlumotlarning maksimal vaqt oralig‘i (backup chastotasi).' },
      { term: 'Hot Site', definition: 'Asosiy tizim bilan bir vaqtda real rejimda sinxronlashib turadigan, darhol ishga tushuvchi zaxira markazi.' },
      { term: '3-2-1 Backup qoidasi', definition: '3 ta nusxa, 2 xil saqlash muhiti, 1 ta geografik jihatdan alohida (off-site) nusxa.' },
    ],
    steps: [
      '1. RTO (vaqt bo‘yicha to‘xtab qolish) va RPO (maʼlumot yo‘qolishi) farqini eslab qoling.',
      '2. Bank vs Kichik blog uchun Cold, Warm yoki Hot Site dan qay biri maqsadga muvofiq ekanini baholang.',
      '3. Quyidagi moslashtirish va Case Study mashqlarini bajaring.',
    ],
    practice: [
      {
        task: 'Agar korxona har kuni kechasi soat 00:00 da backup olsa va server soat 14:00 da yonsa, necha soatlik maʼlumot yo‘qoladi (RPO)?',
        expected: '00:00 dan 14:00 gacha bo‘lgan 14 soatlik yangi maʼlumot yo‘qoladi. Agar RPO = 1 soat kerak bo‘lsa, har soatda snapshot olish shart.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l41-g1',
        num: '01',
        title: 'Tiklanish strategiyalarini moslang',
        topic: 'DRP atamalari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'DRP tushunchalarini ularning aniq taʼrifi bilan bog‘lang:',
          pairs: [
            { left: 'RTO', right: 'Tizim uzilib qolgandan keyin ishga qaytishi uchun ruxsat etilgan maksimal vaqt' },
            { left: 'RPO', right: 'Avariyada yo‘qolishi mumkin bo‘lgan maksimal maʼlumot davri (backup oralig‘i)' },
            { left: 'Hot Site', right: 'Real vaqtda sinxronlangan, soniyalarda ishga tushuvchi zaxira markazi' },
            { left: 'Cold Site', right: 'Faqat jihozlanmagan bo‘sh bino va aloqa liniyasi (arzon, lekin sekin)' },
          ],
        },
      },
      {
        id: 'g11-l41-g2',
        num: '02',
        title: '3-2-1 qoidasi va Backup turlari',
        topic: 'Zaxiralash',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Zaxiralash va tiklanish haqidagi fikrlarni tekshiring:',
          statements: [
            {
              text: 'Barcha 3 ta zaxira nusxani bitta server xonasidagi javonda saqlash 3-2-1 qoidasiga to‘liq javob beradi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Yong‘in yoki suv toshqinida bitta xonadagi hammasi yonib ketadi — kamida 1 nusxa boshqa joyda (off-site) bo‘lishi shart.',
            },
            {
              text: 'Hot Site eng qimmat yechim bo‘lsa-da, RTO si nolga yaqin (darhol tiklanish) bo‘lgan tizimlar uchun zarur.',
              isTrue: true,
              explanation: 'To‘g‘ri! Masalan, aviatsiya boshqaruvi yoki to‘lov tizimlari bir daqiqa ham to‘xtay olmaydi.',
            },
            {
              text: 'DRP (Disaster Recovery Plan) faqat texnik xodimlar uchun yoziladi va hech qachon mashq qilinmaydi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! DRP da kim kimga qo‘ng‘iroq qilishi yoziladi va muntazam sinov mashqlari o‘tkazilishi kerak.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '“Tizim avariyadan keyin ko‘pi bilan 30 daqiqa ichida ishga tushishi shart” talabi nimani bildiradi?',
        options: ['RTO = 30 daqiqa', 'RPO = 30 daqiqa', 'Bandwidth = 30 Mbps', 'Float = 30 kun'],
        answer: 0,
        explanation: 'RTO (Recovery Time Objective) — tizimning qayta ishga tushish vaqti maqsadi.',
      },
      {
        prompt: '3-2-1 zaxiralash qoidasidagi “1” raqami nimani anglatadi?',
        options: [
          '1 ta parol',
          'Kamida 1 ta zaxira nusxa geografik jihatdan boshqa joyda (off-site/bulutda) saqlanishi kerak',
          'Faqat 1 marta zaxira olish',
          '1 MB hajm',
        ],
        answer: 1,
        explanation: '3 nusxa, 2 xil tashuvchi, 1 tasi boshqa manzilda (yong‘in/o‘g‘rilikdan himoya).',
      },
      {
        prompt: 'Qaysi zaxira markazi turi eng arzon, lekin jihozlarni olib kelib o‘rnatish uchun haftalar talab qiladi?',
        options: ['Hot Site', 'Warm Site', 'Cold Site', 'Cloud Mirror'],
        answer: 2,
        explanation: 'Cold Site faqat elektr va internet ulangan bo‘sh xona bo‘lib, serverlar o‘rnatilmagan.',
      },
      {
        prompt: 'Agar kompaniya RPO = 0 (birorta ham tranzaksiya yo‘qolmasin) talab qilsa, qanday usul qo‘llanadi?',
        options: [
          'Oyiga bir marta fleshkaga ko‘chirish',
          'Real vaqtli sinxron replikatsiya (Synchronous Replication)',
          'Faqat qog‘ozga chop etish',
          'Cold Site dan foydalanish',
        ],
        answer: 1,
        explanation: 'Har bir yozuv bir vaqtda ikkinchi serverga ham yozilsagina RPO = 0 ga yaqinlashadi.',
      },
      {
        prompt: 'Tiklash tezligi eng TEZ bo‘ladigan backup turi qaysi (lekin saqlashda ko‘p joy oladi)?',
        options: ['Full Backup (To‘liq nusxa)', 'Incremental Backup', 'Faqat matnli log', 'Zip kesh'],
        answer: 0,
        explanation: 'Full Backup da barcha fayllar bitta arxivda tayyor turadi, qo‘shimcha bo‘laklarni yig‘ish shart emas.',
      },
    ],
    teacherNotes: {
      method: 'RTO (vaqt o‘qi oldinga) va RPO (vaqt o‘qi avariyadan orqaga) ni doskada bitta chizmada ko‘rsating.',
      timing: 'RTO/RPO 15 daqiqa, 3-2-1 va Sites 15 daqiqa, mashqlar va test 15 daqiqa.',
      assessment: 'O‘quvchi turli sohalarga (bank, maktab, do‘kon) mos RTO/RPO va Site tanlay olishi.',
      homework: 'O‘z shaxsiy hujjatlaringiz/loyihalaringiz uchun 3-2-1 zaxira rejasini tuzing.',
    },
  },
  {
    id: 'g11-l42',
    grade: 11,
    no: 42,
    part: '3-chorak',
    title: 'Prototiplash',
    kind: 'dars',
    hours: 1,
    tools: ['SDLC', 'Figma / Penpot / Prototip'],
    objectives: [
      'O‘quvchi **Prototiplash (Prototyping)** usulining dasturiy taʼminot yaratishdagi (SDLC) o‘rni, afzalliklari va kamchiliklarini tushunadi.',
      'O‘quvchi **Low-Fidelity (qog‘oz/wireframe)** vs **High-Fidelity (interaktiv)** prototiplarni hamda **Throwaway (tashlab yuboriladigan)** vs **Evolutionary (rivojlantiriladigan)** modellarni farqlaydi.',
    ],
    intro:
      'Million dollarlik dasturni 6 oy kodlab, keyin mijoz “Men umuman boshqacha interfeys xohlagandim!” desa nima bo‘ladi? Buning oldini olish uchun kod yozishdan oldin **Prototip (dastlabki ko‘rinadigan namuna)** yaratiladi!',
    sections: [
      {
        heading: 'Prototip turlari: Aniqlik darajasiga ko‘ra',
        body: '• **Low-Fidelity (Past aniqlikdagi / Wireframe)**: Qog‘ozda qalam bilan chizilgan eskiz yoki oddiy kulrang katakli sxema (**Balsamiq, Penpot, qog‘oz**). Juda tez (15 daqiqa) va arzon; tugmalar va bloklar joylashuvini tekshirish uchun.\n• **High-Fidelity (Yuqori aniqlikdagi interaktiv)**: Haqiqiy ranglar, shriftlar, rasmlar va bosiladigan o‘tishlarga ega raqamli maket (**Figma, Penpot — ochiq kodli**). Mijoz xuddi tayyor ilovani bosgandek his qiladi!',
      },
      {
        heading: 'Throwaway vs Evolutionary prototiplash',
        body: '• **Throwaway (Rapid / Tashlab yuboriladigan) prototip**: Faqat mijozning fikrini olish va talablarni aniqlashtirish uchun tez yasaladi, so‘ngra tashlab yuboriladi va haqiqiy tizim noldan sifatli arxitektura bilan kodlanadi.\n• **Evolutionary (Evolyutsion / Rivojlantiriladigan) prototip**: Ishlaydigan dastlabki versiya yasaladi va mijoz fikri asosida takomillashtirilib, oxiri **tayyor mahsulotga** aylanadi.\n• **Afzalliklari**: Xatolar erta aniqlanadi, mijoz ishtiroki yuqori, o‘qitish oson.\n• **Kamchiliklari**: Mijoz “Dastur tayyor ekan-ku!” deb shoshilishi mumkin; Throwaway qilinmasa kod sifatsiz bo‘lib qolishi ehtimoli bor.',
      },
    ],
    keyTerms: [
      { term: 'Prototip', definition: 'Kelajakdagi tizimning mijoz bilan fikr almashish uchun yaratilgan dastlabki sinov modeli.' },
      { term: 'Wireframe (Low-Fidelity)', definition: 'Dizayn ranglarisiz, faqat ekran tuzilishi va elementlar o‘rnini ko‘rsatuvchi oddiy eskiz.' },
      { term: 'Throwaway prototip', definition: 'Talablar aniqlashtirilgach tashlab yuborilib, asosiy tizim toza kodda qayta quriladigan model.' },
      { term: 'Evolutionary prototip', definition: 'Fikr-mulohazalar asosida bosqichma-bosqich boyitilib, yakuniy mahsulotga aylanadigan model.' },
    ],
    steps: [
      '1. Low-Fidelity va High-Fidelity prototiplarni qachon ishlatishni ajrating.',
      '2. Throwaway va Evolutionary yondashuvlar farqini tushuning.',
      '3. Quyidagi moslashtirish va ketma-ketlik mashqini bajaring.',
    ],
    practice: [
      {
        task: 'Nima uchun g‘oyaning eng birinchi kunida Figma da murakkab animatsiyalar qilish o‘rniga qog‘ozda Wireframe chizish maʼqul?',
        expected: 'Qog‘ozda o‘zgartirish kiritish bir necha soniya oladi va bepul; mijoz g‘oyani rad etsa, soatlab dizayn mehnati kuyib ketmaydi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l42-g1',
        num: '01',
        title: 'Prototip turlarini moslang',
        topic: 'Prototiplash usullari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir prototip atamasini uning aniq xususiyati bilan bog‘lang:',
          pairs: [
            { left: 'Low-Fidelity (Wireframe)', right: 'Qog‘oz/kulrang kataklarda tez chiziladigan dastlabki struktura eskizi' },
            { left: 'High-Fidelity prototip', right: 'Haqiqiy rang, shrift va bosiladigan tugmalarga ega interaktiv maket' },
            { left: 'Throwaway prototip', right: 'Talablar aniqlangach tashlab yuborilib, tizim noldan toza yoziladi' },
            { left: 'Evolutionary prototip', right: 'Mijoz fikri bilan doimiy yaxshilanib, yakuniy tizimga aylanadi' },
          ],
        },
      },
      {
        id: 'g11-l42-g2',
        num: '02',
        title: 'Prototiplash siklini tartiblang',
        topic: 'Iterativ jarayon',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Prototiplashning takrorlanuvchi (iterativ) siklini to‘g‘ri ketma-ketlikda qo‘ying:',
          items: [
            '1. Dastlabki asosiy talablarni yig‘ish',
            '2. Tezkor prototip (maket) yaratish',
            '3. Foydalanuvchi/mijozga ko‘rsatib sinovdan o‘tkazish',
            '4. Fikr-mulohazalar (Feedback) asosida kamchiliklarni aniqlash',
            '5. Prototipni yangilab qayta kelishish yoki ishlab chiqishga o‘tish',
          ],
          hint: 'Talab → Tez yasash → Ko‘rsatish → Fikr olish → Yaxshilash.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Prototiplashning asosiy maqsadi nima?',
        options: [
          'Dasturni arzonlashtirish uchun server sotib olmaslik',
          'Tizim kodini to‘liq yozishdan oldin mijozga ko‘rinishini ko‘rsatib, talablarni aniq kelishib olish',
          'Foydalanuvchi parollarini shifrlash',
          'Qattiq diskni tozalash',
        ],
        answer: 1,
        explanation: 'Prototip tushunmovchiliklarni eng erta va arzon bosqichda bartaraf etadi.',
      },
      {
        prompt: 'Faqat g‘oya va talablarni tekshirib olish uchun tez yasalib, keyin tashlab yuboriladigan prototip qaysi?',
        options: ['Throwaway (Rapid)', 'Evolutionary', 'Waterfall', 'Compiled'],
        answer: 0,
        explanation: 'Throwaway prototipda kod sifati muhim emas — u faqat g‘oyani ko‘rsatib, keyin o‘chiriladi.',
      },
      {
        prompt: 'Qog‘oz va qalamda chizilgan oddiy ekran sxemasi qaysi toifaga kiradi?',
        options: ['Low-Fidelity (Wireframe)', 'High-Fidelity 3D', 'Beta testing', 'SQL Query'],
        answer: 0,
        explanation: 'Low-Fidelity prototip rang va detallarsiz, faqat joylashuvni ko‘rsatadi.',
      },
      {
        prompt: 'Evolutionary (Evolyutsion) prototipning xavfli tomoni nimada?',
        options: [
          'Shoshilinch tuzilgan dastlabki kod asosida qurilgani uchun keyinchalik arxitektura va xavfsizlikda muammo chiqishi mumkin',
          'Uni hech qachon ishlatib bo‘lmaydi',
          'U faqat qog‘ozda bo‘ladi',
          'Mijozga umuman ko‘rsatilmaydi',
        ],
        answer: 0,
        explanation: 'Tez yasalgan prototipni to‘g‘ridan-to‘g‘ri mahsulotga aylantirishda “texnik qarz” (Technical Debt) to‘planishi mumkin.',
      },
      {
        prompt: 'High-Fidelity interaktiv UI/UX prototiplar yaratish uchun qaysi bepul/ochiq kodli yoki bulutli vositalar ishlatiladi?',
        options: ['Figma yoki Penpot', 'Audacity', 'GanttProject', 'Wireshark'],
        answer: 0,
        explanation: 'Figma va ochiq kodli Penpot — zamonaviy UI/UX prototiplash standartlari.',
      },
    ],
    teacherNotes: {
      method: 'O‘quvchilarga 5 daqiqada qog‘ozga telefon ekrani (Low-Fidelity) chizdiring va bir-biriga “tugma bosish”ni sinatib ko‘ring.',
      timing: 'Nazariya 15 daqiqa, qog‘oz wireframe mashqi 15 daqiqa, o‘yinlar va test 15 daqiqa.',
      assessment: 'O‘quvchi Low/High-Fidelity va Throwaway/Evolutionary farqini misol bilan ayta olishi.',
      homework: 'Penpot yoki Figma da (yoki daftarda) o‘z loyihangizning 3 ta asosiy ekrani Wireframe ini chizish.',
    },
  },
  {
    id: 'g11-l43',
    grade: 11,
    no: 43,
    part: '3-chorak',
    title: 'Kompyuter yordamida dizayn yaratish va ishlab chiqarish',
    kind: 'dars',
    hours: 1,
    tools: ['CAD/CAM', 'FreeCAD / Blender / CNC'],
    objectives: [
      'O‘quvchi **CAD (Computer-Aided Design)** va **CAM (Computer-Aided Manufacturing)** tizimlarining farqini hamda o‘zaro bog‘liqligini (3D model → G-code → CNC/3D printer) tushunadi.',
      'O‘quvchi muhandislikda CAD/CAM ning qo‘llanilishi, afzalliklari (aniqlik, simulyatsiya, ommaviy ishlab chiqarish) va cheklovlarini tahlil qiladi.',
    ],
    intro:
      'Zamonaviy avtomobil detallari, mikrochiplar korpusi yoki tish implantlari qanday yaratiladi? Avval muhandis **CAD** da 3D chizmani yasaydi, so‘ngra **CAM** dasturi uni robot-stanoklar (`CNC`, 3D printer) tushunadigan buyruqlarga aylantirib ishlab chiqaradi!',
    sections: [
      {
        heading: 'CAD (Kompyuter yordamida loyihalash) va imkoniyatlari',
        body: '• **CAD (Computer-Aided Design)**: 2D chizmalar va aniq o‘lchamli 3D modellarni yaratish dasturlari (*AutoCAD, SolidWorks, Fusion 360* hamda ochiq kodli *FreeCAD, LibreCAD*).\n• **Asosiy afzalliklari**:\n  - Millimetrning yuzdan bir qismigacha yuqori aniqlik;\n  - Fizik maket yasamasdan turib kompyuterda **stress, issiqlik va aerodinamika simulyatsiyasi (FEA)** o‘tkazish;\n  - Bir detal o‘zgarsa butun yig‘ma chizma (Assembly) avtomatik yangilanishi (Parametrik modellashtirish).',
      },
      {
        heading: 'CAM (Kompyuter yordamida ishlab chiqarish) va CNC / 3D bosma',
        body: '• **CAM (Computer-Aided Manufacturing)**: CAD da chizilgan 3D modelni olib, stanok asbobining harakat yo‘lini (**Toolpath / G-code**) yaratadigan va ishlab chiqarishni boshqaradigan tizim.\n• **Uskunalar**:\n  - **CNC stanoklar (Subtractive)**: metall/yog‘och blokdan ortiqcha qismlarni kesib/yo‘nib detal yasaydi.\n  - **3D Printer (Additive)**: plastik, smola yoki metall kukunini qatlama-qatlam qo‘shib detal quradi.\n  - **Lazer kesgichlar**: chizma bo‘yicha aniq kesish.\n• **Kamchiliklari**: dasturlar va CNC dastgohlar qimmat, yuqori malakali muhandis-operatorlar talab qiladi, elektr uzilishi ishni to‘xtatadi.',
        tip: 'Oddiy qilib eslang: **CAD** — chizadi va sinaydi (*Design*); **CAM** — stanok orqali yasaydi (*Manufacturing*)!',
      },
    ],
    keyTerms: [
      { term: 'CAD (Computer-Aided Design)', definition: 'Kompyuter yordamida 2D/3D muhandislik chizmalari va modellarini yaratish tizimi.' },
      { term: 'CAM (Computer-Aided Manufacturing)', definition: 'CAD modelini dasturlashtirilgan stanoklar (CNC, 3D printer) uchun buyruqlarga aylantirib ishlab chiqarish.' },
      { term: 'CNC (Computer Numerical Control)', definition: 'Kompyuter bergan raqamli kod (G-code) bo‘yicha avtomatik kesuvchi/ishlov beruvchi dastgoh.' },
      { term: 'Simulyatsiya (FEA)', definition: 'Detal yasalmasdan oldin kompyuterda uning mustahkamligi, bosim va issiqlikka chidamliligini tekshirish.' },
    ],
    steps: [
      '1. CAD (loyihalash) dan CAM (ishlab chiqarish) gacha bo‘lgan ishlab chiqarish zanjirini tartiblang.',
      '2. Subtractive (CNC kesish) va Additive (3D printer qo‘shish) usullarini solishtiring.',
      '3. Quyidagi moslashtirish va krossvord mashqlarini bajaring.',
    ],
    practice: [
      {
        task: 'Samolyot qanotini zavodda metalldan yasashdan oldin nima uchun CAD dasturida aerodinamik va yuklama simulyatsiyasi qilinadi?',
        expected: 'Jismoniy prototip yasash juda qimmat va uzoq vaqt oladi; CAD simulyatsiyasi zaif nuqtalarni ekranda bepul va xavfsiz aniqlashga yordam beradi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l43-g1',
        num: '01',
        title: 'CAD dan tayyor mahsulotgacha',
        topic: 'CAD/CAM zanjiri',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Zamonaviy zavodda detalni yaratish bosqichlarini to‘g‘ri ketma-ketlikda joylashtiring:',
          items: [
            '1. CAD dasturida aniq o‘lchamli 3D model chizish (FreeCAD / SolidWorks)',
            '2. Kompyuterda mustahkamlik va yuklama simulyatsiyasini tekshirish',
            '3. CAM dasturi orqali asbob harakat yo‘lini (G-code) yaratish',
            '4. G-code ni CNC stanok yoki 3D printerga yuklash',
            '5. Tayyor fizik detalni sifat nazoratidan o‘tkazish',
          ],
          hint: 'Avval CAD chizma, keyin simulyatsiya, so‘ng CAM G-code va stanokda ishlab chiqarish.',
        },
      },
      {
        id: 'g11-l43-g2',
        num: '02',
        title: 'CAD/CAM tizimlari krossvordi',
        topic: 'Muhandislik atamalari',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: 'CAD/CAM mavzusiga oid asosiy qisqartma va atamalarni toping:',
          clues: [
            { id: '1', clue: 'Kompyuter yordamida loyihalash (Computer-Aided Design)', answer: 'CAD' },
            { id: '2', clue: 'Kompyuter yordamida ishlab chiqarish (Computer-Aided Manufacturing)', answer: 'CAM' },
            { id: '3', clue: 'Raqamli dasturiy boshqaruvli avtomatik dastgoh', answer: 'CNC' },
            { id: '4', clue: '3D modelni qatlamlab chop etuvchi zamonaviy qurilma (PRINTER so‘zi)', answer: 'PRINTER' },
          ],
          hint: 'Qisqa va aniq inglizcha atamalar: CAD, CAM, CNC, PRINTER.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'CAD va CAM qisqartmalarining to‘g‘ri farqi qaysi?',
        options: [
          'CAD — dizayn/chizma yaratish, CAM — dastgohlar yordamida ishlab chiqarish',
          'CAD — musiqa tahrirlash, CAM — veb-brauzer',
          'Ikkalasi ham faqat matn muharriri',
          'CAM — faqat 2D rasm chizish, CAD — faqat CNC stanok',
        ],
        answer: 0,
        explanation: 'D = Design (Loyihalash), M = Manufacturing (Ishlab chiqarish).',
      },
      {
        prompt: 'Qaysi ishlab chiqarish usuli “qo‘shib boruvchi” (Additive manufacturing) hisoblanadi?',
        options: ['3D printer (qatlamlab chop etish)', 'CNC frezer stanogi (kesib olish)', 'Bolg‘alash', 'Qaychi bilan kesish'],
        answer: 0,
        explanation: '3D printer materialni qatlama-qatlam qo‘shib yasaydi, CNC esa kesib olib tashlaydi (Subtractive).',
      },
      {
        prompt: 'CAM dasturi CNC stanok uchun chiqarib beradigan standart boshqaruv buyruqlar tili qanday ataladi?',
        options: ['G-code', 'HTML', 'SQL', 'MP3'],
        answer: 0,
        explanation: 'G-code stanok boshchasining X, Y, Z o‘qlari bo‘ylab aniq harakat koordinatalarini beradi.',
      },
      {
        prompt: 'Ochiq kodli (Open-Source) bepul 3D parametrik CAD dasturi qaysi?',
        options: ['FreeCAD', 'MS Word', 'Winamp', 'FileZilla'],
        answer: 0,
        explanation: 'FreeCAD — muhandislik 3D modellashtirish uchun mashhur bepul ochiq kodli dastur.',
      },
      {
        prompt: 'CAD tizimlarida “Parametrik modellashtirish” nimani anglatadi?',
        options: [
          'Bitta o‘lcham (masalan, teshik diametri) o‘zgartirilsa, unga bog‘liq qismlar ham avtomatik qayta hisoblanadi',
          'Modelni faqat qora-oq rangda chizish',
          'Har safar hamma narsani noldan chizish',
          'Faqat rastrli piksellar bilan ishlash',
        ],
        answer: 0,
        explanation: 'Parametrik bog‘liqlik chizmani tahrirlashni keskin tezlashtiradi.',
      },
    ],
    teacherNotes: {
      method: 'FreeCAD yoki Tinkercad da oddiy 3D kubik/brelok loyihalab, 3D printer slaysing jarayonini ko‘rsating.',
      timing: 'CAD tushunchalari 15 daqiqa, CAM/CNC/3D bosma 15 daqiqa, o‘yinlar va test 15 daqiqa.',
      assessment: 'O‘quvchi CAD va CAM rollarini hamda Additive vs Subtractive farqini ayta olishi.',
      homework: 'O‘z mahallangizdagi ishlab chiqarishda (mebel, avto, reklama) CNC yoki lazer kesgich qanday qo‘llanilishini yozing.',
    },
  },
];
