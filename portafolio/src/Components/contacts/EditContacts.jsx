import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContactsModel from "../../datasource/ContactsModel";
import { update, read } from "../../datasource/api-contacts";
import ContactsForm from "./ContactsForm";

const EditContacts = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [contact, setcontact] = useState(new ContactsModel());
    const [errorMsg, setErrorMsg] = useState('')

    // When the component loads.
    useEffect(() => {
        read(id).then(data => {
            if (data) {
                setcontact(new ContactsModel(
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
        setcontact(formData => ({ ...formData, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting contact: ", contact);

        const submitcontact = {
            id: contact._id,
            firstname: contact.firstname,
            lastname: contact.lastname,
            email: contact.email,
            phoneNumber: contact.phoneNumber,
            message: contact.message
        };

        update(submitcontact, id)
            .then(data => {
                if (data) {
                    alert(`contact updated  ${data.title} successfully!`);
                    navigate("/contact/list");
                } else {
                    setErrorMsg('Error updating contact.');
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
                    <h1>Edit contact</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <ContactsForm
                        contact={contact}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default EditContacts;