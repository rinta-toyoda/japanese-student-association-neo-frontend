import { EventData, AudienceTag } from '@/types'

export const eventsData: EventData[] = [
  // {
  //   id: 'izakaya-party-2025-s2',
  //   title: {
  //     ja: '居酒屋パーティー 2025',
  //     en: 'Izakaya Party 2025'
  //   },
  //   description: {
  //     ja: 'Mid Semester Break中に開催予定の居酒屋パーティーです。美味しい料理と飲み物を楽しみながら、メンバー同士の交流を深めましょう！\n',
  //     en: 'Izakaya Party scheduled during the Mid Semester Break. Enjoy delicious food and drinks while connecting with fellow members!'
  //   },
  //   date: '???',
  //   location: {
  //     ja: 'まだ決めてないです！',
  //     en: 'University of Sydney Union Building'
  //   },
  //   type: 'upcoming',
  //   audienceTags: [
  //     AudienceTag.USYD_STUDENTS,
  //   ]
  // },
  {
    id: 'game-day-2025-s2',
    title: {
      ja: '2025年ゲーム会',
      en: 'Game Day 2025'
    },
    description: {
      ja: 'みんなで一緒にボードゲームやカードゲームを楽しむイベントです。新しい友達を作りながら、楽しい時間を過ごしましょう！\n',
      en: 'Let\'s enjoy board games and card games together. Make new friends and have a great time!'
    },
    date: '2025-09-26',
    location: {
      ja: 'シドニー大学 Education Building. Education Seminar Room 323',
      en: 'University of Sydney Education Building. Education Seminar Room 323'
    },
    type: 'past',
    registrationUrl: 'https://usu.edu.au/clubs/japanese-student-society',
    audienceTags: [
      AudienceTag.USYD_STUDENTS,
    ]
  },
  {
    id: 'basketball-day-2025-s2',
    title: {
      ja: 'バスケットボール大会 2025',
      en: 'バスケットボール大会 2025'
    },
    description: {
      ja: '複数のグループに分かれ、クイズや謎解きに協力してチャレンジするイベントでした。各グループがにぎやかに謎解きを進め、最後は獲得した得点順にピザやサイドフードを選び、楽しみました！\n',
      en: 'It was an event where we split into groups and collaborated on quizzes and riddles. With each group buzzing with excitement, we wrapped up by choosing pizza and side dishes according to the points we had scored.'
    },
    date: '2025-08-29',
    location: {
      ja: 'シドニー大学 Education building Seminar room 625-626',
      en: 'University of Sydney Education building Seminar room 625-626'
    },
    type: 'past',
    image: '/assets/images/events/basketball-day-2025-s2.jpg',
    audienceTags: [
      AudienceTag.USYD_STUDENTS
    ]
  },
  {
    id: 'riddle-solving-night-2025-s2',
    title: {
      ja: '謎解きナイト',
      en: 'Riddle-Solving Night'
    },
    description: {
      ja: '複数のグループに分かれ、クイズや謎解きに協力してチャレンジするイベントでした。各グループがにぎやかに謎解きを進め、最後は獲得した得点順にピザやサイドフードを選び、楽しみました！\n',
      en: 'It was an event where we split into groups and collaborated on quizzes and riddles. With each group buzzing with excitement, we wrapped up by choosing pizza and side dishes according to the points we had scored.'
    },
    date: '2025-08-29',
    location: {
      ja: 'シドニー大学 Education building Seminar room 625-626',
      en: 'University of Sydney Education building Seminar room 625-626'
    },
    type: 'past',
    image: '/assets/images/events/riddle-solving-night-2025-s2.jpg',
    audienceTags: [
      AudienceTag.USYD_STUDENTS
    ]
  },
  {
    id: 'speed-friending-2025-s2',
    title: {
      ja: 'スピードフレンディング 2025',
      en: 'Speed Friending 2025'
    },
    description: {
      ja: 'JSSのキックオフとして、メンバー同士が交流を深めるイベントでした。メンバーの一面を知れるビンゴシートを活用しながら和やかな雰囲気で多くのメンバーと親睦を深めました！\n',
      en: 'The JSS kickoff featured a social event for members to get to know each other. Using a bingo sheet to discover fun aspects of one another, we enjoyed a warm and friendly atmosphere and built connections with many members.\n'
    },
    date: '2025-08-14',
    location: {
      ja: 'シドニー大学 Home Building Common Room',
      en: 'University of Sydney Home Building Common Room'
    },
    type: 'past',
    image: '/assets/images/events/speed-friending-2025-s2.jpg',
    audienceTags: [
      AudienceTag.USYD_STUDENTS,
    ]
  },
]