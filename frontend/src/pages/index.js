import React from "react"
import { Link } from "gatsby"

import { Page, Section, SEO } from "../components/ui"

const IndexPage = () => (
  <Page
    pageLayout="vertical"
    contentLayout="vertical"
    contentSpacing="wide"
    stickyNav
    justifyNavContent="end"
  >
    <SEO title="Home" />
    <Section>
      <h1>Hi people, welcome to Inergy CMS Frontend</h1>
      <Section>
        <em>Please note that is a boilerplate and you should necessarily remove the books content type!</em>
        <br/><br/>
        Here is a simple list of <i>books</i> from the backend:
        <br/>
        <br/>
        <Link to="/modal-example/" state={{ modal: true }}>
          Open modal
        </Link>
      </Section>
      <Section>
        <em>Please note that is a boilerplate and you should necessarily remove the books content type!</em>
        <br/><br/>
        Here is a simple list of <i>books</i> from the backend:
        <br/>
        <br/>
        <Link to="/modal-example/" state={{ modal: true }}>
          Open modal
        </Link>
      </Section>
    </Section>
    <Section>
      <h1>Hi people, welcome to Inergy CMS Frontend</h1>
      <span>
        <em>Please note that is a boilerplate and you should necessarily remove the books content type!</em>
        <br/><br/>
        Here is a simple list of <i>books</i> from the backend:
        <br/>
        <br/>
        <Link to="/modal-example/" state={{ modal: true }}>
          Open modal
        </Link>
      </span>
    </Section>
  </Page>
)

export default IndexPage
