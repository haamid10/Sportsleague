
 const dateTime=()=>{
  var shawDate=new Date()
  const DisplayToday= shawDate.getDate()+`/`+ shawDate.getMonth()+1
   +`/`+ shawDate.getFullYear()+`  `+  shawDate.getHours()+`:`+ shawDate.getMinutes() 
  return DisplayToday
}
console.log(dateTime)


const LeagueSchedulle =[
  
    {
      matchDate:  dateTime(),
       stadium: 'Maracana',
       homeTeam: 'Brazil ',

       awayTeam: 'Serbia',
      matchPlayed: true,
    homeTeamScore: 2,
    awayTeamScore: 0
           },
           {
            matchDate:  dateTime(),
             stadium: 'Maracana',
             homeTeam: 'Brazil ',
             awayTeam: 'Serbia',
            matchPlayed: true,
          homeTeamScore: 1 ,
          awayTeamScore: 1
                 }
      
]

export default LeagueSchedulle
