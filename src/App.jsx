import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Header from "./components/Header";
export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Profile" element = {<Profile/>}/>
    <Route path="/Sign-out" element = {<Signup/>}/>
    <Route path="/Sign-in" element = {<Signin/>}/>
  </Routes>

  </BrowserRouter>
}
