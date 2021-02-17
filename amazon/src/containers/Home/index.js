import React from 'react'
import Layout from '../../components/Layout/index'

import Slider from './Carousel'

import './index.css'


const Home = (props) => {
  return(
        <Layout>
            <Slider />
            <section className="sub__layout">

            </section>
        </Layout>
    )
 }

export default Home