import React, { useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'

import FooterMenu from './FooterMenu'

import { UncontrolledDropdown, DropdownToggle, Button } from 'reactstrap';

import DropdownMenuLang from '../UI/DropdownMenuLang'
import ModalLang from '../Footer/ModalLang'
import { DropdownMenuPrimary } from '../UI/DropdownMenu'

import { countries } from '../../utilities/data'

import './index.css'


const Footer = (props) => {

    const { modal, toggleModal, modalLangProps} = props

    const [flagdropdownOpen, setFlagdropdownOpen] = useState(false)    // flag dropdown
    // const [countryDropDown, setCountryDropDown] = useState(false)

    // Show or Hide Language Modal
    // toggleModal is a parent function because while true that a click on the 'Canada' 
    // button shows it, a click on the parent modal is also responsible for hiding both
    // the parent modal and this langModal. Thus its more correct that the function of 
    // this langModal is moved to the parent Module (Layout/index.js)
    const toggleModalLang = (modalState, modalLangProp, langModal) => {
        // console.log(modalState)     // show stretched
        // console.log(modalLangProp)  // langModal
        // console.log(langModal)  // {modalLangPanel: "show stretched", title: "`Website` (Country / Region)"}

        toggleModal(modalState, modalLangProp, langModal)
    } 

    // Flag dropdown
    const flagdropdown = () => setFlagdropdownOpen(flagdropdownOpen => !flagdropdownOpen) 
    const flagdropdownEnter = () => setFlagdropdownOpen(true)
    const flagdropdownLeave = () => setFlagdropdownOpen(false)


    return (
        <footer id="page__footer" className="page__footer">
            <LinkScroll to="page__header" spy={true} smooth={true} className="page__footer__to__top">
                <span class="page__footer__back__to__top__text">Back to top</span>
            </LinkScroll>
            <section className="page__footer__wrap d-flex justify-content-between">
                <FooterMenu 
                    heading={"Get to Know Us"}
                    menu={
                            [
                                { label: "Careers", href: "/jobs", icon: null },
                                { label: "Amazon and Our Planet", href: "/help-customer", icon: null },
                                { label: "Investor Relations", href: "/investor-relations", icon: null },
                                { label: "Press Releases", href: "/press", icon: null }
                            ]
                        }
                />
                <FooterMenu 
                    heading={"Make Money with Us"}
                    menu={
                            [
                                { label: "Sell on Amazon", href: "/seller-amazon", icon: null },
                                { label: "Sell Under Amazon Accelerator", href: "/", icon: null },
                                { label: "Amazon Associates", href: "/associates", icon: null },
                                { label: "Sell on Amazon Handmade", href: "/handmade", icon: null },
                                { label: "Advertise Your Products", href: "/advertising", icon: null },
                                { label: "Independently Publish with Us", href: "/independent-publication", icon: null },
                                { label: "Host an Amazon Hub", href: "/amazon-hub", icon: null }
                            ]
                        }
                />
                <FooterMenu 
                    heading={"Amazon Payment Products"}
                    menu={
                            [
                                { label: "Amazon.ca Rewards Mastercard", href: "/mastercard-reward", icon: null },
                                { label: "Shop with Points", href: "/", icon: null },
                                { label: "Reload Your Balance", href: "/", icon: null },
                                { label: "Amazon Currency Converter", href: "/", icon: null },
                                { label: "Gift Cards", href: "/", icon: null },
                                { label: "Amazon Cash", href: "/", icon: null }
                            ]
                        }
                />
                <FooterMenu 
                    heading={"Let Us Help You"}
                    menu={
                            [
                                { label: "COVID-19 and Amazon", href: "/", icon: null },
                                { label: "Shipping Rates & Policies", href: "/", icon: null },
                                { label: "Amazon Prime", href: "/", icon: null },
                                { label: "Returns Are Easy", href: "/", icon: null },
                                { label: "Manage your Content and Devices", href: "/", icon: null },
                                { label: "Customer Service", href: "/", icon: null }
                            ]
                        }
                />
            </section>
            <hr className="page__footer__break"/>
            <section className="page__footer__padItem d-flex justify-content-center">
                <a href="/" className="page__footer__logo justify-content-around">
                </a>
                <div className="page__footer__buttonset">
                    <UncontrolledDropdown onMouseOver={flagdropdownEnter} onMouseLeave={flagdropdownLeave} isOpen={flagdropdownOpen} toggle={flagdropdown} tag="span" className="langToggle">
                        <DropdownToggle className="langLink" onClick={() => {
                            const modalState = (modal === "hide") ? "show stretched" : "hide"
                            const modalPanel = "show"

                            const modalLangProps = {
                                modalLangPanel : modalPanel,
                                title : <><span className="amzn__country__icon amzn__globeIcon__two"></span> Language Settings</>,
                                legend : "Select your preferred language",
                                body :  <form className="page__footer__langSetting">
                                            <label className="page__footer__langLabel">
                                                <input className="page__footer__langInput" type="radio" name="LOP" value="en_CA" checked=""/>
                                                <i class="amzn__icon__radio checked"></i>&nbsp;
                                                <span class="a-label a-radio-label">
                                                    English - EN
                                                </span>
                                            </label>
                                            <hr className="icp__divider"/>
                                            <label className="page__footer__langLabel">
                                                <input className="page__footer__langInput" type="radio" name="LOP" value="en_CA" checked=""/>
                                                <i class="amzn__icon__radio"></i>&nbsp;
                                                <span class="a-label a-radio-label">
                                                    <em>Français - FR - Traduction</em>
                                                </span>
                                            </label>
                                        </form>,
                                legendAux : "Changing country/region website",
                                bodyAux : <>
                                            <legend className="popover__panel__country__title">Translation</legend>
                                            <p>We'll translate the most important information for your browsing, shopping, and communications</p>
                                            <legend className="popover__panel__country__title">Additional Languages</legend>
                                            <p>More languages are available from other Amazon websites.</p>
                                        </>,
                                cta : "Save Changes",
                                classname : 'language'
                            }

                            toggleModalLang(modalState, "langModal", modalLangProps)
                        }}>
                            <span className="amzn__country__icon amzn__globeIcon"></span>
                            <span className="amzn__logo__base">English</span>
                            <span class="page__footer__downUpArrow"></span>
                        </DropdownToggle>
                        <DropdownMenuLang/>
                    </UncontrolledDropdown>
                    <Button outline color="secondary" onClick={() => {
                        const modalState = (modal === "hide") ? "show stretched" : "hide"
                        const modalPanel = "show"

                        const modalLangProps = {
                            modalLangPanel : modalPanel,
                            title : "Website (Country/Region)",
                            legend : "Select your preferred country/region website",
                            body :  <DropdownMenuPrimary
                                        optionList={ 
                                            countries.map(item => (
                                                <option value={item.value}>
                                                    {item.country}
                                                </option>
                                            ))
                                        }
                                    />,
                            legendAux : "Changing country/region website",
                            bodyAux : <>
                                        <legend className="popover__panel__country__title">Changing country/region website</legend>
                                        <p>Changing the country/region you shop from may affect factors including price, shipping options and product availability.</p>
                                    </>,
                            cta : "Go to website",
                            classname : 'region'
                        }
                        toggleModalLang(modalState, "langModal", modalLangProps)
                    }}>
                        <span className="amzn__country__icon amzn__locationIcon"></span>
                        <span className="amzn__logo__base">Canada</span>
                    </Button>
                </div>
            </section>
            <section className="page__footer__secondary">
                <div className="page__footer__wrap d-flex flex-column">
                    <FooterMenu 
                        type={"page__sub__footer"}
                        menu={
                                [
                                    { label: 
                                        <>
                                            Amazon Music<br/> 
                                            <span className="page__sub__footer__descLink">Stream millions<br/> 
                                                of songs
                                            </span>
                                        </>, 
                                        href: "/", 
                                        icon: null 
                                    },
                                    { label: 
                                        <>
                                            Amazon Advertising<br/> 
                                            <span className="page__sub__footer__descLink">Find, attract, and<br/> 
                                                engage customers
                                            </span>
                                        </>, 
                                        href: "/", 
                                        icon: null 
                                    },
                                    { label: 
                                        <>
                                            Amazon Drive<br/> 
                                                <span className="page__sub__footer__descLink">Cloud storage<br/> 
                                                    from Amazon
                                                </span>
                                        </>, 
                                        href: "/", 
                                        icon: null 
                                    },
                                    { label: 
                                        <>
                                            Amazon Web Services<br/> 
                                                <span className="page__sub__footer__descLink">Scalable Cloud<br/> 
                                                    Computing Services
                                                </span>
                                        </>, 
                                        href: "/", 
                                        icon: null 
                                    },
                                    { label: 
                                        <>
                                            Book Depository<br/> 
                                                <span class="page__sub__footer__descLink">Books With Free<br/> 
                                                    Delivery Worldwide
                                                </span>
                                        </>, 
                                        href: "/", 
                                        icon: null 
                                    }
                                ]
                            }
                    />
                    <FooterMenu 
                        type={"page__sub__footer"}
                        menu={
                                [
                                    { label: 
                                        <>
                                            Goodreads<br/> 
                                            <span className="page__sub__footer__descLink">Book reviews<br/> 
                                                &amp; recommendations
                                            </span>
                                        </>, 
                                        href: "/", 
                                        icon: null 
                                    },
                                    { label: 
                                        <>
                                            IMDb<br/> 
                                            <span className="page__sub__footer__descLink">Movies, TV<br/> 
                                                &amp; Celebrities
                                            </span>
                                        </>, 
                                        href: "/", 
                                        icon: null 
                                    },
                                    { label: 
                                        <>
                                            Amazon Photos<br/> 
                                                <span className="page__sub__footer__descLink">Unlimited Photo Storage<br/> 
                                                    Free With Prime
                                                </span>
                                        </>, 
                                        href: "/", 
                                        icon: null 
                                    },
                                    { label: 
                                        <>
                                            Shopbop<br/> 
                                                <span className="page__sub__footer__descLink">Designer<br/> 
                                                    Fashion Brands
                                                </span>
                                        </>, 
                                        href: "/", 
                                        icon: null 
                                    },
                                    { label: 
                                        <>
                                            Warehouse Deals<br/> 
                                                <span class="page__sub__footer__descLink">Open-Box<br/> 
                                                    Discounts
                                                </span>
                                        </>, 
                                        href: "/", 
                                        icon: null 
                                    }
                                ]
                            }
                    />
                    <FooterMenu 
                        type={"page__sub__footer"}
                        menu={
                                [
                                    { 
                                        label: 
                                        <>
                                            Whole Foods Market<br/> 
                                            <span className="page__sub__footer__descLink">We Believe in<br/> 
                                                Real Food
                                            </span>
                                        </>, 
                                        href: "/", 
                                        icon: null },
                                    { 
                                        label: 
                                        <>
                                            Amazon Renewed<br/> 
                                            <span className="page__sub__footer__descLink">Like-new products<br/> 
                                                you can trust
                                            </span>
                                        </>, 
                                        href: "/", 
                                        icon: null },
                                    { 
                                        label: 
                                        <>
                                            Amazon Second Chance<br/> 
                                            <span className="page__sub__footer__descLink">Pass it on, trade it in,<br/> 
                                                give it a second life
                                            </span>
                                        </>, 
                                        href: "/", 
                                        icon: null 
                                    }
                                ]
                            }
                    />
                </div>
            </section>
            <section className="page__footer__minor">
                <ul className="page__footer__minor__list">
                    <li><a href="/">Conditions of Use</a></li>
                    <li><a href="/">Privacy Notice</a></li>
                    <li><a href="/">Interest-Based Ads</a></li>
                    <li><a href="/">&copy; 2008-2021, Amazon.com, Inc. or its affiliates</a></li>
                </ul>
            </section>
            <ModalLang
                modalPanel={modalLangProps.modalLangPanel}
                title={modalLangProps.title}
                legend={modalLangProps.legend}
                body={modalLangProps.body}
                legendAux={modalLangProps.legendAux}
                bodyAux={modalLangProps.bodyAux}
                cta={modalLangProps.cta}
                toggleModalLang={toggleModalLang}
                classname={modalLangProps.classname}
            />
        </footer>
    )
}

export default Footer
