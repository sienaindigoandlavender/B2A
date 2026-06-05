import { SectionIndexPage } from '@/components/SectionPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Resources' }
export default function Page() {
  return <SectionIndexPage sectionKey="resources" title="Resources" subtitle="External references, articles, companies, and tools" />
}
