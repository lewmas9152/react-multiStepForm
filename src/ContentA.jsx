import React from 'react'
import Navigator from './Navigator'
import './ContentA.css'

const ContentA = () => {
  return (
    <main className='container'>
 
       <Navigator/>
        <div className="card">
            <h1>Personal info</h1>
            <p>Please provide your name,email address,and phone number</p>
        <div className="entry">

       <div className="entry_element">
       <label htmlFor="Name" className='label'>Name</label>
            <input type="text"  placeholder='e.g. Stephen King' id="Name"/>
       </div>

           <div className="entry_element">
           <label htmlFor="email" className='label'>Email Address</label>
            <input type="text"  placeholder='e.g. Stephenking@lorem.com' id="email"/>
           </div>

           <div className="entry_element">
           <label htmlFor="pnone" className='label'>Phone Number</label>
            <input type="tel"  placeholder='e.g. +1234567890' id="phone"/>
           </div>
        </div>
       
      
        </div>
        
       
    </main>
  )
}

export default ContentA
