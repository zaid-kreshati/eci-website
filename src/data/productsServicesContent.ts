import { homeImages } from "./homeContent";
import type { Locale } from "../types/i18n";

export interface ProductsServicesContent {
  hero: { eyebrow: string; title: string; description: string; primary: string; secondary: string };
  assurances: { title: string; description: string }[];
  services: { eyebrow: string; title: string; description: string; items: { title: string; description: string; tag: string }[] };
  catalogue: { eyebrow: string; title: string; description: string; filters: string[]; items: { title: string; category: string; description: string; image: string; alt: string }[] };
  logistics: { eyebrow: string; title: string; description: string; items: { title: string; description: string }[] };
  quote: { eyebrow: string; title: string; description: string; fields: { label: string; placeholder: string }[]; submit: string };
  cta: { title: string; description: string; primary: string; secondary: string };
}

const products = [
  { image: homeImages.bulkSilo, alt: "Cement bulk silo", title: "High-performance cement", category: "Product information pending verification", description: "Technical grades, packaging options and approved application guidance will be confirmed before publication." },
  { image: homeImages.coastalPlant, alt: "Coastal cement facility", title: "Specialty cement solutions", category: "Product information pending verification", description: "Technical grades, packaging options and approved application guidance will be confirmed before publication." },
  { image: homeImages.bagged, alt: "Bagged cement on pallets", title: "Bagged cement", category: "Product information pending verification", description: "Technical grades, packaging options and approved application guidance will be confirmed before publication." },
  { image: homeImages.constructionSite, alt: "Construction site", title: "Lower-impact solutions", category: "Product information pending verification", description: "Technical grades, packaging options and approved application guidance will be confirmed before publication." },
];

