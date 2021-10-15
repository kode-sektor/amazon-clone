import React, { useState } from 'react'

import LightBoxModal from './LightBoxModal'

import './index.css'

const LightBox = ({toggleModal, lightBoxPanel, images, showLightBoxGallery}) => {

    // MAIN LIGHTBOX
    // Holds Images Cards and Lightbox
    // this is where all of our logic will live
    
    const [imageToShow, setImageToShow] = useState("")
    const [showPrevBtn, setShowPrevBtn] = useState(true)
    const [showNextBtn, setShowNextBtn] = useState(true)

    // Looping through our images array to create img elements
    const imageCards = images.slice(0, 4).map((image) => (
        <div className="master__commentsThumbnail">
            <img className="image-card" onClick={(e) => showImage(e, image)} src={image.img} />
        </div>
    ))

    // Function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (e, gallery) => {
        showLightBoxGallery(e, "carousel")
        setImageToShow(gallery)   // show image

        let currentIndex = images.indexOf(gallery)
        currentIndex === 0 && (setShowPrevBtn(false))   // On click of first image, hide previous button

        // On click of last image, hide next button. Since its only 4 images out of a lot that is on display, 
        // this may seem unnecessary but consider if the project starts new and only 3 images are submitted
        // to the db, and the 3rd image is clicked
        currentIndex === images.length - 1 && (setShowNextBtn(false))   
    }

    // Hide lightbox
    const hideLightBox = () => {
        setImageToShow("")   // hide image
    }

    // Show next image in lightbox
    const showNext = (e) => {
        e.stopPropagation()
        setShowPrevBtn(true)    // On click of 'Next' button, 'Prev' button should show
        
        let currentIndex = images.findIndex(item => item.img === imageToShow.img)

        if (currentIndex >= images.length - 2) {
            setShowNextBtn(false)
        } 
        let nextImage = images[currentIndex + 1]
        // console.log(nextImage)
        setImageToShow(nextImage)
    }
  
    // Show previous image in lightbox
    const showPrev = (e) => {
        e.stopPropagation()
        setShowNextBtn(true)

        let currentIndex = images.findIndex(item => item.img === imageToShow.img)

        if (currentIndex <= 1) {
            setShowPrevBtn(false)
        } 
        let nextImage = images[currentIndex - 1]
        setImageToShow(nextImage)
    }

    return (
        <>
            <section className="a__spacing__small a__spacing__top__small">
                {imageCards}
            </section>
            <LightBoxModal
                imageDetails={imageToShow}
                showPrev={showPrev}
                showNext={showNext}
                toggleModal={toggleModal}
                hideLightBox={hideLightBox}
                lightBoxPanel={lightBoxPanel}
                showPrevBtn={showPrevBtn}
                showNextBtn={showNextBtn}
            />
        </>
    )
}

export default LightBox

// Credit to: "https://medium.com/swlh/creating-a-simple-lightbox-from-scratch-in-react-caea84f90960"