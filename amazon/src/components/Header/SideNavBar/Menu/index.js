import React from 'react'

const Menu = () => {

    const links = [
        { 
            path : '', 
            text : 'Trending', 
            title : true,
            children : ''
        },
        { 
            path : '/best-sellers', 
            text : 'Best Sellers', 
            title : false,
            children : ''
        },
        { 
            path : '/best-sellers', 
            text : 'New Releases', 
            title : false,
            children : ''
        },
        { 
            path : '/movers-and-shakers', 
            text : 'Movers & Shakers', 
            title : false,
            children : ''
        },
        { 
            path : '/digital-content-and-devices', 
            text : 'Digital Content & Devices', 
            title : true,
            children : ''
        },
        { 
            path : '', 
            text : 'Echo & Alexa', 
            title : false,
            children : [
                {
                    path : '/echo-and-alexa', 
                    text : 'Echo & Alexa', 
                    title : true
                },
                {
                    path : '/echo-show-5', 
                    text : 'Echo Show 5', 
                    title : false
                },
                {
                    path : '/echo-show-8', 
                    text : 'Echo Show 8', 
                    title : false
                },
                {
                    path : '/echo-show', 
                    text : 'Echo Show', 
                    title : false
                },
                {
                    path : '/all-new-echo-show-10', 
                    text : 'All-new Echo Show 10', 
                    title : false
                },
                {
                    path : '/echo-flex', 
                    text : 'Echo Flex', 
                    title : false
                },
                {
                    path : '/echo-dot', 
                    text : 'Echo Dot', 
                    title : false
                },
                {
                    path : '/echo', 
                    text : 'Echo', 
                    title : false
                },
                {
                    path : '/echo-studio', 
                    text : 'Echo Studio', 
                    title : false
                },
                {
                    path : '/all-alexa-devices', 
                    text : 'See all devices with Alexa', 
                    title : false
                },
                {
                    path : '/alexa-smart-home', 
                    text : 'Alexa Smart Home', 
                    title : true
                },
                {
                    path : '/introducing-amazon-smart-plug', 
                    text : 'Introducing Amazon Smart Plug', 
                    title : false
                },
                {
                    path : '/content-and-resources', 
                    text : 'Content & Resources', 
                    title : true
                },
                {
                    path : '/meet-alexa', 
                    text : 'Meet Alexa', 
                    title : false
                },
                {
                    path : '/alexa-accessibility', 
                    text : 'Alexa Accessibility', 
                    title : false
                },
                {
                    path : '/alexa-app', 
                    text : 'Alexa App', 
                    title : false
                },
                {
                    path : '/alexa-skills', 
                    text : 'Alexa Skills', 
                    title : false
                },
                {
                    path : '/audible-audiobooks', 
                    text : 'Audible AudioBooks', 
                    title : false
                },
                {
                    path : '/prime-music', 
                    text : 'Prime Music', 
                    title : false
                }
            ]
        },
        { 
            path : '/fire-tablets-and-fire-tv', 
            text : 'Fire Tablets & Fire TV', 
            title : false,
            children : ''
        },
        { 
            path : '/kindle', 
            text : 'Kindle', 
            title : false,
            children : ''
        },
        { 
            path : '/audible-audiobooks', 
            text : 'Audible Audiobooks', 
            title : false,
            children : ''
        },
    ]

    return (
        <div>
            
        </div>
    )
}

export default Menu
