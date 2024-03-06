import React from "react";
import styles from "./Testimonials.module.css";

const user={
  img1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWVKEmjMgBEZx0m_SP8jYdEocvrbNRYFZ1og&usqp=CAU',
  img2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_3DLE16FXcPC1lBfcmuy0Vve-jGCSByA-A&usqp=CAU',
  img3:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvvJ0rYJSI4pFMSclzTmX88DG_gzB7D0fZg&usqp=CAU',
}

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src={user.img1} 
          />
          <h4>Madtul</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src={user.img2}
          />
          <h4>Ten</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src={user.img3}
          />
          <h4>Kong</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;