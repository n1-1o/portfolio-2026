# Portfolio Nested Routing System

## Architecture Overview

The portfolio uses **Next.js App Router with nested dynamic routes** to support hierarchical project structures:

```
/                    → Homepage (no right sidebar)
/work                → Work overview page
/work/[slug]         → Parent project OR standalone project
/work/[slug]/[subSlug] → Sub-project detail page
```

## Three-Column Layout Structure

The portfolio uses a **three-column layout** with conditional rendering:

```
┌─────────────────────────────────────────────────────────────┐
│                     Desktop Layout                          │
├──────────┬──────────────────────────┬──────────────┐
│          │                          │              │
│  Left    │      Main Content        │    Right     │
│ Sidebar  │      (Flexible)          │   Sidebar    │
│(250px)   │                          │   (200px)    │
│          │                          │              │
│  Global  │      Page Content        │   PageTOC    │
│   Nav    │                          │  (Conditional)│
│          │                          │              │
└──────────┴──────────────────────────┴──────────────┘
```

### Layout Components

**Homepage (`/`):**
- ✅ Left Sidebar (GlobalNav) - **Social links HIDDEN**
- ✅ Main Content
- ❌ Right Sidebar (PageTOC) - NOT shown

**Project Pages (`/work/[slug]`, `/play/[slug]`, etc.):**
- ✅ Left Sidebar (GlobalNav) - **Social links SHOWN**
- ✅ Main Content
- ✅ Right Sidebar (PageTOC) - Shows sections for the page

### Component Files

```
components/layout/
  SidebarNav.tsx      ← Left sidebar (fixed, 250px)
  PageTOC.tsx         ← Right sidebar (sticky, 200px)
  PageLayout.tsx      ← Optional wrapper for pages with ToC
```

## Route Structure

### Level 1: Work Overview
**Path:** `/work`
- Lists all work projects as cards
- File: `app/work/page.tsx`

### Level 2: Parent Project Page
**Path:** `/work/[slug]`
- Handles both parent projects (with sub-projects) and standalone projects
- File: `app/work/[slug]/page.tsx`

**Parent projects (with sub-projects):**
- `/work/fonoa`
- `/work/scaleway`

**Standalone projects:**
- `/work/thales`
- `/work/google`

### Level 3: Sub-Project Detail
**Path:** `/work/[slug]/[subSlug]`
- Displays individual sub-project content
- File: `app/work/[slug]/[subSlug]/page.tsx`

**Examples:**
- `/work/fonoa/e-invoicing`
- `/work/fonoa/lookup`
- `/work/scaleway/ai-inference`
- `/work/scaleway/generative-apis`

## Content Structure

### Project Interface

```typescript
interface Project {
  slug: string
  title: string
  company: string
  type: string[]
  description: string
  impact: string
  status?: 'live' | 'coming soon'
  image?: string
  subProjects?: SubProject[]  // For parent projects
  parentSlug?: string         // For sub-projects
}

interface SubProject {
  slug: string
  title: string
  description: string
  content?: string
  sections?: Section[]
}

interface Section {
  id: string
  title: string
  level?: number
}
```

### Example Configuration

```typescript
{
  slug: 'fonoa',
  title: 'Fonoa',
  subProjects: [
    {
      slug: 'e-invoicing',
      title: 'E-invoicing',
      description: 'Global e-invoicing compliance platform',
      sections: [
        { id: 'overview', title: 'Overview' },
        { id: 'challenge', title: 'Challenge' },
        { id: 'solution', title: 'Solution' },
      ]
    },
    {
      slug: 'lookup',
      title: 'Lookup',
      description: 'B2B phone number intelligence API',
    }
  ]
}
```

## Navigation Components

### 1. Breadcrumbs
**File:** `components/navigation/Breadcrumbs.tsx`

**Features:**
- Auto-generates from URL path
- Responsive (collapses on mobile)
- Keyboard accessible
- Current page marked with `aria-current`

**Example:**
```
Home › Work › Fonoa › E-invoicing
```

