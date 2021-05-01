import React from 'react'

import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import { CancelBtnPrimary } from '../../UI/Button'

import './index.css'


const ModalLang = (props) => {

    const { modalPanel, toggleModalLang, title, legend, body, bodyAux, cta, classname } = props
    
    return (
        <section className={`popover__panel ${modalPanel}`}>
            <div className={`popover__panel__container ${classname}`}>
                <header className="popover__panel__heading">
                    <h5 className="popover__panel__title">
                        {title}
                    </h5>
                    <Button className="popover__panel__close" outline color="secondary"  onClick={() => {
                        toggleModalLang("hide", "langModal")
                    }}>
                        <i class="popover__close"></i>
                    </Button>
                </header>
                <section className="popover__panel__customerPreferences">
                    <form action="" className="popover__panel__countryNav">
                        <div className="popover__panel__countryNav__inner d-flex justify-content-between row">
                            <section className="popover__panel__country col-6">
                                <legend className="popover__panel__country__title">{legend}:</legend>
                                {body}
                            </section>
                            <section className="popover__panel__notes col-5">
                                {bodyAux}
                            </section>
                        </div>
                    </form>
                </section>
                <footer className="popover__panel__footer">
                    <CancelBtnPrimary 
                        toggle={()=>toggleModalLang("hide", "langModal")}
                    />
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
