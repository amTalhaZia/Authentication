import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './Compoents/signup/Signup'
import Sign from './Compoents/signin/Sign'
import Home from './Home'
import Logout from './Compoents/signout/Logout'
import { useAuth } from './store/auth'

const App = () => {

  const {user} = useAuth()
  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <Home/> :<Sign/> } />
        <Route path="/signin" element={<Sign/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Logout" element={<Logout/>} />
      </Routes>
    </div>
  )
}

export default App