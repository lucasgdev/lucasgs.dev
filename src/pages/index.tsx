import { Link } from "gatsby";
import * as React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <b>Home</b>
    </h1>
    <ul>
      {links.map(link => (
        <li key={link.label}>
          <Link to={link.href} activeStyle={{ color: "red" }}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;
