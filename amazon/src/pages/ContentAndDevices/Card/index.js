import React from 'react'

import { MyxBtn } from '../../../components/UI/Button'

const Card = ({img, title}) => {
    return (
        <section className="contentPrivacy__card">
            <div className="contentPrivacy__imgContainer">
                {img}
            </div>
            <div className="contentPrivacy__cardDetails">
                <div className="contentPrivacy__cardTitle">
                    {title}
                </div>
                <div className="contentPrivacy__cardTitle">
                    <span></span>
                </div>
                <div className="contentPrivacy__cardBtn">
                    <MyxBtn 
                        text={"Manage Settings"}
                        mode={"myx__button__small"}
                    />
                </div>
            </div>
        </section>
    )
}

export default Card
