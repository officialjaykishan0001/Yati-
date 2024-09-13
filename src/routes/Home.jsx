import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import Trips from '../components/Trips'
import Profile from '../components/Profile'
import Menu from '../components/Menu'

const Home = () => {
  const [footerOptionClick,setFooterOptionClick] = useState('Home');
  const [menuButtonClick, setMenuButtonClick] = useState(false);
  return (
      <div>
        { menuButtonClick ? <Menu setMenuButtonClick={setMenuButtonClick} menuButtonClick={menuButtonClick}/> : ' ' }
        <Navbar  setMenuButtonClick={setMenuButtonClick} menuButtonClick={menuButtonClick} />
        <div className="min-h-[80vh] rounded-bl-[20px] rounded-br-[20px]">
          { footerOptionClick === 'Home' ?  <Map/> : footerOptionClick === 'Trips' ? <Trips /> : footerOptionClick === 'Profile' ? <Profile/> : <Map/>  }
        </div>
        <Footer setFooterOptionClick={setFooterOptionClick}/>
    </div>
  )
}

export default Home
