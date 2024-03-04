import React from 'react'
import styles from './Services.module.css'  
import {FaCode, FaPaintbrush, FaDesktop} from 'react-icons/fa6'


function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode/>
            <h4>Web Devlopment</h4>
            <p>ขั้นตอนกระบวนการพัฒนาเว็บไซต์ ใช้ภาษาโปรแกรม และ เครื่องมือสำหรับการสร้างเว็บไซต์ขึ้นมา เริ่มตั้งแต่การวางโครงสร้าง ออกแบบ พัฒนาเว็บ และ คอยดูแลระบบเว็บไซต์หลังจากการสร้างเว็บขึ้นมาเรียบร้อยแล้ว รวมไปถึงการเลือกนำเสนอข้อมูลบนเว็บไซต์ระหว่างบราวเซอร์ ฟีเจอร์ต่างๆ เพื่อให้มีการตอบสนองจากผู้ใช้ ซึ่งส่วนมากผู้ที่ทำธุรกิจตลาดออนไลน์ </p>
        </div>
        <div className={styles.services_items}>
            <FaPaintbrush/>
            <h4>Web Design</h4>
            <p>การออกแบบดีไซน์รูปลักษณ์ภายนอกของเว็บไซต์ ความสวยงามต่าง ๆ และการออกแบบฟังก์ชันการทำงานที่ออกแบบโดยคำนึงถึงผู้ใช้งานเป็นหลัก </p>
        </div>
        <div className={styles.services_items}>
            <FaDesktop/>
            <h4>Web Mobile</h4>
            <p>การพัฒนาและออกแบบเว็บไซต์หรือแอปพลิเคชันที่ถูกออกแบบมาเพื่อใช้งานบนอุปกรณ์เคลื่อนที่ เช่น สมาร์ทโฟน แท็บเล็ต หรืออุปกรณ์พกพาอื่น ๆ ที่สามารถเชื่อมต่อกับอินเทอร์เน็ตได้ เว็บไซต์หรือแอปพลิเคชันที่ออกแบบมาเพื่อ Web Mobile จะถูกปรับให้สามารถใช้งานได้ง่าย ๆ และมีประสิทธิภาพในการทำงานบนหน้าจอขนาดเล็ก </p>
        </div>
      </div>
    </div>
  )
}

export default Services