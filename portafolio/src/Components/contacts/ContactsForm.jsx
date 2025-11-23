import React from "react";
import { useNavigate } from 'react-router-dom';

const ContactsForm = ({ contact = {}, handleChange, handleSubmit }) => {
    const navigate = useNavigate();

    return (
        <>
         <h1>Contact Me</h1>
         <p>Sebastian Velasco Telf 437-607-1036</p>
         <p>Email seguvega@hotmail.com </p>
         <p>Toronto Scarborough</p>
        <form onSubmit={handleSubmit} className="FormContact">
            <input type="hidden" name="id" value={contact.id || ""} />
            <div className="form-group">
                <label htmlFor="itemTextField">First Name</label>
                <input
                    id="itemTextField"
                    name="firstname"
                    className="form-control"
                    placeholder="Enter your First Name"
                    value={contact.firstname || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="itemTextField">Last Name</label>
                <input
                    id="itemTextField"
                    name="lastname"
                    className="form-control"
                    placeholder="Enter your Last Name"
                    value={contact.lastname || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="itemTextField">Email Address</label>
                <input
                    id="itemTextField"
                    name="email"
                    className="form-control"
                    placeholder="Enter your Email Address"
                    value={contact.email || ""}
                    onChange={handleChange}
                    required
                />
            </div>

         <div className="form-group">
                <label htmlFor="itemTextField">Contact Number</label>
                <input
                    id="itemTextField"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="Enter your Contact Number"
                    value={contact.phoneNumber || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
               <label htmlFor="tagTextArea">Message</label>
                <textarea
                    id="tagTextArea"
                    name="message"
                    className="form-control"
                    placeholder="Enter the message of the contact"
                    value={contact.message || ""}
                    onChange={handleChange}
                    required
                />
            </div>
            &nbsp;
            <button className="btn btn-primary" type="submit">
                <i className="fas fa-edit"></i> Submit
            </button>
            &nbsp;
            <button className="btn btn-warning" type="button" onClick={() => navigate(-1)} >
                <i className="fas fa-undo"></i>
                Cancel
            </button>
        </form>
        </>
    );
};

export default ContactsForm;