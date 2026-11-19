import { homeImages } from "./homeContent";
import type { Locale } from "../types/i18n";

export type NewsCategory = "press" | "projects" | "sustainability" | "operations" | "products";

export interface NewsFact {
  label: string;
  value: string;
}

export interface NewsGalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface NewsArticle {
  slug: string;
  date: string;
  dateTime: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  facts: NewsFact[];
  body: string[];
  specs: NewsFact[];
  gallery: NewsGalleryItem[];
}

export interface NewsContent {
  hero: { eyebrow: string; title: string; description: string };
  statNotes: { stories: string; topics: string; documents: string; languages: string };
  statLabels: { stories: string; topics: string; documents: string; languages: string };
  searchPlaceholder: string;
  searchLabel: string;
  filters: { id: "all" | NewsCategory; label: string }[];
  featuredKicker: string;
  readStory: string;
  requestDocument: string;
  relatedTitle: string;
  archive: { eyebrow: string; title: string; description: string };
  empty: string;
  previous: string;
  next: string;
  pageLabel: string;
  continueArchive: string;
  continueMedia: string;
  media: {
    eyebrow: string;
    title: string;
    description: string;
    policyTitle: string;
    policyItems: { title: string; description: string }[];
    assetsTitle: string;
    assetsNote: string;
    assets: { title: string; description: string }[];
    requestAssets: string;
    newsletterTitle: string;
    newsletterDescription: string;
    nameLabel: string;
    emailLabel: string;
    subscribe: string;
    newsletterPending: string;
    contactsTitle: string;
    contacts: { title: string; description: string }[];
    faqTitle: string;
    faqs: { question: string; answer: string }[];
  };
  article: {
    back: string;
    factsTitle: string;
    bodyTitle: string;
    specsTitle: string;
    galleryTitle: string;
    moreTitle: string;
    notFoundTitle: string;
    notFoundDescription: string;
  };
  articles: NewsArticle[];
}

const images = homeImages;

