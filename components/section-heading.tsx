interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "flex flex-col items-center text-center max-w-2xl mx-auto gap-4"
          : "flex flex-col gap-4 max-w-3xl"
      }
    >
      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent">
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
      </div>
      <h2 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-primary text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
