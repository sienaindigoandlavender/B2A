import { SectionIndexPage } from '@/components/SectionPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Overview' }
export default function Page() {
  return <SectionIndexPage sectionKey="overview" title="Overview" subtitle="Front door and orientation for this wiki" />
}
