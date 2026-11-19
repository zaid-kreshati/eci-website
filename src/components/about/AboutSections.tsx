import { ArrowRight, CheckCircle2, Compass, Leaf, ShieldCheck, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import type { AboutContent } from "../../data/aboutContent";
import { Container } from "../common/Container";

const principleIcons = [ShieldCheck, Leaf, Users, Target];

export function AboutHero({ content }: { content: AboutContent }) {
  return <section className="about-hero"><div className="about-hero__media" aria-hidden="true" /><div className="about-hero__scrim" aria-hidden="true" /><Container className="about-hero__inner"><p className="eyebrow">{content.eyebrow}</p><h1>{content.title}</h1><p>{content.description}</p></Container></section>;
}

export function AboutHistory({ content }: { content: AboutContent }) {
  return <section className="about-history section"><Container><header className="about-section-header"><p className="eyebrow">{content.eyebrow}</p><h2>{content.historyTitle}</h2></header><div className="about-timeline">{content.history.map((item, index) => <article className="about-timeline__item" key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></Container></section>;
}

export function AboutPurpose({ content }: { content: AboutContent }) {
  return <section className="about-purpose section"><Container><div className="about-purpose__statements"><article><Compass aria-hidden="true" size={28} /><h2>{content.vision.title}</h2><p>{content.vision.description}</p></article><article><Target aria-hidden="true" size={28} /><h2>{content.mission.title}</h2><p>{content.mission.description}</p></article></div><div className="about-principles">{content.principles.map((principle, index) => { const Icon = principleIcons[index]; return <article key={principle.title}><Icon aria-hidden="true" size={21} /><h3>{principle.title}</h3><p>{principle.description}</p></article>; })}</div></Container></section>;
}

export function AboutPerformance({ content }: { content: AboutContent }) {
  return <section className="about-performance"><Container><p className="eyebrow">{content.eyebrow}</p><h2>{content.performanceTitle}</h2><div>{content.performance.map((item) => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}</div></Container></section>;
}

export function AboutOperations({ content }: { content: AboutContent }) {
  return <section className="about-operations section"><Container className="about-operations__grid"><div><p className="eyebrow">{content.operations.eyebrow}</p><h2>{content.operations.title}</h2><p>{content.operations.description}</p><div className="about-operations__highlights">{content.operations.highlights.map((highlight) => <span key={highlight}><CheckCircle2 aria-hidden="true" size={17} />{highlight}</span>)}</div></div><img src={content.operations.image} alt={content.operations.imageAlt} loading="lazy" /></Container></section>;
}

export function AboutStrategy({ content }: { content: AboutContent }) {
  return <section className="about-strategy section"><Container><header className="about-section-header"><p className="eyebrow">{content.eyebrow}</p><h2>{content.strategy.title}</h2><p>{content.strategy.description}</p></header><div>{content.strategy.items.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></Container></section>;
}

export function AboutStandards({ content }: { content: AboutContent }) {
  return <section className="about-standards section"><Container><div><p className="eyebrow">{content.eyebrow}</p><h2>{content.standards.title}</h2><p>{content.standards.description}</p></div><ul>{content.standards.items.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" size={18} />{item}</li>)}</ul></Container></section>;
}

export function AboutCta({ content }: { content: AboutContent }) {
  return <section className="about-cta"><Container className="about-cta__inner"><div><h2>{content.cta.title}</h2><p>{content.cta.description}</p></div><div><Link className="button button--primary" to="/contact">{content.cta.primary}<ArrowRight className="icon-flip-rtl" aria-hidden="true" size={17} /></Link><Link className="button button--hero-secondary" to="/contact">{content.cta.secondary}<ArrowRight className="icon-flip-rtl" aria-hidden="true" size={17} /></Link></div></Container></section>;
}
