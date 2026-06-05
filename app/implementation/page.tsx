import { SectionIndexPage } from '@/components/SectionPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Implementation' }
export default function Page() {
  return <SectionIndexPage sectionKey="implementation" title="Implementation" subtitle="How to build for the agent economy" />
}
