import React from 'react'
import { Link } from 'react-router-dom'

import {Line, LineThree } from '../../UI/Line'
import { BtnPill, ReportAbuse } from '../../UI/Button'
import { DropdownMenuMini } from '../../UI/DropdownMenu'
import { LineFive } from '../../UI/Line'

import './index.css'

const Reviews = ({rating, lightbox, showLightBoxGallery, tags, country, post}) => {

    const path = window.location.pathname 

    return (
        <section className="d-flex a__spacing__extra__large__ii">
            <section className="amzn__reviews">
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
            <section className="amzn__comments flex-grow-1">
                <section className="amzn__commentsMain a__spacing__medium">
                    <header className="amzn__commentsGallery a__spacing__medium">
                        <h3>Reviews with images</h3>
                    </header>
                    {lightbox}
                    <Link to="/" onClick={showLightBoxGallery}>
                        See all customer images
                    </Link>
                    <section className="amzn__tags">
                        <div className="a__spacing__extra__large__ii">
                            <h3 className="a__spacing__base">Read reviews that mention</h3>
                            <section className="amzn__tagPanel">
                                {
                                    tags.map((item, index) => (
                                        <Link to={item.href} className="amzn__tagItem">
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
                        <section className="amzn__userComments a__spacing__large">
                            {
                                post.map((item, index) => {
                                    const { avatar, author, topReviewer, rating, title, date, body, helpful } = item
                                    return (
                                        <article className="amzn__userComment a__section">
                                            <header className="d-flex align-content-center">
                                                <Link to="/" className="a__spacing__mini">
                                                    <span className="amzn__avatar">
                                                        <img src={avatar} alt="default avatar" className=""/>
                                                    </span>
                                                    <span className="amzn__profileName d-inline-block">
                                                        {author}
                                                    </span>
                                                </Link>
                                                {
                                                    topReviewer && (
                                                        <div className="amzn__topFigure a__spacing__mini">
                                                            <span className="a__size__mini font-weight-bold a__color__link">
                                                                TOP {topReviewer} REVIEWS
                                                            </span>
                                                        </div>
                                                    )
                                                }
                                            </header>
                                            <section className="amzn__title">
                                                <Link to="/" title={`${rating} out of 5 stars`} className="amzn__titleStars">
                                                    <i className={`a__icon a__icon__star a__star__${rating}`}>
                                                        <span className="a__icon__alt">{rating} Stars &amp; Up</span>
                                                    </i>
                                                </Link>
                                                <Link to="/" className="amzn__titleText a__size__base a__color__base font-weight-bold">
                                                    {title}.
                                                </Link>
                                                <span className="d-block a__size__base a__color__secondary a__color__tertiary">
                                                    Reviewed in {country} on {date}
                                                </span>
                                                {
                                                    path === "/balance-reload" && (
                                                        <section className="amzn__reviewMeta a-row a__spacing__mini">
                                                            <span className="a__color__secondary">
                                                                Gift amount: 1
                                                                <i className="a__icon a__icon__text__separator" role="img" aria-label="|"></i>
                                                                Design name: Amazon One-Time Reload
                                                            </span>
                                                            <i className="a__icon a__icon__text__separator" role="img" aria-label="|"></i>
                                                            <span className="a__size__mini__ii a__color__state font-weight-bold">
                                                                Verified Purchase
                                                            </span>
                                                        </section>
                                                    )
                                                }
                                            </section>
                                            <p className="amzn__reviewBody a__size__base__ii a__spacing__small">
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
                                            <span className="amzn__reviewHelpful">
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
                        <section className="amzn__reviewFooter">
                            <LineFive />
                            <Link to="/" className="a__link__emphasis font-weight-bold">See all reviews</Link>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Reviews
