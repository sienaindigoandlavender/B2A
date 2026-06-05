import Link from 'next/link'
import { getGlossaryTerms } from '@/lib/content'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Glossary' }

export default async function GlossaryPage() {
  const terms = await getGlossaryTerms()
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <header className="mb-12 pb-8 border-b border-border">
        <div className="font-mono text-meta text-tertiary mb-4 uppercase tracking-wide">
          Glossary · {terms.length} terms
        </div>
        <h1 className="font-serif text-5xl leading-tight text-ink mb-3">Glossary</h1>
        <p className="font-serif text-xl text-secondary max-w-prose">
          Definitions for key terms in B2A commerce and the agent economy.
        </p>
      </header>
      <ul className="divide-y divide-border max-w-prose">
        {terms.map(({ meta }) => (
          <li key={meta.slug} className="py-5">
            <Link href={`/glossary/${meta.slug}`} className="block group">
              <p className="font-serif text-xl text-ink group-hover:text-secondary transition-colors mb-1">
                {meta.title}
                {meta.full && meta.full !== meta.title && (
                  <span className="text-secondary font-sans text-sm font-normal ml-2">— {meta.full}</span>
                )}
              </p>
              {meta.subtitle && (
                <p className="text-sm text-secondary">{meta.subtitle}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
