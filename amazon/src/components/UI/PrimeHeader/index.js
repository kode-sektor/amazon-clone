import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const PrimeHeader = ({header, blurb, pane}) => {
    return (
        <header className={`prime__benefit ${pane}`}>
            <h2 className="prime__benefitHeadline">{header}</h2>
            <div className="prime__benefitBlurb">{blurb}</div>
            <div className="prime__benefit__cta">
                <Link className="a__link__normal" to="/">
                    {/* If string does not begin with 'Learn', then prepend 'Explore Prime' to string */}
                    { (pane.indexOf("Learn") === 0) ? pane : (`Explore Prime ${pane}`) } 
                    <div className="sprite small-arrow"></div>
                </Link>
            </div>
        </header>
    )
}

export default PrimeHeader
