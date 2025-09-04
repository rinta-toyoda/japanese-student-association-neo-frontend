# Task Completion Checklist

## Before Completing Any Task
1. **Code Quality**
   - Run `npm run lint` to check for ESLint errors
   - Ensure TypeScript compilation passes
   - Verify proper imports and exports

2. **Testing**
   - Test in development server (`npm run dev`)
   - Check both mobile and desktop responsive design
   - Test bilingual functionality (Japanese/English)
   - Verify accessibility with keyboard navigation

3. **Component Integration**
   - Ensure proper prop passing
   - Verify state management works correctly
   - Test Framer Motion animations
   - Check all click handlers and interactions

4. **Build Verification**
   - Run `npm run build` to ensure production build works
   - Check for any build warnings or errors
   - Verify no unused imports or variables

## UI/UX Validation
- Mobile responsiveness (320px+)
- Touch targets are at least 44px
- Proper color contrast ratios
- Loading states for images and async operations
- Error handling and user feedback

## Performance Considerations
- Optimize images with `OptimizedImage` component
- Use proper Framer Motion performance settings
- Minimize re-renders with proper dependency arrays