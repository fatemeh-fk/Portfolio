import React from "react";
import pic1 from "../images/1.png";
import pic2 from "../images/2.png";
import pic3 from "../images/3.png";
import pic4 from "../images/4.png";
import pic5 from "../images/5.png";

//import { faDesktop,faMobile,faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// popupbox
import {PopupboxManager,PopupboxContainer}from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Project = () => {
{/*weather*/ }
    const openPopupboxWeather = () => {
              const content =(
        <>
           <img className="image-popupbox" src={pic1} alt="weather app project"/>
           <p> to check the weather for the current location based on the GPS data from the iPhone as well as by searching for a city manually</p>
           <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/fatemeh-fk/weather-channel-app")}>https://github.com/fatemeh-fk/weather-channel-app</a>
                    
        </>
              )
        PopupboxManager.open({content})
    }

      const popupboxConfigWeather ={
          titleBar:{
              enable:true,
              text: "weather App."
          },
          fadeIn:true,
          fadeInSpeed:500
          
      }
/*BMIApp*/ 
const openPopupboxBmi = () => {
    const content =(
<>
 <img className="image-popupbox" src={pic2} alt="BMI app project"/>
 <p> a Body Mass Index calculator : Based on the user’s weight and height it will calculate their body mass and give a piece of health advice depending on whether if they have eaten too many pies or if they need to eat more pies.</p>
{/*demo

<b>Demo:</b><a className="hyper-link" onClick={() => window.open("https://github.com/fatemeh-fk/body-mass-index")}>https://github.com/fatemeh-fk/body-mass-index</a>
  */}
 <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/fatemeh-fk/body-mass-index")}>https://github.com/fatemeh-fk/body-mass-index</a>
          
</>
    )
PopupboxManager.open({content})
}


const popupboxConfigbmi ={
titleBar:{
    enable:true,
    text: "BMI App."
},
fadeIn:true,
fadeInSpeed:500

}


{/*quiz*/ }
const openPopupboxTest = () => {
    const content =(
<>
 <img className="image-popupbox" src={pic3} alt="Exam app project"/>
 <p>  quiz apps</p>
 <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/fatemeh-fk/quizApp")}>https://github.com/fatemeh-fk/quizApp</a>
          
</>
    )
PopupboxManager.open({content})
}

const popupboxConfigTest ={
titleBar:{
    enable:true,
    text: "Exam App."
},
fadeIn:true,
fadeInSpeed:500

}

{/*calculate your bill*/ }
const openPopupboxBill = () => {
    const content =(
<>
 <img className="image-popupbox" src={pic4} alt="calculate your bill app project"/>
 <p> beautiful bill splitting, tip calculating app</p>
 <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/fatemeh-fk/Calculator-App")}>https://github.com/fatemeh-fk/Calculator-App</a>
          
</>
    )
PopupboxManager.open({content})
}

const popupboxConfigBill ={
titleBar:{
    enable:true,
    text: "Bill Calculator App."
},
fadeIn:true,
fadeInSpeed:500

}


{/*chat room*/ }
const openPopupboxChat = () => {
    const content =(
<>
 <img className="image-popupbox" src={pic5} alt="chatRoom app project"/>
 <p> using a service called Firebase Firestore as a backend database to store and retrieve our messages from the cloud</p>
 <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/fatemeh-fk/Chat-Room-App")}>https://github.com/fatemeh-fk/Chat-Room-App</a>
          
</>
    )
PopupboxManager.open({content})
}

const popupboxConfigChat ={
titleBar:{
    enable:true,
    text: "Chatroom App."
},
fadeIn:true,
fadeInSpeed:500

}



    return (
     <div id="Project"className="project-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">projects</h1>
            <div className="image-box-wrapper row justify-content-center">
                    <div className="project-image-box" onClick={openPopupboxWeather}>
                            <img className="project-img" src={pic1}  alt="weatherApp clone project ..."/>
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                        </div>               
            
                     {/**/}
            
                        <div className="project-image-box"onClick={openPopupboxBmi}>
                            <img className="project-img" src={pic2}  alt="BMIApp clone project ..."/>
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                        </div>          
                    
                        {/**/}
            
                        <div className="project-image-box"onClick={openPopupboxTest}>
                        <img className="project-img" src={pic3}  alt="EXAMApp clone project ..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                        </div>
            
                        {/**/}
                        
                            
            </div>

            <div className="image-box-wrapper row justify-content-center">

                          <div className="project-image-box" onClick={openPopupboxBill}>
                            <img className="project-img" src={pic4}  alt="calculate your bill clone project ..."/>
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                            </div>
                    
                        {/**/}
                        
                            <div className="project-image-box"onClick={openPopupboxChat}>
                            <img className="project-img" src={pic5}  alt="chatRoomApp clone project ..."/>
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                            </div>
            </div>
        </div>
            <PopupboxContainer {...popupboxConfigWeather}/>
            <PopupboxContainer {...popupboxConfigbmi}/>
            <PopupboxContainer {...popupboxConfigTest}/>
            <PopupboxContainer {...popupboxConfigBill}/>
            <PopupboxContainer {...popupboxConfigChat}/>
     </div> 
    )
}

export default Project
