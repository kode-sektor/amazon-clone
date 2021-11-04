import React from 'react'
import { Link } from 'react-router-dom'


const Preferences = ({ heading, title, body, action }) => {
    return (
        <>
            <div className="myx__spacing__double__large">
                <Link to="/" className="expander__myx myx__spacing__small">
                    <div className="row">
                        <section className="col-10 myx__size__large myx__color__state">
                            {heading}
                        </section>
                        <section className="col-2 text-right toggle__myx myx__span__last">
                            <i className="myx__icon myx__icon__section__collapse"></i>
                        </section>
                    </div>
                </Link>
                <hr />
                <section className="myx__color__base myx__spacing__small">
                    {title}
                </section>
                {body}
                <section className="myx__color__secondary d-none">
                    {action}
                </section>
            </div>
        </>
    )
}

export default Preferences
