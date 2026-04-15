import { BsStars } from 'react-icons/bs'
import styles from './PlannerTeaser.module.css'

const steps = [
  {
    number: '01',
    title: 'Tell us your chapter.',
    body: 'Mood, pace, budget, dates, companions. Paste a reel link, upload flight tickets, or just describe how you want to feel. SuperJourney listens.',
  },
  {
    number: '02',
    title: 'AI builds. You shape.',
    body: 'Our engine pulls 20+ years of on-the-ground experience and suggestion from real traveler.',
  },
  {
    number: '03',
    title: 'Book, share, go.',
    body: 'Book hotels, activities, eSIMs, and transport through Viator and GetYourGuide in one place. Invite friends to collaborate. Then just go.',
  },
]

const messages = [
  { type: 'ai', text: 'Describe your trip — where you want to go, what you want to do, your pace.' },
  { type: 'user', text: '7 days in Japan with food and culture' },
  { type: 'ai', text: "Here's your itinerary." },
  { type: 'ai', text: 'Day 1 — Tokyo arrival, Shinjuku exploration\nDay 2 — Tsukiji market, sushi trail, Asakusa' },
  { type: 'ai', text: 'Want to adjust pace or add experiences?' },
]

export default function PlannerTeaser() {
  return (
    <>
      {/* Ticker */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {Array(6).fill('PLAN FREELY. ADJUST INSTANTLY. TRAVEL BOLDLY.').map((t, i) => (
            <span key={i} className={styles.tickerItem}>{t}</span>
          ))}
        </div>
      </div>

      {/* Main Section */}
      <section className={styles.section}>
        <div className={`container ${styles.inner}`}>

          {/* Left */}
          <div className={styles.left}>
            <p className={styles.overline}>How It Works</p>
            <h2 className={styles.heading}>
              Tell us your trip. We'll plan it.
            </h2>

            <div className={styles.steps}>
              {steps.map((step) => (
                <div key={step.number} className={styles.step}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepBody}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Chat Mockup */}
          <div className={styles.right}>
            <div className={styles.chatCard}>
              <div className={styles.chatMessages}>
                {messages.map((msg, i) => (
                  <div key={i} className={styles.msgWrap}>
                    <div className={`${styles.bubble} ${styles[msg.type]}`}>
                      {msg.text.split('\n').map((line, j) => (
                        <span key={j}>
                          {line}
                          {j < msg.text.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className={styles.ctaBtn}>
              <BsStars size={14} />
              Try Hybrid AI Planner Now
            </button>
          </div>

        </div>
      </section>
    </>
  )
}