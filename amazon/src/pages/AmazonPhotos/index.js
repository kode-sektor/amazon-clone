import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import { ApplyToSellBtn } from '../../components/UI/Button'

import amazon_photos_logo from '../../images/amazon-photos-logo.png'
import photos_landing_page from '../../images/photos-landing-page.png'
import auto_backup from '../../images/auto-backup.png'
import this_day_np from '../../images/this-day-np.png'
import dps_2 from '../../images/dps-2.png'
import access_across_devices from '../../images/access-across-devices.png'
import uk_prime from '../../images/uk-prime.png'
import screenshot_avatar from '../../images/screenshot-avatar.png'

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
                <section className="photos__benefits padding__top__xxxlarge padding__right__minibase padding__bottom__xxlarge padding__left__minibase">
                    <div className="has__max__width">
                        <figure className="photos__benefit flex__container padding__left__xsmall padding__right__xsmall padding__top__xsmall padding__bottom__xsmall ">
                            <section className="image text-center w-100">
                                <img src={auto_backup} alt="auto backup" />
                            </section>
                                <figcaption className="flex__container padding__left__xsmall padding__right__xsmall padding__top__mini font__size__regular text-center">
                                Secure backup of full-resolution photos
                            </figcaption>
                        </figure>
                        <figure className="photos__benefit flex__container padding__left__xsmall padding__right__xsmall padding__top__xsmall padding__bottom__xsmall ">
                            <section className="image text-center w-100">
                                <img src={this_day_np} alt="this day np" />
                            </section>
                                <figcaption className="flex__container padding__left__xsmall padding__right__xsmall padding__top__mini font__size__regular text-center">
                                Revisit past years with This Day
                            </figcaption>
                        </figure>
                        <figure className="photos__benefit flex__container padding__left__xsmall padding__right__xsmall padding__top__xsmall padding__bottom__xsmall ">
                            <section className="image text-center w-100">
                                <img src={dps_2} alt="personalise fire TV" />
                            </section>
                                <figcaption className="flex__container padding__left__xsmall padding__right__xsmall padding__top__mini font__size__regular text-center">
                                Personalise your Fire TV and Echo Show
                            </figcaption>
                        </figure>
                        <figure className="photos__benefit flex__container padding__left__xsmall padding__right__xsmall padding__top__xsmall padding__bottom__xsmall ">
                            <section className="image text-center w-100">
                                <img src={access_across_devices} alt="access across devices" />
                            </section>
                                <figcaption className="flex__container padding__left__xsmall padding__right__xsmall padding__top__mini font__size__regular text-center">
                                Available across all of your devices
                            </figcaption>
                        </figure>
                    </div>
                </section>
                <section className="flex__container padding__top__minibase padding__bottom__minibase">
                    <div className="photos__prime has__max__width">
                        <section className="photos__primeImg flex__container padding__left__base padding__right__base padding__top__small padding__bottom__small">
                            <div className="image text-center w-100">
                                <img src={uk_prime} alt="uk prime" />
                            </div>
                        </section>
                        <section className="photos__primeMore flex__container padding__top__small padding__bottom__small">
                            <h3 className="flex__container padding__left__small font-weight-normal font__size__medium heading">
                                <strong>Get more with Prime</strong>
                            </h3>
                            <section className="flex__container padding__left__small padding__right__small padding__top__xsmall padding__bottom__xsmall">
                                <ul className="photos__primeList">
                                    <li>
                                        Unlimited photo storage and 5 GB for video
                                    </li>
                                    <li>
                                        Share photos and videos with up to five family members using Family Vault
                                    </li>
                                    <li>
                                        Search and sort your photos by people, places and things with advanced image recognition
                                    </li>
                                </ul>
                            </section>
                            <section className="flex__container padding__left__small align__items__stretch">
                                <Link className="photo__link font__size__regular">
                                    <u>
                                        <strong>Get Prime</strong>
                                    </u>
                                    <strong> ▸</strong>
                                </Link>
                            </section>
                        </section>
                    </div>
                </section>
                <section className="flex__container padding__top__xxxlarge padding__bottom__xxxlarge align-items-stretch w-100">
                    <div className="has__max__width">
                        <header className="flex__container flex-start align-items-stretch w-100 padding__left__large padding__right__large padding__top__minibase padding__bottom__minibase align-items-stretch flex__start align-center">
                            <h3 className="photo__headingPlan font__size__medium font-weight-bold heading w-50 m-auto">
                                Need more space for your memories? Plans start at $2.79/month for 100 GB
                            </h3>
                        </header>
                        <section className="photos__tabular">
                            <section className="flex__container padding__top__base padding__bottom__base">
                                <section className="photos__tabularC flex__container padding__right__mini align-items-stretch align-content-start">
                                    <header className="flex__container align-items-stretch align-content-start justify-content-center text-center font__size__medium w-100">
                                        <strong>5 GB</strong>
                                    </header>
                                    <section className="photos__cost flex__container align-items-stretch align-content-start justify-content-center text-center w-100">
                                        Free
                                    </section>
                                    <section className="flex__container padding__top__minibase padding__bottom__minibase align-items-stretch">
                                        <ul className="photos__primeList">
                                            <li className="font-size-regular">
                                                All Amazon customers get 5 GB of storage
                                            </li>
                                            <li className="font-size-regular">
                                                Prime members get unlimited photo storage and 5 GB for video
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <section className="photos__tabularC flex__container padding__right__mini align-items-stretch align-content-start">
                                    <header className="flex__container align-items-stretch align-content-start justify-content-center text-center font__size__medium w-100">
                                        <strong>100 GB</strong>
                                    </header>
                                    <section className="photos__cost flex__container align-items-stretch align-content-start justify-content-center text-center w-100">
                                        $2.79 per month
                                    </section>
                                    <section className="flex__container padding__top__minibase padding__bottom__minibase align-items-stretch">
                                        <ul className="photos__primeList">
                                            <li className="font-size-regular">
                                                If you like taking photos
                                            </li>
                                            <li className="font-size-regular">
                                                Store about 14 hours of 1080p HD video
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                                <section className="photos__tabularC flex__container padding__right__mini align-items-stretch align-content-start">
                                    <header className="flex__container align-items-stretch align-content-start justify-content-center text-center font__size__medium w-100">
                                        <strong>1 TB</strong>
                                    </header>
                                    <section className="photos__cost flex__container align-items-stretch align-content-start justify-content-center text-center w-100">
                                        $13.99 per month
                                    </section>
                                    <section className="flex__container padding__top__minibase padding__bottom__minibase align-items-stretch">
                                        <ul className="photos__primeList">
                                            <li className="font-size-regular">
                                                If you love taking photos
                                            </li>
                                            <li className="font-size-regular">
                                                Store about 140 hours of 1080p HD video
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <section className="flex__container justify-content-center align__items__stretch w-100">
                            <Link className="photo__link font__size__regular">
                                <u>
                                    <strong>Explore Plans</strong>
                                </u>
                                <strong> ▸</strong>
                            </Link>
                        </section>
                    </div>
                </section>
                <section className="flex__container align-items-stretch align-content-start padding__left__base padding__right__base padding__top__base padding__bottom__large">
                    <section className="photos__questions flex__container padding__top__mini padding__bottom__mini justify-content-center align-content-start align-items-stretch col-8 m-auto px-0">
                        <figure className="photos__questionAvatar padding__left__minibase padding__right__minibase align-items-center align-content-center justify-content-center">
                            <img src={screenshot_avatar} alt="amazon photos avatar" />
                        </figure>
                        <section className="photos__answers flex__container padding__left__minibase padding__right__minibase align-items-end align-content-center">
                            <header className="font__size__medium">
                                <strong>Still have questions? <br /></strong>
                                We've got answers. <br />
                                <Link to="/">Visit Help & Customer Support ▸ </Link>
                            </header>
                        </section>
                    </section>
                </section>
            </section>
            <section className="bxc__grid--spacing-large">
                <div className="bxc__grid__container bxc__grid__container__width__1500">
                    <section className="bxc__grid__row">
                        <section className="bxc__grid__column bxc__grid__column--12-of-12">
                            <p>
                                Amazon Photos lets you back up, organize, and share all of the photos and videos from your phone, computer, and other devices. You can access all your photos on nearly any device and share them with family and friends. This photo storage app keeps your photos and videos safe, even if your phone is lost or damaged. Once your photos are stored in Amazon Photos, you can delete them from your device to make room on your phone. Once your photos have been saved to Amazon Photos, you can access them from nearly any device. Finally get the photos from your old laptop, your phone, and your desktop together in one safe place.
                            </p>
                        </section>
                    </section>
                </div>
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
