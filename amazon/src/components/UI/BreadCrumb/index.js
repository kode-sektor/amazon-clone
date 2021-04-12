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

export default BreadCrumb
