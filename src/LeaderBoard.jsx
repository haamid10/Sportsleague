import React from 'react'
import { useState, useEffect } from 'react'

const LeaderBoard = ({Leader}) => {


const [Leaderboard , SetLeaderBard]= useState([])


useEffect(()=>{
fetchLeadboard()
},[])


const fetchLeadboard = async ()=>{
  const res= await fetch(`http://localhost:3001/Leaderboard`)
  const data = await res.json()
  
  SetLeaderBard(data)
  console.log(data)
}


  return (
    <div >
       
       <h1 className=' text-[24px] mt-12  font-open text-center font-bold mb-[24px]'>League Standing</h1>
       <div className='    '>
      {/* {matches.map((item)=>(
        <Matches key={item.id} item={item}/>

        
      ))} */}

    <table className=' w-[40%] border-1 border-[#E4EDF2] m-12 ml-72 bg-[#E4EDF2] '>

<thead  className=' h-[40px] ml-0 text-start text-[12px] bg-[#E4EDF2] '>
  <tr className='w-32'>
    
    <th className='text-start '>TeamName</th>
    <th className='text-start' >MP</th>
    <th className='text-start' >GF</th>
    <th className='text-start'>GA</th>
    <th className='text-start' >Pionts</th>
  </tr>
</thead>
<tbody className=' even:bg-[#F6F7F7] h-[70px] bg-white '>
{Leaderboard.map((val) => {
return (
  
<tr key={val} >
<td className=' pr-44'>{val.teamName}</td>
<td className=' pr-12'  >{val.matchesPlayed} </td>
<td className=' pr-12'>{val.goalsFor}</td>
<td className=' pr-12'>{val.goalsAgainst}</td>
<td className=' pr-12'>{val.pionts}</td>
</tr>
)
})}

</tbody>
</table>
      </div>
    </div>
    )
}

export default LeaderBoard
