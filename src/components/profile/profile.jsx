import profile from '../../img/profile.png'

const Profile = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img 
                        src={profile}
                        alt="A dark pic of mine" 
                        className='profile-pic'
                   />
                </div>
                <div className="col">
                    <h1 className="a-title">About Me</h1>
                    <p className="a-desc">
                        I was born in Bogotá in the 2001 and in my free times I like to play with my guinea pigs, bake carrot cakes and play just dance.
                    </p>
                    <p className="a-desc">
                        I started into programming on 2021 with   <b><a href="https://www.fundacion-s.org/" target="_blank" rel='noreferrer'>Fundacion S    </a></b> 
                        and since I have gained experience with HTML,
                        CSS, JavaScript, Python 3, Nodejs, Relational and No relational databases, 
                        recently I am learning React and D3js by my own.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Profile;