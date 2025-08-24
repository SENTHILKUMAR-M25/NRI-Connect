import { useEffect, useState } from 'react'
import './App.css'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Login from './Component/Forms/Login'
import Hiring from './Component/Forms/Hiring'
import Service from './Component/Enquiry'
import Enquiry from './Component/Enquiry'
import Services from './Component/Services'
import Property from './Component/Property'
import SellerForm from './Component/Selling'
import Routing from './Component/Routing'
import Employee from './Component/Employee'
import { useSelector } from 'react-redux'
import Details from './Component/Details'
import SignUp from './Component/Forms/SignUp'
import Footer from './Component/Footer'
import ContactForm from './Component/ContactForm'
//  function Admin({children}) {
//     const user = useSelector(state => state.userinfo.user)
//     if (user.name === 'senthil' && user.email === 'vs1625@gmail.com') {
//       return children;
//     }
//     return <Navigate to="/home" replace  />;
//   }
function App() {

 
  return (
    <>
{/* 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={< Routing />}>
            <Route path="/home" element={<Home />} />
            <Route path="/hiring" element={<Hiring />} />
            <Route path="/Employee" element={<Employee />} />
            <Route path="/Enquiry" element={<Enquiry />} />
            <Route path="/service" element={<Services />} />
            <Route path="/details/:id" element={<Details />} />            
            <Route path="/property" element={<Property />} />
            <Route path="/Selling" element={<SellerForm />} />
            <Route path="/property" element={<Property />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />

    <Route element={<Routing />}>
      <Route
        path="*"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/Employee" element={<Employee />} />
        <Route path="/Enquiry" element={<Enquiry />} />
        <Route path="/service" element={<Services />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/property" element={<Property />} />
        <Route path="/Selling" element={<SellerForm />} />
      </Route>
    </Route>
  </Routes>
</BrowserRouter> */}


    <BrowserRouter>
<Navbar  />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route >
          <Route element={<LayoutWithNavbar />}>
                  <Route path="/" element={<Home />} />
            <Route path="/hiring" element={<Hiring />} />
            <Route path="/Employee" element={<Employee />} />
            <Route path="/Enquiry" element={<Enquiry />} />
            <Route path="/service" element={<Services />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/property" element={<Property />} />
            <Route path="/Selling" element={<SellerForm />} />
            <Route path="/contact" element={<ContactForm />} />
         
          </Route>
    
        </Route>

      </Routes>
           <Footer />
      
    </BrowserRouter>
 


    </>
  )
}

function LayoutWithNavbar() {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet /> 
    </>
  );
}
export default App
