import React from 'react'

import { Link } from 'react-router-dom'

import './index.css'

const SecondaryNav = ({links}) => {
    return (
        <ul className="secondary__navList">
        {
            links.map((item, index) => {
                const {href, text, external} = item
                return (
                    <li>
                        <Link to={href} rel={external ? 'external' : ''}>
                            {text}
                        </Link>&nbsp;
                    </li>
                )
            })
        }
        </ul>
    )
}

export default SecondaryNav
