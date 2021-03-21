import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

import Modal from '../../components/UI/Modal/'

import './index.css'


const Layout = (props) => {

    const [modal, setModal] = useState('hide')
    const toggleModal = (status) => setModal(status)  // Hide Modal on hover on Modal itself 

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
                toggleModal={toggleModal}
            />
        </>
    )
}

export default Layout