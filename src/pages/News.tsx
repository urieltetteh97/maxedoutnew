import SectionHeading from '../components/ui/SectionHeading'
import { articles } from '../data/content'

function News() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="News"
        title="Architecture in the news"
        description="Policy, funding, and standards coverage relevant to practice."
      />

      <div className="mt-12 divide-y divide-line/60 border-t border-line/60">
        {articles.map((article) => (
          <article key={article.id} className="grid gap-2 py-8 sm:grid-cols-[140px_1fr]">
            <div className="font-ui text-sm text-ink-soft">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <p className="mt-1 text-structure">{article.category}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">{article.title}</h2>
              <p className="mt-2 font-body text-base leading-relaxed text-ink-soft">
                {article.dek}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default News
