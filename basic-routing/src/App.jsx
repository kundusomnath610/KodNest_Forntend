import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Navbar from "./component/NavBar"
import {Route, Routes} from 'react-router-dom'
export default function App() {
  return(
    <div>
      <Navbar />
      <Routes>

      <Route path="/home" element = {<Home />}></Route>
      <Route path="/home" element = {<About />}></Route>
      <Route path="/home" element = {<Contact />}></Route>

      </Routes>
    </div>
  )
}