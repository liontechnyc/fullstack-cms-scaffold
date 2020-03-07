import { useState, useEffect } from "react"

const useCookieConsent = () => {
    const cookieConsentVerified = localStorage.getItem('cookieConsentVerified')
    const [ hasConsent, setConsent ] = useState(cookieConsentVerified)

    useEffect(() => {
        if(hasConsent){
            localStorage.setItem('cookieConsentVerified', true)
        }
    })

    return { hasConsent, setConsent }
}

export default useCookieConsent