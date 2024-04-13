'use client'
import { useState, useEffect } from 'react'
import Loading from '@/components/loading';

export default function Home() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://randomuser.me/api?results=50')
      .then((res) => res.json())
      .then((data) => {
        setData(data.results)
        setLoading(false)
        
      })
  }, [])

  if (isLoading) return <Loading />
  if (!data || data.length === 0) return <p>No profile data</p>

  return (
    <main>
      {data.map((user, index) => (
        <div className="usercard" key={index}>
          <h3 className="name">{user.name.first} {user.name.last}</h3>
          <p className="mail">{user.email}</p>
          <p>Gender: {user.gender}</p>
          <p>Age: {user.dob.age}</p>
          {/* Add more properties here as needed */}
        </div>
      ))}
    </main>
  );
}
