import React from 'react'

import { Button } from 'reactstrap'

import './index.css'

const LightBoxModal = ({ galleryList, imageDetails, showPrev, showNext, showPrevBtn, showNextBtn,
                 toggleModal, hideLightBox, lightBoxPanel}) => {

    const {img, rating, heading, customer, date, article} = imageDetails || {}
    const ratingStyle = (`a__star__${rating}`)    // "a__star__1"

    const lightBoxClose = () => {
        toggleModal("hide", "lightBoxReview")   // hide modal
        hideLightBox()  // hide lightbox
    }

    return (
        (galleryList && lightBoxPanel) ? (
            <section className="popover__panel lightbox__panel d-block">
                <div className="popover__panel__container lightbox">
                    <header className="popover__panel__heading">
                        <h5 className="popover__panel__title"></h5>
                        <Button className="popover__panel__close" outline color="secondary" onClick={lightBoxClose}>
                            <i class="popover__close"></i>
                        </Button>
                    </header>
                    <section className="popover__panel__main">
                        <section className="popover__panel__review">
                            <section className="popover__panel__content">
                                <section className="d-flex h-100">
                                    <ul className="lightbox__galleryCustomer d-flex flex-wrap ml-0">
                                        {
                                            galleryList.map((item, index) => (
                                                <li style={{backgroundImage : "url(" + item.img + ")"}}>

                                                </li>
                                            ))
                                        }
                                    </ul>
                                </section>
                            </section>
                        </section>
                    </section>
                </div>
            </section>
        )
        :

        // When image is clicked, show this. 
        // lightBoxPanel is required for removing image lightbox when modal is clicked
        (img && lightBoxPanel) ? (
            <section className="popover__panel lightbox__panel d-block">
                <div className="popover__panel__container lightbox">
                    <header className="popover__panel__heading">
                        <h5 className="popover__panel__title"></h5>
                        <Button className="popover__panel__close" outline color="secondary" onClick={lightBoxClose}>
                            <i class="popover__close"></i>
                        </Button>
                    </header>
                    <section className="popover__panel__main">
                        <section className="popover__panel__review">
                            <section className="popover__panel__viewGallery">
                                <i className="a__icon__galleryIcon"></i>
                                <span>View Image Gallery</span>
                            </section>
                            <section className="popover__panel__content">
                                <section className="d-flex h-100">
                                    <section className="popover__imageContainer">
                                        <img src={imageDetails.img} alt="" />
                                        <section className="popover__imageSlideBtns">
                                            {
                                                showPrevBtn && (
                                                    <div className="popover__imageBackBtn" onClick={showPrev}> 
                                                        <button>
                                                        </button>    
                                                    </div>
                                                )
                                            }
                                            {
                                                showNextBtn && (
                                                    <div className="popover__imageForwardBtn"  onClick={showNext}>
                                                        <button>
                                                        </button>    
                                                    </div>
                                                )
                                            }
                                        </section>
                                    </section>
                                    <section className="popover__imageInfo">
                                        <header className="a__spacing__mini">
                                            <i className={`a__icon a__icon__star ${ratingStyle}`}></i>&nbsp;
                                            <span className="a__size__base__ii font-weight-bold">
                                                {heading}
                                            </span>
                                            <br/>
                                            <span className="a__size__small a__color__secondary">
                                                By
                                            </span>&nbsp;
                                            <span className="a__size__small a__color__secondary">
                                                {customer}
                                            </span>&nbsp;
                                            <span className="a__size__small a__color__secondary">
                                                on {date}
                                            </span>
                                            <br/>
                                        </header>
                                        <p className="a__size__base">{article}</p>
                                        <section className="a__spacing__top__base">
                                            <span className="a__size__medium a__color__secondary">
                                                Images in this review
                                            </span>
                                            <section className="a__spacing__top__mini">
                                                <div className="popover__imageHighlight"
                                                    style={{backgroundImage : "url(" + img + ")"}}
                                                ></div>
                                            </section>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </div>
            </section>
        ) 
        : 
        <section></section>
    )
}

export default LightBoxModal
