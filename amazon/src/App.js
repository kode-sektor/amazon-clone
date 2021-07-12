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
                </Switch>
            </Router>
        </div>
    )
}

export default App;
