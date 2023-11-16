import {React , memo} from "react"


function ChildA({name}){
 
    console.log("Child components rendering!!")
    
    return(
    <h1>Hello {name}</h1>
    )
}
export default memo(ChildA)