const enArticles: NewsArticle[] = [
  {
    slug: "ain-sokhna-solar",
    date: "May 2025",
    dateTime: "2025-05",
    category: "sustainability",
    title: "ECI starts operating a 15 MW solar plant at Ain Sokhna",
    excerpt:
      "The plant covers 22% of the electricity demand of the first industrial complex and reduces annual emissions by more than 42,000 tonnes of CO2 equivalent.",
    image: images.coastalPlant,
    imageAlt: "Coastal cement plant and storage domes",
    facts: [
      { label: "Capacity", value: "15 MW" },
      { label: "Site", value: "Ain Sokhna" },
      { label: "Complex demand", value: "22%" },
      { label: "Annual CO2e", value: "42,000 t" },
    ],
    body: [
      "The group homepage records the start-up of a 15 MW solar plant at Ain Sokhna. The same note states that the plant covers 22% of the electricity used by the first industrial complex.",
      "The published emissions figure is a reduction of more than 42,000 tonnes of CO2 equivalent a year. Supporting calculations and the commissioning record are issued on request.",
      "Further environmental context, including how performance is reviewed, is set out on the quality page. Certificate numbers are published there only after they are confirmed.",
    ],
    specs: [
      { label: "Update", value: "Solar generation" },
      { label: "Capacity stated", value: "15 MW" },
      { label: "Electricity share", value: "22% of the first complex" },
      { label: "Emissions figure", value: "More than 42,000 t CO2e a year" },
    ],
    gallery: [
      { src: images.coastalPlant, alt: "Plant beside the coast", caption: "Ain Sokhna industrial complex" },
      { src: images.desertFactory, alt: "Desert cement works", caption: "Process areas served by site power" },
      { src: images.quarry, alt: "Limestone quarry", caption: "Raw-material operations" },
    ],
  },
  {
    slug: "pozzolanic-grade",
    date: "April 2025",
    dateTime: "2025-04",
    category: "products",
    title: "High-performance pozzolanic cement noted for green-building use",
    excerpt:
      "An engineered mix with strong resistance to salts and groundwater, intended for foundations on the North Coast and in the New Delta.",
    image: images.bagged,
    imageAlt: "Bagged cement prepared for dispatch",
    facts: [
      { label: "Grade", value: "Pozzolanic" },
      { label: "Exposure", value: "Salts and groundwater" },
      { label: "Regions", value: "North Coast, New Delta" },
      { label: "Recognition", value: "Green building" },
    ],
    body: [
      "The group homepage describes a high-performance pozzolanic grade intended for foundations exposed to salts and groundwater, with the North Coast and the New Delta named as the principal uses.",
      "The same update says the grade has received the national green-building certificate. The certificate edition and issuing reference are supplied with the technical file rather than repeated here.",
      "Packaging, related grades and how to request a quotation are listed on the products and services page.",
    ],
    specs: [
      { label: "Product", value: "High-performance pozzolanic cement" },
      { label: "Stated performance", value: "Resistance to salts and groundwater" },
      { label: "Named uses", value: "North Coast and New Delta foundations" },
      { label: "Documentation", value: "Technical file on request" },
    ],
    gallery: [
      { src: images.bagged, alt: "Bagged product", caption: "Bagged dispatch" },
      { src: images.bulkSilo, alt: "Bulk silo loading", caption: "Bulk loading" },
      { src: images.constructionSite, alt: "Construction site", caption: "Site use" },
    ],
  },
  {
    slug: "fleet-telemetry",
    date: "March 2025",
    dateTime: "2025-03",
    category: "operations",
    title: "Haulage fleet updated with telemetry and automated weighing",
    excerpt:
      "A central platform tracks mobile silo loads and connects with the contractor ERP so deliveries reach critical pours on time.",
    image: images.portTerminal,
    imageAlt: "Port terminal used for cement dispatch",
    facts: [
      { label: "Tracking", value: "Telemetry" },
      { label: "Weighing", value: "Automated" },
      { label: "Loads", value: "Mobile silos" },
      { label: "Link", value: "Contractor ERP" },
    ],
    body: [
      "The logistics update on the homepage describes a central platform that tracks mobile silo loads in real time and connects them with the contractor’s ERP.",
      "The stated purpose is timing: shipments for critical pours can be followed from dispatch through to arrival. Weighing on the fleet is described as fully automated.",
      "Plant dispatch and the wider logistics offer are summarised on the products and services page. Live vehicle positions are not published on this website.",
    ],
    specs: [
      { label: "System", value: "Telemetry and automated weighing" },
      { label: "Scope", value: "Mobile silo loads" },
      { label: "Integration", value: "Contractor ERP" },
      { label: "Purpose", value: "Timing of critical pours" },
    ],
    gallery: [
      { src: images.portTerminal, alt: "Dispatch terminal", caption: "Dispatch terminal" },
      { src: images.bulkSilo, alt: "Silo truck loading", caption: "Bulk loading point" },
      { src: images.bridge, alt: "Infrastructure works", caption: "Delivery environment" },
    ],
  },
  {
    slug: "batch-release",
    date: "February 2025",
    dateTime: "2025-02",
    category: "products",
    title: "How a production batch is sampled and released",
    excerpt:
      "Samples are taken from the quarry, the kiln and the finished product, then recorded against the batch before dispatch.",
    image: images.lab,
    imageAlt: "Laboratory bench used for cement testing",
    facts: [
      { label: "Sample points", value: "Quarry, kiln, product" },
      { label: "Record", value: "Against the batch" },
      { label: "Standard", value: "EN 197-1" },
      { label: "Reports", value: "On request" },
    ],
    body: [
      "Quality is managed as a process. Samples are drawn from the quarry, the kiln and the finished product, tested in the laboratory and recorded against the batch before dispatch.",
      "The reference standard used for cement specification and testing is EN 197-1. Routine checks during kiln operation are described on the quality page as a 60-minute interval.",
      "Certificate numbers and laboratory scope are published once they have been checked against the current documents. Test reports are available through the contact page.",
    ],
    specs: [
      { label: "Sampling", value: "Quarry, kiln and finished cement" },
      { label: "Release", value: "Recorded against the batch" },
      { label: "Product standard", value: "EN 197-1" },
      { label: "Testing interval", value: "60 minutes during kiln operation" },
    ],
    gallery: [
      { src: images.lab, alt: "Quality laboratory", caption: "Laboratory testing" },
      { src: images.quarry, alt: "Quarry face", caption: "Raw-material sampling" },
      { src: images.hero, alt: "Cement plant", caption: "Production line" },
    ],
  },
  {
    slug: "manufacturing-sites",
    date: "January 2025",
    dateTime: "2025-01",
    category: "operations",
    title: "Three manufacturing locations already described by the group",
    excerpt:
      "The homepage names an integrated complex at Ain Sokhna, a plant at Beni Suef and a sea terminal at Dekheila.",
    image: images.quarry,
    imageAlt: "Quarry feeding a cement works",
    facts: [
      { label: "Ain Sokhna", value: "Integrated complex" },
      { label: "Beni Suef", value: "Plant" },
      { label: "Dekheila", value: "Sea terminal" },
      { label: "Detail", value: "Factories page" },
    ],
    body: [
      "The factories introduced on the homepage are the integrated complex at Ain Sokhna, the Beni Suef plant and the sea terminal at Dekheila.",
      "Each location is presented there with its own description. This note does not add capacities, contractor names or addresses beyond what those pages already carry.",
      "Visits, shipping questions and product availability are handled through the contact page.",
    ],
    specs: [
      { label: "Ain Sokhna", value: "Integrated complex" },
      { label: "Beni Suef", value: "Manufacturing plant" },
      { label: "Dekheila", value: "Sea terminal" },
      { label: "Further reading", value: "Factories page" },
    ],
    gallery: [
      { src: images.quarry, alt: "Quarry", caption: "Raw materials" },
      { src: images.desertFactory, alt: "Desert plant", caption: "Works" },
      { src: images.portTerminal, alt: "Port terminal", caption: "Sea terminal" },
    ],
  },
  {
    slug: "project-supply",
    date: "December 2024",
    dateTime: "2024-12",
    category: "projects",
    title: "Cement supply planned around the project",
    excerpt:
      "Requirements, delivery sequencing and follow-up are agreed before material is committed to a pour.",
    image: images.towers,
    imageAlt: "High-rise construction",
    facts: [
      { label: "First step", value: "Define requirements" },
      { label: "Second", value: "Coordinate supply" },
      { label: "Third", value: "Follow up" },
      { label: "Named works", value: "Confirmed first" },
    ],
    body: [
      "Project supply starts from the requirement: grade, volume, access and the pour programme. Those points are agreed before a delivery plan is issued.",
      "Coordination then sits between the plant, dispatch and the site team so the sequence stays visible. Follow-up is part of the same routine, not a separate report.",
      "Named projects and the parties involved are published only after they have been confirmed. The projects page explains that approach.",
    ],
    specs: [
      { label: "Planning", value: "Grade, volume, access, programme" },
      { label: "Coordination", value: "Plant, dispatch and site" },
      { label: "Publication", value: "After confirmation" },
      { label: "Enquiries", value: "Contact page" },
    ],
    gallery: [
      { src: images.towers, alt: "Towers under construction", caption: "Urban construction" },
      { src: images.bridge, alt: "Bridge works", caption: "Infrastructure" },
      { src: images.monorail, alt: "Elevated transport structure", caption: "Transport structures" },
    ],
  },
  {
    slug: "grades-on-enquiry",
    date: "November 2024",
    dateTime: "2024-11",
    category: "press",
    title: "Grades and packaging available for enquiry",
    excerpt:
      "The products page lists the grades currently offered, with specifications and pack options beside each one.",
    image: images.bulkSilo,
    imageAlt: "Bulk cement silo",
    facts: [
      { label: "Where listed", value: "Products page" },
      { label: "Pack", value: "Bags and bulk" },
      { label: "Specs", value: "Shown per grade" },
      { label: "Quote", value: "On request" },
    ],
    body: [
      "Current grades, the specification lines beside them and the packaging options are maintained on the products and services page.",
      "A quotation request can be started from that page or from the contact page. The newsroom does not publish prices.",
      "If a project needs a document that is not on the site, the technical team issues it against the enquiry.",
    ],
    specs: [
      { label: "Catalogue", value: "Products and services page" },
      { label: "Packaging", value: "Bags and bulk" },
      { label: "Pricing", value: "Not published here" },
      { label: "Documents", value: "Issued against an enquiry" },
    ],
    gallery: [
      { src: images.bulkSilo, alt: "Bulk silo", caption: "Bulk supply" },
      { src: images.bagged, alt: "Bagged cement", caption: "Bagged supply" },
      { src: images.constructionSite, alt: "Site works", caption: "Project use" },
    ],
  },
  {
    slug: "environmental-practice",
    date: "October 2024",
    dateTime: "2024-10",
    category: "sustainability",
    title: "Environmental performance is reviewed as part of operations",
    excerpt:
      "The quality page describes environmental management as a system that is measured, reviewed and improved. Certificate details follow once verified.",
    image: images.desertFactory,
    imageAlt: "Cement works in an arid setting",
    facts: [
      { label: "System", value: "Environmental management" },
      { label: "Review", value: "Ongoing" },
      { label: "Certificates", value: "When verified" },
      { label: "Source", value: "Quality page" },
    ],
    body: [
      "Environmental management on the quality page is described as the way performance is measured, reviewed and improved across operations.",
      "The homepage also records a carbon figure of minus 25%, attributed to heat recovery and cleaner power, and a solar plant at Ain Sokhna. Those statements are not recalculated on this page.",
      "Issuing bodies, certificate numbers and validity dates are added when the current documents have been checked.",
    ],
    specs: [
      { label: "Management system", value: "Environmental performance" },
      { label: "Homepage carbon note", value: "−25%, heat recovery and cleaner power" },
      { label: "Related update", value: "Ain Sokhna solar plant" },
      { label: "Certificates", value: "Published after verification" },
    ],
    gallery: [
      { src: images.desertFactory, alt: "Plant in an arid landscape", caption: "Works" },
      { src: images.coastalPlant, alt: "Coastal plant", caption: "Coastal complex" },
      { src: images.lab, alt: "Laboratory", caption: "Monitoring" },
    ],
  },
];

