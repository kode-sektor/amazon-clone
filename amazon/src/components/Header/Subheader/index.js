import React from 'react'

import { Button } from 'reactstrap';

import './index.css'

const Subheader = () => {
    return (
        <Row className="nav__main">
            <Button>
                <span className="nav__sprite"></span>
                <span className="">All</span>
            </Button>
        </Row>
    )
}

export default Subheader
