import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import IndexHero from "../components/IndexHero";
import IndexTestimonials from "../components/IndexTestimonials";
import IndexContact from "../components/IndexContact";
import IndexProcess from "../components/IndexProcess";
import { useTranslation } from "react-i18next";
import { ITestimonial } from "../libs/interfaces";
import IndexFAQ from "../components/IndexFAQ";
import IndexFeatures from "../components/IndexFeatures";

export default function index({ data }: any) {
  const { t } = useTranslation();

  const header_title = data.header?.frontmatter.title;
  const header_subtitle = data.header?.frontmatter.subtitle;
  const header_img = data.header?.frontmatter.header_img;

  const contact_title = data.contact?.frontmatter.title;
  const contact_subtitle = data.contact?.frontmatter.subtitle;
  const contact_phone = data.contact?.frontmatter.phone;
  const contact_email = data.contact?.frontmatter.email;

  const features_title = data.features?.frontmatter.title;
  const features_subtitle = data.features?.frontmatter.subtitle;
  const features_list = data.features?.frontmatter.features;

  const testimonials_title = data.testimonials?.frontmatter.title;
  const testimonials_subtitle = data.testimonials?.frontmatter.subtitle;
  const testimonials_list = data.testimonials?.frontmatter.testimonials;

  const process_title = data.process?.frontmatter.title;
  const process_subtitle = data.process?.frontmatter.subtitle;
  const process_steps = data.process?.frontmatter.steps;

  const seo = {};

  const header_image = data.staticImg?.nodes.find((el: any) => {
    return `/${el.relativePath}` == header_img;
  })?.childrenImageSharp[0];

  const testimonialsList = [
    ...testimonials_list.map((item: any) => ({
      avatar: data.testimonialsImg.nodes.find((el: any) => {
        return item.image == `/${el.relativePath}`;
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
        <IndexFeatures
          title={features_title}
          subtitle={features_subtitle}
          features={features_list}
        />
        <IndexProcess
          title={process_title}
          subtitle={process_subtitle}
          steps={process_steps}
        />
      </section>
      <IndexTestimonials
        title={testimonials_title}
        subtitle={testimonials_subtitle}
        list={testimonialsList}
      />
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
    features: markdownRemark(
      fields: { slug: { glob: "/*/features" } }
      frontmatter: { lang: { eq: $language } }
    ) {
      id
      frontmatter {
        features {
          image
          name
          description
        }
        title
        subtitle
      }
    }
    testimonials: markdownRemark(
      fields: { slug: { glob: "/*/testimonials" } }
      frontmatter: { lang: { eq: $language } }
    ) {
      id
      frontmatter {
        title
        subtitle
        testimonials {
          image
          name
          position
          text
        }
      }
    }
    process: markdownRemark(
      fields: { slug: { glob: "/*/process" } }
      frontmatter: { lang: { eq: $language } }
    ) {
      id
      frontmatter {
        title
        subtitle
        steps {
          image
          name
          position
          description
        }
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
        relativePath: { glob: "assets/*" }
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
  }
`;
