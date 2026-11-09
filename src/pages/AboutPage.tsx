import { AboutCta, AboutHero, AboutHistory, AboutOperations, AboutPerformance, AboutPurpose, AboutStandards, AboutStrategy } from "../components/about/AboutSections";
import { aboutContent } from "../data/aboutContent";
import { useLanguage } from "../i18n/LanguageProvider";

export function AboutPage() {
  const { locale } = useLanguage();
  const content = aboutContent[locale];
  return <><AboutHero content={content} /><AboutHistory content={content} /><AboutPurpose content={content} /><AboutPerformance content={content} /><AboutOperations content={content} /><AboutStrategy content={content} /><AboutStandards content={content} /><AboutCta content={content} /></>;
}
