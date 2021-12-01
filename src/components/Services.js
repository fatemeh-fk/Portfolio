import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
//import { faDesktop,faMobile,faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faDesktop,faMobile } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
    return (
        <div id="services"className="services">
          <h1 className="py-5">MY SERVICES</h1>
            <div className="container">
                <div className="row">
                   <div className="col-lg-6 col-md-6 col-sm-6">
                       <div className="box">
                           <div className="circle"><FontAwesomeIcon className="icon" icon={faMobile} size="2x" /></div>
                           <h3>iOS Development</h3>
                           <p>•	Performed mobile application development for iOS native app </p>
                           <p>•	Designed and developed pixel perfect UI</p>
                           <p>•	Integrated API and Web service using REST, JSON and XML</p>
                           <p>•	Worked with third party api’s such as Google Maps</p>
                           <p>•	Designed and developed pixel perfect UI</p>
                           <p>• implementing iOS mobile development tools, Table Views, APIs, Cocoa Pods </p>
                           <p>• Strong problem solving and debugging skills </p>
                     </div>
                   </div>
                    {/*  */}
                    <div className="col-lg-6 col-md-3 col-sm-6">
                       <div className="box">
                       <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                           <h3>Web Development</h3>
                           <p>•	Developed and integrated interactive home pages and landing pages for the desktop and mobile sites</p>
                           <p>•	Made CSS code simpler and more efficient by using CSS Preprocessors (Sass)</p>
                           <p>•	Developed and deployed all A/B testing and personalization</p>
                           <p>•	Improved user experience by developing new JS functionality</p>
                           <p>•	Utilized HTML, CSS, JavaScript, SCSS, JQuery and </p>
                           <p>•	Designed and developed responsive websites</p>
                       </div>
                   </div>
                   {/*  
                   <div className="col-lg-3 col-md-3 col-sm-6">
                       <div className="box">
                       <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>
                           <h3>Builder3</h3>
                           <p>project 3</p>
                       </div>
                   </div>*/}
                    {/*  
                    <div className="col-lg-3 col-md-3 col-sm-6">
                       <div className="box">
                       <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>
                           <h3>Builder4</h3>
                           <p>project 4</p>
                       </div>
                   </div>*/}
                </div>
            </div>

          </div>

        
    )
}

export default Services;
