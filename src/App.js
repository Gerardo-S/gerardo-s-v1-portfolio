import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Nav from "../src/components/Nav";
import Portfolio from "../src/components/pages/Portfolio";
import Contact from "../src/components/pages/Contact";
import Footer from "../src/components/Footer"
import About from "../src/components/pages/About";
import "../src/styles/App.css"
function App() {
  return (
    <Router>
      <div className="bg-light">

        <Nav />
        <Switch>
          <Route exact path="/">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
