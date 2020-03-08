import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Tabulation } from "../components/ui"

const LIST_SOLUTIONS = graphql`
    query ListSolutions{
        contentYaml{
            home{
                solutions{
                    title
                    description
                    cta_link
                }
            }
        }
    }
`


const Solutions = () => {
    const { 
        contentYaml: { 
            home: { solutions } 
        } 
    } = useStaticQuery(LIST_SOLUTIONS)
    return (
            <Tabulation
                cta="Read more"
                ctaIcon="chevron-right"
                items={solutions}
            />
    )
}
 
export default Solutions