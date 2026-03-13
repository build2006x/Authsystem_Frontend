import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../../api/config'

const Voice = () => {

  const [CurrentCode,SetCode] = useState("")
  const [VerifyCode,SetVerifyCode] = useState("")
  const Totpmove = useNavigate()

  const VoiceRequest = async () =>{
      const res = await axios.get(`${API_BASE_URL}/tts/speak`)
      SetCode(res.data["code_sent"]);
      console.log(res.data["code_sent"])
  }

  const Verify = () =>{
    if(Number(CurrentCode) === Number(VerifyCode)){
      alert('Sucessfully verified')
    }
    else{
        Totpmove('/totp')
    }
  }

  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()} >
            <h1>Voice Verification</h1>
            <p>we call you with a automated message contains your verification code</p>
            <input type='text' value={VerifyCode} onChange={(e)=>SetVerifyCode(e.target.value)} placeholder='enter the code'></input>
            <br></br>
            <br></br>
            <button onClick={VoiceRequest}>touch to get your code</button>
            <br></br>
            <br></br>
            <button onClick={Verify}>Verify the code</button>
        </form>
    </div>
  )
}

export default Voice