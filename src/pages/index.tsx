import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import IndexHero from "../components/IndexHero";
import IndexServices from "../components/IndexServices";
import IndexTestimonials from "../components/IndexTestimonials";
import IndexContact from "../components/IndexContact";
import IndexProcess from "../components/IndexProcess";
import { useTranslation } from "react-i18next";
import { ITestimonial } from "../libs/interfaces";
import IndexFAQ from "../components/IndexFAQ";

export default function index({ data }: any) {
  const { t } = useTranslation();
  const { title, subtitle, header_img } = data.header.frontmatter;

  const seo = {};

  const header_image = data.staticImg.nodes.find((el: any) => {
    return `/${el.relativePath}` == header_img;
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
    <Layout>
      <Seo seo={seo} lang={data.locales.edges[0].node.language} />
      <IndexHero title={title} subtitle={subtitle} img={header_image} />
      <section className="relative py-16 md:py-24" id="features">
        <IndexServices />
        <IndexProcess />
      </section>
      <IndexTestimonials list={testimonialsList} />
      <IndexFAQ />
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
      fields: { slug: { glob: "/*/header" } }
      frontmatter: { lang: { eq: $language } }
    ) {
      id
      frontmatter {
        title
        subtitle
        header_img
      }
    }
    staticImg: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
    ) {
      nodes {
        name
        relativePath
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
