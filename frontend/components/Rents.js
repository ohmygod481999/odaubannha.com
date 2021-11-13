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
  return <div className="container  mt-10" style={background}></div>;
}
