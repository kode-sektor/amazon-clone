import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

import { CardPrime } from '../Card'
import { JoinPrimeBtn } from '../../UI/Button'

import primeAmazon from '../../../images/prime-amazon.png'
import primeAmazonMain from '../../../images/prime-amazon-sticky-main.png'

const PrimeDropdown = ({slideUp}) => {

    const [primeSelect, setPrimeSelect] = useState(1)

    const select = (evt) => {
        // prime-2 to "2"
        let id = (evt.target.id).substring((evt.currentTarget.id).indexOf("-") + 1, evt.currentTarget.id.length)
        setPrimeSelect(Number(id))
    }

    return (
        <section className="primeSticky">
            <section className="primeSticky__card">
                <div className="primeSticky__cardInner">
                    <section className="primeSticky__cardHeader">
                        <img src={primeAmazon} className="primeSticky__primeLogo"/>
                        <img src={primeAmazonMain} className="primeSticky__primePlan"/>
                        <div className="primeSticky__headerTitle">
                            There's something for everyone                
                        </div>
                        <div className="primeSticky__close" onClick={slideUp}>
                            <span className="primeSticky__close__button" tabindex="0">
                                Close 
                                <div className="primeSticky__closeSprite"></div>
                            </span>
                        </div>
                    </section>
                    <section className="primeSticky__cardBody">
                        <section className="primeSticky__cardPlans">
                            <CardPrime 
                                primeID={1}
                                heading={"Prime (One-Week Trial)"}
                                price={"0.99"}
                                duration={"week"}
                                note={"After one week, CDN$ 7.99/month"}
                                checked={(primeSelect === 1) ? true : false}
                                primeSelect={primeSelect.selected}
                                select={(evt) => select(evt)}
                            />
                            <CardPrime 
                                primeID={2}
                                heading={"Prime (monthly)"}
                                price={"7.99"}
                                duration={"month"}
                                note={""}
                                checked={(primeSelect === 2) ? true : false}
                                primeSelect={primeSelect.selected}
                                select={(evt) => select(evt)}
                            />
                            <CardPrime 
                                primeID={3}
                                heading={"Prime (annual)"}
                                price={"79.00"}
                                duration={"year"}
                                note={"Equivalent to CDN$ 6.58/month"}
                                checked={(primeSelect === 3) ? true : false}
                                primeSelect={primeSelect.selected}
                                select={(evt) => select(evt)}
                            />
                            <section className="primeSticky__benefits">
                                <ul>
                                    <li>
                                        <div class="primeSticky__benefitsCheck"></div>FREE Two-Day Shipping</li>
                                    <li>
                                        <div class="primeSticky__benefitsCheck"></div>Prime Video</li>
                                    <li>
                                        <div class="primeSticky__benefitsCheck"></div>Unlimited music streaming</li>
                                    <li>
                                        <div class="primeSticky__benefitsCheck"></div>Unlimited reading on any device</li>
                                    <li>
                                        <div class="primeSticky__benefitsCheck"></div>Unlimited photo storage</li>
                                </ul>
                            </section>
                        </section>
                        <section>
                            <JoinPrimeBtn/>
                        </section>
                        <section className="primeSticky__trial">
                            <p className="primeSticky__buttonString mb-0">
                                After your One-Week CDN$ 0.99 Trial, Amazon Prime is CDN$ 7.99/month (plus any applicable taxes). Cancel anytime.
                            </p>
                            <Link to="/joinstudent?ms3" title="Are you a student?" className="a__color__link">Are you a student?</Link>
                        </section>
                    </section>
                    <div className="planSticky__close">
                        <button className="icon__slideUp" onClick={slideUp}>
                            <i className="a__icon a__icon__section__collapse" role="presentation"></i>
                        </button>
                    </div>
                </div>
            </section>
            <section className="primeSticky__close"></section>
        </section>
    )
}

export default PrimeDropdown
