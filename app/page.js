'use client'

import { useEffect } from 'react'
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
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <div className="reveal"><PlannerTeaser /></div>
      <div className="reveal"><HowItWorks /></div>
      <div className="reveal"><TravelerTypes /></div>
      <div className="reveal"><Stats /></div>
      <div className="reveal"><Features /></div>
      <div className="reveal"><AIWidget /></div>
      <div className="reveal"><Testimonials /></div>
      <div className="reveal"><CapturedMoments /></div>
      <div className="reveal"><FinalCTA /></div>
    </>
  )
}