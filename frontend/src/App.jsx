import HomePage from "./pages/HomePage/HomePage"
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
import {BrowserRouter, Routes,Route } from "react-router-dom"
import Register from "./pages/Register/Register"
 

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/register'} element={<Register/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App
