import React, {useState} from "react";
import emailjs from "emailjs-com";
//import {useForm} from "react-hook-form";



const Contact = () => {
   //const [successMessage, setSuccessMessage]= useState("");
//   const {register, handleSubmit, errors} = useForm();
const [successMessage, setSuccessMessage]= useState("");

   
  const serviceID="service_ID1";
  const templateID="template_ID1";
  const userID="user_odCHTPQw7UXhl6yne58Tw"; 

  const sendEmail=(e)=> {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


    return (
        <div id="contact" className="contacts">
            <div className="text-center">
                <h2>CONTACT ME</h2>
                <p>Please fill the form and I'll contact you as soon as possible.</p>
                <span class="success-messag">{successMessage}</span>
            </div>
            <div className="container">
              <form onSubmit={sendEmail}>
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <div class="row">
                 <div className="col-md-6 col-xs-12">

                     <input
                    
                     type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      
                    //   ref={
                    //      register({
                    //          required:"please enter you name",
                    //         maxLength:{
                    //             value:20,
                    //             message:"please enter a name with fewer than 20 characters"
                    //       }
                    //      })
                    //    }

                      />
                       <div className="line"></div>
                        {/* <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>  */}

                      <input
                     
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      />
                      <div className="line"></div>
                     <input
                     
                     type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      />
                      <div className="line"></div>
                       <input
                       
                       type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      />
                      <div className="line"></div>
                 </div>
                   <div className="col-md-6 col-xs-12">

                       <textarea
                       id="description"
                       type="text"
                       className="form-control"
                       placeholder="Please describe shortly ..."
                       name="description"
                       
                       >
                       </textarea>
                       <div className="line"></div>
                       <button className="btn-contact contact-btn" type="submit">CONTACT ME</button>
                   </div>
                </div>
                </form>
            </div>
            
        </div>
    )
}

export default Contact;
