import React from 'react'
import { Link } from 'react-router-dom'

import { ConvertToUpper } from '../../../utilities/functions'

import './index.css'

const Palette = () => {

    const paletteColors = [
        { 
            backgroundColor : "-1600px 0px",
            color : "clear" 
        },
        { 
            backgroundColor : "-400px 0px",
            color : "beige"
        },
        {
            backgroundColor : "0px 0px",
            color : "black" 
        },
        { 
            backgroundColor : "-1100px 0px",
            color : "blue" 
        },
        { 
            backgroundColor : "-2100px 0px",
            color : "brass" 
        },
        { 
            backgroundColor : "-2200px 0px",
            color : "bronze" 
        },
        { 
            backgroundColor : "-300px 0px",
            color : "brown" 
        },
        { 
            backgroundColor : "-2300px 0px",
            color : "brushed-steel" 
        },
        { 
            backgroundColor : "-2400px 0px",
            color : "copper" 
        },
        { 
            backgroundColor : "-1300px 0px",
            color : "gold" 
        },
        { 
            backgroundColor : "-1000px 0px",
            color : "green" 
        },
        { 
            backgroundColor : "-100px 0px",
            color : "grey" 
        },
        { 
            backgroundColor : "-900px 0px",
            color : "ivory" 
        },
        { 
            backgroundColor : "-2600px 0px",
            color : "nickel" 
        },
        { 
            backgroundColor : "-2700px 0px",
            color : "oil-rubbed-bronze" 
        },
        { 
            backgroundColor : "-700px 0px",
            color : "orange" 
        },
        { 
            backgroundColor : "-600px 0px",
            color : "pink" 
        },
        { 
            backgroundColor : "-1200px 0px",
            color : "purple" 
        },
        { 
            backgroundColor : "-500px 0px",
            color : "red" 
        },
        { 
            backgroundColor : "-2900px 0px",
            color : "rust" 
        },
        { 
            backgroundColor : "-1400px 0px",
            color : "silver" 
        },
        { 
            backgroundColor : "-1700px 0px",
            color : "stainless-steel" 
        },
        { 
            backgroundColor : "-200px 0px",
            color : "white" 
        },
        { 
            backgroundColor : "-800px 0px",
            color : "yellow" 
        },
        { 
            backgroundColor : "-1500px 0px",
            color : "multicolor" 
        }
    ]
    
    return (
        <section className="palette">
            <h3 className="a__spacing__small">
                <span className="a__size__base a__color__base a__text__bold">Featured Brands</span>
            </h3>
            <ul className="sideMenu a__unordered__list a__nostyle a__spacing__medium">
                {
                    paletteColors.map((item, index) => {
                        const { backgroundColor, color } = item 
                        return (
                            <li className="a__spacing__micro palette__box">
                                <span className="a__list__item">
                                    <Link to="/" title={ConvertToUpper(color)}>
                                        <div className="sideMenuCheckbox a__checkbox a__checkbox__fancy d-inline-block">
                                            <input type="checkbox" name="" value=""/>
                                            <i className={`palette__checkbox ${color}`} style={{"backgroundPosition" : backgroundColor}}></i>
                                        </div>
                                    </Link>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Palette
