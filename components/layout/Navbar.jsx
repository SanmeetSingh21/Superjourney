'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LuSearch, LuUser, LuMenu, LuX, LuSparkles } from 'react-icons/lu'
import styles from './Navbar.module.css'
import { FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi'
import { BsStars } from 'react-icons/bs'
import AuthModal from './AuthModal'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Get Inspired', href: '/get-inspired' },
    { label: 'Journal', href: '/journal' },
    { label: "Berry's Cam", href: '/berrys-cam' },
]

export default function Navbar() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [authModalOpen, setAuthModalOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        const onResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false)
            }
        }
        
        window.addEventListener('scroll', onScroll)
        window.addEventListener('resize', onResize)
        
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    // Close menu and scroll to top on route change
    useEffect(() => { 
        setMenuOpen(false)
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.inner}`}>

                {/* Logo */}
                <Link href="/" className={styles.logo}>
  <img src="/logo.png" alt="SuperJourneys" className={styles.logoImg} />
</Link>

                {/* Desktop Nav */}
                <nav className={styles.navLinks} aria-label="Main navigation">
                    {navLinks.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className={styles.actions}>
                    <button className={styles.iconBtn} aria-label="Search">
                        <FiSearch size={18} />
                    </button>

                    <Link href="/planner" className={styles.plannerBtn}>
                        <BsStars size={14} />
                        <span>Hybrid AI Planner</span>
                    </Link>

                    <button 
                      className={styles.iconBtn} 
                      aria-label="Account"
                      onClick={() => setAuthModalOpen(true)}
                    >
                        <FiUser size={18} />
                    </button>

                    {/* Hamburger */}
                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <LuX size={22} /> : <FiMenu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`${styles.mobileLink} ${pathname === href ? styles.active : ''}`}
                        >
                            {label}
                        </Link>
                    ))}
                    <Link href="/planner" className={styles.mobilePlannerBtn}>
                        <LuSparkles size={14} />
                        Hybrid AI Planner
                    </Link>
                </div>
            )}

            {authModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} />}
        </header>
    )
}