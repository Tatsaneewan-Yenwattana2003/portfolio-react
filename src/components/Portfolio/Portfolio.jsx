import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="1.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="2.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="3.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="4.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="5.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="6.jpg" alt="" />
            <p>Project Title</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio