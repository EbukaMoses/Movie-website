// import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepages from "./Home/Homepages";
import singlepage from "./Components/Watch/singlepage";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route exact path="/singlepage/:id" component={singlepage} />
        </Switch>
        <Footer />
      </Router>
      {/* <Homepages /> */}
    </>
  );
}

export default App;
