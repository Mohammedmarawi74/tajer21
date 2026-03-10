

import { SlideData } from "../types";

export async function generateCarouselContent(topic: string): Promise<Partial<SlideData>[]> {
  // Simulate a slight delay to make it feel like it's "thinking"
  await new Promise(resolve => setTimeout(resolve, 800));

  return [
    {
      type: "hero",
      title: `دليلك الشامل حول: ${topic}`,
      subtitle: "اكتشف أهم الأسرار والنصائح للنجاح في هذا المجال مع حلولنا المبتكرة.",
      footer: "مرر لمعرفة المزيد 👇"
    },
    {
      type: "feature",
      title: "لماذا هذا الموضوع مهم اليوم؟",
      subtitle: `يعتبر ${topic} من أهم المحاور في السوق الحالي، وفهمه بعمق يمنحك ميزة تنافسية كبيرة.`,
    },
    {
      type: "grid",
      title: "الركائز الأساسية للتميز",
      subtitle: "إليك الخطوات الثلاث التي ستنقل عملك إلى المستوى التالي:",
      content: [
        "التخطيط الاستراتيجي المبني على البيانات",
        "الأتمتة الذكية للعمليات المتكررة",
        "التركيز على تجربة المستخدم النهائية"
      ]
    },
    {
      type: "stat",
      title: "شاركنا هذه الرحلة",
      subtitle: "انضم إلى مئات المحترفين الذين حققوا نتائج ملموسة باستخدام هذه المنهجية.",
      content: ["+250 عميل سعيد", "3.5x تحسن في الأداء"]
    },
    {
      type: "cta",
      title: "ابدأ رحلة النجاح الآن",
      subtitle: `فريقنا مستعد لمساعدتك في تطبيق ${topic} بأعلى معايير الجودة والاحترافية.`,
      footer: "تواصل معنا للحصول على استشارة"
    }
  ];
}

