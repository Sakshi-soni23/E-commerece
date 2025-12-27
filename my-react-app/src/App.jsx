import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes} from 'react-router-dom';
import Contact from './Components/Contact';
import Collections from './Components/Collections';
import About from './Components/About';
import Home from './Components/Home';

function App() {
  

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>       
         <Route path='/collections' element={<Collections/>} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      </Routes>
    </>
  );
}

export default App
