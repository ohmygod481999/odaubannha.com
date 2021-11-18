import React from "react";
import { getStrapiImage } from "../../utils/medias";

function Partner({ Partners }) {
  const { partners } = Partners;
  const { title, description, subtitle, image_partners } = partners;
  return (
    <div className="patner-subscribe">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 wow animated slideInDown">
            <div className="py-80">
              <div className="row">
                <div className="col-md-12 px-60 border-right">
                  <div className="side-title pb-30">
                    <span className="small-title color-primary position-relative line-primary">
                      {subtitle}
                    </span>
                    <h2 className="title mb-20 color-secondary">{title}</h2>
                    <p>{description}</p>
                  </div>
                  <div className="owl-carousel partnerss mt-30">
                    {image_partners.map((image) => (
                      <img
                        key={image.id}
                        src={getStrapiImage(image)}
                        alt="Image not found!"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
