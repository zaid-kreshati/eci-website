import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { NewsArticleView } from "../components/news/NewsSections";
import { newsContent } from "../data/newsContent";
import { useLanguage } from "../i18n/LanguageProvider";
import { Container } from "../components/common/Container";

export function NewsArticlePage() {
  const { slug } = useParams();
  const { locale } = useLanguage();
  const content = newsContent[locale];
  const article = content.articles.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, locale]);

  if (!article) {
    return (
      <Container className="news-missing">
        <h1>{content.article.notFoundTitle}</h1>
        <p>{content.article.notFoundDescription}</p>
        <Link className="button button--primary" to="/news">
          {content.article.back}
        </Link>
      </Container>
    );
  }

  return <NewsArticleView article={article} content={content} />;
}
