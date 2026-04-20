'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import styles from './itinerary.module.css'
import { journeys } from '../../../data/journeys'
import { 
  FiArrowLeft, 
  FiPlus, 
  FiMapPin, 
  FiArrowRight,
  FiSearch,
  FiPlusCircle,
  FiMinusCircle
} from 'react-icons/fi'

export default function ItineraryPage() {
  const params = useParams()
  const id = parseInt(params.id)
  const journey = journeys.find(j => j.id === id)
  const [activeDay, setActiveDay] = useState(1)

  if (!journey) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h1>Journey Not Found</h1>
        <Link href="/get-inspired">Back to Inspiration</Link>
      </div>
    )
  }

  return (
    <main className={styles.page}>
      
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={journey.image} alt={journey.title} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroInner}>
          <Link href="/get-inspired" className={styles.backLink}>
            <FiArrowLeft /> BACK TO EXPLORE
          </Link>
          <h1 className={styles.heroHeading}>
            {journey.titlePrefix} <br />
            <span className={styles.heroItalic}>{journey.titleItalic}</span> Itinerary
          </h1>
          <div className={styles.heroActions}>
            <button className={styles.startBtn}>GET THE FULL PLAN</button>
          </div>
        </div>
      </section>

      {/* ── Route Section ── */}
      <section className={styles.routeSection}>
        <div className={styles.routeBgText}>ROUTE</div>
        <div className={`container ${styles.routeInner}`}>
          <p className={styles.routeLabel}>CURATED TRAVEL INTELLIGENCE</p>
          <h2 className={styles.routeTitle}>The Path Less Traveled</h2>
          
          <div className={styles.routeTrack}>
            {journey.routeNodes.map((node, i) => (
              <div key={node} className={styles.routeNode}>
                <div className={styles.nodeCircle}>{i + 1}</div>
                <span className={styles.nodeName}>{node}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Widgets ── */}
      <section className={styles.widgetsGrid}>
        {/* Weather */}
        <div className={styles.widgetCard}>
          <div className={styles.weatherWidget}>
            <p className={styles.widgetLabel}>WEATHER FORECAST</p>
            <h3 className={styles.widgetTitle}>Weather Forecast</h3>
            <p className={styles.dayDesc} style={{ fontStyle: 'normal', margin: 0 }}>
              Data-backed insights based on your {journey.days}-day stay pattern to ensure you pack exactly what you need.
            </p>
            <div className={styles.weatherMain}>
              <div className={styles.weatherTemp}>{journey.weather.temp.split(' ')[0]}</div>
              <div className={styles.weatherDesc}>
                {journey.weather.condition} <br />
                <span style={{ color: 'var(--muted)', fontSize: '14px', fontWeight: 500 }}>{journey.weather.temp}</span>
              </div>
            </div>
            <div style={{ background: '#FDF7F2', padding: '16px', borderRadius: '12px', marginTop: 'auto' }}>
              <p className={styles.dayDesc} style={{ fontSize: '13px', margin: 0 }}>
                💡 {journey.weather.insight}
              </p>
            </div>
          </div>
        </div>

        {/* Bookings */}
        <div className={styles.widgetCard}>
          <div className={styles.bookingsWidget}>
            <p className={styles.widgetLabel}>TRAVEL LOGISTICS</p>
            <h3 className={styles.widgetTitle}>Recommended Bookings for this Itinerary</h3>
            <div className={styles.bookingsList}>
              {journey.bookings.map((b, idx) => (
                <div key={b.id} className={styles.bookingItem}>
                  <div className={styles.bookingLeft}>
                    <span className={styles.bookingNum}>0{idx + 1}</span>
                    <span className={styles.bookingName}>{b.name}</span>
                  </div>
                  <div className={styles.bookingActions}>
                    <a href={b.bookUrl} target="_blank" rel="noopener noreferrer" className={styles.bookNowBtn}>Book Now</a>
                    <button className={styles.addLinkBtn} title="Add to my plan">
                      <FiPlus size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ask AI Prompt ── */}
      <section className={styles.aiBanner}>
        <div className={styles.aiInner}>
          <p className={styles.widgetLabel}>HYBRID AI-HUMAN GUIDANCE</p>
          <h2 className={styles.aiHeading}>Ask Our Hybrid Ai</h2>
          <p className={styles.dayDesc}>
            Not sure about fine details, packing essentials, or hidden gems along your route? <br />
            Ask our AI and get real-world tips curated by our editors.
          </p>
          <div className={styles.aiSearchBox}>
            <input type="text" placeholder="Where do I find the best ramen in Shinjuku?" className={styles.aiInput} />
            <button className={styles.aiSubmit}>ASK SUPER AI</button>
          </div>
        </div>
      </section>

      {/* ── Journey Timeline + Map ── */}
      <section className={`container ${styles.journeySection}`}>
        <div className={styles.timelineSide}>
          <h2 className={styles.journeyTitle}>Your Journey</h2>
          <div className={styles.timeline}>
            {journey.itineraryDays.map(d => (
              <div 
                key={d.day} 
                className={`${styles.dayCard} ${activeDay === d.day ? styles.dayCardActive : ''}`}
                onClick={() => setActiveDay(activeDay === d.day ? null : d.day)}
              >
                <div className={styles.dayHeader}>
                  <div className={styles.dayTop}>
                    <p className={styles.dayLabel}>DAY {d.day}</p>
                    {activeDay === d.day ? <FiMinusCircle size={16} /> : <FiPlusCircle size={16} />}
                  </div>
                  <h4 className={styles.dayTitle}>{d.title}</h4>
                </div>
                {activeDay === d.day && (
                  <p className={styles.dayDesc}>
                    {d.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mapSide}>
          <div className={styles.mapContainer}>
             <div className={styles.mapWrapper}>
                <img src="/map-placeholder.png" alt="Map View" style={{ opacity: 0.8 }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(229, 246, 237, 0.4)' }}>
                  <div style={{ textAlign: 'center' }}>
                    <FiMapPin size={40} style={{ color: 'var(--accent)', marginBottom: '12px' }} />
                    <p style={{ fontWeight: 800, fontSize: '12px', color: '#1a1a1a', letterSpacing: '0.1em' }}>LIVE ROUTE MAP</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Final Footer AI Block ── */}
      <section className={styles.footerCta}>
        <div className={styles.aiInner}>
          <h2 className={styles.aiHeading} style={{ fontSize: '64px', marginBottom: '20px' }}>Ready for your adventure?</h2>
          <p className={styles.dayDesc} style={{ fontSize: '18px', marginBottom: '60px' }}>
            Store your journey data with a single click — follow with the best guides for your plan.
          </p>
          
          <div className={styles.widgetCard} style={{ textAlign: 'center', width: '100%' }}>
            <p className={styles.widgetLabel}>HYBRID AI-HUMAN GUIDANCE</p>
            <h2 className={styles.aiHeading}>Ask Our Hybrid Ai</h2>
            <div className={styles.aiSearchBox}>
              <input type="text" placeholder="How do I get from Tokyo to Osaka?" className={styles.aiInput} />
              <button className={styles.aiSubmit}>SEND QUERY</button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
