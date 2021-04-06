import React, { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom'

import { Row, Col } from 'reactstrap'

import './index.css'


const SubNav = () => {

    const [queryID, setQueryID] = useState("")

    useEffect(() => {
        setQueryID(window.location.pathname)
    })

    return (
        <section>
            <ul className="subNav">
                <li className={queryID === "/customer_preferences/lang" ? "active" : ""}>
                    <NavLink to="/todays_deals">Today's Deals</NavLink>
                </li>
                <li>
                    <NavLink to="/watched_deals">Watched Deals</NavLink>
                </li>
                <li>
                    <NavLink to="/outlet_deals">Outlet Deals</NavLink>
                </li>
                <li>
                    <NavLink to="/warehouse_deals">Warehouse Deals</NavLink>
                </li>
                <li>
                    <NavLink to="/coupons">Coupons</NavLink>
                </li>
                <li>
                    <NavLink to="/ebook_deals">eBook Deals</NavLink>
                </li>
                <li>
                    <NavLink to="/subscribe_and_save">Subscribe &amp; Save</NavLink>
                </li>
            </ul>
        </section>
    )
}

export default SubNav
