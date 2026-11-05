import { RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { router } from "./routes/router";

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
