'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './inspired.module.css'
import { BsStars, BsSearch } from 'react-icons/bs'
import { FiSearch, FiArrowRight } from 'react-icons/fi'
import { BiGlobe } from 'react-icons/bi' 
import { FaMountain, FaCrown, FaLandmark, FaUmbrellaBeach } from 'react-icons/fa'
import { journeys } from '../../data/journeys'

const stylesFilters = [
  { id: 'all', label: 'All', icon: BiGlobe },
  { id: 'adventure', label: 'Adventure', icon: FaMountain },
  { id: 'luxury', label: 'Luxury', icon: FaCrown },
  { id: 'culture', label: 'Culture', icon: FaLandmark },
  { id: 'relaxation', label: 'Relaxation', icon: FaUmbrellaBeach },
]



export default function GetInspiredPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredJourneys = journeys.filter(j => 
    activeFilter === 'all' ? true : j.style === activeFilter
  )
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.heading}>
            See how your trip gets 
            planned
            and why it <em className={styles.accent}>works better.</em>
          </h1>
          <p className={styles.sub}>
            AI speed. 20 years of travel expertise.
          </p>

          <div className={styles.actions}>
            <Link href="/planner" className={styles.btnPrimary}>
              <BsStars size={16} />
              PLAN MY ITINERARY →
            </Link>
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
          {stylesFilters.map((f) => (
            <button 
              key={f.id} 
              className={styles.filterBtn} 
              data-active={activeFilter === f.id}
              onClick={() => setActiveFilter(f.id)}
            >
              <f.icon size={12} />
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.gridSection}>
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
      </section>

    </main>
  )
}
