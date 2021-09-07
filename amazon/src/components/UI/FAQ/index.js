import React from 'react'

const Faq = ({question, answer}) => {
    console.log(question, answer)
    return (
        <dl>
            <dd>
                <h3 className="associates__faqQuestion">{question}</h3>
            </dd>
            <dt>
                <p className="associates__faqAnswer mb-0">{answer}</p>
            </dt>
        </dl>
    )
}

export default Faq
