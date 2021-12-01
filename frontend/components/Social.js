import React from "react";
import styles from "../styles/Social.module.css";
function Social({ facebook, instagram, viber, zalo }) {
  return (
    <div className={styles.social}>
      <a href={facebook ? facebook : "#"} className={styles.social__icon}>
        <img
          src="images/facebook.png"
          alt="facebook"
          className={styles.image}
        />
      </a>
      <a href={zalo ? zalo : "#"} className={styles.social__icon}>
        <img src="images/zalo.png" alt="zalo" className={styles.image} />
      </a>
      <a href={instagram ? instagram : "#"} className={styles.social__icon}>
        <img
          src="images/instagram.png"
          alt="instagram"
          className={styles.image}
        />
      </a>
      <a href={viber ? viber : "#"} className={styles.social__icon}>
        <img src="images/viber.png" alt="viber" className={styles.image} />
      </a>
    </div>
  );
}

export default Social;
