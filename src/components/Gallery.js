import React from "react";
import GalleryCarousel from "./GalleryCarousel";

const Gallery = () => {
    return (
        <div id="gallery" className="testimonials">
            <h2>GALLERY</h2>
            <p>Follow us on <a className="ginstagram"target="-blank" href="https://instagram.com/marquisegroup?igshid=1n31zf1anclxl">instagram</a> </p>
            <div className="container">
             <div className="testimonials-content">

             <GalleryCarousel />
             </div>
                
            </div>
        </div>
    )
}

export default Gallery;
