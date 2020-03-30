import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";
import TourList from "./Components/TourList/TourList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false
        };
    }

    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/tours" component={TourList} />
                </Switch>
            </Router>
        );
    }
}

export default App;
