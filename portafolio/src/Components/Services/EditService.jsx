import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ServicesModel from "../../datasource/ServicesModel";
import { update, read } from "../../datasource/api-Services";
import ServicesForm from "./ServiceForm";

const EditService = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [service, setservice] = useState(new ServicesModel());
    const [errorMsg, setErrorMsg] = useState('')

    // When the component loads.
    useEffect(() => {
        read(id).then(data => {
            if (data) {
                setservice(new ServicesModel(
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
        setservice(formData => ({ ...formData, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting service: ", service);

        const submitservice = {
            id: service.id,
            title: service.title,
            img: service.img,
            description: service.description
        };

        update(submitservice, id)
            .then(data => {
                if (data) {
                    alert(`service updated  ${data.title} successfully!`);
                    navigate("/services/list");
                } else {
                    setErrorMsg('Error updating service.');
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
                    <h1>Edit Service</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <ServicesForm
                        service={service}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default EditService;