import "./skills.css"
import { skillsDetails } from "../../utils/constant"

function Skills(){
    return(
        <div className="skills-container poppins-font" id="Skills">
            <div>
            <h1 className="skills-header xl-text">Skills</h1>
            <span className="md-text">My technical level</span>
            </div>
            <div className="wrapper">
                {skillsDetails.map(skillsDetail=>
                   <div className="skill-box">
                    <h2 className="header-domain lg-text">{skillsDetail.domainName}</h2>
                    <div className="skills-content">
                      {skillsDetail.skills.map(skill=><div><img src={skill.skillLogo} alt={`${skill.skillName+"-logo"}`} className="small-icons"/>
                        <div className="skill-text-container">
                            <span className="sm-text">{skill.skillName}</span>
                        </div>
                        </div>
                     )
                      } 
                    </div>
                   </div>     
                )}
                </div>
        </div>
    )
}

export default Skills