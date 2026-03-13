import React, { useState } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../../api/config';

const Totp = () => {
  const  [Name,SetName] = useState("")
  const [imageSrc, setImageSrc] = useState(null);
  const [password,setpassword] = useState("")

  const TotpRequest = async () =>{
     const res = await axios.post(`${API_BASE_URL}/OfflineVerifcation/register`,
      {username:Name},
      { responseType: "blob" }
     )
     // Convert blob into a temporary object URL
      const imageUrl = URL.createObjectURL(res.data);
      setImageSrc(imageUrl);
  } 

  const VerifyPassword = async (e)  =>{
      e.preventDefault();
      const res = await axios.get(`${API_BASE_URL}/OfflineVerifcation/verify/${Name}?code=${password}`)
      console.log(res.data["message"])
      // if(res.data["message"] == "OTP verified"){
      //   alert("sucessfully verified") 
      // } 
      // else{
      //   alert("you are no verifed")
      // }
  }

  return (
    <div className='Totp_auth'>
        <h1>step to get authenticated</h1>
        <br></br>
        <p>1.Install an Authenticator App</p>
        <p>2.scan the qr shown here</p>
        <p>3.Use the Code to Log In</p>
        <br></br>
        <div> 
            <img src={imageSrc} width="150px" ></img>
            <p>scan this qr to get authenticate</p>
             <input value={Name} onChange={(e)=>SetName(e.target.value)} placeholder='enter the name'/>
             <br></br>
             <br></br>
            <button onClick={TotpRequest}>get the qr code</button>
        </div>
        <br></br>
        <form onChange={(e)=> e.preventDefault()}>
              <input value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='enter the password'/>
              <br></br>
              <br></br>
              <button onClick={VerifyPassword}> Enter </button>
        </form>
    </div>
  )
}

export default Totp