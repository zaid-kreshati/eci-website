import { ArrowRight, Building2, Clock3, Factory, Leaf, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import type { HomeCopy } from "../../data/homeContent";
import { homeImages } from "../../data/homeContent";
import { ButtonLink } from "../common/Button";
import { Container } from "../common/Container";

export function HomeHero({ content }: { content: HomeCopy["hero"] }) {
  return (
    <section className="home-hero">
      <img className="home-hero__media" src={homeImages.hero} alt="" aria-hidden="true" />
      <div className="home-hero__scrim" aria-hidden="true" />
      <Container className="home-hero__inner">
        <div className="home-hero__content">
          <p className="home-hero__badge">{content.badge}</p>
          <h1 className="home-hero__title">{content.title}</h1>
          <p className="home-hero__description">{content.description}</p>
          <div className="home-hero__actions">
            <ButtonLink className="button--lg" to="/products-services">
              {content.explore}
              <ArrowRight className="icon-flip-rtl" aria-hidden="true" size={18} />
            </ButtonLink>
            <Link className="button button--lg button--hero-secondary" to="/contact">
              {content.quotation}
              <ArrowRight className="icon-flip-rtl" aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

const statisticIcons: Record<HomeCopy["statistics"][number]["icon"], LucideIcon> = {
  capacity: Factory,
  locations: Building2,
  delivery: Clock3,
  environment: Leaf,
};

export function StatisticsStrip({ statistics }: { statistics: HomeCopy["statistics"] }) {
  return (
    <section className="statistics-strip" aria-label="Company statistics">
      <Container>
        <div className="statistics-grid">
          {statistics.map((statistic) => {
            const Icon = statisticIcons[statistic.icon];
            return (
              <article className="statistic-card" key={statistic.icon}>
                <span className="statistic-card__icon">
                  <Icon aria-hidden="true" size={24} />
                </span>
                <div className="statistic-card__body">
                  <strong>{statistic.value}</strong>
                  <h2>{statistic.label}</h2>
                  <p>{statistic.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
