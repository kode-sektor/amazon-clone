import React from 'react'

import { Link } from 'react-router-dom'

import { Row, Col } from 'reactstrap'

import './index.css'


const CardCell = ({heading, text, cardCellImg}) => {
    return (
        <Col tag="li" sm="4" className="card__cell">
            <Link className="card__cell__link" to="/">
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
            </Link>
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
                                            <Link to="/" href={link.href}>{link.text}</Link>
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
