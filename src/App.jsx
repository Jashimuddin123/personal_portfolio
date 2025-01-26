
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home'
import Layout from './Layout/Layout'
// import About from './Components/About'

function App() {


  return (
    <Routes>
    <Route index element={<Layout />} />
    <Route path="/" element={<Home />} />
    {/* <Route path="about" element={<About />} /> */}
  
 
  </Routes>
  
  )
}

export default App
