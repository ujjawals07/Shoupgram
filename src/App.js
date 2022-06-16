import React from "react";
import Header from "./Header";

import Sections from "./Links/Sections";
import SignUp from "./Registration-form/SignUp";
import css from "./style.css";
import Cart from "./Links/Cart";
import PosterOne from "./Links/PosterOne";
import ItemDetails from "./Links/ItemDetails";
import PosterTwo from "./Links/PosterTwo";
import PosterThree from "./Links/PosterThree";
import SeeAll from "./Links/SeeAll";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Route path="/" exact component={Sections} />
          <Route path="/Item" exact component={ItemDetails} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/all" exact component={SeeAll} />
          
        </React.Fragment>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
