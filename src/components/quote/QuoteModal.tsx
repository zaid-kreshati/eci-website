import { ArrowLeft, ArrowRight, Building2, CheckCircle2, Clock, FileUp, Lock, MapPin, Package, Send, ShieldCheck, X } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";

const QUOTE_EMAIL = "sales-tender@ecigroup.com";
const QUOTE_TRIGGER = /quot|عرض\s*(ال)?سعر|عرض\s*أسعار|تسعير/i;

const copy = {
  en: {
    badge: "Major projects & contractor supply",
    title: "Request a quotation",
    intro: "Official pricing and a delivery schedule from our technical sales office within 4 working hours.",
    perks: ["Reply within 4 working hours", "Direct from Sokhna & Beni Suef plants", "100% EOS / EN compliant"],
    steps: ["Company", "Product", "Project site"],
    stepOf: (n: number) => `Step ${n} of 3`,
    s1: "Company & contact details",
    company: "Company / contractor name", companyPh: "e.g. Nile Construction Co.",
    contact: "Contact person / engineer", contactPh: "Full name",
    email: "Work email", emailPh: "name@company.com",
    phone: "Mobile / WhatsApp", phonePh: "10 1234 5678",
    taxId: "Commercial register / tax ID", optional: "(optional)",
    s2: "Product & cement specification",
    grade: "Cement grade", gradePh: "Select the grade for your project…",
    grades: ["CEM I 52.5N — high early strength", "CEM I 42.5R — rapid hardening", "SRC Type V — sulfate resistant", "CEM II/B-L 32.5N — eco-limestone", "Not sure — need technical advice"],
    delivery: "Delivery & packaging",
    methods: [
      { id: "bulk", title: "Bulk", note: "Silo tankers for batching plants and direct pours" },
      { id: "bags", title: "50 kg bags", note: "Palletised and wrapped against moisture" },
      { id: "jumbo", title: "Jumbo bags", note: "1.5 – 2.0 t bags for ports and open sites" },
    ],
    quantity: "Total quantity (tonnes)", quantityNote: "Minimum 30 t",
    rate: "Daily delivery rate", rates: ["Up to 100 t / day", "100 – 300 t / day", "300 – 600 t / day", "600+ t / day"],
    s3: "Project site & delivery schedule",
    project: "Project name", projectPh: "e.g. New Capital residential towers",
    governorate: "Governorate / site", governoratePh: "e.g. Cairo — New Capital",
    start: "Requested start date",
    notes: "Technical notes or special requirements", notesPh: "Strength class, setting time, site access constraints…",
    attach: "Attach BOQ or tender documents", attachNote: "PDF, DWG, XLSX — up to 25 MB",
    consent: "I agree that ECI may use these details to prepare a quotation and contact me.",
    back: "Back", next: "Continue", submit: "Send quotation request",
    secure: "Your project data is handled confidentially.",
    doneTitle: "Request ready to send",
    doneText: "Your email app has opened with the full request. Our sales engineers will reply within 4 working hours.",
    close: "Close",
  },
  ar: {
    badge: "قطاع المشروعات القومية وتوريدات المقاولين",
    title: "طلب عرض أسعار",
    intro: "عرض أسعار رسمي وجدول توريد من المكتب الفني للمبيعات خلال 4 ساعات عمل.",
    perks: ["رد خلال 4 ساعات عمل", "توريد مباشر من مصانع السخنة وبني سويف", "مطابقة 100% للمواصفات"],
    steps: ["الشركة", "المنتج", "موقع المشروع"],
    stepOf: (n: number) => `خطوة ${n} من 3`,
    s1: "بيانات الشركة وجهة الاتصال",
    company: "اسم الشركة أو المقاول", companyPh: "مثال: شركة النيل للإنشاءات",
    contact: "المسؤول أو المهندس المختص", contactPh: "الاسم بالكامل",
    email: "البريد الإلكتروني للعمل", emailPh: "name@company.com",
    phone: "الهاتف المحمول / واتساب", phonePh: "10 1234 5678",
    taxId: "السجل التجاري أو الرقم الضريبي", optional: "(اختياري)",
    s2: "تفاصيل المنتج ومواصفات الأسمنت",
    grade: "رتبة الأسمنت", gradePh: "اختر الرتبة المناسبة لمشروعك…",
    grades: ["CEM I 52.5N — فائق المقاومة المبكرة", "CEM I 42.5R — سريع التصلد", "SRC Type V — مقاوم للكبريتات", "CEM II/B-L 32.5N — إيكو-ليمسطون", "غير متأكد — أحتاج استشارة فنية"],
    delivery: "طريقة التسليم والتعبئة",
    methods: [
      { id: "bulk", title: "صب سائب", note: "سيارات سيلو لمحطات الخرسانة والصب المباشر" },
      { id: "bags", title: "شكاير 50 كجم", note: "معبأة على بالتات ومحمية من الرطوبة" },
      { id: "jumbo", title: "أكياس جامبو", note: "سعة 1.5 – 2.0 طن للموانئ والمواقع المفتوحة" },
    ],
    quantity: "الكمية الإجمالية (طن)", quantityNote: "الحد الأدنى 30 طن",
    rate: "معدل التوريد اليومي", rates: ["حتى 100 طن / يوم", "100 – 300 طن / يوم", "300 – 600 طن / يوم", "أكثر من 600 طن / يوم"],
    s3: "موقع المشروع والجدول الزمني للتسليم",
    project: "اسم المشروع", projectPh: "مثال: أبراج سكنية بالعاصمة الإدارية",
    governorate: "المحافظة / الموقع", governoratePh: "مثال: القاهرة — العاصمة الإدارية",
    start: "تاريخ بدء التوريد المطلوب",
    notes: "ملاحظات فنية أو متطلبات خاصة", notesPh: "رتبة المقاومة، زمن الشك، قيود الوصول للموقع…",
    attach: "إرفاق المقايسة أو كراسة الشروط", attachNote: "PDF، DWG، XLSX — حتى 25 ميجابايت",
    consent: "أوافق على استخدام ECI لهذه البيانات لإعداد عرض السعر والتواصل معي.",
    back: "رجوع", next: "متابعة", submit: "إرسال طلب عرض الأسعار",
    secure: "بيانات مشروعك تُعامل بسرية تامة.",
    doneTitle: "الطلب جاهز للإرسال",
    doneText: "تم فتح تطبيق البريد بالطلب كاملاً. سيرد مهندسو المبيعات خلال 4 ساعات عمل.",
    close: "إغلاق",
  },
};

