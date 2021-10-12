import React from 'react'
import { Link } from 'react-router-dom'

import { Line } from '../../Line'

// If heading is passed in argument, top slider will render
// If there is an heading_two argument, it means bottom slider should render

const CarouselDetailed = ({ heading, slider, heading_two, heading_two_link, carouselID="", slider_two, squished="" }) => {

    // console.log(slider)
    
    return (
        <div className="carousel__detailed">
            <div className={`carousel__detailed__layout__inner ${carouselID} ${slider.giftCardAux ? "giftCardAux" : ""} ${squished === true && "squished"}`}>
                {
                    (
                        Array.isArray(heading) ? 
                            heading.map((item, indx) => {
                                return (
                                    <section className={`carousel__detailed__frame ${carouselID === "amzn__gift__cards" ? "a__spacing__base" : ""}`}>
                                        <header className="carousel__detailed__slider__header row">
                                            <div className={`col-8 ${carouselID === "amzn__gift__cards" ? "px-0" : ""}`}>
                                                <h2 className="carousel__detailed__heading a__size__large">{heading[indx]}</h2>
                                            </div>
                                            <div className="carousel__count text-right flex-fill">
                                            { 
                                                slider.giftCardAux  ? 
                                                    (
                                                        ""
                                                    ) :
                                                    carouselID === "amzn__gift__cards" ?
                                                    (
                                                        <Link className="a__color__link a__spacing__top__small a__size__base a__text__normal a__link__emphasis" to="/">See more</Link>
                                                    ) : 
                                                    (
                                                        <><span>Page 1 </span><span>of</span><span> 6</span></>
                                                    )
                                            }
                                            </div>
                                            { carouselID === "amzn__gift__cards" && heading && (
                                                <Line/>
                                            )}
                                        </header>
                                        {slider[indx]}
                                    </section>
                                )
                            }) : 
                            <section className={`carousel__detailed__frame ${carouselID === "amzn__gift__cards" ? "a__spacing__base" : ""}`}>
                                <header className="carousel__detailed__slider__header row">
                                    {
                                        heading && (
                                            <div className={`col-8 ${carouselID === "amzn__gift__cards" ? "px-0" : ""}`}>
                                                <h2 className="carousel__detailed__heading a__size__large">{heading}</h2>
                                            </div>
                                        )
                                    }
                                    <div className="carousel__count text-right flex-fill">
                                    { 
                                        slider.giftCardAux  ? 
                                            (
                                                ""
                                            ) :
                                            carouselID === "amzn__gift__cards" ?
                                            (
                                                <Link className="a__color__link a__spacing__top__small a__size__base a__text__normal a__link__emphasis" to="/">See more</Link>
                                            ) : 
                                            (
                                                <><span>Page 1 </span><span>of</span><span> 6</span></>
                                            )
                                    }
                                    </div>
                                    { carouselID === "amzn__gift__cards" && heading && (
                                        <Line/>
                                    )}
                                </header>
                                {slider}
                            </section>
                    ) 
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
                                            <Link to="/" className="carousel__detailed__link">{heading_two_link}</Link>
                                        </h2>
                                    </div>
                                    <div className="carousel__count text-right flex-fill">
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
