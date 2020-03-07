import React from "react"

const EmailLeadSubscription = () => {
    return(
        <form className="form__container">
            <input 
                type="email"
                className="form__input"
                placeholder="Enter your email adress..."
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