import React from 'react';
import SignUp from './SignUp';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import ApplyForm from './ApplyForm';
import Sucess from './Sucess';
function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/applyform' element={<ApplyForm />} />
        <Route path='/success' element={<Sucess />} />
      </Routes>
    </>

  );


}

export default App;
