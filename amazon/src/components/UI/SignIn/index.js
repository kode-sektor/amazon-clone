import React from 'react'
import { Link } from 'react-router-dom'

import { PrimaryBtn } from '../../UI/Button'

import './index.css'

const SignIn = () => {

    return (
        <section className="a__section text-center sign__in__widget">
            <div className="a__box__group">
                <header className="a__box a__box__title sign__in__header">
                    <div className="a__box__inner a__padding__mini">
                        <span className="a__size__base font-weight-bold">
                            Sign in with your Amazon account
                        </span>
                    </div>
                </header>
                <section className="a__box">
                    <div className="a__box__inner">
                        <div className="sign__in__button a__spacing__mini a__spacing__top__mini ">
                            <PrimaryBtn
                                text={"Sign in"}
                            />
                        </div>
                        <div className="a__spacing__small">
                            Not Kay? <br/>
                            Click <Link to="/" className="welcome__link">here</Link> to sign in as different user.
                        </div>
                        <div className="a__spacing__medium">
                            <span class="a__size__mini">
                                You will be signed in using our secure server
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default SignIn
