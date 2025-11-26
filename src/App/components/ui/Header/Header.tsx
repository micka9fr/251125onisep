import React from 'react'
import styles from './Header.module.css'

const Header :React.FC= () => {
  return (
    <div className={styles.Header} data-testid="Header">Meme<span className={styles.dot}>.</span><span className={styles.js}>js</span></div>
  )
}

export default Header