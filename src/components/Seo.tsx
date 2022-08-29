import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ seo = {}, lang }: any) => {
  const { siteName, defaultSeo, favicon } = {
    siteName: "Time Project Landing",
    defaultSeo: {
      metaTitle: "Time Project Landing",
      metaDescription: "Keep track of your time",
      shareImage: { localFile: { url: "" } },
    },
    favicon: { localFile: { url: "/assets/logos/ridge-icon.png" } },
  };

  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo, ...seo };

  // Add site name to title
  fullSeo.metaTitle = `${fullSeo.metaTitle} | ${siteName}`;
  fullSeo.metaDescription = `${fullSeo.metaDescription}`;

  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.metaTitle,
        }
      );
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        },
        {
          name: "twitter:description",
          content: fullSeo.metaDescription,
        }
      );
    }
    if (fullSeo.shareImage) {
      const imageUrl = fullSeo.shareImage.localFile.url;
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        }
      );
    }
    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      });
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" });

    return tags;
  };

  const metaTags = getMetaTags();

  return (
    <Helmet
      title={fullSeo.metaTitle}
      htmlAttributes={{
        lang,
      }}
      link={[
        {
          rel: "icon",
          href: favicon.localFile.url,
        },
      ]}
      meta={metaTags}
    />
  );
};

export default Seo;
