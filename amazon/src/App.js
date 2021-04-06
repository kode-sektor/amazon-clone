import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Home"
import CustomerPreferences from "./containers/CustomerPreferences"


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/customer_preferences/lang" exact component={CustomerPreferences}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
