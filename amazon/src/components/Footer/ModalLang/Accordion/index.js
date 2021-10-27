import React from 'react'

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css'
import './index.css'

const Accordian = ({items, styling, allowZeroExpanded=false, allowMultipleExpanded=true}) => {
    return (
        <section className={`accordionContainer ${styling}`}>
            {
                items.map((item, indx) => (
                    <Accordion
                        allowZeroExpanded={allowZeroExpanded}
                        allowMultipleExpanded={allowMultipleExpanded}>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {item.heading}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                {item.panel}
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                ))
            }
        </section>
    )
}

export default Accordian
