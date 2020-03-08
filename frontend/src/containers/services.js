import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./services.scss"

const LIST_SERVICES = graphql`
    query ListServices{
        contentYaml{
            home{
                services{
                    title
                    description
                    icon
                }
            }
        }
    }
`

const Services = () => {
    const { 
        contentYaml: { 
            home: { services } 
        } 
    } = useStaticQuery(LIST_SERVICES)
    return(
        <div className="services__container">
            <div className="services__content">
                { services.map((content, id) => (
                    <div key={`${id}`} className="services__block">
                        <figure className="services__block--icon image__container">
                            <img className="is-64x64" src={ content.icon }/>
                        </figure>
                        <h3>{ content.title }</h3>
                        <p>{ content.description }</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services