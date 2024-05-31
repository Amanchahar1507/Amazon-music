import React from 'react'
import SignupForm from '../Auth/SignupForm';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <div className="flex items-center w-[60%] m-auto justify-between">
              <div className="flex w-[50%] ">
                  <span>Spotify</span>     
              </div>
  
              <div className=''>
                  Already Registered? <Link to="/login"><span className='text-blue-400 font-bold'>Login</span> </Link> Here
              </div>
          </div>
      <SignupForm/>
    </div>
  )
}

export default Signup
