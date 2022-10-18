
import Goto from "../goto";

const HProfile = () => {
    return (
        <div className="container-hp">
            <div className="intro-profile row">
                <div className="header-section col-6">
                    <h2 className="text-white" > [ profile ] </h2>
                </div>
                <div className="arrow-section col-6">
                    <Goto link={'/profile'}/>
                </div>
            </div>
        </div>
        
    )
}

export default HProfile;