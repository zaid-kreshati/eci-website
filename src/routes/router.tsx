import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ProductsServicesPage } from "../pages/ProductsServicesPage";
import { FactoriesPage } from "../pages/FactoriesPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PagePlaceholder } from "../pages/PagePlaceholder";
import { StyleGuidePage } from "../pages/StyleGuidePage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/style-guide", element: <StyleGuidePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/products-services", element: <ProductsServicesPage /> },
      { path: "/factories", element: <FactoriesPage /> },
      { path: "/projects", element: <ProjectsPage /> },
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
