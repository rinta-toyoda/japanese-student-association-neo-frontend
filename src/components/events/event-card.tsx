'use client'

import { EventData, AUDIENCE_TAG_LABELS } from '@/types'
import { motion } from 'framer-motion'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { HiCalendar, HiLocationMarker, HiExternalLink } from 'react-icons/hi'

interface EventCardProps {
  event: EventData
  isJapanese: boolean
  onClick?: (event: EventData) => void
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1
  },
}

export function EventCard({ event, isJapanese, onClick }: EventCardProps) {
  const eventData = {
    title: isJapanese ? event.title.ja : event.title.en,
    description: isJapanese ? event.description.ja : event.description.en,
    location: isJapanese ? event.location.ja : event.location.en,
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return isJapanese 
      ? date.toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
  }

  const isUpcoming = event.type === 'upcoming'

  return (
    <motion.div
      className={`card relative overflow-hidden cursor-pointer ${
        isUpcoming ? 'ring-2 ring-jss-red ring-opacity-50' : ''
      }`}
      variants={cardVariants}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.5 }}
      onClick={() => onClick?.(event)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.(event)
        }
      }}
      aria-label={`${isJapanese ? '詳細を見る:' : 'View details for'} ${eventData.title}`}
    >
      {/* Event Type Badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold z-20 ${
        isUpcoming 
          ? 'bg-green-100 text-green-800' 
          : 'bg-gray-100 text-gray-600'
      }`}>
        {isUpcoming 
          ? (isJapanese ? '予定' : 'Upcoming')
          : (isJapanese ? '終了' : 'Past')
        }
      </div>

      {/* Event Image */}
      {event.image && (
        <div className="relative w-[calc(100%+3rem)] h-48 mb-6 -mx-6 -mt-6 overflow-hidden">
          <OptimizedImage
            src={event.image}
            alt={eventData.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            showLoadingSpinner={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <div className="space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {eventData.title}
        </h3>

        {/* Date and Location */}
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <HiCalendar className="h-4 w-4 text-jss-red flex-shrink-0" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-start gap-2">
            <HiLocationMarker className="h-4 w-4 text-jss-red flex-shrink-0 mt-0.5" />
            <button
              onClick={(e) => {
                e.stopPropagation()
                const query = encodeURIComponent(eventData.location)
                window.open(`https://www.google.com/maps/search/${query}`, '_blank')
              }}
              className="text-left hover:text-jss-red transition-colors cursor-pointer underline decoration-dotted underline-offset-2"
            >
              {eventData.location}
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
          {eventData.description}
        </p>

        {/* Audience Tags */}
        {event.audienceTags && event.audienceTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {event.audienceTags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200"
              >
                {isJapanese ? AUDIENCE_TAG_LABELS[tag].ja : AUDIENCE_TAG_LABELS[tag].en}
              </span>
            ))}
          </div>
        )}

        {/* Click to view more indicator */}
        <div className="text-xs text-jss-red font-medium mt-4 opacity-75">
          {isJapanese ? 'クリックして詳細を見る →' : 'Click for more details →'}
        </div>

        {/* Registration Button */}
        {event.registrationUrl && isUpcoming && (
          <motion.a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary text-sm mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()} // Prevent triggering the card click
          >
            <span>{isJapanese ? '参加登録' : 'Register'}</span>
            <HiExternalLink className="h-4 w-4" />
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}