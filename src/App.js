//import { Navbar } from 'react-bootstrap';
import './Styling/App.css';
import Header from './Components/Header';
import HSRDamageCalc from './Components/HSR/HSRDamageCalc';
import BreakDamageCalc from './Components//HSR/BreakDamageCalc';
import ActionValueCalc from './Components/HSR/ActionValueCalc';
import MHMotionValueCalc from './Components//MH/MHMotionValueCalc';
import About from './Components/About';
import NavBar from './Components/NavBar/NavBar';
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
        <Route path='HSRActionValueCalc' element={<ActionValueCalc />} />
        <Route path='MHMotionValueCalc' element={<MHMotionValueCalc />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
