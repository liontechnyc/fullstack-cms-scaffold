import { useState, useEffect } from "react"

const useSiteMenu = () => {
    const [ menuIsVisible, setMenuVisibility ] = useState(false)

    useEffect(() => {
        const keyHandler = (e) => {
            if(menuIsVisible && e.key === 'Escape'){
                setMenuVisibility(false)
            }
        }
        window.addEventListener("keyup", keyHandler)
        return () => {
            window.removeEventListener("keyup", keyHandler)
        }
    })

    return { menuIsVisible, setMenuVisibility }
}

export default useSiteMenu