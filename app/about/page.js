import styles from './about.module.css'

export const metadata = {
  title: 'About',
  description: 'Built on years of travel — not algorithms alone.',
}

const principles = [
  'We do not accept paid placement',
  'We do not promote experiences we wouldn\'t use ourselves',
  'Recommendations are guided by experience, not commissions',
]

export default function AboutPage() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.overline}>Origin &amp; Purpose</p>
          <h1 className={styles.heroHeading}>
            Built on years of travel, not algorithms alone.
          </h1>
          <div className={styles.heroParagraphs}>
            <p>
              SuperJourneys is built by travelers who've been on the road together for over two decades. Not chasing checklists or trends, but learning — slowly, deliberately — what actually makes travel memorable.
            </p>
            <p>
              Over the years, we've learned that the difference between a good trip and a great one often lies in the smallest details: timing, pace, context, and knowing what to skip as much as what to see.
            </p>
            <p>
              SuperJourneys exists to bring that lived understanding into a system that helps others travel with confidence — without giving up control.
            </p>
          </div>
          <a href="#how-it-works" className={styles.discoverLink}>
            Discover How It Works →
          </a>
        </div>
      </section>

      {/* Founder */}
      <section className={styles.founder}>
        <div className={`container ${styles.founderInner}`}>
          <div className={styles.founderImage}>
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
              alt="Sumit Berry"
              className={styles.founderImg}
            />
          </div>
          <div className={styles.founderContent}>
            <p className={styles.overlineSmall}>The Visionary</p>
            <h2 className={styles.founderName}>Sumit Berry</h2>
            <div className={styles.founderText}>
              <p>Sumit Berry has spent over 20 years travelling the world — not as a spectator, but as a participant.</p>
              <p>Across more than 50 countries and over 20 million miles, he travelled with intent: observing patterns, rhythms, and the small decisions that shape how a journey feels.</p>
              <p>While others collected souvenirs, he collected notes.</p>
              <p>Cafes worth returning to. Seasons to avoid. Streets that worked better at dawn than dusk.</p>
              <p>He photographed relentlessly — not for show, but to remember context.</p>
              <p>He noted what worked, and just as importantly, what didn't.</p>
              <p>Over time, those fragments became a framework.</p>
              <p>SuperJourneys grew from that framework — a way to translate years of lived experience into guidance without rigidity.</p>
              <p>Not to tell people where to go. But to help them decide — calmly, confidently, and on their own terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className={styles.philosophy}>
        <div className={`container ${styles.philosophyInner}`}>
          <p className={styles.overlineSmall}>The Difference</p>
          <h2 className={styles.philosophyHeading}>
            Experience first. Technology second.
          </h2>
          <p className={styles.philosophyBody}>
            SuperJourneys' AI is trained on real travel — on notes, patterns, corrections, and lived decisions gathered over years on the road. It doesn't optimise for popularity. It doesn't push fixed routes. It suggests — and adapts when you change your mind. The final decision always remains yours.
          </p>
        </div>
      </section>

      {/* Independence */}
      <section className={styles.independence}>
        <div className={`container ${styles.independenceInner}`}>
          <div className={styles.indLeft}>
            <h3 className={styles.indHeading}>
              <span className={styles.indIcon}>○</span>
              How SuperJourneys stays independent.
            </h3>
            <p className={styles.indBody}>
              SuperJourneys is supported through affiliate partnerships with selected travel service providers. When you choose to book experiences or services through our recommendations, we may earn a referral fee — at no additional cost to you. This does not influence how journeys are suggested.
            </p>
          </div>
          <div className={styles.indRight}>
            <p className={styles.overlineSmall}>Our Principles</p>
            <div className={styles.principles}>
              {principles.map((p, i) => (
                <div key={i} className={styles.principleItem}>
                  <span className={styles.principleIcon}>○</span>
                  <span>{p.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className={styles.closing}>
        <div className="container">
          <p className={styles.closingQuote}>
            SuperJourneys exists to make travel feel less managed — and more your own.
          </p>
        </div>
      </section>

    </main>
  )
}