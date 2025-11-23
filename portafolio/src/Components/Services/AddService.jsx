import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServicesModel from "../../datasource/ServicesModel";
import { create } from "../../datasource/api-Services";
import ServiceForm from "./ServiceForm";

const AddService = () => {
    const navigate = useNavigate();
    const [service, setservice] = useState(new ServicesModel());
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setservice(formData => ({ ...formData, [name]: value }));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting services: ", service);

        const submitservice = {
            id: service.id,
            title: service.title,
            img: service.img,
            description: service.description
        };

        create(submitservice)
            .then(data => {
                if (data) {
                    alert(`Service added  ${data.title} successfully!`);
                    navigate("/services/list");
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
                    <h1>Add Service</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <ServiceForm
                        service={service}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddService;