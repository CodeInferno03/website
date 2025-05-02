import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import HomePage from './components/home/page'
import WebsiteContextProvider from './utils/contextProvider';
import AboutPage from './components/about/page';
import ProjectsPage from './components/projects/page';
import EducationPage from './components/education/page';
import ExperiencePage from './components/experience/page';

import './App.css'
import bgVideo from './assets/ocean_background_live_image.mp4'

function App() {

  return (
    <div>
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          minWidth: '100vw',
          minHeight: '100vh',
          objectFit: 'cover',
          zIndex: '-1',
           }}
      >
        <source src={bgVideo} type='video/mp4' />
        Your brower does not support the video tag.
      </video>
      <a
        style={{
          position: 'absolute',
          bottom: 0,
          color: '#FFFFFF'
        }}
        href="https://www.vecteezy.com/free-videos/live-wallpaper-ocean">Live Wallpaper Ocean Stock Videos by Vecteezy</a>
      <div
        // style={{
        //   backgroundImage: `url(${bgImage})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat',
        //   minHeight: '100vh',
        // }}
      >
        <WebsiteContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/projects' element={<ProjectsPage />} />
              <Route path='/education' element={<EducationPage />} />
              <Route path='/experience' element={<ExperiencePage />} />
            </Routes>
          </BrowserRouter>
        </WebsiteContextProvider>
      </div>
    </div>
  )
}



export default App
