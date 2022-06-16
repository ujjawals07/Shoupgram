import React from "react";

const Filter = ({ filtermodal ,close }) => {
    console.log(filtermodal);
  if (!filtermodal) {
    return null;
  }
  return (
    <React.Fragment>
      <div class="result-sort m">
        <button class="fas fa-close btn-close" onClick={close}></button>
        <br />

        <h4>Price</h4>
        <br />
        <div class="result-price">
          <div class="result-price-topping">
            <input
              type="checkbox"
              name="checkbox"
              id="1"
              class="result-input"
            />
            <li class="result-prices">Rs 1 to Rs 499</li>
          </div>
        </div>
        <div class="result-price">
          <div class="result-price-topping">
            <input
              type="checkbox"
              name="checkbox"
              id="1"
              class="result-input"
            />
            <li class="result-prices">Rs 499 to Rs 999</li>
          </div>
        </div>
        <div class="result-price">
          <div class="result-price-topping">
            <input
              type="checkbox"
              name="checkbox"
              id="1"
              class="result-input"
            />
            <li class="result-prices">Rs 999 to Rs 1999</li>
          </div>
        </div>
        <div class="result-price">
          <div class="result-price-topping">
            <input
              type="checkbox"
              name="checkbox"
              id="1"
              class="result-input"
            />
            <li class="result-prices">Rs 1999 to Rs 4999</li>
          </div>
        </div>
        <br />
        <hr />
        <div class="categroies">
          <h4>categories</h4>
          <div class="result-price">
            <div class="result-price-topping">
              <input
                type="checkbox"
                name="checkbox"
                id="1"
                class="result-input"
              />
              <li class="result-prices">JACKETS</li>
            </div>
          </div>
          <div class="result-price">
            <div class="result-price-topping">
              <input
                type="checkbox"
                name="checkbox"
                id="1"
                class="result-input"
              />
              <li class="result-prices">Joggars</li>
            </div>
          </div>
          <div class="result-price">
            <div class="result-price-topping">
              <input
                type="checkbox"
                name="checkbox"
                id="1"
                class="result-input"
              />
              <li class="result-prices">Shirts</li>
            </div>
          </div>
          <div class="result-price">
            <div class="result-price-topping">
              <input
                type="checkbox"
                name="checkbox"
                id="1"
                class="result-input"
              />
              <li class="result-prices">jeans</li>
            </div>
          </div>
          <div class="result-price">
            <div class="result-price-topping">
              <input
                type="checkbox"
                name="checkbox"
                id="1"
                class="result-input"
              />
              <li class="result-prices">underwears</li>
            </div>
          </div>
          <div class="result-price">
            <div class="result-price-topping">
              <input
                type="checkbox"
                name="checkbox"
                id="1"
                class="result-input"
              />
              <li class="result-prices">sweatshiet</li>
            </div>
          </div>
          <div class="result-price">
            <div class="result-price-topping">
              <input
                type="checkbox"
                name="checkbox"
                id="1"
                class="result-input"
              />
              <li class="result-prices">brief</li>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Filter;
