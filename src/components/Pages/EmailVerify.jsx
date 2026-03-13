import React, { useState } from 'react'
import Email from './Email'


const EmailVerify = () => {
  
  const [emailCode,setEmailCode]  = useState()

  return (
    <form onSubmit={(e)=>e.preventDefault()} >
        <input type='text' onChange={(e)=>setEmailCode(e.target.value)} placeholder='name***@gamil.com'></input>
        <br></br>
        <button>Send Code</button>
  </form>
  )
}

export default EmailVerify