import type { Lesson } from './types';

export const GRADE_9_Q4B: Lesson[] = [
  {
    id: 'g9-l61',
    grade: 9,
    no: 61,
    part: '4-chorak',
    title: 'Formula va funksiyalar hamda ulardan foydalanish',
    kind: 'dars',
    hours: 1,
    tools: ['Excel / Calc', 'SheetLab', 'SUM / AVERAGE / MIN / MAX / COUNT / IF / VLOOKUP'],
    objectives: [
      'O‘quvchi formula (`=A1+B1`) va tayyor funksiya (`=SUM(A1:A10)`) farqini hamda ularning `=` belgisidan boshlanishini biladi.',
      'O‘quvchi asosiy statistik (`SUM`, `AVERAGE`, `MIN`, `MAX`, `COUNT`, `COUNTA`), shartli (`IF`, `COUNTIF`, `SUMIF`) va qidirish (`VLOOKUP`) funksiyalarini amalda qo‘llaydi.',
    ],
    intro:
      'Elektron jadvalning haqiqiy kuchi — funksiyalardadir! Minglab kataklarni qo‘lda qo‘shish o‘rniga `=SUM()`, eng katta balni topish uchun `=MAX()`, o‘tish-o‘tmaslikni tekshirish uchun esa `=IF()` bir soniyada javob chiqaradi.',
    sections: [
      {
        heading: 'Asosiy statistik va mantiqiy funksiyalar',
        body: 'Har bir formula `=` belgisi bilan boshlanadi! Asosiy funksiyalar: `=SUM(A1:A5)` (yig‘indi), `=AVERAGE(A1:A5)` (o‘rtacha arifmetik), `=MAX(A1:A5)` (eng katta), `=MIN(A1:A5)` (eng kichik), `=COUNT(A1:A5)` (faqat sonli kataklar soni), `=COUNTA(A1:A5)` (bo‘sh bo‘lmagan barcha kataklar soni). Shartli funksiya `=IF(A2>=60, "O‘tdi", "O‘tmadi")` — mantiqiy shart rost bo‘lsa 1-natijani, yolg‘on bo‘lsa 2-natijani qaytaradi.',
        example: '`=COUNTIF(B2:B30, "9-A")` sinfdagi 9-A o‘quvchilarini sanaydi; `=SUMIF(B2:B30, "9-A", C2:C30)` esa faqat 9-A ning ballari yig‘indisini beradi.',
        tip: 'Diapazonni `A1+A2+A3+A4` emas, doim `=SUM(A1:A4)` ko‘rinishida yozing — oraga yangi qator qo‘shilsa ham avtomatik hisobga olinadi!',
      },
      {
        heading: 'Qidiruv funksiyasi: VLOOKUP va Ichma-ich IF',
        body: '`VLOOKUP(izlanayotgan_qiymat, jadval_diapazoni, ustun_raqami, FALSE)` jadvalning birinchi ustunidan kod yoki ID ni topib, o‘ngdagi kerakli ustundan ma’lumot (masalan, tovar nomi yoki narxini) olib keladi. Oxirgi `FALSE` (yoki `0`) — aniq moslikni (`Exact match`) bildiradi. Murakkab baholashda (`>=90` Aʼlo, `>=70` Yaxshi, aks holda Qoniqarli) ichma-ich `IF` (Nested IF) ishlatiladi.',
        example: '`=VLOOKUP(A2, $E$2:$G$20, 2, FALSE)` kassa kodi (`A2`) bo‘yicha narx jadvalidan mahsulot nomini (2-ustundan) avtomatik chiqarib beradi.',
      },
    ],
    keyTerms: [
      { term: 'SUM / AVERAGE / MIN / MAX', definition: 'Diapazonning yig‘indisi, o‘rtacha qiymati, minimumi va maksimumini topuvchi funksiyalar.' },
      { term: 'COUNT vs COUNTA', definition: 'COUNT faqat raqamli kataklarni, COUNTA matnli va raqamli barcha to‘ldirilgan kataklarni sanaydi.' },
      { term: 'IF funksiyasi', definition: 'Mantiqiy shart natijasiga qarab ikki qiymatdan birini tanlovchi shartli funksiya.' },
      { term: 'VLOOKUP', definition: 'Jadvalning chap ustunidan qiymat izlab, mos qatordagi boshqa ustun ma’lumotini qaytaruvchi funksiya.' },
    ],
    steps: [
      '1. Ballar ustuniga `=SUM()`, `=AVERAGE()`, `=MAX()` va `=MIN()` qo‘llang.',
      '2. `=IF(B2>=56, "O‘tdi", "Qoldi")` shartli natija ustuni yarating.',
      '3. Quyidagi SheetLab da `SUM` funksiyasi bilan jami ballni hisoblang!',
    ],
    practice: [
      {
        task: '`A1:A4` kataklarda `10`, `"Salom"`, `20`, `(bo‘sh)` bor. `=COUNT(A1:A4)` va `=COUNTA(A1:A4)` qanday natija qaytaradi?',
        expected: '`COUNT` = `2` (faqat `10` va `20` sonlar); `COUNTA` = `3` (bo‘sh bo‘lmagan 3 ta katak).',
        difficulty: 'o‘rta',
      },
      {
        task: 'O‘quvchi bali `C2` da berilgan. Agar `C2 >= 86` bo‘lsa "5 baho", aks holda "4 baho" chiqaruvchi IF formulasini yozing.',
        expected: '`=IF(C2>=86, "5 baho", "4 baho")`.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g9-l61-g1',
        num: '01',
        title: 'SheetLab: Chorak ballarini jamlash',
        topic: 'Excel funksiyalari',
        difficulty: 'Oson',
        engine: 'sheetlab',
        config: {
          prompt: 'A1, A2, A3 kataklardagi o‘quvchilar ballarini (`24`, `26`, `30`) SUM funksiyasi yordamida A4 katakda jamlang!',
          rows: 4,
          cols: 2,
          initialCells: {
            A1: '24',
            A2: '26',
            A3: '30',
            A4: '',
            B1: '1-chorak',
            B2: '2-chorak',
            B3: '3-chorak',
            B4: 'Jami:',
          },
          targetCell: 'A4',
          expectedValue: 80,
          requiredFormulaTokens: ['SUM', 'A1:A3'],
          hint: 'A4 katakka `=SUM(A1:A3)` yozing.',
          explanation: '`=SUM(A1:A3)` 24 + 26 + 30 = 80 yig‘indini avtomatik hisoblaydi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Elektron jadvalda har qanday formula yoki funksiya qaysi belgi bilan boshlanishi shart?',
        options: ['=', '+', '$', '#'],
        answer: 0,
        explanation: 'Tenglik `=` belgisi katakdagi yozuv oddiy matn emas, hisoblanadigan formula ekanini bildiradi.',
      },
      {
        prompt: '`COUNT` va `COUNTA` funksiyalari o‘rtasidagi farq nimada?',
        options: ['COUNT faqat sonli kataklarni, COUNTA bo‘sh bo‘lmagan barcha (matn va son) kataklarni sanaydi', 'Farqi yo‘q', 'COUNT eng katta sonni topadi', 'COUNTA yig‘indini hisoblaydi'],
        answer: 0,
        explanation: 'COUNT matnni hisoblamaydi, COUNTA (Count All) bo‘sh bo‘lmagan har qanday qiymatni sanaydi.',
      },
      {
        prompt: '`=IF(D2>=60, "O‘tdi", "Qoldi")` formulasi `D2 = 55` bo‘lganda nimani chiqaradi?',
        options: ['Qoldi', 'O‘tdi', '55', '60'],
        answer: 0,
        explanation: '`55 >= 60` sharti yolg‘on (FALSE) bo‘lgani uchun ikkinchi variant ("Qoldi") tanlanadi.',
      },
      {
        prompt: 'Mahsulot kodiga qarab katta ma’lumotnomadan uning narxini topib beruvchi funksiya qaysi?',
        options: ['VLOOKUP', 'MIN', 'AVERAGE', 'ROUND'],
        answer: 0,
        explanation: 'VLOOKUP (Vertical Lookup) ustun bo‘ylab qidirib mos qator qiymatini oladi.',
      },
      {
        prompt: 'Diapazondagi `85, 90, 95` sonlarining o‘rtacha qiymatini (`90`) topish uchun qaysi funksiya yoziladi?',
        options: ['=AVERAGE(A1:A3)', '=SUM(A1:A3)', '=MAX(A1:A3)', '=COUNT(A1:A3)'],
        answer: 0,
        explanation: 'AVERAGE berilgan diapazonning o‘rta arifmetigini hisoblaydi.',
      },
    ],
    teacherNotes: {
      method: 'SheetLab va Excel/Calc da SUM, AVERAGE, IF, COUNTIF, VLOOKUP ni yagona baholar jadvalida qo‘llash.',
      timing: 'Statistik/IF 20 daq, VLOOKUP/COUNTIF 15 daq, SheetLab va quiz 10 daq.',
      assessment: 'SheetLab da SUM formulasini to‘g‘ri qo‘llash va COUNT/COUNTA farqini bilish.',
      homework: '5 ta tovar va ularning soni/narxi jadvalida SUM, AVERAGE, MAX va IF ("Chegirma bor/yo‘q") funksiyalarini yozing.',
    },
  },
  {
    id: 'g9-l62',
    grade: 9,
    no: 62,
    part: '4-chorak',
    title: 'Maʼlumotlar modelini sinovdan oʻtkazish. Maʼlumotlarni boshqarish',
    kind: 'dars',
    hours: 1,
    tools: ['Excel / Calc', 'What-If Analysis', 'Sorting & Filtering', 'Xatolar (#DIV/0!, #REF!)'],
    objectives: [
      'O‘quvchi elektron jadvaldagi ma’lumotlar modelini test ma’lumotlari bilan sinab, keng tarqalgan formula xatolarini (`#DIV/0!`, `#VALUE!`, `#NAME?`, `#REF!`, `###`) aniqlaydi va tuzatadi.',
      'O‘quvchi jadvaldagi ma’lumotlarni boshqarish — ko‘p bosqichli saralash (Sort) va shartli filtrlash (AutoFilter / Custom Filter) ni qo‘llaydi.',
    ],
    intro:
      'Model tuzilgach, u haqiqiy va kutilmagan qiymatlar bilan sinovdan o‘tkaziladi! Agar katakda `###` yoki `#DIV/0!` chiqib qolsa, bu dastur buzildi degani emas — har bir xato kodining aniq sababi va yechimi bor.',
    sections: [
      {
        heading: 'Modelni sinash va Excel xato kodlarini tushunish',
        body: 'Modelni sinashda Normal, Extreme (0 yoki katta sonlar) va kutilmagan qiymatlar kiritib, hisob-kitob qo‘l kalkulyatoriga mosligini tekshiring ("What-If" — "Agar narx 20% oshsa foyda qancha bo‘ladi?"). Asosiy xatolar: 1) `#####`: xato emas, shunchaki ustun kengligi sonni sig‘dirmayapti (ustunni kengaytiring!); 2) `#DIV/0!`: nolga yoki bo‘sh katakka bo‘lish (`=A1/0`); 3) `#NAME?`: funksiya nomi xato yozilgan (`=SUUM()` o‘rniga `=SUM()`); 4) `#VALUE!`: songa matn qo‘shilgan (`=A1+"salom"`); 5) `#REF!`: formula ishlatgan katak o‘chirib yuborilgan.',
        example: 'O‘rtacha ball hisoblayotganda o‘quvchilar soni `0` bo‘lib qolsa `#DIV/0!` chiqmasligi uchun `=IFERROR(A1/B1, 0)` qo‘yiladi.',
        tip: '`Ctrl + ~` (Tilda) tugmasini bossangiz, barcha natijalar o‘rniga kataklardagi haqiqiy FORMULALAR ko‘rinadi — tekshirish uchun eng qulay usul!',
      },
      {
        heading: 'Ma’lumotlarni boshqarish: Saralash (Sort) va Filtrlash (Filter)',
        body: 'Sort (Saralash) ma’lumotlarni A–Z, Z–A yoki kichikdan kattaga tartiblaydi. Muhim qoida: faqat bitta ustunni emas, BUTUN jadvalni (header bilan) belgilab saralang, aks holda ismlar boshqa odamning ballari bilan aralashib ketadi! AutoFilter esa faqat shartga mos qatorlarni (masalan, `Sinf = 9-A` va `Ball >= 80`) ekranda qoldirib, qolganini vaqtincha yashiradi.',
        example: 'Sinf ro‘yxatini avval "Sinf bo‘yicha (A–Z)", keyin "Ball bo‘yicha (Kattadan kichikka)" ko‘p darajali (Multi-level) saralash mumkin.',
      },
    ],
    keyTerms: [
      { term: '#DIV/0! va #NAME?', definition: 'Nolga bo‘lish xatosi hamda funksiya/diapazon nomini imloviy xato yozish xatosi.' },
      { term: '#### belgisi', definition: 'Ustun eni katakdagi son yoki sanani sig‘dirish uchun torlik qilayotgani.' },
      { term: 'What-If (Nima bo‘ladi, agar)', definition: 'Kirish parametrlarini o‘zgartirib model natijasi qanday o‘zgarishini sinab ko‘rish.' },
      { term: 'Sort & Filter', definition: 'Yozuvlarni tartiblash hamda berilgan mezonga mos qatorlarni vaqtincha ajratib ko‘rsatish.' },
    ],
    steps: [
      '1. Jadvalda `Ctrl + ~` (Show Formulas) ni bosib barcha formulalarni tekshiring.',
      '2. Modelga sinov qiymatlari (0, katta son) berib `#DIV/0!` chiqmasligini tekshiring.',
      '3. Jadvalni butunlay belgilab, ball bo‘yicha kamayish tartibida saralang va Filter bilan faqat `>= 75` larni ko‘rsating.',
    ],
    practice: [
      {
        task: 'Katakda `#####` belgisi ko‘rindi. Foydalanuvchi formulani qaytadan yozishi kerakmi?',
        expected: 'Yo‘q! Bu formula xatosi emas — ustun chegarasini ikki marta bosib ustunni biroz kengaytirish kifoya.',
        difficulty: 'oson',
      },
      {
        task: 'Jadvalda faqat "Ball" ustunini belgilab `Sort Z→A` bosish qanday jiddiy muammoga olib keladi?',
        expected: 'Ballar saralanadi, lekin yonidagi o‘quvchi ismlari joyida qolib, hammaning bali boshqaga o‘tib ketadi! Butun jadvalni tanlab saralash kerak.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l62-g1',
        num: '01',
        title: 'Excel xato kodlarini aniqla',
        topic: 'Modelni sinash va xatolar',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Elektron jadvallardagi xato belgisini uning asl sababi bilan juftlang.',
          pairs: [
            { left: '#####', right: 'Ustun eni son yoki sanani to‘liq ko‘rsatish uchun torlik qilmoqda' },
            { left: '#DIV/0!', right: 'Son nolga yoki bo‘sh katakka bo‘linmoqda' },
            { left: '#NAME?', right: 'Funksiya nomi noto‘g‘ri yozilgan (masalan, =SUUM)' },
            { left: '#VALUE!', right: 'Arifmetik formulada son o‘rniga matn ishlatilgan' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Katakda `=AVERGE(A1:A5)` yozilganda Excel qaysi xatoni chiqaradi?',
        options: ['#NAME?', '#DIV/0!', '#####', '#REF!'],
        answer: 0,
        explanation: '`AVERAGE` so‘zida harf tushib qolgani uchun dastur bu nomni tanimay `#NAME?` chiqaradi.',
      },
      {
        prompt: 'Barcha kataklardagi hisoblangan sonlar o‘rniga yozilgan FORMULALARNI bir vaqtda ko‘rish klaviatura tugmasi qaysi?',
        options: ['Ctrl + ~ (Tilda)', 'Ctrl + B', 'Ctrl + S', 'Alt + F4'],
        answer: 0,
        explanation: 'Ctrl + ~ (Show Formulas) nazorat va chop etish uchun formulalarni ko‘rsatadi.',
      },
      {
        prompt: 'Jadvaldagi boshqa ustunlarni buzmasdan ma’lumotlarni yuqori baldan pastga saralashning to‘g‘ri yo‘li qaysi?',
        options: ['Butun jadvalni (barcha ustunlarni) belgilab Sort qilish', 'Faqat ballar ustunini belgilab Sort qilish', 'Kataklarni qo‘lda ko‘chirish', 'Filter ni o‘chirish'],
        answer: 0,
        explanation: 'Butun jadval tanlanganda har bir qator o‘zining barcha ma’lumotlari bilan birga siljiydi.',
      },
      {
        prompt: 'Formula bog‘langan katak yoki ustun butunlay o‘chirib yuborilsa qanday xato chiqadi?',
        options: ['#REF!', '#DIV/0!', '#####', '#NAME?'],
        answer: 0,
        explanation: '`#REF!` (Reference error) mavjud bo‘lmagan katak manziliga murojaatni bildiradi.',
      },
      {
        prompt: 'Modelda "Mahsulot narxini 15% oshirsak foyda qancha o‘zgaradi?" degan sinov qanday ataladi?',
        options: ['What-If tahlili (Modellashtirish sinovi)', 'Mail Merge', 'Archiving', 'Defragmentatsiya'],
        answer: 0,
        explanation: 'Kirish parametrlarini o‘zgartirib oqibatni kuzatish What-If tahlilidir.',
      },
    ],
    teacherNotes: {
      method: 'Barcha 5 ta xato kodini (`####`, `#DIV/0!`, `#NAME?`, `#VALUE!`, `#REF!`) Excel/Calc da atayin keltirib chiqarib tuzatish.',
      timing: 'Xato kodlari va Ctrl+~ 20 daq, Sort/Filter 15 daq, Match va quiz 10 daq.',
      assessment: 'Xato kodlarini sababi bilan to‘g‘ri aniqlash.',
      homework: '5 ta Excel xatosining kelib chiqish misolini va tuzatish yo‘lini jadvalda yozib keling.',
    },
  },
  {
    id: 'g9-l63',
    grade: 9,
    no: 63,
    part: '4-chorak',
    title: 'Maʼlumotlarni taqdim etish',
    kind: 'dars',
    hours: 1,
    tools: ['Excel / Calc', 'Conditional Formatting', 'Print Area / Fit to 1 Page', 'Formula View'],
    objectives: [
      'O‘quvchi elektron jadvaldagi ma’lumotlarni o‘qishli taqdim etish uchun Shartli formatlash (`Conditional Formatting`), son formatlari (`Currency`, `%`, o‘nlik xonalar) va jadvallarni chop etishga tayyorlashni biladi.',
      'O‘quvchi chop etishda `Landscape`, `Fit Sheet on One Page`, `Gridlines` va `Row/Column Headings` ni boshqaradi.',
    ],
    intro:
      'Hisob-kitoblar to‘g‘ri bo‘lsa ham, raqamlar `.000000` ko‘rinishida yoki chop etilganda 1 ustun keyingi betga o‘tib ketsa, hisobot sifatsiz chiqadi. Bugun jadvalni taqdimot va bosma uchun ideal ko‘rinishga keltiramiz.',
    sections: [
      {
        heading: 'Son formatlari va Shartli formatlash (Conditional Formatting)',
        body: 'Raqamlarni maʼnosiga mos formatlang: pul uchun `Currency` (`12 500 so‘m` / `$10.00`), foiz uchun `Percentage` (`85%`), kasr uchun 2 xonagacha yaxlitlash (`0.00`). Shartli formatlash (Conditional Formatting) esa katak qiymatiga qarab rangni avtomatik o‘zgartiradi: masalan, `Ball < 56` bo‘lsa qizil fon, `>= 86` bo‘lsa yashil fon — katta jadvalda muammoli joylar darhol ko‘zga tashlanadi!',
        example: 'Ombor jadvalida zaxira `5` donadan kam qolsa, katak avtomatik qizil rangga kirib menejerga ogohlantirish beradi.',
        tip: 'Diqqat: Katak formatida 2 xonagacha ko‘rsatish (Format Cells → 2 decimals) asl sonni o‘zgartirmaydi; haqiqiy yaxlitlash uchun `=ROUND()` funksiyasi kerak!',
      },
      {
        heading: 'Chop etish (Print Setup) va Formula ko‘rinishi',
        body: 'Katta Excel jadvalini chop etishdan oldin `Print Preview` da tekshiring: 1) Keng jadvallar uchun `Landscape` tanlang; 2) Oxirgi 1 ta ustun keyingi sahifaga qirqilib ketmasligi uchun `Scaling → Fit All Columns on One Page` (yoki `Fit Sheet on One Page`) ni yoqing; 3) O‘quvchilar va ustozlar uchun jadval katak chiziqlarini (`Print Gridlines`) va Formula ko‘rinishi topshirilganda `Row and Column Headings` (A, B, C va 1, 2, 3) ni yoqib chop eting.',
        example: 'Imtihonlarda o‘quvchi o‘z ishini ham "Qiymatlar ko‘rinishida", ham "`Ctrl+~` Formula ko‘rinishida + Row/Col Headings" bilan PDF ga eksport qiladi.',
      },
    ],
    keyTerms: [
      { term: 'Conditional Formatting', definition: 'Katak qiymati belgilangan shartni bajarsa uning rangi va shriftini avtomatik o‘zgartirish.' },
      { term: 'Scaling (Fit to 1 Page)', definition: 'Keng jadvalni bo‘lib yubormasdan bitta sahifa eniga sig‘dirib chop etish sozlamasi.' },
      { term: 'Currency / Percentage', definition: 'Sonlarni valyuta belgisi yoki foiz shaklida o‘qishli ko‘rsatish formati.' },
      { term: 'Gridlines & Headings', definition: 'Chop etilganda katak chegaralari hamda A, B, C / 1, 2, 3 koordinatalarining chiqishi.' },
    ],
    steps: [
      '1. Baholar ustuniga `Conditional Formatting` qo‘llang (`>=86` yashil, `<56` qizil).',
      '2. Narxlar ustunini `Currency` (2 o‘nlik xona) formatiga o‘tkazing.',
      '3. Page Layout da `Landscape`, `Gridlines (Print)` va `Fit All Columns on One Page` ni sozlab PDF ga saqlang.',
    ],
    practice: [
      {
        task: '10 ustunli Excel jadvalini chop etmoqchisiz, lekin 10-ustun 2-betga chiqib ketyapti. Jadvalni qisqartirmay 1 bet kenglikka qanday sig‘dirasiz?',
        expected: 'Page Layout / Print sozlamasidan `Landscape` yo‘nalishi va `Fit All Columns on One Page` (Scaling) ni tanlash orqali.',
        difficulty: 'oson',
      },
      {
        task: 'Imtihon topshirig‘ida "Formulas ko‘rinishida ustun harflari va qator raqamlari ko‘rinib tursin" deyildi. Qaysi 2 amalni bajarasiz?',
        expected: '1) `Ctrl + ~` (Show Formulas) ni yoqish; 2) Page Layout → Sheet Options → `Headings → Print` katakchasini belgilash.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l63-g1',
        num: '01',
        title: 'Jadvalni taqdim etish sozlamalari',
        topic: 'Ma’lumotlarni taqdim etish',
        difficulty: 'Oson',
        engine: 'fillblank',
        config: {
          prompt: 'Elektron jadvalni chiroyli ko‘rsatish va chop etish qoidalarini to‘ldiring.',
          template: 'Baho 56 dan past bo‘lganda katakni avtomatik qizil qilish uchun {{0}}, keng jadvalning barcha ustunlarini 1 sahifa eniga sig‘dirish uchun {{1}}, pul birliklarini ko‘rsatishda esa {{2}} formati ishlatiladi.',
          blanks: [
            { options: ['Conditional Formatting', 'Data Validation', 'Mail Merge'], answer: 'Conditional Formatting' },
            { options: ['Fit All Columns on One Page', 'Merge Cells', 'Text Direction'], answer: 'Fit All Columns on One Page' },
            { options: ['Currency', 'Boolean', 'Date'], answer: 'Currency' },
          ],
          hint: 'Shartli rang = Conditional Formatting; 1 betga sig‘dirish = Fit All Columns...; Pul = Currency.',
          explanation: 'Bu uch vosita raqamli hisobotni professional va o‘qishga qulay holga keltiradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Katakdagi son `85` dan katta bo‘lganda avtomatik yashil fonga o‘tishi qaysi imkoniyat bilan qilinadi?',
        options: ['Conditional Formatting (Shartli formatlash)', 'Gutter', 'VLOOKUP', 'Filter'],
        answer: 0,
        explanation: 'Conditional Formatting qiymat shartiga ko‘ra avtomatik rang va stil beradi.',
      },
      {
        prompt: 'Excel jadvali chop etilganda chetdagi bitta ustun alohida 2-qog‘ozga o‘tib ketmasligi uchun nima tanlanadi?',
        options: ['Scaling → Fit All Columns on One Page', 'Merge Cells', 'Paste Special', 'Freeze Panes'],
        answer: 0,
        explanation: 'Fit All Columns on One Page barcha ustunlarni bitta sahifa kengligiga moslaydi.',
      },
      {
        prompt: 'Formula ko‘rinishini chop etganda A, B, C va 1, 2, 3 koordinatalari qog‘ozda chiqishi uchun qaysi belgi yoqiladi?',
        options: ['Headings → Print', 'Footer', 'Conditional Formatting', 'Text Wrap'],
        answer: 0,
        explanation: 'Print Headings qator va ustun nomlarini chop etishda ko‘rsatadi.',
      },
      {
        prompt: 'Katakda `0.25` sonini `25%` ko‘rinishida chiqarish uchun qaysi format qo‘llanadi?',
        options: ['Percentage (%)', 'Text', 'Date', 'Scientific'],
        answer: 0,
        explanation: 'Percentage formati qiymatni 100 ga ko‘paytirib `%` belgisi bilan ko‘rsatadi.',
      },
      {
        prompt: 'Faqat ekrandagi ko‘rinishni 2 xonali kasr qilib formatlash asl formula hisobidagi aniq kasr sonni o‘zgartiradimi?',
        options: ['Yo‘q, faqat ko‘rinishi yaxlitlanadi; hisobda asl qiymat qoladi', 'Ha, asl son o‘chiriladi', 'Faqat PDF da o‘zgaradi', 'Fayl buziladi'],
        answer: 0,
        explanation: 'Vizual formatlash faqat ko‘rinishga taʼsir qiladi; qiymatni haqiqatan yaxlitlash uchun `ROUND` funksiyasi kerak.',
      },
    ],
    teacherNotes: {
      method: 'Sinfda Print Preview oynasida `Portrait` vs `Landscape + Fit All Columns` farqini ko‘rsatish.',
      timing: 'Conditional Formatting & Formatlar 20 daq, Print Setup 15 daq, FillBlank va quiz 10 daq.',
      assessment: 'Conditional Formatting va Print Scaling ni to‘g‘ri qo‘llash.',
      homework: 'O‘quvchilar baholari jadvalini shartli formatlab, 1 betlik PDF hisobot sifatida eksport qiling.',
    },
  },
  {
    id: 'g9-l64',
    grade: 9,
    no: 64,
    part: '4-chorak',
    title: 'Veb dasturlashning uch qatlami. Veb sahifa yaratish',
    kind: 'dars',
    hours: 1,
    tools: ['HTML5', 'CSS3', 'JavaScript', 'HtmlPlay'],
    objectives: [
      'O‘quvchi veb-ishlanmaning uch qatlamini — Mazmun (HTML), Taʼqdimot/Dizayn (CSS) va Xatti-harakat/Interaktivlik (JavaScript) ni farqlaydi.',
      'O‘quvchi asosiy HTML teglari (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, `<h1>`, `<p>`, `<img>`, `<ul>/<li>`) bilan to‘liq veb-sahifa yaratadi.',
    ],
    intro:
      'Har bir zamonaviy veb-sayt xuddi bino kabi uch qatlamdan quriladi: HTML — g‘isht va devorlar (mazmun), CSS — bo‘yoq va chiroyli bezak (dizayn), JavaScript — eshik va chiroqlarni harakatga keltiruvchi elektr tizimi (xatti-harakat)!',
    sections: [
      {
        heading: 'Veb-dasturlashning uch qatlami (3 Layers of Web Development)',
        body: '1) Content Layer (Mazmun qatlami — **HTML**): sahifa tuzilmasi, sarlavhalar, matnlar, rasmlar, jadvallar va havolalar. 2) Presentation Layer (Taqdimot qatlami — **CSS**): ranglar, shriftlar, joylashuv, orqa fon va moslashuvchan maket. 3) Behaviour Layer (Xatti-harakat qatlami — **JavaScript**): tugma bosilganda reaksiya, formalarni tekshirish, kalkulyator va dinamik o‘zgarishlar.',
        example: 'CSS o‘chirilsa ham HTML matni o‘qilaveradi; HTML bo‘lmasa esa CSS va JS ning bezaydigan va boshqaradigan hech narsasi bo‘lmaydi.',
        tip: 'Hech qachon dizayn berish uchun eskirgan `<font>` yoki `<b>` teglariga yopishib olmang — barcha dizayn CSS qatlamida bo‘lishi kerak!',
      },
      {
        heading: 'Asosiy HTML5 sahifa tuzilmasi va Teglar',
        body: 'Har bir sahifa `<!DOCTYPE html>` bilan boshlanib `<html>` ichida `<head>` (metama’lumot, `<title>`, `<meta charset="UTF-8">`) va `<body>` (foydalanuvchi ko‘radigan hamma narsa) ga bo‘linadi. Muhim teglar: `<h1>`..`<h6>` (sarlavhalar), `<p>` (abzats), `<img src="rasm.jpg" alt="Tavsif">` (rasm — `alt` atributi ko‘rish imkoniyati cheklanganlar va rasm ochilmaganda ko‘rinishi uchun shart!), `<ul>`/`<ol>` va `<li>` (ro‘yxatlar).',
        example: '`<h1>Mening birinchi saytim</h1>` eng asosiy sarlavhani, `<p>Salom dunyo!</p>` esa oddiy matnni chiqaradi.',
      },
    ],
    keyTerms: [
      { term: 'Content Layer (HTML)', definition: 'Veb-sahifaning matn, rasm va semantik tuzilmasini yaratuvchi belgilash tili.' },
      { term: 'Presentation Layer (CSS)', definition: 'HTML elementlarining rangi, shrifti, hajmi va joylashuvini boshqaruvchi stil qatlami.' },
      { term: 'Behaviour Layer (JavaScript)', definition: 'Sahifaga interaktivlik, mantiq va hodisalarga reaksiya beruvchi dasturlash qatlami.' },
      { term: 'alt atributi', definition: 'Rasm yuklanmaganda yoki ekran o‘quvchi (screen reader) dasturlar uchun rasmning matnli tavsifi.' },
    ],
    steps: [
      '1. `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>` skeletini yozing.',
      '2. `<body>` ichiga asosiy sarlavha (`<h1>`) va tanishtiruv matni (`<p>`) qo‘shing.',
      '3. Quyidagi HtmlPlay muharririda topshiriq shartlariga mos HTML kodini yozib tekshiring!',
    ],
    practice: [
      {
        task: 'Veb-dasturlashning 3 qatlamini "Uy qurilishi" yoki "Inson tanasi" misolida tushuntiring.',
        expected: 'HTML = skelet/g‘isht (tuzilma), CSS = kiyim va bo‘yoq (ko‘rinish), JavaScript = mushak va asab tizimi (harakat va mantiq).',
        difficulty: 'oson',
      },
      {
        task: 'Nima uchun `<img src="maktab.jpg">` tegiga har doim `alt="Maktab binosi"` atributini qo‘shish majburiy sanaladi?',
        expected: '1) Internet sekin bo‘lib rasm ochilmasa matn chiqadi; 2) Ko‘zi ojiz foydalanuvchilarning Screen Reader dasturi rasmni o‘qib bera oladi; 3) Qidiruv tizimlari (SEO) rasmni tushunadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l64-g1',
        num: '01',
        title: 'HtmlPlay: Birinchi veb-sahifangni qur',
        topic: 'HTML5 asoslari',
        difficulty: 'Oson',
        engine: 'htmlplay',
        config: {
          prompt: 'Sahifada `<h1>` asosiy sarlavhasi, `<p>` matn abzatsi va `<ul>` ichida kamida bitta `<li>` ro‘yxat elementi bo‘ladigan HTML kodini yozing!',
          starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>9-sinf Sahifa</title>\n</head>\n<body>\n  <!-- Bu yerga h1, p va ul/li yozing -->\n  \n</body>\n</html>',
          checks: [
            { label: 'Asosiy sarlavha (<h1>...</h1>)', pattern: '<h1[^>]*>[^<]+</h1>', flags: 'i' },
            { label: 'Abzats matni (<p>...</p>)', pattern: '<p[^>]*>[^<]+</p>', flags: 'i' },
            { label: 'Tartibsiz ro‘yxat (<ul> va <li>)', pattern: '<ul[^>]*>[\\s\\S]*<li[^>]*>[^<]+</li>[\\s\\S]*</ul>', flags: 'i' },
          ],
          hint: '`<body>` ichiga `<h1>Salom</h1>`, `<p>Matn</p>` va `<ul><li>Birinchi band</li></ul>` yozing.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Veb-dasturlashning "Presentation Layer" (Taqdimot va dizayn) qatlami qaysi texnologiya bilan yaratiladi?',
        options: ['CSS', 'HTML', 'JavaScript', 'SQL'],
        answer: 0,
        explanation: 'CSS veb-sahifaning barcha vizual ko‘rinishi (rang, shrift, maket) uchun javobgardir.',
      },
      {
        prompt: 'Tugma bosilganda oynacha chiqarish yoki formani tekshirish qaysi qatlamga tegishli?',
        options: ['Behaviour Layer (JavaScript)', 'Content Layer (HTML)', 'Presentation Layer (CSS)', 'Hardware'],
        answer: 0,
        explanation: 'JavaScript sahifadagi xatti-harakat va interaktiv mantiqni boshqaradi.',
      },
      {
        prompt: '`<img src="logo.png" alt="Maktab logotipi">` tegidagi `alt` atributi nima uchun kerak?',
        options: ['Rasm yuklanmasa yoki ko‘zi ojizlar screen-readeri uchun matnli tavsif berish', 'Rasmni 90° burish', 'Faylni ZIP qilish', 'Rasm rangini qizil qilish'],
        answer: 0,
        explanation: '`alt` (alternative text) qulaylik (Accessibility) va ishonchlilik uchun muhim.',
      },
      {
        prompt: 'Foydalanuvchi brauzer oynasida ko‘radigan barcha asosiy matn va rasmlar qaysi teg ichida yoziladi?',
        options: ['<body>...</body>', '<head>...</head>', '<title>...</title>', '<meta>'],
        answer: 0,
        explanation: '`<head>` sahifa haqidagi xizmat ma’lumotlarini saqlaydi, `<body>` esa ekrandagi ko‘rinadigan qismdir.',
      },
      {
        prompt: 'Raqamlanmagan (nuqtali) ro‘yxat yaratish uchun qaysi HTML teglari ishlatiladi?',
        options: ['<ul> va <li>', '<ol> va <tr>', '<h1> va <p>', '<table> va <a>'],
        answer: 0,
        explanation: '`<ul>` (Unordered List) ichidagi har bir band `<li>` (List Item) tegi bilan yoziladi.',
      },
    ],
    teacherNotes: {
      method: 'HtmlPlay muharririda teglarni jonli yozib natijani ekranda darhol ko‘rsatish.',
      timing: '3 qatlam 15 daq, HTML teglar 15 daq, HtmlPlay va test 15 daq.',
      assessment: 'HtmlPlay dagi 3 ta tekshiruvdan ham muvaffaqiyatli o‘tish.',
      homework: 'O‘zingiz haqingizdagi "Vizitka" veb-sahifasini (`<h1>`, `<p>`, `<ul>`, `<img>`) notepad/VS Code da yozing.',
    },
  },
  {
    id: 'g9-l65',
    grade: 9,
    no: 65,
    part: '4-chorak',
    title: 'Linklar, bookmarklar va ankor. Absolyut va nisbiy fayl manzillari',
    kind: 'dars',
    hours: 1,
    tools: ['HTML <a>', 'id="#bolim"', 'target="_blank"', 'Relative vs Absolute Path'],
    objectives: [
      'O‘quvchi HTML da tashqi havola, ichki sahifaga o‘tish (`<a href="aloqa.html">`), yangi tabda ochish (`target="_blank"`) va sahifa ichidagi Bookmark/Ankor (`#id`) yaratishni biladi.',
      'O‘quvchi Absolyut fayl manzili (`https://...` yoki `C:\\Users\\...`) va Nisbiy fayl manzili (`images/foto.jpg`) orasidagi muhim farqni tushuntiradi.',
    ],
    intro:
      'Veb-saytni "o‘rgimchak to‘ri" qiladigan narsa — giperhavolalar (`<a>`)! Lekin ko‘p o‘quvchilar saytni boshqa kompyuterga ko‘chirganda rasmlar va havolalar ishlamay qoladi. Sababi — Absolyut (`C:\\Users\\...`) va Nisbiy manzilni chalkashtirishdir!',
    sections: [
      {
        heading: 'Giperhavolalar (`<a>`), Bookmark va Ankor (Anchor)',
        body: 'Havola `<a href="manzil">Matn</a>` ko‘rinishida yoziladi. Turlari: 1) Tashqi saytga: `<a href="https://edu.uz" target="_blank">Taʼlim portali</a>` (`target="_blank"` yangi oynada ochadi); 2) Boshqa ichki sahifaga: `<a href="haqimizda.html">Biz haqimizda</a>`; 3) Sahifa ichidagi Bookmark/Ankor: avval manzilga `<h2 id="aloqa">Aloqa</h2>` belgisi qo‘yiladi, keyin unga `<a href="#aloqa">Aloqa bo‘limiga sakrash</a>` orqali darhol o‘tiladi; 4) Elektron pochtaga: `<a href="mailto:info@maktab.uz">Xat yozish</a>`.',
        example: 'Uzun sahifa pastidagi `<a href="#top">Tepaga qaytish</a>` ankori o‘quvchini bir bosishda sahifa boshiga olib chiqadi.',
        tip: 'Ankorga havolada `#` belgisi (`href="#aloqa"`) bo‘ladi, maqsad elementning `id="aloqa"` atributida esa `#` yozilmaydi!',
      },
      {
        heading: 'Absolyut va Nisbiy (Relative) fayl manzillari',
        body: 'Absolyut manzil (Absolute path) — faylning internetdagi to‘liq URL i (`https://sayt.uz/images/logo.png`) yoki kompyuter diskidagi to‘liq yo‘li (`C:\\Users\\Ali\\Desktop\\logo.png`). Muammo shundaki, `C:\\Users\\Ali\\...` yozsangiz, saytni serverga yoki boshqa kompyuterga ko‘chirganda rasm umuman ochilmaydi! Nisbiy manzil (Relative path) esa joriy HTML fayliga nisbatan joylashuvni ko‘rsatadi: `images/logo.png` (ichki papkada) yoki `../index.html` (yuqori papkada).',
        example: 'Sayt ichidagi hamma sahifalar va rasmlar uchun faqat NISBIY manzil (`images/rasm.jpg`) ishlating — shunda papkani istalgan kompyuterga ko‘chirsangiz ham hamma narsa ishlaydi!',
      },
    ],
    keyTerms: [
      { term: 'Ankor / Bookmark (`#id`)', definition: 'Bitta uzun veb-sahifaning ma’lum bo‘limiga sakrab o‘tuvchi ichki havola.' },
      { term: 'target="_blank"', definition: 'Giperhavolani joriy sahifani yopmasdan yangi brauzer varag‘ida ochuvchi atribut.' },
      { term: 'Absolyut manzil', definition: 'Protokol/disk boshidan boshlanadigan to‘liq manzil (`https://...` yoki `C:\\...`).' },
      { term: 'Nisbiy manzil (Relative)', definition: 'Joriy HTML fayli turgan papkaga nisbatan qisqa yo‘l (`images/foto.png`).' },
    ],
    steps: [
      '1. `<h2 id="bob2">2-bob</h2>` yarating va tepada `<a href="#bob2">2-bobga o‘tish</a>` ankori qo‘ying.',
      '2. Tashqi saytga `target="_blank"` bilan havola yozing.',
      '3. Loyiha papkasida `images/maktab.jpg` uchun nisbiy manzilli `<img>` tegini tekshiring.',
    ],
    practice: [
      {
        task: 'O‘quvchi saytiga rasmni `<img src="C:\\Users\\User\\Desktop\\sayt\\foto.jpg">` deb qo‘ydi va saytni fleshkada maktabga olib keldi. Nima uchun rasm maktab kompyuterida ko‘rinmadi?',
        expected: 'U kompyuterga xos Absolyut disk manzilini yozgan; maktab kompyuterida `User` papkasi va fayl yo‘q. Nisbiy `foto.jpg` yoki `images/foto.jpg` yozish kerak edi.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Sahifa oxiridan tepaga (`id="boshi"`) bir bosishda qaytaruvchi HTML ankor kodini yozing.',
        expected: 'Tepada `<div id="boshi">...</div>`, pastda esa `<a href="#boshi">Tepaga qaytish</a>`.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g9-l65-g1',
        num: '01',
        title: 'Manzillar va havolalarni sarala',
        topic: 'Linklar va fayl yo‘llari',
        difficulty: 'O‘rta',
        engine: 'sort',
        config: {
          prompt: 'Berilgan manzil va havola misollarini to‘g‘ri toifaga ajrating: Absolyut manzil, Nisbiy manzil yoki Ankor/Maxsus havola.',
          categories: ['Absolyut manzil', 'Nisbiy manzil', 'Ankor / Maxsus havola'],
          items: [
            { text: 'https://uzbekistan.uz/index.html', category: 'Absolyut manzil' },
            { text: 'C:\\Users\\Dilshod\\rasm.png', category: 'Absolyut manzil' },
            { text: 'images/logo.png', category: 'Nisbiy manzil' },
            { text: '../css/style.css', category: 'Nisbiy manzil' },
            { text: '#aloqa_bolimi', category: 'Ankor / Maxsus havola' },
            { text: 'mailto:maktab@edu.uz', category: 'Ankor / Maxsus havola' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Veb-sayt papkasini boshqa kompyuterga ko‘chirganda ham rasmlar va ichki sahifalar buzilmasligi uchun qaysi manzil turi ishlatiladi?',
        options: ['Nisbiy manzil (Relative path: `images/foto.jpg`)', 'C:\\Users\\... disk manzili', 'D:\\Yuklanmalar\\...', 'IP raqam'],
        answer: 0,
        explanation: 'Nisbiy manzil loyiha papkasi ichidagi joylashuvga tayanadi, shuning uchun hamma kompyuterda ishlaydi.',
      },
      {
        prompt: 'Havolani bosganda saytni yangi brauzer varag‘ida (tab) ochish uchun qaysi atribut qo‘shiladi?',
        options: ['target="_blank"', 'alt="_blank"', 'id="_new"', 'rel="style"'],
        answer: 0,
        explanation: '`target="_blank"` brauzerga havolani yangi tabda ochishni buyuradi.',
      },
      {
        prompt: 'Sahifa ichidagi `<section id="jadval">` bo‘limiga sakrab tushuvchi ankor havolasi qanday yoziladi?',
        options: ['<a href="#jadval">Jadval</a>', '<a href="jadval">Jadval</a>', '<a id="#jadval">Jadval</a>', '<link href="#jadval">'],
        answer: 0,
        explanation: 'Ankor havolasida `href` qiymati `#` va maqsad `id` nomidan iborat bo‘ladi.',
      },
      {
        prompt: 'Sayt foydalanuvchisining pochta dasturini ochib xat yozishga tayyorlaydigan havola qaysi?',
        options: ['href="mailto:info@uz.uz"', 'href="#mail"', 'href="http://mail"', 'src="email.txt"'],
        answer: 0,
        explanation: '`mailto:` protokoli elektron pochta mijozini ishga tushiradi.',
      },
      {
        prompt: '`../images/fon.jpg` yozuvidagi `../` nimani bildiradi?',
        options: ['Bitta yuqoridagi (ota) papkaga chiqishni', 'Sahifani yopishni', 'Rasmni kattalashtirishni', 'Internetdan o‘chirishni'],
        answer: 0,
        explanation: '`..` joriy papkadan bir daraja yuqoriga ko‘tarilishni anglatadi.',
      },
    ],
    teacherNotes: {
      method: '`C:\\Users\\...` absolyut xatosini real ko‘rsatib, nisbiy yo‘l bilan tuzatish.',
      timing: 'Link/Bookmark/Target 15 daq, Absolyut vs Nisbiy 15 daq, Sort va quiz 15 daq.',
      assessment: 'Ankor, `target="_blank"` va nisbiy manzilni xatosiz farqlash.',
      homework: '2 ta o‘zaro bog‘langan HTML sahifa (`index.html` va `fanlar.html`) hamda ichida `#pastga` ankorini yarating.',
    },
  },
  {
    id: 'g9-l66',
    grade: 9,
    no: 66,
    part: '4-chorak',
    title: 'Stil jadvallaridan foydalanish. Veb saytni sinash va publikatsiya qilish',
    kind: 'dars',
    hours: 1,
    tools: ['CSS3', 'HtmlPlay', 'Inline / Internal / External CSS', 'Hosting & FTP/Git'],
    objectives: [
      'O‘quvchi CSS ulashning uch usuli (Inline, Internal `<style>`, External `.css` fayl) dan nega External CSS eng professional ekanini tushuntiradi.',
      'O‘quvchi CSS selektorlari (`h1`, `.klass`, `#id`) yordamida saytga dizayn berish, veb-saytni turli brauzerlarda sinash va serverga publikatsiya (Hosting/Domain) qilish bosqichlarini biladi.',
    ],
    intro:
      'Endi HTML sahifamizga rang, shrift va chiroyli maket beramiz! 50 ta sahifali saytda hamma `<h1>` rangini bir soniyada o‘zgartirish uchun esa tashqi `.css` fayli — Tashqi stil jadvali ishlatiladi.',
    sections: [
      {
        heading: 'CSS ulash usullari va asosiy selektorlar',
        body: 'CSS qo‘llashning 3 yo‘li bor: 1) Inline (`<p style="color:red">`) — faqat bitta teg uchun, ko‘p sahifada noqulay; 2) Internal (`<style>` tegi `<head>` ichida) — bitta HTML sahifa uchun; 3) External (`<link rel="stylesheet" href="style.css">`) — bitta `style.css` faylini 100 ta HTML sahifaga ulash mumkin (eng to‘g‘ri usul, chunki stil va mazmun to‘liq ajratiladi!). Asosiy qoida: `selektor { xossa: qiymat; }` (masalan, `body { font-family: Arial, sans-serif; background-color: #f8fafc; }`, `.karta { border: 1px solid #cbd5e1; }`).',
        example: '`h1 { color: #1d4ed8; text-align: center; }` kodi barcha asosiy sarlavhalarni ko‘k rangda markazlashtiradi.',
        tip: 'CSS da barcha satr oxirida nuqta-vergul (`;`) qo‘yishni unutmang, aks holda keyingi stil qoidasi ishlamay qoladi!',
      },
      {
        heading: 'Veb-saytni sinash (Testing) va Publikatsiya (Publishing)',
        body: 'Saytni internetga chiqarishdan oldin Test plan asosida tekshiring: 1) Barcha havola va ankorlar to‘g‘ri ochilyaptimi (broken links yo‘qmi)?; 2) Rasmlar yuklanyaptimi (`alt` bormi)?; 3) Turli brauzerlarda (Chrome, Firefox, Safari) va telefon ekranida maket buzilmayaptimi?; 4) HTML/CSS validator orqali sintaksis xatosi yo‘qmi? Publikatsiya (Nashr qilish) uchun Domain nomi, Web Hosting serveri va fayllarni yuklash usuli (FTP/SFTP yoki Git/Static deploy) kerak bo‘ladi.',
        example: 'Bosh sahifa fayli serverda albatta `index.html` deb nomlanishi kerak — shunda domen kiritilganda birinchi bo‘lib shu fayl ochiladi.',
      },
    ],
    keyTerms: [
      { term: 'External Stylesheet (.css)', definition: 'Ko‘plab HTML sahifalarga `<link>` orqali ulanadigan tashqi dizayn fayli.' },
      { term: 'Selektor va Xossa', definition: 'CSS da qaysi element bezalishini ko‘rsatuvchi nom (`h1`, `.box`) va uning stili (`color`, `margin`).' },
      { term: 'Cross-browser testing', definition: 'Saytning turli brauzerlar va turli ekran o‘lchamlarida (kompyuter/telefon) bir xil ishlashini sinash.' },
      { term: 'Hosting va FTP/SFTP', definition: 'Sayt fayllarini saqlovchi doimiy internet serveri hamda fayllarni serverga yuklash protokoli.' },
    ],
    steps: [
      '1. `<head>` ichiga `<style>` yozib yoki tashqi `style.css` ulab `body` va `h1` ga rang/shrift bering.',
      '2. Quyidagi HtmlPlay da CSS bilan chiroyli sarlavha va abzats yarating.',
      '3. Sayt sinov ro‘yxatini (Havolalar, Rasmlar, Mobil ko‘rinish) tekshiring.',
    ],
    practice: [
      {
        task: '20 sahifali maktab saytida hamma sahifaning fon rangi va `h1` shriftini yagona joydan boshqarish uchun Inline, Internal va External CSS dan qay biri tanlanadi?',
        expected: 'External CSS (`<link rel="stylesheet" href="style.css">`): bitta `style.css` ni tahrirlash barcha 20 sahifani darhol yangilaydi.',
        difficulty: 'oson',
      },
      {
        task: 'Saytni Internetda nashr qilishdan oldin bajarilishi shart bo‘lgan 4 ta asosiy test tekshiruvini sanang.',
        expected: '1) Barcha havola va rasmlarning ishlashi; 2) Turli brauzerlarda ko‘rinishi; 3) Telefon va planshet ekraniga mosligi (responsive); 4) Imlo va HTML/CSS sintaksisi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l66-g1',
        num: '01',
        title: 'HtmlPlay: CSS stil jadvalini qo‘lla',
        topic: 'CSS va veb-dizayn',
        difficulty: 'O‘rta',
        engine: 'htmlplay',
        config: {
          prompt: '`<style>` tegi ichida `h1` uchun `color` (rang) va `p` uchun `font-family` (shrift) stilini yozing hamda `<body>` ichiga tegishli HTML matnni qo‘ying!',
          starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Bu yerga h1 { color: ...; } va p { font-family: ...; } yozing */\n  </style>\n</head>\n<body>\n  <h1>Mening portfolio saytim</h1>\n  <p>Bu mening CSS bilan bezalgan birinchi sahifam.</p>\n</body>\n</html>',
          checks: [
            { label: 'h1 selektori va color xossasi', pattern: 'h1\\s*\\{[^}]*color\\s*:[^;]+;?', flags: 'i' },
            { label: 'p selektori va font-family xossasi', pattern: 'p\\s*\\{[^}]*font-family\\s*:[^;]+;?', flags: 'i' },
          ],
          hint: '`<style>` ichiga `h1 { color: #2563eb; }` va `p { font-family: Arial, sans-serif; }` yozing.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Ko‘p sahifali veb-sayt uchun CSS ulashning eng samarali va professional usuli qaysi?',
        options: ['External CSS (`<link rel="stylesheet" href="style.css">`)', 'Har bir tegga Inline `style=""` yozish', 'CSS umuman ishlatmaslik', 'Matnni rasmga aylantirish'],
        answer: 0,
        explanation: 'External CSS barcha sahifalarda dizayn izchilligini saqlaydi va tahrirlashni osonlashtiradi.',
      },
      {
        prompt: 'Saytni Internetda hamma ochishi uchun fayllar qaysi kompyuter tizimiga yuklanadi?',
        options: ['Web Hosting serveriga', 'Printer buferiga', 'Lokal ROM ga', 'CD-RW ga'],
        answer: 0,
        explanation: 'Web Hosting 24/7 Internetga ulangan serverda sayt fayllarini saqlaydi va uzatadi.',
      },
      {
        prompt: 'HTML hujjatiga tashqi `style.css` faylini ulash uchun qaysi teg ishlatiladi?',
        options: ['<link rel="stylesheet" href="style.css">', '<script src="style.css">', '<a href="style.css">', '<img src="style.css">'],
        answer: 0,
        explanation: '`<link>` tegi `<head>` ichida tashqi CSS faylini sahifaga ulaydi.',
      },
      {
        prompt: 'Sayt fayllarini hosting serveriga yuklashda ko‘pincha qaysi protokol qo‘llanadi?',
        options: ['FTP / SFTP', 'OMR', 'MIDI', 'PNG'],
        answer: 0,
        explanation: 'FTP/SFTP (File Transfer Protocol) fayllarni serverga uzatish uchun ishlatiladi.',
      },
      {
        prompt: 'Veb-sayt bosh sahifasining fayl nomi odatda nima bo‘lishi kerak?',
        options: ['index.html', 'page1.docx', 'style.css', 'main.jpg'],
        answer: 0,
        explanation: 'Veb-serverlar domen ochilganda avtomatik ravishda `index.html` faylini izlaydi.',
      },
    ],
    teacherNotes: {
      method: 'HtmlPlay da jonli rang/shrift o‘zgartirish va saytni nashr qilish bosqichlarini tushuntirish.',
      timing: 'CSS 3 usul 15 daq, Testing & Publishing 15 daq, HtmlPlay va test 15 daq.',
      assessment: 'HtmlPlay topshirig‘ini CSS qoidalari bilan bajarish.',
      homework: 'O‘z HTML sahifangiz uchun alohida `style.css` fayli yaratib `<link>` bilan ulang.',
    },
  },
  {
    id: 'g9-l67',
    grade: 9,
    no: 67,
    part: '4-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Yakuniy nazorat', 'Excel Model + HTML/CSS'],
    objectives: [
      'O‘quvchi 60–66-darslar (Ma’lumotlar modeli, `$A$1` absolyut murojaat, Excel funksiyalari, Model sinovi/xatolar, Taqdim etish va HTML/CSS veb dasturlash) bo‘yicha bilimlarini sinaydi.',
      'O‘quvchi yillik yakuniy nazorat savol va masalalarini mustaqil yechadi.',
    ],
    intro:
      '9-sinfning yakuniy nazorat ishi elektron jadvallarda modellashtirish (absolyut murojaat, funksiyalar, xato kodlari, conditional formatting) hamda HTML/CSS veb dasturlash asoslarini qamrab oladi.',
    sections: [
      {
        heading: 'Yakuniy nazorat uchun qisqa xotira',
        body: 'Tekshiring: `$` = absolyut murojaat (`F4`); `SUM`, `AVERAGE`, `MIN`, `MAX`, `COUNT`, `COUNTA`, `IF`, `VLOOKUP`; Xatolar (`####`, `#DIV/0!`, `#NAME?`, `#VALUE!`, `#REF!`); Conditional Formatting + Print `Fit All Columns`; Veb 3 qatlam = HTML (Content) + CSS (Presentation) + JS (Behaviour); Nisbiy yo‘l (`images/a.jpg`) + `#id` ankor + `<link rel="stylesheet">`.',
        example: 'SheetLab da formula `=` dan boshlanishi shart; CSS da esa `selektor { xossa: qiymat; }`.',
        tip: 'True/False o‘yinida har bir jumlani diqqat bilan o‘qing.',
      },
    ],
    keyTerms: [
      { term: '$A$1 & VLOOKUP', definition: 'Qulflangan absolyut katak manzili va jadvaldan qiymat topuvchi funksiya.' },
      { term: '#DIV/0! & #NAME?', definition: 'Nolga bo‘lish hamda funksiya nomidagi imlo xatosi.' },
      { term: 'HTML / CSS / JS', definition: 'Veb-dasturlashning mazmun, dizayn va xatti-harakat qatlamlari.' },
      { term: 'Relative Path & Hosting', definition: 'Ko‘chirilganda buzilmaydigan nisbiy yo‘l va sayt joylanadigan server.' },
    ],
    steps: [
      '1. True/False o‘yinida 4 ta yakuniy savolni tekshiring.',
      '2. Excel va HTML amaliy mashqlarini bajaring.',
      '3. Yakuniy 5 ta test savoliga javob bering.',
    ],
    practice: [
      {
        task: 'Excel jadvalida `B2` katakda `=A2*$D$1` turibdi. Uni `B5` katakka ko‘chirsak formula qanday ko‘rinish oladi?',
        expected: '`=A5*$D$1`.',
        difficulty: 'oson',
      },
      {
        task: 'Veb-saytning 3 qatlamini hamda `External CSS` ulash teg kodini yozib bering.',
        expected: 'Content (HTML), Presentation (CSS), Behaviour (JS); ulash: `<link rel="stylesheet" href="style.css">`.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l67-g1',
        num: '01',
        title: 'Excel va Veb yakuniy nazorati',
        topic: 'Model va Veb dasturlash',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Excel va HTML/CSS ga oid tasdiqlarni To‘g‘ri yoki Noto‘g‘ri deb baholang.',
          statements: [
            {
              text: 'Katakda `#####` ko‘rinsa, bu formula nolga bo‘linganini bildiruvchi tuzatib bo‘lmas xatodir.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! `#####` ustun kengligi torligini bildiradi, nolga bo‘lish esa `#DIV/0!` xatosidir.',
            },
            {
              text: 'Saytni boshqa kompyuterga ko‘chirganda ham rasmlar ochilishi uchun `images/logo.png` kabi nisbiy manzil yozilishi kerak.',
              isTrue: true,
              explanation: 'To‘g‘ri! Nisbiy manzil loyiha papkasi ichidagi joylashuvga tayanadi.',
            },
            {
              text: 'Veb dasturlashda sahifa dizayni va ranglari Content Layer (HTML) teglari bilan emas, Presentation Layer (CSS) bilan beriladi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Zamonaviy vebda mazmun (HTML) va bezak (CSS) ajratiladi.',
            },
            {
              text: 'Excel da `COUNT` funksiyasi bo‘sh bo‘lmagan matnli kataklarni ham sanaydi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! `COUNT` faqat raqamlarni sanaydi, matn va sonlarni `COUNTA` sanaydi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Excel formulasini nusxalaganda qaysi murojaat umuman o‘zgarmaydi?',
        options: ['$C$1', 'C1', 'C$1', '$C1'],
        answer: 0,
        explanation: 'Ikkala tomonida `$` bo‘lgan `$C$1` to‘liq absolyut murojaatdir.',
      },
      {
        prompt: '`=SUM(A1:A5)` o‘rniga `=SUUM(A1:A5)` yozilganda qaysi xato chiqadi?',
        options: ['#NAME?', '#DIV/0!', '#####', '#VALUE!'],
        answer: 0,
        explanation: 'Excel `SUUM` nomli funksiyani topolmay `#NAME?` xatosini qaytaradi.',
      },
      {
        prompt: 'Veb-saytdagi barcha HTML sahifalarga bitta markaziy dizayn faylini ulash uchun nima ishlatiladi?',
        options: ['External CSS (`<link rel="stylesheet" href="style.css">`)', 'Inline style', 'Mail Merge', 'Query'],
        answer: 0,
        explanation: 'External CSS barcha sahifalarda bir xil stilni bir joydan boshqaradi.',
      },
      {
        prompt: 'Sahifa ichidagi `<h2 id="natija">` sarlavhasiga sakrab tushuvchi havola qaysi?',
        options: ['<a href="#natija">Natija</a>', '<a href="natija">Natija</a>', '<a target="#natija">', '<css id="natija">'],
        answer: 0,
        explanation: 'Ankor havolasi `#` va element `id` si orqali ishlaydi.',
      },
      {
        prompt: 'Katak qiymati `90` dan katta bo‘lganda avtomatik yashil rang berish funksiyasi qaysi?',
        options: ['Conditional Formatting', 'Data Validation', 'Page Break', 'VLOOKUP'],
        answer: 0,
        explanation: 'Conditional Formatting katak ko‘rinishini shartga qarab avtomatik o‘zgartiradi.',
      },
    ],
    teacherNotes: {
      method: '4-chorak yakuniy nazorat — TrueFalse va test hamda amaliy savollar.',
      timing: 'Kirish 5 daq, Nazorat ishi 35 daq, Tahlil 5 daq.',
      assessment: 'Excel modellari va HTML/CSS asoslarini mukammal egallash.',
      homework: 'Keyingi dars (Yakuniy takrorlash) uchun yil davomidagi eng yaxshi ishlaringizni tayyorlang.',
    },
  },
  {
    id: 'g9-l68',
    grade: 9,
    no: 68,
    part: '4-chorak',
    title: 'Takrorlash',
    kind: 'takrorlash',
    hours: 1,
    tools: ['9-sinf Yillik Yakun', 'Arxitektura / Tarmoq / Ofis / Veb'],
    objectives: [
      'O‘quvchi 9-sinf davomida o‘rganilgan 4 asosiy yo‘nalishni (Apparat/Tarmoq, SDLC/Xavfsizlik, Grafika/Hujjat/Diagramma, Excel/Access/HTML-CSS) yaxlit umumlashtiradi.',
      'O‘quvchi 10-sinfda o‘rganiladigan kriptografiya, kiberxavfsizlik, murakkab Excel va relyatsion ma’lumotlar bazalariga tayyorlanadi.',
    ],
    intro:
      'Tabriklaymiz! Siz 9-sinf Informatika kursining barcha 68 ta darsini yakunladingiz. Kompyuter ichki tuzilmasidan tortib tarmoqlar, tizim tahlili, kiberxavfsizlik, Mail Merge, ma’lumotlar bazasi, Excel modellashtirish va HTML/CSS sayt yaratishgacha katta yo‘lni bosib o‘tdingiz!',
    sections: [
      {
        heading: '9-sinf bo‘ylab katta xulosa',
        body: '1-chorak: Hardware/Software, OT (GUI vs CLI), Direct Input (OMR/OCR/MICR/RFID), Xotira hisoblari (1024), Switch/Router/DNS/HTTPS, Ergonomika. 2-chorak: Sensor→ADC→CPU→Aktuator, Simulyatsiya, SDLC (Tahlil→Loyiha→Sinash→Joriy qilish), Phishing/Firewall/SSL, Mualliflik huquqi, Netiket va Ishonchli qidiruv. 3-chorak: Lossless/Lossy, Aspect Ratio/Crop/Contrast, Section Break/Header-Footer, House Style/Slide Master/TOC, Validatsiya vs Verifikatsiya, Diagrammalar. 4-chorak: Gutter/Mail Merge, Access Query/PK, Excel `$A$1`/Funksiyalar/Xatolar, HTML/CSS 3 qatlam.',
        example: '10-sinfda siz simmetrik/asimmetrik shifrlash, barcha zararli dasturlar himoyasi, VLOOKUP/INDEX-MATCH va 3NF relyatsion ma’lumotlar bazalarini chuqur o‘rganasiz!',
        tip: 'Yozgi taʼtilda o‘z portfolio veb-saytingizni HTML/CSS da yasab, ichiga 9-sinfda yaratgan taqdimot va jadvallaringizni joylashtiring!',
      },
    ],
    keyTerms: [
      { term: 'Kompyuter va Tarmoq', definition: 'CPU/RAM/ROM, Switch/Router/DNS/HTTPS va axborot o‘lchov birliklari.' },
      { term: 'SDLC va Xavfsizlik', definition: 'Tahlildan texnik xizmatgacha tizim sikli hamda Phishing, Firewall, Copyright himoyasi.' },
      { term: 'Hujjat va Ma’lumot', definition: 'House Style, Validatsiya/Verifikatsiya, Mail Merge, Excel `$A$1` va Access PK/Query.' },
      { term: 'Veb 3 qatlami', definition: 'HTML5 (mazmun), CSS3 (dizayn) va JavaScript (xatti-harakat) uyg‘unligi.' },
    ],
    steps: [
      '1. Flashcards yordamida 9-sinfning eng asosiy tushunchalarini takrorlang.',
      '2. 4 ta chorak bo‘yicha o‘z kuchli va rivojlantirish kerak bo‘lgan mavzularingizni belgilang.',
      '3. Yakuniy 5 ta umumlashtiruvchi savolni yeching.',
    ],
    practice: [
      {
        task: '9-sinfda o‘rganilgan 4 ta chorakning har biridan o‘zingiz uchun eng foydali deb bilgan 1 tadan ko‘nikmani yozing.',
        expected: 'Masalan: 1) Xotira hajmi hisoblari; 2) Phishing dan himoyalanish va aniq qidiruv; 3) Validatsiya va Diagrammalar; 4) Excel funksiyalari va HTML/CSS sayt.',
        difficulty: 'oson',
      },
      {
        task: 'Bitta maktab tadbirini tashkil etishda Excel, Mail Merge, Access va HTML/CSS qanday hamkorlikda ishlatilishini tasvirlang.',
        expected: 'Ishtirokchilar Access/Excel da yig‘iladi → Mail Merge da taklifnomalar yuboriladi → Excel da natijalar diagrammasi tuziladi → HTML/CSS da tadbir sayti nashr qilinadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g9-l68-g1',
        num: '01',
        title: '9-sinf yakuniy kartochkalari',
        topic: '9-sinf umumiy takrorlash',
        difficulty: 'Oson',
        engine: 'flashcards',
        config: {
          prompt: '9-sinf davomida o‘zlashtirilgan tayanch atamalarni takrorlang.',
          cards: [
            { term: 'Switch vs Router', definition: 'Switch MAC-manzil bilan LAN ichida, Router esa IP bilan tarmoqlar orasida paket uzatadi.', example: 'Ofis lokal tarmog‘i va Internet' },
            { term: 'Validatsiya vs Verifikatsiya', definition: 'Validatsiya — qoida/format tekshiruvi; Verifikatsiya — asl manba bilan moslik (Double entry).', example: 'Range Check vs Parolni 2 marta kiritish' },
            { term: 'Mail Merge', definition: 'Master shablon hujjatni Data Source jadvali bilan birlashtirib shaxsiy hujjat chiqarish.', example: '300 ta o‘quvchiga shaxsiy sertifikat' },
            { term: 'Veb 3 qatlami', definition: 'HTML (Content), CSS (Presentation), JavaScript (Behaviour).', example: 'External style.css + index.html' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Sensor yuborgan analog signalni mikroprotsessor uchun raqamli shaklga o‘giruvchi komponent qaysi?',
        options: ['ADC (Analog-to-Digital Converter)', 'Plotter', 'DNS', 'OMR'],
        answer: 0,
        explanation: 'ADC sensor signalini raqamlashtirib protsessorga uzatadi.',
      },
      {
        prompt: 'Sayt nomi (`kitob.uz`) ni IP-manzilga aylantiruvchi xizmat qaysi?',
        options: ['DNS', 'FTP', 'PNG', 'CSV'],
        answer: 0,
        explanation: 'DNS domen nomlarini raqamli IP-manzillarga tarjima qiladi.',
      },
      {
        prompt: '100 betlik hisobotning barcha sahifalarida avtomatik mundarija tuzish uchun sarlavhalarga nima beriladi?',
        options: ['Heading stillari', 'Watermark', 'Gutter', 'Crop'],
        answer: 0,
        explanation: 'Heading 1 / Heading 2 stillari asosida Avtomatik mundarija yaratiladi.',
      },
      {
        prompt: 'Excel formulasini nusxalaganda o‘zgarmasdan bitta katakka bog‘lanib qolishi uchun nima qo‘yiladi?',
        options: ['Absolyut murojaat (`$A$1`)', 'Text Direction', 'Line Spacing', 'Bookmark'],
        answer: 0,
        explanation: 'Dollar `$` belgisi ustun va qatorni qulflaydi.',
      },
      {
        prompt: 'Veb-saytdagi barcha sahifalarga yagona dizayn beruvchi tashqi fayl qanday ulanadi?',
        options: ['<link rel="stylesheet" href="style.css">', '<img src="style.css">', '<a href="#style">', '<title>style.css</title>'],
        answer: 0,
        explanation: '`<link>` tegi External CSS stil jadvalini HTML ga ulaydi.',
      },
    ],
    teacherNotes: {
      method: 'Yillik loyiha taqdimoti va o‘quvchilarni 10-sinfga yo‘naltirish.',
      timing: 'Yillik xarita 15 daq, Flashcards va loyiha bahosi 20 daq, Yakuniy quiz 10 daq.',
      assessment: '9-sinfning barcha 4 chorak tayanch bilimlarini bog‘lay olish.',
      homework: 'Yozgi taʼtil mini-loyihasi: O‘zingiz haqingizda 2 sahifali HTML/CSS portfolio sayti tayyorlang.',
    },
  },
];
