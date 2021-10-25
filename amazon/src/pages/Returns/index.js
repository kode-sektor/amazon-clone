import React from 'react'
import { Link } from 'react-router-dom'

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion'


import Layout from '../../components/Layout/index'
import Popover from '../../components/UI/Popover'
import { SearchButton } from '../../components/UI/Button'

const Returns = () => {

    const ReturnPage = () => (
        <>
            <div className="a__container a__color__alternate__background">
                <section className="page__content__container">
                    <section className="position-relative row a__spacing__double__large a__spacing__top__extra__large ">
                        <section className="col-8">
                            <section className="a__spacing__small a__padding__medium a__color__base__background">
                                <h1 className="a__section">
                                    Return items that you ordered
                                </h1>
                                <p className="a__spacing__small">
                                    You can return many items sold on Amazon. When you return an item, you may see different return options depending on the seller, item, or reason for return.
                                </p>
                                <section className="a__spacing__small a__padding__small">
                                    <Link to="/" className="text-right d-block ml-auto">
                                        VIEW ORDERS
                                    </Link>
                                </section>
                            </section>
                            <section className="a__spacing__small a__padding__medium a__color__base__background">
                                <h1 className="a__section">
                                    Gift Returns
                                </h1>
                                <p className="a__spacing__small">
                                    <b>Order number</b> e.g. 123-1234567-1234567 &nbsp; 
                                    <span className="d-inline-block">
                                        <Popover 
                                            trigger={
                                                <Link to="/">
                                                    How do I find this?
                                                    <i className="a__icon a__icon__popover"></i>
                                                </Link>
                                            }
                                            dropdown={
                                                <>
                                                    <section className="a__section">
                                                        <h1 className="a__size__medium font-weight-bold">
                                                            How do I find this?
                                                        </h1>
                                                    </section>
                                                    <span style={{fontSize : "14px"}}>
                                                        The order number or Order ID is a 17-digit code found on the packing slip that came with your item(s).
                                                    </span>
                                                </>
                                            }
                                            style={"larger"}
                                        />
                                    </span>
                                </p>
                                <section className="a__spacing__top__small">
                                    <form action="/" className="p__bottom">
                                        <input type="text" maxLength="19" autoComplete="off" placeholder="Order number (with dashes)" spellCheck="false" name="orderId" className="col-8 a__input__text" />
                                        <span className="d-inline-block a__spacing__top__base">
                                            <SearchButton
                                                text={"Search"}
                                            />
                                        </span>
                                    </form>
                                </section>
                            </section>
                        </section>
                        <section className="col-4">
                            <section className="a__padding__medium a__color__base__background">
                                <h1 className="a__section">
                                    Manage Returns
                                </h1>
                                <p className="a__spacing__small">
                                    Print return labels and check the status of your recent returns
                                </p>
                                <section className="a__spacing__small a__padding__small">
                                    <Link to="/" className="text-right d-block ml-auto">
                                        VIEW MORE RETURNS
                                    </Link>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </div>
            <section className="a__spacing__small">
                <div className="a__padding__extra__large a__color__base__background">
                    <div className="a__padding__medium">
                        <h1 className="a__section__ii">
                            Frequently Asked Questioins
                        </h1>
                        <section className="a__spacing__small">
                            <Accordion className="accordion__simple"
                                allowZeroExpanded={true}>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What can I return?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        You may return most new, unopened items sold and fulfilled by Amazon within 30 days of delivery for a full refund. For the 2021 holiday season, most of the items purchased between 1 October and 31 December 2021 can be returned until 31 January, 2022. 
                                        <Link to="/">Learn more about Return Policy</Link>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                            <Accordion className="accordion__simple"
                                allowZeroExpanded={true}>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            When will I get my refund?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        Usually in about 2-3 weeks. Most refunds are fully refunded in 3-5 days after we receive and process your return. Learn more about 
                                        <Link to="/">Return Estimates</Link>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                            <Accordion className="accordion__simple"
                                allowZeroExpanded={true}>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Does Amazon do replacements?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        We can only replace the exact item and version you ordered, and you are responsible to return the damaged item within 30 days. If you want to exchange for a different item, you will need to return the item and place a new order. Learn more about 
                                    <Link to="/">Replacement Policy</Link>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </section>
                        <section>
                            <span className="a__color__base">
                                For detailed information on return policy see
                            </span>
                            <Link className="a__link__normal" href="/">
                                <span class="a__color__link">
                                    &nbsp;Returns &amp; Refunds
                                </span>
                            </Link>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )

    return (
        <Layout>
            <ReturnPage />
        </Layout>
    )
}

export default Returns
