import React from "react";

const ItemDetails = () => {
  return (
    <React.Fragment>
      <div className="img-details">
        <div className="img-details-item-img">
          <img
            src="img/c1.jpg"
            alt=""
            srcset=""
            className="img-details-item-pic"
          />
        </div>

        <div className="img-details-content">
          <h1 className="img-details-category">categories:Jacket</h1>
          <div className="img-details-price">
            $400 <span>$900 (40%)</span>
          </div>
          <p className="img-details-p">Inclusive of all taxes</p>
          <br />
          <h1 className="img-details-status">
            Staus: <span className="instock">In Stock</span>
            <hr className="hr" />
            <div className="img-details-sizes">
              <button className="img-details-btn">
                <p className="img-details-btn-p">S</p>
              </button>
              <button className="img-details-btn">
                <p className="img-details-btn-p">M</p>
              </button>
              <button className="img-details-btn">
                <p className="img-details-btn-p">L</p>
              </button>
              <button className="img-details-btn">
                <p className="img-details-btn-p">XL</p>
              </button>
              <button className="img-details-btn">
                <p className="img-details-btn-p">XXL</p>
              </button>
            </div>
          </h1>
          <div className="img-details-btns">
            <button className="img-details-b">Buy Now</button>
            <button className="img-details-a">Add To cart</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemDetails;
