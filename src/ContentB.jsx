import React from 'react'
import Navigator from './Navigator'
import './ContentB.css'


const ContentB = () => {
  return (
    <main className='container'>
      <Navigator/>

      <div className="card">
        <h1> Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
   
        <div className="plans">
        <button>
            <img src="/public/assets/images/icon-arcade.svg" alt="icon-arcade" />
           <div className="desc">
           <p  className='label'>Arcade</p>
            <p>$9/mo</p>
           </div>
        </button>

        <button>
            <img src="/public/assets/images/icon-advanced.svg" alt="icon-advanced" />
           <div className="desc">
           <p className='label'>Advanced</p>
            <p>$12/mo</p>
           </div>
        </button>

        <button>
            <img src="/public/assets/images/icon-pro.svg" alt="icon-pro" />
          <div className="desc">
          <p  className='label'>Pro</p>
            <p>$15/mo</p>
          </div>
        </button>
        </div>

      <div className='time'>
      <label htmlFor="year">
            Monthly
            <input type="range" />
            Yearly
        </label>
      </div>
      </div>
    </main>
  )
}

export default ContentB
