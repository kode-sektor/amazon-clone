import React from 'react'

import { Col, Card, CardTitle, CardText, CardImg, CardBody, CardSubtitle } from 'reactstrap'
import { AddToCart } from '../../../UI/Button'

const CardOrder = ({column, src, alt, title, price, costPerGrams, shipping}) => {
    return (
        <Col sm={column} className="card__holder justify-content-center flex-grow-1 px-0">
            <Card className="justify-space-between">
                <div className="card__closed d-flex flex-column flex-grow-1">
                    <div className="card__closed__imgContainer text-center">
                        <CardImg top width="100%" src={src} alt={alt}/>
                    </div>
                    <CardBody className="p-0">
                        <CardTitle tag="h5" className="a__color__base a__size__base a__text__normal">{title}</CardTitle>
                        <CardSubtitle tag="h6" className="a__price" data-a-size="m" data-a-color="base">
                            <span className="a__price__symbol">$</span>{price}&nbsp;
                            <span className="a__size__small a__color__secondary a__text__normal">
                                ​(${costPerGrams})
                            </span>
                        </CardSubtitle>
                        <CardText className="a__size__small a__color__secondary">+ ${shipping} shipping</CardText>
                    </CardBody>
                    <AddToCart
                        mTop={"mt-auto"}
                    />
                </div>
            </Card>
        </Col>
    )
}

export default CardOrder
