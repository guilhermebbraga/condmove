interface SectionTitleProps {
    title: string,
    subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-10">
      <span className="text-text-muted text-lg font-medium">
        {subtitle}
      </span>
      <h2 className="text-4xl text-secondary font-bold">
        {title}
      </h2>
    </div>
  );
}
