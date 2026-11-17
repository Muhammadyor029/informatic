import React, { useEffect, useMemo, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  ClipboardList,
  Layers,
  Lightbulb,
  Maximize2,
  Minimize2,
  Presentation,
  Sparkles,
} from 'lucide-react';
import type { GradePlan, Lesson, SlideItem } from '../data/plan/types';
import officeDocsImg from '../assets/images/pres_office_docs_1794894762212.jpg';
import dataSheetsImg from '../assets/images/pres_data_sheets_1794894762972.jpg';
import codeAlgoImg from '../assets/images/pres_code_algo_1794894763192.jpg';
import hardwareSysImg from '../assets/images/pres_hardware_sys_1794894763997.jpg';
import networkSecImg from '../assets/images/pres_network_sec_1794894763377.jpg';
import mediaAiImg from '../assets/images/pres_media_ai_1794894764793.jpg';

type VisualTheme =
  | 'office'
  | 'data'
  | 'database'
  | 'code'
  | 'web'
  | 'hardware'
  | 'network'
  | 'security'
  | 'media'
  | 'project';

const THEME_IMAGE_MAP: Record<VisualTheme, { src: string; alt: string; badge: string }> = {
  office: {
    src: officeDocsImg,
    alt: 'Matn hujjatlari va taqdimot dizayni illyustratsiyasi',
    badge: 'Hujjat va Taqdimot',
  },
  data: {
    src: dataSheetsImg,
    alt: 'Elektron jadvallar va grafik tahlil illyustratsiyasi',
    badge: 'Elektron Jadval va Tahlil',
  },
  database: {
    src: dataSheetsImg,
    alt: 'Ma’lumotlar bazasi va relyatsion jadvallar illyustratsiyasi',
    badge: 'Ma’lumotlar Bazasi',
  },
  code: {
    src: codeAlgoImg,
    alt: 'Algoritmlar va dasturlash bloklari illyustratsiyasi',
    badge: 'Algoritm va Dasturlash',
  },
  web: {
    src: codeAlgoImg,
    alt: 'Veb dasturlash HTML, CSS va JavaScript illyustratsiyasi',
    badge: 'Veb Texnologiyalar',
  },
  hardware: {
    src: hardwareSysImg,
    alt: 'Kompyuter arxitekturasi va apparat qurilmalari illyustratsiyasi',
    badge: 'Apparat va Arxitektura',
  },
  network: {
    src: networkSecImg,
    alt: 'Kompyuter tarmoqlari va marshrutlash illyustratsiyasi',
    badge: 'Kompyuter Tarmoqlari',
  },
  security: {
    src: networkSecImg,
    alt: 'Kiberxavfsizlik va ma’lumotlar himoyasi illyustratsiyasi',
    badge: 'Axborot Xavfsizligi',
  },
  media: {
    src: mediaAiImg,
    alt: 'Multimedia, grafika va zamonaviy texnologiyalar illyustratsiyasi',
    badge: 'Grafika, Media va AI',
  },
  project: {
    src: officeDocsImg,
    alt: 'Loyiha boshqaruvi va tizim tahlili illyustratsiyasi',
    badge: 'Loyiha va Tizimlar',
  },
};

