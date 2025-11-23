import React, { useEffect, useState } from 'react';
import { list } from '../../datasource/api-contacts';
import ListItemcontact from './ListItemContacts';
import { Link } from 'react-router-dom';

const Listcontact = () => {
    const [contactList, setContactList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const loadcontacts = () => {
        list().then((data) => {
            if (data) {
                setContactList(data || []);
                setIsLoading(false);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    }

    // When the component loads.
    useEffect(() => {
        loadcontacts();
    }, []);

    // When a item is removed.
    const handleRemove = () => {
        loadcontacts();
    }

    return (
        <>
            <div>
                <Link to="/contacts/add" className="btn btn-primary align-self-end" role="button">
                    <i className="fas fa-plus-circle"></i>
                    Add a new contact
                </Link>
            </div>
            <div className="table-responsive" >
                {isLoading && <div>Loading...</div>}
                {!isLoading &&
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            {/* -- Header Row-- */}
                            <tr>
                                <th className="text-center">FullName</th>
                                <th className="text-center">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* -- Repeatable Template Row -- */}
                            {contactList.map( contact =>
                                <ListItemcontact
                                    key={contact._id}
                                    contact={contact}
                                    onRemoved={handleRemove}
                                />
                            )}
                        </tbody>
                    </table>}
            </div>
        </>
    )
}

export default Listcontact;