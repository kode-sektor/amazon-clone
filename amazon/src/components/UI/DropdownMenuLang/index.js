import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { DropdownMenu } from "reactstrap"

import './index.css'

const DropdownMenuLang = () => {
    return (
        <DropdownMenu className="navigationbar__origin__menu">
            <div className="nav__arrow null">
                <div className="nav__arrow__inner"></div>
            </div>
            <div className="navigationbar__origin__menu__itemList">
                <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">                          
                    <span className="navigationbar__origin__menu__text">
                        <i className="amzn__icon__radio__red checked"></i>English - EN
                    </span>                          
                </button>                                  
                <div className="navigationbar__divider"></div>                      
                <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                    <span className="navigationbar__origin__menu__text">
                        <i className="amzn__icon__radio__red"></i>Français - FR
                    </span>                         
                </button>                                  
                <div className="navigationbar__divider"></div>                      
                <span className="navigationbar__origin__menu__item"> 
                    <span className="navigationbar__origin__menu__text">
                        <i className="icp__origin" style={{backgroundPosition : "0 -269px"}}></i>
                        You are shopping on Amazon.ca.
                    </span>                          
                </span>                                              
                <Link to="/gp/navigation-country/select-country/ref=icp_" className="navigationbar__origin__menu__link navigationbar__origin__menu__item">                         
                    <span className="navigationbar__origin__menu__text">
                        <div className="icp__origin__change__link">Change country/region.</div>
                    </span>                          
                </Link>                    
            </div>
        </DropdownMenu>
    )
}

export default DropdownMenuLang
