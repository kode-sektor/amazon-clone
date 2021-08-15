import React from 'react'
import { Link } from 'react-router-dom'

import { GrClose } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";

import { LocationButton } from '../../components/UI/Button'

import software_development from '../../images/banner/software-development.jpg'

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
            <section className="jobs__banner">
                <section className="container">
                    <div className="row">
                        <div className="jobs__bannerBody col-10 col-sm-11 col-lg-12 py-2">
                            Amazon employees around the world uphold our unique corporate culture by embodying our Leadership Principles.&nbsp; 
                            <Link to="/">Learn More</Link>
                        </div>
                    </div>
                    <span className="jobs__closeButton py-2 px-4">
                        <GrClose/>
                    </span>
                </section>
            </section>
            <section className="jobs__searchContainer">
                <section className="container">
                    <div className="row">
                        <section className="jobs__findJobs col-12">
                            <h1 className="jobs__findJobs__title">
                                Find jobs
                            </h1>
                            <section>
                                <form action="" className="jobs__searchForm">
                                    <div className="jobs__locationSearchBar row">
                                        <section className="col-12 col-md-8">
                                            <div className="jobs__textSearch">
                                                <div className="hide-clear-icon">
                                                    
                                                </div>
                                                <span className="jobs__typeAhead">
                                                    <input type="text" className="form-control jobs__ttInput" placeholder="Search for jobs by title or keyword"/>
                                                </span>
                                            </div>
                                        </section>
                                        <section className="col-12 col-md-4">
                                            <div className="jobs__searchbox">
                                                <span className="jobs__typeAhead">
                                                    <span className="jobs__searchMarker">
                                                        <FaMapMarkerAlt/>
                                                    </span>
                                                    <input type="text" className="form-control jobs__ttInput" placeholder="Location"/>
                                                </span>
                                            </div>
                                        </section>
                                    </div>
                                    <LocationButton/>
                                </form>
                            </section>
                        </section>
                    </div>
                </section>
            </section>
            <section className="campaignBanner">
                <div className="container">
                    <div className="row pb-4 pt-4">
                        <div className="d-md-block col-lg-12">
                            <img src={software_development} alt="Fail fast; Learn Fast. Software Development" className="bannerImg" />
                            <div className="banner__btn__container">
                                <Link to="/" className="btn banner__btn">Learn more »</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portalTiles">
                <div className="container">
                    <div className="row">
                        <section className="portalTiles__container d-flex flex-column justify-content-between col-12 col-lg-4">
                            <header className="portalTiles__tile d-flex flex-column justify-content-start">
                                <h2>Opportunities for students</h2>
                                <p>
                                    Learn about, search for, and apply to internships and full-time opportunities for students.
                                </p>
                            </header>
                            <footer className="portalTiles__btn d-flex justify-content-center">
                                <Link to="/" className="btn btn__quarternary">
                                    View open jobs
                                </Link>
                            </footer>
                        </section>
                        <section className="portalTiles__container d-flex flex-column justify-content-between col-12 col-lg-4">
                            <header className="portalTiles__tile d-flex flex-column justify-content-start">
                                <h2>Fulfillment Center hiring</h2>
                                <p>
                                    Learn about Fulfillment center career opportunities, and see open jobs at our Amazon Fulfillment Portal.
                                </p>
                            </header>
                            <footer className="portalTiles__btn d-flex justify-content-center">
                                <Link to="/" className="btn btn__quarternary">
                                    View fulfillment jobs
                                </Link>
                            </footer>
                        </section>
                        <section className="portalTiles__container d-flex flex-column justify-content-between col-12 col-lg-4">
                            <header className="portalTiles__tile d-flex flex-column justify-content-start">
                                <h2>Software Development</h2>
                                <p>
                                    Explore job opportunities and what it's like to be a software engineer at Amazon.
                                </p>
                            </header>
                            <footer className="portalTiles__btn d-flex justify-content-center">
                                <Link to="/" className="btn btn__quarternary">
                                    View open jobs
                                </Link>
                            </footer>
                        </section>
                    </div>
                </div>
            </section>
            <footer>

            </footer>
        </div>
    )
}

export default Jobs
