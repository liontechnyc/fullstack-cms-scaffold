import React from "react"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

export const asModal = Component => props => {
    return(
        <ModalRoutingContext.Consumer>
            {(modalProps) => <Component {...modalProps} {...props}/>}
        </ModalRoutingContext.Consumer>
    )
}