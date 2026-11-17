import type { Lesson } from './types';

export const GRADE_9_Q3B: Lesson[] = [
  {
    id: 'g9-l43',
    grade: 9,
    no: 43,
    part: '3-chorak',
    title: 'Korporativ brend va unga xos stil. Korporativ brendga xos stilga muvofiq hujjat tayyorlash',
    kind: 'dars',
    hours: 1,
    tools: ['Corporate House Style', 'Shrift va Rang palitrasi', 'Logotip'],
    objectives: [
      'O‘quvchi Korporativ stil (Corporate House Style) nima ekanini va uning kompaniya imijidagi ahamiyatini tushuntiradi.',
      'O‘quvchi hujjat, taqdimot va xatlarni yagona brend qoidalari (shrift, rang kodi, logotip o‘rni, kolontitullar) asosida tayyorlaydi.',
    ],
    intro:
      'Yirik kompaniya yoki maktabning rasmiy xati, bukleti va veb-saytiga qaraganingizda bir xil ranglar, shrift va logotipni ko‘rib darhol taniysiz. Mana shu yagona qoidalar to‘plami "Korporativ stil" (Corporate House Style) deb ataladi!',
    sections: [
      {
        heading: 'Korporativ stil (House Style) tarkibiy qismlari',
        body: 'Korporativ stil — tashkilotning barcha hujjatlarida (blanka, prezentatsiya, vizitka, veb-sayt) qatʼiy amal qilinadigan dizayn qoidalaridir. U quyidagilarni o‘z ichiga oladi: 1) Logotip va uning aniq joylashuvi/o‘lchami; 2) Rasmiy ranglar palitrasi (masalan, HEX `#0F4C81` ko‘k va `#F4B400` oltin); 3) Shrift oilasi (masalan, Sarlavha uchun Arial Bold 18pt, asosiy matn uchun Calibri 11pt); 4) Hoshiyalar, chiziqlar va kolontitullar ko‘rinishi.',
        example: 'Kompaniya xodimlari bitta harf shriftini o‘zboshimchalik bilan Comic Sans ga o‘zgartirishi korporativ stilni buzadi va tashkilotga bo‘lgan ishonchni pasaytiradi.',
        tip: 'Stil qo‘llanmasi (Style Guide) — har bir xodim hujjat tayyorlayotganda amal qiladigan asosiy yo‘riqnomadir.',
      },
      {
        heading: 'Brend stiliga muvofiq hujjat tayyorlash afzalliklari',
        body: 'Yagona stil hujjatlar orasida izchillik (consistency) beradi: o‘quvchi yoki mijoz tashkilotni darhol taniydi, hujjatlar jiddiy va professional ko‘rinadi hamda xodimlar har safar dizayn o‘ylab o‘tirmay tayyor shablondan foydalanib vaqt tejaydi.',
        example: 'Maktabingizning rasmiy blankasi tepasida doim o‘ng burchakda maktab gerbi, ko‘k ajratuvchi chiziq va pastda maktab manzili turadi.',
      },
    ],
    keyTerms: [
      { term: 'Corporate House Style', definition: 'Tashkilotning barcha hujjat va materiallarida qo‘llaniladigan yagona dizayn va brend qoidalari.' },
      { term: 'Brand Identity', definition: 'Logotip, rang, shrift va ohang orqali tashkilotning tanilish darajasi.' },
      { term: 'Shablon (Template)', definition: 'Korporativ stil sozlamalari oldindan kiritib qo‘yilgan tayyor hujjat namunasi.' },
      { term: 'Rang palitrasi (HEX/RGB)', definition: 'Brend uchun belgilab qo‘yilgan 2–3 ta asosiy va urg‘u beruvchi rang kodlari.' },
    ],
    steps: [
      '1. Maktab yoki xayoliy IT klub uchun Korporativ Stil jadvalini tuzing (2 rang, 2 shrift, logotip joyi).',
      '2. Word/Writer da sarlavha, asosiy matn va Footer ni shu stilga moslab sozlang.',
      '3. Hujjatni kelgusida ishlatish uchun shablon (`.dotx` / `.ott`) sifatida saqlang.',
    ],
    practice: [
      {
        task: 'Nima uchun bir tashkilotning 5 ta bo‘limi 5 xil shrift va rangda hisobot chiqarishi noto‘g‘ri?',
        expected: 'Izchillik buziladi, brend tanilishi pasayadi va hujjatlar havaskor hamda tartibsiz ko‘rinadi.',
        difficulty: 'oson',
      },
      {
        task: '"Yosh Muhandislar" klubi uchun Style Guide jadvalini (Shriftlar, O‘lchamlar, Ranglar, Logotip joyi) yozib bering.',
        expected: 'Masalan: Asosiy rang `#1D4ED8`, urg‘u `#F59E0B`; Sarlavha Montserrat Bold 16pt, Matn Inter 11pt; Logo yuqori chap burchakda 2 sm.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l43-g1',
        num: '01',
        title: 'Korporativ stil talablari',
        topic: 'Corporate House Style',
        difficulty: 'Oson',
        engine: 'truefalse',
        config: {
          prompt: 'Korporativ brend stili haqidagi fikrlarni To‘g‘ri yoki Noto‘g‘ri deb baholang.',
          statements: [
            {
              text: 'Korporativ stil hujjatlar o‘rtasida izchillik yaratadi va mijozlarning tashkilotni darhol tanishiga yordam beradi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Yagona rang, shrift va logotip tashkilotning ishonchli qiyofasini yaratadi.',
            },
            {
              text: 'Har bir xodim xohlagan hujjatida rang va shriftni o‘z kayfiyatiga qarab o‘zgartirib yuborishi kerak.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! House Style barcha xodimlar uchun yagona va majburiy dizayn qoidalarini belgilaydi.',
            },
            {
              text: 'Shablon (Template) yaratish brendga mos hujjatlarni tez va xatosiz tayyorlashni osonlashtiradi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Shablon tayyor uslub va logotipni avtomatik saqlab turadi.',
            },
            {
              text: 'Bitta hujjatda 7 xil shrift va 10 xil yorqin rang ishlatish eng yaxshi korporativ stil namunasidir.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Professional korporativ stilda odatda 1–2 shrift va 2–3 uyg‘un rang qo‘llanadi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: '"Corporate House Style" nimani anglatadi?',
        options: ['Tashkilotning barcha hujjatlarida amal qilinadigan yagona shrift, rang va logotip qoidalari', 'Faqat bino arxitekturasi', 'Kompyuter viruslari ro‘yxati', 'Server paroli'],
        answer: 0,
        explanation: 'House Style tashkilotning barcha rasmiy kommunikatsiyalarida vizual birlikni taʼminlaydi.',
      },
      {
        prompt: 'Korporativ stilda odatda nechta asosiy shrift oilasi tavsiya etiladi?',
        options: ['1–2 ta uyg‘un shrift (masalan, biri sarlavha, biri asosiy matn uchun)', 'Kamida 8 ta har xil shrift', 'Har bir gapga alohida shrift', 'Hech qanday shrift'],
        answer: 0,
        explanation: '1–2 shrift hujjatni tartibli va o‘qishga qulay qiladi.',
      },
      {
        prompt: 'Brend hujjatlarini har safar noldan sozlamaslik uchun Word/Writer da nima yaratiladi?',
        options: ['Shablon (Template)', 'ZIP arxiv', 'Krossvord', 'CSV fayl'],
        answer: 0,
        explanation: 'Template oldindan tayyorlangan logo, kolontitul va stillarni saqlaydi.',
      },
      {
        prompt: 'Korporativ stilning asosiy biznes foydasi qaysi?',
        options: ['Mijozlarda ishonch uyg‘otadi va brendning tanilishini kuchaytiradi', 'Fayl hajmini 10 GB qiladi', 'Printer siyohini ko‘paytiradi', 'Internet tezligini pasaytiradi'],
        answer: 0,
        explanation: 'Yagona va tartibli vizual uslub tashkilot obro‘sini oshiradi.',
      },
      {
        prompt: 'Brend rangi barcha dasturlarda bir xil chiqishi uchun Style Guide da nima ko‘rsatiladi?',
        options: ['Aniq HEX yoki RGB rang kodlari', '"Taxminan och ko‘k" so‘zi', 'Faqat qora rang', 'Monitor nomi'],
        answer: 0,
        explanation: 'RGB/HEX kodlari rangning barcha ekran va hujjatlarda bir xil bo‘lishini taʼminlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Mashhur tashkilot yoki maktab brendi misolida rang, logo va shrift birligini ko‘rsatish.',
      timing: 'House Style 20 daq, Shablon tayyorlash 15 daq, TrueFalse va quiz 10 daq.',
      assessment: 'Brend qoidalarini hujjatda izchil qo‘llash.',
      homework: 'O‘zingizning orzuingizdagi IT loyiha uchun mini-Style Guide (Logotip g‘oyasi, 2 rang HEX, 2 shrift) tuzing.',
    },
  },
  {
    id: 'g9-l44',
    grade: 9,
    no: 44,
    part: '3-chorak',
    title: 'Sahifa/slayd izchilligini taʼminlash',
    kind: 'dars',
    hours: 1,
    tools: ['Slide Master (PowerPoint/Impress)', 'Styles (Word)', 'Serif vs Sans-serif'],
    objectives: [
      'O‘quvchi barcha sahifa va slaydlarda izchillikni (Consistency) saqlash uchun Slide Master va Matn stillari dan foydalanishni biladi.',
      'O‘quvchi Serif (kertikli) va Sans-serif (kertiksiz) shriftlar farqini hamda ularning ekran va bosma nashrdagi o‘rnini izohlaydi.',
    ],
    intro:
      '30 slaydli taqdimotning har biriga alohida logotip qo‘yish va sarlavhani o‘zgartirish kerak bo‘lsa, buning uchun 1 soat vaqt ketadi. Ammo `Slide Master` ishlatilsa, bitta joyni o‘zgartirish bilan barcha 30 ta slayd bir soniyada yangilanadi!',
    sections: [
      {
        heading: 'Slide Master va Sahifa izchilligi',
        body: 'Slide Master (Slayd namunasi) — taqdimotdagi barcha slaydlarning asosiy qolipidir. Slide Master ga logotip, fon rangi, sarlavha shrifti, markerlar (Bullets) va Footer raqami qo‘yilsa, u avtomatik ravishda barcha slaydlarda paydo bo‘ladi va ularning o‘rni bir pikseldan ham siljimaydi. Hujjatlarda esa bu vazifani `Styles` va `Header/Footer` bajaradi.',
        example: 'Rahbar "Logotipni chapdan o‘ng burchakka oling" desa, Slide Master da 1 marta siljitasiz — barcha 40 slayd darhol o‘zgaradi!',
        tip: 'Slaydga uzun gaplarni ko‘chirib tashlamang: "6×6 qoidasi" (ko‘pi bilan 6 qator va har qatorda ~6 so‘z) ga amal qiling.',
      },
      {
        heading: 'Serif va Sans-serif shriftlar hamda matn tekislash',
        body: 'Serif shriftlar (masalan, Times New Roman, Georgia) harf uchlarida kichik kertiklarga ega bo‘lib, qog‘oz kitob va gazetalarda ko‘zni satr bo‘ylab olib borishga qulay. Sans-serif shriftlar (Arial, Calibri, Inter, Roboto) esa tekis va kertiksiz bo‘lib, kompyuter ekrani, proyektor slaydlari va veb-saytlarda aniq o‘qiladi. Matnni chapga tekislash (Left align) o‘qishga qulay; ikki chetga tekislash (Justify) rasmiy maqolalarda ishlatiladi.',
        example: 'Proyektor taqdimotida Arial yoki Calibri (Sans-serif) 24pt+ shrift tanlang, Times New Roman mayda ekranda xira ko‘rinishi mumkin.',
      },
    ],
    keyTerms: [
      { term: 'Slide Master', definition: 'Taqdimotning barcha slaydlariga yagona shrift, fon, logotip va joylashuv beruvchi asosiy qolip.' },
      { term: 'Izchillik (Consistency)', definition: 'Barcha sahifa va slaydlarda bir xil dizayn, shrift, rang va joylashuvning saqlanishi.' },
      { term: 'Sans-serif shrift', definition: 'Uchida kertigi bo‘lmagan, ekran va slaydlar uchun juda aniq o‘qiladigan shrift (Arial, Calibri).' },
      { term: 'Serif shrift', definition: 'Harf uchlarida bezak kertiklari bor, asosan bosma kitoblar uchun mos shrift (Times New Roman).' },
    ],
    steps: [
      '1. PowerPoint yoki LibreOffice Impress da View → Slide Master ni oching.',
      '2. Eng yuqori Asosiy Master slaydga logotip, sarlavha shrifti va slayd raqamini qo‘ying.',
      '3. Normal ko‘rinishga qaytib, 4 ta yangi slayd oching va hammasi avtomatik bir xil chiqqanini tekshiring.',
    ],
    practice: [
      {
        task: '25 ta slaydning hammasida sarlavha rangi va logotip joyi o‘zgarishi uchun ularni alohida-alohida tahrirlash kerakmi?',
        expected: 'Yo‘q, `View → Slide Master` da asosiy master slaydni o‘zgartirsangiz, barcha slaydlar avtomatik yangilanadi.',
        difficulty: 'oson',
      },
      {
        task: 'Katakli qog‘ozda chop etiladigan badiiy hikoya va proyektor ekrani taqdimoti uchun Serif hamda Sans-serif dan qay birini tanlaysiz?',
        expected: 'Chop etiladigan badiiy kitob/hikoya uchun Serif (Times New Roman/Georgia); proyektor ekrani taqdimoti uchun Sans-serif (Arial/Calibri).',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l44-g1',
        num: '01',
        title: 'Shriftlar va Slide Master',
        topic: 'Izchillik va tipografika',
        difficulty: 'Oson',
        engine: 'fillblank',
        config: {
          prompt: 'Tipografika va taqdimot izchilligiga oid jumlani to‘ldiring.',
          template: 'Taqdimotdagi barcha slaydlarga bir vaqtda logotip va yagona uslub berish uchun {{0}} ishlatiladi; proyektor ekranida aniq o‘qish uchun {{1}} shrifti, bosma kitoblarda esa {{2}} shrifti qulay.',
          blanks: [
            { options: ['Slide Master', 'Crop', 'Mail Merge'], answer: 'Slide Master' },
            { options: ['Sans-serif', 'Script', 'Brush'], answer: 'Sans-serif' },
            { options: ['Serif', 'Wingdings', 'Pixel'], answer: 'Serif' },
          ],
          hint: 'Master qolip = Slide Master; Ekran = Sans-serif; Bosma kitob = Serif.',
          explanation: 'Slide Master barcha slaydlarda yagona dizaynni taʼminlaydi; Sans-serif ekran uchun tiniq, Serif esa bosma satrlar uchun qulay.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'PowerPoint yoki Impress da barcha slaydlarning pastki o‘ng burchagiga bir marta logotip qo‘yish uchun qaysi bo‘limdan foydalaniladi?',
        options: ['Slide Master', 'Slide Sorter', 'Reading View', 'Animations'],
        answer: 0,
        explanation: 'Slide Master da qilingan o‘zgarish butun taqdimot slaydlariga tatbiq etiladi.',
      },
      {
        prompt: 'Quyidagi shriftlardan qaysi biri Sans-serif (kertiksiz) shrift hisoblanadi?',
        options: ['Arial / Calibri', 'Times New Roman', 'Georgia', 'Garamond'],
        answer: 0,
        explanation: 'Arial va Calibri da harf uchlarida kertiklar bo‘lmaydi.',
      },
      {
        prompt: 'Taqdimot slaydida izchillikni buzuvchi xato qaysi?',
        options: ['Har bir slaydda sarlavha joyi, o‘lchami va rangini har xil qilish', 'Slide Master ishlatish', '6×6 qoidasiga amal qilish', 'Yuqori kontrast tanlash'],
        answer: 0,
        explanation: 'Bir slayddan ikkinchisiga o‘tganda sarlavha "sakrab" yurishi tomoshabinni chalg‘itadi.',
      },
      {
        prompt: 'Nima uchun proyektor taqdimotida kamida 24pt shrift tavsiya etiladi?',
        options: ['Orqa partada o‘tirgan tomoshabinlar ham qiynalmay o‘qishi uchun', 'Faylni og‘irlashtirish uchun', 'Slaydni to‘ldirib tashlash uchun', 'Print qilish uchun'],
        answer: 0,
        explanation: 'Kichik 10–12pt shrift uzoqdan umuman ko‘rinmaydi.',
      },
      {
        prompt: 'Matnning chap hamda o‘ng chetlari tekis chiziqqa keltirilishi qanday tekislash deyiladi?',
        options: ['Justify (Ikki chetga tekislash)', 'Left Align', 'Center', 'Bullets'],
        answer: 0,
        explanation: 'Justify so‘zlar orasidagi bo‘shliqni moslab, matnning ikkala chetini tekislaydi.',
      },
    ],
    teacherNotes: {
      method: 'Slide Master da bitta fon va logotipni o‘zgartirib, 10 ta slayd birdan o‘zgarishini namoyish qilish.',
      timing: 'Slide Master 20 daq, Serif/Sans-serif 15 daq, FillBlank va quiz 10 daq.',
      assessment: 'Slide Master va shrift turlari farqini tushunish.',
      homework: '5 slaydli taqdimotda Slide Master orqali logotip, Footer va yagona sarlavha stilini sozlang.',
    },
  },
  {
    id: 'g9-l45',
    grade: 9,
    no: 45,
    part: '3-chorak',
    title: 'Yangi stil yaratish',
    kind: 'dars',
    hours: 1,
    tools: ['Word / Writer Styles', 'Heading 1 / 2', 'Avtomatik Mundarija (TOC)'],
    objectives: [
      'O‘quvchi hujjatda maxsus matn stillarini (`Title`, `Subtitle`, `Heading 1`, `Body text`) yaratish va tahrirlashni biladi.',
      'O‘quvchi stillardan foydalanish orqali bir bosishda Avtomatik mundarija (Table of Contents) yaratish hamda barcha sarlavhalarni birdan yangilashni qo‘llaydi.',
    ],
    intro:
      'Tasavvur qiling, 40 sahifalik referat yozdingiz va har bir bob sarlavhasini qo‘lda qalin va ko‘k qildingiz. Endi ustoz "Rangini yashil qil va Mundarija qo‘sh" dedi! Agar Stil (Style) ishlatgan bo‘lsangiz, bu ish atigi 5 soniyada bitadi.',
    sections: [
      {
        heading: 'Stil (Style) nima va yangi stil qanday yaratiladi?',
        body: 'Stil — shrift nomi, o‘lchami, rangi, tekislash, qatorlararo masofa (line spacing) va abzatsdan keyingi bo‘shliqni bitta nom ostida saqlovchi sozlamalar paketidir. Yangi stil yaratish uchun "Styles" panelidan "Create a Style" tanlanadi: masalan, `Asosiy_Matn` (Calibri, 11pt, 1.5 interval, Justify, 6pt after) yoki `Bob_Sarlavha` (Arial, 16pt, Bold, Navy, Keep with next).',
        example: '`Bob_Sarlavha` stilini tahrirlab rangini to‘q ko‘kdan yashilga o‘zgartirsangiz, hujjatdagi barcha 12 ta bob sarlavhasi bir zumda yashil bo‘ladi!',
        tip: 'Yangi stil yaratganda "Spacing After" (Abzatsdan keyingi masofa) qo‘ying — shunda abzatslar orasiga bo‘sh `Enter` qo‘yishga hojat qolmaydi!',
      },
      {
        heading: 'Stillar va Avtomatik Mundarija (Table of Contents)',
        body: 'Hujjatdagi barcha bob sarlavhalariga `Heading 1`, kichik bo‘limlarga esa `Heading 2` stili qo‘llansa, `References → Table of Contents` (Mundarija) tugmasi bir soniyada barcha bo‘limlar va ularning aniq sahifa raqamlari ro‘yxatini avtomatik tuzib beradi. Keyinchalik sahifalar surilsa ham "Update Table" bosilsa raqamlar yangilanadi.',
        example: 'Diplomalik va ilmiy ishlarda qo‘lda mundarija yozilmaydi — faqat `Heading` stillari orqali avtomatik generatsiya qilinadi.',
      },
    ],
    keyTerms: [
      { term: 'Stil (Style)', definition: 'Matn shrifti, rangi va abzats sozlamalarini birlashtiruvchi qayta ishlatiluvchi shablon.' },
      { term: 'Heading 1 / Heading 2', definition: 'Hujjat tuzilmasini va ierarxiyasini belgilovchi asosiy va ichki sarlavha stillari.' },
      { term: 'Avtomatik mundarija (TOC)', definition: 'Heading stillari asosida bo‘limlar va sahifa raqamlarini avtomatik yig‘uvchi ro‘yxat.' },
      { term: 'Line & Paragraph Spacing', definition: 'Qatorlar orasidagi (masalan 1.15 / 1.5) va abzatsdan keyingi (masalan 6pt) bo‘shliq.' },
    ],
    steps: [
      '1. Word/Writer da `Mening_Matnim` nomli yangi stil yarating (12pt, 1.5 interval, 6pt spacing after).',
      '2. 3 ta bob sarlavhasiga `Heading 1`, 2 ta ichki bandga `Heading 2` bering.',
      '3. Hujjat boshiga `References → Table of Contents` qo‘shing va natijani ko‘ring.',
    ],
    practice: [
      {
        task: 'Hujjatda `Table of Contents` (Avtomatik mundarija) bossangiz "Sarlavhalar topilmadi" degan xabar chiqdi. Sababi nima?',
        expected: 'Muallif sarlavhalarni oddiy matnda shriftini kattalashtirib qo‘ygan, lekin `Heading 1 / Heading 2` stillarini qo‘llamagan.',
        difficulty: 'oson',
      },
      {
        task: 'Abzatslar orasini ochish uchun ikki marta `Enter` bosish o‘rniga stil ichida qaysi sozlamani berish kerak?',
        expected: 'Paragraph → `Spacing After` (masalan, 6pt yoki 10pt) ni sozlash kerak.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l45-g1',
        num: '01',
        title: 'Yangi stil va Mundarija tartibi',
        topic: 'Hujjat stillari',
        difficulty: 'Oson',
        engine: 'order',
        config: {
          prompt: 'Katta hujjatda avtomatik mundarija hosil qilish bosqichlarini to‘g‘ri tartiblang.',
          items: [
            'Asosiy bob sarlavhalarini belgilab, ularga "Heading 1" stilini qo‘llash',
            'Ichki kichik bo‘limlarga "Heading 2" stilini berish',
            'Hujjat boshidan bo‘sh sahifa ajratib, "References → Table of Contents" ni qo‘shish',
            'Matnga o‘zgartirish kiritilgach mundarija ustida "Update Table" bosish',
          ],
          hint: 'Avval Heading stillari beriladi, keyin Mundarija qo‘yiladi va oxirida yangilanadi.',
          explanation: 'Avtomatik mundarija to‘g‘ridan-to‘g‘ri Heading stillariga tayanib ishlaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Matn muharririda Stil (Style) dan foydalanishning eng katta afzalligi nimada?',
        options: ['Stilni bir marta tahrirlash bilan butun hujjatdagi barcha mos matnlar birdan yangilanadi', 'Fayl viruslardan himoyalanadi', 'Internet tezligi ortadi', 'Rasmlar PNG ga aylanadi'],
        answer: 0,
        explanation: 'Stil butun hujjatda tez yangilash va to‘liq izchillikni taʼminlaydi.',
      },
      {
        prompt: 'Avtomatik mundarija (Table of Contents) qaysi stillarni yig‘ib ro‘yxat tuzadi?',
        options: ['Heading 1, Heading 2, Heading 3', 'Footer va Header', 'Watermark', 'Bold va Italic'],
        answer: 0,
        explanation: 'Oddiy Bold qilingan matn mundarijaga kirmaydi — faqat Heading stillari olinadi.',
      },
      {
        prompt: 'Yangi stil yaratayotganda abzatslar orasidagi bo‘sh joyni ortiqcha `Enter` bosmasdan sozlash parametri qaysi?',
        options: ['Spacing After / Before', 'Rotate', 'Crop', 'Margins'],
        answer: 0,
        explanation: 'Spacing After har bir abzatsdan keyin avtomatik aniq millimetr/punkt bo‘shliq qoldiradi.',
      },
      {
        prompt: 'Hujjatga yangi bob qo‘shilgandan keyin avtomatik mundarijadagi sahifa raqamlari yangilanishi uchun nima qilinadi?',
        options: ['Mundarijada "Update Table" tugmasi bosiladi', 'Hamma raqamlar qo‘lda qayta yoziladi', 'Fayl o‘chiriladi', 'Page Break olinadi'],
        answer: 0,
        explanation: 'Update Table barcha sarlavha nomlari va sahifa raqamlarini darhol qayta hisoblaydi.',
      },
      {
        prompt: 'Sarlavha sahifa oxirida yolg‘iz qolib, matni keyingi sahifaga o‘tib ketmasligi uchun stilga qaysi belgi qo‘yiladi?',
        options: ['Keep with next', 'Strikethrough', 'Subscript', 'Hidden'],
        answer: 0,
        explanation: 'Keep with next sarlavhani doim o‘zidan keyingi birinchi abzats bilan bir sahifada tutib turadi.',
      },
    ],
    teacherNotes: {
      method: 'Qo‘lda Bold qilingan matn va Style/TOC qo‘llangan hujjat orasidagi tezlik farqini sinfda ko‘rsatish.',
      timing: 'Yangi stil yaratish 15 daq, Heading va TOC 15 daq, Order va quiz 15 daq.',
      assessment: 'Yangi stil yaratish va Avtomatik mundarija qo‘shishni bilish.',
      homework: '3 bo‘limdan iborat qisqa ma’ruza yozib, `Heading 1/2` va avtomatik mundarija bilan topshiring.',
    },
  },
  {
    id: 'g9-l46',
    grade: 9,
    no: 46,
    part: '3-chorak',
    title: 'Xatolarni tekshirish uchun dasturlardan foydalanish',
    kind: 'dars',
    hours: 1,
    tools: ['Spell Check', 'Grammar Check', 'Proofreading', 'Find & Replace'],
    objectives: [
      'O‘quvchi avtomatik imlo (Spell check) va grammatika tekshiruvchilar qanday ishlashini tushunadi.',
      'O‘quvchi nima uchun dasturiy tekshiruv inson ko‘zidan o‘tkazish (Proofreading) ning o‘rnini to‘liq bosa olmasligini aniq misollar bilan isbotlaydi.',
    ],
    intro:
      'Word da qizil to‘lqinsimon chiziq imlo xatosini, ko‘k/yashil chiziq esa grammatika xatosini ko‘rsatadi. Biroq siz "bor" o‘rniga "bir" deb yozsangiz, kompyuter buni xato deb topmaydi! Chunki ikkalasi ham lug‘atda bor so‘zlar.',
    sections: [
      {
        heading: 'Avtomatik Spell Check va Grammar Check imkoniyatlari',
        body: 'Spell Check (Imlo tekshiruvi) hujjatdagi har bir so‘zni dastur lug‘ati bilan solishtiradi: agar so‘z lug‘atda bo‘lmasa (masalan, "komyuter"), tagiga qizil chiziq chizib tuzatish taklif qiladi. Grammar Check gap tuzilishi, tinish belgilari va zamon mosligini tekshiradi. `Find and Replace` (Ctrl+H) esa hujjat bo‘ylab bir xato so‘zni bir zumda hammasini tuzatishga yordam beradi.',
        example: 'Agar siz o‘zbekcha hujjatda inglizcha lug‘at yoqiq qolsa, hamma to‘g‘ri so‘zlar ham qizil chiziq bo‘lib ketadi — shuning uchun to‘g‘ri tilni (Proofing Language) tanlash zarur!',
        tip: 'Ismlar yoki maxsus IT atamalar (masalan, `Payme`, `ZiyoNET`) ni har gal xato demasligi uchun `Add to Dictionary` bosish mumkin.',
      },
      {
        heading: 'Avtomatik tekshiruvning cheklovi va Proofreading zarurati',
        body: 'Avtomatik Spell Checker kontekstni to‘liq tushunmaydi! Agar foydalanuvchi to‘g‘ri yozilgan, lekin maʼnosiga ko‘ra noto‘g‘ri so‘zni (homophone / typo: inglizchada `their/there`, `form/from`, o‘zbekchada `xat/xad`, `olma/olam`, `bir/bor`) kiritsa, lug‘at uni xato demaydi. Shuning uchun yakuniy bosqichda inson tomonidan o‘qib tekshirish (Proofreading) va chop etishdan oldin `Print Preview` dan o‘tkazish shart.',
        example: '"Men do‘konga non olgani *bordim*" o‘rniga "*berdim*" yozib qo‘ysangiz, Spell Check jim turadi — buni faqat diqqat bilan o‘qish (Proofreading) topadi!',
      },
    ],
    keyTerms: [
      { term: 'Spell Check', definition: 'Hujjatdagi so‘zlarni ichki lug‘at bilan solishtirib imlo xatolarini topuvchi vosita.' },
      { term: 'Proofreading', definition: 'Avtomatik dasturdan keyin matn maʼnosi, mantiqi va maketini inson ko‘zi bilan qayta tekshirish.' },
      { term: 'Find & Replace (Ctrl+H)', definition: 'Butun hujjat bo‘ylab xato so‘z yoki belgini avtomatik topib almashtirish.' },
      { term: 'Lug‘at cheklovi', definition: 'Lug‘atda mavjud, lekin gap mazmuniga mos kelmaydigan so‘zni dasturning o‘tkazib yuborishi.' },
    ],
    steps: [
      '1. Matn muharririda qasddan 3 ta imlo xatosi va 2 ta maʼnoviy xato (`bor`→`bir`) yozing.',
      '2. `F7` (Spell Check) ni ishga tushirib, qaysi xatolar topilganini, qaysilari qolib ketganini ko‘ring.',
      '3. Qolib ketgan maʼnoviy xatoni Proofreading orqali o‘zingiz topib tuzating.',
    ],
    practice: [
      {
        task: 'Nima uchun dastur "I saw a big *bear* in the office" (bear = ayiq, beer/chair o‘rnida) kabi xatoni qizil chiziq bilan belgilamaydi?',
        expected: 'Chunki `bear` so‘zi ingliz lug‘atida to‘g‘ri so‘z sifatida mavjud; imlo tekshiruvchi gapdagi mantiqiy maʼnoni doim ham anglamaydi.',
        difficulty: 'o‘rta',
      },
      {
        task: '50 betlik kitobda "kompuyter" so‘zi 30 marta xato yozilgan. Eng tez qanday tuzatasiz?',
        expected: '`Find and Replace` (Ctrl+H) da Find: `kompuyter`, Replace with: `kompyuter` → Replace All.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g9-l46-g1',
        num: '01',
        title: 'Spell Check vs Proofreading',
        topic: 'Xatolarni tekshirish',
        difficulty: 'O‘rta',
        engine: 'casestudy',
        config: {
          prompt: 'Quyidagi vaziyatda nima uchun xato chop etilib ketdi va uni nima oldini olardi?',
          scenario: 'Talaba diplom ishini topshirishdan oldin Word dagi Spell Check (F7) ni bosdi va "Hech qanday xato yo‘q" xabarini oldi. Lekin ustoz "Maktab *direktori*" o‘rniga "Maktab *diktori*" yozilganini ko‘rib qoldi.',
          options: [
            {
              text: '"Diktor" so‘zi lug‘atda bor bo‘lgani uchun Spell Check uni o‘tkazib yuborgan; inson tomonidan Proofreading zarur edi',
              isCorrect: true,
              feedback: 'To‘g‘ri! Spell Check faqat lug‘atda bor-yo‘qligini tekshiradi, gapdagi maʼno uchun albatta Proofreading kerak.',
            },
            {
              text: 'Kompyuter klaviaturasi buzilgan, Proofreading umuman kerak emas',
              isCorrect: false,
              feedback: 'Hatto eng yangi kompyuterda ham maʼnoviy xatoni faqat odam o‘qib topadi.',
            },
            {
              text: 'Fayl PDF bo‘lgani uchun hammasini shifrlagan',
              isCorrect: false,
              feedback: 'Bu shifrlashga aloqador emas — oddiy kontekst xatosi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Avtomatik imlo tekshiruvchi (Spell Check) nima uchun 100% xatosiz hujjatni kafolatlamaydi?',
        options: ['Lug‘atda bor, lekin gap maʼnosiga xato so‘zlarni (masalan, "xat"/"xat", "form"/"from") payqamay qolishi mumkin', 'Matnni o‘chira olmaydi', 'Faqat raqamlarni tekshiradi', 'Internet bo‘lmasa ishlamaydi'],
        answer: 0,
        explanation: 'Lug‘at tekshiruvi kontekstual maʼnoviy xatolarni hamisha aniqlay olmaydi.',
      },
      {
        prompt: 'Hujjatdagi maʼlum bir noto‘g‘ri atamani barcha sahifalarda bir zumda tuzatish vositasi qaysi?',
        options: ['Find & Replace (Ctrl+H)', 'Crop', 'Slide Master', 'Header'],
        answer: 0,
        explanation: 'Find & Replace kerakli so‘zni topib yangisiga avtomatik almashtiradi.',
      },
      {
        prompt: 'To‘g‘ri yozilgan kompaniya nomi (`ZiyoTech`) ni dastur har gal qizil chiziq qilmasligi uchun nima qilish mumkin?',
        options: ['Add to Dictionary (Lug‘atga qo‘shish)', 'So‘zni o‘chirib tashlash', 'Shriftni oq rangga bo‘yash', 'Kompyuterni o‘chirish'],
        answer: 0,
        explanation: 'Maxsus atama va nomlar foydalanuvchi lug‘atiga qo‘shiladi.',
      },
      {
        prompt: 'Hujjatni chop etishdan avval hoshiyalar, sahifa bo‘linishi va jadvallarni oxirgi marta tekshirish bosqichi qanday ataladi?',
        options: ['Proofreading va Print Preview', 'Defragmentatsiya', 'Mail Merge', 'Archiving'],
        answer: 0,
        explanation: 'Vizual va mazmuniy yakuniy ko‘rikdan o‘tkazish xatolarni keskin kamaytiradi.',
      },
      {
        prompt: 'Agar o‘zbekcha yozilgan matnning hamma so‘zlari ostiga qizil chiziq chizilsa, sababi nima bo‘lishi mumkin?',
        options: ['Matn tekshiruvi tili (Proofing Language) boshqa tilga (masalan, English) sozlangan', 'Monitor singan', 'Printer toneri tugagan', 'Fayl .pdf formatda'],
        answer: 0,
        explanation: 'Noto‘g‘ri lug‘at tili tanlanganda boshqa tildagi to‘g‘ri so‘zlar ham xato deb ko‘rsatiladi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfga 5 ta "lug‘atda bor, lekin maʼnosiz" kulgili xatoli gap berib, kim tez topishini musobaqa qilish.',
      timing: 'Spell/Grammar Check 15 daq, Proofreading cheklovi 15 daq, Case study va test 15 daq.',
      assessment: 'Avtomatik tekshiruv va inson ko‘rigi farqini aniq bilish.',
      homework: '5 ta atayin maʼnoviy xatoli gap tuzib, dastur nega ularni o‘tkazib yuborishini izohlang.',
    },
  },
  {
    id: 'g9-l47',
    grade: 9,
    no: 47,
    part: '3-chorak',
    title: 'Xatolarni tekshirish usullari',
    kind: 'dars',
    hours: 1,
    tools: ['Validatsiya qoidalari', 'Range / Length / Type / Format / Presence / Check Digit'],
    objectives: [
      'O‘quvchi kompyuter tizimlariga ma’lumot kiritishda qo‘llaniladigan asosiy avtomatik tekshirish (Validation) usullarini farqlaydi.',
      'O‘quvchi Check Digit (Nazorat raqami) va Lookup Check kabi usullarning shtrix-kod, ISBN va bank kartalaridagi rolini tushuntiradi.',
    ],
    intro:
      'Agar ro‘yxatdan o‘tish formasida foydalanuvchi "Yosh" katagiga `-20` yoki `"salom"` yozib yuborsa, tizim uni darhol to‘xtatishi kerak! Kompyuter ma’lumotning mantiqiy qoidalarga mosligini tekshiradigan 7 ta asosiy usul mavjud.',
    sections: [
      {
        heading: 'Asosiy Validatsiya (Tekshirish) turlari',
        body: '1) Range check (Diapazon): son berilgan oraliqdamiki? (Masalan, imtihon bali `0..100`). 2) Length check (Uzunlik): belgilar soni aniqmi? (PIN-kod `4` ta raqam, telefon `9` raqam). 3) Type check (Ma’lumot turi): raqam o‘rniga harf yozilmadimi? (Narx faqat son). 4) Presence check (Mavjudlik): majburiy maydon bo‘sh qolmadimi? (`*` belgili maydonlar). 5) Format check (Shablon/Andoza): sana `DD/MM/YYYY`, email `@` va `.` ga egami?',
        example: 'Avtomobil davlat raqami Format check orqali `01 A 123 BC` andozasiga mosligi tekshiriladi.',
        tip: 'Presence check — faqat maydon bo‘sh emasligini tekshiradi; Range check esa sonning min–max oralig‘ini nazorat qiladi!',
      },
      {
        heading: 'Lookup Check va Check Digit (Nazorat raqami)',
        body: '6) Lookup check (Ro‘yxatdan tekshirish): kiritilgan qiymat ruxsat etilgan ro‘yxatda (masalan, viloyatlar ro‘yxati yoki `Erkak/Ayol`) bormi? 7) Check Digit (Nazorat raqami): shtrix-kod, kitob ISBN raqami yoki bank karta raqamining oxirgi raqami oldingi barcha raqamlar asosida maxsus formula bilan hisoblanadi. Agar kassir bitta raqamni adashib kiritsa (transpozitsiya xatosi: `23` o‘rniga `32`), Check Digit mos kelmaydi va tizim darhol xato beradi!',
        example: '16 xonali Uzcard/Humo/Visa karta raqamida 1 ta raqamni adashib tersangiz, sayt to‘lovga yubormasdanoq "Karta raqami noto‘g‘ri" deydi — bu Luhn algoritmi (Check Digit)!',
      },
    ],
    keyTerms: [
      { term: 'Range Check', definition: 'Kiritilgan son yoki sananing ruxsat etilgan minimum va maksimum chegarada ekanini tekshirish.' },
      { term: 'Presence Check', definition: 'Majburiy maydonning bo‘sh qoldirilmaganligini nazorat qilish.' },
      { term: 'Format Check', definition: 'Ma’lumotning belgilangan shablon (sana, pochta, pochta indeksi) ga mosligini tekshirish.' },
      { term: 'Check Digit', definition: 'Oldingi raqamlar asosida hisoblanib, terish xatolarini tutuvchi oxirgi nazorat raqami.' },
    ],
    steps: [
      '1. Ro‘yxatdan o‘tish anketasidagi 6 maydon (Ism, Yosh, Email, Jins, Pasport, Karta raqami) ni yozing.',
      '2. Har bir maydon uchun eng mos Validatsiya usulini tanlang.',
      '3. Check Digit nima uchun bank kartalari va shtrix-kodda qo‘llanishini izohlang.',
    ],
    practice: [
      {
        task: 'Maktab o‘quvchisi anketasida `Sinf` (1..11) va `Email` maydonlariga qaysi tekshirish usullari qo‘llanadi?',
        expected: 'Sinf: Type check (butun son) + Range check (1 dan 11 gacha); Email: Presence check + Format check (`@` va domen).',
        difficulty: 'oson',
      },
      {
        task: 'Nima uchun Presence Check foydalanuvchi ism maydoniga `"12345"` yozganda uni xato deb topmaydi?',
        expected: 'Chunki Presence check faqat maydon bo‘sh emasligini tekshiradi, uning mazmunini emas; buning uchun Format/Type check kerak.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l47-g1',
        num: '01',
        title: 'Validatsiya usulini mosla',
        topic: 'Xatolarni tekshirish usullari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Kiritish qoidasini mos Validatsiya usuli bilan juftlang.',
          pairs: [
            { left: 'Imtihon bali 0 dan 100 gacha bo‘lishi shart', right: 'Range Check (Diapazon tekshiruvi)' },
            { left: 'Telefon raqami aniq 9 ta belgidan iborat', right: 'Length Check (Uzunlik tekshiruvi)' },
            { left: 'Majburiy maydon (*) bo‘sh qolmasligi kerak', right: 'Presence Check (Mavjudlik tekshiruvi)' },
            { left: 'Shtrix-kod oxirgi raqami terish xatosini tutadi', right: 'Check Digit (Nazorat raqami)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Xodimning oylik maoshi maydoniga `-500` kiritilishini to‘xtatish uchun qaysi usul ishlatiladi?',
        options: ['Range Check', 'Length Check', 'Check Digit', 'Spelling Check'],
        answer: 0,
        explanation: 'Range check qiymatning `>= 0` (ruxsat etilgan oraliqda) bo‘lishini nazorat qiladi.',
      },
      {
        prompt: 'Parol kamida 8 ta belgidan iborat bo‘lishini nazorat qiluvchi tekshiruv qaysi?',
        options: ['Length Check', 'Type Check', 'Lookup Check', 'Presence Check'],
        answer: 0,
        explanation: 'Length check kiritilgan satrdagi belgilar sonini tekshiradi.',
      },
      {
        prompt: 'Kitob ISBN kodi yoki bank kartasi raqamidagi raqamlar o‘rni almashib ketishini (transpozitsiya) qaysi usul aniqlaydi?',
        options: ['Check Digit (Nazorat raqami)', 'Presence Check', 'Lookup Check', 'Margins'],
        answer: 0,
        explanation: 'Oxirgi nazorat raqami matematik formula bilan tekshiriladi va raqam xatosini darhol tutadi.',
      },
      {
        prompt: 'Sana `KK.OO.YYYY` ko‘rinishida yozilganligini tekshiruvchi usul nima?',
        options: ['Format Check', 'Range Check', 'Type Check', 'Presence Check'],
        answer: 0,
        explanation: 'Format check matnning oldindan belgilangan andozaga mosligini tekshiradi.',
      },
      {
        prompt: '"Viloyat" katagiga faqat O‘zbekistonning 14 hududidan birini kiritishga ruxsat berish qaysi tekshiruv?',
        options: ['Lookup Check', 'Check Digit', 'Length Check', 'Font Check'],
        answer: 0,
        explanation: 'Lookup check qiymatni ruxsat etilgan tayyor ro‘yxat bilan solishtiradi.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda soxta anketa chizib, har bir maydonga validatsiya qoidalarini biriktirish.',
      timing: '6 ta asosiy usul 20 daq, Check Digit 15 daq, Match va quiz 10 daq.',
      assessment: '7 ta validatsiya usulini misollar bilan ajrata olish.',
      homework: 'Bank kartasi yoki kitob ISBN raqamidan Check Digit qanday xato tutishini 3 qatorda yozing.',
    },
  },
  {
    id: 'g9-l48',
    grade: 9,
    no: 48,
    part: '3-chorak',
    title: 'Verifikatsiya va validatsiya tuhsunchalari',
    kind: 'dars',
    hours: 1,
    tools: ['Validatsiya vs Verifikatsiya', 'Ikki marta kiritish', 'Vizual tekshiruv'],
    objectives: [
      'O‘quvchi Validatsiya (mantiqiy qoidaga moslik) va Verifikatsiya (asl manba bilan moslik) o‘rtasidagi tub farqni tushuntiradi.',
      'O‘quvchi Verifikatsiyaning ikki asosiy usuli — Vizual tekshiruv va Ikki marta kiritish (Double entry) hamda ularning amaliy qo‘llanilishini izohlaydi.',
    ],
    intro:
      'Tasavvur qiling, qog‘ozdagi tug‘ilgan sana `12/05/2009` edi, operator esa kompyuterga `21/05/2009` deb kiritdi. Bu sana mantiqan to‘g‘ri (Valid), lekin asl hujjatga mos emas (Verified emas)! Shu sababli IT da Validatsiya va Verifikatsiya doim birga ishlaydi.',
    sections: [
      {
        heading: 'Validatsiya va Verifikatsiya farqi',
        body: 'Validatsiya (Validation) — kompyuter tomonidan kiritilgan ma’lumotning mantiqiy va qoidaviy to‘g‘riligini (oqilona ekanini: range, type, format, length) avtomatik tekshirish. Lekin Validatsiya ma’lumotning HAQIQIY ekanini kafolatlamaydi! Verifikatsiya (Verification) esa kompyuterga kiritilgan ma’lumotning asl qog‘oz manba yoki foydalanuvchi niyati bilan 100% bir xilligini tekshirishdir.',
        example: 'Agar ismingiz "Alisher" bo‘lsa-yu, siz "Alibek" deb kiritsangiz — kompyuter Validatsiyasi bunga ruxsat beradi (chunki ikkalasi ham oddiy harflar), ammo Verifikatsiya xatoni ushlaydi.',
        tip: 'Yodda tuting: Validatsiya = "Qoidaga to‘g‘rimi?" (kompyuter); Verifikatsiya = "Asl nusxaga mosmi?" (manba bilan solishtirish).',
      },
      {
        heading: 'Verifikatsiya usullari: Ikki marta kiritish va Vizual tekshirish',
        body: '1) Ikki marta kiritish (Double Entry): ma’lumot ikki marta kiritiladi (masalan, yangi parol yaratishda "Parol" va "Parolni tasdiqlang", yoki bankka ikki operator kiritishi); agar ikkalasi mos kelmasa tizim rad etadi. 2) Vizual tekshirish (Visual Check / Proofreading): foydalanuvchi ekranga kiritgan ma’lumotini asl qog‘oz hujjatga qarab ko‘z bilan solishtiradi (masalan, onlayn chipta sotib olishdagi "Tasdiqlash oynasi").',
        example: 'Yangi akkaunt ochayotganda parolni 2 marta kiritish — bitta harf xato bosilib ertaga hisobga kirolmay qolmaslik uchun Double Entry verifikatsiyasidir!',
      },
    ],
    keyTerms: [
      { term: 'Validatsiya', definition: 'Ma’lumotning qabul qilinadigan qoida va formatlarga mosligini avtomatik tekshirish.' },
      { term: 'Verifikatsiya', definition: 'Kiritilgan ma’lumotning asl manba bilan bir xil ko‘chirilganligini tekshirish.' },
      { term: 'Double Entry (Ikki marta kiritish)', definition: 'Tasodifiy terish xatosini tutish uchun bir ma’lumotni ikki marta kiritib solishtirish.' },
      { term: 'Vizual tekshirish', definition: 'Ekrandagi kiritilgan qiymatni qog‘oz hujjat bilan ko‘z orqali solishtirish.' },
    ],
    steps: [
      '1. Validatsiya (Range/Format) va Verifikatsiya (Double entry/Visual) taʼriflarini taqqoslang.',
      '2. "Ikkala bosqichdan o‘tadi" va "Bittasidan o‘tmaydi" holatlari uchun misollar tuzing.',
      '3. Parol o‘rnatishdagi "Confirm Password" oynasini tahlil qiling.',
    ],
    practice: [
      {
        task: 'Qog‘oz anketada mijoz yoshi `28` deb yozilgan, operator esa kompyuterga `82` deb kiritdi. Range check (18..90) xato topadimi? Qaysi tekshiruv kerak?',
        expected: 'Range check xato topmaydi (chunki 82 ham 18..90 oralig‘ida!). Buni faqat Verifikatsiya (Double entry yoki Vizual tekshiruv) topadi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Yangi parol kiritishda "Parolni qaytadan kiriting" maydoni qaysi jarayonga kiradi?',
        expected: 'Verifikatsiya (Ikki marta kiritish — Double Entry usuli).',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g9-l48-g1',
        num: '01',
        title: 'Validatsiyami yoki Verifikatsiya?',
        topic: 'Validatsiya va verifikatsiya',
        difficulty: 'O‘rta',
        engine: 'sort',
        config: {
          prompt: 'Har bir misolni to‘g‘ri toifaga ajrating: Validatsiya yoki Verifikatsiya.',
          categories: ['Validatsiya', 'Verifikatsiya'],
          items: [
            { text: 'Yangi parolni ikki marta kiritib solishtirish (Double Entry)', category: 'Verifikatsiya' },
            { text: 'Yoshning 0 dan 120 gacha ekanini tekshirish (Range Check)', category: 'Validatsiya' },
            { text: 'Qog‘oz pasportdagi raqamni ekrandagi shakl bilan ko‘zda solishtirish', category: 'Verifikatsiya' },
            { text: 'Email manzilda @ belgisi borligini tekshirish (Format Check)', category: 'Validatsiya' },
            { text: 'Majburiy maydon bo‘sh emasligini tekshirish (Presence Check)', category: 'Validatsiya' },
            { text: 'Onlayn chipta to‘lovidan oldin tasdiqlash oynasini o‘qib chiqish', category: 'Verifikatsiya' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Quyidagilardan qaysi biri VERIFIKATSIYA usuliga misol bo‘ladi?',
        options: ['Parolni ikki marta kiritib solishtirish (Double Entry)', 'Range Check', 'Length Check', 'Check Digit'],
        answer: 0,
        explanation: 'Double entry va Vizual tekshiruv ma’lumotning asl nusxaga mosligini tekshiruvchi verifikatsiya usullaridir.',
      },
      {
        prompt: 'Operator "Alisher" ismini adashib "Alibek" deb kiritsa, tizimdagi Validatsiya uni to‘xtata oladimi?',
        options: ['Yo‘q, chunki "Alibek" ham harflardan iborat to‘g‘ri formatdagi ism', 'Ha, darhol xato beradi', 'Faqat raqamda xato beradi', 'Internet o‘chadi'],
        answer: 0,
        explanation: 'Validatsiya faqat qoida va turni tekshiradi; haqiqiy manba bilan moslikni esa Verifikatsiya tekshiradi.',
      },
      {
        prompt: 'Ekranda kiritilgan ma’lumotni asl qog‘oz varaq bilan ko‘z yugurtirib solishtirish qaysi verifikatsiya turi?',
        options: ['Vizual tekshirish (Visual Check)', 'Double Entry', 'Type Check', 'Presence Check'],
        answer: 0,
        explanation: 'Visual Check — insonning o‘zi ko‘rib asl manba bilan solishtirishi.',
      },
      {
        prompt: 'Ikkala usul ham (Validatsiya ham, Verifikatsiya ham) nima uchun birga qo‘llanadi?',
        options: ['Ham mantiqan to‘g‘ri formatni, ham asl manba bilan bir xillikni taʼminlash uchun', 'Fayl hajmini kichraytirish uchun', 'Faqat dizayn uchun', 'Printer uchun'],
        answer: 0,
        explanation: 'Validatsiya mantiqsiz qiymatlarni, Verifikatsiya esa to‘g‘ri ko‘rinishdagi terish xatolarini tutadi.',
      },
      {
        prompt: 'Agar biror odam parolni ikkala katakka ham bir xil xato bilan (`qwert1` va `qwert1`) kiritsa, Double Entry xatoni tutadimi?',
        options: ['Yo‘q, chunki ikkala kiritish o‘zaro mos keladi', 'Ha, albatta tutadi', 'Parol o‘chib ketadi', 'Rang o‘zgaradi'],
        answer: 0,
        explanation: 'Double Entry ikki kiritishning bir-biriga mosligini tekshiradi — shuning uchun Vizual tekshirish ham foydalidir.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda "Qog‘ozda 1995 yozilgan, ekranda 1959 kiritilgan" misoli bilan Validatsiya vs Verifikatsiyani mustahkamlash.',
      timing: 'Farq tahlili 15 daq, Double entry & Visual 15 daq, Sort va quiz 15 daq.',
      assessment: 'Validatsiya va Verifikatsiya misollarini 100% to‘g‘ri ajratish.',
      homework: 'Onlayn ro‘yxatdan o‘tish shaklida ishlatiladigan 2 ta Validatsiya va 2 ta Verifikatsiya misolini yozing.',
    },
  },
  {
    id: 'g9-l49',
    grade: 9,
    no: 49,
    part: '3-chorak',
    title: 'Grafik yoki diagramma yaratish. Diagramma turlari',
    kind: 'dars',
    hours: 1,
    tools: ['Excel / Calc', 'Bar / Column', 'Pie Chart', 'Line Chart'],
    objectives: [
      'O‘quvchi ma’lumot turiga qarab eng mos diagramma turini — Ustunli (Bar/Column), Chiziqli (Line) va Doiraviy (Pie) diagrammalarni tanlaydi.',
      'O‘quvchi elektron jadvalda qo‘shni yoki qo‘shni bo‘lmagan (Ctrl bosib) ustunlardan diagramma yaratishni biladi.',
    ],
    intro:
      'Juzlab raqamlar yozilgan jadvalni o‘qishdan ko‘ra bitta chiroyli diagrammaga qarash 10 baravar tushunarliroq! Ammo har bir ma’lumot uchun to‘g‘ri diagramma turini tanlash muhim.',
    sections: [
      {
        heading: 'Diagramma turlari va qachon qaysi biri ishlatiladi?',
        body: '1) Ustunli (Column / Bar chart): turli toifalar yoki guruhlarni taqqoslash uchun (masalan, 9-A, 9-B, 9-V sinflar ballari). 2) Chiziqli (Line chart): vaqt davomidagi o‘zgarish va tendensiyani ko‘rsatish uchun (masalan, 12 oy davomida harorat yoki daromad o‘sishi). 3) Doiraviy (Pie chart): butunning qismlari/foiz ulushini ko‘rsatish uchun (masalan, oylik byudjetda oziq-ovqat 45%, transport 20%, kitob 35%).',
        example: '5 yil davomida maktab o‘quvchilari sonining o‘sishini Pie chartda ko‘rsatib bo‘lmaydi — buning uchun Line (chiziqli) yoki Column chart kerak!',
        tip: 'Qo‘shni bo‘lmagan ustunlarni (masalan, `A` ustundagi ism va `D` ustundagi yakuniy balni) diagramma qilishda `Ctrl` tugmasini bosib turib belgilang!',
      },
      {
        heading: 'Diagrammaning majburiy elementlari',
        body: 'Har bir professional diagrammada 4 ta unsur bo‘lishi shart: 1) Tushunarli Sarlavha (Chart Title); 2) X va Y o‘qlari nomlari va o‘lchov birliklari (`Oylar`, `Harorat °C`); 3) Afsona/Izoh (Legend — qaysi rang nimani bildirishi, agar faqat 1 qator bo‘lsa shart emas); 4) Zarur hollarda qiymat belgilari (Data Labels / foizlar).',
        example: 'O‘lchov birligi (`so‘m` yoki `kg`) yozilmagan Y o‘qi o‘quvchini chalg‘itadi!',
      },
    ],
    keyTerms: [
      { term: 'Column / Bar Chart', definition: 'Alohida toifalar miqdorini ustunlar uzunligi orqali taqqoslovchi diagramma.' },
      { term: 'Line Chart', definition: 'Vaqt davomidagi uzluksiz o‘zgarish va dinamikani ko‘rsatuvchi grafik.' },
      { term: 'Pie Chart', definition: 'Butun miqdorning tarkibiy qismlari va foiz ulushini ko‘rsatuvchi doiraviy diagramma.' },
      { term: 'Legend & Axis Title', definition: 'Rangli seriyalar izohi hamda X/Y o‘qlarining mazmuniy nomi.' },
    ],
    steps: [
      '1. Ma’lumot jadvalini (masalan, 4 chorak bo‘yicha o‘rtacha ball) tayyorlang.',
      '2. ChartLab laboratoriyasida ma’lumot turiga mos diagrammani va to‘g‘ri o‘q nomlarini tanlang.',
      '3. Excel/Calc da qo‘shni bo‘lmagan ustunlarni `Ctrl` bilan tanlab Column chart yasang.',
    ],
    practice: [
      {
        task: 'O‘zbekistondagi energiya manbalari ulushi (Gaz 75%, Gidro 15%, Quyosh/Shamol 10%) uchun qaysi diagramma eng mos?',
        expected: 'Doiraviy diagramma (Pie Chart) — chunki u 100% butunning tarkibiy ulushlarini yaqqol ko‘rsatadi.',
        difficulty: 'oson',
      },
      {
        task: 'Yanvardan dekabrgacha harorat o‘zgarishini ko‘rsatishda nima uchun Pie chart emas, Line chart ishlatiladi?',
        expected: 'Chunki vaqt bo‘yicha o‘sish-pasayish tendensiyasini Pie chart ko‘rsata olmaydi; Line chart chiziq qiyaligi orqali dinamikani yaqqol beradi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l49-g1',
        num: '01',
        title: 'ChartLab: Mos diagrammani qur',
        topic: 'Diagramma turlari va o‘qlari',
        difficulty: 'O‘rta',
        engine: 'chartlab',
        config: {
          prompt: 'Maktab elektr sarfining oylar bo‘yicha o‘zgarishini (vaqt dinamikasini) ko‘rsatish uchun mos diagramma turi, o‘qlar va sarlavhani tanlang!',
          datasetTitle: 'Oylar bo‘yicha elektr sarfi (kVt·soat)',
          data: [
            { label: 'Yanvar', value: 420 },
            { label: 'Fevral', value: 380 },
            { label: 'Mart', value: 310 },
            { label: 'Aprel', value: 260 },
          ],
          correctType: 'line',
          xAxisOptions: ['Oylar', 'Elektr sarfi (kVt·soat)', 'Xonalar soni'],
          correctXAxis: 'Oylar',
          yAxisOptions: ['Elektr sarfi (kVt·soat)', 'Oylar', 'Talabalar'],
          correctYAxis: 'Elektr sarfi (kVt·soat)',
          titleOptions: [
            'Maktabning oylar bo‘yicha elektr sarfi dinamikasi',
            'O‘quvchilarning fanlar bo‘yicha ulushi',
            'Sinfxonalar ro‘yxati',
          ],
          correctTitle: 'Maktabning oylar bo‘yicha elektr sarfi dinamikasi',
          explanation: 'Vaqt bo‘yicha o‘zgarishni (Yanvar→Aprel) ko‘rsatish uchun Line chart eng mos; X o‘qida Oylar, Y o‘qida kVt·soat qiymati turadi.',
        },
      },
    ],
    quiz: [
      {
        prompt: '100% li oilaviy byudjetning qaysi qismi oziq-ovqat, transport va kiyimga ketishini ko‘rsatish uchun eng mos diagramma qaysi?',
        options: ['Pie Chart (Doiraviy)', 'Line Chart', 'Scatter Plot', 'Gantt Chart'],
        answer: 0,
        explanation: 'Pie chart butunning tarkibiy qismlari va foiz ulushini ko‘rsatishga ixtisoslashgan.',
      },
      {
        prompt: '12 oy davomida kompaniya foydasining o‘sish yoki pasayish tendensiyasini ko‘rsatish uchun qaysi diagramma tanlanadi?',
        options: ['Line Chart (Chiziqli)', 'Pie Chart', '3D Donut', 'WordArt'],
        answer: 0,
        explanation: 'Vaqt qatorlari (time series) va tendensiya uchun Line chart eng tushunarli.',
      },
      {
        prompt: 'Elektron jadvalda yonma-yon turmagan `A` va `D` ustunlardan diagramma yaratishda qaysi tugma bosib turiladi?',
        options: ['Ctrl (macOS da Cmd)', 'Shift + Space', 'Caps Lock', 'Tab'],
        answer: 0,
        explanation: 'Ctrl tugmasi qo‘shni bo‘lmagan ustun va diapazonlarni birga belgilash imkonini beradi.',
      },
      {
        prompt: 'Diagrammadagi rangli ustunlar yoki bo‘laklar nimani anglatishini tushuntiruvchi qism nima deyiladi?',
        options: ['Legend (Afsona)', 'Footer', 'Margin', 'Axis Scale'],
        answer: 0,
        explanation: 'Legend har bir rangli seriyaning nomini ko‘rsatadi.',
      },
      {
        prompt: '4 ta sinfning matematika bo‘yicha o‘rtacha ballarini solishtirish uchun eng qulay diagramma qaysi?',
        options: ['Column / Bar Chart (Ustunli)', 'Pie Chart', 'Stock Chart', 'Radar'],
        answer: 0,
        explanation: 'Toifalar o‘rtasidagi qiymat farqini solishtirishda ustunlar uzunligi eng aniq ko‘rinadi.',
      },
    ],
    teacherNotes: {
      method: 'ChartLab da bar/line/pie farqini ko‘rsatish va Excel/Calc da `Ctrl` bilan ustun tanlashni mashq qilish.',
      timing: '3 tur diagramma 15 daq, Elementlar va Ctrl 15 daq, ChartLab va quiz 15 daq.',
      assessment: 'ChartLab vazifasini xatosiz sozlash.',
      homework: 'Sinfdagi 5 ta fan bo‘yicha baholaringizni Ustunli diagrammada chizib keling.',
    },
  },
  {
    id: 'g9-l50',
    grade: 9,
    no: 50,
    part: '3-chorak',
    title: 'Tayyorlangan diagrammani boshqarish va o‘zgartirish',
    kind: 'dars',
    hours: 1,
    tools: ['Excel / Calc Charts', 'Axis Scale (Min/Max)', 'Data Labels', 'Secondary Axis'],
    objectives: [
      'O‘quvchi tayyor diagrammani tahrirlashni — sarlavha, o‘q shkalasi (Min/Max/Step), Data Labels va ranglarni o‘zgartirishni biladi.',
      'O‘quvchi o‘lchov birligi har xil ikkita ko‘rsatkichni (masalan, Sotilgan soni va Harorat/Foiz) bitta grafikda ko‘rsatish uchun Ikkilamchi o‘q (Secondary Axis) dan foydalanadi.',
    ],
    intro:
      'Diagrammani yaratish — ishning yarmi. Uni o‘qish oson va chiroyli qilish uchun o‘qlarning minimal/maksimal chegaralarini sozlash, raqamlarni ustiga chiqarish (Data Labels) va baʼzan ikkinchi Y o‘qi (Secondary Axis) qo‘shish kerak bo‘ladi.',
    sections: [
      {
        heading: 'O‘q shkalalari (Axis Scale), Data Labels va Legend',
        body: 'Avtomatik yaratilgan diagrammada Y o‘qi 0 dan 100 gacha chiqsa-yu, barcha qiymatlar 75..95 atrofida bo‘lsa, ustunlar orasidagi farq deyarli ko‘rinmay qolishi mumkin (yoki aksincha, min=70 qilib boshlash farqni bo‘rttiradi — buning uchun halol vizualizatsiya muhim!). `Format Axis` orqali Minimum, Maximum va Major Unit (qadam) ni sozlash mumkin. `Data Labels` esa har bir ustun yoki Pie bo‘lagi ustiga aniq son/foizni yozib qo‘yadi.',
        example: 'Pie chartda `Percentage` Data Label yoqilsa, har bir bo‘lak necha foiz ekanini ko‘z bilan taxmin qilishga hojat qolmaydi.',
        tip: 'Y o‘qini 0 dan boshlamaslik grafiklarni chalg‘ituvchi (bo‘rttiruvchi) qilib qo‘yishi mumkin — zarurat bo‘lmasa 0 dan boshlang!',
      },
      {
        heading: 'Ikkilamchi o‘q (Secondary Axis) va Kombinatsiyalangan diagramma',
        body: 'Faraz qiling, siz bir grafikda oylar bo‘yicha "Sotilgan muzqaymoq soni (100..5000 dona)" va "O‘rtacha harorat (5..35 °C)" ni ko‘rsatmoqchisiz. Agar bitta Y o‘qi (0..5000) ishlatilsa, 5..35 °C chizig‘i yerda yopishib ko‘rinmay qoladi! Yechim: Harorat seriyasiga `Secondary Axis` (o‘ng tomondagi ikkinchi Y o‘qi) berib, uni Line chartga (Combo chart) aylantirish.',
        example: 'Chap Y o‘qi — Muzqaymoq soni (ustunlar), O‘ng Y o‘qi — Harorat °C (chiziq) — ikkalasi bitta grafikda mukammal ko‘rinadi!',
      },
    ],
    keyTerms: [
      { term: 'Data Labels', definition: 'Diagramma ustunlari yoki bo‘laklari ustida aniq son yoki foiz qiymatlarini ko‘rsatuvchi yorliqlar.' },
      { term: 'Axis Scale (Min/Max/Step)', definition: 'Diagramma o‘qlaridagi boshlang‘ich, yakuniy qiymat va bo‘linish qadami.' },
      { term: 'Secondary Axis (Ikkilamchi o‘q)', definition: 'O‘lchov birligi va shkalasi boshqa bo‘lgan ikkinchi ma’lumot qatori uchun o‘ng tomondagi qo‘shimcha Y o‘qi.' },
      { term: 'Gridlines', definition: 'Qiymatlarni ko‘z bilan aniq o‘qishga yordam beruvchi orqa to‘r chiziqlari.' },
    ],
    steps: [
      '1. Tayyor Column/Pie diagrammaga `Data Labels` qo‘shing.',
      '2. Y o‘qining `Maximum` va `Major Unit` qadamini o‘zgartirib ko‘ring.',
      '3. Turli shkalali 2 ta ustundan Combo Chart + `Secondary Axis` yarating.',
    ],
    practice: [
      {
        task: 'Bir grafikda "Yog‘ingarchilik (mm: 10..80)" va "Sayyohlar soni (1000..50000)" ni ko‘rsatsangiz, yog‘ingarchilik ustunlari umuman ko‘rinmay qoldi. Qanday tuzatasiz?',
        expected: 'Yog‘ingarchilik seriyasini `Secondary Axis` (ikkinchi Y o‘qi) ga o‘tkazib, Combo diagramma qilish orqali.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Pie chartdagi har bir sektor ichida uning nomi va foizi chiqishi uchun qaysi element yoqiladi?',
        expected: 'Data Labels (Category Name va Percentage parametrlari bilan).',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g9-l50-g1',
        num: '01',
        title: 'Diagramma sozlamalari mosligi',
        topic: 'Diagrammalarni tahrirlash',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Diagramma muammosi yoki vazifasini to‘g‘ri sozlama bilan juftlang.',
          pairs: [
            { left: 'Har xil shkalali 2 ta kattalikni bitta grafikda ko‘rsatish', right: 'Secondary Axis (Ikkilamchi Y o‘qi)' },
            { left: 'Har bir ustun tepasida aniq son qiymatini chiqarish', right: 'Data Labels' },
            { left: 'Y o‘qidagi 0..100 oraliqni 20 qadamli qilish', right: 'Format Axis (Major Unit = 20)' },
            { left: 'Orqa fondagi o‘qishni osonlashtiruvchi chiziqlar', right: 'Gridlines' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Turli o‘lchov birligi va keskin farqli qiymatlarga ega ikkita ma’lumot seriyasini (masalan, 0..30°C va 0..10000 dona) bitta diagrammada chizishda nima ishlatiladi?',
        options: ['Secondary Axis (Ikkilamchi o‘q)', 'Pie Chart', 'Crop', 'Legend o‘chirish'],
        answer: 0,
        explanation: 'Secondary Axis o‘ng tomonda ikkinchi mustaqil shkala yaratadi.',
      },
      {
        prompt: 'Pie chart sektorlari ustida ularning foiz qiymatlarini ko‘rsatish uchun qaysi parametr yoqiladi?',
        options: ['Data Labels (Percentage)', 'Gridlines', 'Secondary Axis', 'Watermark'],
        answer: 0,
        explanation: 'Data Labels bevosita grafik elementlari yonida son yoki foizni chiqaradi.',
      },
      {
        prompt: 'Y o‘qidagi raqamlar orasidagi bo‘linish qadamini (masalan, har 10 ta emas, har 25 ta) o‘zgartirish sozlamasi qaysi?',
        options: ['Major Unit (Format Axis)', 'Chart Title', 'Fill Color', 'Orientation'],
        answer: 0,
        explanation: 'Major Unit o‘q chiziqlarining asosiy qadamini belgilaydi.',
      },
      {
        prompt: 'Y o‘qini 0 dan emas, masalan 95 dan boshlash qachon o‘quvchini chalg‘itishi mumkin?',
        options: ['Kichkina farqni sunʼiy ravishda ulkan o‘zgarishdek ko‘rsatib yuborganda', 'Doim 0 dan boshlash taqiqlanganda', 'Pie chartda', 'Legend yoqilganda'],
        answer: 0,
        explanation: 'Kesilgan Y o‘qi 96 va 99 orasidagi kichik farqni 4 baravar katta qilib ko‘rsatishi mumkin.',
      },
      {
        prompt: 'Diagramma ustunlari qiymatini o‘qish osonlashishi uchun orqa fonga qo‘shiladigan ingichka chiziqlar nima deb ataladi?',
        options: ['Gridlines (To‘r chiziqlari)', 'Axis Titles', 'Trendline', 'Margins'],
        answer: 0,
        explanation: 'Gridlines ustun balandligini Y o‘qi qiymati bilan tez solishtirishga yordam beradi.',
      },
    ],
    teacherNotes: {
      method: 'Excel/Calc da "Harorat + Sotuv" jadvalidan jonli Secondary Axis Combo chart yasab ko‘rsatish.',
      timing: 'Axis/Data Labels 15 daq, Secondary Axis 15 daq, Match va quiz 15 daq.',
      assessment: 'Secondary Axis va Data Labels vazifasini aniq tushuntirish.',
      homework: 'Oylar bo‘yicha yog‘ingarchilik (mm) va quyoshli kunlar sonidan Secondary Axis li Combo diagramma tuzing.',
    },
  },
  {
    id: 'g9-l51',
    grade: 9,
    no: 51,
    part: '3-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Bilim sinovi', 'Stil, Validatsiya va Diagramma'],
    objectives: [
      'O‘quvchi 43–50-darslar (Korporativ stil, Slide Master, Yangi stil/TOC, Spell check/Proofreading, Validatsiya vs Verifikatsiya, Diagramma yaratish va boshqarish) bo‘yicha bilimlarini sinaydi.',
      'O‘quvchi 3-chorakning ikkinchi yarmi bo‘yicha nazorat savol va topshiriqlarini bajaradi.',
    ],
    intro:
      'Ushbu nazorat ishi darsida korporativ brend stili, Slide Master va avtomatik mundarija, xatolarni tekshirish usullari, validatsiya/verifikatsiya farqi hamda diagrammalarni sozlash bo‘yicha bilimlaringiz tekshiriladi.',
    sections: [
      {
        heading: 'Nazorat oldi asosiy takrorlash',
        body: 'Eslab qoling: House Style (brend birligi) → Slide Master (slaydlar qolipi) → Heading 1/2 (Avtomatik mundarija); Spell check ≠ Proofreading; Validatsiya (Range, Length, Type, Presence, Format, Lookup, Check Digit) vs Verifikatsiya (Double entry, Visual); Bar/Line/Pie/Combo + Secondary Axis.',
        example: 'Savolda "Ikki xil o‘lchov birligi bitta grafikda" deyilsa — Secondary Axis; "Parolni 2 marta kiritish" — Double Entry Verifikatsiya.',
        tip: 'True/False o‘yinidagi har bir nozik tafsilotni tekshirib chiqing.',
      },
    ],
    keyTerms: [
      { term: 'Slide Master & Styles', definition: 'Slayd va hujjatlarda avtomatik izchillik hamda mundarija yaratish vositasi.' },
      { term: 'Validatsiya vs Verifikatsiya', definition: 'Qoida tekshiruvi (kompyuter) va asl manbaga moslik tekshiruvi (manba bilan solishtirish).' },
      { term: 'Check Digit', definition: 'Karta yoki ISBN raqamidagi xatoni ushlaydigan oxirgi nazorat raqami.' },
      { term: 'Secondary Axis', definition: 'Turli shkalali ikkita seriyani bitta diagrammada ko‘rsatuvchi qo‘shimcha Y o‘qi.' },
    ],
    steps: [
      '1. True/False nazorat o‘yinida 4 ta asosiy tushunchani baholang.',
      '2. Amaliy topshiriqlarni bajaring.',
      '3. Yakuniy 5 ta test savolini ishlang.',
    ],
    practice: [
      {
        task: 'Maktab onlayn olimpiada formasida: 1) Ism bo‘sh qolmasligi, 2) Yosh `14..17`, 3) Parol tasdiqlanishi kerak. Har biriga tekshiruv nomini yozing.',
        expected: '1) Presence Check; 2) Range Check; 3) Double Entry Verifikatsiya.',
        difficulty: 'oson',
      },
      {
        task: 'Hujjatdagi 10 ta bob sarlavhasi uchun nima uchun oddiy Bold o‘rniga `Heading 1` stili ishlatilishi kerak? 2 sabab yozing.',
        expected: '1) Avtomatik mundarija (TOC) tuzish uchun; 2) Stilni tahrirlaganda barcha 10 ta sarlavha bir vaqtda o‘zgarishi uchun.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l51-g1',
        num: '01',
        title: '3-chorak nazorat sinovi',
        topic: 'Stil, Validatsiya va Diagramma',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Quyidagi fikrlarning To‘g‘ri yoki Noto‘g‘ri ekanini aniqlang.',
          statements: [
            {
              text: 'Avtomatik Spell Check matndagi barcha maʼnoviy xatolarni (masalan, "bir" o‘rniga "bor") topa oladi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Ikkala so‘z ham lug‘atda bo‘lgani uchun Spell Check ularni o‘tkazib yuboradi — Proofreading shart.',
            },
            {
              text: 'Slide Master barcha slaydlarda logotip va shrift izchilligini bir joydan boshqarish imkonini beradi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Master slayd barcha slaydlar uchun asosiy qolipdir.',
            },
            {
              text: 'Vaqt davomida o‘zgarish tendensiyasini ko‘rsatish uchun Pie Chart eng yaxshi tanlovdir.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Vaqt tendensiyasi uchun Line Chart ishlatiladi, Pie Chart esa ulushlar (foizlar) uchun.',
            },
            {
              text: 'Check Digit bank kartasi yoki shtrix-kod raqamlarini terishdagi ko‘plab xatolarni avtomatik tutadi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Oxirgi nazorat raqami matematik formula bilan tekshiriladi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Kompaniyaning barcha xatlari va taqdimotlarida bir xil rang, logotip va shrift ishlatilishi nima deb ataladi?',
        options: ['Korporativ stil (Corporate House Style)', 'Pharming', 'Phased joriy qilish', 'Line spacing'],
        answer: 0,
        explanation: 'Corporate House Style barcha materiallarda yagona vizual brendni saqlaydi.',
      },
      {
        prompt: 'Avtomatik mundarija (Table of Contents) hosil qilish uchun sarlavhalarga qaysi stil berilishi kerak?',
        options: ['Heading 1 / Heading 2', 'Body text', 'Header', 'Watermark'],
        answer: 0,
        explanation: 'TOC faqat Heading darajali stillarni o‘qib sahifa raqami bilan jamlaydi.',
      },
      {
        prompt: 'Qaysi tekshirish usuli ma’lumotning asl qog‘oz hujjat bilan bir xilligini tasdiqlaydi?',
        options: ['Verifikatsiya (Double entry / Visual check)', 'Range check', 'Length check', 'Presence check'],
        answer: 0,
        explanation: 'Verifikatsiya asl manbadan to‘g‘ri ko‘chirilganini tekshiradi.',
      },
      {
        prompt: 'O‘lchov birligi va shkalasi keskin farq qiladigan 2 ta ma’lumotni bitta grafikda ko‘rsatish uchun nima qo‘shiladi?',
        options: ['Secondary Axis (Ikkilamchi o‘q)', 'Pie Chart', 'Spell Check', 'Margins'],
        answer: 0,
        explanation: 'Secondary Axis ikkinchi seriyaga o‘ng tomonda mustaqil Y shkalasini beradi.',
      },
      {
        prompt: 'Proyektor ekranida taqdimot matni uzoqdan aniq o‘qilishi uchun qaysi turdagi shrift tavsiya etiladi?',
        options: ['Sans-serif (Arial, Calibri)', 'Mayda Serif (8pt)', 'Qo‘lyozma (Cursive)', 'Symbol'],
        answer: 0,
        explanation: 'Kertiksiz Sans-serif shriftlar ekranda va uzoq masofada juda aniq ko‘rinadi.',
      },
    ],
    teacherNotes: {
      method: 'Choraklik yakuniy nazorat ishi — test va amaliy tahlil savollari.',
      timing: 'Kirish 5 daq, Nazorat ishi 35 daq, Yakuniy tahlil 5 daq.',
      assessment: 'Validatsiya/Verifikatsiya, Stillar va Diagramma ko‘nikmalarini baholash.',
      homework: 'Keyingi dars (Takrorlash) uchun chorak davomida qiyin tuyulgan 2 mavzuni belgilab keling.',
    },
  },
  {
    id: 'g9-l52',
    grade: 9,
    no: 52,
    part: '3-chorak',
    title: 'Takrorlash',
    kind: 'takrorlash',
    hours: 1,
    tools: ['Umumiy takrorlash', 'Fayl / Grafika / Hujjat / Validatsiya'],
    objectives: [
      'O‘quvchi 3-chorakning barcha mavzularini — fayl formatlari, tasvir tahriri, hujjat maketi, korporativ stil, validatsiya va diagrammalarni yaxlit tizimga keltiradi.',
      'O‘quvchi keng qamrovli amaliy topshiriqda barcha ko‘nikmalarni birgalikda qo‘llaydi.',
    ],
    intro:
      '3-chorak juda boy bo‘ldi: siz fayllarni siqishdan tortib fotosurat tahriri, brend stillari, avtomatik mundarija, validatsiya hamda murakkab diagrammalargacha o‘rgandingiz. Keling, hammasini bitta yaxlit ko‘prikda takrorlaymiz!',
    sections: [
      {
        heading: '3-chorak bilimlar xaritasi',
        body: '1) Fayllar: `.csv`, `.pdf`, `.png`, `.svg` va Lossless (`ZIP`) vs Lossy (`JPG`). 2) Grafika: Qatlamlar, Aspect Ratio (`16:9`, `4:3`), Crop, Rotate, Flip, Brightness/Contrast/Sharpness. 3) Hujjat va Taqdimot: Orientation/Margins, Page vs Section Break, Group/Z-order, Header/Footer (`Page X of Y`, `Different First Page`), House Style, Slide Master, `Heading` stillari + TOC. 4) Sifat va Grafiklar: Proofreading, 7 ta Validatsiya, Double Entry Verifikatsiya va Column/Line/Pie + Secondary Axis.',
        example: 'Bitta maktab jurnali loyihasida: rasmlar PNG/JPG siqilgan, matn Heading stilli va 2 ustunli, pastda Page X of Y Footer, ichida esa Excel dan Pie/Column diagramma bo‘ladi!',
        tip: 'Keyingi 4-chorakda siz Excel modellashtirish, Access ma’lumotlar bazasi, Mail Merge va HTML/CSS veb-sayt yaratishga o‘tasiz!',
      },
    ],
    keyTerms: [
      { term: 'Integratsiyalashgan hujjat', definition: 'Matn, rasm, jadval, diagramma va stillarni yagona brend uslubida birlashtirgan hujjat.' },
      { term: 'Lossless & Optimization', definition: 'Ma’lumotni yo‘qotmasdan ZIP qilish yoki veb/bosma uchun rasm o‘lchamini moslash.' },
      { term: 'Validatsiya + Verifikatsiya', definition: 'Ma’lumot sifatini ikki tomonlama himoyalovchi nazorat juftligi.' },
      { term: 'Data Visualization', definition: 'Raqamlarni Column, Line, Pie va Combo diagrammalar orqali tushunarli tasvirlash.' },
    ],
    steps: [
      '1. Flashcards orqali 3-chorakning eng muhim atamalarini yoddan takrorlang.',
      '2. Chorak davomidagi amaliy ishlardan eng yaxshi namunalarni portfoliosiga jamlang.',
      '3. 5 ta yakuniy takrorlash savolini yeching.',
    ],
    practice: [
      {
        task: 'Tasavvur qiling: maktab yillik hisobotini tayyorlayapsiz. Rasm sifatini, sahifa maketini, xatolarni va diagrammalarni tekshirish uchun 4 bandli nazorat ro‘yxati (Checklist) tuzing.',
        expected: '1) Rasmlar to‘g‘ri nisbatda va mos ruxsatda; 2) Section Break, Heading stillari va Page X of Y sozlangan; 3) Spell Check + Proofreading o‘tgan; 4) Diagrammalarda Sarlavha, O‘qlar va Data Labels bor.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Hujjatdan ma’lumot almashish uchun universal `.csv` va o‘zgarmas ko‘rinish uchun `.pdf` formatlarining vazifasini eslang.',
        expected: 'CSV — jadval ma’lumotlarini dasturlararo uzatish; PDF — sahifa maketi va shriftlarni o‘zgarmas holda tarqatish.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g9-l52-g1',
        num: '01',
        title: '3-chorak oltin kartochkalari',
        topic: 'Choraklik takrorlash',
        difficulty: 'Oson',
        engine: 'flashcards',
        config: {
          prompt: '3-chorakning asosiy atamalarini takrorlang va bilimingizni mustahkamlang.',
          cards: [
            { term: 'Aspect Ratio', definition: 'Tasvir eni va bo‘yi nisbati; buzilmasligi uchun burchakdan o‘zgartiriladi.', example: '16:9 yoki 4:3' },
            { term: 'Section Break', definition: 'Bitta hujjatda alohida Landscape sahifa yoki boshqa Header qo‘yish imkoniyati.', example: '3-betni albom qilish' },
            { term: 'Check Digit', definition: 'Raqamlar terish xatosini tutuvchi oxirgi nazorat raqami.', example: 'Bank kartasi va ISBN' },
            { term: 'Secondary Axis', definition: 'Ikkita har xil shkalali seriyani bitta diagrammada chizish uchun o‘ng Y o‘qi.', example: 'Harorat (°C) va Sotuv (dona)' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Tasvirning buzilib (cho‘zilib) qolmasligi uchun qaysi qoidaga amal qilinadi?',
        options: ['Aspect Ratio ni qulflash va burchak markeridan tortish', 'Faqat ustki markeridan tortish', 'Watermark qo‘yish', 'Flip Vertical qilish'],
        answer: 0,
        explanation: 'Burchakdan tortish kenglik va balandlikni bir xil nisbatda o‘zgartiradi.',
      },
      {
        prompt: 'Bitta Word hujjati ichida faqat 5-sahifani gorizontal (Landscape) qilish uchun nima qo‘yiladi?',
        options: ['Section Break', 'Oddiy Enter', 'Margin 0', 'Caption'],
        answer: 0,
        explanation: 'Section Break sahifa sozlamalarini bo‘limlarga ajratadi.',
      },
      {
        prompt: 'Foydalanuvchi parolini ro‘yxatdan o‘tishda ikki marta kiritishi qaysi nazorat turiga kiradi?',
        options: ['Verifikatsiya (Double Entry)', 'Range Check', 'Lookup Check', 'Check Digit'],
        answer: 0,
        explanation: 'Ikki marta kiritish ma’lumotning asl niyat bilan bir xilligini tekshiruvchi Verifikatsiya usulidir.',
      },
      {
        prompt: 'Oylik xarajatlarda har bir kategoriyaning necha foizni tashkil etishini ko‘rsatish uchun qaysi diagramma eng qulay?',
        options: ['Pie Chart (Doiraviy)', 'Line Chart', 'Gantt Chart', 'DFD'],
        answer: 0,
        explanation: 'Doiraviy diagramma ulushlar va foizlarni ko‘rsatishda eng samarali.',
      },
      {
        prompt: 'Word da Avtomatik mundarija (TOC) tuzishdan oldin barcha bob sarlavhalariga nima qo‘llanadi?',
        options: ['Heading 1 / Heading 2 stillari', 'Qizil shrift', 'Footer', 'Crop'],
        answer: 0,
        explanation: 'TOC Heading stillari bo‘yicha bo‘limlarni avtomatik yig‘adi.',
      },
    ],
    teacherNotes: {
      method: 'Jamoaviy "Breyn-ring" savol-javob o‘yini va portfolioni ko‘zdan kechirish.',
      timing: 'Takrorlash xaritasi 15 daq, Flashcards va munozara 15 daq, Test va xulosa 15 daq.',
      assessment: '3-chorak barcha mavzulari bo‘yicha barqaror bilim namoyishi.',
      homework: '4-chorakka tayyorgarlik sifatida Excel va HTML haqida boshlang‘ich bilimlarni eslab keling.',
    },
  },
];
