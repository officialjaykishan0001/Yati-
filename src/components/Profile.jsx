import React from 'react'

const Profile = () => {
  return (
    <div className='max-h-[80vh]'>
      <div className="">
        <img src="/banner.png" alt="banner" />
        <div><img className=" absolute top-[15%] w-[80px] rounded-full left-[40%]" src="/profile-pic.png" alt="" /></div>
      </div>
      <div className="">
        <div className='flex justify-center items-center relative'>
          <span className='font-bold flex justify-center mt-12'>Hart Joshua</span>
          <svg className='absolute left-[63%] top-[63%]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} >
            <path d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 20H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

        </div>
        <span className='flex justify-center flex-col items-center'> <span>bio goes here.. a succinct hint.</span><span> about yourself in 2 lines</span></span>
      </div>
      <div className="flex flex-col justify-center px-8 py-7">
        <div className="bg-gray-100 py-2 px-3 rounded-xl font-medium mt-2">Phone:</div>
        <div className="bg-gray-100 py-2 px-3 rounded-xl font-medium mt-2">Email: </div>
        <div className="bg-gray-100 py-2 px-3 rounded-xl font-medium mt-2">Address:</div>
        <div className="bg-gray-100 py-2 px-3 rounded-xl font-medium mt-2">Notes</div>
      </div>
    </div>
  )
}

export default Profile