import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getStrapiImage } from "../utils/medias";

function Banner({ bannerData }) {
  const path = useRouter();
  const { title, subtitle, image } = bannerData;
  const background = {
    backgroundImage: `url(${getStrapiImage(image[0])})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "150px 0"
  };

  return (
    <>
      <div className=" overlay-black" style={background}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-12">
              <h1 className="page-banner-title color-primary">{title}</h1>
              <div className="text-area w-50 mt-15 color-white">
                <p>{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-15 px-0 bg-transparent hover-white-primary">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    
                    <Link href={path.pathname}>
                    {title}
                      {/* {path.pathname.replace("/", "")} */}
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
