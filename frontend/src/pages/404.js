import React from "react"

import { Page, Section, SEO } from "../components/ui"

const NotFoundPage = () => (
  <Page
    contentSpacing="wide"
  >
    <SEO title="404: Not found" />
    <Section>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Section>
  </Page>
)

export default NotFoundPage
