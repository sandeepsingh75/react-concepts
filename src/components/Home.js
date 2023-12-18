import React, { useEffect, useState } from'react';

const Home =(props)=>{
    const [count, setCount] = useState(0);
    
    
    const add=()=>{
        setCount(count+1)
    }
    const sub=()=>{
        setCount(count-1)
    }
    return(
        <div>
        <h3>Home component</h3>
        <p>Name: {props.name}</p>
        <p> Count : {count} </p>
        <button onClick={()=>add()} >increment</button>
        <button onClick={()=>sub()}>decrement</button>
        
        </div>
    )
}

export default Home;