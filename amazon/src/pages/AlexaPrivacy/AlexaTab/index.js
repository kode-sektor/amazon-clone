import React, { useState } from 'react'
import { Navbar, Nav, NavItem, NavLink, NavbarText, Collapse, TabContent, TabPane } from 'reactstrap'

import classnames from 'classnames'

import './index.css'

const AlexaTab = ({ tabContent, tab }) => {

    const [activeTab, setActiveTab] = useState("")

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <section className="alexa__mainTabs">
            <TabContent activeTab={activeTab}>
                {
                    tabContent.map(({ activeTab, heading, supportingHeading, img, alt }) => (
                        <TabPane tabId={activeTab} className={`alexa__mainTabPane ${activeTab}`}>
                            <section className="alexa__mainTabContent">
                                {
                                    img && (
                                        <section className="alexa__mainTabImg flex__container">
                                            <section className="padding__right__minibase">
                                                <div className="has__max__width">
                                                    <img src={img} alt={alt} />
                                                </div>
                                            </section>
                                        </section>
                                    )
                                }
                                <section className="alexa__mainTabImgTitle flex__container padding__left__xlarge align-content-start">
                                    <section className="padding__top__minibase padding__bottom__xsmall">
                                        <h1 className="alexa__mainTabHeading">
                                            {heading}
                                        </h1>
                                    </section>
                                    <section>
                                        <h2 className="alexa__mainTabSupportHeading">
                                            {supportingHeading}
                                        </h2>
                                    </section>
                                </section>
                            </section>
                        </TabPane>
                    ))
                }
                {   // Default tab pane to show
                    activeTab === "" && (
                        <TabPane tabId={activeTab} className={`alexa__mainTabPane alexa__defaultTabPane ${activeTab}`}>
                            <section className="alexa__defaultTabContent">
                                <div className="flex__container row">
                                    <section className="alexa__mainTab padding__top__minibase row">
                                        <div className="flex__container padding__left__small padding__right__small padding__bottom__xsmall col-8 offset-2">
                                            <h1 className="alexa__mainTabHeading col-8 offset-2">
                                            Alexa and Echo devices are designed to protect your privacy
                                            </h1>
                                        </div>
                                    </section>
                                </div>
                            </section>
                        </TabPane>
                    )
                }
            </TabContent>
            <section className="alexa__mainTabBtns">
                <Nav tabs className="p-0 m-0 justify-content-center">
                    {
                        tab.map(({ active, img, title }) => (
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === {active} })}
                                    onClick={() => { toggle(active) }}
                                >
                                    <img className="tab__image" src={img} alt="Interactive Hero Button" />
                                    <span className="tab__text">{title}</span>
                                </NavLink>
                            </NavItem>
                        ))
                    }
                </Nav>
            </section>
        </section>
    )
}

export default AlexaTab
