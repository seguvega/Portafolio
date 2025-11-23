import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectsModel from "../../datasource/ProjectsModel";
import { create } from "../../datasource/api-Projects";
import ProjectForm from "./ProjectForm";

const AddProject = () => {
    const navigate = useNavigate();
    const [project, setproject] = useState(new ProjectsModel());
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setproject(formData => ({ ...formData, [name]: value }));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting project: ", project);

        const submitproject = {
            id: project.id,
            title: project.title,
            img: project.img,
            description: project.description
        };

        create(submitproject)
            .then(data => {
                if (data) {
                    alert(`Project added  ${data.title} successfully!`);
                    navigate("/projects/list");
                } else {
                    setErrorMsg(data.message);
                }
            })
            .catch(err => {
                setErrorMsg(err.message);
                console.log(err);
            });
    }


    return (
        <div className="container" style={{ paddingTop: 10 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Add Project</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <ProjectForm
                        project={project}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddProject;