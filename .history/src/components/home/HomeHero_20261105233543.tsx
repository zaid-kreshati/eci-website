import { ArrowRight, Building2, Clock3, Factory, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import type { HomeCopy } from "../../data/homeContent";
import { homeImages } from "../../data/homeContent";
import { ButtonLink } from "../common/Button";
import { Container } from "../common/Container";

export function HomeHero({ content }: { content: HomeCopy["hero"] }) {
  return <section className="home-hero" style={{ backgroundImage: `linear-gradient(90deg, rgb(16 75 52 / 93%), rgb(16 75 52 / 72%) 55%, rgb(16 75 52 / 34%)), url(${homeImages.industrialImage})` }}>
    <Container className="home-hero__inner"><div className="home-hero__content"><p className="eyebrow">{content.eyebrow}</p><h1>{content.title}</h1><p>{content.description}</p><div className="home-hero__actions"><ButtonLink to="/products-services">{content.explore}<ArrowRight aria-hidden="true" size={17} /></ButtonLink><Link className="button button--hero-secondary" to="/contact">{content.quotation}</Link></div></div></Container>
  </section>;
}

const statisticIcons = { capacity: Factory, locations: Building2, delivery: Clock3, environment: Leaf };

export function StatisticsStrip({ statistics }: { statistics: HomeCopy["statistics"] }) {
  return <section className="statistics-strip " aria-label="Company statistics"><Container><div className="statistics-grid">{statistics.map((statistic) => {
    const Icon = statisticIcons[statistic.icon];
    return <article className="statistic-card" key={statistic.icon}><div className="statistic-card__icon"><Icon aria-hidden="true" size={23} /></div><div><strong>{statistic.value}</strong><h2>{statistic.label}</h2><p>{statistic.description}</p></div></article>;
  })}</div></Container></section>;
}
