import React, { useState } from 'react'

import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { countries } from '../../../utilities/data'

import './index.css'

const ModalLang = () => {


    const [countryList, setCountryList] = useState(countries);

    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    console.log(Object.values(countries))

    return (
        <section className="popover__langSetting">
            <div className="popover__langSetting__container">
                <header className="popover__langSetting__heading">
                    <h5 className="popover__langSetting__title">
                        Website (Country/Region)
                    </h5>
                    <Button className="popover__langSetting__close" outline color="secondary">
                        <i class="popover__close"></i>
                    </Button>
                </header>
                <section className="popover__langSetting__customerPreferences">
                    <form action="" className="popover__langSetting__countryNav">
                        <div className="popover__langSetting__countryNav__inner d-flex justify-content-between">
                            <section className="popover__langSetting__country col-6">
                                <legend className="popover__langSetting__country__title">Select your preferred country/region website:</legend>
                                <ButtonDropdown className="popover__langSetting__panel" isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle className="a__button a__button__dropdown">
                                        <span className="a__button__inner a__shadow">
                                            <span className="a__button__text">
                                                Canada
                                            </span>
                                        </span>
                                        <i class="a-icon-dropdown"></i>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {
                                            (countryList).map(item => (
                                                <DropdownItem data-value={item.value}>{item.country}</DropdownItem>
                                            ))
                                        }
                                    </DropdownMenu>
                                </ButtonDropdown>
                                <p><b>NOTE:</b> A new country/region website selection will open in a new tab.</p>
                            </section>
                            <section className="popover__langSetting__notes col-5">
                                <legend className="popover__langSetting__country__title">Changing country/region website</legend>
                                <p>Changing the country/region you shop from may affect factors including price, shipping options and product availability.</p>
                            </section>
                        </div>
                    </form>
                </section>
                <footer className="popover__langSetting__footer">
                    <button className="a__button a__button__cancel">
                        <span className="a__button__inner">
                            <span className="a__button__text">
                                Cancel
                            </span>
                        </span>
                    </button>
                    <button className="a__button a__button__primary">
                        <span className="a__button__inner">
                            <span className="a__button__text">
                                Go to website
                            </span>
                        </span>
                    </button>
                </footer>
            </div>
        </section>
    )
}

export default ModalLang
