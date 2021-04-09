import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { subMenu } from '../../../utilities/data'
import { Row, Col } from 'reactstrap'

import './index.css'


const SubNav = () => {

    const [queryID, setQueryID] = useState("")

    useEffect(() => {
        setQueryID(window.location.pathname)
    })

    console.log(queryID)

    return (
        <section>
            {
                (queryID === "/") ?     // Do not display subnav if homepage
                ""
                :
                <ul className="subNav">
                    {
                        subMenu.map((obj, index) => {
                            // Hide amazon.ca except on 'your_account' page
                            if (index === 0) {
                                return (
                                    <li className={(queryID === "/your_account") ? "" : "d-none"}>
                                        <NavLink to={obj.href}>{obj.text}</NavLink>
                                    </li>
                                )
                            } else if (index === 1) {
                                return (
                                    <li>
                                        <NavLink to={obj.href} className={(queryID === "/your_account") ? "" : "active"}>{obj.text}</NavLink>
                                    </li>
                                )
                            } else if (index === 2) {
                                return (
                                    <li className={(queryID === "/your_account") ? "d-none" : ""}>
                                        <NavLink to={obj.href}>{obj.text}</NavLink>
                                    </li>
                                )
                            } else {
                                return (
                                    <li>
                                        <NavLink to={obj.href}>{obj.text}</NavLink>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            }
        </section>
    )
}

export default SubNav
