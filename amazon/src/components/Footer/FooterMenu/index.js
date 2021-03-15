import React from 'react'

const FooterMenu = ({heading, menu}) => {
    return (
        <section className="page__footer__menu">
            <section className="page__footer__column">
                <h4 className="page__footer__colHead">{heading}</h4>
                <ul className="page__footer__menu">
                    {menu &&
                        menu.map((item, index) => (
                            <li key={index}>
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
        </section>
    )
}

export default FooterMenu
