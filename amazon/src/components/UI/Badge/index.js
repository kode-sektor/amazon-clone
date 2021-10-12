import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const BestSellerAux = () => (
    <div className="a__spacing__micro badge__status">
        <Link to="/" className="a__badge">
            <span className="badge__label">
                <span className="badge__labelInner a__text__ellipsis">
                    <span className="badge__color">Bestseller</span>
                </span>
            </span>
            <span className="badge__supplementaryTxt a__text__ellipsis">in Thank You &amp; Appreciation</span>
        </Link>
    </div>
)

const BestSellerBadge = () => (
    <Link to="/" title="Gift Cards">
        <i className="a__icon a__icon__addon best__seller__badge">#1 Best Seller</i>
        <span className="cat__name">
            <span className="cat__link">in Gift Cards</span>
        </span>
    </Link>
)

export { BestSellerAux, BestSellerBadge }
