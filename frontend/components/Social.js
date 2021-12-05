import React from "react";
import styles from "../styles/Social.module.css";
import { getStrapiURL } from "../utils/api";

function Social({ facebook, youtube, viber, zalo }) {
  const _getLinkImage = (image) => {
    return `${
      process.env.NEXT_PUBLIC_DEV_URL || "https://odaubannha.com"
    }${image}`;
  };
  return (
    <div className={styles.social}>
      <a href={viber ? viber : "#"} className={styles.social__icon}>
        <img
          src={_getLinkImage("/images/viber.png")}
          alt="viber"
          className={styles.image}
        />
      </a>
      <a href={zalo ? zalo : "#"} className={styles.social__icon}>
        <img
          src={_getLinkImage("/images/zalo-round.png")}
          alt="zalo"
          className={styles.image}
        />
      </a>
      <a href={facebook ? facebook : "#"} className={styles.social__icon}>
        <img
          src={_getLinkImage("/images/facebook-round.png")}
          alt="facebook"
          className={styles.image}
        />
      </a>

      <a href={youtube ? youtube : "#"} className={styles.social__icon}>
        <img
          src={_getLinkImage("/images/youtube.png")}
          alt="instagram"
          className={styles.image}
        />
      </a>
    </div>
  );
}

export default Social;
