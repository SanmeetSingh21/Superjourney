'use client'

import { BsStars } from 'react-icons/bs'
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />

      <div className={`container ${styles.inner}`}>

        {/* Left */}
        <div className={styles.content}>
          <p className={styles.overline}>AI Speed • 20 Years Expertise</p>

          <h1 className={styles.heading}>
            Total freedom <br />
            <em className={styles.accent}>and control.</em>
          </h1>

          <p className={styles.sub}>Build your perfect itinerary.</p>

          <p className={styles.body}>
            Describe your trip in a few words. Get a complete, day-by-day itinerary in seconds.
          </p>

          <div className={styles.actions}>
            <Link href="/planner" className={styles.btnPrimary}>
              <BsStars size={15} />
              Generate Hybrid AI Trip Itinerary
            </Link>
            <Link href="/get-inspired" className={styles.btnSecondary}>
              How It Works
            </Link>
          </div>
        </div>

        {/* Right — Glass Card */}
        <div className={styles.cardWrap}>
          <div className={styles.glassCard}>
            <div className={styles.cardTop}>
              <div className={styles.cardBadgeWrap}>
                <span className={styles.cardBadgeIcon}>
                  <BsStars size={18} />
                </span>
                <div>
                  <p className={styles.cardBadgeTitle}>AI Intelligence</p>
                  <p className={styles.cardBadgeSub}>Real-Time Data</p>
                </div>
              </div>
            </div>

            <blockquote className={styles.quote}>
              "The most intuitive planning experience I've ever had. It understood my mood perfectly."
            </blockquote>

            <div className={styles.reviewer}>
              <div className={styles.reviewerAvatar} />
              <div>
                <p className={styles.reviewerName}>Marcus Chen</p>
                <p className={styles.reviewerRole}>Global Nomad</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}