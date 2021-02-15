import React from 'react'

import { NavItem, NavLink } from 'reactstrap'

const Menu = ({ menus }) => {

    return (
        menus.map((link, i) => {
            return (
                <NavItem key={i}>
                    <NavLink href={link.href}>{link.label}</NavLink>
                </NavItem>
            )
        })
    )
}

export default Menu

