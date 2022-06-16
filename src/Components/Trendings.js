import React from "react";
import { Link } from "react-router-dom";
const Trendings = () => {
  return (
    <React.Fragment>
      <section className="trendings">
      <h3 class="trending-heading">Special Products</h3>

      <Link to="/all" className="See-all_btn">
          {" "}
          see all &#8594;
        </Link>
        <div className="trending-product">
          <div className="trending-items">
            <div className="fas fa-heart heart"></div>
            <div className="trending-image">
              <img
                src="img/c6.jpg"
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
                src="img/c5.jpg"
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
        </div>
      </section>
    </React.Fragment>
  );
};
export default Trendings;
