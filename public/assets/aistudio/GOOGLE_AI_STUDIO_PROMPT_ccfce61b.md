# GOOGLE AI STUDIO UCHUN PROMPT — "Informatika" maktab sayti (5–11 sinf)

> Quyidagi matnni to'liq nusxalab, AI Studio'dagi mavjud loyiha (React + Vite + Tailwind + Motion) chatiga yuboring. Oxirida **ILOVA** bor — 5–11 sinflarning rasmiy yillik ish rejasi (340 ta dars). Uni ham shu xabarga qo'shib yuboring (yoki `ish_reja_5-11.json` faylini loyihaga yuklang).

---

## 0. ROL VA MAQSAD

Sen — tajribali frontend dasturchi va O'zbekiston umumta'lim maktablari informatika fani metodisti bo'lib ishlaysan. Mavjud loyihani (1–11 sinf uchun "Informatika | Interaktiv O'yinlar", Liquid Glass dizayn, tungi/kungi rejim) **kengaytirib**, uni maktab informatika o'qituvchisi va o'quvchilari **har kuni dars uchun** ishlatadigan to'liq o'quv saytiga aylantir.

Sayt foydalanuvchilari: 5–11-sinf o'quvchilari (10–17 yosh) va informatika o'qituvchisi. Til: **o'zbek (lotin)**. Interfeys va barcha kontent o'zbek tilida bo'lsin.

Asosiy g'oya: **ILOVA'dagi har bir dars (jami 340 ta) uchun alohida to'liq dars sahifasi** bo'lishi kerak: tushuntirish, amaliy topshiriq, interaktiv o'yin(lar), test va o'qituvchi uchun metodik tavsiya. Hech bir dars mavzusi tushib qolmasin.

## 1. MAVJUD LOYIHA — NIMANI SAQLAYSAN

