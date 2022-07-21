import React from "react";

const Posters = () => {
  return (
    <React.Fragment>
      <section className="last_section">
        <div className="last_section-items">
          <div className="last_section_item">
            <div className="last_section-img">
              <img
                src="img/m1.jpg"
                alt=""
                srcset=""
                className="last_section-pic"
              />
          
            </div>
          </div>
          <div className="last_section_item">
            <div className="last_section-img">
              <img
                src="img/m2.jpg"
                alt=""
                srcset=""
                className="last_section-pic"
              />
              <a href="#" className="link">
                SPORTS <br />
                <span className="small">& JACKETS</span>
              </a>
            </div>
          </div>
          <div className="last_section_item">
            <div className="last_section-img">
              <img
                src="img/m3.jpg"
                alt=""
                srcset=""
                className="last_section-pic"
              />
              <a href="#" className="link">
                SUITS <br />
                <span className="small"> &  BLAZERS</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Posters;
