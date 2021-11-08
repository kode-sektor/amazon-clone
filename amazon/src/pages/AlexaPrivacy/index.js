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
import security from '../../images/security.png'
import ic_attend_maybe from '../../images/ic-attend-maybe.png'

import AlexaTab from './AlexaTab'
import AlexaFeatures from './AlexaFeatures'

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
                </section>
                <section className="alexa__features row">
                    <section className="alexa__featuresCol col-8 offset-2">
                        <div className="flex__container">
                            <p className="alexa__featuresIntrotxt padding__top__xlarge padding__bottom__xlarge">
                                Amazon designs Alexa and Echo devices with multiple layers of privacy protection. From microphone and camera controls to the ability to view and delete your voice recordings, you have transparency and control over your Alexa experience.
                            </p>
                        </div>
                        <h3 className="alexa__featuresHeading padding__top__base padding__bottom__xlarge font-weight-bold text-center">
                            Built to protect your privacy
                        </h3>
                        <section>
                            <section className="alexa__gallery padding__bottom__xlarge text-center">
                                <video className="w-100" controls="" crossorigin="anonymous" height="auto" preload="metadata" poster="https://m.media-amazon.com/images/G/01/apx/privacyhub/home_desktop/APX_PrivacyHub_052819_slate._CB1559061128_.jpg" controlslist="nodownload" data-cel-widget="osa_browse_video_0">
                                    <source src="https://m.media-amazon.com/images/G/15/kindle/merch/2019/AUCC/PrivacyHub/AmazonPrivacy_CA_en_20190702_Fix._CB1198675309_.mp4" type="video/mp4" />
                                    <track default="" label="English" kind="captions" src="https://m.media-amazon.com/images/G/15/kindle/merch/2019/AUCC/PrivacyHub/CA_Privacy_sizeremoved_2._CB1198675309_.vtt" srclang="en" />
                                </video>
                            </section>
                            <p className="alexa__featuresIntrotxt padding__bottom__xlarge">
                                How do I know when my device is recording? Is Alexa always listening? Explore how Alexa and Echo devices work, and learn about the features and controls that protect your privacy.
                            </p>
                            <section className="row">
                                <h3 className="alexa__featuresHeading col-8 offset-2 padding__top__xlarge padding__bottom__large text-center">
                                    Alexa and Echo devices provide transparency and control
                                </h3>
                            </section>
                            <section>
                                <AlexaFeatures
                                    img={<img src={wakeword} alt="wake word" />}
                                    text={"Alexa and all of our Echo devices are designed with your privacy in mind. When you want to talk to Alexa, you have to first alert your device by saying the wake word, which by default is “Alexa” or by pressing the action button on the device. Only then does your device begin recording and sending your request to Amazon's secure cloud."}
                                />
                                <AlexaFeatures
                                    img={<img src={security} alt="security" />}
                                    text={"All of your interactions with Alexa are encrypted in transit to Amazon’s cloud where they are securely stored."}
                                />
                                <AlexaFeatures
                                    img={<img src={indicator} alt="indicator" />}
                                    text={"You’ll always be able to tell when Alexa is listening to your request because a light indicator will appear on your Echo device or an audible tone will sound."}
                                />
                                <AlexaFeatures
                                    img={<img src={mute} alt="mute" />}
                                    text={"Echo smart speakers have a microphone off button that electronically disconnects the microphones."}
                                />
                                <AlexaFeatures
                                    img={<img src={smart} alt="smart" />}
                                    text={"On Echo devices with a camera, you can turn the camera and microphones off with one press of a button. Most Echo Show devices also include a built in shutter that allows you to easily cover the camera for additional peace of mind."}
                                />
                                <AlexaFeatures
                                    img={<img src={recordings} alt="recordings" />}
                                    text={"At Alexa Privacy Settings or in the Alexa app, you can view, hear, and delete your voice recordings or choose not to have your voice recordings saved. To delete by voice, just say, \"Alexa, delete what I just said\" to delete your voice recordings from the last ten minutes or \"Alexa, delete everything I've ever said\" to delete all your voice recordings."}
                                />
                                <section className="padding__bottom__xxlarge">
                                    <AlexaFeatures
                                        img={<img src={ic_attend_maybe} alt="ic attend maybe" />}
                                        text={"Ever wonder why Alexa responded a certain way? Just say, \"Alexa, tell me what you heard\" and Alexa will read back your most recent voice request. You can also ask, \"Alexa, why did you do that?\" and Alexa will provide a short explanation about the response to your last voice request."}
                                    />
                                </section>
                                <hr className="alexa__hr offset-2"
                                />
                                <section className="padding__top__xlarge padding__bottom__large">
                                    <p className="alexa__featuresIntrotxt">
                                        We want you to feel fully informed and aware of the privacy options that make the most sense for you. Simply say, “Alexa, how do I review my privacy settings?” and Alexa will send you a direct link in the Alexa app to your Alexa Privacy Settings. There, you can learn more about how different privacy features work and you can choose the privacy options that are right for you.
                                    </p>
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
            <AlexaPrivacyPage />
        </Layout>
    )
}

export default AlexaPrivacy
