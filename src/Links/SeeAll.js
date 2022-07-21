import React, { useState } from "react";
import Sortmodal from "../Components/Sortmodal";
import Filter from "../Components/Filter";
import { fetchClothes } from "../Actions";
import { connect } from "react-redux";

class SeeAll extends React.Component {
  componentDidMount() {
    this.props.fetchClothes();
  }
  render() {
    return <div>Post</div>;
  }
}

const mapstatetoprops = (state) => {
  console.log(state);
  return { posts: state.Post };
};
export default connect(mapstatetoprops, { fetchClothes })(SeeAll);

/*const SeeAll = () => {
  const [open, opnesort] = useState(false);
  const [show, showfilter] = useState(false);

  return (
    <React.Fragment>
      <div className="result">
        <div className="result-sort">
          <h4>Price</h4>
     
          <div className="result-price">
            <div className="result-price-topping">
              <input
                type="checkbox"
                name="checkbox"
                id="1"
                className="result-input"
              />
              <li className="result-prices">Rs 1 to Rs 499</li>
            </div>
          </div>
          <div className="result-price">
            <div className="result-price-topping">
              <input
                type="checkbox"
                name="checkbox"
                id="1"
                className="result-input"
              />
              <li className="result-prices">Rs 499 to Rs 999</li>
            </div>
          </div>
          <div className="result-price">
            <div className="result-price-topping">
              <input
                type="checkbox"
                name="checkbox"
                id="1"
                className="result-input"
              />
              <li className="result-prices">Rs 999 to Rs 1999</li>
            </div>
          </div>
          <div className="result-price">
            <div className="result-price-topping">
              <input
                type="checkbox"
                name="checkbox"
                id="1"
                className="result-input"
              />
              <li className="result-prices">Rs 1999 to Rs 4999</li>
            </div>
          </div>
          <br />
          <hr />
          <div className="categroies">
            <h4>categories</h4>
            <div className="result-price">
              <div className="result-price-topping">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="1"
                  className="result-input"
                />
                <li className="result-prices">JACKETS</li>
              </div>
            </div>
            <div className="result-price">
              <div className="result-price-topping">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="1"
                  className="result-input"
                />
                <li className="result-prices">Joggars</li>
              </div>
            </div>
            <div className="result-price">
              <div className="result-price-topping">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="1"
                  className="result-input"
                />
                <li className="result-prices">Shirts</li>
              </div>
            </div>
            <div className="result-price">
              <div className="result-price-topping">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="1"
                  className="result-input"
                />
                <li className="result-prices">jeans</li>
              </div>
            </div>
            <div className="result-price">
              <div className="result-price-topping">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="1"
                  className="result-input"
                />
                <li className="result-prices">underwears</li>
              </div>
            </div>
            <div className="result-price">
              <div className="result-price-topping">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="1"
                  className="result-input"
                />
                <li className="result-prices">sweatshiet</li>
              </div>
            </div>
            <div className="result-price">
              <div className="result-price-topping">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="1"
                  className="result-input"
                />
                <li className="result-prices">brief</li>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="result-images">
          <div className="r-product">
            <div className="r-items">
              <div className="fas fa-heart heart"></div>
              <div className="r-image">
                <img
                  src="img/c5.jpg"
                  alt=""
                  srcset=""
                  className="r-product-image"
                />
                <div className="r-item-name">Hoodie</div>
                <div className="r-item-price">
                  500 $ <span>1200$</span> 42%
                </div>
              </div>
            </div>
            <div className="r-items">
              <div className="fas fa-heart heart"></div>
              <div className="r-image">
                <img
                  src="img/c5.jpg"
                  alt=""
                  srcset=""
                  className="r-product-image"
                />
                <div className="r-item-name">Hoodie</div>
                <div className="r-item-price">
                  500 $ <span>1200$</span> 42%
                </div>
              </div>
            </div>
            <div className="r-items">
              <div className="fas fa-heart heart"></div>
              <div className="r-image">
                <img
                  src="img/c5.jpg"
                  alt=""
                  srcset=""
                  className="r-product-image"
                />
                <div className="r-item-name">Hoodie</div>
                <div className="r-item-price">
                  500 $ <span>1200$</span> 42%
                </div>
              </div>
            </div>
            <div className="r-items">
              <div className="fas fa-heart heart"></div>
              <div className="r-image">
                <img
                  src="img/c5.jpg"
                  alt=""
                  srcset=""
                  className="r-product-image"
                />
                <div className="r-item-name">Hoodie</div>
                <div className="r-item-price">
                  500 $ <span>1200$</span> 42%
                </div>
              </div>
            </div>
            <div className="r-items">
              <div className="fas fa-heart heart"></div>
              <div className="r-image">
                <img
                  src="img/c5.jpg"
                  alt=""
                  srcset=""
                  className="r-product-image"
                />
                <div className="r-item-name">Hoodie</div>
                <div className="r-item-price">
                  500 $ <span>1200$</span> 42%
                </div>
              </div>
            </div>
            <div className="r-items">
              <div className="fas fa-heart heart"></div>
              <div className="r-image">
                <img
                  src="img/c5.jpg"
                  alt=""
                  srcset=""
                  className="r-product-image"
                />
                <div className="r-item-name">Hoodie</div>
                <div className="r-item-price">
                  500 $ <span>1200$</span> 42%
                </div>
              </div>
            </div>
            <div className="r-items">
              <div className="fas fa-heart heart"></div>
              <div className="r-image">
                <img
                  src="img/c5.jpg"
                  alt=""
                  srcset=""
                  className="r-product-image"
                />
                <div className="r-item-name">Hoodie</div>
                <div className="r-item-price">
                  500 $ <span>1200$</span> 42%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="filters-container">
        <button class="btn-filters border" onClick={() => opnesort(true)}>
          <i class="fas fa-sort"></i> Sort
        </button>
        <button class="btn-filters border" onClick={() => showfilter(true)}>
          <i class="fas fa-filter"></i> Filters
        </button>
      </div>
      <Sortmodal sortmodal={open} onClose={() => opnesort(false)}></Sortmodal>
      <Filter filtermodal={show} close={() => showfilter(false)}></Filter>
    </React.Fragment>
  );
};*/
