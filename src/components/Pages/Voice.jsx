import React from 'react'

const Voice = () => {
  

  return (
    <form onSubmit={(e)=>e.preventDefault()} >
        <h1>Voice Verification</h1>
        <p>we call you with a automated message contains your verification code</p>
        <input type='text' placeholder='enter the code'></input>
        <br></br>
        <br></br>
        <button> touch to get your code</button>
    </form>
  )
}

export default Voice