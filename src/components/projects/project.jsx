import { getProject } from "./data";
import { useParams } from "react-router-dom";

const Project = () => {
    let params = useParams();
    let project = getProject(parseInt(params.id))

    return (
        <div className="container project-container">
            <div className="row">
                <div className="col proj-img-container">
                    <img 
                        src={ project.cover } 
                        alt={ project.title}  
                        className="pb-5"
                    />
                </div>
                

                <div className="col">
                    <h3  className=" title-pr"> { project.title } </h3>
                    
                    <table className="table">
                        <tbody>
                            <tr className="border-bottom">
                                <th scope="row"> tech: </th>
                                <td className="text-center"> { project.technology } </td>
                            </tr>

                            <tr className="border-bottom">
                                <th scope="row" > description: </th>
                                <td className="text-center"> { project.description }  </td>
                            </tr>

                            <tr  className="border-bottom">
                                <td >
                                    <a href= { project.repository } target="_blank" rel="noreferrer" > repository </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};



export default Project;