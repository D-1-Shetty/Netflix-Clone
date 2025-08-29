import React, { useState } from 'react'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState,setSignState]=useState('Sign In')

  return (
    <div className='h-[100vh]  bg-[linear-gradient(#0000007e,#0000007e),url(/background_banner.jpg)] py-5 px-[8%]'>
      <img src={logo} alt="" className='w-[150px]' />
      <div className='w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded-sm p-16 m-auto'>
        <h1 className='text-3xl font-medium mb-7'>{signState}</h1>
        <form className=' '>
          {signState==="Sign Up"?<input type="text" placeholder='Your name' className='bg-[#333]  text-white w-full my-3 mx-0 border-0 outline-0 rounded-sm py-4 px-5 text-base font-medium placeholder:text-base placeholder:font-medium'/>:<></>}
          <input type="email" placeholder='Email' className='bg-[#333]  text-white w-full my-3 mx-0 border-0 outline-0 rounded-sm py-4 px-5 text-base font-medium placeholder:text-base placeholder:font-medium' />
          <input type="password" placeholder='Password' className='bg-[#333]  text-white w-full my-3 mx-0 border-0 outline-0 rounded-sm py-4 px-5 text-base font-medium placeholder:text-base placeholder:font-medium' />
          <button className='bg-[#e50914] mx-1 text-white rounded-sm text-base font-medium mt-5 cursor-pointer w-full border-0 outline-0 p-4'>{signState}</button>
          <div className='flex justify-between text-[#b3b3b3] text-[13px] mt-3.5'>
            <div className='gap-1.5 flex'>
              <input type="checkbox" className='w-[18px] h-[18px]' />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className='mt-10 text-[#737373]'>
          {signState==="Sign In"?<p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}className='ml-1.5 text-[#fff] font-medium cursor-pointer'>Sign Up Now</span></p>:<p>Already have account? <span onClick={()=>{setSignState('Sign In')}}className='ml-1.5 text-[#fff] font-medium cursor-pointer'>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
