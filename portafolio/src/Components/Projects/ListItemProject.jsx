import { remove } from "../../datasource/api-Projects";
import { Link } from "react-router-dom";

const ListItemProject = ({ project, onRemoved }) => {

    const handleRemove = (id) => {
        if (window.confirm('Are you sure you want to delete this Project?')) {
            remove(id)
                .then(data => {
                    if (data && data.success) {
                        if (typeof onRemoved === 'function') onRemoved(id);
                    }
                })
                .catch(err => {
                    alert(err.message);
                    console.log(err);
                });
        }
    };

    return (
        <tr >
            <td className="text-center"> {project.title || ''} </td>
            <td><img class="img-fluid" src={project.img}/> </td>
            <td className="text-center"> {project.description || ''} </td>
            <td className="text-center">
                <Link className="btn bg-primary btn-primary btn-sm" to={'/projects/edit/' + project._id}>
                    <i className="fas fa-pencil-alt"></i>
                </Link>
            </td>
            <td className="text-center">
                <button
                    className="btn bg-danger btn-danger btn-sm"
                    onClick={() => handleRemove(project._id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    );

}

export default ListItemProject;