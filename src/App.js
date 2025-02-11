//import { Navbar } from 'react-bootstrap';
import './Styling/App.css';
import Header from './Components/Header';
import HSRDamageCalc from './Components/HSR/HSRDamageCalc';
import BreakDamageCalc from './Components//HSR/BreakDamageCalc';
import MHMotionValueCalc from './Components//MH/MHMotionValueCalc';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Routes>
        <Route path='HSRDamageCalc' element={<HSRDamageCalc />}/>
        <Route path='HSRBreakDamCalc' element={<BreakDamageCalc />} />
        <Route path='MHMotionValueCalc' element={<MHMotionValueCalc />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
