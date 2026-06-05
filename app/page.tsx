import Link from 'next/link'

const sections = [
  { href: '/overview', label: 'Overview', desc: 'Front door, working thesis, what this is and is not' },
  { href: '/doctrine', label: 'Doctrine', desc: 'Agent Orchestrator Oath and the 10 foundational ethical commitments' },
  { href: '/concepts', label: 'Concepts', desc: 'Core ideas explained: B2A, A2A, A2C, agent economy, decision layer' },
  { href: '/market-signals', label: 'Market signals', desc: 'Evidence this is real — Google, payments, search-to-agent shift' },
  { href: '/business-models', label: 'Business models', desc: 'Monetisation forms: selling to agents, policy-as-a-service, moats' },
  { href: '/agent-protocols', label: 'Agent protocols', desc: 'MCP, A2A, AP2 — the technical stack for agent commerce' },
  { href: '/policy-layer', label: 'Policy layer', desc: 'Machine-readable business rules — the most underbuilt layer' },
  { href: '/implementation', label: 'Implementation', desc: 'How to actually build: architecture, APIs, MCP servers, evaluation' },
  { href: '/use-cases', label: 'Use cases', desc: 'Travel, regional intelligence, ecommerce, personal operator OS' },
  { href: '/theses', label: 'Theses', desc: 'Original thinking — claims I am making that are not yet conventional wisdom' },
  { href: '/experiments', label: 'Experiments', desc: 'Lab notebook — prototypes, failures, open questions' },
  { href: '/glossary', label: 'Glossary', desc: 'Clean definitions: agent, MCP, A2A, AP2, policy layer, AEO' },
  { href: '/resources', label: 'Resources', desc: 'Articles, companies, tools, protocols, and talks worth tracking' },
]

const statusColors: Record<string, string> = {
  'strong-signal': 'text-green-700',
  'active': 'text-blue-700',
  'seed': 'text-tertiary',
  'speculative': 'text-yellow-700',
  'dead-end': 'text-red-700',
}

export default function HomePage() {
  return (
    <div className="max-w-content mx-auto px-6 py-16">

      <section className="mb-20 max-w-prose">
        <p className="font-mono text-meta uppercase tracking-wide text-tertiary mb-6">Personal knowledge base</p>
        <h1 className="font-serif text-5xl leading-tight text-ink mb-6">
          Business-to-Agent (B2A)
        </h1>
        <p className="text-lg text-secondary leading-relaxed">
          A structured wiki on the agent economy — the shift from human buyers to AI agents
          acting on behalf of humans. Covers the commercial model, the protocol stack, the
          policy layer opportunity, and original theses about where it is going.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="font-mono text-meta uppercase tracking-wide text-tertiary mb-6">Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {sections.map(s => (
            <Link key={s.href} href={s.href} className="block group">
              <p className="font-serif text-xl text-ink group-hover:text-secondary transition-colors mb-1">
                {s.label}
              </p>
              <p className="text-sm text-secondary">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-20 max-w-prose border-t border-border pt-12">
        <h2 className="font-mono text-meta uppercase tracking-wide text-tertiary mb-4">Start here</h2>
        <ul className="space-y-3 text-sm">
          {[
            { href: '/overview/working-thesis', label: 'Working thesis', note: 'The core hypothesis driving this project' },
            { href: '/doctrine/agent-orchestrator-oath', label: 'Agent Orchestrator Oath', note: 'The foundational ethical commitment' },
            { href: '/doctrine/no-go-goals', label: 'No-Go Goals in Agent Design', note: 'Goal types that will never be assigned' },
            { href: '/doctrine/sentience-uncertainty', label: 'Sentience Uncertainty Policy', note: 'How to design under genuine uncertainty' },
            { href: '/concepts/b2a', label: 'B2A concept', note: 'The foundational commercial definition' },
            { href: '/market-signals/google-agentic-commerce', label: 'Google\'s moves', note: 'The clearest strong signal' },
            { href: '/policy-layer/what-is-a-policy-layer', label: 'The policy layer', note: 'The most underbuilt layer in the stack' },
            { href: '/theses/my-core-theses', label: 'My core theses', note: 'Five claims about where this is going' },
            { href: '/experiments/experiment-log', label: 'Experiment log', note: 'What I am testing' },
          ].map(l => (
            <li key={l.href} className="flex items-baseline gap-3">
              <Link href={l.href} className="text-ink hover:text-secondary transition-colors font-medium flex-shrink-0">
                {l.label}
              </Link>
              <span className="text-tertiary">—</span>
              <span className="text-secondary">{l.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border pt-8 font-mono text-meta text-tertiary">
        <p>13 sections · Updated June 2026 · Status: active</p>
      </section>
    </div>
  )
}
