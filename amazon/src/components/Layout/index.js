import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import Modal from '../../components/UI/Modal/'
import Location from '../Header/Location/index'

import './index.css'

const Layout = (props) => {

    const {children} = props

    const [modal, setModal] = useState("hide")  // Main modal
    // const [modalLangPanel] = useState("hide")    // Language panel
    const [modalLangProps, setModalLangProps] = useState(
                                                            {
                                                                modalLangPanel : "",
                                                                title : "",
                                                                legend : "",
                                                                body : "",
                                                                legendAux : "",
                                                                bodyAux : "",
                                                                cta : "",
                                                                classname : ""       
                                                            }
                                                        )
    const [deliveryAddressPanel, setDeliveryAddressPanel] = useState("hide")    // delivery address modal
    const [lightBoxPanel, setLightBoxPanel] = useState(false)
    // const [lightBoxReview, setlightBoxReview] = useState(false)
    // const [lightBoxModal, setLightBoxModal] = useState(
    //                                                     {
    //                                                         lightBoxPanel : "",
    //                                                         toggleModal : "",
    //                                                         img : "",
    //                                                         showPrev : "",
    //                                                         showNext : ""
    //                                                     }
                                                    // )

    const [showDeliverToMenu] = useState(true)

    const toggleModal = (status, mode, modalLangProp = modalLangProps) => { 
        setModal(status)  // Hide Modal on hover on Modal itself ("hide" or "show")

        // If no mode, opening a modal, will always show all modals. Use mode to specify
        // which modal to show. Without mode === "all", closing the general modal will
        // fail to close the modals

        // On the click on the modal itself, reset all modals
        switch (mode) {
            case "all" : 
                modalLangProps.modalLangPanel = "hide"
                // setModalLangProps({
                //     ...modalLangProps,
                //     modalLangPanel : "hide"
                // })
                setModalLangProps(modalLangProp)    // Language panel
                setDeliveryAddressPanel(false)  // Delivery address panel
                setLightBoxPanel(false)     // Lightbox
                break
            case "langModal" : 
                modalLangProps.modalLangPanel = (status === "hide") ? "" : "show"
                setModalLangProps(modalLangProp)
                break
            case "deliveryAddressModal" : 
                let stat = (status === "hide") ? "" : "show"
                setDeliveryAddressPanel(stat)
                break
            case "lightBoxReview" : 
                (status === "hide") ? setLightBoxPanel(false) : setLightBoxPanel(true)
                break
        }
    }

    let childProps = {}

    window.location.pathname === "/mastercard-reward" && (
        // alert('mastercard reward page')
        // React.cloneElement props for Layout (HOC) children
        childProps = {
            // modal={modal} will be used only if a toggle is needed in any child element
            toggleModal : toggleModal,
            lightBoxPanel : lightBoxPanel,
            // showLightBoxPanel : showLightBoxPanel
        }
    )

    return (
        <>
            <Header 
                modal={modal}
                toggleModal={toggleModal}
                showDeliverToMenu={showDeliverToMenu}
                subNav={props.subNav === "hide" ? false : true}
            />
            <div className="page__content">
                <div className="page__content__wrap">
                    {/* {props.children} */}
                    {React.Children.map(children, child => {
                        // console.log(child);
                        return React.cloneElement(child, {childProps}, null);
                    })}
                </div>
            </div>
            <Modal 
                modal={modal}
                toggleModal={toggleModal}
            />
            {/* Kept as a very high component because it works with position: fixed declaration,
                thus wouldn't work properly if nested within HTML elements */}
            <Location
                modal={deliveryAddressPanel}
                toggleModal={toggleModal}
            />
            <Footer 
                modal={modal}   // state of modal required to either hide or show panel (cos its a toggle)
                // modalLangPanel={modalLangPanel}
                modalLangProps={modalLangProps}
                toggleModal={toggleModal}
            />
        </>
    )
}

export default Layout