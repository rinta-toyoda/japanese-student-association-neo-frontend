export type Language = 'English' | 'Japanese'

export enum AudienceTag {
  USYD_STUDENTS = 'usyd_students',
  EXTERNAL_VISITORS = 'external_visitors',
  JSS_MEMBERS = 'jss_members',
  GRADUATES = 'graduates',
  FACULTY_STAFF = 'faculty_staff'
}

export const AUDIENCE_TAG_LABELS: Record<AudienceTag, { ja: string; en: string }> = {
  [AudienceTag.USYD_STUDENTS]: { ja: 'USYD学生', en: 'USYD Students' },
  [AudienceTag.EXTERNAL_VISITORS]: { ja: '外部の方', en: 'External Visitors' },
  [AudienceTag.JSS_MEMBERS]: { ja: 'JSS会員', en: 'JSS Members' },
  [AudienceTag.GRADUATES]: { ja: '卒業生', en: 'Graduates' },
  [AudienceTag.FACULTY_STAFF]: { ja: '教職員', en: 'Faculty & Staff' }
}

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
  audienceTags?: AudienceTag[]
}

export interface AboutUsData {
  jp: string
  en: string
}