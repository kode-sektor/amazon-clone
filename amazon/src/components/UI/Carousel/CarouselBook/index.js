import React from 'react'

import './index.css'

const CarouselBook = ({ heading, slider }) => {

    return (
        <section className="amazonBook__carousel">
            <header className="amazonBook__carouselHeader">
                <h2 className="amazonBook__carouselHeading">{heading}</h2>
            </header>
            {slider}
        </section>
    )
}

export default CarouselBook
