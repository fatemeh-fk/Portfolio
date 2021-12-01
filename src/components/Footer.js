import React from "react";
//import logofooter from "../logo-footer.png";

const Footer = () => {
    return (
        <div className="footer">
         <div className="container">
           <div className="row">
         
               <div className="col text-center pt-5">
                 {/**   <img class="d-inline-block alig-top"src={logofooter}></img>*/}
                   {/* <p> Phone: 4168302729</p> */}
                   <h6>Phone :+1(437)084-6219</h6>
                   <h6>Email :fatemeh.ka84@gmail.com</h6>
               </div>
               {/* <div className="col-lg-4 col-md-6 col-sm-6">

                   <div className="d-flex">
                       <p>©2021 Marquise Group Inc. all rights reserved.</p>
                   </div>
               </div> */}
           </div> 
           <div className="row">
               <div className="col text-center">
                   <p>
                       {/* ©2021 Marquise Group Inc. all rights reserved. */}
                       Copyright&copy;
                       {new Date().getFullYear()}&nbsp;|All rights reserved.
                       </p></div>
             </div>   
         </div>            
        </div>
    )
}

export default Footer;
