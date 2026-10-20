import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { resources } from '../data/content'

function Resources() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="Resources"
        title="Working library"
        description="Specs, checklists, and templates kept current for day-to-day practice."
      />

      <div className="mt-12 divide-y divide-line/60 border-t border-b border-line/60">
        {resources.map((resource, index) => (
          <Reveal key={resource.id} delay={index * 0.08}>
            <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-lg font-semibold text-ink">
                  {resource.title}
                </h2>
                <p className="mt-1 font-body text-base text-ink-soft">{resource.summary}</p>
              </div>
              <span className="shrink-0 font-ui text-sm text-structure sm:pl-8">
                {resource.format}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Resources
