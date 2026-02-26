import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Email from '../Pages/Email'
import Info from '../Pages/Info'
import Sms from '../Pages/Sms'

const Path = () => {
  return (
   <Routes> 
    <Route path="/Sms/:name" element={<Sms />} /> 
    <Route path="/" element={<Info />} /> 
   </Routes>
  )
}

export default Path