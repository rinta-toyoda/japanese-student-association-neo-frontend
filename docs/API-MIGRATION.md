# API Migration Guide

This document outlines how to migrate from static data to backend APIs.

## Current Structure

All data is currently stored as static exports in `/src/data/`:

```typescript
// Static data approach
import { executivesData } from '@/data/executives'
import { eventsData } from '@/data/events'
```

## Migration Strategy

### 1. Create API Routes (Next.js App Router)

```typescript
// app/api/executives/route.ts
export async function GET() {
  const executives = await fetchExecutivesFromDB()
  return Response.json(executives)
}

// app/api/events/route.ts
export async function GET() {
  const events = await fetchEventsFromDB()
  return Response.json(events)
}
```

### 2. Update Data Layer

Replace static imports in `/src/data/index.ts`:

```typescript
// Before: Static data
export { executivesData } from './executives'

// After: API data
export const getExecutives = async () => {
  const response = await fetch('/api/executives')
  if (!response.ok) throw new Error('Failed to fetch executives')
  return response.json()
}
```

### 3. Update Components

Convert components to async or use React Query:

```typescript
// With React Query
function ExecutivesPage() {
  const { data: executives, isLoading } = useQuery({
    queryKey: ['executives'],
    queryFn: getExecutives
  })
  
  if (isLoading) return <Loading />
  return <ExecutivesGrid executives={executives} />
}
```

### 4. Add Loading States

Implement proper loading and error states:

```typescript
// src/components/ui/loading.tsx
export function LoadingCard() {
  return (
    <div className="card animate-pulse">
      <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-3 bg-gray-200 rounded mb-4"></div>
    </div>
  )
}
```

## Recommended Libraries

- **React Query**: Data fetching and caching
- **Zod**: API response validation
- **Axios**: HTTP client with interceptors
- **SWR**: Alternative to React Query

## Database Schema

### Events Table
```sql
CREATE TABLE events (
  id UUID PRIMARY KEY,
  title_ja TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_ja TEXT,
  description_en TEXT,
  event_date TIMESTAMP NOT NULL,
  location_ja TEXT,
  location_en TEXT,
  image_url TEXT,
  event_type VARCHAR(20) CHECK (event_type IN ('upcoming', 'past')),
  registration_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Executives Table
```sql
CREATE TABLE executives (
  id UUID PRIMARY KEY,
  name_ja TEXT NOT NULL,
  name_en TEXT NOT NULL,
  position_ja TEXT NOT NULL,
  position_en TEXT NOT NULL,
  description_ja TEXT,
  description_en TEXT,
  image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```