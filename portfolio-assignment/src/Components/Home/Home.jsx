import "./home.css"
import {NavBar} from "../"
import { bioDetails } from "../../utils/constant"
import {ReactTyped} from "react-typed"

function Home(){
    return(
        <div className="home-container" id="Home">
            <div className="empty-space"></div>
            <NavBar></NavBar>
            <div className="empty-space"></div>
            <div className="side-bar-logos">
                {bioDetails.socialLogos.map((socialLogo,index)=><a href={socialLogo.redirectUrl} key={index} target="_blank"><img src={socialLogo.imgUrl} alt={socialLogo.altText} className="small-icons" /></a>)}
            </div>
            <div className="summary-profile-img-container">
                <div className="summary-container poppins-font">
                    <h1 className="xl-text">{bioDetails.fullName} 👋</h1>
                    <div className="role-type-container">
                        <span className="horizontal-line"></span>
                        <ReactTyped strings={bioDetails.role} className="lg-text" typeSpeed={100} backSpeed={60} loop></ReactTyped>
                    </div>
                    <p className="md-text desc-text">{bioDetails.description}</p>
                    <button className="check-resume-btn" onClick={()=>window.open(bioDetails.resumeUrl,"_blank")}>Check Resume<img src="/assets/Paper-Rocket.png" alt="Paper-rocket" className="small-icons" /></button>
                </div>
                <div className="profile-img-container">
                    <img src="/assets/Profile-Image.png" alt="profile-image" />
                </div>
            </div>
            <div className="empty-space"></div>
        </div>
    )
}

export default Home