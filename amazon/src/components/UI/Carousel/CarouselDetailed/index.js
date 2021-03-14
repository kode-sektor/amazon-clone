import React from 'react'

// If heading is passed in argument, top slider will render
// If there is an heading_two argument, it means bottom slider should render

const CarouselDetailed = ({heading, link, slider, heading_two, heading_two_link, slider_two, squished}) => {
    return (
        <div className="carousel__detailed">
            <div className="carousel__detailed__layout__inner">
                {heading ? 
                    (
                        <section className="carousel__detailed__frame">
                            <header className="carousel__detailed__slider__header row">
                                <div className="col-8">
                                    <h2 className="carousel__detailed__heading">{heading}</h2>
                                </div>
                                <div className="carousel__count text-right flex-fill" style={{border: "2px solid purple"}}>
                                    <span>Page 1 </span><span>of</span><span> 6</span>
                                </div>
                            </header>
                            {slider}
                        </section>
                    )   : 
                    ""
                }
                {heading_two ? 
                    (
                        <>
                        <div class="carousel__divider"></div>
                        <section className="carousel__compressed">
                            <div className="carousel__detailed__container">
                                <header className="carousel__detailed__slider__header row">
                                    <div className="col-8">
                                        <h2 className="carousel__detailed__heading">
                                            {heading_two}
                                            <a className="carousel__detailed__link" href="/">{heading_two_link}</a>
                                        </h2>
                                    </div>
                                    <div className="carousel__count text-right flex-fill" style={{border: "2px solid purple"}}>
                                        <span>Page 1 </span><span>of</span><span> 2</span>
                                    </div>
                                </header>
                                {slider_two}
                            </div>
                        </section>
                        </>
                    )   : 
                    ""
                }
            </div>
        </div>
    )
}

export default CarouselDetailed
