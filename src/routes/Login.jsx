import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-route flex flex-col justify-center items-center gap-12 h-[100vh] w-full bg-[#333]'>
      <div className=" flex justify-center items-center text-[65px] text-white font-extrabold">Yati</div>
      <div className="form h-1/2 flex justify-end items-center">
        <div className='bg-gray-100 w-[80vw] py-12 px-5 rounded-3xl'>
          <form action="" className='flex flex-col'>
            <input type="email" placeholder='Email' className='bg-gray-100 outline-black border border-gray-600 rounded-2xl mt-2 mx-0 py-3 px-[2px] pl-7 ' />
            <input type="password" placeholder='Password' className='bg-gray-100 outline-black border border-gray-600 rounded-2xl mt-2 mx-0 py-3 px-[2px] pl-7 ' />
            <input type="password" placeholder='Confirm Password' className='bg-gray-100 outline-black border border-gray-600 rounded-2xl mt-2 mx-0 py-3 px-[2px] pl-7 ' />
            <button className='border border-black rounded-[20px] my-3 mx-0 p-[10px] cursor-pointer font-bold bg-gray-200'>Log in</button>
            <p className='flex justify-center items-center font-semibold text-sm'>Don't have an accound yet? <Link to={`/signup`} ><span>&nbsp; Signup</span></Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

/*
 
    margin: 8px 0px;
    padding: 4px;
    border-radius: 12px;


*/