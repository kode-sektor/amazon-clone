import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout/index'

import { BrowseBoxSimple, BrowseCheckbox, BrowseBoxPrimary, BrowseBoxPlain } from '../../components/UI/BrowseBox'

import './index.css'

const GiftCards = () => {
    return (
        <Layout>
            <section className="a__container">
                <section className="giftCards d-flex mx-0 flex-fill">
                    <section className="giftCards__browsebox browserBox">
                        <BrowseBoxSimple 
                            title={"Seasonal events"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Birthday"
                                    },
                                    {
                                        href : "/",
                                        text : "Thank You"
                                    },
                                    {
                                        href : "/",
                                        text : "Holidays"
                                    },
                                    {
                                        href : "/",
                                        text : "All occasions"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Language"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "English"
                                    },
                                    {
                                        href : "/",
                                        text : "French"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPrimary
                            title={"Department"}
                            links={
                                [
                                    {
                                        text : "Gift Card",
                                        indentClass : "a__indent__1"
                                    },
                                    {
                                        href : "/",
                                        text : "Gift Cards",
                                        indentClass : "a__indent__2"
                                    }
                                ]
                            }
                        />
                        <BrowseBoxPlain
                            title={"Delivery Type"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Email Gift Cards",
                                    },
                                    {
                                        href : "/",
                                        text : "Mail",
                                    },
                                    {
                                        href : "/",
                                        text : "Print at Home"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Featured Brands"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Amazon.com.ca, Inc."
                                    },
                                    {
                                        href : "/",
                                        text : "Valve"
                                    },
                                    {
                                        href : "/",
                                        text : "Ricoh"
                                    },
                                    {
                                        href : "/",
                                        text : "BAOLI"
                                    },
                                    {
                                        href : "/",
                                        text : "Accent Design Paper Accents"
                                    },
                                    {
                                        href : "/",
                                        text : "AMERICAN GREETINGS"
                                    },
                                    {
                                        href : "/",
                                        text : "Birthday Gifts For All"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Occasion"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Birthday"
                                    },
                                    {
                                        href : "/",
                                        text : "Christmans"
                                    },
                                    {
                                        href : "/",
                                        text : "Congratulations"
                                    },
                                    {
                                        href : "/",
                                        text : "Father's Day"
                                    },
                                    {
                                        href : "/",
                                        text : "Friendship"
                                    },
                                    {
                                        href : "/",
                                        text : "Just Because"
                                    },
                                    {
                                        href : "/",
                                        text : "Thank You & Appreciation"
                                    }
                                ]
                            }
                        />
                        <BrowseCheckbox
                            title={"Recipient"}
                            links={
                                [
                                    {
                                        href : "/",
                                        text : "Co-Worker"
                                    },
                                    {
                                        href : "/",
                                        text : "For Her"
                                    },
                                    {
                                        href : "/",
                                        text : "For Him"
                                    },
                                    {
                                        href : "/",
                                        text : "Friends"
                                    },
                                    {
                                        href : "/",
                                        text : "Grandparents"
                                    },
                                    {
                                        href : "/",
                                        text : "Kids"
                                    },
                                    {
                                        href : "/",
                                        text : "Teens"
                                    }
                                ]
                            }
                        />
                    </section>
                    <section className="apBrowse">
                        
                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default GiftCards
