import SectionHeading from '../components/ui/SectionHeading'
import { portfolioProjects } from '../data/content'

function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="Portfolio"
        title="My Architectural Journey"
        description="A running record of completed and in-progress projects."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col border border-line/60 p-6"
          >
            <div className="aspect-[4/3] w-full border border-dashed border-line" />
            <h2 className="mt-5 font-display text-xl font-semibold text-ink">
              {project.name}
            </h2>
            <p className="mt-1 font-ui text-sm text-ink-soft">
              {project.location} · {project.year}
            </p>
            <p className="mt-3 font-body text-base leading-relaxed text-ink-soft">
              {project.summary}
            </p>
            <span className="mt-4 font-ui text-sm text-structure">{project.type}</span>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
