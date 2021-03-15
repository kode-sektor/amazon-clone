import React from 'react'

const FooterMenu = ({heading, menu, type}) => {
    return (
        <section className="page__footer__column">
            {heading && <h4 className="page__footer__colHead">{heading}</h4>}
            <ul className={`page__footer__menu ${type}`}>
                {menu &&
                    menu.map((item, index) => (
                        <li key={index} className="page__footer__list">
                            <a
                                onClick={(e) => {
                                    if (item.onClick) {
                                        e.preventDefault();
                                        item.onClick && item.onClick();
                                    }
                                }}
                                href={`${item.href}`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default FooterMenu
