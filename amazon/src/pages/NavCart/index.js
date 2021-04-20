import React from 'react'

import Layout from '../../components/Layout/index'

import { BtnPill } from '../../components/UI/Button'

import binoculars from '../../images/thumbnails/products/gosky-10x42-roof-prism-binoculars-for-adults.jpg'

import './index.css'

const NavCart = () => {
    return (
        <Layout>
            <div className="navCart__wrap">
                <section className="navCart__banner a__spacing__medium">
                    <a className="mx-auto navCart__banner__link d-block" href="/">
                        <div className="d-flex align-items-center">
                            <section className="navCart__banner__img a__section a__padding__base">
                                <img src={binoculars} className="d-block"/>
                                <div className="text-center">
                                <strong className="navCart__promo__amount"><span>$20</span> instant gift card</strong>
                                </div>
                            </section>
                            <section className="a__section a__padding__base">
                                <p>
                                    <strong>Kay,</strong> get a 
                                    <strong>
                                        <span style={{color: "var(--green-2)"}}>
                                            <span> $20</span> Amazon.ca Gift Card 
                                        </span>
                                    </strong> instantly, plus up to 5% back for 6 months <br/> after approval for the Amazon.ca Rewards Mastercard. 
                                </p>
                            </section>
                            <section className="a__section a__spacing__mini a__spacing__top__mini">
                                <table className="navCart__mathbox">
                                    <tbody>
                                        <tr>
                                            <td className="navCart__mathbox__label">
                                                Current Total:
                                            </td>

                                            <td className="text__right navCart__mathbox__value">
                                                $130.98
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="navCart__mathbox__label font-weight-bold">
                                                Savings after approval:
                                            </td>

                                            <td className="text-right navCart__mathbox__value font-weight-bold">
                                                <span class="maple-mathbox__sum-line">
                                                    - $20.00
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="a__color__price navCart__mathbox__label font-weight-bold">
                                                Cost After Savings:
                                            </td>

                                            <td className="a__color__price text-right navCart__mathbox__value font-weight-bold">
                                                $110.98
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                            <section className="navCart__learnMore a__section a__spacing__medium a__spacing__top__medium text-center">
                                <BtnPill/>
                            </section>
                        </div>
                    </a>
                </section>
            </div>
        </Layout>
    )
}

export default NavCart
