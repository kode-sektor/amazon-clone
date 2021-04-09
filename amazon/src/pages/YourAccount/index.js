import React from 'react'

import Layout from '../../components/Layout/index'

import { Row, Col } from 'reactstrap'
import { CancelBtnPrimary, SaveBtnPrimary } from '../../components/UI/Button/index.js'

import '../../css/styles/index.css'
import './index.css'


const YourAccount = () => {
    
    return (
        <div>
            <Layout>
                <div className="customerPreferences">
                    <section className="customerPreferences__wrap">
                        <h1 className="sr-only">Change Language &amp; Currency Settings</h1>
                        <Row>
                            <Col sm={{size: 10, offset: 1}}>
                                <form className="customerPreferences__form">
                                    <Row>
                                        <Col sm={{size: 7}}>
                                            <br/>
                                            <h2 className="customerPreferences__title a__spacing__base">Language Settings</h2>
                                            <span>Select the language you prefer for browsing, shopping, and communications.</span>
                                            <br/>
                                            <br/>
                                            <section>
                                                <label className="page__footer__langLabel">
                                                    <input className="page__footer__langInput" type="radio" name="LOP" value="en_CA" checked=""/>
                                                    <i className="amzn__icon__radio__red checked"></i>&nbsp;
                                                    <span>
                                                        English - EN
                                                    </span>
                                                </label>
                                                <hr className="icp__divider"/>
                                                <label className="page__footer__langLabel">
                                                    <input className="page__footer__langInput" type="radio" name="LOP" value="en_CA" checked=""/>
                                                    <i className="amzn__icon__radio__red"></i>&nbsp;
                                                    <span>
                                                        <em>Français - FR - Traduction</em>
                                                    </span>
                                                </label>
                                            </section>
                                        </Col>
                                        <Col sm={{size: 5}}>
                                            <br/>
                                            <h3 className="customerPreferences__translate">Translation</h3>
                                            <p>We'll translate the most important information for your browsing, shopping, and communications.</p>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <div className="divider__inner"></div>
                                    <section className="customerPreferences__formButtons">
                                        <CancelBtnPrimary/>
                                        <SaveBtnPrimary/>
                                    </section>
                                </form>
                            </Col>
                        </Row>
                    </section>
                </div>
            </Layout>
        </div>
    )
}

export default YourAccount
