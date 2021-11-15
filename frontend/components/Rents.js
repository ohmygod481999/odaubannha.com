import React from "react";
import { getStrapiImage } from "../utils/medias";

export default function Rent({ rentData }) {
  const { imageContent } = rentData;
  const background = {
    backgroundImage: `url(${getStrapiImage(imageContent[0])})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh"
  };
  return <div className="container" style={{
    marginBottom: "130px",
    marginTop: "30px"
  }}>
    <img src={getStrapiImage(imageContent[0])} className="w-100" />
  </div>;
}
