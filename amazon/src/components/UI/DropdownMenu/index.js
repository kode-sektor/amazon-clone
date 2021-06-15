import React from 'react'
import { Link } from 'react-router-dom'

import { DropdownMenu } from 'reactstrap'

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
const DropdownMenuCart = ({content, close}) => {
    return (
        <DropdownMenu className="productDropdown">
            <section className="a__popover__wrapper">
                <section className="a__pop__inner">
                    <button onClick={close} type="button" className="a__button__close" aria-label="Close">
                        <i className="a__icon a__icon__close"></i>
                    </button>
                    {content}
                    <div className="a__arrow__border left">
                        <div className="a__arrow"></div>
                    </div>
                </section>
            </section>
        </DropdownMenu>
    )
}

export { DropdownMenuPrimary, DropdownMenuCart, DropdownMenuMini }
