import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const contentDir = path.join(process.cwd(), 'content')

export interface MetaField { label: string; value: string }
export interface RelatedPage { label: string; href: string }

export interface PageMeta {
  section: string
  id: string
  slug: string
  title: string
  subtitle?: string
  status?: 'seed' | 'active' | 'strong-signal' | 'speculative' | 'dead-end'
  confidence?: 'low' | 'medium' | 'high'
  updated?: string
  metadata?: MetaField[]
  related?: RelatedPage[]
  // glossary
  term?: string
  full?: string
  domain?: string
}

export async function getPage(section: string, slug = 'index'): Promise<{ meta: PageMeta; html: string } | null> {
  try {
    const filePath = path.join(contentDir, section, `${slug}.md`)
    const raw = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(raw)
    const processed = await remark().use(remarkHtml).process(content)
    return { meta: data as PageMeta, html: processed.toString() }
  } catch { return null }
}

export async function getSectionPages(section: string): Promise<{ meta: PageMeta; html: string }[]> {
  const dir = path.join(contentDir, section)
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== 'index.md')
  const results = await Promise.all(files.map(async f => {
    const raw = fs.readFileSync(path.join(dir, f), 'utf8')
    const { data, content } = matter(raw)
    const processed = await remark().use(remarkHtml).process(content)
    return { meta: data as PageMeta, html: processed.toString() }
  }))
  return results.sort((a, b) => (a.meta.title ?? '').localeCompare(b.meta.title ?? ''))
}

export async function getGlossaryTerms() {
  return getSectionPages('glossary')
}
