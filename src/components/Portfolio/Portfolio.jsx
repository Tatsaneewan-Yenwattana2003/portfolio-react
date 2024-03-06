import React from 'react'
import styles from './Portfolio.module.css'

const user ={
  img1:'https://res.cloudinary.com/techupth/image/upload/v1665131307/techupth/blog-posts/2202-programmer-tips_p0cpo1.jpg',
  img2:'https://www.dailytech.in.th/wp-content/uploads/2018/01/Programmer-Code.jpg',
  img3:'https://careers.mahidol.ac.th/wp-content/uploads/2021/03/qr-23.jpg',
  img4:'https://png.pngtree.com/thumb_back/fw800/background/20220801/pngtree-programmer-is-coding-and-programming-software-developer-computing-hacker-photo-image_47831876.jpg',
  img5:'https://png.pngtree.com/thumb_back/fw800/background/20230123/pngtree-program-code-displayed-on-computer-screens-atop-desk-in-vacant-data-room-photo-image_49420044.jpg',
  img6:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uOeCNZxFR0_lr1BFFm0z10rAdj7zMAwGcnCo2HHleQT4Y7o-kI5c6YgubfIe5Gvkj2o&usqp=CAU',
 
}

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src={user.img1} />
            <p>Project Income-expense money slip system by ocr</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img2} />
            <p>Project wab app </p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img3}/>
            <p>Project Application Scan sea creatures</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img4} />
            <p>Project Electrical circuit</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img5} />
            <p>Project Game</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img6} />
            <p>Project Basic number system</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio