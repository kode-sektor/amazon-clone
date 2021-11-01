import React from 'react'

import Layout from '../../components/Layout'

import { DropdownMyx } from '../../components/UI/DropdownMenu'
import SearchContent from '../../components/UI/Search'

import './index.css'

const ContentAndDevices = () => {

    const ContentAndDevicesPage = () => (
        <section className="contentDevices--page">
            <div className="desktopMargin__myx">
                <nav className="navHeader__alexa__myx">
                    <h1 className="navHeader__title__myx navHeader__title__style__myx d-inline">
                        Manage Your Content and Devices
                    </h1>
                    <section className="navOptions__alexa__myx">
                        <div className="navOptionContainer__alexa__myx">
                            <div className="navOptionItem__alexa__myx" title="Content">
                                Content
                            </div>
                        </div>
                        <div className="navOptionContainer__alexa__myx">
                            <div className="navOptionItem__alexa__myx" title="Devices">
                                Devices
                            </div>
                        </div>
                        <div className="navOptionContainer__alexa__myx">
                            <div className="navOptionItem__alexa__myx" title="Preferences">
                                Preferences
                            </div>
                        </div>
                        <div className="navOptionContainer__alexa__myx">
                            <div className="navOptionItem__alexa__myx" title="Privacy Settings">
                                Privacy Settings
                            </div>
                            <div className="navOptionChildrenContainer__alexa__myx">
                                <div className="navOptionChildItem__alexa__myx">
                                    Alexa Privacy
                                </div>
                                <div className="navOptionChildItem__alexa__myx">
                                    Amazon Devices Privacy
                                </div>
                            </div>
                        </div>
                    </section>
                </nav>
                <section className="contentTaskBarDetails__myx">
                    <div className="row">
                        <section className="col-8 d-flex">
                            <section className="contentTaskBarItem__myx">
                                <span className="myx__viewOptions__list__label">
                                    Show:
                                </span>
                                <DropdownMyx
                                    text={"Books"}
                                    dropdown={
                                                [
                                                    {
                                                        dropdown : "Books"
                                                    },
                                                    {
                                                        dropdown : "AudioBooks"
                                                    },
                                                    {
                                                        dropdown : "Apps"
                                                    },
                                                    {
                                                        dropdown : "Docs"
                                                    },
                                                    {
                                                        dropdown : "Dictionary & User Guides"
                                                    },
                                                    {
                                                        dropdown : "Collections"
                                                    },
                                                    {
                                                        dropdown : "Kindle Unlimited"
                                                    },
                                                    {
                                                        dropdown : "Prime Reading"
                                                    },
                                                    {
                                                        dropdown : "Pending Deliveries"
                                                    }
                                                ]
                                    }
                                />&nbsp;
                                <DropdownMyx
                                    text={"All"}
                                    dropdown={
                                                [
                                                    {
                                                        dropdown : "All"
                                                    },
                                                    {
                                                        dropdown : "Purchases"
                                                    },
                                                    {
                                                        dropdown : "Samples"
                                                    },
                                                    {
                                                        dropdown : "Borrows"
                                                    }
                                                ]
                                    }
                                />&nbsp;
                            </section>
                            <section className="contentTaskBarItem__myx">
                                <span className="myx__viewOptions__list__label">
                                    Sort By:
                                </span>
                                <DropdownMyx
                                    text={"Purchase Date: Newest-Oldest"}
                                    dropdown={
                                                [
                                                    {
                                                        dropdown : "Title: A-Z"
                                                    },
                                                    {
                                                        dropdown : "Title: Z-A"
                                                    },
                                                    {
                                                        dropdown : "Author: A-Z"
                                                    },
                                                    {
                                                        dropdown : "Author: Z-A"
                                                    },
                                                    {
                                                        dropdown : "Purchase Date: Oldest-Newest"
                                                    },
                                                    {
                                                        dropdown : "Purchase Date: Newest-Oldest"
                                                    }
                                                ]
                                    }
                                />&nbsp;
                            </section>
                        </section>
                        <section className="col-4 text-right">
                            <SearchContent/>
                        </section>
                    </div>
                </section>
                <section className="horizontalCenter__myx">
                    <div className="contentTaskBarDetails__myx">
                        <div className="contentCount__myx inline__myx">
                            Showing <b> Books--All</b> (0)
                        </div>
                        <hr />
                        <section className="noItemsFoundMsg__myx text-center myx__color__base">
                            No Items Found
                        </section>
                    </div>
                </section>
            </div>
        </section>
    )

    return (
        <Layout>
            <ContentAndDevicesPage />
        </Layout>
    )
}

export default ContentAndDevices
