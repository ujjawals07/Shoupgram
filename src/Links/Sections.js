import React from "react";
import Home from "../Components/Home";

import Trending from "../Components/Trending";
import Trendings from "../Components/Trendings";
import Posters from "../Components/Posters";
import Features from "../Components/Features";
import Footer from "../Components/Footer";

const Sections = () => {
  return (
    <div className="container">
      <Home />
      <Trending />
      <Trendings />
      <Posters />
      <Features />
      <Footer />
    </div>
  );
};

export default Sections;
/*
  const [open, opnesort] = useState(false);
   <Sortmodal sortmodal={open} onClose={() => opnesort(false)}></Sortmodal> */