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
  name: string;
  description: string;
  image: string;
}

export interface IProcessStep {
  name: string;
  description: string;
  image: string;
  position: string;
}

export interface ITestimonial {
  name: string;
  image: string;
  position: string;
  text: string;
  avatar: IGatsbyImageData;
}
