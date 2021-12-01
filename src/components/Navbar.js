/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../logo.png";
import {Link} from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#"><img className="logo-1" src={logo} alt="marquise"></img></a> 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color:"white"}} />
          
          </button>

             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About me </Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">My Services</Link>
      </li>
      
      <li className="nav-item">
        <Link smooth={true} to="Project" offset={-110} className="nav-link" href="#">Projects</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="Experiences" offset={-110} className="nav-link" href="#">Experiences</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="education" offset={-110} className="nav-link" href="#">Education</Link>
      </li>
     {/**  <li className="nav-item">
        <Link smooth={true} to="gallery" offset={-110} className="nav-link" href="#">Gallery</Link>
      </li>
*/}
      <li className="nav-item">
        <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">Contact me</Link>
      </li>
      
    </ul>
    
             </div>
             </div>
        </nav>
           )
}

export default Navbar
