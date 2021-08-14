import React from 'react'

const ConvertToUpper = (y) => {
    // oil-rubbed-bronze to Oil Rubbed Bronze
    return y.replace(/-/g, ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
}

export { ConvertToUpper }