function detectVisualTheme(lesson: Lesson): VisualTheme {
  const hay = `${lesson.title} ${lesson.tools.join(' ')} ${lesson.intro}`.toLowerCase();
  if (
    hay.includes('xavfsiz') ||
    hay.includes('phishing') ||
    hay.includes('virus') ||
    hay.includes('fayervol') ||
    hay.includes('shifr') ||
    hay.includes('mualliflik') ||
    hay.includes('huquq') ||
    hay.includes('spam')
  ) {
    return 'security';
  }
  if (
    hay.includes('tarmoq') ||
    hay.includes('router') ||
    hay.includes('switch') ||
    hay.includes('modem') ||
    hay.includes('vpn') ||
    hay.includes('intranet') ||
    hay.includes('yo‘ldosh') ||
    hay.includes('kommutatsiya') ||
    hay.includes('bittorrent') ||
    hay.includes('brauzer') ||
    hay.includes('pochta')
  ) {
    return 'network';
  }
  if (
    hay.includes('ma’lumotlar bazasi') ||
    hay.includes("ma'lumotlar bazasi") ||
    hay.includes('access') ||
    hay.includes('query') ||
    hay.includes('kalit') ||
    hay.includes('normallashtir') ||
    hay.includes('3nf')
  ) {
    return 'database';
  }
  if (
    hay.includes('excel') ||
    hay.includes('jadval') ||
    hay.includes('diagramma') ||
    hay.includes('grafik yarat') ||
    hay.includes('formula') ||
    hay.includes('index') ||
    hay.includes('match')
  ) {
    return 'data';
  }
  if (hay.includes('html') || hay.includes('css') || hay.includes('veb') || hay.includes('web')) {
    return 'web';
  }
  if (
    hay.includes('scratch') ||
    hay.includes('algoritm') ||
    hay.includes('blok-sxema') ||
    hay.includes('dasturlash') ||
    hay.includes('javascript') ||
    hay.includes('array') ||
    hay.includes('lup') ||
    hay.includes('funksiya') ||
    hay.includes('dekompozitsiya') ||
    hay.includes('debag')
  ) {
    return 'code';
  }
  if (
    hay.includes('qurilma') ||
    hay.includes('xotira') ||
    hay.includes('operatsion') ||
    hay.includes('sensor') ||
    hay.includes('mikroprotsessor') ||
    hay.includes('hisob-kitob') ||
    hay.includes('drayver') ||
    hay.includes('printer')
  ) {
    return 'hardware';
  }
  if (
    hay.includes('tasvir') ||
    hay.includes('paint') ||
    hay.includes('video') ||
    hay.includes('audio') ||
    hay.includes('audacity') ||
    hay.includes('pencil2d') ||
    hay.includes('animatsiya') ||
    hay.includes('sunʼiy intellekt') ||
    hay.includes("sun'iy intellekt") ||
    hay.includes('virtual reallik') ||
    hay.includes('vektor') ||
    hay.includes('rastr')
  ) {
    return 'media';
  }
  if (
    hay.includes('sdlc') ||
    hay.includes('gantt') ||
    hay.includes('loyiha') ||
    hay.includes('ekspert tizim') ||
    hay.includes('prototip') ||
    hay.includes('tahlil')
  ) {
    return 'project';
  }
  return 'office';
}

function SlideDiagramSvg({ theme, lesson }: { theme: VisualTheme; lesson: Lesson }) {
  switch (theme) {
    case 'office':
      return (
        <svg viewBox="0 0 320 175" className="h-full w-full" aria-label="Hujjat va slayd maketi sxemasi">
          <rect x="12" y="10" width="296" height="155" rx="14" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.2" />
          <rect x="24" y="22" width="272" height="24" rx="6" fill="#dc2626" fillOpacity="0.18" />
          <circle cx="38" cy="34" r="5" fill="#dc2626" />
          <rect x="52" y="30" width="60" height="8" rx="4" fill="currentColor" fillOpacity="0.45" />
          <rect x="122" y="30" width="46" height="8" rx="4" fill="currentColor" fillOpacity="0.28" />
          <rect x="176" y="30" width="46" height="8" rx="4" fill="currentColor" fillOpacity="0.28" />
          <rect x="34" y="58" width="160" height="90" rx="8" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.16" />
          <rect x="46" y="70" width="110" height="10" rx="4" fill="#dc2626" fillOpacity="0.7" />
          <rect x="46" y="88" width="136" height="6" rx="3" fill="currentColor" fillOpacity="0.4" />
          <rect x="46" y="100" width="124" height="6" rx="3" fill="currentColor" fillOpacity="0.32" />
          <rect x="46" y="112" width="130" height="6" rx="3" fill="currentColor" fillOpacity="0.32" />
          <rect x="46" y="128" width="68" height="10" rx="5" fill="#0ea5e9" fillOpacity="0.45" />
          <rect x="206" y="58" width="80" height="54" rx="8" fill="#0ea5e9" fillOpacity="0.18" stroke="#0ea5e9" strokeOpacity="0.45" />
          <polygon points="218,102 238,76 254,94 266,82 278,102" fill="#0ea5e9" fillOpacity="0.65" />
          <rect x="206" y="120" width="80" height="28" rx="6" fill="currentColor" fillOpacity="0.08" />
          <text x="246" y="138" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" opacity="0.8">
            {lesson.tools[0] || 'Maket'}
          </text>
        </svg>
      );
    case 'data':
      return (
        <svg viewBox="0 0 320 175" className="h-full w-full" aria-label="Elektron jadval va diagramma sxemasi">
          <rect x="12" y="10" width="296" height="155" rx="14" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.2" />
          {/* Left Grid */}
          <rect x="24" y="24" width="132" height="126" rx="8" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.18" />
          {[0, 1, 2, 3].map((r) => (
            <line key={r} x1="24" y1={50 + r * 24} x2="156" y2={50 + r * 24} stroke="currentColor" strokeOpacity="0.14" />
          ))}
          <line x1="68" y1="24" x2="68" y2="150" stroke="currentColor" strokeOpacity="0.14" />
          <line x1="112" y1="24" x2="112" y2="150" stroke="currentColor" strokeOpacity="0.14" />
          <text x="46" y="40" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor">A</text>
          <text x="90" y="40" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor">B</text>
          <text x="134" y="40" textAnchor="middle" fontSize="9" fontWeight="700" fill="#dc2626">=SUM</text>
          {/* Right Bar Chart */}
          <line x1="176" y1="138" x2="296" y2="138" stroke="currentColor" strokeOpacity="0.35" />
          <line x1="176" y1="30" x2="176" y2="138" stroke="currentColor" strokeOpacity="0.35" />
          <rect x="190" y="88" width="20" height="50" rx="4" fill="#10b981" fillOpacity="0.75" />
          <rect x="220" y="54" width="20" height="84" rx="4" fill="#dc2626" fillOpacity="0.82" />
          <rect x="250" y="70" width="20" height="68" rx="4" fill="#3b82f6" fillOpacity="0.78" />
          <polyline points="200,84 230,50 260,66 286,42" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        </svg>
      );
    case 'database':
      return (
        <svg viewBox="0 0 320 175" className="h-full w-full" aria-label="Ma’lumotlar bazasi jadvallari va bog‘lanish">
          <rect x="12" y="10" width="296" height="155" rx="14" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.2" />
          <rect x="24" y="34" width="112" height="106" rx="8" fill="currentColor" fillOpacity="0.08" stroke="#3b82f6" strokeOpacity="0.55" />
          <rect x="24" y="34" width="112" height="24" rx="6" fill="#3b82f6" fillOpacity="0.25" />
          <text x="80" y="50" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="currentColor">Jadval 1 (PK)</text>
          <text x="34" y="76" fontSize="8.5" fill="currentColor">🔑 ID (Kalit)</text>
          <text x="34" y="96" fontSize="8.5" fill="currentColor">• Maydon 1</text>
          <text x="34" y="116" fontSize="8.5" fill="currentColor">• Maydon 2</text>

          <line x1="136" y1="74" x2="184" y2="74" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="4 3" />
          <circle cx="142" cy="74" r="4" fill="#dc2626" />
          <text x="160" y="64" textAnchor="middle" fontSize="9" fontWeight="800" fill="#dc2626">1 : ∞</text>
          <polygon points="184,74 176,69 176,79" fill="#dc2626" />

          <rect x="184" y="34" width="112" height="106" rx="8" fill="currentColor" fillOpacity="0.08" stroke="#10b981" strokeOpacity="0.55" />
          <rect x="184" y="34" width="112" height="24" rx="6" fill="#10b981" fillOpacity="0.25" />
          <text x="240" y="50" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="currentColor">Jadval 2 (FK)</text>
          <text x="194" y="76" fontSize="8.5" fill="currentColor">🔗 Tashqi kalit</text>
          <text x="194" y="96" fontSize="8.5" fill="currentColor">• Query WHERE</text>
          <text x="194" y="116" fontSize="8.5" fill="currentColor">• Hisobot / Forma</text>
        </svg>
      );
    case 'code':
    case 'web':
      return (
        <svg viewBox="0 0 320 175" className="h-full w-full" aria-label="Algoritm blok-sxema va kod tuzilmasi">
          <rect x="12" y="10" width="296" height="155" rx="14" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.2" />
          <rect x="30" y="24" width="108" height="26" rx="13" fill="#10b981" fillOpacity="0.25" stroke="#10b981" strokeOpacity="0.6" />
          <text x="84" y="40" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor">
            {theme === 'web' ? '1. HTML (Tuzilma)' : 'Boshlash (Kirish)'}
          </text>
          <line x1="84" y1="50" x2="84" y2="66" stroke="currentColor" strokeOpacity="0.45" strokeWidth="2" />
          <polygon points="84,66 130,88 84,110 38,88" fill="#f59e0b" fillOpacity="0.22" stroke="#f59e0b" strokeOpacity="0.7" />
          <text x="84" y="91" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor">
            {theme === 'web' ? '2. CSS (Dizayn)' : 'Shart / Sikl?'}
          </text>
          <line x1="84" y1="110" x2="84" y2="126" stroke="currentColor" strokeOpacity="0.45" strokeWidth="2" />
          <rect x="30" y="126" width="108" height="26" rx="7" fill="#3b82f6" fillOpacity="0.22" stroke="#3b82f6" strokeOpacity="0.6" />
          <text x="84" y="142" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor">
            {theme === 'web' ? '3. JS (Mantiq)' : 'Natija / Chiqish'}
          </text>

          <rect x="160" y="26" width="132" height="124" rx="10" fill="#0f172a" fillOpacity="0.86" stroke="currentColor" strokeOpacity="0.2" />
          <circle cx="174" cy="39" r="3.5" fill="#ef4444" />
          <circle cx="185" cy="39" r="3.5" fill="#f59e0b" />
          <circle cx="196" cy="39" r="3.5" fill="#10b981" />
          <text x="172" y="62" fontSize="8.5" fontFamily="monospace" fill="#34d399">&lt;algoritm&gt;</text>
          <text x="180" y="80" fontSize="8.5" fontFamily="monospace" fill="#93c5fd">if (shart) {'{'}</text>
          <text x="188" y="98" fontSize="8.5" fontFamily="monospace" fill="#fde68a">  bajar();</text>
          <text x="180" y="116" fontSize="8.5" fontFamily="monospace" fill="#93c5fd">{'}'}</text>
          <text x="172" y="134" fontSize="8.5" fontFamily="monospace" fill="#34d399">&lt;/algoritm&gt;</text>
        </svg>
      );
    case 'hardware':
      return (
        <svg viewBox="0 0 320 175" className="h-full w-full" aria-label="Kompyuter arxitekturasi CPU, xotira va qurilmalar">
          <rect x="12" y="10" width="296" height="155" rx="14" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.2" />
          <rect x="24" y="54" width="66" height="66" rx="10" fill="#0ea5e9" fillOpacity="0.2" stroke="#0ea5e9" strokeOpacity="0.6" />
          <text x="57" y="84" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor">Kiritish</text>
          <text x="57" y="98" textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.7">Sensor/Klav.</text>

          <line x1="90" y1="87" x2="118" y2="87" stroke="#dc2626" strokeWidth="2.5" />
          <polygon points="118,87 110,82 110,92" fill="#dc2626" />

          <rect x="118" y="42" width="84" height="90" rx="12" fill="#dc2626" fillOpacity="0.18" stroke="#dc2626" strokeOpacity="0.7" />
          <text x="160" y="70" textAnchor="middle" fontSize="11" fontWeight="800" fill="currentColor">CPU</text>
          <rect x="130" y="82" width="60" height="18" rx="4" fill="currentColor" fillOpacity="0.12" />
          <text x="160" y="94" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor">ALU + CU</text>
          <rect x="130" y="105" width="60" height="18" rx="4" fill="#f59e0b" fillOpacity="0.25" />
          <text x="160" y="117" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor">RAM / Kesh</text>

          <line x1="202" y1="87" x2="230" y2="87" stroke="#10b981" strokeWidth="2.5" />
          <polygon points="230,87 222,82 222,92" fill="#10b981" />

          <rect x="230" y="54" width="66" height="66" rx="10" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeOpacity="0.6" />
          <text x="263" y="84" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor">Chiqarish</text>
          <text x="263" y="98" textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.7">Monitor/SSD</text>
        </svg>
      );
    case 'network':
    case 'security':
      return (
        <svg viewBox="0 0 320 175" className="h-full w-full" aria-label="Tarmoq topologiyasi va xavfsizlik himoyasi">
          <rect x="12" y="10" width="296" height="155" rx="14" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.2" />
          <line x1="65" y1="54" x2="160" y2="88" stroke="#3b82f6" strokeWidth="2.2" />
          <line x1="65" y1="124" x2="160" y2="88" stroke="#3b82f6" strokeWidth="2.2" />
          <line x1="160" y1="88" x2="256" y2="88" stroke={theme === 'security' ? '#10b981' : '#dc2626'} strokeWidth="2.5" />

          <rect x="28" y="34" width="54" height="36" rx="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.3" />
          <text x="55" y="55" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="currentColor">Kompyuter</text>

          <rect x="28" y="106" width="54" height="36" rx="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.3" />
          <text x="55" y="127" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="currentColor">Qurilma</text>

          <circle cx="160" cy="88" r="28" fill={theme === 'security' ? '#10b981' : '#dc2626'} fillOpacity="0.2" stroke={theme === 'security' ? '#10b981' : '#dc2626'} strokeWidth="2" />
          <text x="160" y="85" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="currentColor">
            {theme === 'security' ? 'FAYERVOL' : 'ROUTER'}
          </text>
          <text x="160" y="98" textAnchor="middle" fontSize="7.5" fill="currentColor" opacity="0.75">
            {theme === 'security' ? 'Shifrlash' : 'Switch/Modem'}
          </text>

          <rect x="234" y="60" width="60" height="56" rx="10" fill="#6366f1" fillOpacity="0.2" stroke="#6366f1" strokeOpacity="0.6" />
          <text x="264" y="86" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor">Server</text>
          <text x="264" y="100" textAnchor="middle" fontSize="7.5" fill="currentColor" opacity="0.7">Internet</text>
        </svg>
      );
    case 'media':
      return (
        <svg viewBox="0 0 320 175" className="h-full w-full" aria-label="Multimedia tahrirlash va to‘lqin shakli">
          <rect x="12" y="10" width="296" height="155" rx="14" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.2" />
          <rect x="26" y="24" width="128" height="78" rx="10" fill="#8b5cf6" fillOpacity="0.18" stroke="#8b5cf6" strokeOpacity="0.55" />
          <polygon points="78,48 78,78 106,63" fill="#dc2626" />
          <rect x="166" y="24" width="128" height="78" rx="10" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.2" />
          {[14, 34, 52, 28, 60, 44, 24, 54, 38, 22].map((h, i) => (
            <rect
              key={i}
              x={178 + i * 11}
              y={63 - h / 2}
              width="6"
              height={h}
              rx="3"
              fill={i % 2 === 0 ? '#0ea5e9' : '#dc2626'}
              fillOpacity="0.8"
            />
          ))}
          <rect x="26" y="114" width="268" height="36" rx="8" fill="currentColor" fillOpacity="0.08" />
          <rect x="34" y="122" width="76" height="20" rx="5" fill="#3b82f6" fillOpacity="0.7" />
          <rect x="116" y="122" width="110" height="20" rx="5" fill="#10b981" fillOpacity="0.7" />
          <rect x="232" y="122" width="54" height="20" rx="5" fill="#f59e0b" fillOpacity="0.7" />
        </svg>
      );
    case 'project':
    default:
      return (
        <svg viewBox="0 0 320 175" className="h-full w-full" aria-label="Loyiha boshqaruvi bosqichlari va Gantt diagramma">
          <rect x="12" y="10" width="296" height="155" rx="14" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.2" />
          <text x="28" y="42" fontSize="9" fontWeight="700" fill="currentColor">1. Tahlil</text>
          <rect x="108" y="30" width="66" height="18" rx="6" fill="#3b82f6" fillOpacity="0.75" />
          <text x="28" y="76" fontSize="9" fontWeight="700" fill="currentColor">2. Dizayn</text>
          <rect x="150" y="64" width="76" height="18" rx="6" fill="#10b981" fillOpacity="0.75" />
          <text x="28" y="110" fontSize="9" fontWeight="700" fill="currentColor">3. Sinov</text>
          <rect x="196" y="98" width="68" height="18" rx="6" fill="#f59e0b" fillOpacity="0.75" />
          <text x="28" y="144" fontSize="9" fontWeight="700" fill="currentColor">4. Joriy etish</text>
          <rect x="236" y="132" width="56" height="18" rx="6" fill="#dc2626" fillOpacity="0.8" />
        </svg>
      );
  }
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function buildAutoSlides(plan: GradePlan, lesson: Lesson, theme: VisualTheme): SlideItem[] {
  if (lesson.slides && lesson.slides.length > 0) {
    return lesson.slides;
  }

  const slides: SlideItem[] = [];

  // Slide 1: Cover & Real-life Goal
  slides.push({
    title: lesson.title,
    subtitle: `${plan.label} · ${lesson.part} · #${lesson.no}-dars`,
    bullets: [
      ...(lesson.objectives.length > 0
        ? lesson.objectives
        : ['Mavzuning asosiy tushunchalarini o‘zlashtirish va amaliyotda qo‘llash.']),
    ],
    highlight: lesson.intro || 'Kundalik hayotdagi amaliy misollar bilan tanishamiz.',
    note: `Kerakli vositalar: ${lesson.tools.length > 0 ? lesson.tools.join(', ') : 'Dars materiallari'} (${lesson.hours} soat).`,
    diagram: theme,
  });

  // Content slides from every LessonSection
  lesson.sections.forEach((sec, idx) => {
    const parts = splitSentences(sec.body);
    const bullets = parts.length > 0 ? parts.slice(0, 4) : [sec.body];
    slides.push({
      title: `${idx + 1}. ${sec.heading}`,
      subtitle: 'Nazariy tushuntirish va misol',
      bullets,
      highlight: sec.example ? `Misol: ${sec.example}` : undefined,
      note: sec.tip,
      diagram: theme,
    });
  });

  // Key Terms slide if present
  if (lesson.keyTerms.length > 0) {
    slides.push({
      title: 'Asosiy atamalar lug‘ati',
      subtitle: `${lesson.keyTerms.length} ta muhim tushuncha`,
      bullets: lesson.keyTerms.slice(0, 6).map((kt) => `${kt.term} — ${kt.definition}`),
      highlight: 'Har bir atamaning ma’nosini o‘z so‘zingiz bilan tushuntirib bering.',
      diagram: theme,
    });
  }

  // Practice & Steps slide
  if ((lesson.steps && lesson.steps.length > 0) || lesson.practice.length > 0) {
    const stepBullets =
      lesson.steps && lesson.steps.length > 0
        ? lesson.steps.slice(0, 5)
        : lesson.practice.map((p, i) => `Topshiriq #${i + 1}: ${p.task}`);
    slides.push({
      title: 'Amaliyot rejasi va kutilgan natija',
      subtitle: 'Kompyuterda bajariladigan bosqichlar',
      bullets: stepBullets,
      highlight:
        lesson.practice[0]?.expected
          ? `Kutilgan natija: ${lesson.practice[0].expected}`
          : 'Amaliy bosqichlarni tartib bilan bajaring.',
      note: lesson.teacherNotes.homework
        ? `Uyga vazifa: ${lesson.teacherNotes.homework}`
        : undefined,
      diagram: theme,
    });
  }

  // Summary / Check slide
  slides.push({
    title: 'Xulosa va bilimlarni mustahkamlash',
    subtitle: 'Dars yakuni — Interaktiv o‘yin va test',
    bullets: [
      `Mavzu: "${lesson.title}" to‘liq ko‘rib chiqildi.`,
      `Amaliy topshiriqlar: ${lesson.practice.length} ta · Interaktiv mashqlar: ${Math.max(1, lesson.games.length)} ta.`,
      `Bilim tekshiruvi: ${Math.max(5, lesson.quiz.length)} ta test savoli bilan natijangizni sinang.`,
    ],
    highlight: 'Keyingi qadam: "O‘yin" va "Test" bo‘limlariga o‘tib ball to‘plang!',
    diagram: theme,
  });

  return slides;
}

interface PresentationDeckProps {
  plan: GradePlan;
  lesson: Lesson;
  onGoToGames: () => void;
  onGoToQuiz: () => void;
}

export function PresentationDeck({
  plan,
  lesson,
  onGoToGames,
  onGoToQuiz,
}: PresentationDeckProps) {
  const theme = useMemo(() => detectVisualTheme(lesson), [lesson]);
  const slides = useMemo(() => buildAutoSlides(plan, lesson, theme), [plan, lesson, theme]);
  const [slideIdx, setSlideIdx] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setSlideIdx(0);
    setImgError(false);
  }, [lesson.id]);

  // Escape exits fullscreen presentation
  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullscreen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [fullscreen]);

  const cur = slides[slideIdx] ?? slides[0];
  const activeTheme = (cur?.diagram as VisualTheme) || theme;
  const media = THEME_IMAGE_MAP[activeTheme] ?? THEME_IMAGE_MAP.office;
  const pct = slides.length > 0 ? Math.round(((slideIdx + 1) / slides.length) * 100) : 100;

  return (
    <div
      className={
        fullscreen
          ? 'fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto bg-slate-100 p-4 text-slate-950 dark:bg-[#0b0d14] dark:text-white sm:p-8'
          : 'space-y-4'
      }
    >
      {/* Presentation Top Bar */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-900/12 bg-white/70 px-4 py-3 dark:border-white/14 dark:bg-white/[0.04]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#dc2626]/15 text-[#b91c1c] dark:text-[#ff8589]">
            <Presentation className="h-4 w-4" />
          </div>
          <div>
            <div className="font-mono-jb text-[11px] font-bold uppercase tracking-wider text-[#b91c1c] dark:text-[#ff8589]">
              Rasmli Prezentatsiya · {plan.label}
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              Slayd {slideIdx + 1} / {slides.length} ({pct}%)
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setShowNotes((v) => !v)}
            className="lg-btn-glass inline-flex min-h-[40px] items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold cursor-pointer"
          >
            <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
            <span>{showNotes ? 'Izohni yashirish' : 'Ta’rif izohi'}</span>
          </button>

          <button
            type="button"
            onClick={() => setFullscreen((v) => !v)}
            className="lg-btn-glass inline-flex min-h-[40px] items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold cursor-pointer"
          >
            {fullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            <span>{fullscreen ? 'Yopish (Esc)' : 'To‘liq ekran'}</span>
          </button>
        </div>
      </div>

      {/* Main Slide Canvas */}
      {cur ? (
        <div className="lg-well overflow-hidden border border-slate-900/14 p-0 dark:border-white/16">
          {/* Progress Ribbon */}
          <div className="h-1.5 w-full bg-slate-900/10 dark:bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#dc2626] to-[#f97316] transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-12 lg:items-center">
            {/* Left Visual Column: Editorial Artwork + Technical Schematic */}
            <div className="space-y-4 lg:col-span-5">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-900/12 bg-slate-900/10 shadow-sm dark:border-white/15">
                {!imgError ? (
                  <img
                    src={media.src}
                    alt={media.alt}
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-500/20 via-indigo-500/20 to-sky-500/20 p-4 text-center">
                    <Sparkles className="h-8 w-8 text-[#dc2626] dark:text-[#ff8589]" />
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3.5 py-2.5 text-[11px] font-semibold text-white">
                  <span className="font-mono-jb uppercase tracking-wider">{media.badge}</span>
                  <span className="rounded-md bg-white/20 px-2 py-0.5 backdrop-blur-sm">
                    #{lesson.no}-dars
                  </span>
                </div>
              </div>

              {/* Dynamic Technical Conceptual Diagram */}
              <div className="rounded-2xl border border-slate-900/12 bg-white/80 p-3 text-slate-800 dark:border-white/14 dark:bg-black/35 dark:text-slate-100">
                <div className="mb-1.5 flex items-center justify-between px-1 font-mono-jb text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Layers className="h-3 w-3 text-[#dc2626] dark:text-[#ff8589]" />
                    Mavzu sxemasi
                  </span>
                  <span>{lesson.tools[0] || plan.label}</span>
                </div>
                <div className="h-[150px] w-full">
                  <SlideDiagramSvg theme={activeTheme} lesson={lesson} />
                </div>
              </div>
            </div>

            {/* Right Content Column: Explanations & Key Points */}
            <div className="space-y-4 lg:col-span-7">
              <div>
                {cur.subtitle ? (
                  <div className="font-mono-jb text-xs font-bold uppercase tracking-[0.14em] text-[#b91c1c] dark:text-[#ff8589]">
                    {cur.subtitle}
                  </div>
                ) : null}
                <h2 className="mt-1 text-xl font-bold leading-snug text-slate-950 dark:text-white sm:text-2xl">
                  {cur.title}
                </h2>
              </div>

              <ul className="space-y-2.5">
                {cur.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-slate-900/10 bg-white/75 px-3.5 py-2.5 text-sm leading-relaxed text-slate-800 dark:border-white/12 dark:bg-white/[0.05] dark:text-slate-100"
                  >
                    <span className="font-mono-jb mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#dc2626]/15 text-xs font-bold text-[#b91c1c] dark:text-[#ff8589]">
                      {i + 1}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {cur.highlight ? (
                <div className="rounded-xl border border-emerald-500/35 bg-emerald-500/12 px-4 py-3 text-xs leading-relaxed text-emerald-950 dark:text-emerald-100">
                  <strong className="font-bold">Amaliy tushuntirish: </strong>
                  {cur.highlight}
                </div>
              ) : null}

              {showNotes && cur.note ? (
                <div className="rounded-xl border border-sky-500/35 bg-sky-500/12 px-4 py-3 text-xs leading-relaxed text-sky-950 dark:text-sky-100">
                  <strong className="font-bold">Eslatma: </strong>
                  {cur.note}
                </div>
              ) : null}

              {/* Final slide quick CTA */}
              {slideIdx === slides.length - 1 ? (
                <div className="no-print flex flex-wrap gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setFullscreen(false);
                      onGoToGames();
                    }}
                    className="lg-btn-primary inline-flex min-h-[42px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-white cursor-pointer"
                  >
                    <Gamepad2 className="h-4 w-4" />
                    <span>Interaktiv o‘yinga o‘tish</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFullscreen(false);
                      onGoToQuiz();
                    }}
                    className="lg-btn-glass inline-flex min-h-[42px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
                  >
                    <ClipboardList className="h-4 w-4" />
                    <span>Testni yechish</span>
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {/* Slide Controls + Thumbnails Strip */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          disabled={slideIdx === 0}
          onClick={() => setSlideIdx((i) => Math.max(0, i - 1))}
          className="lg-btn-glass inline-flex min-h-[44px] items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold disabled:opacity-40 cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Oldingi slayd</span>
        </button>

        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {slides.map((s, idx) => (
            <button
              key={`${idx}-${s.title}`}
              type="button"
              onClick={() => setSlideIdx(idx)}
              title={s.title}
              aria-label={`${idx + 1}-slayd: ${s.title}`}
              className={`font-mono-jb min-h-[36px] min-w-[36px] rounded-xl px-2.5 text-xs font-bold transition cursor-pointer ${
                idx === slideIdx
                  ? 'lg-btn-primary text-white'
                  : 'lg-btn-glass text-slate-700 dark:text-slate-200'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <button
          type="button"
          disabled={slideIdx >= slides.length - 1}
          onClick={() => setSlideIdx((i) => Math.min(slides.length - 1, i + 1))}
          className="lg-btn-primary inline-flex min-h-[44px] items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold text-white disabled:opacity-40 cursor-pointer"
        >
          <span>Keyingi slayd</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
