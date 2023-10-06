import React from 'react'
import './App.css'

const Navigator = () => {
  return (
    <div>
             <nav className='nav_elements'>
          <div className='radio'> 
            <input type="radio"  id="1" dataContent="1"/>
           <label htmlFor="1" className='navLabel'>
            <p className='steps'>Step 1</p>
            <p className='desc'>Your info</p>
           </label>
           </div>

       <div className='radio'>
       <input type="radio"  id="2"/>
           <label htmlFor="2" className='navLabel' >
            <p className='steps'>Step 2</p>
            <p className='desc'>Select Plan</p>
           </label>
       </div>

          <div className='radio'>
          <input type="radio"  id="3"  />
           <label htmlFor="3" className='navLabel'>
            <p className='steps'>Step 3</p>
            <p className='desc'>Adds-ons</p>
           </label>
          </div>

         <div className='radio'>
         <input type="radio"  id="4"/>
           <label htmlFor="4" className='navLabel'>
            <p className='steps'>Step 4</p>
            <p className='desc'>Summary</p>
           </label>
         </div>
        </nav>  
  

    </div>
  )
}

export default Navigator
