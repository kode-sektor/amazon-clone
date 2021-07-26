import React from 'react'
import { Link } from 'react-router-dom'

import { progressiveSubNav } from '../../../utilities/data'
import amazon_fashion from '../../../images/amazon-fashion.png'
import free_returns from '../../../images/free-returns.png'
import amazon_dropdown_mini_arrow from '../../../images/amazon-dropdown-mini-arrow.png'

import './index.css'

const ProgressiveSubNav = () => {
    console.log(progressiveSubNav)
    return (
        <nav>
            <ul className="progressiveSubNav spacious">
                <li>
                    <Link to="/" className="progressiveSubNav__link">
                        <img src={amazon_fashion} className="progressiveSubNav__image nav__categ__image" alt="amazon fashion" />
                    </Link>
                </li>
                {
                    progressiveSubNav.map((item, index) => (
                        <li>
                            <Link to={item.href} className="progressiveSubNav__link">
                                <span>
                                    {item.text}
                                </span>
                                <img src={amazon_dropdown_mini_arrow} className="progressiveSubNav__image nav__image" alt="amazon fashion" />
                            </Link>
                        </li>
                    ))
                }
                <li>
                    <Link to="/" className="progressiveSubNav__link">
                        <img src={free_returns} className="progressiveSubNav__image nav__image" alt="free returns" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default ProgressiveSubNav
