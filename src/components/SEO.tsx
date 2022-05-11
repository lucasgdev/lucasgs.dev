import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type PropTypes = {
  description?: string;
  lang?: string;
  meta?: [];
};

function SEO({ description = "", lang = "en", meta = [] }: PropTypes) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const url = site.siteMetadata.siteUrl;

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const ogImage = `${url}${"/assets/img/profile-photo.png"}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image:src`,
          content: ogImage,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

export default SEO;
