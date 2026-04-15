import styles from './inspired.module.css'
import { BsStars, BsSearch } from 'react-icons/bs'
import { BiGlobe } from 'react-icons/bi' 
import { FaMountain, FaCrown, FaLandmark, FaUmbrellaBeach } from 'react-icons/fa'

export const metadata = {
  title: 'Get Inspired | SuperJourneys',
  description: 'AI speed. 20 years of travel expertise.',
}

const filters = [
  { id: 'all', label: 'All', icon: BiGlobe },
  { id: 'adventure', label: 'Adventure', icon: FaMountain },
  { id: 'luxury', label: 'Luxury', icon: FaCrown },
  { id: 'culture', label: 'Culture', icon: FaLandmark },
  { id: 'relaxation', label: 'Relaxation', icon: FaUmbrellaBeach },
]

const placeholderJourneys = [
  {
    id: 1,
    title: 'Seasonal Picks',
    desc: 'Curated destinations that shine right now. Perfect weather, fewer crowds, and peak local experiences.',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
    tag: 'Trending'
  },
  {
    id: 2,
    title: 'Calm Escapes',
    desc: 'Disconnect and recharge. Secluded stays, quiet coastlines, and places where pace truly slows down.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    tag: 'Relaxation'
  },
  {
    id: 3,
    title: 'Solo-Safe Journeys',
    desc: 'Vetted routes and communities perfect for the independent traveler prioritizing safety and depth.',
    image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80',
    tag: 'Solo Travel'
  },
  {
    id: 4,
    title: 'Off-the-Grid Adventures',
    desc: 'Rugged terrain, challenging hikes, and untouched landscapes for those who want to leave the map behind.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    tag: 'Adventure'
  },
  {
    id: 5,
    title: 'Culinary Trails',
    desc: 'Taste your way through historic markets, street food alleys, and hidden Michelin-starred gems.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    tag: 'Culture'
  },
  {
    id: 6,
    title: 'High-Altitude Luxury',
    desc: 'Premium mountain lodges offering exclusive access to slopes, followed by fireside dining and spas.',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80',
    tag: 'Luxury'
  }
]

export default function GetInspiredPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.heading}>
            See how your trip gets <br />
            planned — <br />
            and why it <em className={styles.accent}>works better.</em>
          </h1>
          <p className={styles.sub}>
            AI speed. 20 years of travel expertise.
          </p>

          <div className={styles.actions}>
            <button className={styles.btnPrimary}>
              <BsStars size={16} />
              PLAN MY ITINERARY →
            </button>
            <div className={styles.socialProof}>
              <div className={styles.avatarGroup}>
                <div className={styles.avatar} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80)', backgroundSize: 'cover' }}></div>
                <div className={styles.avatar} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80)', backgroundSize: 'cover' }}></div>
                <div className={styles.avatar} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80)', backgroundSize: 'cover' }}></div>
              </div>
              <span className={styles.proofText}>JOINED BY 12K+ EXPLORERS</span>
            </div>
          </div>

          <div className={styles.searchWrap}>
            <BsSearch size={22} className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Where to next?" 
              className={styles.searchInput}
            />
          </div>
        </div>

        <div className={styles.filtersWrap}>
          <span className={styles.filterLabel}>FILTER BY STYLE:</span>
          {filters.map((f, i) => (
            <button key={f.id} className={styles.filterBtn} data-active={i === 0}>
              <f.icon size={14} />
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.grid}>
        {placeholderJourneys.map(journey => (
          <div key={journey.id} className={styles.card}>
            <div className={styles.cardImgWrap}>
              <img src={journey.image} alt={journey.title} />
              <span className={styles.cardPill}>{journey.tag}</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{journey.title}</h3>
              <p className={styles.cardDesc}>{journey.desc}</p>
            </div>
          </div>
        ))}
      </section>

    </main>
  )
}
