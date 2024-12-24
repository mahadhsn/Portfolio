import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Layout from './components/Layout';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className='bg-neutral-900'>
      <Router>
        <Routes>
          
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          
        </Routes>
      </Router>  
    </div>
  )
}