import React,{useState} from 'react'

const Counter = () =>{
  const[count,setCount]=useState(0);
  const increase = () => setCount(count+1)
  const decrease = () => setCount(count-1)
  const erase = () => setCount(0)
  return(
    <>
    <h1>Counter App</h1>
    <h2>Count : {count}</h2>
    <button onClick={decrease}>Decrease</button>
    <button onClick={increase}>Increase</button>
    <button onClick={erase}>Reset</button>
    </>
  )
}
export default Counter ;