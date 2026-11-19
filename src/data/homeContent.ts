import heroImage from "../assets/hero-cement-plant.jpg";
import baggedImage from "../assets/product-bagged.jpg";
import bulkSiloImage from "../assets/product-bulk-silo.jpg";
import coastalPlantImage from "../assets/product-coastal-plant.jpg";
import constructionSiteImage from "../assets/product-construction-site.jpg";
import desertFactoryImage from "../assets/factory-desert.jpg";
import portTerminalImage from "../assets/factory-port-terminal.jpg";
import quarryImage from "../assets/factory-quarry.jpg";
import towersImage from "../assets/project-towers.jpg";
import bridgeImage from "../assets/project-bridge.jpg";
import monorailImage from "../assets/project-monorail.jpg";
import waterStationImage from "../assets/project-water-station.jpg";
import labImage from "../assets/quality-lab.jpg";

export const homeImages = {
  hero: heroImage,
  bagged: baggedImage,
  bulkSilo: bulkSiloImage,
  coastalPlant: coastalPlantImage,
  constructionSite: constructionSiteImage,
  desertFactory: desertFactoryImage,
  portTerminal: portTerminalImage,
  quarry: quarryImage,
  towers: towersImage,
  bridge: bridgeImage,
  monorail: monorailImage,
  waterStation: waterStationImage,
  lab: labImage,
  /** kept so the earlier scaffold components still resolve */
  industrialImage: heroImage,
} as const;

/* ------------------------------------------------------------------ *
 * Verification register.
 *
 * The four reference screenshots are design mockups. They contain
 * specific figures, certificate numbers, contractor names and national
 * project names that are NOT verified company facts. Per the brief we
 * must not invent such data, so every claim below was transcribed
 * verbatim from the reference and is reproduced as-is, tagged for
 * checking before launch. Nothing here is approved copy.
 * ------------------------------------------------------------------ */
export type VerificationFlag =
  | "performance-figure"
  | "certification"
  | "contractor-name"
  | "project-name"
  | "site-detail";

export interface Flagged {
  value: string;
  flag: VerificationFlag;
  note: string;
}

export const verificationRegister: Flagged[] = [
  { value: "12.5M طن متري سنوياً", flag: "performance-figure", note: "Group clinker/cement capacity. Unverified." },
  { value: "99.8% الالتزام الزمني", flag: "performance-figure", note: "On-time shipment rate. Unverified." },
  { value: "-25% خفض الانبعاثات", flag: "performance-figure", note: "Carbon reduction figure. Unverified." },
  { value: "أكثر من 35 عاماً", flag: "performance-figure", note: "Years of operation. Unverified." },
  { value: "450,000 / 320,000 / 180,000 / 260,000 طن", flag: "performance-figure", note: "Per-project supply tonnages. Unverified." },
  { value: "58.4 MPa @ 28 يوم", flag: "performance-figure", note: "Reference renders this as '28 58.4 @ MPa يوم' - numeral order transposed in the source. Value and unit placement need confirmation. Unverified." },
  { value: "3,680 سم²/جم بلين", flag: "performance-figure", note: "Blaine fineness readout. Unverified." },
  { value: "0.8 مم معامل التمدد", flag: "performance-figure", note: "Reference gives the limit as '>= 10 مم' while expansion must be an upper bound (<=). Limiting value and comparison direction both need confirmation." },
  { value: "3,800 كادر", flag: "performance-figure", note: "Headcount. Unverified." },
  { value: "10 ملايين ساعة عمل دون حوادث", flag: "performance-figure", note: "Safety record. Unverified." },
  { value: "42,000 طن مكافئ CO2", flag: "performance-figure", note: "Solar plant saving. Unverified." },
  { value: "EOS 4756 / EN 197-1 / CE", flag: "certification", note: "Standard marks. Exact editions and scope not confirmed." },
  { value: "ASTM C150 (Type V)", flag: "certification", note: "Confirm which grades actually hold certification." },
  { value: "ISO 9001:2015", flag: "certification", note: "Certificate number and validity not shown in reference." },
  { value: "ISO 14001:2015", flag: "certification", note: "Certificate number and validity not shown in reference." },
  { value: "ISO 45001:2018", flag: "certification", note: "Certificate number and validity not shown in reference." },
  { value: "EPD شهادة الأثر البيئي للمنتج", flag: "certification", note: "EPD programme operator not stated." },
  { value: "CSCEC / المقاولون العرب / أوراسكوم / حسن علام / بتروجت", flag: "contractor-name", note: "Named contractors. Accuracy and permission to cite unverified." },
  { value: "FLSmidth", flag: "contractor-name", note: "Named equipment supplier. Unverified." },
  { value: "البرج الأيقوني / العاصمة الإدارية الجديدة", flag: "project-name", note: "Named national project. Permission to cite unverified." },
  { value: "محور روض الفرج - مسجل بجينيس", flag: "project-name", note: "Guinness claim unverified." },
  { value: "مونوريل شرق وغرب النيل", flag: "project-name", note: "Named national project. Unverified." },
  { value: "محطة تحيا مصر البحرية / ميناء الدخيلة", flag: "project-name", note: "Named port projects. Unverified." },
  { value: "أبراج العلمين والبحيرات الصناعية", flag: "project-name", note: "Named development. Unverified." },
  { value: "الخط الساخن 16800", flag: "site-detail", note: "Hotline in reference footer. Replace with the real number." },
  { value: "التجمع الخامس، القاهرة الجديدة", flag: "site-detail", note: "Head office address. Confirm or replace." },
  { value: "الكيلو 93 طريق القطامية - العين السخنة", flag: "site-detail", note: "Suez plant address. Confirm or replace." },
];

/* ------------------------------------------------------------------ *
 * Section models
 * ------------------------------------------------------------------ */
export interface SpecRow { label: string; value: string; }
export interface StatItem { value: string; label: string; description: string; icon: "capacity" | "locations" | "delivery" | "environment"; }

export interface ProductItem {
  image: string;
  imageAlt: string;
  badges: string[];
  category: string;
  title: string;
  gradeCode: string;
  description: string;
  specs: SpecRow[];
  packaging: string[];
}

export interface FactoryItem {
  image: string;
  imageAlt: string;
  badges: string[];
  location: string;
  capacityCode: string;
  title: string;
  description: string;
  specs: SpecRow[];
  compliance: string;
}

