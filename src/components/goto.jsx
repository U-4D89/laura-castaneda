import { Link } from "react-router-dom";

const Goto = ( {link} ) => {
    return (
        <Link to={link} className="arrow-icon" id="arrow">
        </Link>
    )
} 
export default Goto;