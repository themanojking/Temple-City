import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Navbar />}></Route>
       </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
