interface SectionHeadingProps {
  eyebrow?: string;
  id?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, id, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  );
}
