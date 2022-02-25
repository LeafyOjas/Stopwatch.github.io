import Pause from "./pause";
import Reset from "./reset";
import Start from "./start";
import Lap from "./lap";
import {useState ,useEffect} from 'react'
import './watch.css'
import LapList from "./lapList";
const Watch = () => {
    const [hour, setHour] = useState(0) 
    const [min,setMin]=useState(0)
    const [sec,setSec]=useState(0)
    const [mili,setMili]=useState(0)
    const [flag,setFlag] =useState(1)
    const [lap,setLap] =useState([])

    
    function DoubleDigit(digit)
    {
        digit=parseInt(digit/10)<1?('0'+digit):(digit)
        return digit
    }
    
    
    

        useEffect(() => {
            const it=setTimeout(() => {
                if (flag==2)
                {   // Update seconds
                    let new_sec=(Number(mili)+1)/100
                    if (new_sec==1)
                        {   // Update minute
                            let new_minute=(Number(sec)+new_sec)/60
                            if (new_minute==1)
                                {
                                    // Updating Hour
                                    let new_hour = (Number(min)+new_minute)/60
                                     
                                    if (new_hour==1)
                                        setHour((Number(hour)+new_hour)%60)

                                    setMin((Number(min)+new_minute)%60)
                                }
                            setSec((Number(sec)+new_sec)%60)
                        }

                    let new_mili=(Number(mili)+1)%100
                    
                    setMili(new_mili);
                    
                }
            }, 10);
          },[flag,mili]);
        
        
        
    
    return (
        <div className="watch">
            
            <div className="time">
                <h1>{DoubleDigit(hour)} :</h1>
                <h1>{DoubleDigit(min)} :</h1>
                <h1>{DoubleDigit(sec)} :</h1>
                <h1>{DoubleDigit(mili)}</h1>
            </div>
            
            <div className="btn">
            
                <button disabled={(flag==2)} onClick={()=>
                {   //console.log(flag)
                    setFlag(2)
                    //console.log(flag)
                }}>Start</button>
                <button disabled={(flag==1 || flag==3)} onClick={()=>
                {
                    console.log("hi")
                    setFlag(3)
                }}> Pause</button>
                <button disabled={(flag==2 || flag==1)} onClick={()=>
                {
                    setFlag(1);
                    setMili(0);
                    setHour(0);
                    setMin(0);
                    setSec(0);
                    setLap([] )
                    
                }}>Reset</button>
                <Lap flag={flag} lap={lap} setLap ={setLap} time={[
                    DoubleDigit(hour),DoubleDigit(min),
                    DoubleDigit(sec),DoubleDigit(mili)]} ></Lap>
                
            </div> 
            <div className="laps">
            <LapList lap={lap}></LapList>
            </div>
        </div> 
     );
}
 
export default Watch;