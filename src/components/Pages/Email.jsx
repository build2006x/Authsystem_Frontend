import React from 'react'

const Email = () => {

  return (
     <div className='Phone_number'>
          <div className='main'>
               <div className='phoneBox'>
                 {/* <img src={myimage} width={'50px'}/> */}
                 <h1>Enter your Email</h1>
                 <p>We'll send you a verification code via Email</p>
              </div>
              <br></br>
               <div className='inputs'>
                 <input type='text' placeholder='name***@gamil.com'></input>
                 <br></br>
                 <button>Send Code</button>
               </div>
          </div>
       </div> 
  )
}

export default Email
