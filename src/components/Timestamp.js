import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Timestamp = () => {
  const location = useLocation();
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000)

    return function cleanup() {
      clearInterval(timer)
    }
    });

    let days = date.toLocaleDateString();

  return (
    <>
    {location.pathname === '/' && (
      <section className='timestamp'>
          <article>Current Time : {days} {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</article>
      </section>
    )}
    </>
  )
}

export default Timestamp