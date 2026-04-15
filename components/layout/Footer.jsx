import Link from 'next/link'
import { LuMapPin, LuPhone, LuMail } from 'react-icons/lu'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import styles from './Footer.module.css'

const navLinks = [
  { label: 'Get Inspired', href: '/get-inspired' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Travel Journal', href: '/journal' },
  { label: 'About SuperJourneys', href: '/about' },
  { label: 'Help & FAQs', href: '/#faqs' },
  { label: 'My Account', href: '/auth' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        {/* Col 1 — Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.logoText}>
              <span className={styles.logoSuper}>Super</span>
              <span className={styles.logoJourneys}>Journeys</span>
            </span>
          </Link>

          <p className={styles.tagline}>
            Turning your imagination into itineraries, powered by
            real travel intelligence. The world is waiting for your next
            chapter.
          </p>

          <div className={styles.socials}>
            <a href="#" aria-label="Instagram" className={styles.socialLink}>
              <FaInstagram size={18} />
            </a>
            <a href="#" aria-label="Twitter" className={styles.socialLink}>
              <FaXTwitter size={18} />
            </a>
            <a href="#" aria-label="Facebook" className={styles.socialLink}>
              <FaFacebook size={18} />
            </a>
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div className={styles.nav}>
          <p className={styles.colLabel}>Navigation</p>
          <ul className={styles.navList}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={styles.navLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div className={styles.contact}>
          <p className={styles.colLabel}>Contact</p>
          <ul className={styles.contactList}>
            <li>
              <LuMapPin size={14} className={styles.contactIcon} />
              <span>123 Journey Way,<br />Adventure City, AC 45678</span>
            </li>
            <li>
              <LuPhone size={14} className={styles.contactIcon} />
              <span>+1 (555) TRAVEL-AI</span>
            </li>
            <li>
              <LuMail size={14} className={styles.contactIcon} />
              <span>HELLO@SUPERJOURNEYS.AI</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © 2025 SuperJourneys AI. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}