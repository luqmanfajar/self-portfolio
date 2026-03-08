interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] font-bold text-foreground mb-3">
        {title}
      </h2>
      {subtitle && <p className="text-secondary max-w-xl mx-auto">{subtitle}</p>}
      <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
    </div>
  );
}
