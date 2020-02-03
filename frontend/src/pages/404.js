import React from "react"

import Page from "../components/page"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Page>
    <SEO title="404: Not found" />
    <section className="page__content--block">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </Page>
)

export default NotFoundPage
