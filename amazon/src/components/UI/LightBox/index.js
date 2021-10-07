import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import LightBoxModal from './LightBoxModal'

import L61DDN5WdKQ from '../../../images/L61DDN5WdKQ.jpg'
import L71RCZ2H6p from '../../../images/L71RCZ2H6p.jpg'
import L61Dc5ySuuW from '../../../images/L61Dc5ySuuW.jpg'
import L1WBw61t2Q from '../../../images/L1WBw61t2Q.jpg'
import L81QYTeqjBLS from '../../../images/L81QYTeqjBLS.jpg'
import L61P3LnSDBJLS from '../../../images/L61P3LnSDBJLS.jpg'
import L814ze8S1DLS from '../../../images/L814ze8S1DLS.jpg'
import L511COXBQmSL from '../../../images/L511COXBQmSL.jpg'
import L71cYVGoNhvLS from '../../../images/L71cYVGoNhvLS.jpg'
import L41t0t3d1YNLS from '../../../images/L41t0t3d1YNLS.jpg'
import L61E3oEgHvdLS from '../../../images/L61E3oEgHvdLS.jpg'
import LC1FENb8OOtSS from '../../../images/LC1FENb8OOtSS.jpg'
import L71iT22dbyILS from '../../../images/L71iT22dbyILS.jpg'
import L71vHo3Te71LS from '../../../images/L71vHo3Te71LS.jpg'
import L81Rr6WLY7PLpS from '../../../images/L81Rr6WLY7PLpS.jpg'
import L41GsiEOPk5LS from '../../../images/L41GsiEOPk5LS.jpg'
import LB1WOO0G7UTSS from '../../../images/LB1WOO0G7UTSS.jpg'
import L21LlksaHxoLS from '../../../images/L21LlksaHxoLS.jpg'
import L61wMhuIgUMLS from '../../../images/L61wMhuIgUMLS.jpg'
import L81X648FretLS from '../../../images/L81X648FretLS.jpg'
import L41J6VSYJRWLS from '../../../images/L41J6VSYJRWLS.jpg'
import L31XeEI2l3mLSL from '../../../images/L31XeEI2l3mLSL.jpg'
import L61J6VSYJRWLS from '../../../images/L61J6VSYJRWLS.jpg'
import L61snqzZr6iLS from '../../../images/L61snqzZr6iLS.jpg'
import L81iiNzTmsCLS from '../../../images/L81iiNzTmsCLS.jpg'
import L61AG8heN61LS from '../../../images/L61AG8heN61LS.jpg'
import L91Mhs7vymDLS from '../../../images/L91Mhs7vymDLS.jpg'
import L31YQ20rRh from '../../../images/L31YQ20rRh.jpg'
import C1ooPYCncSSS from '../../../images/C1ooPYCncSSS.jpg'
import L91l65qN2PeLS from '../../../images/L91l65qN2PeLS.jpg'
import L31fplJqEgoLS from '../../../images/L31fplJqEgoLS.jpg'
import L81zob2dN8LSL from '../../../images/L81zob2dN8LSL.jpg' 
import LC1RsG3OIQSS from '../../../images/LC1RsG3OIQSS.jpg' 
import L7181BvRP6YLS from '../../../images/L7181BvRP6YLS.jpg' 
import L613FQhDRGLLSL from '../../../images/L613FQhDRGLLSL.jpg' 

// import L61DDN5WdKQ_lg from '../../../../images/L61DDN5WdKQ-lg.jpg'

import './index.css'

