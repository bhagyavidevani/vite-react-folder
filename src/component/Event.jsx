import React, { useState } from 'react'

export default function Event() {
  const [list,setList]=useState(false)
  const handelClick=()=>{
    setList(!list)
  }
  return (
    <div>
      <botton onClick={handelClick}>chnage here</botton>
      <h1 style={{color:list?"red":"blue"}}>hello , here is Bhagyavi</h1>
      {list?
        <div>
          <p>i am front end developer</p>
        </div>
      :""}
    </div>
  )
}
