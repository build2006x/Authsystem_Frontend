import React, {  useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../../api/config'

const Email = () => {

  const [email,setEmail] = useState("")
  const [emailCode,setEmailCode] = useState("")
  const [VerifyEmail,setVerifyEmail] = useState("")
  const [VerifyCode,SetVerifyCode] = useState("")
  const next = useNavigate()

  const Gmailrequest = async () => {
    try { 

        const response = await axios.post(`${API_BASE_URL}/Gmail/EmailSend`, 
        { email: email }, { headers: { "Content-Type": "application/json" } } )
        SetCode(response.data["code_sent"])
        console.log(response.data["status"])
        console.log(response.data["code_sent"])
    }
    catch(err){
       console.log(err)
    }
  }
 
  const VerifyAuth = () => {
      if(VerifyEmail === email && VerifyCode === Code){
        alert("Email verified successfully")
      }
      else{
        next('/VoiceRoute')
      }
  } 

  return (
     <div className='Phone_number'>
          <div className='main'>
               <div className='phoneBox'>
                  {/* <img src={myimage} width={'50px'}/> */}
                  <h1>Enter your Email</h1>
                  <p>We'll send you a verification code via Email</p>
               </div>
               <br></br>
               <form onSubmit={(e)=>e.preventDefault()} >
                 <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='name***@gamil.com'></input>
                 <br></br>
                 <br></br>
                 <button onClick={Gmailrequest}>Send Code</button>
               </form>
               <br></br>
               <br></br>
               <p>verify the gamil</p>
               <form onSubmit={(e)=>e.preventDefault()}>
                   <input type='text' value={VerifyEmail} onChange={(e)=>setVerifyEmail(e.target.value)}  placeholder='enter your verifying gamil'></input>
                   <br></br>
                   <br></br>
                   <input  type='text' value={VerifyCode} onChange={(e)=>SetVerifyCode(e.target.value)} placeholder='enter the code'></input>
                   <br></br>
                   <br></br>
                   <button onClick={VerifyAuth}>verify</button>
               </form>
          </div>
       </div> 
  )
}

export default Email
