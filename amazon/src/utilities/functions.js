import React, { createRef, useState, useEffect } from 'react'

const ConvertToUpper = (y) => {
    // 'oil-rubbed-bronze' to 'Oil Rubbed Bronze'
    return y.replace(/-/g, ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
}

const StickHeader = ({ children, sticky=false, className="", ...rest }) => {

    const ref = createRef()
    const [isSticky, setIsSticky] = useState(false)

    // mount 
    useEffect(() => {
        const cachedRef = ref.current,
            // set 'isSticky' state when in view
            observer = new IntersectionObserver(
                ([e]) => setIsSticky(e.intersectionRatio < 1),
                {threshold: [1]}
            )

        observer.observe(cachedRef)
        
        // unmount
        return function() {
            observer.unobserve(cachedRef)
        }
    }, [ref, isSticky])
    
    return (
        // 'sticky-top' is 'position: sticky' class from bootstrap
        // Had to add it to the section parent because 'position: sticky'
        // does not work on child element
        <section className="sticky-top" ref={ref} {...rest}>
            {children}
        </section>
    )
}

export { ConvertToUpper, StickHeader }