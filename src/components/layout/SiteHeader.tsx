import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { publicNavigation } from "../../data/siteNavigation";
import { useLanguage } from "../../i18n/LanguageProvider";
import { ButtonLink } from "../common/Button";
import { LanguageSwitcher } from "../common/LanguageSwitcher";
import { ThemeToggle } from "../common/ThemeToggle";

export function SiteHeader() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__inner container">
        <NavLink
          className="brand"
          to="/"
          aria-label={`${t("siteName")} — ${t("navHome")}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="brand__mark" aria-hidden="true">
            C
          </span>
          <span className="brand__name">{t("siteName")}</span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label={t(isMenuOpen ? "menuClose" : "menuOpen")}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={22} />
          ) : (
            <Menu aria-hidden="true" size={22} />
          )}
        </button>

        <nav
          className={`primary-navigation${isMenuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label={t("primaryNavigation")}
        >
          {publicNavigation.map(({ to, label }) => (
            <NavLink
              className={({ isActive }) =>
                `primary-navigation__link${isActive ? " is-active" : ""}`
              }
              end={to === "/"}
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(label)}
            </NavLink>
          ))}
          <div className="navigation-actions">
            <ThemeToggle />
            <LanguageSwitcher />
            <ButtonLink to="/contact" variant="primary" className="header-quotation" onClick={() => setIsMenuOpen(false)}>
              {t("requestQuotation")}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
