import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Services = () => {
    const { 
        contentYaml: { services } 
    } = useStaticQuery(graphql`
        query ListServices{
            contentYaml{
                services{
                    title
                    description
                    icon
                }
            }
        }
    `)
    return(
        <div className="services__container">
            <div className="services__content">
                {services.map((content, key) => {

                })}
            </div>
        </div>
    )
}

export default Services