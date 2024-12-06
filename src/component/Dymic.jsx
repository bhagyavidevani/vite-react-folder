import { useRef } from "react";


const Dymic=({list})=>{
  const test=useRef()
  const test1=useRef()
  const handelClick=()=>{
    test.current.style.color="red"
    test1.current.style.color="blue"
    console.log(test.current)
  }
   return(
    <div>
       <h2 ref={test}>Dynmic List component</h2>
       <h2 ref={test1}>Hello....</h2>
       <button onClick={handelClick}>Give Ref</button>
       {
        list.map((val, index)=>(
            <li key={index}>{val}</li>
        ))
       }
    </div>
   )
}
export default Dymic;