# QO'SHIMCHA PROMPT — Haqiqiy "Liquid Glass" (rasmdagidek)

> Buni AI Studio chatiga alohida xabar qilib yuboring (asosiy prompt'dan oldin yoki keyin farqi yo'q).

---

Saytdagi barcha kartochkalar, panellar, tugmalar, tablar va modal oynalar dizaynini **Apple "Liquid Glass"** uslubiga o'tkaz. Ilova qilingan rasmdagi musiqa pleyeri kartochkasi — aniq namuna. Hozirgi dizayn faqat shaffof va xira (halo) ko'rinadi; u **shishaga o'xshamayapti**. Maqsad: kartochka orqasidagi fon shisha orqali ko'rinayotgandek **sinishi (refraksiya)**, chetlari **yorug' qirra** bo'lib turishi va yuzasida **aks (specular highlight)** bo'lishi kerak.

## Rasmdagi shisha nimalardan iborat (shularning hammasini qil)

1. **Orqa fon shisha orqali buziladi**: kartochka chetlariga yaqin joyda fon egilgan/cho'zilgan ko'rinadi (linza effekti), o'rtasida deyarli tiniq. Faqat bir tekis blur emas.
2. **Yorug' qirra (rim light)**: kartochka perimetri bo'ylab ingichka oq chiziq; yuqori-chap burchakda yorqin, pastki-o'ng burchakda xira (gradient). Qirra ichkariga ham yumshoq nur beradi.
3. **Aks (specular)**: yuqori chap tomonda yumshoq diagonal oq yaltirash, pastda ozgina teskari aks. Juda kuchli bo'lmasin.
4. **Rang va tiniqlik**: shisha o'zi deyarli rangsiz, lekin orqadagi rang to'yinganligi oshadi (`saturate`), yorqinlik ozgina ko'tariladi. Oq "tuman" qatlami qo'yma.
5. **Qalinlik hissi**: ichki soya (inset) pastki va o'ng chetda, tashqi soya juda yumshoq va katta.
6. **Burchaklar**: katta, yumshoq radius (kartochka 28–36px, tugma — to'liq pill).
7. Shisha **faqat rang-barang, harakatdagi fon ustida** chiroyli ko'rinadi, shuning uchun sahifa fonini ham almashtir (pastda).

## 1) Fon

`body` ostida qotib qolgan (`position: fixed; inset: 0; z-index: -1`) **to'yingan gradient fon** bo'lsin: 3–4 ta katta, xiralashgan rangli "blob" (radial-gradient yoki blur qilingan div), asta-sekin siljiydi (30–40s animatsiya, `prefers-reduced-motion`da o'chadi).
- Kungi rejim: ko'k–moviy–binafsha–och sariq tuslar (rasmdagiga o'xshash).
- Tungi rejim: to'q ko'k, binafsha, qizil (hozirgi qizil-qora palitrani saqlab, lekin blob'lar rang-barang bo'lsin).
Fon tekis qora/oq bo'lsa, shisha ko'rinmaydi — shuning uchun blob'lar shart.

## 2) Shisha uchun CSS (`src/index.css`ga qo'sh)

```css
:root {
  --glass-blur: 14px;
  --glass-sat: 1.8;
  --glass-bright: 1.08;
  --glass-rim-hi: rgba(255,255,255,.85);
  --glass-rim-lo: rgba(255,255,255,.12);
  --glass-fill: rgba(255,255,255,.06);
  --glass-radius: 32px;
}
:root.dark {
  --glass-rim-hi: rgba(255,255,255,.55);
  --glass-rim-lo: rgba(255,255,255,.06);
  --glass-fill: rgba(255,255,255,.04);
  --glass-bright: 1.05;
}

.glass {
  position: relative;
  isolation: isolate;
  border-radius: var(--glass-radius);
  background: var(--glass-fill);
  /* fallback: oddiy blur (Safari/Firefox) */
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-sat)) brightness(var(--glass-bright));
          backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-sat)) brightness(var(--glass-bright));
  box-shadow:
    inset 0 1px 0 0 rgba(255,255,255,.55),          /* yuqori yorug' qirra */
    inset 1px 0 0 0 rgba(255,255,255,.25),
    inset 0 -2px 6px 0 rgba(0,0,0,.10),             /* pastki ichki qalinlik */
    inset -2px 0 6px 0 rgba(0,0,0,.06),
    0 18px 50px -12px rgba(10,20,60,.35),           /* yumshoq katta soya */
    0 2px 8px rgba(10,20,60,.12);
  transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s;
}

/* Chizma qirra: gradient border (yuqori-chap yorqin, pastki-o'ng xira) */
.glass::before {
  content: "";
  position: absolute; inset: 0;
  border-radius: inherit;
  padding: 1.5px;
  background: linear-gradient(135deg,
      var(--glass-rim-hi) 0%,
      rgba(255,255,255,.18) 30%,
      var(--glass-rim-lo) 55%,
      rgba(255,255,255,.35) 100%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
}

/* Aks (specular): yuqori-chapdan diagonal yaltirash + qirra bo'ylab ichki nur */
.glass::after {
  content: "";
  position: absolute; inset: 0;
  border-radius: inherit;
  background:
    radial-gradient(120% 70% at 12% 0%, rgba(255,255,255,.38) 0%, rgba(255,255,255,0) 55%),
    linear-gradient(160deg, rgba(255,255,255,.14) 0%, rgba(255,255,255,0) 35%,
                            rgba(255,255,255,0) 70%, rgba(255,255,255,.10) 100%);
  mix-blend-mode: soft-light;
  pointer-events: none;
  z-index: 1;
}

.glass > * { position: relative; z-index: 3; }  /* kontent aks ustida */

.glass-interactive:hover { transform: translateY(-3px) scale(1.01); }
.glass-interactive:active { transform: scale(.985); }

/* Pill tugma varianti */
.glass-pill { --glass-radius: 999px; padding: .65rem 1.2rem; }

/* Faol (tanlangan) holat: shisha rangli nur oladi */
.glass[data-active="true"] {
  background: color-mix(in srgb, var(--accent, #3b82f6) 22%, transparent);
}
```

## 3) Refraksiya (haqiqiy sinish) — SVG displacement filtri

Rasmdagi asosiy "shisha" hissi chetlardagi egilishdan keladi. Buni Chromium brauzerlarda (Chrome, Edge, Opera, Android Chrome) `backdrop-filter: url(#...)` bilan qil, boshqa brauzerlarda yuqoridagi oddiy blur fallback ishlayversin.

`App.tsx`ning eng tepasida (bir marta) yashirin SVG qo'sh:

```tsx
<svg width="0" height="0" style={{position:'absolute'}} aria-hidden="true">
  <filter id="liquid-glass" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
    {/* turbulentlik xaritasi — chetlari bo'ylab silliq to'lqin */}
    <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="7" result="noise"/>
    <feGaussianBlur in="noise" stdDeviation="2" result="softNoise"/>
    <feDisplacementMap in="SourceGraphic" in2="softNoise" scale="38"
                       xChannelSelector="R" yChannelSelector="G"/>
  </filter>
</svg>
```

```css
@supports (backdrop-filter: url(#liquid-glass)) {
  /* Faqat Chromium */
  .glass-refract {
    backdrop-filter: url(#liquid-glass) blur(6px) saturate(var(--glass-sat)) brightness(var(--glass-bright));
  }
}
```

Muhim:
- `glass-refract` ni **faqat katta kartochkalar va panellarda** ishlat (dars kartochkasi, o'yin oynasi, yon panel, modal). Kichik tugma va ro'yxat elementlarida oddiy `.glass` yetarli — refraksiya og'ir.
- Bir ekranda `glass-refract` 6–8 tadan oshmasin (tezlik). Mobil qurilmada (`(max-width: 768px)`) refraksiyani o'chirib, oddiy blur qoldir.
- `Safari`/`Firefox`da SVG backdrop filtri ishlamaydi — xato bermasin, fallback ko'rinsin.

## 4) Komponent

`src/components/Glass.tsx` yarat:

```tsx
type Props = React.HTMLAttributes<HTMLDivElement> & {
  refract?: boolean;      // katta kartochkalar uchun
  interactive?: boolean;  // hover/active animatsiya
  pill?: boolean;
  active?: boolean;
  as?: React.ElementType;
};
export function Glass({ refract, interactive, pill, active, as: Tag = 'div', className = '', ...rest }: Props) {
  return <Tag data-active={active} className={
    ['glass', refract && 'glass-refract', interactive && 'glass-interactive', pill && 'glass-pill', className]
      .filter(Boolean).join(' ')} {...rest} />;
}
```

Saytdagi **barcha** kartochka, panel, tab, tugma, input, modal, dars ro'yxati elementlarini `Glass` yoki `.glass` ga o'tkaz. Eski yarim-shaffof `bg-white/10 border` kabi uslublarni olib tashla — ikkita uslub aralashib ketmasin.

## 5) Matn va o'qilish

- Shisha ustidagi matn: kungi rejimda to'q (`#0b1b3a`), tungi rejimda oq. Muhim matnga yengil `text-shadow: 0 1px 8px rgba(0,0,0,.25)`.
- Kontrast WCAG AA bo'lsin: fon yorqin joyda ham matn o'qilsin. Zarur bo'lsa uzun matnli bloklarda (dars tushuntirishi) `--glass-fill` ni `.18`gacha oshir — o'qish estetikadan muhimroq.
- Shisha ustida shisha (ichma-ich) 2 qatlamdan oshmasin.

## 6) Qo'shimcha jilo (rasmdagidek)

- Kursor kartochka ustida yurganda aks (`radial-gradient`) kursor tomon siljisin (`--mx`, `--my` CSS o'zgaruvchilari, `onPointerMove`).
- Tugma bosilganda shisha "ezilib" qaytadi (`scale .96` → spring, `motion` bilan).
- Progress chizig'i (dars/ball) rasmdagi pleyer chizig'iga o'xshasin: ingichka shaffof trek, oq to'ldirilgan qism va oq yumaloq tutqich.
- Ikonalar qalin, oq/to'q `lucide-react` (strokeWidth 2.25).

## 7) Tekshirish

1. Kungi va tungi rejimda kartochka ostidagi fon rangi o'zgarsa, kartochka ichida ham sezilsin (shisha shaffof ekani bilinsin).
2. Kartochka chetida yorug' qirra va yuqori chapda aks ko'rinsin.
3. Chrome'da chetlarda fon egilishi ko'rinsin; Safari/Firefox'da hech bo'lmasa blur + qirra + aks ishlasin.
4. Telefon va kompyuterda sahifa qotmasin (scroll silliq). Sekin bo'lsa `glass-refract` sonini kamaytir.
5. Matn har ikki rejimda o'qiladi.

Faqat dizayn qatlamini o'zgartir: ma'lumotlar, o'yin mantiqi va progressga tegma.
