import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import HomePage from './components/home/page'
import WebsiteContextProvider from './utils/contextProvider';
import AboutPage from './components/about/page';

function App() {

  return (
    <WebsiteContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </WebsiteContextProvider>
  )
}



export default App
