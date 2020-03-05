import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./services.scss"

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
                { services.map((content, id) => (
                    <div key={`${id}`} className="services__block">
                        <figure className="services__block--icon">
                            <img src={ content.icon }/>
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