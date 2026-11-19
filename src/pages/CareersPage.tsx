import { ArrowRight, Briefcase, GraduationCap, HardHat, HeartHandshake, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { homeImages } from "../data/homeContent";
import { useLanguage } from "../i18n/LanguageProvider";

const copy = {
  en: {
    eyebrow: "Careers at ECI Cement",
    title: "Build the infrastructure of modern Egypt with us",
    intro: "Join engineers, operators and specialists who keep production safe, efficient and dependable every day.",
    whyTitle: "Why work with us",
    why: [
      { icon: HardHat, title: "Safety first", text: "A zero-harm culture with continuous training on every site." },
      { icon: GraduationCap, title: "Learning & growth", text: "Structured development programmes and technical mentoring." },
      { icon: HeartHandshake, title: "Supportive teams", text: "Collaborative teams across plants, labs and offices." },
    ],
    openTitle: "Open positions",
    openIntro: "Don't see a role that fits? Send us your CV and we'll keep it on file.",
    roles: [
      { title: "Process Engineer", team: "Production", place: "Ain Sokhna" },
      { title: "Quality Control Chemist", team: "Laboratory", place: "Beni Suef" },
      { title: "Maintenance Supervisor", team: "Engineering", place: "Ain Sokhna" },
      { title: "Logistics Coordinator", team: "Supply chain", place: "Cairo" },
    ],
    apply: "Apply",
    cta: "Ready to start your next chapter?",
    ctaAction: "Send your CV",
  },
  ar: {
    eyebrow: "الوظائف في ECI للأسمنت",
    title: "شارك معنا في بناء البنية التحتية لمصر الحديثة",
    intro: "انضم إلى مهندسين وفنيين ومتخصصين يحافظون على إنتاج آمن وكفء وموثوق كل يوم.",
    whyTitle: "لماذا تعمل معنا",
    why: [
      { icon: HardHat, title: "السلامة أولاً", text: "ثقافة صفر إصابات مع تدريب مستمر في كل موقع." },
      { icon: GraduationCap, title: "التعلم والتطور", text: "برامج تطوير منظمة وإرشاد فني متخصص." },
      { icon: HeartHandshake, title: "فرق داعمة", text: "تعاون بين المصانع والمعامل والمكاتب." },
    ],
    openTitle: "الوظائف المتاحة",
    openIntro: "لم تجد الوظيفة المناسبة؟ أرسل سيرتك الذاتية وسنحتفظ بها.",
    roles: [
      { title: "مهندس عمليات", team: "الإنتاج", place: "العين السخنة" },
      { title: "كيميائي مراقبة جودة", team: "المعمل", place: "بني سويف" },
      { title: "مشرف صيانة", team: "الهندسة", place: "العين السخنة" },
      { title: "منسق لوجستيات", team: "سلاسل الإمداد", place: "القاهرة" },
    ],
    apply: "تقدم الآن",
    cta: "هل أنت مستعد لبدء فصل جديد في مسيرتك؟",
    ctaAction: "أرسل سيرتك الذاتية",
  },
};

export function CareersPage() {
  const { locale } = useLanguage();
  const c = copy[locale];
  return (
    <>
      <section className="factories-page-hero">
        <img src={homeImages.quarry} alt="" aria-hidden="true" />
        <div />
        <div className="container">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>{c.title}</h1>
          <p>{c.intro}</p>
        </div>
      </section>

      <section className="careers-why section">
        <div className="container">
          <h2>{c.whyTitle}</h2>
          <div>
            {c.why.map(({ icon: Icon, title, text }) => (
              <article key={title}><span><Icon size={22} /></span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-roles section">
        <div className="container">
          <h2>{c.openTitle}</h2>
          <p>{c.openIntro}</p>
          <ul>
            {c.roles.map((role) => (
              <li key={role.title}>
                <div>
                  <h3>{role.title}</h3>
                  <p><Briefcase size={15} />{role.team}<MapPin size={15} />{role.place}</p>
                </div>
                <Link className="button button--secondary" to="/contact">{c.apply}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="factories-page-cta">
        <div className="container">
          <h2>{c.cta}</h2>
          <Link className="button button--primary" to="/contact">{c.ctaAction}<ArrowRight className="icon-flip-rtl" size={17} /></Link>
        </div>
      </section>
    </>
  );
}
