import { ArrowRight } from "lucide-react";
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
