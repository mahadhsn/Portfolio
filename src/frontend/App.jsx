import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Layout from './components/Layout';
import Projects from './pages/Projects';
import Logbook from './pages/Logbook';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Intro from './pages/logs/Intro'

export default function App() {
  return (
    <div className='bg-bglight dark:bg-bgdark'>
      <Router>
        <Routes>
          
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="/logbook" element={<Logbook />} />
            <Route path="/logbook/intro" element={<Intro />} />

            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          
        </Routes>
      </Router>  
    </div>
  )
}