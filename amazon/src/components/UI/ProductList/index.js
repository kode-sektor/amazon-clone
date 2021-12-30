import React from 'react'
import { Link } from 'react-router-dom'

import Popover from '../Popover'
import Rating from '../Rating'

import './index.css'

const ProductList = ({ amount, name, date, manufacturer, asin, modelno, rank }) => {
    return (
        <section className="product__details">
            <h2>Product Details</h2>
            <span className="product__disclaim"> Gift Amount:
                <strong>{amount}</strong>&nbsp; | &nbsp; Design name: 
                <strong>{name}</strong>
            </span>
            <ul className="detail__bullet__list a__unordered__list a__nostyle a__spacing__none">
                <li>
                    <span className="a__list__item">
                        <span className="font-weight-bold">
                            Date First Available &rlm; : &lrm;
                        </span>
                        <span>{date}</span>
                    </span>
                </li>
                <li>
                    <span className="a__list__item">
                        <span className="font-weight-bold">
                            Manufacturer &rlm; : &lrm;
                        </span>
                        <span>{manufacturer}</span>
                    </span>
                </li>
                <li>
                    <span className="a__list__item">
                        <span className="font-weight-bold">
                            ASIN &rlm; : &lrm;
                        </span>
                        <span>{asin}</span>
                    </span>
                </li>
                <li>
                    <span className="a__list__item">
                        <span className="font-weight-bold">
                            Item model no &rlm; : &lrm;
                        </span>
                        <span>{modelno}</span>
                    </span>
                </li>
            </ul>
            <ul className="detail__bullet__list a__unordered__list a__nostyle a__spacing__none">
                <li>
                    <span className="a__list__item">
                        <span className="font-weight-bold">
                            Best Sellers Rank &rlm; : &lrm;
                        </span>
                        <span>#{rank} in Gift Cards</span>&nbsp;
                        (<Link to="/">See Top 100 in Gift Cards</Link>)
                    </span>
                </li>
                <li>
                    &nbsp; #{rank} in <Link to="/">Just Because</Link>
                </li>
                <li>
                    <span className="a__list__item">
                        <span className="font-weight-bold">
                            Customer Reviews: &rlm; : &lrm;
                        </span>
                        <span className="d-inline-block">
                            <Popover 
                                trigger={
                                    <Link to="/">
                                        <i className="a__icon a__icon__star a__star__4__5">
                                            <span className="a__icon__alt">4.7 out of 5 stars</span>
                                        </i>
                                        <i className="a__icon a__icon__popover"></i>
                                    </Link>
                                }
                                dropdown={
                                    <Rating
                                        dropdown={true}     // dropdown===true shows the footer
                                        avgRating={4.3}
                                        totalRating={5}
                                        globalRatings={"3,670"}
                                        starFive={85}
                                        starFour={6}
                                        starThree={3}
                                        starTwo={1}
                                        starOne={4}
                                    />
                                }
                                styling={"rating"}
                            />
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <Link to="/" className="a__size__base">
                            3,670 ratings
                        </Link>
                    </span>
                </li>
            </ul>
            <section className="product__description a__spacing__extra__large__ii">
                <span className="product__disclaim"> Gift Amount:
                    <strong>{rank}</strong>&nbsp; | &nbsp; Design name: 
                    <strong>{name}</strong>
                </span>
            </section>
        </section>
    )
}

export default ProductList
