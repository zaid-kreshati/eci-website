import { useLanguage } from "../i18n/LanguageProvider";
import { homeContent } from "../data/homeContent";
import { HomeHero, StatisticsStrip } from "../components/home/HomeHero";
import {
  CompanyIntroduction,
  FactoriesSection,
  NewsSection,
  ProductsSection,
  ProjectsSection,
  QualitySection,
  QuotationSection,
} from "../components/home/HomeSections";

export function HomePage() {
  const { locale } = useLanguage();
  const content = homeContent[locale];
  return <><HomeHero content={content.hero} /><StatisticsStrip statistics={content.statistics} /><CompanyIntroduction content={content.intro} /><ProductsSection content={content.products} /><FactoriesSection content={content.factories} /><ProjectsSection content={content.projects} /><QualitySection content={content.quality} /><NewsSection content={content.news} /><QuotationSection content={content.cta} /></>;
}
