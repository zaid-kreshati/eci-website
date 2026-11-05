import { Badge } from "../components/common/Badge";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Button } from "../components/common/Button";
import { Card } from "../components/common/Card";
import { Container } from "../components/common/Container";
import { LoadingState } from "../components/common/LoadingState";
import { PageHero } from "../components/common/PageHero";
import { SectionHeading } from "../components/common/SectionHeading";
import { useLanguage } from "../i18n/LanguageProvider";

export function StyleGuidePage() {
  const { locale } = useLanguage();
  const isArabic = locale === "ar";
  const copy = isArabic
    ? { eyebrow: "نظام التصميم", title: "دقة صناعية، مصممة للثقة.", description: "مكونات أساسية واضحة ومتسقة لتجربة مؤسسية رصينة.", component: "المكونات", colors: "الألوان", primary: "أساسي", secondary: "ثانوي", quiet: "هادئ", loading: "جارٍ التحميل", cardOne: "محتوى منظم", cardTwo: "تدرج بصري", cardThree: "واجهة قابلة للتوسع" }
    : { eyebrow: "Design system", title: "Industrial precision, built for trust.", description: "A clear, consistent component foundation for a confident corporate experience.", component: "Components", colors: "Colour palette", primary: "Primary", secondary: "Secondary", quiet: "Quiet", loading: "Loading", cardOne: "Structured content", cardTwo: "Visual hierarchy", cardThree: "Scalable interface" };

  return <>
    <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} breadcrumbs={<Breadcrumb items={[{ label: isArabic ? "الرئيسية" : "Home", to: "/" }, { label: copy.eyebrow }]} />} />
    <Container className="style-guide">
      <div className="style-guide__intro"><SectionHeading eyebrow={copy.eyebrow} title={isArabic ? "لغة بصرية مؤسسية." : "A corporate visual language."} description={isArabic ? "ألوان عملية، مسافات مدروسة، وحواف هادئة تناسب قطاع الصناعة والبناء." : "Functional colour, measured spacing, and restrained edges suited to industry and construction."} /></div>
      <section className="style-guide__section" aria-labelledby="colour-heading"><p className="style-guide__label" id="colour-heading">{copy.colors}</p><div className="style-guide__swatches"><div className="swatch" style={{ background: "#176B45", color: "white" }}>Primary<br />#176B45</div><div className="swatch" style={{ background: "#104B34", color: "white" }}>Deep green<br />#104B34</div><div className="swatch" style={{ background: "#252B27", color: "white" }}>Charcoal<br />#252B27</div><div className="swatch" style={{ background: "#F2F3F1" }}>Background<br />#F2F3F1</div><div className="swatch" style={{ background: "#D8DAD6" }}>Cement grey<br />#D8DAD6</div><div className="swatch" style={{ background: "#FFFFFF", border: "1px solid #D8DAD6" }}>White<br />#FFFFFF</div></div></section>
      <section className="style-guide__section" aria-labelledby="components-heading"><p className="style-guide__label" id="components-heading">{copy.component}</p><div className="style-guide__row"><Button>{copy.primary}</Button><Button variant="secondary">{copy.secondary}</Button><Button variant="quiet">{copy.quiet}</Button><Badge>ACTIVE</Badge><Badge tone="neutral">NEUTRAL</Badge><LoadingState label={copy.loading} /></div></section>
      <section className="style-guide__section" aria-label={copy.component}><div className="style-guide__grid"><Card title={copy.cardOne} description={isArabic ? "بطاقة بسيطة تحدد التسلسل الهرمي للمعلومات دون تشتيت." : "A simple card establishes information hierarchy without visual noise."} /><Card title={copy.cardTwo} description={isArabic ? "العناوين والنصوص تظل مقروءة عبر الشاشات المختلفة." : "Headings and supporting copy stay legible at every screen size."} /><Card title={copy.cardThree} description={isArabic ? "تُعاد المكونات نفسها في الصفحات المستقبلية باستمرار." : "The same components can be applied consistently to future pages."} /></div></section>
    </Container>
  </>;
}
