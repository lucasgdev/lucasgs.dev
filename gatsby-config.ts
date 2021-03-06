import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Lucas G. Santos - @Frontend Specialist`,
    description: `Lucas G. Santos Frontend Specialist personal site.`,
    author: `@lucasgdev`,
    siteUrl: `https://www.lucasgs.dev`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Lucas G. Santos - @Frontend Specialist`,
        short_name: `Lucas G. - @Frontend Specialist`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`red hat display\:400,400i,500,500i,700,700i`],
        display: "swap",
      },
    },
    `gatsby-plugin-typescript`,
  ],
};

export default config;
