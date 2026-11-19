import { CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { homeImages } from "../data/homeContent";
import { useLanguage } from "../i18n/LanguageProvider";

const CONTACT_EMAIL = "info@ecigroup.com";

const copy = {
  en: {
    eyebrow: "Contact ECI Cement",
    title: "Talk to our sales, technical and logistics teams",
    intro: "Whether you are planning a project, requesting a quotation or need technical guidance, our teams respond within one business day.",
    channels: [
      { icon: Phone, label: "Sales hotline", value: "16800", note: "Sunday – Thursday, 8:00 – 17:00" },
      { icon: Mail, label: "Email", value: CONTACT_EMAIL, note: "Replies within 24 hours" },
      { icon: MessageCircle, label: "WhatsApp", value: "+20 10 9988 7766", note: "Orders and delivery follow-up" },
      { icon: Clock, label: "Response time", value: "< 4 working hours", note: "For project supply requests" },
    ],
    formTitle: "Send us a message",
    formIntro: "Share a few details and the right team will get back to you.",
    name: "Full name", company: "Company", email: "Email", phone: "Phone", topic: "Subject",
    topics: ["Request a quotation", "Technical consultation", "Logistics & delivery", "Careers", "Other"],
    message: "Message", submit: "Send message",
    sent: "Thank you — your email app has opened with your message ready to send.",
    officesTitle: "Our locations",
    offices: [
      { name: "Head office", address: "New Cairo, Cairo, Egypt" },
      { name: "Ain Sokhna industrial complex", address: "Suez Canal Economic Zone, Suez" },
      { name: "Beni Suef plant", address: "East Nile industrial area, Beni Suef" },
    ],
  },
  ar: {
    eyebrow: "تواصل مع ECI للأسمنت",
    title: "تحدث مع فرق المبيعات والدعم الفني واللوجستيات",
    intro: "سواء كنت تخطط لمشروع أو تطلب عرض سعر أو تحتاج إلى استشارة فنية، تستجيب فرقنا خلال يوم عمل واحد.",
    channels: [
      { icon: Phone, label: "الخط الساخن للمبيعات", value: "16800", note: "الأحد – الخميس، 8:00 – 17:00" },
      { icon: Mail, label: "البريد الإلكتروني", value: CONTACT_EMAIL, note: "الرد خلال 24 ساعة" },
      { icon: MessageCircle, label: "واتساب", value: "+20 10 9988 7766", note: "متابعة الطلبات والتوريد" },
      { icon: Clock, label: "زمن الاستجابة", value: "أقل من 4 ساعات عمل", note: "لطلبات توريد المشروعات" },
    ],
    formTitle: "أرسل لنا رسالة",
    formIntro: "شارك بعض التفاصيل وسيتواصل معك الفريق المختص.",
    name: "الاسم بالكامل", company: "الشركة", email: "البريد الإلكتروني", phone: "الهاتف", topic: "الموضوع",
    topics: ["طلب عرض سعر", "استشارة فنية", "اللوجستيات والتوريد", "الوظائف", "أخرى"],
    message: "الرسالة", submit: "إرسال الرسالة",
    sent: "شكراً لك — تم فتح تطبيق البريد ورسالتك جاهزة للإرسال.",
    officesTitle: "مواقعنا",
    offices: [
      { name: "المقر الرئيسي", address: "القاهرة الجديدة، القاهرة، مصر" },
      { name: "مجمع العين السخنة الصناعي", address: "المنطقة الاقتصادية لقناة السويس، السويس" },
      { name: "مصنع بني سويف", address: "المنطقة الصناعية شرق النيل، بني سويف" },
    ],
  },
};

export function ContactPage() {
  const { locale } = useLanguage();
  const c = copy[locale];
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${data.get("topic")} — ${data.get("name")}`;
    const body = [
      `${c.name}: ${data.get("name")}`,
      `${c.company}: ${data.get("company")}`,
      `${c.email}: ${data.get("email")}`,
      `${c.phone}: ${data.get("phone")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <section className="factories-page-hero">
        <img src={homeImages.portTerminal} alt="" aria-hidden="true" />
        <div />
        <div className="container">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>{c.title}</h1>
          <p>{c.intro}</p>
        </div>
      </section>

      <section className="contact-channels">
        <div className="container">
          {c.channels.map(({ icon: Icon, label, value, note }) => (
            <article key={label}>
              <span><Icon size={20} /></span>
              <div>
                <p>{label}</p>
                <strong dir="ltr">{value}</strong>
                <small>{note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-main section">
        <div className="container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>{c.formTitle}</h2>
            <p>{c.formIntro}</p>
            <div className="contact-form__grid">
              <label>{c.name}<input name="name" required autoComplete="name" /></label>
              <label>{c.company}<input name="company" autoComplete="organization" /></label>
              <label>{c.email}<input name="email" type="email" required autoComplete="email" /></label>
              <label>{c.phone}<input name="phone" type="tel" autoComplete="tel" /></label>
              <label className="contact-form__wide">{c.topic}
                <select name="topic">{c.topics.map((t) => <option key={t}>{t}</option>)}</select>
              </label>
              <label className="contact-form__wide">{c.message}<textarea name="message" rows={5} required /></label>
            </div>
            <button className="button button--primary" type="submit">{c.submit}<Send size={16} /></button>
            {sent && <p className="contact-form__sent" role="status"><CheckCircle2 size={18} />{c.sent}</p>}
          </form>

          <aside className="contact-offices">
            <h2>{c.officesTitle}</h2>
            {c.offices.map((office) => (
              <article key={office.name}>
                <MapPin size={18} />
                <div>
                  <h3>{office.name}</h3>
                  <p>{office.address}</p>
                </div>
              </article>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
