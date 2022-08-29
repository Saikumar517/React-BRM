import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home';
import Login from './components/Login/Login'
import SignUp from './components/Signup/SignUp';
import PageNotFound from './components/PageNotFound/PageNotFound';
import BenchList from './components/BenchList/BenchList';
const App = () => {
  return (
    <Router>
      <Routes>
       <Route path='/'  element={ <Home /> } />
       <Route path='/Login'  element={  <Login /> } />
       <Route path='/SignUp'  element={  <SignUp /> } />
       <Route path = '/BenchList'  element={ <BenchList/> } /> 
       <Route path='*' element={ <PageNotFound /> } />
      </Routes>
    </Router>
  )
}

export default App