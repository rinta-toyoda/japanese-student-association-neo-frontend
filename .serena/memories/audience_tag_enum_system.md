# Audience Tag Enum System Implementation

## Problem Addressed
User feedback: "audienceTags are probably going to use similar values so maybe it's better to have it as an enum?"

## Enum Design
Created a robust enum system in `src/types/index.ts`:

```typescript
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
```

## Benefits
1. **Type Safety**: Prevents typos and invalid tag values
2. **Maintainability**: Centralized tag definitions and labels
3. **Extensibility**: Easy to add new audience types
4. **Consistency**: Ensures uniform tag usage across the codebase
5. **IntelliSense**: Full autocomplete support in IDEs

## Implementation Changes
- **EventData Interface**: Changed from `{ ja: string; en: string }[]` to `AudienceTag[]`
- **Events Data**: Updated to use enum values like `AudienceTag.USYD_STUDENTS`
- **Components**: Updated to use `AUDIENCE_TAG_LABELS[tag].ja/en` for display
- **Import Updates**: Added imports for enum and label constants

## Available Tags
- `USYD_STUDENTS`: For current university students
- `EXTERNAL_VISITORS`: For non-university attendees
- `JSS_MEMBERS`: For society members only
- `GRADUATES`: For alumni
- `FACULTY_STAFF`: For university staff

## Usage Example
```typescript
// In events data
audienceTags: [AudienceTag.USYD_STUDENTS, AudienceTag.EXTERNAL_VISITORS]

// In components  
{isJapanese ? AUDIENCE_TAG_LABELS[tag].ja : AUDIENCE_TAG_LABELS[tag].en}
```

This system provides excellent developer experience while maintaining flexibility for future expansion.