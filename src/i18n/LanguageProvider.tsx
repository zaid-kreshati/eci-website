import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "../types/i18n";
import { translate, type TranslationKey } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  direction: "ltr" | "rtl";
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const direction = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.title = translate(locale, "siteName");
  }, [direction, locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      direction,
      toggleLocale: () => setLocale((current) => (current === "en" ? "ar" : "en")),
      t: (key) => translate(locale, key),
    }),
    [direction, locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
