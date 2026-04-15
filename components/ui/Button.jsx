import Link from 'next/link'
import styles from './Button.module.css'

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // primary | secondary | outline | dark
  size = 'md',         // sm | md | lg
  icon,
  iconPosition = 'left',
  fullWidth = false,
  type = 'button',
  disabled = false,
}) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    disabled ? styles.disabled : '',
  ].filter(Boolean).join(' ')

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {content}
    </button>
  )
}