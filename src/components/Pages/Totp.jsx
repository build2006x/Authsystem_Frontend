import React from 'react'

const Totp = () => {
  return (
    <div className='Totp_auth'>
        <h1>step to get authenticated</h1>
        <br></br>
        <p>1.Install an Authenticator App</p>
        <p>2.Connect Your Account</p>
        <p>3.Use the Code to Log In</p>
        <br></br>
        <div>
            <p>scan this qr to get authenticate</p>
        </div>
        <br></br>
        <div className='Verify_division'>
              <input placeholder='enter the password'/>
              <br></br>
              <br></br>
              <button>Enter</button>
        </div>
    </div>
  )
}

export default Totp