import React from 'react';
import SignUp from './SignUp';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import ApplyForm from './ApplyForm';
import Sucess from './Sucess';
import Navbar from './Navbar';
function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/applyform' element={<ApplyForm />} />
        <Route path='/succesfull' element={<Sucess />} />
      </Routes>
    </>

  );


}

export default App;