export interface ProjectItem {
  image: string;
  imageAlt: string;
  badges: string[];
  title: string;
  description: string;
  stats: SpecRow[];
  footer: string;
}

export interface CertificationItem {
  badge: string;
  title: string;
  description: string;
  chip: string;
  icon: "badge" | "leaf" | "shield" | "award" | "file" | "globe";
}

export interface NewsItem {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  icon: "sun" | "flask" | "truck";
}

export interface HomeCopy {
  hero: { badge: string; title: string; description: string; explore: string; quotation: string };
  statistics: StatItem[];
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    metrics: { value: string; label: string; description: string }[];
    features: { title: string; description: string }[];
    certifications: { title: string; description: string; badges: string[] };
  };
  products: {
    eyebrow: string;
    title: string;
    description: string;
    filters: string[];
    items: ProductItem[];
    requestQuote: string;
    tds: string;
  };
  liveQuality: { label: string; blaine: string; expansion: string; actions: string[] };
  services: { eyebrow: string; title: string; description: string; items: { title: string; description: string; tag: string }[] };
  factories: {
    eyebrow: string;
    title: string;
    description: string;
    summary: SpecRow[];
    items: FactoryItem[];
    cta: string;
  };
  projects: { eyebrow: string; banner: string; title: string; description: string; items: ProjectItem[] };
  quality: {
    eyebrow: string;
    title: string;
    description: string;
    stat: { value: string; title: string; note: string };
    lab: { eyebrow: string; title: string; description: string; metric: string; metricNote: string; imageAlt: string };
    certifications: CertificationItem[];
  };
  news: { eyebrow: string; title: string; archive: string; readMore: string; items: NewsItem[] };
  cta: { title: string; description: string; primary: string; secondary: string };
}

