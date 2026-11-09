import type { Locale } from "../types/i18n";
import { homeImages } from "./homeContent";

export interface QualityContent {
  hero: { eyebrow: string; title: string; description: string; primary: string; secondary: string };
  assurances: { title: string; description: string }[];
  stats: { eyebrow: string; title: string; description: string; items: { value: string; label: string; note: string }[] };
  testing: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
    steps: { title: string; description: string }[];
    metric: { title: string; description: string; readings: { label: string; value: string; detail: string }[] };
  };
  certificates: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    items: { badge: string; title: string; description: string; chip: string }[];
  };
  labCheck: {
    eyebrow: string;
    title: string;
    description: string;
    fields: { label: string; placeholder: string }[];
    submit: string;
    reference: { label: string; value: string };
    status: { pending: string; checking: string; ready: string; notFound: string };
  };
  cta: { title: string; description: string; primary: string; secondary: string };
}

export const qualityContent: Record<Locale, QualityContent> = {
  en: {
    hero: {
      eyebrow: "Quality assurance",
      title: "Documented testing at every stage of production",
      description:
        "Quality is managed as a process rather than a final check. Samples are drawn from the quarry, the kiln and the finished product, tested in our laboratories and recorded against the batch before dispatch.",
      primary: "View certifications",
      secondary: "Request documentation",
    },
    assurances: [
      { title: "Process control", description: "Parameters are monitored continuously across crushing, burning and grinding." },
      { title: "Laboratory testing", description: "Physical and chemical analysis is carried out on each production run." },
      { title: "Batch traceability", description: "Every shipment is recorded against its test results and dispatch date." },
      { title: "Technical documentation", description: "Certificates and test reports are supplied on request." },
    ],
    stats: {
      eyebrow: "Quality at a glance",
      title: "The measures we hold ourselves to",
      description:
        "The figures below describe our production and testing discipline. Certificate numbers, laboratory scope and reference values are being verified and will be published once confirmed against current documentation.",
      items: [
        { value: "100%", label: "Batches sampled", note: "Every production batch is sampled before release." },
        { value: "60 min", label: "Testing interval", note: "Routine laboratory checks during kiln operation." },
        { value: "28 days", label: "Strength verification", note: "Compressive strength confirmed at the 28-day mark." },
        { value: "EN 197-1", label: "Product standard", note: "Reference standard for cement specification and testing." },
      ],
    },
    testing: {
      eyebrow: "Laboratory and testing",
      title: "How a batch is verified",
      description:
        "Testing follows a fixed sequence so results stay comparable between batches and over time. Any deviation is flagged before the material moves to the next stage.",
      imageAlt: "Laboratory technician testing cement samples",
      steps: [
        { title: "Sampling", description: "Representative samples are taken from the raw material feed and the finished cement stream." },
        { title: "Chemical analysis", description: "Composition, loss on ignition and insoluble residue are measured against the product specification." },
        { title: "Physical testing", description: "Fineness, setting time, soundness and compressive strength are tested on prepared specimens." },
        { title: "Release decision", description: "Results are reviewed against the specification before a batch is approved for dispatch." },
      ],
      metric: {
        title: "Reference test values",
        description: "A sample of the parameters recorded for a production batch, shown to illustrate the format of our test reports.",
        readings: [
          { label: "Fineness (Blaine)", value: "--", detail: "Surface area of the ground cement, reported in cm2/g." },
          { label: "Initial setting time", value: "--", detail: "Time from mixing to the start of setting." },
          { label: "Soundness (expansion)", value: "--", detail: "Volume stability, quoted as an upper limit." },
          { label: "Compressive strength, 28 d", value: "--", detail: "Strength class verification for the declared grade." },
        ],
      },
    },
    certificates: {
      eyebrow: "Certifications and standards",
      title: "Standards our products are specified against",
      description:
        "Our management systems and products are aligned with national and international standards. Certificate details are published once verified against the current issue.",
      note: "Certificate numbers, issuing bodies and validity dates are pending verification.",
      items: [
        { badge: "Management system", title: "Quality management", description: "Covers the processes from raw material acceptance through to dispatch and customer documentation.", chip: "Details pending" },
        { badge: "Management system", title: "Environmental management", description: "Sets out how environmental performance is measured, reviewed and improved across operations.", chip: "Details pending" },
        { badge: "Management system", title: "Occupational health and safety", description: "Defines the safety practice expected at kilns, mills and across the haulage fleet.", chip: "Details pending" },
        { badge: "Product standard", title: "Egyptian standard specification", description: "The national specification covering composition, strength classes and test methods.", chip: "Edition pending" },
        { badge: "Product standard", title: "European product standard", description: "The reference used for the CE marking declared for construction cement products.", chip: "Edition pending" },
        { badge: "Product standard", title: "American specification", description: "Applies to the grades declared for sulfate-resisting and specialist applications.", chip: "Scope pending" },
      ],
    },
    labCheck: {
      eyebrow: "Lab check",
      title: "Check a batch test status",
      description: "Enter the batch reference printed on the delivery note to see which stage of laboratory testing it has reached.",
      fields: [
        { label: "Batch reference", placeholder: "e.g. L-000000" },
        { label: "Delivery date", placeholder: "" },
      ],
      submit: "Check status",
      reference: { label: "Example reference", value: "L-000000" },
      status: {
        pending: "Enter a batch reference to begin.",
        checking: "Checking laboratory records",
        ready: "Results released",
        notFound: "No record found for this reference. Batch lookup is not yet connected to live laboratory data.",
      },
    },
    cta: {
      title: "Need test reports or a certificate copy?",
      description: "Our technical team can supply the documentation relevant to your project.",
      primary: "Request documents",
      secondary: "Contact ECI Cement",
    },
  },
  ar: {
    hero: {
      eyebrow: "ضمان الجودة",
      title: "الاختبار موثق في كل مرحلة من مراحل الإنتاج",
      description:
        "تدار الجودة كعملية متكاملة وليست فحصا نهائيا. تؤخذ العينات من المحجر والفرن والمنتج النهائي، وتختبر في معاملنا وتسجل مقابل رقم الدفعة قبل الشحن.",
      primary: "استعرض الاعتمادات",
      secondary: "اطلب المستندات الفنية",
    },
    assurances: [
      { title: "ضبط العمليات", description: "تتم متابعة المعلمات بشكل مستمر في التكسير والحرق والطحن." },
      { title: "الفحص المعملي", description: "يجرى تحليل فيزيائي وكيميائي لكل دفعة إنتاج." },
      { title: "تتبع الدفعات", description: "تسجل كل شحنة مقابل نتائج اختبارها وتاريخ الشحن." },
      { title: "التوثيق الفني", description: "الشهادات وتقارير الاختبار متاحة بناء على الطلب." },
    ],
    stats: {
      eyebrow: "الجودة في أرقام",
      title: "المعايير التي نلتزم بها",
      description:
        "تصف الارقام التالية انضباطنا في الإنتاج والفحص. ارقام الشهادات ونطاق المعامل والقيم المرجعية قيد التحقق وستنشر بعد تأكيدها وفق الوثائق السارية.",
      items: [
        { value: "100%", label: "دفعات تم اخذ عينات منها", note: "تؤخذ عينة من كل دفعة إنتاج قبل الإفراج عنها." },
        { value: "60 دقيقة", label: "فاصل الفحص", note: "فحوصات معملية دورية أثناء تشغيل الفرن." },
        { value: "28 يوما", label: "التحقق من المقاومة", note: "يؤكد إجهاد الضغط عند اليوم الثامن والعشرين." },
        { value: "EN 197-1", label: "مواصفة المنتج", note: "المواصفة المرجعية لخصائص الاسمنت وطرق اختباره." },
      ],
    },
    testing: {
      eyebrow: "المعمل والفحص",
      title: "كيف يتم التحقق من الدفعة",
      description:
        "يتبع الفحص تسلسلا ثابتا لتكون النتائج قابلة للمقارنة بين الدفعات وعلى مدى الزمن. وينبه إلى اي انحراف قبل انتقال المادة للمرحلة التالية.",
      imageAlt: "فني معمل يختبر عينات الاسمنت",
      steps: [
        { title: "اخذ العينات", description: "تؤخذ عينات ممثلة من تغذية المواد الخام ومن خط الاسمنت النهائي." },
        { title: "التحليل الكيميائي", description: "تقاس التركيبة والفقد بالحرق والمتبقي غير الذائب مقابل مواصفة المنتج." },
        { title: "الفحص الفيزيائي", description: "تختبر النعومة وزمن الشك والثبات ومقاومة الضغط على عينات مجهزة." },
        { title: "قرار الإفراج", description: "تراجع النتائج مقابل المواصفة قبل اعتماد الدفعة للشحن." },
      ],
      metric: {
        title: "قيم اختبار مرجعية",
        description: "عينة من المعلمات المسجلة لدفعة إنتاج، تعرض لتوضيح شكل تقارير الاختبار لدينا.",
        readings: [
          { label: "النعومة (بلين)", value: "--", detail: "المساحة السطحية للاسمنت المطحون، وتقاس بوحدة سم2/جم." },
          { label: "زمن الشك الابتدائي", value: "--", detail: "الزمن من الخلط إلى بداية الشك." },
          { label: "الثبات (التمدد)", value: "--", detail: "ثبات الحجم، ويقاس كحد اعلى." },
          { label: "مقاومة الضغط عند 28 يوما", value: "--", detail: "التحقق من رتبة المقاومة وفق الرتبة المعلنة." },
        ],
      },
    },
    certificates: {
      eyebrow: "الاعتمادات والمواصفات",
      title: "المواصفات التي تحدد على اساسها منتجاتنا",
      description:
        "تتوافق انظمة ادارتنا ومنتجاتنا مع المواصفات الوطنية والدولية. وتنشر تفاصيل الشهادات بعد التحقق منها وفق الإصدار الساري.",
      note: "ارقام الشهادات والجهات المانحة وتواريخ الصلاحية قيد التحقق.",
      items: [
        { badge: "نظام إدارة", title: "إدارة الجودة", description: "يغطي العمليات من استلام المواد الخام حتى الشحن وتوثيق معلومات العملاء.", chip: "التفاصيل قيد الاستكمال" },
        { badge: "نظام إدارة", title: "الإدارة البيئية", description: "يحدد كيفية قياس الاداء البيئي ومراجعته وتحسينه في جميع العمليات.", chip: "التفاصيل قيد الاستكمال" },
        { badge: "نظام إدارة", title: "السلامة والصحة المهنية", description: "يحدد ممارسات السلامة المطلوبة في الافران والمطاحن واسطول النقل.", chip: "التفاصيل قيد الاستكمال" },
        { badge: "مواصفة منتج", title: "المواصفة القياسية المصرية", description: "المواصفة الوطنية التي تغطي التركيب ورتب المقاومة وطرق الاختبار.", chip: "الإصدار قيد التحقق" },
        { badge: "مواصفة منتج", title: "المواصفة الاوروبية للمنتج", description: "المرجع المستخدم في علامة المطابقة الاوروبية المعلنة لمنتجات اسمنت التشييد.", chip: "الإصدار قيد التحقق" },
        { badge: "مواصفة منتج", title: "المواصفة الامريكية", description: "تطبق على الرتب المعلنة للتطبيقات المقاومة للكبريتات والمتخصصة.", chip: "النطاق قيد التحقق" },
      ],
    },
    labCheck: {
      eyebrow: "فحص الدفعة",
      title: "تحقق من حالة اختبار دفعة",
      description: "ادخل رقم الدفعة المطبوع على مستند التسليم لمعرفة المرحلة التي بلغها فحصها المعملي.",
      fields: [
        { label: "رقم الدفعة", placeholder: "مثال: L-000000" },
        { label: "تاريخ التسليم", placeholder: "" },
      ],
      submit: "تحقق من الحالة",
      reference: { label: "رقم مرجعي للتجربة", value: "L-000000" },
      status: {
        pending: "ادخل رقم الدفعة للبدء.",
        checking: "جار مراجعة السجلات المعملية",
        ready: "تم إصدار النتائج",
        notFound: "لا يوجد سجل لهذا الرقم. البحث عن الدفعات غير مرتبط بعد ببيانات المعمل الحية.",
      },
    },
    cta: {
      title: "هل تحتاج تقارير اختبار او نسخة من شهادة؟",
      description: "يمكن لفريقنا الفني تزويدك بالمستندات المرتبطة بمشروعك.",
      primary: "اطلب المستندات",
      secondary: "تواصل مع ECI للاسمنت",
    },
  },
};

export const qualityImages = { lab: homeImages.lab } as const;
