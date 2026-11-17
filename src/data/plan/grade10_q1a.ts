import type { Lesson } from './types';

export const GRADE_10_Q1A: Lesson[] = [
  {
    id: 'g10-l01',
    grade: 10,
    no: 1,
    part: '1-chorak',
    title: 'Maʼlumot, axborot va bilimlar bazasi. Maʼlumot manbasi. Bevosita va bilvosita manbalardan maʼlumot toʻplashning afzallik hamda kamchiliklari. Axborotning sifati',
    kind: 'dars',
    hours: 1,
    tools: ['Axborot nazariyasi', 'DIK piramidasi', 'Static vs Dynamic'],
    objectives: [
      'O‘quvchi Maʼlumot (Data), Axborot (Information) va Bilim (Knowledge) o‘rtasidagi pog‘onani (`Data + Context + Meaning = Information`) aniq misollar bilan tushuntiradi.',
      'O‘quvchi Bevosita (Direct) va Bilvosita (Indirect) ma’lumot manbalarini hamda axborot sifatining 5 mezonini (Aniqlik, Dolzarblik, Ishonchlilik, To‘liqlik, Tafsilot darajasi) baholaydi.',
    ],
    intro:
      'Agar sizga shunchaki `"38.5"` raqamini aytsam, u hech narsani anglatmaydi — bu xom **Maʼlumot (Data)**. Ammo `"Bemorning harorati 38.5°C"` desam — bu **Axborot (Information)**. `"38.5°C isitma infeksiyadan darak beradi, shifokor ko‘rigi zarur"` deyish esa **Bilim (Knowledge)** dir!',
    sections: [
      {
        heading: 'Data → Information → Knowledge va Axborot sifati',
        body: 'Data — qayta ishlanmagan xom raqam, harf va belgilar (`09052025`). Unga kontekst (ma’no va tuzilma) berilsa Axborotga aylanadi (`Tug‘ilgan sana: 09.05.2025`). Axborotga tajriba va qoidalar qo‘shilganda esa qaror qabul qilishga yordam beruvchi Bilim (Knowledge) hosil bo‘ladi. Axborotning sifati 5 omilga bog‘liq: 1) Aniqlik (Accuracy); 2) Dolzarblik (Relevance — ortiqcha axborotsiz); 3) Yangilik/Vaqtida bo‘lishi (Age/Timeliness); 4) To‘liqlik (Completeness); 5) Taqdimot darajasi (Level of detail).',
        example: 'Direktorga 500 ta chek ro‘yxati emas, "Oylik jami savdo va eng yaxshi 5 tovar" kerak — bu to‘g‘ri Relevance va Level of detail!',
        tip: 'Statik axborot o‘zgarmaydi (kitobdagi tarixiy sana), Dinamik axborot esa uzluksiz yangilanadi (valyuta kursi, poezd jadvali).',
      },
      {
        heading: 'Bevosita (Direct) va Bilvosita (Indirect) maʼlumot manbalari',
        body: 'Bevosita manba (Direct / Primary source) — ma’lumot aynan o‘sha maqsad uchun birinchi manbadan yig‘iladi (so‘rovnoma, kuzatuv, sensor o‘lchovi, intervyu). Afzalligi: ishonchli, yangi va maqsadga aniq mos; kamchiligi: ko‘p vaqt va mablag‘ talab qiladi. Bilvosita manba (Indirect / Secondary source) — boshqa maqsadda to‘plangan tayyor ma’lumot (davlat statistikasi, saylov ro‘yxati, do‘konning sodiqlik kartasi hisoboti). Afzalligi: arzon va tez; kamchiligi: eskirgan yoki boshqa maqsadga mo‘ljallangani uchun noaniq bo‘lishi mumkin.',
        example: 'Supermarket mijozlarga "Chegirma kartasi" berib xaridlarni kuzatishi — dastlab xarid uchun olingan ma’lumotni keyin marketing (bilvosita manba) da ishlatishdir.',
      },
    ],
    keyTerms: [
      { term: 'Data / Information / Knowledge', definition: 'Xom dalil (Data) → kontekstli ma’no (Information) → tajriba bilan qaror chiqarish (Knowledge).' },
      { term: 'Bevosita manba (Direct)', definition: 'Aynan joriy tadqiqot uchun birinchi qo‘ldan olingan original ma’lumot.' },
      { term: 'Bilvosita manba (Indirect)', definition: 'Boshqa maqsadda yig‘ilib, qayta foydalanilayotgan ikkilamchi ma’lumot.' },
      { term: 'Axborot sifati', definition: 'Axborotning aniqlik, vaqtlilik, dolzarblik, to‘liqlik va tafsilot mezonlariga javob berishi.' },
    ],
    steps: [
      '1. Bitta misolda (`42`, `42% chegirma`, `42% chegirma xaridorlarni 2x oshiradi`) Data→Information→Knowledge zanjirini yozing.',
      '2. Bevosita va Bilvosita manbalarning 2 afzallik va 2 kamchiligini jadvalda taqqoslang.',
      '3. Axborot sifatining 5 mezonini real biznes vaziyatida tekshiring.',
    ],
    practice: [
      {
        task: 'Maktabda o‘quvchilarning tushlik taomiga munosabatini o‘rganish uchun 1 ta Bevosita va 1 ta Bilvosita manba misolini yozing.',
        expected: 'Bevosita: o‘quvchilardan maxsus so‘rovnoma olish; Bilvosita: oshxona kassasining o‘tgan oydagi sotilgan taomlar hisoboti.',
        difficulty: 'oson',
      },
      {
        task: 'Nima uchun o‘tgan yilgi ob-havo jadvali ertangi sayohatni rejalashtirishda sifatsiz axborot hisoblanadi?',
        expected: 'Axborotning "Age / Timeliness" (dolzarblik va yangilik) mezoni buzilgani uchun u hozirgi qarorga yaramaydi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l01-g1',
        num: '01',
        title: 'Ma’lumot, Axborot va Bilim zanjiri',
        topic: 'Axborot nazariyasi',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Xom raqamdan strategik qarorgacha bo‘lgan ma’lumot transformatsiyasini pastdan yuqoriga tartiblang.',
          items: [
            'Maʼlumot (Data): kontekstsiz xom qiymatlar — "120, 145, 190"',
            'Axborot (Information): ma’no qo‘shilgan qiymat — "Oxirgi 3 oyda kunlik sotuv 120 dan 190 taga o‘sdi"',
            'Bilim (Knowledge): tahlil va tajriba — "Talab 58% oshgani sababli ombor zaxirasini ko‘paytirish kerak"',
            'Qaror (Action): boshqaruv chorasi — "Keyingi hafta uchun yetkazib beruvchiga +60% buyurtma berish"',
          ],
          hint: 'Xom ma’lumot → Ma’noli axborot → Qoida/Bilim → Amaliy qaror.',
          explanation: 'Axborot nazariyasida DIK zanjiri har qanday boshqaruv tizimining asosidir.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Kontekst va ma’no berilmagan xom `19052008` raqamlar ketma-ketligi nimaga misol bo‘ladi?',
        options: ['Maʼlumot (Data)', 'Bilim (Knowledge)', 'Bilvosita hisobot', 'Ekspert xulosasi'],
        answer: 0,
        explanation: 'Kontekst (`Tug‘ilgan sana` yoki `Pochta indeksi`) berilmaguncha u oddiy xom Data dir.',
      },
      {
        prompt: 'Maktab o‘quvchilarining fikrini aniqlash uchun o‘tkazilgan yangi maxsus intervyu qaysi manbaga kiradi?',
        options: ['Bevosita (Direct) manba', 'Bilvosita (Indirect) manba', 'Static arxiv', 'Giperhavola'],
        answer: 0,
        explanation: 'Ma’lumot aynan shu tadqiqot uchun birinchi manbadan to‘plangani uchun u Bevosita manbadir.',
      },
      {
        prompt: 'Do‘kon mijozlari xarid cheklari tarixidan 1 yildan keyin yangi filial ochish joyini tanlashda foydalanish qaysi manba turi?',
        options: ['Bilvosita (Indirect) manba', 'Bevosita kuzatuv', 'Sensor o‘lchovi', 'Double entry'],
        answer: 0,
        explanation: 'Dastlab kassa hisobi uchun yig‘ilgan ma’lumot ikkilamchi maqsadda ishlatilmoqda.',
      },
      {
        prompt: 'Bosh direktorga kunlik 10 000 ta mayda kassa tranzaksiyasi emas, faqat bo‘limlar bo‘yicha umumiy yig‘indi berilishi axborot sifatining qaysi mezoniga tegishli?',
        options: ['Tafsilot darajasi va Dolzarblik (Level of detail & Relevance)', 'Shifrlash', 'Gutter', 'Simmetriya'],
        answer: 0,
        explanation: 'Rahbar uchun ortiqcha mayda tafsilotlar emas, jamlama va qaror uchun dolzarb ko‘rsatkichlar muhim.',
      },
      {
        prompt: 'Axborotga aylanish uchun Ma’lumotga (Data) nima qo‘shilishi shart?',
        options: ['Kontekst va ma’no (Context & Meaning)', 'Faqat ZIP arxiv', 'RGB rang', 'USB port'],
        answer: 0,
        explanation: 'Data + Context + Meaning = Information.',
      },
    ],
    teacherNotes: {
      method: 'Doskaga `39.2` raqamini yozib, kontekst qo‘shish orqali Data→Information→Knowledge ni jonli ko‘rsatish.',
      timing: 'DIK va Sifat 20 daq, Direct/Indirect manbalar 15 daq, Order va quiz 10 daq.',
      assessment: 'Direct va Indirect manbalarning afzallik/kamchiligini asoslash.',
      homework: 'Kundalik hayotdan 1 ta Statik va 1 ta Dinamik axborotga misol hamda ularning manbasini yozing.',
    },
  },
  {
    id: 'g10-l02',
    grade: 10,
    no: 2,
    part: '1-chorak',
    title: 'Kod berish, kodlash va shifrlash. Ma’lumotlarni kodlashning afzallik va kamchiliklari. Simmetrik va asimmetrik shifrlash usullari.',
    kind: 'dars',
    hours: 1,
    tools: ['Kriptografiya', 'Encoding vs Encryption', 'AES / RSA', 'Public & Private Key'],
    objectives: [
      'O‘quvchi Kod berish (Coding — `UZB`, `M`/`F`), Kodlash (Encoding — ASCII/UTF-8/MP4) va Shifrlash (Encryption) tushunchalarini farqlaydi.',
      'O‘quvchi ma’lumotlarni kodlashning afzallik/kamchiliklarini hamda Simmetrik va Asimmetrik (Ochiq va Shaxsiy kalitli) shifrlash tamoyillarini izohlaydi.',
    ],
    intro:
      'Kompyuter bazasida "O‘zbekiston" so‘zi o‘rniga `UZ` kodini yozish joy tejaydi (Coding); harflarni `01000001` ga o‘girish universal o‘qish uchun (Encoding); xabar begona qo‘liga tushsa ham o‘qilmasligi esa Shifrlash (Encryption) dir!',
    sections: [
      {
        heading: 'Coding (Kod berish), Encoding (Kodlash) va Afzallik-kamchiliklari',
        body: '**Kod berish (Coding)** — uzun matnlarni qisqa kodlar bilan almashtirish (masalan, `Toshkent` → `01`, `Erkak/Ayol` → `M/F`, kiyim o‘lchami `S/M/L`). Afzalliklari: kam xotira egallaydi, kiritish tez va imloviy xatosiz, validatsiya (Lookup) qilish oson. Kamchiligi: kod jadvalisiz odam tushunmasligi, kodlar soni cheklanib qolishi va noto‘g‘ri kod tanlash xavfi. **Kodlash (Encoding)** — ma’lumotni saqlash yoki uzatish formatiga o‘girish (ASCII, Unicode UTF-8, Base64, JPEG — maqsad maxfiylik emas, moslik!).',
        example: 'Pochta manzilida "Toshkent shahri" o‘rniga `TAS` kodi yozilsa, xotira tejaladi va "Tashkent/Toshkent" turlicha yozilish muammosi yo‘qoladi.',
        tip: 'Encoding (masalan, Base64 yoki ASCII) xavfsizlik BERMAYDI — uni hamma oson o‘qiydi! Xavfsizlik faqat Shifrlash (Encryption) orqali bo‘ladi.',
      },
      {
        heading: 'Simmetrik va Asimmetrik shifrlash usullari',
        body: '**Simmetrik shifrlash** (masalan, AES): shifrlashda ham, deshifrlashda ham BITTA umumiy maxfiy kalit ishlatiladi. Afzalligi — juda tez (katta fayllar uchun zo‘r); kamchiligi — kalitni internet orqali raqibga bildirmay yuborish muammosi (Key exchange problem). **Asimmetrik shifrlash** (masalan, RSA): ikkita matematik bog‘langan kalit ishlatiladi — hammaga ochiq **Ochiq kalit (Public Key)** bilan shifrlanadi va faqat egasida saqlanadigan **Shaxsiy kalit (Private Key)** bilan ochiladi! HTTPS ulanishida avval Asimmetrik usulda kalit xavfsiz almashiladi, so‘ng tezlik uchun Simmetrik AES da trafik uzatiladi.',
        example: 'Ochiq kalit — pochta qutisining hamma xat tashlay oladigan tirqishi; Shaxsiy kalit — qutini ochib xatni o‘qiydigan egasining yagona kaliti!',
      },
    ],
    keyTerms: [
      { term: 'Coding (Kod berish)', definition: 'Uzun qiymatlarni qisqa shartli belgilar (`M/F`, `UZB`) bilan almashtirish.' },
      { term: 'Encoding (Kodlash)', definition: 'Ma’lumotni kompyuter standartiga (ASCII, UTF-8, Base64) o‘tkazish.' },
      { term: 'Simmetrik shifrlash', definition: 'Shifrlash va ochish uchun bitta bir xil maxfiy kalit ishlatiladigan tezkor usul.' },
      { term: 'Asimmetrik shifrlash', definition: 'Shifrlashda Ochiq kalit (Public), ochishda esa faqat egasidagi Shaxsiy kalit (Private) qo‘llaniladigan tizim.' },
    ],
    steps: [
      '1. Coding (`UZ`, `XL`), Encoding (`ASCII`) va Encryption (`AES/RSA`) ni 3 ustunda farqlang.',
      '2. Simmetrik shifrlashdagi "kalitni uzatish muammosi" ni tushuntiring.',
      '3. Quyidagi Cipher laboratoriyasida Sezar shifridan foydalanib matnni deshifrlang!',
    ],
    practice: [
      {
        task: 'Bazadagi "Mamlakat" ustuniga "O‘zbekiston Respublikasi" o‘rniga `UZ` kodini yozishning 2 afzalligi va 1 kamchiligini ayting.',
        expected: 'Afzalligi: xotira joyini tejaydi, tez kiritiladi va yagona standart saqlanadi; Kamchiligi: kod jadvalini bilmagan foydalanuvchi tushunmasligi mumkin.',
        difficulty: 'oson',
      },
      {
        task: 'Ali Valiga Asimmetrik shifrlash orqali maxfiy xabar yubormoqchi. Ali xabarni kimning kaliti bilan shifrlaydi va Vali qaysi kalit bilan ochadi?',
        expected: 'Ali xabarni Valining Ochiq kaliti (Public Key) bilan shifrlaydi; Vali esa o‘zining Shaxsiy kaliti (Private Key) bilan ochadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l02-g1',
        num: '01',
        title: 'Kriptografiya: Shifrlangan xabarni och',
        topic: 'Simmetrik shifrlash asoslari',
        difficulty: 'O‘rta',
        engine: 'cipher',
        config: {
          prompt: 'Simmetrik kalit (siljish = 3) bilan shifrlangan `KLPGRD` shifrmatnini teskari ochib, asl kalit so‘zni toping!',
          mode: 'decode',
          plaintext: 'HIMOYA',
          shift: 3,
          hint: 'Har bir harfni alifbo bo‘yicha 3 ta ORQAGA suring (K→H, L→I, ...).',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Asimmetrik shifrlashda xabarni shifrlash uchun qaysi kalit ishlatiladi?',
        options: ['Qabul qiluvchining Ochiq kaliti (Public Key)', 'Yuboruvchining pasporti', 'ASCII jadvali', 'Brauzer keshi'],
        answer: 0,
        explanation: 'Ochiq kalit hamma uchun ochiq — u bilan faqat shifrlash mumkin, ochish uchun egasining Shaxsiy kaliti kerak.',
      },
      {
        prompt: 'Simmetrik shifrlashning asosiy xavfsizlik muammosi nimada?',
        options: ['Yagona maxfiy kalitni ikkinchi tomonga xavfsiz yetkazish qiyinligi', 'Juda sekin ishlashi', 'Harflarni sonlarga aylantira olmasligi', 'Internetda umuman ishlamasligi'],
        answer: 0,
        explanation: 'Agar yagona kalit yo‘lda tutib olinsa, butun shifrlangan xabar ochilib qoladi.',
      },
      {
        prompt: 'Ma’lumotlar bazasida kiyim o‘lchamlarini `Extra Large` o‘rniga `XL` deb saqlash nimaga misol?',
        options: ['Kod berish (Coding)', 'Asimmetrik shifrlash', 'Verifikatsiya', 'Mail Merge'],
        answer: 0,
        explanation: 'Coding ma’lumotni ixchamlashtirish va standartlashtirish uchun qisqa kodlar qo‘llaydi.',
      },
      {
        prompt: 'Matnni `ASCII` yoki `UTF-8` ga o‘tkazish (Encoding) ning bosh maqsadi nima?',
        options: ['Har xil tizimlar matnni bir xil o‘qiy olishi (moslik)', 'Matnni xakerlardan yashirish', 'Fayl hajmini o‘chirish', 'Printer tezligini oshirish'],
        answer: 0,
        explanation: 'Encoding standart moslik uchun xizmat qiladi, u maxfiylik shifri emas.',
      },
      {
        prompt: 'Nima uchun HTTPS protokolida Simmetrik va Asimmetrik shifrlash birgalikda qo‘llanadi?',
        options: ['Asimmetrik kalitni xavfsiz almashish uchun, Simmetrik esa katta ma’lumotni tez shifrlash uchun', 'Ikki marta pul olish uchun', 'HTML kodini yashirish uchun', 'Farqi bo‘lmagani uchun'],
        answer: 0,
        explanation: 'Hybrid shifrlash ikkala usulning eng kuchli tomonlarini birlashtiradi.',
      },
    ],
    teacherNotes: {
      method: '"Qulf va Kalit" hamda "Pochta qutisi tirqishi" analogiyasi orqali Simmetrik vs Asimmetrik shifrlashni tushuntirish.',
      timing: 'Coding/Encoding 15 daq, Simmetrik/Asimmetrik 20 daq, Cipher va test 10 daq.',
      assessment: 'Public Key va Private Key rolini xatosiz tushuntirish.',
      homework: 'Kod berish (Coding) ning 3 ta afzalligi va 2 ta kamchiligini real jadval misolida yozing.',
    },
  },
  {
    id: 'g10-l03',
    grade: 10,
    no: 3,
    part: '1-chorak',
    title: 'Ma’lumotlarning toʻgʻriligini tekshirish.',
    kind: 'dars',
    hours: 1,
    tools: ['Validatsiya turlari', 'Check Digit (Modulo 11 / Luhn)', 'Batch Totals'],
    objectives: [
      'O‘quvchi ma’lumotlar to‘g‘riligini tekshirishning 8 ta usulini (Presence, Range, Type, Length, Format, Lookup, Consistency/Cross-field, Check Digit) chuqur o‘zlashtiradi.',
      'O‘quvchi bitta maydon boshqa maydon bilan mantiqan bog‘langan holatlarni (`Consistency check`) va nazorat raqamini hisoblashni tushuntiradi.',
    ],
    intro:
      '9-sinfda bazaviy validatsiyani ko‘rgan edik; 10-sinfda esa maydonlararo mantiqiy moslik (`Consistency check`: masalan, "Chiqish sanasi" "Kirish sanasi" dan oldin bo‘lmasligi) va Check Digit matematik algoritmlarini chuqurroq tahlil qilamiz!',
    sections: [
      {
        heading: 'Chuqur Validatsiya usullari va Consistency Check',
        body: 'Oddiy maydon tekshiruvlaridan (`Presence`, `Range`, `Type`, `Length`, `Format`, `Lookup`) tashqari, murakkab tizimlarda **Mantiqiy moslik tekshiruvi (Consistency / Cross-field check)** ishlatiladi: masalan, `Jins = "Erkak"` bo‘lsa va `Homiladorlik = Ha` tanlansa tizim rad etadi; yoki `Tug‘ilgan sana = 2010`, `Haydovchilik guvohnomasi = Ha` bo‘lsa ogohlantiradi. Shuningdek, **Limit check** (faqat yuqori yoki quyi bir tomonlama chegara: `Maosh > 0`) ham qo‘llanadi.',
        example: 'Mehmonxonada band qilishda `Ketish_sanasi > Kelish_sanasi` sharti Consistency check orqali tekshiriladi.',
        tip: 'Validatsiya xato ma’lumot kiritishni to‘xtatadi, lekin to‘g‘ri ko‘rinishdagi noto‘g‘ri faktni (`25` o‘rniga `52`) oldini ololmaydi — shuning uchun keyingi darsda Verifikatsiyani ham ko‘ramiz!',
      },
      {
        heading: 'Check Digit va Paketli tekshirish (Batch Totals)',
        body: 'Check Digit (ISBN-10/13, EAN-13 shtrix-kodi, Bank IBAN/karta raqamlari) oldingi raqamlarni vazn koeffitsiyentlariga ko‘paytirib yig‘indisini 10 yoki 11 ga bo‘lish qoldig‘idan hisoblanadi. Bu bitta raqam xatosini (`5`→`8`) va qo‘shni raqamlar o‘rni almashishini (`47`→`74`) tutadi. Kassa va buxgalteriyada esa bir guruh qog‘oz cheklarni kiritishda jami summa oldindan hisoblanadigan **Batch Total** nazorati qo‘llanadi.',
        example: 'Agar 10 ta chekning qog‘ozdagi jami summasi 540 000 so‘m bo‘lsa, operator hammasini kiritib bo‘lgach kompyuter yig‘indisi 540 000 chiqmasa, demak bir chek xato kiritilgan!',
      },
    ],
    keyTerms: [
      { term: 'Consistency Check', definition: 'Ikkita turli maydon qiymatlarining o‘zaro mantiqiy ziddiyatsizligini tekshirish.' },
      { term: 'Limit Check', definition: 'Qiymatning faqat bitta (yuqori yoki quyi) chegaradan oshmasligini nazorat qilish.' },
      { term: 'Check Digit (Mod 10/11)', definition: 'Raqamlar qatorining oxirgi nazorat raqamini matematik formula bilan tekshirish.' },
      { term: 'Batch Total', definition: 'Bir to‘plam hujjatlarni kiritishda nazorat yig‘indisi orqali xato yoki qolib ketgan yozuvni aniqlash.' },
    ],
    steps: [
      '1. `Kelish sanasi` va `Ketish sanasi` misolida Consistency check yozing.',
      '2. 8 ta validatsiya usulini har biriga aniq namuna bilan jadvalga tushiring.',
      '3. Batch Total nima uchun bank va buxgalteriyada qo‘llanishini tahlil qiling.',
    ],
    practice: [
      {
        task: 'Maktab anketasida `Tugilgan_yil = 2015` va `Pasport_seriya` majburiy kiritilgan — qaysi validatsiya turi bu ziddiyatni ushlashi kerak?',
        expected: 'Consistency (Cross-field) check — chunki 2015-yilda tug‘ilgan 10 yoshli bolada hali fuqarolik pasporti bo‘lmaydi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'ISBN-13 kitob kodi oxiridagi 13-raqam qanday xatolarni tuta oladi?',
        expected: 'Bitta raqam noto‘g‘ri terilganda yoki ikki qo‘shni raqam o‘rni almashib qolganda darhol xato beradi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l03-g1',
        num: '01',
        title: 'Murakkab validatsiya usullari',
        topic: 'Ma’lumotlar validatsiyasi',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Validatsiya qoidasini uning texnik nomi bilan juftlang.',
          pairs: [
            { left: 'Ketish sanasi kelish sanasidan keyin bo‘lishi shart', right: 'Consistency Check' },
            { left: 'Bank karta raqamidagi oxirgi raqam xatoni tutadi', right: 'Check Digit' },
            { left: 'Faqat tayyor viloyatlar ro‘yxatidan tanlash', right: 'Lookup Check' },
            { left: 'Kiritilgan 50 ta kvitansiya yig‘indisini nazorat qilish', right: 'Batch Total' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '"Yosh = 10" va "Haydovchilik guvohnomasi = Bor" maydonlari orasidagi mantiqiy ziddiyatni qaysi tekshiruv ushlaydi?',
        options: ['Consistency Check', 'Length Check', 'Presence Check', 'Format Check'],
        answer: 0,
        explanation: 'Consistency check ikki yoki undan ortiq maydonning o‘zaro mantiqiy mosligini tekshiradi.',
      },
      {
        prompt: 'EAN-13 shtrix-kodidagi 13-chi oxirgi raqamning vazifasi nima?',
        options: ['Oldingi 12 raqam to‘g‘ri o‘qilganini matematik tekshirish (Check Digit)', 'Mahsulot narxini ko‘rsatish', 'Yaroqlilik muddati', 'Ishlab chiqaruvchi telefon raqami'],
        answer: 0,
        explanation: 'Check Digit skaner yoki kiritish xatosini aniqlaydi.',
      },
      {
        prompt: 'Buxgalteriyada 20 ta hujjatning jami summasi kompyuter kiritishidan oldin va keyin solishtirilishi nima deyiladi?',
        options: ['Batch Total', 'Type Check', 'Double Entry', 'Format Check'],
        answer: 0,
        explanation: 'Batch Total to‘plam bo‘yicha jami yig‘indini solishtirib xato yoki tushib qolgan hujjatni topadi.',
      },
      {
        prompt: 'Narx maydonining faqat `> 0` bo‘lishini (yuqori chegarasiz) tekshirish qaysi usulga yaqin?',
        options: ['Limit Check', 'Lookup Check', 'Check Digit', 'Length Check'],
        answer: 0,
        explanation: 'Limit check faqat bir tomonlama (min yoki max) chegarani nazorat qiladi.',
      },
      {
        prompt: 'Validatsiya tizimi `15/03/2008` o‘rniga xato terilgan `15/03/2009` sanasini rad etadimi?',
        options: ['Yo‘q, chunki ikkalasi ham to‘g‘ri sana formati va mantiqan o‘rinli', 'Ha, darhol o‘chiradi', 'Check Digit uni tutadi', 'Presence Check rad etadi'],
        answer: 0,
        explanation: 'To‘g‘ri formatdagi faktik xatolarni Validatsiya emas, Verifikatsiya aniqlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Chipta bron qilish misolida barcha 8 ta validatsiya turini jonli ko‘rsatish.',
      timing: 'Asosiy & Consistency 20 daq, Check Digit & Batch Total 15 daq, Match va quiz 10 daq.',
      assessment: 'Consistency Check va Check Digit mexanizmini to‘g‘ri izohlash.',
      homework: 'Avtobus chiptasi sotib olish formasi uchun 5 ta har xil validatsiya qoidasini yozing.',
    },
  },
  {
    id: 'g10-l04',
    grade: 10,
    no: 4,
    part: '1-chorak',
    title: 'Vizual tekshirish va ma`lumotlanri ikki marta kiritish.',
    kind: 'dars',
    hours: 1,
    tools: ['Verifikatsiya', 'Visual Check', 'Double Data Entry', 'Hash / Checksum'],
    objectives: [
      'O‘quvchi Verifikatsiyaning uch asosiy mexanizmini — Vizual tekshirish, Ikki marta kiritish (Double entry) va Ma’lumot uzatishdagi Checksum/Parity check ni biladi.',
      'O‘quvchi har bir verifikatsiya usulining tezlik, xarajat va inson xatosini kamaytirishdagi kuchli va zaif tomonlarini baholaydi.',
    ],
    intro:
      'Validatsiya qoidadan o‘tkazadi, ammo "Ali" o‘rniga "Vali" yozilganini bilmaydi! Ma’lumot manba hujjatdan elektron tizimga birorta ham harfi o‘zgarmay ko‘chirilishini tasdiqlash uchun Verifikatsiya usullari qo‘llanadi.',
    sections: [
      {
        heading: 'Vizual tekshirish (Visual Check) va Ikki marta kiritish (Double Data Entry)',
        body: '1) **Vizual tekshirish**: operator ekranga kiritgan matnini asl qog‘oz varaq bilan ko‘z yugurtirib solishtiradi (yoki veb-saytdagi "Buyurtmani tasdiqlash" sahifasini o‘qiydi). Afzalligi: qo‘shimcha dasturiy mantiq talab qilmaydi va arzon. Kamchiligi: odam charchaganda ko‘zi o‘z xatosini o‘tkazib yuborishi mumkin ("men to‘g‘ri yozdim" deb o‘ylash effekti). 2) **Ikki marta kiritish (Double Data Entry)**: ma’lumot ikki marta (baʼzan ikki xil operator tomonidan) kiritiladi va kompyuter ikkalasini taqqoslaydi. Afzalligi: tasodifiy terish xatolarini deyarli nolga tushiradi. Kamchiligi: ikki baravar ko‘p vaqt va ishchi kuchi talab qiladi.',
        example: 'Yangi bank hisobi yoki email kiritishda "Emailni tasdiqlang" maydoni — foydalanuvchi o‘ziga tegishli pochta manzilini xato kiritmasligi uchun Double Entry dir.',
        tip: 'Diqqat: baʼzan saytlarda birinchi maydondan Copy-Paste qilishni cheklab qo‘yishadi — aks holda xato nusxalanib o‘tib ketadi!',
      },
      {
        heading: 'Ma’lumot uzatishda Verifikatsiya: Parity bit va Checksum',
        body: 'Ma’lumotlar nafaqat odam kiritayotganda, balki tarmoq kabeli yoki Wi-Fi orqali uzatilayotganda ham shovqin tufayli `0` → `1` ga o‘zgarib qolishi mumkin. Shuning uchun tizimlar jo‘natishdan oldin faylning **Checksum / Hash** qiymatini hisoblab qo‘shib yuboradi: qabul qiluvchi tomon qayta hisoblab solishtiradi — agar mos tushmasa, paket qayta so‘raladi!',
        example: 'Katta dastur (masalan, Ubuntu ISO) yuklab olganingizda saytdagi SHA-256 checksum bilan faylingizni tekshirish fayl buzilmaganini tasdiqlaydi.',
      },
    ],
    keyTerms: [
      { term: 'Visual Check', definition: 'Ekrandagi ma’lumotni asl manba bilan inson ko‘zi yordamida solishtirish.' },
      { term: 'Double Data Entry', definition: 'Bir xil ma’lumotni ikki marta kiritib, kompyuter yordamida mosligini tekshirish.' },
      { term: 'Copy-Paste xatosi', definition: 'Birinchi maydondagi xatoni nusxalab ikkinchisiga qo‘yish natijasida Double Entry samarasiz qolishi.' },
      { term: 'Checksum / Parity Check', definition: 'Tarmoqda uzatilgan baytlar buzilmaganini tekshiruvchi nazorat yig‘indisi.' },
    ],
    steps: [
      '1. Visual check va Double entry usullarini narx, tezlik va aniqlik bo‘yicha solishtiring.',
      '2. Qachon ikkala usul ham xatoni o‘tkazib yuborishi mumkinligini (Copy-Paste / asl qog‘ozning o‘zi xira bo‘lsa) muhokama qiling.',
      '3. True/False o‘yinida Verifikatsiya va Validatsiyani farqlang.',
    ],
    practice: [
      {
        task: 'Saytda "Emailni qayta kiriting" maydoniga foydalanuvchi `Ctrl+C / Ctrl+V` bilan birinchi maydondan ko‘chirib qo‘ysa nima bo‘ladi?',
        expected: 'Agar birinchi maydonda xato bo‘lsa (`gmial.com`), ikkinchisiga ham aynan o‘sha xato ko‘chadi va Double Entry verifikatsiyasi foydasiz bo‘lib qoladi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Sinf ro‘yxatini qog‘ozdan kompyuterga kiritishda Vizual tekshirish samaradorligini qanday oshirish mumkin?',
        expected: 'Kiritgan odam emas, boshqa bir kishi ovoz chiqarib o‘qib asl qog‘oz bilan solishtirishi (Dual visual check) ko‘z charchash xatolarini kamaytiradi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l04-g1',
        num: '01',
        title: 'Verifikatsiya usullari haqiqati',
        topic: 'Verifikatsiya',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Verifikatsiya usullari haqidagi tasdiqlarni To‘g‘ri yoki Noto‘g‘ri deb baholang.',
          statements: [
            {
              text: 'Double data entry (ikki marta kiritish) ish vaqtini ko‘paytirsa-da, terish xatolarini keskin kamaytiradi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Ikkita kiritishni solishtirish tasodifiy xatolarni darhol fosh qiladi.',
            },
            {
              text: 'Vizual tekshirish kompyuter dasturi tomonidan odam ishtirokisiz avtomatik bajariladi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Vizual tekshirish inson ko‘zi orqali ekrandagi qiymatni asl manba bilan solishtirishdir.',
            },
            {
              text: 'Agar asl qog‘oz hujjatning o‘zida tug‘ilgan sana xato yozilgan bo‘lsa, Double entry bu xatoni tuta olmaydi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Ikkala marta ham qog‘ozdagi xato sana kiritilsa, ular o‘zaro mos kelaveradi.',
            },
            {
              text: 'Checksum fayl tarmoq orqali yuklanganda baytlari buzilib ketmaganini tekshirishda qo‘llanadi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Checksum uzatish va saqlashdagi ma’lumot yaxlitligini tasdiqlaydi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ma’lumotni kiritish vaqtida tasodifiy klaviatura xatolarini tutish uchun uni ikki marta kiritib taqqoslash usuli nima?',
        options: ['Double Data Entry', 'Range Check', 'Lookup Check', 'Format Check'],
        answer: 0,
        explanation: 'Ikki marta kiritish (Double Data Entry) asosiy verifikatsiya usulidir.',
      },
      {
        prompt: 'Vizual tekshirishning (Visual Check) asosiy kamchiligi nimada?',
        options: ['Operator ko‘zi charchashi yoki o‘zi yozgan xatoni payqamay qolishi mumkin', 'Kompyuter quvvati yetmaydi', 'Internet talab qiladi', 'Raqamlarni tekshirolmaydi'],
        answer: 0,
        explanation: 'Inson omili tufayli vizual tekshiruvda xatolar o‘tib ketishi ehtimoli bor.',
      },
      {
        prompt: 'Nima uchun ko‘plab bank saytlari "Email / Karta raqamini tasdiqlang" katagiga Copy-Paste qilishni taqiqlab qo‘yadi?',
        options: ['Birinchi katakdagi xato ikkinchisiga ko‘chirilib verifikatsiyani chetlab o‘tmasligi uchun', 'Dizaynni chiroyli qilish uchun', 'Faylni siqish uchun', 'Spam kamaytirish uchun'],
        answer: 0,
        explanation: 'Qo‘lda qaytadan terish haqiqiy mustaqil tekshiruv beradi.',
      },
      {
        prompt: 'Tarmoq orqali fayl yuklanganda uning birorta ham biti buzilmaganini tekshiruvchi mexanizm qaysi?',
        options: ['Checksum / Hash verification', 'Margins', 'Mail Merge', 'Gutter'],
        answer: 0,
        explanation: 'Checksum yuborilgan va qabul qilingan fayl nazorat yig‘indisini solishtiradi.',
      },
      {
        prompt: 'Validatsiya ham, Verifikatsiya ham bajarilgach ma’lumot sifatiga qanday taʼsir bo‘ladi?',
        options: ['Ma’lumot ham mantiqiy qoidalarga mos, ham asl manba bilan bir xil ekanligi tasdiqlanadi', 'Fayl hajmi nol bo‘ladi', 'Hech qanday foydasi yo‘q', 'Hamma fayl shifrlanadi'],
        answer: 0,
        explanation: 'Ular bir-birini to‘ldirib, axborotning "Accuracy" (Aniqlik) sifatini taʼminlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda 10 ta raqamli kodni tezda ko‘chirish bo‘yicha Visual vs Double Entry tajribasi o‘tkazish.',
      timing: 'Visual & Double Entry 20 daq, Checksum 15 daq, TrueFalse va quiz 10 daq.',
      assessment: 'Copy-Paste muammosi va Checksum ni to‘g‘ri izohlash.',
      homework: 'Onlayn to‘lov yoki ro‘yxatdan o‘tish oynasida nega ham Validatsiya, ham Verifikatsiya ishlatilishini 5 qatorda yozing.',
    },
  },
  {
    id: 'g10-l05',
    grade: 10,
    no: 5,
    part: '1-chorak',
    title: 'Apparat ta`minot. Ichki va tashqi qurilmalar',
    kind: 'dars',
    hours: 1,
    tools: ['CPU / Registers / Cache / Buses', 'BIOS/CMOS', 'Periferiya qurilmalari'],
    objectives: [
      'O‘quvchi 10-sinf darajasida kompyuter ichki apparat qismlarini (CPU tarkibi: ALU, CU, Registrlar, Kesh; Tizim shinalari — Data/Address/Control Bus; Expansion cards; PSU) chuqur biladi.',
      'O‘quvchi ichki va tashqi (periferiya — input, output, tashqi xotira) qurilmalar orasidagi interfeys va ma’lumot almashinuvini tushuntiradi.',
    ],
    intro:
      '9-sinfda Hardware nima ekanini bilib olgan edik. 10-sinfda esa kompyuter korpusi ichiga chuqurroq nazar tashlaymiz: Protsessor ichidagi ALU va Registrlar qanday ishlaydi, ma’lumotlar ona platadagi "shinalar" (Buses) orqali qanday yuguradi?',
    sections: [
      {
        heading: 'Ichki apparat taʼminoti va Protsessor arxitekturasi',
        body: 'Ona plata (Motherboard) da: 1) **CPU** — ichida CU (Boshqaruv bloki — buyruqlarni Fetch-Decode-Execute siklida boshqaradi), ALU (arifmetik-mantiqiy amallar), **Registrlar** (CPU ichidagi eng tezkor mikro-xotira) va **Kesh (L1/L2/L3 Cache)**; 2) **Shinalar (System Buses)** — Data Bus, Address Bus, Control Bus; 3) **RAM va ROM/BIOS** (CMOS batareyasi tizim soati va BIOS sozlamalarini saqlaydi); 4) Kengaytirish kartalari (GPU, Sound card, NIC); 5) Quvvat bloki (PSU — 220V o‘zgaruvchan tokni kompyuter uchun 3.3V/5V/12V doimiy tokka o‘giradi).',
        example: 'Protsessor L1 Cache dan ma’lumotni RAM ga qaraganda o‘nlab marta tezroq oladi; shuning uchun tez-tez ishlatiladigan buyruqlar keshda saqlanadi.',
        tip: 'CPU ning takt chastotasi (GHz) va yadrolar soni (Cores) uning sekundiga nechta sikl va parallel vazifa bajarishini belgilaydi.',
      },
      {
        heading: 'Tashqi (Periferiya) qurilmalar va Port interfeyslari',
        body: 'Tizim blokidan tashqarida joylashib, unga kabel yoki simsiz (USB-C, HDMI, DisplayPort, Ethernet RJ-45, Thunderbolt, Bluetooth) orqali ulanadigan qurilmalar Periferiya qurilmalari deyiladi: kiritish (klaviatura, skaner, biometrik skaner), chiqarish (monitor, 3D printer, proyektor, aktuator), tashqi xotira (tashqi SSD/HDD, SD karta).',
        example: 'HDMI kabeli bir vaqtda ham yuqori aniqlikdagi video, ham raqamli audioni monitorga uzatadi; eski VGA esa faqat analog video uzatadi.',
      },
    ],
    keyTerms: [
      { term: 'CU va ALU', definition: 'CU buyruqlar oqimini boshqaradi, ALU hisoblash va mantiqiy taqqoslashlarni bajaradi.' },
      { term: 'Kesh (Cache) va Registrlar', definition: 'Protsessor ichida joylashgan va RAM dan ham tezroq ishlaydigan o‘ta tezkor xotira.' },
      { term: 'Tizim shinalari (Bus)', definition: 'CPU, RAM va boshqa ichki qurilmalar orasida ma’lumot, manzil va boshqaruv signallarini tashuvchi yo‘llar.' },
      { term: 'Periferiya qurilmalari', definition: 'Tizim blokidan tashqarida ulanadigan barcha kiritish, chiqarish va tashqi saqlash qurilmalari.' },
    ],
    steps: [
      '1. Ichki va tashqi (periferiya) qurilmalarni ajrating.',
      '2. CPU ning 3 asosiy qismi (CU, ALU, Registr/Cache) vazifasini yozing.',
      '3. Fetch → Decode → Execute siklini 3 qadamda tasvirlang.',
    ],
    practice: [
      {
        task: 'Ona platadagi kichik yumaloq CMOS batareyasi tugab qolsa kompyuterda nima kuzatiladi?',
        expected: 'Kompyuter elektrdan uzilganda tizim soati/sanasi har gal orqaga qaytib ketadi va BIOS sozlamalari tiklanadi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'RAM va CPU o‘rtasida L1/L2 Kesh xotirasining bo‘lishi nima uchun kompyuterni tezlashtiradi?',
        expected: 'Kesh CPU ga juda yaqin va RAM dan ancha tez; tez-tez kerak bo‘ladigan ma’lumot keshdan bir zumda olinadi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l05-g1',
        num: '01',
        title: 'Ichki va Tashqi qurilmalarni ajrat',
        topic: 'Apparat ta’minoti',
        difficulty: 'Oson',
        engine: 'sort',
        config: {
          prompt: 'Qurilmalarni tizim bloki ichida yoki tashqarisida joylashishiga ko‘ra ajrating.',
          categories: ['Ichki qurilma (Internal)', 'Tashqi periferiya (External)'],
          items: [
            { text: 'Ona plata (Motherboard)', category: 'Ichki qurilma (Internal)' },
            { text: 'Quvvat bloki (PSU)', category: 'Ichki qurilma (Internal)' },
            { text: 'L1/L2 Keshli Protsessor (CPU)', category: 'Ichki qurilma (Internal)' },
            { text: 'Plotter', category: 'Tashqi periferiya (External)' },
            { text: 'Tashqi SSD va USB Flash', category: 'Tashqi periferiya (External)' },
            { text: 'Veb-kamera va Mikrofon', category: 'Tashqi periferiya (External)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Kompyuterda buyruqlarni xotiradan olib (Fetch), tahlil qilib (Decode) va bajarilishini boshqaruvchi CPU qismi qaysi?',
        options: ['CU (Control Unit — Boshqaruv qurilmasi)', 'PSU', 'HDMI', 'CMOS'],
        answer: 0,
        explanation: 'CU butun kompyuter bo‘ylab signallarni boshqaradi, ALU esa arifmetika va mantiqni bajaradi.',
      },
      {
        prompt: 'Qaysi ichki komponent 220V o‘zgaruvchan tokni kompyuter qismlari uchun kerakli doimiy kuchlanishga aylantiradi?',
        options: ['PSU (Quvvat bloki)', 'GPU', 'ROM', 'NIC'],
        answer: 0,
        explanation: 'Power Supply Unit (PSU) tizimning barcha ichki qismlarini barqaror elektr bilan taʼminlaydi.',
      },
      {
        prompt: 'CPU va RAM o‘rtasidagi tezlik tafovutini kamaytiruvchi, protsessor ichidagi o‘ta tezkor xotira qaysi?',
        options: ['Kesh (Cache) xotira', 'HDD', 'Blu-ray', 'DVD-R'],
        answer: 0,
        explanation: 'Cache CPU ga kerakli buyruq va ma’lumotlarni RAM dan ancha tez yetkazib beradi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri ichki apparat komponenti HISOBLANMAYDI?',
        options: ['Grafik planshet (Stilus)', 'Ona plata', 'RAM moduli', 'Videokarta (GPU)'],
        answer: 0,
        explanation: 'Grafik planshet USB/Bluetooth orqali tashqaridan ulanadigan periferiya qurilmasidir.',
      },
      {
        prompt: 'Bir vaqtda ham yuqori aniqlikdagi video, ham raqamli ovozni monitorga uzatuvchi zamonaviy port qaysi?',
        options: ['HDMI / DisplayPort', 'VGA', 'PS/2', 'COM port'],
        answer: 0,
        explanation: 'VGA faqat analog video uzatadi; HDMI va DisplayPort esa raqamli video + audioni birga uzatadi.',
      },
    ],
    teacherNotes: {
      method: 'Ona plata sxemasi asosida CPU, RAM, Cache, CMOS va kengaytirish slotlarini (PCIe) ko‘rsatish.',
      timing: 'Ichki arxitektura 20 daq, Periferiya/Portlar 15 daq, Sort va quiz 10 daq.',
      assessment: 'CU, ALU, Cache, PSU va Periferiya farqini aniq aytish.',
      homework: 'Fetch–Decode–Execute siklini va RAM vs Cache farqini 5 qatorda yozing.',
    },
  },
  {
    id: 'g10-l06',
    grade: 10,
    no: 6,
    part: '1-chorak',
    title: 'Xotira qurilmalari. Tizimli dasturiy ta`minot. Drayverlar.',
    kind: 'dars',
    hours: 1,
    tools: ['Primary vs Secondary Storage', 'System Software', 'Compilers / Linkers', 'Device Drivers'],
    objectives: [
      'O‘quvchi Birlamchi (Primary — RAM, ROM, Cache) va Ikkilamchi (Secondary — HDD, SSD, Optik) xotira turlarini texnik mezonlar bo‘yicha tasniflaydi.',
      'O‘quvchi Tizimli dasturiy taʼminot turlarini — Operatsion tizim, Drayverlar, Kompilyator, Interpretator va Linkerlarni farqlaydi.',
    ],
    intro:
      'Kompyuterda yuzlab dasturlar bor, ammo ular orasida apparat bilan bevosita gaplashadigan "parda ortidagi qahramonlar" — Tizimli dasturlar (OT, Drayverlar, Kompilyatorlar) bo‘lmasa, birorta o‘yin yoki Word ham ishlamaydi!',
    sections: [
      {
        heading: 'Birlamchi (Primary) va Ikkilamchi (Secondary) xotira',
        body: 'Birlamchi xotira (RAM, ROM, Cache) protsessor bilan bevosita bog‘langan tezkor xotiradir: RAM — o‘qish/yozish mumkin, tok o‘chsa tozalanadi (volatile); ROM — faqat o‘qiladi (non-volatile, BIOS/UEFI yuklash kodi). Ikkilamchi xotira (SSD, HDD, USB, Optik disk) esa doimiy saqlash uchun (non-volatile), arzonroq va hajmi katta, ammo RAM dan sekinroq. RAM yetishmay qolganda OT SSD/HDD ning bir qismini **Virtual xotira (Virtual Memory)** sifatida ishlatadi.',
        example: 'Brauzerda 50 ta tab ochsangiz va RAM to‘lsa, Windows sekinlashib SSD dan "Paging file" (Virtual xotira) ishlata boshlaydi.',
        tip: 'Virtual xotira dasturlarni qulashdan saqlaydi, lekin disk RAM dan ancha sekin bo‘lgani uchun kompyuter qotib ishlashi mumkin.',
      },
      {
        heading: 'Tizimli dasturiy taʼminot: Drayverlar, Kompilyator va Interpretator',
        body: 'Tizimli dasturlar 4 guruhga bo‘linadi: 1) **Operatsion tizim** (resurs boshqaruvi); 2) **Qurilma drayverlari (Device Drivers)** — OT va aniq qurilma (printer, GPU, veb-kamera) o‘rtasidagi tarjimon; drayversiz qurilma tanilmaydi yoki to‘liq ishlamaydi; 3) **Tarjimon dasturlar**: Kompilyator (butun dastur kodini birdan mashina kodiga `.exe` o‘giradi — tez ishlaydi), Interpretator (kodni satrma-satr o‘girib bajaradi — xatoni topish oson, masalan Python/JS), Linker (alohida obyekt modullarini bitta bajariladigan faylga birlashtiradi); 4) **Utilitlar** (antivirus, defragmentator, arxivator).',
        example: 'Yangi videokarta qo‘yganingizda o‘yinlar qotib ishlashi mumkin — NVIDIA/AMD rasmiy drayverini o‘rnatgach GPU to‘liq kuchda ishlaydi!',
      },
    ],
    keyTerms: [
      { term: 'Device Driver (Drayver)', definition: 'Operatsion tizimga muayyan apparat qurilmasini to‘g‘ri boshqarish imkonini beruvchi dastur.' },
      { term: 'Compiler vs Interpreter', definition: 'Kompilyator butun kodni oldindan mashina tiliga o‘giradi; Interpretator esa satrma-satr bajaradi.' },
      { term: 'Linker (Bog‘lovchi)', definition: 'Kompilyatsiya qilingan obyekt fayllar va kutubxonalarni bitta tayyor dasturga birlashtiruvchi dastur.' },
      { term: 'Virtual Memory', definition: 'RAM to‘lib qolganda vaqtinchalik foydalaniladigan qattiq disk (SSD/HDD) maydoni.' },
    ],
    steps: [
      '1. Birlamchi (RAM/ROM/Cache) va Ikkilamchi (SSD/HDD/Optik) xotiralarni volatile/non-volatile bo‘yicha ajrating.',
      '2. Kompilyator, Interpretator va Linker vazifalarini taqqoslang.',
      '3. Device Manager da kompyuterdagi printer yoki audio drayver versiyasini tekshirish qadamlarini yozing.',
    ],
    practice: [
      {
        task: 'Nima uchun yangi sotib olingan maxsus 3D-skaner yoki printer kompyuterga ulanganda o‘zining drayverini o‘rnatish talab qilinadi?',
        expected: 'Operatsion tizim har bir yangi qurilmaning ichki buyruqlarini bilmaydi; drayver OT va qurilma o‘rtasidagi tarjimon vazifasini bajaradi.',
        difficulty: 'oson',
      },
      {
        task: 'Kompilyator va Interpretator o‘rtasidagi 2 ta asosiy farqni tushuntiring.',
        expected: '1) Kompilyator butun kodni birdan mashina kodiga aylantiradi va natijada tez ishlaydi; Interpretator esa satrma-satr bajaradi (sekinroq, lekin xato joyini darhol ko‘rsatadi).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l06-g1',
        num: '01',
        title: 'Tizimli dasturlar mosligi',
        topic: 'Tizimli dasturiy ta’minot',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Tizimli dasturiy taʼminot komponentini uning aniq vazifasi bilan juftlang.',
          pairs: [
            { left: 'Device Driver (Drayver)', right: 'OT va printer/videokarta kabi apparat o‘rtasida aloqa o‘rnatadi' },
            { left: 'Kompilyator (Compiler)', right: 'Butun dastlabki kodni birdan mashina kodiga tarjima qiladi' },
            { left: 'Interpretator (Interpreter)', right: 'Dastur kodini satrma-satr o‘qib darhol bajaradi' },
            { left: 'Linker', right: 'Bir nechta obyekt modullarni bitta bajariladigan faylga birlashtiradi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Yangi o‘rnatilgan videokarta yoki ovoz kartasini operatsion tizim to‘g‘ri boshqarishi uchun nima o‘rnatiladi?',
        options: ['Drayver (Device Driver)', 'Veb-brauzer', 'Mail Merge', 'PDF Viewer'],
        answer: 0,
        explanation: 'Drayver OT ga apparat bilan muloqot qilish ko‘rsatmalarini beradi.',
      },
      {
        prompt: 'Butun dastur matnini bir marta mashina kodiga aylantirib, mustaqil bajariladigan fayl yaratuvchi dastur nima?',
        options: ['Kompilyator (Compiler)', 'Interpretator', 'Drayver', 'Defragmentator'],
        answer: 0,
        explanation: 'Kompilyator C++/Rust kabi tillarda kodni to‘liq mashina tiliga o‘giradi.',
      },
      {
        prompt: 'Qaysi biri Birlamchi (Primary) xotiraga kiradi?',
        options: ['RAM va ROM', 'SSD va Blu-ray', 'Magnit lenta', 'USB Flash'],
        answer: 0,
        explanation: 'RAM, ROM va Cache CPU bevosita murojaat qiladigan birlamchi xotiralardir.',
      },
      {
        prompt: 'RAM to‘lib qolganda OT vaqtincha SSD/HDD dan joy olib ishlatishi qanday nomlanadi?',
        options: ['Virtual xotira (Virtual Memory)', 'ROM', 'L1 Cache', 'CMOS'],
        answer: 0,
        explanation: 'Virtual xotira RAM yetmaganda disk maydonini vaqtinchalik kengaytma sifatida ishlatadi.',
      },
      {
        prompt: 'Alohida kompilyatsiya qilingan obyekt fayllarni va kutubxonalarni bitta `.exe` dasturga bog‘lovchi tizimli dastur qaysi?',
        options: ['Linker', 'Driver', 'BIOS', 'Antivirus'],
        answer: 0,
        explanation: 'Linker barcha modullar va kutubxonalarni yagona bajariladigan faylga yig‘adi.',
      },
    ],
    teacherNotes: {
      method: 'Device Manager oynasini ochib, drayverlar va kompilyator/interpretator sxemasini tushuntirish.',
      timing: 'Primary/Secondary & Virtual 15 daq, Drayver/Compiler/Linker 20 daq, Match va quiz 10 daq.',
      assessment: 'Drayver, Kompilyator, Interpretator va Linker farqini bilish.',
      homework: 'Device Manager dan kompyuteringizdagi 3 ta qurilma drayveri nomini yozib keling.',
    },
  },
  {
    id: 'g10-l07',
    grade: 10,
    no: 7,
    part: '1-chorak',
    title: 'Amaliy dasturiy ta`minot. Fotosuratni tahrirlash dasturiy taʼminoti',
    kind: 'amaliy',
    hours: 1,
    tools: ['GIMP / Photopea', 'ImageLab', 'Qatlamlar, Maskalar, Klonlash, Rang balansi'],
    objectives: [
      'O‘quvchi Amaliy dasturiy taʼminot turlarini (Ofis, CAD, Moliyaviy, DTP, Foto tahrir) hamda fotosurat muharririning ilg‘or funksiyalarini biladi.',
      'O‘quvchi amaliy mashg‘ulotda qatlam maskalari, rang/kontrast balanslash va retushlash usullarini qo‘llaydi.',
    ],
    intro:
      'Amaliy dasturlar insonning aniq bir ijodiy yoki kasbiy vazifasini hal qiladi. Bugungi amaliy darsda fotosuratni tahrirlash dasturlari (GIMP, Photopea, Photoshop) ning professional imkoniyatlarini o‘rganamiz va sinab ko‘ramiz!',
    sections: [
      {
        heading: 'Amaliy dasturlar tasnifi va Foto muharriri imkoniyatlari',
        body: 'Amaliy dasturlar: Matn protsessorlari, Elektron jadvallar, DB boshqaruv tizimlari, CAD (muhandislik chizmachiligi), DTP (sahifalash) va Grafik muharrirlar. Fotosurat muharriri (GIMP/Photopea) quyidagi kuchli vositalarni beradi: **Qatlamlar va Niqoblar (Layer Masks)** — rasmni o‘chirmasdan yashirish (buzilmas tahrirlash!); **Clone / Healing Brush** — ortiqcha sim yoki dog‘ni tozalash; **Levels / Curves** — yorug‘lik, soya va kontrastni nozik boshqarish; **Filters** — xiralashtirish (Gaussian Blur) va aniqlik (Unsharp Mask).',
        example: 'Portret suratida orqa fonni biroz xiralashtirish (`Blur`) uchun odam qahramoni alohida qatlam maskasi bilan ajratiladi.',
        tip: 'Har doim original suratni saqlab qoling va qatlamlar bilan loyiha fayli (`.xcf` yoki `.psd`) shaklida saqlang — veb uchun esa oxirida `.jpg`/`.png` ga eksport qiling!',
      },
    ],
    keyTerms: [
      { term: 'Amaliy dasturiy taʼminot', definition: 'Foydalanuvchining muayyan vazifasini (matn, hisob, rasm, loyiha) bajaruvchi dasturlar.' },
      { term: 'Layer Mask (Qatlam niqobi)', definition: 'Qatlamning ma’lum joylarini piksellarni butunlay o‘chirmay vaqtincha yashirish usuli.' },
      { term: 'Healing / Clone vositasi', definition: 'Surattagi keraksiz obyekt yoki nuqsonni atrofdagi toza tekstura bilan berkitish.' },
      { term: 'Non-destructive editing', definition: 'Asl piksel ma’lumotlarini buzmasdan qatlam va niqoblar orqali qaytariladigan tahrirlash.' },
    ],
    steps: [
      '1. Amaliy mashq: ImageLab studiyasida portret suratining yorqinligi, kontrasti va yo‘nalishini sozlang (`Brightness: 110%`, `Contrast: 125%`, `FlipH: yoqiq`).',
      '2. GIMP/Photopea da qatlam qo‘shish va qisman rang/yorug‘lik sozlashni tekshiring.',
      '3. Yakuniy rasmni veb uchun `.jpg` va shaffof logo uchun `.png` formatida eksport qilish qoidasini yozing.',
    ],
    practice: [
      {
        task: 'Nima uchun fotosurat tahririda o‘chirgich (Eraser) o‘rniga Layer Mask (Qatlam niqobi) ishlatish afzalroq?',
        expected: 'Eraser piksellarni butunlay o‘chiradi; Layer Mask esa faqat yashiradi va istalgan payt oq mo‘yqalam bilan qayta ochish mumkin (non-destructive).',
        difficulty: 'o‘rta',
      },
      {
        task: 'Eski sarg‘aygan fotosuratni tiklash uchun foto muharririning qaysi 3 uskunasini qo‘llaysiz?',
        expected: '1) Clone/Healing Brush (yirtiq va dog‘larni tozalash); 2) Levels/Color Balance (sariqlikni olib kontrast berish); 3) Unsharp Mask (aniqlik).',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l07-g1',
        num: '01',
        title: 'ImageLab: Portret retushi laboratoriyasi',
        topic: 'Foto tahrirlash amaliyoti',
        difficulty: 'O‘rta',
        engine: 'imagelab',
        config: {
          prompt: 'Portret suratini professional retushdan o‘tkazing: Brightness = 110%, Contrast = 125%, Rotate = 0°, va gorizontal ko‘zgu aksi (Flip Horizontal) ni yoqing!',
          subject: 'portrait',
          target: {
            brightness: 110,
            contrast: 125,
            rotate: 0,
            flipH: true,
          },
          tolerance: 5,
          hint: 'Yorqinlikni 110%, Kontrastni 125% ga qo‘ying va "Gorizontal aks (Flip)" tugmasini yoqing.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Fotosuratning bir qismini piksellarni butunlay o‘chirib tashlamasdan yashiruvchi usul qaysi?',
        options: ['Qatlam niqobi (Layer Mask)', 'Crop', 'JPG siqish', 'Formatlash'],
        answer: 0,
        explanation: 'Layer Mask qora rang bilan yashiradi, oq rang bilan qayta ko‘rsatadi — bu buzilmas tahrirlashdir.',
      },
      {
        prompt: 'Surattagi elektr simi yoki kichik dog‘ni atrofidagi toza osmon teksturasi bilan berkitish uchun nima ishlatiladi?',
        options: ['Clone Stamp / Healing Brush', 'Text Tool', 'Bucket Fill', 'Zoom'],
        answer: 0,
        explanation: 'Clone/Healing qo‘shni toza hududdan nusxa olib nuqsonni tabiiy berkitadi.',
      },
      {
        prompt: 'Muhandislik chizmalari va 3D loyihalarni yaratish uchun qaysi turdagi amaliy dastur qo‘llaniladi?',
        options: ['CAD (Computer-Aided Design)', 'Audacity', 'Mail Merge', 'DBMS'],
        answer: 0,
        explanation: 'CAD (AutoCAD, FreeCAD) aniq texnik va meʼmoriy chizmalar uchun mo‘ljallangan.',
      },
      {
        prompt: 'GIMP yoki Photopea da qatlamlar saqlanib qolishi uchun loyiha qaysi formatda saqlanishi kerak?',
        options: ['.xcf yoki .psd', '.jpg', '.bmp', '.txt'],
        answer: 0,
        explanation: '`.xcf` (GIMP) va `.psd` (Photoshop/Photopea) barcha qatlam va niqoblarni saqlaydi; `.jpg` hammasini bitta qatlamga yopishtiradi.',
      },
      {
        prompt: 'Portret suratida orqa fonni biroz xiralashtirib yuzni bo‘rttirib ko‘rsatish uchun qaysi filtr qo‘llanadi?',
        options: ['Gaussian Blur (orqa fon qatlamiga)', 'Invert', 'Watermark', 'Pixelate yuzga'],
        answer: 0,
        explanation: 'Gaussian Blur orqa fondagi chalg‘ituvchi detallarni silliq xiralashtiradi.',
      },
    ],
    teacherNotes: {
      method: 'Amaliy dars: ImageLab da retush va GIMP/Photopea da qatlam maskasi namoyishi.',
      timing: 'Kirish 10 daq, Amaliy foto tahrir va ImageLab 25 daq, Quiz 10 daq.',
      assessment: 'ImageLab retush parametrlarini aniq bajarish.',
      homework: 'O‘zingizning rasm loyihangizda orqa fonni alohida qatlamda biroz xiralashtirib (Blur) saqlang.',
    },
  },
  {
    id: 'g10-l08',
    grade: 10,
    no: 8,
    part: '1-chorak',
    title: 'Video tahrirlash dasturiy taʼminoti. Veb sahifa ishlab chiqish dasturiy taʼminoti',
    kind: 'dars',
    hours: 1,
    tools: ['Kdenlive / Shotcut / OpenShot', 'Timeline', 'VS Code / WYSIWYG vs Text Editor'],
    objectives: [
      'O‘quvchi video tahrirlash dasturlarining asosiy imkoniyatlarini (Timeline, qirqish/split, o‘tishlar, audio trek, titr va eksport) tushunadi.',
      'O‘quvchi veb-sahifa yaratish dasturlari — Kod muharrirlari (VS Code) va Vizual WYSIWYG muharrirlarining afzallik va kamchiliklarini solishtiradi.',
    ],
    intro:
      'Bugun video kontent va veb-sayt yaratish eng talabgir raqamli ko‘nikmalardandir. Video muharririda ko‘p qatlamli Vaqt chizig‘i (Timeline) bilan ishlasak, veb-ishlab chiqishda esa kod muharriri yoki vizual konstruktor tanlashga to‘g‘ri keladi.',
    sections: [
      {
        heading: 'Video tahrirlash dasturlari (Shotcut, Kdenlive, Premiere)',
        body: 'Video muharriri **Timeline (Vaqt chizig‘i)** dan iborat bo‘lib, unda bir nechta Video (V1, V2) va Audio (A1, A2) treklari ustma-ust joylashadi. Asosiy amallar: 1) Kliplarni kesish (Trim/Split) va birlashtirish; 2) Kliplar orasiga silliq o‘tishlar (Transitions: Crossfade); 3) Matnli titr va subtitrlar qo‘shish; 4) Orqa fon musiqasi va ovozni balanslash; 5) Rang korreksiyasi va `.mp4` (H.264) formatida Rendering/Export qilish.',
        example: 'O‘quv videosida V1 trekda ekran yozuvi, V2 trekda ustozning kichik burchak tasviri, A1 da ovoz, A2 da past ovozli musiqa turadi.',
        tip: 'Video tahrirlash ko‘p RAM va GPU talab qiladi; Kdenlive va Shotcut — bepul ochiq kodli kuchli muharrirlardir.',
      },
      {
        heading: 'Veb-sahifa yaratish dasturlari: Kod muharriri vs WYSIWYG',
        body: '**Matn/Kod muharriri** (VS Code, Sublime Text): HTML, CSS va JS kodini qo‘lda yozish — toza, yengil, tez yuklanadigan va to‘liq nazorat ostidagi sayt beradi (sintaksis ranglash va Emmet yordamchisi bor), ammo HTML/CSS bilishni talab qiladi. **WYSIWYG** ("What You See Is What You Get" — WordPress/Wix/Dreamweaver): Word dagidek vizual sudrab qo‘yish bilan tez sayt yasaladi, kod bilish shart emas; lekin ortiqcha og‘ir kod yaratishi va chuqur moslashtirish cheklangan bo‘lishi mumkin.',
        example: 'Professional front-end dasturchilar VS Code da kod yozadi; kichik kafe egasi esa bir kechada oddiy tashrif sahifasini WYSIWYG konstruktorida yasashi mumkin.',
      },
    ],
    keyTerms: [
      { term: 'Timeline (Vaqt chizig‘i)', definition: 'Video va audio kliplar vaqt bo‘yicha ketma-ket va qatlamlab joylanadigan ish maydoni.' },
      { term: 'Rendering / Export', definition: 'Tahrirlangan barcha video, audio va effektlarni yagona tayyor `.mp4` faylga yig‘ish jarayoni.' },
      { term: 'WYSIWYG', definition: '"Ko‘rganingizdek natija olasiz" — kodsiz vizual sudrab-tashlash orqali veb-sahifa yasash usuli.' },
      { term: 'Kod muharriri (IDE/Editor)', definition: 'HTML/CSS/JS yozish uchun rangli sintaksis va avtoto‘ldirish beruvchi dastur (VS Code).' },
    ],
    steps: [
      '1. Quyidagi Timeline o‘yinida video kliplar, titr va kesishni to‘g‘ri tartiblang.',
      '2. Shotcut/Kdenlive dagi V1 va A1 treklari vazifasini yozing.',
      '3. VS Code va WYSIWYG konstruktorini 3 mezon (tezlik, kod tozaligi, bilim talabi) bo‘yicha taqqoslang.',
    ],
    practice: [
      {
        task: 'Yangi boshlovchi tadbirkor kodsiz 2 soatda sayt ochmoqchi, IT kompaniya esa maksimal tezlik va noyob funksiyali portal qurmoqchi. Qaysi vositalarni tavsiya qilasiz?',
        expected: 'Tadbirkorga WYSIWYG veb-konstruktori; IT kompaniyaga VS Code kabi kod muharririda toza HTML/CSS/JS.',
        difficulty: 'oson',
      },
      {
        task: 'Video loyihani `.mlt` / `.kdenlive` ko‘rinishida do‘stingizga yuborsangiz nega video ochilmaydi?',
        expected: 'Loyiha faylida video kliplar emas, faqat tahrir yo‘riqnomasi saqlanadi; tomosha qilish uchun loyihani `.mp4` ga Export/Render qilish kerak.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l08-g1',
        num: '01',
        title: 'Timeline: Video montaj studiyasi',
        topic: 'Video tahrirlash',
        difficulty: 'O‘rta',
        engine: 'timeline',
        config: {
          prompt: 'Maktab haqidagi qisqa videorolik kliplarini mantiqiy ketma-ketlikda (`Kirish → Dars jarayoni → Yakun`) joylashtiring, klipni kesing (Trim) va Titr qo‘shing!',
          clips: [
            { id: 'y', label: 'Yakuniy tabrik va logotip (4s)', duration: 4, color: '#8b5cf6' },
            { id: 'k', label: 'Kirish: Maktab binosi (5s)', duration: 5, color: '#3b82f6' },
            { id: 'd', label: 'Asosiy: Informatika darsi (8s)', duration: 8, color: '#10b981' },
          ],
          expectedOrder: ['k', 'd', 'y'],
          requireTitleTrack: true,
          requireTrim: true,
          hint: 'Tartib: Kirish (`k`) → Asosiy dars (`d`) → Yakun (`y`). So‘ng "Titr qo‘shish" va "Klipni kesish (Trim)" tugmalarini yoqing.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Video muharririda video va audio kliplar vaqt bo‘yicha ketma-ket hamda ustma-ust joylashtiriladigan qism nima deyiladi?',
        options: ['Timeline (Vaqt chizig‘i)', 'Spreadsheet', 'Database', 'Router'],
        answer: 0,
        explanation: 'Timeline barcha kadrlar, titrlar va tovush treklarining vaqt bo‘yicha joylashuvini boshqaradi.',
      },
      {
        prompt: 'WYSIWYG veb-muharririning Kod muharririga (VS Code) nisbatan asosiy kamchiligi nimada?',
        options: ['Ko‘pincha ortiqcha, og‘ir va noaniq HTML/CSS kodi generatsiya qiladi hamda dizaynni chuqur cheklaydi', 'Matn yozib bo‘lmaydi', 'Rasm qo‘yib bo‘lmaydi', 'Ekranda ko‘rinmaydi'],
        answer: 0,
        explanation: 'Vizual konstruktorlar qulay bo‘lsa-da, toza qo‘lda yozilgan kod kabi optimallashtirilmagan bo‘ladi.',
      },
      {
        prompt: 'Montaj qilingan videoni barcha telefon va saytlarda ochiladigan tayyor video faylga aylantirish jarayoni nima?',
        options: ['Rendering / Export (masalan, .mp4 H.264)', 'Mail Merge', 'Checking', 'Encoding ASCII'],
        answer: 0,
        explanation: 'Render jarayoni barcha treklar, effektlar va titrlarni bitta yakuniy videofaylga yig‘adi.',
      },
      {
        prompt: 'Bepul va ochiq kodli video tahrirlash dasturiga misol qaysi?',
        options: ['Kdenlive / Shotcut', 'MS Excel', 'Oracle SQL', 'WinRAR'],
        answer: 0,
        explanation: 'Shotcut, OpenShot va Kdenlive kuchli bepul video muharrirlaridir.',
      },
      {
        prompt: 'Video ichida gapirayotgan odamning ovozini berkitib yubormaslik uchun orqa fon musiqasi treki bilan nima qilinadi?',
        options: ['Audio trek ovoz balandligi (Volume/Gain) pasaytiriladi', 'Video o‘chiriladi', 'Titr kattalashtiriladi', 'Klip 10x tezlashtiriladi'],
        answer: 0,
        explanation: 'Orqa musiqa nutqdan 15–20 dB past bo‘lishi kerak.',
      },
    ],
    teacherNotes: {
      method: 'Timeline o‘yinida montaj qoidalarini mashq qildirib, VS Code vs WYSIWYG ni taqqoslash.',
      timing: 'Video montaj 15 daq, Veb muharrirlar 15 daq, Timeline va quiz 15 daq.',
      assessment: 'Timeline o‘yinini trim va titr talablari bilan yakunlash.',
      homework: '30 soniyalik maktab haqida mini-video ssenariysini (V1, A1, Titr treklari jadvali) yozing.',
    },
  },
  {
    id: 'g10-l09',
    grade: 10,
    no: 9,
    part: '1-chorak',
    title: 'Foydalanuvchi interfeysi dizaynidagi boshqaruv elementlari. Utilit dasturlar. Buyurtma yoki tayyor dasturiy ta`minot.',
    kind: 'dars',
    hours: 1,
    tools: ['UI Controls (Radio/Checkbox/Dropdown)', 'Utilities', 'Bespoke vs Off-the-shelf'],
    objectives: [
      'O‘quvchi UI dizayndagi asosiy boshqaruv elementlarini (Text box, Drop-down list, Radio button, Checkbox, Slider, Toggle, Date picker) vazifasiga qarab to‘g‘ri tanlaydi.',
      'O‘quvchi Utilit dasturlar (Antivirus, Arxivator, Disk tozalash, Backup) hamda Buyurtma (Bespoke) va Tayyor (Off-the-shelf) dasturlar farqini tahlil qiladi.',
    ],
    intro:
      'Qulay ilovada foydalanuvchi hech qachon "Bu yerda nima tanlay?" deb ikkilanmaydi! Buning siri — to‘g‘ri tanlangan UI elementlari (Radio vs Checkbox). Shuningdek, tashkilot dastur sotib olayotganda tayyorini oladimi yoki noldan buyurtma beradimi?',
    sections: [
      {
        heading: 'UI boshqaruv elementlari (Radio, Checkbox, Drop-down)',
        body: 'Har bir kiritish elementi aniq vazifaga ega: **Radio Button** (doira) — faqat BITTA variantni tanlash (masalan, `To‘lov turi: Naqd / Karta`). **Checkbox** (katakcha) — BIR NECHTA variantni tanlash (masalan, `Qiziqishlar: Sport, Musiqa, Kodlash`). **Drop-down List** — ko‘p sonli tayyor ro‘yxatdan joyni tejab tanlash (masalan, 14 ta viloyat yoki 200 davlat). **Text Box** — erkin matn; **Slider** — ovoz yoki narx diapazoni; **Date Picker** — xatosiz sana tanlash kalendari.',
        example: '190 ta mamlakat ro‘yxatini 190 ta Radio tugma qilib qo‘yish sahifani rasvo qiladi — buning o‘rniga bitta Drop-down ishlatiladi!',
        tip: 'Utilit dasturlar (Utilities) kompyuterni parvarishlaydi: Antivirus, Zaxira nusxalash (Backup), Fayl siqish (7-Zip), Diskni tozalash va Defragmentatsiya (faqat HDD uchun!).',
      },
      {
        heading: 'Buyurtma (Bespoke) va Tayyor (Off-the-shelf) dasturlar',
        body: '**Tayyor dastur (Off-the-shelf — masalan, MS Excel, Zoom)**: darhol sotib olib o‘rnatish mumkin, ancha arzon (xarajat millionlab mijozlarga bo‘linadi), yaxshi sinovdan o‘tgan va qo‘llanmalari ko‘p; kamchiligi — tashkilotning noyob talabiga 100% mos kelmasligi va ortiqcha funksiyalar ko‘pligi. **Buyurtma dastur (Bespoke / Custom)**: aynan bitta kompaniya talabi bo‘yicha noldan yoziladi (masalan, zavod yoki bankning maxsus tizimi). Afzalligi — biznesga 100% mos va raqobatchilarda yo‘q ustunlik; kamchiligi — juda qimmat, yaratishga oylar ketadi va yangi yozilgani uchun xatolar (bugs) ko‘proq bo‘lishi mumkin.',
        example: 'Maktab o‘qituvchisiga hujjat yozish uchun maxsus buyurtma dastur yozdirish shart emas — tayyor LibreOffice/Word arzon va ishonchli!',
      },
    ],
    keyTerms: [
      { term: 'Radio vs Checkbox', definition: 'Radio button faqat 1 ta tanlov uchun; Checkbox bir nechta tanlovni belgilash uchun.' },
      { term: 'Drop-down List', definition: 'Joy tejab uzun ro‘yxatdan bitta qiymatni tanlashga xizmat qiluvchi menyu.' },
      { term: 'Utilitlar (Utilities)', definition: 'Tizimga xizmat ko‘rsatuvchi yordamchi dasturlar (Backup, Antivirus, Compression, Disk Cleanup).' },
      { term: 'Bespoke vs Off-the-shelf', definition: 'Bespoke — maxsus buyurtma asosida yozilgan qimmat dastur; Off-the-shelf — tayyor ommaviy dastur.' },
    ],
    steps: [
      '1. Anketadagi savollar uchun Radio, Checkbox, Drop-down va Date Picker ni ajrating.',
      '2. Utilit dasturlarning 4 ta vazifasini sanang.',
      '3. Yangi kichik kafe va milliy aviakompaniya uchun Bespoke vs Off-the-shelf tanlovini asoslang.',
    ],
    practice: [
      {
        task: 'Anketada "Biladigan tillaringiz (O‘zbek, Rus, Ingliz, Nemis)" savoli uchun Radio button qo‘yilsa qanday muammo chiqadi?',
        expected: 'Foydalanuvchi faqat 1 ta tilni tanlay oladi! Bir nechta til biladiganlar uchun albatta Checkbox (katakcha) qo‘yilishi kerak.',
        difficulty: 'oson',
      },
      {
        task: 'Kichik dorixona va yirik kosmik agentlik dasturiy taʼminot sotib olishda Buyurtma (Bespoke) yoki Tayyor (Off-the-shelf) dan qay birini tanlashi mantiqli?',
        expected: 'Dorixona uchun Tayyor (Off-the-shelf) arzon va tez; Kosmik agentlik noyob talablari sabab Buyurtma (Bespoke) yozdiradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l09-g1',
        num: '01',
        title: 'UI elementlari va Dastur turlari',
        topic: 'UI, Utilitlar va Bespoke',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Tushuncha va boshqaruv elementini uning to‘g‘ri qo‘llanilishi bilan juftlang.',
          pairs: [
            { left: 'Radio Button', right: 'O‘zaro istisno qiluvchi variantlardan faqat BITTA sini tanlash' },
            { left: 'Checkbox', right: 'Qiziqishlar ro‘yxatidan BIR NECHTA variantni belgilash' },
            { left: 'Off-the-shelf dastur', right: 'Darhol o‘rnatiladigan arzon va ommaviy tayyor dastur' },
            { left: 'Bespoke dastur', right: 'Yagona tashkilotning maxsus talabi uchun noldan yozilgan tizim' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Foydalanuvchi "Qo‘shimcha xizmatlar" ro‘yxatidan bir vaqtning o‘zida 3 ta variantni belgilashi uchun qaysi UI elementi qo‘yiladi?',
        options: ['Checkbox (Katakcha)', 'Radio Button', 'Progress Bar', 'Watermark'],
        answer: 0,
        explanation: 'Checkbox bir nechta mustaqil variantlarni tanlash imkonini beradi.',
      },
      {
        prompt: '195 ta davlat ro‘yxatidan bittasini tanlashda ekranda joy tejash va validatsiya uchun eng qulay element qaysi?',
        options: ['Drop-down List (Ochiluvchi ro‘yxat)', '195 ta Radio button', 'Oddiy Text box', 'Slider'],
        answer: 0,
        explanation: 'Drop-down uzun ro‘yxatni ixcham saqlaydi va imlo xatosini yo‘qotadi.',
      },
      {
        prompt: 'Maxsus buyurtma asosida yoziladigan (Bespoke) dasturiy taʼminotning asosiy kamchiligi nimada?',
        options: ['Juda qimmat, yaratish ko‘p vaqt oladi va dastlab xatolar bo‘lishi mumkin', 'Tashkilot talabiga mos kelmaydi', 'Darhol 1 dollarga sotib olinadi', 'Hech qachon yangilanmaydi'],
        answer: 0,
        explanation: 'Bespoke dastur faqat bir mijoz uchun yozilgani uchun barcha ishlab chiqish xarajatlari unga tushadi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri Utilit (Utility) dasturga misol bo‘ladi?',
        options: ['Zaxira nusxalash (Backup) va Arxivator (7-Zip)', 'PowerPoint', 'Photoshop', 'Google Chrome'],
        answer: 0,
        explanation: 'Utilitlar kompyuter tizimini boshqarish, optimallashtirish va himoyalashga xizmat qiladi.',
      },
      {
        prompt: 'SSD disklarida nima uchun HDD dagi kabi tez-tez Defragmentatsiya utilitini ishlatish tavsiya etilmaydi?',
        options: ['SSD da mexanik kallak yo‘q (hamma katakka kirish bir xil tez) va ortiqcha yozish flesh xotirani eskiradi', 'SSD da fayl saqlanmaydi', 'SSD faqat ROM dan iborat', 'Defragmentatsiya SSD ni kattalashtiradi'],
        answer: 0,
        explanation: 'SSD da ma’lumotga to‘g‘ridan-to‘g‘ri bir xil tezlikda kiriladi; ortiqcha qayta yozish NAND resursini kamaytiradi.',
      },
    ],
    teacherNotes: {
      method: 'Veb-forma eskizi chizib, har bir maydonga to‘g‘ri UI elementini tanlash.',
      timing: 'UI elementlari 15 daq, Utilitlar & Bespoke/Off-the-shelf 20 daq, Match va quiz 10 daq.',
      assessment: 'Radio/Checkbox/Drop-down va Bespoke/Off-the-shelf farqini aniq aytish.',
      homework: 'Onlayn kutubxonaga a’zo bo‘lish anketasining 6 maydonli UI maketini chizib element turlarini belgilang.',
    },
  },
];
