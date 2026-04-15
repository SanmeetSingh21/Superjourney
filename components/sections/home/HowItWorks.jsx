import { BsStars } from 'react-icons/bs'
import { FiDownload, FiShare2 } from 'react-icons/fi'
import styles from './HowItWorks.module.css'

const benefits = [
  "You don't stand in 2–3 hour queues",
  "You don't waste time crossing the city repeatedly",
  "You don't arrive at places at the wrong time",
  "Each day has a clear, workable flow",
]

export default function HowItWorks() {
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
                <button className={styles.actionBtn}>
                  <FiDownload size={14} /> Download
                </button>
                <button className={styles.actionBtnOutline}>
                  <FiShare2 size={14} /> Share
                </button>
                <div className={styles.dayPills}>
                  {['01', '02', '03', '04', '05'].map((d, i) => (
                    <span key={d} className={`${styles.dayPill} ${i === 0 ? styles.dayPillActive : ''}`}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.dayContent}>
              <div className={styles.dayNumber}>
                <span className={styles.dayNum}>01</span>
                <span className={styles.dayLabel}>DAY</span>
              </div>
              <div className={styles.dayBody}>
                <h4 className={styles.dayTitle}>Arrival in Tokyo + Shinjuku</h4>
                <p className={styles.daySubtitle}>(Neon Lights &amp; City Views)</p>
                <p className={styles.dayText}>
                  Arrive at Narita/Haneda → Check-in at Shinjuku → Explore Omoide
                  Yokocho → Tokyo Metropolitan Government Building (Free
                  Observation Deck) → Dinner in Shinjuku Golden Gai
                </p>

                <div className={styles.advantageBox}>
                  <div className={styles.advantageHeader}>
                    <BsStars size={13} />
                    <span>SuperJourneys Advantage</span>
                  </div>
                  <p className={styles.advantageText}>
                    Shinjuku provides the quintessential Tokyo experience immediately.
                    Easy access from airports and endless dining/entertainment options.
                  </p>
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