import { IGatsbyImageData } from "gatsby-plugin-image";

export interface ILogo {
  extension: string;
  name: string;
  relativePath: string;
  childrenImageSharp: IGatsbyImageData[];
}

export interface IContactDetails {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface IFeature {
  title: string;
  text: string;
  logo: string;
}

export interface ITestimonial {
  name: string;
  avatar: string;
  position: string;
  text: string;
  image: IGatsbyImageData;
}
