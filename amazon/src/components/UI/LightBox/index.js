import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import LightBoxModal from './LightBoxModal'

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

const LightBox = ({toggleModal}) => {

    console.log(toggleModal)

    const image1 = L61DDN5WdKQ
    const image2 = L71RCZ2H6p
    const image3 = L61Dc5ySuuW
    const image4 = L1WBw61t2Q
    const image5 = L81QYTeqjBLS
    const image6 = L814ze8S1DLS
    const image7 = L511COXBQmSL
    const image8 = L71cYVGoNhvLS
    const image9 = L41t0t3d1YNLS
    const image10 = L61E3oEgHvdLS
    const image11 = LC1FENb8OOtSS
    const image12 = L71iT22dbyILS
    const image13 = L81Rr6WLY7PLpS
    const image14 = L41GsiEOPk5LS
    const image15 = LB1WOO0G7UTSS
    const image16 = L21LlksaHxoLS
    const image17 = L61wMhuIgUMLS
    const image18 = L81X648FretLS
    const image19 = L41J6VSYJRWLS
    const image20 = L61J6VSYJRWLS
    const image21 = L61snqzZr6iLS
    const image22 = L91Mhs7vymDLS
    const image23 = L61AG8heN61LS
    const image24 = L81iiNzTmsCLS
    const image25 = L31YQ20rRh
    const image26 = C1ooPYCncSSS
    const image27 = L91l65qN2PeLS
    const image28 = L31fplJqEgoLS
    const image29 = L81zob2dN8LSL
    const image30 = L7181BvRP6YLS
    const image31 = L613FQhDRGLLSL

    const images = [
                        image1, image2, image3, image4, image5, image6, image7, image8,
                        image9, image10, image11, image12, image13, image14, image15, image16,
                        image17, image18, image19, image20, image21, image22, image23, image24,
                        image25, image26, image27, image28, image29, image30, image31
                    ]

    // MAIN LIGHTBOX
    // Holds Images Cards and Lightbox
    // this is where all of our logic will live
    
    const [imageToShow, setImageToShow] = useState("")
    const [modalPanel, setModalPanel] = useState("hide")    // show / hide lightbox modal
    const [lightboxDisplay, setLightBoxDisplay] = useState("hide")
    
    // Looping through our images array to create img elements
    const imageCards = images.slice(0, 4).map((image) => (
        <div className="master__commentsThumbnail">
            <img className="image-card" onClick={() => showImage(image)} src={image} />
        </div>
    ))

    // Function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (image) => {
        toggleModal("show stretched", "lightboxReview")
        setModalPanel("show stretched")
        setImageToShow(image)
        setLightBoxDisplay("show")
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
            
            <section id="amzn__lightbox" onClick={hideLightBox}>
                <button onClick={showPrev}>⭠</button>
                <img src={imageToShow} />
                <button onClick={showNext}>⭢</button>
            </section>

            {/* <LightBoxModal
                modalPanel={"show"}
                title={""}
                legend={""}
                body={""}
                legendAux={""}
                bodyAux={""}
                cta={""}
                toggleModalLang={""}
                classname={""}
            /> */}
        </>
    )
}

export default LightBox

// Credit to: "https://medium.com/swlh/creating-a-simple-lightbox-from-scratch-in-react-caea84f90960"