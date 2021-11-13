import React from 'react'

import { MusicBtn } from '../../../UI/Button'

import './index.css'

const CarouselMusic = ({ heading, slider, type }) => {

    return (
        <section className={`amazonMusic__carousel ${(type === "music-nonagon") && "musicNonagon__carousel"}`}>
            <header className="amazonMusic__carouselHeader">
                <h2 className="amazonMusic__carouselHeading">{heading}</h2>
                <MusicBtn 
                    title={heading}
                />
            </header>
            {slider}
        </section>
    )
}

export default CarouselMusic
