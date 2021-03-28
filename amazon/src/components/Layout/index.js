import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

import Modal from '../../components/UI/Modal/'

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

    const toggleModal = (status, mode, modalLangProp=modalLangProps) => { 
        setModal(status)  // Hide Modal on hover on Modal itself 

        // If no mode, opening a modal, will always show all modals. Use mode to specify
        // which modal to show. Without mode === "all", closing the general modal will
        // fail to close the modals

        if (mode === "langModal" || mode === "all") {
            modalLangProps.modalLangPanel = (status === "hide") ? "" : "show"
            setModalLangProps(modalLangProp)
        }
    }

    return(
        <>
            <Header 
                toggleModal={toggleModal}
            />
                <div className="page__content">
                    {props.children}
                </div>
                <Modal 
                    modal={modal}
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