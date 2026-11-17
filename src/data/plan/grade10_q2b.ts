import type { Lesson } from './types';

export const GRADE_10_Q2B: Lesson[] = [
  {
    id: 'g10-l26',
    grade: 10,
    no: 26,
    part: '2-chorak',
    title: 'Ekspert tizim haqida',
    kind: 'dars',
    hours: 1,
    tools: ['Ekspert tizim', 'Sunʼiy intellekt'],
    objectives: [
      'O‘quvchi ekspert tizim tushunchasini, uning inson mutaxassis bilimlarini modellashtirishdagi rolini tushuntiradi.',
      'O‘quvchi ekspert tizimning asosiy 4 komponentini (bilimlar bazasi, qoidalar bazasi, mantiqiy xulosa chiqaruvchi mexanizm, foydalanuvchi interfeysi) sanaydi.',
    ],
    intro:
      'Shifokor bemorni ko‘rikdan o‘tkazib tashxis qo‘yganidek, dasturiy tizim ham yuzlab savollar va qoidalar asosida murakkab qaror chiqara oladimi? Ha — bu **Ekspert tizim (Expert System)** deb ataladi!',
    sections: [
      {
        heading: 'Ekspert tizim nima?',
        body: '**Ekspert tizim** — maʼlum bir tor sohadagi (masalan, tibbiyot, geologiya, avtomobil taʼmiri, kredit baholash) inson-ekspertning bilim va tajribasini kompyuterda modellashtiruvchi sunʼiy intellekt dasturi. Oddiy dasturlardan farqli o‘laroq, ekspert tizim nafaqat hisoblaydi, balki *tavsiyalar beradi* va *nega bunday xulosaga kelganini tushuntirib beradi*.',
        example: 'MYCIN (yuqumli kasalliklar tashxisi), DENDRAL (kimyoviy tarkib tahlili), Prospector (foydali qazilmalarni izlash) tarixdagi mashhur ekspert tizimlardir.',
        tip: 'Ekspert tizim inson mutaxassisni to‘liq almashtirmaydi — u qaror qabul qilishda yordamchi vosita bo‘lib xizmat qiladi.',
      },
      {
        heading: 'Ekspert tizim tarkibiy qismlari',
        body: 'Har qanday klassik ekspert tizim 4 asosiy qismdan iborat: 1) **Foydalanuvchi interfeysi (User Interface)** — foydalanuvchi bilan savol-javob oynasi; 2) **Mantiqiy xulosa chiqaruvchi mexanizm (Inference Engine)** — qoidalar bo‘yicha fikrlovchi "miya"; 3) **Bilimlar bazasi (Knowledge Base)** — sohaga oid faktlar to‘plami; 4) **Qoidalar bazasi (Rule Base)** — `IF ... THEN ...` ko‘rinishidagi mantiqiy qoidalar.',
        example: 'Avtomobil diagnostikasi tizimida: `IF` dvigatel aylanmaydi `AND` faralar xira `THEN` akkumulyator quvvati tugagan.',
      },
    ],
    keyTerms: [
      { term: 'Ekspert tizim', definition: 'Tor sohadagi mutaxassis bilimi asosida qaror va tavsiya beruvchi intellektual tizim.' },
      { term: 'Bilimlar bazasi', definition: 'Sohaga oid tizimlashtirilgan faktlar va tushunchalar saqlanadigan xotira.' },
      { term: 'Qoidalar bazasi', definition: 'IF (shart) – THEN (natija) ko‘rinishidagi mantiqiy qoidalar to‘plami.' },
      { term: 'Xulosa mexanizmi', definition: 'Foydalanuvchi javoblarini qoidalar bilan solishtirib tashxis chiqaruvchi modul.' },
    ],
    steps: [
      '1. Ekspert tizimning oddiy maʼlumotlar bazasidan farqini ajrating.',
      '2. 4 asosiy komponent nomini va vazifasini eslab qoling.',
      '3. Quyidagi moslashtirish o‘yinida komponentlarni vazifasiga bog‘lang.',
    ],
    practice: [
      {
        task: 'Tibbiy ekspert tizim shifokorga qanday ustunliklar beradi? 2 ta misol keltiring.',
        expected: '1) Kam uchraydigan kasallik alomatlarini unutmaslikka yordam beradi; 2) 24/7 tezkor dastlabki tahlil va izoh beradi.',
        difficulty: 'oson',
      },
      {
        task: 'Maktab kompyuterini taʼmirlash bo‘yicha 1 ta IF-THEN qoidasini yozing.',
        expected: 'IF kompyuter yoqilganda monitor qora va signal eshitilmasa THEN quvvat bloki yoki elektr kabelini tekshiring.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l26-g1',
        num: '01',
        title: 'Ekspert tizim arxitekturasi',
        topic: 'Ekspert tizim komponentlari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Ekspert tizimning har bir qismini uning aniq vazifasiga moslashtiring:',
          pairs: [
            { left: 'Bilimlar bazasi', right: 'Sohaga oid faktlar va taʼriflar to‘plami' },
            { left: 'Qoidalar bazasi', right: 'IF–THEN shaklidagi mantiqiy shartlar' },
            { left: 'Inference Engine', right: 'Fakt va qoidalarni bog‘lab xulosa chiqaruvchi mexanizm' },
            { left: 'Foydalanuvchi interfeysi', right: 'Savol berib natija ko‘rsatuvchi muloqot ekrani' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ekspert tizim qaysi sohada qo‘llanish uchun yaratiladi?',
        options: ['Faqat video o‘yin grafikasi uchun', 'Maʼlum tor sohada mutaxassis bilimi asosida qaror chiqarish uchun', 'Fayllarni arxivlash uchun', 'Faqat matn terish uchun'],
        answer: 1,
        explanation: 'Ekspert tizimlar tibbiyot, muhandislik, moliya kabi tor sohalarda ekspert qarorini modellashtiradi.',
      },
      {
        prompt: 'Qoidalar bazasidagi mantiqiy qoidalar odatda qaysi shaklda yoziladi?',
        options: ['FOR ... NEXT', 'IF ... THEN', 'SELECT * FROM', 'PRINT ... INPUT'],
        answer: 1,
        explanation: 'Qoidalar bazasida shart va natija IF (agar) ... THEN (u holda) ko‘rinishida ifodalanadi.',
      },
      {
        prompt: 'Ekspert tizimning qaysi qismi faktlarni qoidalar bilan solishtirib tashxis qo‘yadi?',
        options: ['Printer drayveri', 'Maʼlumotlar kabeli', 'Mantiqiy xulosa chiqaruvchi mexanizm (Inference Engine)', 'Ekran klaviaturasi'],
        answer: 2,
        explanation: 'Inference Engine bilimlar va qoidalar bazasini tahlil qilib yakuniy xulosani topadi.',
      },
      {
        prompt: 'Tarixdagi ilk mashhur tibbiy ekspert tizim qaysi?',
        options: ['Excel', 'MYCIN', 'Photoshop', 'WinRAR'],
        answer: 1,
        explanation: 'MYCIN Stenford universitetida bakterial infeksiyalarni aniqlash uchun yaratilgan mashhur ekspert tizimdir.',
      },
      {
        prompt: 'Ekspert tizimning muhim cheklovi (kamchiligi) nimada?',
        options: [
          'Kiritilgan bilim va qoidalar eskirsa yoki noto‘g‘ri bo‘lsa, tizim xato xulosa chiqaradi',
          'Hech qachon elektr energiyasi talab qilmaydi',
          'Har doim barcha tillarda sheʼr yozadi',
          'Inson hissiyotlariga mutlaqo tayanadi',
        ],
        answer: 0,
        explanation: 'Ekspert tizim mustaqil fikrlamaydi; uning sifati bilimlar bazasini tuzgan mutaxassislar maʼlumotiga bog‘liq.',
      },
    ],
    teacherNotes: {
      method: 'Ekspert tizim sxemasini doskaga chizib, 4 komponent vazifasini real misol bilan tushuntirish.',
      timing: 'Kirish 5 daq, Tushuntirish 20 daq, O‘yin va amaliyot 12 daq, Test 8 daq.',
      assessment: 'Match o‘yini va 5 ta test natijasi asosida.',
      homework: 'Biror soha (masalan, telefon taʼmiri) uchun 3 ta IF–THEN qoidasini yozib keling.',
    },
  },
  {
    id: 'g10-l27',
    grade: 10,
    no: 27,
    part: '2-chorak',
    title: 'Bilimlar bazasi va yakunlovchi mexanizm',
    kind: 'dars',
    hours: 1,
    tools: ['Ekspert tizim', 'Inference Engine'],
    objectives: [
      'O‘quvchi bilimlar bazasini shakllantirishda bilimlar muhandisi (Knowledge Engineer) va soha eksperti rolini farqlaydi.',
      'O‘quvchi yakunlovchi mexanizmning (Inference Engine) oldinga zanjirli (Forward Chaining) va ortga zanjirli (Backward Chaining) usullarini tushunadi.',
    ],
    intro:
      'Bilimlar bazasi qancha boy bo‘lmasin, to‘g‘ri qidiruv strategiyasisiz kerakli xulosa topilmaydi. Yakunlovchi mexanizm ikki xil yo‘l bilan fikrlaydi: faktlardan natijaga yoki gipotezadan faktlarga!',
    sections: [
      {
        heading: 'Bilimlar bazasini yaratish (Knowledge Acquisition)',
        body: 'Soha eksperti (masalan, tajribali shifokor yoki mexanik) o‘z tajribasini bayon qiladi. **Bilimlar muhandisi** esa bu maʼlumotlarni intervyu, kuzatish va hujjatlar orqali to‘plab, kompyuter tushunadigan **faktlar** (Bilimlar bazasi) va **IF–THEN qoidalar** (Qoidalar bazasi) shaklida kodlaydi.',
        example: 'Bilimlar muhandisi bank kredit bo‘limi xodimlaridan so‘rab, daromad va staj asosida 150 ta aniq qoidani tizimga kiritadi.',
      },
      {
        heading: 'Forward Chaining vs Backward Chaining',
        body: '**Oldinga zanjirlash (Forward Chaining)** — maʼlumotga asoslangan (data-driven) usul: avval barcha mavjud faktlar/alomatlar yig‘iladi, so‘ng mos qoidalar ketma-ket ishga tushirilib yakuniy xulosaga kelinadi. **Ortga zanjirlash (Backward Chaining)** — maqsadga asoslangan (goal-driven) usul: tizim avval biror gipotezani (masalan, "Bemor gripp bo‘lganmi?") faraz qiladi va shu natijani tasdiqlovchi faktlarni qoidalar bo‘ylab orqaga tekshiradi.',
        example: 'Tashxis qo‘yishda "Avval taxmin qilib, alomatlarni so‘rash" — Backward Chaining; barcha ko‘rsatkichlarni kiritib "Nima bo‘ldi?" deyish — Forward Chaining.',
        tip: 'Ko‘plab zamonaviy tizimlar murakkab holatlarda ikkala usulni birgalikda (gibrid) qo‘llaydi.',
      },
    ],
    keyTerms: [
      { term: 'Bilimlar muhandisi', definition: 'Mutaxassis bilimini yig‘ib, ekspert tizimning bilimlar va qoidalar bazasiga aylantiruvchi dasturchi.' },
      { term: 'Forward Chaining', definition: 'Mavjud faktlardan boshlab qoidalar orqali yakuniy natijaga boruvchi usul.' },
      { term: 'Backward Chaining', definition: 'Taxminiy maqsaddan boshlab uni isbotlovchi faktlarni tekshiruvchi usul.' },
      { term: 'Izoh moduli (Explanation)', definition: 'Ekspert tizim nima uchun aynan shu xulosaga kelganini qoidalar zanjiri bilan ko‘rsatuvchi qism.' },
    ],
    steps: [
      '1. Bilimlar bazasi qanday to‘ldirilishini (ekspert + bilimlar muhandisi) tahlil qiling.',
      '2. Forward va Backward zanjirlash misollarini solishtiring.',
      '3. Quyidagi bo‘shliqni to‘ldirish o‘yinida zanjirlash turlarini joylashtiring.',
    ],
    practice: [
      {
        task: 'Qoidalar: (1) IF A AND B THEN C; (2) IF C THEN D. Faktlar: A=rost, B=rost. Forward Chaining qanday ishlaydi?',
        expected: 'A va B rostligi sababli (1)-qoida C=rost ni chiqaradi; so‘ng C rostligi sababli (2)-qoida D=rost xulosasini beradi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Nima uchun ekspert tizimda "Izoh moduli (Explanation Facility)" bo‘lishi zarur?',
        expected: 'Foydalanuvchi tizim chiqargan xulosaga ishonishi uchun qaysi qoidalar va faktlar asos bo‘lganini ko‘ra olishi kerak.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l27-g1',
        num: '01',
        title: 'Bilimlar bazasi va zanjirlash',
        topic: 'Inference Engine usullari',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Ekspert tizim mexanizmiga oid bo‘sh joylarni to‘g‘ri atamalar bilan to‘ldiring:',
          template: 'Mavjud faktlardan boshlab yakuniy xulosa tomon yurish usuli {{0}} deyiladi. Taxminiy gipotezadan boshlab faktlarni qidirish usuli esa {{1}} deyiladi. Mutaxassisdan bilimlarni olib bazaga kirituvchi shaxs {{2}} deb ataladi.',
          blanks: [
            { options: ['Forward Chaining', 'Backward Chaining', 'Kompilyatsiya'], answer: 'Forward Chaining' },
            { options: ['Forward Chaining', 'Backward Chaining', 'Arxivlash'], answer: 'Backward Chaining' },
            { options: ['Bilimlar muhandisi', 'Grafik dizayner', 'Moderator'], answer: 'Bilimlar muhandisi' },
          ],
          hint: 'Oldinga = faktlardan xulosaga (Forward); Ortga = maqsaddan faktlarga (Backward).',
          explanation: 'Forward — faktlardan natijaga, Backward — gipotezadan faktlarga qarab ishlaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Soha mutaxassisi bilan suhbatlashib, uning tajribasini IF–THEN qoidalariga o‘giruvchi mutaxassis kim?',
        options: ['Veb dizayner', 'Tizim administratori', 'Bilimlar muhandisi (Knowledge Engineer)', 'Video montajchi'],
        answer: 2,
        explanation: 'Bilimlar muhandisi ekspert bilimini rasmiylashtirib bilimlar bazasiga joylaydi.',
      },
      {
        prompt: 'Forward Chaining (oldinga zanjirlash) nimadan boshlanadi?',
        options: ['Yakuniy natijani taxmin qilishdan', 'Mavjud dastlabki faktlar va alomatlardan', 'Dasturni o‘chirib yoqishdan', 'Parol kiritishdan'],
        answer: 1,
        explanation: 'Forward Chaining berilgan faktlardan boshlab mos qoidalarni ishga tushiradi.',
      },
      {
        prompt: 'Backward Chaining usuli qaysi tamoyilga asoslanadi?',
        options: ['Maqsad/gipotezadan boshlab dalillarni orqaga tekshirish', 'Tasodifiy raqam tanlash', 'Fayllarni siqish', 'Grafik chizish'],
        answer: 0,
        explanation: 'Backward Chaining "goal-driven" bo‘lib, avval maqsadni tanlaydi va shartlarini tekshiradi.',
      },
      {
        prompt: 'Bilimlar bazasi nima saqlaydi?',
        options: ['Video fayllar', 'Sohaga oid faktlar va tushunchalar to‘plami', 'Brauzer tarixi', 'Ekran sozlamalari'],
        answer: 1,
        explanation: 'Bilimlar bazasi ekspert tizimning faktlar omboridir.',
      },
      {
        prompt: 'Tizimning "Nima uchun bu javobni berding?" savoliga javob qaytaruvchi qismi qaysi?',
        options: ['Arxivator', 'Izoh moduli (Explanation System)', 'Antivirus', 'Bufer xotira'],
        answer: 1,
        explanation: 'Izoh moduli ishga tushgan qoidalar zanjirini foydalanuvchiga tushuntirib beradi.',
      },
    ],
    teacherNotes: {
      method: 'Qoidalar zanjirini sinfda rol o‘yini qilib ko‘rsatish: bir o‘quvchi "Bilimlar bazasi", ikkinchisi "Inference Engine".',
      timing: 'Takrorlash 5 daq, Zanjirlash 20 daq, FillBlank va mashq 12 daq, Quiz 8 daq.',
      assessment: 'Forward va Backward misollarini yozma tekshirish.',
      homework: 'Backward Chaining ga hayotiy 1 ta misol yozing.',
    },
  },
  {
    id: 'g10-l28',
    grade: 10,
    no: 28,
    part: '2-chorak',
    title: 'Foydalanuvchi interfeysi',
    kind: 'dars',
    hours: 1,
    tools: ['UI/UX', 'Ekspert tizim'],
    objectives: [
      'O‘quvchi ekspert tizimdagi foydalanuvchi interfeysi (UI) vazifasini va qulaylik talablarini tushunadi.',
      'O‘quvchi muloqot elementlari (savol shakllari, "Nega?", "Qanday?" tugmalari, ishonchlilik darajasi) dizaynini tahlil qiladi.',
    ],
    intro:
      'Ekspert tizimning miyasi juda kuchli bo‘lsa ham, agar savollari tushunarsiz va ekrani chalkash bo‘lsa, undan hech kim foydalana olmaydi. Bu darsda **Foydalanuvchi interfeysi** qanday qulay va tushunarli bo‘lishini o‘rganamiz.',
    sections: [
      {
        heading: 'Ekspert tizimda foydalanuvchi interfeysining roli',
        body: '**Foydalanuvchi interfeysi (UI)** — foydalanuvchi va yakunlovchi mexanizm o‘rtasidagi ko‘prik. Tizim savollarini odam tilida aniq ko‘rsatishi, javob variantlarini (Ha/Yo‘q, ro‘yxat, sonli qiymat) xatosiz qabul qilishi va yakunda natijani tushunarli tavsiya shaklida chiqarishi shart.',
        example: 'Avtomobil diagnostikasi tizimi "P0301 xatosi bormi?" deyish o‘rniga "Dvigatel bo‘sh yurishda titrayaptimi? [Ha / Yo‘q / Bilmayman]" deb so‘raydi.',
      },
      {
        heading: 'Yaxshi interfeys tamoyillari',
        body: '1) **Oddiylik va tushunarli til**: texnik jargonlarni kamaytirish. 2) **"Bilmayman" (Unknown) varianti**: foydalanuvchi aniq bilmaganda ham tizim ishlashda davom etishi. 3) **"Nega so‘rayapsiz?" (Why?) va "Qanday xulosa chiqdingiz?" (How?)**: foydalanuvchiga ishonch berish. 4) **Ishonchlilik koeffitsiyenti (Certainty Factor)**: masalan, "85% ehtimol bilan generator nosoz".',
        example: 'Shifokor tizimida natija bilan birga "Nima uchun bu tashxis qo‘yildi?" tugmasini bossa, 3 ta mos kelgan alomat ro‘yxati chiqadi.',
        tip: 'Yaxshi UI foydalanuvchi xato maʼlumot kiritishining oldini oladi (masalan, yosh maydoniga manfiy son kiritishni cheklaydi).',
      },
    ],
    keyTerms: [
      { term: 'Foydalanuvchi interfeysi (UI)', definition: 'Inson va dasturiy tizim o‘rtasida axborot almashishni taʼminlovchi ekran va boshqaruv elementlari.' },
      { term: 'Dialog oynasi', definition: 'Tizim savol berib foydalanuvchidan ketma-ket javob oladigan muloqot shakli.' },
      { term: 'Ishonchlilik omili (CF)', definition: 'Xulosaning qanchalik ehtimol bilan to‘g‘ri ekanini foiz yoki koeffitsiyentda ko‘rsatuvchi qiymat.' },
      { term: 'Ergonomik dizayn', definition: 'Ko‘z charchashini kamaytiruvchi rang, shrift va mantiqiy joylashuv.' },
    ],
    steps: [
      '1. Ekspert tizim interfeysi uchun zarur 4 ta elementni belgilang.',
      '2. Quyidagi To‘g‘ri/Noto‘g‘ri o‘yinida interfeys tamoyillarini tekshiring.',
      '3. Amaliy topshiriqda 3 bosqichli savol ekrani eskizini tuzing.',
    ],
    practice: [
      {
        task: 'Nima uchun ekspert tizim savollarida "Bilmayman" tugmasi bo‘lishi foydali?',
        expected: 'Baʼzan foydalanuvchi aniq texnik o‘lchovga ega bo‘lmaydi; "Bilmayman" tanlansa, tizim boshqa yordamchi qoidalar orqali ishni davom ettira oladi.',
        difficulty: 'oson',
      },
      {
        task: 'Bemor haroratini kiritish uchun qanday UI element eng qulay va xatosiz: oddiy matn maydonimi yoki 34.0–42.0 oralig‘idagi cheklangan raqam maydonimi?',
        expected: '34.0–42.0 oralig‘idagi cheklangan raqam maydoni yoki slayder — chunki noto‘g‘ri harf yoki 400 kabi xato son kiritilishini oldini oladi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l28-g1',
        num: '01',
        title: 'UI sifat tekshiruvi',
        topic: 'Ekspert tizim interfeysi',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Ekspert tizim interfeysiga oid quyidagi fikrlarning To‘g‘ri yoki Noto‘g‘ri ekanini aniqlang:',
          statements: [
            { text: 'Foydalanuvchi interfeysi ekspert tizim bilan foydalanuvchi o‘rtasida muloqotni taʼminlaydi.', isTrue: true, explanation: 'UI foydalanuvchidan maʼlumot olib natijani ko‘rsatuvchi asosiy ko‘prikdir.' },
            { text: 'Yaxshi ekspert tizim interfeysida faqat murakkab dasturlash kodlari ko‘rsatilishi shart.', isTrue: false, explanation: 'Interfeys odam tushunadigan oddiy tilda bo‘lishi kerak.' },
            { text: '"Nega bu savolni so‘rayapsiz?" funksiyasi tizimga bo‘lgan ishonchni oshiradi.', isTrue: true, explanation: '"Why?" tizimning mantiqini tushuntirib ishonch uyg‘otadi.' },
            { text: 'Ishonchlilik omili (masalan, 80% ehtimol) natijaning qanchalik aniq ekanini bildiradi.', isTrue: true, explanation: 'Certainty Factor qarorning ehtimollik darajasini ko‘rsatadi.' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ekspert tizim interfeysining asosiy vazifasi nima?',
        options: [
          'Qattiq diskni formatlash',
          'Foydalanuvchidan savollar orqali maʼlumot olish va tushunarli natija ko‘rsatish',
          'Kompyuter protsessorini sovitish',
          'Internet tezligini oshirish',
        ],
        answer: 1,
        explanation: 'UI foydalanuvchi va mantiqiy mexanizm o‘rtasidagi asosiy muloqot vositasidir.',
      },
      {
        prompt: 'Natija yonida "88% ehtimol bilan" deb ko‘rsatiladigan qiymat nima?',
        options: ['Ekran yorqinligi', 'Ishonchlilik darajasi (Certainty Factor)', 'CPU harorati', 'Fayl hajmi'],
        answer: 1,
        explanation: 'Ishonchlilik darajasi chiqarilgan tashxis yoki tavsiyaning ehtimollik darajasini bildiradi.',
      },
      {
        prompt: 'Qaysi boshqaruv elementi foydalanuvchidan "Ha / Yo‘q / Bilmayman" kabi aniq bitta variantni tanlashda eng qulay?',
        options: ['Radio tugmalar (Radio Buttons)', 'Katta matn muharriri', 'Rasm yuklash oynasi', 'Rang tanlash palitrasi'],
        answer: 0,
        explanation: 'Radio tugmalar o‘zaro istisno qiluvchi yagona variantni tez va xatosiz tanlash imkonini beradi.',
      },
      {
        prompt: 'Tizim savoliga javoban foydalanuvchi "Nega?" (Why?) tugmasini bossa, nima sodir bo‘ladi?',
        options: [
          'Dastur yopiladi',
          'Tizim hozir qaysi qoidani tekshirayotganini izohlaydi',
          'Barcha maʼlumotlar o‘chadi',
          'Yangi oyna reklamasi chiqadi',
        ],
        answer: 1,
        explanation: '"Why?" so‘rovi tizim nima sababdan aynan shu faktga muhtojligini tushuntiradi.',
      },
      {
        prompt: 'Foydalanuvchi interfeysini loyihalashda qaysi holat XATO hisoblanadi?',
        options: [
          'Aniq ko‘rsatma va yordam matnlarini qo‘yish',
          'Bir xil kattalikdagi tugma va o‘qiladigan shrift ishlatish',
          'Hech qanday izohsiz, tushunarsiz qisqartma va ko‘zni og‘ritadigan kontrastlar ishlatish',
          'Kiritish maydonlariga validatsiya qo‘yish',
        ],
        answer: 2,
        explanation: 'Tushunarsiz qisqartmalar va yomon kontrast foydalanish qulayligini (usability) buzadi.',
      },
    ],
    teacherNotes: {
      method: 'Yaxshi va yomon UI ekran namunalarini taqqoslab muhokama qilish.',
      timing: 'Kirish 5 daq, UI tamoyillari 18 daq, TrueFalse o‘yini 12 daq, Quiz 10 daq.',
      assessment: 'Eskiz sifati va test javoblariga ko‘ra.',
      homework: 'Ekspert tizim uchun 1 ta qulay savol oynasi maketini daftarga chizing.',
    },
  },
  {
    id: 'g10-l29',
    grade: 10,
    no: 29,
    part: '2-chorak',
    title: 'Ekspert tizimlardan foydalanish',
    kind: 'dars',
    hours: 1,
    tools: ['Ekspert tizim', 'Amaliyot'],
    objectives: [
      'O‘quvchi ekspert tizimlarning tibbiyot, geologiya, moliya, texnika va o‘yinlardagi real qo‘llanilishini tahlil qiladi.',
      'O‘quvchi muammo turiga qarab ekspert tizim yaratish bosqichlarini tartiblaydi.',
    ],
    intro:
      'Ekspert tizimlar faqat nazariya emas: ular har kuni banklarda kredit arizalarini tekshiradi, zavodlarda stanok nosozligini topadi, shifoxonalarda dori dozalarini tavsiya qiladi!',
    sections: [
      {
        heading: 'Ekspert tizimlarning qo‘llanilish sohalari',
        body: '1) **Tibbiy diagnostika**: alomatlarga ko‘ra kasallikni aniqlash va dori mosligini tekshirish. 2) **Geologiya va qazilmalar**: tog‘ jinsi tarkibiga qarab neft yoki ruda konini baholash (Prospector). 3) **Moliya va bank**: kredit riskini baholash, sug‘urta firibgarligini aniqlash. 4) **Texnik xizmat**: avtomobil yoki kompyuter nosozliklarini bosqichma-bosqich topish. 5) **Shaxmat va strategik o‘yinlar**: eng yaxshi yurishlarni qoidalar bilan baholash.',
        example: 'Bank mobil ilovasida ariza topshirganingizda daromad, kredit tarixi va yosh bo‘yicha 3 soniyada javob chiqishi qoidalarga asoslangan ekspert/skoring tizimi ishidir.',
      },
      {
        heading: 'Ekspert tizimni qurish bosqichlari',
        body: 'Yangi ekspert tizim yaratishda quyidagi ketma-ketlikka amal qilinadi: 1) Muammo sohasini aniqlash; 2) Soha ekspertidan bilimlarni yig‘ish; 3) Bilimlar bazasi va IF–THEN qoidalar bazasini yaratish; 4) Inference Engine va Foydalanuvchi interfeysini qurish; 5) Haqiqiy holatlar bilan sinab ko‘rish va ekspert bilan natijalarni solishtirish.',
        example: 'Avtomobil ustasi bilan 50 ta nosozlik stsenariysi tekshirilib, tizim javoblari ustaning xulosasi bilan 95% mos kelgach ishga tushiriladi.',
      },
    ],
    keyTerms: [
      { term: 'Kredit skoring', definition: 'Mijozning to‘lov qobiliyatini qoidalar asosida avtomatik baholovchi moliyaviy tizim.' },
      { term: 'Diagnostika tizimi', definition: 'Alomat yoki nosozlik belgilari orqali sababni aniqlovchi ekspert tizim.' },
      { term: 'Test stsenariysi', definition: 'Ekspert tizim to‘g‘ri ishlashini tekshirish uchun tuzilgan nazorat holati.' },
      { term: 'Bilim bazasini yangilash', definition: 'Yangi tajriba yoki qonunlar paydo bo‘lganda qoidalarni to‘ldirish jarayoni.' },
    ],
    steps: [
      '1. Ekspert tizim qurishning 5 bosqichini to‘g‘ri tartibga qo‘ying.',
      '2. Hayotiy sohalarda (tibbiyot, moliya, geologiya) ekspert tizim misollarini keltiring.',
      '3. Quyidagi tartiblash o‘yinini bajaring.',
    ],
    practice: [
      {
        task: 'Bank kredit berishda ekspert tizimdan foydalansa, buning 1 ta afzalligi va 1 ta xavfini ayting.',
        expected: 'Afzalligi: ariza 24/7 tez va xolis (hissiyotsiz) ko‘rib chiqiladi. Xavfi: qoidaga tushmaydigan noodatiy vaziyatlarni insondek tushuna olmasligi mumkin.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Qaysi hollarda ekspert tizim qo‘llash SAMARASIZ bo‘ladi?',
        expected: 'Aniq qoidalarga bo‘ysunmaydigan ijodiy sanʼat, his-tuyg‘u talab qiluvchi psixologik maslahat yoki doimiy o‘zgarib turuvchi noaniq vaziyatlarda.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l29-g1',
        num: '01',
        title: 'Ekspert tizim yaratish tartibi',
        topic: 'Tizim qurish bosqichlari',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Ekspert tizim yaratish bosqichlarini to‘g‘ri mantiqiy ketma-ketlikda joylashtiring:',
          items: [
            'Muammo sohasi va maqsadni aniqlash',
            'Soha ekspertidan bilimlarni yig‘ish',
            'Bilimlar bazasi va IF–THEN qoidalarini yozish',
            'Xulosa mexanizmi va foydalanuvchi interfeysini yaratish',
            'Haqiqiy holatlar asosida sinovdan o‘tkazish',
          ],
          hint: 'Avval muammo aniqlanadi, oxirida esa tizim sinovdan o‘tkaziladi.',
          explanation: 'Avval muammo aniqlanadi, so‘ng bilim yig‘ilib qoidaga aylanadi, dastur quriladi va oxirida sinovdan o‘tkaziladi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Qaysi mashhur ekspert tizim geologiyada foydali qazilma konlarini aniqlash uchun ishlatilgan?',
        options: ['Prospector', 'Excel', 'Paint', 'Scratch'],
        answer: 0,
        explanation: 'Prospector geologik maʼlumotlar asosida foydali qazilma joylashuvini bashorat qilgan.',
      },
      {
        prompt: 'Ekspert tizim yaratishda eng birinchi bosqich nima?',
        options: ['Ranglarni tanlash', 'Muammo sohasi va tizim maqsadini aniqlash', 'Marketing qilish', 'Dasturni arxivlash'],
        answer: 1,
        explanation: 'Har qanday tizim avval hal qilinadigan muammoni aniq belgilashdan boshlanadi.',
      },
      {
        prompt: 'Ekspert tizimlar qaysi vazifa uchun ENG MOS keladi?',
        options: [
          'Aniq faktlar va qoidalarga asoslangan tibbiy yoki texnik diagnostika',
          'Yangi musiqiy sheʼr yozish',
          'Og‘ir yuk ko‘tarish',
          'Rasm bo‘yash',
        ],
        answer: 0,
        explanation: 'Diagnostika aniq alomatlar va qoidalar zanjiriga tayanganligi uchun ekspert tizimga juda mos keladi.',
      },
      {
        prompt: 'Tizim sinovdan o‘tkazilayotganda uning xulosalari nima bilan solishtiriladi?',
        options: ['Tasodifiy sonlar bilan', 'Inson-ekspertning haqiqiy xulosalari bilan', 'Ekran o‘lchami bilan', 'Fayl nomi bilan'],
        answer: 1,
        explanation: 'Sinov bosqichida tizim javobi tirik mutaxassis xulosasi bilan solishtirib tekshiriladi.',
      },
      {
        prompt: 'Ekspert tizimdan foydalanishning asosiy afzalligi qaysi?',
        options: [
          'Mutaxassis bilimini saqlab qolish va istalgan vaqtda barqaror qaror olish',
          'Mutlaqo elektr tokisiz ishlash',
          'Har qanday jismoniy ishni bajarish',
          'Internet tezligini 10 barobar oshirish',
        ],
        answer: 0,
        explanation: 'Ekspert tizim charchamaydi, bilimni yo‘qotmaydi va har doim bir xil aniqlikda tavsiya beradi.',
      },
    ],
    teacherNotes: {
      method: 'Kichik guruhlarda "O‘simlik parvarishi" bo‘yicha 4 qoidali mini ekspert tizim loyihalashtirish.',
      timing: 'Kirish 5 daq, Qo‘llanilish sohalari 18 daq, Order o‘yini 12 daq, Quiz 10 daq.',
      assessment: 'Bosqichlarni to‘g‘ri tartiblash va keys tahlili.',
      homework: 'O‘zbekistonda ekspert tizim qo‘llash mumkin bo‘lgan 2 ta sohaga taklif yozing.',
    },
  },
  {
    id: 'g10-l30',
    grade: 10,
    no: 30,
    part: '2-chorak',
    title: 'Maʼlumotlarni qayta ishlash tizimlari',
    kind: 'dars',
    hours: 1,
    tools: ['Axborot tizimi', 'Batch / Online'],
    objectives: [
      'O‘quvchi Paketli qayta ishlash (Batch Processing) va Onlayn/Tranzaksion qayta ishlash (Online Processing) tizimlarini farqlaydi.',
      'O‘quvchi har bir tizim turining afzalliklari, kamchiliklari va qo‘llanish sohalarini aniqlaydi.',
    ],
    intro:
      'Korxona xodimlariga oylik maosh oy oxirida bir marta hisoblanadi, bankomat esa kartangizdan pul yechgan zahoti balansni kamaytiradi! Nima uchun ikki tizim turlicha ishlaydi?',
    sections: [
      {
        heading: 'Paketli qayta ishlash (Batch Processing)',
        body: '**Batch Processing** — maʼlumotlar maʼlum vaqt davomida (soat, kun, oy) to‘planib, keyin inson aralashuvisiz bitta katta paket (guruh) sifatida — odatda tunda server bo‘sh bo‘lganda — qayta ishlanadigan tizim. Tezkor javob talab qilinmaydigan katta hajmli takroriy hisob-kitoblar uchun juda samarali.',
        example: 'Oylik ish haqini hisoblash (Payroll), kommunal to‘lov kvitansiyalarini oy oxirida chiqarish, bank cheklarini kun yakunida hisob-kitob qilish.',
        tip: 'Batch tizimining asosiy belgisi: to‘plash → tunda/jadval bo‘yicha birdaniga qayta ishlash → kechikish (delay) mavjud.',
      },
      {
        heading: 'Onlayn (Tranzaksion) qayta ishlash (Online Processing)',
        body: '**Online / Transaction Processing (OLTP)** — foydalanuvchi so‘rov yuborgan zahoti tizim maʼlumotlar bazasiga murojaat qilib, bir necha soniya ichida javob qaytaradigan va bazani darhol yangilaydigan tizim. Natija shu zahoti muhim bo‘lgan hollarda qo‘llaniladi.',
        example: 'Aviachipta band qilish (bitta joy ikki kishiga sotilmasligi uchun!), onlayn do‘kondan xarid qilish, bankomatdan pul yechish.',
      },
    ],
    keyTerms: [
      { term: 'Batch Processing', definition: 'Yig‘ilgan katta hajmdagi maʼlumotlarni belgilangan vaqtda guruhlab avtomatik qayta ishlash.' },
      { term: 'Online Processing', definition: 'Har bir so‘rov yoki tranzaksiyani kiritilgan zahoti darhol qayta ishlash tizimi.' },
      { term: 'Tranzaksiya', definition: 'To‘liq bajariladigan yoki xato bo‘lsa butunlay bekor qilinadigan yagona mantiqiy operatsiya.' },
      { term: 'Payroll tizimi', definition: 'Xodimlarning oylik ish haqi va soliqlarini hisoblovchi paketli tizim.' },
    ],
    steps: [
      '1. Batch va Online qayta ishlash o‘rtasidagi vaqt farqini tushuning.',
      '2. Chipta sotib olishda nima uchun Batch emas, Online tizim shartligini izohlang.',
      '3. Quyidagi moslashtirish o‘yinida vaziyatlarni mos tizimga bog‘lang.',
    ],
    practice: [
      {
        task: 'Agar aviakompaniya chipta sotishda Batch tizimidan foydalansa, qanday jiddiy muammo yuz beradi?',
        expected: 'Maʼlumotlar darhol yangilanmagani uchun bitta o‘rindiq bir kunda bir nechta yo‘lovchiga sotilib ketishi (double booking) mumkin.',
        difficulty: 'oson',
      },
      {
        task: 'Nima uchun ko‘plab kompaniyalar oylik hisob-kitobni kunduzi emas, tunda Batch rejimida bajaradi?',
        expected: 'Kunduzi serverlar boshqa tezkor ishlar bilan band bo‘ladi; tunda esa tarmoq va protsessor bo‘sh bo‘lib, katta paketni tez va arzon qayta ishlaydi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l30-g1',
        num: '01',
        title: 'Batch va Online tizimlarni mosla',
        topic: 'Maʼlumotlarni qayta ishlash turlari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir jarayonni unga mos qayta ishlash tizimi yoki xususiyatiga bog‘lang:',
          pairs: [
            { left: 'Oylik ish haqini (Payroll) hisoblash', right: 'Batch Processing — tunda paketlab ishlash' },
            { left: 'Aviachipta band qilish', right: 'Online Processing — joyni darhol qulflash' },
            { left: 'Kommunal kvitansiyalarni oy oxirida chiqarish', right: 'Katta hajmli kechiktirilgan hisob-kitob' },
            { left: 'Bankomatdan naqd pul yechish', right: 'Darhol balans yangilanuvchi tranzaksiya' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Maʼlumotlarni maʼlum muddat to‘plab, so‘ng tunda avtomatik ravishda birdaniga qayta ishlash usuli qanday nomlanadi?',
        options: ['Real-time Processing', 'Batch Processing', 'Manual Processing', 'Streaming'],
        answer: 1,
        explanation: 'Batch (paketli) qayta ishlashda yozuvlar to‘planadi va inson ishtirokisiz jadval bo‘yicha ishlanadi.',
      },
      {
        prompt: 'Qaysi tizimda bitta o‘rindiq ikki kishiga sotilib ketishining oldi olinadi?',
        options: ['Qog‘oz daftarida', 'Online tranzaksion qayta ishlash tizimida', 'Oylik Batch tizimida', 'Matn muharririda'],
        answer: 1,
        explanation: 'Online tizim har bir sotuvni darhol bazada qayd etadi, shuning uchun boshqalar o‘sha o‘rindiqni band qila olmaydi.',
      },
      {
        prompt: 'Batch Processing ning asosiy afzalligi nimada?',
        options: [
          'Katta hajmdagi bir xil hisoblarni server kam yuklangan paytda (masalan, tunda) samarali bajarishi',
          'Har soniyada jonli video ko‘rsatishi',
          'Kompyutersiz ishlashi',
          'Internet talab qilmasligi',
        ],
        answer: 0,
        explanation: 'Batch processing katta hajmdagi oylik/kunlik hisoblarni inson nazoratisiz arzon va samarali bajaradi.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri Batch Processing ga misol bo‘la oladi?',
        options: [
          'Kredit karta bilan do‘kon kassasida to‘lash',
          'Korxonadagi 2000 xodimning oylik maoshini hisoblash',
          'Poyezd chiptasini onlayn tanlash',
          'Videoqo‘ng‘iroq qilish',
        ],
        answer: 1,
        explanation: 'Oylik maosh hisoblash (Payroll) klassik Batch tizimi misolidir.',
      },
      {
        prompt: 'Online tizimda "Tranzaksiya" deganda nima tushuniladi?',
        options: [
          'Kompyuterni o‘chirish',
          'Yaxlit bajariladigan yoki xatoda bekor qilinadigan yagona mantiqiy amal (masalan, pul o‘tkazish)',
          'Rasm chizish vositasi',
          'Kabel turi',
        ],
        answer: 1,
        explanation: 'Masalan, bir hisobdan pul yechilib ikkinchisiga tushishi yaxlit tranzaksiya bo‘lib, yarmida to‘xtab qolmasligi shart.',
      },
    ],
    teacherNotes: {
      method: 'Batch va Online tizimlarini vaqt chizig‘i (kechiktirilgan vs darhol) asosida taqqoslash.',
      timing: 'Kirish 5 daq, Tushuntirish 20 daq, Match va mashq 12 daq, Quiz 8 daq.',
      assessment: 'Aviachipta misoli muhokamasi va test natijalari.',
      homework: 'Kundalik hayotdan 2 ta Batch va 2 ta Online tizim misolini yozing.',
    },
  },
  {
    id: 'g10-l31',
    grade: 10,
    no: 31,
    part: '2-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Tarmoq', 'Ekspert tizim', 'Axborot tizimi'],
    objectives: [
      'O‘quvchi 2-chorak mavzulari: LAN/WAN, Client-Server/P2P, VPN, Intranet/Extranet, Ekspert tizimlar va Maʼlumotlarni qayta ishlash bo‘yicha bilimlarini mustahkamlaydi.',
    ],
    intro:
      '2-chorak yakuniy nazorat ishi! Tarmoq arxitekturasi, xavfsizlik (VPN), aloqa tarmoqlari, Ekspert tizim tuzilishi hamda Batch/Online qayta ishlash bo‘yicha bilimlaringizni sinab ko‘ring.',
    sections: [
      {
        heading: 'Nazorat mavzularini qisqacha takrorlash',
        body: '• **Tarmoqlar**: LAN (mahalliy), WAN (global), Client-Server (markaziy server) vs Peer-to-Peer (teng huquqli), VPN (shifrlangan tunnel), Intranet (ichki) vs Extranet (hamkorlar uchun ochiq).\n• **Ekspert tizimlar**: Bilimlar bazasi + Qoidalar bazasi (IF–THEN) + Inference Engine (Forward/Backward) + UI.\n• **Qayta ishlash**: Batch (to‘plab tunda) vs Online (so‘rov zahoti).',
        example: 'Maktab ichki portali — Intranet; maktab tarmog‘iga tashqaridan himoyalangan kirish — VPN; oylik hisob — Batch.',
      },
    ],
    keyTerms: [
      { term: 'VPN', definition: 'Ommaviy internet ustidan shifrlangan himoyalangan shaxsiy aloqa kanali.' },
      { term: 'Intranet', definition: 'Faqat tashkilot xodimlari foydalana oladigan yopiq ichki veb-tarmoq.' },
      { term: 'Inference Engine', definition: 'Ekspert tizimda qoidalar asosida mantiqiy xulosa chiqaruvchi qism.' },
      { term: 'Client-Server', definition: 'Resurslar markaziy serverda saqlanib, mijozlarga xizmat ko‘rsatadigan tarmoq modeli.' },
    ],
    steps: [
      '1. 2-chorak asosiy atamalarini ko‘zdan kechiring.',
      '2. Krossvord va 5 ta nazorat testini mustaqil ishlang.',
    ],
    practice: [
      {
        task: 'Intranet va Extranet o‘rtasidagi asosiy farqni bitta misol bilan tushuntiring.',
        expected: 'Intranet faqat korxona ichki xodimlari uchun; Extranet esa tanlangan tashqi hamkorlar yoki mijozlarga ham parol bilan kirishga ruxsat beradi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g10-l31-g1',
        num: '01',
        title: '2-chorak krossvordi',
        topic: 'Tarmoq va tizim atamalari',
        difficulty: 'O‘rta',
        engine: 'crossword',
        config: {
          prompt: '2-chorakning asosiy terminlarini toping (barcha harflar bosh harfda):',
          clues: [
            { id: '1', clue: 'Shifrlangan virtual shaxsiy tarmoq (3 harf)', answer: 'VPN' },
            { id: '2', clue: 'Bitta bino ichidagi mahalliy tarmoq (3 harf)', answer: 'LAN' },
            { id: '3', clue: 'Maʼlumotlarni to‘plab tunda birga qayta ishlash usuli', answer: 'BATCH' },
            { id: '4', clue: 'Katta geografik hududlarni bog‘lovchi global tarmoq (3 harf)', answer: 'WAN' },
          ],
          hint: 'VPN, LAN, BATCH, WAN qisqartma va atamalarini kiriting.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ommaviy internet orqali ishxona tarmog‘iga shifrlangan xavfsiz tunnel orqali ulanish texnologiyasi qaysi?',
        options: ['HTTP', 'VPN', 'USB', 'BMP'],
        answer: 1,
        explanation: 'VPN trafikni shifrlab, xavfsiz virtual tunnel yaratadi.',
      },
      {
        prompt: 'Qaysi tarmoq modelida barcha kompyuterlar teng huquqli bo‘lib, alohida boshqaruvchi server bo‘lmaydi?',
        options: ['Peer-to-Peer (P2P)', 'Client-Server', 'WAN', 'Extranet'],
        answer: 0,
        explanation: 'P2P tarmoqda har bir qurilma ham mijoz, ham server vazifasini bajaradi.',
      },
      {
        prompt: 'Ekspert tizimning qaysi qismi "IF–THEN" shartlarini saqlaydi?',
        options: ['Qoidalar bazasi (Rule Base)', 'Ekran drayveri', 'Tarmoq kartasi', 'Printer buferi'],
        answer: 0,
        explanation: 'Mantiqiy qoidalar Qoidalar bazasida saqlanadi.',
      },
      {
        prompt: 'Kompaniyaning tashqi hamkorlari va yetkazib beruvchilari ham kira oladigan kengaytirilgan ichki tarmog‘i nima?',
        options: ['Intranet', 'Extranet', 'Bluetooth', 'BIOS'],
        answer: 1,
        explanation: 'Extranet — tashqi hamkorlarga cheklangan kirish beruvchi tarmoq.',
      },
      {
        prompt: 'Elektr energiyasi uchun oylik hisob-kitob kvitansiyalarini tayyorlash qaysi qayta ishlash turiga kiradi?',
        options: ['Batch Processing', 'Real-time Processing', 'Peer-to-Peer', 'Videokonferensiya'],
        answer: 0,
        explanation: 'Bir oylik ko‘rsatkichlar yig‘ilib birdaniga hisoblanishi — Batch Processing.',
      },
    ],
    teacherNotes: {
      method: 'Yozma nazorat va interaktiv krossvord + test orqali bilimlarni baholash.',
      timing: 'Takrorlash 5 daq, Nazorat ishi 35 daq, Xulosa 5 daq.',
      assessment: 'Test va krossvord natijalari asosida yakuniy baho.',
      homework: 'Xatolarni tahlil qilib daftarga to‘g‘ri javoblarni yozib chiqing.',
    },
  },
  {
    id: 'g10-l32',
    grade: 10,
    no: 32,
    part: '2-chorak',
    title: 'Real vaqt rejimida qayta ishlash tizimi',
    kind: 'dars',
    hours: 1,
    tools: ['Axborot tizimi', 'Real-time'],
    objectives: [
      'O‘quvchi Real vaqt rejimidagi (Real-Time Processing) tizimning asosiy talabini — qatʼiy vaqt chegarasi (kechikishsiz javob) ekanini tushunadi.',
      'O‘quvchi Real-Time tizimlarni Online Processing tizimlaridan aniq misollar yordamida ajratadi.',
    ],
    intro:
      'Avtomobil to‘qnashuvida xavfsizlik yostig‘i (Airbag) 0.03 soniyada ochilishi shart — 2 soniya kechikish inson hayotiga zomin bo‘ladi! Bunday tizimlar **Real vaqt rejimidagi tizimlar (Real-Time Systems)** deyiladi.',
    sections: [
      {
        heading: 'Real-Time Processing (Real vaqt tizimi) nima?',
        body: '**Real vaqt tizimi** — kiruvchi maʼlumotlarni (ko‘pincha sensorlardan) **darhol**, hech qanday sezilarli kechikishsiz (millisekundlar ichida) qayta ishlab, darhol jismoniy yoki boshqaruv harakati (aktuator) chiqaradigan tizim. Agar Online tizimda 2–3 soniya kutish normal bo‘lsa, Real-Time tizimda kechikish — tizimning ishdan chiqishi hisoblanadi.',
        example: 'Samolyot avtopiloti, avtomobil ABS tormoz tizimi, jarrohlik robotlari, atom elektr stansiyasi sovitish boshqaruvi, svetofor sensorlari.',
      },
      {
        heading: 'Feedback Loop (Teskari aloqa halqasi)',
        body: 'Ko‘pgina Real-Time boshqaruv tizimlari **sensor → protsessor → aktuator** uzluksiz halqasida ishlaydi: 1) Sensor (masalan, harorat datchigi) qiymatni o‘qiydi; 2) Tizim uni belgilangan meʼyor bilan taqqoslaydi; 3) Natija aktuatorga (sovitkich yoki klapanga) yuboriladi va bu holat sensor tomonidan yana qayta o‘lchanadi.',
        example: 'Issiqxona harorati 28°C dan oshsa, real vaqt tizimi millisekundlarda oyna aktuatorini ochish buyrug‘ini beradi.',
        tip: 'Imtihonda esda tuting: Real-Time ≠ Online! Aviachipta sotish — Online (2 soniya kutsa bo‘ladi); Avtomobil ABS tormozi — Real-Time (millisekund kechikish ham mumkin emas!).',
      },
    ],
    keyTerms: [
      { term: 'Real-Time System', definition: 'Kirish signaliga qatʼiy belgilangan millisekundli vaqt oralig‘ida javob beruvchi tizim.' },
      { term: 'Feedback Loop', definition: 'Chiqish natijasining sensor orqali qayta kirishga taʼsir etuvchi uzluksiz boshqaruv halqasi.' },
      { term: 'Aktuator', definition: 'Kompyuter signalini jismoniy harakatga (motor, klapan, tormoz) aylantiruvchi qurilma.' },
      { term: 'Qatʼiy vaqt chegarasi (Deadline)', definition: 'Tizim javob qaytarishi shart bo‘lgan maksimal ruxsat etilgan vaqt.' },
    ],
    steps: [
      '1. Online va Real-Time tizimlar orasidagi kechikish chegarasini solishtiring.',
      '2. Sensor → Tizim → Aktuator halqasini chizing.',
      '3. Quyidagi CaseStudy o‘yinida vaziyatga mos qayta ishlash tizimini tanlang.',
    ],
    practice: [
      {
        task: 'Nima uchun bemorning yurak urishini kuzatuvchi reanimatsiya monitori Online emas, balki Real-Time tizim bo‘lishi kerak?',
        expected: 'Yurak to‘xtash xavfi yuz berganda signal 1 soniya ham kechikmasdan darhol shifokorlar uchun trevoga va uskunalarni ishga tushirishi shart.',
        difficulty: 'oson',
      },
      {
        task: 'Batch, Online va Real-Time tizimlarga bittadan hayotiy misol yozing va farqini ayting.',
        expected: 'Batch — oylik hisoblash (soatlar/kunlar); Online — do‘konda karta to‘lovi (bir necha soniya); Real-Time — samolyot avtopiloti (millisekundlar).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g10-l32-g1',
        num: '01',
        title: 'Keys: Qaysi tizim tanlanadi?',
        topic: 'Real-Time vs Online vs Batch',
        difficulty: 'Qiyin',
        engine: 'casestudy',
        config: {
          prompt: 'Zavoddagi kimyoviy reaktor bosimi xavfli darajaga chiqqanda 0.05 soniya ichida himoya klapanini ochish talab qilinadi. Qaysi qayta ishlash tizimi tanlanishi SHART?',
          scenario: 'Reaktor ichidagi bosim sensori har 10 millisekundda qiymat uzatadi. Agar tizim 2 soniyaga kechiksa, reaktor portlashi mumkin.',
          options: [
            {
              text: 'Real-Time Processing (Feedback Loop bilan)',
              isCorrect: true,
              feedback: 'To‘g‘ri! Sensor → Tizim → Aktuator halqasi millisekundlik qatʼiy vaqt chegarasida klapanni darhol ochadi.',
            },
            {
              text: 'Batch Processing (kun oxirida tekshirish)',
              isCorrect: false,
              feedback: 'Noto‘g‘ri — kechqurungacha kutish falokatga olib keladi!',
            },
            {
              text: 'Oddiy qo‘lda kiritish jadvali',
              isCorrect: false,
              feedback: 'Noto‘g‘ri — inson reaksiyasi millisekundlarda ishlamaydi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Real vaqt rejimidagi (Real-Time) tizimning eng asosiy xususiyati nima?',
        options: [
          'Faqat kechasi ishlashi',
          'Qatʼiy belgilangan qisqa vaqt ichida (kechikishsiz) javob qaytarishi',
          'Matnli hisobot chop etishi',
          'Foydalanuvchidan parol so‘ramasligi',
        ],
        answer: 1,
        explanation: 'Real-Time tizimlarda millisekundlik kechikish ham halokatli bo‘lishi mumkin.',
      },
      {
        prompt: 'Quyidagilardan qaysi biri Real-Time tizimga kiradi?',
        options: [
          'Elektron pochta jo‘natish',
          'Yadro reaktori haroratini boshqarish tizimi',
          'Oy oxirida oylik hisoblash',
          'Kutubxona katalogidan kitob izlash',
        ],
        answer: 1,
        explanation: 'Yadro reaktori haroratini boshqarish sensor va aktuator orqali uzluksiz real vaqtda bajariladi.',
      },
      {
        prompt: 'Real vaqt boshqaruvida protsessor buyrug‘ini jismoniy harakatga (masalan, klapanni ochishga) aylantiruvchi qurilma nima?',
        options: ['Skaner', 'Aktuator', 'Monitor', 'Modem'],
        answer: 1,
        explanation: 'Aktuator elektron signal asosida mexanik harakatni bajaradi.',
      },
      {
        prompt: 'Sensor → Tekshirish → Aktuator → Qayta o‘lchash jarayoni qanday ataladi?',
        options: ['Teskari aloqa halqasi (Feedback Loop)', 'Paketli yig‘ish', 'Maʼlumotlar arxivi', 'Defragmentatsiya'],
        answer: 0,
        explanation: 'Teskari aloqa (Feedback Loop) tizimga chiqish natijasiga qarab o‘z harakatini doimiy tuzatib turish imkonini beradi.',
      },
      {
        prompt: 'Online tizim va Real-Time tizim o‘rtasidagi asosiy farq qaysi?',
        options: [
          'Online tizimda bir necha soniya kechikish bo‘lishi mumkin, Real-Time da esa darhol jismoniy reaksiya zarur',
          'Real-Time tizim kompyutersiz ishlaydi',
          'Online tizim faqat oflayn ishlaydi',
          'Ular mutlaqo bir xil',
        ],
        answer: 0,
        explanation: 'Online tizim inson kutadigan (1–3 sek) tranzaksiyalar uchun, Real-Time esa avtomatik boshqaruv uchun ishlatiladi.',
      },
    ],
    teacherNotes: {
      method: '2-chorak yakunida 3 ta qayta ishlash modelini (Batch, Online, Real-Time) jadvalda solishtirish.',
      timing: 'Kirish 5 daq, Real-Time va Feedback Loop 20 daq, CaseStudy 10 daq, Quiz 10 daq.',
      assessment: 'CaseStudy javobi va test natijalari.',
      homework: 'Batch, Online va Real-Time farqlarini jadval ko‘rinishida yozib keling.',
    },
  },
];
