import { SectionIndexPage } from '@/components/SectionPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Agent protocols' }
export default function Page() {
  return <SectionIndexPage sectionKey="agent-protocols" title="Agent protocols" subtitle="MCP, A2A, AP2 — the technical stack for agent commerce" />
}
