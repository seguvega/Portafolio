import { remove } from "../../datasource/api-contacts";
import { Link } from "react-router-dom";
    
const ListItemContacts = ({ contact, onRemoved }) => {

    const handleRemove = (id) => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
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
            <td className="text-center"> {contact.firstname || ''}  {contact.lastname || ''} </td>
            <td className="text-center"> {contact.message || ''} </td>
            {/*
            <td className="text-center">
                <Link className="btn bg-primary btn-primary btn-sm" to={'/contacts/edit/' + contact._id}>
                    <i className="fas fa-pencil-alt"></i>
                </Link>
            </td>
            <td className="text-center">
                <button
                    className="btn bg-danger btn-danger btn-sm"
                    onClick={() => handleRemove(contact._id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
            */}
        </tr>
    );

}

export default ListItemContacts;