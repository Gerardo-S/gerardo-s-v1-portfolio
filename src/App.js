import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Nav from "../src/components/Nav";
import Home from "../src/components/pages/About";
import Portfolio from "../src/components/pages/Portfolio";
import Contact from "../src/components/pages/Contact";
import Footer from "../src/components/Footer"
import About from "../src/components/pages/About";

function App() {
  return (
    <Router>
      <div className="bg-light">
      <Route exact path ="/">
          <Redirect to="/about"/>
        </Route>
        <Nav />
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path ="/about">
          <About />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
