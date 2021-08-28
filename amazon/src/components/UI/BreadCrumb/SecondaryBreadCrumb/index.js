import React from 'react'
import { Link } from 'react-router-dom'

import { AiFillCaretRight } from 'react-icons/ai'

const SecondaryBreadCrumb = ({links}) => {
    return (
        links.map((item, index) => {
            const {href, text} = item
            return (
                <>
                    <Link to={href}>
                        {text}
                    </Link>&nbsp;
                    {
                    ((index + 1) !== links.length) && (
                        <>
                            <AiFillCaretRight style={{"color" : "var(--blue-12"}}/>&nbsp;
                        </>
                    )}
                </>
            )
        })
    )
}

export default SecondaryBreadCrumb
