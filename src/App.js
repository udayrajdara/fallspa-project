import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/home';
import Services from './Pages/Services/services';
import Facials from './Pages/Services/Facials/facials';
import Contact from './Pages/Contact/contact';
import AboutUs from './Pages/About/aboutUs';
import BodyTreatment from './Pages/Services/BodyTreatment/bodaytreatment';
import MineralBath from './Pages/Services/MineralBath/mineralBath';
import Waxing from './Pages/Services/Waxing/waxing';
import Massage from './Pages/Services/Massage/massage';
import GeoThermal from './Pages/Services/Geothermal/geothermal';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
          <Route path='/services/facials' element={<Facials/>}/>
          <Route path='/services/bodyTreatment' element={<BodyTreatment/>}/>
          <Route path='/services/mineralBath' element={<MineralBath/>}/>
          <Route path='/services/waxing' element={<Waxing/>}/>
          <Route path='/services/massage' element={<Massage/>}/>
          <Route path='/services/geothermalSpa' element={<GeoThermal/>}/>
          <Route/>
        <Route path='/contactUs' element={<Contact/>}/>



      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
