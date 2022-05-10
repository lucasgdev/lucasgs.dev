import * as React from "react";

import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Skills />
    <Experience />
  </Layout>
);

export default IndexPage;
