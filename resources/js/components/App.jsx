import React from "react";
import Navbar from "./Navbar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import BrandDetail from "./BrandDetail.jsx";
import { Router, Switch, Route, Link } from "react-router-dom";
import history from "./../history.js";

const App = () => {
    return (
        <>
            <Router history={history}>
                <Navbar />
                <Switch>
                    <Route path="/">
                        <Content />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
};

export default App;
