import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { ParallaxProvider } from "react-scroll-parallax"
import styles from "../styles/index.scss"

import Intro from "../components/1.intro/intro"
import Infography from "../components/2.Infography/infography"
import ProduktDesign from "../components/3.produktDesign/produktDesign"
import Produktion from "../components/4.produktion/produktion"
import Importieren from "../components/5.importieren/importieren"
import Logistik from "../components/6.logistik/logistik"
import Fulhen from "../components/7.fuhlen/fuhlen"
import ContactForm from "../components/8.Contact/form"
import Blog from "../components/9.Blog/blog"

const IndexPage = () => (
  <ParallaxProvider>
    <div className={styles.website}>
      <Layout>
        <SEO title="Home" />
        <Intro />
        <Infography />
        <ProduktDesign id="home" />
        <Produktion />
        <Importieren />
        <Logistik />
        <Fulhen />
        <ContactForm />
        <Blog />
      </Layout>
    </div>
  </ParallaxProvider>
)

export default IndexPage
