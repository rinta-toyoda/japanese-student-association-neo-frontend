'use client'

import { useState } from 'react'
import { useAtom } from 'jotai'
import { isJapaneseAtom } from '@/lib/atoms'
import { eventsData } from '@/data'
import { EventData } from '@/types'
import { EventCard } from './event-card'
import { EventModal } from './event-modal'
import { SectionTitle } from '@/components/ui/section-title'
import { motion } from 'framer-motion'
import { HiCalendar, HiClock } from 'react-icons/hi'

type EventFilter = 'all' | 'upcoming' | 'past'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export function EventsSection() {
  const [isJapanese] = useAtom(isJapaneseAtom)
  const [filter, setFilter] = useState<EventFilter>('all')
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredEvents = eventsData.filter(event => {
    if (filter === 'all') return true
    return event.type === filter
  })

  const upcomingEvents = eventsData.filter(e => e.type === 'upcoming')
  const pastEvents = eventsData.filter(e => e.type === 'past')

  const handleEventClick = (event: EventData) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Delay clearing selected event to allow animation to complete
    setTimeout(() => setSelectedEvent(null), 300)
  }

  const filterButtons = [
    { key: 'all' as EventFilter, ja: 'すべて', en: 'All Events', count: eventsData.length },
    { key: 'upcoming' as EventFilter, ja: '今後のイベント', en: 'Upcoming', count: upcomingEvents.length },
    { key: 'past' as EventFilter, ja: '過去のイベント', en: 'Past Events', count: pastEvents.length },
  ]

  return (
    <>
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filterButtons.map((button) => (
              <motion.button
                key={button.key}
                onClick={() => setFilter(button.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${
                  filter === button.key
                    ? 'bg-jss-red text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
                whileHover={{ scale: filter !== button.key ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
              >
                {button.key === 'upcoming' && <HiCalendar className="h-4 w-4" />}
                {button.key === 'past' && <HiClock className="h-4 w-4" />}
                <span>{isJapanese ? button.ja : button.en}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  filter === button.key 
                    ? 'bg-white/20' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {button.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Upcoming Events Section */}
          {(filter === 'all' || filter === 'upcoming') && upcomingEvents.length > 0 && (
            <div className="mb-16">
              <SectionTitle>
                <h2 className="text-3xl md:text-4xl font-bold text-jss-red flex items-center justify-center gap-3">
                  <HiCalendar className="h-8 w-8" />
                  {isJapanese ? '今後のイベント' : 'Upcoming Events'}
                </h2>
              </SectionTitle>
              
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {upcomingEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    isJapanese={isJapanese}
                    onClick={handleEventClick}
                  />
                ))}
              </motion.div>
            </div>
          )}

          {/* Past Events Section */}
          {(filter === 'all' || filter === 'past') && pastEvents.length > 0 && (
            <div>
              <SectionTitle>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-700 flex items-center justify-center gap-3">
                  <HiClock className="h-8 w-8" />
                  {isJapanese ? '過去のイベント' : 'Past Events'}
                </h2>
              </SectionTitle>
              
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {pastEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    isJapanese={isJapanese}
                    onClick={handleEventClick}
                  />
                ))}
              </motion.div>
            </div>
          )}

          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-500 text-lg">
                {isJapanese ? 'イベントが見つかりませんでした。' : 'No events found.'}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isJapanese={isJapanese}
      />
    </>
  )
}