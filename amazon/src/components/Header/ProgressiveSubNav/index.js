import { React, useState } from 'react'
import { Link } from 'react-router-dom'

import { progressiveSubNav } from '../../../utilities/data'

import { SalesAndDeals, Women, Men, Girls, Boys, Brands, Luggage } from './ProgressiveSubNavFlyout'

import amazon_fashion from '../../../images/amazon-fashion.png'
import free_returns from '../../../images/free-returns.png'
import amazon_dropdown_mini_arrow from '../../../images/amazon-dropdown-mini-arrow.png'

import './index.css'

const ProgressiveSubNav = () => {

    const [navId, setNavId] = useState("")

    const menuDropdown = (e) => {
        console.log(e.target.id)
        const menuID = e.target.id  // Get id of menu

        setNavId(menuID)
    }

    const menuDropHide = (e) => {
        setNavId("")
    }

    return (
        <nav className="progressiveNav position-relative">
            <ul className="progressiveNav__subNav spacious">
                <li>
                    <Link to="/" className="progressiveNav__link">
                        <img src={amazon_fashion} className="progressiveNav__linkImage nav__categ__image" alt="amazon fashion" />
                    </Link>
                </li>
                {
                    progressiveSubNav.map((item, index) => (
                        <li key={index}>
                            <Link onMouseEnter={(e) => menuDropdown(e)} onMouseLeave={(e) => menuDropHide(e)} to={item.href} className="progressiveNav__link" id={(item.text).toLowerCase()}>
                                <span>
                                    {item.text}
                                </span>
                                <img src={amazon_dropdown_mini_arrow} className="progressiveNav__linkImage nav__image" alt="amazon fashion" />
                            </Link>
                        </li>
                    ))
                }
                <li>
                    <Link to="/" className="progressiveNav__link">
                        <img src={free_returns} className="progressiveNav__linkImage nav__image" alt="free returns" />
                    </Link>
                </li>
            </ul>
            <SalesAndDeals
                show={navId === "sales & deals" ? "show" : ""}
            />
            <Women
                show={navId === "women" ? "show" : ""}
            />
            <Men
                show={navId === "men" ? "show" : ""}
            />
            <Girls
                show={navId === "girls" ? "show" : ""}
            />
            <Boys
                show={navId === "boys" ? "show" : ""}
            />
            <Brands
                show={navId === "our brands" ? "show" : ""}
            />
            <Luggage
                show={navId === "luggage" ? "show" : ""}
            />
        </nav>
    )
}

export default ProgressiveSubNav
