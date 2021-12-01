import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";
const Header = () => {
    return (
        <div id="home"className="header-wraper">
            <div className="main-info">
                <h1 className="mt-3">FATEMEH KARIMI</h1>
                 <Typed
                 className="typed-text"
                strings={[
                    'Built for Memories',
                    'Ready to Build Your Dream App']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                   
                />
                <Link smooth={true} to="contact" offset={-110} href="#" className="btn-contact">Contact Me</Link>

            </div>
        </div>
    )
}

export default Header;
