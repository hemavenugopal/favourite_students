import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentsList from './components/StudentsList'
import FavouriteStudents from './components/FavouriteStudents'
import ArrContextProvider from './components/ArrContextProvider'


function App() {
  

  return (
    <>
    <ArrContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<StudentsList />}/>
      <Route path='/favourite' element={<FavouriteStudents />}/>

      
    </Routes>
    </BrowserRouter>
    </ArrContextProvider>

   
    </>
  )
}

export default App
