
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Schedule from './pages/schedule';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Contactus from './pages/contactus';
import Registration from './pages/Registration';

function App() {
  return (
    <>

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/registration' element={<Registration/>}/>
      <Route exact path="/contactus" element={<Contactus />} />
    </Routes>
    {/* <Home/>
    <Schedule/>
    <Contactus/> */}

    
    
    </>
  );
}

export default App;
