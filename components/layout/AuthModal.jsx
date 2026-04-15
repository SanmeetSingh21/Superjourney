'use client'

import { useState } from 'react'
import { FiUser, FiMail, FiLock, FiX, FiChevronRight } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import styles from './AuthModal.module.css'

export default function AuthModal({ onClose }) {
  const [isRegistering, setIsRegistering] = useState(false)

  // Prevent closing when clicking inside the modal
  const handleModalClick = (e) => e.stopPropagation()

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={handleModalClick}>
        <button className={styles.closeBtn} onClick={onClose}>
          <FiX />
        </button>

        <div className={styles.content}>
          <div className={styles.iconWrap}>
            <FiUser size={32} />
          </div>

          <h2 className={styles.heading}>
            {isRegistering ? 'Your next chapter.' : 'Welcome back.'}
          </h2>
          <p className={styles.sub}>
            {isRegistering
              ? 'Create your free account to build your travel map.'
              : 'Sign in to access your saved journeys.'}
          </p>

          <form className={styles.form} onClick={(e) => e.preventDefault()}>
            
            {isRegistering && (
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Full Name</label>
                <div className={styles.inputWrap}>
                  <FiUser className={styles.inputIcon} size={16} />
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className={styles.input}
                  />
                </div>
              </div>
            )}

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Email Address</label>
              <div className={styles.inputWrap}>
                <FiMail className={styles.inputIcon} size={16} />
                <input
                  type="email"
                  placeholder="hello@superjourneys.ai"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Password</label>
              <div className={styles.inputWrap}>
                <FiLock className={styles.inputIcon} size={16} />
                <input
                  type="password"
                  placeholder="••••••••"
                  className={styles.input}
                />
              </div>
            </div>

            <button className={styles.primaryBtn} onClick={onClose}>
              {isRegistering ? 'Create Account' : 'Sign In'} <FiChevronRight size={14} />
            </button>
          </form>

          <div className={styles.divider}>Or continue with</div>

          <button className={styles.socialBtn} onClick={onClose}>
            <FcGoogle size={18} /> Google
          </button>
          {/* Apple button removed as requested */}

          <p className={styles.toggleView}>
            {isRegistering ? 'Already have an account?' : "Don't have an account?"}
            <span
              className={styles.toggleSpan}
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'Sign In' : 'Sign Up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
