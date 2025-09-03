export type Language = 'English' | 'Japanese'

export interface NavigationItem {
  title: { ja: string; en: string }
  href?: string
  target?: string
}

export interface ExecutiveData {
  jp: {
    name: string
    position: string
    description: string
  }
  en: {
    name: string
    position: string
    description: string
  }
  image: string
}

export interface EventData {
  id: string
  title: { ja: string; en: string }
  description: { ja: string; en: string }
  date: string
  location: { ja: string; en: string }
  image?: string
  type: 'upcoming' | 'past'
  registrationUrl?: string
}

export interface AboutUsData {
  jp: string
  en: string
}