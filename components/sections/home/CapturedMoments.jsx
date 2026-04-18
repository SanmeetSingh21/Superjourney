import Link from 'next/link'
import { BsStars } from 'react-icons/bs'
import styles from './CapturedMoments.module.css'

export default function CapturedMoments() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>

        {/* Top — Text */}
        <div className={styles.content}>
          <p className={styles.overline}>The Visual Archive</p>
          <h2 className={styles.heading}>
            Captured <br />
            <em className={styles.accent}>Moments.</em>
          </h2>
          <p className={styles.body}>
            Every journey is a story waiting to be told. We provide the map; you provide the soul.
          </p>
          <Link href="/berrys-cam" className={styles.btn}>
            <BsStars size={13} />
            Explore Berry's Cam
          </Link>
        </div>

        {/* Bottom — Collage */}
        <div className={styles.collage}>
          <span className={styles.vintageText}>Established · Twenty Twenty Six</span>

          <div className={`${styles.imgCard} ${styles.cardLeft}`}>
            <img
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80"
              alt="Cinque Terre"
              className={styles.img}
            />
          </div>

          <div className={`${styles.imgCard} ${styles.cardCenter}`}>
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
              alt="Banff Canada"
              className={styles.img}
            />
            <span className={styles.imgLabel}>Banff, Canada</span>
          </div>

          <div className={`${styles.imgCard} ${styles.cardRight}`}>
            <img
              src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80"
              alt="Venice"
              className={styles.img}
            />
          </div>
        </div>

      </div>
    </section>
  )
}