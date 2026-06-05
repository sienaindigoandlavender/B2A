import { SectionIndexPage } from '@/components/SectionPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Market signals' }
export default function Page() {
  return <SectionIndexPage sectionKey="market-signals" title="Market signals" subtitle="Evidence the agent economy is real and where it is moving" />
}
