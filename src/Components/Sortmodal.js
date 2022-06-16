import React from "react";

const sortmodal = ({ sortmodal, onClose }) => {
  console.log(sortmodal);
  if (!sortmodal) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title h4">
            <i className="fas fa-sort"></i>Sort
          </div>
          <button type="button" className="close">
            <span onClick={onClose} className="close-b">
              ×
            </span>
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="modal-body">
          <h3 className="nice">Price: High to Low</h3>
          <br />
          <h3 className="nice">Price: Low to High</h3>
          <br />
          <h3 className="nice">Latest</h3>
          <br />
        </div>
      </div>
    </React.Fragment>
  );
};

export default sortmodal;
