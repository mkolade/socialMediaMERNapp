import HomePage from "./pages/HomePage/HomePage"
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
import {BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Register from "./pages/Register/Register"
 

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/register'} element={<Register/>}/>
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
