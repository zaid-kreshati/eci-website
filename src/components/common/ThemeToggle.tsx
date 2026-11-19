import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../i18n/LanguageProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { locale } = useLanguage();
  const dark = theme === "dark";
  const label = locale === "ar" ? (dark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن") : dark ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button className={`theme-toggle${dark ? " is-dark" : ""}`} type="button" onClick={toggle} aria-label={label} title={label} aria-pressed={dark}>
      <span className="theme-toggle__thumb" aria-hidden="true">
        {dark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  );
}
