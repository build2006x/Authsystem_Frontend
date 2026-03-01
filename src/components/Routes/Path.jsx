import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Sms from '../Pages/Sms'
import SmsVerify from '../Pages/SmsVerify'
import Email from '../Pages/Email'

const Path = () => {
  return (
   <Routes> 
    <Route path="/" element={<Sms />} /> 
    <Route path="/SmsVerify" element={<SmsVerify />} />
    <Route path='/email' element={<Email />}/>
   </Routes>
  )
}


export default Path