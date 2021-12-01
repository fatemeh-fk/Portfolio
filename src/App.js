/*
import './App.css';

function App() {
  return (
   
  );
}

export default App;
*/


import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUS from "./components/AboutUS";
 import Services from "./components/Services";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Project from "./components/Project";
//import Gallery from "./components/Gallery";
import Contacts from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
 <>
 {/* <Particles
  className="particles-canvas"
    params={{
     particles:{
        number:{

          value:20,
          density:{
            enabel:true,
            value_area:900
          }
        },
         shape:{

          type:"star",
          stroke:{
            width:1,
             color:"#fefaf4"
          }
         }


      }


    }}
  
  /> */}
  <Navbar />
  <Header />
  <AboutUS />
   <Services /> 
   <Project/>
   <Experience />
   <Education/>
   
 { /*<Gallery />*/}
  <Contacts />
  <Footer />
</>
  );
}

export default App;
