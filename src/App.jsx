 //import { useState } from 'react'
 //import reactLogo from './assets/react.svg'
//  import Test from './component/test'
//  import Event from './component/Event'
import { useState } from 'react'
import './App.css'
import List from './component/List'
import Dymic from './component/Dymic'

function App() {
  const [list, setlist]=useState(["Home", "profile" ,"About", "contact", "Service"])
  
  return (
    <div>
      {/* <Test name='Counter'/> */}
      {/* <Event/> */}
      <List list={list}/>
      <Dymic list={list}/>
    </div>
  )
}

export default App
