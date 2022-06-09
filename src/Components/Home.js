import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      {" "}
      <section className="home" id="home">
        <div className="home-slider owl-carousel">
          <div className="item">
            <img src="img/modal1.jpg" alt="" />
            <div className="content">
              <h3>heavy discounts</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                neque.
              </p>
              <a href="#">
                <button className="btn">discover</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
