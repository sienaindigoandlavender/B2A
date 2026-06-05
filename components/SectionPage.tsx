import { getSectionPages, getPage, PageMeta } from '@/lib/content'
import { EntityHeader, EntityBody, MetadataPanel } from '@/components/entity'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Section index listing
export async function SectionIndexPage({
  sectionKey, title, subtitle
}: { sectionKey: string; title: string; subtitle: string }) {
  const pages = await getSectionPages(sectionKey)
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <header className="mb-12 pb-8 border-b border-border">
        <div className="font-mono text-meta text-tertiary mb-4 uppercase tracking-wide">
          {sectionKey.replace('-', ' ')} · {pages.length} pages
        </div>
        <h1 className="font-serif text-5xl leading-tight text-ink mb-3">{title}</h1>
        <p className="font-serif text-xl text-secondary max-w-prose">{subtitle}</p>
      </header>
      {pages.length === 0 ? (
        <p className="text-secondary font-serif">No pages yet — this section is being built.</p>
      ) : (
        <ul className="divide-y divide-border max-w-prose">
          {pages.map(({ meta }) => (
            <li key={meta.slug} className="py-5">
              <Link href={`/${sectionKey}/${meta.slug}`} className="block group">
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
      )}
    </div>
  )
}

// Single page within a section
export async function SectionDetailPage({
  sectionKey, slug
}: { sectionKey: string; slug: string }) {
  const page = await getPage(sectionKey, slug)
  if (!page) notFound()
  const { meta, html } = page
  const sectionLabel = sectionKey.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <div className="mb-6">
        <Link href={`/${sectionKey}`}
          className="font-mono text-meta text-tertiary hover:text-ink uppercase tracking-wide transition-colors">
          ← {sectionLabel}
        </Link>
      </div>
      <EntityHeader
        section={meta.section ?? sectionKey}
        id={meta.id}
        title={meta.title}
        subtitle={meta.subtitle}
        status={meta.status}
        confidence={meta.confidence}
        updated={meta.updated}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-16">
        <EntityBody html={html} />
        <MetadataPanel fields={meta.metadata} relatedPages={meta.related} />
      </div>
    </div>
  )
}