const ar: HomeCopy = {
  hero: {
    badge: "معتمد وفق المواصفات القياسية المصرية EOS 4756-1 و EN 197-1",
    title: "نبني ركائز مصر الحديثة — قوة هندسية مستدامة",
    description:
      "الشركة المصرية الرائدة في إنتاج الكلنكر عالي الأداء، أسمنت بورتلاندي CEM I، وأسمنت CEM II صديق البيئة. نسلح كبرى المشروعات القومية على امتداد حوض النيل بصلابة إنشائية فائقة، واعتمادات الجودة القياسية EOS 4756، وحلول الأسمنت منخفض الانبعاثات.",
    explore: "استكشف منتجاتنا",
    quotation: "طلب توريد كميات كبرى",
  },
  statistics: [
    { value: "12.5M", label: "مليون طن متري سنوياً", description: "الطاقة الإنتاجية القصوى للكلنكر والأسمنت", icon: "capacity" },
    { value: "3 مجمعات", label: "مجمعات تصنيع وموانئ", description: "السويس، بني سويف، وأرصفة السخنة للتصدير", icon: "locations" },
    { value: "99.8%", label: "الالتزام الزمني للشحنات", description: "موازين ومنافذ رقمية مؤتمتة 24/7 دون توقف", icon: "delivery" },
    { value: "-25%", label: "خفض الانبعاثات الكربونية", description: "عبر استرجاع الحرارة المفقودة والطاقة النظيفة", icon: "environment" },
  ],
  intro: {
    eyebrow: "سجل التميز الهندسي والبنية التحتية",
    title: "أكثر من 35 عاماً من الريادة الهندسية في صناعة الأسمنت المصري",
    paragraphs: [
      "منذ انطلاق أول خطوط إنتاجنا، تشكلت هوية المجموعة حول مفهوم هندسي صارم لتوفير ركائز البناء الأكثر صلابة وموثوقية في منطقة الشرق الأوسط وإفريقيا. نجحنا في بناء منظومة توريد متكاملة تشمل المقالع الذاتية، أفران التكليس الأحدث عالمياً، وشبكات نقل الصب والمغلف.",
      "تفخر المجموعة بمطابقة معملية 100% لجميع الشحنات الموردة عبر الفحص الروبوتي الفوري بالأشعة السينية (XRF/XRD)، مما يمكننا من أن نكون المورد الاستراتيجي لأعقد المشروعات القومية كأنفاق قناة السويس، والمحطات النووية ومترو الأنفاق، ومسارات القطار الكهربائي السريع.",
    ],
    metrics: [
      { value: "12.5M", label: "طن متري سنوياً", description: "طاقة تكسير وتكليس رائدة" },
      { value: "99.8%", label: "دقة الجداول الزمنية", description: "تفريغ وتوريد بلا انقطاع" },
      { value: "3", label: "مجمعات صناعية", description: "خطوط إنتاج ذاتية ومحطات طاقة" },
      { value: "45+", label: "مشروعاً قومياً", description: "شريك الصب الخرساني المعتمد" },
    ],
    features: [
      { title: "فحص معملي مؤتمت 100%", description: "تحليل طيفي آلي متواصل على مدار الساعة" },
      { title: "أسطول صب معتمد", description: "أكثر من 450 شاحنة مجهزة بنظام التتبع الملاحي" },
      { title: "منصات تصدير بحرية", description: "مناولة مباشرة لسفن الشحن في البحرين الأحمر والمتوسط" },
      { title: "مبادرة الأسمنت الأخضر", description: "إحلال الوقود البديل بنسبة تصل إلى 30%" },
    ],
    certifications: {
      title: "اعتمادات الهيئات الدولية والمصرية",
      description: "حاصلون على شهادات الجودة والبيئة والسلامة المهنية ISO 9001، ISO 14001، و 45001، ومطابقين للمواصفات الأمريكية ASTM C150 والأوروبية EN 197-1.",
      badges: ["EOS 4756", "EN 197-1", "ASTM C150", "ISO 9001:2015"],
    },
  },
  products: {
    eyebrow: "الكتالوج الفني لمصانع ECI GROUP",
    title: "منتجات الأسمنت القياسية عالية الأداء",
    description:
      "حلول أسمنتية متقدمة تخضع لاختبارات فيزيائية وكيميائية دورية في معاملنا الرقمية لضمان كفاءة الضغط ومقاومة الإجهادات العالية للبنية التحتية والمباني شاهقة الارتفاع والأعمال الخرسانية المتخصصة.",
    filters: ["كافة الصيغ", "صب سائب (Bulk Silo)", "شكاير 50 كجم", "جامبو 1.5 طن"],
    requestQuote: "طلب تسعير الدفعة",
    tds: "صحيفة البيانات الفنية (TDS)",
    items: [
      {
        image: bulkSiloImage,
        imageAlt: "صوامع تخزين الأسمنت السائب ومنصة التحميل",
        badges: ["كود البناء ECP 203", "EOS 4756-1 / EN 197-1"],
        category: "بورتلاندي عادي فائق المقاومة",
        title: "فائق المقاومة المبكرة",
        gradeCode: "CEM I 52.5N",
        description:
          "مثالي للكباري سابقة الإجهاد، الخوازيق العميقة، والأبراج ناطحات السحاب متطلبة التحميل المبكر للشدات الإنشائية.",
        specs: [
          { label: "مقاومة الضغط (28 يوم)", value: "≥ 52.5 N/mm²" },
          { label: "مقاومة الضغط (2 يوم)", value: "≥ 20.0 N/mm²" },
          { label: "زمن الشك الابتدائي", value: "≥ 45 دقيقة" },
        ],
        packaging: ["صب سائب", "شكاير 50 كجم", "جامبو 1.5 طن"],
      },
      {
        image: coastalPlantImage,
        imageAlt: "محطة أسمنت ساحلية على البحر المتوسط",
        badges: ["ASTM C150 Type V", "EOS 4756-1"],
        category: "مقاوم للإملاح والكبريتات الضارة",
        title: "مقاوم للكبريتات البحرية",
        gradeCode: "SRC (Type V)",
        description:
          "مطوّر بخصائص مانعة لتآكل حديد التسليح في البيئات الساحلية، المياه الجوفية، شبكات الصرف، وموانئ البحر المتوسط والأحمر.",
        specs: [
          { label: "محتوى ألومينات ثلاثي الكالسيوم", value: "≤ 3.5%" },
          { label: "مقاومة الضغط (28 يوم)", value: "≥ 42.5 N/mm²" },
          { label: "التمدد الكبريتي (14 يوم)", value: "≤ 0.040%" },
        ],
        packaging: ["صب سائب", "شكاير 50 كجم", "جامبو 1.5 طن"],
      },
      {
        image: baggedImage,
        imageAlt: "شكاير أسمنت معبأة على منصات تحميل",
        badges: ["EOS 4756-1 / EN 197-1", "معتمد وزارة النقل"],
        category: "بورتلاندي عادي سريع التصلد",
        title: "سريع التصلد والإنتاج",
        gradeCode: "CEM I 42.5R",
        description:
          "مخصص للخرسانة الجاهزة، مصانع الطوب الإسمنتي والإنترلوك ومحطات الخلط المركزية التي تتطلب سرعة دورة القوالب.",
        specs: [
          { label: "مقاومة الضغط (28 يوم)", value: "≥ 42.5 N/mm²" },
          { label: "مقاومة الضغط (2 يوم)", value: "≥ 20.0 N/mm²" },
          { label: "زمن الشك الابتدائي", value: "≥ 60 دقيقة" },
        ],
        packaging: ["صب سائب", "شكاير 50 كجم", "جامبو 1.5 طن"],
      },
      {
        image: constructionSiteImage,
        imageAlt: "موقع إنشاء خرساني برافعة برجية",
        badges: ["شهادة EPD الدولية", "بصمة كربونية -28%"],
        category: "بورتلاندي حجر جيري منخفض الانبعاثات",
        title: "إيكو-ليمسطون الأخضر",
        gradeCode: "CEM II/B-L 32.5N",
        description:
          "الخيار الأمثل للبناء الأخضر المستدام مع تشغيلية استثنائية وأداء متفوق في المحارة والخرسانة المسلحة العادية.",
        specs: [
          { label: "مقاومة الضغط (28 يوم)", value: "≥ 32.5 N/mm²" },
          { label: "خفض الانبعاثات الكربونية", value: "-28%" },
          { label: "زمن الشك الابتدائي", value: "≥ 75 دقيقة" },
        ],
        packaging: ["صب سائب", "شكاير 50 كجم"],
      },
    ],
  },
  liveQuality: {
    label: "بث مباشر من مختبر الفحص المركزي (السويس & بني سويف) | تحديث كل ساعتين",
    blaine: "متوسط نعومة بلين (Blaine Fineness) اليوم: 3,680 سم²/جم",
    expansion: "معامل التمدد الإنشائي: 0.8 مم (الحد المسموح ≥ 10 مم)",
    actions: ["شهادة الجودة اللحظية (CoA)", "فحص دقة العينات"],
  },
  services: {
    eyebrow: "سلسلة الإمداد المتكاملة",
    title: "الخدمات الهندسية واللوجستية الميدانية",
    description:
      "لا ننتج الأسمنت فحسب، بل ندير منظومة لوجستية ذكية تضمن وصول الخامات السائبة والمغلفة لأصعب المواقع الجغرافية ومحطات الخرسانة العملاقة دون توقف.",
    items: [
      { title: "تصميم الخلطات الميدانية", description: "فريق استشاري معملي متجول يقدم الدعم الفني للمقاولين في المشاريع الكبرى لاختبار نسب الخلط المثلى وتحقيق مقاومة كسر استثنائية مع وفر اقتصادي ملحوظ.", tag: "دعم هندسي بالموقع" },
      { title: "أسطول النقل الصب 24/7", description: "أكثر من 250 شاحنة ومقطورة صهريج سيلو مزودة بنظام تتبع GPS ومراقبة دقيقة للأوزان بالباسكول الآلي لتأمين محطات الخرسانة الجاهزة ليلاً ونهاراً.", tag: "سعة تفريغ فائقة" },
      { title: "شحن السكك والتصدير البحري", description: "خطوط سكك حديدية ممتدة داخل مصانعنا، ورصيف شحن بحري مخصص بالسخنة والأدبية قادر على استيعاب سفن شحن عملاقة حتى 50,000 طن متري للتصدير الإقليمي.", tag: "شحن بري وبحري دولي" },
      { title: "الكلنكر والپوزولانا للمشاريع", description: "توريد تعاقدي ضخم للكلنكر الرمادي والبوزولانا الطبيعية لمصانع الطحن الإقليمية ومشاريع السدود والموانئ مع جداول إمداد صارمة الالتزام.", tag: "عقود توريد صناعية" },
    ],
  },
  factories: {
    eyebrow: "الأصول الصناعية والبنية التحتية",
    title: "خريطة المجمعات الصناعية الاستراتيجية",
    description:
      "تمتلك وتدير المجموعة صروحاً تصنيعية هيدروليكية متقدمة تربط خطوط التعدين بقلب محاور النقل السككي والموانئ التصديرية، لتأمين تدفقات الأسمنت الإنشائي بأعلى موثوقية تشغيلية.",
    summary: [
      { label: "12.5 مليون طن", value: "القدرة السنوية الكلية" },
      { label: "3", value: "مراكز لوجستية" },
    ],
    cta: "ملف الاعتماد الفني",
    items: [
      {
        image: desertFactoryImage,
        imageAlt: "مجمع مصانع الأسمنت المتكامل بمنطقة السويس",
        badges: ["المجمع الرئيسي الأكبر", "محافظة السويس - طريق العين السخنة"],
        location: "محافظة السويس - طريق العين السخنة",
        capacityCode: "MT/Y 6.5",
        title: "مجمع العين السخنة المتكامل",
        description:
          "منشأة عملاقة مجهزة بخطين جافين بنظام FLSmidth الدنماركي، ومحطة تدوير حراري مهدر 15MW لخفض البصمة الكربونية، مع ربط مباشر برصيف الشحن البحري لميناء السخنة.",
        specs: [
          { label: "القدرة الإنتاجية", value: "6.5 مليون طن / سنة" },
          { label: "تقنية المحرق", value: "FLSmidth IKN Clinker" },
          { label: "توليد الطاقة الذاتية", value: "15 MW (نظام WHR)" },
          { label: "الربط اللوجستي", value: "رصيف ميناء السخنة" },
        ],
        compliance: "مطابق لمعيار EN 197-1",
      },
      {
        image: quarryImage,
        imageAlt: "محجر الحجر الجيري وخطوط التعدين ببني سويف",
        badges: ["شحن سككي ونهري فائق", "المنطقة الصناعية - شرق النيل، بني سويف"],
        location: "المنطقة الصناعية - شرق النيل، بني سويف",
        capacityCode: "MT/Y 4.2",
        title: "مصنع بني سويف لأسمنت الأنفاق",
        description:
          "الذراع المتخصص في إنتاج وتجهيز أسمنت الأنفاق والمنشآت المائية العميقة، مزود بخط سكك حديد مخصص وصوامع نيلية استراتيجية لخدمة صعيد مصر وإقليم القاهرة الكبرى.",
        specs: [
          { label: "القدرة الإنتاجية", value: "4.2 مليون طن / سنة" },
          { label: "التخصص الهندسي", value: "أسمنت الأنفاق والمياه" },
          { label: "نقل السكك الحديدية", value: "شحن 4 قطارات يومياً" },
          { label: "الشحن النهري", value: "صوامع نيلية عائمة" },
        ],
        compliance: "مطابق للمواصفات المصرية 4756",
      },
      {
        image: portTerminalImage,
        imageAlt: "محطة تداول وتصدير الأسمنت بميناء الدخيلة",
        badges: ["الذراع التصديري الدولي", "ميناء الدخيلة - الإسكندرية (البحر الأبيض المتوسط)"],
        location: "ميناء الدخيلة - الإسكندرية (البحر الأبيض المتوسط)",
        capacityCode: "MT/Y 1.8",
        title: "محطة ميناء الدخيلة البحرية",
        description:
          "محطة تداول وتصدير لوجستية متطورة تخدم أسواق إفريقيا وحوض البحر الأبيض المتوسط، مزودة بأرصفة شحن صب تعمل بمعدل ضخ أوتوماتيكي يصل إلى 1,200 طن/ساعة.",
        specs: [
          { label: "طاقة التداول", value: "1.8 مليون طن / سنة" },
          { label: "معدل التحميل الصب", value: "1,200 طن / ساعة" },
          { label: "عمق الغاطس", value: "14 متر (سفن بناماكس)" },
          { label: "صوامع التخزين", value: "60,000 طن سعة صب" },
        ],
        compliance: "مطابق لمعايير التصدير ASTM C150",
      },
    ],
  },
  projects: {
    eyebrow: "المشاريع القومية الكبرى",
    banner: "توريد متزامن لأكثر من 45 موقعاً قومياً حيوياً",
    title: "صنّاع المعالم المعمارية الكبرى في مصر",
    description:
      "فخر التوريد لأعظم الشرايين العمرانية ومشاريع الدولة الاستراتيجية؛ خرسانات متطورة تقف شاهدة على عظمة التطوير الهندسي الحديث من النيل حتى البحرين.",
    items: [
      {
        image: towersImage,
        imageAlt: "أبراج منطقة الأعمال المركزية بالعاصمة الإدارية الجديدة",
        badges: ["العاصمة الإدارية الجديدة", "منطقة الأعمال المركزية CBD"],
        title: "البرج الأيقوني والأبراج المحيطة",
        description:
          "توريد أكبر صبة خرسانية مستمرة في الشرق الأوسط لقاعدة البرج بارتفاع 393 متراً، باستخدام أسمنت منخفض حرارة الإماهة وعالي المقاومة.",
        stats: [
          { label: "الكمية الموردة", value: "450,000 طن" },
          { label: "رتبة الأسمنت", value: "CEM I 52.5N Ultra-High" },
          { label: "المقاول العام", value: "CSCEC بالتعاون مع المقاولون العرب" },
        ],
        footer: "تم اعتماد واختبار الصب بنجاح 100%",
      },
      {
        image: bridgeImage,
        imageAlt: "الكوبري المعلق على النيل بمحور روض الفرج",
        badges: ["القاهرة الكبرى", "محور روض الفرج والنيل"],
        title: "محور النيل ومونوريل القاهرة",
        description:
          "أكبر كوبري معلق في العالم مسجل بموسوعة جينيس، مع توريد مسارات ومحطات مونوريل شرق النيل وغرب النيل لمواجهة الاهتزازات الديناميكية.",
        stats: [
          { label: "الكمية الموردة", value: "320,000 طن" },
          { label: "رتبة الأسمنت", value: "CEM I 52.5R Fast Curing" },
          { label: "المقاول العام", value: "تحالف أوراسكوم والمقاولون العرب" },
        ],
        footer: "مطابق لمواصفات الهيئة الهندسية",
      },
      {
        image: waterStationImage,
        imageAlt: "محطة تحيا مصر البحرية وميناء الإسكندرية",
        badges: ["ميناء الإسكندرية", "أرصفة الحاويات والبضائع"],
        title: "محطة تحيا مصر البحرية",
        description:
          "إنشاء الأرصفة البحرية وحواجز الأمواج العميقة المعرضة للأمواج الكبريتية العالية لمياه البحر المتوسط بخلطات مقاومة للتآكل الكيميائي.",
        stats: [
          { label: "الكمية الموردة", value: "180,000 طن" },
          { label: "رتبة الأسمنت", value: "SRC 42.5N Sulfate Resistant" },
          { label: "المقاول العام", value: "بتروجت والمجموعة المصرية للمحطات" },
        ],
        footer: "مقاومة فائقة لأيونات الكلوريد",
      },
      {
        image: monorailImage,
        imageAlt: "مسارات المونوريل العلوية بمدينة العلمين الجديدة",
        badges: ["الساحل الشمالي", "مدينة العلمين الجديدة"],
        title: "أبراج العلمين والبحيرات الصناعية",
        description:
          "ناطحات سحاب شاطئية وأعمال الأنفاق الخدمية والبحيرات، اعتمدت خلطات أسمنتية بپوزلانية خاصة تقلل نفاذية المياه والرطوبة الساحلية.",
        stats: [
          { label: "الكمية الموردة", value: "260,000 طن" },
          { label: "رتبة الأسمنت", value: "CEM II Marine Pozzolanic" },
          { label: "المقاول العام", value: "حسن علام القابضة وأوراسكوم" },
        ],
        footer: "حماية تامة لحدود التسليح الداخلي",
      },
    ],
  },
  quality: {
    eyebrow: "ضمان جودة بلا تهاون",
    title: "معايير الجودة الصارمة والاعتمادات القياسية العالمية",
    description:
      "تخضع منتجات مجموعة صناعات أسمنت مصر (ECI) لأدق بروتوكولات الفحص الميكانيكي والكيميائي داخل مختبراتنا المعتمدة بمعدات الضغط والتحليل الروبوتي لضمان ثبات الإجهادات في أقسى البيئات الإنشائية.",
    stat: { value: "100%", title: "مطابقة للمواصفات المعمارية والهيدروليكية", note: "فحص دوري كل 60 دقيقة في أفران الكلنكر" },
    lab: {
      eyebrow: "المختبر المركزي للفيزياء والكيمياء الإنشائية",
      title: "مصفوفة الفحص الميكانيكي المستمر",
      description:
        "يتم سحب العينات واختبار مقاومة الكسر ونفاذية السطح (Blaine Air Permeability) بدقة متناهية تحت رقابة نخبة من كبار الخبراء والمهندسين الكيميائيين المصريين والدوليين.",
      metric: "58.4 MPa @ 28 يوم",
      metricNote: "معامل الكسر الهيدروليكي القياسي — معتمد للاستخدام الخرساني عالي المقاومة",
      imageAlt: "المختبر المركزي لاختبار مقاومة الضغط لعينات الأسمنت",
    },
    certifications: [
      { badge: "كود البناء المصري", title: "المواصفات القياسية المصرية EOS 4756-1", description: "الاعتماد الإلزامي لأسمنت البناء البورتلاندي من الهيئة المصرية العامة للمواصفات والجودة، بما يضمن مطابقة الخلطة للتربة والبيئة المصرية.", chip: "فحص التمدد والمقاومة الكبريتية", icon: "badge" },
      { badge: "الاتحاد الأوروبي", title: "علامة المطابقة الأوروبية EN 197-1 CE", description: "شهادة التوافق الكامل مع المعايير الإنشائية لدول الاتحاد الأوروبي، ما يتيح تصدير منتجاتنا لمشاريع البنية التحتية لحوض البحر المتوسط وأوروبا.", chip: "رتب CEM I 42.5R / CEM I 52.5N", icon: "globe" },
      { badge: "إدارة الجودة", title: "نظام إدارة الجودة ISO 9001:2015", description: "حوكمة وضبط مسارات التشغيل الصناعي واللوجستي، من مقالع الحجر الجيري بالسويس وبني سويف وحتى تعبئة الشحنات النهائية.", chip: "تتبع رقمي دقيق لكافة الدفعات (Batches)", icon: "award" },
      { badge: "الاستدامة", title: "الإدارة البيئية ISO 14001:2015", description: "تخفيض الانبعاثات الكربونية الناتجة عن حرق الوقود بنسبة 35% عبر استخدام الفلاتر الكهروستاتيكية وإعادة تدوير الطاقة الحرارية المهدرة.", chip: "صفر تصريف صناعي لمجاري المياه", icon: "leaf" },
      { badge: "السلامة والصحة المهنية", title: "ISO 45001:2018", description: "بيئة عمل تخضع لأقصى معايير الوقاية الهندسية لأكثر من 3,800 كادر بشري وفني في مواقع الأفران وخطوط الطحن والأسطول الميداني.", chip: "أكثر من 10 ملايين ساعة عمل دون حوادث", icon: "shield" },
      { badge: "تصريح بيئي", title: "شهادة الأثر البيئي للمنتج (EPD)", description: "إقرار دولي معتمد يوثق البصمة الكربونية المنخفضة للطن الواحد من إنتاجنا، مما يؤهل المقاولين لحصد نقاط تصنيف المباني الخضراء (LEED).", chip: "معتمد من الهيئات الاستشارية الدولية", icon: "file" },
    ],
  },
  news: {
    eyebrow: "مستجدات المجموعة والإعلام",
    title: "آخر الأخبار ومستجدات المجموعة",
    archive: "أرشفة البيانات الصحفية",
    readMore: "قراءة التفاصيل كاملة",
    items: [
      { date: "مايو 2025", category: "الطاقة المتجددة وخفض الكربون", title: "مجموعة ECI تبدأ تشغيل محطة الطاقة الشمسية بقدرة 15 ميجاوات بالعين السخنة", excerpt: "المشروع يغطي 22% من الاحتياجات الكهربائية للمجمع الصناعي الأول، مما يخفض الانبعاثات السنوية بأكثر من 42,000 طن مكافئ من ثاني أكسيد الكربون", icon: "sun" },
      { date: "أبريل 2025", category: "الابتكار والمواد المتقدمة", title: "إطلاق منتج جديد: رتبة الأسمنت البوزولاني عالية الأداء تحصل على الشهادة الوطنية للبناء الأخضر", excerpt: "تركيبة هندسية مستحدثة تتميز بمقاومة استثنائية للأملاح والمياه الجوفية، موجهة بشكل خاص لأساسات مشروعات الساحل الشمالي والدلتا الجديدة.", icon: "flask" },
      { date: "مارس 2025", category: "اللوجستيات والشحن الرقمي", title: "ترقية أسطول الشحن بنظام القياس عن بُعد والموازين المؤتمتة 100%", excerpt: "تطبيق منصة رقمية مركزية لتتبع حمولات الصوامع المتحركة لحظياً وربطها بنظام ERP لدى المقاول لضمان توقيت وصول الإرساليات لمواقع الصب الحرجة.", icon: "truck" },
    ],
  },
  cta: {
    title: "طلب عرض أسعار وتوريد كميات كبرى",
    description: "فريق المبيعات الهندسية جاهز لتقديم عرض سعر تفصيلي وجدول توريد لموقعك خلال 24 ساعة.",
    primary: "طلب عرض أسعار",
    secondary: "تحدث مع مهندس مبيعات",
  },
};

