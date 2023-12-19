import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Login from './pages/Login'
import SignUp from "./pages/SignUp"

export default function App () {
  const [isAuth, setIsAuth] = React.useState(false);
  return(
    <Router>
      <Routes>
        <Route path = "/" element = {<Login setIsAuth = {setIsAuth}/>} />
        <Route path = "/signup" element = {<SignUp />} />
     </Routes>
    </Router>
  )
}