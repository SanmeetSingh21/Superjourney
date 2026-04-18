'use client'

import { useState } from 'react'
import { FiUser, FiMail, FiLock, FiX, FiChevronRight, FiEye, FiEyeOff } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import styles from './AuthModal.module.css'
import { api } from '../../lib/apiClient'

export default function AuthModal({ onClose }) {
  const [isRegistering, setIsRegistering] = useState(false)
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [countryCode, setCountryCode] = useState('+91')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    
    try {
      if (isRegistering) {
        const res = await api.post('/auth/register', { 
          name: fullName, 
          email, 
          password,
          phone: `${countryCode}${phone}`
        })
        if (res.token) localStorage.setItem('token', res.token)
        onClose()
      } else {
        const res = await api.post('/auth/login', { email, password })
        if (res.token) localStorage.setItem('token', res.token)
        onClose()
      }
    } catch (err) {
      setError(err.message || 'Something went wrong')
    }
  }

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

          <form className={styles.form} onSubmit={handleSubmit}>
            {error && <div className={styles.errorText} style={{color: 'red', fontSize: '12px'}}>{error}</div>}
            
            {isRegistering && (
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Full Name</label>
                <div className={styles.inputWrap}>
                  <FiUser className={styles.inputIcon} size={16} />
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className={styles.input}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
            )}

            {isRegistering && (
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Phone Number</label>
                <div className={styles.inputWrap}>
                  <select 
                    className={styles.countrySelect}
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+1">+1 (CA)</option>
                    <option value="+49">+49 (DE)</option>
                    <option value="+33">+33 (FR)</option>
                    <option value="+65">+65 (SG)</option>
                    <option value="+971">+971 (UAE)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+81">+81 (JP)</option>
                    <option value="+86">+86 (CN)</option>
                    <option value="+39">+39 (IT)</option>
                    <option value="+34">+34 (ES)</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="00000 00000"
                    className={styles.input}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ paddingLeft: '115px' }}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Password</label>
              <div className={styles.inputWrap}>
                <FiLock className={styles.inputIcon} size={16} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" className={styles.primaryBtn}>
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
