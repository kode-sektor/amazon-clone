import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

import Modal from '../../components/UI/Modal/'
import Location from '../Header/Location/index'

import './index.css'


const Layout = (props) => {

    const [modal, setModal] = useState("hide")  // Main modal
    const [modalLangPanel, setModalLangPanel] = useState("hide")    // Language panel
    const [modalLangProps, setModalLangProps] = useState({
                                                    modalLangPanel : "",
                                                    title : "",
                                                    legend : "",
                                                    body : "",
                                                    legendAux : "",
                                                    bodyAux : "",
                                                    cta : "",
                                                    classname : ""       
                                                })

    const [deliveryAddressPanel, setDeliveryAddressPanel] = useState("hide")    // delivery address modal

    const toggleModal = (status, mode, modalLangProp=modalLangProps) => { 
        setModal(status)  // Hide Modal on hover on Modal itself 

        // If no mode, opening a modal, will always show all modals. Use mode to specify
        // which modal to show. Without mode === "all", closing the general modal will
        // fail to close the modals


        // On the click on the modal itself, reset all modals
        if (mode === "all") {
            modalLangProps.modalLangPanel = "hide"
            setModalLangProps(modalLangProp)    // Language panel

            setDeliveryAddressPanel(false)  // Delivery address panel
        }
        if (mode === "langModal") {
            modalLangProps.modalLangPanel = (status === "hide") ? "" : "show"
            setModalLangProps(modalLangProp)
        }
        if (mode === "deliveryAddressModal") {
            let stat = status === "hide" ? "" : "show"
            setDeliveryAddressPanel(stat)
        }
    }

    return (
        <>
            <Header 
                modal={modal}
                toggleModal={toggleModal}
            />
            <div className="page__content">
                {props.children}
            </div>
            <Modal 
                modal={modal}
                toggleModal={toggleModal}
            />
            <Location
                modal={deliveryAddressPanel}
                toggleModal={toggleModal}
            />
            <Footer 
                modal={modal}
                modalLangPanel={modalLangPanel}
                modalLangProps={modalLangProps}
                toggleModal={toggleModal}
            />
        </>
    )
}

export default Layout