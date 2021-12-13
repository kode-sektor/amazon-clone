
const startYear = "2015"

const currentYear = new Date().getFullYear()

const countries = [
    {
        icon : "",
        value : "aus",
        country : "Australia"
    },
    {
        icon : "",
        value : "brz",
        country : "Brazil (Brasil)"
    },
    {
        icon : "",
        value : "can",
        country : "Canada"
    },
    {
        icon : "",
        value : "chn",
        country : "China (中国大陆)"
    },
    {
        icon : "",
        value : "frn",
        country : "France"
    },
    {
        icon : "",
        value : "ger",
        country : "Germany (Deutschland)"
    },
    {
        icon : "",
        value : "ind",
        country : "India"
    },
    {
        icon : "",
        value : "itl",
        country : "Italy (Italia)"
    },
    {
        icon : "",
        value : "jpn",
        country : "Japan (日本)"
    },
    {
        icon : "",
        value : "ned",
        country : "Netherlands (Nederlands)"
    },
    {
        icon : "",
        value : "pol",
        country : "Poland (Polska)"
    },
    {
        icon : "",
        value : "sau",
        country : "Saudi Arabia (المملكة العربية السعودية)"
    },
    {
        icon : "",
        value : "sin",
        country : "Singapore"
    },
    {
        icon : "",
        value : "spn",
        country : "Spain (España)"
    },
    {
        icon : "",
        value : "swe",
        country : "Sweden (Sverige)"
    },
    {
        icon : "",
        value : "",
        country : "Turkey (Türkiye)"
    },
    {
        icon : "",
        value : "uae",
        country : "United Arab Emirates"
    },
    {
        icon : "",
        value : "uk",
        country : "United Kingdom"
    },
    {
        icon : "",
        value : "usa",
        country : "United States"
    }
]

const languages = [
    {
        language : "cest",
        text: "Čeština"
    },
    {
        language : "deu",
        text: "Deutsch"
    },
    {
        language : "eng",
        text: "English"
    },
    {
        language : "eng-bri",
        text: "English, British"
    },
    {
        language : "esp",
        text: "Español"
    },
    {
        language : "fra",
        text: "Français"
    },
    {
        language : "ita",
        text: "Italiano"
    },
    {
        language : "nih",
        text: "日本語"
    },
    {
        language : "pol",
        text: "Polski"
    },
    {
        language : "por-bri",
        text: "Português, Brasil"
    },
    {
        language : "chi",
        text: "简体中文"
    }
]

const subMenu = [
    {
        text : "Amazon.ca",
        href : "/"
    },
    {
        text : "Today's Deals",
        href : "/todays_deals"
    },
    {
        text : "Watched Deals",
        href : "/watched_deals"
    },
    {
        text : "Outlet Deals",
        href : "/outlet_deals"
    },
    {
        text : "Warehouse Deals",
        href : "/warehouse_deals"
    },
    {
        text : "Coupons",
        href : "/Coupons"
    },
    {
        text : "eBook Deals",
        href : "/ebook_deals"
    },
    {
        text : "Subscribe & Save",
        href : "/subscribe_and_save"
    }
]

const progressiveSubNav = [
    {
        text : "SALES & DEALS",
        href : "/"
    },
    {
        text : "WOMEN",
        href : "/todays_deals"
    },
    {
        text : "MEN",
        href : "/watched_deals"
    },
    {
        text : "GIRLS",
        href : "/outlet_deals"
    },
    {
        text : "BOYS",
        href : "/warehouse_deals"
    },
    {
        text : "BABY",
        href : "/Coupons"
    },
    {
        text : "OUR BRANDS",
        href : "/ebook_deals"
    },
    {
        text : "LUGGAGE",
        href : "/subscribe_and_save"
    }
]

const currencies = [
    {
        text : "$ AUD",
        value : "AUD"
    },
    {
        text : "€ EUR",
        value : "EUR"
    },
    {
        text : "$ USD",
        value : "USD"
    },
    {
        text : "£ GBP",
        value : "GBP"
    },
    {
        text : "$ NZD",
        value : "NZD"
    },
    {
        text : "$ SGD",
        value : "SGD"
    },
    {
        text : "$ CAD",
        value : "CAD"
    },
    {
        text : "AED",
        value : "AED"
    },
    {
        text : "$ ARS",
        value : "ARS"
    },
    {
        text : "Лв. BGN",
        value : "BGN"
    },
    {
        text : "R$ BRL",
        value : "BRL"
    },
    {
        text : "SFr. CHF",
        value : "CHF"
    },
    {
        text : "$ CLP",
        value : "CLP"
    },
    {
        text : "$ COP",
        value : "COP"
    },
    {
        text : "Kč CZK",
        value : "CZK"
    },
    {
        text : "Kr DKK",
        value : "DKK"
    },
    {
        text : "E£ EGP",
        value : "EGP"
    },
    {
        text : "$ HKD",
        value : "HKD"
    },
    {
        text : "Ft HUF",
        value : "HUF"
    },
    {
        text : "Rp IDR",
        value : "IDR"
    },
    {
        text : "₪ ILS",
        value : "ILS"
    },
    {
        text : "₹ INR",
        value : "INR"
    },
    {
        text : "¥ JPY",
        value : "JPY"
    },
    {
        text : "￦ KRW",
        value : "KRW"
    },
    {
        text : "$ MXN",
        value : "MXN"
    },
    {
        text : "RM MYR",
        value : "MYR"
    },
    {
        text : "Kr NOK",
        value : "NOK"
    },
    {
        text : "Rp IDR",
        value : "PEN"
    },
    {
        text : "₱ PHP",
        value : "PHP"
    },
    {
        text : "zł PLN",
        value : "PLN"
    },
    {
        text : "QR QAR",
        value : "QAR"
    },
    {
        text : "L RON",
        value : "RON"
    },
    {
        text : " SAR",
        value : "SAR"
    },
    {
        text : "Kr SEK",
        value : "SEK"
    },
    {
        text : "฿ THB",
        value : "THB"
    },
    {
        text : "₺ TRY",
        value : "TRY"
    },
    {
        text : "$ TWD",
        value : "TWD"
    },
    {
        text : "$ UYU",
        value : "UYU"
    },
    {
        text : "R ZAR",
        value : "ZAR"
    }
]

export { countries, languages, subMenu, progressiveSubNav, currencies, startYear, currentYear }