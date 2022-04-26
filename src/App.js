// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap'

import './App.css'
import Navlinks from './nav_links/Navlinks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Product from './Product/Product'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* calling the Nav link so that its can show in all pages */}
        <Navlinks />

        <Routes>
          <Route>
            {/* The Navlinks path */}
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        {/* Calling the footer so its can show in all the pages */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
