type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignmentClasses =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left"

  return (
    <div
      className={`flex max-w-3xl flex-col ${alignmentClasses} ${className}`}
    >
      <div className="flex items-center gap-4">
        <span
          className="h-px w-10 bg-gradient-to-r from-amber-300 to-amber-300/20 sm:w-14"
          aria-hidden="true"
        />

        <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300 sm:text-sm">
          {eyebrow}
        </p>

        {align === "center" && (
          <span
            className="h-px w-10 bg-gradient-to-l from-amber-300 to-amber-300/20 sm:w-14"
            aria-hidden="true"
          />
        )}
      </div>

      <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading