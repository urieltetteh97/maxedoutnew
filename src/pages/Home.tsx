import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import ShimmerImage from '../components/ui/ShimmerImage'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=85',
    alt: 'Modern white architecture framed by trees',
  },
  {
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85',
    alt: 'Contemporary home opening onto a landscaped garden',
  },
  {
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2400&q=85',
    alt: 'Sculptural modern building viewed from below',
  },
]

const sections = [
  {
    label: 'Architecture',
    to: '/news',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=85',
  },
  {
    label: 'Animation',
    to: '/animation',
    image:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=2400&q=85',
  },
  {
    label: 'Resources',
    to: '/resources',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2400&q=85',
  },
  {
    label: 'Games',
    to: '/games',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2400&q=85',
  },
  {
    label: 'News',
    to: '/news',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2400&q=85',
  },
]

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (
      isPaused ||
      isHovered ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 6000)

    return () => window.clearInterval(intervalId)
  }, [isHovered, isPaused])

  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length)
  }

  return (
    <>
      <section
        aria-label="Featured architecture"
        aria-roledescription="carousel"
        className="relative isolate flex min-h-[36rem] items-center overflow-hidden bg-stone-300 sm:min-h-[44rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {slides.map((slide, index) => (
          <ShimmerImage
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            aria-hidden={activeSlide !== index}
            loading={index === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            imageClassName="h-full w-full object-cover"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/15" />

        <Reveal className="relative mx-auto w-full max-w-6xl px-6 py-16 text-center sm:py-20">
          <p className="font-ui text-sm font-medium tracking-wide text-white/80">
            Maxed Out Studios
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Architectural news, portfolio work, and practical resources in one place.
          </h1>
          <p className="mt-6 max-w-xl text-center font-body text-lg leading-relaxed text-white/85 sm:text-xl">
            A working reference for the profession — what's changing in the field, what's been built, and what's useful on the next project.
          </p>
        </Reveal>

        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-6xl items-center justify-between px-6 pb-8">
          <div className="flex items-center gap-3" aria-label="Choose a slide">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-current={activeSlide === index ? 'true' : undefined}
                onClick={() => showSlide(index)}
                className={`h-2.5 rounded-full transition-all motion-reduce:transition-none ${
                  activeSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
              onClick={() => setIsPaused((paused) => !paused)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-sm text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">{isPaused ? '▶' : 'Ⅱ'}</span>
            </button>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => showSlide(activeSlide - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-xl text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => showSlide(activeSlide + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-xl text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </section>

      <div className="w-full">
        {sections.map((section, index) => (
          <Reveal key={section.label} delay={index * 0.04}>
            <Link
              to={section.to}
              aria-label={`Explore ${section.label}`}
              className="group relative isolate flex min-h-64 items-center overflow-hidden bg-stone-300 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white sm:min-h-80"
            >
              <ShimmerImage
                src={section.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 -z-10"
                imageClassName="h-full w-full object-cover transition-transform duration-900 group-hover:scale-125 motion-reduce:transition-200 group-hover:motion-reduce:scale-100"
              />
              <div className="absolute inset-0 -z-10 bg-slate-950/45 transition-colors group-hover:bg-slate-950/55" />
              <h2 className="mx-auto w-full max-w-6xl px-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {section.label}
              </h2>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  )
}

export default Home
