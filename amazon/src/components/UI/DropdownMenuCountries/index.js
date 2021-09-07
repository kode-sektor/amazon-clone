import React from 'react'
import { Link } from 'react-router-dom'

import { DropdownMenu } from "reactstrap"

import './index.css'

const DropdownMenuLang = ({ type, optionList }) => {
    return (
        // Larger version (localhost:3000/jobs page)
        type === "large" ? 
        (
            <DropdownMenu>
                <ul className="ml-0">{optionList}</ul>
            </DropdownMenu>
        )
        : 
        (
            <DropdownMenu className="navigationbar__origin__menu">
                <div className="nav__arrow null">
                    <div className="nav__arrow__inner"></div>
                </div>
                <ul className="navigationbar__origin__menu__itemList ml-0">
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">                          
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red checked"></i>Canada
                            </span>                          
                        </button>      
                    </li>
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>United States
                            </span>                         
                        </button>  
                    </li>
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>United Kingdom
                            </span>                         
                        </button>     
                    </li>
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>Germany
                            </span>                         
                        </button>
                    </li>
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>France
                            </span>                         
                        </button>
                    </li>
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>Japan
                            </span>                         
                        </button>
                    </li>
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>China
                            </span>                         
                        </button>
                    </li>
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>Italy
                            </span>                         
                        </button>
                    </li>
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>Spain
                            </span>                         
                        </button>
                    </li>
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>India
                            </span>                         
                        </button>
                    </li>                                  
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>Brazil
                            </span>                         
                        </button>
                    </li>                                  
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>Mexico
                            </span>                         
                        </button>
                    </li>                                  
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>Australia
                            </span>                         
                        </button>
                    </li>                                  
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>United Arab Emirates
                            </span>                         
                        </button>
                    </li>                                  
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>Singapore
                            </span>                         
                        </button>
                    </li>                                  
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>Netherlands
                            </span>                         
                        </button>
                    </li>                                  
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>Saudi Arabia
                            </span>                         
                        </button>
                    </li>                                  
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>Sweden
                            </span>                         
                        </button>
                    </li>                                  
                    <li>
                        <button className="navigationbar__origin__menu__link navigationbar__origin__menu__item">
                            <span className="navigationbar__origin__menu__text">
                                <i className="amzn__icon__radio__red"></i>Poland
                            </span>                         
                        </button>
                    </li>                                  
                </ul>
            </DropdownMenu>
        )
    )
}

export default DropdownMenuLang
