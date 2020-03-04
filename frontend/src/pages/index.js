import React from "react"
import { Link } from "gatsby"

import { 
  Page, 
  Section, 
  SEO
} from "../components/ui"
import {
  Hero
} from "../components/home"


const IndexPage = () => (
  <Page
    pageLayout="vertical"
    contentLayout="vertical"
    contentSpacing="fluid"
    justifyNavContent="end"
    navPlacement="sticky"
  >
    <SEO title="Home" />
    <Section>
      <Hero
        subtitle="Leverage agile frameworks to provide a robust synopsis for high level overviews"
        title="Because we override the digital, you should know about our #startup."
      >
        <a className="link__cta">
          Start Your Online Business Today
        </a>
      </Hero>
    </Section>
  </Page>
)

export default IndexPage
