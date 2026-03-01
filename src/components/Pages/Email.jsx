import React, { useState} from 'react'
import axios from 'axios'

const Email = () => {

  const [Email,SetEmail] = useState("")


  const Gmailrequest = async () => {
    try { 

        const response = await axios.post( "http://127.0.0.1:8000/Gmail/EmailSend", 
        { email: Email }, { headers: { "Content-Type": "application/json" } } )
        console.log(response.data)
    }
    catch(err){
       console.log(err)
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
                 <input type='text' value={Email} onChange={(e)=>SetEmail(e.target.value)} placeholder='name***@gamil.com'></input>
                 <br></br>
                 <br></br>
                 <button onClick={Gmailrequest}>Send Code</button>
               </form>
               <br></br>
               <br></br>
               <p>verify the gamil</p>
               <form onSubmit={(e)=>e.preventDefault()}>
                   <input type='text' placeholder='enter your verifying gamil'></input>
                   <br></br>
                   <br></br>
                   <input  type='text' placeholder='enter the code'></input>
                   <br></br>
                   <br></br>
                   <button>verify</button>
               </form>
          </div>
       </div> 
  )
}

export default Email
