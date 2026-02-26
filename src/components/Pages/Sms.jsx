import React, {useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Sms = () => {
  
  const [password, setPassword] = useState('')
  const {name} = useParams()
  // const [response, setResponse] = useState(null)

  // Method 1: Send Code (POST request)
  
  const sendCode = async () => {
    try {
      await axios.post(`http://127.0.0.1:8000/send_otp?PhoneNumber=${Number(password)}`
      ,{Username:name})

      setPassword('')
      console.log('code sent sucessfully')
    } catch (error) {
      console.error('Error sending code:', error.response?.data || error.message)
    }
  }

  // // Method 2: Get Code (GET request)
  // const getCode = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:5000/api/getCode?phone=${password}`)
  //     setResponse(res.data)
  //     console.log('Code received:', res.data)
  //   } catch (error) {
  //     console.error('Error fetching code:', error)
  //   }
  // }

  return (
    <div className='Phone_number'>
      <div className='main'>
        <div className='phoneBox'>
          <h1 style={{textWrap:'nowrap'}}>Enter your phone +91..</h1>
          <p>We'll send you a verification code via SMS</p>
        </div>
        <br />
        <div className='inputs'>
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter the phone number"
          />
          <br />
          <button onClick={sendCode}>Send Code</button>
        </div>
      </div>
    </div>
  )
}

export default Sms

