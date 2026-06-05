import Link from 'next/link'
import { PageMeta } from '@/lib/content'

interface Props {
  section: string
  title: string
  subtitle?: string
  pages: { meta: PageMeta }[]
  sectionPath: string
}

const statusOrder = ['strong-signal', 'active', 'seed', 'speculative', 'dead-end']

export default function SectionIndex({ section, title, subtitle, pages, sectionPath }: Props) {
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <header className="mb-12 pb-8 border-b border-border">
        <div className="font-mono text-meta text-tertiary mb-4 uppercase tracking-wide">
          {section} · {pages.length} pages
        </div>
        <h1 className="font-serif text-5xl leading-tight text-ink mb-3">{title}</h1>
        {subtitle && (
          <p className="font-serif text-xl text-secondary max-w-prose">{subtitle}</p>
        )}
      </header>
      <ul className="divide-y divide-border max-w-prose">
        {pages.map(({ meta }) => (
          <li key={meta.slug} className="py-5">
            <Link href={`${sectionPath}/${meta.slug}`} className="block group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-serif text-xl text-ink group-hover:text-secondary transition-colors mb-1">
                    {meta.title}
                  </p>
                  {meta.subtitle && (
                    <p className="text-sm text-secondary leading-snug max-w-lg">{meta.subtitle}</p>
                  )}
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  {meta.status && (
                    <span className={`font-mono text-[11px] px-2 py-0.5 rounded status-${meta.status}`}>
                      {meta.status.replace('-', ' ')}
                    </span>
                  )}
                  {meta.confidence && (
                    <span className={`font-mono text-[11px] confidence-${meta.confidence}`}>
                      {meta.confidence}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
