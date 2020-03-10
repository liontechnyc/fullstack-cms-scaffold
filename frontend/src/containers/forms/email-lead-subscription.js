import React from "react"
import { useMutation } from "@apollo/react-hooks"

import ADD_NEW_SUBSCRIBER from "../../api/mutations/subscribe.gql"

const onSubmitHandler = (mutation) => async (event) =>{
    event.preventDefault()
    const form = new FormData(event.target)
    const { loading, error } = await mutation({ variables: {
        email: form.get('email')
    } })
}

const EmailLeadSubscription = () => {

    const [ addNewSubscriber ] = useMutation(ADD_NEW_SUBSCRIBER)

    return(
        <form onSubmit={onSubmitHandler(addNewSubscriber)} className="form__container">
            <input 
                type="email"
                name="email"
                className="form__input"
                placeholder="Enter your email address..."
            />
            <input
                className="form__submit" 
                type="submit" 
                value="Subscribe"
            />
        </form>
    )
}

export default EmailLeadSubscription