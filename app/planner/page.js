import Link from 'next/link'
import styles from './planner.module.css'
import { BsChevronLeft, BsGlobe, BsStars, BsRobot, BsSend } from 'react-icons/bs'

export const metadata = {
  title: 'AI Journey Planner | SuperJourneys',
  description: 'Plan your perfect itinerary with AI.',
}

export default function PlannerPage() {
  return (
    <div className={styles.page}>
      
      {/* Top Bar */}
      <header className={styles.topBar}>
        <div className={styles.titleArea}>
          <Link href="/" className={styles.backBtn}>
            <BsChevronLeft size={20} />
          </Link>
          <div className={styles.title}>
            AI Journey Planner
            <span className={styles.liveIndicator}>
              <span className={styles.liveDot}></span>
              LIVE INTELLIGENCE
            </span>
          </div>
        </div>

        <div className={styles.indicators}>
          <div className={styles.indicator}>
            <BsGlobe size={14} /> GLOBAL DATA
          </div>
          <div className={styles.indicator}>
            <BsStars size={14} /> PREMIUM ENGINE
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <main className={styles.chatArea}>
        <div className={styles.messageRow}>
          <div className={styles.avatar}>
            <BsRobot size={24} />
          </div>
          <div className={styles.bubble}>
            <p>
              Welcome to the SuperJourneys AI Planner. Describe your dream trip — where you want to go, what you love to do, and your preferred pace. I'll craft a bespoke itinerary just for you.
            </p>
            <span className={styles.time}>11:24 PM</span>
          </div>
        </div>
        {/* Additional messages would go here in state */}
      </main>

      {/* Input Area */}
      <div className={styles.inputArea}>
        <div className={styles.inputWrap}>
          <input 
            type="text" 
            placeholder="Describe your dream trip (e.g., '10 days in Italy, focusing on food and art...')" 
            className={styles.input}
          />
          <button className={styles.sendBtn}>
            <BsSend size={18} />
            SEND
          </button>
        </div>
        <p className={styles.disclaimer}>SUPERJOURNEYS AI CAN MAKE MISTAKES. VERIFY IMPORTANT INFORMATION.</p>
      </div>
      
    </div>
  )
}
