interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="font-ui text-sm text-structure">{eyebrow}</p>
      ) : null}
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 font-body text-lg leading-relaxed text-ink-soft">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
