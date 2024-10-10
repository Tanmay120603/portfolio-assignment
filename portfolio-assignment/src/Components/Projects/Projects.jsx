import { projectDetails } from "../../utils/constant"
import "./projects.css"

function Projects(){
    return(
        <div className="projects-section-container poppins-font" id="Projects">
            <div className="projects-header-container">
                <h1 className="xl-text">Projects</h1>
                <span className="md-text">Most recent work</span>
            </div>
            <div className="projects-container">
                {projectDetails.map((projectDetail,index)=><div key={index}>
                    <img src={projectDetail.projectHeroImg} alt={projectDetail.name} onClick={()=>window.open(projectDetail.liveUrl,"_blank")} />
                    <div className="project-summary">
                        <h2 className="lg-text" onClick={()=>window.open(projectDetail.liveUrl,"_blank")}>{projectDetail.name}</h2>
                        <p className="sm-text">{projectDetail.description}</p>
                        <ul className="usedTechnologies-container">
                            {projectDetail.usedTechnologies.map((usedTechnology,index)=><li key={index}>{usedTechnology}</li>)}
                        </ul>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Projects