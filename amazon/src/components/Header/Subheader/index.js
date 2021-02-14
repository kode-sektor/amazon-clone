import React from 'react'

import { Row, Button } from 'reactstrap';

import './index.css'

const Subheader = () => {
    return (
        <section className="nav__main">
            <Button>
                <span className="nav__sprite"></span>
                <span className="">All</span>
            </Button>
        </section>
    )
}

export default Subheader
