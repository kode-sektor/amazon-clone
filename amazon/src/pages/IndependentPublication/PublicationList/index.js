import React from 'react'
import { Link } from 'react-router-dom'

const PublicationList = ({link, text}) => {
    return (
        <div className="a__box__inner px-0 py-0">
            <Link to={link}>
                <div className="publication__paneList">
                    <p className="a__spacing__none">
                        {text}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default PublicationList
