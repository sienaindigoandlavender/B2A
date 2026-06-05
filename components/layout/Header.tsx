'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/overview', label: 'Overview' },
  { href: '/doctrine', label: 'Doctrine' },
  { href: '/concepts', label: 'Concepts' },
  { href: '/market-signals', label: 'Market signals' },
  { href: '/business-models', label: 'Business models' },
  { href: '/agent-protocols', label: 'Protocols' },
  { href: '/policy-layer', label: 'Policy layer' },
  { href: '/implementation', label: 'Implementation' },
  { href: '/use-cases', label: 'Use cases' },
  { href: '/theses', label: 'Theses' },
  { href: '/experiments', label: 'Experiments' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/resources', label: 'Resources' },
]

export default function Header() {
  const path = usePathname()
  const section = '/' + (path.split('/')[1] ?? '')
  return (
    <header className="border-b border-border">
      <div className="max-w-content mx-auto px-6 py-5 flex items-center justify-between gap-6 flex-wrap">
        <Link href="/" className="font-serif text-xl tracking-tight flex-shrink-0">
          B2A Wiki
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-meta uppercase tracking-wide">
          {navItems.map(item => (
            <Link key={item.href} href={item.href}
              className={`transition-colors ${section === item.href ? 'text-ink' : 'text-tertiary hover:text-ink'}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
