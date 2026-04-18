'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiChevronLeft, FiGlobe, FiZap, FiSend } from 'react-icons/fi'
import { PiRobotBold } from 'react-icons/pi'
import styles from './planner.module.css'

export default function PlannerPage() {
  const fullText = "Welcome to the SuperJourneys AI Planner. Describe your dream trip — where you want to go, what you love to do, and your preferred pace. I'll craft a bespoke itinerary just for you."
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(interval)
        setIsTyping(false)
      }
    }, 20)
    return () => clearInterval(interval)
  }, [])

  const messages = [
    {
      role: 'assistant',
      content: displayText,
      time: '02 : 00 AM'
    }
  ]


  return (
    <main className={styles.page}>
      
      {/* ── Sub-Navigation ── */}
      <header className={styles.topBar}>
        <div className={styles.titleArea}>
          <Link href="/" className={styles.backBtn}>
            <FiChevronLeft size={24} />
          </Link>
          <div>
            <h1 className={styles.title}>AI Journey Planner</h1>
            <div className={styles.liveIndicator}>
              <span className={styles.liveDot}></span>
              LIVE INTELLIGENCE
            </div>
          </div>
        </div>

        <div className={styles.indicators}>
          <div className={styles.indicator}>
            <FiGlobe size={14} /> GLOBAL DATA
          </div>
          <div className={styles.indicator}>
            <FiZap size={14} /> PREMIUM ENGINE
          </div>
        </div>
      </header>

      {/* ── Chat Canvas ── */}
      <div className={styles.chatArea}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.messageRow}>
            <div className={styles.avatar}>
              <PiRobotBold size={24} />
            </div>
            <div className={styles.bubble}>
              <p>{msg.content}</p>
              <span className={styles.time}>{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Fixed Input Dock ── */}
      <section className={styles.inputArea}>
        <div className={styles.inputWrap}>
          <input 
            type="text" 
            placeholder="Describe your dream trip (e.g., '10 days in Italy, focusing on food and art, slow pace')" 
            className={styles.input}
          />
          <button className={styles.sendBtn}>
            <FiSend size={18} />
            SEND
          </button>
        </div>
        <p className={styles.disclaimer}>
          SUPERJOURNEYS AI CAN MAKE MISTAKES. VERIFY IMPORTANT INFORMATION.
        </p>
      </section>
      
    </main>
  )
}