const arArticles: NewsArticle[] = [
  {
    slug: "ain-sokhna-solar",
    date: "مايو 2025",
    dateTime: "2025-05",
    category: "sustainability",
    title: "مجموعة ECI تبدأ تشغيل محطة طاقة شمسية بقدرة 15 ميجاوات في العين السخنة",
    excerpt:
      "يغطي المشروع 22% من احتياج المجمع الصناعي الأول من الكهرباء، ويخفض الانبعاثات السنوية بأكثر من 42,000 طن مكافئ من ثاني أكسيد الكربون.",
    image: images.coastalPlant,
    imageAlt: "مجمع أسمنت ساحلي وقباب تخزين",
    facts: [
      { label: "القدرة", value: "15 ميجاوات" },
      { label: "الموقع", value: "العين السخنة" },
      { label: "احتياج المجمع", value: "22%" },
      { label: "مكافئ الكربون سنوياً", value: "42,000 طن" },
    ],
    body: [
      "تسجل الصفحة الرئيسية تشغيل محطة طاقة شمسية بقدرة 15 ميجاوات في العين السخنة، وتذكر أن المحطة تغطي 22% من الكهرباء التي يستهلكها المجمع الصناعي الأول.",
      "الرقم المنشور للانبعاثات هو خفض يزيد على 42,000 طن مكافئ من ثاني أكسيد الكربون سنوياً. تُرسل الحسابات ومحضر التشغيل عند الطلب.",
      "يرد سياق الأداء البيئي في صفحة الجودة. أرقام الشهادات تُنشر هناك بعد التحقق من الوثائق السارية.",
    ],
    specs: [
      { label: "المستجد", value: "توليد شمسي" },
      { label: "القدرة المذكورة", value: "15 ميجاوات" },
      { label: "حصة الكهرباء", value: "22% من المجمع الأول" },
      { label: "رقم الانبعاثات", value: "أكثر من 42,000 طن مكافئ سنوياً" },
    ],
    gallery: [
      { src: images.coastalPlant, alt: "المجمع على الساحل", caption: "مجمع العين السخنة" },
      { src: images.desertFactory, alt: "مصنع في بيئة صحراوية", caption: "مناطق التشغيل" },
      { src: images.quarry, alt: "محجر الحجر الجيري", caption: "تشغيل المواد الخام" },
    ],
  },
  {
    slug: "pozzolanic-grade",
    date: "أبريل 2025",
    dateTime: "2025-04",
    category: "products",
    title: "رتبة أسمنت بوزولاني عالية الأداء مذكورة لاستخدامات البناء الأخضر",
    excerpt:
      "تركيبة موجهة لمقاومة الأملاح والمياه الجوفية، ولأساسات مشروعات الساحل الشمالي والدلتا الجديدة.",
    image: images.bagged,
    imageAlt: "أسمنت معبأ جاهز للشحن",
    facts: [
      { label: "الرتبة", value: "بوزولاني" },
      { label: "التعرض", value: "أملاح ومياه جوفية" },
      { label: "النطاق", value: "الساحل والدلتا الجديدة" },
      { label: "الإشارة", value: "بناء أخضر" },
    ],
    body: [
      "تصف الصفحة الرئيسية رتبة بوزولانية عالية الأداء لأساسات معرضة للأملاح والمياه الجوفية، وتسمي الساحل الشمالي والدلتا الجديدة كأبرز الاستخدامات.",
      "يذكر التحديث نفسه حصول الرتبة على شهادة البناء الأخضر الوطنية. تُرفق طبعة الشهادة ومرجع جهة الإصدار مع الملف الفني.",
      "الرتب وخيارات التعبئة وطريقة طلب عرض السعر موجودة في صفحة المنتجات والخدمات.",
    ],
    specs: [
      { label: "المنتج", value: "أسمنت بوزولاني عالي الأداء" },
      { label: "الأداء المذكور", value: "مقاومة الأملاح والمياه الجوفية" },
      { label: "الاستخدامات المذكورة", value: "أساسات الساحل الشمالي والدلتا الجديدة" },
      { label: "التوثيق", value: "ملف فني عند الطلب" },
    ],
    gallery: [
      { src: images.bagged, alt: "منتج معبأ", caption: "شحن معبأ" },
      { src: images.bulkSilo, alt: "تحميل صوامع", caption: "تحميل سائب" },
      { src: images.constructionSite, alt: "موقع تشييد", caption: "الاستخدام في الموقع" },
    ],
  },
  {
    slug: "fleet-telemetry",
    date: "مارس 2025",
    dateTime: "2025-03",
    category: "operations",
    title: "تحديث أسطول النقل بالقياس عن بعد والموازين المؤتمتة",
    excerpt:
      "منصة مركزية تتابع حمولات الصوامع المتحركة وترتبط بنظام المقاول حتى تصل الشحنات إلى مواقع الصب في وقتها.",
    image: images.portTerminal,
    imageAlt: "رصيف يستخدم في شحن الأسمنت",
    facts: [
      { label: "التتبع", value: "قياس عن بعد" },
      { label: "الوزن", value: "مؤتمت" },
      { label: "الحمولة", value: "صوامع متحركة" },
      { label: "الربط", value: "نظام المقاول" },
    ],
    body: [
      "يصف تحديث اللوجستيات في الصفحة الرئيسية منصة مركزية تتابع حمولات الصوامع المتحركة لحظة بلحظة وتربطها بنظام تخطيط الموارد لدى المقاول.",
      "الغرض المذكور هو التوقيت: يمكن متابعة شحنات الصب الحرجة من التحميل حتى الوصول. الوزن على الأسطول موصوف بأنه مؤتمت بالكامل.",
      "الشحن والعرض اللوجستي الأوسع ملخصان في صفحة المنتجات والخدمات. مواقع المركبات اللحظية غير منشورة في هذا الموقع.",
    ],
    specs: [
      { label: "النظام", value: "قياس عن بعد وموازين مؤتمتة" },
      { label: "النطاق", value: "حمولات الصوامع المتحركة" },
      { label: "التكامل", value: "نظام المقاول" },
      { label: "الغرض", value: "توقيت الصبات الحرجة" },
    ],
    gallery: [
      { src: images.portTerminal, alt: "محطة الشحن", caption: "محطة الشحن" },
      { src: images.bulkSilo, alt: "نقطة تحميل السائب", caption: "تحميل سائب" },
      { src: images.bridge, alt: "أعمال بنية تحتية", caption: "بيئة التوريد" },
    ],
  },
  {
    slug: "batch-release",
    date: "فبراير 2025",
    dateTime: "2025-02",
    category: "products",
    title: "كيف تُسحب عينة الدفعة وكيف يُفرج عنها",
    excerpt: "تُؤخذ العينات من المحجر والفرن والمنتج النهائي، وتُسجل مقابل رقم الدفعة قبل الشحن.",
    image: images.lab,
    imageAlt: "مختبر لاختبار الأسمنت",
    facts: [
      { label: "نقاط السحب", value: "المحجر والفرن والمنتج" },
      { label: "السجل", value: "مقابل الدفعة" },
      { label: "المواصفة", value: "EN 197-1" },
      { label: "التقارير", value: "عند الطلب" },
    ],
    body: [
      "تُدار الجودة بوصفها عملية. تُسحب العينات من المحجر والفرن والمنتج النهائي، وتُختبر في المعمل وتُسجل مقابل رقم الدفعة قبل الشحن.",
      "المواصفة المرجعية لخصائص الأسمنت وطرق اختباره هي EN 197-1. صفحة الجودة تصف الفحص الدوري أثناء تشغيل الفرن بفاصل 60 دقيقة.",
      "أرقام الشهادات ونطاق المعمل يُنشران بعد مطابقة الوثائق السارية. تقارير الاختبار تُطلب من صفحة التواصل.",
    ],
    specs: [
      { label: "أخذ العينات", value: "المحجر والفرن والأسمنت النهائي" },
      { label: "الإفراج", value: "مسجل مقابل الدفعة" },
      { label: "مواصفة المنتج", value: "EN 197-1" },
      { label: "فاصل الفحص", value: "60 دقيقة أثناء تشغيل الفرن" },
    ],
    gallery: [
      { src: images.lab, alt: "مختبر الجودة", caption: "الفحص المعملي" },
      { src: images.quarry, alt: "واجهة المحجر", caption: "عينة المواد الخام" },
      { src: images.hero, alt: "مصنع الأسمنت", caption: "خط الإنتاج" },
    ],
  },
  {
    slug: "manufacturing-sites",
    date: "يناير 2025",
    dateTime: "2025-01",
    category: "operations",
    title: "ثلاثة مواقع تصنيع مذكورة لدى المجموعة",
    excerpt: "تسمي الصفحة الرئيسية مجمعاً متكاملاً في العين السخنة، ومصنعاً في بني سويف، ومحطة بحرية في الدخيلة.",
    image: images.quarry,
    imageAlt: "محجر يغذي مصنع أسمنت",
    facts: [
      { label: "العين السخنة", value: "مجمع متكامل" },
      { label: "بني سويف", value: "مصنع" },
      { label: "الدخيلة", value: "محطة بحرية" },
      { label: "التفصيل", value: "صفحة المصانع" },
    ],
    body: [
      "المصانع المعرّفة في الصفحة الرئيسية هي المجمع المتكامل في العين السخنة، ومصنع بني سويف، والمحطة البحرية في الدخيلة.",
      "لكل موقع وصفه في تلك الصفحة. هذا الخبر لا يضيف طاقات إنتاج أو أسماء مقاولين أو عناوين غير الموجودة هناك.",
      "الزيارات وأسئلة الشحن وتوفر المنتج تتم عبر صفحة التواصل.",
    ],
    specs: [
      { label: "العين السخنة", value: "مجمع متكامل" },
      { label: "بني سويف", value: "مصنع إنتاج" },
      { label: "الدخيلة", value: "محطة بحرية" },
      { label: "للمزيد", value: "صفحة المصانع" },
    ],
    gallery: [
      { src: images.quarry, alt: "المحجر", caption: "المواد الخام" },
      { src: images.desertFactory, alt: "المصنع", caption: "خطوط الإنتاج" },
      { src: images.portTerminal, alt: "المحطة البحرية", caption: "المحطة البحرية" },
    ],
  },
  {
    slug: "project-supply",
    date: "ديسمبر 2024",
    dateTime: "2024-12",
    category: "projects",
    title: "توريد الأسمنت يُخطط وفق احتياج المشروع",
    excerpt: "تُتفق المتطلبات وتسلسل التوريد والمتابعة قبل تثبيت المادة على الصبة.",
    image: images.towers,
    imageAlt: "تشييد أبراج",
    facts: [
      { label: "أولاً", value: "تحديد المتطلبات" },
      { label: "ثانياً", value: "تنسيق التوريد" },
      { label: "ثالثاً", value: "المتابعة" },
      { label: "تسمية الأعمال", value: "بعد التأكيد" },
    ],
    body: [
      "يبدأ توريد المشروعات من الاحتياج: الرتبة والكمية والوصول وبرنامج الصب. تُتفق هذه النقاط قبل إصدار خطة التسليم.",
      "يمتد التنسيق بين المصنع والشحن وفريق الموقع حتى يبقى التسلسل واضحاً. المتابعة جزء من المسار نفسه.",
      "أسماء المشروعات والأطراف تُنشر بعد تأكيدها. صفحة المشروعات تشرح هذا المنهج.",
    ],
    specs: [
      { label: "التخطيط", value: "الرتبة والكمية والوصول والبرنامج" },
      { label: "التنسيق", value: "المصنع والشحن والموقع" },
      { label: "النشر", value: "بعد التأكيد" },
      { label: "الاستفسار", value: "صفحة التواصل" },
    ],
    gallery: [
      { src: images.towers, alt: "أبراج قيد الإنشاء", caption: "تشييد عمراني" },
      { src: images.bridge, alt: "أعمال كوبري", caption: "بنية تحتية" },
      { src: images.monorail, alt: "منشأ نقل علوي", caption: "منشآت نقل" },
    ],
  },
  {
    slug: "grades-on-enquiry",
    date: "نوفمبر 2024",
    dateTime: "2024-11",
    category: "press",
    title: "الرتب والتعبئة المتاحة للاستفسار",
    excerpt: "تعرض صفحة المنتجات الرتب الحالية، ومع كل رتبة مواصفاتها وخيارات التعبئة.",
    image: images.bulkSilo,
    imageAlt: "صومعة أسمنت سائب",
    facts: [
      { label: "مكان العرض", value: "صفحة المنتجات" },
      { label: "التعبئة", value: "أكياس وسائب" },
      { label: "المواصفات", value: "لكل رتبة" },
      { label: "السعر", value: "عند الطلب" },
    ],
    body: [
      "الرتب الحالية وبنود المواصفات وخيارات التعبئة محفوظة في صفحة المنتجات والخدمات.",
      "يمكن بدء طلب السعر من تلك الصفحة أو من صفحة التواصل. غرفة الأخبار لا تنشر أسعاراً.",
      "إذا احتاج المشروع مستنداً غير موجود في الموقع، يصدره الفريق الفني مقابل الاستفسار.",
    ],
    specs: [
      { label: "الدليل", value: "صفحة المنتجات والخدمات" },
      { label: "التعبئة", value: "أكياس وسائب" },
      { label: "التسعير", value: "غير منشور هنا" },
      { label: "المستندات", value: "تصدر مقابل الاستفسار" },
    ],
    gallery: [
      { src: images.bulkSilo, alt: "توريد سائب", caption: "توريد سائب" },
      { src: images.bagged, alt: "أسمنت معبأ", caption: "توريد معبأ" },
      { src: images.constructionSite, alt: "أعمال الموقع", caption: "استخدام المشروع" },
    ],
  },
  {
    slug: "environmental-practice",
    date: "أكتوبر 2024",
    dateTime: "2024-10",
    category: "sustainability",
    title: "الأداء البيئي يُراجع ضمن التشغيل",
    excerpt:
      "تصف صفحة الجودة الإدارة البيئية بوصفها نظاماً يُقاس ويُراجع ويُحسَّن. تفاصيل الشهادات تلي التحقق.",
    image: images.desertFactory,
    imageAlt: "مصنع أسمنت في موقع جاف",
    facts: [
      { label: "النظام", value: "إدارة بيئية" },
      { label: "المراجعة", value: "مستمرة" },
      { label: "الشهادات", value: "بعد التحقق" },
      { label: "المصدر", value: "صفحة الجودة" },
    ],
    body: [
      "الإدارة البيئية في صفحة الجودة هي الطريقة التي يُقاس بها الأداء ويُراجع ويُحسَّن عبر التشغيل.",
      "تسجل الصفحة الرئيسية أيضاً خفضاً بنسبة 25% يُنسب لاسترجاع الحرارة والطاقة الأنظف، ومحطة شمسية في العين السخنة. هذه الصفحة لا تعيد حساب تلك الأرقام.",
      "جهات الإصدار وأرقام الشهادات وتواريخ الصلاحية تُضاف بعد مراجعة الوثائق السارية.",
    ],
    specs: [
      { label: "نظام الإدارة", value: "الأداء البيئي" },
      { label: "ملاحظة الكربون", value: "−25%، استرجاع حرارة وطاقة أنظف" },
      { label: "تحديث مرتبط", value: "محطة العين السخنة الشمسية" },
      { label: "الشهادات", value: "تُنشر بعد التحقق" },
    ],
    gallery: [
      { src: images.desertFactory, alt: "المصنع", caption: "المجمع" },
      { src: images.coastalPlant, alt: "المجمع الساحلي", caption: "المجمع الساحلي" },
      { src: images.lab, alt: "المختبر", caption: "المتابعة" },
    ],
  },
];

