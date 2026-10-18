import SectionHeading from '../components/ui/SectionHeading'

const topicPages = {
  animation: {
    title: 'Animation',
    image:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=2400&q=85',
    imageAlt: 'Colorful digital light installation',
    introduction:
      'Technical developments and industry updates shaping animation tools, workflows, and events.',
    topics: [
      {
        category: 'Engines',
        title: 'Animation engine updates',
        description:
          'Follow new engine capabilities, rendering improvements, and features for real-time animation.',
      },
      {
        category: 'Production',
        title: 'Tools & workflows',
        description:
          'Explore pipeline tools and technical approaches that connect animation, rendering, and production.',
      },
      {
        category: 'Events',
        title: 'Events & community',
        description:
          'Keep an eye on conferences, showcases, and industry gatherings focused on animation technology.',
      },
    ],
  },
  games: {
    title: 'Games',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2400&q=85',
    imageAlt: 'Video game controller in colorful light',
    introduction:
      'Technical developments and industry updates across game engines, development tools, and events.',
    topics: [
      {
        category: 'Engines',
        title: 'Game engine updates',
        description:
          'Track engine releases, real-time rendering advances, and tools that shape game development.',
      },
      {
        category: 'Technology',
        title: 'Graphics & development',
        description:
          'Explore progress in graphics, performance, and the technologies behind interactive experiences.',
      },
      {
        category: 'Events',
        title: 'Events & community',
        description:
          'Find industry events, developer conferences, and showcases for emerging game technology.',
      },
    ],
  },
}

interface IndustryUpdatesProps {
  topic: keyof typeof topicPages
}

function IndustryUpdates({ topic }: IndustryUpdatesProps) {
  const page = topicPages[topic]

  return (
    <>
      <section className="relative isolate flex min-h-80 items-end overflow-hidden bg-stone-300 sm:min-h-[26rem]">
        <img
          src={page.image}
          alt={page.imageAlt}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/10" />
        <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-24 sm:pb-16">
          <p className="font-ui text-sm font-medium tracking-wide text-white/80">
            Technical news &amp; updates
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            {page.title}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-white/85 sm:text-xl">
            {page.introduction}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow={`${page.title} coverage`}
          title="What we're following"
          description="Technical news, advances, and events across the field."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {page.topics.map((item) => (
            <article
              key={item.title}
              className="flex flex-col border border-line/60 p-6"
            >
              <p className="font-ui text-sm text-structure">{item.category}</p>
              <h2 className="mt-3 font-display text-xl font-semibold text-ink">
                {item.title}
              </h2>
              <p className="mt-3 font-body text-base leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default IndustryUpdates
