import React from "react";
import styles from "../styles/Social.module.css";
import { getStrapiURL } from "../utils/api";

function Social({ generalInfo }) {
    const _getLinkImage = (image) => {
        return `${
            process.env.NEXT_PUBLIC_DEV_URL || "https://odaubannha.com"
        }${image}`;
    };
    return (
        <div className={styles.social}>
            <ul class="large border-white color-white-a mt-20" style={{
              display: "flex",
              flexDirection: "column",
            }}>
                <li className="bg-secondary" style={{
                  borderRadius: "50%",
                  width: "43px",
                  height: "43px",
                  lineHeight: "43px",
                  marginBottom: "10px",
                  textAlign: "center",
                  border: "2px solid white"
                }}>
                    <a href={`tel:${generalInfo.phone}`}>
                        <i class="fa fa-phone"></i>
                    </a>
                </li>
                <li className="bg-secondary" style={{
                  borderRadius: "50%",
                  width: "43px",
                  height: "43px",
                  lineHeight: "43px",
                  marginBottom: "10px",
                  textAlign: "center",
                  border: "2px solid white"
                }}>
                    <a
                        target="_blank"
                        href={generalInfo.zaloUrl}
                        style={{
                            fontFamily: "Fredoka One",
                            fontSize: "12px",
                        }}
                    >
                        Zalo
                    </a>
                </li>
                <li className="bg-secondary" style={{
                  borderRadius: "50%",
                  width: "43px",
                  height: "43px",
                  lineHeight: "43px",
                  marginBottom: "10px",
                  textAlign: "center",
                  border: "2px solid white"
                }}>
                    <a target="_blank" href={generalInfo.facebookUrl}>
                        <i class="fa fa-facebook"></i>
                    </a>
                </li>
                <li className="bg-secondary" style={{
                  borderRadius: "50%",
                  width: "43px",
                  height: "43px",
                  lineHeight: "43px",
                  marginBottom: "10px",
                  textAlign: "center",
                  border: "2px solid white"
                }}>
                    <a target="_blank" href={generalInfo.youtubeUrl}>
                        <i class="fa fa-youtube"></i>
                    </a>
                </li>
            </ul>
            {/* <a href={viber ? viber : "#"} className={styles.social__icon}>
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
      </a> */}
        </div>
    );
}

export default Social;
