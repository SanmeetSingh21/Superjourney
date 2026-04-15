import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: '"I pasted a preset itinerary of someone hiking in Patagonia and SuperJourneys turned it into a 9-day itinerary within seconds. I changed the budget, added a friend, and we booked everything through the platform. The Viator experiences it suggested were things I\'d never have found on my own."',
    name: 'Anika',
    role: 'Group Traveller',
  },
  {
    quote: '"I was overwhelmed by options for Japan. I told the AI I wanted \'neon lights and quiet temples\' and it built a route that balanced both perfectly. Being able to buy my eSIM right in the app saved me so much stress at Narita."',
    name: 'Sophia',
    role: 'Solo Traveller',
  },
  {
    quote: '"The Reddit integration is wild. It pulled a specific local recommendation for a surf spot in Portugal that wasn\'t on any blog. My trip felt like it was planned by a local friend rather than a machine."',
    name: 'Julian',
    role: 'Adventure Seeker',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className={styles.heading}>What our travelers say</h2>
          <p className={styles.sub}>
            — Trusted by forward-thinking travelers for experiential planning excellence
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <span className={styles.dot} />
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}