import { 
  Route, 
  Routes, 
} from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Profile from './components/profile/profile';
import Projects from './components/projects/projects';
import Project from './components/projects/project';
import SnsButton from './components/snsbutton';
import  MailMe  from './components/mailme/mail';




function App() {
  return (
    <div>
        <Navbar />
        <SnsButton />

        {/* Browser Route is in index.js */}
    
          <Routes>
              <Route index path="/" element={ <Homepage/> } />

              <Route path="/profile" element= { <Profile/> } />
              
              <Route path="/projects" element= { <Projects/> } />
              
              <Route path="/projects/:id" element= { <Project/> } />
              
              <Route path="/email" element= {<MailMe/>}  />

              <Route 
                path="*"
                element = {
                  <p> Wrong path, please go back :( </p>
                }
              
              />
              
          </Routes>

    </div>
  );
}


export default App;
