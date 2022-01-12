import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home"
import CustomerPreferences from "./pages/CustomerPreferences"
import YourAccount from "./pages/YourAccount"
import OrderHistory from "./pages/OrderHistory"
import NavCart from "./pages/NavCart"
import Prime from "./pages/Prime"
import Coupon from "./pages/Coupon"
import CouponModal from "./components/UI/Modal/CouponModal"
import GiftCard from "./pages/GiftCards"
import Electronics from "./pages/Electronics"
import Beauty from "./pages/Beauty"
import Fashion from "./pages/Fashion"
import Health from "./pages/Health"
import PetSupplies from "./pages/PetSupplies"
import Sports from "./pages/Sports"
import Books from "./pages/Books"
import UserStore from "./pages/UserStore"
import HomeImprovement from "./pages/HomeImprovement"
import Jobs from "./pages/Jobs"
import HelpCustomer from "./pages/HelpCustomer"
import InvestorRelations from "./pages/InvestorRelations"
import Press from "./pages/Press"
import SellerAmazon from "./pages/SellerAmazon"
import Associates from "./pages/Associates"
import Handmade from "./pages/Handmade"
import Advertising from "./pages/Advertising"
import IndependentPublication from "./pages/IndependentPublication"
import AmazonHub from "./pages/AmazonHub"
import MastercardReward from "./pages/MastercardReward"
import ShopWithPoints from "./pages/ShopWithPoints"
import BalanceReload from "./pages/BalanceReload"
import CurrencyConverter from "./pages/CurrencyConverter"
import AmazonCash from "./pages/AmazonCash"
import Covid19 from "./pages/Covid19"
import ShippingRate from "./pages/ShippingRate"
import Returns from "./pages/Returns"
import ContentAndDevices from "./pages/ContentAndDevices"
import AlexaPrivacy from "./pages/AlexaPrivacy"
import CustomerService from "./pages/CustomerService"
import AmazonMusic from "./pages/AmazonMusic"
import AmazonBooks from "./pages/AmazonBooks"
import WarehouseDeals from "./pages/WarehouseDeals"
import AmazonAdvertising from "./pages/AmazonAdvertising"
import GoodReads from "./pages/GoodReads"
import IMDB from "./pages/IMDB"
import WholeFoods from "./pages/WholeFoods"
import AmazonDrive from "./pages/AmazonDrive"
import AmazonPhotos from "./pages/AmazonPhotos"
import AmazonRenewed from "./pages/AmazonRenewed"
import AmazonWebServices from "./pages/AmazonWebServices"
import Shopbop from "./pages/Shopbop"


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/customer-preferences/lang" component={CustomerPreferences}/>
                    <Route path="/your-account" component={YourAccount}/> 
                    <Route path="/order-history" component={OrderHistory}/> 
                    <Route path="/nav-cart" component={NavCart}/> 
                    <Route path="/prime" component={Prime}/> 
                    <Route path="/coupons" component={Coupon}/> 
                    <Route path="/promotions/details" component={CouponModal}/> 
                    <Route path="/gift-cards" component={GiftCard}/> 
                    <Route path="/electronics" component={Electronics}/> 
                    <Route path="/beauty" component={Beauty}/>
                    <Route path="/fashion" component={Fashion}/>
                    <Route path="/health" component={Health}/>
                    <Route path="/pet-supplies" component={PetSupplies}/>
                    <Route path="/sports-and-outdoors" component={Sports}/>
                    <Route path="/books" component={Books}/>
                    <Route path="/your-store" component={UserStore}/>
                    <Route path="/home-improvement" component={HomeImprovement}/> 
                    <Route path="/jobs" component={Jobs}/> 
                    <Route path="/help-customer" component={HelpCustomer}/> 
                    <Route path="/investor-relations" component={InvestorRelations}/>
                    <Route path="/press" component={Press}/>
                    <Route path="/seller-amazon" component={SellerAmazon}/>
                    <Route path="/associates" component={Associates}/>
                    <Route path="/handmade" component={Handmade}/>
                    <Route path="/advertising" component={Advertising}/>
                    <Route path="/independent-publication" component={IndependentPublication}/>
                    <Route path="/amazon-hub" component={AmazonHub}/>
                    <Route path="/mastercard-reward" component={MastercardReward}/>
                    <Route path="/shop-with-points" component={ShopWithPoints}/>
                    <Route path="/balance-reload" component={BalanceReload}/>
                    <Route path="/currency-converter" component={CurrencyConverter}/>
                    <Route path="/amazon-cash" component={AmazonCash}/>
                    <Route path="/covid-19" component={Covid19}/>
                    <Route path="/shipping-rate" component={ShippingRate}/>
                    <Route path="/returns" component={Returns}/>
                    <Route path="/content-and-devices" component={ContentAndDevices}/>
                    <Route path="/alexa-privacy" component={AlexaPrivacy}/>
                    <Route path="/customer-service" component={CustomerService}/>
                    <Route path="/amazon-music" component={AmazonMusic}/>
                    <Route path="/amazon-books" component={AmazonBooks}/>
                    <Route path="/warehouse-deals" component={WarehouseDeals}/>
                    <Route path="/amazon-advertising" component={AmazonAdvertising}/>
                    <Route path="/good-reads" component={GoodReads}/>
                    <Route path="/imdb" component={IMDB}/>
                    <Route path="/wholefoods" component={WholeFoods}/>
                    <Route path="/amazon-drive" component={AmazonDrive}/>
                    <Route path="/amazon-photos" component={AmazonPhotos}/>
                    <Route path="/amazon-renewed" component={AmazonRenewed}/>
                    <Route path="/amazon-web-services" component={AmazonWebServices}/>
                    <Route path="/shopbop" component={Shopbop}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App