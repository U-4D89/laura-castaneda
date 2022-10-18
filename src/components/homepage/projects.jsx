import Goto from "../goto";


const HProjects = () => {
    return (
        <div className="container-hp">
            <div className="intro-projects row">
                <div className="header-section col">
                    <h2 className="text-white"> [ projects ] </h2>
                </div>
                <div className="arrow-section col">
                    <Goto link={'/projects'}/>
                </div>
            </div>
        </div>
        
    )
};

export default HProjects;