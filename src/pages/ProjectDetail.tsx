import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import ShimmerImage from '../components/ui/ShimmerImage'
import { portfolioProjects } from '../data/content'

function ProjectDetail() {
  const { projectId } = useParams()
  const project = portfolioProjects.find((item) => item.id === projectId)

  if (!project) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-ui text-sm text-structure">Portfolio</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          Project not found
        </h1>
        <p className="mt-4 font-body text-lg text-ink-soft">
          This project may have moved or is no longer available.
        </p>
        <Link
          to="/portfolio"
          className="mt-8 inline-flex font-ui text-sm font-medium text-structure hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-structure"
        >
          ← Back to portfolio
        </Link>
      </section>
    )
  }

  return (
    <>
      <section className="relative isolate flex min-h-[28rem] items-end overflow-hidden bg-stone-300 sm:min-h-[36rem]">
        <ShimmerImage
          src={project.images[0].src}
          alt={project.images[0].alt}
          className="absolute inset-0 -z-10"
          imageClassName="h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/10" />
        <Reveal className="mx-auto w-full max-w-6xl px-6 pb-12 pt-24 sm:pb-16">
          <Link
            to="/portfolio"
            className="font-ui text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            ← All projects
          </Link>
          <p className="mt-8 font-ui text-sm font-medium text-white/80">
            {project.type} <span aria-hidden="true">·</span> {project.year}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 font-ui text-base text-white/85">{project.location}</p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
        <Reveal>
          <p className="font-ui text-sm font-medium text-structure">Project overview</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A closer look
          </h2>
          <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-ink-soft">
            {project.overview}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border-t border-line/60 pt-5">
            <h2 className="font-display text-xl font-semibold text-ink">Project details</h2>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="font-ui text-xs uppercase tracking-wide text-ink-soft">Location</dt>
                <dd className="mt-1 font-body text-base text-ink">{project.location}</dd>
              </div>
              <div>
                <dt className="font-ui text-xs uppercase tracking-wide text-ink-soft">Year</dt>
                <dd className="mt-1 font-body text-base text-ink">{project.year}</dd>
              </div>
              <div>
                <dt className="font-ui text-xs uppercase tracking-wide text-ink-soft">Type</dt>
                <dd className="mt-1 font-body text-base text-ink">{project.type}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-ui text-sm font-medium text-structure">Design features</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
              The project in focus
            </h2>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.highlights.map((highlight, index) => (
            <Reveal key={highlight} delay={index * 0.06}>
              <div className="h-full border border-line/60 p-5">
                <p className="font-ui text-sm text-structure">0{index + 1}</p>
                <p className="mt-3 font-body text-lg leading-relaxed text-ink">
                  {highlight}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-ui text-sm font-medium text-structure">Gallery</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
                Project imagery
              </h2>
            </div>
            <p className="font-ui text-sm text-ink-soft">
              {project.images.length} project views
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {project.images.map((image, index) => (
            <Reveal
              key={image.src}
              delay={(index % 2) * 0.08}
              className={index === 0 ? 'sm:col-span-2' : ''}
            >
              <ShimmerImage
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={index === 0 ? 'aspect-[16/8] w-full' : 'aspect-[4/3] w-full'}
                imageClassName="h-full w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-10">
          <p className="font-body text-lg text-ink-soft">Explore more of the portfolio</p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-ui text-sm font-medium text-structure hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-structure"
          >
            Back to all projects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default ProjectDetail
