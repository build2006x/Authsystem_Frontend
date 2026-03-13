import React, { useState } from 'react'
import Email from './Email'


const EmailVerify = () => {
  
  const [EamilCode,SetEmailCode]  = useState()

  return (
    <form onSubmit={(e)=>e.preventDefault()} >
        <input type='text' onChange={(e)=>SetEmailCode(e.target.value)} placeholder='name***@gamil.com'></input>
        <br></br>
        <button>Send Code</button>
  </form>
  )
}

export default EmailVerify