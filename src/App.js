import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Login from './pages/Login'
import SignUp from "./pages/SignUp"
import SuccessfulSignIn from './pages/successfulsignin'
import SuccessfulSignUp from './pages/successfulsignup'

export default function App () {
  const [isAuth, setIsAuth] = React.useState(false);
  return(
    <Router>
      <Routes>
        <Route path = "/" element = {<Login setIsAuth = {setIsAuth}/>} />
        <Route path = "/signup" element = {<SignUp />} />
        <Route path = "/successfulsignin" element = {<SuccessfulSignIn />} />
        <Route path = "/successfulsignup" element = {<SuccessfulSignUp />} />
     </Routes>
    </Router>
  )
}