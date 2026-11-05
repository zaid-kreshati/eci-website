import { Fragment } from "react";
import { Link } from "react-router-dom";
interface BreadcrumbItem { label: string; to?: string; }
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) { return <nav aria-label="Breadcrumb"><ol className="breadcrumb">{items.map((item, index) => <Fragment key={`${item.label}-${index}`}><li>{item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>{index < items.length - 1 && <li className="breadcrumb__separator" aria-hidden="true">/</li>}</Fragment>)}</ol></nav>; }
