import React, { useEffect, useState } from 'react';
import { list } from '../../datasource/api-Services';
import ListItemservice from './ListItemService';
import { Link } from 'react-router-dom';

const ListService = () => {
    const [ServiceList, setServiceList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const loadservices = () => {
        list().then((data) => {
            if (data) {
                setServiceList(data || []);

                setIsLoading(false);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    }

    // When the component loads.
    useEffect(() => {
        loadservices();
    }, []);

    // When a item is removed.
    const handleRemove = () => {
        loadservices();
    }

    return (
        <>
            <div>
                <Link to="/services/add" className="btn btn-primary align-self-end" role="button">
                    <i className="fas fa-plus-circle"></i>
                    Add a new service
                </Link>
            </div>
            <div className="table-responsive" >
                {isLoading && <div>Loading...</div>}
                {!isLoading &&
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            {/* -- Header Row-- */}
                            <tr>
                                <th className="text-center">Title</th>
                                <th className="text-center">Img</th>
                                <th className="text-center">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* -- Repeatable Template Row -- */}
                            {ServiceList.map( service =>
                                <ListItemservice
                                    key={service._id}
                                    service={service}
                                    onRemoved={handleRemove}
                                />
                            )}
                        </tbody>
                    </table>}
            </div>
        </>
    )
}

export default ListService;