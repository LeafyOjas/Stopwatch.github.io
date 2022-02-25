import { useEffect } from "react";
const Start = (props) => {

    function Begin()

    {   
        useEffect(() => {
            setTimeout(() => {
                props.setCount((count)=>count+1)
            }, 1000);
          }, []);

        
    
      
    
        
        
    }

    return ( <button onClick={Begin}>Start</button> );
}
 
export default Start;