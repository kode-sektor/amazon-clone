import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaCaretUp, FaCaretDown, FaExclamationTriangle } from 'react-icons/fa'
import { TabContent, TabPane } from 'reactstrap'
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

import classnames from 'classnames'

import Layout from '../../components/Layout'

import { DropdownMyx, DropdownView } from '../../components/UI/DropdownMenu'
import { SearchContent, SearchBoxOne } from '../../components/UI/Search'
import { FilterSeparator } from '../../components/UI/Icons'
import { MyxBtn } from '../../components/UI/Button'
import Preferences from '../../components/UI/Preferences'

import myxpshalx from '../../images/myxpshalx.png'
import myxpshdpv from '../../images/myxpshdpv.png'
import mycd_device_privacy_alldevices_filter from '../../images/mycd-device-privacy-alldevices-filter.png'
import mycd_device_privacy_firetv_filter from '../../images/mycd-device-privacy-firetv-filter.png'
import mycd_device_privacy_firetablet_filter from '../../images/mycd-device-privacy-firetablet-filter.png'
import mycd_device_privacy_kindle_filter from '../../images/mycd-device-privacy-kindle-filter.png'

import Card from './Card'
import DropdownChild from './DropdownChild'

import './index.css'

const ContentAndDevices = () => {

    const [activeTab, setActiveTab] = useState("content")
    const [defaultSlide, setDefaultSlide] = useState(true)

    const [open, setOpen] = useState(false)

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab)
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDevices = () => setDropdownOpen(prevState => !prevState);

    const ContentAndDevicesPage = () => (
        <section className="contentDevices--page">
            <div className={`desktopMargin__myx ${(activeTab === "privacy-settings" || activeTab === "amazon-devices-privacy") ? "shrink" : ""}`}>
                <nav className="navHeader__alexa__myx" tabs>
                    <h1 className="navHeader__title__myx navHeader__title__style__myx d-inline">
                        Manage Your Content and Devices
                    </h1>
                    <section className="navOptions__alexa__myx">
                        <div className="navOptionContainer__alexa__myx">
                            <div className="navOptionItem__alexa__myx" title="Content"
                                className={classnames({ active: activeTab === 'content' }, "navOptionItem__alexa__myx" )} role="button"
                                onClick={() => { toggle('content') }}>
                                Content
                            </div>
                        </div>
                        <div className="navOptionContainer__alexa__myx">
                            <div className="navOptionItem__alexa__myx" title="Devices"
                                className={classnames({ active: activeTab === 'devices' }, "navOptionItem__alexa__myx" )} role="button"
                                onClick={() => { toggle('devices') }}>
                                Devices
                            </div>
                        </div>
                        <div className="navOptionContainer__alexa__myx">
                            <div className="navOptionItem__alexa__myx" title="Preferences"
                                className={classnames({ active: activeTab === 'preferences' }, "navOptionItem__alexa__myx" )} role="button"
                                onClick={() => { toggle('preferences') }}>
                                Preferences
                            </div>
                        </div>
                        <div className="navOptionContainer__alexa__myx">
                            <div className="navOptionItem__alexa__myx" title="Privacy Settings"
                                className={classnames({ active: activeTab === 'privacy-settings' }, "navOptionItem__alexa__myx" )} role="button"
                                onClick={() => { toggle('privacy-settings') }}>
                                Privacy Settings
                            </div>
                            <div className="navOptionChildrenContainer__alexa__myx">
                                <Link to="/alexa-privacy" className="navOptionChildItem__alexa__myx link__default">
                                    Alexa Privacy
                                </Link>
                                <div className="navOptionChildItem__alexa__myx" onClick={() => { toggle('amazon-devices-privacy') }} role="button">
                                    <Link href="javascript:void(0)" className="link__default">
                                        Amazon Devices Privacy
                                    </Link>
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
                        <TabPane tabId="devices" className="contentDevices__tab text-center myx__color__base" tag="section">
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
                                                            <label className="checkbox__container">
                                                                <input type="checkbox" checked="checked" />
                                                                <span className="checkmark" ></span>
                                                                <span>Amazon devices</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="checkbox__container">
                                                                <input type="checkbox" checked="checked" />
                                                                <span className="checkmark" ></span>
                                                                <span>Amazon apps</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="checkbox__container">
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
                                                    <h5 className="dropdownView__title">
                                                        Devices and apps
                                                    </h5>
                                                    <ul className="ml-0">
                                                        <li>
                                                            <label className="radio__container">
                                                                <input type="radio" name="today" />
                                                                <span className="radio" ></span>
                                                                <span className="radio__label">Today</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="radio__container">
                                                                <input type="radio" name="yesterday" />
                                                                <span className="radio" ></span>
                                                                <span className="radio__label">Yesterday</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="radio__container">
                                                                <input type="radio" name="this-week" />
                                                                <span className="radio" ></span>
                                                                <span className="radio__label">This week</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="radio__container">
                                                                <input type="radio" name="all-time" checked="checked" />
                                                                <span className="radio" ></span>
                                                                <span className="radio__label">All Time</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="radio__container">
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
                        <TabPane tabId="preferences" tag="section">
                            <div className="settingsApp__myx">
                                <Preferences
                                    heading={"Digital Payment Settings"}
                                    title={"All Kindle transactions are completed with 1-Click.  Changes made to your default 1-Click method will apply to future Amazon.ca 1-Click transactions."}
                                    body={
                                        <section className="settings__myx">
                                            <div className="inline__myx editSettings__myx valign__myx">
                                                <div className="myx__size__small myx__color__secondary">
                                                    Your Default 1-Click Payment Method 
                                                </div>
                                                <div className="myx__size__medium myx__color__base"> Visa ending in 4895 </div>
                                            </div>
                                            <MyxBtn 
                                                text={"Edit Payment Method"}
                                            />
                                        </section>
                                    }
                                    action={"Change your 1-Click payment setting"}
                                    defaultSlide={defaultSlide}
                                />
                                <Preferences
                                    heading={"Country/Region Settings"}
                                    body={
                                        <section className="settings__myx">
                                            <div className="inline__myx editSettings__myx valign__myx">
                                                <div className="myx__size__small myx__color__secondary">
                                                    Current country/region
                                                </div>
                                                <div className="myx__size__medium myx__color__base"> Canada </div>
                                            </div>
                                            <MyxBtn 
                                                text={"Change"}
                                            />
                                            <div className="cor__spacing__base cor__spacing__top">
                                                <div className="myx__spacing__base">
                                                    <p className="myx__color__base myx__size__base myx__spacing__medium">
                                                        You are currently linked to shop on Amazon.ca. Click 
                                                        <Link to="/" className="myx__color__link"> here</Link> to learn more about other Amazon sites you are eligible to shop on based on your country/region of residence.
                                                    </p>
                                                </div>
                                            </div>
                                        </section>
                                    }
                                    action={"Change your country/region"}
                                />
                                <Preferences
                                    heading={"Saved Wi-Fi Passwords"}
                                    title={
                                            <div className="myx__spacing__large">
                                                Your saved Wi-Fi passwords allow you to configure compatible devices so that you won't need to re-enter your Wi-Fi password on each device. Once saved to Amazon, your Wi-Fi passwords are sent over a secured connection and are stored in an encrypted file on an Amazon server. Amazon will only use your Wi-Fi passwords to connect your compatible devices and will not share them with any third party without your permission. <Link to="/" className="a__browser__link">Learn more</Link>
                                            </div>
                                    }
                                    body={
                                        <>
                                            <section className="settings__myx">
                                                <section className="myx__spacing__large">
                                                    <div className="inline__myx editSettings__myx valign__myx">
                                                        <div className="myx__size__small myx__color__secondary">
                                                            Your Saved Wi-Fi Passwords 
                                                        </div>
                                                        <div className="myx__size__medium myx__color__base"> All Devices </div>
                                                    </div>
                                                    <MyxBtn 
                                                        text={"Delete"}
                                                        disabled={true}
                                                    />
                                                </section>
                                            </section>
                                            <section className="myx__spacing__small">
                                                <h4 className="myx__spacing__small"> Frustration-free setup </h4>
                                                <p className="myx__spacing__large">
                                                    Enable this setting to allow eligible devices associated with your account to automatically connect or reconnect to your network, using Wi-Fi passwords that you have saved to Amazon.
                                                </p>
                                            </section>
                                            <section className="settings__myx">
                                                <div className="inline__myx"> Frustration-Free Setup is enabled </div>&nbsp;&nbsp;
                                                <MyxBtn 
                                                    text={"Disable"}
                                                />
                                            </section>
                                        </>
                                    }
                                    action={"Delete Saved Wi-Fi Passwords"}
                                />
                                <Preferences
                                    heading={"Automatic Book Updates"}
                                    title={
                                            <>
                                                <div className="myx__spacing__small">
                                                    With automatic book updates ON you will receive the most up to date and fully featured version of the Books you own. In order to preserve your reading progress, bookmarks, notes, highlights and annotations across different versions of books, make sure that all of your Kindle devices and reading apps have “Annotations Backup” or “Whispersync for Books” turned on.
                                                </div>
                                                <div className="myx__spacing__small">
                                                    If you choose to turn it OFF, you will no longer receive book updates automatically. 
                                                </div>
                                            </>
                                    }
                                    body={
                                        <section className="settings__myx">
                                            <div className="inline__myx editSettings__myx valign__myx">
                                                <div className="myx__size__small myx__color__secondary myx__spacing__small">
                                                    Automatic Book Update
                                                </div>
                                                <MyxBtn 
                                                    text={"ON"}
                                                    type={"dropdown"}
                                                />
                                                <span className="myx__size__small myx__color__base wordWrap__myx customerName__myx inline__myx ng__binding">for Kay</span>
                                            </div>
                                        </section>
                                    }
                                    action={"Change your automatic book updates setting"}
                                />
                                <Preferences
                                    heading={"Personal Document Settings"}
                                    title={
                                        <>
                                            <div className="myx__spacing-small">
                                                Kindle Personal Documents service makes it easy to take your personal documents with you, eliminating the need to print. You and your approved contacts can send documents to your Kindle by e-mailing the documents to your Send-to-Kindle e-mail address. <Link to="/" className="a__browser__link">Learn more</Link>
                                            </div>
                                        </>
                                }
                                    body={
                                        <section>
                                            <h5 className="myx__spacing__small ng-scope ng-binding"> The following will help keep your Send to Kindle email address secure: </h5>
                                            <section className="myx__spacing__large ng-scope"> 
                                                <ul className="a__unordered__list">
                                                    <li className="myx__color__base"> 
                                                        &nbsp;Ensure your Send-to-Kindle email address is different than any other email addresses you use. 
                                                    </li> 
                                                    <li className="myx__color__base"> 
                                                        &nbsp;Use a combination of uppercase letters, lowercase letters, and numbers. 
                                                    </li>
                                                    <li className="myx__color__base"> 
                                                        &nbsp;Avoid including any personally identifiable information. 
                                                    </li> 
                                                </ul> 
                                            </section>
                                            <section className="myx__spacing__large row">
                                                <section className="myx__spacing__small col-5">
                                                    <h4 className="myx__spacing__small"> Personal Document Archiving </h4>
                                                    <p>
                                                        When this option is enabled, personal documents sent to your <b>Send-to-Kindle e-mail address</b> will also be added to your Kindle library.
                                                    </p>
                                                    <p>
                                                        <Link to="/" target="_parent">Learn more</Link>
                                                    </p>
                                                    <p className="d-inline mb-0">Archiving is </p>
                                                    <strong className="d-inline myx__color__state">Enabled</strong>&nbsp;
                                                    <MyxBtn 
                                                        text={"Edit Archive Settings"}
                                                        mode={"myx__button__small"}
                                                    />
                                                </section>
                                            </section>
                                            <section className="myx__spacing__large">
                                                <h4 className="myx__spacing__small"> Approved Personal Document E-mail List </h4>
                                                <p className="myx__spacing__large">
                                                    To prevent spam, your Kindle will only receive files from the following e-mail addresses you have authorized. <Link to="/" target="_parent">Learn more</Link>
                                                </p>
                                                <table class="myx__bordered myx__spacing__small"> 
                                                    <tbody> 
                                                        <tr> 
                                                            <th>E-mail address</th>
                                                            <th>Actions</th> 
                                                        </tr> 
                                                    </tbody>
                                                </table>
                                                <p>
                                                    <Link to="/" className="myx__color__link">
                                                        Add a new approved e-mail address
                                                    </Link>
                                                </p>
                                            </section>
                                        </section>
                                    }
                                    action={"Manage Send-to-Kindle email settings, personal documents, and Whispernet Delivery Options"}
                                />
                            </div>
                        </TabPane>
                        <TabPane tabId="privacy-settings" className="contentPrivacySettings__tab text-center" tag="section">
                            <section className="contentPrivacy__module ">
                                <header className="contentPrivacy__header">
                                    <h1 className="contentPrivacy__title">
                                        Privacy settings
                                    </h1>
                                    <div className="contentPrivacy__settings">
                                        View and manage privacy settings for Alexa and for certain Amazon Devices
                                    </div>
                                </header>
                                <section className="contentPrivacy__moduleCard">
                                    <section className="row mx-0">
                                        <Card 
                                            img={
                                                <img src={myxpshalx} alt="myxpshalx" style={{height: "103px", width: "103px"}} />
                                            }
                                            title={"Alexa Privacy"}
                                        />
                                        <Card 
                                            img={
                                                <img src={myxpshdpv} alt="myxpshdpv" style={{height: "103px", width: "103px"}} />
                                            }
                                            title={"Amazon Devices Privacy"}
                                        />
                                    </section>
                                </section>
                                <section className="contentPrivacy__setting">
                                    You can add an additional layer of security to your Amazon account by enabling <Link to="/" className="a__browser__link">Two-Step verfication</Link>
                                </section>
                            </section>
                        </TabPane>
                        <TabPane tabId="amazon-devices-privacy" className="contentAmazonPrivacy" tag="section">
                            <section className="contentAmazonPrivacy__module">
                                <nav className="contentAmazonPrivacy__nav">
                                    <Link to="/" className="breadcrumbs__modulePath">
                                        Privacy settings
                                    </Link>
                                    <span className="breadcrumbs__moduleSeparator">&#62;</span>
                                    <Link to="/" className="breadcrumbs__moduleCurrentPath">
                                        Amazon Devices Privacy
                                    </Link>
                                </nav>
                                <header className="contentAmazonPrivacy__header">
                                    Amazon Devices Privacy
                                </header>
                                <section className="contentAmazonPrivacy__body">
                                    <h3 className="contentAmazonPrivacy__subHeading">
                                        Select device
                                    </h3>
                                    <section className="contentAmazonPrivacy__scroll">
                                        <section className="contentAmazonPrivacy__dropdown">
                                            <section className="contentAmazonPrivacy__filter">
                                                Devices with Privacy Settings:
                                            </section>
                                            <section className="contentAmazonPrivacy__familyFilter">
                                                <Dropdown className="dropdown__privacy" isOpen={dropdownOpen} toggle={toggleDevices} tag="section">
                                                    <DropdownToggle tag="span" role="button">
                                                        <div className="d-flex align-items-center h-100">
                                                            <label htmlFor="">
                                                                <img src={mycd_device_privacy_alldevices_filter} alt="mycd device privacy alldevices filter" />
                                                                <span className="contentAmazonPrivacy__titleFilter">
                                                                    <span>All devices</span>
                                                                    <font> (0)</font>
                                                                </span>
                                                            </label>
                                                            <div className="contentAmazonPrivacy__flexibleDropdown d-flex align-items-center flex-column">
                                                                <FaCaretUp/>
                                                                <FaCaretDown />
                                                            </div>
                                                        </div>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownChild
                                                            img={
                                                                    <img src={mycd_device_privacy_alldevices_filter} alt="mycd device privacy alldevices filter" />
                                                                }
                                                            filter={
                                                                    <span className="contentAmazonPrivacy__titleFilter">
                                                                        <span>All devices</span>
                                                                        <font> (0)</font>
                                                                    </span>
                                                            }
                                                        />
                                                        <DropdownChild
                                                            img={
                                                                    <img src={mycd_device_privacy_firetv_filter} alt="mycd device privacy firetv filter" />
                                                                }
                                                            filter={
                                                                    <span className="contentAmazonPrivacy__titleFilter">
                                                                        <span>Fire TV</span>
                                                                        <font> (0)</font>
                                                                    </span>
                                                            }
                                                        />
                                                        <DropdownChild
                                                            img={
                                                                    <img src={mycd_device_privacy_firetablet_filter} alt="mycd device privacy firetablet filter" />
                                                                }
                                                            filter={
                                                                    <span className="contentAmazonPrivacy__titleFilter">
                                                                        <span>Fire Tablet</span>
                                                                        <font> (0)</font>
                                                                    </span>
                                                            }
                                                        />
                                                        <DropdownChild
                                                            img={
                                                                    <img src={mycd_device_privacy_kindle_filter} alt="mycd device privacy kindle filter" />
                                                                }
                                                            filter={
                                                                    <span className="contentAmazonPrivacy__titleFilter">
                                                                        <span>Kindle</span>
                                                                        <font> (0)</font>
                                                                    </span>
                                                            }
                                                        />
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </section>
                                        </section>
                                        <section className="contentAmazonPrivacy__buttonScroller">
                                            <div>
                                                <span></span>
                                            </div>
                                        </section>
                                        <section className="contentAmazonPrivacy__productScroller">
                                            <span>
                                                You don't have any Amazon devices registered to your account for which you can view and manage privacy settings from here..
                                            </span>
                                        </section>
                                        <section className="contentAmazonPrivacy__buttonScrollerRight">
                                            <div>
                                                <span></span>
                                            </div>
                                        </section>
                                    </section>
                                    <section className="contentAmazonPrivacy__faq justify-content-between">
                                        <Link to="/" className="a__browser__link">
                                            Frequently asked questions
                                        </Link>
                                        <p>
                                            You can add an additional layer of security to your Amazon account by enabling <Link to="/" className="a__browser__link">Two-Step verfication</Link>
                                        </p>
                                    </section>
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
