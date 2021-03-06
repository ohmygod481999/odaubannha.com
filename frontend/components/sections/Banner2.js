import React from "react";
import { formatMoney } from "../../utils/common";
import { getStrapiImage, getStrapiMedia } from "../../utils/medias";

function Banner2({ bannerData }) {
  const { banner_home_page } = bannerData;
  const { slide } = banner_home_page;
  return (
    <div
      id="slider"
      style={{ height: "900px", margin: "0 auto", marginBottom: "0px" }}
    >
      {slide.map((item) => {
        const { subtitle, title, description, address, price, image } = item;
        return (
          <div
            className="ls-slide"
            data-ls="bgposition:50% 50%; duration:9000; transition2d:4; kenburnsscale:1.2;"
          >
            <img
              width={1920}
              height={900}
              src={getStrapiImage(image)}
              className="ls-bg"
              alt=""
            />
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "rgba(36,36,36, 0.8)",
                top: "50%",
                left: "50%"
              }}
              className="ls-l"
              data-ls="easingin:easeOutQuint; durationin:1500; durationout:400; parallaxlevel:0; position:fixed;"
            />
            <p
              style={{
                fontWeight: 600,
                fontFamily: '"Montserrat"',
                fontSize: "2.5rem",
                lineHeight: "76px",
                color: "#ffffff",
                top: "320px",
                left: "50px",
                whiteSpace: "nowrap"
              }}
              className="ls-l"
              data-ls="offsetyin:30; durationin:1000; delayin:300; offsetyout:-30; durationout:400; parallaxlevel:0;"
            >
              {title}
            </p>
            <p
              style={{
                fontWeight: 600,
                fontFamily: '"Montserrat"',
                fontSize: "2.5rem",
                lineHeight: "20px",
                top: "290px",
                left: "50px"
              }}
              className="ls-l color-primary"
              data-ls="offsetyin:30; durationin:1000; delayin:150 offsetyout:-30; durationout:400; parallaxlevel:0;"
            >
              {subtitle}
            </p>
            <p
              style={{
                fontWeight: 400,
                fontFamily: '"Roboto"',
                fontSize: "15px",
                lineHeight: "76px",
                color: "#ffffff",
                top: "370px",
                left: "53px",
                whiteSpace: "nowrap"
              }}
              className="ls-l"
              data-ls="offsetyin:30; durationin:1000; delayin:600; offsetyout:-30; durationout:400; parallaxlevel:0;"
            >
              {description}
            </p>
            <div
              style={{
                top: "440px",
                left: "53px",
                textAlign: "initial",
                fontWeight: 400,
                fontStyle: "normal",
                textDecoration: "none",
                height: "2px",
                width: "380px",
                background: "#adadad"
              }}
              className="ls-l"
              data-ls="showinfo:1; durationin:1000; delayin:1200; offsetyout:-30; durationout:400; scalexin:0;"
            />
            <p
              style={{
                fontWeight: 400,
                fontFamily: '"Roboto"',
                fontSize: "15px",
                lineHeight: "76px",
                color: "#ffffff",
                top: "430px",
                left: "53px",
                whiteSpace: "nowrap"
              }}
              className="ls-l"
              data-ls="offsetyin:30; durationin:1000; delayin:1600; offsetyout:-30; durationout:400; parallaxlevel:0;"
            >
              <i
                className="fa fa-map-marker color-primary mr-5"
                aria-hidden="true"
              />
              {address}
            </p>
            <p
              style={{
                fontWeight: 400,
                fontFamily: '"Roboto"',
                fontSize: "15px",
                lineHeight: "76px",
                color: "#ffffff",
                top: "470px",
                left: "53px",
                whiteSpace: "nowrap"
              }}
              className="ls-l"
              data-ls="offsetyin:0; durationin:1000; delayin:2200; offsetyout:-30; durationout:400; parallaxlevel:0;"
            >
              {formatMoney(price)}
            </p>
            <a
              style={{}}
              className="ls-l"
              href="#"
              target="_self"
              data-ls="offsetyin:30; durationin:1000; delayin:2800; offsetyout:-30; durationout:400; hover:true; hoverdurationin:300; hoveropacity:1; hoverbgcolor:#ffffff; hovercolor:#242424; parallaxlevel:0;"
            >
              <p
                style={{
                  fontWeight: 400,
                  textAlign: "initial",
                  cursor: "pointer",
                  paddingTop: "8px",
                  paddingBottom: "7px",
                  fontFamily: '"Montserrat"',
                  fontSize: "15px",
                  top: "560px",
                  left: "53px",
                  borderTop: "2px solid #fff",
                  borderRight: "2px solid #fff",
                  paddingRight: "25px",
                  borderBottom: "2px solid #fff",
                  borderLeft: "2px solid #fff",
                  paddingLeft: "25px",
                  lineHeight: "30px",
                  fontStyle: "normal",
                  textDecoration: "none",
                  color: "#ffffff",
                  background: "rgba(0, 0, 0, 0.1)",
                  borderRadius: "0px"
                }}
                className="ls-button"
              >
                View Details
              </p>
            </a>
            <div
              style={{
                textAlign: "center",
                width: "100px",
                height: "35px",
                lineHeight: "35px",
                fontFamily: '"Roboto"',
                fontSize: "15px",
                color: "#ffffff",
                borderRadius: "0px",
                top: "490px",
                left: "260px"
              }}
              className="ls-l bg-primary"
              data-ls="delayin:3200; easingin:easeOutElastic; rotateyin:-300; durationout:400; rotateyout:-400; parallaxlevel:0;"
            >
              For Rent
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Banner2;
