import type { Lesson } from './types';

export const GRADE_6_P2B: Lesson[] = [
  {
    id: 'g6-l26',
    grade: 6,
    no: 26,
    part: '2-yarim yillik',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Scratch'],
    objectives: [
      'O‘quvchi Scratchda takrorlash (Repeat), Pen uskunasi, ko‘pburchaklar va protseduralar bo‘yicha bilimlarini sinaydi.',
      'O‘quvchi dekompozitsiya asosida kichik grafik dastur tuza oladi.',
    ],
    intro:
      'Scratch dasturlash bo‘limini yakunlab, takrorlash sikllari, burchaklar formulasi, qalam uskunasi va shaxsiy bloklar (My Blocks) bo‘yicha nazorat ishini topshiramiz.',
    sections: [
      {
        heading: 'Nazoratda tekshiriladigan asosiy tushunchalar',
        body: 'Yopiq muntazam ko‘pburchak chizishda burilish burchagi 360° / tomonlar soniga teng bo‘ladi. Qalam iz qoldirmasdan ko‘chishi uchun Pen up, chizish uchun Pen down qo‘llaniladi. Murakkab rasm kichik protseduralarga bo‘linadi (dekompozitsiya).',
        example: 'Masalan, 5 burchak uchun 72°, 6 burchak uchun 60°, 4 burchak uchun 90° buriladi.',
        tip: 'Kodni ishga tushirishdan oldin har bir blok ketma-ketligini xayolan tekshirib chiqing (Tracing).',
      },
      {
        heading: 'Amaliy topshiriq mezonlari',
        body: 'Amaliy loyihada sahnani tozalash (Erase all), kamida bitta protsedura (My Blocks) va ichma-ich takrorlashdan foydalanish talab etiladi.',
        example: 'Har safar yashil bayroqcha bosilganda yangi naqsh toza sahnada chizilishi kerak.',
      },
    ],
    keyTerms: [
      { term: '360° / N qoidasi', definition: 'Muntazam ko‘pburchak chizishdagi tashqi burilish burchagi formulasi.' },
      { term: 'Pen up / Pen down', definition: 'Chizishni to‘xtatish va yoqish buyruqlari.' },
      { term: 'My Blocks', definition: 'Shaxsiy protsedura yaratish bo‘limi.' },
      { term: 'Dekompozitsiya', definition: 'Katta masalani kichik bo‘laklarga ajratish usuli.' },
    ],
    steps: [
      '1. Scratchda "Oltiburchak" nomli protsedura yarating.',
      '2. Repeat (6) va Turn 60° bilan chizish kodini yozing.',
      '3. Asosiy dasturda Erase all qo‘yib, "Oltiburchak" protsedurasini 6 marta aylantirib chaqiring.',
    ],
    practice: [
      {
        task: 'Pen kengaytmasidan foydalanib yonma-yon 3 ta kvadrat chizuvchi kod yozing.',
        expected: 'Kvadratlar orasida Pen up ishlatilgani sababli ortiqcha bog‘lovchi chiziq bo‘lmaydi.',
        difficulty: 'oson',
      },
      {
        task: 'Dekompozitsiya usulida quyosh va uy rasmini ikkita alohida My Block bilan chizing.',
        expected: 'Ikkala obyekt alohida protsedura orqali chiroyli chiziladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g6-l26-g1',
        num: '01',
        title: 'Scratch nazorat savollari',
        topic: 'Scratch takrorlash va Pen',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Scratch bloklari haqidagi fikrlar to‘g‘ri yoki noto‘g‘riligini belgilang.',
          statements: [
            {
              text: 'Muntazam oltiburchak chizishda Turn 60° ishlatiladi.',
              isTrue: true,
              explanation: '360° / 6 = 60° bo‘lgani uchun har burchakda 60° buriladi.',
            },
            {
              text: 'Pen up buyrug‘i sahnadagi barcha oldingi chiziqlarni o‘chiradi.',
              isTrue: false,
              explanation: 'Pen up faqat qalamni ko‘taradi; tozalash uchun Erase all ishlatiladi.',
            },
            {
              text: 'Dekompozitsiya murakkab vazifani kichik bo‘laklarga ajratish usulidir.',
              isTrue: true,
              explanation: 'Bu yondashuv kod yozish va xatoni topishni osonlashtiradi.',
            },
            {
              text: 'My Blocks bo‘limida yaratilgan protsedurani faqat bir marta chaqirish mumkin.',
              isTrue: false,
              explanation: 'Protsedurani dastur davomida xohlagancha ko‘p marta qayta chaqirish mumkin.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Muntazam 10 burchak chizish uchun Repeat 10 ichida necha gradus burilish yoziladi?',
        options: ['10°', '36°', '45°', '60°'],
        answer: 1,
        explanation: '360° / 10 = 36°.',
      },
      {
        prompt: 'Eski chiziqlarni o‘chirib toza sahnada chizishni boshlash uchun qaysi blok qo‘yiladi?',
        options: ['Erase all', 'Hide', 'Next costume', 'Wait 1'],
        answer: 0,
        explanation: 'Erase all barcha qalam izlarini tozalaydi.',
      },
      {
        prompt: 'Repeat (4) ichida Repeat (3) bo‘lsa, ichki amal jami necha marta takrorlanadi?',
        options: ['7 marta', '12 marta', '4 marta', '3 marta'],
        answer: 1,
        explanation: '4 × 3 = 12 marta.',
      },
      {
        prompt: 'Kodni ishga tushirmasdan natijani qog‘ozda aniqlash qanday nomlanadi?',
        options: ['Tracing (Kuzatish)', 'Formatlash', 'Export', 'Arxivlash'],
        answer: 0,
        explanation: 'Tracing yordamida algoritm qadamlari qo‘lda kuzatiladi.',
      },
      {
        prompt: 'Protsedura yaratilganda Scratch qaysi boshlang‘ich blokni chiqarib beradi?',
        options: ['When clicked', 'Define [blok nomi]', 'Forever', 'Pen down'],
        answer: 1,
        explanation: 'Har bir shaxsiy blok Define sarlavhasi bilan aniqlanadi.',
      },
    ],
    teacherNotes: {
      method: 'Amaliy-nazariy nazorat: o‘quvchilar bitta naqsh chizib, test yechadilar.',
      timing: '25 daqiqa Scratch amaliy nazorat, 15 daqiqa test va o‘yin, 5 daqiqa yakun.',
      assessment: 'Burchak aniqligi, Pen boshqaruvi va protsedura ishlatilishi.',
      homework: 'Keyingi darsga "URL" va "Qidiruv tizimi" tushunchalarini takrorlab kelish.',
    },
  },
  {
    id: 'g6-l27',
    grade: 6,
    no: 27,
    part: '2-yarim yillik',
    title: 'Web manzillar haqida tushuncha. Qidirish tizimini ishlash tamoyili va axborotning ishonchliligi.',
    kind: 'dars',
    hours: 1,
    tools: ['Brauzer'],
    objectives: [
      'O‘quvchi URL (Veb-manzil) qismlarini (protokol, domen nomi, yo‘l) ajrata oladi.',
      'O‘quvchi qidiruv tizimi (Google, DuckDuckGo) qanday ishlashini va topilgan axborotning ishonchliligini tekshirishni biladi.',
    ],
    intro:
      'Har bir uyning aniq manzili bo‘lganidek, internetdagi har bir sahifaning ham URL manzili bor. Lekin internetda uchragan har bir gap ham to‘g‘ri bo‘lavermaydi — uni tekshira olishimiz kerak!',
    sections: [
      {
        heading: 'URL manzili qismlari va qidiruv tizimi',
        body: 'URL (Uniform Resource Locator) — veb-sahifaning to‘liq manzili: masalan, https://uzedu.uz/oz bo‘limlarida "https://" — xavfsiz protokol, "uzedu.uz" — domen nomi (.uz O‘zbekiston domeni), "/oz" — sahifa yo‘li. Qidiruv tizimlari veb-robotlar (crawler) orqali sahifalarni indekslaydi va kalit so‘zlar bo‘yicha eng mos natijalarni chiqaradi.',
        example: '.edu — ta’lim, .gov — davlat tashkiloti, .org — notijorat tashkilot, .com — tijorat saytlari uchun qo‘llaniladi.',
        tip: 'Manzil satrida kichkina qulf belgisi va "https://" bo‘lishi sayt bilan aloqa shifrlanganini bildiradi, ammo baribir sayt nomidagi harflarni hushyorlik bilan tekshiring!',
      },
      {
        heading: 'Axborotning ishonchliligini baholash',
        body: 'Internetga istagan kishi ma’lumot joylashi mumkin. Ishonchlilikni tekshirish uchun 3 savol bering: 1) Muallif yoki tashkilot kim (rasmiy saytmi)? 2) Ma’lumot sanasi yangimi? 3) Boshqa 2–3 ta ishonchli manbada ham tasdiqlanganmi?',
        example: '"Bepul telefon yutdingiz" kabi shubhali blogdan ko‘ra, rasmiy .gov.uz yoki ensiklopediya saytlari ishonchliroqdir.',
      },
    ],
    keyTerms: [
      { term: 'URL', definition: 'Internetdagi veb-sahifa yoki faylning yagona manzil satri.' },
      { term: 'Domen', definition: 'Saytning asosiy nomi va hudud/soha kengaytmasi (masalan, ziyonet.uz).' },
      { term: 'Qidiruv tizimi', definition: 'Kalit so‘zlar bo‘yicha internetdagi ma’lumotlarni topib beruvchi xizmat.' },
      { term: 'Ishonchli manba', definition: 'Muallifi aniq, faktlarga asoslangan va tekshirilgan axborot manbasi.' },
    ],
    steps: [
      '1. Brauzerning manzil satrini ko‘zdan kechiring va https:// hamda domen nomini toping.',
      '2. Qidiruv tizimida "O‘zbekiston tog‘lari" deb izlang.',
      '3. Chiqqan natijalardan .uz rasmiy yoki ta’lim saytlarini tanlab, ma’lumot sanasini tekshiring.',
    ],
    practice: [
      {
        task: '"https://kitob.uz/informatika" manzilini protokol, domen va sahifa yo‘liga ajratib yozing.',
        expected: 'Protokol: https://, Domen: kitob.uz, Yo‘l: /informatika.',
        difficulty: 'oson',
      },
      {
        task: 'Soxta (feyk) yangilikni haqiqiysidan ajratish uchun 3 ta tekshiruv qoidasini tuzing.',
        expected: 'Manba/domen, nashr sanasi va muqobil rasmiy manbalarda tasdiqlanishi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g6-l27-g1',
        num: '01',
        title: 'URL qismlari va domenlar',
        topic: 'Veb manzillar',
        difficulty: 'Oson',
        engine: 'fillblank',
        config: {
          prompt: 'Veb-manzil va internet axboroti haqidagi gaplarni to‘g‘ri atamalar bilan to‘ldiring.',
          template: 'Saytning internetdagi to‘liq manzili {{0}} deyiladi. Shifrlangan xavfsiz aloqa {{1}} protokoli bilan boshlanadi. Davlat tashkilotlari domenlari odatda {{2}} bilan tugaydi.',
          blanks: [
            { options: ['URL', 'CPU', 'RAM'], answer: 'URL' },
            { options: ['https://', 'ftp://', 'txt://'], answer: 'https://' },
            { options: ['.gov', '.mp3', '.png'], answer: '.gov' },
          ],
          hint: 'Veb-manzil — URL, xavfsiz protokol — https://, hukumat domeni — .gov.',
          explanation: 'URL veb-sahifani topadi, HTTPS ma’lumotlarni himoyalaydi, .gov esa rasmiy davlat domenidir.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Veb-sahifaning internetdagi aniq manzili qisqacha nima deb ataladi?',
        options: ['USB', 'URL', 'PDF', 'GIF'],
        answer: 1,
        explanation: 'URL (Uniform Resource Locator) — veb-manzil.',
      },
      {
        prompt: 'Qaysi protokol ma’lumotlarni shifrlab xavfsiz uzatadi?',
        options: ['http://', 'https://', 'doc://', 'file://'],
        answer: 1,
        explanation: 'Oxiridagi "s" (Secure) aloqaning himoyalanganini bildiradi.',
      },
      {
        prompt: 'Qidiruv tizimi saytlar haqidagi ma’lumotni oldindan qanday yig‘adi?',
        options: [
          'Odamlar qo‘ng‘iroq qiladi',
          'Maxsus avtomatik robotlar (indekslash) orqali',
          'Printerdan chiqarib',
          'Faqat tunda',
        ],
        answer: 1,
        explanation: 'Qidiruv botlari sahifalarni ko‘rib chiqib indeks bazasiga kiritadi.',
      },
      {
        prompt: 'Quyidagi domenlardan qaysi biri odatda ta’lim muassasalariga tegishli?',
        options: ['.edu', '.mp4', '.zip', '.game'],
        answer: 0,
        explanation: '.edu (Education) ta’lim muassasalari saytlarida ishlatiladi.',
      },
      {
        prompt: 'Internetdan topilgan ma’lumot ishonchli ekanini qanday bilamiz?',
        options: [
          'Sarlavhasi katta harflarda bo‘lsa',
          'Ko‘p rasmi bo‘lsa',
          'Rasmiy manba, muallif, sana aniq va boshqa manbalar ham tasdiqlasa',
          'Birinchi chiqqan sayt bo‘lsa kifoya',
        ],
        answer: 2,
        explanation: 'Manba nufuzi, muallif, yangilik sanasi va faktlarni solishtirish eng muhim mezonlardir.',
      },
    ],
    teacherNotes: {
      method: 'Haqiqiy va soxta yangilik misolini taqqoslab faktcheking mashqi o‘tkazish.',
      timing: '12 daqiqa tushuntirish, 18 daqiqa qidiruv va solishtirish, 15 daqiqa o‘yin va test.',
      assessment: 'URL qismlarini ajratish va ishonchsiz manba belgilarini ayta olish.',
      homework: '3 ta ta’limiy .uz saytining URL manzilini yozib keling.',
    },
  },
  {
    id: 'g6-l28',
    grade: 6,
    no: 28,
    part: '2-yarim yillik',
    title: 'Axborotni filtrlash. Web-sahifa, web-sayt, URL manzilidagi matnlarni saqlash',
    kind: 'dars',
    hours: 1,
    tools: ['Brauzer', 'Word'],
    objectives: [
      'O‘quvchi veb-sahifa va veb-sayt o‘rtasidagi farqni tushuntira oladi.',
      'O‘quvchi qidiruv natijalarini filtrlab, kerakli matn va manbani mualliflik huquqini hurmat qilgan holda saqlay oladi.',
    ],
    intro:
      'Qidiruv tizimi millionlab sahifa chiqaradi. Bizga esa faqat aniq, yoshimizga va mavzuga mos natijalar kerak. Buning uchun filtrlardan foydalanish va matnlarni manbasi bilan to‘g‘ri saqlashni o‘rganamiz.',
    sections: [
      {
        heading: 'Veb-sahifa, veb-sayt va axborotni filtrlash',
        body: 'Veb-sahifa — internetdagi bitta alohida hujjat (kitobning bitta beti kabi). Veb-sayt esa bir mavzu va umumiy domen ostida birlashtirilgan veb-sahifalar to‘plami (butun kitob). Qidiruvda aniq ibora izlash uchun qo‘shtirnoq ("..."), keraksiz so‘zni chiqarib tashlash uchun minus (-) belgisi hamda sana, til va tur (Rasmlar, Yangiliklar) filtrlaridan foydalaniladi.',
        example: '"Amir Temur" -o‘yin qidiruvi o‘yinlar emas, faqat tarixiy maqolalarni chiqaradi.',
        tip: 'Internetdan olingan matnni o‘zingizniki qilib ko‘rsatmang (plagiat). Matn tagiga qaysi URL manzildan olinganini albatta yozib qo‘ying.',
      },
      {
        heading: 'Veb-sahifadagi matn va havolalarni saqlash',
        body: 'Brauzerda kerakli sahifani yo‘qotmaslik uchun Xatcho‘pga (Bookmark — Ctrl+D) saqlash mumkin. Matn qismini saqlash uchun esa uni belgilab Ctrl+C bilan nusxalab, Word hujjatiga Ctrl+V qilib joylaymiz va manba URL ini ko‘rsatamiz.',
        example: 'Sahifani butunlay kompyuterga saqlash uchun Ctrl+S (Save Page As) tugmasi ishlatiladi.',
      },
    ],
    keyTerms: [
      { term: 'Veb-sahifa', definition: 'Brauzerda ochiladigan bitta alohida internet hujjati.' },
      { term: 'Veb-sayt', definition: 'Umumiy domen ostida bog‘langan bir nechta veb-sahifalar majmuasi.' },
      { term: 'Qidiruv filtri', definition: 'Natijalarni sana, til, fayl turi yoki aniq so‘z bo‘yicha toraytirish vositasi.' },
      { term: 'Bookmark (Xatcho‘p)', definition: 'Kerakli veb-sahifa URL manzilini brauzerda tez ochish uchun saqlash.' },
    ],
    steps: [
      '1. Qidiruv tizimida qisqa iborani qo‘shtirnoq ichida izlang va natijalar sonini solishtiring.',
      '2. Qidiruv vositalaridan (Tools) "Oxirgi yil" va "O‘zbek tili" filtrini tanlang.',
      '3. Foydali sahifani Ctrl+D bilan Bookmark qiling.',
      '4. Bir abzats matnni hamda URL manzilni Word hujjatiga ko‘chirib saqlang.',
    ],
    practice: [
      {
        task: 'Maktab referati uchun faqat PDF formatdagi ma’lumot topish qidiruv so‘rovini yozing.',
        expected: 'masalan: informatika asoslari filetype:pdf.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Topilgan maqoladan 3 gap ko‘chirib, pastiga manba URL manzilini yozing.',
        expected: 'Matn tartibli saqlanadi va mualliflik manbasi ko‘rsatiladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g6-l28-g1',
        num: '01',
        title: 'Brauzer oynasini boshqar',
        topic: 'Brauzer uskunalari',
        difficulty: 'Oson',
        engine: 'hotspot',
        config: {
          prompt: 'Yoqqan veb-sahifa manzilini keyinchalik tez topish uchun Xatcho‘p (Bookmark) ga saqlash tugmasini toping.',
          appTitle: 'Veb Brauzer',
          layout: 'browser',
          targetZoneId: 'bookmark',
          zones: [
            { id: 'back', label: '← Orqaga', icon: '◀', group: 'Navigatsiya' },
            { id: 'refresh', label: '↻ Yangilash', icon: '↻', group: 'Navigatsiya' },
            { id: 'address', label: 'Manzil satri (URL)', icon: '🔒', group: 'Manzil' },
            { id: 'bookmark', label: '☆ Xatcho‘p (Bookmark)', icon: '⭐', group: 'Saqlash' },
            { id: 'downloads', label: '⬇ Yuklamalar', icon: '⬇', group: 'Fayl' },
          ],
          explanation: 'Yulduzcha (☆ / Ctrl+D) belgisi joriy veb-sahifa URL ini Xatcho‘plar paneliga saqlaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Veb-sayt va veb-sahifa o‘rtasidagi to‘g‘ri farq qaysi?',
        options: [
          'Ikkalasi bir xil narsa',
          'Veb-sayt — bitta umumiy manzil ostidagi ko‘plab veb-sahifalar to‘plami',
          'Veb-sahifa kattaroq',
          'Veb-sayt internetsiz ochiladi',
        ],
        answer: 1,
        explanation: 'Kitob (veb-sayt) sahifalardan (veb-sahifalardan) tashkil topgani kabi.',
      },
      {
        prompt: 'Qidiruvda so‘zlarni aynan shu tartibda topish uchun qaysi belgi qo‘llaniladi?',
        options: ['Yulduzcha *', 'Qo‘shtirnoq "..."', 'Undov !', 'Foiz %'],
        answer: 1,
        explanation: 'Qo‘shtirnoq ichidagi ibora qidiruv tizimiga aynan shu so‘z birikmasini topishni buyuradi.',
      },
      {
        prompt: 'Brauzerda joriy sahifani Xatcho‘pga (Bookmark) qo‘shish tezkor tugmasi qaysi?',
        options: ['Ctrl + D', 'Ctrl + P', 'Ctrl + X', 'Alt + Tab'],
        answer: 0,
        explanation: 'Ctrl + D brauzerlarda Bookmark (Xatcho‘p) saqlash tugmasidir.',
      },
      {
        prompt: 'Internetdan ko‘chirilgan matn ostiga URL manzilini yozib qo‘yish nima uchun kerak?',
        options: [
          'Matnni bezash uchun',
          'Axborot manbasini ko‘rsatish va mualliflikni hurmat qilish uchun',
          'Sahifa rangini o‘zgartirish uchun',
          'Shart emas',
        ],
        answer: 1,
        explanation: 'Manba URL ni ko‘rsatish halol ilmiy ish va mualliflik huquqi qoidasidir.',
      },
      {
        prompt: 'Qidiruv natijalaridan bitta keraksiz so‘zni chiqarib tashlash uchun qaysi belgi ishlatiladi?',
        options: ['+', '-', '=', '?'],
        answer: 1,
        explanation: 'So‘z oldidan minus (-) qo‘yilsa, shu so‘z qatnashgan natijalar chiqarilmaydi.',
      },
    ],
    teacherNotes: {
      method: 'Filtrlashsiz va qo‘shtirnoq/filtr bilan chiqqan natijalar sonini taqqoslash.',
      timing: '10 daqiqa tushuntirish, 20 daqiqa qidiruv va Wordga saqlash, 15 daqiqa Hotspot va test.',
      assessment: 'Aniq filtr qo‘llab, manba URL ni to‘g‘ri ko‘rsatganligi.',
      homework: 'O‘zingiz yoqtirgan 3 ta foydali saytni brauzerda Bookmark qilish tartibini yozing.',
    },
  },
  {
    id: 'g6-l29',
    grade: 6,
    no: 29,
    part: '2-yarim yillik',
    title: 'Elektron xatni yozish, tahrirlash, o‘qish, javob berish va matn bilan ishlash uskunalari. Foydalanuvchi manzillarini qo‘shish',
    kind: 'dars',
    hours: 1,
    tools: ['Elektron pochta'],
    objectives: [
      'O‘quvchi elektron pochta (E-mail) manzilining tuzilishini va xat yozish maydonlarini (To, Subject, Body) biladi.',
      'O‘quvchi kelgan xatni o‘qish, javob berish (Reply), yo‘naltirish (Forward) va kontaktlar qo‘shishni bajaradi.',
    ],
    intro:
      'Elektron pochta — dunyoning istalgan nuqtasiga bir necha soniyada xat va hujjat yuborishning rasmiy va qulay usuli. Keling, madaniyatli elektron xat yozishni o‘rganamiz!',
    sections: [
      {
        heading: 'Elektron xat yozish va tahrirlash',
        body: 'Elektron pochta manzili "foydalanuvchi@domen" shaklida yoziladi (masalan, ali.valiyev@maktab.uz). Yangi xat yozishda (Compose / Yozish): "To" (Kimga) — oluvchi manzili; "CC" — nusxa olish; "Subject" (Mavzu) — xat mazmunini qisqacha bildiruvchi sarlavha; "Body" — xatning asosiy matni. Matn uskunalari bilan shrift, ro‘yxat va ranglarni tahrirlash mumkin.',
        example: 'Mavzu: "6-A sinf uy vazifasi — Informatika". Salomlashish, aniq xabar va xayrlashish madaniyati saqlanadi.',
        tip: 'Mavzu (Subject) maydonini hech qachon bo‘sh qoldirmang va butun xatni KATTA HARFLARDA yozmang — internet odobida bu baqirish belgisi hisoblanadi!',
      },
      {
        heading: 'Javob berish (Reply) va kontakt qo‘shish',
        body: 'Kiruvchi xatlar (Inbox) ni o‘qigach, faqat yuboruvchiga javob yozish uchun "Reply", hamma nusxa oluvchilarga javob uchun "Reply All", xatni boshqa odamga uzatish uchun "Forward" ishlatiladi. Tez-tez yozishadigan do‘stlar va ustozlar manzili Kontaktlar (Contacts) ga saqlab qo‘yiladi.',
        example: 'Sinf rahbari yuborgan e’longa savol berish uchun "Reply" tugmasi bosiladi.',
      },
    ],
    keyTerms: [
      { term: 'E-mail manzili', definition: '@ belgisi bilan ajratilgan foydalanuvchi va pochta serveri nomi.' },
      { term: 'Subject (Mavzu)', definition: 'Xatni ochmasdan turib mazmunini tushunishga yordam beruvchi sarlavha.' },
      { term: 'Reply / Forward', definition: 'Xatga javob qaytarish / xatni boshqa manzilga yo‘naltirish.' },
      { term: 'Kontaktlar (Contacts)', definition: 'Foydalanuvchilarning elektron pochta manzillari saqlanadigan daftarcha.' },
    ],
    steps: [
      '1. Pochta interfeysida "Compose" (Yozish) tugmasini bosing.',
      '2. "To" maydoniga o‘qituvchi yoki sinfdosh manzilini kiriting.',
      '3. "Subject" ga aniq mavzu yozing, matn qismiga salomlashuv va 3 qatorli xabar yozing.',
      '4. Kontaktlar bo‘limiga yangi do‘stingizning ismi va e-mail manzilini qo‘shing.',
    ],
    practice: [
      {
        task: 'O‘qituvchingizga "Loyiha ishim haqida savol" mavzusida xushmuomala xat namunasini yozing.',
        expected: 'Mavzu to‘ldirilgan, salomlashish, asosiy savol va imzo mavjud.',
        difficulty: 'oson',
      },
      {
        task: 'Reply va Reply All buyruqlari farqini aniq misolda tushuntiring.',
        expected: 'Reply — faqat yuboruvchiga, Reply All — xatdagi barcha manzillarga javob beradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g6-l29-g1',
        num: '01',
        title: 'Elektron xat atamalari',
        topic: 'Elektron pochta',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'Elektron pochta tugma va maydonlarini ularning vazifasi bilan moslang.',
          pairs: [
            { left: 'To (Kimga)', right: 'Qabul qiluvchining e-mail manzili yoziladigan maydon' },
            { left: 'Subject (Mavzu)', right: 'Xatning qisqa sarlavhasi' },
            { left: 'Reply', right: 'Kelgan xat muallifiga javob yozish' },
            { left: 'Forward', right: 'Olingan xatni boshqa odamga uzatish' },
            { left: 'Inbox', right: 'Yangi kelgan xatlar saqlanadigan papka' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Elektron pochta manzilida albatta qaysi belgi bo‘lishi shart?',
        options: ['#', '@', '&', '%'],
        answer: 1,
        explanation: 'Har bir e-mail manzili foydalanuvchi@server shaklida @ belgisiga ega.',
      },
      {
        prompt: 'Olingan xatni uchinchi bir odamga yuborish buyrug‘i qaysi?',
        options: ['Reply', 'Delete', 'Forward', 'Draft'],
        answer: 2,
        explanation: 'Forward — xatni boshqa manzilga yo‘naltirish (uzatish) tugmasidir.',
      },
      {
        prompt: 'Yangi xat yozishda xat mazmunini qisqa tushuntiruvchi maydon nima deyiladi?',
        options: ['Subject (Mavzu)', 'Spam', 'Trash', 'CC'],
        answer: 0,
        explanation: 'Subject maydoniga xatning qisqa va aniq mavzusi yoziladi.',
      },
      {
        prompt: 'Internet odobi (Netiquette) bo‘yicha nima qilish noto‘g‘ri?',
        options: [
          'Salomlashish va xayrlashish',
          'Butun xatni KATTA HARFLAR bilan yozish',
          'Mavzu yozish',
          'Imloni tekshirish',
        ],
        answer: 1,
        explanation: 'To‘liq bosh harflar bilan yozish qo‘pollik va baqirish sifatida qabul qilinadi.',
      },
      {
        prompt: 'Do‘stlarning e-mail manzillarini har gal eslab yozmaslik uchun qayerga saqlaymiz?',
        options: ['Trash papkasiga', 'Kontaktlar (Contacts) ga', 'Spamga', 'Recycle Bin ga'],
        answer: 1,
        explanation: 'Kontaktlar manzillar daftarchasi tezkor tanlash imkonini beradi.',
      },
    ],
    teacherNotes: {
      method: 'Sinf ichida xat yozish odobi va maydonlarning vazifasini rol o‘yini bilan ko‘rsatish.',
      timing: '10 daqiqa tushuntirish, 20 daqiqa xat maketini yozish, 15 daqiqa Match o‘yini va test.',
      assessment: 'E-mail odobiga rioya qilingan to‘liq xat tuzilishi.',
      homework: 'To‘g‘ri va xato yozilgan e-mail manzillariga 3 tadan misol yozib keling.',
    },
  },
  {
    id: 'g6-l30',
    grade: 6,
    no: 30,
    part: '2-yarim yillik',
    title: 'Ilova qilingan hujjatlarni ochish, elektron xatga hujjat ilova qilish',
    kind: 'dars',
    hours: 1,
    tools: ['Elektron pochta'],
    objectives: [
      'O‘quvchi elektron xatga rasm, hujjat yoki jadval faylini ilova (Attachment) qilishni biladi.',
      'O‘quvchi kelgan xatdagi ilova fayllarni xavfsiz ochish va yuklab olish qoidalariga amal qiladi.',
    ],
    intro:
      'Elektron pochta orqali faqat matn emas, balki tayyor Word inshosi, Excel jadvali yoki chizgan rasmingizni ham yuborish mumkin. Buning uchun qog‘oz qisqich (Skrepka) tugmasi yordamga keladi!',
    sections: [
      {
        heading: 'Xatga hujjat ilova qilish (Attach File)',
        body: 'Yangi xat oynasida qog‘oz qisqich (📎 — Attach) belgisi bor. Uni bosib, kompyuterdagi kerakli faylni (masalan, referat.docx yoki rasm.png) tanlaymiz. Ko‘pchilik pochta xizmatlari bitta xatda 20–25 MB gacha ilova yuborishga ruxsat beradi.',
        example: 'Uy vazifasini yuborishda "Ilovani biriktirdim" deb xat matnida ham yozib qo‘yish yaxshi odatdir.',
        tip: 'Xat yuborish (Send) tugmasini bosishdan oldin fayl yuklanib bo‘lganini (100% ko‘ringanini) tekshiring. Katta fayllarni ZIP arxiv qilib kichraytirish mumkin.',
      },
      {
        heading: 'Ilova fayllarni xavfsiz ochish',
        body: 'Notanish odamdan kelgan shubhali ilovalarni (ayniqsa .exe, .bat, .scr yoki g‘alati zip fayllarni) hech qachon ochmang — ular kompyuter virusi bo‘lishi mumkin! Tanish manzildan kelgan ishonchli hujjatni esa yuklab olish (Download) tugmasi bilan saqlab ochamiz.',
        example: 'O‘qituvchi yuborgan "dars_jadvali.pdf" xavfsiz, lekin noma’lum "sovga.exe" xavfli.',
      },
    ],
    keyTerms: [
      { term: 'Ilova (Attachment)', definition: 'Elektron xatga qo‘shib yuboriladigan fayl (hujjat, rasm, jadval).' },
      { term: '📎 Skrepka belgisi', definition: 'Xatga fayl biriktirish tugmasi.' },
      { term: 'Hajm cheklovi', definition: 'Pochta orqali bitta xatda yuboriladigan fayllarning eng katta hajmi (odatda 25 MB).' },
      { term: 'Xavfsiz yuklab olish', definition: 'Faqat ishonchli yuboruvchidan kelgan ilovalarni tekshirib ochish.' },
    ],
    steps: [
      '1. Yangi xat yozish oynasini oching va oluvchi hamda mavzuni kiriting.',
      '2. Qog‘oz qisqich (📎 Attach) tugmasini bosing.',
      '3. Tayyorlagan matnli hujjatingizni tanlab, yuklanishini kuting.',
      '4. Kelgan xatdagi ishonchli ilovani kompyuteringizga yuklab olib ko‘zdan kechiring.',
    ],
    practice: [
      {
        task: '1-yarim yillikda yasagan buklet faylingizni xatga ilova qilish ketma-ketligini bajaring.',
        expected: 'Fayl nomi xat ostida ilova sifatida ko‘rinadi.',
        difficulty: 'oson',
      },
      {
        task: '3 ta turli kengaytmali fayl (.pdf, .jpg, .exe) dan qaysi birini ochish xavfliroq ekanini asoslang.',
        expected: 'Noma’lum .exe dastur fayllari virus tashishi mumkinligi tushuntiriladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g6-l30-g1',
        num: '01',
        title: 'Xat va ilova xavfsizligi',
        topic: 'Ilova bilan ishlash',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Qaysi harakat xat ilovalari bilan ishlashda eng to‘g‘ri va xavfsiz?',
          scenario: 'Sizga notanish manzildan "Siz g‘olib bo‘ldingiz! Sovrin.exe" nomli ilova biriktirilgan elektron xat keldi. Nima qilasiz?',
          options: [
            {
              text: 'Faylni yuklab olib darhol ishga tushiraman',
              isCorrect: false,
              feedback: 'Xavfli! Notanish .exe fayllar ko‘pincha zararli dastur (virus) bo‘ladi.',
            },
            {
              text: 'Ilovani ochmayman, xatni Spam/Trash ga tashlayman yoki o‘chiraman',
              isCorrect: true,
              feedback: 'To‘g‘ri qaror! Shubhali ilovalarni hech qachon ochmaslik kiberxavfsizlikning asosiy qoidasidir.',
            },
            {
              text: 'Faylni barcha sinfdoshlarimga Forward qilaman',
              isCorrect: false,
              feedback: 'Noto‘g‘ri! Shubhali xatlarni boshqalarga tarqatish xavfni ko‘paytiradi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Elektron pochta interfeysida fayl ilova qilish (Attach) tugmasi qaysi belgi bilan ko‘rsatiladi?',
        options: ['Qaychi', 'Qog‘oz qisqich (Skrepka 📎)', 'Lupa', 'Kamera'],
        answer: 1,
        explanation: 'Qog‘oz qisqich (Paperclip) belgisi xatga fayl biriktirishni bildiradi.',
      },
      {
        prompt: 'Ko‘pchilik bepul pochta xizmatlarida bitta xat ilovasi uchun odatiy hajm chegarasi qancha?',
        options: ['1 KB', '25 MB atrofida', '500 GB', 'Cheklanmagan'],
        answer: 1,
        explanation: 'Odatda pochta ilovalari 20–25 MB gacha cheklangan bo‘ladi.',
      },
      {
        prompt: 'Notanish odamdan kelgan qaysi turdagi ilovani ochish eng xavfli?',
        options: ['Oddiy .txt matn', '.exe bajariluvchi fayl', 'O‘qituvchi yuborgan .pdf', 'Maktab rasmi .jpg'],
        answer: 1,
        explanation: 'Noma’lum manbadan kelgan .exe fayllar tizimga zararli dastur o‘rnatishi mumkin.',
      },
      {
        prompt: 'Ilovani doimiy saqlash uchun xat ichida qaysi tugmani bosamiz?',
        options: ['Download (Yuklab olish)', 'Reply', 'Spam', 'Compose'],
        answer: 0,
        explanation: 'Download ilova faylini kompyuterning Downloads papkasiga saqlaydi.',
      },
      {
        prompt: 'Agar yubormoqchi bo‘lgan fayl hajmi pochta limitidan katta bo‘lsa nima qilish mumkin?',
        options: [
          'Matnni o‘chirish',
          'Faylni ZIP arxivlash yoki bulutli havola yuborish',
          'Pochta parolini berish',
          'Printerda chop etish',
        ],
        answer: 1,
        explanation: 'Arxivlash fayl hajmini kichraytiradi yoki bulutli disk havolasi ulashiladi.',
      },
    ],
    teacherNotes: {
      method: 'Haqiqiy va firibgarlik (phishing) ilovali xat namunalarini taqqoslash.',
      timing: '10 daqiqa tushuntirish, 20 daqiqa fayl ilova qilish mashqi, 15 daqiqa CaseStudy va test.',
      assessment: 'Faylni to‘g‘ri biriktirish va xavfli ilovalarni ajrata bilish.',
      homework: '25 MB dan katta video yoki rasm arxivini qanday yuborish mumkinligini yozing.',
    },
  },
  {
    id: 'g6-l31',
    grade: 6,
    no: 31,
    part: '2-yarim yillik',
    title: 'Elektron pochta papkalarini boshqarish. Loyiha ishi',
    kind: 'loyiha',
    hours: 1,
    tools: ['Elektron pochta'],
    objectives: [
      'O‘quvchi pochta qutisidagi tizim papkalari (Inbox, Sent, Drafts, Spam, Trash) vazifasini biladi.',
      'O‘quvchi shaxsiy papkalar/teglar yaratib, xatlarni tartibga solish loyihasini bajaradi.',
    ],
    intro:
      'Pochta qutisida yuzlab xat to‘plansa, keraklisini topish qiyinlashadi. Bugun xatlarni "Maktab", "Uy vazifalari", "Do‘stlar" kabi papkalarga ajratib boshqarish loyihasini bajaramiz!',
    sections: [
      {
        heading: 'Asosiy tizim papkalari',
        body: 'Inbox (Kiruvchi) — yangi xatlar; Sent (Yuborilgan) — siz jo‘natgan xatlar; Drafts (Qoralama) — yozib tugatilmagan xatlar; Spam — keraksiz reklama va shubhali xatlar; Trash (Savat) — o‘chirilgan xatlar (30 kundan keyin butunlay o‘chadi).',
        example: 'Xatni yozib turib internet uzilsa ham, u Drafts papkasida avtomatik saqlanib qoladi.',
        tip: 'Kerakli xat tasodifan Spam papkasiga tushib qolishi mumkin — muhim xatni kutayotganda Spam ni ham tekshiring, lekin shubhali havolalarni bosmang.',
      },
      {
        heading: 'Shaxsiy papka (Label) yaratish va saralash',
        body: 'Pochta panelidan "Yangi papka yaratish" (Create new folder/label) orqali mavzu bo‘yicha papkalar ochiladi. Xatni tanlab "Move to" tugmasi bilan tegishli papkaga ko‘chirish yoki yulduzcha (Star) bilan muhimlarini ajratish mumkin.',
        example: '"Informatika", "Matematika" va "Tanlovlar" papkalarini yaratib xatlarni joylashtiramiz.',
      },
    ],
    keyTerms: [
      { term: 'Drafts (Qoralama)', definition: 'Hali yuborilmagan, tugallanmagan xatlar saqlanadigan papka.' },
      { term: 'Sent (Yuborilganlar)', definition: 'Siz muvaffaqiyatli jo‘natgan barcha xatlar arxivi.' },
      { term: 'Spam', definition: 'Avtomatik ajratilgan reklama va shubhali xatlar papkasi.' },
      { term: 'Shaxsiy papka (Label)', definition: 'Xatlarni mavzular bo‘yicha tartiblash uchun foydalanuvchi ochgan bo‘lim.' },
    ],
    steps: [
      '1. Pochta qutisida 3 ta yangi papka yarating: "Maktab", "Loyihalar", "Muhim".',
      '2. Kelgan xatlarni mazmuniga qarab ushbu papkalarga ko‘chiring.',
      '3. Bitta chala xat yozib, yubormay yoping va uning Drafts da saqlanganini tekshiring.',
      '4. Keraksiz sinov xatini Trash ga o‘tkazing.',
    ],
    practice: [
      {
        task: '8 ta aralash mavzudagi xatni 3 ta papka va Savat o‘rtasida tartiblab joylashtiring.',
        expected: 'Inbox bo‘shab, barcha xatlar o‘z papkasida tartibli joylashadi.',
        difficulty: 'oson',
      },
      {
        task: 'Maktab xatlari kelganda avtomatik "Maktab" papkasiga tushishi uchun filtr qoidasini yozing.',
        expected: 'From: @maktab.uz → Move to "Maktab" qoidasi tuziladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g6-l31-g1',
        num: '01',
        title: 'Xatlarni papkalarga ajrat',
        topic: 'Pochta papkalari',
        difficulty: 'Oson',
        engine: 'sort',
        config: {
          prompt: 'Har bir xat holatini qaysi tizim papkasiga mos kelishiga qarab ajrating.',
          buckets: ['Drafts (Qoralama)', 'Sent (Yuborilgan)', 'Spam (Shubhali)'],
          items: [
            { label: 'Chala yozilib saqlangan insho xati', bucket: 'Drafts (Qoralama)' },
            { label: 'Kecha ustozga muvaffaqiyatli jo‘natilgan fayl', bucket: 'Sent (Yuborilgan)' },
            { label: 'Noma’lum "Million yutib oling!" xati', bucket: 'Spam (Shubhali)' },
            { label: 'Yuborishga tayyorlanayotgan, lekin Send bosilmagan xat', bucket: 'Drafts (Qoralama)' },
            { label: 'Do‘stga yuborib bo‘lingan tabrik xati', bucket: 'Sent (Yuborilgan)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Yozilayotgan, ammo hali yuborilmagan xat qaysi papkada saqlanadi?',
        options: ['Sent', 'Drafts (Qoralama)', 'Trash', 'Inbox'],
        answer: 1,
        explanation: 'Drafts tugallanmagan xatlarni saqlab turadi.',
      },
      {
        prompt: 'Siz jo‘natgan xat rostdan ham ketganini qaysi papkadan tekshirasiz?',
        options: ['Inbox', 'Sent', 'Spam', 'Drafts'],
        answer: 1,
        explanation: 'Sent (Yuborilganlar) papkasida jo‘natilgan barcha xatlar nusxasi turadi.',
      },
      {
        prompt: 'O‘chirilgan xatlar dastlab qayerga tushadi?',
        options: ['Sent', 'Trash (Savat)', 'Drafts', 'Contacts'],
        answer: 1,
        explanation: 'Trash papkasi xatni ma’lum muddat saqlab turadi, kerak bo‘lsa tiklash mumkin.',
      },
      {
        prompt: 'Ko‘p xatlarni mavzuga ko‘ra ajratib saqlash uchun eng qulay usul nima?',
        options: [
          'Hammasini o‘chirish',
          'Yangi shaxsiy papkalar (Labels) yaratib ko‘chirish',
          'Boshqalarga yuborish',
          'Printerda chiqarish',
        ],
        answer: 1,
        explanation: 'Shaxsiy papkalar pochta qutisini tartibli saqlash imkonini beradi.',
      },
      {
        prompt: 'Spam papkasidagi xatlar bilan qanday munosabatda bo‘lish kerak?',
        options: [
          'Barcha havolalarini bosish',
          'Ehtiyotkorlik bilan tekshirish va shubhalilarini o‘chirish',
          'Kontaktlarga qo‘shish',
          'Hammasini Sent ga ko‘chirish',
        ],
        answer: 1,
        explanation: 'Spamda reklamalar va firibgarlik xatlari bo‘ladi, ulardagi noma’lum havolalarni bosmaslik kerak.',
      },
    ],
    teacherNotes: {
      method: 'Loyiha: "Tartibli elektron pochta qutisi" tashkil etish.',
      timing: '8 daqiqa ko‘rsatma, 27 daqiqa loyiha ishi, 10 daqiqa Sort o‘yini va test.',
      assessment: 'Papkalar mantiqan to‘g‘ri tuzilgani va xatlar saralangani.',
      homework: 'Shaxsiy pochta qutingiz uchun kerak bo‘ladigan 5 ta papka nomini yozib keling.',
    },
  },
  {
    id: 'g6-l32',
    grade: 6,
    no: 32,
    part: '2-yarim yillik',
    title: 'Taqdimotni yaratish rejasi. Maketni tanlash va slaydga matn, tasvir, ovoz qo‘shish',
    kind: 'dars',
    hours: 1,
    tools: ['PowerPoint', 'LibreOffice Impress'],
    objectives: [
      'O‘quvchi taqdimot yaratishdan oldin reja tuzish va har bir slaydga mos maket (Layout) tanlashni biladi.',
      'O‘quvchi slaydga qisqa matn, sifatli tasvir va audio/ovoz qo‘sha oladi.',
    ],
    intro:
      'Yaxshi taqdimot ekranga butun kitobni ko‘chirish emas! Taqdimot — tomoshabin e’tiborini ushlab turuvchi aniq reja, qisqa matn, mos rasm va o‘rinli ovoz uyg‘unligidir.',
    sections: [
      {
        heading: 'Taqdimot rejasi va maket tanlash',
        body: 'Taqdimotni yaratishdan oldin reja tuzamiz: 1-slayd — Titul (Mavzu va muallif); 2–4-slaydlar — Asosiy fikrlar; Oxirgi slayd — Xulosa. Har bir slayd mazmuniga qarab Layout (Maket: Title Slide, Title and Content, Two Content) tanlanadi.',
        example: 'Ikki narsani solishtiradigan slayd uchun "Two Content" (Ikki ustunli) maketi eng qulay.',
        tip: '"6×6 qoidasi": Bitta slaydda 6 qatordan ko‘p matn va har qatorda 6–8 so‘zdan ko‘p yozmang! Katta matnni slaydga joylashtirsangiz, tinglovchilar o‘qish bilan ovora bo‘lib sizni eshitmay qoladi.',
      },
      {
        heading: 'Slaydga tasvir va ovoz qo‘shish',
        body: 'Insert → Pictures orqali mavzuga mos tiniq rasm qo‘shiladi. Insert → Audio orqali fon musiqasi yoki o‘qituvchi/o‘quvchining ovozli tushuntirishi biriktiriladi. Slayd foni va matn rangi keskin kontrastda (masalan, oq fonda to‘q matn) bo‘lishi shart.',
        example: 'Tabiat haqidagi slaydda qushlar ovozi (Audio) va tog‘ manzarasi taqdimotni jonlantiradi.',
      },
    ],
    keyTerms: [
      { term: 'Slayd maketi (Layout)', definition: 'Slaydda sarlavha, matn va rasm joylashuvini belgilovchi tayyor shablon.' },
      { term: 'Titul slaydi', definition: 'Taqdimotning mavzu va muallif nomi yoziladigan birinchi slaydi.' },
      { term: '6×6 qoidasi', definition: 'Slayd matnini qisqa, tushunarli va ixcham saqlash qoidasi.' },
      { term: 'Audio ilova', definition: 'Slaydga joylashtirilgan tovush effekti yoki ovozli sharh.' },
    ],
    steps: [
      '1. PowerPoint yoki Impress dasturida "O‘zbekiston qadamjolari" bo‘yicha 4 slaydlik reja tuzing.',
      '2. 1-slaydga Title Slide, 2–3-slaydlarga Two Content maketini tanlang.',
      '3. Qisqa kalit so‘zlar bilan matn va tiniq rasm qo‘shing.',
      '4. Insert → Audio yordamida birinchi slaydga qisqa ovoz qo‘shib F5 bilan tekshiring.',
    ],
    practice: [
      {
        task: 'Uzun 10 qatorli hikoyani slayd uchun 4 ta qisqa bandga qisqartiring.',
        expected: 'Faqat asosiy fikrlar qolib, shrift 24+ pt o‘lchamda oson o‘qiladi.',
        difficulty: 'oson',
      },
      {
        task: 'O‘zingizning sevimli faningiz haqida matn, rasm va ovozli 4 ta slayd yarating.',
        expected: 'Har bir slaydda maket to‘g‘ri tanlangan va kontrast yuqori.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g6-l32-g1',
        num: '01',
        title: 'Taqdimot yaratish bosqichlari',
        topic: 'Taqdimot rejasi',
        difficulty: 'Oson',
        engine: 'order',
        config: {
          prompt: 'Sifatli taqdimot tayyorlash ketma-ketligini to‘g‘ri tartiblang.',
          items: [
            'Mavzu va auditoriyani aniqlab, slaydlar rejasini tuzish',
            'Har bir slaydga mos maketni (Layout) tanlash',
            'Qisqa matn, rasm va kerakli ovoz/audio qo‘shish',
            'Namoyish rejimida (F5) tekshirib, xatolarni tuzatish',
          ],
          hint: 'Avval reja, keyin maket, so‘ng kontent va oxirida F5 bilan tekshirish.',
          explanation: 'Rejasiz boshlangan taqdimot tartibsiz bo‘ladi; avval reja va maket tanlanadi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Slaydda sarlavha, matn va rasm joylashuvini belgilaydigan tayyor tuzilma nima deyiladi?',
        options: ['Maket (Layout)', 'Formula', 'URL', 'Query'],
        answer: 0,
        explanation: 'Layout (Maket) slayd elementlarining joylashuv shablonidir.',
      },
      {
        prompt: 'PowerPointda taqdimotni to‘liq ekranda namoyish qilish tugmasi qaysi?',
        options: ['F1', 'F5', 'Esc', 'Ctrl + X'],
        answer: 1,
        explanation: 'F5 tugmasi taqdimotni 1-slayddan boshlab to‘liq ekranda ishga tushiradi.',
      },
      {
        prompt: 'Slaydga matn yozishda qaysi qoida eng to‘g‘ri?',
        options: [
          'Butun inshoni kichik shriftda sig‘dirish',
          'Qisqa kalit bandlar va yirik o‘qiladigan shrift ishlatish',
          'Oq fonda sariq harflar yozish',
          'Sarlavhani umuman olib tashlash',
        ],
        answer: 1,
        explanation: 'Slayd o‘qish uchun qulay bo‘lishi uchun qisqa matn va kuchli kontrast kerak.',
      },
      {
        prompt: 'Slaydga tovush yoki musiqa qo‘shish qaysi menyudan bajariladi?',
        options: ['Insert → Audio', 'Review → Spelling', 'View → Zoom', 'File → Print'],
        answer: 0,
        explanation: 'Barcha media obyektlar (rasm, video, audio) Insert menyusidan qo‘shiladi.',
      },
      {
        prompt: 'Taqdimotning birinchi slaydi odatda qanday ataladi?',
        options: ['Xulosa slaydi', 'Titul slaydi', 'Jadval slaydi', 'Savat slaydi'],
        answer: 1,
        explanation: 'Birinchi titul slaydda mavzu nomi va muallif haqida ma’lumot beriladi.',
      },
    ],
    teacherNotes: {
      method: 'Yomon (matn bosib tashlangan) va yaxshi (qisqa, rasmli) ikkita slaydni taqqoslab ko‘rsatish.',
      timing: '10 daqiqa tushuntirish, 25 daqiqa taqdimot yaratish, 10 daqiqa Order o‘yini va test.',
      assessment: 'Reja izchilligi, 6×6 qoidasi va rasm/audio uyg‘unligi.',
      homework: '5-sinfda o‘rgangan mavzu bo‘yicha 3 slaydlik mini-taqdimot rejasini yozing.',
    },
  },
  {
    id: 'g6-l33',
    grade: 6,
    no: 33,
    part: '2-yarim yillik',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Brauzer', 'Elektron pochta', 'PowerPoint'],
    objectives: [
      'O‘quvchi veb-manzillar, internetdan axborotni ishonchli qidirish va elektron pochta bilimlarini nazoratdan o‘tkazadi.',
      'O‘quvchi taqdimot yaratish va papkalarni boshqarish bo‘yicha amaliy topshiriqni bajaradi.',
    ],
    intro:
      '2-yarim yillikning yakuniy nazorat ishida internet savodxonligi, elektron pochta odobi va taqdimot yaratish ko‘nikmalarimizni namoyish etamiz.',
    sections: [
      {
        heading: 'Internet va E-mail nazorat mezonlari',
        body: 'URL manzil qismlari, .gov/.edu domenlari, axborotni filtrlash va ishonchlilikni tekshirish, shuningdek xatda Subject, Attachment va papkalar (Inbox, Sent, Drafts, Spam, Trash) vazifalarini aniq bilish talab etiladi.',
        example: 'Shubhali .exe ilovali xatlarni ochmasdan o‘chirish — asosiy xavfsizlik talabi.',
        tip: 'Test savollariga shoshilmasdan, har bir variantni diqqat bilan o‘qib javob bering.',
      },
      {
        heading: 'Taqdimot amaliy qismi',
        body: '3 slaydlik kichik taqdimotda titul slaydi, mos maket, qisqa matn va rasm qo‘yilgan bo‘lishi hamda F5 bilan namoyishga tayyor bo‘lishi kerak.',
        example: 'Mavzu: "Xavfsiz internet qoidalari" — 3 ta slayd.',
      },
    ],
    keyTerms: [
      { term: 'URL va HTTPS', definition: 'Veb-sahifa manzili va shifrlangan aloqa protokoli.' },
      { term: 'Attachment (Ilova)', definition: 'Elektron xatga skrepka orqali biriktiriladigan fayl.' },
      { term: 'Drafts / Spam', definition: 'Tugallanmagan qoralama va shubhali/reklama xatlari papkasi.' },
      { term: 'Maket (Layout)', definition: 'Slaydda matn va tasvir joylashuvi shabloni.' },
    ],
    steps: [
      '1. "Xavfsiz internet" mavzusida 3 slaydlik taqdimot yarating.',
      '2. Foydali sayt URL manzilini oxirgi slaydda manba sifatida ko‘rsating.',
      '3. Tayyor faylni saqlab, xatga ilova qilishga tayyor holga keltiring.',
    ],
    practice: [
      {
        task: 'URL tarkibidagi protokol, domen va yo‘l qismlarini ajratib ko‘rsating.',
        expected: 'https:// + edu.uz + /darslar ko‘rinishida aniq ajratiladi.',
        difficulty: 'oson',
      },
      {
        task: 'Taqdimotingizdagi matnni 6×6 qoidasiga moslab ixchamlashtiring.',
        expected: 'Har slaydda qisqa va aniq bandlar qoladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g6-l33-g1',
        num: '01',
        title: 'Yakuniy terminlar krossvordi',
        topic: 'Internet, Pochta va Taqdimot',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '6-sinf 2-yarim yillik asosiy atamalarini toping (lotin bosh harflarda yozing).',
          clues: [
            { id: 'c1', clue: 'Veb-sahifaning internetdagi manzili (3 harf)', answer: 'URL' },
            { id: 'c2', clue: 'Keraksiz reklama va shubhali xatlar tushadigan papka', answer: 'SPAM' },
            { id: 'c3', clue: 'PowerPointda bitta sahifa qanday ataladi?', answer: 'SLAYD' },
            { id: 'c4', clue: 'Fayllarni xatga biriktirish nomi (o‘zbekcha: ilova, inglizcha: ...)', answer: 'ATTACH' },
          ],
          hint: 'Qisqa atamalar: URL, SPAM, SLAYD, ATTACH.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Quyidagilardan qaysi biri xavfsiz veb-manzil protokoli hisoblanadi?',
        options: ['http://', 'https://', 'zip://', 'mp3://'],
        answer: 1,
        explanation: 'https:// ma’lumotlarni shifrlab uzatadi.',
      },
      {
        prompt: 'Elektron xatga rasm yoki hujjat biriktirish tugmasi belgisi qaysi?',
        options: ['Qog‘oz qisqich (Skrepka)', 'Savat', 'Qaychi', 'Yulduzcha'],
        answer: 0,
        explanation: 'Skrepka (Attach) tugmasi orqali fayllar xatga ilova qilinadi.',
      },
      {
        prompt: 'Slaydlarni yaratishdan oldin eng birinchi nima qilinadi?',
        options: [
          'Audio qo‘shish',
          'Reja tuzish va maqsadni aniqlash',
          'Printerga berish',
          'Spamga yuborish',
        ],
        answer: 1,
        explanation: 'Avval reja va auditoriya aniqlanadi, so‘ng maket va kontent qo‘shiladi.',
      },
      {
        prompt: 'Qidiruvda aniq so‘z birikmasini izlash uchun nima ishlatiladi?',
        options: ['Qo‘shtirnoq "..."', 'Vergul', 'Undov', 'Probel'],
        answer: 0,
        explanation: 'Qo‘shtirnoq ichidagi ibora qidiruv natijasini aniq ibora bilan filtrlaydi.',
      },
      {
        prompt: 'Chala yozilgan xatlar qaysi papkada saqlanadi?',
        options: ['Sent', 'Drafts', 'Inbox', 'Trash'],
        answer: 1,
        explanation: 'Drafts (Qoralama) yuborilmagan xatlarni saqlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Kompleks nazorat: taqdimot va nazariy test.',
      timing: '20 daqiqa amaliy taqdimot, 15 daqiqa krossvord va test, 10 daqiqa tahlil.',
      assessment: 'Har ikkala bo‘lim (internet/pochta va taqdimot) natijalari jamlanadi.',
      homework: 'Yil davomida o‘rganilgan eng sevimli dasturingiz haqida 3 gap tayyorlab keling.',
    },
  },
  {
    id: 'g6-l34',
    grade: 6,
    no: 34,
    part: '2-yarim yillik',
    title: 'Takrorlash',
    kind: 'takrorlash',
    hours: 1,
    tools: ['Word', 'Excel', 'Scratch', 'PowerPoint'],
    objectives: [
      'O‘quvchi 6-sinf davomida o‘tilgan barcha bo‘limlarni (Word, Paint, Excel, Ma’lumotlar bazasi, Scratch, Internet, E-mail, PowerPoint) tizimli umumlashtiradi.',
      'O‘quvchi kelgusi 7-sinfda chuqurlashadigan mavzular uchun mustahkam poydevor qo‘yadi.',
    ],
    intro:
      'Tabriklaymiz! Siz 6-sinf informatika kursini muvaffaqiyatli yakunladingiz. Bugun yil davomida o‘rgangan barcha dastur va ko‘nikmalarimizni qiziqarli takrorlash bilan mustahkamlaymiz.',
    sections: [
      {
        heading: '6-sinfda nimalarni o‘rgandik?',
        body: '1) Word/Writer da matn ko‘chirish, bezash, rasm va hoshiya qo‘yish, auditoriyaga moslash; 2) Paint da tasvir importi va o‘lcham/aylantirish; 3) Excel da katak manzillari, formulalar va diagrammalar; 4) Ma’lumotlar bazasida maydon turlari va teng shartli Query; 5) Scratch da sikllar, Pen, 360°/N shakllar, My Blocks va dekompozitsiya; 6) Internetda URL, ishonchli qidiruv, E-mail va PowerPoint.',
        example: 'Endi siz bitta loyihada Excelda hisoblab, natijasini Word/PowerPointda taqdim etib, E-mailda yubora olasiz!',
        tip: 'Yozgi ta’tilda ham Scratchda o‘yinlar yasash va xavfsiz internet qoidalariga amal qilishni unutmang.',
      },
      {
        heading: '7-sinfga ko‘prik',
        body: 'Keyingi o‘quv yilida Wordda murakkab stillar va jadvallar, PowerPointda animatsiyalar, Excelda modellashtirish hamda Accessda haqiqiy formalar yaratishni o‘rganasiz.',
        example: '6-sinfdagi "=" formulasi va Query tushunchasi 7-sinfda juda qo‘l keladi.',
      },
    ],
    keyTerms: [
      { term: 'Katak va Formula', definition: 'Excelda C1 = A1 + B1 kabi avtomatik hisoblash asosi.' },
      { term: 'Query (So‘rov)', definition: 'Ma’lumotlar bazasidan aniq shart asosida yozuv qidirish.' },
      { term: 'Dekompozitsiya', definition: 'Katta masalani kichik protseduralarga bo‘lib yechish.' },
      { term: 'URL va E-mail', definition: 'Internetda manzil topish va elektron muloqot vositalari.' },
    ],
    steps: [
      '1. Har bir bo‘limdan o‘zingizga eng yoqqan 1 tadan dasturni sanang.',
      '2. Qisqa savol-javob va tezkor blits o‘yinida qatnashing.',
      '3. Yil davomida bajargan eng yaxshi ishingizni sinfdoshlarga namoyish eting.',
    ],
    practice: [
      {
        task: 'Qaysi vazifa uchun qaysi dastur (Word, Excel, Scratch, PowerPoint, Base) mosligini bog‘lab chiqing.',
        expected: 'Hisob → Excel, Taqdimot → PowerPoint, Dastur → Scratch, Baza → Base.',
        difficulty: 'oson',
      },
      {
        task: 'Yil davomida o‘rgangan 5 ta tezkor klaviatura tugmasini (Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Z, Ctrl+S) amalda ko‘rsating.',
        expected: 'Barcha tezkor tugmalar ishonchli bajariladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g6-l34-g1',
        num: '01',
        title: '6-sinf yakuniy flesh-kartalari',
        topic: 'Yillik takrorlash',
        difficulty: 'Oson',
        engine: 'flashcards',
        config: {
          prompt: '6-sinfning eng muhim atamalarini kartalarni ag‘darib takrorlang.',
          cards: [
            { term: 'Ctrl + X / Ctrl + V', definition: 'Matnni kesib olib yangi joyga ko‘chirish.', example: 'Abzats o‘rnini almashtirish' },
            { term: '=SUM(A1:A5)', definition: 'Elektron jadvalda diapazon yig‘indisini hisoblash formulasi.', example: 'Jami xarajatlarni topish' },
            { term: 'Query (So‘rov)', definition: 'Ma’lumotlar bazasidan shart bo‘yicha aniq yozuvni qidirish.', example: 'Sinf = "6-A"' },
            { term: '360° / N', definition: 'Scratchda N tomonli muntazam ko‘pburchak burilish burchagi.', example: 'Oltiburchak: 360/6 = 60°' },
            { term: 'URL va HTTPS', definition: 'Veb-sahifa manzili va shifrlangan xavfsiz ulanish.', example: 'https://uzedu.uz' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Jadvalda sonlar yig‘indisini topuvchi formula qaysi?',
        options: ['=SUM(A1:A5)', '=CUT(A1:A5)', '=BOLD(A1:A5)', '=URL(A1:A5)'],
        answer: 0,
        explanation: 'SUM funksiyasi berilgan diapazondagi sonlarni qo‘shadi.',
      },
      {
        prompt: 'Scratchda murakkab masalani kichik bo‘laklarga ajratish usuli nima?',
        options: ['Arxivlash', 'Dekompozitsiya', 'Spam', 'Margin'],
        answer: 1,
        explanation: 'Dekompozitsiya katta masalani kichik protseduralarga bo‘lishdir.',
      },
      {
        prompt: 'Ma’lumotlar bazasidan faqat kerakli yozuvlarni qidirib oluvchi vosita qaysi?',
        options: ['Query', 'Header', 'Flip', 'AutoSum'],
        answer: 0,
        explanation: 'Query aniq shart asosida bazadan ma’lumot izlaydi.',
      },
      {
        prompt: 'Elektron pochtaga hujjat qo‘shib yuborish qanday ataladi?',
        options: ['Attachment (Ilova)', 'Layout', 'Bounce', 'Pen up'],
        answer: 0,
        explanation: 'Xatga biriktirilgan fayl ilova (Attachment) deb ataladi.',
      },
      {
        prompt: 'Matn muharririda oxirgi xato harakatni bekor qilish tugmasi qaysi?',
        options: ['Ctrl + Z', 'Ctrl + B', 'F5', 'Tab'],
        answer: 0,
        explanation: 'Ctrl + Z (Undo) oxirgi harakatni orqaga qaytaradi.',
      },
    ],
    teacherNotes: {
      method: 'Yillik viktorina va eng yaxshi o‘quvchi loyihalarini taqdirlash.',
      timing: '10 daqiqa umumlashtirish, 20 daqiqa viktorina/flesh-kartalar, 15 daqiqa test va yakun.',
      assessment: 'Yillik asosiy tushunchalarni erkin qo‘llay olishi.',
      homework: 'Ta’tilda foydali ta’limiy saytlardan foydalanish va Scratchda mini-o‘yin yasash.',
    },
  },
];
