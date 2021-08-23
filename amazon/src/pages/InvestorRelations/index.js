import React from 'react'
import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'

import amazon_module_logo from '../../images/amazon-module-logo.svg'

import './index.css'

const InvestorRelations = () => {
    return (
        <div className="investor--page">
            <header className="investor__header">
                <div className="investor__headerPane d-flex">
                    <div className="investor__moduleLogo d-flex align-items-center">
                        <div className="layout__toggle">
                            <FaBars
                                className="layout__toggleBars"
                            />
                        </div>
                        <Link to="/" className="investor__moduleLink">
                            <img src={amazon_module_logo} alt="About Amazon logo" />
                        </Link>
                    </div>
                    <span className="moduleSearch d-inline-block ml-auto">
                        <GoSearch/>
                    </span>
                    <span className="investor__moduleLang d-inline-block">
                        <span className="investor__moduleLang--toggle">
                            EN
                        </span>
                    </span>
                </div>
            </header>
        </div>
    )
}

export default InvestorRelations
