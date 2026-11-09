import { LogisticsAndQuote, ProductAssurances, ProductCatalogue, ProductsServicesCta, ProductsServicesHero, ProductServices } from "../components/products/ProductsServicesSections";
import { productsServicesContent } from "../data/productsServicesContent";
import { useLanguage } from "../i18n/LanguageProvider";

export function ProductsServicesPage() { const { locale } = useLanguage(); const content = productsServicesContent[locale]; return <><ProductsServicesHero content={content} /><ProductAssurances content={content} /><ProductServices content={content} /><ProductCatalogue content={content} /><LogisticsAndQuote content={content} /><ProductsServicesCta content={content} /></>; }
