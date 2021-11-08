import React from 'react'

const AlexaFeatures = ({ img, text }) => {
    return (
        <>
            <section className="row padding__bottom__minibase align-items-center ">
                <section className="col-1 padding__top__xsmall">
                    {img}
                </section>
                <section className="col-11 padding__left__xlarge padding__top__xsmall">
                    <p className="alexa__featuresIntrotxt">
                        {text}
                    </p>
                </section>
            </section>
        </>
    )
}

export default AlexaFeatures
