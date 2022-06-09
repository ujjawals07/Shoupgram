import React from "react";
import Header from "./Header";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Trendings from "./Components/Trendings";
import Posters from "./Components/Posters";
import Features from "./Components/Features";
import SignUp from "./Registration-form/SignUp";
import css from "./style.css";
import Cart from "./Links/Cart";
import PosterOne from "./Links/PosterOne";
import SeeAll from "./Links/SeeAll";
import PosterTwo from "./Links/PosterTwo";
import PosterThree from "./Links/PosterThree";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <div className="container">
          <Home />
          <Trending />
          <Trendings />
          <Posters />
          <Features />
          <Route path="/All" exact component={SeeAll} />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
