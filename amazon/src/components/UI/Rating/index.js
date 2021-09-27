import React from 'react'
import { Link } from 'react-router-dom'

import { LineTwo } from '../Line'

import './index.css'

const Rating = ({avgRating, totalRating, globalRatings, starFive,
                    starFour, starThree, starTwo, starOne, dropdown}) => {
    return (
        <section className="rating__dropdown">
            <div className="a__spacing__small">
                <i className="a__icon a__icon__star a__star__4__5"></i>&nbsp;
                <span className="a__size__medium a__color__base font-weight-bold">
                    {avgRating} out of {totalRating}
                </span>
            </div>
            <div className="a__row a__spacing__medium">
                <span className="a__size__base__ii a__color__secondary">
                    {globalRatings} global ratings
                </span>
            </div>
            <table className="a__spacing__base">
                <tbody>
                    <tr className="rating__ratingBar">
                        <td>
                            <span className="a__size__base__ii">
                                <Link to="/" title={`${starFive}% of reviews have 5 stars`}>
                                    5 star
                                </Link>
                            </span>
                        </td>
                        <td>
                            <Link to="/">
                                <meter className="a__meter" min="0" max="100" value={starFive}>
                                    {starFive}%
                                </meter>
                            </Link>
                        </td>
                        <td>
                            <Link to="/" className="a__size__base a__link__normal" title={`${starFive}% of reviews have 5 stars`}>
                                {starFive}%
                            </Link>
                        </td>
                    </tr>
                    <tr className="rating__ratingBar">
                        <td>
                            <span className="a__size__base__ii">
                                <Link to="/" title={`${starFour}% of reviews have 5 stars`}>
                                    4 star
                                </Link>
                            </span>
                        </td>
                        <td>
                            <Link to="/">
                                <meter className="a__meter" min="0" max="100" value={starFour}>
                                    {starFour}%
                                </meter>
                            </Link>
                        </td>
                        <td>
                            <Link to="/" className="a__size__base a__link__normal" title={`${starFour}% of reviews have 4 stars`}>
                                {starFour}%
                            </Link>
                        </td>
                    </tr>
                    <tr className="rating__ratingBar">
                        <td>
                            <span className="a__size__base__ii">
                                <Link to="/" title={`${starThree}% of reviews have 3 stars`}>
                                    3 star
                                </Link>
                            </span>
                        </td>
                        <td>
                            <Link to="/">
                                <meter className="a__meter" min="0" max="100" value={starThree}>
                                    {starThree}%
                                </meter>
                            </Link>
                        </td>
                        <td>
                            <Link to="/" className="a__size__base a__link__normal" title={`${starThree}% of reviews have 3 stars`}>
                                {starThree}%
                            </Link>
                        </td>
                    </tr>
                    <tr className="rating__ratingBar">
                        <td>
                            <span className="a__size__base__ii">
                                <Link to="/" title={`${starTwo}% of reviews have 2 stars`}>
                                    2 star
                                </Link>
                            </span>
                        </td>
                        <td>
                            <Link to="/">
                                <meter className="a__meter" min="0" max="100" value={starTwo}>
                                    {starTwo}%
                                </meter>
                            </Link>
                        </td>
                        <td>
                            <Link to="/" className="a__size__base a__link__normal" title={`${starTwo}% of reviews have 2 stars`}>
                                {starTwo}%
                            </Link>
                        </td>
                    </tr>
                    <tr className="rating__ratingBar">
                        <td>
                            <span className="a__size__base__ii">
                                <Link to="/" title={`${starOne}% of reviews have 1 star`}>
                                    1 star
                                </Link>
                            </span>
                        </td>
                        <td>
                            <Link to="/">
                                <meter className="a__meter" min="0" max="100" value={starOne}>
                                    {starOne}%
                                </meter>
                            </Link>
                        </td>
                        <td>
                            <Link to="/" className="a__size__base a__link__normal" title={`${starOne}% of reviews have 1 star`}>
                                {starOne}%
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            {
                dropdown && (
                    <>
                        <LineTwo />
                        <div className="a__spacing__base text-center">
                            <Link to="/" className="a__size__base a__link__emphasis">
                                See all customer reviews
                            </Link>
                        </div>
                    </>
                )
            }
        </section>
    )
}

export default Rating
