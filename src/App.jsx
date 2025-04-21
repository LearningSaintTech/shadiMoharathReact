import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import About from './pages/Aboutus';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Authentication from './pages/Authentication';
import Faq from './pages/Faq';
import Gallery from './pages/Gallery';

import BlogDetails from './pages/BlogDetails';

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Landing />} />  
         <Route path="/pricing" element={<Pricing />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/Authentication" element={<Authentication />} /> 
          <Route path="/gallery" element={<Gallery />}/> 
          <Route path="/faq" element={<Faq />} /> 
          {/* <Route path="/blog" element={<Blog/>}/>  */}
          <Route path ="/blog/:id" element={<BlogDetails />} />
         
         </Routes>
         
      
    </Router>
  );
};

export default App;
