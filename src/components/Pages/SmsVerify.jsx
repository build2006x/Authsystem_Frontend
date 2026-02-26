import React from 'react'
import '../CssFile/PhoneVerify.css'

const VerifyPhone = () => {
  return (
     <div className='Phone_Verify'>
           <div className='Main_Verify'>
                <div className='phoneBox'>
                  {/* <img src={myimage} width={'50px'}/> */}
                  <h1>Enter Sms code</h1>
                  <p>We'll send a 6-digit code to</p>
                  <p>91+8184824248</p>
               </div>
               <br></br>
                <div className='inputs'>
                  <input type='text' placeholder='4 digit code'></input>
                  <br></br>
                  <button>Enter</button>
                </div>
                <p>resend the code</p>
           </div>
      </div> 
  )
}

export default VerifyPhone
