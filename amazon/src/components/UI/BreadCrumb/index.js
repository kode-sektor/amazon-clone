import React from 'react'

import { Link } from 'react-router-dom'

import './index.css'

const BreadCrumb = () => {
    return (
        <nav className="page__breadcrumb a__section a__spacing__medium a__spacing__top__small">
            <ul className="navBreadcrumb">
                <li><Link to="#">Your Account</Link></li>
                <li><Link to="#" className="active">Your Orders</Link></li>
            </ul>
        </nav>
    )
}

const PageNavBreadCrumb = ({items}) => (
    <nav>
        <div className="breadcrumb__pageNav">
            <ul className="a__unordered__list a__horizontal a__size__small">
                {
                    items.map((item, index) => {
                        let caret = ""
                        caret = (index !== (items.length - 1)) && (
                            <li className="a__breadcrumb__divider">
                                <span className="a__list__item a__color__tertiary">
                                    ›
                                </span>
                            </li>
                        )
                        return (
                            <>
                                <li>
                                    <span className="a__list__item">
                                        <Link className="a__color__tertiary" to={item.href}>
                                            {item.text}
                                        </Link>
                                    </span>
                                </li>
                                {caret}
                            </>
                        )
                    })
                }
            </ul>
        </div>
    </nav>
)

// export default { BreadCrumb, PageNavBreadCrumb }   // Wrong
export { BreadCrumb, PageNavBreadCrumb }    // Correct

