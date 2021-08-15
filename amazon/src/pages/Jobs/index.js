import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const Jobs = () => {
    return (
        <div className="mainContent jobs">
            <header>
                <nav className="secondaryHeader navbar navbar-dark navbar__neutral d-flex align-items-center justify-content-between">
                    <div className="hamburgerBlock">
                        <Link to="/" className="hamburger d-inline-block ml-md-auto">
                        </Link>
                        <Link to="/" className="navbar-brand mt-2 mr-2">
                        <div className="logo">
                            <div class="sr-only">logo link to home</div>
                        </div>
                        </Link>
                    </div>
                    <span className="navbar-links align-items-center mb-1 mt-1 d-md-flex link__count__1">
                        <span className="navbar__link d-inline-block mr-1 ml-2">
                            <Link to="/check-application-status">
                                Your job application
                            </Link>
                        </span>
                    </span>
                </nav>
            </header>
            <footer>

            </footer>
        </div>
    )
}

export default Jobs
