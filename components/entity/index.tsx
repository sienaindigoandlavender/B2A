// EntityHeader
interface HeaderProps {
  section: string
  id: string
  title: string
  subtitle?: string
  status?: string
  confidence?: string
  updated?: string
}

const sectionLabels: Record<string, string> = {
  overview: 'Overview', concepts: 'Concept', 'market-signals': 'Market signal',
  'business-models': 'Business model', 'agent-protocols': 'Protocol',
  'policy-layer': 'Policy', implementation: 'Implementation', 'use-cases': 'Use case',
  theses: 'Thesis', experiments: 'Experiment', glossary: 'Term', resources: 'Resource',
}

export function EntityHeader({ section, id, title, subtitle, status, confidence, updated }: HeaderProps) {
  return (
    <header className="mb-12 pb-8 border-b border-border">
      <div className="font-mono text-meta text-tertiary mb-4 flex gap-4 uppercase tracking-wide flex-wrap items-center">
        <span>{sectionLabels[section] ?? section}</span>
        <span className="text-border">·</span>
        <span>{id}</span>
        {updated && (
          <>
            <span className="text-border">·</span>
            <span>{updated}</span>
          </>
        )}
      </div>
      <h1 className="font-serif text-5xl leading-tight text-ink mb-3">{title}</h1>
      {subtitle && (
        <p className="font-serif text-xl text-secondary leading-snug max-w-prose mb-4">{subtitle}</p>
      )}
      {(status || confidence) && (
        <div className="flex gap-3 flex-wrap">
          {status && (
            <span className={`font-mono text-meta px-2 py-0.5 rounded status-${status}`}>
              {status.replace('-', ' ')}
            </span>
          )}
          {confidence && (
            <span className={`font-mono text-meta confidence-${confidence}`}>
              confidence: {confidence}
            </span>
          )}
        </div>
      )}
    </header>
  )
}

// EntityBody
export function EntityBody({ html }: { html: string }) {
  if (!html?.trim()) return null
  return <div className="prose-content" dangerouslySetInnerHTML={{ __html: html }} />
}

// MetadataPanel
interface Field { label: string; value: string }
export function MetadataPanel({ fields, relatedPages }: { fields?: Field[]; relatedPages?: { label: string; href: string }[] }) {
  if (!fields?.length && !relatedPages?.length) return null
  return (
    <aside className="space-y-8">
      {fields && fields.length > 0 && (
        <div>
          <p className="font-mono text-meta uppercase tracking-wide text-tertiary mb-4">Key facts</p>
          <dl className="space-y-4">
            {fields.map((f, i) => (
              <div key={i} className="border-b border-border pb-4 last:border-0">
                <dt className="font-mono text-meta text-tertiary uppercase tracking-wide mb-1">{f.label}</dt>
                <dd className="font-serif text-lg text-ink leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
      {relatedPages && relatedPages.length > 0 && (
        <div>
          <p className="font-mono text-meta uppercase tracking-wide text-tertiary mb-4">Related</p>
          <ul className="space-y-2">
            {relatedPages.map((p, i) => (
              <li key={i}>
                <a href={p.href} className="text-sm text-ink hover:text-secondary transition-colors border-b border-border pb-1 block">
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  )
}
