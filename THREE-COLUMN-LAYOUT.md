# Three-Column Layout Implementation

## Overview

Implemented a three-column layout structure for the Next.js portfolio with:
- **Left Sidebar**: Fixed GlobalNav (250px width)
- **Main Content**: Flexible center column
- **Right Sidebar**: Sticky PageTOC (200px width, conditional)

## Files Modified

### 1. `components/layout/SidebarNav.tsx` (Modified)
- Fixed left sidebar with 250px width
- Profile image placeholder (60px circular) + "NT" text (serif font)
- Navigation items: Work, Play, With, Me
- **Conditional social links**: Hidden on homepage (`pathname === '/'`), shown on other pages
- Social links: Email, LinkedIn, Medium
- Mobile navigation preserved (hamburger menu)

**Key Features:**
```tsx
// Social links hidden on homepage
<SidebarNav showSocialLinks={false} />  // Homepage
<SidebarNav showSocialLinks={true} />   // Other pages (default)
```

### 2. `components/layout/PageTOC.tsx` (Created)
- Sticky right sidebar with 200px width
- Accepts `sections` prop: `Array<{id: string, title: string, level?: number}>`
- Smooth scroll to sections with `scrollIntoView({ behavior: 'smooth' })`
- Active section highlighting via `useSectionObserver` hook
- **Conditional rendering**: Only renders if sections array exists and is non-empty
- URL hash updates with `history.pushState`

**Usage:**
```tsx
const sections = [
  { id: 'overview', title: 'Overview', level: 1 },
  { id: 'challenge', title: 'Challenge', level: 1 },
  { id: 'solution', title: 'Solution', level: 1 },
]

<PageTOC sections={sections} />
```

### 3. `app/layout.tsx` (Modified)
- Three-column structure in root layout
- Left sidebar fixed position
- Main content with `ml-[250px]` for left sidebar spacing
- Right sidebar removed from root layout (now handled per-page)

**Structure:**
```tsx
<div className="flex">
  <SidebarNav />
  <main className="flex-1 ml-[250px] min-h-screen">
    {children}
  </main>
</div>
```

### 4. `app/page.tsx` (Modified)
- Homepage includes `SidebarNav` with `showSocialLinks={false}`
- No PageTOC on homepage
- Sections: AudienceSelector → Hero → Work → Writing → Testimonials → Contact

### 5. `app/work/[slug]/page.tsx` (Modified)
- Removed grid-based PageTOC column
- Now uses fixed-position PageTOC from layout
- Simplified content structure (removed grid columns)
- Social links in sidebar are shown (default behavior)

### 6. `components/layout/Header.tsx` (Deleted)
- Removed - no longer needed with three-column layout

### 7. `components/layout/GlobalNav.tsx` (Deleted)
- Removed - replaced by SidebarNav

### 8. `components/layout/PageLayout.tsx` (Created)
- Optional wrapper component for pages that want to include PageTOC
- Provides flexible structure for future layouts

### 9. `docs/ROUTING-STRUCTURE.md` (Updated)
- Added three-column layout documentation
- Updated component file references
- Added usage examples for PageTOC
- Documented conditional rendering behavior

## Layout Behavior

### Homepage (`/`)
```
┌──────────┬──────────────────────────┐
│          │                          │
│  Left    │      Main Content        │
│ Sidebar  │      (Full width)        │
│(250px)   │                          │
│          │                          │
│  Global  │  - AudienceSelector      │
│   Nav    │  - Hero                  │
│          │  - Work                  │
│ (NO      │  - Writing               │
│ social)  │  - Testimonials          │
│          │  - Contact               │
└──────────┴──────────────────────────┘
```

### Project Pages (`/work/[slug]`, etc.)
```
┌──────────┬──────────────────┬────────────┐
│          │                  │            │
│  Left    │   Main Content   │   Right    │
│ Sidebar  │   (Flexible)     │  Sidebar   │
│(250px)   │                  │  (200px)   │
│          │                  │            │
│  Global  │  Project Content │  PageTOC   │
│   Nav    │  - Breadcrumbs   │  (Sticky)  │
│ (WITH    │  - Impact        │            │
│ social)  │  - Projects      │  On this   │
│          │                  │   page     │
└──────────┴──────────────────┴────────────┘
```

## Responsive Behavior

- **Desktop (lg+)**: Full three-column layout visible
- **Tablet (md)**: Left sidebar visible, right sidebar may collapse
- **Mobile (< lg)**: Hamburger menu for navigation, no sidebars

## Accessibility

- ✅ Semantic HTML (`<aside>`, `<nav>`, `<ul>`, `<li>`)
- ✅ ARIA labels (`aria-label` on nav elements)
- ✅ Keyboard navigation support
- ✅ Smooth scroll with `scrollIntoView`
- ✅ Active section highlighting for screen readers

## Next Steps

1. **Test on different screen sizes** - Verify responsive behavior
2. **Add more sections to project pages** - Populate PageTOC with meaningful content
3. **Consider adding right margin** - Main content may need `mr-[200px]` on desktop when PageTOC is shown
4. **Mobile optimization** - Ensure mobile menu works correctly with new structure

## Testing Checklist

- [ ] Homepage loads without right sidebar
- [ ] Homepage sidebar has NO social links
- [ ] Project pages show right sidebar with PageTOC
- [ ] Project pages sidebar HAS social links
- [ ] Smooth scrolling works when clicking ToC links
- [ ] Active section highlighting works
- [ ] Mobile navigation works correctly
- [ ] No layout shifts or overlaps
- [ ] Main content doesn't overlap with sidebars
