import { SectionIndexPage } from '@/components/SectionPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Use cases' }
export default function Page() {
  return <SectionIndexPage sectionKey="use-cases" title="Use cases" subtitle="Practical domains and opportunity exploration" />
}
