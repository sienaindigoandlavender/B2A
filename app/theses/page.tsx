import { SectionIndexPage } from '@/components/SectionPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Theses' }
export default function Page() {
  return <SectionIndexPage sectionKey="theses" title="Theses" subtitle="Original thinking — claims not yet in conventional wisdom" />
}
