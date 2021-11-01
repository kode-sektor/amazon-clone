import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaCaretDown, FaExclamationTriangle } from 'react-icons/fa'
import { TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames';

import Layout from '../../components/Layout'

import { DropdownMyx, DropdownView } from '../../components/UI/DropdownMenu'
import { SearchContent, SearchBoxOne } from '../../components/UI/Search'
import { FilterSeparator } from '../../components/UI/Icons'

import './index.css'

const ContentAndDevices = () => {

    const [activeTab, setActiveTab] = useState("content");

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const ContentAndDevicesPage = () => (
        <section className="contentDevices--page">
            <div className="desktopMargin__myx">
                <nav className="navHeader__alexa__myx" tabs>
                    <h1 className="navHeader__title__myx navHeader__title__style__myx d-inline">
                        Manage Your Content and Devices
                    </h1>
                    <section className="navOptions__alexa__myx">
                        <div className="navOptionContainer__alexa__myx">
                            <div className="navOptionItem__alexa__myx" title="Content"
                                className={classnames({ active: activeTab === 'content' }, "navOptionItem__alexa__myx" )} role="button"
                                onClick={() => { toggle('content'); }}>
                                Content
                            </div>
                        </div>
                        <div className="navOptionContainer__alexa__myx">
                            <div className="navOptionItem__alexa__myx" title="Devices"
                                className={classnames({ active: activeTab === 'devices' }, "navOptionItem__alexa__myx" )} role="button"
                                onClick={() => { toggle('devices'); }}>
                                Devices
                            </div>
                        </div>
                        <div className="navOptionContainer__alexa__myx">
                            <div className="navOptionItem__alexa__myx" title="Preferences"
                                className={classnames({ active: activeTab === 'preferences' }, "navOptionItem__alexa__myx" )} role="button"
                                onClick={() => { toggle('preferences'); }}>
                                Preferences
                            </div>
                        </div>
                        <div className="navOptionContainer__alexa__myx">
                            <div className="navOptionItem__alexa__myx" title="Privacy Settings"
                                className={classnames({ active: activeTab === 'privacy-settings' }, "navOptionItem__alexa__myx" )} role="button"
                                onClick={() => { toggle('privacy-settings'); }}>
                                Privacy Settings
                            </div>
                            <div className="navOptionChildrenContainer__alexa__myx">
                                <div className="navOptionChildItem__alexa__myx"
                                    className={classnames({ active: activeTab === 'alexa-privacy' }, "navOptionChildItem__alexa__myx" )} role="button"
                                    onClick={() => { toggle('alexa-privacy'); }}>
                                    Alexa Privacy
                                </div>
                                <div className="navOptionChildItem__alexa__myx"
                                    className={classnames({ active: activeTab === 'amazon-devices-privacy' }, "navOptionChildItem__alexa__myx" )} role="button"
                                    onClick={() => { toggle('amazon-devices-privacy'); }}>
                                    Amazon Devices Privacy
                                </div>
                            </div>
                        </div>
                    </section>
                </nav>
                <section className="horizontalCenter__myx">
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="content" tag="section">
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
                                        <SearchContent />
                                    </section>
                                </div>
                            </section>
                            <div className="contentTaskBarDetails__myx contentTaskBarDetails__tab">
                                <div className="contentCount__myx inline__myx">
                                    Showing <b> Books--All</b> (0)
                                </div>
                                <hr />
                                <section className="noItemsFoundMsg__myx text-center myx__color__base">
                                    No Items Found
                                </section>
                            </div>
                        </TabPane>
                        <TabPane className="contentDevices__tab text-center myx__color__base" tabId="devices" tag="section">
                            <section className="body__inner">
                                <span className="page__title">
                                    Devices
                                </span>
                                <section className="actions__container">
                                    <section className="actions__containerTable">
                                        <DropdownView 
                                            title={"View"}
                                            trigger={
                                                <>
                                                    <div className="dropdownView__text d-inline-block">
                                                        All devices and apps
                                                    </div>
                                                    <FaCaretDown />
                                                </>
                                            }
                                            dropdown={
                                                <>
                                                    <ul className="ml-0">
                                                        <li>
                                                            <label class="checkbox__container">
                                                                <input type="checkbox" checked="checked" />
                                                                <span className="checkmark" ></span>
                                                                <span>Amazon devices</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label class="checkbox__container">
                                                                <input type="checkbox" checked="checked" />
                                                                <span className="checkmark" ></span>
                                                                <span>Amazon apps</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label class="checkbox__container">
                                                                <input type="checkbox" checked="checked" />
                                                                <span className="checkmark" ></span>
                                                                <span>Non-Amazon devices</span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </>
                                            }
                                        />
                                        <FilterSeparator />
                                        <DropdownView 
                                            title={"Last Registered On"}
                                            trigger={
                                                <>
                                                    <div className="dropdownView__text d-inline-block">
                                                        All time
                                                    </div>
                                                    <FaCaretDown />
                                                </>
                                            }
                                            dropdown={
                                                <>
                                                    <h5 class="dropdownView__title">
                                                        Devices and apps
                                                    </h5>
                                                    <ul className="ml-0">
                                                        <li>
                                                            <label class="radio__container">
                                                                <input type="radio" name="today" />
                                                                <span className="radio" ></span>
                                                                <span className="radio__label">Today</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label class="radio__container">
                                                                <input type="radio" name="yesterday" />
                                                                <span className="radio" ></span>
                                                                <span className="radio__label">Yesterday</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label class="radio__container">
                                                                <input type="radio" name="this-week" />
                                                                <span className="radio" ></span>
                                                                <span className="radio__label">This week</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label class="radio__container">
                                                                <input type="radio" name="all-time" checked="checked" />
                                                                <span className="radio" ></span>
                                                                <span className="radio__label">All Time</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label class="radio__container">
                                                                <input type="radio" name="custom" />
                                                                <span className="radio" ></span>
                                                                <span className="radio__label">Custom</span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </>
                                            }
                                        />
                                    </section>
                                    <section className="ml-auto">
                                        <SearchBoxOne />
                                    </section>
                                </section>
                                <div className="separator"></div>
                                <section className="no__result__found">
                                    <FaExclamationTriangle className="fa__exclamation__triangle" />
                                    <span>No Results found</span>
                                </section>
                            </section>
                        </TabPane>
                    </TabContent>
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
