
import './App.css'
import Header from "../src/components/Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from "../src/pages/Contactus";
import Teachers from "../src/pages/Teachers";
import Course from "../src/pages/Course";
import Archive from "../src/pages/Archive";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
        <Header/>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path='Contactus' element={<Contactus/>}/>
          <Route path='Teachers' element={<Teachers/>}/>
          <Route path='Archive' element={<Archive/>}/>
          {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
        <Footer/>
      
    </>
  )
}

export default App
