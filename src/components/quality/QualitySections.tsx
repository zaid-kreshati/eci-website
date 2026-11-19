import { ArrowRight, Award, BadgeCheck, Beaker, CheckCircle2, ClipboardList, FileCheck2, FlaskConical, Gauge, Leaf, ShieldCheck } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import type { QualityContent } from "../../data/qualityContent";
import { qualityImages } from "../../data/qualityContent";
import { Container } from "../common/Container";

const assuranceIcons = [Gauge, FlaskConical, ClipboardList, FileCheck2];
const certificateIcons = [Award, Leaf, ShieldCheck, BadgeCheck, FlaskConical, FileCheck2];

export function QualityHero({ content }: { content: QualityContent }) {
  return (
    <section className="quality-hero">
      <img className="quality-hero__media" src={qualityImages.lab} alt="" aria-hidden="true" />
      <div className="quality-hero__scrim" aria-hidden="true" />
      <Container className="quality-hero__inner">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1 className="quality-hero__title">{content.hero.title}</h1>
        <p className="quality-hero__description">{content.hero.description}</p>
        <div className="quality-hero__actions">
          <a className="button button--primary" href="#certifications">
            {content.hero.primary}
            <ArrowRight className="icon-flip-rtl" aria-hidden="true" size={17} />
          </a>
          <Link className="button button--hero-secondary" to="/contact">
            {content.hero.secondary}
            <ArrowRight className="icon-flip-rtl" aria-hidden="true" size={17} />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function QualityAssurances({ content }: { content: QualityContent }) {
  return (
    <section className="quality-assurances">
      <Container>
        <ul className="quality-assurances__grid">
          {content.assurances.map((item, index) => {
            const Icon = assuranceIcons[index] ?? CheckCircle2;
            return (
              <li key={item.title}>
                <span className="quality-assurances__icon">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function QualityStats({ content }: { content: QualityContent }) {
  return (
    <section className="quality-section section">
      <Container>
        <div className="quality-heading">
          <p className="eyebrow">{content.stats.eyebrow}</p>
          <h2 className="section-heading__title">{content.stats.title}</h2>
          <p className="section-heading__description">{content.stats.description}</p>
        </div>
        <ul className="quality-stats__grid">
          {content.stats.items.map((item) => (
            <li key={item.label}>
              <strong>{item.value}</strong>
              <h3>{item.label}</h3>
              <p>{item.note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function QualityTesting({ content }: { content: QualityContent }) {
  return (
    <section className="quality-section quality-section--surface section" id="laboratory">
      <Container>
        <div className="quality-heading">
          <p className="eyebrow">{content.testing.eyebrow}</p>
          <h2 className="section-heading__title">{content.testing.title}</h2>
          <p className="section-heading__description">{content.testing.description}</p>
        </div>
        <div className="quality-testing__grid">
          <ol className="quality-steps">
            {content.testing.steps.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside className="quality-metric">
            <img src={qualityImages.lab} alt={content.testing.imageAlt} loading="lazy" />
            <div className="quality-metric__body">
              <h3>
                <Beaker aria-hidden="true" size={18} />
                {content.testing.metric.title}
              </h3>
              <p>{content.testing.metric.description}</p>
              <dl>
                {content.testing.metric.readings.map((reading) => (
                  <div key={reading.label}>
                    <dt>
                      <span>{reading.label}</span>
                      <small>{reading.detail}</small>
                    </dt>
                    <dd>{reading.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export function QualityCertificates({ content }: { content: QualityContent }) {
  return (
    <section className="quality-section section" id="certifications">
      <Container>
        <div className="quality-heading">
          <p className="eyebrow">{content.certificates.eyebrow}</p>
          <h2 className="section-heading__title">{content.certificates.title}</h2>
          <p className="section-heading__description">{content.certificates.description}</p>
          <p className="quality-certificates__note">
            <CheckCircle2 aria-hidden="true" size={16} />
            {content.certificates.note}
          </p>
        </div>
        <ul className="quality-certificates__grid">
          {content.certificates.items.map((item, index) => {
            const Icon = certificateIcons[index] ?? Award;
            return (
              <li key={item.title}>
                <span className="quality-certificates__icon">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <p className="quality-certificates__badge">{item.badge}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="badge badge--neutral">{item.chip}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function QualityLabCheck({ content }: { content: QualityContent }) {
  const [batch, setBatch] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const batchId = useId();
  const dateId = useId();
  const status = submitted ? content.labCheck.status.notFound : content.labCheck.status.pending;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="quality-labcheck section" id="batch-check">
      <Container className="quality-labcheck__grid">
        <aside>
          <p className="eyebrow">{content.labCheck.eyebrow}</p>
          <h2>{content.labCheck.title}</h2>
          <p>{content.labCheck.description}</p>
          <p className="quality-labcheck__reference">
            {content.labCheck.reference.label}: <strong>{content.labCheck.reference.value}</strong>
          </p>
        </aside>
        <form className="quality-labcheck__form" onSubmit={onSubmit}>
          <label htmlFor={batchId}>
            {content.labCheck.fields[0].label}
            <input
              id={batchId}
              name="batch"
              type="text"
              value={batch}
              onChange={(event) => {
                setBatch(event.target.value);
                setSubmitted(false);
              }}
              placeholder={content.labCheck.fields[0].placeholder}
              autoComplete="off"
            />
          </label>
          <label htmlFor={dateId}>
            {content.labCheck.fields[1].label}
            <input id={dateId} name="date" type="date" />
          </label>
          <button className="button button--primary" type="submit" disabled={batch.trim().length === 0}>
            {content.labCheck.submit}
            <ArrowRight className="icon-flip-rtl" aria-hidden="true" size={17} />
          </button>
          <p className="quality-labcheck__status" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </Container>
    </section>
  );
}

export function QualityCta({ content }: { content: QualityContent }) {
  return (
    <section className="quality-cta">
      <Container className="quality-cta__inner">
        <div>
          <h2>{content.cta.title}</h2>
          <p>{content.cta.description}</p>
        </div>
        <div className="quality-cta__actions">
          <Link className="button button--primary" to="/contact">
            {content.cta.primary}
          </Link>
          <Link className="button button--hero-secondary" to="/contact">
            {content.cta.secondary}
          </Link>
        </div>
      </Container>
    </section>
  );
}
