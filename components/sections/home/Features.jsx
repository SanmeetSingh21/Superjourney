'use client'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { BsAirplaneFill, BsPeopleFill, BsChatSquareFill, BsBookFill, BsWalletFill, BsCollectionFill } from 'react-icons/bs'
import styles from './Features.module.css'

const features = [
  {
    icon: <BsAirplaneFill size={18} />,
    title: 'Upload & Auto-Plan',
    desc: 'Upload flight tickets and hotel confirmations. SuperJourneys reads them and builds a structured itinerary.',
    link: '/planner',
  },
  {
    icon: <BsPeopleFill size={18} />,
    title: 'Collaborate with Friends',
    desc: 'Invite your travel crew. Everyone can suggest, vote, and rearrange the plan in real time.',
    link: '/planner',
  },
  {
    icon: <BsChatSquareFill size={18} />,
    title: 'Travel Blog Studio',
    desc: "Write your travel stories, attach photos, and publish them to SuperJourneys' public feed.",
    link: '/journal',
  },
  {
    icon: <BsBookFill size={18} />,
    title: 'Book Everything',
    desc: 'Hotels, attractions, activities, and transport — book directly through Viator & GetYourGuide links within your itinerary.',
    link: '/planner',
  },
  {
    icon: <BsWalletFill size={18} />,
    title: 'Smart Budgeting',
    desc: 'Track your expenses in real-time. Split bills with friends and keep your travel finances in check.',
    link: '/planner',
  },
  {
    icon: <BsCollectionFill size={18} />,
    title: 'Preset Itineraries',
    desc: 'Access 500+ hand-crafted itineraries by top travel influencers and local experts.',
    link: '/get-inspired',
  },
]

// Anti-clockwise path through a 3×2 grid:
// slots:  [0][1][2]
//         [3][4][5]
// CCW:  0→3→4→5→2→1→0
// CCW_NEXT[slot] = where a card in that slot moves next
const CCW_NEXT = [3, 0, 1, 4, 5, 2]

const GAP = 40

export default function Features() {
  const containerRef = useRef(null)
  // cardSlots[i] = which grid slot card i currently occupies
  const [cardSlots, setCardSlots] = useState([0, 1, 2, 3, 4, 5])
  const [dims, setDims] = useState(null) // { cw, ch }
  const [ready, setReady] = useState(false)

  // Measure once cards are rendered in static layout
  useLayoutEffect(() => {
    const measure = () => {
  if (!containerRef.current) return
  const w = containerRef.current.offsetWidth
  const cw = (w - GAP * 2) / 3
  const ch = 220  // ← tweak this value
  setDims({ cw, ch })
}

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Enable transitions one frame after dims are set (prevents initial jump)
  useEffect(() => {
    if (dims) {
      const id = requestAnimationFrame(() => setReady(true))
      return () => cancelAnimationFrame(id)
    }
  }, [dims])

  // Rotate all cards one step CCW every 2.5s
  useEffect(() => {
    if (!ready) return
    const id = setInterval(() => {
      setCardSlots(prev => prev.map(slot => CCW_NEXT[slot]))
    }, 2500)
    return () => clearInterval(id)
  }, [ready])

  const getPos = (slot) => {
    if (!dims) return { left: 0, top: 0 }
    const col = slot % 3
    const row = Math.floor(slot / 3)
    return {
      left: col * (dims.cw + GAP),
      top: row * (dims.ch + GAP),
    }
  }

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.overline}>The SuperJourneys Toolkit</p>
            <h2 className={styles.heading}>
              Built for those who <br />
              <em className={styles.accent}>demand more.</em>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.headerNote}>
              Every feature is a response to a real traveler's frustration. No fluff, just utility scaled by intelligence.
            </p>
          </div>
        </div>

        {/* Cards container */}
        <div
          ref={containerRef}
          className={styles.cardsContainer}
          style={dims ? { height: dims.ch * 2 + GAP } : undefined}
        >
          {features.map((f, i) => {
            const { left, top } = getPos(cardSlots[i])
            return (
              <div
                key={i}
                data-card
                className={styles.card}
                style={dims ? {
                  position: 'absolute',
                  width: dims.cw,
                  height: dims.ch,
                  left,
                  top,
                  transition: ready
                    ? 'left 0.7s cubic-bezier(0.4,0,0.2,1), top 0.7s cubic-bezier(0.4,0,0.2,1)'
                    : 'none',
                } : undefined}
              >
                <Link href={f.link} className={styles.cardInner}>
                  <div className={styles.cardTop}>
                    <span className={styles.iconWrap}>{f.icon}</span>
                    <span className={styles.arrowBtn}>
                      <FiArrowUpRight size={14} />
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{f.title}</h3>
                  <p className={styles.cardDesc}>{f.desc}</p>
                </Link>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}