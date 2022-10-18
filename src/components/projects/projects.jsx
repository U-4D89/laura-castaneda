import { getProjects } from './data';
import { Link, Outlet } from 'react-router-dom';
// import Project from './project';


const Projects = () => {
    let projects = getProjects();
    return (
        <div className='container-fluid'>
            <div className="row">
                { projects.map((project) => 
                        <div key={project.id} className="col-md-4">
                            <div className="card mb-2">
                               
                               <Link to={`/projects/${project.id}`} >
                                    <img className="card-img-top"
                                        src= {project.cover} 
                                        alt= {project.name}
                                    />
                                </Link>
                                <Outlet/>
                            </div>
                            
                        </div>
                    )   
                
                }
            </div>
            
        </div>
    )
};

export default Projects;