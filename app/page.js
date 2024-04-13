'use client'
import { useState, useEffect } from 'react'
import Loading from '@/components/loading';
console.log(Loading)
export default function Home() {

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log(data)
      })
  }, [])
  if (isLoading) return <Loading/>
  if (!data) return <p>No profile data</p>
  return (
    <main >
{data.map((e)=>{
   return(
   <div className="usercard">
  <h3 className="name">{e.name}</h3>
  <p className="mail">{e.email}</p> 
  <p>{e.website}</p>
  <p>{e.phone}</p>

</div>
   )
})}
    </main>
  );
}