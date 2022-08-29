import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import IndexHero from "../components/IndexHero";
import IndexAbout from "../components/IndexAbout";
import IndexServices from "../components/IndexServices";
import IndexPortfolio from "../components/IndexPortfolio";
import IndexTestimonials from "../components/IndexTestimonials";
import IndexContact from "../components/IndexContact";
import IndexProcess from "../components/IndexProcess";
import { useTranslation } from "react-i18next";
import { ITestimonial } from "../libs/interfaces";

export default function index({ data }: any) {
  const { t } = useTranslation();
  const { title, subtitle, header_img } = data.header.frontmatter;

  const seo = {};

  const header_image = data.staticImg.nodes.find((el: any) => {
    return el.name == header_img;
  })?.childrenImageSharp[0];

  const rawTestimonialsList: ITestimonial[] = t("TESTIMONIALS.testimonials", {
    returnObjects: true,
  });

  const testimonialsList = [
    ...rawTestimonialsList.map((item: any) => ({
      image: data.testimonialsImg.nodes.find((el: any) => {
        return item.avatar == el.name;
      })?.childrenImageSharp[0],
      ...item,
    })),
  ];

  return (
    <Layout navLight={false}>
      <Seo seo={seo} lang={data.locales.edges[0].node.language} />
      <IndexHero title={title} subtitle={subtitle} img={header_image} />
      <IndexAbout />
      <section className="relative py-16 md:py-24" id="features">
        <IndexServices />
        <IndexProcess />
      </section>
      <IndexPortfolio />
      <IndexTestimonials list={testimonialsList} />
      <IndexContact />
    </Layout>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    header: markdownRemark(
      frontmatter: { slug: { eq: "index/static" }, lang: { eq: $language } }
    ) {
      id
      frontmatter {
        lang
        slug
        title
        subtitle
        header_img
      }
    }
    staticImg: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        relativePath: { glob: "assets/index/*" }
      }
    ) {
      nodes {
        name
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
    logos: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)|(svg)/" }
        relativePath: { glob: "assets/logos/*" }
      }
    ) {
      nodes {
        name
        childrenImageSharp {
          gatsbyImageData
        }
        relativePath
        extension
      }
    }
    testimonialsImg: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        relativePath: { glob: "assets/index/testimonials/*" }
      }
    ) {
      nodes {
        name
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
