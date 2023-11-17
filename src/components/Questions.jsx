import React from "react";
function Questions(){
    return(
    <>
    <div className="question">
        <h1>Frequently Asked Questions</h1>
        <div className="quest">
          <div className="textbox">What is Netflix?</div>
          <i className="las la-plus"></i>
        </div>
        <div className="quest">
          <div className="textbox">How much does Netflix cost?</div>
          <i className="las la-plus"></i>
        </div>
        <div className="quest">
          <div className="textbox">Where can I watch?</div>
          <i className="las la-plus"></i>
        </div>
        <div className="quest">
          <div className="textbox">How do I cancel?</div>
          <i className="las la-plus"></i>
        </div>
        <div className="quest">
          <div className="textbox">What can I watch on Netflix??</div>
          <i className="las la-plus"></i>
        </div>
        <div className="quest">
          <div className="textbox">What is Netflix?</div>
          <i className="las la-plus"></i>
        </div>
        <br/>
        <br/>
        <br/>
        <label for="emailInput">Ready to watch? Enter your email to create or restart your membership.</label>
        <div className="search">
            <input type="text" className="box" placeholder="Enter Email" />
            <span className="try2">Get Started &gt;  </span>
          </div>
          
      </div>

    </>
    );
}
export default Questions;