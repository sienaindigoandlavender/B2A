import { SectionIndexPage } from '@/components/SectionPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Doctrine' }
export default function Page() {
  return (
    <SectionIndexPage
      sectionKey="doctrine"
      title="Doctrine"
      subtitle="The foundational philosophy and ethical commitments that govern every agent design decision in this system"
    />
  )
}
