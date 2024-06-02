// IN THIS WE MAKING A SIGNUP PAGE AND PUT ALREADY MADE SIGNUP FORM IN THIS PAGE.........
import React from 'react'
import SignupForm from '../Auth/SignupForm';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div >
      <div className="flex items-center w-[60%] m-auto justify-between">
              <div className="flex w-[50%] ">
                  <span>Amazon Music</span>     
              </div>
  
              <div className=''>
                  Already Registered? <Link to="/login"><span className='text-blue-400 font-bold'>Login</span> </Link> Here
              </div>
          </div>
      <div className="ml-40 mr-24 mt-10">
      <SignupForm/>
      </div>
    </div>
  )
}

export default Signup
