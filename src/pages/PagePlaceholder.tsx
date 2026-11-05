import { useLanguage } from "../i18n/LanguageProvider";
import type { TranslationKey } from "../i18n/translations";

interface PagePlaceholderProps {
  titleKey: TranslationKey;
}

export function PagePlaceholder({ titleKey }: PagePlaceholderProps) {
  const { t } = useLanguage();

  return (
    <section className="page-placeholder" aria-labelledby="page-title">
      <p className="page-placeholder__eyebrow">{t("siteName")}</p>
      <h1 id="page-title">{t(titleKey)}</h1>
      <p className="page-placeholder__description">{t("pageIntro")}</p>
    </section>
  );
}
