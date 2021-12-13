import React from 'react'
import { Link } from 'react-router-dom'

import header_logo_goodreads from '../../images/header-logo-goodreads.png'

import './index.css'

const GoodReads = () => {
    return (
        <section className="goodreads--page">
            <header className="goodreads__header">
                <section className="goodreads__headerNav">
                    <section className="goodreads__signedOut">
                        <section className="goodreads__navTitle">
                            <Link to="/">
                                <img src={header_logo_goodreads} alt="Goodreads: Book reviews, recommendations, and discussion" />
                            </Link>
                        </section>
                        <section className="goodreads__mastHead">
                            <div className="goodreads__newAcct">
                                <h2>
                                    Discover &amp; read more
                                </h2>
                                <ul className="goodreads__newAcctSm">
                                    <li>
                                        <Link to="/" className="gr__button gr__button--facebook gr__button--dark gr__button--auth facebookConnectButton fbSignInButton">
                                            <i className="gr__button--facebook__icon"></i>&nbsp;
                                            Continue with Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__button gr__button--amazon gr__button--fullWidth gr__button--auth">
                                            <i className="gr__button--amazon__icon"></i>&nbsp;
                                            Continue with Amazon
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__button gr__button--apple gr__button--fullWidth  gr__button--auth">
                                            <i className="gr__button--apple__icon"></i>&nbsp;
                                            Continue with Apple
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="gr__button gr__button--fullWidth gr__button--dark gr__button--auth">
                                            Sign up with email
                                        </Link>
                                    </li>
                                </ul>
                                <section className="goodreads__legal">
                                    By creating an account, you agree to the Goodreads &nbsp;
                                    <Link to="/" className="gr__hyperlink" rel="noopener noreferrer" target="_blank">
                                        Terms of Service
                                    </Link> and
                                    <Link to="/" className="gr__hyperlink" rel="noopener noreferrer" target="_blank">
                                        Privacy Policy
                                    </Link>.
                                </section>
                                <section className="goodreads__signIn">
                                    Already a member? &nbsp;
                                    <Link to="/" className="gr__hyperlink">
                                        Sign In
                                    </Link>
                                </section>
                            </div>
                        </section>
                    </section>
                </section>
            </header>
        </section>
    )
}

export default GoodReads
