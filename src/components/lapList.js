
const LapList = (props) => {
    return ( <div>
        {  

           props.lap.map((elem)=>(
               <li className="Laplist">{elem[0]}-{elem[1]}-{elem[2]}-{elem[3]}</li>
           ))
    
            
        }
        
    </div> );
}
 
export default LapList;