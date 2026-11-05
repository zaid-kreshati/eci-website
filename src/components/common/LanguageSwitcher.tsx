import { Languages } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";

export function LanguageSwitcher() {
  const { t, toggleLocale } = useLanguage();

  return (
    <button
      className="language-switcher"
      type="button"
      onClick={toggleLocale}
      aria-label={`Switch language: ${t("languageSwitch")}`}
    >
      <Languages aria-hidden="true" size={17} />
      <span>{t("languageSwitch")}</span>
    </button>
  );
}
