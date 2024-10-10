import "./contact.css"
import { contactDetails } from "../../utils/constant"
import { useState } from "react"
import emailJs from "@emailjs/browser"
import { toast,ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function Contact(){

    const [isLoading,setIsLoading]=useState(false)

    function handleSubmit(e){
        setIsLoading(true)
        e.preventDefault()
        emailJs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,e.target,{publicKey:import.meta.env.VITE_PUBLIC_KEY})
        .then(response=>toast.success("Message sent successfully",{autoClose:2000}))
        .catch(err=>toast.error(err.message,{autoClose:2000}))
        .finally(()=>setIsLoading(false))
    }

    return(
        <div className="contact-section-container poppins-font" id="Contact">
             <div className="contact-header-container">
                <h1 className="xl-text">Contact Me</h1>
                <span className="md-text">Get in touch</span>
            </div>
            <div className="contact-main-container">
                <div className="contact-main-left">
                    <h1 className="xxl-text">Let's Connect <br></br> Together</h1>
                    <div>
                        <h2 className="lg-text">Mail</h2>
                        <span className="md-text">{contactDetails.email}</span>
                    </div>
                    <div>
                        <h2 className="lg-text">Phone</h2>
                        <span className="md-text">{contactDetails.phoneNumber}</span>
                    </div>
                </div>
            <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" placeholder="Name" name="name" />
                    <input type="text" placeholder="Email" name="email" />
                    <textarea name="message" placeholder="Message"></textarea>
                    <input type="submit" value={isLoading ? "Sending..." :"Submit"} />
            </form>
            </div>
            <ToastContainer position="top-right" pauseOnHover={true} style={{fontSize:"16px"}}></ToastContainer>
        </div>
    )
}

export default Contact