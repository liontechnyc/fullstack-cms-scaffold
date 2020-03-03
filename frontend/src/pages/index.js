import React from "react"
import { Link } from "gatsby"

import { Page, Section, SEO } from "../components/ui"

const IndexPage = () => (
  <Page
    pageLayout="vertical"
    contentLayout="vertical"
    contentSpacing="wide"
    justifyNavContent="end"
    navPlacement="sticky"
  >
    <SEO title="Home" />
    <Section>
      <h1>Hi people, welcome to Inergy CMS Frontend</h1>
      <Section contentLayout="horizontal">
        <em>Please note that is a boilerplate and you should necessarily remove this code</em>
        <br/>
        <Link to="/modal-example/" state={{ modal: true }}>
          Open modal
        </Link>
      </Section>
    </Section>
    <Section>
      <h1>Hi people, welcome to Inergy CMS Frontend</h1>
      <Section contentLayout="vertical">
        <em>Please note that is a boilerplate and you should necessarily remove this code</em>
        <br/>
        <Link to="/modal-example/" state={{ modal: true }}>
          Open modal
        </Link>
      </Section>
    </Section>
  </Page>
)

export default IndexPage
