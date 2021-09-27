import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import L61DDN5WdKQ from '../../../images/L61DDN5WdKQ.jpg'
import L71RCZ2H6p from '../../../images/L71RCZ2H6p.jpg'
import L61Dc5ySuuW from '../../../images/L61Dc5ySuuW.jpg'
import L1WBw61t2Q from '../../../images/L1WBw61t2Q.jpg'
import L81QYTeqjBLS from '../../../images/L81QYTeqjBLS.jpg'
import L814ze8S1DLS from '../../../images/L814ze8S1DLS.jpg'
import L511COXBQmSL from '../../../images/L511COXBQmSL.jpg'
import L71cYVGoNhvLS from '../../../images/L71cYVGoNhvLS.jpg'
import L41t0t3d1YNLS from '../../../images/L41t0t3d1YNLS.jpg'
import L61E3oEgHvdLS from '../../../images/L61E3oEgHvdLS.jpg'
import LC1FENb8OOtSS from '../../../images/LC1FENb8OOtSS.jpg'
import L71iT22dbyILS from '../../../images/L71iT22dbyILS.jpg'
import L81Rr6WLY7PLpS from '../../../images/L81Rr6WLY7PLpS.jpg'
import L41GsiEOPk5LS from '../../../images/L41GsiEOPk5LS.jpg'
import LB1WOO0G7UTSS from '../../../images/LB1WOO0G7UTSS.jpg'
import L21LlksaHxoLS from '../../../images/L21LlksaHxoLS.jpg'
import L61wMhuIgUMLS from '../../../images/L61wMhuIgUMLS.jpg'
import L81X648FretLS from '../../../images/L81X648FretLS.jpg'
import L41J6VSYJRWLS from '../../../images/L41J6VSYJRWLS.jpg'
import L61J6VSYJRWLS from '../../../images/L61J6VSYJRWLS.jpg'
import L61snqzZr6iLS from '../../../images/L61snqzZr6iLS.jpg'
import L61AG8heN61LS from '../../../images/L61AG8heN61LS.jpg'
import L91Mhs7vymDLS from '../../../images/L91Mhs7vymDLS.jpg'
import L81iiNzTmsCLS from '../../../images/L81iiNzTmsCLS.jpg'
import L31YQ20rRh from '../../../images/L31YQ20rRh.jpg'
import C1ooPYCncSSS from '../../../images/C1ooPYCncSSS.jpg'
import L91l65qN2PeLS from '../../../images/L91l65qN2PeLS.jpg'
import L31fplJqEgoLS from '../../../images/L31fplJqEgoLS.jpg'
import L81zob2dN8LSL from '../../../images/L81zob2dN8LSL.jpg' 
import L7181BvRP6YLS from '../../../images/L7181BvRP6YLS.jpg' 
import L613FQhDRGLLSL from '../../../images/L613FQhDRGLLSL.jpg' 

import './index.css'

const LightBox = ({}) => {

    const image1 = L61DDN5WdKQ
    const image2 = L71RCZ2H6p
    const image3 = L61Dc5ySuuW
    const image4 = L1WBw61t2Q

    const images = [image1, image2, image3, image4]

    // MAIN LIGHTBOX
    // Holds Images Cards and Lightbox
    // this is where all of our logic will live
    
    const [imageToShow, setImageToShow] = useState("")
    const [lightboxDisplay, setLightBoxDisplay] = useState(false)
    
    // Looping through our images array to create img elements
    const imageCards = images.map((image) => (
        <div className="master__commentsThumbnail">
            <img className="image-card" onClick={() => showImage(image)} src={image} />
        </div>
    ))

    // Function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (image) => {
        setImageToShow(image)
        setLightBoxDisplay(true)
    }

    // Hide lightbox
    const hideLightBox = () => {
        setLightBoxDisplay(false)
    }

    // Show next image in lightbox
    const showNext = (e) => {
        e.stopPropagation()

        let currentIndex = images.indexOf(imageToShow)
        if (currentIndex >= images.length - 1) {
            setLightBoxDisplay(false)
        } else {
            let nextImage = images[currentIndex + 1]
            setImageToShow(nextImage)
        }
    }
  
    // Show previous image in lightbox
    const showPrev = (e) => {
        e.stopPropagation()
        let currentIndex = images.indexOf(imageToShow)

        if (currentIndex <= 0) {
            setLightBoxDisplay(false)
        } else {
            let nextImage = images[currentIndex - 1]
            setImageToShow(nextImage)
        }
    }

    return (
        <>
            <section className="a__spacing__small a__spacing__top__small">
                {imageCards}
            </section>
            
            {/* <section id="lightbox" onClick={hideLightBox}>
                <button onClick={showPrev}>⭠</button>
                <img src={imageToShow} />
                <button onClick={showNext}>⭢</button>
            </section> */}
        </>
    )
}

export default LightBox

// Credit to: "https://medium.com/swlh/creating-a-simple-lightbox-from-scratch-in-react-caea84f90960"