const QuoteContext = createContext<{ open: () => void }>({ open: () => {} });
export const useQuoteModal = () => useContext(QuoteContext);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);

  // Any link to /contact whose label is about a quotation opens the modal instead.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href='/contact'], a[href='#enquiry'], [data-quote]");
      if (!link) return;
      if (!link.hasAttribute("data-quote") && !QUOTE_TRIGGER.test(link.textContent ?? "")) return;
      event.preventDefault();
      event.stopPropagation();
      setIsOpen(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <QuoteContext.Provider value={{ open }}>
      {children}
      {isOpen && <QuoteModal onClose={() => setIsOpen(false)} />}
    </QuoteContext.Provider>
  );
}

function QuoteModal({ onClose }: { onClose: () => void }) {
  const { locale } = useLanguage();
  const c = copy[locale];
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [closing, setClosing] = useState(false);
  const [method, setMethod] = useState("bulk");
  const [fileName, setFileName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setClosing(true);
    window.setTimeout(onClose, 220);
  }, [onClose]);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>("input, select, textarea, button")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab" && dialogRef.current) {
        const items = dialogRef.current.querySelectorAll<HTMLElement>("button, input, select, textarea, a[href]");
        const visible = Array.from(items).filter((el) => el.offsetParent !== null && !el.hasAttribute("disabled"));
        const first = visible[0], last = visible[visible.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = overflow; document.removeEventListener("keydown", onKey); previous?.focus(); };
  }, [close]);

  const validateStep = () => {
    const fieldset = formRef.current?.querySelector<HTMLFieldSetElement>(`fieldset[data-step="${step}"]`);
    if (!fieldset) return true;
    for (const field of Array.from(fieldset.querySelectorAll<HTMLInputElement | HTMLSelectElement>("input, select, textarea"))) {
      if (!field.checkValidity()) { field.reportValidity(); return false; }
    }
    return true;
  };

  const next = () => { if (validateStep()) setStep((s) => Math.min(s + 1, 2)); };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step < 2) { next(); return; }
    if (!validateStep()) return;
    const data = new FormData(event.currentTarget);
    const methodTitle = c.methods.find((m) => m.id === method)?.title ?? method;
    const lines = [
      `${c.company}: ${data.get("company")}`, `${c.contact}: ${data.get("contact")}`, `${c.email}: ${data.get("email")}`, `${c.phone}: +20 ${data.get("phone")}`, `${c.taxId}: ${data.get("taxId") || "-"}`, "",
      `${c.grade}: ${data.get("grade")}`, `${c.delivery}: ${methodTitle}`, `${c.quantity}: ${data.get("quantity")}`, `${c.rate}: ${data.get("rate")}`, "",
      `${c.project}: ${data.get("project")}`, `${c.governorate}: ${data.get("governorate")}`, `${c.start}: ${data.get("start") || "-"}`, `${c.notes}: ${data.get("notes") || "-"}`,
      fileName ? `${c.attach}: ${fileName}` : "",
    ];
    window.location.href = `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(`${c.title} — ${data.get("company")}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setDone(true);
  };

  const Prev = locale === "ar" ? ArrowRight : ArrowLeft;
  const Next = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className={`quote-modal${closing ? " is-closing" : ""}`} role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="quote-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="quote-title" ref={dialogRef}>
        <button className="quote-modal__close" type="button" onClick={close} aria-label={c.close}><X size={20} /></button>

        <aside className="quote-modal__aside">
          <p className="quote-modal__badge"><Building2 size={14} />{c.badge}</p>
          <h2 id="quote-title">{c.title}</h2>
          <p>{c.intro}</p>
          <ul>
            {c.perks.map((perk, i) => {
              const Icon = [Clock, Package, ShieldCheck][i];
              return <li key={perk}><span><Icon size={16} /></span>{perk}</li>;
            })}
          </ul>
          <div className="quote-modal__hotline"><small>Hotline</small><strong>16800</strong></div>
        </aside>

        <div className="quote-modal__body">
          {done ? (
            <div className="quote-modal__done" role="status">
              <span><CheckCircle2 size={40} /></span>
              <h3>{c.doneTitle}</h3>
              <p>{c.doneText}</p>
              <button className="button button--primary" type="button" onClick={close}>{c.close}</button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={submit} noValidate={false}>
              <ol className="quote-steps" aria-label={c.stepOf(step + 1)}>
                {c.steps.map((label, i) => (
                  <li key={label} className={i < step ? "is-done" : i === step ? "is-current" : ""} aria-current={i === step ? "step" : undefined}>
                    <span>{i < step ? <CheckCircle2 size={15} /> : i + 1}</span>{label}
                  </li>
                ))}
              </ol>

              <fieldset data-step="0" hidden={step !== 0}>
                <legend><Building2 size={18} />{c.s1}</legend>
                <div className="quote-grid">
                  <label className="span-2">{c.company} *<input name="company" required placeholder={c.companyPh} autoComplete="organization" /></label>
                  <label>{c.contact} *<input name="contact" required placeholder={c.contactPh} autoComplete="name" /></label>
                  <label><span>{c.taxId} <em>{c.optional}</em></span><input name="taxId" inputMode="numeric" placeholder="100-245-890" /></label>
                  <label>{c.email} *<input name="email" type="email" required placeholder={c.emailPh} autoComplete="email" /></label>
                  <label>{c.phone} *<span className="quote-phone"><b dir="ltr">+20</b><input name="phone" type="tel" required pattern="[0-9 ]{9,14}" placeholder={c.phonePh} autoComplete="tel-national" dir="ltr" /></span></label>
                </div>
              </fieldset>

              <fieldset data-step="1" hidden={step !== 1}>
                <legend><Package size={18} />{c.s2}</legend>
                <div className="quote-grid">
                  <label className="span-2">{c.grade} *
                    <select name="grade" required defaultValue=""><option value="" disabled>{c.gradePh}</option>{c.grades.map((g) => <option key={g}>{g}</option>)}</select>
                  </label>
                  <div className="span-2 quote-methods" role="radiogroup" aria-label={c.delivery}>
                    <p>{c.delivery} *</p>
                    <div>
                      {c.methods.map((m) => (
                        <label key={m.id} className={method === m.id ? "is-selected" : ""}>
                          <input type="radio" name="method" value={m.id} checked={method === m.id} onChange={() => setMethod(m.id)} />
                          <strong>{m.title}</strong><small>{m.note}</small>
                        </label>
                      ))}
                    </div>
                  </div>
                  <label>{c.quantity} *<input name="quantity" type="number" min={30} step={10} required placeholder="500" dir="ltr" /><small>{c.quantityNote}</small></label>
                  <label>{c.rate}<select name="rate">{c.rates.map((r) => <option key={r}>{r}</option>)}</select></label>
                </div>
              </fieldset>

              <fieldset data-step="2" hidden={step !== 2}>
                <legend><MapPin size={18} />{c.s3}</legend>
                <div className="quote-grid">
                  <label className="span-2">{c.project} *<input name="project" required placeholder={c.projectPh} /></label>
                  <label>{c.governorate} *<input name="governorate" required placeholder={c.governoratePh} /></label>
                  <label>{c.start}<input name="start" type="date" /></label>
                  <label className="span-2"><span>{c.notes} <em>{c.optional}</em></span><textarea name="notes" rows={3} placeholder={c.notesPh} /></label>
                  <label className="span-2 quote-upload">
                    <input type="file" accept=".pdf,.dwg,.xlsx,.xls,.png,.jpg" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
                    <FileUp size={22} /><strong>{fileName || c.attach}</strong><small>{c.attachNote}</small>
                  </label>
                  <label className="span-2 quote-consent"><input type="checkbox" required />{c.consent}</label>
                </div>
              </fieldset>

              <footer className="quote-modal__footer">
                <p><Lock size={14} />{c.secure}</p>
                <div>
                  {step > 0 && <button className="button button--quiet" type="button" onClick={() => setStep((s) => s - 1)}><Prev size={16} />{c.back}</button>}
                  {step < 2
                    ? <button className="button button--primary" type="button" onClick={next}>{c.next}<Next size={16} /></button>
                    : <button className="button button--primary" type="submit">{c.submit}<Send size={16} /></button>}
                </div>
              </footer>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
