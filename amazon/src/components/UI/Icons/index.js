import React from 'react'
import { Link } from 'react-router-dom'

import back_arrow from '../../../images/amazon-back-arrow.png'
import right_arrow_carrot from '../../../images/amazon-right-arrow-carrot.jpg'

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

export { BackArrow, RightArrowCarrot }
