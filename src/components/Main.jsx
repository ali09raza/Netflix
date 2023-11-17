import React from "react";
function Main(){
    return(
    <>
        <div className="main">
        <div className="area">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h4>Ready to watch? Enter your email to create or access your account</h4>

          <div className="search">
            <input type="text" className="box" placeholder="Enter Email" />
            <span className="try">Get Started &gt;  </span>
          </div>
          
        </div>
      </div>
    </>
    );
}
export default Main;