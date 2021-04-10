import React from 'react'

import { Row, Col } from 'reactstrap'

import './index.css'


const CardCell = ({heading, text, cardCellImg}) => {
    return (
        <Col tag="li" sm="4" className="card__cell">
            <a className="card__cell__link">
                <div className="a__box">
                    <div className="a__box__inner">
                        <Row>
                            <Col sm="3" className="card__cell__imgContainer px-0">
                                <img src={cardCellImg[0].img} alt={cardCellImg[0].img}/>
                            </Col>
                            <Col sm="9" className="pr-0 pl-2">
                                <h2 className="card__cell__title">{heading}</h2>
                                <p className="a__color__secondary mb-0">{text}</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </a>
        </Col>
    )
}

const CardCellLinks = ({heading, links}) => {
    return (
        <Col tag="li" sm="4" className="card__cell">
                <div className="a__box">
                    <div className="a__box__inner">
                        <h3 className="card__cell__linkTitle">{heading}</h3>
                        <ul className="mb-0">
                            {
                                links.map((link, index) => {
                                    return (
                                        <li className="a__spacing__micro">
                                            <a href={link.href}>{link.text}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
        </Col>
    )
}

export { CardCell, CardCellLinks }
