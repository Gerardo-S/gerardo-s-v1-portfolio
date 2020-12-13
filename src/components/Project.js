import React from "react";
// Work in progress, I feel it would be best to create a json file with listed properties of my projects to make this work as intended. I will revisit.
function Project(props) {
    const { projectImg, imageAlt, projectTitle, projectDescription, imgLink, repoLink, techList } = props;
    return (
        <div className="col mb-4 ">
            <div className="card h-100 shadow">
                <a href={imgLink} rel="noreferrer" target="_blank">
                    <img src={projectImg} style={{ height: 180, objectFit: "cover" }} className="card-img-top border-bottom border-info border-4" alt={imageAlt} />

                </a>
                <div className="card-body">
                    <h5 className="card-title">{projectTitle}</h5>
                    <p className="card-text">{projectDescription}</p>
                    <h6 className="card-title">Technologies Used</h6>
                   <p style={{color:"#28ACEA"}}>
                       {techList}
                   </p>
                </div>
                <div className="card-footer" style={{
                    
                   backgroundColor: "#004242"
                }}>

                    <small className="text-mute"><a  className="text-reset"  href={repoLink} rel="noreferrer" target="_blank"><p style={{color:"whiteSmoke"}}>View Repo</p></a></small>
                </div>
            </div>
        </div>
    )
};
export default Project