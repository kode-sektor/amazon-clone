import React from 'react'

import { Link } from 'react-router-dom';

import SideNav from 'react-simple-sidenav'


const SideNavBar = ({showNav, onHideNav}) => {
    return (
        <SideNav 
            showNav={showNav}
            onHideNav={onHideNav}
        >
            <li><Link to="/">Rate us</Link></li>
        </SideNav>
    )
}

export default SideNavBar
