import { MainLayout } from '@/components/layout/main-layout'
import { HeroSection } from '@/components/home/hero-section'
import { AboutSection } from '@/components/home/about-section'

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
    </MainLayout>
  )
}
