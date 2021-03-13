import React from 'react'

const CarouselDetailed = ({heading, link, slider, squished}) => {
    return (
        <div className="carousel__detailed">
            <div className="carousel__detailed__layout__inner">
                <header className="carousel__detailed__slider__header row">
                    <div className="col-8">
                        <h2 className="carousel__detailed__heading">{heading}</h2>
                    </div>
                    <div className="carousel__count text-right flex-fill" style={{border: "2px solid purple"}}>
                        <span>Page 1 </span><span>of</span><span> 7</span>
                    </div>
                </header>
                {slider}
            </div>
        </div>
    )
}

export default CarouselDetailed
