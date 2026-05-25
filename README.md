# Nguyen Tran-Ngo Portfolio 2026

Personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Typography**: Inter (sans-serif) + Alice (serif)
- **Animations**: Framer Motion (coming soon)
- **Content**: MDX for writing section (coming soon)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-2026/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components (Header, Footer, Container)
│   ├── ui/                # Reusable UI components (Button, Card, Badge)
│   └── sections/          # Page sections (Hero, WorkSection, etc.)
├── content/               # Content data (projects, testimonials, articles)
├── lib/                   # Utilities and helpers
└── tailwind.config.ts     # Tailwind configuration
```

## Design System

### Colors

- **Primary**: `#383838` (dark gray for text)
- **Interactive**: `#0000EE` (blue for links/CTAs)
- **Backgrounds**: White + light grays
- **Success**: `#009C10` (green)

### Typography

- **H1**: 56px Alice serif
- **H2**: 24px Alice serif
- **Body**: 16px Inter sans-serif
- **Labels**: 20px Inter sans-serif

### Spacing

- **Section padding**: 80-160px
- **Component gap**: 16px (primary), 32px (sections)

## Development

### Available Scripts

```bash
npm run dev      # Development server
npm run build    # Build for production
npm run start    # Production server
npm run lint     # Run ESLint
```

## Deployment

This site is deployed to Vercel. Pushes to `main` branch trigger automatic deployments.

**Production URL**: https://nguyentran-ngo.design

## Future Features

- [ ] RPG game mode toggle (16-bit pixel art style)
- [ ] AI chatbot integration
- [ ] MDX writing section
- [ ] Individual project pages
- [ ] Animations with Framer Motion

## License

© 2026 Nguyen Tran-Ngo. All rights reserved.
