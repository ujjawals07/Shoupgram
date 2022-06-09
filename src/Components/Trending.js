import React from "react";

const Trending = () => {
  return (
    <React.Fragment>
      <section className="trending">
        <h3 className="trending-heading">Trending Products</h3>

        <a href="#" className="See-all_btn">
          {" "}
          see all &#8594;
        </a>
        <div className="trending-product">
          <div className="trending-items">
            <div className="fas fa-heart heart"></div>
            <div className="trending-image">
              <img
                src="img/c1.jpg"
                alt=""
                srcset=""
                className="trending-product-image"
              />
              <div className="trending-item-name">Hoodie</div>
              <div className="trending-item-price">
                500 $ <span>1200$</span> 42%
              </div>
            </div>
          </div>
          <div className="trending-items">
            <div className="fas fa-heart heart"></div>
            <div className="trending-image">
              <img
                src="img/c2.jpg"
                alt=""
                srcset=""
                className="trending-product-image"
              />
              <div className="trending-item-name">Hoodie</div>
              <div className="trending-item-price">
                {" "}
                500 $ <span>1200$</span> 42%
              </div>
            </div>
          </div>
          <div className="trending-items">
            <div className="fas fa-heart heart"></div>
            <div className="trending-image">
              <img
                src="img/c3.jpg"
                alt=""
                srcset=""
                className="trending-product-image"
              />
              <div className="trending-item-name">Hoodie</div>
              <div className="trending-item-price">
                500 $ <span>1200$</span> 42%
              </div>
            </div>
          </div>
          <div className="trending-items">
            <div className="fas fa-heart heart"></div>
            <div className="trending-image">
              <img
                src="img/c4.jpg"
                alt=""
                srcset=""
                className="trending-product-image"
              />
              <div className="trending-item-name">Hoodie</div>
              <div className="trending-item-price">
                500 $ <span>1200$</span> 42%
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Trending;
