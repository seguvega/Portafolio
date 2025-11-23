import React from "react";
import { useNavigate } from 'react-router-dom';

const ServiceForm = ({ service = {}, handleChange, handleSubmit }) => {
    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit} className="form card p-1">
            <input type="hidden" name="id" value={service.id || ""} />
            <div className="form-group">
                <label htmlFor="itemTextField">Title</label>
                <input
                    id="itemTextField"
                    name="title"
                    className="form-control"
                    placeholder="Enter the service Name or Title"
                    value={service.title || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="statusTextField">Imagen</label>
                <input
                    id="statusTextField"
                    name="img"
                    className="form-control"
                    placeholder="Imagen URL"
                    value={service.img || ""}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
               <label htmlFor="tagTextArea">Description</label>
                <textarea
                    id="tagTextArea"
                    name="description"
                    className="form-control"
                    placeholder="Enter the description of the service"
                    value={service.description || ""}
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
    );
};

export default ServiceForm;