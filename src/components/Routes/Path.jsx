import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Sms from '../Pages/Sms'
import SmsVerify from '../Pages/SmsVerify'
import Email from '../Pages/Email'
import EmailVerify from '../Pages/EmailVerify'
import Voice from '../Pages/Voice'

const Path = () => {
  return (
   <Routes> 
    <Route path="/" element={<Sms />} /> 
    <Route path="/SmsVerify" element={<SmsVerify />} />
    <Route path='/email' element={<Email />}/>
    <Route path='/EmailVerify' element={<EmailVerify />}/>
    <Route path='/VoiceRoute' element={<Voice />}/>
   </Routes>
  )
}


export default Path