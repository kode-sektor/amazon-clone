import React, { useState } from "react"

import HeaderTop from './HeaderTop/index'
import SubHeader from './SubHeader/index'

import './index.css'

const Header = () => {

	return (
        <header className="page__header">
            <HeaderTop />
            <SubHeader />
        </header>
	);
};

export default Header;
