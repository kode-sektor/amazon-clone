import React from 'react'
import FooterMenu from './FooterMenu'

import './index.css'

const Footer = () => {
    return (
        <footer className="page__footer">
            <a href="/" className="page__footer__to__top">
                <span class="page__footer__back__to__top__text">Back to top</span>
            </a>
            <section className="page__footer__wrap d-flex justify-content-around">
                <FooterMenu 
                    heading={"Get to Know Us"}
                    menu={[
                        { label: "Careers", href: "", icon: null },
                        { label: "Amazon and Our Planet", href: "", icon: null },
                        { label: "Investor Relations", href: "", icon: null },
                        { label: "Press Releases", href: "", icon: null },
                    ]}
                />
                <FooterMenu 
                    heading={"Make Money with Us"}
                    menu={[
                        { label: "Sell on Amazon", href: "", icon: null },
                        { label: "Amazon Associates", href: "", icon: null },
                        { label: "Sell on Amazon Handmade", href: "", icon: null },
                        { label: "Advertise Your Products", href: "", icon: null },
                        { label: "Independently Publish with Us", href: "", icon: null },
                        { label: "Host an Amazon Hub", href: "", icon: null },
                    ]}
                />
                <FooterMenu 
                    heading={"Amazon Payment Products"}
                    menu={[
                        { label: "Amazon.ca Rewards Mastercard", href: "", icon: null },
                        { label: "Shop with Points", href: "", icon: null },
                        { label: "Reload Your Balance", href: "", icon: null },
                        { label: "Amazon Currency Converter", href: "", icon: null },
                        { label: "Gift Cards", href: "", icon: null },
                        { label: "Amazon Cash", href: "", icon: null },
                    ]}
                />
                <FooterMenu 
                    heading={"Let Us Help You"}
                    menu={[
                        { label: "COVID-19 and Amazon", href: "", icon: null },
                        { label: "Shipping Rates & Policies", href: "", icon: null },
                        { label: "Amazon Prime", href: "", icon: null },
                        { label: "Returns Are Easy", href: "", icon: null },
                        { label: "Manage your Content and Devices", href: "", icon: null },
                        { label: "Customer Service", href: "", icon: null },
                    ]}
                />
            </section>
        </footer>
    )
}

export default Footer
