import React from "react"

import Page from "../components/page"
import SEO from "../components/seo"

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <section className="page__content--block">
      <h1>Hi people, welcome to CMS Frontend</h1>
    </section>
  </Page>
)

export default IndexPage
