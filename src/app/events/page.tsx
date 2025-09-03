import { MainLayout } from '@/components/layout/main-layout'
import { EventsHero } from '@/components/events/events-hero'
import { EventsSection } from '@/components/events/events-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Events | Japanese Student Society",
  description: "Discover upcoming events and past activities of the University of Sydney Japanese Student Society. Join us for networking, cultural activities, and community building.",
  keywords: ["JSS events", "Japanese student events", "University of Sydney events", "student activities", "cultural events"],
  openGraph: {
    title: "Events | Japanese Student Society",
    description: "Discover upcoming events and past activities of the University of Sydney Japanese Student Society.",
    url: "https://www.usyd-jss.org/events",
  },
}

export default function EventsPage() {
  return (
    <MainLayout>
      <EventsHero />
      <EventsSection />
    </MainLayout>
  )
}