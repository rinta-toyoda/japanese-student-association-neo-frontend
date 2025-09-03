export { navigationItems } from './navigation'
export { executivesData } from './executives'
export { eventsData } from './events'
export { aboutUsData } from './about'

// Future API integration point - replace these exports with API calls
// Example migration:
// export const executivesData = await fetch('/api/executives').then(r => r.json())
// export const eventsData = await fetch('/api/events').then(r => r.json())