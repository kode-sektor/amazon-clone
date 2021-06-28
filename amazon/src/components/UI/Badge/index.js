import React from 'react'

import { Link } from 'react-router-dom'

import './index.css'

const BestSellerAux = () => {
    return (
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
}

export default BestSellerAux
