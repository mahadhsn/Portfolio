import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Layout from './components/Layout';
import Projects from './pages/Projects';
import Logbook from './pages/Logbook';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Who from './pages/Whos_This_Guy_Anyway'

export default function App() {
  return (
    <div className=''>
      <Router>
        <Routes>
          
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="/logbook" element={<Logbook />} />
            <Route path="/whos this guy anyway" element={<Who />} />

            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          
        </Routes>
      </Router>  
    </div>
  )
}