import React, { useState } from 'react'

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
                        <i className="icp__radio icp__radio__active"></i>English - EN
                    </span>                          
                </button>                                  
                <div className="navigationbar__divider"></div>                      
                <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                    <span className="navigationbar__origin__menu__text">
                        <i className="icp__radio"></i>Français - FR
                    </span>                         
                </button>                                  
                <div className="navigationbar__divider"></div>                      
                <span className="navigationbar__origin__menu__item"> 
                    <span className="navigationbar__origin__menu__text">
                        <i className="icp__origin" style={{backgroundPosition : "0 -269px"}}></i>
                        You are shopping on Amazon.ca.
                    </span>                          
                </span>                                              
                <a href="/gp/navigation-country/select-country/ref=icp_" className="navigationbar__origin__menu__link navigationbar__origin__menu__item">                         
                    <span className="navigationbar__origin__menu__text">
                        <div className="icp__origin__change__link">Change country/region.</div>
                    </span>                          
                </a>                    
            </div>
        </DropdownMenu>
    )
}

export default DropdownMenuLang
