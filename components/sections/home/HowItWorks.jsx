'use client'

import { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { FiDownload, FiShare2 } from 'react-icons/fi'
import styles from './HowItWorks.module.css'

const days = [
  {
    num: '01',
    title: 'Arrival in Tokyo + Shinjuku',
    subtitle: '(Neon Lights & City Views)',
    text: 'Arrive at Narita/Haneda → Check-in at Shinjuku → Explore Omoide Yokocho → Tokyo Metropolitan Government Building (Free Observation Deck) → Dinner in Shinjuku Golden Gai',
    advantage: 'Shinjuku provides the quintessential Tokyo experience immediately. Easy access from airports and endless dining/entertainment options.',
  },
  {
    num: '02',
    title: 'Harajuku + Shibuya',
    subtitle: '(Culture & Pop Trends)',
    text: 'Meiji Jingu Shrine → Takeshita Street (Harajuku) → Omotesando → Shibuya Crossing → Hachiko Statue → Shibuya Sky Observation Deck',
    advantage: 'A perfect blend of serene tradition (Meiji Jingu) and vibrant modern Tokyo (Shibuya/Harajuku).',
  },
  {
    num: '03',
    title: 'Asakusa + Akihabara',
    subtitle: '(Old Tokyo & Tech)',
    text: 'Senso-ji Temple (Asakusa) → Nakamise Shopping Street → Sumida River Cruise → Akihabara Electric Town → Retro Gaming Arcades',
    advantage: 'Experience the contrast between the historic Asakusa district and the futuristic tech hub of Akihabara.',
  },
  {
    num: '04',
    title: 'Day Trip to Hakone',
    subtitle: '(Mt. Fuji Views & Onsen)',
    text: 'Shinjuku Station → Hakone-Yumoto → Hakone Open-Air Museum → Lake Ashi Cruise → Hakone Ropeway (Mt. Fuji views) → Onsen Soak',
    advantage: 'A necessary escape from the city. Hakone offers stunning nature and the iconic Mt. Fuji views.',
  },
  {
    num: '05',
    title: 'Tsukiji + Departure',
    subtitle: '(Sushi & Souvenirs)',
    text: 'Tsukiji Outer Market (Sushi breakfast) → Ginza Shopping District → Last-minute souvenir shopping → Departure',
    advantage: 'Tsukiji is the best place for a final authentic Japanese breakfast before heading to the airport.',
  },
]

const benefits = [
  "You don't stand in 2–3 hour queues",
  "You don't waste time crossing the city repeatedly",
  "You don't arrive at places at the wrong time",
  "Each day has a clear, workable flow",
]

export default function HowItWorks() {
  const [activeDay, setActiveDay] = useState(0)
  const day = days[activeDay]

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.overline}>Output + Value</p>
            <h2 className={styles.heading}>
              See how your trip <br />
              <em className={styles.accent}>gets planned</em>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.headerNote}>
              A detailed, executable, and optimized plan — in seconds.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>

          {/* Left — Itinerary Card */}
          <div className={styles.itineraryCard}>
            <div className={styles.cardTop}>
              <div className={styles.cardTopLeft}>
                <p className={styles.caseStudy}>— Case Study: Japan</p>
                <h3 className={styles.tripTitle}>5 Days in Japan</h3>
              </div>
              <div className={styles.cardActions}>
                <a 
                  href="/japan-itinerary.pdf" 
                  download 
                  className={styles.actionBtn}
                >
                  <FiDownload size={14} /> Download
                </a>
                <button className={styles.actionBtnOutline}>
                  <FiShare2 size={14} /> Share
                </button>
                <div className={styles.dayPills}>
                  {days.map((d, i) => (
                    <button
                      key={d.num}
                      onClick={() => setActiveDay(i)}
                      className={`${styles.dayPill} ${activeDay === i ? styles.dayPillActive : ''}`}
                    >
                      {d.num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.dayContent}>
              <div className={styles.dayNumber}>
                <span className={styles.dayNum}>{day.num}</span>
                <span className={styles.dayLabel}>DAY</span>
              </div>
              <div className={styles.dayBody}>
                <h4 className={styles.dayTitle}>{day.title}</h4>
                <p className={styles.daySubtitle}>{day.subtitle}</p>
                <p className={styles.dayText}>{day.text}</p>

                <div className={styles.advantageBox}>
                  <div className={styles.advantageHeader}>
                    <BsStars size={13} />
                    <span>SuperJourneys Advantage</span>
                  </div>
                  <p className={styles.advantageText}>{day.advantage}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Benefits Card */}
          <div className={styles.benefitsCard}>
            <h3 className={styles.benefitsTitle}>
              What this <br />
              <em className={styles.benefitsAccent}>means for you</em>
            </h3>

            <ul className={styles.benefitsList}>
              {benefits.map((b, i) => (
                <li key={i} className={styles.benefitItem}>
                  <span className={styles.benefitNum}>0{i + 1}</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className={styles.benefitsFooter}>
              <p className={styles.benefitsQ}>"Is this a real, usable plan?"</p>
              <p className={styles.benefitsA}>
                Yes. Detailed, executable, downloaded, shareable and optimized.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}