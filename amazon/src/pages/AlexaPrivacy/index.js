import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Nav, NavItem, NavLink, NavbarText, Collapse, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames'

import Layout from '../../components/Layout'
import { StickHeader } from '../../utilities/functions'

import wakeword from '../../images/wakeword.svg'
import indicator from '../../images/indicator.svg'
import mute from '../../images/mute.svg'
import smart from '../../images/smart.svg'
import recordings from '../../images/recordings.svg'
import wakeword_graphic from '../../images/wakeword-graphic.png'
import indicators_graphic from '../../images/indicators-graphic.png'
import cam_controls_graphic from '../../images/cam-controls-graphic.png'
import manage_rec_graphic from '../../images/manage-rec-graphic.png'

import AlexaTab from './AlexaTab'

import './index.css'

const AlexaPrivacy = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [defaultSlide, setDefaultSlide] = useState(true)

    const [open, setOpen] = useState(false)


    const AlexaPrivacyPage = () => (
        <main className="a__container">
            <section className="alexa__privacy--page">
                <StickHeader>
                    <Navbar className="alexa__privacy__header">
                        <Nav className="has__max__width mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/alexa-privacy/">Alexa Privacy</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/privacy-settings/">Privacy Settings</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/common-questions">Common Questions</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/more-resources">More Resources</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </StickHeader>
                <section className="alexa__main">
                    <AlexaTab
                        tabContent={
                            [
                                {
                                    activeTab : "wakeword",
                                    heading : "Wake word",
                                    supportingHeading : "When you want to talk to Alexa, you have to first wake up your device by   saying the wake word (“Alexa”). Your request is sent to Amazon’s secure cloud only after the wake word is detected.",
                                    img : wakeword_graphic,
                                    alt : "wakeword graphic"
                                },
                                {
                                    activeTab : "indicator",
                                    heading : "Indicators",
                                    supportingHeading : "You’ll always know when Alexa is recording and sending your request to the cloud because a blue light indicator will appear or an audio tone will sound on your Echo device.",
                                    img : indicators_graphic,
                                    alt : "indicators graphic"
                                },
                                {
                                    activeTab : "mute",
                                    heading : "Microphone controls",
                                    supportingHeading : "Echo smart speakers have a microphone off button that electronically disconnects the microphones."
                                },
                                {
                                    activeTab : "smart",
                                    heading : "Camera controls",
                                    supportingHeading : "On Echo devices with a screen, you can turn the camera and microphones off with one press of a button. On most Echo Show devices, the built-in shutter lets you easily block the camera.",
                                    img : cam_controls_graphic,
                                    alt : "cam controls graphic"
                                },
                                {
                                    activeTab : "recordings",
                                    heading : "Manage voice recordings",
                                    supportingHeading : "You can view, hear, and delete your voice recordings at Alexa Privacy Settings or in the Alexa app at any time.",
                                    img : manage_rec_graphic,
                                    alt : "manage rec graphic"
                                }
                            ]
                        }
                        tab={
                            [
                                {
                                    active : "wakeword",
                                    img : wakeword,
                                    title : "Wake word / Mot d'activation"
                                },
                                {
                                    active : "indicator",
                                    img : indicator,
                                    title : "Indicators / Indicateurs"
                                },
                                {
                                    active : "mute",
                                    img : mute,
                                    title : "Microphone controls / Contrôle des microphones"
                                },
                                {
                                    active : "smart",
                                    img : smart,
                                    title : "Camera controls / Contrôle de la caméra"
                                },
                                {
                                    active : "recordings",
                                    img : recordings,
                                    title : "Manage voice reordings / Gérer les enregistrements vocaux"
                                }
                            ]
                        }
                    />
                    {/* <section className="alexa__mainTabs">
                        <TabContent activeTab={activeTab}>
                            <section className="alexa__mainTabPane">
                                <section className="alexa__mainTabContent">
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
                            </section>
                        </TabContent>
                        <section className="alexa__mainTabBtns">
                            <Nav tabs className="p-0 m-0 justify-content-center">
                                <AlexaTab
                                    activeTab={""}
                                    img={wakeword}
                                    title={"Wake word / Mot d'activation"}
                                />
                                <AlexaTab
                                    activeTab={""}
                                    img={indicator}
                                    title={"Indicators / Indicateurs"}
                                />
                                <AlexaTab
                                    activeTab={""}
                                    img={mute}
                                    title={"Microphone controls / Contrôle des microphones"}
                                />
                                <AlexaTab
                                    activeTab={""}
                                    img={smart}
                                    title={"Camera controls / Contrôle de la caméra"}
                                />
                                <AlexaTab
                                    activeTab={""}
                                    img={recordings}
                                    title={"Manage voice reordings / Gérer les enregistrements vocaux"}
                                />
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="content" tag="section">
                                </TabPane>
                                <TabPane tabId="content" tag="section">
                                </TabPane>
                                <TabPane tabId="content" tag="section">
                                </TabPane>
                                <TabPane tabId="content" tag="section">
                                </TabPane>
                            </TabContent>
                        </section>
                    </section> */}
                </section>
            </section>
        </main>
    )

    return (
        <Layout>
            <AlexaPrivacyPage />
        </Layout>
    )
}

export default AlexaPrivacy