const LightBox = ({toggleModal, lightBoxPanel}) => {

    const image1 = L61DDN5WdKQ
    const image2 = L71RCZ2H6p
    const image3 = L61Dc5ySuuW
    const image4 = L1WBw61t2Q
    const image5 = L81QYTeqjBLS
    const image6 = L61P3LnSDBJLS
    const image7 = L814ze8S1DLS
    const image8 = L511COXBQmSL
    const image9 = L71cYVGoNhvLS
    const image10 = L41t0t3d1YNLS
    const image11 = L61E3oEgHvdLS
    const image12 = LC1FENb8OOtSS
    const image13 = L71iT22dbyILS
    const image14 = L81Rr6WLY7PLpS
    // const image15 = L71vHo3Te71LS
    const image15 = L41GsiEOPk5LS
    const image16 = LB1WOO0G7UTSS
    // const image17 = LB1WOO0G7UTSS
    const image17 = L21LlksaHxoLS
    const image18 = L31XeEI2l3mLSL
    const image19 = L81iiNzTmsCLS
    // const image19 = L81iiNzTmsCLS
    const image20 = L61wMhuIgUMLS
    const image21 = L81X648FretLS
    const image22 = L41J6VSYJRWLS
    // const image22 = L61snqzZr6iLS

    // // const image20 = L61J6VSYJRWLS

    const image23 = L61snqzZr6iLS
    const image24 = L61AG8heN61LS
    const image25 = L91Mhs7vymDLS
    // const image25 = L81iiNzTmsCLS
    const image26 = L31YQ20rRh
    const image27 = C1ooPYCncSSS
    const image28 = L91l65qN2PeLS
    const image29 = L31fplJqEgoLS
    const image30 = LC1RsG3OIQSS
    const image31 = L81zob2dN8LSL
    const image32 = L7181BvRP6YLS
    const image33 = L613FQhDRGLLSL

    const images = [
        { 
            img : image1,
            rating : "1",
            heading : "terrible, horrible and zero star",
            customer : "Crazy Superman",
            date : "Dec 27, 2019",
            article : 
                    <>
                        My original credit card company was changing my card with new terms and condition. So I thought maybe this Amazon reward master card would be a good replacement. It turned out to be a huge and massive disaster. First of all, it took a long time to arrive after the approval. 2nd, after it arrive it was very difficult to activate. When I finally activated, it's not usable in any store except on Amazon.ca; so it is not a master card but more like a membership card for Amazon only. I thought OK, maybe it's their new product, so they need some time to set up. My nightmare hasn't fully mature until the payment date. I wasn't able to make payment to my account despite many attempts in their website, at my bank, with my iPhone bank app. On their statement, the account number are blocked. Even my bank can't figure out how to pay. My calls got into some kind of loop. I can't talk to human.  This credit card is just frustration times 1000!!!!! I wasted so much of my time dealing with this crab. Now, I am not able to make payment into my account. Instead of rewards, I'm going to get charge. If you are a support from MBNA, please contact me and help me. I need to make payment today!! PLEASE!!!!!
                    </>
        }, 
        {
            img : image2, 
            rating : "5",
            heading : "Good card for Prime Members",
            customer : "Pommetta",
            date : "Feb 01, 2020",
            article : 
                    <>
                        Good card for Prime members. Pair it with Rakuten and you can get some pretty good deals.<br/><br/>
                        Lots of commentary on FX but people are failing to mention that you get 2.5% back on all FX which neutralizes any fees. Not perfect but better than  most cards in Canada.
                    </>
        },
        {
            img : image3,
            rating : "1",
            heading : "Cannot register the card for the online service FOR ALMOST A MONTH!!!!",
            customer : "Michael S",
            date : "Apr 29, 2020",
            article : 
                    <>
                        It's a shame - during the COVID-19, when you need the online access the most, you cannot register your card because of the CONSTANT "The System Is Currently Unavailable" situation.<br/>
                        And that is for MORE THAN 3 WEEKS IN A ROW!!!!<br/><br/>
                        It's a shame!
                    </> 
        },
        {
            img : image4,
            rating : "5",
            heading : "Easy to use!",
            customer : "Kalman",
            date : "Jun 25, 2020",
            article : 
                    <>
                        Advantidge from the card!
                    </>
        },
        {
            img : image5,
            rating : "5",
            heading : "J ai 90",
            customer : "Marc lalande",
            date : "Jan 25, 2021",
            article : 
                    <>
                        Pour faire des cadeaux-
                    </>
        },
        {
            img : image6,
            rating : "5",
            heading : "Easy to use, a lot of perks for member",
            customer : "NikkiG",
            date : "Oct 22, 2020",
            article : 
                    <>
                        More discount using this card
                    </>
        },
        {
            img : image7,
            rating : "1",
            heading : "Horrible app ruins the experience!",
            customer : "Customer",
            date : "Nov 25, 2020",
            article : 
                    <>
                        The MBNA app is a total disgrace!<br/>
                        I can not believe that Amazon partner up with something like that!<br/>
                        Whoever developed this app should hang themselves.<br/>
                        This is late 2020 and their app is definitely not from this decade!<br/>
                        I have stopped using the card altogether and would suggest you steer away as well!
                    </>
        },
        {
            img : image8,
            rating : "3",
            heading : "Can't redeem the points",
            customer : "Nasr F.",
            date : "Jan 08, 2021",
            article : 
                    <>
                        After calling MBNA and stay waiting then transfer for more than one hour - all what I got is there is a button to redeem - my answer was there is no button to redeem - their answer that's strange - call Amazon. I did called Amazon waiting about 30 min., no answer. I hang-up <br/>
                        Reddition will go to the account when the system decide to do so !!!
                    </>
        },
        {
            img : image9,
            rating : "5",
            heading : "Gift",
            customer : "Manco",
            date : "Aug 22, 2020",
            article : 
                    <>
                    </>
        },
        {
            img : image10,
            rating : "1",
            heading : "DO NOT GET THIS CARD",
            customer : "Bobby K",
            date : "Nov 05, 2020",
            article : 
                    <>
                        I have yet to get through to their customer service department even after being on hold for an hour (twice)<br/>
                        Their website is always down as well. WIll I get a bill in the mail? Who knows? MBNA(TD bank) is terrible. I miss the old chase card.
                    </>
        },
        {
            img : image11,
            rating : "5",
            heading : "Easy Set up! Happy to be Collecting my rewards now!",
            customer : "Ruth",
            date : "May 29, 2021",
            article : 
                    <>
                        I should have applied for the Amazon Rewards MasterCard years ago. It just makes perfect sense. I’ve been shopping at Amazon for so many years and I would say it’s where I shop more then any other store.  Now I can collect points and get rewards where I’ll be able to use them. It was super easy to apply and super quick approval. It took about a week to get my card.
                    </>
        },
        {
            img : image12,
            rating : "3",
            heading : "Physical payment",
            customer : "Percival Pu",
            date : "Feb 13, 2021",
            article : 
                    <>
                        Can anybody tell me why there is a signal sign on the card which means I can tap to pay, but I cannot. POS terminal let me insert and pay, then it let me sign.  Is something wrong with my card or everyone got the same thing?
                    </>
        },
        {
            img : image13,
            rating : "5",
            heading : "Bluetooth works great, charges great amd plays your music",
            customer : "Chantal Abbors",
            date : "Apr 17, 2021",
            article : 
                    <>
                        I love this product it makes it so easy to use charge and Bluetooth works fanatic in my car. My Friemd likes it so much he bought one too.
                    </>
        },
        {
            img : image14,
            rating : "5",
            heading : "Best ever",
            customer : "Amazon Customer",
            date : "Jun 10, 2021",
            article : 
                    <>
                        The gun stand I purchased was the best ever performs exactly as advertised and for a reasonable price
                    </>
        },
        {
            img : image15,
            rating : "4",
            heading : "It pays to shop with Amazon MC",
            customer : "Megan Porter",
            date : "Apr 06, 2021",
            article : 
                    <>
                        Nice surprise when your credit card company lets you know you have a reward from using their credit card.
                    </>
        },
        {
            img : image16,
            rating : "5",
            heading : "A good Credit Card to keep in the wallet",
            customer : "RM",
            date : "Mar 03, 2021",
            article : 
                    <>
                        A good looking Master Card that can collect points to spend on Amazon shopping. I like it!
                    </>
        },
        {
            img : image17,
            rating : "5",
            heading : "very useful",
            customer : "Helen",
            date : "Jul 23, 2021",
            article : 
                    <>
                        I do not only use it for Amazon purchases, it does excellent work when I do shopping in Costco too. Like it.
                    </>
        },
        {
            img : image18,
            rating : "5",
            heading : "Yes....",
            customer : "Richard Boutin",
            date : "Feb 25, 2021",
            article : 
                    <>
                        ben sûr
                    </>
        },
        {
            img : image19,
            rating : "5",
            heading : "Alexa",
            customer : "Haymanot",
            date : "Sep 23, 2021",
            article : 
                    <>
                        Great device, sounds fantastic. Some have complained that it has trouble hearing you, I don't find this at all, it is very responsive.
                    </>
        },
        {
            img : image20,
            rating : "5",
            heading : "Amazon is amazing and served me well for many years!",
            customer : "Theresa",
            date : "Aug 14, 2021",
            article : 
                    <>
                        These products were priced well and add glam to my home and everyone that comes in knows I only shop Amazon!
                    </>
        },
        {
            img : image21,
            rating : "5",
            heading : "Amazon is amazing and served me well for many years!",
            customer : "Theresa",
            date : "Aug 14, 2021",
            article : 
                    <>
                        These products were priced well and add glam to my home and everyone that comes in knows I only shop Amazon!
                    </>
        },
        {
            img : image22,
            rating : "5",
            heading : "Great Card! Great Rewards!",
            customer : "Mr Z4",
            date : "Aug 12, 2021",
            article : 
                    <>
                        No Issues with the Card.
                    </>
        },
        {
            img : image23,
            rating : "5",
            heading : "Best card I’ve ever got",
            customer : "Maxime",
            date : "Feb 07, 2021",
            article : 
                    <>
                        Easy to used and safer than any cared !!
                    </>
        },
        {
            img : image24,
            rating : "5",
            heading : "great stuff",
            customer : "Ray Sotto",
            date : "Sep 08, 2021",
            article : 
                    <>
                        Best place tp buy dog food, way cheaper than Petsmart.
                    </>
        },
        {
            img : image25,
            rating : "5",
            heading : "Really a good product!",
            customer : "Hong",
            date : "May 19, 2021",
            article : 
                    <>
                        This is a wonderful product! It works just like what we want! Love it!
                    </>
        },
        {
            img : image26,
            rating : "5",
            heading : "Great rewards",
            customer : "Tony C",
            date : "Sep 19, 2021",
            article : 
                    <>
                    </>
        },
        {
            img : image27,
            rating : "5",
            heading : "Facile à utiliser",
            customer : "Chi Vinh Tran",
            date : "Sep 04, 2021",
            article : 
                    <>
                        5 étoiles pour utiliser achats dans Amazon avec bonne remise
                    </>
        },
        {
            img : image28,
            rating : "5",
            heading : "Great service",
            customer : "Umur Olcay",
            date : "Sep 22, 2021",
            article : 
                    <>
                        This is the child play space where I will place the sandbox
                    </>
        },
        {
            img : image29,
            rating : "5",
            heading : "merci",
            customer : "Bella",
            date : "Jul 20, 2021",
            article : 
                    <>
                        This is the child play space where I will place the sandbox
                    </>
        },
        {
            img : image30,
            rating : "5",
            heading : "It’s a one stop shop!",
            customer : "Catherine Ferrer",
            date : "Jun 22, 2021",
            article : 
                    <>
                        [[VIDEOID:10cb02d348563d37cefea4d25a5a252c]] I love to shop at Amazon. Very convenient.
                    </>
        },
        {
            img : image31,
            rating : "5",
            heading : "prompt service",
            customer : "Virginia Differenz",
            date : "May 25, 2021",
            article : 
                    <>
                        I completed a rug hooking to use on my cabin floor. There was plenty of yarn in every color required. The kit arrived very quickly to my post office.
                    </>
        },
        {
            img : image32,
            rating : "5",
            heading : "Nothing",
            customer : "James McDermott",
            date : "Apr 07, 2021",
            article : 
                    <>
                        Liked
                    </>
        },
        {
            img : image33,
            rating : "5",
            heading : "Computers",
            customer : "Alsaideeq Alsarwi ",
            date : "Sep 16, 2021",
            article : 
                    <>
                        Liked
                    </>
        }
    ]

    // MAIN LIGHTBOX
    // Holds Images Cards and Lightbox
    // this is where all of our logic will live
    
    const [imageToShow, setImageToShow] = useState("")
    // const [lightBoxDisplay, setLightBoxDisplay] = useState(false)
    const [showPrevBtn, setShowPrevBtn] = useState(true)
    const [showNextBtn, setShowNextBtn] = useState(true)

    // Looping through our images array to create img elements
    const imageCards = images.slice(0, 4).map((image) => (
        <div className="master__commentsThumbnail">
            <img className="image-card" onClick={() => showImage(image)} src={image.img} />
        </div>
    ))

    // Function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (gallery) => {
        toggleModal("show stretched", "lightBoxReview") // show modal
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
        console.log(nextImage)
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