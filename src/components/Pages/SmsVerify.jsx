import React, {useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const VerifyPhone = () => {
 
    const [PhoneNumber, SetPhoneNumber] = useState('')
    const [Code, SetCode] = useState('')
    const nav = useNavigate()
  
    // Method 2: Get Code (GET request)
    const getCode = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/verify_otp?phone=${PhoneNumber}&code=${Code}`)
       if (res.data['status'] === 'Sucess') {
              alert('Phone number verified successfully!')
          }
        else{
          nav('/email')
        }
      }
      catch (err) {
        console.log(err)
        nav('/email')

      }
    }

    return (
      <div className='Phone_Verify'>
            <div className='Main_Verify'>
                    <h1>Enter Sms code</h1>
                    <p>We'll send a 6-digit code to</p>
                    <p>91+.....</p>
                <br></br>
                  <form onSubmit={(e)=>e.preventDefault()}>
                    <input type='text' value={PhoneNumber} onChange={(e)=>SetPhoneNumber(e.target.value)} placeholder='enter your phone number'></input>
                    <br></br>
                    <input type='text' value={Code} onChange={(e)=> SetCode(e.target.value)} placeholder='4 digit code'></input>
                    <br></br>
                    <button onClick={getCode}>Enter</button>
                  </form>
                  <p>resend the code</p>
            </div>
        </div> 
    )
}

export default VerifyPhone
