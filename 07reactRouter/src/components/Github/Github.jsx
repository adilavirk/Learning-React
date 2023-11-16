import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
 
const Github = () => {

    // loader hook

    const data = useLoaderData();
    // const[data,setData] = useState([]);

    // useEffect(()=>{
    //         fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(res=>res.json()).then(data=>{
    //             console.log(data)
    //             setData(data);
    //         })

    //     },[])
  return (
   <>
   <section >
   <div className='bg-gray-700 text-white text-4xl p-4 m-9 text-center'>Github Followers:{data.followers}
    <img   src={data.avatar_url} alt="github image" height={300} width={300}/>
    </div>
   </section>
   </>
  )
}

export default Github
// Loader method
export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();

}

