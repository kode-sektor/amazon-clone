import React from 'react'

import './index.css'

const Benefit = ({img, alt, txt1, txt2, body, newProp}) => {
    console.log(newProp)
    return (
        <section className="mastercard__benefit col-4">
            <img src={img} alt={alt}/>
            <section className="text-center">
                <span className="a__size__base__ii font-weight-bold">
                    {txt1 && 
                        (
                            <span className="a__size__large__ii">
                                {txt1} <br/>
                            </span>
                        )
                    }
                    {txt2} <br/>
                </span>
                <p className="mastercard__benefitText a__spacing__base a__size__base">
                    {body}
                </p>
            </section>
        </section>
    )
}

export default Benefit
