import React from 'react'

import { NavItem, NavLink } from 'reactstrap'

const Menu = ({ menus }) => {

    return (
        menus.map(link => {
            return (
                <NavItem>
                <NavLink href={link.href}>{link.label}</NavLink>
                </NavItem>
            )
        })
    )
}

export default Menu

