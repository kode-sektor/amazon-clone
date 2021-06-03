import React from 'react'

import './index.css'

import primeAmazon from '../../../images/prime-amazon.png'
import primeAmazonMain from '../../../images/prime-amazon-sticky-main.png'

const PrimeDropdown = () => {
    return (
        <section className="primeSticky">
            <section className="primeSticky__card">
                <div className="primeSticky__cardInner">
                    <section className="primeSticky__cardHeader">
                        <img src={primeAmazon} className="primeSticky__primeLogo" />
                        <img src={primeAmazonMain} className="primeSticky__primePlan" />
                        <div className="primeSticky__headerTitle">
                            There's something for everyone                
                        </div>
                        <div class="primeSticky__close">
                            <span className="primeSticky__close__button" tabindex="0">
                                Close 
                                <div class="primeSticky__closeSprite"></div>
                            </span>
                        </div>
                    </section>
                    <section className="primeSticky__cardBody"></section>
                </div>
            </section>
            <section className="primeSticky__close"></section>
        </section>
    )
}

export default PrimeDropdown
