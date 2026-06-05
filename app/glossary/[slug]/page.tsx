import { getGlossaryTerms } from '@/lib/content'
import { EntityBody } from '@/components/entity'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
interface Props { params: { slug: string } }

export async function generateStaticParams() {
  const terms = await getGlossaryTerms()
  return terms.map(t => ({ slug: t.meta.slug }))
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const terms = await getGlossaryTerms()
  const t = terms.find(t => t.meta.slug === params.slug)
  return { title: t?.meta.title ?? 'Glossary' }
}

export default async function GlossaryTermPage({ params }: Props) {
  const terms = await getGlossaryTerms()
  const term = terms.find(t => t.meta.slug === params.slug)
  if (!term) notFound()
  const { meta, html } = term
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <div className="mb-6">
        <Link href="/glossary" className="font-mono text-meta text-tertiary hover:text-ink uppercase tracking-wide transition-colors">
          ← Glossary
        </Link>
      </div>
      <header className="mb-12 pb-8 border-b border-border">
        <div className="font-mono text-meta text-tertiary mb-4 flex gap-4 uppercase tracking-wide flex-wrap">
          <span>Term</span>
          <span className="text-border">·</span>
          <span>{meta.id}</span>
          {meta.subtitle && <><span className="text-border">·</span><span>{meta.subtitle}</span></>}
        </div>
        <h1 className="font-serif text-5xl leading-tight text-ink mb-3">{meta.title}</h1>
        {meta.full && meta.full !== meta.title && (
          <p className="font-serif text-xl text-secondary">{meta.full}</p>
        )}
      </header>
      <div className="max-w-prose">
        <EntityBody html={html} />
      </div>
    </div>
  )
}
