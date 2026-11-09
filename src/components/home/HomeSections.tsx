import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Factory,
  FileText,
  FlaskConical,
  Globe2,
  Leaf,
  MapPin,
  ShieldCheck,
  Sun,
  Truck,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import type {
  CertificationItem,
  FactoryItem,
  HomeCopy,
  NewsItem,
  ProductItem,
  ProjectItem,
} from "../../data/homeContent";
import { homeImages } from "../../data/homeContent";
import { SectionHeading } from "../common/SectionHeading";

const certificationIcons: Record<CertificationItem["icon"], LucideIcon> = {
  badge: BadgeCheck,
  leaf: Leaf,
  shield: ShieldCheck,
  award: Award,
  file: FileText,
  globe: Globe2,
};

const newsIcons: Record<NewsItem["icon"], LucideIcon> = {
  sun: Sun,
  flask: FlaskConical,
  truck: Truck,
};

function SpecList({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="spec-list">
      {rows.map((row) => (
        <div className="spec-list__row" key={row.label}>
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ImageBadges({ badges }: { badges: string[] }) {
  return (
    <div className="image-badges">
      {badges.map((badge) => (
        <span className="image-badges__item" key={badge}>
          {badge}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 3. Company introduction and capabilities
 * ------------------------------------------------------------------ */
export function CompanyIntroduction({ content }: { content: HomeCopy["intro"] }) {
  return (
    <section className="section intro" aria-labelledby="intro-title">
      <div className="container intro__inner">
        <header className="intro__header">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-heading__title" id="intro-title">
            {content.title}
          </h2>
        </header>

        <div className="intro__body">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="metric-grid">
          {content.metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <h3>{metric.label}</h3>
              <p>{metric.description}</p>
            </article>
          ))}
        </div>

        <div className="feature-grid">
          {content.features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <CheckCircle2 aria-hidden="true" size={20} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="certification-banner">
          <div>
            <h3>{content.certifications.title}</h3>
            <p>{content.certifications.description}</p>
          </div>
          <ul className="certification-banner__badges">
            {content.certifications.badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * 4. Product portfolio
 * ------------------------------------------------------------------ */
export function ProductsSection({ content }: { content: HomeCopy["products"] }) {
  return (
    <section className="section products" aria-labelledby="products-title">
      <div className="container">
        <SectionHeading
          id="products-title"
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="filter-tabs" role="tablist" aria-label={content.eyebrow}>
          {content.filters.map((filter, index) => (
            <button
              className={`filter-tab${index === 0 ? " is-active" : ""}`}
              type="button"
              role="tab"
              aria-selected={index === 0}
              key={filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {content.items.map((product: ProductItem) => (
            <article className="product-card" key={product.gradeCode}>
              <div className="product-card__media">
                <img src={product.image} alt={product.imageAlt} loading="lazy" />
                <ImageBadges badges={product.badges} />
              </div>
              <div className="product-card__body">
                <p className="product-card__category">{product.category}</p>
                <h3>{product.title}</h3>
                <p className="product-card__grade">{product.gradeCode}</p>
                <p className="product-card__description">{product.description}</p>
                <SpecList rows={product.specs} />
                <ul className="packaging-chips">
                  {product.packaging.map((chip) => (
                    <li key={chip}>{chip}</li>
                  ))}
                </ul>
                <div className="product-card__actions">
                  <Link className="button button--primary" to="/contact">
                    {content.requestQuote}
                  </Link>
                  <Link className="button button--quiet" to="/products-services">
                    {content.tds}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Live quality readout strip
 * ------------------------------------------------------------------ */
export function LiveQualityStrip({ content }: { content: HomeCopy["liveQuality"] }) {
  return (
    <section className="live-strip" aria-label={content.label}>
      <div className="container live-strip__inner">
        <div className="live-strip__status">
          <span className="live-dot" aria-hidden="true" />
          <p>{content.label}</p>
        </div>
        <div className="live-strip__metrics">
          <p>{content.blaine}</p>
          <p>{content.expansion}</p>
        </div>
        <div className="live-strip__actions">
          {content.actions.map((action) => (
            <Link className="button button--quiet" to="/quality" key={action}>
              {action}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Integrated supply services
 * ------------------------------------------------------------------ */
export function ServicesSection({ content }: { content: HomeCopy["services"] }) {
  return (
    <section className="section services" aria-labelledby="services-title">
      <div className="container">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 className="section-heading__title" id="services-title">
          {content.title}
        </h2>
        <p className="section-heading__description">{content.description}</p>

        <div className="service-grid">
          {content.items.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__icon" aria-hidden="true">
                <Truck size={24} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-card__tag">{service.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * 5. Factories and industrial capabilities
 * ------------------------------------------------------------------ */
export function FactoriesSection({ content }: { content: HomeCopy["factories"] }) {
  return (
    <section className="section factories" aria-labelledby="factories-title">
      <div className="container">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 className="section-heading__title" id="factories-title">
          {content.title}
        </h2>
        <p className="section-heading__description">{content.description}</p>

        <div className="factories__summary">
          {content.summary.map((item) => (
            <p key={item.label}>
              <strong>{item.label}</strong> {item.value}
            </p>
          ))}
        </div>

        <div className="factory-grid">
          {content.items.map((factory: FactoryItem) => (
            <article className="factory-card" key={factory.title}>
              <div className="factory-card__media">
                <img src={factory.image} alt={factory.imageAlt} loading="lazy" />
                <ImageBadges badges={factory.badges} />
                <span className="factory-card__capacity">{factory.capacityCode}</span>
              </div>
              <div className="factory-card__body">
                <p className="factory-card__location">
                  <MapPin aria-hidden="true" size={15} />
                  {factory.location}
                </p>
                <h3>{factory.title}</h3>
                <p>{factory.description}</p>
                <SpecList rows={factory.specs} />
                <div className="factory-card__footer">
                  <span>{factory.compliance}</span>
                  <Link className="button button--quiet" to="/factories">
                    {content.cta}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * 6. Projects and major developments
 * ------------------------------------------------------------------ */
export function ProjectsSection({ content }: { content: HomeCopy["projects"] }) {
  return (
    <section className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <p className="eyebrow">{content.eyebrow}</p>
        <p className="projects__banner">{content.banner}</p>
        <h2 className="section-heading__title" id="projects-title">
          {content.title}
        </h2>
        <p className="section-heading__description">{content.description}</p>

        <div className="project-grid">
          {content.items.map((project: ProjectItem) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__media">
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
                <ImageBadges badges={project.badges} />
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <SpecList rows={project.stats} />
                <p className="project-card__footer">
                  <CheckCircle2 aria-hidden="true" size={15} />
                  {project.footer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * 7. Quality and certifications
 * ------------------------------------------------------------------ */
export function QualitySection({ content }: { content: HomeCopy["quality"] }) {
  return (
    <section className="section quality" aria-labelledby="quality-title">
      <div className="container">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 className="section-heading__title" id="quality-title">
          {content.title}
        </h2>
        <p className="section-heading__description">{content.description}</p>

        <div className="quality__stat">
          <strong>{content.stat.value}</strong>
          <div>
            <h3>{content.stat.title}</h3>
            <p>{content.stat.note}</p>
          </div>
        </div>

        <div className="quality__lab">
          <img src={homeImages.lab} alt={content.lab.imageAlt} loading="lazy" />
          <div>
            <p className="eyebrow">{content.lab.eyebrow}</p>
            <h3>{content.lab.title}</h3>
            <p>{content.lab.description}</p>
            <div className="quality__metric">
              <strong>{content.lab.metric}</strong>
              <p>{content.lab.metricNote}</p>
            </div>
          </div>
        </div>

        <div className="certification-grid">
          {content.certifications.map((item: CertificationItem) => {
            const Icon = certificationIcons[item.icon];
            return (
              <article className="certification-card" key={item.title}>
                <div className="certification-card__badge">
                  <Icon aria-hidden="true" size={20} />
                  <span>{item.badge}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="certification-card__chip">{item.chip}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * 8a. News
 * ------------------------------------------------------------------ */
export function NewsSection({ content }: { content: HomeCopy["news"] }) {
  return (
    <section className="section news" aria-labelledby="news-title">
      <div className="container">
        <div className="news__header">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="section-heading__title" id="news-title">
              {content.title}
            </h2>
          </div>
          <Link className="button button--quiet" to="/news">
            {content.archive}
          </Link>
        </div>

        <div className="news-grid">
          {content.items.map((item: NewsItem) => {
            const Icon = newsIcons[item.icon];
            return (
              <article className="news-card" key={item.title}>
                <div className="news-card__meta">
                  <span className="news-card__date">{item.date}</span>
                  <span className="news-card__category">
                    <Icon aria-hidden="true" size={15} />
                    {item.category}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <Link className="news-card__link" to="/news">
                  {content.readMore}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * 8b. Quotation call to action
 * ------------------------------------------------------------------ */
export function QuotationSection({ content }: { content: HomeCopy["cta"] }) {
  return (
    <section className="quotation-band" aria-labelledby="cta-title">
      <div className="container quotation-band__inner">
        <div>
          <h2 id="cta-title">{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <div className="quotation-band__actions">
          <Link className="button button--primary" to="/contact">
            {content.primary}
          </Link>
          <Link className="button button--hero-secondary" to="/contact">
            {content.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}

export const homeSectionIcons = { Building2, Waves, Factory, Clock3 };
