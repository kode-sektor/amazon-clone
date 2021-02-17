import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import './index.css'


const Layout = (props) => {
    return(
        <>
            <Header />
                <div className="page__content">
                    {props.children}
                </div>
            <Footer />
        </>
    )
}

export default Layout