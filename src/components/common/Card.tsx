import type { ReactNode } from "react";
interface CardProps { title?: string; description?: string; children?: ReactNode; }
export function Card({ title, description, children }: CardProps) { return <article className="card"><div className="card__body">{title && <h3 className="card__title">{title}</h3>}{description && <p className="card__description">{description}</p>}{children}</div></article>; }
