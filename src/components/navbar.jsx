import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {

    const activeStyle = {
        textDecoration: "underline"
    };

    return (
        
        <div id="navbar-container" className="sticky-top">
            <nav className="navbar navbar-expand-sm navbar-light">
               
                <div className="container-fluid">
                    <Link to="" className="navbar-brand m-3">LAURA</Link>

                    <div className="row">
                        <div className="col">
                            <button 
                                className="navbar-toggler" 
                                type="button" data-bs-toggle="collapse" 
                                data-bs-target="#navbarNav" 
                                aria-controls="navbarNav" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item m-2">
                                        <NavLink 
                                            to="/profile"
                                            style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                            }
                                        > 
                                            Profile 
                                        </NavLink>
                                    </li>

                                    <li className="nav-item m-2">
                                        <NavLink 
                                            to="/projects"
                                            style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                            }
                                        >
                                            Projects
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </nav>
        </div>

    )
}

export default Navbar;