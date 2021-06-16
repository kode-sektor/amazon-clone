import React from 'react'

const CouponBox = ({ img, save, caption, button}) => {
    return (
        <div className="coupon__gridSingle">
            <div className="coupon__gridInnerBlock">
                <figure className="coupon__gridImg">
                    <img src={img[0].src} alt={img[0].alt} />
                </figure>
                <div className="coupon__itemTitle">
                    <span className="a__color__base a__size__medium__ii font-weight-bold">
                            Save ${save}
                    </span>
                </div>
                <div className="coupon__gridTitle">
                    <span className="coupon__gridTitleText a__size__base a__color__link">
                        {caption}
                    </span>
                </div>
                <div className="coupon__clip">
                    {button}
                </div>
            </div>
        </div>
    )
}

export default CouponBox
