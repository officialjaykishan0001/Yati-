import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home')  
  }
  return (
    <div>
        <div className='login-route flex flex-col justify-center items-center gap-12 h-[100vh] w-full bg-[#333]'>
      <div className=" flex justify-center items-center text-[65px] text-white font-extrabold">Yati</div>
      <div className="form h-1/2 flex justify-end items-center">
        <div className='bg-gray-100 w-[80vw] py-12 px-5 rounded-3xl'>
          <div className='flex justify-center items-center gap-1 first-line: bg-violet-950 text-white my-2 mx-0 p-1 rounded-xl'>
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40px" height="40px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>

            </div>
            <div className="font-semibold">
              Continue with google
            </div>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <div className='min-h-[1px]  bg-gray-500 min-w-[25vw]'></div>
            <div className='text-gray-500'> Or</div>
            <div className='min-h-[1px]  bg-gray-500 min-w-[25vw]'></div>

          </div>
          <form action="" className='flex flex-col'>
            <input type="email" placeholder='Email' className='bg-gray-100 outline-black border border-gray-600 rounded-2xl mt-2 mx-0 py-3 px-[2px] pl-7 ' />
            <input type="password" placeholder='Password' className='bg-gray-100 outline-black border border-gray-600 rounded-2xl mt-2 mx-0 py-3 px-[2px] pl-7 ' />
            <input type="password" placeholder='Confirm Password' className='bg-gray-100 outline-black border border-gray-600 rounded-2xl mt-2 mx-0 py-3 px-[2px] pl-7 ' />
            <button onClick={handleClick} className='border border-black rounded-[20px] my-3 mx-0 p-[10px] cursor-pointer font-bold bg-gray-200'>Sign up</button>
            <p className='flex justify-center items-center font-semibold text-sm'>Already have an accound? <Link to={`/login`} ><span>&nbsp; Log In</span></Link></p>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup
