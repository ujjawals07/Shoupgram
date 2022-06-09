import React from "react";
const SignUp = ({show}) => {
    if(!show){
        return null
    }
  return (
    <React.Fragment>
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h1>Hey techie!!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et est sed felis aliquet sollicitudin
            </p>
            <div className="buttn">
              <a href="#" className="facebook">
                <i className="fa fa-facebook" aria-hidden="true"></i> Login with
                Facebook
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i> Login with
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="right f">
          <h5>SIGNUP</h5>
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
          <div className="inputs">
            <input type="number" placeholder="Enter your number" />
            <input type="text" placeholder="Username" />
            <br />
          </div>

          <br />
          <button>SignUp</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