Mavjud fayllar: `src/App.tsx`, `src/components/GameEngines.tsx` (10 ta o'yin motori: sequence, robot, match, binary, logic, sort, graph, codebug, cipher, quiz), `src/data/curriculum.ts`.

Saqlash shart:
- Qizil-qora Liquid Glass dizayn, tungi/kungi rejim, mobil moslashuv.
- `localStorage`dagi progress va ball tizimi (eski kalitlar buzilmasin; yangi kalitlar qo'sh).
- 1–4-sinf uchun mavjud mavzular va 10 tadan o'yin **o'zgarishsiz qoladi** (ular uchun ish rejasi berilmagan).
- 10 ta mavjud o'yin motori ishlashda davom etsin; ularni qayta yozma, faqat kerak bo'lsa kengaytir.

O'zgartirish shart:
- Hozirgi `curriculum.ts`dagi 5–11-sinf mavzulari umumiy (masalan "Kompyuter qismlari") va rasmiy ish rejaga **mos emas**. 5–11-sinf ma'lumotlarini ILOVA'dagi dars-ma-dars reja bilan **to'liq almashtir**. Mavzu nomlarini ILOVA'dagi yozilishi bilan aynan saqla (o'zgartirma, qisqartirma).

## 2. MA'LUMOTLAR MODELI

Kontentni kod ichiga emas, **ma'lumot fayllariga** ajrat (kod va kontent aralashmasin):

```
src/data/plan/grade5.ts … grade11.ts      // har sinf uchun alohida fayl
src/data/plan/types.ts
src/data/plan/index.ts                    // barcha sinflarni birlashtiradi
```

```ts
type LessonKind = 'dars' | 'amaliy' | 'loyiha' | 'nazorat' | 'takrorlash';

interface Lesson {
  id: string;               // "g5-l03"
  grade: number;            // 5..11
  no: number;               // ILOVA'dagi dars raqami
  part: string;             // "1-yarim yillik" | "1-chorak" ...
  title: string;            // ILOVA'dagi nom, aynan
  kind: LessonKind;
  hours: number;
  tools: string[];          // masalan ["Word","Paint"] — dars qaysi dastur bilan bog'liq
  objectives: string[];     // 2–4 ta o'quv maqsadi ("O'quvchi ... qila oladi")
  intro: string;            // 2–3 gaplik qiziqtiruvchi kirish (kundalik hayotdan misol)
  sections: { heading: string; body: string; example?: string; tip?: string }[]; // tushuntirish
  keyTerms: { term: string; definition: string }[];  // 4–8 ta
  steps?: string[];         // dasturda amaliy bajariladigan qadamlar (raqamlangan)
  practice: { task: string; expected: string; difficulty: 'oson'|'o‘rta'|'qiyin' }[]; // 2–4 ta
  games: GameItem[];        // 1–3 ta interaktiv o'yin (mavjud/yangi motorlar, qarang §5)
  quiz: QuizConfig[];       // 5 ta test savoli (har biriga izoh bilan)
  teacherNotes: {           // faqat "O'qituvchi rejimi"da ko'rinadi
    method: string;         // metodik tavsiya: dars qanday o'tkaziladi (mashq, juftlik, guruh, "aqliy hujum", ...)
    timing: string;         // 45 daqiqalik dars bo'linishi
    assessment: string;     // baholash mezoni
    homework: string;
  };
}
```

Kerak bo'lsa `ish_reja_5-11.json` dagi `{no, part, title, hours, kind}` maydonlarini bevosita import qil — bu ILOVA'ning mashina o'qiy oladigan nusxasi.

## 3. SAHIFALAR VA UX

1. **Bosh sahifa**: 1–11 sinf kartalari (Boshlang'ich / 5–7 / 8–9 / 10–11 guruhlari), umumiy progress, "Davom etish" tugmasi (oxirgi ochilgan dars).
2. **Sinf sahifasi**: sinf bo'yicha dars ro'yxati, **yarim yillik/chorak bo'yicha bo'limlar**, har dars kartasida: raqam, nom, turi nishoni (Amaliy / Nazorat / Takrorlash / Loyiha), bajarilgan holat (✓), o'yin soni. **Qidiruv** va filtr (tur bo'yicha, bajarilmaganlar).
3. **Dars sahifasi** — tablar:
   - **Tushuntirish** (intro, sections, keyTerms, rasmli/diagrammali izohlar),
   - **Amaliyot** (steps + practice, "bajardim" belgilash),
   - **O'yin** (games),
   - **Test** (quiz, natija va xatolar tahlili),
   - **O'qituvchi** (teacherNotes; yoqib-o'chiriladigan "O'qituvchi rejimi").
   Pastda: ← Oldingi dars / Keyingi dars →.
4. **Nazorat ishi darsi**: shu yarim yillik/chorakdagi o'tilgan mavzulardan 10 savollik aralash test + 2–3 o'yin; natija foizda. Savollar o'sha bo'limdagi darslarning `quiz` savollaridan avtomatik tanlansin.
5. **Takrorlash darsi**: shu bo'limning eng muhim atamalari (flashcard rejimi) + xatolik qilingan savollar qayta beriladi.
6. **Progress**: dars, o'yin va test bo'yicha ball, sinf bo'yicha foiz; "Yutuqlar" (nishonlar). Hammasi `localStorage`da.
7. **Qo'shimcha**: sinf ichida va butun saytda qidiruv; dars sahifasini **chop etish** (print CSS); klaviatura bilan boshqarish; `prefers-reduced-motion` ni hurmat qilish; ekran o'quvchi uchun `aria` belgilar.
8. Mobil telefonda ham qulay bo'lsin (ko'p o'quvchi telefondan kiradi). Gorizontal skroll bo'lmasin.

## 4. DARS KONTENTINI YOZISH QOIDALARI

- Til: sodda, aniq o'zbek tili; yoshga mos. 5–6-sinf: qisqa gaplar, ko'p misol, o'yin ohangi. 7–9: qadam-baqadam, amaliy. 10–11: terminlar, tushunchalar o'rtasidagi bog'liqlik, real misollar.
- Har dars **mavzu nomiga aynan mos** bo'lsin. Nomda bir nechta tushuncha bo'lsa (masalan 10-sinf 14-dars: Phishing, Pharming, Vishing, Troyan, Worm, Spyware, Rootkit, Adware, Ransomware) — **har birini alohida** tushuntir.
- Ma'lumotlar **to'g'ri bo'lsin**. Aniq bilmagan raqam, versiya, menyu nomi yoki qoidani to'qima. Ishonching komil bo'lmagan joyda umumiy ta'rif ber va `teacherNotes.method` oxiriga "O'qituvchi tekshirsin" deb yoz. Rasmiy darslik bilan tafovut bo'lishi mumkinligini hisobga ol.
- Dasturlarni ular **maktabda real ishlatiladigan** nom bilan ayt: Word (yoki "matn muharriri"), Paint, Excel, PowerPoint, Scratch, Pencil2D, Audacity, Adobe Spark, Access/ma'lumotlar bazasi dasturi, brauzer, HTML/CSS/JavaScript. Dastur tugma nomlari ingliz tilida qavs ichida berilsin: "Saqlash (Save)". Pullik/litsenziyali dastur bo'lsa, bepul muqobil (LibreOffice, GIMP, Kdenlive, OpenShot ...) ham ayt.
- Amaliy darslarda **aniq qadamlar** bo'lsin (1, 2, 3 …) va natija qanday ko'rinishi kerakligi yozilsin.
- Har darsda kamida: 1 ta kundalik hayotdan misol, 1 ta "Xatolardan ehtiyot bo'l" maslahati, 4+ atama.
- 9–11-sinfda hisob-kitob mavzulari (xotira hajmi, bit/bayt, tarmoq tezligi, formulalar) uchun **yechimli masalalar** va o'quvchi o'zi hisoblaydigan interaktiv kalkulyator bo'lsin.
- Dasturlash mavzularida (Scratch, HTML, JavaScript) **ishlaydigan kod namunasi** ber va uni sayt ichida ishlatib ko'rish imkonini ber (qarang §5, `htmlplay`, `blocks`).
- Xavfsizlik mavzularida (phishing, troyan, ransomware, VPN, himoya) faqat himoya va ogohlantirish nuqtai nazaridan yoz; zararli kod yoki hujum yo'riqnomasi **yozma**.
- Mualliflik huquqi, shaxsiy ma'lumot va internet odobi mavzularida o'quvchilarni mas'uliyatli bo'lishga undaydigan misollar ber.
- Savollarda to'g'ri javob bitta bo'lsin; noto'g'ri variantlar ishonarli (lekin aniq xato) bo'lsin; har savolga qisqa izoh yoz.
- Taklif etilgan test javoblari bir xil joyda (hammasi "B") takrorlanmasin — aralashtir.

## 5. O'YINLAR — MAVJUD VA YANGI MOTORLAR

Hozirgi 10 motor: `sequence, robot, match, binary, logic, sort, graph, codebug, cipher, quiz`. Barcha o'yinlar **ma'lumot (config) orqali** yaratiladi — har bir o'yin uchun yangi kod yozma, motorni qayta ishlat. Mavzularni qamrab olish uchun quyidagi **yangi motorlarni** qo'sh (har biri `GameEngines.tsx`dagi bilan bir xil uslubda, `GameEngineHost` ichiga ulanadi, config interfeysi bilan):

| Yangi motor | Vazifasi | Qaysi mavzularga |
|---|---|---|
| `order` | Bosqichlarni to'g'ri tartibga sudrab qo'yish (drag & drop) | Amaliy darslar: "Hujjatni saqlash", elektron xat yuborish, tarmoq loyihalash bosqichlari |
| `fillblank` | Matndagi bo'sh joyni to'ldirish / variantlardan tanlash | Ta'riflar, atamalar, formulalar, buyruqlar |
| `truefalse` | Tezkor "To'g'ri / Noto'g'ri" (taymer bilan) | Takrorlash va nazorat darslari, xavfsizlik, huquq, etika |
| `flashcards` | Atama — ta'rif kartochkalari, "bildim / bilmadim" | Takrorlash, 9–11-sinf atamalari |
| `hotspot` | Dastur oynasi sxemasida to'g'ri tugma/menyuni bosish | Word, Paint, Excel, Scratch, brauzer, Audacity interfeysi |
| `typing` | Klaviatura/tezkor yozish mashqi (xatolar va tezlik hisobi) | 5-sinf 1–6-darslar, matn bilan ishlash |
| `sheetlab` | Mini elektron jadval: kataklarga formula kiritiladi va natija tekshiriladi (`=A1+B1`, SUM, AVERAGE, IF, absolyut/nisbiy murojaat, INDEX/MATCH) | 5–7, 9–10-sinf elektron jadval darslari |
| `chartlab` | Berilgan ma'lumotdan to'g'ri diagramma turi/o'qlar/nom tanlash | Diagramma darslari |
| `blocks` | Scratch uslubidagi blok dasturlash: bloklarni sudrab dastur tuzish, sprayt harakatini ko'rish (takrorlash, shart, o'zgaruvchi, hodisa, to'qnashuv) | 5-sinf 24–27, 6-sinf 17–25, 8-sinf 1–8 |
| `htmlplay` | HTML/CSS/JS mini-muharrir: chap tomonda kod, o'ng tomonda natija (sandboxed iframe), topshiriq bajarilganini tekshirish | 8-sinf 10–16, 9-sinf 64–66, 11-sinf 60–66 |
| `dblab` | Mini ma'lumotlar bazasi: jadval, maydon turlari, filtr/query shartini tuzish; kalitlar va bog'lanishlarni (1:1, 1:∞, ∞:∞) chizish | 6-sinf 14–16, 7-sinf 27–32, 10-sinf 53–65 |
| `netbuilder` | Tarmoq qurish: kabel, hub, switch, router, modem, kompyuterlarni sudrab ulash va ishlashini tekshirish | 8-sinf 17–23, 9-sinf 12–14, 11-sinf 26–32 |
| `calc` | Xotira/fayl hajmi, bit tezligi, sanoq sistemasi masalalari: o'quvchi javob kiritadi, yechim bosqichlari ko'rsatiladi | 9-sinf 10, 34; 10-sinf 2; 11-sinf 33 |
| `imagelab` | Tasvirni sozlash: yorqinlik, kontrast, aylantirish, qirqish, o'lcham — slayderlar bilan maqsadli natijaga erishish | 5–6-sinf Paint, 9-sinf 35–38, 11-sinf 53–55 |
| `audiolab` | Sodda audio vaqt chizig'i: kesish, birlashtirish, ovoz balandligi, tezlik (Web Audio API, o'zingiz yaratgan oddiy ohanglar bilan) | 8-sinf 32, 11-sinf 6–10 |
| `timeline` | Video/audio montaj vaqt chizig'i: klip qo'yish, kesish, titr qo'shish | 8-sinf 25–31, 11-sinf 1–5 |
| `crossword` | Atamalardan kross-vord yoki so'z qidirish | Takrorlash darslari |
| `casestudy` | Qisqa vaziyat (masalan, "shubhali xat keldi") — to'g'ri qaror tanlash | Xavfsizlik, internet odobi, mualliflik huquqi, raqamli tengsizlik, texnologiyaning ta'siri |

**Mavzu → motor moslashtirish qoidasi** (dars `tools`/kalit so'zlariga qarab tanla):
- Matn muharriri / hujjat formatlash → `hotspot`, `order`, `fillblank`, `typing`
- Paint / tasvir → `hotspot`, `imagelab`, `match`
- Elektron jadval / diagramma → `sheetlab`, `chartlab`, `fillblank`
- Scratch / blok-sxema / algoritm / takrorlash / shart → `blocks`, `robot`, `sequence`, `codebug`
- HTML / veb / JavaScript → `htmlplay`, `codebug`, `fillblank`
- Ma'lumotlar bazasi → `dblab`, `match`, `order`
- Kompyuter qurilmalari / dasturiy ta'minot / turlari → `match`, `hotspot`, `sort`
- Tarmoq → `netbuilder`, `match`, `order`, `graph`
- Xavfsizlik / huquq / etika / jamiyatga ta'siri → `casestudy`, `truefalse`, `quiz`
- Kodlash / shifrlash / sanoq sistemasi / hajm → `cipher`, `binary`, `calc`
- Audio / video → `audiolab`, `timeline`, `order`
- Yangi texnologiyalar (AI, VR, 3D printer, bulut ...) → `match`, `truefalse`, `casestudy`
- Nazorat va takrorlash → `quiz`, `truefalse`, `flashcards`, `crossword`

Har bir darsda **kamida bitta** mavzuga mos o'yin va 5 ta savollik test bo'lsin. Bir sinfdagi qo'shni darslarda bir xil motor ketma-ket 3 martadan ortiq takrorlanmasin. Har o'yinda: ko'rsatma, maslahat (hint), xatoda tushunarli izoh, to'g'ri javobda ball va tabrik, "Qayta urinish" tugmasi bo'lsin. Foydalanuvchi o'yinda adashib chiqib ketmasin — "Boshidan boshlash" doimo mavjud bo'lsin.

## 6. ISH TARTIBI (MUHIM — bir javobga hammasini sig'dirma)

340 ta darsning to'liq kontenti bitta javobga sig'maydi. Shuning uchun quyidagi bosqichlar bilan ishla va **har bosqich oxirida to'xta**, men "davom et" deyman:

**1-bosqich — Infratuzilma (kontentsiz):** `types.ts`, yangi sahifalar (sinf → dars ro'yxati → dars sahifasi + tablar), routing/navigatsiya, progress, qidiruv, O'qituvchi rejimi, nazorat/takrorlash rejimlari, yangi o'yin motorlari (hammasi ishlaydigan, 1–2 namunaviy config bilan sinalgan). ILOVA'dagi 340 darsning **faqat sarlavhalari** bilan `grade5.ts … grade11.ts` skeletini yarat (kontent maydonlari hozircha bo'sh, UI "Bu dars tez orada to'ldiriladi" desin va sayt xatosiz ishlasin).

**2-bosqich — 5-sinf (34 dars)** to'liq kontent. Keyin 6-sinf, 7-sinf, 8-sinf — har biri alohida bosqich.

**3-bosqich — 9, 10, 11-sinf**: har sinf 68 dars. Har sinfni **chorak bo'yicha** (17–18 dars) 4 qismga bo'lib yoz. "Davom et" deganimda keyingi qismdan davom et.

Har bosqichda:
- Faqat ma'lumot fayllarini (`gradeN.ts`) to'ldir; kodga zarurat bo'lmasa tegma.
- **Hech qanday "..." yoki "qolganlari shu tarzda" yozma** — har bir dars uchun barcha maydonlar to'liq yozilsin. Sig'masa, bosqichni kichikroq bo'lagiga bo'l, lekin to'liq yoz.
- Oxirida `npm run lint` (tsc) va `npm run build` xatosiz o'tishini tekshir va natijani qisqa yoz: nechta dars tayyor, nechta qoldi, qaysi mavzularda ishonching past (o'qituvchi tekshirishi kerak).
- Kod hajmi katta bo'lgani uchun `GameEngines.tsx`ni bitta faylda ushlab turma: yangi motorlarni `src/components/engines/` papkasiga alohida fayllarga ajrat, `GameEngineHost` esa ularni import qilsin.

## 7. TEXNIK TALABLAR

- Stack o'zgarmaydi: React 19, Vite, Tailwind 4, `motion`, `lucide-react`. Keraksiz og'ir kutubxona qo'shma. Rasm o'rniga SVG/emoji/CSS illyustratsiya ishlat; tashqi rasm havolalari bo'lmasin.
- Dars kontenti **lazy-load** bo'lsin (sinf fayli faqat ochilganda yuklansin) — sayt tez ochilsin.
- `htmlplay` — faqat `sandbox` iframe (`allow-scripts`), tashqi tarmoqqa chiqmaydi. O'quvchi kodi saytning o'ziga ta'sir qilmasin.
- Hech qanday shaxsiy ma'lumot to'planmasin; progress faqat brauzerda saqlansin.
- Ixtiyoriy (oxirgi bosqichda, men so'raganimda): **"AI-ustoz"** — o'quvchi dars haqida savol bersa, Gemini API orqali yosh darajasiga mos qisqa javob beradi. API kalit faqat server tomonda (`express`, `GEMINI_API_KEY`) bo'lsin, brauzerga chiqmasin; javob faqat joriy dars mavzusi doirasida bo'lsin va noto'g'ri/xavfli mavzularni rad etsin.
- Kirish imkoniyati: kontrast WCAG AA, fokus holati ko'rinsin, tugmalar kamida 44px.

## 8. QABUL QILISH MEZONLARI (har bosqichdan keyin tekshir)

1. ILOVA'dagi har bir dars saytda bor, nomi aynan o'sha, tartibi to'g'ri.
2. Dars ochilganda bo'sh joy yoki "undefined" ko'rinmaydi.
3. Har darsda tushuntirish + amaliyot + o'yin + 5 savollik test bor (skelet bosqichidan tashqari).
4. Barcha o'yinlar telefon va kompyuterda ishlaydi, xatoda javob tushuntirilgan.
5. Progress sahifa yangilanganda saqlanib qoladi; "Progressni tozalash" tasdiq bilan ishlaydi.
6. Tungi va kungi rejimda barcha matn o'qiladi.
7. Build xatosiz; konsolda xato yo'q.

**Hozir 1-bosqichni boshla.** Boshlashdan oldin mavjud kodni o'qib, qisqa reja yoz (qaysi fayllar o'zgaradi, qaysilari yangi), keyin amalga oshir.

---

## ILOVA — 5–11-SINFLAR RASMIY YILLIK ISH REJASI (2026–2027)

Izoh: `[AMALIY]`, `[LOYIHA]`, `[NAZORAT]`, `[TAKRORLASH]` — dars turi. 5–8-sinf: haftasiga 1 soat, 34 dars, 2 yarim yillik. 9–11-sinf: haftasiga 2 soat, 68 dars, 4 chorak. Manba faylda 7-sinf 10-dars uchun soat ko'rsatilmagan — 1 soat deb olingan. 8-sinf manba faylida 17-dars "3-chorak" deb belgilangan, lekin dars tartibiga ko'ra bu 2-yarim yillik boshi — shunday olingan.

### 5-SINF (34 dars, haftasiga 1 soat)
**1-yarim yillik**
1. Matnli hujjat bilan ishlashni boshlash
2. Sichqonchadan va klaviaturadan foydalanish
3. Matnni belgilash va tahrirlash
4. Matnni o‘chirish. Amaliy mashg‘ulot [AMALIY]
5. Matnni ko‘chirish. Amaliy mashg‘ulot [AMALIY]
6. Asosiy tugmalarni tanlash. Hujjatni chop etish
7. Nazorat ishi [NAZORAT]
8. Matnni tekshirish
9. Save tugmasi va hujjatni qulay nom bilan saqlash
10. Tasvirlar bilan ishlashni boshlash. Line uskunasidan foydalanish
11. Pencil va Brush uskunalaridan foydalanish
12. Chiziqning qalinligi va rangini oʻzgartirish.
13. Shakllar chizish
14. Tasvir qismlaridan nusxa olish, kesib tashlash yoki joylashtirishdan foydalanish
15. Nazorat ishi [NAZORAT]
16. Eraser uskunasi. Tasvirni saqlash
**2-yarim yillik**
17. Diagrammalar bilan ishlashni boshlash. Axborotni guruhlash
18. Axborotni qiymatini hisoblash. Piktogramma yaratish
19. Jadvallar yaratishda Microsoft Excel dasturidan foydalanish. Grafika. Diagramma va unga maʼlumotlar kiritish
20. Diagramma turini tanlash. Diagrammaga x-oʻqi, y-oʻqi hamda diagramma nomini joylash
21. Diagrammadan xulosa chiqarish
22. Ustunli diagramma ustunlari rangini oʻzgartirish
23. Nazorat ishi [NAZORAT]
24. Blok-sxema yaratish. Burchaklar bilan ishlash.
25. Spraytlarni oldinga va turli yoʻnalishlarga harakatlantirish
26. Dasturlashni boshlash. Robotni labirint boʻylab harakatlantirish
27. Takrorlash [TAKRORLASH]
28. Qidiruv tizimlarida ishlashni boshlash. Qidiruv tizimlari.
29. Veb-brauzerlar.
30. Elektron pochtada ishlash. Elektron pochta. Yangi elektron xat yozish.
31. Qabul qiluvchining manzilini kiritish. Xatni oʻqish va unga javob qaytarish.
32. Elektron pochtada xabarlarni uzatish va formatlash
33. Nazorat ishi [NAZORAT]
34. Takrorlash [TAKRORLASH]

### 6-SINF (34 dars, haftasiga 1 soat)
**1-yarim yillik**
1. Matn qo‘shish, o‘zgartrish va ko‘chirish
2. Shrift turi, o‘lchami va rangini o‘zgartrish. Matnni tekislash
3. Hujjatga tasvir va hoshiya qo‘shish
4. Hujjatlarni auditoriya uchun moslash
5. Loyiha ishi. Amaliy mashg‘ulot [LOYIHA]
6. Tasvirni import qilish
7. Ishning boshlang‘ich nusxalari.
8. Tasvirlarni aylantirish, teskari o‘girish. Tasvirni o‘lchamlarini o‘zgartish
9. Nazorat ishi [NAZORAT]
10. Elektron jadval tushunchasi. Ma’lumotlarni elektron jadvalga kiritish
11. Sodda formulalarni kiritishda katak manzilidan foydalanish. Formulalarni nusxalash
12. Grafik yaratish.
13. Amaliy mashgʻulot [AMALIY]
14. Ma’lumotlar turlari va bazasi, maydonlarni aniqlash
15. Nazorat ishi [NAZORAT]
16. Ma’lumotlar bazasidan harakatlanish va teng sharti bilan query yaratish. Query-ma’lumotlar bazasidan aniq ma’lumotni qidirish uskunasi
**2-yarim yillik**
17. Takrorlash algoritmi [TAKRORLASH]
18. Takrorlash algoritmidan foydalanib blok-sxemalar yaratish [TAKRORLASH]
19. Scratch dasturida takrorlash amaliyotidan foydalanish [AMALIY]
20. Scratch dasturida PEN uskunasidan foydalanish
21. Scratch dasturida shakllar bilan ishlash
22. Scratch dasturida takrorlash bloki yordamida yangi shakl chizish
23. Takrorlash blokidan foydalanib dastur natijasini taxmin qilish [TAKRORLASH]
24. Scratch dasturida protseduralar bilan ishlash
25. Dekompozitsiyadan foydalanish. Kichik masala yechimi orqali katta masalaga o'tish
26. Nazorat ishi [NAZORAT]
27. Web manzillar haqida tushuncha. Qidirish tizimini ishlash tamoyili va axborotning ishonchliligi.
28. Axborotni filtrlash. Web-sahifa, web-sayt, URL manzilidagi matnlarni saqlash
29. Elektron xatni yozish, tahrirlash, o‘qish, javob berish va matn bilan ishlash uskunalari. Foydalanuvchi manzillarini qo‘shish
30. Ilova qilingan hujjatlarni ochish, elektron xatga hujjat ilova qilish
31. Elektron pochta papkalarini boshqarish. Loyiha ishi [LOYIHA]
32. Taqdimotni yaratish rejasi. Maketni tanlash va slaydga matn, tasvir, ovoz qo‘shish
33. Nazorat ishi [NAZORAT]
34. Takrorlash [TAKRORLASH]

### 7-SINF (34 dars, haftasiga 1 soat)
**1-yarim yillik**
1. Matn stillarini sozlash va ulardan foydalanish
2. Wrap text sozlamalaridan foydalanish. Tasvirni qirqish va o‘lchamini o‘zgartirish
3. Jadval o‘rnatish
4. Belgili ro‘yxat yaratish
5. Hujjatga Header va Footer maydonlarini qo‘shish
6. Matnni ustunlarga bo‘lish
7. Sahifani formatlash buyruqlaridan foydalanish. Print preview buyrug‘idan foydalanish
8. Amaliy mashg‘ulot: Internetdan foydalanish jarayonida xavfsizlikni ta’minlash [AMALIY]
9. Nazorat ishi [NAZORAT]
10. Loyiha xususiyatini ishlab chiqish [LOYIHA]
11. Slaydga o‘tish effektlarini qo‘shish.
12. Slaydlarga vaqt va audio qo‘shish
13. Animatsiya effektini qo‘shish
14. Animatsiya va vaqtni moslash
15. Nazorat ishi [NAZORAT]
16. Auditoriya va maqsadni bilish
**2-yarim yillik**
17. Elektron jadvalni loyihalash. Dizayn shakllantirish [LOYIHA]
18. Formulani kiritish. Elektron jadvalni sinovdan o‘tkazish
19. Modellashtirish
20. Ma’lumotlarni toʻplash shaklini tuzish
21. Elektron jadvalni formatlash
22. Elektron jadvalni baholash
23. Elektron jadval natijalarini diagramma sifatida taqdim etish
24. Shartli formatlash va maqsadni qidirish vositalaridan foydalanish
25. Nazorat ishi [NAZORAT]
26. Takrorlash [TAKRORLASH]
27. Ma’lumotlar bazasi uchun maqsadni aniqlash. Ma’lumotlar bazasi uchun maydon tanlash
28. Ma’lumot turlari. Ma’lumotlar bazasi jadvalini yaratish.
29. Ochiladigan ro‘yxatni yaratish. Maʼlumot kiritish formasini yaratish (Form).
30. Ma’lumotlar bazasini sinovdan o‘tkazish. Ma’lumotlar xavfsizligi.
31. Maʼlumotlarni matn bilan ishlash dasturiga yuborish.
32. Maʼlumotlarni jadval bilan ishlash dasturiga yuborish.
33. Nazorat ishi [NAZORAT]
34. Takrorlash [TAKRORLASH]

### 8-SINF (34 dars, haftasiga 1 soat)
**1-yarim yillik**
1. Kirish. Dasturlashning asosiy tushunchalari
2. Amaliy mashg‘ulot [AMALIY]
3. O‘zgaruvchilar va ularni boshqarish.
4. Amaliy mashg‘ulot. Spraytni bosilganda ochko oshib boruvchi o‘yin yaratish [AMALIY]
5. Shartli dasturlash. To‘qnashuvlar asosidagi ssenariy.
6. Ma’lumotlar validatsiyasi. Yosh va bo‘yni so‘rab oluvchi dastur
7. Sprayt kostyumlari va vaqt bilan ishlash.
8. Dasturni sinovdan o‘tkazish va debaglash.
9. Nazorat ishi [NAZORAT]
10. HTML tushunchasi va veb-sahifani sozlash
11. Veb-sahifada matn joylashtirish va ularni boshqarish.
12. Link joylashtirish
13. Veb-sahifada tasvirlar joylashtirish va ularni boshqarish.
14. Veb-sahifa dizaynini tanlash ularni boshqarish. Ranglar
15. Nazorat ishi [NAZORAT]
16. Veb-saytni internetda joylashtirish
**2-yarim yillik**
17. Kompyuter tarmoqlari. Asosiy tushunchalar
18. Tarmoq komponentlari.
19. Amaliy mashg‘ulot. Kabel, jek, Hub, Swich, Router, modem [AMALIY]
20. Tarmoqni loyihalash [LOYIHA]
21. Tarmoq boshqaruvi. Boshqarish vazifalarini aniqlash
22. Tarmoq xavfsizligi
23. Amaliy mashgʻulot: maktab kompyuter tarmog‘ini loyihalash [LOYIHA]
24. Nazorat ishi [NAZORAT]
25. Video va animatsiyalardan foydalanish. Asosiy tushunchalar
26. Animatsiya yaratish. Pencil2D dasturidan foydalanish
27. Takrorlash [TAKRORLASH]
28. Adobe Spark dasturida yangi video yaratish
29. Animatsiya yoki videoga saundtrek yoki ovozli sharh (Narration) qo‘shish
30. Auditoriya talablarini inobatga olish.
31. Mahsulotni reklama qilish
32. Audacity dasturida ishlash
33. Nazorat ishi [NAZORAT]
34. Takrorlash [TAKRORLASH]

### 9-SINF (68 dars, haftasiga 2 soat)
**1-chorak**
1. Kompyuter qurilmalari va dasturiy taʼminot. Kompyuter tizimining asosiy komponentlari
2. Operatsion tizimlar
3. Kompyuter turlari
4. Yangi texnologiyalarning taʼsiri
5. Kiritish qurilmalari va ularning qoʻllanishi
6. Maʼlumotni bevosita kiritishda foydalaniladigan qurilmalar.
7. Chiqarish qurilmalari va ulardan foydalanish
8. Xotira qurilmalari va ma’lumot almashish vositalari
9. Turli xotira qurilmalarining afzallik va kamchiliklari
10. Xotira hajmiga bog‘liq masalalarni yechish
11. Nazorat ishi [NAZORAT]
12. Kompyuter tarmoqlari qurilmalari
13. Brauzerdan foydalanish. Kompyuter tarmoqlari dasturiy jihati.
14. Tarmoq muammolari va kommunikatsiya
15. Axborot texnologiyasining bandlikka taʼsiri
16. Axborot texnologiyasi (AT) ning tashkilotlar ish uslubiga taʼsiri. Mikroprotsessorli uy qurilmalari
17. Nazorat ishi [NAZORAT]
18. Axborot texnologiyasi (AT) jihozlaridan uzoq muddat foydalanishning sog‘liqqa ta’siri
**2-chorak**
19. Kommunikatsiya dasturlari qamrovi. Maʼlumotlarni boshqarish dasturlari
20. Oʻlchov dasturlari. Boshqaruv dasturlaridagi mikroprotsessorlar
21. Modellashtirish dasturlari. Boshqaruv, taʼlim, sog‘liqni saqlash, savdo va autentifikatsiyada kompyuter tizimlari
22. Tahlil va loyihalash [LOYIHA]
23. Ishlab chiqish, sinash va joriy qilish
24. Hujjatlashtirish, baholash va texnik xizmat ko‘rsatish
25. Nazorat ishi [NAZORAT]
26. Xavfsizlik muammolari. Elektron xavfsizlik. Maʼlumotlar xavfsizligi
27. Axborot himoyasi protokoli. Antiviruslar va fayervol
28. Auditoriyani huquqiy, maʼnaviy, axloqiy va madaniy jihatdan baho berish
29. Mualliflik huquqi va uning turlari. Mualliflik huquqi himoyasi
30. AKT foydalanuvchisi bilan elektron xat orqali muloqot qilish. Spam tushunchasi
31. Nazorat ishi [NAZORAT]
32. Internetdan samarali foydalanish. Internetdan topilgan axborotning ishonchliligini baholash
**3-chorak**
33. Fayl kengaytmasi va ularni samarali boshqarish
34. Saqlash yoki uzatish uchun fayl hajmini kamaytirish
35. Tasvirlarni joylashtirish va tahrirlash uchun dastur uskunalaridan foydalanish
36. Tasvirni aniq joylashtirish. Tasvirning tomonlar nisbatini oʻzgartirish
37. Tasvirni qirqish va aylantirish
38. Tasvir rangi, yorqinligi, kontrasti va aniqligi boshqarish
39. Sahifa maketi. Maqsad va auditoriyaga mos hujjat yaratish uchun dasturiy uskunalardan foydalanish
40. Hujjatga obyektlarni joylashtirish
41. Header va Footer maydonlarini yaratish
42. Nazorat ishi [NAZORAT]
43. Korporativ brend va unga xos stil. Korporativ brendga xos stilga muvofiq hujjat tayyorlash
44. Sahifa/slayd izchilligini taʼminlash
45. Yangi stil yaratish
46. Xatolarni tekshirish uchun dasturlardan foydalanish
47. Xatolarni tekshirish usullari
48. Verifikatsiya va validatsiya tuhsunchalari
49. Grafik yoki diagramma yaratish. Diagramma turlari
50. Tayyorlangan diagrammani boshqarish va o‘zgartirish
51. Nazorat ishi [NAZORAT]
52. Takrorlash [TAKRORLASH]
**4-chorak**
53. Matn va sahifa maketini formatlash
54. Dastur uskunalari yordamida jadvallarni tahrirlash
55. Maʼlumot manbasi bilan hujjatni birlashtirib, pochta orqali yuborish
56. Ma’lumotlar bazasi tuzilmasini yaratish. Maʼlumotlarni boshqarish va taqdim etish
57. Ob’yektlarni to‘g‘ri joylash. Taqdimot slaydlarini yaratish uchun mos dastur imkoniyatlaridan foydalanish
58. Taqdimotga elektron jadvaldan diagrammalarni import qilish
59. Nazorat ishi [NAZORAT]
60. Maʼlumotlar modelini yaratish. Nisbiy va absolyut murojaat.
61. Formula va funksiyalar hamda ulardan foydalanish
62. Maʼlumotlar modelini sinovdan oʻtkazish. Maʼlumotlarni boshqarish
63. Maʼlumotlarni taqdim etish
64. Veb dasturlashning uch qatlami. Veb sahifa yaratish
65. Linklar, bookmarklar va ankor. Absolyut va nisbiy fayl manzillari
66. Stil jadvallaridan foydalanish. Veb saytni sinash va publikatsiya qilish
67. Nazorat ishi [NAZORAT]
68. Takrorlash [TAKRORLASH]

### 10-SINF (68 dars, haftasiga 2 soat)
**1-chorak**
1. Maʼlumot, axborot va bilimlar bazasi. Maʼlumot manbasi. Bevosita va bilvosita manbalardan maʼlumot toʻplashning afzallik hamda kamchiliklari. Axborotning sifati
2. Kod berish, kodlash va shifrlash. Ma’lumotlarni kodlashning afzallik va kamchiliklari. Simmetrik va asimmetrik shifrlash usullari.
3. Ma’lumotlarning toʻgʻriligini tekshirish.
4. Vizual tekshirish va ma`lumotlanri ikki marta kiritish.
5. Apparat ta`minot. Ichki va tashqi qurilmalar
6. Xotira qurilmalari. Tizimli dasturiy ta`minot. Drayverlar.
7. Amaliy dasturiy ta`minot. Fotosuratni tahrirlash dasturiy taʼminoti [AMALIY]
8. Video tahrirlash dasturiy taʼminoti. Veb sahifa ishlab chiqish dasturiy taʼminoti
9. Foydalanuvchi interfeysi dizaynidagi boshqaruv elementlari. Utilit dasturlar. Buyurtma yoki tayyor dasturiy ta`minot.
10. Loyiha (amaliy) ishi [LOYIHA]
11. Nazorat ishi [NAZORAT]
12. Sensorlar. Harakat va bosim sensorlari, Namlik, harorat va yorug‘lik sensorlari
13. Elektron xavfsizlik tushunchasi.
14. Phishing, Pharming, Vishing, Troyan, Worm, Spyware, Rootkit, Adware, Ransomware tushunchalari va xavfsizlikni ta`minlash.
15. Salomatlik va xavfsizlik.
16. Raqamli tengsizlik tushunchasi va sabablari, Sanoati rivojlangan va rivojlanmagan hududlar, Ijtimoiy-iqtisodiy guruhlar.
17. Nazorat ishi [NAZORAT]
18. Samarasi yuqori va past boʻlgan texnologiyalar. Turli davlatlardagi holatlarni o‘rganish
**2-chorak**
19. Tarmoq kompyuterlari. Lokal hududiy (Local area networks) va global hududiy tarmoq (Wide area networks).
20. Kliyent-server va peer-to-peer tarmoqlari.
21. Virtual shaxsiy tarmoq (VPN)
22. Intranet va ekstranet. Internet va uning xususiyatlari
23. Internetda muloqot qilish. Mobil tarmoqlar
24. Video va veb konferensiya. Videokonferensiyaning jamiyatga taʼsiri
25. Nazorat ishi [NAZORAT]
26. Ekspert tizim haqida
27. Bilimlar bazasi va yakunlovchi mexanizm
28. Foydalanuvchi interfeysi
29. Ekspert tizimlardan foydalanish
30. Maʼlumotlarni qayta ishlash tizimlari
31. Nazorat ishi [NAZORAT]
32. Real vaqt rejimida qayta ishlash tizimi
**3-chorak**
33. Elektron jadval yaratish. Qatorlar va ustunlarni boshqarish
34. Elektron jadval xavfsizligi
35. Panel va oynalarni interfeysga mahkamlash
36. Elektron jadvalni formatlash. Shartli formatlash
37. Formula va funksiyalarni yaratish. Katakka absolyut va nisbiy murojaat
38. Nomlangan katak va diapazon
39. Yaxlitlash funksiyalari
40. Sana va vaqtga oid funksiyalar. Shartli funksiyalar. Qidirish funksiyalari
41. INDEX va MATCH funksiyalari
42. Shartli statistik funksiyalar
43. Nazorat ishi [NAZORAT]
44. Validatsiya qoidalari
45. Elektron jadvalga qoʻllanadigan validatsiya
46. Maʼlumotlar kiritilishini tekshirish
47. Maʼlumotlarni filtrlash va saralash
48. Jamlovchi jadvallar va diagrammalar
49. Maʼlumotlarni import va eksport qilish
50. Grafik va diagrammalar. Modellashtirish. Simulyatorlar
51. Nazorat ishi [NAZORAT]
52. Takrorlash [TAKRORLASH]
**4-chorak**
53. Ma’lumotlar bazasini yaratish. Maʼlumot turlari va katak hajmlari. Uch tomonlama bogʻlanish.
54. Birga-bir va birga-ko‘p bogʻlanish. Koʻpga-koʻp bogʻlanish. Bogʻlanishlar yaratish va foydalanish
55. Oddiy yozuvli va relyatsion maʼlumotlar bazasi oʻrtasidagi farq
56. Maʼlumotlarni import qilish. Relyatsion maʼlumotlar bazasini yaratish.
57. Kalitlar. Murakkab kalit. Tashqi kalit.
58. Bogʻlanishlar yaxlitligi. Ma’lumotlar validatsiyasi va verifikatsiyasi
59. Qidirish amallari. Murakkab querylar. Ichki va jamlanma querylar.
60. Statik va dinamik parametrlar. Ma’lumotlar bazasi doirasida hisoblashlarni amalga oshirish.
61. Nazorat ishi [NAZORAT]
62. Ma’lumotlarni saralash. Ma’lumot kiritish formalari.
63. Hisobotlar. Ma’lumotlarni eksport qilish.
64. Formni normallashtirish. Maʼlumotlar bazasini 3NFga normallashtirish.
65. Ma’lumotlar lugʻati. Maʼlumot turlari. Fayl va ma’lumotlarni boshqarish.
66. Bevosita fayldan foydalanish. Boshqaruv axborot tizimlari.
67. Nazorat ishi [NAZORAT]
68. Takrorlash [TAKRORLASH]

### 11-SINF (68 dars, haftasiga 2 soat)
**1-chorak**
1. Videoni tahrirlash dasturi. Mutanosiblikni belgilash.
2. Videoklipni montaj qilish va kliplarni birlashtirish.
3. Matnli slayd va titr yaratish. Izoh va subtitr qoʻshish. Animatsiya va effektlar qoʻshish.
4. Videoklipdan tasvir hosil qilish. Videoklipga ovozli ma’lumot qoʻshish va oʻchirish.
5. Videoklip tezligini oʻzgartirish. Videoklipni turli fayl formatlarida eksport qilish.
6. Audioni tahrirlash dasturlari
7. Audiokliplarni kesish va kliplarni birlashtirish
8. Audioklipning ovoz sozlamalarini tahrirlash
9. Audioklipning tezligini va ovoz balandligini sozlash. Reverberatsiya effektini qoʻshish yoki uni sozlash.
10. Audiokliplarni turli fayl formatlarida eksport qilish.
11. Nazorat ishi [NAZORAT]
12. Texnologiya va bizning turmush tarzimiz. Uch oʻlchamli printer. Toʻrtinchi va beshinchi avlod uyali aloqasi.
13. Sunʼiy intellekt. Boyitilgan reallik. Biometrik axborot. Bulutli texnologiyalar.
14. Avtomatlashtirilgan tarjima. Golografik tasvirlash. Robototexnika.
15. QR kodlar. Taqiladigan hisoblash qurilmalari.
16. Ultra yuqori aniqlik darajasidagi televideniye. Koʻrish qobiliyatini yaxshilash. Virtual reallik.
17. Nazorat ishi [NAZORAT]
18. Takrorlash darsi [TAKRORLASH]
**2-chorak**
19. Elektron tijorat va internet banking nima?
20. Elektron pul oʻtkazmalari. Zaxiralarni avtomatik boshqarish
21. Ma’lumotlarni intellektual tahlillash
22. Ijtimoiy tarmoq va videokonferensiyalar
23. Masofadan ishlash. Sport va tibbiyotda texnologiyalar
24. Ishlab chiqarish va ta`limda texnologiyalar
25. Nazorat ishi [NAZORAT]
26. Kompyuter tarmoqlari komponentlari
27. Simsiz ulanish nuqtasi
28. Shlyuz, Bridj va Fayervol. Bit oqimini uzatish
29. Kanalli va paketli kommutatsiyalash. Xabarli kommutatsiyalash
30. Optik usulda ma’lumot almashish. Simsiz aloqa/uzatish usullari
31. Nazorat ishi [NAZORAT]
32. Takrorlash darsi [TAKRORLASH]
**3-chorak**
33. Ma’lumotlarni uzatishda polosa kengligi va bit tezligining ahamiyati. BitTorrent protokoli
34. Tarmoq xavfsizligi muammolari. Xavfsizlik usullari
35. Ma’lumotlarni himoya qilish haqidagi qonun tamoyillari
36. Sun’iy yoʻldosh aloqa tizimlari
37. Loyiha boshqaruvining bosqichlari. Konsepsiya va boshlash [LOYIHA]
38. Loyiha boshqaruvi uchun foydalaniladigan dasturiy ta’minot turlari [LOYIHA]
39. Kritik bosqichlarni tahlil qilish. Gantt diagrammalari
40. Amaliy mashg‘ulot [AMALIY]
41. Avariya/falokatdan keyingi tiklanishni boshqarish
42. Prototiplash
43. Kompyuter yordamida dizayn yaratish va ishlab chiqarish
44. Nazorat ishi [NAZORAT]
45. Tahlil. Hujjatlar tahlili usuli
46. Dizayn. Ma’lumotlar oqimi diagrammasi. Tizim blok-sxemasi. Ekran formasi
47. Yangi tizim uchun texnik va dasturiy ta’minot
48. Ishlab chiqish va sinovdan oʻtkazish. Qora quti va oq quti strategiyasi sinovlari
49. Alfa sinov va beta sinov
50. Installyatsiya va hujjatlashtirish. Tahlil va texnik xizmat koʻrsatish
51. Nazorat ishi [NAZORAT]
52. Takrorlash darsi [TAKRORLASH]
**4-chorak**
53. Vektorli va rastrli tasvirlar
54. Guruhlash va biriktirish. Elementni burchak boʻylab aylantirish va joylashtirish. Transformatsiya uskunalari. Tanlash uskunalari.
55. Tasvirni saqlash va hajmini kichraytirish. Matn uchun maydon yaratish. Rastrli tasvirlar. Qizil koʻzni olib tashlash.
56. Animatsiya asoslari. Niqoblovchi qatlam.
57. Elektron xatlarni birlashtirish. Master hujjatni manba faylga biriktirish.
58. Prompt matni yaratish. Kerakli yozuvlarni avtomatik belgilash. O‘zgaruvchi maydonlar.
59. Nazorat ishi [NAZORAT]
60. Ma’lumotlarni chiqarish. HTML elementlari.
61. Oʻzgaruvchilar bilan ishlash. Maʼlumot turlari.
62. Operatorlar. Stringlarni boshqarish.
63. Array. Shartli buyruqlar.
64. Luplar.
65. Funksiyalar.
66. HTML shakllari va boshqaruv hodisalari. Pop-up oynalar.
67. Nazorat ishi [NAZORAT]
68. Takrorlash darsi [TAKRORLASH]