export const productsServicesContent: Record<Locale, ProductsServicesContent> = {
  en: {
    hero: { eyebrow: "Products & services", title: "Cement solutions and coordinated services for every project stage", description: "Explore our product portfolio and the operational support available to help plan supply with confidence.", primary: "Explore products", secondary: "Request a quotation" },
    assurances: [{ title: "Technical support", description: "Product guidance aligned with project requirements." }, { title: "Coordinated supply", description: "A clear process for planning and delivery." }, { title: "Responsible service", description: "A considered approach across each engagement." }, { title: "Quality focus", description: "Documentation and review remain central to our work." }],
    services: { eyebrow: "Integrated support", title: "Services designed around project needs", description: "Our teams coordinate technical, logistics and commercial support to help customers move from planning to delivery.", items: [{ title: "Project supply planning", description: "Work with our team to outline requirements, timing and suitable supply arrangements.", tag: "Project support" }, { title: "Logistics coordination", description: "Coordinate bulk and bagged delivery requirements through a single point of contact.", tag: "Supply coordination" }, { title: "Technical consultation", description: "Discuss product selection and documentation with the appropriate technical team.", tag: "Technical support" }] },
    catalogue: { eyebrow: "Product catalogue", title: "Cement products for construction applications", description: "Product details are being reviewed and will be published once technically approved.", filters: ["All products", "Bulk supply", "Bagged supply", "Specialty solutions"], items: products },
    logistics: { eyebrow: "Logistics & field support", title: "Practical support from enquiry to delivery", description: "We help establish a clear supply plan before your project starts.", items: [{ title: "Supply coordination", description: "Plan delivery needs and preferred supply arrangements with our commercial team." }, { title: "Site requirements", description: "Share access, scheduling and handling considerations early in the process." }, { title: "Technical documents", description: "Request approved documentation for the products relevant to your project." }] },
    quote: { eyebrow: "Corporate procurement", title: "Request pricing and supply information", description: "Send an enquiry and our team will respond through the appropriate channel.", fields: [{ label: "Company name", placeholder: "Your company" }, { label: "Contact name", placeholder: "Your name" }, { label: "Work email", placeholder: "name@company.com" }, { label: "Project requirements", placeholder: "Tell us about your anticipated requirements" }], submit: "Send enquiry" },
    cta: { title: "Ready to plan your cement supply?", description: "Talk to ECI Cement about your project requirements.", primary: "Request a quotation", secondary: "Contact us" },
  },
  ar: {
    hero: { eyebrow: "المنتجات والخدمات", title: "حلول أسمنتية وخدمات متكاملة لكل مرحلة من مراحل المشروع", description: "استكشف محفظة منتجاتنا والدعم التشغيلي المتاح للمساعدة في التخطيط للتوريد بثقة.", primary: "استكشف المنتجات", secondary: "اطلب عرض أسعار" },
    assurances: [{ title: "دعم فني", description: "إرشادات للمنتجات تتوافق مع متطلبات المشروع." }, { title: "توريد منسق", description: "عملية واضحة للتخطيط والتسليم." }, { title: "خدمة مسؤولة", description: "منهج مدروس في كل تعامل." }, { title: "تركيز على الجودة", description: "يبقى التوثيق والمراجعة في صميم عملنا." }],
    services: { eyebrow: "دعم متكامل", title: "خدمات مصممة حول احتياجات المشروع", description: "تنسق فرقنا الدعم الفني واللوجستي والتجاري لمساعدة العملاء من التخطيط إلى التوريد.", items: [{ title: "تخطيط توريد المشروع", description: "اعمل مع فريقنا لتحديد المتطلبات والتوقيت وترتيبات التوريد المناسبة.", tag: "دعم المشروعات" }, { title: "تنسيق اللوجستيات", description: "نسق متطلبات التوريد السائب والمعبأ من خلال نقطة اتصال واحدة.", tag: "تنسيق التوريد" }, { title: "استشارات فنية", description: "ناقش اختيار المنتجات والتوثيق مع الفريق الفني المختص.", tag: "دعم فني" }] },
    catalogue: { eyebrow: "دليل المنتجات", title: "منتجات أسمنتية لتطبيقات التشييد", description: "تخضع تفاصيل المنتجات للمراجعة وستُنشر بعد اعتمادها فنيًا.", filters: ["كل المنتجات", "توريد سائب", "توريد معبأ", "حلول متخصصة"], items: products.map((item, index) => ({ ...item, title: ["أسمنت عالي الأداء", "حلول أسمنتية متخصصة", "أسمنت معبأ", "حلول منخفضة الأثر"][index], category: "بيانات المنتج قيد التحقق", description: "تجري مراجعة الدرجات الفنية وخيارات التعبئة وإرشادات الاستخدام المعتمدة قبل النشر." })) },
    logistics: { eyebrow: "اللوجستيات والدعم الميداني", title: "دعم عملي من الاستفسار إلى التوريد", description: "نساعدك على وضع خطة توريد واضحة قبل بدء مشروعك.", items: [{ title: "تنسيق التوريد", description: "خطط احتياجات التسليم وترتيبات التوريد المفضلة مع فريقنا التجاري." }, { title: "متطلبات الموقع", description: "شارك اعتبارات الوصول والجدولة والمناولة في مرحلة مبكرة." }, { title: "المستندات الفنية", description: "اطلب المستندات المعتمدة للمنتجات المرتبطة بمشروعك." }] },
    quote: { eyebrow: "مشتريات الشركات", title: "اطلب معلومات الأسعار والتوريد", description: "أرسل استفسارك وسيتواصل معك فريقنا عبر القناة المناسبة.", fields: [{ label: "اسم الشركة", placeholder: "اسم شركتك" }, { label: "اسم جهة الاتصال", placeholder: "اسمك" }, { label: "البريد الإلكتروني للعمل", placeholder: "name@company.com" }, { label: "متطلبات المشروع", placeholder: "أخبرنا عن احتياجاتك المتوقعة" }], submit: "إرسال الاستفسار" },
    cta: { title: "هل أنت مستعد لتخطيط توريد الأسمنت لمشروعك؟", description: "تحدث مع ECI للأسمنت حول متطلبات مشروعك.", primary: "اطلب عرض أسعار", secondary: "تواصل معنا" },
  },
};
