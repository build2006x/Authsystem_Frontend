import { useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../../api/config'

const Sms = () => {
   
  const [PhoneNumber, SetPhoneNumber] = useState('')

  const navigate = useNavigate()
   
  // const [response, setResponse] = useState(null)
  // Method 1: Send Code (POST request)
  
  const sendCode = async () => {
    try {
      await axios.post(`${API_BASE_URL}/OtpSend?PhoneNumber=${Number(PhoneNumber)}`)
      SetPhoneNumber("")
      navigate('/SmsVerify')
    } 
    catch (error) {
      console.error('Error sending code:', error.response?.data || error.message)
    }
  }


  return (
    <div className='Phone_number'>
        <div className='phoneBox'>
          <h1 style={{textWrap:'nowrap'}}>Enter your phone +91..</h1>
          <p>We'll send you a verification code via SMS</p>
        </div>
        <br />
        <form onSubmit={(e) => e.preventDefault()}>
        <input value={PhoneNumber} onChange={(e) => SetPhoneNumber(e.target.value)} 
            placeholder="Enter the phone number"/>
          <br />
          <button onClick={sendCode}>Send Code</button>
        </form>
    </div>
  )
}

export default Sms

