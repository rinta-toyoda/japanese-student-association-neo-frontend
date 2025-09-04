'use client'

import { EventData } from '@/types'
import { motion, AnimatePresence } from 'framer-motion'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { HiCalendar, HiLocationMarker, HiExternalLink, HiX } from 'react-icons/hi'
import { useEffect } from 'react'

interface EventModalProps {
  event: EventData | null
  isOpen: boolean
  onClose: () => void
  isJapanese: boolean
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 50
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      duration: 0.5,
      bounce: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.3
    }
  }
}

export function EventModal({ event, isOpen, onClose, isJapanese }: EventModalProps) {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!event) return null

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
          weekday: 'long'
        })
      : date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long'
        })
  }

  const isUpcoming = event.type === 'upcoming'

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors shadow-md"
              aria-label={isJapanese ? '閉じる' : 'Close modal'}
            >
              <HiX className="h-5 w-5 text-gray-600" />
            </button>

            {/* Event Image */}
            {event.image && (
              <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                <OptimizedImage
                  src={event.image}
                  alt={eventData.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  showLoadingSpinner={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Event Type Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold ${
                  isUpcoming 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-gray-100 text-gray-600 border border-gray-200'
                }`}>
                  {isUpcoming 
                    ? (isJapanese ? '予定' : 'Upcoming')
                    : (isJapanese ? '終了' : 'Past Event')
                  }
                </div>
              </div>
            )}

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Event Type Badge (when no image) */}
              {!event.image && (
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-bold ${
                  isUpcoming 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-gray-100 text-gray-600 border border-gray-200'
                }`}>
                  {isUpcoming 
                    ? (isJapanese ? '予定' : 'Upcoming')
                    : (isJapanese ? '終了' : 'Past Event')
                  }
                </div>
              )}

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                {eventData.title}
              </h2>

              {/* Date and Location */}
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start gap-3">
                  <HiCalendar className="h-5 w-5 text-jss-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {formatDate(event.date)}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HiLocationMarker className="h-5 w-5 text-jss-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {eventData.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {isJapanese ? '詳細' : 'Event Details'}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {eventData.description}
                </p>
              </div>

              {/* Registration Section */}
              {event.registrationUrl && isUpcoming && (
                <div className="border-t pt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {isJapanese ? '参加登録' : 'Registration'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {isJapanese 
                        ? 'このイベントに参加するには登録が必要です。下のボタンをクリックして登録してください。'
                        : 'Registration is required to attend this event. Click the button below to register.'
                      }
                    </p>
                    <motion.a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 btn-primary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{isJapanese ? '今すぐ登録' : 'Register Now'}</span>
                      <HiExternalLink className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>
              )}

              {/* Past Event Notice */}
              {!isUpcoming && (
                <div className="border-t pt-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-600 text-sm">
                      {isJapanese 
                        ? 'このイベントは終了しました。今後のイベント情報については、イベントページをご確認ください。'
                        : 'This event has ended. Please check our events page for upcoming activities.'
                      }
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}