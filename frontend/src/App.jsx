import HomePage from "./pages/HomePage/HomePage"
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
import {BrowserRouter as Router, Routes,Route,Navigate } from "react-router-dom"
import Register from "./pages/Register/Register"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import ProfileDetails from "./pages/Profile/ProfileDetails"
import NotFound from "./components/NotFound"
import FollowPage from "./components/FollowPage"
 

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <div>
        <Routes>
          
          <Route exact path={'/'} element={user ? <HomePage/> : <Login/> }/>
          <Route 
            path={'/profile/:username'} 
            element={<Profile/>}    
          />
          <Route
            path={'/followPage'}
            element={<FollowPage/>}
          />
          <Route 
            path={'/login'} 
            element={user ? <Navigate to={'/followpage'}/> : <Login/>}
          />
          <Route 
            path={'/register'}  
            element={user ? <Navigate to={'/'} replace/> :<Register/>}
          />
          <Route 
            path={'/profileDetails'}  
            element={!user ? <Navigate to={'/'} replace/> :<ProfileDetails/>}
          />

          

          {/* 404 Route */}
          <Route
            path="*"
            element={<NotFound/>}
          />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
