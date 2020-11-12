import React from "react";
// Work in progress, I feel it would be best to create a json file with listed properties of my projects to make this work as intended. I will revisit.
function AddProject(props) {
    return (
        <div className="col-md-4 p-1">
            <a href={props.path}>
                <img src={props.name} className="img-fluid img-thumbnail" style={{ height: 360, objectFit: 'contain' }} alt={props.name} />{props.title}
            </a>
        </div>

    )
}