import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { portfolioProjects } from '../data/content'
import { Link } from 'react-router-dom'
import ShimmerImage from '../components/ui/ShimmerImage'

function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="Portfolio"
        title="My Architectural Journey"
        description="A running record of completed and in-progress projects."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08} className="h-full">
            <Link
              to={`/portfolio/${project.id}`}
              aria-label={`View details for ${project.name}`}
              className="group flex h-full flex-col border border-line/60 p-6 transition-colors hover:border-structure/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-structure"
            >
              <ShimmerImage
                src={project.images[0].src}
                alt={project.images[0].alt}
                loading="lazy"
                className="aspect-[4/3] w-full"
                imageClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
              <h2 className="mt-5 font-display text-xl font-semibold text-ink transition-colors group-hover:text-structure">
                {project.name}
              </h2>
              <p className="mt-1 font-ui text-sm text-ink-soft">
                {project.location} · {project.year}
              </p>
              <p className="mt-3 font-body text-base leading-relaxed text-ink-soft">
                {project.summary}
              </p>
              <span className="mt-4 font-ui text-sm text-structure">{project.type}</span>
              <span className="mt-5 inline-flex items-center gap-2 font-ui text-sm font-medium text-ink group-hover:text-structure">
                Explore project <span aria-hidden="true">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
