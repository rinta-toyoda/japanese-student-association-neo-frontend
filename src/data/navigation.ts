import { NavigationItem } from '@/types'

export const navigationItems: NavigationItem[] = [
  { title: { ja: 'ホーム', en: 'Home' }, href: '/' },
  { title: { ja: '団体について', en: 'About Us' }, href: '/#about' },
  { title: { ja: '役員', en: 'Executives' }, href: '/executives' },
  { title: { ja: 'イベント', en: 'Events' }, href: '/events' },
  {
    title: { ja: 'お問合せ', en: 'Contact' },
    href: 'https://docs.google.com/forms/d/1QuJZnQ-fgENjk-xLXPi_7gFa-M3dNvFHe08ijYjNIR4/edit',
    target: '_blank',
  },
]