const en: HomeCopy = {
  hero: {
    badge: "Certified to Egyptian Standard EOS 4756-1 and EN 197-1",
    title: "Building the foundations of modern Egypt — engineered strength that lasts",
    description:
      "A leading Egyptian producer of high-performance clinker, CEM I Portland cement and lower-carbon CEM II cement. We supply the country's largest national projects along the Nile with superior structural strength, EOS 4756 certified quality and low-emission cement solutions.",
    explore: "Explore our products",
    quotation: "Request bulk supply",
  },
  statistics: [
    { value: "12.5M", label: "Metric tonnes per year", description: "Peak clinker and cement production capacity", icon: "capacity" },
    { value: "3 sites", label: "Manufacturing complexes & ports", description: "Suez, Beni Suef and Sokhna export berths", icon: "locations" },
    { value: "99.8%", label: "On-time shipments", description: "Automated digital weighbridges running 24/7", icon: "delivery" },
    { value: "-25%", label: "Lower carbon emissions", description: "Through waste-heat recovery and clean energy", icon: "environment" },
  ],
  intro: {
    eyebrow: "A record of engineering excellence",
    title: "More than 35 years of engineering leadership in Egyptian cement",
    paragraphs: [
      "Since our first production line, the group has been shaped by a rigorous engineering mindset: supplying the strongest, most dependable building materials in the Middle East and Africa. We have built an integrated supply chain spanning our own quarries, state-of-the-art calcination kilns and bulk and bagged distribution networks.",
      "Every shipment we supply is 100% laboratory-verified through real-time robotic X-ray analysis (XRF/XRD). This makes us a strategic supplier to the most demanding national projects, including the Suez Canal tunnels, power stations, the metro and the high-speed electric railway.",
    ],
    metrics: [
      { value: "12.5M", label: "Tonnes per year", description: "Leading crushing and calcination capacity" },
      { value: "99.8%", label: "Schedule accuracy", description: "Uninterrupted loading and delivery" },
      { value: "3", label: "Industrial complexes", description: "Own production lines and power plants" },
      { value: "45+", label: "National projects", description: "Approved concrete supply partner" },
    ],
    features: [
      { title: "100% automated lab testing", description: "Continuous round-the-clock spectral analysis" },
      { title: "Certified bulk fleet", description: "450+ trucks equipped with GPS tracking" },
      { title: "Marine export terminals", description: "Direct vessel loading on the Red Sea and Mediterranean" },
      { title: "Green cement initiative", description: "Up to 30% alternative fuel substitution" },
    ],
    certifications: {
      title: "International and Egyptian accreditations",
      description: "Certified to ISO 9001, ISO 14001 and ISO 45001 for quality, environment and occupational safety, and compliant with American ASTM C150 and European EN 197-1 standards.",
      badges: ["EOS 4756", "EN 197-1", "ASTM C150", "ISO 9001:2015"],
    },
  },
  products: {
    eyebrow: "ECI GROUP technical catalogue",
    title: "High-performance standard cement products",
    description:
      "Advanced cement solutions that undergo regular physical and chemical testing in our digital laboratories, ensuring compressive strength and resistance to high stresses for infrastructure, high-rise buildings and specialist concrete works.",
    filters: ["All grades", "Bulk silo", "50 kg bags", "1.5 t jumbo bags"],
    requestQuote: "Request a quote",
    tds: "Technical data sheet (TDS)",
    items: [
      {
        image: bulkSiloImage,
        imageAlt: "Bulk cement storage silos and loading platform",
        badges: ["Building code ECP 203", "EOS 4756-1 / EN 197-1"],
        category: "Ordinary Portland, very high strength",
        title: "High early strength",
        gradeCode: "CEM I 52.5N",
        description: "Ideal for pre-stressed bridges, deep piles and high-rise towers that need early formwork striking.",
        specs: [
          { label: "Compressive strength (28 days)", value: "≥ 52.5 N/mm²" },
          { label: "Compressive strength (2 days)", value: "≥ 20.0 N/mm²" },
          { label: "Initial setting time", value: "≥ 45 min" },
        ],
        packaging: ["Bulk", "50 kg bags", "1.5 t jumbo"],
      },
      {
        image: coastalPlantImage,
        imageAlt: "Coastal cement plant on the Mediterranean",
        badges: ["ASTM C150 Type V", "EOS 4756-1"],
        category: "Salt and sulfate resistant",
        title: "Marine sulfate resistant",
        gradeCode: "SRC (Type V)",
        description: "Formulated to protect reinforcement from corrosion in coastal environments, groundwater, sewer networks and Mediterranean and Red Sea ports.",
        specs: [
          { label: "Tricalcium aluminate content", value: "≤ 3.5%" },
          { label: "Compressive strength (28 days)", value: "≥ 42.5 N/mm²" },
          { label: "Sulfate expansion (14 days)", value: "≤ 0.040%" },
        ],
        packaging: ["Bulk", "50 kg bags", "1.5 t jumbo"],
      },
      {
        image: baggedImage,
        imageAlt: "Bagged cement stacked on loading pallets",
        badges: ["EOS 4756-1 / EN 197-1", "Ministry of Transport approved"],
        category: "Ordinary Portland, rapid hardening",
        title: "Rapid hardening",
        gradeCode: "CEM I 42.5R",
        description: "Designed for ready-mix concrete, block and interlock factories and central batching plants that need fast mould cycles.",
        specs: [
          { label: "Compressive strength (28 days)", value: "≥ 42.5 N/mm²" },
          { label: "Compressive strength (2 days)", value: "≥ 20.0 N/mm²" },
          { label: "Initial setting time", value: "≥ 60 min" },
        ],
        packaging: ["Bulk", "50 kg bags", "1.5 t jumbo"],
      },
      {
        image: constructionSiteImage,
        imageAlt: "Concrete construction site with tower crane",
        badges: ["International EPD", "-28% carbon footprint"],
        category: "Portland limestone, low emission",
        title: "Eco-limestone green",
        gradeCode: "CEM II/B-L 32.5N",
        description: "The best choice for sustainable green building, with excellent workability and strong performance in plastering and standard reinforced concrete.",
        specs: [
          { label: "Compressive strength (28 days)", value: "≥ 32.5 N/mm²" },
          { label: "Carbon emission reduction", value: "-28%" },
          { label: "Initial setting time", value: "≥ 75 min" },
        ],
        packaging: ["Bulk", "50 kg bags"],
      },
    ],
  },
  liveQuality: {
    label: "Live from the central testing lab (Suez & Beni Suef) | Updated every two hours",
    blaine: "Today's average Blaine fineness: 3,680 cm²/g",
    expansion: "Soundness expansion: 0.8 mm (limit ≤ 10 mm)",
    actions: ["Live certificate of analysis (CoA)", "Sample accuracy check"],
  },
  services: {
    eyebrow: "Integrated supply chain",
    title: "Engineering and field logistics services",
    description:
      "We don't just produce cement — we run a smart logistics network that delivers bulk and bagged product to the hardest-to-reach sites and the largest concrete plants without interruption.",
    items: [
      { title: "On-site mix design", description: "A mobile laboratory consultancy team supports contractors on major projects to test optimal mix ratios, achieving exceptional strength with notable cost savings.", tag: "On-site engineering support" },
      { title: "24/7 bulk transport fleet", description: "More than 250 silo trucks and tankers with GPS tracking and automated weighbridge control keep ready-mix plants supplied day and night.", tag: "High discharge capacity" },
      { title: "Rail and sea export", description: "Rail lines run inside our plants, and dedicated berths at Sokhna and Adabiya handle vessels of up to 50,000 tonnes for regional export.", tag: "Domestic and international shipping" },
      { title: "Clinker and pozzolana supply", description: "Large contract supply of grey clinker and natural pozzolana to regional grinding plants, dams and port projects on strict delivery schedules.", tag: "Industrial supply contracts" },
    ],
  },
  factories: {
    eyebrow: "Industrial assets and infrastructure",
    title: "Our strategic industrial complexes",
    description:
      "The group owns and operates advanced manufacturing sites that connect quarrying lines directly to rail corridors and export ports, securing structural cement supply with the highest operational reliability.",
    summary: [
      { label: "12.5 million t", value: "Total annual capacity" },
      { label: "3", value: "Logistics hubs" },
    ],
    cta: "Technical accreditation file",
    items: [
      {
        image: desertFactoryImage,
        imageAlt: "Integrated cement plant complex in Suez",
        badges: ["Largest main complex", "Suez — Ain Sokhna road"],
        location: "Suez — Ain Sokhna road",
        capacityCode: "MT/Y 6.5",
        title: "Ain Sokhna integrated complex",
        description: "A large facility with two dry-process FLSmidth lines and a 15 MW waste-heat recovery plant to reduce its carbon footprint, directly connected to the Sokhna port berth.",
        specs: [
          { label: "Production capacity", value: "6.5 million t / year" },
          { label: "Kiln technology", value: "FLSmidth IKN Clinker" },
          { label: "Self-generated power", value: "15 MW (WHR system)" },
          { label: "Logistics link", value: "Sokhna port berth" },
        ],
        compliance: "Compliant with EN 197-1",
      },
      {
        image: quarryImage,
        imageAlt: "Limestone quarry and mining lines in Beni Suef",
        badges: ["Rail and river shipping", "East Nile industrial zone, Beni Suef"],
        location: "East Nile industrial zone, Beni Suef",
        capacityCode: "MT/Y 4.2",
        title: "Beni Suef tunnel cement plant",
        description: "Specialised in cement for tunnels and deep water structures, with a dedicated rail line and strategic Nile silos serving Upper Egypt and Greater Cairo.",
        specs: [
          { label: "Production capacity", value: "4.2 million t / year" },
          { label: "Engineering focus", value: "Tunnel and water cement" },
          { label: "Rail transport", value: "4 trains per day" },
          { label: "River shipping", value: "Floating Nile silos" },
        ],
        compliance: "Compliant with Egyptian standard 4756",
      },
      {
        image: portTerminalImage,
        imageAlt: "Cement handling and export terminal at El Dekheila port",
        badges: ["International export arm", "El Dekheila port — Alexandria (Mediterranean)"],
        location: "El Dekheila port — Alexandria (Mediterranean)",
        capacityCode: "MT/Y 1.8",
        title: "El Dekheila marine terminal",
        description: "An advanced handling and export terminal serving Africa and the Mediterranean basin, with bulk loading berths running at up to 1,200 tonnes per hour.",
        specs: [
          { label: "Handling capacity", value: "1.8 million t / year" },
          { label: "Bulk loading rate", value: "1,200 t / hour" },
          { label: "Draft depth", value: "14 m (Panamax vessels)" },
          { label: "Storage silos", value: "60,000 t bulk capacity" },
        ],
        compliance: "Compliant with ASTM C150 export standards",
      },
    ],
  },
  projects: {
    eyebrow: "Major national projects",
    banner: "Simultaneous supply to more than 45 vital national sites",
    title: "Helping build Egypt's landmark projects",
    description:
      "Proud supplier to the country's greatest urban corridors and strategic state projects — advanced concrete that stands as a testament to modern engineering from the Nile to the seas.",
    items: [
      {
        image: towersImage,
        imageAlt: "Central Business District towers in the New Administrative Capital",
        badges: ["New Administrative Capital", "Central Business District (CBD)"],
        title: "The Iconic Tower and surrounding towers",
        description: "Supplied the largest continuous concrete pour in the Middle East for the base of the 393-metre tower, using low-heat, high-strength cement.",
        stats: [
          { label: "Quantity supplied", value: "450,000 t" },
          { label: "Cement grade", value: "CEM I 52.5N Ultra-High" },
          { label: "Main contractor", value: "CSCEC with Arab Contractors" },
        ],
        footer: "Pour tested and approved 100%",
      },
      {
        image: bridgeImage,
        imageAlt: "Suspension bridge over the Nile on the Rod El Farag axis",
        badges: ["Greater Cairo", "Rod El Farag axis and the Nile"],
        title: "Nile axis and Cairo Monorail",
        description: "The world's widest suspension bridge recorded by Guinness, plus East and West Nile monorail tracks and stations built to withstand dynamic vibration.",
        stats: [
          { label: "Quantity supplied", value: "320,000 t" },
          { label: "Cement grade", value: "CEM I 52.5R Fast Curing" },
          { label: "Main contractor", value: "Orascom and Arab Contractors alliance" },
        ],
        footer: "Compliant with Engineering Authority specifications",
      },
      {
        image: waterStationImage,
        imageAlt: "Tahya Misr marine terminal at Alexandria port",
        badges: ["Alexandria port", "Container and cargo berths"],
        title: "Tahya Misr marine terminal",
        description: "Quay walls and deep breakwaters exposed to highly sulfated Mediterranean seawater, built with mixes that resist chemical corrosion.",
        stats: [
          { label: "Quantity supplied", value: "180,000 t" },
          { label: "Cement grade", value: "SRC 42.5N Sulfate Resistant" },
          { label: "Main contractor", value: "Petrojet and Egyptian Terminals Group" },
        ],
        footer: "Superior chloride-ion resistance",
      },
      {
        image: monorailImage,
        imageAlt: "Elevated monorail tracks in New Alamein City",
        badges: ["North Coast", "New Alamein City"],
        title: "Alamein towers and artificial lakes",
        description: "Beachfront skyscrapers, service tunnels and lakes built with special pozzolanic cement that reduces water permeability and coastal humidity damage.",
        stats: [
          { label: "Quantity supplied", value: "260,000 t" },
          { label: "Cement grade", value: "CEM II Marine Pozzolanic" },
          { label: "Main contractor", value: "Hassan Allam Holding and Orascom" },
        ],
        footer: "Full protection for internal reinforcement",
      },
    ],
  },
  quality: {
    eyebrow: "Uncompromising quality assurance",
    title: "Strict quality standards and global accreditations",
    description:
      "ECI products undergo precise mechanical and chemical testing in our accredited laboratories, using robotic compression and analysis equipment to guarantee consistent performance in the harshest construction environments.",
    stat: { value: "100%", title: "Compliance with structural and hydraulic specifications", note: "Clinker kilns tested every 60 minutes" },
    lab: {
      eyebrow: "Central laboratory for structural physics and chemistry",
      title: "Continuous mechanical testing matrix",
      description: "Samples are drawn and tested for compressive strength and Blaine air permeability with high precision, supervised by senior Egyptian and international chemists and engineers.",
      metric: "58.4 MPa @ 28 days",
      metricNote: "Standard hydraulic strength — approved for high-strength concrete use",
      imageAlt: "Central laboratory testing the compressive strength of cement samples",
    },
    certifications: [
      { badge: "Egyptian building code", title: "Egyptian Standard EOS 4756-1", description: "Mandatory accreditation for Portland building cement from the Egyptian Organization for Standardization and Quality, ensuring the mix suits Egyptian soil and climate.", chip: "Expansion and sulfate resistance testing", icon: "badge" },
      { badge: "European Union", title: "European conformity mark EN 197-1 CE", description: "Full compliance with EU structural standards, allowing our products to be exported to Mediterranean and European infrastructure projects.", chip: "CEM I 42.5R / CEM I 52.5N grades", icon: "globe" },
      { badge: "Quality management", title: "ISO 9001:2015 quality management", description: "Governance of industrial and logistics operations, from the limestone quarries of Suez and Beni Suef to final shipment packing.", chip: "Precise digital tracking of every batch", icon: "award" },
      { badge: "Sustainability", title: "ISO 14001:2015 environmental management", description: "Fuel-related carbon emissions cut by 35% using electrostatic filters and waste-heat recovery.", chip: "Zero industrial discharge to waterways", icon: "leaf" },
      { badge: "Occupational health & safety", title: "ISO 45001:2018", description: "A workplace held to the highest engineering safety standards for more than 3,800 staff across kilns, grinding lines and the field fleet.", chip: "10+ million hours without incident", icon: "shield" },
      { badge: "Environmental declaration", title: "Environmental Product Declaration (EPD)", description: "A certified international declaration documenting the low carbon footprint per tonne of our product, helping contractors earn green building (LEED) points.", chip: "Approved by international consultancies", icon: "file" },
    ],
  },
  news: {
    eyebrow: "Group news and media",
    title: "Latest news and updates",
    archive: "Press release archive",
    readMore: "Read the full story",
    items: [
      { date: "May 2025", category: "Renewable energy & decarbonisation", title: "ECI starts operating a 15 MW solar power plant at Ain Sokhna", excerpt: "The project covers 22% of the main complex's electricity needs, cutting annual emissions by more than 42,000 tonnes of CO₂ equivalent.", icon: "sun" },
      { date: "April 2025", category: "Innovation & advanced materials", title: "New high-performance pozzolanic cement grade earns national green building certification", excerpt: "A new engineered formula with exceptional resistance to salts and groundwater, designed for foundations on the North Coast and in the New Delta.", icon: "flask" },
      { date: "March 2025", category: "Logistics & digital shipping", title: "Shipping fleet upgraded with telemetry and 100% automated weighbridges", excerpt: "A central digital platform tracks mobile silo loads in real time and links to contractors' ERP systems so deliveries reach critical pours on time.", icon: "truck" },
    ],
  },
  cta: {
    title: "Request a quotation for bulk supply",
    description: "Our engineering sales team is ready to provide a detailed quotation and delivery schedule for your site within 24 hours.",
    primary: "Request a quotation",
    secondary: "Talk to a sales engineer",
  },
};

export const homeContent: Record<"ar" | "en", HomeCopy> = { ar, en };
