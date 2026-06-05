import { SectionDetailPage } from '@/components/SectionPage'
import { getSectionPages } from '@/lib/content'
interface Props { params: { slug: string } }
export async function generateStaticParams() {
  const pages = await getSectionPages('implementation')
  return pages.map(p => ({ slug: p.meta.slug }))
}
export default function Page({ params }: Props) {
  return <SectionDetailPage sectionKey="implementation" slug={params.slug} />
}
