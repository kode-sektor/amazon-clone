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
                </Switch>
            </Router>
        </div>
    )
}

export default App;
