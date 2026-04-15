import styles from './Stats.module.css'

const stats = [
  { value: '20', label: 'Years of Travel' },
  { value: '55+', label: 'Countries' },
  { value: '100+', label: 'Cities' },
]

const images = [
  'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
]

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>

        {/* Left */}
        <div className={styles.left}>
          <p className={styles.overline}>Remove Doubt</p>

          <h2 className={styles.heading}>
            Built on real <br />
            <em className={styles.accent}>travel <br /> experience.</em>
          </h2>

          <p className={styles.body}>
            We've been there. That's what powers every itinerary. Not just code, but context.
          </p>

          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image Grid */}
        <div className={styles.right}>
          <div className={styles.imageGrid}>
            {images.map((src, i) => (
              <div key={i} className={styles.imageWrap}>
                <img src={src} alt="" className={styles.image} />
              </div>
            ))}
          </div>

          {/* Badge */}
          <div className={styles.badge}>
            <span>Expertly</span>
            <span>Vetted</span>
            <span>Data</span>
          </div>

          {/* Globe watermark */}
          <div className={styles.globe}>⊕</div>
        </div>

      </div>
    </section>
  )
}