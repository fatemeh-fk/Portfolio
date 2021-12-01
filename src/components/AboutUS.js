import React from "react";
import Builder from "../me1.JPG";

const AboutUS = () => {
    return (
        <div id="about" className="container py-5">
           <div className="row">
              <div className="col-lg-6 col-xm-12">
                  <div className="photo-wrap mb-5"><img className="profile-img" src={Builder} alt=""></img></div>
             </div>
              <div className="col-lg-6 col-xm-12 mt-3">
                  <h2 className="about-heading">About me</h2>
                            <p>
                              
                                    Hello! My name is Fatemeh and I love to create apps for iPhone and iPad. I studied web and iOS development and have been developing applications and websites for over 3 years. 

                                    The Xcode IDE and Swift programming language are the tools that I use every day. Technologies I use are Swift, Java , React , HTML5, CSS and JavaScript. 

                                    I creat the iOS APP and responsive websites that are displayed on all devices including desktop and smartphones.

                                    My goals are to focus for best app experience, content and delivery of the massage you  want to send to the user
                              </p>
                              <p>
                            Let me help you build the exquisite APP of your dreams...
                            </p>
                  
                  </div>  
           </div> 
        </div>
    )
}

export default AboutUS;
