import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageProvider";

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <section className="page-placeholder" aria-labelledby="page-title">
      <p className="page-placeholder__eyebrow">404</p>
      <h1 id="page-title">{t("notFoundTitle")}</h1>
      <Link className="text-link" to="/">
        {t("navHome")}
      </Link>
    </section>
  );
}
