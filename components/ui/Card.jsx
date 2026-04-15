import styles from './Card.module.css'

export default function Card({
  children,
  variant = 'default', // default | flat | dark
  hover = true,
  padding = 'md',      // sm | md | lg | none
  className = '',
}) {
  return (
    <div
      className={[
        styles.card,
        styles[variant],
        styles[`pad-${padding}`],
        hover ? styles.hoverable : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}