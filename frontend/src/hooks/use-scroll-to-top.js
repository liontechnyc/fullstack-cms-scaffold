import React, { useState, useEffect } from 'react'

/**
 * 
 * @param {number} threshold - pixel offset to determine visibility range 
 */
const useScrollToTop = (threshold = 300) => {
    const [ isVisible, setVisbility ] = useState(false)
    
    function scrollVisibilityHandler(){
        if(window.scrollY > threshold){
            setVisbility(true)
        } else {
            setVisbility(false)
        }
    }

    useEffect(() => {
        const poller = setInterval(scrollVisibilityHandler, 500)

        return () => clearInterval(poller)
    })

    return isVisible
}
 
export default useScrollToTop