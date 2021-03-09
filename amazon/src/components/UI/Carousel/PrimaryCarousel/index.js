import React from 'react'

const PrimaryCarousel = ({heading, link, slider, squished}) => {
    return (
        <div className={squished ? "secondary__slider squished" : "secondary__slider"}>
            <div className="secondary__layout__inner">
                <header className="secondary__slider__header">
                    <h2 className="secondary__slider__heading">{heading}</h2>
                    {
                        link ? <a href="/" className="explore__more">{link}</a> : ""
                    }
                </header>
                {slider}
            </div>
        </div>

    )
}

export default PrimaryCarousel
