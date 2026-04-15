import styles from './Features.module.css'
import { FiArrowUpRight } from 'react-icons/fi'
import { BsAirplaneFill, BsPeopleFill, BsChatSquareFill, BsBookFill, BsWalletFill, BsCollectionFill } from 'react-icons/bs'

const features = [
  {
    icon: <BsAirplaneFill size={18} />,
    title: 'Upload & Auto-Plan',
    desc: 'Upload flight tickets and hotel confirmations. SuperJourneys reads them and builds a structured itinerary.',
  },
  {
    icon: <BsPeopleFill size={18} />,
    title: 'Collaborate with Friends',
    desc: 'Invite your travel crew. Everyone can suggest, vote, and rearrange the plan in real time.',
  },
  {
    icon: <BsChatSquareFill size={18} />,
    title: 'Travel Blog Studio',
    desc: "Write your travel stories, attach photos, and publish them to SuperJourneys' public feed.",
  },
  {
    icon: <BsBookFill size={18} />,
    title: 'Book Everything',
    desc: 'Hotels, attractions, activities, and transport — book directly through Viator & GetYourGuide links within your itinerary.',
  },
  {
    icon: <BsWalletFill size={18} />,
    title: 'Smart Budgeting',
    desc: 'Track your expenses in real-time. Split bills with friends and keep your travel finances in check.',
  },
  {
    icon: <BsCollectionFill size={18} />,
    title: 'Preset Itineraries',
    desc: 'Access 500+ hand-crafted itineraries by top travel influencers and local experts.',
  },
]

export default function Features() {
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

        {/* Grid */}
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.iconWrap}>{f.icon}</span>
                <button className={styles.arrowBtn} aria-label="Learn more">
                  <FiArrowUpRight size={14} />
                </button>
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}