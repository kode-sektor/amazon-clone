import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { BackArrow, RightArrowCarrot } from '../../components/UI/Icons'
import { DropdownMenuPrimary } from '../../components/UI/DropdownMenu'

import CouponModal from '../../components/UI/Modal/CouponModal'

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

import { CouponBtn } from '../../components/UI/Button'
import CouponBox from '../../components/UI/CouponBox'
import Slider from '../../components/UI/Carousel/Carousel'
import CouponCarousel from '../../components/UI/Carousel/CouponCarousel'

import Layout from '../../components/Layout'

import ProgressiveSubNav from '../../components/Header/ProgressiveSubNav'

import './index.css'


const Fashion = () => {

    return (
        <Layout>
            <ProgressiveSubNav/>
        </Layout>
    )
}

export default Fashion
