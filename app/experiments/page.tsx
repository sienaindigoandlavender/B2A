import { SectionIndexPage } from '@/components/SectionPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Experiments' }
export default function Page() {
  return <SectionIndexPage sectionKey="experiments" title="Experiments" subtitle="Lab notebook of prototypes, tests, and open questions" />
}
