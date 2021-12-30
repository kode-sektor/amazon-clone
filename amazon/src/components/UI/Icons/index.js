import React from 'react'

import back_arrow from '../../../images/amazon-back-arrow.png'
import right_arrow_carrot from '../../../images/amazon-right-arrow-carrot.jpg'

import { RiArrowDropRightLine } from "react-icons/ri"

import './index.css'

const BackArrow = () => {
    return (
        <>
            <img src={back_arrow} alt="back arrow" className="amzn__backArrow"/>
        </>
    )
}

const RightArrowCarrot = () => {
    return (
        <>
            <img src={right_arrow_carrot} alt="right arrow cat" className="amzn__rightArrowCarrot"/>
        </>
    )
}

const RightArrow = () => {
    return (
        <RiArrowDropRightLine
            className="rightArrowDropRight"
        />
    )
}

const Pipe = () => {
    return (
        <span className="pipe">|</span>
    )
}

const FilterSeparator = () => (
    <div class="filter__separator"></div>
)

export { BackArrow, RightArrowCarrot, RightArrow, Pipe, FilterSeparator }
