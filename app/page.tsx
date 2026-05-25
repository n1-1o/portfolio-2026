import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { WorkSection } from '@/components/sections/WorkSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { WritingSection } from '@/components/sections/WritingSection'

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        <WorkSection />
        <TestimonialsSection />
        <WritingSection />
      </main>
      
      <Footer />
    </>
  )
}
