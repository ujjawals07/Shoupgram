import React from "react";
const Footer =()=>{
    return <React.Fragment>
          <footer className="footers">
        <div className="box-container">
          <div className="box-f">
            <h7 className="h-f">our stores</h7>
            <a href="#" className="item-f">Pichhore</a>
            <a href="#" className="item-f">Gwalior</a>
            <a href="#" className="item-f">Ashoknagar</a>
          </div>

          <div className="box-f">
            <h7 className="h-f">quick links</h7>
            <a className="item-f" id="home">home</a>
            <a className="item-f" id="products">Trending</a>
            <a className="item-f" id="upcoming">Special</a>
          </div>

          <div className="box-f">
            <h7 className="h-f">Extra links</h7>
            <a href="#" className="item-f">my account</a>
            <a href="#" className="item-f">my favorite</a>
            <a href="#" className="item-f">my orders</a>
          </div>

          <div className="box-f">
            <h7 className="h-f">follow us</h7>
            <a href="#" className="item-f">facebook</a>
            <a href="#" className="item-f">instagram</a>
          </div>
          <div className="number fas fa-phone">
            Call US for Any Help
            <a href="tel:123-456-7890" className="phn-numb">+91 8827030770</a>
          </div>

          <p className="credit">created by ujjawal atheist</p>
        </div>
      </footer>
    </React.Fragment>
}
export default Footer