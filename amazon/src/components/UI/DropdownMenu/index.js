import React from 'react'

import './index.css'

const DropdownMenuPrimary = ({optionList}) => {
    return (
        <div className="popover__panel__panel">
            <div className="a__button a__button__dropdown">
                <div className="a__button__inner a__shadow">
                    <select className="popover__panel__list a__button__text">
                        {optionList}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default DropdownMenuPrimary
