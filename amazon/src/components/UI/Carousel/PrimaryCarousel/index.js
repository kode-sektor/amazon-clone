import React from 'react'

const PrimaryCarousel = ({heading, link, slider, squished}) => {
    return (
        <div className={squished ? "primary__slider squished" : "primary__slider"}>
            <div className="primary__layout__inner">
                <header className="primary__slider__header">
                    <h2 className="primary__slider__heading">{heading}</h2>
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
