import React from "react"
import { graphql } from "gatsby"

import { Page, Section, SEO } from "../components/ui"

import "./policy-template.scss"

export default function Template({ data }){
    const { markdownRemark: page } = data
    window.scrollTo(0, 0)
    return(
        <Page navPlacement="sticky" contentSpacing="fluid">
            <SEO title={page.frontmatter.title}/>
            <Section bgColor="#fffafa">
              <div className="policy__container">
                <div
                className="policy__container--content animated fadeIn"
                dangerouslySetInnerHTML={{ __html: page.html }}
                />
              </div>
            </Section>
        </Page>
    )
}

export const pageQuery = graphql`
  query PostByPath($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html
      frontmatter{
          path
          title
      }
    }
  }
`