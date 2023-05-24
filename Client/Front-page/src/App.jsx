import Navbar from './Components/Navbar'
import './Components/Navbar/Navbar.css'
import About from './Page/About'
import Blog from './Page/Blog'
import Contact from './Page/Contact'
import Country from './Page/Country'
import Course from './Page/Course'
import Elements from './Page/Elements'
import Home from './Page/Home'
import Immigration from './Page/Immigration'
import Header from './Components/Header'
import './Components/Header/Header.css'
import Section from './Components/Section'
import './Components/Section/Section.css'
import Form from './Components/Form'
import './Components/Form/Form.css'
import Footer from './Components/Footer'
import './Components/Footer/Footer.css'

import { Route, Routes } from "react-router-dom"



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/immigration' element={<Immigration/>} />
        <Route path='/course' element={<Course/>} />
        <Route path='/country' element={<Country/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/elements' element={<Elements/>} />
      </Routes>




      <Navbar/>
      <Header/>
      <Section/>
      <Form/>
      <Footer/>
      
    </>
  )
}

export default App
