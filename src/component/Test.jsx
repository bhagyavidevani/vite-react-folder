import { useState ,useEffect} from "react";

export default function test({name}) { 
 //let count=10
 const[count, setCount]=useState(1)
 function handelClick(){
   //count=count+1;
   setCount(count+1)
   console.log(count)
 }
// //  useEffect(()=>{
// //    console.log("every time run")
// //  },[]);
//  useEffect(()=>{
//   console.log("update time run")
// },[count]);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{count}</h2>
      <button onClick={handelClick}>increment</button>
    </div>
  )
}
// kai lakhi sakho tme aya