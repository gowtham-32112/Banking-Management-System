import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import React from 'react';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
// import Visitor from './Components/Visitor'
// import Counsellor from './Components/Counsellor'
import Home from './Components/Home'
import ContactForm from './Components/ContactForm'
import FetchRegistrations from './Components/FetchRegistrations';
import AboutUs from './Components/AboutUs';
import Success from './Components/Success';
import Deposit from './Components/Deposit';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';

function App()
{
  return <React.Fragment>
    <Header>
      <Header/>
    </Header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/Dashboard" element={<Dashboard/>}exact/>
        <Route path="/SignUp" element={<SignUp/>}exact/>
        <Route path="/SignIn" element={<SignIn/>}exact/>
        <Route path="/Deposit" element={<Deposit/>}exact/>
        <Route path="/ContactForm" element={<ContactForm/>}exact/>
        <Route path="/FetchRegistrations" element={<FetchRegistrations/>}exact/>
        <Route path="/AboutUs" element={<AboutUs/>}exact/>
        <Route path="/Success" element={<Success/>}exact/>
        <Route path="/Profile" element={<Profile/>}exact/>
        <Route path="/SignIn" element={<SignIn/>}exact/>

      </Routes>
    </main>
  </React.Fragment>
}

export default App;