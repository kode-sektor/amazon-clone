import React, { useState } from 'react'

const Preferences = ({ heading, title, body, action, defaultSlide }) => {

    const [open, setOpen] = useState(defaultSlide ? true : false)

    const slide = () => setOpen(!open)

    return (
        <>
            <div className="myx__spacing__double__large">
                <button className="expander__myx myx__spacing__small" onClick={slide}>
                    <div className="row">
                        <section className="col-10 myx__size__large myx__color__state">
                            {heading}
                        </section>
                        {
                            open ? 
                                (
                                    <section className="col-2 text-right toggle__myx myx__span__last">
                                        <i className="myx__icon myx__icon__section__collapse"></i>
                                    </section>
                                ) :
                                (
                                    <section className="col-2 text-right toggle__myx myx__span__last">
                                        <i className="myx__icon myx__icon__section__expand"></i>
                                    </section> 
                                )
                        }
                        
                    </div>
                </button>
                <hr />
                {
                    open && (
                        <>
                            <section className="myx__color__base myx__spacing__small">
                                {title}
                            </section>
                            {body}
                        </>
                    )
                }
                <section className="myx__color__secondary">
                    {action}
                </section>
            </div>
        </>
    )
}

export default Preferences
