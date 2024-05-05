'use client'
import { useSettingsContext } from '../context/SettingsContext'
import styles from './DarkModeToggle.module.scss'

export const DarkModeToggle = () => {
  const { toggled, toggleTheme } = useSettingsContext()

  return (
    <div className={styles.container}>
      <button
        className={`${styles['toggle-btn']} ${toggled ? styles.toggled : ''}`}
        onClick={toggleTheme}
      >
        <div className={styles.thumb}></div>
      </button>

      <MoonIcon className={`${toggled ? styles['moon-active'] : ''}`} />
    </div>
  )
}

const MoonIcon = ({ ...params }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22'>
      <path
        fill='none'
        stroke='#838383'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M1 10.449a10.544 10.544 0 0019.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 001 10.449z'
        {...params}
      ></path>
    </svg>
  )
}
