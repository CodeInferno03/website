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

function App() {

  return (
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
  )
}



export default App
