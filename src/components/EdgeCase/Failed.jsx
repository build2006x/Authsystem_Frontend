import React from 'react'
import '../index.css'

const Failed = () => {
  return (
     <div className='failed' style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'red' }}>Authentication Failed</h1>
      <br></br>
      <p style={{ fontSize: '1.2rem', color: '#ffffff' }}>
        Sorry, we couldn't verify your credentials. Please try again.
      </p>
      <br></br>
      <button 
        onClick={() => window.location.href = '/login'} 
        style={{ padding: '0.5rem 1rem', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
       get next way to get authenticated 
      </button>
    </div>
  )
}

export default Failed