import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Info = () => {

  const navigate = useNavigate()
  const [name,setname] =  useState('')

  const moving = () => {
    if (name === ''){
      alert('please enter your name')
    }
    else{   setname(name)
            navigate(`/Sms/${name}`)
        ;}

  }

  return (
    <div>
      <h1>Enter your name to get started</h1>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter your name" />
      <br />
      <button onClick={moving}>Get Started</button>
    </div>
  )
}

export default Info
