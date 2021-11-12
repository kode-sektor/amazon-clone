import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const CarouselMusic = ({heading, slider}) => {
    return (
        <section className="amazonMusic__carousel">
            <header className="amazonMusic__carouselHeader">
                <h2 className="amazonMusic__carouselHeading">{heading}</h2>
            </header>
            {slider}
        </section>
    )
}

export default CarouselMusic
