import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import LogoSlider from '@/components/ui/LogoSlider'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <LogoSlider />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  )
}
