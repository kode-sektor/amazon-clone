import React from 'react'
import { Link } from 'react-router-dom'

import { AiFillCaretRight } from 'react-icons/ai'

import './index.css'

const SecondaryBreadCrumb = ({links}) => {
        return (
            <section className="moduleBreadcrumb"> 
            {
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
                                    <AiFillCaretRight style={{"color" : "var(--blue-12)"}}/>&nbsp;
                                </>
                            )}
                        </>
                    )
                })
            }
            </section>
        )
}

export default SecondaryBreadCrumb
