import React from 'react'
import { Link } from 'react-router-dom'

import {Line, LineThree } from '../../UI/Line'
import { BtnPill, ReportAbuse } from '../../UI/Button'
import { DropdownMenuMini } from '../..//UI/DropdownMenu'

import './index.css'

const Reviews = ({rating, lightbox, showLightBoxGallery, tags, country, post}) => {
    return (
        <section className="d-flex a__spacing__extra__large__ii">
            <section className="mastercard__reviews">
                <h2>Customer reviews</h2>
                {rating}
                <Line/>
                <h3 className="a__spacing__micro">Review this product</h3>
                <p className="a__spacing__medium">
                    Share your thoughts with other customers
                </p>
                <BtnPill
                    text={"Write a customer review"}
                    stretch={true}
                />
                <LineThree/>
            </section>
            <section className="mastercard__comments flex-grow-1">
                <section className="master__commentsMain a__spacing__medium">
                    <header className="master__commentsGallery a__spacing__medium">
                        <h3>Reviews with images</h3>
                    </header>
                    {lightbox}
                    <Link to="/" onClick={showLightBoxGallery}>
                        See all customer images
                    </Link>
                    <section className="mastercard__tags">
                        <div className="a__spacing__extra__large__ii">
                            <h3 className="a__spacing__base">Read reviews that mention</h3>
                            <section className="mastercard__tagPanel">
                                <Link to="/" className="mastercard__tagItem a__text__normal">
                                    <span>cash back</span>
                                    <span>gift cards</span>
                                    <span>easy to use</span>
                                    <span>foreign exchange</span>
                                    <span>mastercard</span>
                                    <span>rewards mastercard</span>
                                    <span>use the card</span>
                                    <span>credit cards</span>
                                    <span>great rewards</span>
                                    <span>right away</span>
                                    <span>much better</span>
                                    <span>credit score</span>
                                </Link>
                                {
                                    tags.map((item, index) => (
                                        <Link to={item.href}>
                                            <span>{item.text}</span>
                                        </Link>
                                    ))
                                }
                            </section>
                        </div>
                    </section>
                    <section className="a__spacing__medium">
                        <section className="a__spacing__small">
                            <DropdownMenuMini
                                optionList={
                                    <>
                                        <option value="top-reviews">Top reviews</option>
                                        <option value="most-recent">Most Recent</option>
                                    </>
                                }
                            />
                        </section>
                        <header className="a__section">
                            <h3 className="a__spacing__medium a__spacing__top__large">
                                Top reviews from {country}
                            </h3>
                        </header>
                        <section className="mastercard__userComments a__spacing__large">
                            {
                                post.map((item, index) => {
                                    const { author, rating, date, body, helpful } = item
                                    return (
                                        <article className="mastercard__userComment a__section">
                                            <header className="d-flex align-content-center">
                                                <Link to="/" className="a__spacing__mini">
                                                    <span className="mastercard__avatar">
                                                        <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" className=""/>
                                                    </span>
                                                    <span className="mastercard__profileName d-inline-block">
                                                        {author}
                                                    </span>
                                                </Link>
                                                <div className="mastercard__topFigure a__spacing__mini">
                                                    <span className="a__size__mini font-weight-bold a__color__link">
                                                        TOP 100 REVIEWS
                                                    </span>
                                                </div>
                                            </header>
                                            <section className="mastercard__title">
                                                <Link to="/" title={`${rating} out of 5 stars`} className="mastercard__titleStars">
                                                    <i className={`a__icon a__icon__star__medium a__star__medium__${rating}`}>
                                                        <span className="a__icon__alt">{rating} Stars &amp; Up</span>
                                                    </i>
                                                </Link>
                                                <Link to="/" className="mastercard__titleText a__size__base a__color__base font-weight-bold">
                                                    Let me sum up everything here.... It's a 1% Amazon rewards card.
                                                </Link>
                                                <span className="d-block a__size__base a__color__secondary a__color__tertiary">
                                                    Reviewed in {country} on {date}
                                                </span>
                                            </section>
                                            <p className="mastercard__body a__size__base__ii a__spacing__small">
                                                {body}
                                                <div className="a__expander__header a__expander__partial__collapse__header">
                                                    <div class="a__expander__content__fade"></div>
                                                    <Link to="javascript:void(0)" className="a__declarative">
                                                        <i className="a__icon a__icon__extender__expand"></i>
                                                        <span className="a__expander__prompt">Read more</span>
                                                    </Link>
                                                </div>
                                            </p>
                                            <p className="a__spacing__small">
                                                <span className="a__size__base__ii a__color__tertiary">
                                                    {helpful} people found this helpful
                                                </span>
                                            </p>
                                            <span className="masterCard__helpful">
                                                <BtnPill
                                                    text={"Helpful"}
                                                />
                                            </span>
                                            <ReportAbuse/>
                                        </article>
                                    )
                                })
                            }
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Reviews
