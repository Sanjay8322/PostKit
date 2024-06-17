import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <>
      <div className='w-full pr-10 pl-10'>
      <Routes>    
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App



//4a55ff - Blue
//4ae3c5 - Greenish


//CBF2EB - light green