import React from 'react'
import { Link } from 'react-router-dom'

import host_a_locker_banner from '../../images/host-a-locker-banner.jpg'
import interested_in_hosting from '../../images/interested-in-hosting.png'
import what_are_lockers from '../../images/what-are-lockers.png'
import how_to_use from '../../images/how-to-use.png'
import location_placement_requirements from '../../images/location-placement-requirements.png'
import amazon_locker_sizes from '../../images/amazon-locker-sizes.png'
import us_locker_sample_5_v_2 from '../../images/us-locker-sample-5-v-2.jpg'
import us_locker_sample_3_v_2 from '../../images/us-locker-sample-3-v-2.jpg'
import us_locker_sample_1_v_2 from '../../images/us-locker-sample-1-v-2.jpg'

import Layout from '../../components/Layout'

import './index.css'

const AmazonHub = () => {
    return (
        <Layout>
            <div className="amazonHub--page a__container">
                 <section className="bxc__grid__spacing__large">
                    <section className="bxc__grid__container bxc__grid__container__width__1500">
                        <section className="bxc__grid__row bxc__grid__row__light">
                            <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="bxc__grid__image bxc__grid__image__light">
                                        <Link to="/">
                                            <img src={host_a_locker_banner} alt="host a locker banner" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__row bxc__grid__row__light">
                            <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="bxc__grid__image bxc__grid__image__light">
                                        <Link to="/">
                                            <img src={interested_in_hosting} alt="interested in hosting" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__row bxc__grid__row__light">
                            <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="bxc__grid__image bxc__grid__image__light">
                                        <Link to="/">
                                            <img src={what_are_lockers} alt="what are lockers" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__row bxc__grid__row__light">
                            <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="bxc__grid__image bxc__grid__image__light">
                                        <Link to="/">
                                            <img src={how_to_use} alt="how to use" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__row bxc__grid__row__light">
                            <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="bxc__grid__image bxc__grid__image__light">
                                        <Link to="/">
                                            <img src={location_placement_requirements} alt="location placement requirements" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__row bxc__grid__row__light">
                            <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="bxc__grid__image bxc__grid__image__light">
                                        <Link to="/">
                                            <img src={amazon_locker_sizes} alt="amazon locker sizes" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__row bxc__grid__row__light">
                            <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="text-center">
                                        <h2 className="pb-0">Amazon Locker sample locations</h2>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__row bxc__grid__row__light">
                            <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <Link to="/">
                                        <img src={us_locker_sample_5_v_2} alt="Amazon Locker location 1" />
                                    </Link>
                                </div>
                            </div>
                            <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <Link to="/">
                                        <img src={us_locker_sample_3_v_2} alt="Amazon Locker location 2" />
                                    </Link>
                                </div>
                            </div>
                            <div className="bxc__grid__column bxc__grid__column__4__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <Link to="/">
                                        <img src={us_locker_sample_1_v_2} alt="Amazon Locker location 3" />
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__row bxc__grid__row__light">
                            <div className="bxc__grid__column bxc__grid__column__12__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="text-center">
                                        <h2 className="pb-0">Frequently Asked Questions</h2>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__row bxc__grid__row__light">
                            <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="text-center">
                                        <h3 className="pb-0">What is an Amazon Hub Locker?</h3>
                                        <p>
                                            Amazon Hub Locker is a fully automated, secure and convenient delivery solution for customers to pick up or return their Amazon packages at no additional cost. Delivery to a Locker is available for the tens of millions of items sold on Amazon. Using a Locker is easy and secure – after shopping on Amazon, customers proceed to checkout and select an Amazon Hub Locker available in their zip code as their delivery location. Once a package is ready for pickup, customers receive an e-mail with a barcode and a unique 6-digit code that they’ll use to remove the package from the designated slot.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="text-center">
                                        <h3 className="pb-0">What happens if a customer has an issue when using a Locker?</h3>
                                        <p>
                                            Amazon offers customer service 24 hours a day, 7 days a week. The direct Amazon Hub Locker customer service phone number is also printed on every Locker.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bxc__grid__row bxc__grid__row__light">
                            <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="text-center">
                                        <h3 className="pb-0">How much does it cost to host an Amazon Hub Locker?</h3>
                                        <p>
                                            Joining our worldwide Amazon Hub network is free of cost. Amazon covers the cost of manufacturing, shipping, installing, and maintaining the Locker so you can focus on what you do best: serving the new customers coming through your doors!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bxc__grid__column bxc__grid__column__6__of__12 bxc__grid__column__light">
                                <div className="bxc__grid__content bxc__grid__content__light">
                                    <div className="text-center">
                                        <h3 className="pb-0">How can I add myself to the Do Not Call List?</h3>
                                        <p>
                                            You can click on <Link to="/">this link</Link> and fill in your details. Once you have confirmed, you will be added to our do not call list and neither Amazon nor its partners will contact you regarding Amazon Hub.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </div>
        </Layout>
    )
}

export default AmazonHub
