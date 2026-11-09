import { homeImages } from "./homeContent";
import type { Locale } from "../types/i18n";

export interface AboutContent {
  eyebrow: string;
  title: string;
  description: string;
  historyTitle: string;
  performanceTitle: string;
  history: { title: string; description: string }[];
  vision: { title: string; description: string };
  mission: { title: string; description: string };
  principles: { title: string; description: string }[];
  performance: { value: string; label: string }[];
  operations: { eyebrow: string; title: string; description: string; highlights: string[]; image: string; imageAlt: string };
  strategy: { title: string; description: string; items: { title: string; description: string }[] };
  standards: { title: string; description: string; items: string[] };
  cta: { title: string; description: string; primary: string; secondary: string };
}

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    eyebrow: "About ECI Cement",
    title: "Built around industrial discipline and enduring partnerships",
    description: "ECI Cement brings together manufacturing, technical expertise and responsible operations to support construction across Egypt.",
    historyTitle: "Milestones that shape our approach",
    performanceTitle: "Our operating principles",
    history: [
      { title: "A considered foundation", description: "Our story is rooted in the practical needs of the construction sector and a commitment to dependable supply." },
      { title: "Manufacturing capability", description: "Operations are shaped around process control, careful planning and continuous improvement." },
      { title: "A connected operation", description: "Production, quality and logistics work together to serve projects with clarity and consistency." },
      { title: "Looking ahead", description: "We continue to develop our approach with a focus on efficiency, responsibility and long-term value." },
    ],
    vision: { title: "Our vision", description: "To be a trusted industrial partner for the built environment, known for disciplined execution and dependable products." },
    mission: { title: "Our mission", description: "To deliver cement solutions through careful manufacturing, responsive service and a culture of accountability." },
    principles: [
      { title: "Quality by design", description: "A methodical approach guides each stage of our work." },
      { title: "Responsible operations", description: "Efficiency and environmental awareness inform our decisions." },
      { title: "People and safety", description: "A respectful, safety-first culture supports every team." },
      { title: "Partnership", description: "We work closely with customers and stakeholders." },
    ],
    performance: [
      { value: "—", label: "Manufacturing focus" },
      { value: "—", label: "Integrated operations" },
      { value: "—", label: "Quality-led culture" },
      { value: "—", label: "Responsible growth" },
    ],
    operations: { eyebrow: "Operational excellence", title: "A disciplined approach to manufacturing", description: "Our operating model connects production planning, laboratory practices and customer support. Each function is designed to contribute to a consistent and transparent experience.", highlights: ["Process-oriented manufacturing", "Technical support for customers"], image: homeImages.lab, imageAlt: "Industrial quality laboratory" },
    strategy: { title: "A clear path forward", description: "Our priorities keep the organisation focused on the areas that create lasting value for customers, teams and communities.", items: [
      { title: "Operational reliability", description: "Improving the systems and routines that support dependable delivery." },
      { title: "Efficient resource use", description: "Making thoughtful choices across operations and supply chains." },
      { title: "Customer understanding", description: "Keeping technical needs and project realities close to decision-making." },
      { title: "Capability building", description: "Developing people, expertise and ways of working for the future." },
    ] },
    standards: { title: "Standards and governance", description: "Our approach to quality, safety and environmental responsibility is supported by documented processes and ongoing review.", items: ["Quality management", "Environmental responsibility", "Health and safety", "Technical documentation"] },
    cta: { title: "Planning a project that needs a dependable cement partner?", description: "Speak with our team about product availability and supply requirements.", primary: "Request a quotation", secondary: "Contact ECI Cement" },
  },
  ar: {
    eyebrow: "عن ECI للأسمنت",
    title: "نرتكز على الانضباط الصناعي والشراكات المستدامة",
    description: "تجمع ECI للأسمنت بين التصنيع والخبرة الفنية والتشغيل المسؤول لدعم قطاع التشييد في مصر.",
    historyTitle: "محطات تصنع مسيرتنا",
    performanceTitle: "مؤشرات الأداء المؤسسية",
    history: [
      { title: "أساس مدروس", description: "تنطلق قصتنا من احتياجات قطاع التشييد العمليّة والالتزام بتوريد يمكن الاعتماد عليه." },
      { title: "قدرات تصنيعية", description: "تتشكّل عملياتنا حول ضبط العمليات والتخطيط الدقيق والتحسين المستمر." },
      { title: "عملية مترابطة", description: "تعمل الإنتاج والجودة واللوجستيات معًا لخدمة المشروعات بوضوح واتساق." },
      { title: "نحو المستقبل", description: "نواصل تطوير منهجنا مع التركيز على الكفاءة والمسؤولية والقيمة طويلة الأجل." },
    ],
    vision: { title: "رؤيتنا", description: "أن نكون شريكًا صناعيًا موثوقًا للبيئة العمرانية، معروفًا بالتنفيذ المنضبط والمنتجات الجديرة بالثقة." },
    mission: { title: "رسالتنا", description: "تقديم حلول أسمنتية من خلال تصنيع دقيق وخدمة متجاوبة وثقافة قائمة على المسؤولية." },
    principles: [
      { title: "الجودة في التصميم", description: "منهجية دقيقة توجه كل مرحلة من مراحل عملنا." },
      { title: "تشغيل مسؤول", description: "الكفاءة والوعي البيئي يوجهان قراراتنا." },
      { title: "الإنسان والسلامة", description: "ثقافة قائمة على الاحترام والسلامة أولًا تدعم كل فريق." },
      { title: "الشراكة", description: "نعمل عن قرب مع العملاء وأصحاب المصلحة." },
    ],
    performance: [
      { value: "—", label: "تركيز تصنيعي" },
      { value: "—", label: "عمليات متكاملة" },
      { value: "—", label: "ثقافة تقودها الجودة" },
      { value: "—", label: "نمو مسؤول" },
    ],
    operations: { eyebrow: "التميز التشغيلي", title: "منهج منضبط في التصنيع", description: "يربط نموذجنا التشغيلي بين تخطيط الإنتاج والممارسات المعملية ودعم العملاء. وقد صُممت كل وظيفة للمساهمة في تجربة متسقة وشفافة.", highlights: ["تصنيع قائم على العمليات", "دعم فني للعملاء"], image: homeImages.lab, imageAlt: "مختبر جودة صناعي" },
    strategy: { title: "مسار واضح إلى الأمام", description: "تحافظ أولوياتنا على تركيز المؤسسة على المجالات التي تخلق قيمة مستدامة للعملاء والفرق والمجتمعات.", items: [
      { title: "موثوقية التشغيل", description: "تطوير الأنظمة والممارسات التي تدعم التوريد الجدير بالثقة." },
      { title: "كفاءة استخدام الموارد", description: "اتخاذ خيارات مدروسة في العمليات وسلاسل التوريد." },
      { title: "فهم احتياجات العملاء", description: "إبقاء الاحتياجات الفنية وواقع المشروعات قريبين من عملية اتخاذ القرار." },
      { title: "بناء القدرات", description: "تطوير الأفراد والخبرات وأساليب العمل للمستقبل." },
    ] },
    standards: { title: "المعايير والحوكمة", description: "يعتمد نهجنا في الجودة والسلامة والمسؤولية البيئية على عمليات موثقة ومراجعة مستمرة.", items: ["إدارة الجودة", "المسؤولية البيئية", "الصحة والسلامة", "التوثيق الفني"] },
    cta: { title: "هل تخطط لمشروع يحتاج إلى شريك أسمنت موثوق؟", description: "تواصل مع فريقنا لمناقشة توافر المنتجات ومتطلبات التوريد.", primary: "اطلب عرض أسعار", secondary: "تواصل مع ECI للأسمنت" },
  },
};
