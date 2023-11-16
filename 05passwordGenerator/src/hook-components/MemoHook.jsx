import { useMemo } from "react";
import { useState } from "react";

function MemoHook() {
  const[add,setAdd] = useState(1)
  const[minus,setMinus] = useState(100)
  // function multiplication(){
  //   console.log("multiply function is rendering!")
  //         return add*10;
  // }

  const multiply = useMemo(function multiplication(){
    console.log("multiply function is rendering!")
    return add*10
  },[add])
  return (
  
    <>
      <div>
        <h1>React Router</h1>

        <h1>{add}</h1>
       
       <h2>After multiplication value is:{multiply}</h2> 
        <br />
        <button onClick={()=>setAdd(add+1)} className="bg-slate-800 text-white pl-3 pr-3 ">ADD</button>
        <br />
        {minus}
        <button onClick={()=>setMinus(minus-1)} className="bg-slate-800 text-white pl-3 pr-3 ">Subtract</button>
      </div>
    </>
  );
}

export default MemoHook;
