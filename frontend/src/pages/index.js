import React from "react"
import { Link } from "gatsby"

import { Page, SEO } from "../components/ui"
import Books from "../components/books"

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <section className="page__content--block">
      <h1>Hi people, welcome to Inergy CMS Frontend</h1>
      <span>
        <em>Please note that is a boilerplate and you should necessarily remove the books content type!</em>
        <br/><br/>
        Here is a simple list of <i>books</i> from the backend:
        <br/>
        <Books/>
        <br/>
        <Link to="/modal-example/" state={{ modal: true }}>
          Open modal
        </Link>
      </span>
    </section>
  </Page>
)

export default IndexPage
