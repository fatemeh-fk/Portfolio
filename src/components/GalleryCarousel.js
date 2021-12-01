import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// images import
import slide1 from "../images/slide_1.jpg";
import slide2 from "../images/slide_2.jpg";
import slide3 from "../images/slide_3.jpg";
import slide4 from "../images/slide_4.jpg";
import slide5 from "../images/slide_5.jpg";
import slide6 from "../images/slide_6.jpg";
import slide7 from "../images/slide_7.jpg";
const GalleryCarousel = () => {
    return (
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
        
        >
            <>
               <img src={slide1} alt="Marquise"/>
               <div className="myCarousel"></div>
               {/* <h3> Marquise</h3>
               <p>test test test test test test test test test test test test test test test </p>
                */}
            </>
            <>
               <img src={slide2} alt="Marquise"/>
               <div className="myCarousel"></div>
               {/* <h3> Marquise</h3>
               <p>test test test test test test test test test test test test test test test </p>
                */}
            </>
            <>
               <img src={slide3} alt="Marquise"/>
               <div className="myCarousel"></div>
               {/* <h3> Marquise</h3>
               <p>test test test test test test test test test test test test test test test </p>
                */}
            </>
            <>
               <img src={slide4} alt="Marquise"/>
               <div className="myCarousel"></div>
               {/* <h3> Marquise</h3>
               <p>test test test test test test test test test test test test test test test </p>
                */}
            </>
            <>
               <img src={slide5} alt="Marquise"/>
               <div className="myCarousel"></div>
               {/* <h3> Marquise</h3>
               <p>test test test test test test test test test test test test test test test </p>
                */}
            </>
            <>
               <img src={slide6} alt="Marquise"/>
               <div className="myCarousel"></div>
               {/* <h3> Marquise</h3>
               <p>test test test test test test test test test test test test test test test </p>
                */}
            </>
            <>
               <img src={slide7} alt="Marquise"/>
               <div className="myCarousel"></div>
               {/* <h3> Marquise</h3>
               <p>test test test test test test test test test test test test test test test </p>
                */}
            </>
        </Carousel>
    )
}

export default GalleryCarousel;
