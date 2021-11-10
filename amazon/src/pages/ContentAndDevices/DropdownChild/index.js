import React from 'react'

import { DropdownItem } from 'reactstrap'

const DropdownChild = ({ img, filter }) => {
    return (
        <DropdownItem>
            <div className="d-flex align-items-center h-100">
                <label htmlFor="">
                    {img}
                    {filter}
                </label>
            </div>
        </DropdownItem>
    )
}

export default DropdownChild
