import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import './index.css'


const ModalLang = (props) => {

    const { modalPanel, toggleModalLang, title, legend, body, bodyAux, cta, classname } = props
    
    return (
        <section className={`popover__langSetting ${modalPanel}`}>
            <div className={`popover__langSetting__container ${classname}`}>
                <header className="popover__langSetting__heading">
                    <h5 className="popover__langSetting__title">
                        {title}
                    </h5>
                    <Button className="popover__langSetting__close" outline color="secondary"  onClick={() => {
                        toggleModalLang("hide", "all")
                    }}>
                        <i class="popover__close"></i>
                    </Button>
                </header>
                <section className="popover__langSetting__customerPreferences">
                    <form action="" className="popover__langSetting__countryNav">
                        <div className="popover__langSetting__countryNav__inner d-flex justify-content-between row">
                            <section className="popover__langSetting__country col-6">
                                <legend className="popover__langSetting__country__title">{legend}:</legend>
                                {body}
                            </section>
                            <section className="popover__langSetting__notes col-5">
                                {bodyAux}
                            </section>
                        </div>
                    </form>
                </section>
                <footer className="popover__langSetting__footer">
                    <button className="a__button a__button__cancel" onClick={() => {
                        toggleModalLang("hide", "all")
                    }}>
                        <span className="a__button__inner">
                            <span className="a__button__text">
                                Cancel
                            </span>
                        </span>
                    </button>
                    {cta === "Go to website" ? 
                        <Link to="/"> 
                            <button className="a__button a__button__primary">
                                <span className="a__button__inner">
                                    <span className="a__button__text">
                                        {cta}
                                    </span>
                                </span>
                            </button>
                        </Link>
                        : 
                        <button className="a__button a__button__primary">
                            <span className="a__button__inner">
                                <span className="a__button__text">
                                    {cta}
                                </span>
                            </span>
                        </button>
                    }
                </footer>
            </div>
        </section>
    )
}

export default ModalLang
