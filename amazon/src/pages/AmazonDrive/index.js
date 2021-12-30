import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'

import back_up_photos_and_videos from '../../images/back-up-photos-and-videos.jpg'
import drive_laptop_icon from '../../images/drive-laptop-icon.png'
import drive_mobile_icon from '../../images/drive-mobile-icon.png'
import drive_desktop_icon from '../../images/drive-desktop-icon.png'
import photos_ingress_banner from '../../images/photos-ingress-banner.jpg'

import './index.css'

const AmazonDrive = () => {

    const AmazonDrivePage = () => (
        <main className="drive--page a__container">
            <section className="bxc__grid__spacing__large">
                <section className="bxc__grid__container bxc__grid__container--width-1500">
                    <div className="bxc__grid__image">
                        <img src={back_up_photos_and_videos} alt="back up photos and videos" />
                    </div>
                </section>
            </section>
            <section className="bxc__grid__spacing__large">
                <section className="bxc__grid__container bxc__grid__container--width-1500">
                    <div className="bxc__grid__row">
                        <section className="drive__devices bxc__grid__column bxc__grid__column__4__of__12 text-center">
                            <section className="bxc__grid__image">
                                <img src={drive_laptop_icon} alt="Laptop" />
                            </section>
                            <h2>Web</h2>
                            <p>
                                Organize your photos online <br/>
                                <Link to="/">Sign in</Link>
                            </p>
                        </section>
                        <section className="drive__devices bxc__grid__column bxc__grid__column__4__of__12 text-center">
                            <section className="bxc__grid__image">
                                <img src={drive_mobile_icon} alt="Mobile" />
                            </section>
                            <h2>Mobile</h2>
                            <section>
                                <p>
                                    Set Auto-Save to back up the photos and videos on your phone.<br/>
                                </p>
                                <p>
                                    Get the <Link to="/">iOS</Link> or <Link to="/">Android</Link> app
                                </p>
                            </section>
                        </section>
                        <section className="drive__devices bxc__grid__column bxc__grid__column__4__of__12 text-center">
                            <section className="bxc__grid__image">
                                <img src={drive_desktop_icon} alt="Laptop" />
                            </section>
                            <h2>Desktop</h2>
                            <p>
                                Organize your photos online <br/>
                                <Link to="/">Learn More</Link>
                            </p>
                        </section>
                    </div>
                </section>
            </section>
            <section className="bxc__grid__spacing__large">
                <section className="bxc__grid__container bxc__grid__container--width-1500">
                    <div className="bxc__grid__row">
                        <section className="bxc__grid__column bxc__grid__column__12__of__12">
                            <section className="bxc__grid__image">
                                <Link to="/">
                                    <img src={photos_ingress_banner} alt="Enjoy, organize, and share with Amazon Photos apps" />
                                </Link>
                            </section>
                        </section>
                    </div>
                </section>
            </section>
            <section className="bxc__grid__spacing__large">
                <section className="bxc__grid__container bxc__grid__container--width-1500">
                    <div className="bxc__grid__row">
                        <section className="bxc__grid__column bxc__grid__column__12__of__12 text-center">
                            <h2>Legacy Amazon Drive apps</h2>
                        </section>
                    </div>
                    <div className="bxc__grid__row">
                        <section className="bxc__grid__column bxc__grid__column__12__of__12 text-center">
                            <p>Looking for legacy Drive apps?</p>
                            <p>
                                <Link to="/">
                                    Sign in
                                </Link> on the web or get the mobile apps 
                                (<Link to="">iOS</Link> and <Link to="/">Android</Link>).
                            </p>
                        </section>
                    </div>
                </section>
            </section>
        </main>
    )

    return (
        <Layout>
            <AmazonDrivePage />
        </Layout>
    )
}

export default AmazonDrive
