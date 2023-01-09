

import Schedule from "./components/Schedule";
import LeaderBoard from "./LeaderBoard";
import Header from "./components/Header";
import F404 from './components/Pages/F404';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Footer from "./components/Pages/Footer";
// import SCC from "https://countryflagsapi.com/png/bo"



function App() {

 

  return (
   <>
    <Header/>
    
    <div className="h-fit">
    <Routes>
    <Route path='/'  element={<Schedule/>}/>

      <Route path='/leaderboard' element={<LeaderBoard />}/>
      <Route exact path="/*" element={<F404 />} />  
    </Routes>
    </div>
    <Footer/> 
    </>
    
  );
}

export default App;


// 079486d9f019e7a8044df52dc5fbf5b1be13fcbc