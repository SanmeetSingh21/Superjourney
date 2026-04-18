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
  FiActivity, 
  FiInfo,
  FiChevronDown,
  FiChevronUp,
  FiSearch
} from 'react-icons/fi'
import { FaCloudSun, FaBed, FaTicketAlt } from 'react-icons/fa'

export default function ItineraryPage() {
  const params = useParams()
  const id = parseInt(params.id)
  const journey = journeys.find(j => j.id === id)
  const [openDay, setOpenDay] = useState(1)

  if (!journey) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h1>Journey Not Found</h1>
        <Link href="/get-inspired">Back to Inspiration</Link>
      </div>
    )
  }

  const toggleDay = (day) => {
    setOpenDay(openDay === day ? null : day)
  }

  const getBookingIcon = (type) => {
    switch(type) {
      case 'ticket': return <FaTicketAlt size={18} />
      case 'bed': return <FaBed size={18} />
      case 'train': return <FiActivity size={18} />
      default: return <FiInfo size={18} />
    }
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
          <div className={styles.heroContent}>
            <Link href="/get-inspired" className={styles.backLink}>
              <FiArrowLeft /> BACK
            </Link>
            <h1 className={styles.heroHeading}>
              {journey.titlePrefix} <span className={styles.heroItalic}>{journey.titleItalic}</span>
            </h1>
            <div className={styles.heroActions}>
              <button className={styles.startBtn}>START YOUR JOURNEY</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Route Section ── */}
      <section className={styles.routeSection}>
        <div className={styles.routeBgText}>ROUTE</div>
        <div className={`container ${styles.routeInner}`}>
          <div className={styles.routeHeader}>
            <p className={styles.routeLabel}>THE PATHS LESS TRAVELED</p>
            <h2 className={styles.routeTitle}>The Path Less Traveled</h2>
          </div>
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
        <div className={styles.widgetBox}>
          <div className={styles.weatherWidget}>
            <p className={styles.routeLabel}>WEATHER FORECAST</p>
            <h3 className={styles.routeTitle}>Weather Forecast</h3>
            <p className={styles.dayText} style={{ fontStyle: 'normal', marginBottom: '20px' }}>
              Data-backed insights based on your {journey.days}-day stay pattern to ensure you pack exactly what you need.
            </p>
            <div className={`${styles.flex} ${styles.itemsCenter} ${styles.gap6}`}>
              <div className={styles.weatherIcon}>
                <FaCloudSun size={32} />
              </div>
              <div>
                <div className={styles.weatherTemp}>{journey.weather.condition}</div>
                <div className={styles.nodeName} style={{ color: 'var(--accent)' }}>{journey.weather.temp}</div>
              </div>
            </div>
            <div className={styles.advantageBox} style={{ background: '#FDF7F2', marginTop: '20px', padding: '20px', borderRadius: '12px' }}>
              <p className={styles.dayText} style={{ color: 'var(--text)', fontSize: '13px' }}>
                <FiInfo className={`${styles.inline} ${styles.mr2}`} />
                {journey.weather.insight}
              </p>
            </div>
          </div>
        </div>

        {/* Bookings */}
        <div className={styles.widgetBox}>
          <div className={styles.bookingsWidget}>
            <p className={styles.routeLabel}>TRAVEL BOOKINGS</p>
            <h3 className={styles.routeTitle}>Recommended Bookings for This Itinerary</h3>
            <div className={styles.bookingsList}>
              {journey.bookings.map(b => (
                <div key={b.id} className={styles.bookingItem}>
                  <div className={styles.bookingLeft}>
                    <span className={styles.bookingIcon}>{getBookingIcon(b.icon)}</span>
                    <span className={styles.bookingName}>{b.name}</span>
                  </div>
                  <button className={styles.addBtn} title="Add as booking link">
                    <FiPlus size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ask AI Prompt ── */}
      <section className={styles.aiBanner}>
        <div className={styles.aiInner}>
          <p className={styles.aiOverline}>HYBRID AI-HUMAN GUIDANCE</p>
          <h2 className={styles.aiHeading}>Ask Our Hybrid Ai</h2>
          <p className={styles.sub}>
            Not sure about fine details, packing essentials, or hidden gems along your route? Ask our AI and get real-world tips.
          </p>
          <div className={styles.aiSearch}>
            <input type="text" placeholder="Ask anything about your journey..." className={styles.aiInput} />
            <button className={styles.aiSubmit}>ASK SUPER AI</button>
          </div>
        </div>
      </section>

      {/* ── Journey ── */}
      <section className={`container ${styles.journeySection}`}>
        <div className={styles.journeyLeft}>
          <h2 className={styles.journeyTitle}>Your Journey</h2>
          <div className={styles.dayAccordion}>
            {journey.itineraryDays.map(d => (
              <div key={d.day} className={styles.dayCard}>
                <div className={styles.dayHeader} onClick={() => toggleDay(d.day)}>
                  <div className={styles.dayLabel}>
                    <span className={styles.dayNum}>DAY {d.day}</span>
                    <h4 className={styles.dayName}>{d.title}</h4>
                  </div>
                  {openDay === d.day ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {openDay === d.day && (
                  <div className={styles.dayContent}>
                    {d.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.journeyRight}>
          <div className={styles.stickyMap}>
             <div className={styles.mapBox}>
                <img src="/map-placeholder.png" alt="Map View" style={{ opacity: 0.5 }} />
                {/* Fallback pattern if image missing */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="text-center">
                    <FiMapPin size={48} className={styles.inline} style={{ margin: '0 auto 16px', display: 'block' }} />
                    <p className="font-bold text-emerald-900/40">INTERACTIVE MAP VIEW</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Final Footer AI Block ── */}
      <section className={styles.aiBanner} style={{ background: '#fff' }}>
        <div className={styles.aiInner}>
          <h2 className={styles.aiHeading}>Ready for your adventure?</h2>
          <p className={styles.sub}>
            Store your journey data with a single count - follow with the best guides for your plan.
          </p>
          <div className={styles.widgetBox} style={{ width: '100%', padding: '60px' }}>
            <p className={styles.aiOverline}>HYBRID AI-HUMAN GUIDANCE</p>
            <h2 className={styles.aiHeading}>Ask Our Hybrid Ai</h2>
            <p className={styles.sub}>
              Not sure about fine details, packing essentials, or hidden gems along your route? Ask our AI and get real-world tips.
            </p>
            <div className={styles.aiSearch} style={{ border: '1px solid #eee' }}>
              <input type="text" placeholder="Ask anything about your journey..." className={styles.aiInput} />
              <button className={styles.aiSubmit}>ASK SUPER AI</button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
