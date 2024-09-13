import React, { useState } from 'react'

const Footer = ({setFooterOptionClick}) => {
    const [homeToggle, setHomeToggle] = useState(false);
    const [tripsToggle, setTripsToggle] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);
    

    const handleClickHoverEffect = (e) => {
        if(e.target.innerHTML === "Home"){
            setHomeToggle(true);
            setProfileToggle(false);
            setTripsToggle(false);
            setFooterOptionClick('Home')
        }else if(e.target.innerHTML === "Trips"){
            setTripsToggle(true);
            setProfileToggle(false);
            setHomeToggle(false);
            setFooterOptionClick('Trips')
        }else if(e.target.innerHTML === "Profile"){
            setProfileToggle(true);
            setHomeToggle(false);
            setTripsToggle(false)
            setFooterOptionClick('Profile')
        }

    }
    return (
        <div className='fixed bg-red p-3 bottom-0 pb-6 pt-5 min-w-full  flex justify-around px-4 z-40  bg-white '>
            <div className="">
                <div className="rounded-full flex flex-col justify-center items-center w-[72px] h-[55px] shadow-2xl">
                    
                    {/* General home svg */}
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"  width="24" height="24" style={{ enableBackground: 'new 0 0 48 48' }} xmlSpace="preserve">
                        <path style={{ fill: `${homeToggle ? 'black' : 'none'}`, stroke: '#000000', strokeWidth: 3, strokeLinejoin: 'round', strokeMiterlimit: 10 }} d="M8.5,41.5h10
                             c0.552,0,1-0.448,1-1v-10c0-1.105,0.895-2,2-2h5c1.105,0,2,0.895,2,2v10c0,0.552,0.448,1,1,1h10c1.105,0,2-0.895,2-2v-21l-17-14.182L6.5,18.5v21
                             C6.5,40.605,7.395,41.5,8.5,41.5z"/>
                        <path style={{ fill: 'none', stroke: '#000000', strokeWidth: 3, strokeLinejoin: 'round', strokeMiterlimit: 10 }} d="M2.5,23.5l21-18
                             l22,18"/>
                    </svg>
                    <span onClick={handleClickHoverEffect} className={ homeToggle ? 'font-medium' : ''}>Home</span>
                </div>
            </div>
            <div className="">
                <div className="rounded-full flex flex-col justify-center items-center w-[72px] h-[55px] shadow-2xl">
                    {/* Genereal trip svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill={ tripsToggle ? 'black' : 'none'} >
                        <path d="M2.46433 9.34375C2.21579 9.34375 1.98899 9.14229 2.00041 8.87895C2.06733 7.33687 2.25481 6.33298 2.78008 5.53884C3.08228 5.08196 3.45765 4.68459 3.88923 4.36468C5.05575 3.5 6.70139 3.5 9.99266 3.5H14.0074C17.2986 3.5 18.9443 3.5 20.1108 4.36468C20.5424 4.68459 20.9177 5.08196 21.2199 5.53884C21.7452 6.33289 21.9327 7.33665 21.9996 8.87843C22.011 9.14208 21.7839 9.34375 21.5351 9.34375C20.1493 9.34375 19.0259 10.533 19.0259 12C19.0259 13.467 20.1493 14.6562 21.5351 14.6562C21.7839 14.6562 22.011 14.8579 21.9996 15.1216C21.9327 16.6634 21.7452 17.6671 21.2199 18.4612C20.9177 18.918 20.5424 19.3154 20.1108 19.6353C18.9443 20.5 17.2986 20.5 14.0074 20.5H9.99266C6.70139 20.5 5.05575 20.5 3.88923 19.6353C3.45765 19.3154 3.08228 18.918 2.78008 18.4612C2.25481 17.667 2.06733 16.6631 2.00041 15.1211C1.98899 14.8577 2.21579 14.6562 2.46433 14.6562C3.85012 14.6562 4.97352 13.467 4.97352 12C4.97352 10.533 3.85012 9.34375 2.46433 9.34375Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M9 3.5L9 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span onClick={handleClickHoverEffect}  className={ tripsToggle ? 'font-medium' : ''}>Trips</span>
                </div>
            </div>
            <div className="">
                <div className="rounded-full flex flex-col justify-center items-center w-[72px] h-[55px] shadow-2xl">
                    {/* General profile svg  */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill={ profileToggle ? 
                    'black': 'none'}>
                        <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span onClick={handleClickHoverEffect} className={ profileToggle ? 'font-medium' : ''}>Profile</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
