import { remove } from "../../datasource/api-Services";
import { Link } from "react-router-dom";
    
const ListItemService = ({ service, onRemoved }) => {

    const handleRemove = (id) => {
        if (window.confirm('Are you sure you want to delete this Service?')) {
            remove(id)
                .then(data => {
                    if (data) {
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
            <td className="text-center"> {service.title || ''} </td>
            <td><img class="img-fluid" src={service.img}/></td>
            <td className="text-center"> {service.description || ''} </td>
            <td className="text-center">
                <Link className="btn bg-primary btn-primary btn-sm" to={'/services/edit/' + service._id}>
                    <i className="fas fa-pencil-alt"></i>
                </Link>
            </td>
            <td className="text-center">
                <button
                    className="btn bg-danger btn-danger btn-sm"
                    onClick={() => handleRemove(service._id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    );

}

export default ListItemService;