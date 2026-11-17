import type { Lesson } from './types';

export const GRADE_6_P1A: Lesson[] = [
  {
    id: 'g6-l01',
    grade: 6,
    no: 1,
    part: '1-yarim yillik',
    title: 'Matn qo‘shish, o‘zgartrish va ko‘chirish',
    kind: 'dars',
    hours: 1,
    tools: ['Word', 'LibreOffice Writer'],
    objectives: [
      'O‘quvchi tayyor matn ichiga yangi so‘z va gaplarni qo‘sha oladi.',
      'O‘quvchi so‘zlarni o‘zgartirish, kesish (Cut) va ko‘chirish (Paste) amallarini bajara oladi.',
    ],
    intro:
      'Hikoya yozayotganingizda birinchi gap oxirida turishi kerakligini sezib qolsangiz, uni qaytadan yozish shart emas. Matn muharririda uni bir soniyada kerakli joyga ko‘chirishingiz mumkin.',
    sections: [
      {
        heading: 'Matn qo‘shish va tahrirlash',
        body: 'Matn ichiga yangi so‘z qo‘shish uchun kursorni aynan o‘sha joyga sichqoncha bilan bosib qo‘ying va yozishni davom ettiring. O‘zgartirish kerak bo‘lgan so‘zni ikki marta bosish orqali belgilab, o‘rniga yangi so‘z yozish mumkin.',
        example: 'Masalan, "Maktab bog‘i" iborasida "bog‘i" dan oldin "chiroyli" so‘zini qo‘shish uchun kursorni ikki so‘z orasiga qo‘yamiz.',
        tip: 'Xatolardan ehtiyot bo‘l: Insert tugmasi tasodifan yoqilib qolsa, eski harflar ustiga yozilib ketadi. Pastki qatorda "OVR" yozuvini ko‘rsangiz, Insert tugmasini bir marta bosing.',
      },
      {
        heading: 'Nusxalash (Copy) va Ko‘chirish (Cut / Paste)',
        body: 'Matn bo‘lagini joyidan butunlay ko‘chirish uchun avval uni belgilang, so‘ng Kesib olish (Cut — Ctrl+X) tugmasini bosing. Kursorni yangi joyga qo‘yib, Joylashtirish (Paste — Ctrl+V) ni bosing. Aslini ham saqlab qolish uchun Ctrl+C (Copy) ishlatiladi.',
        example: 'She’rning 2-bandini 1-banddan oldinga olish uchun Ctrl+X va Ctrl+V ketma-ketligini qo‘llaymiz.',
      },
    ],
    keyTerms: [
      { term: 'Tahrirlash', definition: 'Mavjud matnga o‘zgartirish, qo‘shimcha yoki tuzatish kiritish jarayoni.' },
      { term: 'Kesib olish (Cut / Ctrl+X)', definition: 'Belgilangan matnni eski joyidan olib buferga joylash.' },
      { term: 'Nusxalash (Copy / Ctrl+C)', definition: 'Matnni o‘z joyida qoldirgan holda nusxasini buferga olish.' },
      { term: 'Joylashtirish (Paste / Ctrl+V)', definition: 'Almashish buferidagi matnni kursor turgan joyga qo‘yish.' },
    ],
    steps: [
      '1. Word yoki LibreOffice Writer dasturini oching va 4 qatorli kichik matn yozing.',
      '2. 2-gap o‘rtasiga yangi sifat so‘zini qo‘shing.',
      '3. Oxirgi gapni belgilang va Ctrl+X tugmalari bilan kesib oling.',
      '4. Kursorni 1-gap oldiga qo‘yib Ctrl+V bilan joylashtiring.',
    ],
    practice: [
      {
        task: 'Tartibsiz berilgan 4 ta maqol qatorini kesish va joylashtirish orqali to‘g‘ri tartibga keltiring.',
        expected: 'Maqol qismlari mantiqiy ketma-ketlikda joylashadi.',
        difficulty: 'oson',
      },
      {
        task: 'Sarlavhani nusxalab, hujjatning eng pastki qismiga ham takroran qo‘ying.',
        expected: 'Sarlavha ham tepada, ham pastda ko‘rinadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g6-l01-g1',
        num: '01',
        title: 'Matnni ko‘chirish bosqichlari',
        topic: 'Cut va Paste',
        difficulty: 'Oson',
        engine: 'order',
        config: {
          prompt: 'Abzatsni hujjatning bir joyidan boshqa joyiga ko‘chirish bosqichlarini to‘g‘ri tartiblang.',
          items: [
            'Ko‘chiriladigan matnni sichqoncha bilan belgilash',
            'Kesib olish (Cut — Ctrl+X) buyrug‘ini bajarish',
            'Kursorni yangi joyga qo‘yish',
            'Joylashtirish (Paste — Ctrl+V) tugmasini bosish',
          ],
          hint: 'Avval belgilash, keyin kesish, so‘ng joy ko‘rsatib joylashtirish.',
          explanation: 'Ko‘chirishda Cut (Ctrl+X) eski joydan o‘chiradi, Paste (Ctrl+V) esa yangi joyga qo‘yadi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Matnni eski joyidan olib tashlab yangi joyga ko‘chirish uchun qaysi buyruqlar juftligi ishlatiladi?',
        options: ['Copy va Print', 'Cut va Paste', 'Save va Undo', 'Bold va Italic'],
        answer: 1,
        explanation: 'Cut (Ctrl+X) kesib oladi, Paste (Ctrl+V) esa yangi joyga joylashtiradi.',
      },
      {
        prompt: 'Matnning nusxasini olish tezkor tugmasi qaysi?',
        options: ['Ctrl + C', 'Ctrl + X', 'Ctrl + Z', 'Ctrl + P'],
        answer: 0,
        explanation: 'Ctrl + C — Copy (Nusxa olish) buyrug‘idir.',
      },
      {
        prompt: 'Bitta so‘zni tezda belgilash uchun sichqoncha bilan nima qilish kerak?',
        options: ['Bir marta o‘ng tugmani bosish', 'So‘z ustida ikki marta tez bosish', 'Space tugmasini bosish', 'Enter bosish'],
        answer: 1,
        explanation: 'So‘z ustida ikki marta bosish (Double click) butun so‘zni belgilaydi.',
      },
      {
        prompt: 'Adashib matnni kesib yuborganda uni qaytarish tugmasi qaysi?',
        options: ['Ctrl + V', 'Ctrl + S', 'Ctrl + Z', 'Alt + F4'],
        answer: 2,
        explanation: 'Ctrl + Z (Undo) oxirgi bajarilgan harakatni bekor qiladi.',
      },
      {
        prompt: 'Nusxa olingan matn vaqtincha qayerda saqlanadi?',
        options: ['Printerda', 'Almashish buferida (Clipboard)', 'Savatchada', 'Skanerda'],
        answer: 1,
        explanation: 'Cut yoki Copy qilingan ma’lumotlar almashish buferida saqlanadi.',
      },
    ],
    teacherNotes: {
      method: 'Amaliy mashq: aralashib ketgan ertak matnini Copy/Cut/Paste yordamida yig‘ish.',
      timing: '5 daqiqa takrorlash, 12 daqiqa namoyish, 20 daqiqa amaliyot va o‘yin, 8 daqiqa test.',
      assessment: 'O‘quvchi klaviatura tezkor tugmalari bilan xatosiz ko‘chirsa — 5 baho.',
      homework: 'Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Z kombinatsiyalarini daftarga yozib yod olish.',
    },
  },
  {
    id: 'g6-l02',
    grade: 6,
    no: 2,
    part: '1-yarim yillik',
    title: 'Shrift turi, o‘lchami va rangini o‘zgartrish. Matnni tekislash',
    kind: 'dars',
    hours: 1,
    tools: ['Word', 'LibreOffice Writer'],
    objectives: [
      'O‘quvchi shrift turi (Font), o‘lchami (Size) va rangini (Color) moslay oladi.',
      'O‘quvchi matnni chapga, markazga, o‘ngga va kengligi bo‘yicha tekislay oladi.',
    ],
    intro:
      'Kitob va gazetalar nega o‘qishga qulay? Chunki sarlavhalar markazda va yirik shriftda, asosiy matn esa bir tekis qatorlarda joylashgan. Bugun matnni chiroyli ko‘rinishga keltirishni o‘rganamiz.',
    sections: [
      {
        heading: 'Shrift parametrlari (Font, Size, Color)',
        body: 'Matn muharririda Bosh sahifa (Home) bo‘limidan shrift turini (masalan, Arial, Times New Roman), o‘lchamini (12 pt, 14 pt) va rangini tanlash mumkin. Qalin (Bold — B), Og‘ma (Italic — I) va Tagiga chizilgan (Underline — U) tugmalari muhim so‘zlarni ajratib ko‘rsatadi.',
        example: 'Sarlavha uchun Arial 18 pt Qalin (Bold), asosiy matn uchun Times New Roman 14 pt o‘rnatamiz.',
        tip: 'Xatolardan ehtiyot bo‘l: bitta hujjatda 5 xil shrift va yorqin sariq matn ishlatmang — o‘quvchining ko‘zi charchaydi.',
      },
      {
        heading: 'Abzatsni tekislash (Alignment)',
        body: 'Tekislashning 4 asosiy turi mavjud: Chapga (Align Left) — oddiy matn uchun; Markazga (Center) — sarlavha va e’lonlar uchun; O‘ngga (Align Right) — sana va imzo uchun; Kenglik bo‘yicha (Justify) — kitob va referat sahifalarining ikki chetini tekis qilish uchun.',
        example: 'Ariza yozishda yuqori o‘ng burchakka "Maktab direktoriga" qismi Align Right bilan qo‘yiladi.',
      },
    ],
    keyTerms: [
      { term: 'Shrift (Font)', definition: 'Harf va belgilarning grafik chizilish uslubi (Arial, Calibri, Georgia).' },
      { term: 'Shrift o‘lchami (Font Size)', definition: 'Harflarning punkt (pt) birligidagi balandligi.' },
      { term: 'Markazga tekislash (Center)', definition: 'Matnni sahifaning o‘rtasiga nisbatan joylashtirish.' },
      { term: 'Justify (Kenglik bo‘yicha)', definition: 'Qatorlarning ham chap, ham o‘ng chetlarini bir chiziqda tekislash.' },
    ],
    steps: [
      '1. Yangi hujjatga maktab tadbiri haqida e’lon sarlavhasi va 2 ta xatboshi yozing.',
      '2. Sarlavhani belgilab markazga (Center) tekislang, o‘lchamini 18 pt va to‘q ko‘k rang qiling.',
      '3. Asosiy matnni belgilab 14 pt o‘lcham va Justify tekislashni tanlang.',
      '4. Pastki o‘ng burchakka bugungi sanani O‘ngga (Align Right) tekislang.',
    ],
    practice: [
      {
        task: 'Bayram tabriknomasi matnini yozib, sarlavhani markazga, matnni esa Justify bilan tekislang.',
        expected: 'Tabriknoma tartibli, ikki cheti tekis va chiroyli shriftda ko‘rinadi.',
        difficulty: 'oson',
      },
      {
        task: 'Asosiy atamalarni B (Qalin) va rang bilan ajratib mini eslatma tayyorlang.',
        expected: 'Kalit so‘zlar ko‘zga tashlanadigan toza hujjat.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g6-l02-g1',
        num: '02',
        title: 'Word panelidan tekislash tugmasini top',
        topic: 'Shrift va tekislash',
        difficulty: 'Oson',
        engine: 'hotspot',
        config: {
          prompt: 'E’lon sarlavhasini sahifaning o‘rtasiga joylashtirish uchun "Markazga (Center)" tugmasini bosing.',
          appTitle: 'Word — E’lon.docx',
          layout: 'word',
          targetZoneId: 'align',
          zones: [
            { id: 'bold', label: 'B (Qalin)', group: 'Shrift' },
            { id: 'italic', label: 'I (Kursiv)', group: 'Shrift' },
            { id: 'align', label: 'Markazga (Center)', group: 'Abzats' },
            { id: 'save', label: 'Saqlash (Save)', group: 'Fayl' },
          ],
          explanation: 'Markazga tekislash (Center / Ctrl+E) sarlavhalarni sahifa o‘rtasiga chiroyli joylashtiradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Sarlavhalarni sahifa o‘rtasiga joylashtirish uchun qaysi tekislash turi ishlatiladi?',
        options: ['Chapga (Left)', 'Markazga (Center)', 'O‘ngga (Right)', 'Kesish (Cut)'],
        answer: 1,
        explanation: 'Center tekislashi matnni sahifaning gorizontal markaziga qo‘yadi.',
      },
      {
        prompt: 'Matnning ham chap, ham o‘ng chetini kitob sahifasidek tekis qiladigan buyruq nima?',
        options: ['Justify', 'Italic', 'Underline', 'Bullets'],
        answer: 0,
        explanation: 'Justify buyrug‘i so‘zlar orasini moslab ikki chetni tekislaydi.',
      },
      {
        prompt: 'Shrift o‘lchami asosan qanday birlikda o‘lchanadi?',
        options: ['Kilogramm', 'Piksel (px) / Punkt (pt)', 'Bayt', 'Gers'],
        answer: 1,
        explanation: 'Matn muharrirlarida shrift o‘lchami punkt (pt) da beriladi.',
      },
      {
        prompt: 'Qaysi tugma tanlangan matnni qalin (Bold) ko‘rinishga keltiradi?',
        options: ['U', 'I', 'B', 'A'],
        answer: 2,
        explanation: 'B (Bold) tugmasi matnni qalinlashtiradi.',
      },
      {
        prompt: 'Rasmiy hujjatda oq fonga qaysi matn rangini tanlash eng to‘g‘ri?',
        options: ['Oq rang', 'Och sariq', 'Qora yoki to‘q ko‘k', 'Och pushti'],
        answer: 2,
        explanation: 'Yuqori kontrast (oq fonda qora/to‘q rang) o‘qishni osonlashtiradi.',
      },
    ],
    teacherNotes: {
      method: 'Taqqoslash: formatlanmagan matn va to‘g‘ri shrift/tekislash qo‘llangan matnni proyektorda solishtiring.',
      timing: '5 daqiqa, 14 daqiqa tushuntirish, 18 daqiqa amaliyot, 8 daqiqa test.',
      assessment: 'E’lon sarlavhasi, matni va sanasi to‘g‘ri tekislangan bo‘lsa — to‘liq ball.',
      homework: 'Sevimli kitob sahifasida qaysi tekislash turi (Justify/Center) ishlatilganini aniqlash.',
    },
  },
  {
    id: 'g6-l03',
    grade: 6,
    no: 3,
    part: '1-yarim yillik',
    title: 'Hujjatga tasvir va hoshiya qo‘shish',
    kind: 'dars',
    hours: 1,
    tools: ['Word', 'LibreOffice Writer'],
    objectives: [
      'O‘quvchi hujjatga kompyuterdan rasm (Insert → Picture) joylashtira oladi.',
      'O‘quvchi rasm va sahifa atrofiga hoshiya (Border) qo‘sha oladi.',
    ],
    intro:
      'Faqat harflardan iborat quruq varaqdan ko‘ra, mavzuga mos rasm va chiroyli ramkali (hoshiyali) taklifnoma yoki devoriy gazeta har kimni o‘ziga tortadi!',
    sections: [
      {
        heading: 'Hujjatga tasvir qo‘shish (Insert Picture)',
        body: 'Tasvir joylash uchun kursorni kerakli joyga qo‘ying va Qo‘yish (Insert) → Tasvirlar (Pictures) buyrug‘ini tanlang. Rasm qo‘yilgach, uning burchagidagi nuqtalardan tortib o‘lchamini mutanosib kichraytirish mumkin.',
        example: 'O‘zbekiston tabiati haqidagi maqolaga tog‘ manzarasi rasmini joylaymiz.',
        tip: 'Xatolardan ehtiyot bo‘l: rasmni yon yoki ustki o‘rtadagi nuqtadan tortmang — u cho‘zilib xunuklashadi. Doim burchakdagi nuqtadan torting!',
      },
      {
        heading: 'Tasvir va sahifa hoshiyalari (Borders)',
        body: 'Hoshiya (Border) — rasm yoki butun sahifa atrofiga tushiriladigan ramka chizig‘i. Word dasturida Design → Page Borders orqali sahifaga klassik chiziqli yoki naqshli ramka qo‘yish mumkin.',
        example: 'Tabriknoma chetiga ingichka oltinrang hoshiya tanlab, rasmiy ko‘rinish beramiz.',
      },
    ],
    keyTerms: [
      { term: 'Insert (Qo‘yish)', definition: 'Hujjatga rasm, jadval yoki shakl qo‘shish menyu bo‘limi.' },
      { term: 'Hoshiya (Border)', definition: 'Sahifa, matn bloki yoki rasm atrofidagi dekorativ ramka.' },
      { term: 'Page Borders', definition: 'Butun sahifa chetlariga ramka o‘rnatish uskunasi.' },
      { term: 'Mutanosib o‘lcham', definition: 'Rasmning eni va bo‘yi nisbatini buzmasdan kattalashtirish yoki kichraytirish.' },
    ],
    steps: [
      '1. Hujjatga "Navro‘z bayrami" sarlavhasini yozing.',
      '2. Insert → Pictures orqali bahoriy tasvirni qo‘shing.',
      '3. Rasm burchagidan tortib o‘lchamini sahifaga moslang.',
      '4. Design → Page Borders (LibreOffice’da Format → Page Style → Borders) dan sahifa ramkasini qo‘ying.',
    ],
    practice: [
      {
        task: 'Maktab to‘garagi e’loniga mavzuga mos bitta rasm va sahifa hoshiyasi qo‘shing.',
        expected: 'Rasm nisbati buzilmagan va sahifa chiroyli ramkaga olingan.',
        difficulty: 'oson',
      },
      {
        task: 'Rasmning o‘ziga ham ingichka ko‘k hoshiya (Picture Border) bering.',
        expected: 'Tasvir atrofi aniq chiziq bilan ajralib turadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g6-l03-g1',
        num: '03',
        title: 'Tasvir va hoshiya atamalari',
        topic: 'Insert va Border',
        difficulty: 'Oson',
        engine: 'fillblank',
        config: {
          prompt: 'Matnni mos buyruqlar bilan to‘ldiring.',
          template: 'Hujjatga rasm qo‘shish uchun {{0}} menyusidan foydalanamiz, sahifaga ramka qo‘yish esa {{1}} deyiladi.',
          blanks: [
            { options: ['Insert', 'Print', 'Delete', 'Copy'], answer: 'Insert' },
            { options: ['Page Borders', 'Font Color', 'Backspace', 'Zoom'], answer: 'Page Borders' },
          ],
          hint: 'Qo‘shish — Insert, sahifa hoshiyasi — Page Borders.',
          explanation: 'Insert menyusi hujjatga obyekt kiritadi, Page Borders esa sahifa ramkasini beradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Hujjatga kompyuterdagi rasmni qo‘shish qaysi menyudan boshlanadi?',
        options: ['Insert (Qo‘yish)', 'View (Ko‘rinish)', 'Print (Chop etish)', 'Find (Topish)'],
        answer: 0,
        explanation: 'Insert → Pictures buyrug‘i fayldan rasm joylaydi.',
      },
      {
        prompt: 'Rasmni cho‘zib yubormasdan (nisbatini saqlab) kichraytirish uchun qayerdan tortish kerak?',
        options: ['Rasm o‘rtasidan', 'Burchakdagi nuqtadan', 'Eng yuqori chiziqdan', 'Sarlavhadan'],
        answer: 1,
        explanation: 'Burchakdagi nuqta eni va bo‘yini bir vaqtda mutanosib o‘zgartiradi.',
      },
      {
        prompt: 'Page Borders buyrug‘i nima vazifa bajaradi?',
        options: ['Matnni o‘chiradi', 'Sahifa atrofiga hoshiya (ramka) qo‘yadi', 'Faylni saqlaydi', 'Shriftni qalin qiladi'],
        answer: 1,
        explanation: 'Page Borders sahifaga dekorativ hoshiya o‘rnatadi.',
      },
      {
        prompt: 'Hoshiya chizig‘ining qaysi xususiyatlarini o‘zgartirish mumkin?',
        options: ['Faqat nomini', 'Rangi, qalinligi va uslubini', 'Faqat hajmini baytda', 'Ovoz balandligini'],
        answer: 1,
        explanation: 'Ramkaning uslubi (uzuk/tutash), rangi va qalinligini sozlash mumkin.',
      },
      {
        prompt: 'Hujjatga haddan tashqari ko‘p bezak va katta ramkalar qo‘yish qanday ta’sir qiladi?',
        options: ['Tezlikni oshiradi', 'Asosiy matnni o‘qishni qiyinlashtiradi', 'Faylni avtomatik chop etadi', 'Xatolarni tuzatadi'],
        answer: 1,
        explanation: 'Ortiqcha bezak diqqatni chalg‘itadi; dizayn me’yorda bo‘lishi kerak.',
      },
    ],
    teacherNotes: {
      method: 'Mini-tanlov: "Eng tartibli bayram taklifnomasi" sahifasini rasm va hoshiya bilan bezash.',
      timing: '5 daqiqa, 13 daqiqa tushuntirish, 20 daqiqa amaliyot, 7 daqiqa test.',
      assessment: 'Rasm proporsiyasi buzilmagan va hoshiya to‘g‘ri qo‘yilgani tekshiriladi.',
      homework: 'Taklifnoma dizaynini daftarda qog‘ozga chizib kelish.',
    },
  },
  {
    id: 'g6-l04',
    grade: 6,
    no: 4,
    part: '1-yarim yillik',
    title: 'Hujjatlarni auditoriya uchun moslash',
    kind: 'dars',
    hours: 1,
    tools: ['Word', 'LibreOffice Writer'],
    objectives: [
      'O‘quvchi hujjat yaratishda kim o‘qishini (auditoriyani) hisobga olishni biladi.',
      'O‘quvchi yosh va vaziyatga qarab til, shrift hamda tasvirlarni moslay oladi.',
    ],
    intro:
      '1-sinf o‘quvchisi uchun tayyorlangan ertak kitobi bilan maktab direktoriga yoziladigan rasmiy ariza bir xil ko‘rinishda bo‘ladimi? Albatta yo‘q! Hujjat kim uchun mo‘ljallanganiga qarab o‘zgaradi.',
    sections: [
      {
        heading: 'Maqsadli auditoriya nima?',
        body: 'Auditoriya — siz yaratayotgan hujjatni o‘qiydigan odamlar guruhi (bolalar, o‘qituvchilar, ota-onalar yoki rasmiy rahbarlar). Ularning yoshi, qiziqishi va bilim darajasiga qarab shrift, rang va so‘z boyligi tanlanadi.',
        example: 'Boshlang‘ich sinflar uchun katta shrift (16 pt), rangli rasmlar va sodda so‘zlar ishlatamiz; rasmiy hisobotda esa 12–14 pt jiddiy shrift va jadval qo‘llaymiz.',
        tip: 'Xatolardan ehtiyot bo‘l: rasmiy xatga kulgili multfilm rasmlari yoki juda mayda (8 pt) o‘qilmaydigan shrift qo‘yib yubormang!',
      },
      {
        heading: 'Auditoriyaga moslash mezonlari',
        body: 'Hujjatni moslashda 4 jihat tekshiriladi: 1) Shrift o‘qilishi; 2) Til uslubi (samimiy yoki rasmiy); 3) Tasvir va ranglar muvozanati; 4) Qisqalik va aniqlik.',
        example: 'Ota-onalar majlisi e’lonida vaqt va xona raqami alohida Qalin (Bold) ko‘rinishda beriladi.',
      },
    ],
    keyTerms: [
      { term: 'Auditoriya', definition: 'Hujjat yoki taqdimot mo‘ljallangan o‘quvchi va tinglovchilar guruhi.' },
      { term: 'Rasmiy uslub', definition: 'Ariza, buyruq va hisobotlarda ishlatiladigan qat’iy, tartibli matn turi.' },
      { term: 'Vizual muvozanat', definition: 'Matn, bo‘sh joy va rasmlarning sahifada ko‘zga yoqimli taqsimlanishi.' },
      { term: 'Kontrast', definition: 'Matn va fon ranglari orasidagi aniq ajralib turish darajasi.' },
    ],
    steps: [
      '1. Bir xil mavzuni tanlang: "Maktabda kitobxonlik haftaligi".',
      '2. 2-sinf o‘quvchilari uchun rangli, katta shriftli va rasmli qisqa e’lon tuzing.',
      '3. Keyingi sahifada o‘sha tadbir haqida o‘qituvchilar uchun aniq sanalar yozilgan rasmiy dastur yarating.',
    ],
    practice: [
      {
        task: 'Boshlang‘ich sinf o‘quvchilari uchun "Yo‘l qoidalari" eslatmasini katta shrift va rasm bilan tayyorlang.',
        expected: 'Oson o‘qiladigan, yirik shriftli va tushunarli eslatma.',
        difficulty: 'oson',
      },
      {
        task: 'Xuddi shu mavzuni yuqori sinf o‘quvchilari uchun statistik ma’lumotli jiddiy varaqaga aylantiring.',
        expected: 'Auditoriyaga qarab uslub va dizayn farqi aniq ko‘rinadi.',
        difficulty: 'qiyin',
      },
    ],
    games: [
      {
        id: 'g6-l04-g1',
        num: '04',
        title: 'Hujjatni auditoriyaga moslang',
        topic: 'Auditoriya tahlili',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'Har bir auditoriyaga mos hujjat dizaynini juftlang.',
          pairs: [
            { left: '1-sinf o‘quvchisi', right: 'Yirik shrift, sodda gaplar va ko‘p rasm' },
            { left: 'Maktab direktori', right: 'Rasmiy uslub, aniq sana va jiddiy shrift' },
            { left: 'Ota-onalar guruhi', right: 'Majlis vaqti, joyi va kun tartibi aniq ajratilgan' },
            { left: 'Shaxmat to‘garagi', right: 'Turnir jadvali va shaxmat tasviri qo‘shilgan afisha' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Hujjatdagi "Auditoriya" tushunchasi nimani bildiradi?',
        options: ['Faqat kompyuter xonasini', 'Hujjatni o‘qiydigan va foydalanadigan insonlar guruhini', 'Printer markasini', 'Fayl kengaytmasini'],
        answer: 1,
        explanation: 'Auditoriya — hujjat kimlar uchun tayyorlanayotganini bildiradi.',
      },
      {
        prompt: 'Kichik yoshli bolalar (7–8 yosh) uchun bukletda qanday shrift qulay?',
        options: ['8 pt murakkab qo‘lyozma shrift', '14–16 pt aniq va oson o‘qiladigan shrift', 'Kulrang fonda och sariq matn', 'Faqat katta jadvallar'],
        answer: 1,
        explanation: 'Kichik bolalar uchun aniq, yirik va kontrastli shrift tanlanadi.',
      },
      {
        prompt: 'Maktab direktoriga yoziladigan arizaga multfilm stikeri qo‘shish nima uchun xato?',
        options: ['Printer bo‘yoq tugaydi', 'Bu rasmiy auditoriya va uslubga to‘g‘ri kelmaydi', 'Word rasm ochmaydi', 'Fayl saqlanmaydi'],
        answer: 1,
        explanation: 'Rasmiy hujjatda bezaklar emas, aniqlik va jiddiylik muhim.',
      },
      {
        prompt: 'E’lon o‘quvchiga tez tushunarli bo‘lishi uchun nima eng muhim?',
        options: ['Sana va manzilni Qalin (Bold) bilan ajratish', 'Hamma gapni bitta uzun abzatsda yozish', '10 xil rang ishlatish', 'Sarlavhasiz qoldirish'],
        answer: 0,
        explanation: 'Asosiy ma’lumot (vaqt, joy) ko‘zga darhol tashlanishi kerak.',
      },
      {
        prompt: 'Qaysi matn rangi oq qog‘ozda eng yaxshi o‘qiladi?',
        options: ['Oq', 'Sariq', 'Qora', 'Och ko‘k'],
        answer: 2,
        explanation: 'Qora matn oq fonda maksimal kontrast beradi.',
      },
    ],
    teacherNotes: {
      method: 'Guruhli ish: 1-guruh bolalar uchun, 2-guruh ota-onalar uchun bir xil mavzuda e’lon tayyorlaydi.',
      timing: '5 daqiqa, 12 daqiqa muhokama, 20 daqiqa amaliyot, 8 daqiqa test.',
      assessment: 'Tanlangan dizayn o‘z auditoriyasiga qanchalik mosligi baholanadi.',
      homework: 'Kundalik hayotda ko‘rgan ikki xil afisha (bolalar va kattalar uchun) farqini yozib kelish.',
    },
  },
  {
    id: 'g6-l05',
    grade: 6,
    no: 5,
    part: '1-yarim yillik',
    title: 'Loyiha ishi. Amaliy mashg‘ulot',
    kind: 'loyiha',
    hours: 1,
    tools: ['Word', 'LibreOffice Writer'],
    objectives: [
      'O‘quvchi 1–4-darslarda o‘rgangan barcha Word ko‘nikmalarini bitta loyihada jamlaydi.',
      'O‘quvchi mustaqil ravishda sarlavha, formatlangan matn, rasm va hoshiyali afisha yaratadi.',
    ],
    intro:
      'Endi o‘z mahoratingizni namoyish etish vaqti keldi! Bugun "Mening maktabim" yoki "Ekologiya kuni" mavzusida to‘liq tayyor buklet-afisha yaratamiz.',
    sections: [
      {
        heading: 'Loyihaning majburiy qismlari',
        body: 'Yakuniy hujjat quyidagilarni o‘z ichiga olishi shart: 1) Markazga tekislangan yirik sarlavha; 2) Auditoriyaga mos shriftda 2 ta chiroyli tekislangan xatboshi; 3) Mavzuga doir kamida 1 ta rasm (nisbati saqlangan); 4) Sahifa hoshiyasi (Page Border).',
        example: 'Loyiha nomi: "Maktabimizda yashil bog‘ aksiyasi" — tepada rasm, pastda tadbir vaqti va shartlari.',
        tip: 'Xatolardan ehtiyot bo‘l: loyihani tugatgandan keyin faylni "Loyiha_Ism.docx" nomi bilan saqlashni (Ctrl+S) unutmang!',
      },
    ],
    keyTerms: [
      { term: 'Loyiha hujjati', definition: 'Bir nechta formatlash usullarini birlashtirgan yakuniy ijodiy ish.' },
      { term: 'Maket', definition: 'Matn va tasvirlarning sahifadagi umumiy joylashuv rejasi.' },
      { term: 'Eksport / PDF', definition: 'Hujjatni boshqa kompyuterda dizayni buzilmaydigan formatga saqlash.' },
      { term: 'Tekshiruv (Review)', definition: 'Imlo xatolari va bo‘sh joylarni yakuniy ko‘zdan kechirish.' },
    ],
    steps: [
      '1. Reja tuzing: loyiha kim uchun (auditoriya) va nima haqida?',
      '2. Sahifa hoshiyasini (Page Borders) qo‘ying.',
      '3. Sarlavha va 2–3 qatorli ma’lumot matnini kiriting, shrift va tekislashni moslang.',
      '4. Tasvir qo‘shib hajmini tartiblang va hujjatni saqlang (Save).',
    ],
    practice: [
      {
        task: 'Sinfingiz kutubxonasi uchun "Kitob — bilim bulog‘i" nomli 1 sahifali afisha yarating.',
        expected: 'Hoshiyali, rasmli, markazlashgan sarlavhali va imlo xatolarisiz tayyor sahifa.',
        difficulty: 'o‘rta',
      },
      {
        task: 'Tayyor hujjatni PDF ko‘rinishida ham saqlab ko‘ring.',
        expected: 'Barcha kompyuterlarda bir xil ochiladigan PDF fayl hosil bo‘ladi.',
        difficulty: 'qiyin',
      },
    ],
    games: [
      {
        id: 'g6-l05-g1',
        num: '05',
        title: 'Loyiha afishasini tayyorlash tartibi',
        topic: 'Hujjat loyihasi',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Word loyihasini yaratish va topshirish bosqichlarini tartiblang.',
          items: [
            'Auditoriya va mavzuni aniqlab reja tuzish',
            'Matnni kiritib sarlavha va abzatslarni tekislash',
            'Mavzuga mos tasvir va sahifa hoshiyasi qo‘shish',
            'Imloni tekshirib loyihani qulay nom bilan saqlash',
          ],
          hint: 'Avval reja, keyin matn, so‘ng rasm/hoshiya va oxirida tekshirib saqlash.',
          explanation: 'Tartibli bosqichlar hujjat sifatini yuqori va xatosiz qiladi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Loyiha hujjati boshida eng birinchi qilinadigan ish nima?',
        options: ['Printerdan chiqarish', 'Mavzu va auditoriyani belgilash', 'Matnni o‘chirish', 'O‘yin o‘ynash'],
        answer: 1,
        explanation: 'Kim uchun va nima yozilishini aniqlamay turib yaxshi dizayn qilib bo‘lmaydi.',
      },
      {
        prompt: 'Tayyor afisha dizayni boshqa kompyuterda o‘zgarib ketmasligi uchun qaysi formatda saqlash qulay?',
        options: ['.txt', '.pdf', '.mp3', '.bmp'],
        answer: 1,
        explanation: 'PDF formatida shrift va rasm joylashuvi har qanday qurilmada bir xil saqlanadi.',
      },
      {
        prompt: 'Afisha sarlavhasi uchun eng mos joylashuv qaysi?',
        options: ['Markazda, yirik va qalin shriftda', 'Eng pastda 8 pt shriftda', 'Matn orasiga yashirilgan', 'Chap burchakda mayda'],
        answer: 0,
        explanation: 'Sarlavha birinchi bo‘lib ko‘zga tashlanishi kerak.',
      },
      {
        prompt: 'Hujjatga qo‘yilgan rasm va matn bir-biriga yopishib qolsa nima qilish kerak?',
        options: ['Rasm o‘lchamini moslash va bo‘shliq qoldirish', 'Hammasini o‘chirish', 'Kompyuterni o‘chirish', 'Shrift rangini oq qilish'],
        answer: 0,
        explanation: 'Rasmni kichraytirish yoki matnni siljitish sahifani chiroyli qiladi.',
      },
      {
        prompt: 'Ish jarayonida chiroq o‘chsa mehnat kuyib ketmasligi uchun nima qilish kerak?',
        options: ['Monitorni o‘chirish', 'Har 5 daqiqada Ctrl+S bosib saqlab turish', 'Caps Lock yoqish', 'Kursor rangini o‘zgartirish'],
        answer: 1,
        explanation: 'Tez-tez saqlash (Ctrl+S) kutilmagan uzilishda ma’lumotni asraydi.',
      },
    ],
    teacherNotes: {
      method: 'Amaliy loyiha: o‘quvchilar yakka tartibda mini-afisha yaratadi va sinfga namoyish qiladi.',
      timing: '3 daqiqa vazifa, 32 daqiqa loyiha ishlash, 10 daqiqa taqdimot va test.',
      assessment: '4 mezon (sarlavha, tekislash, rasm, hoshiya) bo‘yicha 5 ballik tizimda baholanadi.',
      homework: 'Keyingi dars uchun Paint dasturida ochishga 1 ta rasm tayyorlab kelish.',
    },
  },
  {
    id: 'g6-l06',
    grade: 6,
    no: 6,
    part: '1-yarim yillik',
    title: 'Tasvirni import qilish',
    kind: 'dars',
    hours: 1,
    tools: ['Paint', 'GIMP'],
    objectives: [
      'O‘quvchi tashqi tasvir faylini grafik muharrirga import (ochish/qo‘yish) qila oladi.',
      'O‘quvchi tasvir formatlari (.jpg, .png, .bmp) va ularning xususiyatlarini farqlaydi.',
    ],
    intro:
      'Har doim noldan rasm chizish shart emas! Tayyor fotosurat, xarita yoki logotipni grafik muharrirga olib kirib (import qilib), ustiga yozuv yoki yangi detallar chizish mumkin.',
    sections: [
      {
        heading: 'Tasvirni import qilish usullari',
        body: 'Paint dasturida tasvirni olib kirishning ikki yo‘li bor: 1) File → Open (Fayl → Ochish) — rasmni asosiy varaq sifatida ochadi; 2) Paste → Paste from... — mavjud chizmangiz ustiga ikkinchi rasmni qo‘shimcha element sifatida olib kiradi.',
        example: 'O‘zingiz chizgan bog‘ manzarasiga Paste from orqali qushcha rasmini joylashingiz mumkin.',
        tip: 'Xatolardan ehtiyot bo‘l: File → Open ni bossangiz, oldingi chizgan rasmingizni saqlamasangiz yopilib ketadi. Avval Ctrl+S bosing!',
      },
      {
        heading: 'Keng tarqalgan tasvir formatlari',
        body: 'JPEG (.jpg) — fotosuratlar uchun ixcham format; PNG (.png) — tiniq va shaffof fonli (transparent) tasvirlar uchun qulay; BMP — siqilmagan, juda katta hajmli eski format.',
        example: 'Logotiplar uchun .png, tabiat suratlari uchun .jpg formati eng mos.',
      },
    ],
    keyTerms: [
      { term: 'Import qilish', definition: 'Tashqi faylni dastur ishchi maydoniga yuklab olish.' },
      { term: 'Paste from...', definition: 'Mavjud rasm ichiga boshqa tasvir faylini kiritish buyrug‘i.' },
      { term: 'PNG', definition: 'Sifatni yo‘qotmaydigan va shaffof fonni qo‘llab-quvvatlovchi tasvir formati.' },
      { term: 'JPEG (.jpg)', definition: 'Fotosuratlarni kichik hajmda saqlovchi ommabop format.' },
    ],
    steps: [
      '1. Paint (yoki bepul GIMP / Pinta) dasturini oching.',
      '2. Oq fonda oddiy uy yoki tabiat chizing.',
      '3. Paste → Paste from... tugmasini bosib, papkadagi quyosh yoki bulut tasvirini import qiling.',
      '4. Tasvir burchagidan kichraytirib osmon qismiga joylashtiring.',
    ],
    practice: [
      {
        task: 'Ikki xil tayyor rasmni Paste from orqali bitta umumiy kollajga birlashtiring.',
        expected: 'Ikki tasvir bitta tuvalda muvofiqlashgan ko‘rinishda joylashadi.',
        difficulty: 'oson',
      },
      {
        task: 'Import qilingan rasm ustiga matn (Text — A) uskunasi bilan izoh yozib saqlang.',
        expected: 'Kollaj izohli tayyor rasmga aylanadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g6-l06-g1',
        num: '06',
        title: 'Tasvir importi va formatlari',
        topic: 'Import va PNG/JPG',
        difficulty: 'Oson',
        engine: 'match',
        config: {
          prompt: 'Tushunchalarni to‘g‘ri ta’riflari bilan moslang.',
          pairs: [
            { left: 'Paste from...', right: 'Chizilayotgan rasm ichiga boshqa rasmni qo‘shish' },
            { left: '.png formati', right: 'Shaffof fonli aniq tasvir va logotiplar uchun' },
            { left: '.jpg formati', right: 'Fotosuratlarni ixcham hajmda saqlash uchun' },
            { left: 'File → Open', right: 'Mavjud rasmni alohida yangi ish sifatida ochish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Chizayotgan rasmingiz ichiga qo‘shimcha tayyor rasm qo‘yish uchun Paintda qaysi buyruq ishlatiladi?',
        options: ['Paste from...', 'Eraser', 'Print', 'Zoom Out'],
        answer: 0,
        explanation: 'Paste → Paste from... mavjud varaq ichiga boshqa fayldan rasm olib kiradi.',
      },
      {
        prompt: 'Shaffof (transparent) fonli logotip saqlash uchun eng mos format qaysi?',
        options: ['BMP', 'PNG', 'TXT', 'WAV'],
        answer: 1,
        explanation: 'PNG formati shaffof fonni saqlab qoladi.',
      },
      {
        prompt: 'File → Open bilan boshqa rasm ochishdan oldin nima qilish shart?',
        options: ['Joriy rasmni saqlash (Ctrl+S)', 'Monitorda rangni o‘chirish', 'Klaviatura tilini almashtirish', 'Faylni o‘chirish'],
        answer: 0,
        explanation: 'Saqlanmagan chizma Open bosilganda yo‘qolib ketishi mumkin.',
      },
      {
        prompt: 'Import atamasi nimani anglatadi?',
        options: ['Faylni o‘chirishni', 'Tashqaridagi faylni dasturga olib kirishni', 'Chop etishni', 'Rasmni qirqishni'],
        answer: 1,
        explanation: 'Import — tashqi resursni dasturga yuklash.',
      },
      {
        prompt: 'Oddiy kamera olgan fotosuratlar odatda qaysi formatda saqlanadi?',
        options: ['JPEG (.jpg)', 'DOCX', 'XLSX', 'EXE'],
        answer: 0,
        explanation: 'Raqamli fotoapparat va telefonlar suratlarni ko‘pincha .jpg formatida saqlaydi.',
      },
    ],
    teacherNotes: {
      method: 'Namoyish: kompyuterda oldindan tayyorlangan "Resurslar" papkasidan 2 ta rasmni import qilib ko‘rsatish.',
      timing: '5 daqiqa, 14 daqiqa tushuntirish, 18 daqiqa kollaj amaliyoti, 8 daqiqa test.',
      assessment: 'Paste from... orqali tasvirni fon ustiga sifatli joylagani baholanadi.',
      homework: 'Kompyuterdagi 3 xil rasmning kengaytmasini (.jpg, .png) aniqlab kelish.',
    },
  },
  {
    id: 'g6-l07',
    grade: 6,
    no: 7,
    part: '1-yarim yillik',
    title: 'Ishning boshlang‘ich nusxalari.',
    kind: 'dars',
    hours: 1,
    tools: ['Paint', 'GIMP'],
    objectives: [
      'O‘quvchi tahrirlashdan oldin asl rasmning boshlang‘ich nusxasini saqlash ahamiyatini tushunadi.',
      'O‘quvchi Save va Save As buyruqlari farqini amalda qo‘llay oladi.',
    ],
    intro:
      'Tasavvur qiling, chiroyli rasm ustida tajriba qilib, ranglarini butunlay qoraytirib yubordingiz va saqlab qo‘ydingiz. Asl rasmni qaytarib bo‘ladimi? Agar boshlang‘ich nusxasi saqlangan bo‘lsa — ha!',
    sections: [
      {
        heading: 'Nima uchun boshlang‘ich nusxa (Backup / Master) kerak?',
        body: 'Asl tasvir yoki hujjat ustida ko‘p o‘zgartirish qilishdan oldin uning toza nusxasini alohida nom bilan saqlab qo‘yish kerak. Shunda yangi tajriba yoqmasa, bemalol asl holatiga qaytishingiz mumkin.',
        example: 'Asl rasm "tabiat_asl.png" bo‘lsa, tahrirlangan variantni "tabiat_v2.png" deb saqlaymiz.',
        tip: 'Xatolardan ehtiyot bo‘l: Save As o‘rniga oddiy Save bossangiz, eski asl fayl ustiga yozilib o‘chib ketadi!',
      },
      {
        heading: 'Save va Save As farqi',
        body: 'Save (Ctrl+S) — o‘zgarishlarni joriy faylning o‘ziga yozadi. Save As (Boshqacha saqlash) — yangi nom yoki yangi joyda alohida nusxa yaratadi.',
        example: 'Bir rasmning rangli va oq-qora variantini olishda Save As dan foydalanamiz.',
      },
    ],
    keyTerms: [
      { term: 'Boshlang‘ich nusxa (Asl fayl)', definition: 'Tahrirlashdan oldingi o‘zgartirilmagan dastlabki fayl.' },
      { term: 'Save As (Boshqacha saqlash)', definition: 'Faylni yangi nom, joy yoki formatda alohida nusxa sifatida saqlash.' },
      { term: 'Versiyalash', definition: 'Ish bosqichlarini nomlar (v1, v2) orqali alohida fayllarda saqlash.' },
      { term: 'Zaxira nusxa (Backup)', definition: 'Ma’lumot yo‘qolishining oldini olish uchun olingan qo‘shimcha nusxa.' },
    ],
    steps: [
      '1. Tayyor rasmni Paint dasturida oching.',
      '2. File → Save As orqali "mening_ishim_v2.png" nomi bilan nusxa saqlang.',
      '3. Yangi nusxaga qo‘shimcha bezaklar qo‘shing va Save bosing.',
      '4. Papkada ham asl fayl, ham "v2" fayl turganini tekshiring.',
    ],
    practice: [
      {
        task: 'Bitta rasmdan Save As yordamida 2 ta turli variant ("kunduz" va "tun") yarating.',
        expected: 'Papkada 3 ta alohida fayl (asl, kunduz, tun) bo‘ladi.',
        difficulty: 'oson',
      },
      {
        task: 'Versiyalardan birini .jpg formatiga o‘tkazib saqlang.',
        expected: 'Fayl kengaytmasi .jpg ga o‘zgaradi va hajmi kichrayadi.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g6-l07-g1',
        num: '07',
        title: 'Save vs Save As vaziyati',
        topic: 'Boshlang‘ich nusxa',
        difficulty: 'Oson',
        engine: 'casestudy',
        config: {
          prompt: 'To‘g‘ri qarorni tanlang.',
          scenario: 'Sizda "maktab_asl.png" fayli bor. Ustiga katta matn yozib ko‘rmoqchisiz, lekin asl toza rasm ham yo‘qolib qolmasligini xohlaysiz. Qaysi buyruqni tanlaysiz?',
          options: [
            {
              text: 'Matn yozib darhol Save (Ctrl+S) bosaman.',
              isCorrect: false,
              feedback: 'Save eski "maktab_asl.png" faylini yangilab yuboradi va toza rasmni yo‘qotadi.',
            },
            {
              text: 'Avval File → Save As orqali "maktab_matnli.png" deb saqlab, keyin o‘zgartiraman.',
              isCorrect: true,
              feedback: 'Barakalla! Shunda ham asl rasm saqlanadi, ham yangi variant alohida fayl bo‘ladi.',
            },
            {
              text: 'Rasmni o‘chirib tashlab qaytadan chizaman.',
              isCorrect: false,
              feedback: 'Bu ortiqcha vaqt sarfi — Save As bir soniyada nusxa yaratadi.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Asl rasmni buzib qo‘ymasdan uning ustida tajriba o‘tkazish uchun qaysi buyruq ishlatiladi?',
        options: ['Save As (Boshqacha saqlash)', 'Delete', 'Close', 'Select All'],
        answer: 0,
        explanation: 'Save As boshqa nom bilan yangi nusxa yaratadi va asl faylni himoya qiladi.',
      },
      {
        prompt: 'Faylni versiyalash (masalan, v1, v2) nimaga foydali?',
        options: ['Monitorni tozalashga', 'Avvalgi muvaffaqiyatli holatga qaytishga', 'Internet tezligini oshirishga', 'Printerni yoqishga'],
        answer: 1,
        explanation: 'Agar keyingi o‘zgartirish yoqmasa, v1 nusxasidan davom ettirish mumkin.',
      },
      {
        prompt: 'Ctrl + S tugmasi odatda qaysi amalni bajaradi?',
        options: ['Joriy faylni saqlash (Save)', 'Hujjatni yopish', 'Rangni teskari qilish', 'Chop etish'],
        answer: 0,
        explanation: 'Ctrl + S o‘zgarishlarni ochiq faylning o‘ziga saqlaydi.',
      },
      {
        prompt: 'Save As oynasida nimalarni o‘zgartirish mumkin?',
        options: ['Fayl nomi, saqlash papkasi va fayl formatini', 'Protsessor tezligini', 'Klaviatura harflarini', 'Ekran yorqinligini'],
        answer: 0,
        explanation: 'Save As nomi, manzili va turini (.png/.jpg) tanlash imkonini beradi.',
      },
      {
        prompt: 'Boshlang‘ich nusxa (Master copy) bilan ishlashning oltin qoidasi nima?',
        options: ['Asl nusxani o‘zgartirmay saqlab qo‘yish', 'Asl nusxani darhol o‘chirish', 'Hech qachon saqlamaslik', 'Faqat bitta faylda saqlash'],
        answer: 0,
        explanation: 'Asl fayl har doim zaxira sifatida daxlsiz qolishi kerak.',
      },
    ],
    teacherNotes: {
      method: 'Vaziyatli muhokama: "Tasodifan saqlab yuborilgan xato" misolida Save As ni o‘rgatish.',
      timing: '5 daqiqa, 12 daqiqa tushuntirish, 20 daqiqa v1/v2 yaratish mashqi, 8 daqiqa test.',
      assessment: 'O‘quvchi papkasida asl fayl o‘zgarmagan holda yangi nusxa borligi tekshiriladi.',
      homework: 'Save va Save As farqini 2 jumlada yozib kelish.',
    },
  },
  {
    id: 'g6-l08',
    grade: 6,
    no: 8,
    part: '1-yarim yillik',
    title: 'Tasvirlarni aylantirish, teskari o‘girish. Tasvirni o‘lchamlarini o‘zgartish',
    kind: 'dars',
    hours: 1,
    tools: ['Paint', 'GIMP'],
    objectives: [
      'O‘quvchi tasvirni 90°, 180° aylantira (Rotate) va gorizontal/vertikal aks ettira (Flip) oladi.',
      'O‘quvchi tasvir o‘lchamlarini piksel va foizlarda proporsiyani saqlab o‘zgartira oladi.',
    ],
    intro:
      'Telefon bilan olingan surat ba’zan yonboshlab tushib qoladi yoki rasm hajmi saytga yuklash uchun juda katta bo‘ladi. Grafik muharrirda Rotate, Flip va Resize uskunalari shu muammoni darhol hal qiladi.',
    sections: [
      {
        heading: 'Aylantirish (Rotate) va Teskari o‘girish (Flip)',
        body: 'Rotate Right 90° rasmni soat strelkasi bo‘yicha chorak aylanaga buradi; Rotate Left 90° chapga buradi; Rotate 180° ostini ustiga aylantiradi. Flip Horizontal — ko‘zgu kabi chapni o‘ngga o‘giradi; Flip Vertical — tepani pastga aks ettiradi.',
        example: 'Chapga qarab turgan mashina rasmini o‘ngga qaratish uchun Flip Horizontal ishlatiladi.',
        tip: 'Xatolardan ehtiyot bo‘l: 180° aylantirish bilan Flip Vertical bir xil emas — biri buradi, ikkinchisi ko‘zgu kabi aks ettiradi!',
      },
      {
        heading: 'O‘lchamni o‘zgartirish (Resize)',
        body: 'Paint dasturida Resize (Ctrl+W) tugmasi rasmni foiz (%) yoki piksel (px) bo‘yicha kattalashtirish yoki kichraytirish imkonini beradi. "Maintain aspect ratio" belgisini yoqib qo‘ysangiz, rasm cho‘zilib ketmaydi.',
        example: '4000×3000 pikselli katta rasmni 50% ga kamaytirsak, 2000×1500 px bo‘ladi va fayl hajmi 4 baravar kichrayadi.',
      },
    ],
    keyTerms: [
      { term: 'Rotate (Aylantirish)', definition: 'Tasvirni 90° yoki 180° burchakka burish amali.' },
      { term: 'Flip (Teskari o‘girish)', definition: 'Tasvirni gorizontal yoki vertikal ko‘zgu simmetriyasi bo‘yicha aks ettirish.' },
      { term: 'Resize (O‘lchamni o‘zgartirish)', definition: 'Tasvirning eni va bo‘yini foiz yoki pikselda o‘zgartirish.' },
      { term: 'Aspect Ratio', definition: 'Tasvir enining bo‘yiga bo‘lgan mutanosib nisbati.' },
    ],
    steps: [
      '1. Boshlang‘ich rasmni Save As bilan saqlab Paintda oching.',
      '2. Rotate tugmasini bosib 90° burish va Flip Horizontal natijasini solishtiring.',
      '3. Resize tugmasini (Ctrl+W) bosing va "Maintain aspect ratio" yoqilgan holda 75% kiriting.',
      '4. Natijani tekshirib saqlang.',
    ],
    practice: [
      {
        task: 'Yonboshlab qolgan suratni Rotate 90° bilan to‘g‘rilab, o‘lchamini 50% ga kamaytiring.',
        expected: 'Surat tik holatga keladi va hajmi ikki baravar kichik en/bo‘yda saqlanadi.',
        difficulty: 'oson',
      },
      {
        task: 'Simmetrik kapalakning yarmini chizib, nusxa oling va Flip Horizontal bilan ikkinchi qanotini yarating.',
        expected: 'Mukammal simmetrik kapalak tasviri.',
        difficulty: 'o‘rta',
      },
    ],
    games: [
      {
        id: 'g6-l08-g1',
        num: '08',
        title: 'Tasvirni burish va aks ettirish laboratoriyasi',
        topic: 'Rotate va Flip',
        difficulty: 'O‘rta',
        engine: 'imagelab',
        config: {
          prompt: 'Tasvirni Yorqinlik = 110%, Kontrast = 105%, burchagini 90° ga aylantiring va Gorizontal aks (Flip) ni yoqing.',
          subject: 'logo',
          target: {
            brightness: 110,
            contrast: 105,
            rotate: 90,
            flipH: true,
          },
          tolerance: 5,
          hint: 'Slayderlarni 110% va 105% ga qo‘yib, "90° Aylantirish" va "Gorizontal aks" tugmalarini bosing.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Tasvirni ko‘zgudagidek chapdan o‘ngga o‘giradigan buyruq qaysi?',
        options: ['Flip Horizontal', 'Rotate 90°', 'Resize 50%', 'Crop'],
        answer: 0,
        explanation: 'Flip Horizontal tasvirni vertikal o‘q bo‘yicha ko‘zgudek aks ettiradi.',
      },
      {
        prompt: 'Yonboshlab tushgan suratni tiklash uchun qaysi buyruq qo‘llanadi?',
        options: ['Rotate 90°', 'Flip Horizontal', 'Fill', 'Undo'],
        answer: 0,
        explanation: 'Rotate Left/Right 90° yonbosh suratni to‘g‘ri tiklaydi.',
      },
      {
        prompt: 'Resize oynasida "Maintain aspect ratio" belgisi nima uchun kerak?',
        options: ['Rasm rangini o‘zgartirish uchun', 'Tasvir eni va bo‘yi nisbatini buzmaslik uchun', 'Faylni o‘chirish uchun', 'Ramka qo‘shish uchun'],
        answer: 1,
        explanation: 'Aspect ratio saqlansa, rasm siqilib yoki cho‘zilib ketmaydi.',
      },
      {
        prompt: '1000×800 pikselli rasmni 50% ga Resize qilsak, yangi o‘lchami qancha bo‘ladi?',
        options: ['2000×1600 px', '500×400 px', '100×80 px', '950×750 px'],
        answer: 1,
        explanation: 'Har ikki tomon 50% (yarmi) ga kamayganda 500×400 px bo‘ladi.',
      },
      {
        prompt: 'Paintda Resize oynasini ochuvchi tezkor tugmalar kombinatsiyasi qaysi?',
        options: ['Ctrl + W', 'Ctrl + Z', 'Ctrl + P', 'Alt + Tab'],
        answer: 0,
        explanation: 'Paintda Ctrl + W Resize and Skew oynasini ochadi.',
      },
    ],
    teacherNotes: {
      method: 'Amaliy simmetriya: o‘quvchilar bitta obyektning yarmini chizib Flip orqali to‘liq simmetrik rasm yasaydi.',
      timing: '5 daqiqa, 12 daqiqa tushuntirish, 20 daqiqa ImageLab + Paint amaliyoti, 8 daqiqa test.',
      assessment: 'Rotate, Flip va Resize amallarini farqlay olishi baholanadi.',
      homework: 'Flip Horizontal va Rotate 180° farqini misol bilan chizib kelish.',
    },
  },
];
