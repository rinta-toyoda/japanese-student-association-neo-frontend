# Code Style and Conventions

## TypeScript Conventions
- Use TypeScript for all components and utilities
- Strict type definitions in `src/types/index.ts`
- Interface naming: PascalCase (e.g., `EventData`, `ExecutiveData`)
- Export types alongside implementation

## Component Structure
- Use functional components with hooks
- Client components: `'use client'` directive at top
- Props interface naming: `ComponentNameProps`
- File naming: kebab-case (e.g., `event-modal.tsx`)
- Component naming: PascalCase (e.g., `EventModal`)

## State Management
- Jotai for global state (language switching)
- Local useState for component-specific state
- State atoms in `src/lib/atoms.ts`

## Styling
- Tailwind CSS with custom utilities
- Custom colors: `jss-red`, `jss-red-dark`, `jss-skin`
- Responsive design: mobile-first approach
- Framer Motion for animations

## Accessibility
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Semantic HTML structure
- Screen reader friendly content

## Bilingual Support
- All text content in both Japanese and English
- Language switching via Jotai atom
- Conditional rendering based on `isJapanese` state