import React from 'react'
import { Link } from 'react-router-dom'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

import SecondaryHeader from '../../components/Header/SecondaryHeader'
import SecondaryBreadCrumb from '../../components/UI/BreadCrumb/SecondaryBreadCrumb'
import SecondaryNav from '../../components/UI/Nav/SecondaryNav'
import { SecondaryButton } from '../../components/UI/Button'

import amazon_module_logo from '../../images/amazon-module-logo.svg'

import './index.css'

const Press = () => {

    const options = [
        { value: '', label: 'None', className: 'press__form--dropdown'},
        { value: '2021', label: '2021', className: 'press__form--dropdown'},
        { value: '2020', label: '2020', className: 'press__form--dropdown'},
        { value: '2019', label: '2019', className: 'press__form--dropdown'},
        { value: '2018', label: '2018', className: 'press__form--dropdown'},
        { value: '2017', label: '2017', className: 'press__form--dropdown'},
        { value: '2016', label: '2016', className: 'press__form--dropdown'},
        { value: '2015', label: '2015', className: 'press__form--dropdown'},
        { value: '2014', label: '2014', className: 'press__form--dropdown'},
        { value: '2013', label: '2013', className: 'press__form--dropdown'},
        { value: '2012', label: '2012', className: 'press__form--dropdown'},
        { value: '2011', label: '2011', className: 'press__form--dropdown'},
        { value: '2010', label: '2010', className: 'press__form--dropdown'},
        { value: '2009', label: '2009', className: 'press__form--dropdown'},
        { value: '2009', label: '2009', className: 'press__form--dropdown'},
        { value: '2007', label: '2007', className: 'press__form--dropdown'},
        { value: '2006', label: '2006', className: 'press__form--dropdown'},
        { value: '2005', label: '2005', className: 'press__form--dropdown'},
        { value: '2004', label: '2004', className: 'press__form--dropdown'},
        { value: '2003', label: '2003', className: 'press__form--dropdown'},
        { value: '2002', label: '2002', className: 'press__form--dropdown'}
    ]

    const defaultOption = options[0];

    return (
        <div className="press--page">
            <SecondaryHeader/>
            <main className="press--contentWrapper">
                <nav className="press__nav">
                    <section className="press__navContent">
                        <div className="press__navBreadcrumbs">
                            <SecondaryBreadCrumb
                                links={
                                        [
                                            {
                                                href : "/",
                                                text : <>About Amazon&nbsp;&nbsp;</>
                                            },
                                            {
                                                href : "/",
                                                text : <>&nbsp;Press Center&nbsp;&nbsp;</>
                                            },
                                            {
                                                href : "/",
                                                text : <>&nbsp;Press Release Archive&nbsp;&nbsp;</>
                                            },
                                            {
                                                href : "/",
                                                text : <>&nbsp;Canadian Press Releases&nbsp;&nbsp;</>
                                            }
                                        ]
                                    }
                            />
                        </div>
                    </section>
                </nav>
                <section className="press__main d-flex">
                    <section className="col-md-4 pl-0">
                        <nav className="secondary__nav press__secNav">
                            <SecondaryNav
                                links={
                                    [
                                        {
                                            href : "/",
                                            text : "Press release archive"
                                        },
                                        {
                                            href : "/",
                                            text : "Images and videos"
                                        },
                                        {
                                            href : "/",
                                            text : "About Amazon",
                                            external: true
                                        },
                                        {
                                            href : "/",
                                            text : "The Amazon blog",
                                            external: true
                                        },
                                        {
                                            href : "/",
                                            text : "Contact Amazon PR"
                                        }
                                    ]
                                }
                            />
                        </nav>
                    </section>
                    <section className="col-md-8">
                        <h1 className="press__title">
                            Canadian press releases
                        </h1>
                        <section>
                            <form action="" className="press__form">
                                <section className="press__form--field d-inline-block">
                                    <label for="edit-year-value" className="d-inline-block font-weight-bold">
                                        Year
                                    </label>
                                    {/*<select name="" id="">
                                        <option value="_none">None</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2021">2021</option>
                                    </select> */}
                                    <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
                                </section>
                                <SecondaryButton/>
                            </form>
                            <section>
                                <article className="press__articlePosts">
                                    <div className="press__articleHeadline">
                                        August 2, 2021
                                    </div>
                                    <section className="press__articleBody">
                                        <Link to="Amazon’s Renewable Energy Projects in Canada">
                                            Amazon’s Renewable Energy Projects in Canada
                                        </Link>
                                    </section>
                                </article>
                                <article className="press__articlePosts">
                                    <div className="press__articleHeadline">
                                        August 2, 2021
                                    </div>
                                    <section className="press__articleBody">
                                        <Link to="Amazon’s Renewable Energy Projects in Canada">
                                            Projets d’énergie renouvelable d’Amazon au Canada
                                        </Link>
                                    </section>
                                </article>
                                <article className="press__articlePosts">
                                    <div className="press__articleHeadline">
                                        July 27, 2021
                                    </div>
                                    <section className="press__articleBody">
                                        <Link to="Amazon’s Renewable Energy Projects in Canada">
                                            “Alexa, what can I ask Bianca Andreescu?”
                                        </Link>
                                    </section>
                                </article>
                                <article className="press__articlePosts">
                                    <div className="press__articleHeadline">
                                        July 27, 2021
                                    </div>
                                    <section className="press__articleBody">
                                        <Link to="Amazon’s Renewable Energy Projects in Canada">
                                            « Alexa, qu’est-ce que je peux demander à Bianca Andreescu? »
                                        </Link>
                                    </section>
                                </article>
                                <article className="press__articlePosts">
                                    <div className="press__articleHeadline">
                                        July 20, 2021
                                    </div>
                                    <section className="press__articleBody">
                                        <Link to="Amazon’s Renewable Energy Projects in Canada">
                                            Amazon Canada s’associe avec Carey et Angela Price pour offrir une transformation déco surprise à une héroïne du quotidien québécoise
                                        </Link>
                                    </section>
                                </article>
                                <article className="press__articlePosts">
                                    <div className="press__articleHeadline">
                                        July 20, 2021
                                    </div>
                                    <section className="press__articleBody">
                                        <Link to="Amazon’s Renewable Energy Projects in Canada">
                                            Amazon Canada Teams Up with Carey and Angela Price to Surprise Quebec “Hometown Hero” with a Home Makeover
                                        </Link>
                                    </section>
                                </article>
                                <article className="press__articlePosts">
                                    <div className="press__articleHeadline">
                                        June 28, 2021
                                    </div>
                                    <section className="press__articleBody">
                                        <Link to="Amazon’s Renewable Energy Projects in Canada">
                                            Amazon prend de l’expansion en Alberta en inaugurant son premier centre d’exploitation robotisé dans la province et crée plus de 1 000 nouveaux emplois à temps plein et à temps partiel
                                        </Link>
                                    </section>
                                </article>
                                <article className="press__articlePosts">
                                    <div className="press__articleHeadline">
                                        June 28, 2021
                                    </div>
                                    <section className="press__articleBody">
                                        Amazon Expands in Alberta with the Province’s First Amazon Robotics Fulfillment Center, Creates More Than 1,000 New Full- and Part-Time Jobs
                                    </section>
                                </article>
                                <article className="press__articlePosts">
                                    <div className="press__articleHeadline">
                                        July 20, 2021
                                    </div>
                                    <section className="press__articleBody">
                                        <Link to="Amazon’s Renewable Energy Projects in Canada">
                                            Amazon Canada Teams Up with Carey and Angela Price to Surprise Quebec “Hometown Hero” with a Home Makeover
                                        </Link>
                                    </section>
                                </article>
                                <article className="press__articlePosts">
                                    <div className="press__articleHeadline">
                                        July 20, 2021
                                    </div>
                                    <section className="press__articleBody">
                                        <Link to="Amazon’s Renewable Energy Projects in Canada">
                                            Amazon Canada Teams Up with Carey and Angela Price to Surprise Quebec “Hometown Hero” with a Home Makeover
                                        </Link>
                                    </section>
                                </article>
                                <article className="press__articlePosts">
                                    <div className="press__articleHeadline">
                                        July 20, 2021
                                    </div>
                                    <section className="press__articleBody">
                                        <Link to="Amazon’s Renewable Energy Projects in Canada">
                                            Amazon Canada Teams Up with Carey and Angela Price to Surprise Quebec “Hometown Hero” with a Home Makeover
                                        </Link>
                                    </section>
                                </article>
                                <article className="press__articlePosts">
                                    <div className="press__articleHeadline">
                                        July 20, 2021
                                    </div>
                                    <section className="press__articleBody">
                                        <Link to="Amazon’s Renewable Energy Projects in Canada">
                                            Amazon Canada Teams Up with Carey and Angela Price to Surprise Quebec “Hometown Hero” with a Home Makeover
                                        </Link>
                                    </section>
                                </article>
                                <nav>
                                    <ul className="page__items">
                                        <li className="page__itemsList page__itemsList--active">
                                            <Link to="/">
                                                1
                                            </Link>
                                        </li>
                                        <li className="page__itemsList">
                                            <Link to="/">
                                                2
                                            </Link>
                                        </li>
                                        <li className="page__itemsList">
                                            <Link to="/">
                                                3
                                            </Link>
                                        </li>
                                        <li className="page__itemsList">
                                            <Link to="/">
                                                4
                                            </Link>
                                        </li>
                                        <li className="page__itemsList page__itemsList--ellipsis">
                                            ...
                                        </li>
                                        <li className="page__itemsList page__itemsList--next">
                                            <Link to="/">
                                                next ›
                                            </Link>
                                        </li>
                                        <li className="page__itemsList page__itemsList--ellipsis">
                                            <Link to="/">
                                                last »
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </section>
                        </section>
                    </section>
                </section>
            </main>
        </div>
    )
}

export default Press
