import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import './index.css'

// On 'http://localhost:3000/nav_cart' page
// E:\KAY\Documents\html5\Experiment\NODE\amazon-clone\amazon\src\pages\NavCart\index.js
const DropdownMenuPrimary = ({optionList, squished=false}) => {
    return (
        <div className={`popover__panel__panel ${squished ? 'mb-0' : 'mt-0' }`}>
            <div className="a__button a__button__dropdown">
                <div className="a__button__inner a__shadow">
                    <select className={`popover__panel__list a__button__text ${squished ? 'pr-0' : ''}`}>
                        {optionList}
                    </select>
                </div>
            </div>
        </div>
    )
}

const DropdownMenuMini = ({optionList, squished=false}) => {
    return (
        <div className={`popover__panel__mini ${squished ? 'mb-0' : 'mt-0' }`}>
            <div className="a__button a__button__dropdown">
                <div className="a__button__inner a__shadow">
                    <select className={`popover__panel__list a__button__text ${squished ? 'pr-0' : ''}`}>
                        {optionList}
                    </select>
                </div>
            </div>
        </div>
    )
}

// On 'http://localhost:3000/nav_cart' page
// E:\KAY\Documents\html5\Experiment\NODE\amazon-clone\amazon\src\pages\NavCart\index.js
const DropdownMenuCart = ({content, close, direction="left"}) => {
    return (
        <DropdownMenu className="productDropdown">
            <section className="a__popover__wrapper">
                <section className="a__pop__inner">
                    <button onClick={close} type="button" className="a__button__close" aria-label="Close">
                        <i className="a__icon a__icon__close"></i>
                    </button>
                    {content}
                    <div className={`a__arrow__border ${direction}`}>
                        <div className="a__arrow"></div>
                    </div>
                </section>
            </section>
        </DropdownMenu>
    )
}

const DropdownMyx = ({ text, dropdown }) => {
    
    const [dropdownOpenMyx, setDropdownOpenMyx] = useState(false)
    const toggleMyx = () => setDropdownOpenMyx(prevState => !prevState)

    return (
        <span className="d-inline-block">
            <Dropdown isOpen={dropdownOpenMyx} toggle={toggleMyx} className="contentTaskBarElement__myx myx__button myx__button__dropdown myx__button__inner">
                <DropdownToggle className="myx__button__text">
                    {text}
                </DropdownToggle >
                <i className="myx__icon myx__icon__dropdown"></i>
                <DropdownMenu>
                    {
                        dropdown.map((item, index) => {
                            return (
                                <DropdownItem header key={index} className={index===0 && 'active'}>{item.dropdown}</DropdownItem>
                            )
                        })
                    }
                </DropdownMenu>
            </Dropdown>
        </span>
    )
}

export { DropdownMenuPrimary, DropdownMenuCart, DropdownMenuMini, DropdownMyx }
