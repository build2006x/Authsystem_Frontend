import React from 'react'

const EmailVerify = () => {
  return (
    <div>
      <h1>check yor email</h1>
      <p>we sent a code to @gmail.com</p>
      <input type='number' placeholder='enter the code'></input>
      <br></br>
      <br></br>
      <button>resend code</button>
    </div>
  )
}

export default EmailVerify