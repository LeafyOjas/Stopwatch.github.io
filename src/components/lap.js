const Lap = (props) => {
    function f()
    {
        props.setLap([...(props.lap),props.time])
       
    }
    return ( <button disabled={(props.flag==1)} onClick={f}>Lap</button> );
}
 
export default Lap;