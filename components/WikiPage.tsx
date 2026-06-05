import { EntityHeader, EntityBody, MetadataPanel } from '@/components/entity'
import { PageMeta } from '@/lib/content'
import Link from 'next/link'

interface Props {
  meta: PageMeta
  html: string
  backHref: string
  backLabel: string
}

export default function WikiPage({ meta, html, backHref, backLabel }: Props) {
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <div className="mb-6">
        <Link href={backHref} className="font-mono text-meta text-tertiary hover:text-ink uppercase tracking-wide transition-colors">
          ← {backLabel}
        </Link>
      </div>
      <EntityHeader
        section={meta.section}
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
