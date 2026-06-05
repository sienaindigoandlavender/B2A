import { SectionIndexPage } from '@/components/SectionPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Business models' }
export default function Page() {
  return <SectionIndexPage sectionKey="business-models" title="Business models" subtitle="Monetisation and strategic forms for the agent economy" />
}
