import { EventData } from '@/types'

export const eventsData: EventData[] = [
  {
    id: 'welcome-party-2025',
    title: {
      ja: '2025年新入生歓迎会',
      en: '2025 Welcome Party'
    },
    description: {
      ja: '新入生の皆さんを歓迎する年次イベントです。日本人学生同士の交流を深め、大学生活について情報交換を行います。美味しい料理と楽しいアクティビティを用意してお待ちしています！',
      en: 'Our annual event to welcome new students! Connect with fellow Japanese students, share university life experiences, and enjoy delicious food and fun activities together!'
    },
    date: '2025-03-15',
    location: {
      ja: 'シドニー大学 ユニオンビル',
      en: 'University of Sydney Union Building'
    },
    type: 'upcoming',
    registrationUrl: 'https://usu.edu.au/clubs/japanese-student-society'
  },
  {
    id: 'cultural-festival-2024',
    title: {
      ja: '日本文化フェスティバル2024',
      en: 'Japanese Cultural Festival 2024'
    },
    description: {
      ja: '日本文化を紹介し、多様なコミュニティとの交流を深めるイベントでした。書道、折り紙、日本料理の体験コーナーを設置し、多くの学生に参加いただきました。',
      en: 'An event showcasing Japanese culture and fostering connections with diverse communities. We featured calligraphy, origami, and Japanese cuisine experiences, with great participation from students.'
    },
    date: '2024-10-20',
    location: {
      ja: 'シドニー大学 クアドラングル',
      en: 'University of Sydney Quadrangle'
    },
    type: 'past',
    image: '/assets/images/home/jss_activity.jpg'
  },
  {
    id: 'study-session-march',
    title: {
      ja: '試験対策勉強会',
      en: 'Exam Preparation Study Session'
    },
    description: {
      ja: '期末試験に向けた勉強会を開催します。先輩学生からのアドバイスや効果的な学習方法の共有、グループ学習の機会を提供します。',
      en: 'Join us for a collaborative study session preparing for final exams. Get advice from senior students, share effective study methods, and benefit from group learning.'
    },
    date: '2025-03-25',
    location: {
      ja: 'フィッシャー図書館',
      en: 'Fisher Library'
    },
    type: 'upcoming'
  },
  {
    id: 'networking-dinner-2024',
    title: {
      ja: 'ネットワーキングディナー',
      en: 'Networking Dinner 2024'
    },
    description: {
      ja: '日本人学生、教授、地域の日本人コミュニティが一堂に会するネットワーキングディナーを開催しました。将来のキャリアについて話し合い、貴重なつながりを築きました。',
      en: 'A networking dinner bringing together Japanese students, professors, and the local Japanese community. We discussed future careers and built valuable connections.'
    },
    date: '2024-08-15',
    location: {
      ja: 'シティ内日本料理レストラン',
      en: 'Japanese Restaurant in Sydney CBD'
    },
    type: 'past'
  }
]