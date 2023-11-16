import React, { useState } from 'react'
import ChildA from './ChildA'

const MemoHook2 = () => {
    const[add,setAdd] = useState(1)
  return (
  <>
    <h1>React Router</h1>
     <h1>{add}</h1>
     <button onClick={()=>setAdd(add+1)} className="bg-slate-800 text-white pl-3 pr-3 ">ADD</button>

     <ChildA name={"Adila Virk"}/>
</>
  )
}

export default MemoHook2