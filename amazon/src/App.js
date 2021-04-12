import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home"
import CustomerPreferences from "./pages/CustomerPreferences"
import YourAccount from "./pages/YourAccount"
import OrderHistory from "./pages/OrderHistory"


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/customer_preferences/lang" component={CustomerPreferences}/>
                    <Route path="/your_account" component={YourAccount}/> 
                    <Route path="/order_history" component={OrderHistory}/> 
                </Switch>
            </Router>
        </div>
    );
}

export default App;
