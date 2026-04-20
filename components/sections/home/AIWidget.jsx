'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiSearch, FiArrowRight } from 'react-icons/fi'
import { BsStars } from 'react-icons/bs'
import styles from './AIWidget.module.css'
import { journeys } from '../../../data/journeys'

const filters = ['All Journeys', 'Trending Now', 'Seasonal Picks', 'Calm Escapes', 'Solo-Safe Journeys', 'Off-the-Grid Adventures', 'Weekend Quick Trips']

export default function AIWidget() {
  const [activeFilter, setActiveFilter] = useState('All Journeys')
  const [search, setSearch] = useState('')

  const filteredJourneys = journeys.filter(j => {
    const s = search.toLowerCase()
    const matchesSearch = 
      j.title.toLowerCase().includes(s) ||
      j.route.toLowerCase().includes(s) ||
      j.desc.toLowerCase().includes(s)
    
    if (!matchesSearch) return false

    // Filter logic
    if (activeFilter === 'Trending Now') return j.badge === 'Trending'
    if (activeFilter === 'Calm Escapes') return j.style === 'relaxation'
    if (activeFilter === 'Off-the-Grid Adventures') return j.style === 'adventure'
    if (activeFilter === 'Solo-Safe Journeys') return j.style === 'culture'
    if (activeFilter === 'Weekend Quick Trips') return j.days <= 5
    
    return true
  })

  return (
    <section className={styles.section}>

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
          {/* Ticker – contained above search bar */}
          <div className={styles.ticker}>
            <div className={styles.tickerTrack}>
              {Array(8).fill('• DISCOVER YOUR NEXT CHAPTER • PLAN BOLDLY • TRAVEL SMART • AI-POWERED ITINERARIES • REAL TRAVEL INTELLIGENCE •').map((t, i) => (
                <span key={i} className={styles.tickerItem}>{t}</span>
              ))}
            </div>
          </div>
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
              <p className={styles.journeysMeta}>{activeFilter}</p>
              <h3 className={styles.journeysTitle}>Top {filteredJourneys.length} Curated Journeys</h3>
            </div>
            <span className={styles.journeysCount}>Showing {filteredJourneys.length} results</span>
          </div>

          {/* Cards Grid */}
          <div className={styles.grid}>
            {filteredJourneys.map((j) => (
              <Link key={j.id} href={`/get-inspired/${j.id}`} className={styles.card}>
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
                    <div className={styles.exploreBtn}>
                      Explore <FiArrowRight size={12} />
                    </div>
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
              </Link>
            ))}
          </div>
          {filteredJourneys.length === 0 && (
            <div className={styles.noResults}>
              No journeys found matching your search or vibe. Try a different term or filter!
            </div>
          )}
        </div>

      </div>
    </section>
  )
}