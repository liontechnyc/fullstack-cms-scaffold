import { toast } from "react-toastify"
import { useMutation } from "@apollo/react-hooks"

import ADD_NEW_SUBSCRIBER from "../../api/mutations/subscribe.gql"

const onSubmitHandler = (mutation) => async (event) =>{
    event.preventDefault()
    const form = new FormData(event.target)
    await mutation({ variables: {
        email: form.get('email')
    } })
}

const EmailLeadSubscription = () => {
    const [ addNewSubscriber, { data, loading, error } ] = useMutation(ADD_NEW_SUBSCRIBER)

    if(data){
        toast.success("Thank you for subscribing!")
    }
    if(error){
        toast.error("Sorry we could not add you to our subscriber list.")
    }

    return(
        <form onSubmit={onSubmitHandler(addNewSubscriber)} className="form__container">
            <input 
                type="email"
                name="email"
                disabled={loading}
                className="form__input"
                placeholder="Enter your email address..."
            />
            <input
                className="form__submit" 
                type="submit" 
                value={loading ? "Loading..." : "Subscribe"}
            />
        </form>
    )
}

export default EmailLeadSubscription