/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const EventStop = ({ children, eventNumber, eventLocation, eventImage, eventDescription, eventLink }) => {

    return (
        <div className="event-stop">
            <div className="event-header">
                <div className="event-number">
                    <p>{ eventNumber }</p>
                </div>
                <div className="event-location">
                    <a href={ eventLink }>
                        <h2>{ eventLocation }</h2>
                    </a>
                </div>
            </div>
            { eventDescription ? ( <p>{ eventDescription }</p> ) : '' }
            { children }
            <img src={ eventImage } alt={ eventLocation } />
        </div>
    )
}

EventStop.propTypes = {
    children: PropTypes.node.isRequired,
    eventNumber: PropTypes.number.isRequired,
    eventLocation: PropTypes.string,
    eventImage: PropTypes.string,
    eventDescription: PropTypes.string,
    eventLink: PropTypes.string,
}

export default EventStop
