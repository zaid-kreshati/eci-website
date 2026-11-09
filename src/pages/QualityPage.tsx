import {
  QualityAssurances,
  QualityCertificates,
  QualityCta,
  QualityHero,
  QualityLabCheck,
  QualityStats,
  QualityTesting,
} from "../components/quality/QualitySections";
import { qualityContent } from "../data/qualityContent";
import { useLanguage } from "../i18n/LanguageProvider";

export function QualityPage() {
  const { locale } = useLanguage();
  const content = qualityContent[locale];

  return (
    <>
      <QualityHero content={content} />
      <QualityAssurances content={content} />
      <QualityStats content={content} />
      <QualityTesting content={content} />
      <QualityCertificates content={content} />
      <QualityLabCheck content={content} />
      <QualityCta content={content} />
    </>
  );
}
