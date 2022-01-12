import React from 'react'
import { Link } from 'react-router-dom'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'

import rebrand_hearts from '../../images/rebrand-hearts.png'
import shopbop_bag from '../../images/shopbop-bag.png'

import './index.css'

const Shopbop = () => {
    return (
        <div className="shopbop--page">
            <header className="shopbop__header">
                <section className="shopbop__headerContainer">
                    <section className="shopbop__headerBar">
                        <section className="shopbop__headerCurrency">
                            <section className="shopbop__util">
                                <span className="shopbop__utilMarker">
                                    <FaMapMarkerAlt />
                                </span> CA<MdKeyboardArrowDown />
                            </section>
                            <section className="shopbop__util">
                                EN<MdKeyboardArrowDown />
                            </section>
                            <section className="shopbop__util">
                                $CAD<MdKeyboardArrowDown />
                            </section>
                        </section>
                        <section className="shopbop__headerFree">
                            <Link to="/">
                                FREE shipping + FREE returns to Canada                    
                            </Link>
                        </section>
                        <section className="shopbop__headerRegister">
                            <section className="shopbop__signin">
                                <Link to="/">Sign In / Register</Link> <MdKeyboardArrowDown />
                            </section>
                            <section className="shopbop__hearts">
                                <Link to="/">
                                    <img src={rebrand_hearts} alt="My Hearts" />
                                </Link>
                            </section>
                        </section>
                        <section className="shopbop__cart">
                            <img src={shopbop_bag} alt="shopbop bag" />
                            <div className="shopbop__cartCount">0</div>
                        </section>
                    </section>
                </section>
            </header>
        </div>
    )
}

export default Shopbop
