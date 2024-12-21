import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Layout from './components/Layout';


export default function App() {
  return (
    <div className='bg-neutral-900'>
      <Router>
        <Routes>
          
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          
        </Routes>
      </Router>  
    </div>
  )
}