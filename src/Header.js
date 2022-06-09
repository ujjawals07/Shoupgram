import React, { useState } from "react";
// { Link } from "react-router-dom";
import Search from "./Components/SearcBar";
import SignUp from "./Registration-form/SignUp";
const Header = () => {
  const [show, showmodal] = useState(false);

  return (
    <React.Fragment>
      <header className="headers">
        <a href="#" className="fas fa-bars menubar" id="menu"></a>
        <img src="img/logo.png" className="logo" />
        <Search />
        <nav className="nav_list" id="navlistactive">
          <li className="nav-items">Home</li>
          <li className="nav-items" id="products">
            Products
          </li>
          <li className="nav-items" id="upcoming">
            Upcoming
          </li>
          <li className="nav-items" id="review">
            Review
          </li>
        </nav>

        <div className="icons">
          <a id="fav-icon" className="fas fa-heart i"></a>
          <a id="cart-icon" className="fas fa-shopping-cart i"></a>
          <button
            className="fas fa-user i"
            onClick={() => showmodal(true)}
          ></button>
        </div>
      </header>
      <SignUp show={show}></SignUp>
    </React.Fragment>
  );
};

export default Header;
