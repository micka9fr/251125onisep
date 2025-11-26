import React from 'react'
import styles from './Footer.module.css'


const Footer :React.FC= () => {
  return (
    <div className={styles.Footer} data-testid="Footer">DESORBAIX &copy; 2025 Orsys</div>
  )
}

export default Footer