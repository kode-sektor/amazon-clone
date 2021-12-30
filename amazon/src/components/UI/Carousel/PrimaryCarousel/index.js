import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryCarousel = ({ heading, link, slider, squished }) => {
    return (
        <div className={squished ? "primary__slider squished" : "primary__slider"}>
            <div className="primary__layout__inner">
                <header className="primary__slider__header">
                    <h2 className="primary__slider__heading">{heading}</h2>
                    {
                        link ? <Link to="/" className="explore__more">{link}</Link> : ""
                    }
                </header>
                {slider}
            </div>
        </div>
    )
}

export default PrimaryCarousel
