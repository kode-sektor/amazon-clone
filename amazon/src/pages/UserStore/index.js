import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout/index'

import Slider from '../../components/UI/Carousel/Carousel'
import CarouselDetailed from '../../components/UI/Carousel/CarouselDetailed'

import hp_printers_eco_efficient_18 from '../../images/products/hp-printers-eco-efficient-18.jpg'
import hilroy_coil_one_subject_notebook from '../../images/products/hilroy-coil-one-subject-notebook.jpg'

import ameriwood_lumina from '../../images/products/ameriwood-home-lumina-fireplace-tv-stand-white.jpg'
import modern_cube from '../../images/products/baxton-studio-siskal-modern-cube-ottoman-white-set-of-2.jpg'
import monterey_tv_stand from '../../images/products/convenience-concepts-151401W-designs2Go-monterey-tv-stand.jpg'
import frosted_endtable from '../../images/products/global-furniture-clear-frosted-occasional-end-table.jpg'
import leather_swivel from '../../images/products/furmax-bar-stools-modern-pu-leather-swivel.jpg'
import faux_leather from '../../images/products/best-choice-products-faux-leather-modern-convertible.jpg'


import './index.css'

const UserStore = () => {
    return (
        <Layout>
            <section className="yourStore">
                <div className="yourStore__center">
                    <section>
                        <header className="welcome__msg">
                            Recommended for you, Kay
                        </header>
                        <section className="yourStore__gallery">
                            <ul className="a__unordered__list a__nostyle yourStore__galleryContainer d-flex">
                                <li className="yourStore__galleryItem">
                                    <div className="yourStore__cardFaceoutContainer">
                                        <section className="yourStore__cardImages">
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                        </section>
                                        <section>
                                            <section className="yourStore__cardTitle">
                                                Buy it again in Office Products
                                            </section>
                                            <h6 className="yourStore__cardCount">4 ITEMS</h6>
                                        </section>
                                    </div>
                                </li>
                                <li className="yourStore__galleryItem">
                                    <div className="yourStore__cardFaceoutContainer">
                                        <section className="yourStore__cardImages">
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                        </section>
                                        <section>
                                            <section className="yourStore__cardTitle">
                                                Buy it again in Office Products
                                            </section>
                                            <h6 className="yourStore__cardCount">4 ITEMS</h6>
                                        </section>
                                    </div>
                                </li>
                                <li className="yourStore__galleryItem">
                                    <div className="yourStore__cardFaceoutContainer">
                                        <section className="yourStore__cardImages">
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                        </section>
                                        <section>
                                            <section className="yourStore__cardTitle">
                                                Buy it again in Office Products
                                            </section>
                                            <h6 className="yourStore__cardCount">4 ITEMS</h6>
                                        </section>
                                    </div>
                                </li>
                                <li className="yourStore__galleryItem">
                                    <div className="yourStore__cardFaceoutContainer">
                                        <section className="yourStore__cardImages">
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                        </section>
                                        <section>
                                            <section className="yourStore__cardTitle">
                                                Buy it again in Office Products
                                            </section>
                                            <h6 className="yourStore__cardCount">4 ITEMS</h6>
                                        </section>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </section>
                    <section>
                        <header className="welcome__msg">
                            More to Explore
                        </header>
                        <section className="yourStore__gallery">
                            <ul className="a__unordered__list a__nostyle yourStore__galleryContainer d-flex">
                                <li className="yourStore__galleryItem">
                                    <div className="yourStore__cardFaceoutContainer">
                                        <section className="yourStore__cardImages">
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                        </section>
                                        <section>
                                            <section className="yourStore__cardTitle">
                                                Buy it again in Office Products
                                            </section>
                                            <h6 className="yourStore__cardCount">4 ITEMS</h6>
                                        </section>
                                    </div>
                                </li>
                                <li className="yourStore__galleryItem">
                                    <div className="yourStore__cardFaceoutContainer">
                                        <section className="yourStore__cardImages">
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                        </section>
                                        <section>
                                            <section className="yourStore__cardTitle">
                                                Buy it again in Office Products
                                            </section>
                                            <h6 className="yourStore__cardCount">4 ITEMS</h6>
                                        </section>
                                    </div>
                                </li>
                                <li className="yourStore__galleryItem">
                                    <div className="yourStore__cardFaceoutContainer">
                                        <section className="yourStore__cardImages">
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                        </section>
                                        <section>
                                            <section className="yourStore__cardTitle">
                                                Buy it again in Office Products
                                            </section>
                                            <h6 className="yourStore__cardCount">4 ITEMS</h6>
                                        </section>
                                    </div>
                                </li>
                                <li className="yourStore__galleryItem">
                                    <div className="yourStore__cardFaceoutContainer">
                                        <section className="yourStore__cardImages">
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                            <section className="yourStore__cardImageContainer">
                                                <div className="col-6">
                                                    <img src={hp_printers_eco_efficient_18} alt="hp printers eco efficient 18" />
                                                </div>
                                                <div className="col-6">
                                                    <img src={hilroy_coil_one_subject_notebook} alt="hilroy coil one subject notebook" />
                                                </div>
                                            </section>
                                        </section>
                                        <section>
                                            <section className="yourStore__cardTitle">
                                                Buy it again in Office Products
                                            </section>
                                            <h6 className="yourStore__cardCount">4 ITEMS</h6>
                                        </section>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </section>
                </div>
            </section>
            <section>
                <CarouselDetailed 
                    heading={"Buy it again"}
                    squished={true}
                    slider={
                        <Slider 
                            type={"multiImage"}
                            carouselClass={"amzn__carousel"}
                            count={6}
                            items={
                                [
                                    {
                                        href: '/',
                                        src: faux_leather,
                                        altText: "FBest Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                    },
                                    {
                                        href: '/',
                                        src: leather_swivel,
                                        altText: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                        caption: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)"
                                    },
                                    {
                                        href: '/',
                                        src: frosted_endtable,
                                        altText: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                        caption: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs"
                                    },
                                    {
                                        href: '/',
                                        src: monterey_tv_stand,
                                        altText: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                        caption: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    },
                                    {
                                        href: '/',
                                        src: ameriwood_lumina,
                                        altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                    },
                                    {
                                        href: '/',
                                        src: ameriwood_lumina,
                                        altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                    },
                                    {
                                        href: '/',
                                        src: ameriwood_lumina,
                                        altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    }
                                ]
                            }
                        />
                    }
                />
                <CarouselDetailed 
                    heading={"Buy in other parts of the store"}
                    squished={true}
                    slider={
                        <Slider 
                            type={"multiImage"}
                            carouselClass={"amzn__carousel"}
                            count={6}
                            items={
                                [
                                    {
                                        href: '/',
                                        src: faux_leather,
                                        altText: "FBest Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                    },
                                    {
                                        href: '/',
                                        src: leather_swivel,
                                        altText: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                        caption: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)"
                                    },
                                    {
                                        href: '/',
                                        src: frosted_endtable,
                                        altText: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                        caption: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs"
                                    },
                                    {
                                        href: '/',
                                        src: monterey_tv_stand,
                                        altText: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                        caption: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    },
                                    {
                                        href: '/',
                                        src: ameriwood_lumina,
                                        altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                    },
                                    {
                                        href: '/',
                                        src: ameriwood_lumina,
                                        altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                    },
                                    {
                                        href: '/',
                                        src: ameriwood_lumina,
                                        altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                        caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    },
                                    {
                                        href: '/',
                                        src: modern_cube,
                                        altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                        caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                    }
                                ]
                            }
                        />
                    }
                    heading_two={"Your browsing history"}
                    heading_two_link={<>View or edit your browsing history &nbsp; &nbsp;›</>}
                    slider_two={
                        <Slider 
                            type={"multiImage"}
                            carouselClass={"amzn__carousel"}
                            count={8}
                            items={[
                                {
                                    href: '/',
                                    src: faux_leather,
                                    altText: "FBest Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                    caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                },
                                {
                                    href: '/',
                                    src: leather_swivel,
                                    altText: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)",
                                    caption: "Furmax Bar Stools Modern Pu Leather Swivel Adjustable Hydraulic Bar Stool Square Counter Height Stool Set of 2(White)"
                                },
                                {
                                    href: '/',
                                    src: frosted_endtable,
                                    altText: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs",
                                    caption: "Global Furniture Clear/Frosted Occasional End Table with Glossy White Legs"
                                },
                                {
                                    href: '/',
                                    src: monterey_tv_stand,
                                    altText: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White",
                                    caption: "Convenience Concepts 151401W Designs2Go Monterey TV Stand, White"
                                },
                                {
                                    href: '/',
                                    src: modern_cube,
                                    altText: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2",
                                    caption: "Baxton Studio Siskal Modern Cube Ottoman, White, Set of 2"
                                },
                                {
                                    href: '/',
                                    src: ameriwood_lumina,
                                    altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                    caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                },
                                {
                                    href: '/',
                                    src: ameriwood_lumina,
                                    altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                    caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                },
                                {
                                    href: '/',
                                    src: ameriwood_lumina,
                                    altText: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White",
                                    caption: "Best Choice Products Faux Leather Modern Convertible Folding Futon Sofa Bed Recliner Couch with Metal Legs, 2 Cup Holders, White"
                                }
                            ]}
                        />
                    }
                />
            </section>
        </Layout>
    )
}

export default UserStore
