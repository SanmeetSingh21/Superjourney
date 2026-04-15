import styles from './cam.module.css'
import { BsMap, BsGrid } from 'react-icons/bs'

export const metadata = {
  title: "Berry's Cam | SuperJourneys",
  description: 'The visual archive. Real moments from 20 years of travel.',
}

const photos = [
  { id: 1, loc: 'Banff, Canada', time: 'OCT 2023', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80' },
  { id: 2, loc: 'Venice, Italy', time: 'SEPT 2022', img: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80' },
  { id: 3, loc: 'Cinque Terre, Italy', time: 'AUG 2021', img: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80' },
  { id: 4, loc: 'Kyoto, Japan', time: 'NOV 2019', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80' },
  { id: 5, loc: 'Swiss Alps', time: 'JAN 2024', img: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80' },
  { id: 6, loc: 'Bavaria, Germany', time: 'DEC 2020', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80' }
]

export default function BerrysCamPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.title}>
            The Visual <em className={styles.accent}>Archive.</em>
          </h1>
          <p className={styles.sub}>
            Every journey is a story waiting to be told. Explore real moments captured across continents.
          </p>
          
          <div className={styles.viewToggles}>
            <button className={styles.toggleBtn} data-active={true}>
              <BsGrid size={16} /> Grid View
            </button>
            <button className={styles.toggleBtn}>
              <BsMap size={16} /> Map View
            </button>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            {photos.map(photo => (
              <div key={photo.id} className={styles.photoCard}>
                <div className={styles.photoImgWrapper}>
                  <img src={photo.img} alt={photo.loc} className={styles.photoImg} loading="lazy" />
                </div>
                <div className={styles.photoOverlay}>
                  <p className={styles.photoLocation}>{photo.loc}</p>
                  <p className={styles.photoTime}>{photo.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
