import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai'

import Popover from '../../components/UI/Popover'

import aws_poster_vid from '../../images/aws-poster-vid.png'

import './index.css'

const AmazonWebServices = () => {

    return (
        <section className="webServices--page">
            <header className="webServices__header">
                <section className="webServices__headWrap">
                    <nav>
                        <section className="d-flex">
                            <div className="webServices__logo">
                                <Link to="/">
                                    <span>Click here to return to Amazon Web Services homepage</span>
                                </Link>
                            </div>
                            <ul className="webServices__navLinks">
                                <li>
                                    <Link to="/">Contact Us</Link>
                                </li>
                                <li className="webServices__navDropdown">
                                    <Popover 
                                        trigger={
                                            <Link to="/" className="">
                                                Support&nbsp;
                                                <AiFillCaretDown />
                                            </Link>
                                        }
                                        dropdown={
                                            <ul>
                                                <li>
                                                    <Link to="/">Support center</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Knowledge center</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">AWS Support overview</Link>
                                                </li>
                                            </ul>
                                        }
                                    />
                                </li>
                                <li className="webServices__navDropdown">
                                    <Popover 
                                        trigger={
                                            <Link to="/">
                                                English&nbsp;
                                                <AiFillCaretDown />
                                            </Link>
                                        }
                                        dropdown={
                                            <section className="webServices__navDual">
                                                <ul className=""> 
                                                    <li>
                                                        <Link to="/">عربي</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Bahasa Indonesia</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Deutsch</Link>
                                                    </li> 
                                                    
                                                    <li>
                                                        <Link to="/">Español</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Français</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Italiano</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Português</Link>
                                                    </li> 
                                                </ul> 
                                                <ul className=""> 
                                                    <li>
                                                        <Link to="/">Tiếng Việt</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Türkçe</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">Ρусский</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">ไทย</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">日本語</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">한국어</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">中文 (简体)</Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="/">中文 (繁體)</Link>
                                                    </li> 
                                                </ul>
                                            </section>                                   
                                        }
                                    />
                                </li>
                                <li className="webServices__navDropdown">
                                    <Popover 
                                        trigger={
                                            <Link to="/">
                                                My Account&nbsp;
                                                <AiFillCaretDown />
                                            </Link>
                                        }
                                        dropdown={
                                            <ul>
                                                <li>
                                                    <Link to="/">AWS Management Console</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Account Settings</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Billing &amp; Cost Management</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Security Credentials</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">AWS Personal Health Dashboard</Link>
                                                </li>
                                            </ul>
                                        }
                                    />
                                </li>
                                <li>
                                    <Link to="/">Sign in</Link>
                                </li>
                                <li className="webServices__navAccount">
                                    <Link className="webServices__account">
                                        <span>Create an AWS account</span>
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className="webServices__primaryNav">
                            <ul>
                                <li>
                                    <Link to="/">
                                        re:Invent
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Solutions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Documentation
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Learn
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Partner Network
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        AWS Marketplace
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Customer Enablement
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Explore More
                                    </Link>
                                </li>
                                <li className="ml-3">
                                    <button className="webServices__search">
                                        <AiOutlineSearch />
                                    </button>
                                </li>
                            </ul>
                        </section>
                    </nav>
                </section>
            </header>
            <main className="webServices__main">
                <section className="webServices__cc">
                    <section className="webServices__ccContainer">
                        <section>
                            <section className="webService__desc">
                                <h1 className="webService__descHeading">
                                    What is cloud computing?
                                </h1>
                                <section className="webService__descText">
                                    <p>
                                        Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS).
                                    </p>
                                    <br />
                                </section>
                                <Link className="webServices__account">
                                    <span>Create an AWS account</span>
                                </Link>
                            </section>
                            <section className="webService__descImg">
                                <section>
                                    <img src={aws_poster_vid} alt="aws poster video" />
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
                <section className="webServices__users">
                    <article className="webServices__container text-center">
                        <h1 className="webServices__usersTitle">Who is using cloud computing?</h1>
                        <p className="webServices__usersText">
                            Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS).
                        </p>
                    </article>
                </section>
            </main>
        </section>
    )
}

export default AmazonWebServices
