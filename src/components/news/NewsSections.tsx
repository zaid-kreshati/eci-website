import { ArrowRight, FileText, Mail, Newspaper, Search } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { categoryLabel, type NewsArticle, type NewsCategory, type NewsContent } from "../../data/newsContent";
import { homeImages } from "../../data/homeContent";
import { Container } from "../common/Container";

const PAGE_SIZE = 6;

export function NewsHero({ content }: { content: NewsContent }) {
  const topicCount = content.filters.length - 1;
  const stats = [
    { value: String(content.articles.length), label: content.statLabels.stories, note: content.statNotes.stories },
    { value: String(topicCount), label: content.statLabels.topics, note: content.statNotes.topics },
    { value: "PDF", label: content.statLabels.documents, note: content.statNotes.documents },
    { value: "AR / EN", label: content.statLabels.languages, note: content.statNotes.languages },
  ];

  return (
    <section className="news-hero">
      <img className="news-hero__media" src={homeImages.hero} alt="" aria-hidden="true" />
      <div className="news-hero__scrim" aria-hidden="true" />
      <Container className="news-hero__inner">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1 className="news-hero__title">{content.hero.title}</h1>
        <p className="news-hero__description">{content.hero.description}</p>
        <ul className="news-stats">
          {stats.map((item) => (
            <li key={item.label}>
              <strong>{item.value}</strong>
              <h2>{item.label}</h2>
              <p>{item.note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function NewsBrowser({ content }: { content: NewsContent }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | NewsCategory>("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    return content.articles.filter((article) => {
      const categoryMatches = category === "all" || article.category === category;
      const text = `${article.title} ${article.excerpt}`.toLocaleLowerCase();
      return categoryMatches && (needle.length === 0 || text.includes(needle));
    });
  }, [category, content.articles, query]);

  const featured = filtered[0];
  const related = filtered.slice(1, 4);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const selectCategory = (next: "all" | NewsCategory) => {
    setCategory(next);
    setPage(1);
  };

  return (
    <>
      <section className="news-feature section" aria-labelledby="news-feature-title">
        <Container>
          <NewsToolbar
            content={content}
            query={query}
            category={category}
            onQuery={(value) => {
              setQuery(value);
              setPage(1);
            }}
            onCategory={selectCategory}
          />
          {featured ? (
            <article className="news-feature__card">
              <div className="news-feature__copy">
                <p className="news-kicker">{content.featuredKicker}</p>
                <h2 id="news-feature-title">{featured.title}</h2>
                <p className="news-feature__meta">
                  <time dateTime={featured.dateTime}>{featured.date}</time>
                  <span>{categoryLabel(content, featured.category)}</span>
                </p>
                <p className="news-feature__excerpt">{featured.excerpt}</p>
                <dl className="news-facts">
                  {featured.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="news-feature__actions">
                  <Link className="button button--primary" to={`/news/${featured.slug}`}>
                    {content.readStory}
                    <ArrowRight className="icon-flip-rtl" aria-hidden="true" size={17} />
                  </Link>
                  <Link className="button button--secondary" to="/contact">
                    {content.requestDocument}
                  </Link>
                </div>
              </div>
              <div className="news-feature__media">
                <img src={featured.image} alt={featured.imageAlt} />
              </div>
            </article>
          ) : (
            <p className="news-empty">{content.empty}</p>
          )}
          {related.length > 0 ? (
            <div className="news-related">
              <h3>{content.relatedTitle}</h3>
              <div className="news-card-grid">
                {related.map((article) => (
                  <NewsCard article={article} content={content} key={article.slug} />
                ))}
              </div>
            </div>
          ) : null}
          <a className="news-continue" href="#news-archive">
            <span>{content.continueArchive}</span>
            <ArrowRight className="icon-flip-rtl" aria-hidden="true" size={18} />
          </a>
        </Container>
      </section>

      <section className="news-archive section" id="news-archive" aria-labelledby="news-archive-title">
        <Container>
          <div className="news-heading">
            <p className="eyebrow">{content.archive.eyebrow}</p>
            <h2 id="news-archive-title">{content.archive.title}</h2>
            <p>{content.archive.description}</p>
          </div>
          {visible.length > 0 ? (
            <div className="news-card-grid news-card-grid--archive">
              {visible.map((article) => (
                <NewsCard article={article} content={content} key={article.slug} />
              ))}
            </div>
          ) : (
            <p className="news-empty">{content.empty}</p>
          )}
          <nav className="news-pagination" aria-label={content.pageLabel}>
            <button type="button" className="button button--secondary" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={currentPage === 1}>
              {content.previous}
            </button>
            <ol>
              {Array.from({ length: pageCount }, (_, index) => {
                const number = index + 1;
                return (
                  <li key={number}>
                    <button type="button" className={number === currentPage ? "is-active" : undefined} onClick={() => setPage(number)} aria-current={number === currentPage ? "page" : undefined}>
                      {number}
                    </button>
                  </li>
                );
              })}
            </ol>
            <button type="button" className="button button--secondary" onClick={() => setPage((value) => Math.min(pageCount, value + 1))} disabled={currentPage === pageCount}>
              {content.next}
            </button>
          </nav>
          <a className="news-continue" href="#news-media">
            <span>{content.continueMedia}</span>
            <ArrowRight className="icon-flip-rtl" aria-hidden="true" size={18} />
          </a>
        </Container>
      </section>
    </>
  );
}

function NewsToolbar({
  content,
  query,
  category,
  onQuery,
  onCategory,
}: {
  content: NewsContent;
  query: string;
  category: "all" | NewsCategory;
  onQuery: (value: string) => void;
  onCategory: (value: "all" | NewsCategory) => void;
}) {
  return (
    <div className="news-toolbar">
      <label className="news-search">
        <span className="visually-hidden">{content.searchLabel}</span>
        <Search aria-hidden="true" size={18} />
        <input value={query} onChange={(event) => onQuery(event.target.value)} placeholder={content.searchPlaceholder} type="search" />
      </label>
      <div className="filter-tabs" role="group" aria-label={content.searchLabel}>
        {content.filters.map((filter) => (
          <button key={filter.id} type="button" className={`filter-tab${category === filter.id ? " is-active" : ""}`} onClick={() => onCategory(filter.id)} aria-pressed={category === filter.id}>
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function NewsCard({ article, content }: { article: NewsArticle; content: NewsContent }) {
  return (
    <article className="news-story">
      <Link to={`/news/${article.slug}`} className="news-story__media">
        <img src={article.image} alt={article.imageAlt} />
      </Link>
      <div className="news-story__body">
        <p className="news-story__meta">
          <time dateTime={article.dateTime}>{article.date}</time>
          <span>{categoryLabel(content, article.category)}</span>
        </p>
        <h3>
          <Link to={`/news/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.excerpt}</p>
        <Link className="card-link" to={`/news/${article.slug}`}>
          {content.readStory}
          <ArrowRight className="icon-flip-rtl" aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  );
}

export function NewsMedia({ content }: { content: NewsContent }) {
  const [submitted, setSubmitted] = useState(false);
  const media = content.media;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="news-media" id="news-media">
      <div className="news-media__hero">
        <img src={homeImages.hero} alt="" />
        <div className="news-media__scrim" />
        <Container className="news-media__hero-copy">
          <p className="eyebrow">{media.eyebrow}</p>
          <h2>{media.title}</h2>
          <p>{media.description}</p>
        </Container>
      </div>
      <Container className="news-media__grid">
        <article>
          <h3>
            <Newspaper aria-hidden="true" size={18} />
            {media.policyTitle}
          </h3>
          <ul className="news-policy">
            {media.policyItems.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h3>
            <FileText aria-hidden="true" size={18} />
            {media.assetsTitle}
          </h3>
          <p className="news-media__note">{media.assetsNote}</p>
          <ul className="news-assets">
            {media.assets.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
          <Link className="button button--secondary" to="/contact">
            {media.requestAssets}
          </Link>
        </article>
        <form className="news-newsletter" onSubmit={onSubmit}>
          <h3>
            <Mail aria-hidden="true" size={18} />
            {media.newsletterTitle}
          </h3>
          <p>{media.newsletterDescription}</p>
          <label>
            {media.nameLabel}
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            {media.emailLabel}
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <button className="button button--primary" type="submit">
            {media.subscribe}
          </button>
          {submitted ? <p className="news-newsletter__status">{media.newsletterPending}</p> : null}
        </form>
        <article>
          <h3>{media.contactsTitle}</h3>
          <ul className="news-routes">
            {media.contacts.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
          <Link className="card-link" to="/contact">
            {content.requestDocument}
            <ArrowRight className="icon-flip-rtl" aria-hidden="true" size={16} />
          </Link>
        </article>
      </Container>
      <Container className="news-faq">
        <h3>{media.faqTitle}</h3>
        {media.faqs.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </Container>
    </section>
  );
}

export function NewsArticleView({ content, article }: { content: NewsContent; article: NewsArticle }) {
  const others = content.articles.filter((item) => item.slug !== article.slug).slice(0, 3);
  const index = content.articles.findIndex((item) => item.slug === article.slug);
  const previous = content.articles[index - 1];
  const next = content.articles[index + 1];

  return (
    <article className="news-article">
      <Container className="news-article__crumb">
        <Link to="/news">{content.article.back}</Link>
        <span aria-hidden="true">/</span>
        <span>{categoryLabel(content, article.category)}</span>
      </Container>
      <Container className="news-article__intro">
        <p className="eyebrow">{categoryLabel(content, article.category)}</p>
        <h1>{article.title}</h1>
        <p className="news-feature__meta">
          <time dateTime={article.dateTime}>{article.date}</time>
        </p>
      </Container>
      <Container className="news-article__layout">
        <div>
          <img className="news-article__hero" src={article.image} alt={article.imageAlt} />
          <h2>{content.article.factsTitle}</h2>
          <dl className="news-facts news-facts--article">
            {article.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <h2>{content.article.bodyTitle}</h2>
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h2>{content.article.specsTitle}</h2>
          <table className="news-specs">
            <tbody>
              {article.specs.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>{content.article.galleryTitle}</h2>
          <ul className="news-gallery">
            {article.gallery.map((item) => (
              <li key={item.caption}>
                <img src={item.src} alt={item.alt} />
                <span>{item.caption}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside>
          <p className="news-kicker">{content.featuredKicker}</p>
          <p>{article.excerpt}</p>
          <Link className="button button--primary" to="/contact">
            {content.requestDocument}
          </Link>
          <h2>{content.article.moreTitle}</h2>
          <ul>
            {others.map((item) => (
              <li key={item.slug}>
                <Link to={`/news/${item.slug}`}>{item.title}</Link>
                <time dateTime={item.dateTime}>{item.date}</time>
              </li>
            ))}
          </ul>
        </aside>
      </Container>
      <Container className="news-article__pager">
        {previous ? (
          <Link to={`/news/${previous.slug}`}>
            <span>{content.previous}</span>
            <strong>{previous.title}</strong>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/news/${next.slug}`}>
            <span>{content.next}</span>
            <strong>{next.title}</strong>
          </Link>
        ) : (
          <span />
        )}
      </Container>
    </article>
  );
}
