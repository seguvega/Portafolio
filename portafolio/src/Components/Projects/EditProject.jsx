import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectsModel from "../../datasource/ProjectsModel";
import { update, read } from "../../datasource/api-Projects";
import ProjectForm from "./ProjectForm";

const EditProject = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [project, setProject] = useState(new ProjectsModel());
    const [errorMsg, setErrorMsg] = useState('')

    // When the component loads.
    useEffect(() => {
        read(id).then(data => {
            if (data) {
                setProject(new ProjectsModel(
                    data._id,
                    data.title,
                    data.img,
                    data.description
                 
                ));
            } else {
                setErrorMsg(data.message);
            }

        }).catch(err => {
            setErrorMsg(err.message);
            console.log(err);
        });
    }, [id, navigate]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProject(formData => ({ ...formData, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting project: ", project);

        const submitProject = {
            id: project.id,
            title: project.title,
            img: project.img,
            description: project.description
        };

        update(submitProject, id)
            .then(data => {
                if (data) {
                    alert(`Project updated  ${data.title} successfully!`);
                    navigate("/projects/list");
                } else {
                    setErrorMsg('Error updating project.');
                }
            })
            .catch(err => {
                setErrorMsg(err.message);
                console.log(err);
            });
    }


    return (
        <div className="container" style={{ paddingTop: 15 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Edit Project</h1>
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

export default EditProject;