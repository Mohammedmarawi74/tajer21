
import { SlideData, Theme } from './types';

export const DEFAULT_COLOR = '#2563EB';

// Al-Tajer Digital Modern Color Themes
export const THEMES: Theme[] = [
  {
    name: "أزرق التاجر الكهربائي",
    gradient: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
    textColor: "text-slate-900",
    accentColor: "#2563EB",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-600"
  },
  {
    name: "أبيض نقي مع لمسة زرقاء",
    gradient: "linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)",
    textColor: "text-slate-900",
    accentColor: "#2563EB",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-600"
  },
  {
    name: "ليلي احترافي",
    gradient: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
    textColor: "text-white",
    accentColor: "#3B82F6",
    badgeBg: "bg-blue-500/20",
    badgeText: "text-blue-300"
  },
  {
    name: "أرجواني عصري",
    gradient: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
    textColor: "text-slate-900",
    accentColor: "#7C3AED",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-600"
  },
  {
    name: "أخضر نعناعي",
    gradient: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
    textColor: "text-slate-900",
    accentColor: "#10B981",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-600"
  }
];

export const LOGOS = [
  '/logooo/logo-1.png',
  '/logooo/logo-2.png',
  '/logooo/logo-3.png',
  '/logooo/logo-4.png'
];

// Al-Tajer Digital Platform - Modern Carousel Slides (7 slides)
export const INITIAL_SLIDES: SlideData[] = [
  {
    id: '1',
    type: 'hero',
    title: 'انطلق بمشروعك الرقمي نحو النجاح',
    subtitle: 'منصة التاجر الرقمية تمنحك كل الأدوات اللازمة لتحويل فكرتك إلى مشروع تجاري ناجح بخطوات ذكية ومدروسة',
    accentColor: DEFAULT_COLOR,
    footer: 'ابدأ رحلتك المجانية الآن'
  },
  {
    id: '2',
    type: 'grid',
    title: 'لماذا تختار منصة التاجر؟',
    subtitle: 'نقدم لك منظومة متكاملة من الخدمات المصممة خصيصاً لرواد الأعمال والمستثمرين',
    content: [
      'حلول تقنية متطورة',
      'دعم استشاري متخصص',
      'أدوات تحليل ذكية',
      'شراكات استراتيجية'
    ],
    accentColor: DEFAULT_COLOR
  },
  {
    id: '3',
    type: 'steps',
    title: 'رحلة النجاح في ٣ خطوات',
    subtitle: 'طريقك نحو النجاح التجاري لم يكن أبداً بهذه السهولة',
    content: [
      'سجّل حسابك المجاني وابدأ الرحلة',
      'اختر الخدمات المناسبة لمشروعك',
      'تابع نموّك مع أدوات التحليل المتقدمة'
    ],
    accentColor: DEFAULT_COLOR
  },
  {
    id: '4',
    type: 'stat',
    title: 'أرقام تعكس ثقة العملاء',
    subtitle: 'نفخر بخدمة آلاف الرواد وبناء شراكات ناجحة',
    content: [
      '+٥٠٠٠ عميل سعيد',
      '+٩٨٪ نسبة الرضا',
      '+٢٤/٧ دعم متواصل'
    ],
    accentColor: DEFAULT_COLOR
  },
  {
    id: '5',
    type: 'feature',
    title: 'حلول ذكية مدعومة بالذكاء الاصطناعي',
    subtitle: 'استفد من أحدث التقنيات لتحليل السوق واتخاذ القرارات الصحيحة في الوقت المناسب',
    accentColor: DEFAULT_COLOR,
    footer: 'اكتشف المزيد من الميزات'
  },
  {
    id: '6',
    type: 'comparison',
    title: 'قارن واختر الأنسب لك',
    subtitle: 'باقات مرنة تناسب جميع مراحل نمو مشروعك',
    content: [
      'باقة البداية: أساسيات قوية',
      'باقة النمو: أدوات متقدمة',
      'باقة الشركات: حلول مخصصة'
    ],
    accentColor: DEFAULT_COLOR
  },
  {
    id: '7',
    type: 'cta',
    title: 'مستعد لبدء رحلتك؟',
    subtitle: 'انضم اليوم إلى آلاف الناجحين على منصة التاجر الرقمية',
    accentColor: DEFAULT_COLOR,
    footer: 'سجّل الآن واحصل على استشارة مجانية'
  }
];
