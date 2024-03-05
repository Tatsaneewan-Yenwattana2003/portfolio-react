import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/pexels-digital-buggu-374559.jpg" alt="" />
            <p>Project Income-expense money slip system by ocr</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/pexels-lee-campbell-89724.jpg" alt="" />
            <p>Project wab app </p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/pexels-luis-gomes-546819.jpg" alt="" />
            <p>Project Application Scan sea creatures</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/pexels-mizuno-k-12899188.jpg" alt="" />
            <p>Project Electrical circuit</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/pexels-pixabay-270404.jpg" alt="" />
            <p>Project Game</p>
        </div>
        <div className={styles.port_items}>
            <img src="src/components/Portfolio/pexels-rodrigo-santos-3888149.jpg" alt="" />
            <p>Project Basic number system</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio