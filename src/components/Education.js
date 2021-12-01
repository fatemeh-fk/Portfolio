import React from "react";

const Education = () => {
    return (
       <div id="education"className="experience">
           <div className="d-flex justify-content-center my-5">
               <h1> education</h1>
           </div>

           <div className="container experience-wrapper">
               <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">

                    <h3>2011</h3>
                    <p><b>Bachelor of Social Service, Social Work</b></p>
                    <p>Alametabatabai University, Tehran, IRAN</p>
                                                      
                </div>

               </div>
               {/*  */}
               <div className="timeline-block timeline-block-left">
                <div className="marker"></div>
                <div className="timeline-content">

                <h3>2018</h3>
                    <p><b>Programming Analyst</b></p>
                    <p> LaSalle College, Montreal, QC, Canada</p>
                    <p>•	Website, Web application programming and Mobile, Java, Swift, C#, React, JavaScrip</p> 
                  
                                                               
                </div>

               </div>
               {/*  */}
               
           </div>
       </div>
    )
}

export default Education
