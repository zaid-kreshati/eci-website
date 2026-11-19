import { Outlet } from "react-router-dom";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage } from "../i18n/LanguageProvider";

export function MainLayout() {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        {t("skipToContent")}
      </a>
      <SiteHeader />
      <main className="main-content" id="main-content">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
