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

  const header_title = data.header.frontmatter.title;
  const header_subtitle = data.header.frontmatter.subtitle;
  const header_img = data.header.frontmatter.header_img;

  const contact_title = data.contact.frontmatter.title;
  const contact_subtitle = data.contact.frontmatter.subtitle;
  const contact_phone = data.contact.frontmatter.phone;
  const contact_email = data.contact.frontmatter.email;

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
      <IndexHero
        title={header_title}
        subtitle={header_subtitle}
        img={header_image}
      />
      <section className="relative py-16 md:py-24" id="features">
        <IndexServices />
        <IndexProcess />
      </section>
      <IndexTestimonials list={testimonialsList} />
      <IndexFAQ />
      <IndexContact
        title={contact_title}
        subtitle={contact_subtitle}
        email={contact_email}
        phone={contact_phone}
      />
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
    contact: markdownRemark(
      fields: { slug: { glob: "/*/contact" } }
      frontmatter: { lang: { eq: $language } }
    ) {
      id
      frontmatter {
        title
        subtitle
        phone
        email
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
