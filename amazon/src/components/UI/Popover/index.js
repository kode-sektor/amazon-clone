import React, {useState} from 'react'

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

import './index.css'

const Popover = ({trigger, dropdown}) => {

    const [popoverDrop, setPopoverDrop] = useState(false)

    const popOver = () => setPopoverDrop(popoverDrop => !popoverDrop)   // For click

    // For hover
    const popEnter = () => setPopoverDrop(true)
    const popLeave = () => setPopoverDrop(false)

    return (
        <UncontrolledDropdown onMouseOver={popEnter} onMouseLeave={popLeave} isOpen={popoverDrop} toggle={popOver}>
            <DropdownToggle tag="span" className="a__size__base a__color__secondary">
                {trigger}
            </DropdownToggle>
            <DropdownMenu className="a__popover__wrapper">
                <div class="a__arrow__border">
                    <div class="a__arrow"></div>
                </div>
                <div className="a__popover__inner">
                    {dropdown}
                </div>
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default Popover
