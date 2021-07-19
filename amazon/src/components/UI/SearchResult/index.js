import React from 'react'

const SearchResult = ({range, total, title}) => {
    return (
        <section className="a__spacing__medium">
            <section className="a__box">
                <div className="a__box__inner">
                    <span className="a__size__base a__color__base font-weight-normal">
                        {range} of over {total} results for
                    </span>&nbsp;
                    <span className="a__size__base a__color__state font-weight-bold">{title}</span>
                </div>
            </section>
        </section>
    )
}

export default SearchResult
