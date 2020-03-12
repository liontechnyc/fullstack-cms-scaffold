import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import cx from "classnames"
import PropTypes from "prop-types"

import "./tabulation.scss"

function itemToPanel(activeItem, clickHandler){
    return (item, id) => (
        <h4 
            key={`${id}`} 
            className={id === activeItem ? 'is-active' : undefined}
            onClick={() => clickHandler(id)}
        >
            { item.title }
        </h4>
    )
}

function itemToDescription(activeItem){
    return (item, id) => (
        <p 
            key={`${id}`} 
            className={cx("animated", { 
                "is-active" : id === activeItem,
                "fadeIn" : id === activeItem, 
                "fadeOut" : id !== activeItem 
            })}
        >
            { item.description }
        </p>
    )
}

function itemToCta(cta, ctaIcon, activeItem){
    return (item, id) => (
        <Link
            key={`${id}`} 
            className={cx("btn__link", { 
                "is-active" : id === activeItem 
            })} 
            to={item.cta_link || '#'}
        >
            { cta }
            <i className={`fas fa-${ ctaIcon }`}/>
        </Link>
    )
}

const Tabulation = ({ cta, ctaIcon, items }) => {
    const [ activeTab, setActiveTab ] = useState(0)

    useEffect(() => {
        const tabsContainer = document.querySelector('.tabulation__panel--tabs')
        const selectionBar = document.querySelector('.tabulation__panel--selection-bar')
        const activeItem = document.querySelector('.tabulation__panel--tabs > .is-active')

        selectionBar.style.width = `${ activeItem.clientWidth }px`
        selectionBar.style.transform = `translateX(${ activeItem.offsetLeft }px)`
        tabsContainer.scrollLeft = activeItem.offsetLeft
    })

    return(
        <div className="tabulation__container">
            <div className="tabulation__panel--tabs">
                <div className="tabulation__panel--selection-bar"/>
                {items.map(itemToPanel(activeTab, setActiveTab))}
            </div>
            <div className="tabulation__panel--description">
                {items.map(itemToDescription(activeTab))}
            </div>
            <div className="tabulation__panel--cta">
                {items.map(itemToCta(cta, ctaIcon, activeTab))}
            </div>
        </div>
    )
}

Tabulation.propTypes = {
    cta: PropTypes.string,
    ctaIcon: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        cta_link: PropTypes.string.isRequired
    })).isRequired
}

export default Tabulation