import React from 'react'

const Navbar = ({setMenuButtonClick, menuButtonClick}) => {

    const handleClick = () => {
        setMenuButtonClick(!menuButtonClick);
    }

    return (
        <div>
            <div className='flex justify-between items-center px-1 py-[2px]'>
                <div className="">
                    <svg className="font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className=" text-[30px] font-bold"> Yati </div>
                <div className="">
                    <img onClick={handleClick} width="30" height="30" src="https://img.icons8.com/glyph-neue/50/connection-status-off.png" alt="connection-status-off" />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Navbar
