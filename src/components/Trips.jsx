import React, { useState } from 'react'

const Trips = () => {
  const [category, setCategory] = useState('Completed');

  const handleClick = (e)   => {
    setCategory(e.target.innerHTML)
  }
  return (
    <div className=' min-h-[80vh]'>
      <div className='flex justify-between items-center p-3 px-5'>
        <span onClick={handleClick} className={ ` ${ category === 'Completed' ? 'bg-gray-800 text-white' : ' bg-gray-100'}  py-2 px-3 w-[100px] flex justify-center rounded-[10px] bg-gray-100 font-medium `} >Completed</span>
        <span onClick={handleClick} className={`${ category === 'Running' ? 'bg-gray-800 text-white' : 'bg-gray-100'}  py-2 px-3 w-[100px] flex justify-center rounded-[10px]  font-medium`}>Running</span>
        <span onClick={handleClick} className={` ${ category === 'Cancelled' ? 'bg-gray-800 text-white' : 'bg-gray-100'} py-2 px-3 w-[100px] flex justify-center rounded-[10px]  font-medium`}>Cancelled</span>
      </div>
      <div className=' max-h-[73vh] overflow-y-auto '>
        <div className=" flex justify-between min-h-[160px] rounded-[16px] p-5  bg-gray-100 m-3">
          <div className="flex flex-col justify-between ">
            <div className='flex gap-1'>
              <div className="pt-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none">
                  <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12.8638 7.72209L13.7437 9.49644C13.8637 9.74344 14.1837 9.98035 14.4536 10.0257L16.0485 10.2929C17.0684 10.4643 17.3083 11.2103 16.5734 11.9462L15.3335 13.1964C15.1236 13.4081 15.0086 13.8164 15.0736 14.1087L15.4285 15.6562C15.7085 16.8812 15.0636 17.355 13.9887 16.7148L12.4939 15.8226C12.2239 15.6613 11.7789 15.6613 11.504 15.8226L10.0091 16.7148C8.93925 17.355 8.28932 16.8761 8.56929 15.6562L8.92425 14.1087C8.98925 13.8164 8.87426 13.4081 8.66428 13.1964L7.42442 11.9462C6.6945 11.2103 6.92947 10.4643 7.94936 10.2929L9.54419 10.0257C9.80916 9.98035 10.1291 9.74344 10.2491 9.49644L11.129 7.72209C11.609 6.7593 12.3889 6.7593 12.8638 7.72209Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="">
                <div className="font-light">April 15, 10:00am</div>
                <div className="font-bold">Lkotun round about</div>
              </div>
            </div>
            <div className='flex gap-1'>
              <div className="pt-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none">
                  <path d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8.5 11.8333C8.5 11.8333 9.41602 11.8333 10.291 13.5C10.291 13.5 13.0294 9.33333 15.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="">
                <div className="font-light">Arpil 15; 11:30am</div>
                <div className="font-bold">Lekki, Ajah way</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="">
              <div className="font-light">Travel Time</div>
              <div className="font-bold">1hr:30mins</div>
            </div>
            <div className="">
              <div className="font-light">Travel Cost</div>
              <div className="font-bold">$1800.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trips

/*    min-height: 160px;
    border-radius: 17px;
    padding: 20px;
}
}
*/