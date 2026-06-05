import { SectionIndexPage } from '@/components/SectionPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Concepts' }
export default function Page() {
  return <SectionIndexPage sectionKey="concepts" title="Concepts" subtitle="Core ideas about the agent economy and B2A" />
}
