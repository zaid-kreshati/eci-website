import { useLanguage } from "../../i18n/LanguageProvider";

export function LanguageSwitcher() {
  const { t, locale, toggleLocale } = useLanguage();
  return (
    <button
      className={`language-switcher language-switcher--${locale}`}
      type="button"
      onClick={toggleLocale}
      aria-label={`Switch language: ${t("languageSwitch")}`}
    >
      <span className="language-switcher__pill" aria-hidden="true" />
      <span className={`language-switcher__option${locale === "en" ? " is-active" : ""}`} lang="en">EN</span>
      <span className={`language-switcher__option${locale === "ar" ? " is-active" : ""}`} lang="ar">ع</span>
    </button>
  );
}
