import type { Locale } from "../types/i18n";

const industrialImage = "https://bartlett-review.ucl.ac.uk/using-ai-to-cut-industrial-carbon-emissions/assets/mA0EGiV2Aw/white-exterior-of-an-industrial-concrete-factory-complex-172860366_4368x2912-enhanced-4096x2731.jpg";
const concreteImage = "https://images.unsplash.com/photo-1558697524-5a2d1e8a93d1?auto=format&fit=crop&w=1400&q=80";
const textureImage = "https://images.unsplash.com/photo-1760558734083-9a59ff0383b3?auto=format&fit=crop&w=1200&q=80";

export interface HomeCopy {
  hero: { eyebrow: string; title: string; description: string; explore: string; quotation: string };
  intro: { eyebrow: string; title: string; description: string; capabilities: string[] };
  products: { eyebrow: string; title: string; description: string; items: Array<{ title: string; description: string; image: string }> };
  factories: { eyebrow: string; title: string; description: string; highlights: string[] };
  projects: { eyebrow: string; title: string; description: string; items: string[]; partners: string[] };
  quality: { eyebrow: string; title: string; description: string; certificates: string[] };
  news: { eyebrow: string; title: string; items: Array<{ title: string; date: string }> };
  cta: { title: string; description: string; button: string };
}

export const homeImages = { industrialImage, concreteImage, textureImage };

export const homeContent: Record<Locale, HomeCopy> = {
  en: {
    hero: { eyebrow: "Egyptian cement manufacturing", title: "Built on industrial precision.", description: "A professional foundation for ECI’s products, capabilities, and project expertise.", explore: "Explore our products", quotation: "Request a quotation" },
    intro: { eyebrow: "Company overview", title: "A clear view of ECI’s business.", description: "Company profile content and operational information will be introduced here.", capabilities: ["Capability placeholder", "Capability placeholder", "Capability placeholder"] },
    products: { eyebrow: "Products & services", title: "Solutions for every stage of construction.", description: "Product details will be published here once approved.", items: [{ title: "Product category placeholder", description: "Approved product information will appear here.", image: concreteImage }, { title: "Service category placeholder", description: "Approved service information will appear here.", image: textureImage }, { title: "Technical support placeholder", description: "Technical information will appear here.", image: industrialImage }] },
    factories: { eyebrow: "Industrial capabilities", title: "Facilities designed for dependable delivery.", description: "Factory locations, operations, and production information will be added when available.", highlights: ["Factory capability placeholder", "Operational capability placeholder", "Logistics capability placeholder"] },
    projects: { eyebrow: "Projects & partners", title: "Working alongside the built environment.", description: "Project case studies and partner information will be published here.", items: ["Project showcase placeholder", "Project showcase placeholder", "Project showcase placeholder"], partners: ["Partner logo", "Partner logo", "Partner logo", "Partner logo"] },
    quality: { eyebrow: "Quality", title: "A disciplined approach to quality.", description: "Quality processes and accredited certifications will be listed after verification.", certificates: ["Certification placeholder", "Certification placeholder", "Certification placeholder"] },
    news: { eyebrow: "News & updates", title: "Latest from ECI.", items: [{ title: "News item placeholder", date: "Publication date placeholder" }, { title: "News item placeholder", date: "Publication date placeholder" }, { title: "News item placeholder", date: "Publication date placeholder" }] },
    cta: { title: "Planning a project?", description: "Talk to our team about your product and quotation requirements.", button: "Request a quotation" },
  },
  ar: {
    hero: { eyebrow: "تصنيع الأسمنت في مصر", title: "نبني على الدقة الصناعية.", description: "أساس احترافي لعرض منتجات وقدرات وخبرات ECI في المشروعات.", explore: "استكشف منتجاتنا", quotation: "اطلب عرض أسعار" },
    intro: { eyebrow: "نبذة عن الشركة", title: "صورة واضحة لأعمال ECI.", description: "ستُعرض هنا معلومات الشركة والبيانات التشغيلية.", capabilities: ["عنصر نائب لقدرة الشركة", "عنصر نائب لقدرة الشركة", "عنصر نائب لقدرة الشركة"] },
    products: { eyebrow: "المنتجات والخدمات", title: "حلول لكل مرحلة من مراحل البناء.", description: "ستُنشر تفاصيل المنتجات هنا بعد اعتمادها.", items: [{ title: "عنصر نائب لفئة منتج", description: "ستظهر معلومات المنتج المعتمدة هنا.", image: concreteImage }, { title: "عنصر نائب لفئة خدمة", description: "ستظهر معلومات الخدمة المعتمدة هنا.", image: textureImage }, { title: "عنصر نائب للدعم الفني", description: "ستظهر المعلومات الفنية هنا.", image: industrialImage }] },
    factories: { eyebrow: "القدرات الصناعية", title: "مرافق مصممة لتقديم موثوق.", description: "ستُضاف مواقع المصانع والعمليات ومعلومات الإنتاج عند توفرها.", highlights: ["عنصر نائب لقدرة المصنع", "عنصر نائب لقدرة تشغيلية", "عنصر نائب لقدرة لوجستية"] },
    projects: { eyebrow: "المشروعات والشركاء", title: "نعمل إلى جانب بيئة البناء.", description: "ستُنشر دراسات حالة المشروعات ومعلومات الشركاء هنا.", items: ["عنصر نائب لعرض مشروع", "عنصر نائب لعرض مشروع", "عنصر نائب لعرض مشروع"], partners: ["شعار شريك", "شعار شريك", "شعار شريك", "شعار شريك"] },
    quality: { eyebrow: "الجودة", title: "نهج منضبط للجودة.", description: "ستُدرج عمليات الجودة والشهادات المعتمدة بعد التحقق.", certificates: ["عنصر نائب لشهادة", "عنصر نائب لشهادة", "عنصر نائب لشهادة"] },
    news: { eyebrow: "الأخبار والتحديثات", title: "أحدث أخبار ECI.", items: [{ title: "عنصر نائب لخبر", date: "عنصر نائب لتاريخ النشر" }, { title: "عنصر نائب لخبر", date: "عنصر نائب لتاريخ النشر" }, { title: "عنصر نائب لخبر", date: "عنصر نائب لتاريخ النشر" }] },
    cta: { title: "هل تخطط لمشروع؟", description: "تواصل مع فريقنا لمناقشة متطلبات المنتجات وعروض الأسعار.", button: "اطلب عرض أسعار" },
  },
};
