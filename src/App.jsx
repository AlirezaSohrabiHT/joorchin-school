
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
import Whyjoorchin from "../src/pages/Whyjoorchin";
import Blog from "../src/pages/Blog";
import Loading from "../src/components/Loading/Loading";
import { useEffect, useState } from 'react';
import Page404 from './components/Page404/Page404';
function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }
  return (
    <>
       
        <BrowserRouter>
        <Header/>
          <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path='Contactus' element={<Contactus/>}/>
          <Route path='Course' element={<Course/>}/>
          <Route path='Teachers' element={<Teachers/>}/>
          <Route path='Archive' element={<Archive/>}/>
          <Route path='WhyJoorchin' element={<Whyjoorchin/>}/>
          <Route path='Blog' element={<Blog/>}/>
          <Route path='temp' element={<Page404 />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
        <Footer/>
      
    </>
  )
}

export default App
