import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const PricingPackage = ({ frequency, item, cta }) => {
    return(
        <div className="pricing__package--container">
            <header>
                <h3>{ item.title }</h3>
                <p>{ item.subtitle }</p>
            </header>
            <div className="pricing__package--price">
                <h2>
                    <span className="icon" children="$"/>
                    { item.price[frequency].cost }
                </h2>
                <hr/>
                <div
                    className="pricing__package--frequency"
                    children={ frequency }
                />
                <p
                    className="pricing__package--description"
                    children={ item.description }
                />
                <ul className="pricing__package--features">
                    { item.features.map((feature, id) => (
                        <li 
                            key={`${ id }`}
                            className={!feature.included ? 'is-disabled' : undefined}
                            children={ feature.name }
                        >
                            <i 
                                className={`far ${feature.included ? 'fa-check-circle' : 'fa-times-circle'}`}
                            />
                            { feature.name }
                        </li>)
                    ) }
                </ul>
                <div className="pricing__package--cta">
                    <Link
                        href={ item.cta_link }
                        className="btn__link"
                        children={ cta }
                    />
                </div>
            </div>
        </div>
    )
}

PricingPackage.propTypes = {
    frequency: PropTypes.oneOf([ 'monthly', 'annually' ]),
    cta: PropTypes.string,
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.shape({
            monthly: PropTypes.shape({
                cost: PropTypes.number.isRequired
            }).isRequired,
            annually: PropTypes.shape({
                cost: PropTypes.number.isRequired
            }).isRequired
        }).isRequired,
        features: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            included: PropTypes.bool.isRequired
        })).isRequired
    }).isRequired
}

PricingPackage.defaultProps = {
    frequency: 'monthly',
    cta: 'Get started'
}

export default PricingPackage