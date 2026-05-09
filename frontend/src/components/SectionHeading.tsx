interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, light = false, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`font-display text-3xl md:text-4xl font-bold ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      <div className={`mt-3 h-1 w-16 bg-accent rounded ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
