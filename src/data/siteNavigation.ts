import type { TranslationKey } from "../i18n/translations";

export interface NavigationItem {
  to: string;
  label: TranslationKey;
}

export const publicNavigation: readonly NavigationItem[] = [
  { to: "/", label: "navHome" },
  { to: "/about", label: "navAbout" },
  { to: "/products-services", label: "navProductsServices" },
  { to: "/factories", label: "navFactories" },
  { to: "/projects", label: "navProjects" },
  { to: "/quality", label: "navQuality" },
  { to: "/news", label: "navNews" },
  { to: "/contact", label: "navContact" },
];

export const footerServiceNavigation: readonly NavigationItem[] = [
  { to: "/products-services", label: "footerProductsLink" },
  { to: "/products-services", label: "footerServicesLink" },
  { to: "/quality", label: "navQuality" },
];
