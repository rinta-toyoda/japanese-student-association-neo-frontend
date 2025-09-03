# Japanese Student Association - Frontend Neo

Modern, SEO-optimized website for the University of Sydney Japanese Student Society built with Next.js 15.

## 🚀 Features

- **Bilingual Support**: Full Japanese/English language switching
- **Modern UI**: Framer Motion animations, responsive design
- **SEO Optimized**: Meta tags, structured data, sitemap generation
- **Professional Structure**: Scalable Next.js architecture ready for API integration
- **Accessible**: WCAG compliant components with proper ARIA labels

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **State**: Jotai for language management
- **Animations**: Framer Motion
- **Icons**: React Icons + custom JSS assets
- **SEO**: Next.js built-in meta management + structured data

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── executives/         # Executives page
│   ├── events/            # Events page
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # Reusable UI components
│   ├── layout/           # Layout components (nav, footer)
│   ├── ui/               # Base UI components
│   ├── home/             # Home page components
│   ├── executives/       # Executive page components
│   ├── events/           # Events page components
│   └── providers/        # Context providers
├── data/                 # Static data (ready for API replacement)
│   ├── executives.ts     # Executive team data
│   ├── events.ts         # Events data
│   ├── navigation.ts     # Navigation items
│   └── about.ts          # About us content
├── lib/                  # Utilities and configurations
│   └── atoms.ts          # Jotai state atoms
├── types/                # TypeScript type definitions
├── assets/               # Static assets (images, fonts)
└── styles/               # Global styles
```

## 🌐 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Structured Data**: JSON-LD for Organization
- **Open Graph**: Social media optimization
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine directives
- **Canonical URLs**: Proper URL canonicalization

## 🔄 Future API Integration

The project is designed for easy API migration. Replace static imports in `/src/data/index.ts`:

```typescript
// Current: Static data
export { executivesData } from './executives'

// Future: API integration
export const executivesData = async () => {
  const response = await fetch('/api/executives')
  return response.json()
}
```

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Responsive Navigation**: Collapsible mobile menu
- **Flexible Layouts**: Grid and flexbox layouts
- **Touch Friendly**: Proper touch targets and interactions

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliant colors
- **Focus Management**: Clear focus indicators

## 🌏 Internationalization

- **Language Toggle**: Persistent language preference
- **Localized Content**: All text content in both languages
- **Cultural Adaptation**: Appropriate fonts and layouts per language
- **SEO Localization**: Language-specific meta tags and structured data
