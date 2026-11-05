import { Globe, MessageCircle, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { footerServiceNavigation, publicNavigation } from "../../data/siteNavigation";
import { useLanguage } from "../../i18n/LanguageProvider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container site-footer__content">
        <div className="site-footer__brand">
          <Link className="brand" to="/" aria-label={t("siteName")}>
            <span className="brand__mark" aria-hidden="true">C</span>
            <span className="brand__name">{t("siteName")}</span>
          </Link>
          <p>{t("footerDescription")}</p>
          <div className="social-links" aria-label={t("socialLinks")}>
            <a href="#" aria-label={t("socialNetworkPlaceholder")} onClick={(event) => event.preventDefault()}><Globe aria-hidden="true" size={18} /></a>
            <a href="#" aria-label={t("socialCommunityPlaceholder")} onClick={(event) => event.preventDefault()}><MessageCircle aria-hidden="true" size={18} /></a>
            <a href="#" aria-label={t("socialVideoPlaceholder")} onClick={(event) => event.preventDefault()}><Play aria-hidden="true" size={18} /></a>
          </div>
        </div>
        <div className="site-footer__column">
          <h2>{t("footerQuickLinks")}</h2>
          <ul>{publicNavigation.slice(0, 5).map(({ to, label }) => <li key={to}><Link to={to}>{t(label)}</Link></li>)}</ul>
        </div>
        <div className="site-footer__column">
          <h2>{t("footerProductsServices")}</h2>
          <ul>{footerServiceNavigation.map(({ to, label }, index) => <li key={`${to}-${index}`}><Link to={to}>{t(label)}</Link></li>)}</ul>
        </div>
        <div className="site-footer__column site-footer__contact">
          <h2>{t("footerContact")}</h2>
          <p>{t("contactPlaceholder")}</p>
          <Link to="/contact">{t("navContact")}</Link>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container"><span>© {new Date().getFullYear()} {t("siteName")}</span><span>{t("footerLabel")}</span></div>
      </div>
    </footer>
  );
}
