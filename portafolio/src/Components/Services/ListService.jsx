import React, { useEffect, useState } from 'react';
import { list } from '../../datasource/api-Projects';
import ListItemProject from './ListItemProject';
import { Link } from 'react-router-dom';

const ListService = () => {
    const [projectList, setprojectList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const loadProjects = () => {
        list().then((data) => {
            if (data) {
                setprojectList(data || []);

                setIsLoading(false);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    }

    // When the component loads.
    useEffect(() => {
        loadProjects();
    }, []);

    // When a item is removed.
    const handleRemove = () => {
        loadProjects();
    }

    return (
        <>
            <div>
                <Link to="/projects/add" className="btn btn-primary align-self-end" role="button">
                    <i className="fas fa-plus-circle"></i>
                    Add a new project
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
                            {projectList.map( project =>
                                <ListItemProject
                                    key={project._id}
                                    project={project}
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