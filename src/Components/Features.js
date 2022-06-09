import React from "react";

const Features = () => {
  return (
    <React.Fragment>
      <section className="features">
        <h3 className="features-heading">Why Choose Us?</h3>
        <div className="box">
          <div className="details">
            <i className="fas fa-shipping-fast i2"></i>
            <h3 className="details-heading">Fast Delivery</h3>
            <p className="details-p">
              Lorem ipsum dolor sit amet consectetur, adipisicint esse hic?
            </p>
          </div>
          <div className="details">
            <i className="fas fa-undo i2"></i>
            <h3 className="details-heading">10 days replacement</h3>
            <p className="details-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ?
            </p>
          </div>
          <div className="details">
            <i className="fas fa-headset i2"></i>
            <h3 className="details-heading">24 x 7 support</h3>
            <p className="details-p">
              Lorem ipsum dolor sit amet voluptate perspiciatis recusandae
              temporibus qunt esse hic?
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Features;
