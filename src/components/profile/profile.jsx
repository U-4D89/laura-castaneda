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
                        Nací en Bogotá en el año 2001. En mi tiempo libre me gusta jugar con mis cuyos, hornear y jugar just dance.
                    </p>
                    <p className="a-desc">
                        Empecé en la programación en el 2021 con <b><a href="https://www.fundacion-s.org/" target="_blank" rel='noreferrer'>Fundacion S    </a></b> 
                        y desde entonces he ganado experiencia con HTML, CSS
                        CSS, JavaScript, Python 3, Nodejs, bases de datos relacionales y no relacionales,
                        por estos días aprendo ReactJS por mi cuenta. 
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Profile;