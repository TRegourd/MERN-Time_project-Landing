import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { ILogo } from "./interfaces";

export function displayLogo(logo: ILogo, className: string, alt: string) {
  if (logo?.extension && logo.extension === "svg") {
    return (
      <img src={`/${logo.relativePath}`} className={className} alt={alt} />
    );
  } else {
    const image = getImage(logo?.childrenImageSharp[0]);
    if (image) {
      return (
        <GatsbyImage
          image={image}
          alt={alt}
          className={className}
        ></GatsbyImage>
      );
    }
  }
}
