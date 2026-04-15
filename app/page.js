import Hero from '@/components/sections/home/Hero'
import PlannerTeaser from '@/components/sections/home/PlannerTeaser'
import HowItWorks from '@/components/sections/home/HowItWorks'
import TravelerTypes from '@/components/sections/home/TravelerTypes'
import Stats from '@/components/sections/home/Stats'
import Features from '@/components/sections/home/Features'
import AIWidget from '@/components/sections/home/AIWidget'
import Testimonials from '@/components/sections/home/Testimonials'
import CapturedMoments from '@/components/sections/home/CapturedMoments'
import FinalCTA from '@/components/sections/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <PlannerTeaser />
      <HowItWorks />
      <TravelerTypes />
      <Stats />
      <Features />
      <AIWidget />
      <Testimonials />
      <CapturedMoments />
      <FinalCTA />
    </>
  )
}