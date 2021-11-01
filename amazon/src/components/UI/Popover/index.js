import React, {useState} from 'react'

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

import './index.css'

// http://localhost:3000/order_history
// E:\KAY\Documents\html5\Experiment\NODE\amazon-clone\amazon\src\components\UI\TabOrders\index.js

const Popover = ({trigger, dropdown, style, close, click=false}) => {

    // style = "larger" if you want wider width

    const [popoverDrop, setPopoverDrop] = useState(false)

    const popOver = () => setPopoverDrop(popoverDrop => !popoverDrop)   // For click

    // For hover
    const popEnter = () => setPopoverDrop(true)
    const popLeave = () => setPopoverDrop(false)

    return (
        click ?    // Work on toggle
        (
            <UncontrolledDropdown>
                <DropdownToggle tag="span" className="a__size__base a__color__secondary">
                    {trigger}
                </DropdownToggle>
                <DropdownMenu className={`a__popover__dropdown a__popover__${style}`}>
                    <div class="a__arrow__border">
                        <div class="a__arrow"></div>
                    </div>
                    <div className="a__popover__inner">
                        {close && ( // For close button
                            <button onClick={popOver} type="button" class="a__button__close" aria-label="Close">
                                <i className="a__icon a__icon__close"></i>
                            </button>
                        )}
                        <section style={{marginTop: `${close ? '-21px' : ''}`}}>
                            {dropdown}
                        </section>
                    </div>
                </DropdownMenu>
            </UncontrolledDropdown>
        )

        :   // Work on mouseover and mouseleave

        (
            <UncontrolledDropdown onMouseOver={popEnter} onMouseLeave={popLeave} isOpen={popoverDrop} toggle={popOver}>
                <DropdownToggle tag="span" className="a__size__base a__color__secondary">
                    {trigger}
                </DropdownToggle>
                <DropdownMenu className={`a__popover__dropdown a__popover__${style}`}>
                    <div class="a__arrow__border">
                        <div class="a__arrow"></div>
                    </div>
                    <div className="a__popover__inner">
                        {close && ( // For close button
                            <button onClick={popOver} type="button" class="a__button__close" aria-label="Close">
                                <i className="a__icon a__icon__close"></i>
                            </button>
                        )}
                        <section style={{marginTop: `${close ? '-21px' : ''}`}}>
                            {dropdown}
                        </section>
                    </div>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    )
}

export default Popover
