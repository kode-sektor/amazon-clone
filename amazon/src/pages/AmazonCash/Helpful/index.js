import React from 'react'
import { Link } from 'react-router-dom'

const Helpful = ({ href, img, alt, heading, body }) => {

    return (
            <section className="padding__left__xlarge padding__bottom__large padding__right__xlarge">
                <div className="column">
                    <Link to={href}>
                        <div className="padding__bottom__minibase text-center">
                            <img src={img} alt={alt} />
                        </div>
                    </Link>
                    <section className="padding__bottom__mini">
                        <h4 className="text-center color__normal heading__size--small">
                            <strong>{heading}</strong>
                        </h4>
                    </section>
                    <section className="padding__bottom__base">
                        <p className="text text-center color__dark text__size--medium p__bottom">
                            {body}
                        </p>
                    </section>
                    <section className="text-center">
                        <Link to="/" className="link__type__button">
                            Read now
                        </Link>
                    </section>
                </div>
            </section>
    )
}

export default Helpful
