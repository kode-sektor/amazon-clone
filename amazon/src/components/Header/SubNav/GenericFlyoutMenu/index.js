import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const GenericFlyoutMenu = ({ toggleFlyoutMegaMenu, items }) => {

    const flyoutmenu = items.map((item, index) => {
        
        const { link, img, alt, caption } = item
        return (
            <li className="generic__subnav__flyout__item">
                <Link to={link} className="generic__subnav__flyout__link">
                    <img src={img} alt={alt} className="generic__subnav__flyout__image" />
                    <div className="generic__subnav__flyout__title">
                        {caption}
                    </div>
                </Link>
            </li>
        )
    })

    return (
        <section className="progressiveFlyoutNav show" onMouseEnter={() => toggleFlyoutMegaMenu()} onMouseLeave={() => toggleFlyoutMegaMenu("exit")}>
            <section className="nav__flyout__content">
                <div className="generic__subnav__flyout__wrapper">
                    <div className="generic__subnav__flyout">
                        <ul className="generic__subnav__flyout__itemgroup">
                            {flyoutmenu}
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default GenericFlyoutMenu
