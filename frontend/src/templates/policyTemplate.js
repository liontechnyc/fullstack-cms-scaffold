import React from "react"
import { graphql } from "gatsby"

import { Page, Section, SEO } from "../components/ui"

import "./policy-template.scss"

export default ({ data: {
    markdownRemark: { html, frontmatter: { title } }, 
  } 
  }) => {
    return(
        <Page navPlacement="sticky" contentSpacing="fluid">
            <SEO title={title}/>
            <Section bgColor="#fffafa">
              <div className="policy__container">
                <div
                className="policy__container--content"
                dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </Section>
        </Page>
    )
}

export const pageQuery = graphql`
  query{
    markdownRemark{
      html
      frontmatter{
          title
      }
    }
  }
`