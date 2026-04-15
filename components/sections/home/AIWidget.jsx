'use client'

import { useState } from 'react'
import { FiSearch, FiArrowRight } from 'react-icons/fi'
import { BsStars } from 'react-icons/bs'
import styles from './AIWidget.module.css'

const filters = ['Trending Now', 'Seasonal Picks', 'Calm Escapes', 'Solo-Safe Journeys', 'Off-the-Grid Adventures', 'Weekend Quick Trips']

const journeys = [
  {
    id: 1,
    badge: 'Trending',
    badgeColor: 'orange',
    title: 'Perfect Japan Itinerary',
    route: 'Tokyo → Osaka',
    days: 9,
    nights: 7,
    rating: 4.9,
    desc: 'Mt. Fuji at dawn. Kyoto\'s golden temples. Hiroshima\'s silence. Osaka\'s skyline.',
    dep: 'TYO',
    arr: 'OSA',
    nights2: 7,
    star: 4,
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80',
  },
  {
    id: 2,
    badge: 'Popular',
    badgeColor: 'green',
    title: 'Bali Adventure',
    route: 'Ubud → Seminyak',
    days: 5,
    nights: 4,
    rating: 4.8,
    desc: 'Rice terraces, sacred temples, and sunset beaches.',
    dep: 'DEP',
    arr: 'ARR',
    nights2: 4,
    star: 4,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
  },
  {
    id: 3,
    badge: 'Trending',
    badgeColor: 'orange',
    title: 'Swiss Alps Tour',
    route: 'Zurich → Zermatt',
    days: 5,
    nights: 7,
    rating: 4.9,
    desc: 'Alpine peaks, crystal lakes, and mountain trains.',
    dep: 'DEP',
    arr: 'ARR',
    nights2: 7,
    star: 4,
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80',
  },
  {
    id: 4,
    badge: 'Popular',
    badgeColor: 'green',
    title: 'Iceland Ring Road',
    route: 'Reykjavik Loop',
    days: 10,
    nights: 9,
    rating: 4.9,
    desc: 'Waterfalls, glaciers, and volcanic landscapes.',
    dep: 'DEP',
    arr: 'ARR',
    nights2: 9,
    star: 4,
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&q=80',
  },
  {
    id: 5,
    badge: 'Trending',
    badgeColor: 'orange',
    title: 'Santorini Escape',
    route: 'Oia & Fira',
    days: 4,
    nights: 3,
    rating: 4.7,
    desc: 'Whitewashed villages and caldera sunsets.',
    dep: 'DEP',
    arr: 'ARR',
    nights2: 3,
    star: 4,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
  },
]

export default function AIWidget() {
  const [activeFilter, setActiveFilter] = useState('Trending Now')
  const [search, setSearch] = useState('')

  return (
    <section className={styles.section}>

      {/* Ticker */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {Array(8).fill('• REAL TRAVEL INTELLIGENCE • DISCOVER YOUR NEXT CHAPTER • PLAN BOLDLY • TRAVEL SMART • AI-POWERED ITINERARIES • REAL TRAVEL').map((t, i) => (
            <span key={i} className={styles.tickerItem}>{t}</span>
          ))}
        </div>
      </div>

      <div className={`container ${styles.inner}`}>

        {/* Left Sidebar */}
        <div className={styles.sidebar}>
          <h2 className={styles.sidebarHeading}>
            Where do you want to go — or how do you want to feel?
          </h2>

          <div className={styles.filterLabel}>Filter by Vibe</div>

          <div className={styles.filters}>
            {filters.map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className={styles.content}>
          {/* Search */}
          <div className={styles.searchWrap}>
            <input
              type="text"
              placeholder="Search by destination, mood, or activity..."
              className={styles.searchInput}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className={styles.searchBtn}>
              <FiSearch size={16} />
            </button>
          </div>

          {/* Journeys Header */}
          <div className={styles.journeysHeader}>
            <div>
              <p className={styles.journeysMeta}>Trending Now</p>
              <h3 className={styles.journeysTitle}>Top 5 Curated Journeys</h3>
            </div>
            <span className={styles.journeysCount}>Showing 5 results</span>
          </div>

          {/* Cards Grid */}
          <div className={styles.grid}>
            {journeys.map((j) => (
              <div key={j.id} className={styles.card}>
                {/* Image */}
                <div className={styles.imageWrap}>
                  <img src={j.image} alt={j.title} className={styles.image} />
                  <span className={`${styles.badge} ${styles[j.badgeColor]}`}>
                    <BsStars size={9} /> {j.badge}
                  </span>
                  <div className={styles.imageOverlay} />
                  <div className={styles.imageText}>
                    <h4 className={styles.imageTitle}>{j.title}</h4>
                    <p className={styles.imageRoute}>{j.route}</p>
                  </div>
                </div>

                {/* Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.metaItem}>📅 {j.days} Days · {j.nights} Nights</span>
                    <span className={styles.metaRating}>⭐ {j.rating}</span>
                  </div>

                  <p className={styles.cardDesc}>{j.desc}</p>

                  <div className={styles.cardFooter}>
                    <div className={styles.avatars}>
                      {[1,2,3].map(a => (
                        <div key={a} className={styles.avatar} />
                      ))}
                    </div>
                    <button className={styles.exploreBtn}>
                      Explore <FiArrowRight size={12} />
                    </button>
                  </div>

                  {/* Boarding Pass */}
                  <div className={styles.boardingPass}>
                    <div className={styles.boardingLeft}>
                      <p className={styles.boardingLabel}>Boarding Pass</p>
                      <div className={styles.boardingRoute}>
                        <span className={styles.routeCode}>{j.dep}</span>
                        <span className={styles.routeIcon}>⇄</span>
                        <span className={styles.routeCode}>{j.arr}</span>
                        <span className={styles.firstClass}>First Class</span>
                      </div>
                    </div>
                    <div className={styles.boardingRight}>
                      <div className={styles.qr} />
                    </div>
                  </div>

                  <div className={styles.cardDetails}>
                    <span>{j.nights2} Nights</span>
                    <span>⭐ {j.star} Star</span>
                    <span>{j.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}