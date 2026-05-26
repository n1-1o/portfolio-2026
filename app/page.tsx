import { SidebarNav } from '@/components/layout/SidebarNav'
import { Footer } from '@/components/layout/Footer'
import { AudienceSelector } from '@/components/sections/AudienceSelector'
import { Hero } from '@/components/sections/Hero'
import { WorkSection } from '@/components/sections/WorkSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { WritingSection } from '@/components/sections/WritingSection'

export default function Home() {
  return (
    <>
      <SidebarNav showSocialLinks={false} />
      
      <main>
        <AudienceSelector />
        <Hero />
        <WorkSection />
        <WritingSection />
        <TestimonialsSection id="testimonials" />
      </main>
      
      <Footer />
    </>
  )
}
