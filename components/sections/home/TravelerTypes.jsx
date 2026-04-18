import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import styles from './TravelerTypes.module.css'

const types = [
  {
    id: 1,
    badge: 'Independent',
    travelers: '1 Traveler',
    title: 'Solo trips',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
  },
  {
    id: 2,
    badge: 'Romantic',
    travelers: '1–2 Travelers',
    title: 'Couples and slow travel',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&q=80',
  },
  {
    id: 3,
    badge: 'Connoisseur',
    travelers: '1–4 Travelers',
    title: 'Food and culture focused',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
  },
  {
    id: 4,
    badge: 'Maximalist',
    travelers: '1–6 Travelers',
    title: 'Fast city breaks',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
  },
]

export default function TravelerTypes() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.overline}>The Persona Engine</p>
            <h2 className={styles.heading}>
              What kind of <br />
              <em className={styles.accent}>traveler are you?</em>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.headerNote}>
              Hybrid AI adapts your itinerary to how you like to travel — pace, interests, and priorities.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {types.map((type) => (
            <Link key={type.id} href="/get-inspired" className={styles.card}>
              <img src={type.image} alt={type.title} className={styles.image} />
              <div className={styles.overlay} />

              {/* Top badges */}
              <div className={styles.cardTop}>
                <span className={styles.badge}>{type.badge}</span>
                <span className={styles.travelers}>{type.travelers}</span>
              </div>

              {/* Bottom content */}
              <div className={styles.cardBottom}>
                <h3 className={styles.cardTitle}>{type.title}</h3>
                <span className={styles.selectBtn}>
                  <FiArrowRight size={14} />
                  Select Persona
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}