import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./contact-info.scss"

const GET_CONTACT_INFO = graphql`
    query GetContactInfo{
        contentYaml{
            contact{
                title
                phone
                email
                location
            }
        }
    }
`

const ContactInfo = () => {
    const { contentYaml : { contact } } = useStaticQuery(GET_CONTACT_INFO)
    return (
        <article className="contact__info--container">
            <h3 className="contact__info--title">
                { contact.title }
            </h3>
            <ul className="contact__info--list">
                <li clasName="contact__info--item">
                    <i className="fas fa-mobile"/>
                    { contact.phone }
                </li>
                <li clasName="contact__info--item">
                    <i className="fas fa-envelope-square"/>
                    { contact.email }
                </li>
                <li clasName="contact__info--item">
                    <i className="fas fa-walking"/>
                    { contact.location }
                </li>
            </ul>
        </article>
    )
}
 
export default ContactInfo