
import {useState , useEffect} from 'react'

const Schedule = () => {
 
  const dateTime=()=>{
    var shawDate=new Date()
    const DisplayToday= shawDate.getDate()+`/`+ shawDate.getMonth()+1
     +`/`+ shawDate.getFullYear()+`  `+  shawDate.getHours()+`:`+ shawDate.getMinutes() 
    return DisplayToday
  }
   
const [matches , SetMatches]= useState([])


  useEffect(()=>{
 fetchapi()
  },[])

  const fetchapi = async ()=>{
    const res= await fetch(`http://localhost:3001/matchSchedule`)
    const data = await res.json()
    
    SetMatches(data)
  }

  
  return (
    <div >
       
       <h1 className=' text-[24px] mt-[60px] font-open text-center font-bold mb-[24px]'>League Schedule</h1>
       <div className='    '>
      {/* {matches.map((item)=>(
        <Matches key={item.id} item={item}/>

        
      ))} */}

    <table className=' w-[90%]  border-1 border-[#E4EDF2] mx-12 bg-[#E4EDF2] '>

<thead  className=' h-[40px] ml-0 text-start text-[12px] bg-[#E4EDF2] '>
  <tr className=''>
    
    <th className='text-start'>Date/Time</th>
    <th className='text-start' >Stadium</th>
    <th className='text-start' >Home Team</th>
    <th></th>
    <th className='text-start' >Away Team</th>
  </tr>
</thead>
<tbody className=' even:bg-[#F6F7F7] h-[70px] bg-white '>
{matches.map((val) => {
return (
  
<tr key={val} >
<td>{dateTime()}</td>
<td >{val.stadium} </td>
<td>{val.homeTeam } </td>
<td>{val.homeTeamScore}:{val.awayTeamScore}</td>
<td>{val.awayTeam}</td>
</tr>
)
})}

</tbody>
</table>
      </div>
    </div>
  )
}

export default Schedule
