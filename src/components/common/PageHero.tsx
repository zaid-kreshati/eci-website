import type { ReactNode } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
interface PageHeroProps { eyebrow?: string; title: string; description?: string; breadcrumbs?: ReactNode; children?: ReactNode; }
export function PageHero({ eyebrow, title, description, breadcrumbs, children }: PageHeroProps) { return <section className="page-hero"><Container className="page-hero__inner">{breadcrumbs}<div className="page-hero__content"><SectionHeading eyebrow={eyebrow} title={title} description={description} />{children}</div></Container></section>; }
