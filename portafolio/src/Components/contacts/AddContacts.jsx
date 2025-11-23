import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactsModel from "../../datasource/ContactsModel";
import { create } from "../../datasource/api-contacts";
import ContactsForm from "./ContactsForm";

const Addcontact = () => {
    const navigate = useNavigate();
    const [contact, setcontact] = useState(new ContactsModel());
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setcontact(formData => ({ ...formData, [name]: value }));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting contacts: ", contact);

        const submitcontact = {
            id: contact.id,
            firstname: contact.firstname,
            lastname: contact.lastname,
            email: contact.email,
            phoneNumber: contact.phoneNumber,
            message: contact.message
        };

        create(submitcontact)
            .then(data => {
                if (data) {
                    alert(`Contact added  ${data.title} successfully!`);
                    navigate("/contact/list");
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
                    <h1>Add Contact</h1>
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

export default Addcontact;