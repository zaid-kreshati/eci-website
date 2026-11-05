import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PagePlaceholder } from "../pages/PagePlaceholder";
import { StyleGuidePage } from "../pages/StyleGuidePage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/style-guide", element: <StyleGuidePage /> },
      { path: "/about", element: <PagePlaceholder titleKey="aboutTitle" /> },
      {
        path: "/products-services",
        element: <PagePlaceholder titleKey="productsServicesTitle" />,
      },
      {
        path: "/factories",
        element: <PagePlaceholder titleKey="factoriesTitle" />,
      },
      {
        path: "/projects",
        element: <PagePlaceholder titleKey="projectsTitle" />,
      },
      {
        path: "/quality",
        element: <PagePlaceholder titleKey="qualityTitle" />,
      },
      { path: "/news", element: <PagePlaceholder titleKey="newsTitle" /> },
      {
        path: "/contact",
        element: <PagePlaceholder titleKey="contactTitle" />,
      },
      {
        path: "/careers",
        element: <PagePlaceholder titleKey="careersTitle" />,
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
