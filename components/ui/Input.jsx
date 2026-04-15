import styles from './Input.module.css'

export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  name,
  required = false,
  error,
}) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={styles.inputWrap}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${styles.input} ${icon ? styles.withIcon : ''} ${error ? styles.hasError : ''}`}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}