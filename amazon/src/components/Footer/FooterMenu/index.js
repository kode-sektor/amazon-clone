import React from 'react'
import { Link } from 'react-router-dom'


const FooterMenu = ({heading, menu, type}) => {
    return (
        <section className="page__footer__column">
            {heading && <h4 className="page__footer__colHead">{heading}</h4>}
            <ul className={`page__footer__menu ${type}`}>
                {menu &&
                    menu.map((item, index) => (
                        <li key={index} className="page__footer__list">
                            <Link
                                onClick={(e) => {
                                    if (item.onClick) {
                                        e.preventDefault();
                                        item.onClick && item.onClick();
                                    }
                                }}
                                to={`${item.href}`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default FooterMenu
