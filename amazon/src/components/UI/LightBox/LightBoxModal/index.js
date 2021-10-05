import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'

import './index.css'

// const LightBoxModal = ({ lightBoxModal, toggleModal }) => {
const LightBoxModal = ({ imageToShow, showPrev, showNext, showPrevBtn, showNextBtn,
                 toggleModal, hideLightBox, lightBoxPanel}) => {

    const lightBoxClose = () => {
        toggleModal("hide", "lightBoxReview")   // hide modal
        hideLightBox()  // hide lightbox
    }

    return (
        // When image is clicked, show this. 
        // lightBoxPanel is required for removing image lightbox when modal is clicked
        (imageToShow && lightBoxPanel) ? (
            <section className={`popover__panel lightbox__panel d-block `}>
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
                                        <img src={imageToShow} alt="" />
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
                                            <i className="a__icon a__icon__star a__star__1"></i>&nbsp;
                                            <span className="a__size__base__ii font-weight-bold">
                                                terrible, horrible and zero star
                                            </span>
                                            <br/>
                                            <span className="a__size__small a__color__secondary">
                                                By
                                            </span>&nbsp;
                                            <span className="a__size__small a__color__secondary">
                                                Crazy Superman
                                            </span>&nbsp;
                                            <span className="a__size__small a__color__secondary">
                                                on Dec 27, 2019
                                            </span>
                                            <br/>
                                        </header>
                                        <p className="a__size__base">
                                            My original credit card company was changing my card with new terms and condition. So I thought maybe this Amazon reward master card would be a good replacement. It turned out to be a huge and massive disaster. First of all, it took a long time to arrive after the approval. 2nd, after it arrive it was very difficult to activate. When I finally activated, it's not usable in any store except on Amazon.ca; so it is not a master card but more like a membership card for Amazon only. I thought OK, maybe it's their new product, so they need some time to set up. My nightmare hasn't fully mature until the payment date. I wasn't able to make payment to my account despite many attempts in their website, at my bank, with my iPhone bank app. On their statement, the account number are blocked. Even my bank can't figure out how to pay. My calls got into some kind of loop. I can't talk to human.  This credit card is just frustration times 1000!!!!! I wasted so much of my time dealing with this crab. Now, I am not able to make payment into my account. Instead of rewards, I'm going to get charge. If you are a support from MBNA, please contact me and help me. I need to make payment today!! PLEASE!!!!!
                                        </p>
                                        <section className="a__spacing__top__base">
                                            <span className="a__size__medium a__color__secondary">
                                                Images in this review
                                            </span>
                                            <section className="a__spacing__top__mini">
                                                <div className="popover__imageHighlight"></div>
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
