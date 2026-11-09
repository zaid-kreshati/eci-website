import { NewsBrowser, NewsHero, NewsMedia } from "../components/news/NewsSections";
import { newsContent } from "../data/newsContent";
import { useLanguage } from "../i18n/LanguageProvider";

export function NewsPage() {
  const { locale } = useLanguage();
  const content = newsContent[locale];

  return (
    <>
      <NewsHero content={content} />
      <NewsBrowser content={content} />
      <NewsMedia content={content} />
    </>
  );
}
