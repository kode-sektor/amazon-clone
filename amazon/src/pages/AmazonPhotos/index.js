import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import { ApplyToSellBtn } from '../../components/UI/Button'

import amazon_photos_logo from '../../images/amazon-photos-logo.png'
import photos_landing_page from '../../images/photos-landing-page.png'

import './index.css'

const AmazonPhotos = () => {

    const AmazonPhotosPage = () => (
        <main className="photos--page a__container">
            <section className="photos__container">
                <section className="photos__banner">
                    <nav className="photos__nav padding__right__base padding__bottom__mini padding__top__mini padding__left__base">
                        <section className="photos__navContainer">
                            <Link to="/" className="photos__logo text-decoration-none">
                                <img src={amazon_photos_logo} alt="Amazon Photos logo" />
                            </Link>
                            <ul className="photos__links">
                                <li>
                                    <Link to="/">
                                        Download for Desktop
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Download on the App Store
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Get it on Google Play
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Available on Fire TV
                                    </Link>
                                </li>
                            </ul>
                            <ApplyToSellBtn
                                text={"Sign in"}
                            />
                        </section>
                    </nav>
                    <section className="photos__bannerMain padding__left__small padding__top__small">
                        <section className="flex__container padding__left__xsmall padding__top__xmini w-100">
                            <section className="photos__bannerItem flex__container padding__right__base padding__left__large padding__top__large">
                                <section className="flex__container padding__left__large padding__right__base">
                                    <header className="flex__container padding__right__base padding__top__base padding__bottom__small">
                                        <div className="has__max__width">
                                            <h1 className="photos__bannerTitle font__size__xlarge">
                                                <strong>Unlimited photo storage </strong>
                                            </h1>
                                        </div>
                                    </header>
                                    <section className="flex__container align-items-stretch">
                                        <h2 className="photos__bannerTitle photos__bannerTitle--subtitle font__size__regular">
                                            Prime members get unlimited full-resolution photo storage and 5 GB for video from Amazon Photos. Not a Prime member? Everyone gets 5 GB for photos and videos.
                                        </h2>
                                    </section>
                                    <section className="flex__container padding__top__large padding__bottom__small flex-start text-left">
                                        <ApplyToSellBtn 
                                            text={"Sign in"}
                                        />
                                    </section>
                                </section>
                            </section>
                            <section className="photos__bannerItem flex__container padding__top__base padding__right__mini padding__bottom__xsmall">
                                <section className="padding__top__large padding__bottom__minibase align-content-end align-items-end">
                                    <div className="text-left">
                                        <img src={photos_landing_page} alt="photos landing page" />
                                    </div>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </main>
    )

    return (
        <Layout>
            <AmazonPhotosPage />
        </Layout>
    )
}

export default AmazonPhotos
