import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import PricingPackage from "../components/pricing-package"

import "./pricing.scss"

const LIST_PRICING = graphql`
    query ListPricing{
        contentYaml{
            pricing{
                title
                subtitle
                description
                cta_link
                price{
                    monthly{ cost }
                    annually { cost }
                }
                features{
                    name
                    included
                }
            }
        }
    }
`

const Pricing = () => {
    const { contentYaml: { pricing } } = useStaticQuery(LIST_PRICING)
    
    return (
        <div className="pricing__container">
            {pricing.map((item, id) => (
                <PricingPackage 
                    key={`${id}`} 
                    item={item}
                    cta="Get started"
                />)
            )}
        </div>
    )
}
 
export default Pricing