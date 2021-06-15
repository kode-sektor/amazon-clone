import React from 'react'

import './index.css'

import { DropdownMenuMini } from '../../../UI/DropdownMenu'

const CouponCarousel = ({heading, sort, optionList, slider}) => {
    return (
        <section>
            <header className="coupon__shovelerHeading d-flex mx-0 justify-content-between">
                <h3 className="coupon__shovelerHeadingTxt text-bold"> {heading}</h3>
                <section className="coupon__shovelerSort">
                    <span aria-label="Sort by Category: " className="coupon__shovelerSort"> 
                        &nbsp;{sort}:&nbsp;
                    </span>
                    <span className="position-relative">
                        <DropdownMenuMini
                            optionList={optionList}
                            squished={true}
                        />
                    </span>
                </section>
            </header>
            {slider}
        </section>
    )
}

export default CouponCarousel
