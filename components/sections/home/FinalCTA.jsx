import Link from 'next/link'
import { BsStars } from 'react-icons/bs'
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.ring} />
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>
          Your next chapter is <br />
          <em className={styles.accent}>one conversation away.</em>
        </h2>
        <p className={styles.sub}>
          Start with a dream. End with a plan. SuperJourneys handles everything in between.
        </p>
        <Link href="/planner" className={styles.btn}>
          <BsStars size={14} />
          Start Planning Free
        </Link>
      </div>
    </section>
  )
}