### 2. Project Navigation
**File:** `components/navigation/ProjectNav.tsx`

**Features:**
- Previous/Next project navigation
- Handles first/last project edge cases
- Works for both parent and sub-project levels
- Shows project titles

**Usage:**
```tsx
<ProjectNav 
  currentSlug="e-invoicing"
  parentSlug="fonoa"
/>
```

### 3. Page Table of Contents
**File:** `components/layout/PageTOC.tsx`

**Features:**
- Auto-highlights current section via IntersectionObserver
- Smooth scroll to sections
- Sticky sidebar positioning (right side)
- Keyboard accessible
- Conditional rendering (only shows if sections exist)
- Width: 200px

**Usage:**
```tsx
// In layout.tsx or page component
import { PageTOC } from '@/components/layout/PageTOC'

const sections = [
  { id: 'overview', title: 'Overview', level: 1 },
  { id: 'challenge', title: 'Challenge', level: 1 },
  { id: 'solution', title: 'Solution', level: 1 },
]

<PageTOC sections={sections} />
```

**Conditional Rendering:**
- Homepage: NOT shown
- Project pages: Shown with relevant sections
- Only renders if `sections` array is provided and non-empty

## Component Files

```
components/
  layout/
    SidebarNav.tsx        ← Left sidebar (fixed, 250px)
    PageTOC.tsx           ← Right sidebar (sticky, 200px)
    PageLayout.tsx        ← Optional wrapper component
  navigation/
    Breadcrumbs.tsx       ← Auto-generated breadcrumbs
    ProjectNav.tsx        ← Previous/Next navigation
    index.ts              ← Exports
  ui/
    TableOfContents.tsx   ← Legacy ToC (if still used)
```

## Page Templates

### Parent Project Page
```tsx
- SidebarNav (left sidebar with social links)
- Breadcrumbs
- Project metadata (badges, title, description)
- Impact section
- Sub-project cards (if has sub-projects)
- ProjectNav (previous/next at parent level)
- PageTOC (right sidebar, conditional on sections)
```

### Sub-Project Detail Page
```tsx
- SidebarNav (left sidebar with social links)
- Breadcrumbs
- Parent project name (context)
- Sub-project title & description
- Content sections (from content file)
- PageTOC (right sidebar, sticky)
- ProjectNav (previous/next at sub-project level)
```

### Homepage
```tsx
- SidebarNav (left sidebar, NO social links)
- AudienceSelector
- Hero
- WorkSection
- WritingSection
- TestimonialsSection
- ContactSection
- Footer
- NO PageTOC (right sidebar hidden)
```

## Adding New Projects

### Standalone Project
```typescript
{
  slug: 'new-project',
  title: 'New Project',
  company: 'Company',
  type: ['B2B'],
  description: 'Description',
  impact: 'Impact statement',
}
```

### Parent Project with Sub-Projects
```typescript
{
  slug: 'parent',
  title: 'Parent Company',
  subProjects: [
    {
      slug: 'sub-project-1',
      title: 'Sub Project 1',
      description: 'Description',
      sections: [
        { id: 'overview', title: 'Overview' },
        { id: 'details', title: 'Details' },
      ]
    },
    {
      slug: 'sub-project-2',
      title: 'Sub Project 2',
      description: 'Description',
    }
  ]
}
```

## Accessibility

- ✅ Semantic HTML (`<nav>`, `<ol>`, `<li>`)
- ✅ ARIA labels (`aria-label`, `aria-current`)
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader friendly

## Responsive Design

- **Desktop:** Full breadcrumbs, ToC sidebar visible
- **Tablet:** Condensed breadcrumbs, ToC may collapse
- **Mobile:** Single-line breadcrumbs, no ToC sidebar

## Future Enhancements

1. **Dynamic section generation** - Parse markdown headings automatically
2. **Progress indicator** - Show reading progress in ToC
3. **Sub-project thumbnails** - Visual cards for sub-projects
4. **Related projects** - Suggest similar work
5. **Search** - Filter projects by type, company, tags
