import React from 'react'
import Logo from "../Images/logo.svg"
import Sc from "../Images/schedule.png"
import Le from "../Images/leaderboard.png"
import Link from 'antd/es/typography/Link'

const Header = () => {
  return (
    <div>
       <div className="header h-[60px] bg-[#025FEB] flex  justify-between p-2 items-center">
        <img className="ml-[40px] w-[110px]" src={Logo} alt="the logo" />
       <div className=" flex  text-white text-[12px] items-center mr-[40px]"> 
       <img  className=" h-[25px] " src={Sc} width="30" alt="the logo" />
       <h3 className="mr-[40px]">Schedula</h3>
       <img className=" h-[25px]"  src={Le} width="30" alt="the logo" />
       
       <h3>Leaderboard</h3>
       </div>
     
       
      </div>

    </div>
  )
}

export default Header
