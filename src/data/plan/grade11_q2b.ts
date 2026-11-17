import type { Lesson } from './types';

export const GRADE_11_Q2B: Lesson[] = [
  {
    id: 'g11-l26',
    grade: 11,
    no: 26,
    part: '2-chorak',
    title: 'Kompyuter tarmoqlari komponentlari',
    kind: 'dars',
    hours: 1,
    tools: ['Tarmoq', 'NIC / Switch / Router / Modem'],
    objectives: [
      'O‘quvchi kompyuter tarmog‘ining asosiy apparat komponentlari: **NIC (Tarmoq kartasi)**, **MAC-manzil**, **Repeater / Hub**, **Switch**, **Router** va **Modem** vazifalarini aniq farqlaydi.',
      'O‘quvchi nima uchun zamonaviy LAN tarmoqlarida **Hub** o‘rniga **Switch** ishlatilishini (unicast vs broadcast, kolliziyalar) tushunadi.',
    ],
    intro:
      'Kompyuteringiz yuborgan xabar uydan Tokio serveriga qanday adashmay yetib boradi? Yo‘lda har bir qurilma — **NIC**, **Switch**, **Router** va **Modem** o‘z aniq vazifasini bajaradi!',
    sections: [
      {
        heading: 'NIC, Hub va Switch (Ichki LAN qurilmalari)',
        body: '• **NIC (Network Interface Card)**: kompyuterni tarmoqqa ulovchi karta (kabel `RJ-45` yoki Wi-Fi). Har bir NIC zavodda beriladigan noyob 48-bitli **MAC-manzilga** (`00:1A:2B:3C:4D:5E`) ega!\n• **Hub (Konsentrator)**: eskirgan qurilma — kelgan paketni barcha portlarga ko‘r-ko‘rona tarqatadi (Broadcast), natijada tarmoq sekinlashadi va maʼlumot begonalarga ham ko‘rinadi.\n• **Switch (Kommutator)**: aqlli LAN qurilmasi! U har bir portga ulangan qurilmaning **MAC-manzilini o‘rganib (MAC Table)**, paketni *faqat kerakli manzil portiga* jo‘natadi — tez va xavfsiz!',
        example: 'Hub barcha xonalarga baqirib gapirishga o‘xshaydi, Switch esa faqat kerakli odamning telefoniga qo‘ng‘iroq qilishdek ishlaydi.',
      },
      {
        heading: 'Router, Modem va Repeater',
        body: '• **Router (Marshrutizator)**: turli tarmoqlarni (masalan, maktab LAN ni Internet WAN bilan) bog‘laydi va **IP-manzil** asosida eng qisqa/tez yo‘lni tanlab paketlarni yo‘naltiradi.\n• **Modem (Modulator–Demodulator)**: kompyuterning raqamli signalini telefon/kabel/optik liniya analog signaliga va aksincha aylantirib, Internet Provayder (ISP) ga ulaydi.\n• **Repeater (Takrorlagich)**: kabelda uzoq masofada susaygan signalni kuchaytirib uzaytiradi.',
        tip: 'Switch — **MAC-manzil** bilan bitta LAN ichida; Router — **IP-manzil** bilan tarmoqlar o‘rtasida ishlaydi!',
      },
    ],
    keyTerms: [
      { term: 'NIC (Tarmoq kartasi)', definition: 'Qurilmani tarmoqqa ulovchi, noyob MAC-manzilga ega apparat interfeysi.' },
      { term: 'Switch', definition: 'MAC-manzillar jadvali orqali LAN ichida paketni faqat kerakli qurilmaga uzatuvchi qurilma.' },
      { term: 'Router', definition: 'Turli tarmoqlarni birlashtirib, IP-manzillar bo‘yicha maʼlumot yo‘lini tanlovchi marshrutizator.' },
      { term: 'Modem', definition: 'Raqamli va analog/aloqa liniyasi signallarini o‘zaro aylantiruvchi (Modulate/Demodulate) qurilma.' },
    ],
    steps: [
      '1. Hub va Switch o‘rtasidagi xavfsizlik hamda tezlik farqini tushuning.',
      '2. Switch (MAC) va Router (IP) qayerda turishini ajrating.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Sinfdagi 20 ta kompyuterni bog‘lashda Hub o‘rniga Switch ishlatish nima uchun trafikni tezlashtiradi?',
        expected: 'Hub bitta paketni hamma 20 ta kompyuterga yuborib to‘qnashuv (kolliziya) chiqaradi; Switch esa MAC-jadval yordamida paketni faqat oluvchi portga yuboradi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l26-g1',
        num: '01',
        title: 'Tarmoq komponentlari vazifasi',
        topic: 'Tarmoq apparatlari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir tarmoq qurilmasini uning aniq vazifasiga bog‘lang:',
          pairs: [
            { left: 'Switch', right: 'MAC-manzil asosida paketni faqat kerakli LAN portiga yo‘naltiradi' },
            { left: 'Router', right: 'IP-manzil bo‘yicha LAN va WAN (Internet) tarmoqlarini bog‘laydi' },
            { left: 'Modem', right: 'Raqamli signalni aloqa liniyasi signaliga aylantiradi (Mod/Demod)' },
            { left: 'NIC', right: 'Kompyuterni tarmoqqa ulovchi va noyob MAC-manzil saqlovchi plata' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Switch qurilmasi maʼlumot paketini kerakli kompyuterga yetkazish uchun qaysi manzildan foydalanadi?',
        options: ['DNS nomi', 'MAC-manzil (Fizik manzil)', 'Fayl kengaytmasi', 'URL'],
        answer: 1,
        explanation: 'Switch LAN ichida har bir portdagi qurilmalarni zavod MAC-manzili orqali taniydi.',
      },
      {
        prompt: 'Kelgan har bir signalni tarmoqdagi BARCHA portlarga bir vaqtda tarqatib yuboradigan eskirgan qurilma qaysi?',
        options: ['Router', 'Switch', 'Hub', 'Firewall'],
        answer: 2,
        explanation: 'Hub aqlli jadvalga ega emas, shuning uchun paketni hammaga tarqatadi (Broadcast).',
      },
      {
        prompt: 'Uy yoki maktab LAN tarmog‘ini global Internet (WAN) bilan bog‘lab, IP-paketlar yo‘lini belgilovchi qurilma qaysi?',
        options: ['Repeater', 'Router (Marshrutizator)', 'NIC', 'Switch'],
        answer: 1,
        explanation: 'Router tarmoqlararo marshrutlashni IP-manzillar bo‘yicha amalga oshiradi.',
      },
      {
        prompt: 'Modem so‘zi qaysi ikki amalning qisqartmasi?',
        options: ['Monitor – Demo', 'Modulator – Demodulator', 'Mode – Memory', 'Modern – Media'],
        answer: 1,
        explanation: 'Modem signalni modulyatsiya va demodulyatsiya qiladi.',
      },
      {
        prompt: 'Uzoq Ethernet kabelida susayib qolgan signalni kuchaytirib keyingi segmentga uzatuvchi oddiy qurilma qaysi?',
        options: ['Repeater (Takrorlagich)', 'Firewall', 'Gateway', 'Server'],
        answer: 0,
        explanation: 'Repeater susaygan signalni qayta tiklab kuchaytiradi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfdagi Switch va Router ni ko‘rsatib, MAC vs IP farqini "uy ichidagi ism" vs "pochta manzili" analogiyasi bilan tushuntiring.',
      timing: 'Kirish 5 daq, Komponentlar 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: 'Switch, Hub, Router, Modem vazifalarini farqlash.',
      homework: 'Uyingizdagi Wi-Fi router aslida qaysi 3 ta qurilmani (Router + Switch + Access Point/Modem) birlashtirishini yozing.',
    },
  },
  {
    id: 'g11-l27',
    grade: 11,
    no: 27,
    part: '2-chorak',
    title: 'Simsiz ulanish nuqtasi',
    kind: 'dars',
    hours: 1,
    tools: ['Tarmoq', 'WAP / Wi-Fi', 'SSID / WPA3'],
    objectives: [
      'O‘quvchi **Simsiz ulanish nuqtasi (WAP — Wireless Access Point)** ning vazifasini (simli Switch tarmog‘iga Wi-Fi qurilmalarni ulash) biladi.',
      'O‘quvchi Wi-Fi sozlamalari (**SSID**, **2.4 GHz vs 5 GHz**, **WPA2/WPA3 shifrlash**, **MAC Filtering**, kanallar shovqini) va maktab/katta binolarda bir nechta WAP joylashtirishni tushunadi.',
    ],
    intro:
      'Katta maktabning har bir qavatida noutbuk va planshetlar kabelsiz internetga ulanishi uchun bitta uy routeri yetmaydi — devorlar orqali simli Switch ga ulangan **Simsiz ulanish nuqtalari (WAP)** qo‘yiladi!',
    sections: [
      {
        heading: 'WAP (Wireless Access Point) qanday ishlaydi?',
        body: '**WAP** — simli tarmoq (Ethernet kabeli orqali Switch) bilan simsiz qurilmalar (Wi-Fi) o‘rtasida ko‘prik bo‘luvchi qurilma. Uning o‘zi Router kabi internetni boshqarmaydi — u faqat radioto‘lqinlar orqali WLAN yaratadi va trafiki simli Switch ga uzatadi. Katta binolarda bir xil **SSID (Tarmoq nomi)** ostida bir nechta WAP qo‘yilsa, xodim yurganida avtomatik eng kuchli nuqtaga ulanadi (**Roaming**).',
        example: 'Maktabning 1-, 2- va 3-qavatlaridagi shiftga osilgan oq likopchasimon qurilmalar — aynan **WAP** dir.',
      },
      {
        heading: '2.4 GHz vs 5 GHz va Wi-Fi Xavfsizligi',
        body: '• **2.4 GHz**: uzoqroq masofaga yetadi va devordan yaxshiroq o‘tadi, lekin tezligi pastroq va qo‘shni router/mikroto‘lqinli pechlar shovqini ko‘p.\n• **5 GHz**: juda tez (1 Gbps gacha) va shovqini kam, lekin devorlardan qisqa masofaga o‘tadi.\n• **Wi-Fi xavfsizligi**: eskirgan WEP ni emas, albatta **WPA2-AES** yoki zamonaviy **WPA3** shifrlashni yoqish, kuchli parol qo‘yish va kerak bo‘lsa **MAC-manzil bo‘yicha filtrlash**.',
        tip: 'Yashirin SSID xavfsizlikni to‘liq taʼminlamaydi — haqiqiy himoya **WPA2/WPA3 shifrlashdir**!',
      },
    ],
    keyTerms: [
      { term: 'WAP (Access Point)', definition: 'Simsiz Wi-Fi qurilmalarni kabel orqali asosiy simli LAN tarmog‘iga ulovchi qurilma.' },
      { term: 'SSID', definition: 'Wi-Fi simsiz tarmog‘ining ekranda ko‘rinadigan noyob nomi.' },
      { term: 'WPA2 / WPA3', definition: 'Wi-Fi tarmog‘i trafikini kuchli shifrlab himoyalovchi zamonaviy xavfsizlik protokollari.' },
      { term: '2.4 GHz / 5 GHz', definition: 'Wi-Fi radioto‘lqinlarining qamrov masofasi va tezligi bilan farqlanuvchi ikki diapazoni.' },
    ],
    steps: [
      '1. WAP va oddiy uy Routeri farqini ayting.',
      '2. `2.4 GHz` va `5 GHz` ni masofa va tezlik bo‘yicha taqqoslang.',
      '3. Quyidagi bo‘shliq to‘ldirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Katta hovlining uzoq burchagiga Wi-Fi yetishi uchun `2.4 GHz` maʼqulmi yoki `5 GHz`? Sinf ichidagi 30 ta noutbukda HD video ko‘rish uchun-chi?',
        expected: 'Uzoq hovli uchun `2.4 GHz` (masofasi uzoqroq); bitta sinf xonasida yuqori tezlik uchun `5 GHz` (tez va shovqinsiz).',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l27-g1',
        num: '01',
        title: 'WAP va Wi-Fi sozlamalari',
        topic: 'Simsiz ulanish nuqtasi',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Simsiz tarmoqqa oid jumlalarni to‘g‘ri atamalar bilan to‘ldiring:',
          template: 'Simli Switch ga ulanib Wi-Fi tarqatuvchi qurilma {{0}} deyiladi. Wi-Fi ro‘yxatida ko‘rinadigan tarmoq nomi {{1}} deb ataladi. Tarmoq paroli va trafikini zamonaviy himoyalash uchun {{2}} shifrlash protokoli yoqiladi.',
          blanks: [
            { options: ['WAP (Access Point)', 'Modem', 'Hub'], answer: 'WAP (Access Point)' },
            { options: ['SSID', 'MAC', 'HTML'], answer: 'SSID' },
            { options: ['WPA3 / WPA2', 'WEP', 'HTTP'], answer: 'WPA3 / WPA2' },
          ],
          hint: 'Qurilma — WAP; Tarmoq nomi — SSID; Zamonaviy shifrlash — WPA2/WPA3.',
          explanation: 'WAP simsiz qurilmalarni simli tarmoqqa ulaydi, SSID nom beradi, WPA2/WPA3 esa shifrlaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'WAP (Wireless Access Point) odatda binodagi qaysi qurilmaga Ethernet kabeli orqali ulanadi?',
        options: ['Printerga', 'Switch ga (LAN tarmog‘iga)', 'Monitorga', 'Skanerga'],
        answer: 1,
        explanation: 'WAP simsiz foydalanuvchilarni asosiy simli LAN Switch ga ulash vazifasini bajaradi.',
      },
      {
        prompt: 'Wi-Fi da qaysi chastota diapazoni yuqoriroq tezlik beradi, ammo devorlardan kuchsizroq o‘tadi?',
        options: ['2.4 GHz', '5 GHz', '100 Hz', 'Bluetooth'],
        answer: 1,
        explanation: '5 GHz tezligi yuqori va kanallari ko‘p, lekin to‘siqlardan o‘tish masofasi qisqaroq.',
      },
      {
        prompt: 'Telefoningizdagi Wi-Fi ro‘yxatida ko‘rinadigan "Maktab_WiFi" yozuvi texnik jihatdan nima deyiladi?',
        options: ['MAC-manzil', 'SSID', 'IPv4', 'DNS'],
        answer: 1,
        explanation: 'SSID (Service Set Identifier) simsiz tarmoqning nomi.',
      },
      {
        prompt: 'Quyidagi Wi-Fi xavfsizlik standartlaridan qaysi biri eng kuchli va zamonaviy hisoblanadi?',
        options: ['Ochiq (Open) tarmoq', 'WEP', 'WPA3', 'MAC tekshiruvsiz'],
        answer: 2,
        explanation: 'WPA3 eng so‘nggi va shifrlashga chidamli Wi-Fi himoya standartidir.',
      },
      {
        prompt: '3 qavatli universitet binosida barcha xonalarda uzluksiz Wi-Fi bo‘lishi uchun nima qilinadi?',
        options: [
          'Bir nechta WAP har qavatga o‘rnatilib, Switch orqali ulanadi',
          'Barcha kompyuterlar o‘chiriladi',
          'Faqat 1 ta Bluetooth adapter qo‘yiladi',
          'Devorga qog‘oz yopishtiriladi',
        ],
        answer: 0,
        explanation: 'Ko‘p nuqtali WAP qamrovi (Enterprise WLAN) binoning har bir burchagida barqaror signal beradi.',
      },
    ],
    teacherNotes: {
      method: '2.4 GHz vs 5 GHz taqqoslash jadvalini doskaga chizing va sinf WAP joylashuvini muhokama qiling.',
      timing: 'Kirish 5 daq, WAP & Chastotalar 20 daq, FillBlank 10 daq, Quiz 10 daq.',
      assessment: 'WAP vazifasi va WPA2/WPA3 himoyasi.',
      homework: '3 qavatli maktab uchun WAP lar qayerlarga joylashtirilishini qavatma-qavat chizing.',
    },
  },
  {
    id: 'g11-l28',
    grade: 11,
    no: 28,
    part: '2-chorak',
    title: 'Shlyuz, Bridj va Fayervol. Bit oqimini uzatish',
    kind: 'dars',
    hours: 1,
    tools: ['Tarmoq', 'Gateway / Bridge / Firewall', 'NetBuilder'],
    objectives: [
      'O‘quvchi **Bridj (Bridge)**, **Shlyuz (Gateway)** va **Fayervol (Firewall)** qurilmalarining tarmoqdagi aniq farqini biladi.',
      'O‘quvchi **Bit oqimini uzatish (Bit Streaming)**: real vaqt (**Live Streaming**) va talab bo‘yicha (**On-Demand Streaming**) hamda **Buffering** mexanizmini tushunadi.',
    ],
    intro:
      'Ikki xil protokolli tarmoqni qaysi qurilma tarjimon kabi bog‘laydi? Buzg‘unchi hujumlarni darvozada kim to‘xtatadi? YouTube videoni oldindan yuklamasdan qanday darhol ko‘rsatadi? Javoblar — **Bridj, Shlyuz, Fayervol va Bit Streaming**!',
    sections: [
      {
        heading: 'Bridj (Bridge), Shlyuz (Gateway) va Fayervol (Firewall)',
        body: '• **Bridj (Bridge)**: bir xil protokolli ikkita alohida LAN segmentini birlashtirib, ortiqcha trafikni ikkinchi tomonga o‘tkazmaslik orqali tarmoqni tezlashtiradi.\n• **Shlyuz (Gateway)**: **turli protokol va arxitekturali** ikki tarmoqni (masalan, ichki korporativ tarmoq va tashqi Internet) bog‘lovchi "tarjimon" kirish-chiqish darvozasi!\n• **Fayervol (Firewall)**: ichki tarmoq bilan tashqi Internet chegarasida turib, har bir kiruvchi/chiquvchi paketni xavfsizlik qoidalariga ko‘ra tekshiradigan, zararli port va IP manzillarni **bloklovchi** apparat yoki dasturiy to‘siq.',
        example: 'Switch LAN ichini bo‘lsa, **Bridge** ikkita LAN ni ulaydi; **Gateway** turlicha tarmoq protokollarini tarjima qiladi; **Firewall** esa qo‘riqchi darvozabondir!',
      },
      {
        heading: 'Bit oqimini uzatish (Bit Streaming)',
        body: '**Bit Streaming** — katta audio/video faylni to‘liq yuklab tugatishni kutmasdan, uzluksiz bitlar oqimi sifatida yuborib darhol ko‘rish:\n• **Buffering (Buferlash)**: video boshlanishidan oldin RAM xotiraga keyingi 5–10 soniyalik video oldindan yuklab qo‘yiladi — internet bir lahzaga sekinlashsa ham video qotib qolmaydi!\n• **On-Demand Streaming**: oldindan yozilgan videoni xohlagan vaqtda ko‘rish va orqaga/oldinga o‘tkazish (YouTube, Netflix).\n• **Real-Time (Live) Streaming**: jonli futbol o‘yini yoki darsni ayni damda uzatish (oldinga o‘tkazib bo‘lmaydi!).',
        tip: 'Quyidagi `NetBuilder` da Fayervol orqali himoyalangan maktab tarmog‘ini qurib ko‘ring!',
      },
    ],
    keyTerms: [
      { term: 'Bridge (Bridj)', definition: 'Bir xil protokollardan foydalanuvchi ikkita LAN segmentini bog‘lovchi qurilma.' },
      { term: 'Gateway (Shlyuz)', definition: 'Turli protokollarga ega tarmoqlarni o‘zaro tarjima qilib bog‘lovchi kirish-chiqish tuguni.' },
      { term: 'Firewall (Fayervol)', definition: 'Kiruvchi va chiquvchi tarmoq trafikini xavfsizlik qoidalariga ko‘ra filtrlovchi himoya devori.' },
      { term: 'Bit Streaming & Buffering', definition: 'Videoni yuklash jarayonida RAM buferi orqali uzluksiz darhol ijro etish texnologiyasi.' },
    ],
    steps: [
      '1. Bridge, Gateway va Firewall vazifalarini farqlang.',
      '2. `NetBuilder` da tarmoq qurilmalarini xavfsiz ketma-ketlikda ulang.',
    ],
    practice: [
      {
        task: 'Nima uchun YouTube da 2 soatlik 4K filmni to‘liq 15 GB yuklab olmasdan turib, 2 soniyada tomosha qilish mumkin va internet uzilib qolsa nega yana 5 soniya o‘ynab turadi?',
        expected: '**Bit Streaming** va **Buffering** tufayli: keyingi bir necha soniyalik bitlar doimiy ravishda RAM buferiga oldindan yuklab boriladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l28-g1',
        num: '01',
        title: 'NetBuilder: Shlyuz va AP bilan tarmoq',
        topic: 'Tarmoq ulanish arxitekturasi',
        difficulty: 'O‘rta',
        engine: 'netbuilder',
        config: {
          prompt: 'Maktab tarmog‘ini quring: Server va Kompyuterni Switch ga ulang, Simsiz AP ni ham Switch ga ulang, Switch ni esa tashqi Router/Shlyuz orqali Modem ga bog‘lang!',
          devices: [
            { id: 'pc', label: 'O‘quvchi PK', type: 'pc' },
            { id: 'srv', label: 'Fayl Server', type: 'server' },
            { id: 'ap', label: 'Wi-Fi AP', type: 'ap' },
            { id: 'sw', label: 'Switch', type: 'switch' },
            { id: 'rt', label: 'Router/Shlyuz', type: 'router' },
            { id: 'md', label: 'ISP Modem', type: 'modem' },
          ],
          requiredLinks: [
            ['pc', 'sw'],
            ['srv', 'sw'],
            ['ap', 'sw'],
            ['sw', 'rt'],
            ['rt', 'md'],
          ],
          hint: 'Barcha ichki qurilmalar (PK, Server, Wi-Fi AP) → Switch ga; Switch → Router/Shlyuz → ISP Modem ga ulanadi.',
          explanation: 'Switch barcha ichki simli va simsiz (AP) tugunlarni birlashtiradi, Router/Shlyuz va Modem esa Internetga chiqaradi!',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Turli tarmoq protokollaridan foydalanadigan ikki tarmoqni o‘zaro bog‘lab beruvchi qurilma nima?',
        options: ['Bridge (Bridj)', 'Gateway (Shlyuz)', 'Repeater', 'Hub'],
        answer: 1,
        explanation: 'Gateway (Shlyuz) har xil protokollarni tarjima qilib tarmoqlarni bog‘laydi.',
      },
      {
        prompt: 'Bir xil turdagi ikkita LAN tarmoq segmentini ulash uchun qaysi qurilma ishlatiladi?',
        options: ['Bridge', 'Modem', 'DNS', 'Switchboard'],
        answer: 0,
        explanation: 'Bridge bir xil protokolli LAN segmentlarini ulab, ortiqcha trafikni ajratadi.',
      },
      {
        prompt: 'Tashqi internetdan kelayotgan shubhali paketlarni va ruxsatsiz kirishlarni qoidalar asosida bloklovchi himoya tizimi qaysi?',
        options: ['Firewall (Fayervol)', 'Buffering', 'Repeater', 'Access Point'],
        answer: 0,
        explanation: 'Firewall kiruvchi va chiquvchi paketlarni tekshirib xavfli ulanishlarni to‘sadi.',
      },
      {
        prompt: 'Onlayn video ko‘rayotganda kadrlar uzilib qolmasligi uchun bir necha soniya oldindan RAM ga yuklab olish mexanizmi nima?',
        options: ['Buffering (Buferlash)', 'Phishing', 'Routing', 'Bridging'],
        answer: 0,
        explanation: 'Buffering vaqtinchalik xotirada zaxira oqim saqlab, uzluksiz ijroni taʼminlaydi.',
      },
      {
        prompt: 'Jonli futbol translyatsiyasi (Live Streaming) bilan YouTube dagi arxiv video (On-Demand) o‘rtasidagi asosiy farq qaysi?',
        options: [
          'Jonli translyatsiyani hali sodir bo‘lmagan kelajak nuqtasiga oldinga o‘tkazib bo‘lmaydi',
          'Live Streaming internetsiz ishlaydi',
          'On-Demand da ovoz bo‘lmaydi',
          'Farqi yo‘q',
        ],
        answer: 0,
        explanation: 'Live oqim real vaqtda hosil bo‘ladi; On-Demand esa serverda to‘liq tayyor turadi.',
      },
    ],
    teacherNotes: {
      method: 'Gateway (turli protokol) vs Bridge (bir xil LAN) farqini aniq taʼkidlang.',
      timing: 'Kirish 5 daq, Qurilmalar & Bit Streaming 20 daq, NetBuilder 10 daq, Quiz 10 daq.',
      assessment: 'NetBuilder topologiyasi va Firewall/Gateway roli.',
      homework: 'Real-time va On-Demand bit streaming ga 2 tadan misol yozing.',
    },
  },
  {
    id: 'g11-l29',
    grade: 11,
    no: 29,
    part: '2-chorak',
    title: 'Kanalli va paketli kommutatsiyalash. Xabarli kommutatsiyalash',
    kind: 'dars',
    hours: 1,
    tools: ['Tarmoq', 'Circuit / Packet / Message Switching'],
    objectives: [
      'O‘quvchi tarmoqda maʼlumot uzatishning 3 ta kommutatsiya usulini: **Kanalli (Circuit Switching)**, **Xabarli (Message Switching)** va **Paketli (Packet Switching)** ni farqlaydi.',
      'O‘quvchi nima uchun zamonaviy Internet **Paketli kommutatsiyaga (Packet Switching)** tayanishini (yo‘lning band bo‘lmasligi, xatoda qayta uzatish, marshrut moslashuvchanligi) tushunadi.',
    ],
    intro:
      'Eski shahar telefonida ikki kishi gaplashganda butun sim liniyasi faqat ular uchun band qilinar edi (**Kanalli kommutatsiya**). Bugungi Internetda esa 1 ta rasm yuzlab kichik **Paketlarga** bo‘linib, bo‘sh yo‘llardan uchib borib qaytadan yig‘iladi!',
    sections: [
      {
        heading: '1. Kanalli kommutatsiya (Circuit Switching)',
        body: 'Maʼlumot uzatishdan oldin jo‘natuvchi va oluvchi o‘rtasida **alohida jismoniy/doimiy aloqa kanali** o‘rnatiladi va suhbat tugaguncha faqat ularga band qilinadi (masalan, anʼanaviy simli telefon tarmog‘i). **Afzalligi**: doimiy tezlik va paketlar tartibi buzilmaydi. **Kamchiligi**: sukut saqlaganda ham liniya behuda band turadi; boshqalar bu yo‘ldan foydalana olmaydi.',
        example: 'Ikki shahar orasida poyezd o‘tishi uchun barcha boshqa yo‘llarni yopib alohida rels ajratib berishga o‘xshaydi.',
      },
      {
        heading: '2. Xabarli (Message) va 3. Paketli (Packet Switching)',
        body: '• **Xabarli kommutatsiya (Message Switching)**: butun katta xabar (masalan, email) bo‘linmasdan oraliq tugunga (serverga) yuboriladi, u yerda to‘liq saqlanib (**Store-and-Forward**), keyingi bo‘sh tugunga o‘tkaziladi. Kechikish katta, lekin tarmoq bo‘sh vaqtini kutadi.\n• **Paketli kommutatsiya (Packet Switching — Internet asosi!)**: fayl kichik bir xil qismlarga (**Paketlarga**: Header + Payload + Footer/CRC) bo‘linadi. Har bir paketda oluvchi IP manzili va tartib raqami (`1/5`, `2/5`) bor! Paketlar tirband yo‘llarni aylanib **turli marshrutlar** orqali uchib boradi va oluvchida tartib raqamiga ko‘ra qayta yig‘iladi. Yo‘l uzilsa ham boshqa yo‘ldan boradi, kanal hech kim uchun behuda band qilinmaydi!',
        tip: 'Paket yo‘qolsa, oluvchi faqat o‘sha bitta paketni qayta so‘raydi — butun faylni boshidan yuklash shart emas!',
      },
    ],
    keyTerms: [
      { term: 'Kanalli kommutatsiya', definition: 'Aloqa seansi davomida ikki tugun orasida doimiy ajratilgan fizik kanal ochish usuli.' },
      { term: 'Paketli kommutatsiya', definition: 'Maʼlumotni kichik paketlarga bo‘lib, har birini mustaqil eng bo‘sh yo‘ldan yuborish usuli (Internet).' },
      { term: 'Store-and-Forward', definition: 'Xabarli kommutatsiyada butun xabarni oraliq tugunda to‘liq saqlab keyin uzatish.' },
      { term: 'Paket sarlavhasi (Header)', definition: 'Jo‘natuvchi/oluvchi IP manzili va paket tartib raqamini saqlovchi qism.' },
    ],
    steps: [
      '1. Kanalli, Xabarli va Paketli kommutatsiya farqlarini solishtiring.',
      '2. Paketning 3 ta qismini (`Header`, `Payload`, `Trailer/CRC`) eslab qoling.',
      '3. Quyidagi tartiblash o‘yinida paketli uzatish bosqichlarini qo‘ying.',
    ],
    practice: [
      {
        task: 'Nima uchun paketlar turli marshrutlardan ketgani sababli manzilga `1, 3, 2, 4` tartibida yetib kelsa ham, oxirgi rasm buzilib chiqmaydi?',
        expected: 'Har bir paketning sarlavhasida (`Header`) uning tartib raqami (`Sequence Number`) yozilgan; oluvchi kompyuter paketlarni shu raqam bo‘yicha `1, 2, 3, 4` qilib qayta teradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g11-l29-g1',
        num: '01',
        title: 'Paketli kommutatsiya bosqichlari',
        topic: 'Maʼlumotni paketlab uzatish',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Faylni Internetda Paketli kommutatsiya (Packet Switching) orqali uzatish bosqichlarini tartiblang:',
          items: [
            'Katta fayl bir nechta kichik qismlarga (Paketlarga) bo‘linadi',
            'Har bir paketga manzil IP va tartib raqami (Header) biriktiriladi',
            'Routerlar har bir paketni eng bo‘sh va tezkor yo‘ldan alohida yuboradi',
            'Oluvchi barcha paketlarni yig‘ib, tartib raqami bo‘yicha asl faylni tiklaydi',
          ],
          hint: 'Bo‘lish → Manzil/Tartib raqami qo‘yish → Routerlardan yuborish → Qayta yig‘ish.',
          explanation: 'Paketli kommutatsiya faylni bo‘lib, mustaqil yo‘llardan tez va ishonchli yetkazib qayta yig‘adi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Zamonaviy Internet tarmog‘i asosan qaysi kommutatsiyalash usuliga asoslangan?',
        options: ['Kanalli kommutatsiya', 'Paketli kommutatsiya (Packet Switching)', 'Telegraf', 'Analog uzatish'],
        answer: 1,
        explanation: 'Internet IP paketlarni tarmoq bo‘ylab mustaqil marshrutlab uzatadi.',
      },
      {
        prompt: 'Qaysi usulda suhbat davomida liniya boshidan oxirigacha faqat ikki abonent uchun band qilib qo‘yiladi?',
        options: ['Paketli kommutatsiya', 'Kanalli kommutatsiya (Circuit Switching)', 'Xabarli kommutatsiya', 'Wi-Fi'],
        answer: 1,
        explanation: 'Kanalli kommutatsiyada ajratilgan fizik kanal seans tugaguncha bo‘shatilmaydi.',
      },
      {
        prompt: 'Paketli kommutatsiyaning kanalli kommutatsiyaga nisbatan asosiy afzalligi qaysi?',
        options: [
          'Liniya bo‘sh qolmaydi, bir kanaldan ko‘plab foydalanuvchilar bo‘lishib ishlaydi va bitta tugun buzilsa aylanma yo‘ldan boradi',
          'Hech qanday router kerak emas',
          'Faqat matn yuboriladi',
          'Paketlar hech qachon saralanmaydi',
        ],
        answer: 0,
        explanation: 'Multiplekslash va dinamik aylanma marshrutlash tarmoq samaradorligini keskin oshiradi.',
      },
      {
        prompt: 'Xabarli kommutatsiyalash (Message Switching) qaysi tamoyil bilan ishlaydi?',
        options: [
          'Store-and-Forward (butun xabarni oraliq tugunda to‘liq saqlab keyin uzatish)',
          'To‘g‘ridan-to‘g‘ri fizik sim',
          '3D chop etish',
          'Clipping',
        ],
        answer: 0,
        explanation: 'Message Switching katta xabarni bo‘lmasdan tugundan tugunga saqlab o‘tkazadi.',
      },
      {
        prompt: 'Oluvchi tomonda turli vaqtda yetib kelgan paketlarni asl tartibida qayta yig‘ish uchun paketning qaysi qismidagi maʼlumot ishlatiladi?',
        options: ['Header (Tartib raqami / Sequence Number)', 'Audio Track', 'Wallpaper', 'CSV delimiter'],
        answer: 0,
        explanation: 'Packet Header manzil va tartib raqamini saqlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Pochtadan bitta katta kitobni 10 ta konvertga (Paketga) bo‘lib turli mashinalarda jo‘natish analogiyasini keltiring.',
      timing: 'Kirish 5 daq, 3 xil kommutatsiya 20 daq, Order 10 daq, Quiz 10 daq.',
      assessment: 'Circuit vs Message vs Packet farqlarini tushuntirish.',
      homework: '3 ta kommutatsiya usulini 4 mezon (Bo‘linish, Bandlik, Kechikish, Ishonchlilik) bo‘yicha jadvalda taqqoslang.',
    },
  },
  {
    id: 'g11-l30',
    grade: 11,
    no: 30,
    part: '2-chorak',
    title: 'Optik usulda ma’lumot almashish. Simsiz aloqa/uzatish usullari',
    kind: 'dars',
    hours: 1,
    tools: ['Tarmoq', 'Optik tola', 'Wi-Fi / Bluetooth / NFC / Li-Fi'],
    objectives: [
      'O‘quvchi **Optik tola (Fibre Optic)** ishlash prinsipi (yorug‘lik impulslari, to‘liq ichki qaytish) va uning mis kabeldan (UTP/Coaxial) ustunligini biladi.',
      'O‘quvchi **Simsiz uzatish usullari**: **Wi-Fi**, **Bluetooth**, **NFC**, **Infraqizil (IR)** va **Mikroto‘lqin / Sunʼiy yo‘ldosh** ni masofa, tezlik va quvvat sarfi bo‘yicha taqqoslaydi.',
    ],
    intro:
      'Qitʼalararo okean tubidan yuzlab Terabit/s tezlikda internetni **shisha iplar (Optik tola)** tashiydi, telefoningiz esa metr ichida **NFC**, 10 metrda **Bluetooth**, 50 metrda **Wi-Fi** orqali gaplashadi!',
    sections: [
      {
        heading: 'Optik tolali aloqa (Fibre Optic)',
        body: 'Mis kabelda elektr signali uzatilsa, **Optik tola** da ingichka shisha yoki plastik tola ichidan **yorug‘lik impulslari (lazer/LED)** to‘liq ichki qaytish qonuni bilan uchadi!\n**Afzalliklari**: ulkan tezlik va polosa kengligi (Gbps/Tbps), 100 km gacha signal susaymasdan boradi, **elektromagnit shovqin (EMI)** taʼsir qilmaydi, kabeldan yashirincha maʼlumot "tinglash" juda qiyin!\n**Kamchiligi**: kabel va payvandlash uskunalari qimmat, keskin bukilsa shisha sinishi mumkin.',
        example: 'Okean tubidagi suvosti optik kabellari dunyo internet trafigining 98% dan ortig‘ini tashiydi!',
      },
      {
        heading: 'Simsiz uzatish usullari',
        body: '• **NFC (Near Field Communication)**: masofa **< 10 sm** — kontaktsiz karta to‘lovi va tezkor juftlash.\n• **Infraqizil (IR)**: masofa bir necha metr, faqat **to‘g‘ri ko‘rinish chizig‘i** (TV pulti, devordan o‘tmaydi!).\n• **Bluetooth**: ~10–30 metr (PAN) — quloqchin, sichqoncha, kam quvvat sarfi.\n• **Wi-Fi**: ~50–100 metr (WLAN) — yuqori tezlikli internet.\n• **Mikroto‘lqin (Microwave) / Radio**: shaharlararo minoralar o‘rtasida ko‘rinish chizig‘ida uzatish.',
        tip: 'Yodda tuting: **IR** devordan o‘tmaydi; **NFC** esa atigi santimetrlar masofasida ishlaydi!',
      },
    ],
    keyTerms: [
      { term: 'Optik tola (Fibre Optic)', definition: 'Yorug‘lik impulslari yordamida maʼlumotni juda katta tezlik va masofaga uzatuvchi shisha kabel.' },
      { term: 'Elektromagnit shovqin (EMI)', definition: 'Elektr kabellari va motorlar atrofida mis sim signalini buzadigan maydon (optikaga taʼsir qilmaydi).' },
      { term: 'NFC', definition: '10 sm gacha masofada kontaktsiz to‘lov va maʼlumot almashish texnologiyasi.' },
      { term: 'Bluetooth (PAN)', definition: 'Qisqa masofadagi shaxsiy qurilmalarni kam energiya bilan bog‘lovchi simsiz aloqa.' },
    ],
    steps: [
      '1. Optik tola va mis kabel (UTP) ni 4 mezon bo‘yicha solishtiring.',
      '2. NFC, IR, Bluetooth va Wi-Fi ni masofa bo‘yicha tartiblang.',
      '3. Quyidagi moslashtirish o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Kuchli elektr transformatorlari yonidan tarmoq kabeli o‘tkazish kerak. Mis UTP kabel tanlaysizmi yoki Optik tola? Nima uchun?',
        expected: '**Optik tola** — chunki u elektr toki bilan emas, yorug‘lik bilan ishlaydi va elektromagnit shovqindan (EMI) mutlaqo taʼsirlanmaydi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l30-g1',
        num: '01',
        title: 'Aloqa kanallarini mosla',
        topic: 'Optik va simsiz texnologiyalar',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Uzatish texnologiyasini uning asosiy masofasi yoki xususiyatiga bog‘lang:',
          pairs: [
            { left: 'Optik tola', right: 'Yorug‘lik impulslari — elektromagnit shovqinga chidamli, Tbps tezlik' },
            { left: 'NFC', right: '4–10 sm masofada kontaktsiz bank to‘lovlari' },
            { left: 'Bluetooth', right: '10 metrgacha shaxsiy quloqchin va sichqonchani ulash (PAN)' },
            { left: 'Infraqizil (IR)', right: 'Faqat to‘g‘ri ko‘rinish chizig‘ida ishlaydi, devordan o‘tmaydi (TV pult)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Optik tolali kabelda maʼlumot qanday fizik signal shaklida uzatiladi?',
        options: ['Elektr kuchlanishi', 'Yorug‘lik impulslari', 'Tovush to‘lqinlari', 'Magnit maydoni'],
        answer: 1,
        explanation: 'Optik tolada lazer yoki LED chiqargan yorug‘lik impulslari uzatiladi.',
      },
      {
        prompt: 'Qaysi xususiyat Optik tolaning mis (UTP) kabeldan ustunligi EMAS?',
        options: [
          'Elektromagnit shovqinlarga mutlaqo chidamliligi',
          'Juda arzonligi va pichoq bilan oson ulab ketilishi',
          'Katta masofalarda signal deyarli susaymasligi',
          'O‘ta yuqori o‘tkazish qobiliyati',
        ],
        answer: 1,
        explanation: 'Optik tola mis kabeldan qimmatroq va maxsus payvandlash uskunasini talab qiladi.',
      },
      {
        prompt: 'Do‘konda smartfonni terminalga 2–4 sm yaqinlashtirib to‘lash uchun qaysi simsiz texnologiya ishlaydi?',
        options: ['Wi-Fi', 'NFC', 'Infraqizil', 'Sunʼiy yo‘ldosh'],
        answer: 1,
        explanation: 'NFC bir necha santimetr masofadagi kontaktsiz almashinuv uchun yaratilgan.',
      },
      {
        prompt: 'Qaysi simsiz uzatish usuli oldida qo‘l yoki devor turib qolsa umuman ishlamaydi (to‘g‘ri ko‘rinish chizig‘i shart)?',
        options: ['Wi-Fi', 'Bluetooth', 'Infraqizil (Infrared / IR)', '5G'],
        answer: 2,
        explanation: 'Infraqizil nurlar shaffof bo‘lmagan to‘siq va devorlardan o‘ta olmaydi.',
      },
      {
        prompt: 'Quloqchin va smart-soatni telefonga ulashda kam energiya sarflovchi qisqa masofali (PAN) standart qaysi?',
        options: ['Bluetooth', 'Optik tola', 'Ethernet', '4G LTE'],
        answer: 0,
        explanation: 'Bluetooth (ayniqsa BLE) shaxsiy qurilmalarni bog‘lash uchun mo‘ljallangan.',
      },
    ],
    teacherNotes: {
      method: 'Masofa shkalasi chizing: NFC (10 sm) < IR (5 m) < Bluetooth (10 m) < Wi-Fi (100 m) < Optik tola (100+ km).',
      timing: 'Kirish 5 daq, Optik & Simsiz aloqa 20 daq, Match 10 daq, Quiz 10 daq.',
      assessment: 'Optika afzalliklari va simsiz standartlarni tanlash.',
      homework: 'Optik tola, UTP mis kabel, Wi-Fi va Bluetooth ni 3 ta mezonda solishtirib yozing.',
    },
  },
  {
    id: 'g11-l31',
    grade: 11,
    no: 31,
    part: '2-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Tarmoq'],
    objectives: [
      'O‘quvchi 2-chorakning tarmoq muhandisligi bo‘limi (NIC/Switch/Router/Modem, WAP/SSID/WPA3, Bridge/Gateway/Firewall, Bit Streaming, Kanalli/Xabarli/Paketli kommutatsiya, Optik tola va Simsiz aloqa) bo‘yicha bilimlarini sinaydi.',
    ],
    intro:
      '2-chorak yakuniy nazorat ishi! Tarmoq qurilmalari, xavfsizlik darvozalari, kommutatsiya usullari va uzatish muhitlari bo‘yicha bilimlaringizni sinab ko‘ring.',
    sections: [
      {
        heading: '2-chorak tarmoqlar xulosasi',
        body: '• **Qurilmalar**: `NIC` (MAC), `Switch` (MAC-jadval), `Router` (IP), `Modem`, `WAP` (`SSID`, `WPA3`), `Bridge`, `Gateway`, `Firewall`.\n• **Uzatish**: `Bit Streaming` + `Buffering`; `Circuit` vs `Message (Store-and-Forward)` vs `Packet Switching`.\n• **Muhit**: `Optik tola` (yorug‘lik, EMI yo‘q), `NFC`, `Bluetooth`, `IR`, `Wi-Fi`.',
        example: 'Krossvord va 5 ta yakuniy nazorat testini ishlang.',
      },
    ],
    keyTerms: [
      { term: 'Switch vs Router', definition: 'LAN ichida MAC bo‘yicha vs Tarmoqlararo IP bo‘yicha yo‘naltirish.' },
      { term: 'Gateway', definition: 'Turli protokollarni o‘zaro bog‘lovchi shlyuz.' },
      { term: 'Packet Switching', definition: 'Internetda faylni paketlarga bo‘lib yuborish.' },
      { term: 'Optik tola', definition: 'Yorug‘lik bilan shovqinsiz o‘ta tezkor aloqa kabeli.' },
    ],
    steps: [
      '1. Krossvordda tarmoq atamalarini toping.',
      '2. 5 ta nazorat testini ishlang.',
    ],
    practice: [
      {
        task: 'Switch, Router va Firewall dan qaysi biri tashqi tarmoqdan keladigan zararli trafikni xavfsizlik qoidasi bilan bloklaydi?',
        expected: '**Firewall (Fayervol)**.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l31-g1',
        num: '01',
        title: '2-chorak tarmoqlar krossvordi',
        topic: 'Tarmoq komponentlari va protokollari',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '26–30-darslarda o‘tilgan asosiy tarmoq atamalarini bosh harfda kiriting:',
          clues: [
            { id: '1', clue: 'Wi-Fi simsiz tarmog‘ining ko‘rinadigan nomi (4 harf)', answer: 'SSID' },
            { id: '2', clue: '10 sm gacha masofada kontaktsiz to‘lov texnologiyasi (3 harf)', answer: 'NFC' },
            { id: '3', clue: 'Kompyuter tarmoq kartasi qisqartmasi (3 harf)', answer: 'NIC' },
            { id: '4', clue: 'Simsiz ulanish nuqtasi qisqartmasi (3 harf)', answer: 'WAP' },
          ],
          hint: 'SSID, NFC, NIC, WAP qisqartmalarini kiriting.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Turli protokollarga ega ikkita tarmoqni o‘zaro bog‘lovchi qurilma qaysi?',
        options: ['Hub', 'Gateway (Shlyuz)', 'Repeater', 'NFC'],
        answer: 1,
        explanation: 'Gateway turli protokollarni tarjima qilib bog‘laydi.',
      },
      {
        prompt: 'Optik tolali kabelning mis UTP kabelga nisbatan asosiy afzalligi nimada?',
        options: [
          'Elektromagnit shovqinlarga (EMI) uchramaydi va uzoq masofada juda tez uzatadi',
          'Pichoq bilan oson ulanadi',
          'Faqat 10 metrga yetadi',
          'Yorug‘lik o‘rniga elektr yuboradi',
        ],
        answer: 0,
        explanation: 'Yorug‘lik signali elektromagnit maydonlardan taʼsirlanmaydi.',
      },
      {
        prompt: 'Paketli kommutatsiyada routerlar paketlarni qayerga qarab yo‘naltiradi?',
        options: [
          'Paket sarlavhasidagi (Header) oluvchi IP manziliga qarab',
          'Foydalanuvchi ismiga qarab',
          'Kabel rangiga qarab',
          'Fayl shriftiga qarab',
        ],
        answer: 0,
        explanation: 'Router IP-manzil va marshrutlash jadvali bo‘yicha eng yaxshi yo‘lni tanlaydi.',
      },
      {
        prompt: 'Zamonaviy LAN tarmoqlarida Hub o‘rniga Switch ishlatilishining sababi nima?',
        options: [
          'Switch faqat kerakli portga MAC-manzil bo‘yicha paket yuborib, to‘qnashuvlarni kamaytiradi',
          'Switch elektrsiz ishlaydi',
          'Hub faqat simsiz ishlaydi',
          'Switch faqat bitta kompyuter ulaydi',
        ],
        answer: 0,
        explanation: 'Switch aqlli MAC jadvali tufayli tarmoqni tez va xavfsiz qiladi.',
      },
      {
        prompt: 'Onlayn videoni qotmasdan ko‘rish uchun bir necha soniyasini oldindan RAM ga yuklab turish jarayoni qaysi?',
        options: ['Buffering', 'Clipping', 'Normalization', 'Quishing'],
        answer: 0,
        explanation: 'Buffering internet tebranishlarida videoning uzilib qolmasligini taʼminlaydi.',
      },
    ],
    teacherNotes: {
      method: '2-chorak yakuniy bahosi; krossvord va test tahlili.',
      timing: 'Kirish 5 daq, Krossvord 15 daq, Nazorat testi 25 daq.',
      assessment: '2-chorak yakuniy baholash.',
      homework: 'Takrorlash darsiga tayyorlanish.',
    },
  },
  {
    id: 'g11-l32',
    grade: 11,
    no: 32,
    part: '2-chorak',
    title: 'Takrorlash darsi',
    kind: 'takrorlash',
    hours: 1,
    tools: ['AT va jamiyat', 'Tarmoq'],
    objectives: [
      'O‘quvchi 2-chorakning ikkala yarmi: E-iqtisodiyot/AT-jamiyat va Kompyuter tarmoqlari apparat/protokollarini yaxlit umumlashtiradi.',
    ],
    intro:
      '2-chorak yakuniy takrorlash darsi! E-tijorat, Data Mining va Teleworking dan tortib Switch, Router, WAP, Gateway, Packet Switching va Optik tolagacha bo‘lgan barcha bilimlarni jamlaymiz.',
    sections: [
      {
        heading: '2-chorakning ikki tayanch ustuni',
        body: '• **Raqamli jamiyat va iqtisod**: `B2C/B2B/C2C`, `EFTPOS`, `Re-order Level`, `Data Mining` (Assotsiatsiya, Klasterlash, Anomaliya), `Filter Bubble`, `Teleworking`, `LMS`, `EHR`.\n• **Tarmoq muhandisligi**: `Switch` (MAC), `Router` (IP), `WAP` (`WPA3`), `Bridge` vs `Gateway` vs `Firewall`, `Packet Switching`, `Optik tola` vs `NFC/Bluetooth/IR`.',
        example: '3-chorakda Internet xavfsizligi, BitTorrent, Loyiha boshqaruvi (Gantt/Critical Path) va Tizimlar hayotiy sikli (SDLC) ni o‘rganamiz!',
      },
    ],
    keyTerms: [
      { term: 'Re-order Level', definition: 'Omborda avtomatik yangi buyurtma beriladigan minimal zaxira darajasi.' },
      { term: 'Packet Switching', definition: 'Maʼlumotni mustaqil paketlarga bo‘lib marshrutlash.' },
      { term: 'Gateway vs Bridge', definition: 'Turli protokollar shlyuzi vs bir xil LAN ko‘prigi.' },
      { term: 'Optik tola', definition: 'Yorug‘lik signali bilan shovqinsiz yuqori tezlikda uzatish.' },
    ],
    steps: [
      '1. Flashcards yordamida 2-chorak terminlarini takrorlang.',
      '2. Yakuniy 5 ta savolni yeching.',
    ],
    practice: [
      {
        task: 'Onlayn do‘kondan karta bilan to‘lov (`EFTPOS`) qilganda maʼlumot qaysi kommutatsiya usulida va qaysi tarmoq qurilmalari orqali bankka yetib boradi?',
        expected: 'Do‘kon **Switch/WAP** → **Router/Firewall** → **Optik tola** magistrali bo‘ylab **Paketli kommutatsiya (Packet Switching)** orqali bank serveriga yetib boradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g11-l32-g1',
        num: '01',
        title: '2-chorak Yakuniy Kartochkalar',
        topic: 'AT jamiyatda & Tarmoqlar',
        difficulty: 'O‘rta',
        engine: 'flashcards',
        config: {
          prompt: '2-chorak asosiy tushunchalarini kartochkalarda takrorlang:',
          cards: [
            { term: 'EFTPOS + Stock Control', definition: 'Karta to‘lovi bilan birga ombor qoldig‘ini kamaytirish va Re-order Level da avtomatik buyurtma berish.', example: 'Supermarket POS' },
            { term: 'Data Mining', definition: 'Katta bazalardan Assotsiatsiya, Klasterlash va Anomaliyalarni topish.', example: 'Karta firibgarligini ushlash' },
            { term: 'Switch vs Router', definition: 'Switch bitta LAN da MAC bo‘yicha; Router tarmoqlararo IP bo‘yicha ishlaydi.', example: 'Sinf LAN ↔ Internet WAN' },
            { term: 'Circuit vs Packet', definition: 'Kanalli kommutatsiya liniyani band qiladi; Paketli esa bo‘lib eng bo‘sh yo‘ldan yuboradi.', example: 'Eski telefon vs Internet' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Do‘kon kassasida karta to‘lovi amalga oshirilishi bilan birga omborda qaysi chegara tekshiriladi?',
        options: ['Aspect Ratio', 'Re-order Level', 'Room Size', 'Clip Speed'],
        answer: 1,
        explanation: 'Re-order Level dan pastga tushsa yangi mahsulot buyurtma qilinadi.',
      },
      {
        prompt: 'Sport musobaqalarida to‘pning chiziqqa tegishini millimetr aniqlikda aniqlovchi kameralar tizimi qaysi?',
        options: ['Hawk-Eye', 'Quishing', 'Mail Merge', 'Gateway'],
        answer: 0,
        explanation: 'Hawk-Eye yuqori tezlikli kameralar bilan to‘p trayektoriyasini hisoblaydi.',
      },
      {
        prompt: 'Turli tarmoq protokollarini bog‘lash uchun qaysi qurilma zarur?',
        options: ['Repeater', 'Gateway (Shlyuz)', 'Hub', 'Bluetooth'],
        answer: 1,
        explanation: 'Gateway turli protokollarni o‘zaro moslashtiradi.',
      },
      {
        prompt: '5 GHz Wi-Fi ning 2.4 GHz ga nisbatan ustunligi nimada?',
        options: [
          'Yuqoriroq uzatish tezligi va qo‘shni shovqinlarning kamligi',
          '10 km masofaga yetishi',
          'Temir devordan oson o‘tishi',
          'Shifrlash talab qilmasligi',
        ],
        answer: 0,
        explanation: '5 GHz kengroq kanal va yuqori tezlik taqdim etadi.',
      },
      {
        prompt: 'Internetda maʼlumotlarni kichik bo‘laklarga bo‘lib, turlicha yo‘llardan yuborish usuli qaysi?',
        options: ['Kanalli kommutatsiya', 'Paketli kommutatsiya', 'Xabarli kommutatsiya', 'Ketma-ket kirish'],
        answer: 1,
        explanation: 'Packet Switching internetning asosiy uzatish modelidir.',
      },
    ],
    teacherNotes: {
      method: '2-chorak yakuniy sarhisobi va 3-chorakdagi SDLC / Loyiha boshqaruviga ko‘prik.',
      timing: 'Takrorlash 15 daq, Flashcards 15 daq, Quiz 15 daq.',
      assessment: 'Chorak takrorlash faolligi.',
      homework: '3-chorakning birinchi mavzusi: Polosa kengligi (Bandwidth) va BitTorrent haqida qisqacha maʼlumot o‘qing.',
    },
  },
];
