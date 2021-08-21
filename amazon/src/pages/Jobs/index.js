import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { GrClose } from "react-icons/gr";
import { FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { UncontrolledDropdown, DropdownToggle } from 'reactstrap';

import DropdownMenuLang from '../../components/UI/DropdownMenuLang'
import { LocationButton } from '../../components/UI/Button'

import { languages } from '../../utilities/data'

import software_development from '../../images/banner/software-development.jpg'
import job_teams from '../../images/job-teams.jpg'
import job_categories from '../../images/job-categories.jpg' 
import job_locations from '../../images/job-locations.jpg' 
import employee_profile_image_of_georgia from '../../images/employee-profile-image-of-georgia.jpg' 

import './index.css'

const Jobs = (props) => {

    const { modal, toggleModal, modalLangProps} = props

    const [flagdropdownOpen, setFlagdropdownOpen] = useState(false)    // flag dropdown
    // const [countryDropDown, setCountryDropDown] = useState(false)

    // Show or Hide Language Modal
    // toggleModal is a parent function because while true that a click on the 'Canada' 
    // button shows it, a click on the parent modal is also responsible for hiding both
    // the parent modal and this langModal. Thus its more correct that the function of 
    // this langModal is moved to the parent Module (Layout/index.js)

    // Flag dropdown
    const flagdropdown = () => setFlagdropdownOpen(flagdropdownOpen => !flagdropdownOpen) 
    const flagdropdownEnter = () => setFlagdropdownOpen(true)
    const flagdropdownLeave = () => setFlagdropdownOpen(false)

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
                    <button className="jobs__closeButton py-2 px-4">
                        <GrClose/>
                    </button>
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
            <section className="exploreOpportunities py-5">
                <div className="container">
                    <h2 className="exploreOpportunities__title display-4">
                        Explore opportunities
                    </h2>
                    <section className="card-deck row">
                        <section className="col-12 col-lg-4">
                            <Link to="/" className="card d-sm-block rounded">
                                <img src={job_teams} className="card-img-top rounded-top d-sm-none d-lg-block" alt="job teams"/>
                                <section className="card-body d-sm-inline-block">
                                    <h3 className="card-title">Teams</h3>
                                    <p className="card-text">Get to know Amazon's teams, from Amazon Web Services to subsidiaries.</p>
                                    <span className="fakeLink card-body-fake-link d-none d-sm-block d-lg-none">See all teams</span>
                                </section>
                                <footer className="card-footer d-block d-sm-none d-lg-block">
                                    <span className="fake__link">See all teams</span>
                                </footer>
                            </Link>
                        </section>
                        <section className="col-12 col-lg-4">
                            <Link to="/" className="card d-sm-block rounded">
                                <img src={job_categories} className="card-img-top rounded-top d-sm-none d-lg-block" alt="job categories"/>
                                <section className="card-body d-sm-inline-block">
                                    <h3 className="card-title">Job Categories</h3>
                                    <p className="card-text">Want to be an Amazonian? Find the right job for you.</p>
                                    <span className="fakeLink card-body-fake-link d-none d-sm-block d-lg-none">See all teams</span>
                                </section>
                                <footer className="card-footer d-block d-sm-none d-lg-block">
                                    <span className="fake__link">See all job categories</span>
                                </footer>
                            </Link>
                        </section>
                        <section className="col-12 col-lg-4">
                            <Link to="/" className="card d-sm-block rounded">
                                <img src={job_locations} className="card-img-top rounded-top d-sm-none d-lg-block" alt="job teams"/>
                                <section className="card-body d-sm-inline-block">
                                    <h3 className="card-title">Locations</h3>
                                    <p className="card-text">View Amazon's office locations across the globe.</p>
                                    <span className="fakeLink card-body-fake-link d-none d-sm-block d-lg-none">See all teams</span>
                                </section>
                                <footer className="card-footer d-block d-sm-none d-lg-block">
                                    <span className="fake__link">See all locations</span>
                                </footer>
                            </Link>
                        </section>
                    </section>
                </div>
            </section>
            <section className="employeeProfile">
                <div className="container">
                    <div className="row">
                        <section className="employeeProfile__picture col-6 offset-3 offset-sm-0 col-sm-4">
                            <img src={employee_profile_image_of_georgia} className="rounded-circle img-fluid" alt="employee profile image of Georgia"/>
                        </section>
                        <section className="employeeProfile__info col-12 col-sm-8">
                            <h2 className="employeeProfile__name">Georgia</h2>
                            <p className="employeeProfile__jobTitle">Site Leader</p>
                            <section className="employeeProfile__description fade-block">
                                <p>Georgia started in 2016 as an Area Manager in Peterbrough, UK. Since then, she has been promoted to an Operations Manager, a Senior Operations Manager, and finally, a Site Leader at an FC in Nottinghamshire, UK.</p>
                                <p>When asked what she enjoys most about the Pathways program, she replies, “The best way to describe the program is ‘the world is your oyster,’ as you get support to explore new ideas and make significant changes for the business.” She continues, “I’ve worked in five different types of FCs, in different departments, and in different roles. In 2019, supported by both my team and stakeholders, I managed the rollout of a process change that led to a large amount of savings.”</p>
                                <p>Asked about participation in different groups at Amazon, she answers, “Apart from daily operations, I’ve been an active member in the Women in Ops affinity group, the Black Employee Network, and the Pathways Circle Mentor program.” She adds, “The program stretches you, and if you take advantage of it and maximize it, the rewards are unending.”</p>
                                <p>When asked about her biggest achievement at Amazon, she states, “In 2019, my manager nominated me for the UK Everywoman in Transport &amp; Logistics award in the Above &amp; Beyond category. This award celebrates a woman who has helped drive an organization’s success.” She continues, “I was honored to receive the nomination and was awestruck when I actually won the award.”</p>
                                <p>Describing her biggest challenge in her role, she says, “Shortly after being promoted to a Site Leader, I launched a new, robotics-powered FC. It was a stretch assignment as I had to learn how to launch an FC while also learning how to be a Site Leader.” She continues, “Setting up a dream team and preparing for the launch, was exciting, enlightening, and challenging.”</p>
                            </section>
                            <section className="employeeProfile__learnMore">
                                <div className="employeeProfile__btnWrapper">
                                    <div>
                                        <Link to="/" className="btn btn__quarternary">
                                            Read the full story
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
                </div>
            </section>
            <section className="wePioneer position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <section className="wePioneer__details">
                                <h1 className="wePioneer__title">
                                    Come build the future with us
                                </h1>
                                <p className="wePioneer__subtitle col-12 col-md-8 col-lg-7">
                                    Our mission is to be Earth's most customer-centric company. This is what unites Amazonians across teams and geographies as we are all striving to delight our customers and make their lives easier, one innovative product, service, and idea at a time.
                                </p>
                                <div className="wePioneer__buttonWrapper">
                                    <Link to="/" className="wePioneer__cta btn btn-tertiary color-neutral">
                                        Learn about working at Amazon
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="jobsFooter">
                <section className="media__icons">
                    <div className="media__group d-flex">
                        <div className="container">
                            <div className="row">
                                <span className="jobsFooter__links">JOIN US ON</span>
                                <ul className="jobsFooter__icons d-flex ml-0">
                                    <li>
                                        <Link to="/" className="cxt__icon__common cxt__icon__facebook">
                                            <FaFacebookF/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="cxt__icon__common cxt__icon__linkedin">
                                            <FaLinkedinIn/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="cxt__icon__common cxt__icon__instagram">
                                            <FaInstagram/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="cxt__icon__common cxt__icon__twitter">
                                            <FaTwitter/> 
                                        </Link>
                                    </li>
                                </ul>
                                <div class="media__group__border"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <nav className="jobsFooter__nav">
                    <div className="container">
                        <div className="row">
                            <section className="col-12 col-sm-6 col-md-3 jobsFooter__navLink">
                                <h4 className="jobsFooter__navTitle">Find Careers</h4>
                                <ul className="ml-0 mb-3">
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">Job Categories</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">Teams</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">Locations</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">US and EU Military recruiting</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">Fulfillment center jobs</Link>
                                    </li>
                                </ul>
                            </section>
                            <section className="col-12 col-sm-6 col-md-3 jobsFooter__navLink">
                                <h4 className="jobsFooter__navTitle">Working At Amazon</h4>
                                <ul className="ml-0 mb-3">
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">Culture</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">Benefits</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">Amazon Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">Diversity at Amazon</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">Our leadership principles</Link>
                                    </li>
                                </ul>
                            </section>
                            <section className="col-12 col-sm-6 col-md-3 jobsFooter__navLink">
                                <h4 className="jobsFooter__navTitle">Find Careers</h4>
                                <ul className="ml-0 mb-3">
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">Interview tips</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">Review application statu</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">Disability accommodations</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="jobsFooter__navItem">EU background checks</Link>
                                    </li>
                                </ul>
                            </section>
                            <section className="col-12 col-sm-6 col-md-3 jobsFooter__navLink">
                                <UncontrolledDropdown isOpen={flagdropdownOpen} toggle={flagdropdown} tag="span" className="langToggle large btn__outline__info">
                                    <DropdownToggle className="langLink">
                                        <span className="amzn__country__icon amzn__globeIcon"></span>&nbsp;
                                        <span className="amzn__logo__base">English</span>
                                    </DropdownToggle>
                                    <DropdownMenuLang
                                        type={"large"}
                                        optionList={ 
                                            languages.map(item => (
                                                <li>
                                                    <button type="button" value="Start machine" value={item.language} className="dropdown-item dropdownMenuLang">
                                                    {item.text}
                                                    </button>
                                                </li>
                                            ))
                                        }
                                    />
                                </UncontrolledDropdown>
                            </section>
                        </div>
                    </div>
                </nav>
                <section className="jobsFooter__secNav">
                    <div className="container">
                        <div className="row">
                            <section className="col-md-6 col-sm-12 jobsFooter__secNavCol d-flex align-items-center">
                                <p className="my-0">
                                Amazon is committed to a diverse and inclusive workplace. Amazon is an equal opportunity employer and does not discriminate on the basis of race, national origin, gender, gender identity, sexual orientation, protected veteran status, disability, age, or other legally protected status.
                                </p>
                            </section>
                            <section className="col-md-3 col-sm-4 col-12 jobsFooter__secNavCol d-flex justify-content-md-center align-items-center">
                                <Link to="/" className="jobsFooter__secNavLink">Privacy and Data</Link>&nbsp;
                                <Link to="/" className="jobsFooter__secNavLink">Impressum</Link>
                            </section>
                            <section className="col-md-3 col-sm-8 col-12 jobsFooter__secNavCol d-flex text-right align-items-center">
                            © 1996-2021, Amazon.com, Inc. or its affiliates
                            </section>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Jobs
