import type { Lesson } from './types';

export const GRADE_11_Q4A: Lesson[] = [
  {
    id: 'g11-l53',
    grade: 11,
    no: 53,
    part: '4-chorak',
    title: 'Vektorli va rastrli tasvirlar',
    kind: 'dars',
    hours: 1,
    tools: ['Grafika', 'Inkscape (SVG) / GIMP (PNG/JPG)'],
    objectives: [
      'O‘quvchi **Vektorli (Vector)** va **Rastrli (Bitmap/Raster)** tasvirlarning tuzilishi, masshtablanish xususiyati, fayl hajmi va qo‘llanilish sohalarini aniq taqqoslaydi.',
      'O‘quvchi tasvir turlariga mos formatlarni (`SVG, EPS, AI, CDR` vs `PNG, JPEG, WebP, BMP`) hamda ochiq kodli/tijorat muharrirlarni (**Inkscape, CorelDRAW, Illustrator** vs **GIMP, Photoshop**) to‘g‘ri tanlaydi.',
    ],
    intro:
      'Nima uchun oddiy telefon fotosuratini 10 baravar kattalashtirganda kvadrat-kvadrat piksellarga (“zinalarga”) bo‘linib xiralashadi, lekin brend logotipi stadion banneriga chop etilganda ham o‘tkir chiziqda qoladi? Javob — **Rastrli** va **Vektorli** grafikalar farqida!',
    sections: [
      {
        heading: 'Rastrli (Bitmap / Raster) tasvirlar',
        body: '• **Tuzilishi**: rangli kvadrat nuqtalar — **piksellar (Pixels)** to‘ridan tashkil topadi. Sifati `DPI / PPI` (dyuymdagi nuqtalar) va o‘lchami (`1920×1080`) bilan belgilanadi.\n• **Kattalashtirish**: kuchli kattalashtirilganda piksellar ko‘rinib qolib xiralashadi (**Pixelation**).\n• **Fayl hajmi va formatlari**: ko‘p rangli fotolar uchun og‘irroq; formatlar — `JPEG` (yo‘qotishli siqish — fotolar), `PNG` (yo‘qotishsiz, shaffof fon), `WebP`, `BMP` (siqilmagan).\n• **Dasturlar**: **GIMP** (ochiq kodli bepul), **Krita**, **Adobe Photoshop**.',
      },
      {
        heading: 'Vektorli (Vector) tasvirlar',
        body: '• **Tuzilishi**: piksellardan emas, matematik formulalar bilan tasvirlangan nuqtalar (**Nodes**), **Bezye egri chiziqlari (Paths)**, to‘g‘ri chiziqlar va geometrik shakllardan tuziladi.\n• **Kattalashtirish**: istalgancha (1000×) kattalashtirilsa ham matematik formula qayta hisoblangani uchun sifati mutlaqo buzilmaydi!\n• **Fayl hajmi va formatlari**: geometrik shakl va logotiplar uchun juda kichik (`SVG` — aslida oddiy XML matn kodi!); formatlar — `SVG`, `EPS`, `PDF`, `AI`, `CDR`.\n• **Dasturlar**: **Inkscape** (ochiq kodli bepul), **CorelDRAW**, **Adobe Illustrator**.',
        tip: 'Fotorealistik suratlar (tabiat, portret) uchun **Rastrli**; logotip, shrift, xarita, ikona va banner chizmalari uchun esa **Vektorli** grafika tanlanadi!',
      },
    ],
    keyTerms: [
      { term: 'Rastrli tasvir (Bitmap)', definition: 'Har biri aniq rangga ega piksellar panjarasidan (matritsasidan) tuzilgan tasvir.' },
      { term: 'Vektorli tasvir', definition: 'Matematik tenglamalar, tugun nuqtalar (nodes) va Bezye egri chiziqlari bilan saqlanadigan grafik obyekt.' },
      { term: 'Pixelation', definition: 'Rastrli tasvirni ruxsat etilgan o‘lchamidan ortiq kattalashtirganda piksellarning ko‘rinib xiralashishi.' },
      { term: 'SVG (Scalable Vector Graphics)', definition: 'Veb va dizaynda qo‘llaniladigan XML asosidagi standart vektorli format.' },
    ],
    steps: [
      '1. Rastrli va Vektorli grafikani piksel vs formula nuqtai nazaridan taqqoslang.',
      '2. Har bir vazifa (foto tahrirlash vs logotip chizish) uchun to‘g‘ri dastur va formatni belgilang.',
      '3. Quyidagi moslashtirish va To‘g‘ri/Noto‘g‘ri o‘yinlarini bajaring.',
    ],
    practice: [
      {
        task: 'Maktabingiz uchun emblemali logotip va veb-sayt ikonalarini yaratishda nima uchun GIMP (PNG) o‘rniga Inkscape (SVG) afzal?',
        expected: 'Logotip tashrif qog‘ozidan tortib katta bannergacha turli o‘lchamlarda chop etiladi. SVG vektor formati har qanday o‘lchamda xiralashmaydi va vebda hajmi juda kichik bo‘ladi.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l53-g1',
        num: '01',
        title: 'Vektorli va Rastrli xususiyatlar',
        topic: 'Grafika turlari',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir tushuncha yoki formatni mos grafika turiga bog‘lang:',
          pairs: [
            { left: 'SVG / EPS / Inkscape', right: 'Vektorli grafika (matematik egri chiziqlar, cheksiz masshtab)' },
            { left: 'PNG / JPEG / GIMP', right: 'Rastrli grafika (piksellar panjarasi, fotosuratlar)' },
            { left: 'Pixelation (kvadratlashish)', right: 'Rastrli rasmni haddan tashqari kattalashtirganda yuz beruvchi nuqson' },
            { left: 'Bezye egri chizig‘i (Path)', right: 'Vektorli tasvirning tugunlar orqali chiziladigan asosi' },
          ],
        },
      },
      {
        id: 'g11-l53-g2',
        num: '02',
        title: 'Grafika faktlarini tekshiring',
        topic: 'Rastr vs Vektor',
        difficulty: 'O‘rta',
        engine: 'truefalse',
        config: {
          prompt: 'Vektorli va rastrli tasvirlar haqidagi fikrlarni baholang:',
          statements: [
            {
              text: 'Vektorli SVG rasmni 20 metrli bilbordga cho‘zib chop etsak ham uning chetlari zinalanib xiralashmaydi.',
              isTrue: true,
              explanation: 'To‘g‘ri! Chunki vektor koordinatalari har qanday o‘lchamda qayta hisoblanadi.',
            },
            {
              text: 'Raqamli fotoapparat bilan olingan tabiat manzarasini Vektorli formatda (oddiy SVG) saqlash pikselli JPEG dan ko‘ra tabiiyroq va yengilroq bo‘ladi.',
              isTrue: false,
              explanation: 'Noto‘g‘ri! Millionlab rang o‘tishlariga ega real fotolar Rastrli (JPEG/PNG) formatda samarali saqlanadi.',
            },
            {
              text: 'Inkscape vektor muharriri bo‘lsa, GIMP rastrli tasvir muharriridir.',
              isTrue: true,
              explanation: 'To‘g‘ri! Ikkalasi ham bepul va ochiq kodli (Open-Source) professional dasturlardir.',
            },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Istalgancha kattalashtirilganda ham sifatini yo‘qotmaydigan tasvir turi qaysi?',
        options: ['Rastrli (BMP)', 'Vektorli (SVG)', 'GIF animatsiya', 'JPEG'],
        answer: 1,
        explanation: 'Vektorli tasvir matematik chiziqlarga asoslangani uchun cheksiz masshtablanadi.',
      },
      {
        prompt: 'Rastrli (Bitmap) tasvirning eng kichik bo‘linmas elementi nima deb ataladi?',
        options: ['Piksel (Pixel)', 'Node (Tugun)', 'Vektor egri chizig‘i', 'Polygon'],
        answer: 0,
        explanation: 'Picture Element — piksel rastrli panjaradagi bitta rang nuqtasidir.',
      },
      {
        prompt: 'Qaysi juftlikdagi IKKALA dastur ham ochiq kodli (bepul) grafik muharrirlardir?',
        options: [
          'Inkscape (vektor) va GIMP (rastr)',
          'CorelDRAW va Adobe Photoshop',
          'Adobe Illustrator va Paint',
          'AutoCAD va MS Project',
        ],
        answer: 0,
        explanation: 'Inkscape va GIMP butun dunyoda professional ochiq kodli standart sifatida ishlatiladi.',
      },
      {
        prompt: 'Veb-sayt logotipi fon bilan aralashib ketmasligi (shaffof fon — Alpha kanal) va fotografik surat aniq chiqishi uchun qaysi rastrli format ishlatiladi?',
        options: ['PNG', 'BMP (shaffofliksiz)', 'TXT', 'MP3'],
        answer: 0,
        explanation: 'PNG formati yo‘qotishsiz siqish va shaffof fonni (Alpha channel) qo‘llab-quvvatlaydi.',
      },
      {
        prompt: 'Nima uchun raqamli fotosuratlarni Vektorli formatga o‘tkazish odatda maqsadga muvofiq emas?',
        options: [
          'Real suratlarda millionlab murakkab rang o‘tishlari bo‘lib, vektor formula bilan chizish ulkan fayl va sunʼiy ko‘rinish beradi',
          'Vektor formatda qizil rang yo‘q',
          'Fotolar faqat qora-oq bo‘ladi',
          'Vektor fayllar ekranda ko‘rinmaydi',
        ],
        answer: 0,
        explanation: 'Real hayotiy fotolar piksel to‘rida (rastrda) juda samarali siqiladi va saqlanadi.',
      },
    ],
    teacherNotes: {
      method: 'Ekranda Inkscape dagi `SVG` va GIMP dagi `PNG` rasmni 800% kattalashtirib (Zoom), piksellar va silliq vektor chetini ko‘rsating.',
      timing: 'Rastr vs Vektor 15 daqiqa, Formatlar va dasturlar 15 daqiqa, o‘yinlar va test 15 daqiqa.',
      assessment: 'O‘quvchi topshiriqqa qarab Vektor yoki Rastr hamda mos fayl formatini asosli tanlay olishi.',
      homework: 'Telefoningizdagi 2 ta surat (JPEG va veb-ikona SVG/PNG) ning hajmi va sifatini taqqoslab yozing.',
    },
  },
  {
    id: 'g11-l54',
    grade: 11,
    no: 54,
    part: '4-chorak',
    title: 'Guruhlash va biriktirish. Elementni burchak boʻylab aylantirish va joylashtirish. Transformatsiya uskunalari. Tanlash uskunalari.',
    kind: 'dars',
    hours: 1,
    tools: ['Grafika', 'Inkscape / CorelDRAW / GIMP'],
    objectives: [
      'O‘quvchi vektor muharrirda obyektlarni **Guruhlash (Group `Ctrl+G`)**, **Birlashtirish/Mantiqiy amallar (Union / Difference / Intersection)** va **Z-tartib (Layer / Bring to Front)** ni ajratadi.',
      'O‘quvchi **Transformatsiya uskunalari** (Rotate, Scale, Skew/Shear, Flip) va rastr muharrirdagi **Tanlash uskunalari (Selection Tools: Marquee, Lasso, Magic Wand, Select by Color)** ni vazifasiga ko‘ra qo‘llaydi.',
    ],
    intro:
      'Murakkab robot yoki logotip chizishda har bir qismni noldan qo‘lda chizish shart emas! Oddiy doira va to‘rtburchaklarni **guruhlash**, **biriktirish (Boolean amallar)**, aniq burchakka **aylantirish** va **tanlash** uskunalari bilan bir necha daqiqada professional dizayn yaratish mumkin.',
    sections: [
      {
        heading: 'Guruhlash (Group) vs Biriktirish (Union / Combine)',
        body: '• **Guruhlash (Group, `Ctrl+G`)**: bir nechta mustaqil obyektlarni vaqtincha bitta to‘plamga bog‘laydi — ular birga siljiydi va kattalashadi, lekin har biri o‘z rangini saqlaydi va `Ungroup (Ctrl+Shift+G)` bilan yana ajraladi.\n• **Birlashtirish va Kesish (Boolean Path Operations)**: shakllardan *yangi bitta shakl* yasaydi:\n  - **Union (Birlashtirish)**: ikki shaklni qo‘shib bitta kontur qiladi;\n  - **Difference (Ayirish)**: ustki shakl ostkisidan teshik/qism kesib oladi (masalan, yarim oy shakli — katta doiradan kichik doirani ayirish!);\n  - **Intersection (Kesishish)**: faqat ikkalasi ustma-ust tushgan umumiy qism qoladi.',
      },
      {
        heading: 'Transformatsiya va Tanlash (Selection) uskunalari',
        body: '• **Transformatsiya uskunalari**:\n  - **Rotate (Aylantirish)** va **Rotation Center (Aylanish markazi)**: masalan, soat strelkasi yoki gul yaproqlarini `30° / 45°` burchak bo‘ylab aylantirib nusxalash;\n  - **Scale (Masshtab)** — `Shift/Ctrl` ushlab proporsional kattalashtirish;\n  - **Skew / Shear (Qiyshaytirish)** — soya yoki 3D perspektiva effekti;\n  - **Flip (Akslantirish)** — gorizontal (`H`) yoki vertikal (`V`) ko‘zgu tasviri.\n• **Tanlash uskunalari (GIMP / Photoshop)**: *Rectangle/Ellipse Select* (to‘g‘ri shakl), *Free Select / Lasso* (erkin chiziq), *Fuzzy Select / Magic Wand* (o‘xshash rangli qo‘shni sohani bir bosishda tanlash), *Path / Pen* (eng aniq chetlar uchun).',
      },
    ],
    keyTerms: [
      { term: 'Group / Ungroup', definition: 'Bir nechta obyektni vaqtincha bitta blokdek boshqarish (va keyin yana ajrata olish).' },
      { term: 'Boolean Path (Union/Difference)', definition: 'Ikki yoki undan ortiq vektor shaklni qo‘shish, ayirish yoki kesishishidan yangi kontur yasash.' },
      { term: 'Skew (Qiyshaytirish)', definition: 'Obyekt tomonlarini maʼlum burchakka og‘diruvchi transformatsiya uskunasi.' },
      { term: 'Magic Wand (Fuzzy Select)', definition: 'Rastrli tasvirda bosilgan nuqtaga yaqin rangdagi barcha qo‘shni piksellarni tez tanlovchi uskuna.' },
    ],
    steps: [
      '1. `Group` (vaqtincha birga harakat) va `Union` (bitta yangi shaklga eritish) farqini ajrating.',
      '2. 12 ta gul yaprog‘ini aylana bo‘ylab qo‘yish uchun `360° / 12 = 30°` aylanish burchagini hisoblang.',
      '3. Quyidagi moslashtirish va hisob-kitob mashqlarini bajaring.',
    ],
    practice: [
      {
        task: 'Soat siferblatida 12 ta raqam chiziqchalarini markaz atrofida bir tekis joylashtirish uchun har bir nusxani necha gradus burchakka aylantirish kerak?',
        expected: 'To‘liq aylana 360° bo‘lgani uchun 360° / 12 = 30° burchak qadami bilan aylantirish kerak.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l54-g1',
        num: '01',
        title: 'Grafik uskunalarni vazifasiga bog‘lang',
        topic: 'Transformatsiya va Tanlash',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir grafik uskunani uning aniq vazifasi bilan moslang:',
          pairs: [
            { left: 'Group (Ctrl+G)', right: 'Turli rangdagi obyektlarni ajratish imkonini saqlab vaqtincha birga siljitish' },
            { left: 'Difference (Path ayirish)', right: 'Ustki shakl yordamida ostki shakldan teshik yoki yarim oy kesib olish' },
            { left: 'Skew / Shear', right: 'Obyektni maʼlum burchakka qiyshaytirish (soya yoki parallelogramm yasash)' },
            { left: 'Magic Wand / Fuzzy Select', right: 'Rastrli suratda bir xil rangdagi fonni bir klikda tanlash' },
          ],
        },
      },
      {
        id: 'g11-l54-g2',
        num: '02',
        title: 'Burchak bo‘ylab joylashtirish hisobi',
        topic: 'Aylantirish transformatsiyasi',
        difficulty: 'O‘rta',
        engine: 'calc',
        config: {
          prompt: 'Inkscape da 8 ta tishli shesternya (yoki 8 bargli gul) chizmoqchisiz. Aylanish markazini o‘rtaga qo‘yib, bitta tishni 360° bo‘ylab teng joylashtirish uchun har bir keyingi nusxani necha gradusga aylantirish kerak?',
          unit: 'gradus',
          correctAnswer: 45,
          tolerance: 0,
          steps: [
            'To‘liq aylana = 360 gradus',
            'Elementlar soni = 8 ta',
            'Burchak qadami = 360 / 8 = 45 gradus',
          ],
          hint: 'To‘liq aylanadagi 360 gradusni elementlar soni (8) ga bo‘ling.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Logotipdagi matn va ikona ranglarini yo‘qotmasdan, ularni birgalikda siljitish va kerak bo‘lganda yana ajratib tahrirlash uchun qaysi amal ishlatiladi?',
        options: ['Group (Guruhlash)', 'Difference (Ayirish)', 'Flatten Image', 'Crop'],
        answer: 0,
        explanation: 'Group elementlarni bitta konteynerga bog‘laydi va Ungroup bilan yana ajraladi.',
      },
      {
        prompt: 'Katta doira ichidan kichikroq doirani kesib olib, o‘rtasi teshik halqa (uzuk) yasash uchun qaysi Boolean amali qo‘llanadi?',
        options: ['Difference (Ayirish)', 'Group (Guruhlash)', 'Skew (Qiyshaytirish)', 'Flip Horizontal'],
        answer: 0,
        explanation: 'Difference ustki shakl yuzasini ostki shakldan kesib olib tashlaydi.',
      },
      {
        prompt: 'Rastrli fotodagi bir tekis ko‘k osmon fonini tezda ajratib tanlash uchun qaysi uskuna eng qulay?',
        options: ['Fuzzy Select / Magic Wand', 'Rectangle Select', 'Skew tool', 'Text tool'],
        answer: 0,
        explanation: 'Magic Wand o‘xshash rangdagi birlashgan piksellarni darhol tanlab beradi.',
      },
      {
        prompt: 'Inkscape yoki CorelDRAW da obyektning aylanish markazi (Rotation Center `+`) ni tashqariga surib aylantirsak nima sodir bo‘ladi?',
        options: [
          'Obyekt o‘z o‘qi atrofida emas, balki yangi qo‘yilgan markaz atrofida aylana bo‘ylab aylanadi',
          'Obyekt o‘chib ketadi',
          'Rangi qorayadi',
          'Hech narsa o‘zgarmaydi',
        ],
        answer: 0,
        explanation: 'Aylanish markazini siljitish radial ornamentlar, quyosh nurlari va soat strelkalarini chizishning asosiy siridir.',
      },
      {
        prompt: 'Tasvirning chap tomonini o‘ng tomonga ko‘zgudek ag‘darish qaysi transformatsiya?',
        options: ['Flip Horizontal', 'Skew', 'Scale', 'Union'],
        answer: 0,
        explanation: 'Flip Horizontal obyektning gorizontal ko‘zgu aksini hosil qiladi.',
      },
    ],
    teacherNotes: {
      method: 'Inkscape da bitta yaproq chizib, aylanish markazini pastga surib `Ctrl+D` + Transform (Rotate 30°) bilan 12 bargli gul yasab ko‘rsating.',
      timing: 'Group vs Union 15 daqiqa, Transform/Selection 15 daqiqa, mashqlar va test 15 daqiqa.',
      assessment: 'O‘quvchi Group bilan Union farqini va burchak qadami (`360/N`) hisobini bilishi.',
      homework: 'Inkscape yoki GIMP da oddiy shakllarni Difference va Rotate bilan birlashtirib “O‘zbekiston naqshi” yoki “Soat” chizish.',
    },
  },
  {
    id: 'g11-l55',
    grade: 11,
    no: 55,
    part: '4-chorak',
    title: 'Tasvirni saqlash va hajmini kichraytirish. Matn uchun maydon yaratish. Rastrli tasvirlar. Qizil koʻzni olib tashlash.',
    kind: 'dars',
    hours: 1,
    tools: ['Grafika', 'GIMP / Optimizatsiya / Red-Eye'],
    objectives: [
      'O‘quvchi tasvir fayl hajmini kichraytirishning (**Compression: Lossy vs Lossless**, **Resize**, **DPI/PPI pasaytirish**, **Color Depth**) usullarini hamda veb va bosma uchun saqlash (`Export`) farqini biladi.',
      'O‘quvchi **Matn maydoni (Text Box)** yaratish, rastrli suratlarda yorqinlik/kontrast sozlash va chaqnoq (flash) sababli chiqqan **Qizil ko‘z effektini (Red-Eye Removal)** tuzatish usulini qo‘llaydi.',
    ],
    intro:
      'Telefon kamerasida olingan bitta rasm `8 MB` chiqadi — agar veb-saytga shunday 20 ta rasm qo‘ysangiz, sahifa juda sekin ochiladi! Bugun suratlarni **sifatini buzmay optimallashtirish**, matn joylashtirish va portretlardagi **qizil ko‘zni yo‘qotish**ni o‘rganamiz.',
    sections: [
      {
        heading: 'Tasvirni saqlash va hajmini kichraytirish usullari',
        body: '• **Save vs Export**: Loyiha fayli (`.xcf` GIMP, `.psd` Photoshop, `.svg`) qatlamlarni (Layers) saqlaydi; veb yoki bosma uchun **Export** (`JPEG, PNG, WebP`) qilinadi.\n• **Hajmni kichraytirishning 4 ta usuli**:\n  1. **O‘lchamni moslash (Resampling/Resize)**: 4000px suratni veb-kartochka uchun 800px ga tushirish hajmni 25 baravar kamaytiradi!\n  2. **Yo‘qotishli siqish (Lossy Compression — JPEG/WebP)**: sifatni `75–85%` qo‘yish ko‘zga sezilmaydigan detallarni olib tashlab hajmni 5–10× qisqartiradi.\n  3. **Yo‘qotishsiz siqish (Lossless — PNG)**: grafika/skrinshotlar uchun piksel yo‘qotmay siqadi.\n  4. **Resolution (PPI)**: ekran uchun **72–96 PPI**, sifatli bosma (print) uchun **300 DPI** yetarli.',
      },
      {
        heading: 'Matn maydoni va Qizil ko‘z effektini (Red-Eye) olib tashlash',
        body: '• **Matn maydoni (Text Box / Area Text)**: rasmda matn chetga chiqib ketmasligi uchun chegara tortiladi — matn avtomatik keyingi qatorga tushadi (**Word Wrap**) va yangi qatlamda (Text Layer) saqlanadi.\n• **Qizil ko‘z effekti (Red-Eye) nega chiqadi?** Qorong‘uda kamera chaqnog‘i (flash) kengaygan ko‘z qorachig‘i orqali ko‘z tubidagi qon tomirlaridan qaytib tushadi.\n• **Qanday tuzatiladi?** GIMP (`Filters → Enhance → Red Eye Removal`) yoki Photoshop da ko‘z qorachig‘i tanlanib, qizil kanal (Red channel) to‘yinganligi pasaytiriladi yoki tabiiy qorachiq rangi bilan almashtiriladi.',
        tip: 'Yaxshi tahrir — asl rasmni buzmaydigan **Destruktiv bo‘lmagan (Non-destructive)** tahrir: alohida qatlam (Layer) da ishlang!',
      },
    ],
    keyTerms: [
      { term: 'Lossy Compression', definition: 'Ko‘zga kam seziladigan detallarni olib tashlash hisobiga fayl hajmini keskin kichraytiruvchi siqish (JPEG).' },
      { term: 'Lossless Compression', definition: 'Hech bir piksel maʼlumotini yo‘qotmasdan hajmni siqish usuli (PNG).' },
      { term: '300 DPI vs 72 PPI', definition: 'Bosmaxonada chop etish uchun 300 DPI, veb va ekranlarda ko‘rsatish uchun 72–96 PPI standarti.' },
      { term: 'Red-Eye Removal', definition: 'Foto chaqnoq natijasida qizarib qolgan ko‘z qorachig‘ining qizil kanalini neytrallashtiruvchi filtr.' },
    ],
    steps: [
      '1. Veb-sayt uchun surat saqlashda piksel o‘lchami va JPEG/WebP siqish foizini to‘g‘ri tanlang.',
      '2. Qizil ko‘z effektini tuzatish va surat rang/yorqinlik muvozanatini to‘g‘rilashni sinab ko‘ring.',
      '3. Quyidagi interaktiv Foto laboratoriya (`imagelab`) va testni bajaring!',
    ],
    practice: [
      {
        task: '8 MB hajmli `4000×3000` piksel portret suratni maktab saytidagi `800px` enli maqolaga qo‘yish uchun qanday optimallashtirasiz?',
        expected: '1) O‘lchamni 800×600 pikselgacha kichraytirish; 2) Agar qizil ko‘z bo‘lsa Red-Eye Removal bilan tuzatish; 3) JPEG (80% sifat) yoki WebP formatida Export qilish (~90 KB bo‘ladi).',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l55-g1',
        num: '01',
        title: 'Rastrli tasvir laboratoriyasi (ImageLab)',
        topic: 'Yorqinlik, Kontrast va Transformatsiya',
        difficulty: 'O‘rta',
        engine: 'imagelab',
        config: {
          prompt: 'Portret suratning ohangini yaxshilang: Yorqinlikni (Brightness) 115% ga, Kontrastni 120% ga ko‘taring va tasvirni gorizontal (Flip H) ko‘zgu qiling.',
          subject: 'portrait',
          target: { brightness: 115, contrast: 120, rotate: 0, flipH: true },
          tolerance: 10,
          hint: 'Slayderlar yordamida Brightness = 115, Contrast = 120, Rotate = 0° va Flip Horizontal tugmasini yoqing.',
        },
      },
      {
        id: 'g11-l55-g2',
        num: '02',
        title: 'Siqish va Export usullari',
        topic: 'Tasvir optimizatsiyasi',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Har bir saqlash yoki tahrirlash tushunchasini mos tavsifi bilan bog‘lang:',
          pairs: [
            { left: 'Lossy (JPEG 80%)', right: 'Fotolar hajmini 5–10× kichraytiradi, lekin kichik detallar yo‘qoladi' },
            { left: 'Lossless (PNG)', right: 'Matnli skrinshot va shaffof fonni sifat yo‘qotmasdan saqlaydi' },
            { left: '300 DPI', right: 'Jurnal va kitobga sifatli chop etish (Print) uchun standart aniqlik' },
            { left: 'Red-Eye Removal', right: 'Kamera chaqnog‘idan qizargan ko‘z qorachig‘ini asl qora rangga qaytarish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Veb-sayt uchun katta fotosurat hajmini `6 MB` dan `100 KB` gacha tushirishning eng samarali usuli qaysi?',
        options: [
          'Piksel o‘lchamini kerakli kenglikka (masalan, 800px) kichraytirib, JPEG (80%) yoki WebP da Export qilish',
          'Fayl nomini qisqartirish',
          'BMP formatiga o‘tkazish',
          '300 DPI dan 1200 DPI ga oshirish',
        ],
        answer: 0,
        explanation: 'O‘lchamni moslash (Resize) va lossy siqish veb sahifalar yuklanishini keskin tezlashtiradi.',
      },
      {
        prompt: 'Nima uchun loyihani ish jarayonida `.xcf` (GIMP) yoki `.psd` da saqlab, faqat yakunida `.jpg` ga Export qilish kerak?',
        options: [
          '`.xcf/.psd` matn va barcha qatlamlarni (Layers) alohida saqlaydi, `.jpg` esa ularni bitta tekislikka yopishtirib yuboradi',
          '`.jpg` da ranglar yo‘q',
          '`.xcf` faqat audio saqlaydi',
          '`.jpg` faylni ochib bo‘lmaydi',
        ],
        answer: 0,
        explanation: 'Qatlamlarni saqlab qolish keyinchalik matndagi imlo xatosini osongina tuzatish imkonini beradi.',
      },
      {
        prompt: 'Qorong‘i xonada suratga tushganda odam ko‘zlarining qizil bo‘lib qolishiga nima sabab bo‘ladi?',
        options: [
          'Chaqnoq (flash) yorug‘ligi kengaygan qorachiq orqali ko‘z tubidagi qon tomirlaridan qaytishi',
          'JPEG siqish algoritmi',
          'Monitorning ko‘k nuri',
          'PNG shaffof foni',
        ],
        answer: 0,
        explanation: 'Red-Eye Removal uskunasi aynan ko‘z qorachig‘i zonasidagi ortiqcha qizil rangni neytrallaydi.',
      },
      {
        prompt: 'Matn maydoni (Area Text Box) oddiy bir qatorli matndan (Point Text) nimasi bilan farq qiladi?',
        options: [
          'Matn belgilangan to‘rtburchak chegara ichida avtomatik keyingi qatorga o‘tadi (Word Wrap)',
          'Matn doim qizil bo‘ladi',
          'Uni o‘chirib bo‘lmaydi',
          'Faqat raqam yoziladi',
        ],
        answer: 0,
        explanation: 'Maqola va buklet dizaynida matn chegaradan chiqmasligi uchun Text Box ishlatiladi.',
      },
      {
        prompt: 'Qaysi rastrli format SIQILMAGAN (Uncompressed) bo‘lib, fayl hajmi juda katta chiqadi?',
        options: ['BMP', 'WebP', 'JPEG', 'PNG'],
        answer: 0,
        explanation: 'BMP har bir pikselni siqmasdan saqlagani uchun fayl hajmi eng katta chiqadi.',
      },
    ],
    teacherNotes: {
      method: 'GIMP da bitta foto ustida: 1) Red-Eye Removal; 2) Text Box; 3) Scale Image + Export JPEG (95% vs 60%) hajm farqini ko‘rsating.',
      timing: 'Siqish va Export 15 daqiqa, Text Box va Red-Eye 15 daqiqa, ImageLab o‘yini va test 15 daqiqa.',
      assessment: 'O‘quvchi Lossy vs Lossless farqini va qachon qaysi formatni tanlashni bilishi.',
      homework: 'Bitta katta rasmni GIMP da veb uchun (800px, JPEG 80%) tayyorlab, asl va yangi hajmini solishtiring.',
    },
  },
  {
    id: 'g11-l56',
    grade: 11,
    no: 56,
    part: '4-chorak',
    title: 'Animatsiya asoslari. Niqoblovchi qatlam.',
    kind: 'dars',
    hours: 1,
    tools: ['Animatsiya', 'Synfig Studio / Pencil2D / Blender'],
    objectives: [
      'O‘quvchi 2D kompyuter animatsiyasining asosiy tushunchalarini (**Kadrlar tezligi FPS**, **Kalit kadr — Keyframe**, **Oraliq kadr yaratish — Tweening**, **Piyoz qobig‘i — Onion Skinning**, **Morphing**) biladi.',
      'O‘quvchi **Niqoblovchi qatlam (Masking Layer)** nima ekanini va u yordamida matn ichida video/rasm ko‘rsatish yoki lupa (spotlight) effekti yasashni tushunadi.',
    ],
    intro:
      'Multfilm va saytdagi silliq harakatlar qanday jonlanadi? Kompyuter animatsiyasida har bir sekunddagi 24 ta rasmni qo‘lda chizish shart emas — **Keyframe**, **Tweening** va sehrli **Niqoblovchi qatlam (Masking)** mo‘jiza yaratadi!',
    sections: [
      {
        heading: 'Animatsiya asoslari: FPS, Keyframe, Tweening va Onion Skin',
        body: '• **FPS (Frames Per Second)**: 1 soniyada almashadigan kadrlar soni (`24 fps` — kino standarti, `30–60 fps` — silliq video/o‘yin; `12 fps` — klassik qo‘lda chizilgan multfilm).\n• **Keyframe (Kalit kadr)**: harakatning boshlang‘ich (`0s: x=0`) va yakuniy (`2s: x=500`) muhim holati.\n• **Tweening (In-betweening)**: dastur ikkita Keyframe orasidagi barcha oraliq kadrlarni (masalan, 48 ta kadrni) avtomatik hisoblab silliq chizib berishi! (*Motion Tween* — siljish/aylanish, *Shape Tween / Morphing* — shakl o‘zgarishi).\n• **Onion Skinning (Piyoz qobig‘i)**: kadr-kadr chizishda (Stop-motion / Frame-by-frame) oldingi va keyingi kadrlarni shaffof soya ko‘rinishida ko‘rib turish imkoniyati.',
      },
      {
        heading: 'Niqoblovchi qatlam (Masking Layer) qanday ishlaydi?',
        body: '• **Mask (Niqob)** — pastki qatlamning *faqat belgilangan oyna/shakl ichidagi* qismini ko‘rsatib, tashqarisini yashirib qo‘yadigan maxsus yuqori qatlamdir!\n• **Real misollar**:\n  1. **Projektordan yorug‘lik (Spotlight)**: qorong‘i rasm ustida harakatlanuvchi doira niqobi bo‘lib, faqat doira tushgan joy yorug‘ ko‘rinadi.\n  2. **Matn ichida manzara**: katta harflar niqob bo‘ladi va ularning ichida bulutlar/to‘lqinlar suzib o‘tadi.\n  3. **Suhbat/Skroll oynasi**: interfeysda tugmalar ramkadan chiqib ketmasligi uchun niqob bilan qirqib ko‘rsatiladi.\n• Ochiq kodli bepul animatsiya dasturlari: **Synfig Studio** (vektor tweening), **Pencil2D** (frame-by-frame), **Krita**, **Blender 2D (Grease Pencil)**.',
        tip: 'Niqoblovchi qatlam (Mask) asl tasvirni o‘chirib kesmaydi (**Non-destructive**) — istalgan vaqtda niqobni siljitib boshqa qismini ko‘rsatishingiz mumkin!',
      },
    ],
    keyTerms: [
      { term: 'Keyframe (Kalit kadr)', definition: 'Obyektning harakat yoki shakl o‘zgarishidagi boshlang‘ich yoki yakuniy tayanch holati belgilangan kadr.' },
      { term: 'Tweening', definition: 'Ikki kalit kadr orasidagi barcha oraliq kadrlarni dastur tomonidan avtomatik generatsiya qilish.' },
      { term: 'Onion Skinning', definition: 'Keyingi kadrni aniq chizish uchun oldingi kadrning xira shaffof izini ekranda ko‘rsatib turish.' },
      { term: 'Niqoblovchi qatlam (Masking)', definition: 'O‘z shakli ichidagi pastki qatlam qismini ko‘rsatib, qolgan hududni yashirib turadigan qatlam.' },
    ],
    steps: [
      '1. `24 FPS` li `3 soniya` lik animatsiyada jami `24 × 3 = 72` kadr borligini hisoblang.',
      '2. Tweening animatsiyasi va Frame-by-frame animatsiya farqini ajrating.',
      '3. Quyidagi moslashtirish va kalkulyator mashqlarini bajaring.',
    ],
    practice: [
      {
        task: 'Qop-qorong‘i xarita ustida faqat harakatlanuvchi lupa doirasi ichidagi shaharlar ko‘rinib turadigan animatsiyani qaysi 2 ta texnika bilan yasaysiz?',
        expected: '1) Doira shaklidagi Niqoblovchi qatlam (Masking Layer) yordamida xaritani yashirib faqat doira ichini ko‘rsatish; 2) Doiraning boshlang‘ich va yakuniy o‘rniga Keyframe + Motion Tween qo‘yib harakatlantirish.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l56-g1',
        num: '01',
        title: 'Animatsiya tushunchalarini moslang',
        topic: '2D animatsiya',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Animatsiya atamalarini ularning aniq vazifasi bilan bog‘lang:',
          pairs: [
            { left: 'Keyframe (Kalit kadr)', right: 'Harakatning boshlanish va tugash nuqtalarini belgilovchi asosiy kadr' },
            { left: 'Tweening', right: 'Ikki kalit kadr orasidagi silliq harakatni avtomatik to‘ldirish' },
            { left: 'Onion Skinning', right: 'Oldingi kadr izini shaffof ko‘rib turish (kadr-kadr chizishda qulay)' },
            { left: 'Masking (Niqoblovchi qatlam)', right: 'Obyektni kesmasdan faqat belgilangan oyna/shakl ichini ko‘rsatish' },
          ],
        },
      },
      {
        id: 'g11-l56-g2',
        num: '02',
        title: 'Kadrlar soni (FPS) kalkulyatori',
        topic: 'Vaqt va Kadr',
        difficulty: 'O‘rta',
        engine: 'calc',
        config: {
          prompt: 'Siz `24 FPS` tezlikda davomiyligi `5 soniya` bo‘lgan kirish (Intro) animatsiyasi yasadingiz. Dastur bu rolikni eksport qilishda jami nechta kadr (frame) yaratadi?',
          unit: 'kadr',
          correctAnswer: 120,
          tolerance: 0,
          steps: [
            '1 soniyada kadrlar soni = 24',
            'Davomiyligi = 5 soniya',
            'Jami kadrlar = 24 × 5 = 120 kadr',
          ],
          hint: 'FPS (soniyadagi kadr) ni umumiy soniyalar soniga ko‘paytiring.',
        },
      },
    ],
    quiz: [
      {
        prompt: '1-kadrda koptok chapda, 30-kadrda o‘ngda qo‘yilganda dastur o‘rtadagi 28 ta harakat kadrini o‘zi yaratib berishi nima deb ataladi?',
        options: ['Tweening (In-betweening)', 'Onion Skinning', 'Masking', 'Red-Eye'],
        answer: 0,
        explanation: 'Tweening — kalit kadrlar orasini avtomatik to‘ldiruvchi animatsiya texnikasi.',
      },
      {
        prompt: 'Niqoblovchi qatlam (Masking Layer) ning asosiy vazifasi nima?',
        options: [
          'Pastki qatlamning faqat niqob shakli ostidagi qismini ko‘rsatib, tashqarisini yashirish',
          'Fayl hajmini kichraytirish',
          'Kadr tezligini 1000 FPS qilish',
          'Audio shovqinni o‘chirish',
        ],
        answer: 0,
        explanation: 'Mask — xuddi qog‘ozga o‘yilgan tuynukdan orqadagi rasmga qarashdek ishlaydi.',
      },
      {
        prompt: 'Kadr-kadr chiziladigan (Frame-by-frame) animatsiyada personaj qo‘lini silliq davom ettirish uchun oldingi kadrni xira soya sifatida ko‘rib turish usuli qaysi?',
        options: ['Onion Skinning (Piyoz qobig‘i)', 'Morphing', 'BitTorrent', 'Vector Union'],
        answer: 0,
        explanation: 'Onion Skinning animatorga oldingi va keyingi holat orasidagi farqni aniq ko‘rish imkonini beradi.',
      },
      {
        prompt: '30 FPS li animatsiya 10 soniya davom etsa, jami nechta kadrdan iborat bo‘ladi?',
        options: ['300 kadr', '40 kadr', '3 kadr', '3000 kadr'],
        answer: 0,
        explanation: '30 kadr/s × 10 s = 300 kadr.',
      },
      {
        prompt: 'Bir shaklning (masalan, kvadrat) asta-sekin boshqa shaklga (masalan, doira yoki yulduzga) aylanish effekti nima deyiladi?',
        options: ['Morphing (Shape Tween)', 'Onion Skinning', 'Resampling', 'Mail Merge'],
        answer: 0,
        explanation: 'Morphing — bir obyekt konturini silliq ravishda ikkinchi shaklga transformatsiya qilish.',
      },
    ],
    teacherNotes: {
      method: 'Synfig Studio yoki CSS/PowerPoint da bitta matn va harakatlanuvchi doira yordamida Masking effektini jonli ko‘rsating.',
      timing: 'FPS va Keyframe/Tweening 15 daqiqa, Masking Layer 15 daqiqa, o‘yinlar va test 15 daqiqa.',
      assessment: 'O‘quvchi Keyframe/Tweening va Masking mexanizmini amaliy misol bilan tushuntira olishi.',
      homework: 'Synfig Studio, Pencil2D yoki taqdimot dasturida 3 soniyalik Tween + Mask animatsiya g‘oyasini rejalash.',
    },
  },
  {
    id: 'g11-l57',
    grade: 11,
    no: 57,
    part: '4-chorak',
    title: 'Elektron xatlarni birlashtirish. Master hujjatni manba faylga biriktirish.',
    kind: 'dars',
    hours: 1,
    tools: ['Mail Merge', 'LibreOffice Writer / MS Word + CSV'],
    objectives: [
      'O‘quvchi **Mail Merge (Xatlarni birlashtirish)** texnologiyasi nima uchun minglab shaxsiylashtirilgan xatlar, diplomlar yoki taklifnomalar tayyorlashda vaqt va xatolarni tejashini tushunadi.',
      'O‘quvchi **Asosiy hujjat (Master / Main Document)** va **Maʼlumotlar manbai (Data Source: CSV / Calc / Excel / DB)** ni o‘zaro bog‘lash jarayonini bosqichma-bosqich bajaradi.',
    ],
    intro:
      'Maktab bitiruvchilariga 150 ta alohida “Faxriy yorliq” yoki 500 ta ota-onaga farzandining baholari yozilgan xat yuborish kerak. Har birini qo‘lda nusxalab ism yozish soatlab vaqt oladi va xato chiqadi! **Mail Merge** buni 10 soniyada bajaradi!',
    sections: [
      {
        heading: 'Mail Merge ning ikki asosiy komponenti',
        body: '1. **Master Document (Asosiy shablon hujjat)**: barcha oluvchilar uchun **bir xil** bo‘ladigan matn, dizayn, muhr va logotip saqlanadigan matn hujjati (**LibreOffice Writer** yoki **MS Word**). Unda o‘zgaruvchi joylar maxsus maydonlar (`«Ism»`, `«Sinf»`) bilan qoldiriladi.\n2. **Data Source (Maʼlumotlar manbai)**: har bir shaxs uchun **har xil** bo‘ladigan maʼlumotlarni saqlovchi jadval (`CSV`, `.xlsx`, `.ods` LibreOffice Calc yoki Maʼlumotlar bazasi). Birinchi qatorda albatta ustun sarlavhalari (`Header row`: `FIO`, `Sinf`, `Ball`) bo‘lishi shart!',
      },
      {
        heading: 'Master hujjatni Manba faylga ulash (Biriktirish) bosqichlari',
        body: '• **1-qadam**: Jadval manbasini tayyorlang (bo‘sh qatorlarsiz, aniq ustun nomlari bilan saqlang).\n• **2-qadam**: Matn muharririda Master hujjatni oching (`Mailings → Start Mail Merge` yoki LibreOffice da `Tools → Mail Merge Wizard`).\n• **3-qadam (Manba biriktirish)**: `Select Recipients → Use an Existing List` orqali CSV/Excel/Calc faylini tanlang.\n• **4-qadam**: `Insert Merge Field` bilan hujjatga `«FIO»`, `«Ball»` maydonlarini qo‘ying va `Preview Results` da tekshiring.\n• **5-qadam**: `Finish & Merge` — alohida PDF/hujjatlarga saqlash yoki chop etish!',
        tip: 'Data Source dagi birinchi qator sarlavhasi (Header) toza va tushunarli bo‘lsa (`Ism`, `Manzil`), Master hujjatga maydon qo‘shishda hech qachon adashmaysiz!',
      },
    ],
    keyTerms: [
      { term: 'Mail Merge', definition: 'Bitta shablon hujjatni jadvaldagi yozuvlar bilan birlashtirib, ko‘plab shaxsiylashtirilgan hujjatlar yaratish.' },
      { term: 'Master Document', definition: 'Hamma nusxalar uchun umumiy matn va o‘zgaruvchi maydonlar joylashgan shablon hujjat.' },
      { term: 'Data Source', definition: 'Har bir oluvchi uchun shaxsiy maʼlumotlarni (ism, manzil, ball) saqlovchi jadval yoki baza.' },
      { term: 'Preview Results', definition: 'Chop etishdan oldin haqiqiy maʼlumotlar shablonga qanday tushganini ekranda tekshirish rejimi.' },
    ],
    steps: [
      '1. Master Document (umumiy shablon) va Data Source (shaxsiy jadval) vazifasini ajrating.',
      '2. Mail Merge ulash jarayonini ketma-ketlikda tartiblang.',
      '3. Quyidagi tartiblash va moslashtirish mashqlarini bajaring.',
    ],
    practice: [
      {
        task: '120 ta olimpiada qatnashchisiga sertifikat tayyorlashda Data Source (Excel/CSV) jadvali qanday ustunlardan iborat bo‘lishi kerak?',
        expected: '1-qatorda aniq sarlavhalar: `ID`, `FIO`, `Maktab`, `Fan`, `Orin`, `Sana` — har bir keyingi qatorda esa bitta qatnashchi maʼlumoti.',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l57-g1',
        num: '01',
        title: 'Mail Merge bosqichlarini tartiblang',
        topic: 'Master + Manba',
        difficulty: 'O‘rta',
        engine: 'order',
        config: {
          prompt: 'Mail Merge jarayonini boshidan oxirigacha to‘g‘ri tartibda joylashtiring:',
          items: [
            '1. Ustun sarlavhali Data Source jadvalini (CSV/Excel/Calc) tayyorlash',
            '2. Matn muharririda umumiy matnli Master hujjat yaratish',
            '3. Master hujjatga Data Source manba faylini biriktirish (Select Recipients)',
            '4. Shablon ichiga kerakli o‘zgaruvchi maydonlarni (Merge Fields) joylashtirish',
            '5. Preview Results da tekshirib, yakuniy hujjatlarni chiqarish (Finish & Merge)',
          ],
          hint: 'Avval manba jadval va shablon → so‘ng ularni ulash → maydon qo‘yish → ko‘rib chiqish va yakunlash.',
        },
      },
      {
        id: 'g11-l57-g2',
        num: '02',
        title: 'Mail Merge tarkibiy qismlari',
        topic: 'Xatlarni birlashtirish',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Mail Merge elementlarini ularning vazifasi bilan bog‘lang:',
          pairs: [
            { left: 'Master Document', right: 'Umumiy shablon matni va logotip turadigan asosiy Word/Writer fayli' },
            { left: 'Data Source', right: 'Qabul qiluvchilarning ism va manzillari saqlanadigan Excel/CSV jadvali' },
            { left: '«MergeField»', right: 'Jadval ustunidan maʼlumot kelib tushadigan joy belgisi' },
            { left: 'Preview Results', right: 'Chop etishdan avval shaxsiy ismlar to‘g‘ri tushganini tekshirish' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'Mail Merge texnologiyasining asosiy foydasi nimada?',
        options: [
          'Bitta shablon va maʼlumotlar jadvalidan foydalanib, yuzlab shaxsiylashtirilgan hujjatlarni xatosiz va tez yaratadi',
          'Rasmlarni vektorga aylantiradi',
          'Internet tezligini oshiradi',
          'Kompyuter viruslarini o‘chiradi',
        ],
        answer: 0,
        explanation: 'Mail Merge takrorlanuvchi qo‘lda nusxalash va imlo xatolarini bartaraf etadi.',
      },
      {
        prompt: 'Mail Merge da har bir oluvchi uchun o‘zgaradigan maʼlumotlar (F.I.Sh., manzil, ball) qayerda saqlanadi?',
        options: ['Data Source (Maʼlumotlar manbai — CSV/Excel/DB)', 'Master Document sarlavhasida', 'SVG faylda', 'PNG rasm ichida'],
        answer: 0,
        explanation: 'Data Source — shaxsiy o‘zgaruvchan yozuvlar jadvalidir.',
      },
      {
        prompt: 'Data Source jadvalining eng birinchi (1-chi) qatorida nima bo‘lishi shart?',
        options: [
          'Ustun sarlavhalari (Field Names: Ism, Sinf, Manzil)',
          'Bo‘sh qator',
          'Kompaniya logotipi rasmi',
          'Jami summa formulasi',
        ],
        answer: 0,
        explanation: 'Matn muharriri maydon nomlarini aynan 1-qatordagi sarlavhalardan o‘qiydi.',
      },
      {
        prompt: 'Master hujjatni manba faylga ulashda qaysi buyruq guruhidan foydalaniladi?',
        options: ['Select Recipients → Use an Existing List', 'Format Painter', 'Red-Eye Removal', 'Onion Skin'],
        answer: 0,
        explanation: 'Select Recipients mavjud CSV/Excel/Calc faylini shablonga biriktiradi.',
      },
      {
        prompt: '500 ta sertifikatni printerga yuborishdan oldin ism-familiyalar kesilib qolmaganini tekshirish uchun qaysi tugma bosiladi?',
        options: ['Preview Results', 'Delete All', 'Flatten Layers', 'Direct Changeover'],
        answer: 0,
        explanation: 'Preview Results tugmasi maydon nomlari o‘rniga haqiqiy yozuvlarni ko‘rsatib tekshirish imkonini beradi.',
      },
    ],
    teacherNotes: {
      method: 'LibreOffice Calc da 5 ta o‘quvchili kichik jadval tuzib, Writer da “Taklifnoma” shabloniga jonli ulab ko‘rsating.',
      timing: 'Mail Merge konsepsiyasi 15 daqiqa, amaliy ulash namoyishi 15 daqiqa, o‘yinlar va test 15 daqiqa.',
      assessment: 'O‘quvchi Master Document bilan Data Source rolini hamda Header row ahamiyatini tushunishi.',
      homework: '5 ta do‘stingiz maʼlumotidan iborat `dostlar.csv` manba fayli tuzish rejasini yozib keling.',
    },
  },
  {
    id: 'g11-l58',
    grade: 11,
    no: 58,
    part: '4-chorak',
    title: 'Prompt matni yaratish. Kerakli yozuvlarni avtomatik belgilash. O‘zgaruvchi maydonlar.',
    kind: 'dars',
    hours: 1,
    tools: ['Mail Merge', 'Rules / ASK / FILLIN / Filter'],
    objectives: [
      'O‘quvchi Mail Merge da **O‘zgaruvchi maydonlar (`«MergeField»`)**, **Prompt matni yaratish (`ASK` va `FILLIN` maydonlari)** hamda **Shartli qoidalar (`If...Then...Else`)** dan foydalanishni o‘zlashtiradi.',
      'O‘quvchi Data Source dan **kerakli yozuvlarni avtomatik belgilash / filtrlash (`Filter / Query / Edit Recipient List`)** va saralash qoidalarini amalda qo‘llaydi.',
    ],
    intro:
      'Tasavvur qiling, jadvalda 200 ta o‘quvchi bor, lekin sizga *faqat 11-sinfdagi aʼlochilar* ga xat chiqarish va chop etish paytida dastur sizdan “Bugungi direktor imzo sanasi nechchi?” deb **Prompt oynasi** bilan so‘rashi kerak. Buni Mail Merge qoidalari hal qiladi!',
    sections: [
      {
        heading: 'O‘zgaruvchi maydonlar va Prompt matni yaratish (ASK / FILLIN)',
        body: '• **O‘zgaruvchi maydonlar (`«MergeField»`)**: Jadval ustunidan olinadigan qiymatlar (`«Ism»`, `«Ball»`). Shuningdek, tizim maydonlari (`DATE`, `PAGE`) ham qo‘yilishi mumkin.\n• **Prompt matni yaratish (`FILLIN` va `ASK` qoidalari)**: Agar biror qiymat jadvalda yo‘q bo‘lib, har safar chop etishda foydalanuvchidan so‘ralishi kerak bo‘lsa (masalan, *“Tadbir sanasini kiriting”*):\n  - **FILLIN**: foydalanuvchiga muloqot oynasi (**Prompt**) chiqarib, kiritilgan matnni aynan shu joyga qo‘yadi.\n  - **ASK**: Prompt oynasi orqali javobni o‘zgaruvchiga (Bookmark) saqlaydi va hujjatning bir nechta joyida qayta ishlatadi (`Ask once` opsiyasi barcha 200 ta xat uchun faqat 1 marta so‘raydi!).',
      },
      {
        heading: 'Kerakli yozuvlarni avtomatik belgilash (Filter) va Shartli matn',
        body: '• **Avtomatik belgilash / Filtrlash (`Edit Recipient List → Filter`)**: Butun jadvalni tahrirlamasdan shart qo‘yish mumkin: masalan, `Sinf = 11 VA Ball >= 86`. Natijada dastur faqat shu shartga tushgan yozuvlarni avtomatik tanlaydi!\n• **If...Then...Else qoidasi**: Yozuv qiymatiga qarab turlicha matn chiqarish: masalan, `Agar Jins = "Ayol" bo‘lsa "Hurmatli xonim", aks holda "Hurmatli janob"` yoki `Agar Qarz > 0 bo‘lsa ogohlantirish chiqar`.',
        tip: '`Filter` dan foydalansangiz, asl Data Source faylini buzmasdan turib bir xil jadvaldan turli guruhlar uchun alohida xatlar to‘plamini chiqara olasiz!',
      },
    ],
    keyTerms: [
      { term: 'O‘zgaruvchi maydon (Merge Field)', definition: 'Maʼlumotlar manbaidagi ustun nomiga bog‘langan dinamik joy egallovchi (`«Maydon»`).' },
      { term: 'Prompt (FILLIN / ASK)', definition: 'Birlashtirish jarayonida foydalanuvchidan qo‘lda qiymat kiritishni so‘rovchi muloqot oynasi.' },
      { term: 'Filter (Avtomatik belgilash)', definition: 'Berilgan mantiqiy shartga mos keladigan qatorlarnigina birlashtirishga ajratib olish.' },
      { term: 'If...Then...Else qoidasi', definition: 'Maydon qiymatiga qarab hujjat matnini dinamik o‘zgartiruvchi shartli qoida.' },
    ],
    steps: [
      '1. `Filter` (yozuvlarni saralash) va `If...Then...Else` (matnni o‘zgartirish) farqini ajrating.',
      '2. `FILLIN` va `ASK` prompt maydonlari qachon kerak bo‘lishini tushuning.',
      '3. Quyidagi moslashtirish va bo‘sh joyni to‘ldirish o‘yinlarini bajaring.',
    ],
    practice: [
      {
        task: 'Jadvalda 300 ta abituriyent bor. Siz faqat `Ball >= 140` va `Hudud = "Toshkent"` bo‘lganlarga chaqiruv xati chiqarib, agar `Imtiyoz = "Ha"` bo‘lsa qo‘shimcha tabrik jumlasi chiqarmoqchisiz. Qaysi 2 ta vositani qo‘llaysiz?',
        expected: '1) Yozuvlarni ajratish uchun `Filter` (`Ball >= 140 AND Hudud = "Toshkent"`); 2) Qo‘shimcha jumla uchun `If...Then...Else` qoidasi (`If Imtiyoz = "Ha" ...`).',
        difficulty: 'orta',
      },
    ],
    games: [
      {
        id: 'g11-l58-g1',
        num: '01',
        title: 'Mail Merge qoidalari va maydonlari',
        topic: 'Dinamik xatlar',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'Mail Merge ning ilg‘or funksiyalarini vazifasi bilan moslang:',
          pairs: [
            { left: 'Filter (Edit Recipient List)', right: 'Faqat shartga mos yozuvlarni (masalan, Qarz > 0) avtomatik tanlab olish' },
            { left: 'FILLIN / ASK (Prompt)', right: 'Birlashtirish paytida foydalanuvchidan qo‘shimcha matn so‘rovchi oyna' },
            { left: 'If...Then...Else', right: 'Yozuv qiymatiga qarab turlicha salomlashish yoki matn chiqarish' },
            { left: '«MergeField»', right: 'Jadval ustunidan maʼlumot kelib tushadigan o‘zgaruvchi maydon' },
          ],
        },
      },
      {
        id: 'g11-l58-g2',
        num: '02',
        title: 'Prompt va Shartli qoida tuzing',
        topic: 'Qoidalarni qo‘llash',
        difficulty: 'O‘rta',
        engine: 'fillblank',
        config: {
          prompt: 'Bo‘sh o‘rinlarni Mail Merge qoida atamalari bilan to‘ldiring:',
          template: 'Chop etishdan oldin foydalanuvchidan “Imzo sanasini kiriting” deb so‘rash uchun {{0}} maydoni, faqat 11-sinf o‘quvchilarini ajratish uchun esa {{1}} ishlatiladi.',
          blanks: [
            { options: ['Prompt (FILLIN / ASK)', 'Red-Eye', 'Morphing'], answer: 'Prompt (FILLIN / ASK)' },
            { options: ['Filter (Saralash)', 'Skew', 'Tweening'], answer: 'Filter (Saralash)' },
          ],
          hint: 'Savol chiqarish — Prompt; yozuvlarni shart bilan saralash — Filter.',
          explanation: 'Prompt va Filter kombinatsiyasi bitta shablondan juda moslashuvchan hisobotlar olish imkonini beradi.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Mail Merge da `«Ball»` kabi jadval ustunidan avtomatik to‘ldiriladigan belgi nima deb ataladi?',
        options: ['O‘zgaruvchi maydon (Merge Field)', 'Masking Layer', 'Keyframe', 'Raster Pixel'],
        answer: 0,
        explanation: 'O‘zgaruvchi maydon har bir nusxada Data Source dagi tegishli katak qiymati bilan almashadi.',
      },
      {
        prompt: 'Data Source da 400 ta mijoz bor, lekin xat faqat `Shahar = "Samarqand"` bo‘lganlarga yuborilishi uchun nima qilinadi?',
        options: [
          'Edit Recipient List → Filter oynasida `Shahar Equal to Samarqand` sharti qo‘yiladi',
          'Boshqa shaharlarni SVG ga aylantiriladi',
          'Prompt oynasi yopiladi',
          'Master hujjat o‘chiriladi',
        ],
        answer: 0,
        explanation: 'Filter asl manba faylni o‘zgartirmasdan kerakli yozuvlarnigina ajratib beradi.',
      },
      {
        prompt: 'Birlashtirish jarayonida dasturdan “Yig‘ilish vaqtini kiriting:” degan savol oynasini chiqarish uchun qaysi qoida qo‘llanadi?',
        options: ['FILLIN yoki ASK (Prompt)', 'Skip Record If', 'Onion Skin', 'Difference'],
        answer: 0,
        explanation: 'FILLIN va ASK foydalanuvchidan qo‘lda qiymat kiritishni so‘raydigan prompt maydonlaridir.',
      },
      {
        prompt: '`If...Then...Else` qoidasi Mail Merge da nima uchun kerak?',
        options: [
          'Maydon qiymatiga qarab ikki xil matndan birini avtomatik tanlab chiqarish uchun',
          'Suratni aylantirish uchun',
          'Faylni ZIP qilish uchun',
          'Internet tezligini o‘lchash uchun',
        ],
        answer: 0,
        explanation: 'Masalan, baho >= 86 bo‘lsa “Aʼlo”, aks holda “Yaxshi” matnini avtomatik qo‘yadi.',
      },
      {
        prompt: 'Agar `FILLIN` maydonida `Ask once` (bir marta so‘rash) belgilanmasa, 100 ta xat chiqarishda nima bo‘ladi?',
        options: [
          'Dastur har bir xat (100 marta) uchun qayta-qayta prompt oynasini chiqaradi',
          'Dastur kompyuterni o‘chiradi',
          'Jadval o‘chib ketadi',
          'Barcha maydonlar bo‘sh qoladi',
        ],
        answer: 0,
        explanation: 'Umumiy sana kabi bir xil qiymat uchun `Ask once` belgilash foydalanuvchini 100 marta bir xil narsa yozishdan qutqaradi.',
      },
    ],
    teacherNotes: {
      method: 'Word/Writer da `Rules → If...Then...Else` va `Filter Recipients` oynasini amalda ko‘rsating.',
      timing: 'O‘zgaruvchi maydonlar 10 daqiqa, Prompt (ASK/FILLIN) 15 daqiqa, Filter/Rules va test 20 daqiqa.',
      assessment: 'O‘quvchi Filter, Prompt va If...Then...Else qoidalarini aniq farqlashi.',
      homework: '“Imtihon natijalari” xati uchun 1 ta Filter sharti va 1 ta If...Then...Else matn qoidasini yozib keling.',
    },
  },
  {
    id: 'g11-l59',
    grade: 11,
    no: 59,
    part: '4-chorak',
    title: 'Nazorat ishi',
    kind: 'nazorat',
    hours: 1,
    tools: ['Nazorat', 'Grafika / Animatsiya / Mail Merge'],
    objectives: [
      'O‘quvchi 4-chorakning birinchi yarmidagi **Vektor/Rastr grafika, Transformatsiya va Tanlash, Rasm optimizatsiyasi, Animatsiya/Masking va Mail Merge** mavzulari bo‘yicha bilimlarini mustaqil nazoratda tekshiradi.',
    ],
    intro:
      '4-chorak oraliq nazorat ishida siz **kompyuter grafikasi** (`SVG vs PNG`, transformatsiyalar, `Red-Eye`, `Lossy/Lossless`), **2D animatsiya** (`Keyframe`, `Tween`, `Mask`) va **Mail Merge** bilimlaridan imtihon topshirasiz.',
    sections: [
      {
        heading: 'Nazorat mavzulari qamrovi',
        body: '• Vektorli va Rastrli tasvirlar (`Inkscape/SVG` vs `GIMP/PNG/JPEG`).\n• Guruhlash (`Group`), Boolean kesish (`Union/Difference`), Aylantirish (`360/N`) va Magic Wand.\n• Optimizatsiya (`300 DPI vs 72 PPI`), Matn maydoni va Qizil ko‘z effekti.\n• Animatsiya (`FPS`, `Keyframe`, `Tweening`, `Onion Skinning`, `Masking`).\n• Mail Merge (`Master`, `Data Source`, `FILLIN/ASK`, `Filter`, `If...Then...Else`).',
      },
    ],
    keyTerms: [
      { term: 'Vektor vs Rastr', definition: 'Matematik egri chiziqlar (masshtabda buzilmaydi) vs Piksellar panjarasi.' },
      { term: 'Tween & Mask', definition: 'Kalit kadrlar orasini to‘ldirish va niqoblovchi qatlam bilan qisman ko‘rsatish.' },
      { term: 'Mail Merge Rules', definition: 'Filter, Prompt (FILLIN/ASK) va If...Then...Else qoidalari.' },
    ],
    steps: [
      '1. Amaliy hisob-kitob va moslashtirish topshiriqlarini bajaring.',
      '2. 5 ta yakuniy nazorat testini ishlang.',
    ],
    practice: [
      {
        task: 'Nazorat vazifasi: 1) Veb-logo uchun SVG mi yoki BMP? 2) 24 FPS li 4 soniyalik rolikda nechta kadr bor? 3) Mail Merge da faqat `Sinf=11` larni tanlash uchun nima ishlatiladi?',
        expected: '1) SVG (vektor, xiralashmaydi va yengil); 2) 24 × 4 = 96 kadr; 3) Edit Recipient List → Filter.',
        difficulty: 'orta',
      },
    ],
    games: [
      {
        id: 'g11-l59-g1',
        num: '01',
        title: 'Nazorat: Grafika va Mail Merge mosligi',
        topic: 'Kompleks tekshiruv',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: '4-chorakning 1-yarmidagi atamalarni aniq taʼrifi bilan moslang:',
          pairs: [
            { left: 'Difference (Vektor)', right: 'Bir shakldan ikkinchisini kesib olib yangi kontur yasash' },
            { left: 'Lossy Compression', right: 'JPEG da kichik detallar evaziga fayl hajmini keskin kamaytirish' },
            { left: 'Masking Layer', right: 'Asl rasmni kesmasdan faqat belgilangan shakl ichini ko‘rsatish' },
            { left: 'Data Source', right: 'Mail Merge da oluvchilar maʼlumoti saqlanadigan CSV/Excel jadval' },
          ],
        },
      },
      {
        id: 'g11-l59-g2',
        num: '02',
        title: 'Nazorat: Burchak va Kadrlar hisobi',
        topic: 'Matematik grafika',
        difficulty: 'O‘rta',
        engine: 'calc',
        config: {
          prompt: '6 qirrali qor parchasi (snowflake) chizishda bitta shoxchani 360° aylana bo‘ylab teng taqsimlash uchun har safar necha gradusga aylantirish kerak?',
          unit: 'gradus',
          correctAnswer: 60,
          tolerance: 0,
          steps: ['360° / 6 ta shoxcha = 60°'],
          hint: '360 ni 6 ga bo‘ling.',
        },
      },
    ],
    quiz: [
      {
        prompt: 'Katta bannerga chop etishda piksellar ko‘rinib qolmasligi uchun qaysi grafik turini tanlash shart?',
        options: ['Vektorli (SVG/EPS/AI)', 'Rastrli past aniqlikli JPEG', 'BMP', 'GIF'],
        answer: 0,
        explanation: 'Vektorli grafika har qanday o‘lchamda matematik formula bilan qayta chiziladi.',
      },
      {
        prompt: 'Turli rangdagi 4 ta shaklni keyinchalik ajratish imkonini saqlab birga siljitish uchun qaysi amal qo‘llanadi?',
        options: ['Group (Ctrl+G)', 'Difference', 'Flatten Image', 'Red-Eye Removal'],
        answer: 0,
        explanation: 'Group obyektlarni birlashtirmaydi, faqat vaqtincha birga boshqaradi.',
      },
      {
        prompt: 'Kitob/jurnalga sifatli chop etish (Print) uchun suratning tavsiya etilgan aniqligi (Resolution) nechaga teng?',
        options: ['300 DPI', '72 PPI', '10 DPI', '24 FPS'],
        answer: 0,
        explanation: 'Bosma mahsulotlar uchun standart sifat — 300 DPI.',
      },
      {
        prompt: 'Ikki kalit kadr (Keyframe) orasidagi harakat kadrlarini dastur avtomatik yaratib berishi nima deyiladi?',
        options: ['Tweening', 'Onion Skinning', 'Mail Merge', 'Filter'],
        answer: 0,
        explanation: 'Tweening harakat yoki shakl o‘tishlarini silliq hisoblaydi.',
      },
      {
        prompt: 'Mail Merge jarayonida foydalanuvchidan “Bugungi sanani kiriting:” deb so‘rash uchun qaysi maydon ishlatiladi?',
        options: ['FILLIN / ASK (Prompt)', 'Data Store', 'PNG Export', 'Magic Wand'],
        answer: 0,
        explanation: 'FILLIN va ASK chop etishdan oldin qo‘shimcha qiymat so‘raydigan prompt maydonlaridir.',
      },
    ],
    teacherNotes: {
      method: 'Nazariy test va qisqa amaliy topshiriq shaklida o‘tkazing.',
      timing: 'Tashkiliy 5 daqiqa, nazorat 35 daqiqa, yakun 5 daqiqa.',
      assessment: 'Har bir blok (Grafika, Animatsiya, Mail Merge) bo‘yicha natijalar qayd etiladi.',
      homework: 'Keyingi dars — Web dasturlash (HTML va JavaScript) ga tayyorlanish.',
    },
  },
  {
    id: 'g11-l60',
    grade: 11,
    no: 60,
    part: '4-chorak',
    title: 'Ma’lumotlarni chiqarish. HTML elementlari.',
    kind: 'dars',
    hours: 1,
    tools: ['HTML', 'JavaScript', 'DOM / innerHTML / console.log'],
    objectives: [
      'O‘quvchi **HTML** hujjatining asosiy tuzilishini va sahifa elementlariga **`id`** atributi orqali JavaScript dan murojaat qilishni (`document.getElementById()`) tushunadi.',
      'O‘quvchi JavaScript da **maʼlumotlarni chiqarishning 4 ta usulini** (`innerHTML`, `textContent`, `console.log()`, `window.alert()`) xavfsizlik va qulaylik jihatidan farqlab amalda qo‘llaydi.',
    ],
    intro:
      'HTML — veb-sahifaning skeleti, CSS — kiyimi bo‘lsa, **JavaScript** — uning aqli va harakatidir! Bugun biz JavaScript yordamida HTML elementlarini topish va ekranga jonli **maʼlumot chiqarish**ni boshlaymiz!',
    sections: [
      {
        heading: 'JavaScript dan HTML elementini topish: `document.getElementById()`',
        body: '• HTML elementiga noyob nom beriladi: `<p id="natija">Kutilmoqda...</p>`\n• JavaScript esa **DOM (Document Object Model)** orqali shu elementni topib, uning matnini yoki ichki HTML kodini o‘zgartira oladi:\n```js\nconst el = document.getElementById("natija");\nel.innerHTML = "<b>Salom, 11-sinf!</b>";\nel.textContent = "Faqat toza matn";\n```',
      },
      {
        heading: 'Maʼlumotlarni chiqarishning 4 ta asosiy usuli',
        body: '1. **`innerHTML`**: HTML elementining ichki mazmunini teglari (`<b>`, `<br>`) bilan birga o‘zgartiradi (ishonchsiz foydalanuvchi matni uchun xavfsizroq bo‘lgan **`textContent`** ishlatiladi!).\n2. **`textContent`**: faqat oddiy matn yozadi — HTML teglarni kod sifatida bajarmaydi (XSS hujumidan himoya).\n3. **`console.log()`**: brauzerning **Dasturchi konsoliga (DevTools `F12`)** chiqaradi — dasturni sinash va xatolarni topish (*Debugging*) uchun eng asosiy vosita!\n4. **`window.alert()`**: qalqib chiquvchi ogohlantirish oynasi (foydalanuvchini to‘xtatib qo‘ygani uchun real saytlarda kam ishlatiladi).\n• Shuningdek, eski `document.write()` usuli zamonaviy saytlarda sahifani tozalab yuborishi sababli ishlatilmaydi!',
        tip: 'Sinov va xatolarni tekshirishda har doim `console.log()` dan foydalaning (`F12 → Console`). Sahifada ko‘rsatish uchun esa `document.getElementById("...").textContent` eng toza usul!',
      },
    ],
    keyTerms: [
      { term: 'DOM (Document Object Model)', definition: 'Brauzer tomonidan HTML sahifadan tuziladigan, JavaScript bilan boshqariladigan obyektlar daraxti.' },
      { term: 'document.getElementById()', definition: 'Berilgan `id` atributi bo‘yicha bitta HTML elementini topuvchi asosiy metod.' },
      { term: 'innerHTML vs textContent', definition: 'innerHTML HTML teglarni ham qayta ishlaydi, textContent esa faqat sof matn joylaydi.' },
      { term: 'console.log()', definition: 'Brauzer dasturchi konsoliga (DevTools) tekshiruv va debug xabarlarini chiqarish.' },
    ],
    steps: [
      '1. HTML da `<h2 id="sarlavha">` va `<p id="chiqish">` elementlari qanday yaratilishini eslang.',
      '2. `script` ichida `document.getElementById(...)` bilan maʼlumot chiqaring.',
      '3. Quyidagi jonli HTML/JS sandbox (`htmlplay`) mashqini bajaring!',
    ],
    practice: [
      {
        task: 'HTML da `<div id="status"></div>` berilgan. JavaScript da uning ichiga `"Tizim tayyor"` yozuvini chiqaruvchi va konsolga `"OK"` yuboruvchi 2 qator kod yozing.',
        expected: 'document.getElementById("status").textContent = "Tizim tayyor";\nconsole.log("OK");',
        difficulty: 'oson',
      },
    ],
    games: [
      {
        id: 'g11-l60-g1',
        num: '01',
        title: 'HTML elementiga JavaScript bilan chiqaring',
        topic: 'DOM Output (HTMLPlay)',
        difficulty: 'O‘rta',
        engine: 'htmlplay',
        config: {
          prompt: 'Quyidagi HTML sahifada `<p id="xabar">` elementi bor. `<script>` bo‘limida `document.getElementById("xabar").innerHTML` orqali matn chiqaring va `console.log(...)` qo‘shing!',
          starterCode: '<h2>11-sinf Web Lab</h2>\n<p id="xabar">Hali bo‘sh...</p>\n\n<script>\n  // Bu yerga document.getElementById yozing\n</script>',
          checks: [
            { label: 'id="xabar" elementi mavjud', pattern: 'id\\s*=\\s*["\']xabar["\']', flags: 'i' },
            { label: 'document.getElementById("xabar") chaqirilgan', pattern: 'document\\.getElementById\\(\\s*["\']xabar["\']\\s*\\)', flags: '' },
            { label: 'innerHTML yoki textContent bilan qiymat berilgan', pattern: '\\.(innerHTML|textContent)\\s*=', flags: '' },
            { label: 'console.log() ishlatilgan', pattern: 'console\\.log\\s*\\(', flags: '' },
          ],
          hint: 'Masalan: document.getElementById("xabar").innerHTML = "Salom JS!"; va keyingi qatorga console.log("Tayyor"); yozing.',
        },
      },
      {
        id: 'g11-l60-g2',
        num: '02',
        title: 'Chiqaish usullarini moslang',
        topic: 'JS Output',
        difficulty: 'O‘rta',
        engine: 'match',
        config: {
          prompt: 'JavaScript maʼlumot chiqarish usullarini to‘g‘ri vazifasiga bog‘lang:',
          pairs: [
            { left: 'document.getElementById("id")', right: 'Sahifadagi aniq HTML elementini `id` bo‘yicha topadi' },
            { left: 'element.innerHTML', right: 'Element ichiga HTML teglari bilan birga matn joylaydi' },
            { left: 'element.textContent', right: 'Faqat sof matn joylaydi (HTML teglarni bajarmaydi)' },
            { left: 'console.log()', right: 'Brauzerning DevTools konsoliga debug xabarini chiqaradi' },
          ],
        },
      },
    ],
    quiz: [
      {
        prompt: 'JavaScript da `<span id="ball">0</span>` elementini topish uchun qaysi buyruq to‘g‘ri yozilgan?',
        options: [
          'document.getElementById("ball")',
          'document.getElementByTag("ball")',
          'window.find("ball")',
          'html.id("ball")',
        ],
        answer: 0,
        explanation: 'Katta-kichik harflarga eʼtibor bering: `getElementById` (camelCase)!',
      },
      {
        prompt: 'Dasturchi kod xatosini tekshirish (debugging) uchun ko‘zga ko‘rinmas fonda maʼlumot chiqarishda nimadan foydalanadi?',
        options: ['console.log()', 'document.write()', 'alert()', 'confirm()'],
        answer: 0,
        explanation: 'console.log() oddiy foydalanuvchiga xalaqit bermaydi va F12 Console da ko‘rinadi.',
      },
      {
        prompt: 'Foydalanuvchi kiritgan xavfli matn (`<script>...`) HTML teg sifatida ishlab ketmasligi uchun `innerHTML` o‘rniga nimadan foydalanish xavfsiz?',
        options: ['textContent', 'document.write', 'eval', 'outerHTML'],
        answer: 0,
        explanation: 'textContent har qanday belgini oddiy matn sifatida ko‘rsatadi va XSS hujumidan saqlaydi.',
      },
      {
        prompt: 'Nima uchun sahifa yuklanib bo‘lgandan keyin `document.write()` ni chaqirish tavsiya etilmaydi?',
        options: [
          'U butun mavjud HTML sahifani o‘chirib, ustidan yangidan yozib yuboradi',
          'U faqat Safari da ishlaydi',
          'U matnni qizil qiladi',
          'U faqat raqam chiqaradi',
        ],
        answer: 0,
        explanation: 'Sahifa yuklangach document.write() joriy DOM daraxtini yo‘q qilib yuboradi.',
      },
      {
        prompt: 'HTML hujjatida JavaScript kodi qaysi teg ichida yoziladi?',
        options: ['<script> ... </script>', '<style> ... </style>', '<js> ... </js>', '<codejs>'],
        answer: 0,
        explanation: 'HTML da ichki yoki tashqi JS kodi `<script>` tegi orqali ulanadi.',
      },
    ],
    teacherNotes: {
      method: 'Brauzerda `F12 → Console` ni ochib, jonli sahifadagi biror sarlavhani `document.getElementById(...).textContent` bilan o‘zgartirib ko‘rsating.',
      timing: 'DOM va getElementById 15 daqiqa, 4 ta output usuli 15 daqiqa, HTMLPlay va test 15 daqiqa.',
      assessment: 'O‘quvchi `getElementById` ni to‘g‘ri imlo bilan yozishi va `console.log` vs `innerHTML` ni farqlashi.',
      homework: 'O‘z ismingiz, sinfingiz va sevimli faningizni 3 ta alohida `id` orqali HTML sahifaga JS bilan chiqarib kelish.',
    },
  },
];
