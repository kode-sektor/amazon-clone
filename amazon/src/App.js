import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home"
import CustomerPreferences from "./pages/CustomerPreferences"
import YourAccount from "./pages/YourAccount"


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/customer_preferences/lang" component={CustomerPreferences}/>
                    <Route path="/your_account" component={YourAccount}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
