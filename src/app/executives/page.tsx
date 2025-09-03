import { MainLayout } from '@/components/layout/main-layout'
import { ExecutivesHero } from '@/components/executives/executives-hero'
import { ExecutivesGrid } from '@/components/executives/executives-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Executives | Japanese Student Society",
  description: "Meet the dedicated executive team of the University of Sydney Japanese Student Society. Learn about our leadership and their commitment to the Japanese student community.",
  openGraph: {
    title: "Our Executives | Japanese Student Society",
    description: "Meet the dedicated executive team of the University of Sydney Japanese Student Society.",
    url: "https://www.usyd-jss.org/executives",
  },
}

export default function ExecutivesPage() {
  return (
    <MainLayout>
      <ExecutivesHero />
      <ExecutivesGrid />
    </MainLayout>
  )
}