import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const Tile = ({items}) => {
    return (
        items.map((item) => (
            <section className="product__container d-inline-block w-100 text-center box__shadow">   
                <section className="tile">
                    <figure className="tile__image">
                        <img src={item.img} alt={item.alt} />
                    </figure>
                    <h4 className="tile__title">
                        <Link to="/">{item.title}</Link>
                    </h4>
                    <p className="tile__content">{item.body}</p>
                </section>
            </section>
        ))
    )
}

export default Tile