const sharedFiltersEn: NewsContent["filters"] = [
  { id: "all", label: "All updates" },
  { id: "press", label: "Press" },
  { id: "projects", label: "Projects" },
  { id: "sustainability", label: "Sustainability" },
  { id: "operations", label: "Operations" },
  { id: "products", label: "Products and quality" },
];

const sharedFiltersAr: NewsContent["filters"] = [
  { id: "all", label: "كل المستجدات" },
  { id: "press", label: "بيانات صحفية" },
  { id: "projects", label: "المشروعات" },
  { id: "sustainability", label: "الاستدامة" },
  { id: "operations", label: "التشغيل" },
  { id: "products", label: "المنتجات والجودة" },
];

export const newsContent: Record<Locale, NewsContent> = {
  en: {
    hero: {
      eyebrow: "Newsroom",
      title: "News, announcements and insights from ECI Cement",
      description:
        "The latest on our operations, sustainability programmes, products and the national projects we supply — with supporting documents available on request.",
    },
    statNotes: {
      stories: "Published stories and releases",
      topics: "From operations to sustainability",
      documents: "Reports and statements on request",
      languages: "Every release in Arabic and English",
    },
    statLabels: {
      stories: "Updates",
      topics: "Topics",
      documents: "Media kit",
      languages: "Languages",
    },
    searchPlaceholder: "Search updates",
    searchLabel: "Search news",
    filters: sharedFiltersEn,
    featuredKicker: "Lead update",
    readStory: "Read the update",
    requestDocument: "Request the document",
    relatedTitle: "Further updates",
    archive: {
      eyebrow: "Archive",
      title: "Field notes and company updates",
      description:
        "Filter by topic or search the title. Each item stays within statements already published on the site, or explains where the supporting document is requested.",
    },
    empty: "No updates match this search.",
    previous: "Previous",
    next: "Next",
    pageLabel: "Page",
    continueArchive: "Continue to the archive",
    continueMedia: "Media desk and documents",
    media: {
      eyebrow: "Media desk",
      title: "Statements, brand material and how to reach the team",
      description:
        "Press material is issued on request. This desk does not publish a separate hotline or a media inbox until those details are confirmed.",
      policyTitle: "What the desk handles",
      policyItems: [
        { title: "Statements", description: "Updates that are ready for publication are posted in this newsroom." },
        { title: "Technical papers", description: "Test reports and product sheets are sent against a named enquiry." },
        { title: "Site questions", description: "Visits and filming requests are reviewed individually through the contact page." },
      ],
      assetsTitle: "Brand material",
      assetsNote: "Logo files, a fact sheet and written guidelines are prepared for release. They are not stored as public downloads yet.",
      assets: [
        { title: "Logo pack", description: "Primary mark and clear-space rules." },
        { title: "Fact sheet", description: "A short description of the group for editorial use." },
        { title: "Written guidelines", description: "Name, colours and how the mark should appear." },
      ],
      requestAssets: "Request brand files",
      newsletterTitle: "Editorial list",
      newsletterDescription: "Leave a name and email if you want future updates. The list is not connected yet, so the contact page remains the working route.",
      nameLabel: "Name",
      emailLabel: "Email",
      subscribe: "Register interest",
      newsletterPending: "Recorded in this browser only. The mailing list is not connected yet — please use the contact page for a media enquiry.",
      contactsTitle: "Routes",
      contacts: [
        { title: "Media and general enquiries", description: "Use the contact page. A dedicated media address will be published when it is confirmed." },
        { title: "Product documents", description: "Grade sheets and test reports are requested against the delivery or the project." },
        { title: "Quotations", description: "Supply pricing is handled as a quotation, not as a news item." },
      ],
      faqTitle: "Questions the desk is asked",
      faqs: [
        {
          question: "Can a contract value be confirmed from this page?",
          answer: "No. Supply agreements are confirmed through the commercial team. This newsroom does not state contract values.",
        },
        {
          question: "Where are certificates and test reports?",
          answer: "The quality page explains the testing route. Copies are issued on request once the document set has been checked.",
        },
        {
          question: "How should a project be named in print?",
          answer: "Named projects are used after they have been confirmed for publication. Until then, describe the supply by grade and location only if that detail is already public.",
        },
      ],
    },
    article: {
      back: "All updates",
      factsTitle: "Points already stated",
      bodyTitle: "The update",
      specsTitle: "Reference lines",
      galleryTitle: "Related photographs from the site library",
      moreTitle: "Other updates",
      notFoundTitle: "This update is not on file",
      notFoundDescription: "The link does not match an item in the newsroom.",
    },
    articles: enArticles,
  },
  ar: {
    hero: {
      eyebrow: "غرفة الأخبار",
      title: "أخبار وإعلانات ورؤى من ECI للأسمنت",
      description:
        "أحدث المستجدات عن عملياتنا وبرامج الاستدامة والمنتجات والمشروعات القومية التي نوردها — مع إتاحة المستندات الداعمة عند الطلب.",
    },
    statNotes: {
      stories: "أخبار وبيانات صحفية منشورة",
      topics: "من التشغيل إلى الاستدامة",
      documents: "تقارير وبيانات عند الطلب",
      languages: "كل بيان بالعربية والإنجليزية",
    },
    statLabels: {
      stories: "مستجدات",
      topics: "موضوعات",
      documents: "مستندات",
      languages: "اللغات",
    },
    searchPlaceholder: "ابحث في المستجدات",
    searchLabel: "بحث في الأخبار",
    filters: sharedFiltersAr,
    featuredKicker: "الخبر الأبرز",
    readStory: "اقرأ المستجد",
    requestDocument: "اطلب المستند",
    relatedTitle: "مستجدات أخرى",
    archive: {
      eyebrow: "الأرشيف",
      title: "ملاحظات ميدانية ومستجدات المجموعة",
      description:
        "صفِّ حسب الموضوع أو ابحث في العنوان. كل مادة تبقى ضمن ما هو منشور في الموقع، أو توضح من أين يُطلب المستند.",
    },
    empty: "لا توجد مستجدات مطابقة لهذا البحث.",
    previous: "السابق",
    next: "التالي",
    pageLabel: "صفحة",
    continueArchive: "متابعة إلى الأرشيف",
    continueMedia: "مكتب الإعلام والمستندات",
    media: {
      eyebrow: "مكتب الإعلام",
      title: "البيانات ومواد الهوية وطريقة الوصول إلى الفريق",
      description:
        "تُصدر المواد الصحفية عند الطلب. لا يُنشر هنا خط ساخن أو بريد إعلامي مستقل قبل تأكيدهما.",
      policyTitle: "ما يتولاه المكتب",
      policyItems: [
        { title: "البيانات", description: "المستجدات الجاهزة للنشر توضع في غرفة الأخبار." },
        { title: "الأوراق الفنية", description: "تقارير الاختبار ونشرات المنتج تُرسل مقابل استفسار محدد." },
        { title: "أسئلة المواقع", description: "طلبات الزيارة والتصوير تُراجع فردياً عبر صفحة التواصل." },
      ],
      assetsTitle: "مواد الهوية",
      assetsNote: "ملفات الشعار ونشرة مختصرة والإرشادات المكتوبة قيد الإعداد للإصدار. ليست تنزيلات عامة بعد.",
      assets: [
        { title: "حزمة الشعار", description: "العلامة الأساسية وقواعد الفراغ حولها." },
        { title: "نشرة تعريف", description: "وصف مختصر للمجموعة للاستخدام التحريري." },
        { title: "إرشادات مكتوبة", description: "الاسم والألوان وطريقة ظهور العلامة." },
      ],
      requestAssets: "اطلب ملفات الهوية",
      newsletterTitle: "القائمة التحريرية",
      newsletterDescription: "اترك الاسم والبريد إذا رغبت في المستجدات اللاحقة. القائمة غير مربوطة بعد، وصفحة التواصل هي المسار العامل.",
      nameLabel: "الاسم",
      emailLabel: "البريد",
      subscribe: "سجّل الاهتمام",
      newsletterPending: "حُفظ في هذا المتصفح فقط. القائمة البريدية غير مربوطة بعد — استخدم صفحة التواصل لأي استفسار إعلامي.",
      contactsTitle: "المسارات",
      contacts: [
        { title: "الإعلام والاستفسارات العامة", description: "استخدم صفحة التواصل. يُنشر بريد إعلامي مخصص عند تأكيده." },
        { title: "مستندات المنتج", description: "نشرات الرتب وتقارير الاختبار تُطلب مقابل التسليم أو المشروع." },
        { title: "عروض الأسعار", description: "تسعير التوريد يتم بطلب عرض سعر، لا بخبر." },
      ],
      faqTitle: "أسئلة يتلقاها المكتب",
      faqs: [
        {
          question: "هل يمكن تأكيد قيمة تعاقد من هذه الصفحة؟",
          answer: "لا. اتفاقيات التوريد تُؤكد عبر الفريق التجاري. غرفة الأخبار لا تذكر قيم التعاقدات.",
        },
        {
          question: "أين الشهادات وتقارير الاختبار؟",
          answer: "صفحة الجودة تشرح مسار الفحص. تُرسل النسخ عند الطلب بعد مراجعة حزمة المستندات.",
        },
        {
          question: "كيف يُسمّى مشروع في النشر؟",
          answer: "تُستخدم أسماء المشروعات بعد تأكيدها للنشر. قبل ذلك يُكتفى بالرتبة والموقع إذا كانا معلنين أصلاً.",
        },
      ],
    },
    article: {
      back: "كل المستجدات",
      factsTitle: "نقاط مذكورة سابقاً",
      bodyTitle: "المستجد",
      specsTitle: "بنود مرجعية",
      galleryTitle: "صور من مكتبة الموقع",
      moreTitle: "مستجدات أخرى",
      notFoundTitle: "هذا المستجد غير موجود",
      notFoundDescription: "الرابط لا يطابق مادة في غرفة الأخبار.",
    },
    articles: arArticles,
  },
};

export function categoryLabel(content: NewsContent, category: NewsCategory) {
  return content.filters.find((filter) => filter.id === category)?.label ?? category;
}
