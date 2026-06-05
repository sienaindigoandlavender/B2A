import { SectionIndexPage } from '@/components/SectionPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Policy layer' }
export default function Page() {
  return <SectionIndexPage sectionKey="policy-layer" title="Policy layer" subtitle="Machine-readable business rules — the most underbuilt layer" />
}
