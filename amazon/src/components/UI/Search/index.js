import React from 'react'

import './index.css'

const SearchContent = () => {
    return (
        <section className="contentTaskBarItem_myx inline__myx">
            <section className="contentTaskBarElement__myx myx__search">
                <form action="">
                    <i className="myx__icon myx__icon__search"></i>
                    <input type="search" className="myx__input__text ng-pristine ng-valid" id="contentSearch_myx" name="contentSearch" placeholder="Search your content" autocomplete="off" maxlength="" />&nbsp;
                    <span className="myx__button myx__button__search">
                        <span className="myx__button__inner">
                            <button className="myx__button__text">
                                Search
                            </button>
                        </span>
                    </span>
                </form>
            </section>
        </section>
    )
}

export default SearchContent
