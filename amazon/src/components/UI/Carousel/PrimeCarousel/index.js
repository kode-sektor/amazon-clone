import React from 'react'
import { Link } from 'react-router-dom'

const PrimeCarousel = ({heading, link, slider, squished}) => {
    return (
        <section className="prime__carousel">
            {slider}
        </section>
    )
}

export default PrimeCarousel
