import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Deep Six Design" />
    <h4>Holy Frigsmas</h4>
    <p>Yip Yip, Yehaw!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/asd/">take me to asd</Link>
  </Layout>
)

export default IndexPage
