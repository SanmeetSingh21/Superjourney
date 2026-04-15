import styles from './FilterChip.module.css'

export default function FilterChip({ label, active = false, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.chip} ${active ? styles.active : ''}`}
      aria-pressed={active}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{label}</span>
    </button>
  )
}